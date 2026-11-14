import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { deflateRawSync } from "node:zlib";
import { ZipReader, crc32 } from "../src/zip.mjs";
import { findUrls, elfRegions } from "../scripts/extract-artifacts.mjs";

function fixture(
  t,
  {
    payload = Buffer.from(
      "https://api.bilibili.com/x/web-interface/view?token=SECRET#ignored",
    ),
    method = 8,
    checksum,
    flags = 0,
  } = {},
) {
  const name = Buffer.from("assets/test.js"),
    encoded = method === 8 ? deflateRawSync(payload) : payload;
  const crc = checksum ?? (crc32(payload) ^ 0xffffffff) >>> 0;
  const local = Buffer.alloc(30 + name.length);
  local.writeUInt32LE(0x04034b50);
  local.writeUInt16LE(flags, 6);
  local.writeUInt16LE(method, 8);
  local.writeUInt32LE(crc, 14);
  local.writeUInt32LE(encoded.length, 18);
  local.writeUInt32LE(payload.length, 22);
  local.writeUInt16LE(name.length, 26);
  name.copy(local, 30);
  const central = Buffer.alloc(46 + name.length);
  central.writeUInt32LE(0x02014b50);
  central.writeUInt16LE(flags, 8);
  central.writeUInt16LE(method, 10);
  central.writeUInt32LE(crc, 16);
  central.writeUInt32LE(encoded.length, 20);
  central.writeUInt32LE(payload.length, 24);
  central.writeUInt16LE(name.length, 28);
  name.copy(central, 46);
  const trailer = Buffer.alloc(22);
  trailer.writeUInt32LE(0x06054b50);
  trailer.writeUInt16LE(1, 8);
  trailer.writeUInt16LE(1, 10);
  trailer.writeUInt32LE(central.length, 12);
  trailer.writeUInt32LE(local.length + encoded.length, 16);
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "bili-zip-"));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  const file = path.join(dir, "input.apk");
  fs.writeFileSync(file, Buffer.concat([local, encoded, central, trailer]));
  return { file, payload, localLength: local.length };
}
test("stored and deflated members retain exact uncompressed hashes and bytes", async (t) => {
  for (const method of [0, 8]) {
    const f = fixture(t, { method }),
      zip = new ZipReader(f.file);
    try {
      assert.equal(zip.entries[0].name, "assets/test.js");
      assert.deepEqual(zip.readEntry(zip.entries[0]), f.payload);
      const hash = await zip.hashEntry(zip.entries[0]);
      assert.match(hash.sha256, /^[0-9a-f]{64}$/);
      assert.equal(hash.dataOffset, f.localLength);
    } finally {
      zip.close();
    }
  }
});
test("CRC mismatches fail for buffered and streaming reads", async (t) => {
  const f = fixture(t, { checksum: 0 }),
    zip = new ZipReader(f.file);
  try {
    assert.throws(() => zip.readEntry(zip.entries[0]), /CRC mismatch/);
    await assert.rejects(zip.hashEntry(zip.entries[0]), /CRC mismatch/);
  } finally {
    zip.close();
  }
});
test("read budget rejects before inflation and encrypted members fail explicitly", (t) => {
  const f = fixture(t),
    zip = new ZipReader(f.file);
  try {
    assert.throws(() => zip.readEntry(zip.entries[0], 2), /budget/);
  } finally {
    zip.close();
  }
  const encrypted = fixture(t, { flags: 1 }),
    e = new ZipReader(encrypted.file);
  try {
    assert.throws(() => e.readEntry(e.entries[0]), /Encrypted/);
  } finally {
    e.close();
  }
});
test("truncated central directory and invalid local ranges fail closed", (t) => {
  const f = fixture(t);
  const b = fs.readFileSync(f.file);
  b.writeUInt32LE(0xfffffff0, b.length - 6);
  fs.writeFileSync(f.file, b);
  assert.throws(() => new ZipReader(f.file), /overlaps/);
  const g = fixture(t),
    zip = new ZipReader(g.file);
  try {
    zip.entries[0].localOffset = fs.statSync(g.file).size;
    assert.throws(() => zip.readEntry(zip.entries[0]), /outside file/);
  } finally {
    zip.close();
  }
});
test("URL scan excludes query values, unrelated hosts and preserves byte offsets", () => {
  const prefix = Buffer.from([0xc3, 0xa9, 0]);
  const bytes = Buffer.concat([
    prefix,
    Buffer.from(
      "https://api.bilibili.com/x/v2/reply?access_key=SECRET https://api.evil.example/x https://static.bilibili.com/image",
    ),
  ]);
  const matches = findUrls(bytes, 100, ".rodata");
  assert.equal(matches.length, 1);
  assert.equal(matches[0].value, "https://api.bilibili.com/x/v2/reply");
  assert.equal(matches[0].member_byte_offset, 103);
  assert.equal(matches[0].section, ".rodata");
  assert.ok(!JSON.stringify(matches).includes("SECRET"));
});
test("unsupported ELF layout is explicit rather than a complete empty native scan", () => {
  assert.throws(() => elfRegions(Buffer.alloc(64)), /Only ELF64/);
  const b = Buffer.alloc(64);
  b.write("ELF", 1);
  b[0] = 127;
  b[4] = 2;
  b[5] = 1;
  assert.throws(() => elfRegions(b), /section directory/);
});
