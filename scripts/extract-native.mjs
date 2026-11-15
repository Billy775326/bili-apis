import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { readDex } from "../src/dex.mjs";
import { ZipReader } from "../src/zip.mjs";
import { readElf } from "../src/native-elf.mjs";
const [dexDir, provenancePath, armApk, out = "catalog/android/com.bilibili.app.in/play/6.8.0"] = process.argv.slice(2);
if (!dexDir || !provenancePath || !armApk)
  throw Error(
    "Usage: node scripts/extract-native.mjs DEX_DIR INPUTS_JSON ARM64_APK [OUTPUT_DIR]",
  );
const json = (p) =>
    JSON.parse(fs.readFileSync(p, "utf8").replace(/^\uFEFF/, "")),
  hash = (b) => crypto.createHash("sha256").update(b).digest("hex"),
  provenance = json(provenancePath),
  old = json(path.join(out, "artifacts.json"));
const archiveExpected = old.archives.find(
  (a) => a.filename === path.basename(armApk),
);
if (!archiveExpected) throw Error("Native archive not in existing provenance");
const digest = crypto.createHash("sha256");
for await (const b of fs.createReadStream(armApk)) digest.update(b);
if (digest.digest("hex") !== archiveExpected.sha256)
  throw Error("Native archive SHA256 mismatch");
const expected = new Map(provenance.dex_files.map((d) => [d.name, d.sha256]));
const names = fs
  .readdirSync(dexDir)
  .filter((n) => /^classes\d*\.dex$/.test(n))
  .sort();
if (names.length !== expected.size)
  throw Error("DEX provenance count mismatch");
const declarations = [],
  bySignature = new Map(),
  exportLookup = new Map(),
  selectedClasses = [];
function mangle(value) {
  let out = "";
  for (let i = 0; i < value.length; i++) {
    const c = value[i];
    out += /[A-Za-z0-9]/.test(c)
      ? c
      : c === "/"
        ? "_"
        : c === "_"
          ? "_1"
          : c === ";"
            ? "_2"
            : c === "["
              ? "_3"
              : "_0" + value.charCodeAt(i).toString(16).padStart(4, "0");
  }
  return out;
}
for (const name of names) {
  const bytes = fs.readFileSync(path.join(dexDir, name));
  if (hash(bytes) !== expected.get(name))
    throw Error("DEX provenance mismatch: " + name);
  const dex = readDex(bytes, name);
  for (const cls of dex.classes) {
    if (
      cls.descriptor === "Lcom/bilibili/nativelibrary/LibBili;" ||
      cls.descriptor === "Lokhttp3/z$a;"
    )
      selectedClasses.push({
        dex: name,
        descriptor: cls.descriptor,
        methods: cls.definedMethods.map((d) => ({
          ...dex.methods[d.methodIndex],
          access_flags: d.accessFlags,
          code_offset: d.codeOffset,
        })),
      });
    for (const def of cls.definedMethods) {
      if (!(def.accessFlags & 0x100)) continue;
      const m = dex.methods[def.methodIndex],
        id = name + ":native:" + m.index,
        record = {
          id,
          dex: name,
          class_def_index: cls.index,
          class_descriptor: cls.descriptor,
          method_index: m.index,
          method_name: m.name,
          method_descriptor: m.descriptor,
          access_flags: def.accessFlags,
          classification:
            /^L(?:com\/bilibili\/|com\/bapis\/|tv\/danmaku\/)/.test(
              cls.descriptor,
            )
              ? "application-namespace"
              : "bundled-namespace",
          verification: "declared-native-method",
        };
      declarations.push(record);
      const key = m.name + "\0" + m.descriptor;
      if (!bySignature.has(key)) bySignature.set(key, []);
      bySignature.get(key).push(id);
      const short =
          "Java_" + mangle(cls.descriptor.slice(1, -1)) + "_" + mangle(m.name),
        long =
          short +
          "__" +
          mangle(m.descriptor.slice(1, m.descriptor.indexOf(")")));
      for (const key of [short, long]) {
        if (!exportLookup.has(key)) exportLookup.set(key, []);
        exportLookup.get(key).push(id);
      }
    }
  }
}
const libraries = [],
  candidates = [],
  coverage = [],
  zip = new ZipReader(armApk);
