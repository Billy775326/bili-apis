const ANDROID = "http://schemas.android.com/apk/res/android";
export function parseAndroidBinaryXml(bytes) {
  function check(start, size, end = bytes.length) {
    if (
      !Number.isSafeInteger(start) ||
      !Number.isSafeInteger(size) ||
      start < 0 ||
      size < 0 ||
      start + size > end
    )
      throw Error("Binary XML range out of bounds");
  }
  check(0, 8);
  if (
    bytes.readUInt16LE(0) !== 3 ||
    bytes.readUInt16LE(2) < 8 ||
    bytes.readUInt32LE(4) !== bytes.length
  )
    throw Error("Unsupported binary XML header");
  check(0, bytes.readUInt16LE(2));
  let strings = null;
  const elements = [];
  let attributes = 0;
  for (let p = bytes.readUInt16LE(2); p < bytes.length; ) {
    check(p, 8);
    const type = bytes.readUInt16LE(p),
      header = bytes.readUInt16LE(p + 2),
      size = bytes.readUInt32LE(p + 4);
    if (header < 8 || size < header) throw Error("Invalid binary XML chunk");
    check(p, size);
    const end = p + size;
    if (type === 1) {
      if (strings) throw Error("Duplicate binary XML string pool");
      if (header < 28) throw Error("Truncated string pool");
      const count = bytes.readUInt32LE(p + 8),
        flags = bytes.readUInt32LE(p + 16),
        stringStart = bytes.readUInt32LE(p + 20),
        styleStart = bytes.readUInt32LE(p + 24);
      if (
        count > 1000000 ||
        stringStart < header + count * 4 ||
        stringStart > size ||
        (styleStart && (styleStart < stringStart || styleStart > size))
      )
        throw Error("Invalid string pool layout");
      check(p + header, count * 4, end);
      const dataEnd = styleStart ? p + styleStart : end;
      check(p + stringStart, 0, dataEnd);
      strings = [];
      const length8 = (offset) => {
        check(offset, 1, dataEnd);
        const first = bytes[offset++];
        if (first & 128) {
          check(offset, 1, dataEnd);
          return {
            value: (first & 127) * 256 + bytes[offset],
            next: offset + 1,
          };
        }
        return { value: first, next: offset };
      };
      const length16 = (offset) => {
        check(offset, 2, dataEnd);
        const first = bytes.readUInt16LE(offset);
        offset += 2;
        if (first & 0x8000) {
          check(offset, 2, dataEnd);
          return {
            value: (first & 0x7fff) * 65536 + bytes.readUInt16LE(offset),
            next: offset + 2,
          };
        }
        return { value: first, next: offset };
      };
      for (let i = 0; i < count; i++) {
        const offset = p + stringStart + bytes.readUInt32LE(p + header + i * 4);
        check(offset, 1, dataEnd);
        if (flags & 0x100) {
          const units = length8(offset),
            length = length8(units.next);
          check(length.next, length.value + 1, dataEnd);
          if (bytes[length.next + length.value] !== 0)
            throw Error("Unterminated XML UTF8 string");
          const text = new TextDecoder("utf-8", { fatal: true }).decode(
            bytes.subarray(length.next, length.next + length.value),
          );
          if (text.length !== units.value)
            throw Error("XML UTF8 unit count mismatch");
          strings.push(text);
        } else {
          const length = length16(offset);
          check(length.next, length.value * 2 + 2, dataEnd);
          if (bytes.readUInt16LE(length.next + length.value * 2) !== 0)
            throw Error("Unterminated XML UTF16 string");
          strings.push(
            bytes.toString(
              "utf16le",
              length.next,
              length.next + length.value * 2,
            ),
          );
        }
      }
    } else if (type === 0x0102) {
      if (!strings) throw Error("Element before XML string pool");
      if (header < 16 || size < 36) throw Error("Truncated start element");
      const get = (index, required = false) => {
        if (index === 0xffffffff) {
          if (required) throw Error("Required XML name is absent");
          return null;
        }
        if (index >= strings.length)
          throw Error("XML string index out of bounds");
        return strings[index];
      };
      const start = bytes.readUInt16LE(p + 24),
        width = bytes.readUInt16LE(p + 26),
        count = bytes.readUInt16LE(p + 28);
      if (width < 20 || start < 20 || (attributes += count) > 200000)
        throw Error("Invalid XML attribute layout");
      check(p + 16 + start, width * count, end);
      const row = {
        name: get(bytes.readUInt32LE(p + 20), true),
        namespace: get(bytes.readUInt32LE(p + 16)),
        attributes: [],
      };
      for (let i = 0; i < count; i++) {
        const q = p + 16 + start + i * width,
          raw = bytes.readUInt32LE(q + 8),
          valueSize = bytes.readUInt16LE(q + 12),
          kind = bytes[q + 15],
          data = bytes.readUInt32LE(q + 16);
        if (valueSize !== 8) throw Error("Invalid XML typed value");
        const value =
          kind === 3
            ? get(data)
            : kind === 18
              ? data !== 0
              : kind === 16
                ? bytes.readInt32LE(q + 16)
                : kind === 17
                  ? data
                  : raw !== 0xffffffff
                    ? get(raw)
                    : { data_type: kind, data };
        row.attributes.push({
          name: get(bytes.readUInt32LE(q + 4), true),
          namespace: get(bytes.readUInt32LE(q)),
          value,
          data_type: kind,
          source_byte_offset: q,
        });
      }
      elements.push(row);
    }
    p = end;
  }
  return {
    elements,
    string_count: strings?.length || 0,
    attribute_count: attributes,
  };
}
export function manifestIdentity(bytes) {
  const parsed = parseAndroidBinaryXml(bytes),
    manifest = parsed.elements.find((e) => e.name === "manifest"),
    sdk = parsed.elements.find((e) => e.name === "uses-sdk"),
    app = parsed.elements.find((e) => e.name === "application");
  if (!manifest) throw Error("No manifest root");
  const attr = (e, n, ns = ANDROID) =>
    e?.attributes.find((a) => a.name === n && a.namespace === ns)?.value ??
    null;
  const numeric = (v) =>
    typeof v === "number" && Number.isSafeInteger(v)
      ? v
      : typeof v === "string" &&
          /^\d+$/.test(v) &&
          Number.isSafeInteger(Number(v))
        ? Number(v)
        : null;
  return {
    package_name: attr(manifest, "package", null),
    version_name: attr(manifest, "versionName"),
    version_code: numeric(attr(manifest, "versionCode")),
    min_sdk: numeric(attr(sdk, "minSdkVersion")),
    target_sdk: numeric(attr(sdk, "targetSdkVersion")),
    application_class: attr(app, "name"),
    debuggable: attr(app, "debuggable"),
    uses_cleartext_traffic: attr(app, "usesCleartextTraffic"),
    component_counts: Object.fromEntries(
      ["activity", "activity-alias", "service", "receiver", "provider"].map(
        (n) => [n, parsed.elements.filter((e) => e.name === n).length],
      ),
    ),
    manifest_string_count: parsed.string_count,
    manifest_attribute_count: parsed.attribute_count,
    scope:
      "Binary AndroidManifest.xml metadata only; references into resources are preserved as unresolved typed values. No app execution or policy enforcement inferred.",
  };
}
