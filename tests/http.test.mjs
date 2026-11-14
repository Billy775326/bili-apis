import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  extractHttpDeclarations,
  extractAll,
} from "../scripts/extract-http.mjs";
function fixture({
  annotations,
  params = [[]],
  descriptor = "(Ljava/lang/String;)Ljava/lang/Object;",
  mismatch = false,
} = {}) {
  return {
    name: "classes.dex",
    methods: [
      {
        index: 0,
        owner: "LObfuscated/a;",
        name: "a",
        descriptor,
        parameters: ["Ljava/lang/String;"],
        returnType: "Ljava/lang/Object;",
      },
    ],
    classes: [
      {
        index: 0,
        descriptor: "LObfuscated/a;",
        annotations: [],
        definedMethods: [
          {
            methodIndex: 0,
            annotations: annotations ?? [
              {
                type: "Lretrofit2/http/GET;",
                elements: { value: "https://api.bilibili.com/x/view" },
              },
            ],
            parameterAnnotations: params,
            parameterAnnotationCountMismatch: mismatch,
          },
        ],
      },
    ],
  };
}
test("extracts obfuscated declarations with exact verb, URL and parameter metadata", () => {
  const d = fixture({
    params: [[{ type: "Lretrofit2/http/Query;", elements: { value: "aid" } }]],
  });
  const e = extractHttpDeclarations(d).endpoints[0];
  assert.equal(e.http_method, "GET");
  assert.equal(e.path, "https://api.bilibili.com/x/view");
  assert.equal(e.host, "api.bilibili.com");
  assert.equal(e.parameters[0].annotations[0].elements.value, "aid");
  assert.equal(e.declaring_class, "LObfuscated/a;");
  assert.equal(e.verification, "static-declaration");
});
test("retains dynamic URL without inventing a host or route", () => {
  const d = fixture({
    annotations: [{ type: "Lretrofit2/http/POST;", elements: {} }],
    params: [[{ type: "Lretrofit2/http/Url;", elements: {} }]],
  });
  const e = extractHttpDeclarations(d).endpoints[0];
  assert.equal(e.path, "");
  assert.equal(e.host, null);
  assert.equal(e.absolute_url, null);
});
test("preserves HTTP annotation and never classifies interceptor alone as a route", () => {
  const d = fixture({
    annotations: [
      {
        type: "Lretrofit2/http/HTTP;",
        elements: { method: "DELETE", path: "/x/item", hasBody: true },
      },
      {
        type: "Lcom/bilibili/okretro/anno/RequestInterceptor;",
        elements: { value: "LSign;" },
      },
    ],
  });
  const e = extractHttpDeclarations(d).endpoints[0];
  assert.equal(e.http_method, "DELETE");
  assert.deepEqual(e.request_interceptors, ["LSign;"]);
  assert.equal(e.method_annotations[0].elements.hasBody, true);
  d.classes[0].definedMethods[0].annotations.shift();
  assert.equal(extractHttpDeclarations(d).endpoints.length, 0);
});
test("signals parameter mismatch without silently treating annotations as aligned", () => {
  const e = extractHttpDeclarations(
    fixture({ params: [[], []], mismatch: true }),
  ).endpoints[0];
  assert.equal(e.parameter_annotation_alignment, "mismatch");
  assert.equal(e.unmapped_parameter_annotations.length, 2);
});
test("provenance rejects omitted or changed DEX inputs", (t) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "bili-http-"));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  assert.throws(
    () =>
      extractAll(dir, { dex_files: [{ name: "classes.dex", sha256: "bad" }] }),
    /count differs/,
  );
  fs.writeFileSync(path.join(dir, "classes.dex"), "not a DEX");
  assert.throws(
    () =>
      extractAll(dir, { dex_files: [{ name: "classes.dex", sha256: "bad" }] }),
    /hash mismatch/,
  );
});
test("resolves explicit base annotation candidates without asserting a runtime host", () => {
  const d = fixture({
    annotations: [
      { type: "Lretrofit2/http/GET;", elements: { value: "child" } },
    ],
  });
  d.classes[0].annotations = [
    {
      type: "Lretrofit2/http/BaseUrl;",
      elements: { value: "https://api.bilibili.com/x/" },
    },
  ];
  const e = extractHttpDeclarations(d).endpoints[0];
  assert.equal(e.base_url, "https://api.bilibili.com/x/");
  assert.equal(e.resolved_url_candidate, "https://api.bilibili.com/x/child");
  assert.equal(e.absolute_url, null);
  assert.equal(e.host, null);
  assert.equal(e.host_candidate, "api.bilibili.com");
});
test("URL resolution distinguishes leading slash and absolute routes", () => {
  const d = fixture({
    annotations: [
      { type: "Lretrofit2/http/GET;", elements: { value: "/root" } },
    ],
  });
  d.classes[0].annotations = [
    {
      type: "Lretrofit2/http/BaseUrl;",
      elements: { value: "https://api.bilibili.com/x/" },
    },
  ];
  assert.equal(
    extractHttpDeclarations(d).endpoints[0].resolved_url_candidate,
    "https://api.bilibili.com/root",
  );
  d.classes[0].definedMethods[0].annotations[0].elements.value =
    "https://other.example/video";
  const e = extractHttpDeclarations(d).endpoints[0];
  assert.equal(e.resolved_url_candidate, "https://other.example/video");
  assert.equal(e.host_candidate, "other.example");
});
test("does not invent resolution for invalid bases, dynamic URLs or ambiguous base precedence", () => {
  const d = fixture({
    annotations: [
      { type: "Lretrofit2/http/GET;", elements: { value: "child" } },
    ],
  });
  d.classes[0].annotations = [
    { type: "Lretrofit2/http/BaseUrl;", elements: { value: "not a URL" } },
  ];
  assert.equal(
    extractHttpDeclarations(d).endpoints[0].resolved_url_candidate,
    null,
  );
  d.classes[0].annotations[0].elements.value = "https://a.example/";
  d.classes[0].definedMethods[0].annotations.push({
    type: "Lretrofit2/http/BaseUrl;",
    elements: { value: "https://b.example/" },
  });
  let e = extractHttpDeclarations(d).endpoints[0];
  assert.equal(e.base_url_ambiguous, true);
  assert.equal(e.resolved_url_candidate, null);
  assert.equal(e.resolved_url_candidates.length, 2);
  d.classes[0].definedMethods[0].parameterAnnotations = [
    [{ type: "Lretrofit2/http/Url;", elements: {} }],
  ];
  e = extractHttpDeclarations(d).endpoints[0];
  assert.deepEqual(e.resolved_url_candidates, []);
});
