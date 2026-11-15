import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { readDex } from "../src/dex.mjs";
import {
  analyzeRouteMethod,
  staticStringConstants,
  dynamicTargets,
  finalizeFact,
  sanitizeRoute,
  verifiedRouteSemantics,
} from "../src/dex-routes.mjs";
const [
  directory,
  provenanceFile = "evidence/inputs.json",
  httpFile = "catalog/android/com.bilibili.app.in/play/6.8.0/http.json",
  outputDirectory = "catalog/android/com.bilibili.app.in/play/6.8.0",
] = process.argv.slice(2);
if (!directory)
  throw Error(
    "Usage: node scripts/extract-dex-routes.mjs DEX_DIRECTORY [PROVENANCE] [HTTP_CATALOG] [OUTPUT_DIRECTORY]",
  );
const read = (f) =>
  JSON.parse(fs.readFileSync(f, "utf8").replace(/^\uFEFF/, ""));
const provenance = read(provenanceFile),
  http = read(httpFile);
if (http.artifact.sha256 !== provenance.artifact.sha256)
  throw Error("HTTP/DEX artifact mismatch");
const expected = new Map(provenance.dex_files.map((f) => [f.name, f]));
const names = fs
  .readdirSync(directory)
  .filter((f) => /^classes\d*\.dex$/.test(f))
  .sort();
if (names.length !== expected.size) throw Error("DEX input count mismatch");
const load = (name) => {
  const bytes = fs.readFileSync(path.join(directory, name)),
    hash = crypto.createHash("sha256").update(bytes).digest("hex");
  if (expected.get(name)?.sha256 !== hash)
    throw Error("DEX hash mismatch: " + name);
  return readDex(bytes, name);
};
const implementationFile = "evidence/round2-implementation.json";
const semantics = fs.existsSync(implementationFile)
  ? verifiedRouteSemantics(read(implementationFile), provenance.artifact.sha256)
  : new Map();
const constants = new Map(),
  ambiguous = new Set();
for (const name of names) {
  const d = load(name);
  for (const [key, value] of staticStringConstants(d)) {
    if (constants.has(key) && constants.get(key) !== value) ambiguous.add(key);
    constants.set(key, value);
  }
}
for (const key of ambiguous) constants.delete(key);
const targets = dynamicTargets(http),
  literalRows = [],
  observations = [],
  callers = [],
  written = new Set(),
  failures = [],
  dexFiles = [];
let total = 0,
  codeMethods = 0;
for (const name of names) {
  const d = load(name);
  let scanned = 0;
  for (const cls of d.classes)
    for (const def of cls.definedMethods) {
      total++;
      if (!def.codeOffset) continue;
      codeMethods++;
      scanned++;
      const method = d.methods[def.methodIndex];
      try {
        const r = analyzeRouteMethod(
          d,
          def,
          method,
          constants,
          targets,
          semantics,
        );
        literalRows.push(
          ...r.literals.map((x) => ({
            ...x,
            declaring_class: method.owner,
            method_name: method.name,
            method_descriptor: method.descriptor,
          })),
        );
        observations.push(...r.observations);
        callers.push(...r.calls);
        for (const key of r.staticWrites) written.add(key);
      } catch (error) {
        failures.push({
          dex: name,
          method_index: method.index,
          declaring_class: method.owner,
          method_name: method.name,
          method_descriptor: method.descriptor,
          error: error.message,
        });
      }
    }
  dexFiles.push({
    name,
    sha256: expected.get(name).sha256,
    code_methods_scanned: scanned,
  });
}
const knownUrls = new Map(),
  knownPaths = new Map();
