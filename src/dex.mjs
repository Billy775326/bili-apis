/** Bounded, format-aware DEX metadata reader. Does not execute bytecode. */
export function readDex(bytes, name = "DEX") {
  if (!Buffer.isBuffer(bytes))
    throw new TypeError("DEX input must be a Buffer");
  const fail = (message) => {
    throw new Error(`${name}: ${message}`);
  };
  const range = (offset, length) => {
    if (
      !Number.isSafeInteger(offset) ||
      !Number.isSafeInteger(length) ||
      offset < 0 ||
      length < 0 ||
      offset + length > bytes.length
    )
      fail("out-of-bounds read");
  };
  const u8 = (p) => {
    range(p, 1);
    return bytes[p];
  };
  const u16 = (p) => {
    range(p, 2);
    return bytes.readUInt16LE(p);
  };
  const u32 = (p) => {
    range(p, 4);
    return bytes.readUInt32LE(p);
  };
  range(0, 112);
  if (!/^dex\n0(?:35|37|38|39|40)\0$/.test(bytes.toString("ascii", 0, 8)))
    fail("unsupported DEX magic");
  if (u32(32) !== bytes.length || u32(36) !== 112 || u32(40) !== 0x12345678)
    fail("invalid DEX header");
  const table = (countAt, offsetAt, width) => {
    const count = u32(countAt),
      offset = u32(offsetAt);
    range(offset, count * width);
    if (count && offset < 112) fail("table overlaps header");
    return { count, offset };
  };
  const get = (array, index, kind) => {
    if (!Number.isInteger(index) || index < 0 || index >= array.length)
      fail(`invalid ${kind} index ${index}`);
    return array[index];
  };
  function uleb(cursor) {
    let value = 0;
    for (let i = 0; i < 5; i++) {
      const x = u8(cursor.p++);
      if (i === 4 && x & 0xf0) fail("ULEB128 overflow");
      value += (x & 127) * 2 ** (i * 7);
      if (!(x & 128)) return value;
    }
    fail("unterminated ULEB128");
  }
  function readString(offset) {
    const cursor = { p: offset },
      declared = uleb(cursor),
      units = [];
    while (true) {
      const a = u8(cursor.p++);
      if (a === 0) break;
      let unit;
      if (a < 128) unit = a;
      else if ((a & 0xe0) === 0xc0) {
        const b = u8(cursor.p++);
        if ((b & 0xc0) !== 0x80) fail("invalid MUTF-8 continuation");
        unit = ((a & 31) << 6) | (b & 63);
        if (unit < 128 && !(a === 0xc0 && b === 0x80)) fail("overlong MUTF-8");
      } else if ((a & 0xf0) === 0xe0) {
        const b = u8(cursor.p++),
          c = u8(cursor.p++);
        if ((b & 0xc0) !== 128 || (c & 0xc0) !== 128)
          fail("invalid MUTF-8 continuation");
        unit = ((a & 15) << 12) | ((b & 63) << 6) | (c & 63);
        if (unit < 2048) fail("overlong MUTF-8");
      } else fail("invalid MUTF-8 leading byte");
      units.push(unit);
      if (units.length > declared) fail("MUTF-8 length mismatch");
    }
    if (units.length !== declared) fail("MUTF-8 length mismatch");
    let result = "";
    for (let i = 0; i < units.length; i += 8192)
      result += String.fromCharCode(...units.slice(i, i + 8192));
    return result;
  }
  const stringTable = table(56, 60, 4),
    strings = Array.from({ length: stringTable.count }, (_, i) =>
      readString(u32(stringTable.offset + i * 4)),
    );
  const typeTable = table(64, 68, 4),
    types = Array.from({ length: typeTable.count }, (_, i) =>
      get(strings, u32(typeTable.offset + i * 4), "string"),
    );
  function typeList(offset) {
    if (!offset) return [];
    const count = u32(offset);
    range(offset + 4, count * 2);
    return Array.from({ length: count }, (_, i) =>
      get(types, u16(offset + 4 + i * 2), "type"),
    );
  }
  const protoTable = table(72, 76, 12),
    protos = Array.from({ length: protoTable.count }, (_, i) => {
      const p = protoTable.offset + i * 12;
      get(strings, u32(p), "shorty");
      const returnType = get(types, u32(p + 4), "type"),
        parameters = typeList(u32(p + 8));
      return {
        index: i,
        returnType,
        parameters,
        descriptor: `(${parameters.join("")})${returnType}`,
      };
    });
  const fieldTable = table(80, 84, 8),
    fields = Array.from({ length: fieldTable.count }, (_, i) => {
      const p = fieldTable.offset + i * 8;
      return {
        index: i,
        owner: get(types, u16(p), "type"),
        type: get(types, u16(p + 2), "type"),
        name: get(strings, u32(p + 4), "string"),
      };
    });
  const methodTable = table(88, 92, 8),
    methods = Array.from({ length: methodTable.count }, (_, i) => {
      const p = methodTable.offset + i * 8,
        proto = get(protos, u16(p + 2), "proto");
      return {
        index: i,
        owner: get(types, u16(p), "type"),
        name: get(strings, u32(p + 4), "string"),
        descriptor: proto.descriptor,
        parameters: proto.parameters,
        returnType: proto.returnType,
      };
    });
  const MAX_ANNOTATION_DEPTH = 64;
  function encodedValue(cursor, depth = 0) {
    if (depth > MAX_ANNOTATION_DEPTH)
      fail("annotation nesting budget exceeded");
    const header = u8(cursor.p++),
      kind = header & 31,
      arg = header >> 5,
      width = arg + 1;
    if (kind === 0x1c) {
      if (arg) fail("invalid array argument");
      return encodedArray(cursor, depth + 1);
    }
    if (kind === 0x1d) {
      if (arg) fail("invalid annotation argument");
      return annotation(cursor, depth + 1);
    }
    if (kind === 0x1e) {
      if (arg) fail("invalid null argument");
      return null;
    }
    if (kind === 0x1f) {
      if (arg > 1) fail("invalid boolean argument");
      return Boolean(arg);
    }
    const maxWidths = {
      0: 1,
      2: 2,
      3: 2,
      4: 4,
      6: 8,
      0x10: 4,
      0x11: 8,
      0x15: 4,
      0x16: 4,
      0x17: 4,
      0x18: 4,
      0x19: 4,
      0x1a: 4,
      0x1b: 4,
    };
    if (!(kind in maxWidths) || width > maxWidths[kind])
      fail("invalid encoded value");
    range(cursor.p, width);
    const data = bytes.subarray(cursor.p, cursor.p + width);
    cursor.p += width;
    let value = 0n;
    for (let i = 0; i < width; i++) value |= BigInt(data[i]) << BigInt(i * 8);
    if (kind === 0x17) return get(strings, Number(value), "string");
    if (kind === 0x18) return get(types, Number(value), "type");
    if (kind === 0x19 || kind === 0x1b)
      return {
        kind: kind === 0x1b ? "enum" : "field",
        ...get(fields, Number(value), "field"),
      };
    if (kind === 0x1a)
      return { kind: "method", ...get(methods, Number(value), "method") };
    if (kind === 0x15)
      return { kind: "method-type", ...get(protos, Number(value), "proto") };
    if (kind === 0x16) return { kind: "method-handle", index: Number(value) };
    if (kind === 0x10 || kind === 0x11) {
      const dataSize = kind === 0x10 ? 4 : 8,
        b = Buffer.alloc(dataSize);
      data.copy(b, dataSize - width);
      return kind === 0x10 ? b.readFloatLE(0) : b.readDoubleLE(0);
    }
    if (kind !== 3 && value & (1n << BigInt(width * 8 - 1)))
      value -= 1n << BigInt(width * 8);
    return kind === 6
      ? { kind: "long", decimal: value.toString() }
      : Number(value);
  }
  function encodedArray(cursor, depth = 0) {
    const count = uleb(cursor);
    if (count > bytes.length - cursor.p)
      fail("impossible encoded array length");
    return Array.from({ length: count }, () => encodedValue(cursor, depth + 1));
  }
  function annotation(cursor, depth = 0) {
    if (depth > MAX_ANNOTATION_DEPTH)
      fail("annotation nesting budget exceeded");
    const type = get(types, uleb(cursor), "annotation type"),
      count = uleb(cursor),
      elements = {};
    if (count > (bytes.length - cursor.p) / 2)
      fail("impossible annotation count");
    for (let i = 0; i < count; i++) {
      const key = get(strings, uleb(cursor), "annotation name");
      if (Object.hasOwn(elements, key)) fail("duplicate annotation name");
      Object.defineProperty(elements, key, {
        value: encodedValue(cursor, depth + 1),
        enumerable: true,
      });
    }
    return { type, elements };
  }
  function annotationSet(offset) {
    if (!offset) return [];
    const count = u32(offset);
    range(offset + 4, count * 4);
    return Array.from({ length: count }, (_, i) => {
      const p = u32(offset + 4 + i * 4);
      const visibility = u8(p);
      if (visibility > 2) fail("invalid annotation visibility");
      return { visibility, ...annotation({ p: p + 1 }) };
    });
  }
  function parameterAnnotationSets(offset) {
    if (!offset) return [];
    const count = u32(offset);
    range(offset + 4, count * 4);
    return Array.from({ length: count }, (_, i) =>
      annotationSet(u32(offset + 4 + i * 4)),
    );
  }
  const classTable = table(96, 100, 32),
    classes = Array.from({ length: classTable.count }, (_, index) => {
      const p = classTable.offset + index * 32,
        descriptor = get(types, u32(p), "class"),
        superIndex = u32(p + 8),
        directory = u32(p + 20);
      const cls = {
        index,
        descriptor,
        accessFlags: u32(p + 4),
        superType:
          superIndex === 0xffffffff
            ? null
            : get(types, superIndex, "supertype"),
        interfaces: typeList(u32(p + 12)),
        annotations: [],
        definedFields: [],
        definedMethods: [],
        staticValues: [],
      };
      const fieldAnnotations = new Map(),
        methodAnnotations = new Map(),
        parameterAnnotations = new Map();
      if (directory) {
        range(directory, 16);
        cls.annotations = annotationSet(u32(directory));
        let at = directory + 16;
        for (const [n, target, read] of [
          [u32(directory + 4), fieldAnnotations, annotationSet],
          [u32(directory + 8), methodAnnotations, annotationSet],
          [u32(directory + 12), parameterAnnotations, parameterAnnotationSets],
        ]) {
          range(at, n * 8);
          let previous = -1;
          for (let j = 0; j < n; j++) {
            const id = u32(at),
              off = u32(at + 4);
            if (id <= previous) fail("unsorted or duplicate annotation owner");
            previous = id;
            const member = get(
              target === fieldAnnotations ? fields : methods,
              id,
              "annotation owner",
            );
            if (member.owner !== descriptor) fail("annotation owner mismatch");
            target.set(id, read(off));
            at += 8;
          }
        }
      }
      const classData = u32(p + 24);
      if (classData) {
        const c = { p: classData },
          counts = Array.from({ length: 4 }, () => uleb(c));
        if (counts.reduce((a, b) => a + b, 0) > (bytes.length - c.p) / 2)
          fail("impossible class data count");
        for (let group = 0; group < 4; group++) {
          let id = 0;
          for (let j = 0; j < counts[group]; j++) {
            const delta = uleb(c);
            if (j && delta === 0) fail("duplicate class data index");
            id += delta;
            const accessFlags = uleb(c);
            if (group < 2) {
              const field = get(fields, id, "field");
              if (field.owner !== descriptor) fail("field owner mismatch");
              cls.definedFields.push({
                fieldIndex: id,
                accessFlags,
                isStatic: group === 0,
                annotations: fieldAnnotations.get(id) ?? [],
              });
            } else {
              const method = get(methods, id, "method"),
                codeOffset = uleb(c);
              if (method.owner !== descriptor) fail("method owner mismatch");
              if (codeOffset) range(codeOffset, 16 + u32(codeOffset + 12) * 2);
              const params = parameterAnnotations.get(id) ?? [];
              cls.definedMethods.push({
                methodIndex: id,
                accessFlags,
                codeOffset,
                annotations: methodAnnotations.get(id) ?? [],
                parameterAnnotations: params,
                parameterAnnotationCountMismatch:
                  params.length > 0 &&
                  params.length !== method.parameters.length,
              });
            }
          }
        }
      }
      const valuesOffset = u32(p + 28);
      if (valuesOffset) {
        cls.staticValues = encodedArray({ p: valuesOffset });
        if (
          cls.staticValues.length >
          cls.definedFields.filter((f) => f.isStatic).length
        )
          fail("too many static values");
      }
      return cls;
    });
  return {
    name,
    bytes,
    strings,
    types,
    protos,
    fields,
    methods,
    classes,
    uleb,
    encodedValue,
    annotationSet,
    u8,
    u16,
    u32,
  };
}
