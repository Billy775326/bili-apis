import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { readDex } from "../src/dex.mjs";
import {
  classModel,
  buildModelGraph,
  isExternal,
  EXTERNAL_PREFIXES,
} from "../src/http-models.mjs";
const [
  input,
  provenanceFile,
  httpFile = "catalog/android/com.bilibili.app.in/play/6.8.0/http.json",
  output = "catalog/android/com.bilibili.app.in/play/6.8.0",
] = process.argv.slice(2);
if (!input || !provenanceFile)
  throw Error(
    "Usage: node scripts/extract-http-models.mjs DEX_DIRECTORY PROVENANCE_JSON [HTTP_CATALOG] [OUTPUT_DIRECTORY]",
  );
const read = (file) =>
  JSON.parse(fs.readFileSync(file, "utf8").replace(/^\uFEFF/, ""));
const provenance = read(provenanceFile),
  http = read(httpFile);
if (http.artifact.sha256 !== provenance.artifact.sha256)
  throw Error("HTTP/provenance APK mismatch");
const expected = new Map(provenance.dex_files.map((f) => [f.name, f]));
const names = fs
  .readdirSync(input)
  .filter((f) => /^classes\d*\.dex$/.test(f))
  .sort();
if (names.length !== expected.size) throw Error("DEX count mismatch");
const index = new Map(),
  dexFiles = [];
let indexed = 0;
for (const name of names) {
  const bytes = fs.readFileSync(path.join(input, name));
  const hash = crypto.createHash("sha256").update(bytes).digest("hex");
  if (expected.get(name)?.sha256 !== hash)
    throw Error("DEX hash mismatch: " + name);
  const dex = readDex(bytes, name);
  let count = 0;
  for (const cls of dex.classes) {
    if (isExternal(cls.descriptor)) continue;
    const model = classModel(dex, cls);
    if (!index.has(model.descriptor)) index.set(model.descriptor, []);
    index.get(model.descriptor).push(model);
    count++;
  }
  indexed += count;
  dexFiles.push({
    name,
    sha256: hash,
    class_definitions: dex.classes.length,
    indexed_classes: count,
  });
}
const graph = buildModelGraph(index, http.endpoints);
const limitations = [
  "Field inventories are Java/DEX metadata, not verified JSON request/response schemas.",
  "SerializedName, JSONField, Json and other supported serialization annotations are preserved as observed; no requiredness/default/serialization inclusion rules are inferred.",
  "All instance fields and named enum constants are included. Static non-enum fields are excluded; transient/synthetic flags remain visible without guessing serializer behavior.",
  "Graph follows selected descriptor/signature field types and app superclasses; it does not follow methods, object creation, native code, reflection or serializer adapters.",
  "Framework namespaces are listed as external even if their implementation exists in the APK. Dangling references and duplicate class definitions remain explicit.",
];
const catalog = {
  schema_version: 1,
  artifact: provenance.artifact,
  method:
    "HTTP declaration descriptors and generic signatures -> app fields and generic field signatures -> app superclasses",
  external_prefixes: EXTERNAL_PREFIXES,
  limitations,
  dex_files: dexFiles,
  root_references: graph.root_references,
  external_descriptors: graph.external_descriptors,
  unresolved_descriptors: graph.unresolved_descriptors,
  models: graph.models,
};
const text = JSON.stringify(catalog, null, 2) + "\n";
const cap = 35 * 1024 * 1024;
if (Buffer.byteLength(text) > cap)
  throw Error(
    "HTTP model catalog exceeds 35 MiB; split output is required before publishing",
  );
fs.mkdirSync(output, { recursive: true });
fs.writeFileSync(path.join(output, "http-models.json"), text);
const coverage = {
  schema_version: 1,
  artifact: provenance.artifact,
  dex_files_scanned: names.length,
  non_framework_class_definitions_indexed: indexed,
  http_declarations_seeded: http.endpoints.length,
  root_references: graph.root_references.length,
  model_definitions: graph.models.length,
  unique_model_descriptors: new Set(graph.models.map((m) => m.descriptor)).size,
  fields: graph.models.reduce((n, m) => n + m.fields.length, 0),
  enum_constants: graph.models.reduce(
    (n, m) => n + m.fields.filter((f) => f.is_enum_constant).length,
    0,
  ),
  external_descriptors: graph.external_descriptors.length,
  unresolved_descriptors: graph.unresolved_descriptors.length,
  unresolved_references: graph.references.filter(
    (r) => r.status === "unresolved",
  ),
  duplicate_class_descriptors: [...index]
    .filter(([_, v]) => v.length > 1)
    .map(([descriptor, definitions]) => ({
      descriptor,
      definitions: definitions.map((m) => ({
        dex: m.dex,
        class_def_index: m.class_def_index,
      })),
    })),
  size_bytes: Buffer.byteLength(text),
  limitations,
};
fs.writeFileSync(
  path.join(output, "coverage-http-models.json"),
  JSON.stringify(coverage, null, 2) + "\n",
);
console.log(
  JSON.stringify({
    models: coverage.model_definitions,
    fields: coverage.fields,
    external: coverage.external_descriptors,
    unresolved: coverage.unresolved_descriptors,
    size: coverage.size_bytes,
  }),
);
