import test from "node:test";
import assert from "node:assert/strict";
import { readDex } from "../src/dex.mjs";
function header(size = 112) {
  const b = Buffer.alloc(size);
  b.write("dex\n039\0");
  b.writeUInt32LE(size, 32);
  b.writeUInt32LE(112, 36);
  b.writeUInt32LE(0x12345678, 40);
  return b;
}
function stringsFixture(items) {
  const length =
      112 +
      items.length * 4 +
      items.reduce((n, item) => n + 1 + item.bytes.length + 1, 0),
    b = header(length);
  b.writeUInt32LE(items.length, 56);
  b.writeUInt32LE(112, 60);
  let p = 112 + items.length * 4;
  for (let i = 0; i < items.length; i++) {
    b.writeUInt32LE(p, 112 + i * 4);
    b[p++] = items[i].units;
    items[i].bytes.copy(b, p);
    p += items[i].bytes.length;
    b[p++] = 0;
  }
  return b;
}
test("reads empty metadata and preserves exact DEX identity", () => {
  const d = readDex(header(), "empty.dex");
  assert.equal(d.name, "empty.dex");
  assert.deepEqual(d.classes, []);
  assert.deepEqual(d.methods, []);
});
test("decodes modified UTF-8 null and surrogate pairs by UTF-16 length", () => {
  const b = stringsFixture([
    {
      units: 4,
      bytes: Buffer.from([65, 0xc0, 0x80, 0xed, 0xa0, 0xbd, 0xed, 0xb8, 0x80]),
    },
  ]);
  assert.equal(readDex(b).strings[0], "A\0😀");
});
test("rejects malformed MUTF-8 and declared length mismatches", () => {
  assert.throws(
    () =>
      readDex(stringsFixture([{ units: 1, bytes: Buffer.from([0xc1, 0x81]) }])),
    /overlong/,
  );
  assert.throws(
    () => readDex(stringsFixture([{ units: 2, bytes: Buffer.from("a") }])),
    /length mismatch/,
  );
});
test("rejects out-of-file tables rather than treating them as empty", () => {
  const b = header();
  b.writeUInt32LE(1, 88);
  b.writeUInt32LE(112, 92);
  assert.throws(() => readDex(b), /out-of-bounds/);
});
test("bounds ULEB128 and preserves 64-bit annotation integers without rounding", () => {
  const b = header(130),
    d = readDex(b);
  b.set([0xff, 0xff, 0xff, 0xff, 0x1f], 112);
  assert.throws(() => d.uleb({ p: 112 }), /overflow/);
  b[112] = 0xe6;
  b.fill(0xff, 113, 121);
  b[120] = 0x7f;
  assert.deepEqual(d.encodedValue({ p: 112 }), {
    kind: "long",
    decimal: "9223372036854775807",
  });
});
test("rejects excessive annotation nesting", () => {
  const b = header(250);
  for (let p = 112; p < 248; p += 2) {
    b[p] = 0x1c;
    b[p + 1] = 1;
  }
  assert.throws(() => readDex(b).encodedValue({ p: 112 }), /nesting budget/);
});
function metadataFixture() {
  const words = [
    "LExample;",
    "V",
    "fetch",
    "Lretrofit2/http/GET;",
    "value",
    "/x/view",
    "Ljava/lang/String;",
    "Lretrofit2/http/Query;",
    "aid",
    "VL",
  ];
  const typeStrings = [0, 1, 3, 6, 7];
  const b = header(2048);
  let p = 112;
  const alloc = (n) => {
    const at = p;
    p += n;
    return at;
  };
  const align = () => {
    p = (p + 3) & ~3;
  };
  const stringIds = alloc(words.length * 4),
    typeIds = alloc(typeStrings.length * 4),
    protos = alloc(12),
    methodIds = alloc(8),
    classDefs = alloc(32);
  for (let i = 0; i < words.length; i++) {
    b.writeUInt32LE(p, stringIds + i * 4);
    b[p++] = words[i].length;
    p += b.write(words[i], p);
    b[p++] = 0;
  }
  align();
  const params = alloc(6);
  b.writeUInt32LE(1, params);
  b.writeUInt16LE(3, params + 4);
  align();
  const routeAnnotation = alloc(6);
  b.set([1, 2, 1, 4, 0x17, 5], routeAnnotation);
  const queryAnnotation = alloc(6);
  b.set([1, 4, 1, 4, 0x17, 8], queryAnnotation);
  align();
  const routeSet = alloc(8);
  b.writeUInt32LE(1, routeSet);
  b.writeUInt32LE(routeAnnotation, routeSet + 4);
  const querySet = alloc(8);
  b.writeUInt32LE(1, querySet);
  b.writeUInt32LE(queryAnnotation, querySet + 4);
  const parameterSets = alloc(8);
  b.writeUInt32LE(1, parameterSets);
  b.writeUInt32LE(querySet, parameterSets + 4);
  const directory = alloc(32);
  b.writeUInt32LE(1, directory + 8);
  b.writeUInt32LE(1, directory + 12);
  b.writeUInt32LE(routeSet, directory + 20);
  b.writeUInt32LE(parameterSets, directory + 28);
  const classData = alloc(8);
  b.set([0, 0, 0, 1, 0, 0x81, 0x08, 0], classData);
  for (let i = 0; i < typeStrings.length; i++)
    b.writeUInt32LE(typeStrings[i], typeIds + i * 4);
  b.writeUInt32LE(9, protos);
  b.writeUInt32LE(1, protos + 4);
  b.writeUInt32LE(params, protos + 8);
  b.writeUInt32LE(2, methodIds + 4);
  b.writeUInt32LE(0x601, classDefs + 4);
  b.writeUInt32LE(0xffffffff, classDefs + 8);
  b.writeUInt32LE(0xffffffff, classDefs + 16);
  b.writeUInt32LE(directory, classDefs + 20);
  b.writeUInt32LE(classData, classDefs + 24);
  for (const [countAt, offsetAt, count, offset] of [
    [56, 60, words.length, stringIds],
    [64, 68, typeStrings.length, typeIds],
    [72, 76, 1, protos],
    [88, 92, 1, methodIds],
    [96, 100, 1, classDefs],
  ]) {
    b.writeUInt32LE(count, countAt);
    b.writeUInt32LE(offset, offsetAt);
  }
  const result = b.subarray(0, p);
  result.writeUInt32LE(p, 32);
  return result;
}
test("reads actual method definitions, method annotations and parameter annotations from binary metadata", () => {
  const d = readDex(metadataFixture());
  assert.equal(d.methods[0].descriptor, "(Ljava/lang/String;)V");
  const m = d.classes[0].definedMethods[0];
  assert.equal(m.methodIndex, 0);
  assert.equal(m.annotations[0].elements.value, "/x/view");
  assert.equal(m.parameterAnnotations[0][0].elements.value, "aid");
  assert.equal(m.parameterAnnotationCountMismatch, false);
});
test("rejects annotation owner indices outside the method table", () => {
  const b = metadataFixture(),
    classOffset = b.readUInt32LE(100),
    directory = b.readUInt32LE(classOffset + 20);
  b.writeUInt32LE(1, directory + 16);
  assert.throws(() => readDex(b), /invalid annotation owner index/);
});
