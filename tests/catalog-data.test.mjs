import { test } from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadCatalog, readJson } from "../src/catalog.mjs";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
test("committed catalogs retain unique IDs and pinned artifact provenance", () => {
  const entries = loadCatalog(root),
    ids = entries.map((e) => e.id);
  assert.equal(new Set(ids).size, ids.length);
  const input = readJson(path.join(root, "evidence/inputs.json"));
  for (const file of ["http", "grpc", "messages"]) {
    const c = readJson(path.join(root, "catalog", file + ".json"));
    assert.equal(c.artifact.sha256, input.artifact.sha256);
  }
  const expected = input.dex_files.map((d) => [d.name, d.sha256]).sort();
  for (const file of ["http", "grpc"]) {
    const c = readJson(path.join(root, "catalog", file + ".json"));
    assert.deepEqual(
      c.dex_files.map((d) => [d.name, d.sha256]).sort(),
      expected,
    );
  }
});
test("all message field numbers match independent generated constants", () => {
  const report = readJson(path.join(root, "catalog/messages.json"));
  for (const m of report.messages) {
    assert.ok(m.wire_layout, m.descriptor);
    assert.equal(m.field_number_cross_check, "matched", m.descriptor);
    assert.deepEqual(
      m.wire_layout.fields.map((f) => f.number).sort((a, b) => a - b),
      m.field_numbers.map((f) => f.number).sort((a, b) => a - b),
      m.descriptor,
    );
  }
});
