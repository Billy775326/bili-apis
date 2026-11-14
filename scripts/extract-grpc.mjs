import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { readDex } from "../src/dex.mjs";
import { instructions, decodeMessageInfo } from "../src/grpc.mjs";
const input = process.argv[2],
  provenance = process.argv[3],
  out = process.argv[4] ?? "catalog";
if (!input || !provenance)
  throw Error(
    "Usage: node scripts/extract-grpc.mjs DEX_DIR INPUTS_JSON [OUTPUT_DIR]",
  );
const provenanceRecord = JSON.parse(
  fs.readFileSync(provenance, "utf8").replace(/^\uFEFF/, ""),
);
if (!provenanceRecord.artifact || !Array.isArray(provenanceRecord.dex_files))
  throw Error("Pinned artifact and DEX provenance are required");
const artifact = provenanceRecord.artifact;
const expectedDex = new Map(
  provenanceRecord.dex_files.map((d) => [d.name, d.sha256]),
);
const sourceNames = fs
  .readdirSync(input)
  .filter((n) => /^classes\d*\.dex$/.test(n))
  .sort();
if (sourceNames.length !== expectedDex.size)
  throw Error("DEX input count differs from provenance");
const methods = new Map(),
  messages = [],
  dex_files = [],
  diagnostics = [];
let methodDescriptorDefinitions = 0,
  descriptorBuilders = 0,
  messageClasses = 0,
  mossClasses = 0;
