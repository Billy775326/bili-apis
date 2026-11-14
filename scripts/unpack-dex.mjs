import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { ZipReader } from "../src/zip.mjs";
import { readJson } from "../src/catalog.mjs";
const [apk, directory, provenance] = process.argv.slice(2);
if (!apk || !directory || !provenance)
  throw Error(
    "Usage: node scripts/unpack-dex.mjs APK DEX_DIRECTORY INPUTS_JSON",
  );
const input = readJson(provenance),
  hash = crypto.createHash("sha256");
for await (const bytes of fs.createReadStream(apk)) hash.update(bytes);
if (hash.digest("hex") !== input.artifact.sha256)
  throw Error("APK does not match pinned provenance");
const zip = new ZipReader(apk);
try {
  const entries = zip.entries.filter((e) => /^classes\d*\.dex$/.test(e.name));
  const expected = new Map(input.dex_files.map((e) => [e.name, e.sha256]));
  if (
    entries.length !== expected.size ||
    new Set(entries.map((e) => e.name)).size !== entries.length ||
    entries.some((e) => !expected.has(e.name))
  )
    throw Error("APK DEX inventory does not match provenance");
  fs.mkdirSync(directory, { recursive: true });
  if (
    fs
      .readdirSync(directory)
      .some((n) => n.endsWith(".dex") && !expected.has(n))
  )
    throw Error("Output directory contains DEX from another input");
  for (const entry of entries) {
    const bytes = zip.readEntry(entry, 64 * 1024 * 1024),
      digest = crypto.createHash("sha256").update(bytes).digest("hex");
    if (digest !== expected.get(entry.name))
      throw Error("DEX provenance mismatch: " + entry.name);
    const target = path.join(directory, entry.name);
    if (fs.existsSync(target)) {
      const prior = crypto
        .createHash("sha256")
        .update(fs.readFileSync(target))
        .digest("hex");
      if (prior !== digest)
        throw Error(
          "Refusing to overwrite different existing DEX: " + entry.name,
        );
    } else fs.writeFileSync(target, bytes, { flag: "wx" });
  }
  console.log(
    JSON.stringify({
      dex_files: entries.length,
      verified_against_pinned_artifact: true,
    }),
  );
} finally {
  zip.close();
}