try {
  for (const entry of zip.entries.filter((e) =>
    /^lib\/arm64-v8a\/.+\.so$/.test(e.name),
  )) {
    const prior = archiveExpected.members.find((m) => m.name === entry.name);
    if (!prior) throw Error("Unpinned native member");
    const bytes = zip.readEntry(entry, 64 * 1024 * 1024),
      sha256 = hash(bytes);
    if (sha256 !== prior.sha256) throw Error("Native member SHA256 mismatch");
    let elf;
    try {
      elf = readElf(bytes);
    } catch (error) {
      coverage.push({
        member: entry.name,
        sha256,
        status: "unsupported-or-malformed",
        reason: error.message,
      });
      continue;
    }
    const exports = [
      ...new Map(
        elf.symbols
          .filter(
            (s) =>
              s.section_index !== 0 &&
              s.type === 2 &&
              [1, 2].includes(s.binding) &&
              (/^(?:Java_|JNI_OnLoad)/.test(s.name) ||
                /http|grpc|websocket|curl_|bili.*sign/i.test(s.name)),
          )
          .map((s) => [s.name + "@" + s.address, s]),
      ).values(),
    ].map((s) => ({
      ...s,
      java_native_matches: exportLookup.get(s.name) ?? [],
      status: s.name.startsWith("Java_")
        ? "jni-symbol-declaration"
        : "native-symbol-candidate",
    }));
    const tables = elf.registrationCandidates.map((c) => ({
      ...c,
      java_native_candidates:
        bySignature.get(c.method_name + "\0" + c.method_descriptor) ?? [],
    }));
    for (const section of elf.sections.filter(
      (s) => s.type === 1 && s.flags & 2n && !(s.flags & 4n),
    )) {
      const text = bytes.toString(
        "latin1",
        section.offset,
        section.offset + section.size,
      );
      const regex =
        /(?:https?|wss?):\/\/[A-Za-z0-9.-]+(?::[0-9]+)?(?:\/[A-Za-z0-9_~.!$&()*+,;=:@%/{}-]*)?/g;
      for (const match of text.matchAll(regex)) {
        let url;
        try {
          url = new URL(match[0]);
        } catch {
          continue;
        }
        if (
          !/(?:^|\.)(?:bilibili\.com|biliapi\.net|biliapi\.com|bilivideo\.com|bilivideo\.cn|biligame\.com|hdslb\.com|b23\.tv)$/.test(
            url.hostname,
          )
        )
          continue;
        candidates.push({
          id: entry.name + ":url:" + (section.offset + match.index),
          member: entry.name,
          member_sha256: sha256,
          section: section.name,
          member_byte_offset: section.offset + match.index,
          value: match[0],
          status: "native-url-string-candidate",
        });
      }
    }
    libraries.push({
      member: entry.name,
      sha256,
      size: bytes.length,
      relocation_count: elf.relocation_count,
      exports,
      jni_table_candidates: tables,
    });
    coverage.push({
      member: entry.name,
      sha256,
      status: "parsed",
      symbols_examined: elf.symbols.length,
      matched_exports: exports.length,
      jni_table_candidates: tables.length,
      unsupported_relocations: elf.unsupported,
      relocation_type_counts: elf.relocation_type_counts,
      unresolved_relocation_counts: elf.unresolved_relocation_counts,
    });
  }
} finally {
  zip.close();
}
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(
  path.join(out, "native.json"),
  JSON.stringify(
    {
      schema_version: 1,
      artifact: provenance.artifact,
      native_archive: {
        filename: path.basename(armApk),
        sha256: archiveExpected.sha256,
      },
      java_native_declarations: declarations,
      libraries,
      candidates,
      limitations: [
        "Native method declarations and export names are static metadata, not network API routes.",
        "JNI table layouts are structural candidates; RegisterNatives call execution and Java class association are not established.",
        "ELF64 little-endian AArch64 only; native code, indirect calls, encrypted/computed strings and runtime registration are not executed.",
        "Query and fragment values are omitted from native URL candidates.",
      ],
    },
    null,
    2,
  ) + "\n",
);
fs.writeFileSync(
  path.join(out, "coverage-native.json"),
  JSON.stringify(
    {
      schema_version: 1,
      dex_files: names.length,
      java_native_methods: declarations.length,
      native_libraries: coverage.length,
      parsed_libraries: libraries.length,
      exports: libraries.reduce((n, l) => n + l.exports.length, 0),
      jni_table_candidates: libraries.reduce(
        (n, l) => n + l.jni_table_candidates.length,
        0,
      ),
      url_candidates: candidates.length,
      libraries: coverage,
    },
    null,
    2,
  ) + "\n",
);
fs.writeFileSync(
  ".local/native-selected-classes.json",
  JSON.stringify(selectedClasses, null, 2),
);
console.log(
  JSON.stringify({
    native_methods: declarations.length,
    libraries: libraries.length,
    jni_tables: libraries.reduce(
      (n, l) => n + l.jni_table_candidates.length,
      0,
    ),
    urls: candidates.length,
    selected_classes: selectedClasses.map((c) => ({
      dex: c.dex,
      descriptor: c.descriptor,
    })),
  }),
);
