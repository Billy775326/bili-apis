import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import {
  sanitizeRoute,
  analyzeRouteMethod,
  dynamicTargets,
  finalizeFact,
  verifiedRouteSemantics,
} from "../src/dex-routes.mjs";
const method = (index, owner, name, parameters = [], returnType = "V") => ({
  index,
  owner,
  name,
  parameters,
  returnType,
  descriptor: "(" + parameters.join("") + ")" + returnType,
});
function dex(
  words,
  {
    strings = ["https://api.bilibili.com/x/view?access_key=secret#fragment"],
    methods = [method(0, "LService;", "send", ["Ljava/lang/String;"])],
    types = [],
  } = {},
) {
  const bytes = Buffer.alloc(32 + words.length * 2);
  bytes.writeUInt16LE(8, 16);
  bytes.writeUInt32LE(words.length, 28);
  words.forEach((w, i) => bytes.writeUInt16LE(w, 32 + i * 2));
  return { name: "classes.dex", bytes, strings, methods, fields: [], types };
}
const caller = method(4, "LCaller;", "run");
const run = (d, targets = new Map(), constants = new Map()) =>
  analyzeRouteMethod(d, { codeOffset: 16 }, caller, constants, targets);
const invoke = (index, register = 1) => [0x206e, index, (register << 4) | 7];
test("sanitizes Bilibili domain families including WSS without keeping query/fragment values", () => {
  assert.deepEqual(
    sanitizeRoute(
      "wss://broadcast.chat.bilibili.com/sub?token=secret#fragment",
    ),
    {
      value: "wss://broadcast.chat.bilibili.com/sub",
      host: "broadcast.chat.bilibili.com",
      scheme: "wss",
      path: "/sub",
    },
  );
  assert.equal(
    sanitizeRoute("https://api.biliapi.com/x/test?a=b").value,
    "https://api.biliapi.com/x/test",
  );
  assert.equal(sanitizeRoute("https://evilbilibili.com/x/a"), null);
  assert.equal(sanitizeRoute("/x/view?aid=123").value, "/x/view");
});
test("matches real const-string register argument rather than nearby literal", () => {
  const d = dex([0x001a, 0, 0x011a, 1, ...invoke(0, 1), 0x000e], {
    strings: [
      "https://api.bilibili.com/x/wrong",
      "https://api.bilibili.com/x/right",
    ],
  });
  const result = run(d);
  assert.equal(result.observations.length, 1);
  assert.equal(
    finalizeFact(result.observations[0].fact, new Set()).route.value,
    "https://api.bilibili.com/x/right",
  );
  assert.equal(result.observations[0].source.code_unit_offset, 4);
  assert.equal(result.observations[0].argument_register, 1);
});
test("follows move-object and handles wide parameter word positions for dynamic Url", () => {
  const m = method(0, "LService;", "send", ["J", "Ljava/lang/String;"]);
  const d = dex([0x001a, 0, 0x0107, 0x406e, 0, 0x1234, 0x000e], {
    methods: [m],
  });
  const targets = new Map([
    [
      "LService;->send(JLjava/lang/String;)V",
      { endpoint_id: "e", http_method: "GET", parameters: [1] },
    ],
  ]);
  const result = run(d, targets);
  assert.equal(result.calls[0].argument_register, 1);
  assert.ok(result.calls[0].fact.text.includes("/x/view"));
});
test("branch join clears stale constants and retains unresolved dynamic caller explicitly", () => {
  const d = dex([0x001a, 0, 0x0138, 4, 0x001a, 0, ...invoke(0, 0), 0x000e]);
  const targets = new Map([
    [
      "LService;->send(Ljava/lang/String;)V",
      { endpoint_id: "e", http_method: "GET", parameters: [0] },
    ],
  ]);
  const result = run(d, targets);
  assert.equal(result.calls.length, 1);
  assert.equal(result.calls[0].fact, null);
  assert.equal(result.observations.length, 0);
});
test("rejects malformed instructions, branch targets and invoke registers", () => {
  assert.throws(() => run(dex([0x001b, 0])), /Truncated instruction/);
  assert.throws(() => run(dex([0x0029, 1, 0x000e])), /instruction boundary/);
  assert.throws(
    () => run(dex([0x001a, 0, 0x206e, 0, 0xf7])),
    /register outside/,
  );
});
test("does not trust static constants written elsewhere and never guesses a runtime value", () => {
  const fact = {
    text: "https://passport.bilibili.com/x/login?token=secret",
    locations: [{ dex: "classes.dex", code_unit_offset: 1 }],
    dependencies: ["LF;->URL:Ljava/lang/String;"],
  };
  assert.equal(finalizeFact(fact, new Set(fact.dependencies)).route, null);
  assert.equal(
    finalizeFact(fact, new Set()).route.value,
    "https://passport.bilibili.com/x/login",
  );
});
test("preserves dynamic declaration identity and original Url parameter positions", () => {
  const targets = dynamicTargets({
    endpoints: [
      {
        id: "x",
        declaring_class: "LService;",
        method_name: "send",
        method_descriptor: "(JLjava/lang/String;)V",
        http_method: "POST",
        parameters: [
          { position: 0, annotations: [] },
          { position: 1, annotations: [{ type: "Lretrofit2/http/Url;" }] },
        ],
      },
    ],
  });
  assert.deepEqual(targets.get("LService;->send(JLjava/lang/String;)V"), {
    endpoint_id: "x",
    http_method: "POST",
    parameters: [1],
  });
});
test("provenance failure prevents extraction from modified DEX inputs", (t) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "bili-dex-routes-"));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  const dexdir = path.join(dir, "dex");
  fs.mkdirSync(dexdir);
  fs.writeFileSync(path.join(dexdir, "classes.dex"), "changed");
  const prov = path.join(dir, "inputs.json"),
    http = path.join(dir, "http.json");
  fs.writeFileSync(
    prov,
    JSON.stringify({
      artifact: { sha256: "apk" },
      dex_files: [{ name: "classes.dex", sha256: "invalid" }],
    }),
  );
  fs.writeFileSync(
    http,
    JSON.stringify({ artifact: { sha256: "apk" }, endpoints: [] }),
  );
  const result = spawnSync(
    process.execPath,
    [
      path.resolve("scripts/extract-dex-routes.mjs"),
      dexdir,
      prov,
      http,
      path.join(dir, "out"),
    ],
    { encoding: "utf8" },
  );
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /DEX hash mismatch/);
  assert.equal(fs.existsSync(path.join(dir, "out", "dex-routes.json")), false);
});
function builderFixture(unknownMutation = false) {
  const methods = [
    method(0, "Ljava/lang/StringBuilder;", "<init>"),
    method(
      1,
      "Ljava/lang/StringBuilder;",
      "append",
      ["Ljava/lang/String;"],
      "Ljava/lang/StringBuilder;",
    ),
    method(
      2,
      "Ljava/lang/StringBuilder;",
      "toString",
      [],
      "Ljava/lang/String;",
    ),
    method(3, "LService;", "send", ["Ljava/lang/String;"]),
    method(4, "LUnknown;", "mutate", ["Ljava/lang/StringBuilder;"]),
  ];
  const words = [
    0x0022,
    0,
    0x1070,
    0,
    0,
    0x011a,
    0,
    0x206e,
    1,
    0x10,
    0x000c,
    ...(unknownMutation ? [0x1071, 4, 0] : []),
    0x011a,
    1,
    0x206e,
    1,
    0x10,
    0x000c,
    0x106e,
    2,
    0,
    0x020c,
    0x206e,
    3,
    0x27,
    0x000e,
  ];
  return dex(words, {
    methods,
    types: ["Ljava/lang/StringBuilder;"],
    strings: ["https://api.bilibili.com", "/x/built?token=secret"],
  });
}
test("reconstructs supported StringBuilder argument flow and strips composed query values", () => {
  const result = run(builderFixture());
  const row = result.observations.find((x) => x.callee.method_index === 3);
  assert.ok(row);
  assert.equal(
    finalizeFact(row.fact, new Set()).route.value,
    "https://api.bilibili.com/x/built",
  );
  assert.ok(row.fact.locations.length >= 2);
});
test("unknown builder mutations invalidate future StringBuilder.toString facts", () => {
  const result = run(builderFixture(true));
  assert.equal(
    result.observations.filter((x) => x.callee.method_index === 3).length,
    0,
  );
});
test("encoded static final string facts flow through sget-object and are invalidated by sput-object", () => {
  const d = dex([0x0062, 0, 0x206e, 0, 7, 0x0069, 0, 0x000e]);
  d.fields = [
    { index: 0, owner: "LF;", name: "URL", type: "Ljava/lang/String;" },
  ];
  const key = "LF;->URL:Ljava/lang/String;",
    result = run(
      d,
      new Map(),
      new Map([[key, "https://app.biliapi.com/x/path?token=secret"]]),
    );
  assert.equal(result.observations.length, 1);
  assert.deepEqual(result.staticWrites, [key]);
  assert.equal(
    finalizeFact(result.observations[0].fact, new Set(result.staticWrites))
      .status,
    "unresolved-static-field-written-in-bytecode",
  );
});

