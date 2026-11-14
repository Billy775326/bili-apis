import { test } from "node:test";
import assert from "node:assert/strict";
import { instructions, decodeMessageInfo } from "../src/grpc.mjs";
function code(units) {
  const b = Buffer.alloc(16 + units.length * 2);
  b.writeUInt32LE(units.length, 12);
  units.forEach((u, i) => b.writeUInt16LE(u, 16 + i * 2));
  return b;
}
test("instruction decoding excludes payload words and keeps string register and invoke arguments", () => {
  const bytes = Buffer.concat([
    Buffer.alloc(4),
    code([0x021a, 7, 0x031a, 8, 0x2071, 9, 0x0032, 0x000e]),
  ]);
  const decoded = instructions(bytes, 4);
  assert.deepEqual(
    decoded
      .filter((x) => x.kind === "string")
      .map((x) => [x.index, x.register]),
    [
      [7, 2],
      [8, 3],
    ],
  );
  assert.deepEqual(decoded.find((x) => x.kind === "invoke").arguments, [2, 3]);
});
test("packed-switch payload values cannot become string instructions", () => {
  const b = Buffer.concat([
    Buffer.alloc(4),
    code([0x0100, 1, 0, 0, 0x001a, 0]),
  ]);
  assert.deepEqual(instructions(b, 4), []);
});
test("rejects truncated instructions and payloads instead of silently losing coverage", () => {
  assert.throws(
    () => instructions(Buffer.concat([Buffer.alloc(4), code([0x001b])]), 4),
    /Truncated/,
  );
  assert.throws(() =>
    instructions(Buffer.concat([Buffer.alloc(4), code([0x0100])]), 4),
  );
});
test("rejects unsupported quickened opcodes", () =>
  assert.throws(
    () => instructions(Buffer.concat([Buffer.alloc(4), code([0x00e3])]), 4),
    /Unsupported opcode/,
  ));
test("protobuf layout preserves field numbers, type IDs and presence/oneof metadata", () => {
  const text = String.fromCharCode(
    1,
    2,
    1,
    1,
    1,
    7,
    2,
    0,
    0,
    0,
    1,
    0x1004,
    0,
    7,
    60,
    0,
  );
  const info = decodeMessageInfo(text);
  assert.deepEqual(info.fields, [
    { number: 1, type_id: 4, type_and_flags: 0x1004, presence_index: 0 },
    { number: 7, type_id: 60, type_and_flags: 60, oneof_index: 0 },
  ]);
});
test("protobuf layouts reject truncation, extra data and impossible fields", () => {
  assert.throws(
    () => decodeMessageInfo(String.fromCharCode(0, 1)),
    /Truncated|Impossible/,
  );
  assert.throws(
    () => decodeMessageInfo(String.fromCharCode(0, 0, 1)),
    /Trailing/,
  );
  assert.throws(
    () => decodeMessageInfo(String.fromCharCode(0xd800)),
    /Truncated/,
  );
});
