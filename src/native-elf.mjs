/** Offline ELF64/AArch64 metadata. No native code is loaded or executed. */
export function packedRela(bytes, budget = 1000000) {
  let p = 4;
  if (bytes.toString("ascii", 0, 4) !== "APS2")
    throw Error("Invalid APS2 header");
  function signed() {
    let n = 0n,
      shift = 0n,
      x;
    for (let i = 0; i < 10; i++) {
      if (p >= bytes.length) throw Error("Truncated SLEB128");
      x = bytes[p++];
      n |= BigInt(x & 127) << shift;
      shift += 7n;
      if (!(x & 128)) {
        if (x & 64) n |= -1n << shift;
        if (n < -(1n << 63n) || n >= 1n << 64n) throw Error("SLEB128 overflow");
        return n;
      }
    }
    throw Error("SLEB128 overflow");
  }
  const total = Number(signed());
  if (!Number.isSafeInteger(total) || total < 0 || total > budget)
    throw Error("Packed relocation budget exceeded");
  let offset = signed(),
    info = 0n,
    addend = 0n;
  const rows = [];
  while (rows.length < total) {
    const count = Number(signed()),
      flags = Number(signed());
    if (count < 1 || count > total - rows.length || flags < 0 || flags > 15)
      throw Error("Invalid packed relocation group");
    const delta = flags & 2 ? signed() : 0n;
    if (flags & 1) info = signed();
    if ((flags & 12) === 12) addend += signed();
    else if ((flags & 12) !== 8) addend = 0n;
    for (let i = 0; i < count; i++) {
      offset += flags & 2 ? delta : signed();
      if (!(flags & 1)) info = signed();
      if ((flags & 12) === 8) addend += signed();
      if (offset < 0n) throw Error("Negative relocation offset");
      rows.push({ offset, info, addend });
    }
  }
  if (p !== bytes.length) throw Error("Trailing packed relocation bytes");
  return rows;
}
export function readElf(bytes) {
  const range = (p, n) => {
    if (
      !Number.isSafeInteger(p) ||
      !Number.isSafeInteger(n) ||
      p < 0 ||
      n < 0 ||
      p + n > bytes.length
    )
      throw Error("ELF range outside file");
  };
  const uint = (p) => {
    range(p, 8);
    const n = bytes.readBigUInt64LE(p);
    if (n > BigInt(Number.MAX_SAFE_INTEGER)) throw Error("Unsafe ELF integer");
    return Number(n);
  };
  range(0, 64);
  if (
    bytes.toString("hex", 0, 4) !== "7f454c46" ||
    bytes[4] !== 2 ||
    bytes[5] !== 1 ||
    bytes.readUInt16LE(18) !== 183
  )
    throw Error("Only ELF64 little-endian AArch64 is supported");
  const sections = [],
    segments = [],
    symbols = [],
    symbolTables = new Map(),
    relocations = new Map(),
    unsupported = [],
    relocationTypes = new Map(),
    unresolvedRelocations = new Map();
  const shoff = uint(40),
    shsize = bytes.readUInt16LE(58),
    shcount = bytes.readUInt16LE(60),
    namesIndex = bytes.readUInt16LE(62);
  if (shsize < 64 || !shcount || namesIndex >= shcount)
    throw Error("Unsupported ELF section directory");
  range(shoff, shsize * shcount);
  for (let i = 0; i < shcount; i++) {
    const p = shoff + i * shsize;
    const s = {
      index: i,
      nameIndex: bytes.readUInt32LE(p),
      type: bytes.readUInt32LE(p + 4),
      flags: bytes.readBigUInt64LE(p + 8),
      address: uint(p + 16),
      offset: uint(p + 24),
      size: uint(p + 32),
      link: bytes.readUInt32LE(p + 40),
      entrySize: uint(p + 56),
    };
    if (s.type !== 8) range(s.offset, s.size);
    sections.push(s);
  }
  function stringAt(offset, end, max = 4096) {
    range(offset, 0);
    const zero = bytes.indexOf(0, offset);
    if (zero < 0 || zero >= end || zero - offset > max) return null;
    const s = bytes.toString("utf8", offset, zero);
    return s.includes("\ufffd") ? null : s;
  }
  const names = sections[namesIndex];
  for (const s of sections) {
    if (s.nameIndex >= names.size) throw Error("Invalid section name index");
    s.name = stringAt(names.offset + s.nameIndex, names.offset + names.size);
    if (s.name === null) throw Error("Invalid section name");
  }
  const phoff = uint(32),
    phsize = bytes.readUInt16LE(54),
    phcount = bytes.readUInt16LE(56);
  if (phcount && phsize < 56) throw Error("Invalid program header width");
  range(phoff, phsize * phcount);
  for (let i = 0; i < phcount; i++) {
    const p = phoff + i * phsize;
    if (bytes.readUInt32LE(p) !== 1) continue;
    const offset = uint(p + 8),
      address = uint(p + 16),
      size = uint(p + 32),
      memorySize = uint(p + 40);
    range(offset, size);
    segments.push({
      offset,
      address,
      size,
      memorySize,
      flags: bytes.readUInt32LE(p + 4),
    });
  }
  const fileOffset = (address) => {
    const s = segments.find(
      (s) => address >= s.address && address < s.address + s.size,
    );
    return s ? s.offset + address - s.address : null;
  };
  for (const s of sections.filter((s) => s.type === 2 || s.type === 11)) {
    if (s.entrySize < 24 || s.size % s.entrySize || s.link >= sections.length)
      throw Error("Invalid symbol table");
    const names = sections[s.link],
      table = [];
    for (let p = s.offset; p < s.offset + s.size; p += s.entrySize) {
      const nameOffset = bytes.readUInt32LE(p);
      if (nameOffset >= names.size) throw Error("Invalid symbol name");
      const symbol = {
        name:
          stringAt(names.offset + nameOffset, names.offset + names.size) ?? "",
        binding: bytes[p + 4] >> 4,
        type: bytes[p + 4] & 15,
        section_index: bytes.readUInt16LE(p + 6),
        address: uint(p + 8),
        size: uint(p + 16),
        table_index: table.length,
      };
      table.push(symbol);
      symbols.push(symbol);
    }
    symbolTables.set(s.index, table);
  }
  function add(row, section) {
    const address = Number(row.offset),
      type = Number(row.info & 0xffffffffn),
      index = Number(row.info >> 32n);
    relocationTypes.set(type, (relocationTypes.get(type) ?? 0) + 1);
    if (!Number.isSafeInteger(address)) throw Error("Unsafe relocation offset");
    let target;
    if (type === 1027) target = row.addend;
    else if (type === 257) {
      const symbol = symbolTables.get(section.link)?.[index];
      if (symbol && symbol.section_index !== 0)
        target = BigInt(symbol.address) + row.addend;
    }
    if (
      target !== undefined &&
      target >= 0n &&
      target <= BigInt(Number.MAX_SAFE_INTEGER)
    )
      relocations.set(address, {
        target: Number(target),
        type,
        section: section.name,
      });
    else
      unresolvedRelocations.set(
        type,
        (unresolvedRelocations.get(type) ?? 0) + 1,
      );
  }
  for (const s of sections) {
    if (s.type === 4) {
      if (s.entrySize < 24 || s.size % s.entrySize)
        throw Error("Invalid RELA table");
      for (let p = s.offset; p < s.offset + s.size; p += s.entrySize)
        add(
          {
            offset: bytes.readBigUInt64LE(p),
            info: bytes.readBigUInt64LE(p + 8),
            addend: bytes.readBigInt64LE(p + 16),
          },
          s,
        );
    } else if (s.type === 0x60000002) {
      for (const row of packedRela(bytes.subarray(s.offset, s.offset + s.size)))
        add(row, s);
    } else if (s.type === 19 || s.type === 0x6fffff00) {
      if (s.size % 8) throw Error("Invalid RELR table");
      let base = 0n;
      for (let p = s.offset; p < s.offset + s.size; p += 8) {
        const word = bytes.readBigUInt64LE(p);
        const offsets = [];
        if (!(word & 1n)) {
          offsets.push(word);
          base = word + 8n;
        } else {
          for (let bit = 1n; bit < 64n; bit++)
            if (word & (1n << bit)) offsets.push(base + (bit - 1n) * 8n);
          base += 63n * 8n;
        }
        for (const address of offsets) {
          const off = fileOffset(Number(address));
          if (off === null || off + 8 > bytes.length)
            throw Error("RELR points outside file-backed segment");
          add(
            { offset: address, info: 1027n, addend: bytes.readBigInt64LE(off) },
            s,
          );
        }
      }
    } else if (s.type === 0x60000001 || s.type === 9)
      unsupported.push({
        section: s.name,
        type: s.type,
        reason: "unsupported relocation encoding",
      });
  }
  function pointer(offset, ownerSection) {
    range(offset, 8);
    const section =
      ownerSection ??
      sections.find(
        (s) =>
          s.type !== 8 && offset >= s.offset && offset + 8 <= s.offset + s.size,
      );
    const address = section ? section.address + offset - section.offset : null;
    const relocated = address === null ? null : relocations.get(address);
    if (relocated) return { value: relocated.target, relocation: relocated };
    const n = bytes.readBigUInt64LE(offset);
    return n <= BigInt(Number.MAX_SAFE_INTEGER)
      ? { value: Number(n), relocation: null }
      : null;
  }
  function textPointer(p, max) {
    const f = fileOffset(p);
    if (f === null) return null;
    const section = sections.find(
      (s) =>
        s.type !== 8 &&
        s.flags & 2n &&
        !(s.flags & 4n) &&
        f >= s.offset &&
        f < s.offset + s.size,
    );
    if (!section) return null;
    const value = stringAt(f, section.offset + section.size, max);
    return value === null ? null : { value, file_offset: f };
  }
  const executable = (address) =>
    segments.some(
      (s) =>
        s.flags & 1 &&
        address >= s.address &&
        address < s.address + s.memorySize,
    );
  const registrationCandidates = [];
  const type =
      "(?:[ZBCSIJFD]|L[A-Za-z0-9_$/]+;|\\[+(?:[ZBCSIJFD]|L[A-Za-z0-9_$/]+;))",
    signature = new RegExp("^\\((?:" + type + ")*\\)(?:V|" + type + ")$");
  for (const s of sections.filter(
    (s) => s.type === 1 && s.flags & 2n && !(s.flags & 4n),
  )) {
    for (let p = s.offset; p + 24 <= s.offset + s.size; p += 8) {
      const fn = pointer(p + 16, s);
      if (!fn?.value || !executable(fn.value)) continue;
      const name = pointer(p, s),
        sig = pointer(p + 8, s);
      if (!name?.value || !sig?.value) continue;
      const a = textPointer(name.value, 128),
        b = textPointer(sig.value, 1024);
      if (
        !a ||
        !b ||
        !/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(a.value) ||
        !signature.test(b.value)
      )
        continue;
      registrationCandidates.push({
        table_file_offset: p,
        table_virtual_address: s.address + p - s.offset,
        section: s.name,
        method_name: a.value,
        method_descriptor: b.value,
        name_file_offset: a.file_offset,
        signature_file_offset: b.file_offset,
        function_virtual_address: fn.value,
        function_file_offset: fileOffset(fn.value),
        relocation_sources: [name.relocation, sig.relocation, fn.relocation]
          .filter(Boolean)
          .map((r) => ({ type: r.type, section: r.section })),
        status: "jni-table-layout-candidate",
      });
    }
  }
  return {
    sections,
    segments,
    symbols,
    registrationCandidates,
    relocation_count: relocations.size,
    relocation_type_counts: Object.fromEntries(relocationTypes),
    unresolved_relocation_counts: Object.fromEntries(unresolvedRelocations),
    unsupported,
    fileOffset,
  };
}