const implementationFixture = {
  original_apk_sha256: "pinned-apk",
  facts: [
    {
      label: "okhttp-url-setter",
      dex_owner: "Lokhttp3/z$a;",
      method: "l",
      dex_descriptor: "(Ljava/lang/String;)V",
    },
  ],
  evidence: [
    {
      label: "okhttp-url-setter",
      parent_evidence_id: "ev-reviewed-setter",
      source_status: "complete",
    },
  ],
};
test("upgrades only evidence-matched l(String), leaving i(String) and HTTP verb unverified", () => {
  const semantics = verifiedRouteSemantics(implementationFixture, "pinned-apk");
  const d = dex([0x001a, 0, 0x206e, 0, 7, 0x206e, 1, 7, 0x000e], {
    methods: [
      method(0, "Lokhttp3/z$a;", "l", ["Ljava/lang/String;"]),
      method(1, "Lokhttp3/z$a;", "i", ["Ljava/lang/String;"]),
    ],
  });
  const result = analyzeRouteMethod(
    d,
    { codeOffset: 16 },
    caller,
    new Map(),
    new Map(),
    semantics,
  );
  const l = result.observations.find((r) => r.callee.name === "l"),
    i = result.observations.find((r) => r.callee.name === "i");
  assert.equal(l.sink_kind, "verified-url-setter");
  assert.equal(
    l.sink_semantics_evidence.implementation_fact,
    "evidence/round2-implementation.json#/facts/0",
  );
  assert.equal(
    l.sink_semantics_evidence.parent_evidence_id,
    "ev-reviewed-setter",
  );
  assert.equal(l.http_method, null);
  assert.equal(i.sink_kind, "okhttp-string-argument-unverified-semantics");
  assert.equal(i.sink_semantics_evidence, null);
});
test("never applies implementation evidence to a different APK or incomplete decompilation", () => {
  assert.equal(
    verifiedRouteSemantics(implementationFixture, "other-apk").size,
    0,
  );
  const incomplete = {
    ...implementationFixture,
    evidence: [
      { ...implementationFixture.evidence[0], source_status: "partial" },
    ],
  };
  assert.equal(verifiedRouteSemantics(incomplete, "pinned-apk").size, 0);
});
