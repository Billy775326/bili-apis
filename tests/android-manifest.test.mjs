import test from "node:test";
import assert from "node:assert/strict";
import {
  parseAndroidBinaryXml,
  manifestIdentity,
} from "../src/android-manifest.mjs";
const ANDROID = "http://schemas.android.com/apk/res/android",
  OTHER = "urn:fixture:other",
  NONE = 0xffffffff;
function length8(value) {
  assert.ok(value <= 32767);
  return value < 128
    ? Buffer.from([value])
    : Buffer.from([(value >> 8) | 128, value & 255]);
}
function length16(value) {
  const out = Buffer.alloc(value < 32768 ? 2 : 4);
  if (value < 32768) out.writeUInt16LE(value);
  else {
    out.writeUInt16LE((value >>> 16) | 32768);
    out.writeUInt16LE(value & 65535, 2);
  }
  return out;
}
function chunk(type, header, size) {
  const bytes = Buffer.alloc(size);
  bytes.writeUInt16LE(type);
  bytes.writeUInt16LE(header, 2);
  bytes.writeUInt32LE(size, 4);
  return bytes;
}
function element(name, attrs = [], namespace = null) {
  return { name, attrs, namespace };
}
function attribute(
  name,
  value,
  kind = typeof value === "string" ? 3 : typeof value === "boolean" ? 18 : 16,
  namespace = ANDROID,
  raw = null,
) {
  return { name, value, kind, namespace, raw };
}
function fixture({
  encoding = "utf8",
  extraStrings = [],
  rows = [
    element("manifest", [
      attribute("package", "example.fixture", 3, null),
      attribute("versionName", "1.2.3"),
      attribute("versionCode", 42),
    ]),
    element("uses-sdk", [
      attribute("minSdkVersion", 24),
      attribute("targetSdkVersion", 35),
    ]),
    element("application", [
      attribute("name", "example.fixture.App"),
      attribute("debuggable", false),
      attribute("usesCleartextTraffic", true),
    ]),
    element("activity"),
    element("service"),
    element("service"),
    element("provider"),
    element("receiver"),
    element("activity-alias"),
  ],
} = {}) {
  const namespaces = [
    ANDROID,
    ...new Set(
      rows
        .flatMap((row) => [row.namespace, ...row.attrs.map((a) => a.namespace)])
        .filter((ns) => ns && ns !== ANDROID),
    ),
  ];
  const strings = [],
    ids = new Map();
  const add = (value) => {
    if (value === null || value === undefined) return NONE;
    if (!ids.has(value)) {
      ids.set(value, strings.length);
      strings.push(value);
    }
    return ids.get(value);
  };
  add("android");
  add(ANDROID);
  namespaces.forEach((uri, i) => {
    add(uri);
    if (i) add("ns" + i);
  });
  for (const row of rows) {
    add(row.name);
    add(row.namespace);
    for (const a of row.attrs) {
      add(a.name);
      add(a.namespace);
      if (a.kind === 3) add(a.value);
      add(a.raw);
    }
  }
  for (const text of extraStrings) add(text);
  const encoded = strings.map((value) => {
    const bytes = Buffer.from(value, encoding === "utf8" ? "utf8" : "utf16le");
    return encoding === "utf8"
      ? Buffer.concat([
          length8(value.length),
          length8(bytes.length),
          bytes,
          Buffer.alloc(1),
        ])
      : Buffer.concat([length16(value.length), bytes, Buffer.alloc(2)]);
  });
  const dataStart = 28 + strings.length * 4,
    total = dataStart + encoded.reduce((n, b) => n + b.length, 0),
    pool = chunk(1, 28, Math.ceil(total / 4) * 4);
  pool.writeUInt32LE(strings.length, 8);
  pool.writeUInt32LE(encoding === "utf8" ? 256 : 0, 16);
  pool.writeUInt32LE(dataStart, 20);
  let pos = dataStart;
  const stringLocations = [];
  for (let i = 0; i < encoded.length; i++) {
    pool.writeUInt32LE(pos - dataStart, 28 + i * 4);
    stringLocations.push({
      text: strings[i],
      offset: pos,
      length: encoded[i].length,
    });
    encoded[i].copy(pool, pos);
    pos += encoded[i].length;
  }
  const ns = (type, uri = ANDROID, prefix = "android") => {
    const b = chunk(type, 16, 24);
    b.writeUInt32LE(NONE, 12);
    b.writeUInt32LE(ids.get(prefix), 16);
    b.writeUInt32LE(ids.get(uri), 20);
    return b;
  };
  const pieces = [
      pool,
      ...namespaces.map((uri, i) => ns(0x100, uri, i ? "ns" + i : "android")),
    ],
    locations = [];
  let rootEnd = null,
    relative = pool.length + 24 * namespaces.length;
  for (const [rowIndex, row] of rows.entries()) {
    const start = chunk(0x102, 16, 36 + row.attrs.length * 20);
    start.writeUInt32LE(NONE, 12);
    start.writeUInt32LE(add(row.namespace), 16);
    start.writeUInt32LE(ids.get(row.name), 20);
    start.writeUInt16LE(20, 24);
    start.writeUInt16LE(20, 26);
    start.writeUInt16LE(row.attrs.length, 28);
    const location = { name: row.name, offset: 8 + relative, attributes: [] };
    for (let i = 0; i < row.attrs.length; i++) {
      const a = row.attrs[i],
        offset = 36 + i * 20;
      start.writeUInt32LE(add(a.namespace), offset);
      start.writeUInt32LE(ids.get(a.name), offset + 4);
      start.writeUInt32LE(add(a.raw), offset + 8);
      start.writeUInt16LE(8, offset + 12);
      start[offset + 15] = a.kind;
      start.writeUInt32LE(
        a.kind === 3
          ? ids.get(a.value)
          : a.kind === 18
            ? a.value
              ? 0xffffffff
              : 0
            : a.value >>> 0,
        offset + 16,
      );
      location.attributes.push({ name: a.name, offset: 8 + relative + offset });
    }
    pieces.push(start);
    locations.push(location);
    relative += start.length;
    const end = chunk(0x103, 16, 24);
    end.writeUInt32LE(NONE, 12);
    end.writeUInt32LE(add(row.namespace), 16);
    end.writeUInt32LE(ids.get(row.name), 20);
    if (rowIndex === 0) rootEnd = end;
    else {
      pieces.push(end);
      relative += end.length;
    }
  }
  if (rootEnd) pieces.push(rootEnd);
  for (let i = namespaces.length - 1; i >= 0; i--)
    pieces.push(ns(0x101, namespaces[i], i ? "ns" + i : "android"));
  const header = chunk(3, 8, 8);
  header.writeUInt32LE(8 + pieces.reduce((n, b) => n + b.length, 0), 4);
  return {
    bytes: Buffer.concat([header, ...pieces]),
    poolOffset: 8,
    poolSize: pool.length,
    strings: strings.map((text, index) => ({
      text,
      index,
      offset: 8 + stringLocations[index].offset,
      length: stringLocations[index].length,
    })),
    elements: locations,
  };
}
function modified(source, change) {
  const bytes = Buffer.from(source.bytes);
  change(bytes, source);
  return bytes;
}
test("extracts package, SDK, booleans and component counts from namespaced UTF8 binary XML", () => {
  const f = fixture();
  const result = manifestIdentity(f.bytes);
  assert.equal(result.package_name, "example.fixture");
  assert.equal(result.version_name, "1.2.3");
  assert.equal(result.version_code, 42);
  assert.equal(result.min_sdk, 24);
  assert.equal(result.target_sdk, 35);
  assert.equal(result.application_class, "example.fixture.App");
  assert.equal(result.debuggable, false);
  assert.equal(result.uses_cleartext_traffic, true);
  assert.deepEqual(result.component_counts, {
    activity: 1,
    "activity-alias": 1,
    service: 2,
    receiver: 1,
    provider: 1,
  });
  const parsed = parseAndroidBinaryXml(f.bytes);
  const app = parsed.elements.find((row) => row.name === "application");
  assert.equal(
    app.attributes.find((a) => a.name === "debuggable").data_type,
    18,
  );
  assert.equal(
    app.attributes.find((a) => a.name === "name").source_byte_offset,
    f.elements.find((e) => e.name === "application").attributes[0].offset,
  );
});
test("decodes UTF8 two-byte lengths for both UTF16-unit and byte counts, including Unicode", () => {
  const name = "版本😀".repeat(70),
    f = fixture({
      rows: [
        element("manifest", [
          attribute("package", "example.long", 3, null),
          attribute("versionName", name),
        ]),
      ],
    });
  assert.equal(manifestIdentity(f.bytes).version_name, name);
  const where = f.strings.find((s) => s.text === name).offset;
  assert.equal(f.bytes[where] & 128, 128);
  assert.equal(f.bytes[where + 2] & 128, 128);
});
test("decodes UTF16 pools, nonASCII surrogate pairs and four-byte long string lengths", () => {
  const long = "长".repeat(40000) + "😀",
    f = fixture({
      encoding: "utf16",
      rows: [
        element("manifest", [
          attribute("package", "example.utf16", 3, null),
          attribute("versionName", "版本😀"),
        ]),
      ],
      extraStrings: [long],
    });
  assert.equal(manifestIdentity(f.bytes).version_name, "版本😀");
  assert.equal(parseAndroidBinaryXml(f.bytes).string_count, f.strings.length);
  const location = f.strings.find((s) => s.text === long).offset;
  assert.equal(f.bytes.readUInt16LE(location) & 0x8000, 0x8000);
});
test("identity requires Android namespace for framework attributes and no namespace for package", () => {
  const f = fixture({
    rows: [
      element("manifest", [
        attribute("package", "wrong.ns", 3, OTHER),
        attribute("package", "example.real", 3, null),
        attribute("versionName", "wrong-no-ns", 3, null),
        attribute("versionName", "correct", 3, ANDROID),
        attribute("versionCode", "99", 3, ANDROID),
      ]),
      element("uses-sdk", [
        attribute("minSdkVersion", "24"),
        attribute("targetSdkVersion", "preview"),
      ]),
    ],
  });
  const id = manifestIdentity(f.bytes);
  assert.equal(id.package_name, "example.real");
  assert.equal(id.version_name, "correct");
  assert.equal(id.version_code, 99);
  assert.equal(id.min_sdk, 24);
  assert.equal(id.target_sdk, null);
});
test("unresolved resource references and unsupported value kinds remain explicit", () => {
  const f = fixture({
    rows: [
      element("manifest", [attribute("package", "example.refs", 3, null)]),
      element("application", [
        attribute("name", 0x7f010001, 1),
        attribute("custom", "raw-text", 0, ANDROID, "fallback"),
      ]),
    ],
  });
  const id = manifestIdentity(f.bytes);
  assert.deepEqual(id.application_class, { data_type: 1, data: 0x7f010001 });
  const a = parseAndroidBinaryXml(f.bytes).elements.find(
    (e) => e.name === "application",
  ).attributes;
  assert.equal(a.find((a) => a.name === "custom").value, "fallback");
});
test("signed decimal typed integers preserve negative values", () => {
  const f = fixture({
    rows: [
      element("manifest", [
        attribute("package", "example.signed", 3, null),
        attribute("signedValue", -7, 16),
        attribute("hexValue", 0xdeadbeef, 17),
      ]),
    ],
  });
  const attrs = parseAndroidBinaryXml(f.bytes).elements[0].attributes;
  assert.equal(attrs.find((a) => a.name === "signedValue").value, -7);
  assert.equal(attrs.find((a) => a.name === "hexValue").value, 0xdeadbeef);
});
test("rejects invalid document header and chunks crossing container bounds", () => {
  const f = fixture();
  for (const bytes of [
    f.bytes.subarray(0, 7),
    modified(f, (b) => b.writeUInt32LE(b.length + 1, 4)),
    modified(f, (b) => b.writeUInt16LE(4, 0)),
    modified(f, (b) => b.writeUInt32LE(b.length, 12)),
    modified(f, (b) => b.writeUInt16LE(7, 10)),
  ])
    assert.throws(() => parseAndroidBinaryXml(bytes));
});
test("rejects document header pointing beyond the file", () => {
  const f = fixture();
  assert.throws(() =>
    parseAndroidBinaryXml(modified(f, (b) => b.writeUInt16LE(65535, 2))),
  );
});
test("rejects string pool index/table overlap and offsets outside pool", () => {
  const f = fixture();
  assert.throws(
    () => parseAndroidBinaryXml(modified(f, (b) => b.writeUInt32LE(28, 28))),
    /layout/,
  );
  assert.throws(
    () =>
      parseAndroidBinaryXml(
        modified(f, (b) => b.writeUInt32LE(0xffffffff, 36)),
      ),
    /bounds/,
  );
  assert.throws(
    () =>
      parseAndroidBinaryXml(modified(f, (b) => b.writeUInt32LE(1000001, 16))),
    /layout/,
  );
});
test("rejects style start beyond its own string pool chunk", () => {
  const f = fixture();
  assert.throws(() =>
    parseAndroidBinaryXml(
      modified(f, (b, f) =>
        b.writeUInt32LE(f.poolSize + 64, f.poolOffset + 24),
      ),
    ),
  );
});
test("rejects UTF8 terminator, declared units and invalid UTF8 sequences", () => {
  const f = fixture(),
    s = f.strings.find((s) => s.text === "example.fixture");
  assert.throws(
    () =>
      parseAndroidBinaryXml(
        modified(f, (b) => (b[s.offset + s.length - 1] = 1)),
      ),
    /Unterminated/,
  );
  assert.throws(
    () => parseAndroidBinaryXml(modified(f, (b) => b[s.offset]++)),
    /unit count/,
  );
  assert.throws(() =>
    parseAndroidBinaryXml(modified(f, (b) => (b[s.offset + 2] = 0xff))),
  );
});
test("rejects UTF16 terminators and out-of-bounds four-byte lengths", () => {
  const f = fixture({ encoding: "utf16" }),
    s = f.strings.find((s) => s.text === "example.fixture");
  assert.throws(
    () =>
      parseAndroidBinaryXml(
        modified(f, (b) => b.writeUInt16LE(1, s.offset + s.length - 2)),
      ),
    /Unterminated/,
  );
  assert.throws(
    () =>
      parseAndroidBinaryXml(
        modified(f, (b) => {
          b.writeUInt16LE(0xffff, s.offset);
          b.writeUInt16LE(0xffff, s.offset + 2);
        }),
      ),
    /bounds/,
  );
});
test("rejects bad name/value indices, typed sizes and attribute table layout", () => {
  const f = fixture(),
    root = f.elements[0],
    attr = root.attributes[0];
  for (const bytes of [
    modified(f, (b) => b.writeUInt32LE(0xfffffffe, root.offset + 20)),
    modified(f, (b) => b.writeUInt32LE(0xfffffffe, attr.offset + 4)),
    modified(f, (b) => b.writeUInt32LE(0xfffffffe, attr.offset + 16)),
    modified(f, (b) => b.writeUInt16LE(7, attr.offset + 12)),
    modified(f, (b) => b.writeUInt16LE(19, root.offset + 24)),
    modified(f, (b) => b.writeUInt16LE(19, root.offset + 26)),
    modified(f, (b) => b.writeUInt16LE(65535, root.offset + 28)),
  ])
    assert.throws(() => parseAndroidBinaryXml(bytes));
});
test("rejects null sentinel in required element and attribute names", () => {
  const f = fixture(),
    root = f.elements[0],
    attr = root.attributes[0];
  assert.throws(() =>
    parseAndroidBinaryXml(
      modified(f, (b) => b.writeUInt32LE(NONE, root.offset + 20)),
    ),
  );
  assert.throws(() =>
    parseAndroidBinaryXml(
      modified(f, (b) => b.writeUInt32LE(NONE, attr.offset + 4)),
    ),
  );
});
test("rejects missing manifest root and elements before a string pool", () => {
  const f = fixture({ rows: [element("not-manifest")] });
  assert.throws(() => manifestIdentity(f.bytes), /No manifest root/);
  const normal = fixture(),
    first = normal.elements[0],
    end = first.offset + 36 + normal.elements[0].attributes.length * 20;
  const start = normal.bytes.subarray(first.offset, end),
    header = chunk(3, 8, 8);
  header.writeUInt32LE(8 + start.length, 4);
  assert.throws(
    () => parseAndroidBinaryXml(Buffer.concat([header, start])),
    /before XML string pool/,
  );
});
