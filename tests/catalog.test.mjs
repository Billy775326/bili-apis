import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  loadCatalog,
  select,
  summarize,
  CATALOG_KINDS,
} from "../src/catalog.mjs";
const sample = [
  { kind: "http", id: "h1", http_method: "GET", path: "/x/search" },
  { kind: "http", id: "h2", http_method: "POST", path: "/x/reply" },
  { kind: "grpc", id: "/a.Search/Find" },
];
test("query paging preserves full match count and transport scope", () => {
  const r = select(sample, { query: "SEARCH", limit: 1 });
  assert.equal(r.total, 2);
  assert.equal(r.next_offset, 1);
  assert.equal(r.entries[0].id, "h1");
  assert.equal(
    select(sample, { query: "SEARCH", kind: "grpc" }).entries[0].id,
    "/a.Search/Find",
  );
  assert.equal(select(sample, { offset: 9 }).entries.length, 0);
});
test("invalid transport and unsafe pagination fail", () => {
  for (const o of [
    { kind: "unknown" },
    { offset: -1 },
    { limit: 0 },
    { limit: Infinity },
    { offset: 0.5 },
  ])
    assert.throws(() => select(sample, o));
});
test("malformed catalog shape is rejected", (t) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "bili-catalog-"));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  fs.mkdirSync(path.join(dir, "catalog/android/com.bilibili.app.in/play/6.8.0"), { recursive: true });
  fs.writeFileSync(
    path.join(dir, "catalog/android/com.bilibili.app.in/play/6.8.0/http.json"),
    JSON.stringify({ endpoints: null }),
  );
  assert.throws(() => loadCatalog(dir), /expected endpoints array/);
});
test("counts include all transport kinds without implying live verification", () => {
  const r = summarize(sample);
  assert.deepEqual(
    r.counts,
    Object.fromEntries(
      CATALOG_KINDS.map((kind) => [
        kind,
        kind === "http" ? 2 : kind === "grpc" ? 1 : 0,
      ]),
    ),
  );
  assert.deepEqual(r.http_verbs, { GET: 1, POST: 1 });
  assert.match(r.verification, /Static/);
});
