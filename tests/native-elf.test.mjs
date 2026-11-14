import { test } from "node:test";
import assert from "node:assert/strict";
import { packedRela, readElf } from "../src/native-elf.mjs";
function sleb(n) {
  n = BigInt(n);
  const out = [];
  while (true) {
    let b = Number(n & 127n);
    n >>= 7n;
    const last = (n === 0n && !(b & 64)) || (n === -1n && b & 64);
    out.push(last ? b : b | 128);
    if (last) return Buffer.from(out);
  }
}
const packed = (values) =>
  Buffer.concat([Buffer.from("APS2"), ...values.map(sleb)]);
test("APS2 grouped offset/info and per-entry addend deltas preserve pointer targets", () => {
  const r = packedRela(packed([2, 0x378, 2, 11, 8, 1027, 0x300, 0x20]));
  assert.deepEqual(r, [
    { offset: 0x380n, info: 1027n, addend: 0x300n },
    { offset: 0x388n, info: 1027n, addend: 0x320n },
  ]);
});
test("APS2 grouped addend applies once to the group and invalid streams fail", () => {
  assert.deepEqual(
    packedRela(packed([2, 0, 2, 15, 8, 1027, 256])).map((r) => r.addend),
    [256n, 256n],
  );
  for (const bytes of [
    Buffer.from("bad"),
    packed([2, 0, 3, 0]),
    Buffer.concat([packed([0, 0]), Buffer.from([0])]),
    packed([1, 0, 1, 32]),
  ])
    assert.throws(() => packedRela(bytes));
  assert.throws(() => packedRela(packed([2, 0]), 1), /budget/);
});
function fixture() {
  const b = Buffer.alloc(2048);
  b.write("ELF", 1);
  b[0] = 127;
  b[4] = 2;
  b[5] = 1;
  b.writeUInt16LE(183, 18);
  b.writeBigUInt64LE(64n, 32);
  b.writeBigUInt64LE(1536n, 40);
  b.writeUInt16LE(56, 54);
  b.writeUInt16LE(2, 56);
  b.writeUInt16LE(64, 58);
  b.writeUInt16LE(5, 60);
  b.writeUInt16LE(4, 62);
  function segment(p, offset, size, flags) {
    b.writeUInt32LE(1, p);
    b.writeUInt32LE(flags, p + 4);
    b.writeBigUInt64LE(BigInt(offset), p + 8);
    b.writeBigUInt64LE(BigInt(offset), p + 16);
    b.writeBigUInt64LE(BigInt(size), p + 32);
    b.writeBigUInt64LE(BigInt(size), p + 40);
  }
  segment(64, 512, 64, 5);
  segment(120, 768, 256, 6);
  const names = "\0.text\0.rodata\0.data\0.shstrtab\0";
  b.write(names, 1280);
  function section(i, name, type, flags, offset, size) {
    const p = 1536 + i * 64;
    b.writeUInt32LE(names.indexOf(name), p);
    b.writeUInt32LE(type, p + 4);
    b.writeBigUInt64LE(BigInt(flags), p + 8);
    b.writeBigUInt64LE(BigInt(offset), p + 16);
    b.writeBigUInt64LE(BigInt(offset), p + 24);
    b.writeBigUInt64LE(BigInt(size), p + 32);
  }
  section(1, ".text", 1, 6, 512, 64);
  section(2, ".rodata", 1, 2, 768, 128);
  section(3, ".data", 1, 3, 896, 24);
  section(4, ".shstrtab", 3, 0, 1280, names.length);
  b.write("nativeSend\0", 768);
  b.write("(Ljava/lang/String;)V\0", 800);
  b.writeBigUInt64LE(768n, 896);
  b.writeBigUInt64LE(800n, 904);
  b.writeBigUInt64LE(512n, 912);
  return b;
}
test("JNI layout candidate requires bounded names/signatures and executable pointer", () => {
  const b = fixture(),
    r = readElf(b);
  assert.equal(r.registrationCandidates.length, 1);
  const c = r.registrationCandidates[0];
  assert.equal(c.method_name, "nativeSend");
  assert.equal(c.method_descriptor, "(Ljava/lang/String;)V");
  assert.equal(c.table_file_offset, 896);
  assert.equal(c.function_file_offset, 512);
  assert.equal(c.status, "jni-table-layout-candidate");
  b.writeBigUInt64LE(800n, 912);
  assert.equal(readElf(b).registrationCandidates.length, 0);
});
test("ELF parser rejects unsupported machine, malformed directories and unsafe offsets", () => {
  const b = fixture();
  b.writeUInt16LE(62, 18);
  assert.throws(() => readElf(b), /AArch64/);
  assert.throws(() => readElf(fixture().subarray(0, 1700)), /outside file/);
  const unsafe = fixture();
  unsafe.writeBigUInt64LE(1n << 63n, 40);
  assert.throws(() => readElf(unsafe), /Unsafe ELF/);
});
test("standard and Android RELR pointers preserve structural JNI candidates", () => {
  for (const type of [19, 0x6fffff00]) {
    const b = fixture(),
      names = "\0.text\0.rodata\0.data\0.shstrtab\0.relr.dyn\0";
    b.write(names, 1280);
    b.writeBigUInt64LE(BigInt(names.length), 1536 + 4 * 64 + 32);
    b.writeUInt16LE(6, 60);
    const p = 1536 + 5 * 64;
    b.writeUInt32LE(names.indexOf(".relr.dyn"), p);
    b.writeUInt32LE(type, p + 4);
    b.writeBigUInt64LE(1360n, p + 16);
    b.writeBigUInt64LE(1360n, p + 24);
    b.writeBigUInt64LE(16n, p + 32);
    b.writeBigUInt64LE(896n, 1360);
    b.writeBigUInt64LE(3n, 1368);
    const e = readElf(b);
    assert.equal(e.relocation_count, 2);
    assert.equal(e.registrationCandidates.length, 1);
    assert.equal(e.registrationCandidates[0].relocation_sources.length, 2);
  }
});
test("RELRO padding names are not interpreted as relocation encodings", () => {
  const b = fixture(),
    names = "\0.text\0.rodata\0.relro_padding\0.shstrtab\0";
  b.write(names, 1280);
  b.writeUInt32LE(names.indexOf(".relro_padding"), 1536 + 3 * 64);
  b.writeUInt32LE(names.indexOf(".shstrtab"), 1536 + 4 * 64);
  b.writeBigUInt64LE(BigInt(names.length), 1536 + 4 * 64 + 32);
  assert.deepEqual(readElf(b).unsupported, []);
});
