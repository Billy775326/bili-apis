import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { ZipReader } from "../src/zip.mjs";

const textLimit = 8 * 1024 * 1024,
  elfLimit = 64 * 1024 * 1024;
export function elfRegions(bytes) {
  if (
    bytes.toString("hex", 0, 4) !== "7f454c46" ||
    bytes[4] !== 2 ||
    bytes[5] !== 1
  )
    throw Error("Only ELF64 little-endian section layout is supported");
  const table = Number(bytes.readBigUInt64LE(40)),
    width = bytes.readUInt16LE(58),
    count = bytes.readUInt16LE(60),
    namesIndex = bytes.readUInt16LE(62);
  if (
    width < 64 ||
    count === 0 ||
    namesIndex >= count ||
    table + width * count > bytes.length
  )
    throw Error("Unsupported or malformed ELF section directory");
  const section = (i) => {
    const p = table + width * i;
    const start = Number(bytes.readBigUInt64LE(p + 24)),
      size = Number(bytes.readBigUInt64LE(p + 32));
    return {
      nameIndex: bytes.readUInt32LE(p),
      type: bytes.readUInt32LE(p + 4),
      flags: bytes.readBigUInt64LE(p + 8),
      start,
      size,
    };
  };
  const names = section(namesIndex);
  if (names.start + names.size > bytes.length)
    throw Error("Invalid ELF string table");
  const regions = [];
  for (let i = 0; i < count; i++) {
    const s = section(i);
    if (s.type !== 1 || !(s.flags & 2n) || s.flags & 4n) continue;
    if (
      !Number.isSafeInteger(s.start) ||
      !Number.isSafeInteger(s.size) ||
      s.start + s.size > bytes.length
    )
      throw Error("Invalid ELF section range");
    const nameStart = names.start + s.nameIndex,
      nameEnd = bytes.indexOf(0, nameStart);
    if (
      nameStart >= names.start + names.size ||
      nameEnd < 0 ||
      nameEnd >= names.start + names.size
    )
      throw Error("Invalid ELF section name");
    regions.push({
      name: bytes.toString("utf8", nameStart, nameEnd),
      offset: s.start,
      size: s.size,
    });
  }
  return regions;
}
export function findUrls(bytes, baseOffset = 0, section = null) {
  const text = bytes.toString("latin1"),
    matches = [];
  const pattern =
    /https?:\/\/[A-Za-z0-9.-]+(?::[0-9]+)?(?:\/[A-Za-z0-9_~.!$&()*+,;=:@%/{}-]*)?/g;
  for (const match of text.matchAll(pattern)) {
    let parsed;
    try {
      parsed = new URL(match[0]);
    } catch {
      continue;
    }
    if (
      !/(?:^|\.)(?:bilibili\.com|biliapi\.net|biliapi\.com)$/.test(
        parsed.hostname,
      )
    )
      continue;
    if (
      !/^(?:api|app|grpc|passport|account|mall|show|live|pay|message|manga|member)(?:[.-]|$)/.test(
        parsed.hostname,
      )
    )
      continue;
    matches.push({
      value: match[0],
      classification: /^(?:api|app|grpc)(?:[.-]|$)/.test(parsed.hostname)
        ? "api-host-url-candidate"
        : "platform-service-url-candidate",
      member_byte_offset: baseOffset + match.index,
      source_byte_length: match[0].length,
      section,
      verification: "static-string-only",
    });
  }
  return matches;
}
async function sha256(filename) {
  const h = createHash("sha256");
  for await (const bytes of fs.createReadStream(filename)) h.update(bytes);
  return h.digest("hex");
}
async function main() {
  const args = process.argv.slice(2),
    inputs = [];
  let output = "catalog/android/com.bilibili.app.in/play/6.8.0/artifacts.json",
    coverageOutput = "catalog/android/com.bilibili.app.in/play/6.8.0/coverage-artifacts.json";
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--apk") inputs.push(args[++i]);
    else if (args[i] === "--output") output = args[++i];
    else if (args[i] === "--coverage") coverageOutput = args[++i];
    else throw Error("Unknown argument: " + args[i]);
  }
  if (!inputs.length)
    throw Error(
      "Usage: node scripts/extract-artifacts.mjs --apk FILE [--apk FILE...] [--output FILE] [--coverage FILE]",
    );

  const archives = [],
    candidates = [],
    coverage = [];
  for (const filename of inputs) {
    const archive = {
        filename: path.basename(filename),
        size: fs.statSync(filename).size,
        sha256: await sha256(filename),
        members: [],
      },
      zip = new ZipReader(filename);
    try {
      for (const entry of zip.entries) {
        const record = {
          index: entry.index,
          name: entry.name,
          compressed_size: entry.compressedSize,
          size: entry.size,
          compression: entry.method,
          local_header_offset: entry.localOffset,
        };
        const hash = await zip.hashEntry(entry);
        Object.assign(record, {
          sha256: hash.sha256,
          compressed_data_offset: hash.dataOffset,
        });
        archive.members.push(record);
        let status = "not-selected",
          reason =
            "non-text/non-native member; DEX handled by metadata extractors",
          regions = [];
        const native = /^lib\/.+\.so$/.test(entry.name),
          text =
            /\.(?:js|mjs|cjs|json|html?|txt|xml|properties|ini|conf|cfg|yaml|yml|proto)$/i.test(
              entry.name,
            ) && !/^META-INF\//.test(entry.name);
        if (native || text) {
          const limit = native ? elfLimit : textLimit;
          if (entry.size > limit || entry.compressedSize > limit) {
            status = "skipped-budget";
            reason = `member exceeds ${limit} byte scan budget`;
          } else {
            const bytes = zip.readEntry(entry, limit);
            if (native) {
              try {
                regions = elfRegions(bytes);
                status = "scanned";
                reason = "allocated non-executable SHT_PROGBITS sections";
              } catch (error) {
                status = "unsupported-native";
                reason = error.message;
              }
            } else {
              regions = [{ name: null, offset: 0, size: bytes.length }];
              status = "scanned";
              reason =
                "selected bundled-text extension; byte-preserving ASCII URL scan";
            }
            for (const region of regions)
              for (const match of findUrls(
                bytes.subarray(region.offset, region.offset + region.size),
                region.offset,
                region.name,
              ))
                candidates.push({
                  archive: archive.filename,
                  archive_sha256: archive.sha256,
                  member: entry.name,
                  member_sha256: hash.sha256,
                  ...match,
                });
          }
        }
        coverage.push({
          archive: archive.filename,
          member_index: entry.index,
          member: entry.name,
          status,
          reason,
          scanned_bytes: regions.reduce((n, r) => n + r.size, 0),
          regions,
        });
      }
    } finally {
      zip.close();
    }
    archives.push(archive);
  }
  const report = {
    schema_version: 1,
    method:
      "Streaming ZIP member SHA-256 and CRC; bounded ASCII Bilibili URL-prefix scanning in bundled text and ELF64 allocated non-executable sections",
    limitations: [
      "URL strings do not establish requests, verbs, schemas, reachable code or active hosts.",
      "Query/fragment values and non-ASCII URL portions are omitted by the URL-prefix pattern.",
      "DEX routes and generated metadata are covered by separate catalogs; dynamically downloaded resources and native call graphs are outside this scan.",
    ],
    archives,
    candidates,
  };
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.mkdirSync(path.dirname(coverageOutput), { recursive: true });
  fs.writeFileSync(output, JSON.stringify(report, null, 2) + "\n");
  fs.writeFileSync(
    coverageOutput,
    JSON.stringify(
      {
        schema_version: 1,
        input_archives: archives.map(({ members, ...a }) => a),
        limits: {
          text_member_bytes: textLimit,
          native_member_bytes: elfLimit,
          zip_directory_bytes: 32 * 1024 * 1024,
        },
        counts: {
          members: coverage.length,
          scanned: coverage.filter((x) => x.status === "scanned").length,
          candidates: candidates.length,
        },
        members: coverage,
      },
      null,
      2,
    ) + "\n",
  );
  console.log(
    JSON.stringify({
      archives: archives.length,
      members: coverage.length,
      candidates: candidates.length,
      scanned: coverage.filter((x) => x.status === "scanned").length,
    }),
  );
}
if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))
)
  await main();
