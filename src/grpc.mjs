export function instructions(bytes, codeOffset, onInstruction) {
  if (!codeOffset) return [];
  const count = bytes.readUInt32LE(codeOffset + 12),
    start = codeOffset + 16;
  if (start + count * 2 > bytes.length)
    throw Error("Code item extends past DEX");
  const events = [];
  for (let pc = 0; pc < count; ) {
    const p = start + pc * 2,
      word = bytes.readUInt16LE(p),
      op = word & 255;
    let width = 1;
    if (op === 0 && word !== 0) {
      const n = bytes.readUInt16LE(p + 2);
      if (word === 0x100) width = 4 + n * 2;
      else if (word === 0x200) width = 2 + n * 4;
      else if (word === 0x300)
        width = 4 + Math.ceil((n * bytes.readUInt32LE(p + 4)) / 2);
      else throw Error("Unknown DEX payload");
    } else if (
      [
        2, 5, 8, 0x13, 0x15, 0x16, 0x19, 0x1a, 0x1c, 0x1f, 0x20, 0x22, 0x23,
        0x29, 0xfe, 0xff,
      ].includes(op) ||
      (op >= 0x2d && op <= 0x3d) ||
      (op >= 0x44 && op <= 0x6d) ||
      (op >= 0x90 && op <= 0xaf) ||
      (op >= 0xd0 && op <= 0xe2)
    )
      width = 2;
    else if (
      [
        3, 6, 9, 0x14, 0x17, 0x1b, 0x24, 0x25, 0x26, 0x2a, 0x2b, 0x2c, 0xfc,
        0xfd,
      ].includes(op) ||
      (op >= 0x6e && op <= 0x72) ||
      (op >= 0x74 && op <= 0x78)
    )
      width = 3;
    else if (op === 0x18) width = 5;
    else if (op === 0xfa || op === 0xfb) width = 4;
    else if (
      (op >= 0x3e && op <= 0x43) ||
      op === 0x73 ||
      op === 0x79 ||
      op === 0x7a ||
      (op >= 0xe3 && op <= 0xf9)
    )
      throw Error("Unsupported opcode " + op.toString(16));
    if (pc + width > count) throw Error("Truncated instruction");
    onInstruction?.({
      opcode: op,
      word,
      width,
      byte_offset: p,
      code_unit_offset: pc,
    });
    if (op === 0x1a || op === 0x1b)
      events.push({
        kind: "string",
        index:
          op === 0x1a ? bytes.readUInt16LE(p + 2) : bytes.readUInt32LE(p + 2),
        register: word >>> 8,
        code_unit_offset: pc,
      });
    if (op === 0x1c)
      events.push({
        kind: "class",
        index: bytes.readUInt16LE(p + 2),
        register: word >>> 8,
        code_unit_offset: pc,
      });
    if ((op >= 0x6e && op <= 0x72) || (op >= 0x74 && op <= 0x78))
      events.push({
        kind: "invoke",
        index: bytes.readUInt16LE(p + 2),
        arguments:
          op >= 0x74
            ? Array.from(
                { length: word >>> 8 },
                (_, i) => bytes.readUInt16LE(p + 4) + i,
              )
            : Array.from({ length: word >>> 12 }, (_, i) =>
                i === 4
                  ? (word >>> 8) & 15
                  : (bytes.readUInt16LE(p + 4) >>> (i * 4)) & 15,
              ),
        code_unit_offset: pc,
      });
    if (op === 0x14 || op === 0x13 || op === 0x12)
      events.push({
        kind: "integer",
        value:
          op === 0x14
            ? bytes.readInt32LE(p + 2)
            : op === 0x13
              ? bytes.readInt16LE(p + 2)
              : (word >> 12) & 8
                ? ((word >> 12) & 15) - 16
                : (word >> 12) & 15,
        code_unit_offset: pc,
      });
    pc += width;
  }
  return events;
}
export function decodeMessageInfo(text) {
  let p = 0;
  function next() {
    if (p >= text.length) throw Error("Truncated protobuf message info");
    let value = 0,
      shift = 0;
    for (let i = 0; i < 4; i++) {
      if (p >= text.length) throw Error("Truncated protobuf message info");
      const x = text.charCodeAt(p++);
      if (x < 0xd800) {
        const result = value + x * 2 ** shift;
        if (result > 0xffffffff)
          throw Error("Oversized protobuf message info integer");
        return result;
      }
      value += (x & 0x1fff) * 2 ** shift;
      shift += 13;
    }
    throw Error("Oversized protobuf message info integer");
  }
  const flags = next(),
    field_count = next();
  if (field_count === 0) {
    if (p !== text.length) throw Error("Trailing empty message info");
    return { flags, field_count, fields: [] };
  }
  if (field_count > text.length) throw Error("Impossible protobuf field count");
  const oneof_count = next(),
    has_bits_count = next(),
    min_field = next(),
    max_field = next(),
    entry_count = next(),
    map_count = next(),
    repeated_count = next(),
    check_initialized_count = next(),
    fields = [];
  for (let i = 0; i < field_count; i++) {
    const number = next(),
      type_and_flags = next(),
      type_id = type_and_flags & 255;
    if (number < 1 || number > 536870911 || type_id > 68)
      throw Error("Invalid protobuf field metadata");
    const field = { number, type_id, type_and_flags };
    if (type_id >= 51) field.oneof_index = next();
    else if (type_and_flags & 0x1000) field.presence_index = next();
    fields.push(field);
  }
  if (p !== text.length) throw Error("Trailing protobuf message info");
  return {
    flags,
    field_count,
    oneof_count,
    has_bits_count,
    min_field,
    max_field,
    entry_count,
    map_count,
    repeated_count,
    check_initialized_count,
    fields,
  };
}