for (const name of fs
  .readdirSync(input)
  .filter((n) => /^classes\d*\.dex$/.test(n))
  .sort()) {
  const bytes = fs.readFileSync(path.join(input, name)),
    digest = crypto.createHash("sha256").update(bytes).digest("hex");
  if (expectedDex.get(name) !== digest)
    throw Error("DEX provenance mismatch: " + name);
  const dex = readDex(bytes, name);
  dex_files.push({
    name,
    sha256: crypto.createHash("sha256").update(bytes).digest("hex"),
    size: bytes.length,
    class_count: dex.classes.length,
  });
  for (const cls of dex.classes) {
    if (/Moss;$/.test(cls.descriptor)) mossClasses++;
    const isMessage =
      cls.superType === "Lcom/google/protobuf/GeneratedMessageLite;" &&
      cls.descriptor.startsWith("Lcom/bapis/");
    let model;
    if (isMessage) {
      messageClasses++;
      const statics = cls.definedFields.filter((f) => f.isStatic);
      model = {
        descriptor: cls.descriptor,
        dex: name,
        class_def_index: cls.index,
        field_numbers: statics
          .map((f, i) => ({
            field: dex.fields[f.fieldIndex],
            value: cls.staticValues[i] ?? 0,
          }))
          .filter((f) => f.field.name.endsWith("_FIELD_NUMBER"))
          .map((f) => ({
            constant: f.field.name,
            number: f.value,
            field_index: f.field.index,
          })),
        declared_fields: cls.definedFields
          .filter((f) => !f.isStatic)
          .map((f) => {
            const field = dex.fields[f.fieldIndex];
            return {
              name: field.name,
              type: field.type,
              field_index: field.index,
            };
          }),
        wire_layout: null,
      };
      messages.push(model);
    }
    for (const def of cls.definedMethods) {
      const method = dex.methods[def.methodIndex],
        isDescriptor = method.returnType === "Lio/grpc/MethodDescriptor;";
      if (isDescriptor) methodDescriptorDefinitions++;
      if (
        !def.codeOffset ||
        (!isDescriptor && !(isMessage && method.name === "dynamicMethod"))
      )
        continue;
      let events;
      try {
        events = instructions(bytes, def.codeOffset);
      } catch (error) {
        diagnostics.push({
          dex: name,
          class_descriptor: cls.descriptor,
          method_index: method.index,
          message: error.message,
        });
        continue;
      }
      if (isDescriptor) {
        const joins = events.filter(
          (e) =>
            e.kind === "invoke" &&
            dex.methods[e.index].owner === "Lio/grpc/MethodDescriptor;" &&
            dex.methods[e.index].descriptor ===
              "(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;",
        );
        for (const join of joins) {
          const prev = events
            .filter(
              (e) =>
                e.kind === "string" &&
                e.code_unit_offset < join.code_unit_offset,
            )
            .slice(-2);
          if (
            prev.length !== 2 ||
            join.arguments?.length !== 2 ||
            prev[0].register !== join.arguments[0] ||
            prev[1].register !== join.arguments[1]
          )
            continue;
          const service = dex.strings[prev[0].index],
            rpc = dex.strings[prev[1].index];
          if (
            !/^[A-Za-z_][A-Za-z0-9_]*(?:\.[A-Za-z_][A-Za-z0-9_]*)+$/.test(
              service,
            ) ||
            !/^[A-Za-z_][A-Za-z0-9_]*$/.test(rpc)
          )
            continue;
          const defaults = events
            .filter(
              (e) =>
                e.kind === "invoke" &&
                e.code_unit_offset > join.code_unit_offset &&
                dex.methods[e.index].name === "getDefaultInstance" &&
                dex.methods[e.index].parameters.length === 0 &&
                dex.methods[e.index].returnType === dex.methods[e.index].owner,
            )
            .map((e) => dex.methods[e.index].returnType);
          const id = "/" + service + "/" + rpc;
          descriptorBuilders++;
          if (!methods.has(id))
            methods.set(id, {
              id,
              service,
              method: rpc,
              status: "dex-method-descriptor",
              request_type_candidate: defaults[0] ?? null,
              response_type_candidate: defaults[1] ?? null,
              declarations: [],
            });
          methods.get(id).declarations.push({
            dex: name,
            class_descriptor: cls.descriptor,
            method_index: method.index,
            method_name: method.name,
            code_offset: def.codeOffset,
            service_string: {
              index: prev[0].index,
              code_unit_offset: prev[0].code_unit_offset,
            },
            method_string: {
              index: prev[1].index,
              code_unit_offset: prev[1].code_unit_offset,
            },
            join_code_unit_offset: join.code_unit_offset,
            marshaller_default_instances_in_order: defaults,
          });
        }
      }
      if (model && method.name === "dynamicMethod") {
        const infoCalls = events.filter(
          (e) =>
            e.kind === "invoke" &&
            dex.methods[e.index].name === "newMessageInfo",
        );
        if (infoCalls.length === 1) {
          const call = infoCalls[0],
            last = events
              .filter(
                (e) =>
                  e.kind === "string" &&
                  e.code_unit_offset < call.code_unit_offset,
              )
              .at(-1);
          if (
            last &&
            call.arguments?.[1] === last.register &&
            call.code_unit_offset - last.code_unit_offset <= 8
          ) {
            try {
              model.wire_layout = {
                ...decodeMessageInfo(dex.strings[last.index]),
                method_index: method.index,
                code_offset: def.codeOffset,
                string_index: last.index,
                code_unit_offset: last.code_unit_offset,
              };
            } catch (error) {
              diagnostics.push({
                dex: name,
                class_descriptor: cls.descriptor,
                method_index: method.index,
                message: "RawMessageInfo: " + error.message,
              });
            }
          }
        }
      }
    }
  }
}
for (const model of messages) {
  if (!model.wire_layout) continue;
  const declared = model.field_numbers
      .map((f) => f.number)
      .sort((a, b) => a - b),
    layout = model.wire_layout.fields
      .map((f) => f.number)
      .sort((a, b) => a - b);
  model.field_number_cross_check =
    JSON.stringify(declared) === JSON.stringify(layout)
      ? "matched"
      : "mismatch";
  if (model.field_number_cross_check === "mismatch")
    diagnostics.push({
      dex: model.dex,
      class_descriptor: model.descriptor,
      message: "FIELD_NUMBER constants differ from decoded RawMessageInfo",
    });
}
fs.mkdirSync(out, { recursive: true });
const grpc = {
  schema_version: 1,
  artifact,
  dex_files,
  methods: [...methods.values()].sort((a, b) => a.id.localeCompare(b.id)),
  limitations: [
    "Each route is a static io.grpc.MethodDescriptor string-join declaration; it does not establish active backend availability or runtime invocation.",
    "Request/response types are candidates from ordered getDefaultInstance calls in that descriptor builder; marshaller slot semantics need separate verification.",
    "Dynamic/native services and classes not returning the advertised io.grpc.MethodDescriptor type can be absent.",
  ],
};
const messageReport = {
  schema_version: 1,
  artifact,
  messages,
  limitations: [
    "Field number constants, Java storage fields and RawMessageInfo layout are separate observations; Java field names/types are not automatically protobuf source names/types.",
    "Wire layout is decoded from the string preceding newMessageInfo; no original .proto package/options or enum semantics are reconstructed.",
    "Only direct GeneratedMessageLite subclasses under com.bapis are included.",
  ],
};
const coverage = {
  schema_version: 1,
  dex_files: dex_files.length,
  moss_classes: mossClasses,
  method_descriptor_definitions: methodDescriptorDefinitions,
  descriptor_builders: descriptorBuilders,
  unique_methods: methods.size,
  message_classes: messageClasses,
  decoded_message_layouts: messages.filter((m) => m.wire_layout).length,
  decoded_wire_fields: messages.reduce(
    (n, m) => n + (m.wire_layout?.fields.length ?? 0),
    0,
  ),
  field_number_cross_checks_matched: messages.filter(
    (m) => m.field_number_cross_check === "matched",
  ).length,
  diagnostics,
  scope:
    "Every class definition in every supplied DEX examined; fixed signatures and direct GeneratedMessageLite classes selected",
  runtime_verification: false,
};
fs.writeFileSync(
  path.join(out, "grpc.json"),
  JSON.stringify(grpc, null, 2) + "\n",
);
const encoded = JSON.stringify(messageReport);
if (Buffer.byteLength(encoded) > 35 * 1024 * 1024)
  throw Error("Message output exceeds 35 MiB; split before publishing");
fs.writeFileSync(path.join(out, "messages.json"), encoded + "\n");
fs.writeFileSync(
  path.join(out, "coverage-grpc.json"),
  JSON.stringify(coverage, null, 2) + "\n",
);
console.log(
  JSON.stringify({
    ...coverage,
    diagnostics: diagnostics.length,
    message_bytes: Buffer.byteLength(encoded),
  }),
);
