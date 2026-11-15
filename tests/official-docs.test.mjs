import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import { gzipSync, gunzipSync } from "node:zlib";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
const repository = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const sha256 = (bytes) =>
  crypto.createHash("sha256").update(bytes).digest("hex");
function fixture(t, { published = false } = {}) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "bili-official-docs-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  for (const file of [
    "scripts/build-official-android.mjs",
    "src/catalog.mjs",
    "src/android-comparison.mjs",
    "src/functions.mjs",
    "evidence/official-android/inputs.json",
  ]) {
    const target = path.join(root, file);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(path.join(repository, file), target);
  }
  const run = (...args) =>
    spawnSync(
      process.execPath,
      ["scripts/build-official-android.mjs", ...args],
      { cwd: root, encoding: "utf8", timeout: 30000 },
    );
  const official = path.join(root, "catalog/official-android");
  if (published) {
    fs.mkdirSync(official, { recursive: true });
    for (const name of fs
      .readdirSync(path.join(repository, "catalog/official-android"))
      .filter((name) => name.endsWith(".json.gz") || name === "manifest.json"))
      fs.copyFileSync(
        path.join(repository, "catalog/official-android", name),
        path.join(official, name),
      );
    const playArtifact = { sha256: "b".repeat(64) };
    for (const [file, data] of [
      ["http.json", { artifact: playArtifact, endpoints: [] }],
      ["grpc.json", { artifact: playArtifact, methods: [] }],
      ["messages.json", { artifact: playArtifact, messages: [] }],
    ])
      fs.writeFileSync(path.join(root, "catalog", file), JSON.stringify(data));
  }
  return { root, official, run };
}
function allFiles(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs
    .readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory()
        ? allFiles(path.join(directory, entry.name))
        : [path.join(directory, entry.name)],
    );
}
test("official publication rejects a different APK before writing any catalog files", (t) => {
  const f = fixture(t),
    source = path.join(f.root, "incoming");
  fs.mkdirSync(source);
  fs.writeFileSync(
    path.join(source, "http.json"),
    JSON.stringify({ artifact: { sha256: "wrong-apk" }, endpoints: [] }),
  );
  const result = f.run("--import", source);
  assert.notEqual(result.status, 0, result.stdout);
  assert.match(result.stderr, /pinned|baseline|official.*identity/i);
  assert.deepEqual(allFiles(path.join(f.root, "catalog")), []);
  assert.equal(fs.existsSync(path.join(f.root, "docs")), false);
});
for (const updateCompressedHash of [false, true]) {
  test(`coverage integrity failure (${updateCompressedHash ? "uncompressed hash" : "compressed hash"}) preserves comparison and documentation`, (t) => {
    const f = fixture(t, { published: true }),
      file = "coverage-http.json.gz",
      target = path.join(f.official, file);
    const data = JSON.parse(gunzipSync(fs.readFileSync(target)));
    data.http_declarations = 999999;
    const packed = gzipSync(Buffer.from(JSON.stringify(data) + "\n"));
    fs.writeFileSync(target, packed);
    if (updateCompressedHash) {
      const manifestPath = path.join(f.official, "manifest.json"),
        manifest = JSON.parse(fs.readFileSync(manifestPath)),
        record = manifest.files.find((record) => record.name === file);
      record.sha256 = sha256(packed);
      record.bytes = packed.length;
      fs.writeFileSync(manifestPath, JSON.stringify(manifest));
    }
    const comparison = path.join(f.official, "comparison.json"),
      readme = path.join(f.root, "docs/official-android/README.md");
    fs.mkdirSync(path.dirname(readme), { recursive: true });
    const oldComparison = Buffer.from("original comparison sentinel\n"),
      oldReadme = Buffer.from("original documentation sentinel\n");
    fs.writeFileSync(comparison, oldComparison);
    fs.writeFileSync(readme, oldReadme);
    const result = f.run();
    assert.notEqual(result.status, 0, result.stdout);
    assert.match(result.stderr, /coverage-http/);
    assert.match(result.stderr, /hash mismatch|integrity|checksum/i);
    assert.deepEqual(
      fs.readFileSync(comparison),
      oldComparison,
      "comparison was overwritten before integrity failure",
    );
    assert.deepEqual(
      fs.readFileSync(readme),
      oldReadme,
      "documentation was overwritten before integrity failure",
    );
    assert.deepEqual(
      allFiles(path.dirname(readme)),
      [readme],
      "other category documentation was generated before integrity validation",
    );
  });
}