for (const e of http.endpoints) {
  for (const text of [e.absolute_url, e.resolved_url_candidate, e.path]) {
    const r = sanitizeRoute(text);
    if (!r) continue;
    const map = r.host ? knownUrls : knownPaths,
      key = r.value;
    if (!map.has(key)) map.set(key, new Set());
    map.get(key).add(e.id);
    if (!knownPaths.has(r.path)) knownPaths.set(r.path, new Set());
    knownPaths.get(r.path).add(e.id);
  }
}
function known(route) {
  const exact = knownUrls.get(route.value),
    partial = knownPaths.get(route.path);
  return {
    known_route_match: exact ? "absolute-url" : partial ? "path-only" : "none",
    known_http_endpoint_ids: [...(exact ?? partial ?? [])],
  };
}
const routes = [];
for (const row of observations) {
  const { fact, ...source } = row,
    checked = finalizeFact(fact, written);
  if (!checked.route) continue;
  routes.push({
    ...source,
    ...checked.route,
    value_status: checked.status,
    value_sources: checked.sources,
    ...known(checked.route),
    verification: "register-associated-static-candidate",
  });
}
const dynamicCallers = callers.map(({ fact, ...row }) => {
  const checked = finalizeFact(fact, written);
  return {
    ...row,
    value_status: checked.status,
    route: checked.route,
    value_sources: checked.sources,
    ...(checked.route ? known(checked.route) : {}),
  };
});
const declarations = [...targets.values()].map((target) => ({
  endpoint_id: target.endpoint_id,
  http_method: target.http_method,
  url_parameter_positions: target.parameters,
  call_sites: dynamicCallers.filter((c) => c.endpoint_id === target.endpoint_id)
    .length,
  resolved_route_call_sites: dynamicCallers.filter(
    (c) => c.endpoint_id === target.endpoint_id && c.route !== null,
  ).length,
}));
const limitations = [
  "Constant values are propagated only within straight-line basic blocks; branch/exception entries and unsupported effects invalidate facts.",
  "Supported producers: const-string, moves, encoded static-final strings not written by any decoded sput-object, StringBuilder/StringBuffer append/toString and String.concat/valueOf/Kotlin stringPlus.",
  "No interprocedural return-value inference, heap-field propagation, reflection/native/runtime execution or unknown builder semantics.",
  "Literal-to-call associations prove only static argument dataflow, not that the target method sends a request; URL/URI constructors and WebView navigation are separate categories.",
  "All literal query and fragment values are stripped before output. Existing HTTP matches indicate URL/path overlap, not equivalent verbs, schemas or runtime behavior.",
  "Any unsupported methods listed in coverage may hide additional string constants or field writes; static-final dependent facts remain candidates.",
];
const result = {
  schema_version: 1,
  artifact: provenance.artifact,
  method:
    "Format-aware DEX code_item instructions and conservative intrablock register matching",
  dex_files: dexFiles,
  limitations,
  dynamic_url_declarations: declarations,
  dynamic_url_callers: dynamicCallers,
  route_argument_candidates: routes,
  literal_candidates: literalRows.map((row) => ({
    ...row,
    ...known(row),
    verification: "const-string-only",
  })),
};
fs.mkdirSync(outputDirectory, { recursive: true });
const text = JSON.stringify(result, null, 2) + "\n";
if (Buffer.byteLength(text) > 35 * 1024 * 1024)
  throw Error("DEX route catalog exceeds 35 MiB; split required");
fs.writeFileSync(path.join(outputDirectory, "dex-routes.json"), text);
const coverage = {
  schema_version: 1,
  artifact: provenance.artifact,
  dex_files_scanned: names.length,
  method_definitions_scanned: total,
  code_methods_scanned: codeMethods,
  unsupported_methods: failures,
  unsupported_method_count: failures.length,
  encoded_static_final_strings: constants.size,
  ambiguous_static_constants: ambiguous.size,
  observed_static_field_writes: written.size,
  verified_url_setter_occurrences: routes.filter(
    (r) => r.sink_kind === "verified-url-setter",
  ).length,
  verified_sink_semantics: [...semantics.values()],
  literal_occurrences: literalRows.length,
  route_argument_occurrences: routes.length,
  unique_route_argument_values: new Set(routes.map((r) => r.value)).size,
  new_url_or_path_values: [
    ...new Set(
      routes.filter((r) => r.known_route_match === "none").map((r) => r.value),
    ),
  ].sort(),
  dynamic_url_declarations: declarations.length,
  dynamic_url_call_sites: dynamicCallers.length,
  dynamic_url_resolved_sites: dynamicCallers.filter((c) => c.route).length,
  dynamic_url_unresolved_sites: dynamicCallers.filter((c) => !c.route).length,
  limitations,
};
fs.writeFileSync(
  path.join(outputDirectory, "coverage-dex-routes.json"),
  JSON.stringify(coverage, null, 2) + "\n",
);
console.log(
  JSON.stringify({
    methods: codeMethods,
    unsupported: failures.length,
    literals: literalRows.length,
    route_arguments: routes.length,
    unique_routes: coverage.unique_route_argument_values,
    dynamic_sites: dynamicCallers.length,
    dynamic_resolved: coverage.dynamic_url_resolved_sites,
    new_values: coverage.new_url_or_path_values.length,
    bytes: Buffer.byteLength(text),
  }),
);
