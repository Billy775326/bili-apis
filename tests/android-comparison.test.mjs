import test from "node:test";
import assert from "node:assert/strict";
import {
  compareAndroidCatalogs,
  normalizedHttpRoute,
} from "../src/android-comparison.mjs";
const bundle = (hash = "apk", endpoints = [], methods = [], messages = []) => ({
  http: { artifact: { sha256: hash }, endpoints },
  grpc: { artifact: { sha256: hash }, methods },
  messages: { artifact: { sha256: hash }, messages },
});
const query = (name, extra = {}) => ({
  type: "Lretrofit2/http/Query;",
  elements: { value: name, ...extra },
});
const endpoint = (id, url, annotations = []) => ({
  id,
  http_method: "GET",
  path: url,
  absolute_url: url.startsWith("http") ? url : null,
  resolved_url_candidate: null,
  parameters: [{ position: 0, annotations }],
});
const grpc = (id, request = "LReq;", response = "LRes;") => ({
  id,
  request_type_candidate: request,
  response_type_candidate: response,
  declarations: [{ dex: "classes.dex", method_index: 1 }],
});
const message = (descriptor, fields) => ({
  descriptor,
  dex: "classes.dex",
  class_def_index: 1,
  field_numbers: [],
  declared_fields: [],
  wire_layout:
    fields === null
      ? null
      : {
          flags: 0,
          field_count: fields.length,
          fields,
          method_index: 1,
          code_offset: 100,
        },
});
test("normalization preserves distinct authorities/ports and ignores empty dynamic Url routes", () => {
  assert.equal(
    normalizedHttpRoute(
      endpoint("a", "https://API.bilibili.com:8443/x/view?aid=1#fragment"),
    ),
    "GET https://api.bilibili.com:8443/x/view",
  );
  assert.notEqual(
    normalizedHttpRoute(endpoint("a", "https://api.bilibili.com/x/view")),
    normalizedHttpRoute(endpoint("b", "https://app.bilibili.com/x/view")),
  );
  const dynamic = endpoint("d", "", [
    { type: "Lretrofit2/http/Url;", elements: {} },
  ]);
  dynamic.resolved_url_candidate = "https://api.bilibili.com/";
  assert.equal(normalizedHttpRoute(dynamic), null);
});
test("HTTP groups duplicate routes and compares named binding unions without positions or query values", () => {
  const left = bundle("left", [
    endpoint("one", "https://api.bilibili.com/x/view?aid=1", [query("aid")]),
    endpoint("two", "https://api.bilibili.com/x/view?aid=2", [query("pn")]),
  ]);
  const right = bundle("right", [
    endpoint("three", "https://api.bilibili.com/x/view", [
      query("aid"),
      query("sort"),
    ]),
    endpoint("authority", "https://app.bilibili.com/x/view"),
  ]);
  const result = compareAndroidCatalogs(left, right).http;
  assert.equal(result.play_count, 1);
  assert.equal(result.official_count, 2);
  assert.equal(result.common_count, 1);
  assert.deepEqual(result.added, ["GET https://app.bilibili.com/x/view"]);
  assert.deepEqual(result.changed_parameters[0].added_bindings, [
    { binding: "Query", name: "sort" },
  ]);
  assert.deepEqual(result.changed_parameters[0].removed_bindings, [
    { binding: "Query", name: "pn" },
  ]);
});
test("HTTP retains omitted-versus-explicit annotation options and excludes unnamed maps", () => {
  const left = bundle("left", [endpoint("a", "/x/view", [query("aid")])]);
  const right = bundle("right", [
    endpoint("b", "/x/view", [
      query("aid", { encoded: false }),
      { type: "Lretrofit2/http/QueryMap;", elements: { encoded: true } },
    ]),
  ]);
  const changed = compareAndroidCatalogs(left, right).http.changed_parameters;
  assert.equal(changed.length, 1);
  assert.deepEqual(changed[0].added_bindings, [
    { binding: "Query", name: "aid", attributes: { encoded: false } },
  ]);
  assert.deepEqual(changed[0].removed_bindings, [
    { binding: "Query", name: "aid" },
  ]);
});
test("gRPC added/removed IDs and candidate changes are independent from DEX locations", () => {
  const left = bundle(
    "left",
    [],
    [grpc("/S/Keep"), grpc("/S/Change"), grpc("/S/Gone")],
  );
  const right = bundle(
    "right",
    [],
    [
      {
        ...grpc("/S/Keep"),
        declarations: [{ dex: "classes2.dex", method_index: 8 }],
      },
      grpc("/S/Change", "LOther;"),
      grpc("/S/New"),
    ],
  );
  const result = compareAndroidCatalogs(left, right).grpc;
  assert.equal(result.common_count, 2);
  assert.deepEqual(result.added, ["/S/New"]);
  assert.deepEqual(result.removed, ["/S/Gone"]);
  assert.equal(result.changed_count, 1);
  assert.equal(result.changed_candidates[0].id, "/S/Change");
});
test("protobuf compares field layouts and presence indices without equating missing indices with zero", () => {
  const a = message("LMessage;", [
    { number: 1, type_id: 4, type_and_flags: 4 },
    { number: 2, type_id: 8, type_and_flags: 520 },
  ]);
  const b = message("LMessage;", [
    { number: 1, type_id: 4, type_and_flags: 4, presence_index: 0 },
    { number: 3, type_id: 8, type_and_flags: 520 },
  ]);
  const result = compareAndroidCatalogs(
    bundle("a", [], [], [a, message("LGone;", [])]),
    bundle("b", [], [], [b, message("LNew;", [])]),
  ).protobuf;
  assert.deepEqual(result.added, ["LNew;"]);
  assert.deepEqual(result.removed, ["LGone;"]);
  const changed = result.changed_messages[0];
  assert.equal(changed.added_fields[0].number, 3);
  assert.equal(changed.removed_fields[0].number, 2);
  assert.equal(changed.changed_fields[0].number, 1);
  assert.equal(
    Object.hasOwn(changed.changed_fields[0].play_layouts[0], "presence_index"),
    false,
  );
  assert.equal(changed.changed_fields[0].official_layouts[0].presence_index, 0);
});
test("missing protobuf layout is unavailable instead of falsely reporting field removals", () => {
  const left = message("LM;", [{ number: 1, type_id: 4, type_and_flags: 4 }]),
    right = message("LM;", null);
  const result = compareAndroidCatalogs(
    bundle("a", [], [], [left]),
    bundle("b", [], [], [right]),
  ).protobuf.changed_messages[0];
  assert.equal(result.layout_comparison_available, false);
  assert.deepEqual(result.removed_fields, []);
  assert.equal(result.layout_coverage.official_layouts, 0);
  assert.equal(
    compareAndroidCatalogs(
      bundle("a", [], [], [right]),
      bundle("b", [], [], [right]),
    ).protobuf.changed_count,
    0,
  );
});
test("source positions and declaration/input ordering do not change semantic results or mutate input", () => {
  const a = endpoint("a", "/x/a", [query("pn"), query("aid")]),
    b = endpoint("b", "/x/b");
  const left = bundle(
    "a",
    [a, b],
    [],
    [
      message("LM;", [
        { number: 2, type_id: 8 },
        { number: 1, type_id: 4 },
      ]),
    ],
  );
  const right = bundle(
    "b",
    [a, b],
    [],
    [
      message("LM;", [
        { number: 1, type_id: 4 },
        { number: 2, type_id: 8 },
      ]),
    ],
  );
  const copy = structuredClone(left),
    one = compareAndroidCatalogs(left, right);
  const two = compareAndroidCatalogs(
    { ...left, http: { ...left.http, endpoints: [b, a] } },
    { ...right, http: { ...right.http, endpoints: [b, a] } },
  );
  assert.deepEqual(one, two);
  assert.equal(one.protobuf.changed_count, 0);
  assert.deepEqual(left, copy);
  assert.match(one.limitations[0], /channel/);
});
test("different catalog APK hashes within a bundle fail closed", () => {
  const left = bundle("a");
  left.grpc.artifact.sha256 = "other";
  assert.throws(
    () => compareAndroidCatalogs(left, bundle("b")),
    /hashes differ/,
  );
});
