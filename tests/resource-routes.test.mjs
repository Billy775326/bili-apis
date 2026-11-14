import { test } from "node:test";
import assert from "node:assert/strict";
import { parse } from "@babel/parser";
import { analyzeJavaScript, analyzeJson } from "../src/resource-routes.mjs";
test("fetch literal method and omitted GET default remain distinct", () => {
  const r = analyzeJavaScript(
    `fetch('/x/view');fetch('/x/reply',{method:'POST',body:{oid:123,access_key:'PRIVATE'}});`,
    parse,
  );
  assert.equal(r.declarations[0].method, "GET");
  assert.equal(r.declarations[1].method, "POST");
  assert.deepEqual(r.declarations[1].request_keys, ["access_key", "oid"]);
  assert.ok(!JSON.stringify(r).includes("PRIVATE"));
});
test("computed routes and method values remain unknown", () => {
  const r = analyzeJavaScript("fetch(prefix+id,{method:verb});", parse);
  assert.equal(r.declarations.length, 1);
  assert.equal(r.declarations[0].computed, true);
  assert.equal(r.declarations[0].method, null);
  assert.equal(r.declarations[0].path, null);
});
test("wrapper-shaped get is a candidate while axios syntax is a declaration", () => {
  const r = analyzeJavaScript(
    `a.get('/x/reply');axios.post('/x/action',{oid:4},{baseURL:'https://api.bilibili.com',params:{csrf:'PRIVATE'}});map.get(key);`,
    parse,
  );
  assert.equal(r.candidates.length, 1);
  assert.equal(r.declarations.length, 1);
  assert.equal(r.declarations[0].method, "POST");
  assert.deepEqual(r.declarations[0].request_keys, ["oid"]);
  assert.deepEqual(r.declarations[0].query_keys, ["csrf"]);
  assert.ok(!JSON.stringify(r).includes("PRIVATE"));
});
test("UTF8 bytes differ correctly from UTF16 source offsets", () => {
  const source = `'中文';fetch('/x/view?access_key=SECRET#frag')`,
    r = analyzeJavaScript(source, parse),
    item = r.declarations[0];
  assert.equal(item.source_utf16_offset, 5);
  assert.equal(item.source_byte_offset, 9);
  assert.equal(item.path, "/x/view");
  assert.deepEqual(item.query_parameter_names, ["access_key"]);
  assert.ok(!JSON.stringify(r).includes("SECRET"));
});
test("WebSocket and grpc-web syntax retain transport facts", () => {
  const r = analyzeJavaScript(
    `new WebSocket('wss://example.test/socket?token=SECRET');fetch('/service/Call',{method:'POST',headers:{'Content-Type':'application/grpc-web+proto'}})`,
    parse,
  );
  assert.equal(r.declarations[0].transport, "websocket");
  assert.equal(r.declarations[0].path, "wss://example.test/socket");
  assert.equal(r.declarations[1].transport, "grpc-web");
  assert.ok(!JSON.stringify(r).includes("SECRET"));
});
test("JSON declaration position uses exact JSON pointer and omits values", () => {
  const r = analyzeJson(
    '{"api":{"url":"/x/action?csrf=SECRET","method":"post","data":{"uid":123}}}',
  );
  assert.equal(r.declarations[0].json_pointer, "/api");
  assert.deepEqual(r.declarations[0].request_keys, ["uid"]);
  assert.ok(!JSON.stringify(r).includes("SECRET"));
  assert.throws(() => analyzeJson("{bad}"));
});
test("malformed JavaScript never reports a successful empty parse", () => {
  assert.throws(() => analyzeJavaScript("fetch(", parse));
});
test("computed object property names do not become static request schemas", () => {
  const r = analyzeJavaScript(
    `fetch('/x/view',{method:'POST',body:{[dynamic]:42,fixed:1}})`,
    parse,
  );
  assert.deepEqual(r.declarations[0].request_keys, ["fixed"]);
});

test("nested ZIP CLI retains origin chain and never extracts traversal names", async (t) => {
  const fs = await import("node:fs"),
    os = await import("node:os"),
    path = await import("node:path"),
    { spawnSync } = await import("node:child_process"),
    { crc32 } = await import("../src/zip.mjs");
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "bili-resource-test-"));
  t.after(() => {
    const resolved = path.resolve(dir);
    assert.ok(resolved.startsWith(path.resolve(os.tmpdir()) + path.sep));
    assert.match(path.basename(resolved), /^bili-resource-test-/);
    fs.rmSync(resolved, { recursive: true, force: true });
  });
  function zip(name, value) {
    const n = Buffer.from(name),
      b = Buffer.from(value),
      crc = (crc32(b) ^ 0xffffffff) >>> 0,
      l = Buffer.alloc(30 + n.length),
      c = Buffer.alloc(46 + n.length),
      e = Buffer.alloc(22);
    l.writeUInt32LE(0x04034b50);
    l.writeUInt32LE(crc, 14);
    l.writeUInt32LE(b.length, 18);
    l.writeUInt32LE(b.length, 22);
    l.writeUInt16LE(n.length, 26);
    n.copy(l, 30);
    c.writeUInt32LE(0x02014b50);
    c.writeUInt32LE(crc, 16);
    c.writeUInt32LE(b.length, 20);
    c.writeUInt32LE(b.length, 24);
    c.writeUInt16LE(n.length, 28);
    n.copy(c, 46);
    e.writeUInt32LE(0x06054b50);
    e.writeUInt16LE(1, 8);
    e.writeUInt16LE(1, 10);
    e.writeUInt32LE(c.length, 12);
    e.writeUInt32LE(l.length + b.length, 16);
    return Buffer.concat([l, b, c, e]);
  }
  const apk = path.join(dir, "input.apk"),
    out = path.join(dir, "out.json"),
    coverage = path.join(dir, "coverage.json");
  fs.writeFileSync(
    apk,
    zip(
      "assets/inner.zip",
      zip(
        "../payload.js",
        "fetch('/x/test?token=PRIVATE',{method:'POST',body:{oid:7}})",
      ),
    ),
  );
  const cli = spawnSync(
    process.execPath,
    [
      "scripts/extract-resource-routes.mjs",
      "--apk",
      apk,
      "--output",
      out,
      "--coverage",
      coverage,
    ],
    { encoding: "utf8" },
  );
  assert.equal(cli.status, 0, cli.stderr);
  const report = JSON.parse(fs.readFileSync(out, "utf8"));
  assert.equal(report.declarations.length, 1);
  assert.equal(report.declarations[0].archive_chain.length, 2);
  assert.equal(report.declarations[0].member, "../payload.js");
  assert.equal(report.declarations[0].path, "/x/test");
  assert.ok(!JSON.stringify(report).includes("PRIVATE"));
  assert.equal(fs.existsSync(path.join(dir, "payload.js")), false);
});
