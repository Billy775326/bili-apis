import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { readJson } from "../src/catalog.mjs";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), ".."),
  read = (n) => readJson(path.join(root, "catalog/android/com.bilibili.app.in/play/6.8.0", n + ".json"));
test("discovery summary pins parsed source JSON across whitespace and platform line endings", () => {
  const summary = read("discovery-summary");
  for (const source of summary.sources) {
    const data = readJson(path.join(root, source.file));
    const actual = crypto
      .createHash("sha256")
      .update(JSON.stringify(data))
      .digest("hex");
    assert.equal(actual, source.json_stringify_sha256, source.file);
  }
  assert.equal(
    summary.dynamic_url.resolved_sites + summary.dynamic_url.unresolved_sites,
    summary.dynamic_url.caller_sites,
  );
});
test("gRPC audit accounts for definitions without counting broadcast paths as RPCs", () => {
  const coverage = read("coverage-grpc-audit"),
    known = read("grpc"),
    extra = read("grpc-additional");
  assert.equal(
    Object.values(coverage.descriptor_classifications).reduce(
      (a, b) => a + b,
      0,
    ),
    coverage.method_descriptor_return_definitions,
  );
  assert.equal(
    coverage.unique_routes_referenced_from_method_bodies,
    known.methods.length,
  );
  assert.deepEqual(extra.new_confirmed_rpc_routes, []);
  for (const route of extra.broadcast_dispatch_paths)
    assert.equal(route.is_confirmed_rpc_request_route, false);
});
test("native observations retain original member hashes and valid Java declaration references", () => {
  const native = read("native"),
    archives = read("artifacts"),
    archive = archives.archives.find(
      (a) => a.sha256 === native.native_archive.sha256,
    );
  assert.ok(archive);
  const members = new Map(archive.members.map((m) => [m.name, m.sha256])),
    java = new Set(native.java_native_declarations.map((m) => m.id));
  for (const library of native.libraries) {
    assert.equal(library.sha256, members.get(library.member));
    for (const table of library.jni_table_candidates) {
      assert.equal(table.status, "jni-table-layout-candidate");
      assert.ok(
        table.table_file_offset >= 0 &&
          table.table_file_offset + 24 <= library.size,
      );
      for (const id of table.java_native_candidates) assert.ok(java.has(id));
    }
  }
});
