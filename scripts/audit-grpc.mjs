import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { readDex } from "../src/dex.mjs";
import { instructions, decodeMessageInfo } from "../src/grpc.mjs";
import {
  methodKey,
  resolveDescriptorOrigins,
  isValidRpcFullName,
  decodeAnnotatedMethod,
  findInheritedMessageType,
  classifyTransportMethod,
  classifyFullNameLiteral,
} from "../src/grpc-audit.mjs";
const [input, provenance = "evidence/inputs.json", output = "catalog/android/com.bilibili.app.in/play/6.8.0"] =
  process.argv.slice(2);
if (!input)
  throw Error(
    "Usage: node scripts/audit-grpc.mjs DEX_DIRECTORY INPUTS_JSON OUTPUT_DIRECTORY",
  );
const source = JSON.parse(
    fs.readFileSync(provenance, "utf8").replace(/^\uFEFF/, ""),
  ),
  catalog = JSON.parse(fs.readFileSync(path.join(output, "grpc.json"), "utf8")),
  messages = JSON.parse(
    fs.readFileSync(path.join(output, "messages.json"), "utf8"),
  );
const expected = new Map(source.dex_files.map((x) => [x.name, x])),
  files = fs
    .readdirSync(input)
    .filter((x) => /^classes\d*\.dex$/.test(x))
    .sort();
if (expected.size !== files.length || files.some((name) => !expected.has(name)))
  throw Error("DEX inventory differs from pinned input");
if (
  source.artifact.sha256 !== catalog.artifact.sha256 ||
  source.artifact.sha256 !== messages.artifact.sha256
)
  throw Error("Catalog artifact provenance mismatch");
const builders = new Map();
for (const route of catalog.methods)
  for (const location of route.declarations) {
    const key = location.dex + ":" + location.method_index;
    if (!builders.has(key)) builders.set(key, []);
    builders.get(key).push(route.id);
  }
const nodes = [],
  descriptor_invocation_sites = [],
  moss_calls = [],
  annotations = [],
  direct_path_candidates = [],
  classes = new Map(),
  diagnostics = [],
  outside_messages = [],
  knownMessages = new Set(messages.messages.map((x) => x.descriptor)),
  associatedTypes = new Set(
    catalog.methods
      .flatMap((x) => [x.request_type_candidate, x.response_type_candidate])
      .filter(Boolean),
  );
let classCount = 0,
  methodCount = 0,
  mossCount = 0,
  stubCount = 0,
  messageCandidateCount = 0,
  instructionBodies = 0;
const dex_files = [];
for (const name of files) {
  const bytes = fs.readFileSync(path.join(input, name)),
    digest = crypto.createHash("sha256").update(bytes).digest("hex");
  if (
    digest !== expected.get(name).sha256 ||
    bytes.length !== expected.get(name).size
  )
    throw Error("DEX provenance mismatch: " + name);
  const dex = readDex(bytes, name);
  dex_files.push({ name, sha256: digest, size: bytes.length });
  for (const cls of dex.classes) {
    classCount++;
    classes.set(cls.descriptor, {
      superType: cls.superType,
      dex: name,
      class_def_index: cls.index,
    });
    const moss = /Moss;$/.test(cls.descriptor),
      stub = /^Lio\/grpc\/stub\//.test(cls.superType ?? "");
    if (moss) mossCount++;
    if (stub) stubCount++;
    for (const definition of cls.definedMethods) {
      methodCount++;
      const method = dex.methods[definition.methodIndex],
        returnsDescriptor = method.returnType === "Lio/grpc/MethodDescriptor;";
      for (const annotation of definition.annotations) {
        const observed = decodeAnnotatedMethod(annotation);
        if (observed)
          annotations.push({
            ...observed,
            annotation_type: annotation.type,
            location: {
              dex: name,
              class_descriptor: cls.descriptor,
              method_index: method.index,
              descriptor: method.descriptor,
            },
          });
      }
      let events = [],
        newInstances = [];
      if (definition.codeOffset) {
        instructionBodies++;
        try {
          events = instructions(bytes, definition.codeOffset, (insn) => {
            if (insn.opcode === 0x22)
              newInstances.push({
                type: dex.types[bytes.readUInt16LE(insn.byte_offset + 2)],
                code_unit_offset: insn.code_unit_offset,
              });
          });
        } catch (error) {
          diagnostics.push({
            dex: name,
            method_index: method.index,
            message: error.message,
          });
        }
      }
      const location = {
        dex: name,
        class_descriptor: cls.descriptor,
        method_index: method.index,
        method_name: method.name,
        descriptor: method.descriptor,
        code_offset: definition.codeOffset,
      };
      const descriptorCalls = events
        .filter(
          (e) =>
            e.kind === "invoke" &&
            dex.methods[e.index]?.returnType === "Lio/grpc/MethodDescriptor;",
        )
        .map((e) => ({
          key: methodKey(dex.methods[e.index]),
          method_index: e.index,
          code_unit_offset: e.code_unit_offset,
        }));
      if (descriptorCalls.length)
        descriptor_invocation_sites.push({
          location,
          descriptor_calls: descriptorCalls,
        });
      if (returnsDescriptor)
        nodes.push({
          key: methodKey(method),
          location,
          has_code: Boolean(definition.codeOffset),
          access_flags: definition.accessFlags,
          direct_routes: builders.get(name + ":" + method.index) ?? [],
          descriptor_calls: descriptorCalls,
          new_instances: newInstances,
          constructor_calls: events
            .filter(
              (e) =>
                e.kind === "invoke" &&
                dex.methods[e.index].name === "<init>" &&
                dex.methods[e.index].owner === "Lio/grpc/MethodDescriptor;",
            )
            .map((e) => ({
              target: methodKey(dex.methods[e.index]),
              code_unit_offset: e.code_unit_offset,
            })),
        });
      if (moss || stub) {
        const transport = events
          .filter(
            (e) =>
              e.kind === "invoke" &&
              /^(Lcom\/bilibili\/lib\/moss\/api\/MossService;|Lio\/grpc\/stub\/ClientCalls;|Lio\/grpc\/stub\/[^;]+;)$/.test(
                dex.methods[e.index].owner,
              ),
          )
          .map((e) => ({
            target: methodKey(dex.methods[e.index]),
            method_index: e.index,
            code_unit_offset: e.code_unit_offset,
          }));
        if (transport.length)
          moss_calls.push({
            location,
            request_parameters: method.parameters,
            declared_return: method.returnType,
            descriptor_calls: descriptorCalls,
            transport_calls: transport,
          });
      }
      for (const event of events) {
        if (
          event.kind === "string" &&
          isValidRpcFullName(dex.strings[event.index])
        )
          direct_path_candidates.push({
            value: dex.strings[event.index],
            location: {
              ...location,
              string_index: event.index,
              code_unit_offset: event.code_unit_offset,
            },
          });
      }
    }
    if (
      associatedTypes.has(cls.descriptor) &&
      !knownMessages.has(cls.descriptor)
    ) {
      messageCandidateCount++;
      const statics = cls.definedFields.filter((x) => x.isStatic),
        numbers = statics
          .map((field, i) => ({
            field: dex.fields[field.fieldIndex],
            value: cls.staticValues[i] ?? 0,
          }))
          .filter((x) => x.field.name.endsWith("_FIELD_NUMBER"))
          .map((x) => ({
            constant: x.field.name,
            number: x.value,
            field_index: x.field.index,
          }));
      let wire_layout = null;
      for (const definition of cls.definedMethods) {
        const method = dex.methods[definition.methodIndex];
        if (method.name !== "dynamicMethod" || !definition.codeOffset) continue;
        try {
          const events = instructions(bytes, definition.codeOffset);
          const info = events.filter(
            (x) =>
              x.kind === "invoke" &&
              dex.methods[x.index].name === "newMessageInfo",
          );
          if (info.length === 1) {
            const call = info[0],
              string = events
                .filter(
                  (x) =>
                    x.kind === "string" &&
                    x.code_unit_offset < call.code_unit_offset,
                )
                .at(-1);
            if (
              string &&
              call.arguments?.[1] === string.register &&
              call.code_unit_offset - string.code_unit_offset <= 8
            )
              wire_layout = {
                ...decodeMessageInfo(dex.strings[string.index]),
                method_index: method.index,
                string_index: string.index,
                code_offset: definition.codeOffset,
                code_unit_offset: string.code_unit_offset,
              };
          }
        } catch (error) {
          diagnostics.push({
            dex: name,
            method_index: method.index,
            message: error.message,
          });
        }
      }
      outside_messages.push({
        descriptor: cls.descriptor,
        superType: cls.superType,
        location: { dex: name, class_def_index: cls.index },
        field_numbers: numbers,
        wire_layout,
      });
    }
  }
  console.log(
    JSON.stringify({ dex: name, descriptor_definitions_so_far: nodes.length }),
  );
}
const catalog_sources = {
  grpc_sha256: crypto
    .createHash("sha256")
    .update(fs.readFileSync(path.join(output, "grpc.json")))
    .digest("hex"),
  messages_sha256: crypto
    .createHash("sha256")
    .update(fs.readFileSync(path.join(output, "messages.json")))
    .digest("hex"),
};
const resolved = resolveDescriptorOrigins(nodes),
  byKey = new Map(resolved.map((node) => [node.key, node]));
for (const site of descriptor_invocation_sites)
  site.reachable_route_candidates = [
    ...new Set(
      site.descriptor_calls.flatMap(
        (target) => byKey.get(target.key)?.reachable_route_candidates ?? [],
      ),
    ),
  ].sort();
for (const call of moss_calls) {
  call.reachable_route_candidates = [
    ...new Set(
      call.descriptor_calls.flatMap(
        (target) => byKey.get(target.key)?.reachable_route_candidates ?? [],
      ),
    ),
  ].sort();
  call.coverage = classifyTransportMethod(call);
}
for (const method of resolved) {
  if (
    method.classification === "unresolved-descriptor-method" &&
    method.new_instances?.some(
      (i) => i.type === "Lio/grpc/MethodDescriptor;",
    ) &&
    method.constructor_calls?.length
  )
    method.classification = "generic-descriptor-factory";
}
for (const message of outside_messages)
  message.protobuf_ancestry = findInheritedMessageType(
    message.descriptor,
    classes,
  );
const unobserved = [...associatedTypes].filter(
  (type) =>
    !knownMessages.has(type) &&
    !outside_messages.some((m) => m.descriptor === type),
);
const unlistedAnnotations = annotations.filter(
  (route) => !catalog.methods.some((m) => m.id === route.id),
);
const unlistedPaths = direct_path_candidates.filter(
  (route) =>
    !catalog.methods.some((m) => m.id === "/" + route.value.replace(/^\//, "")),
);
for (const literal of unlistedPaths)
  literal.classification = classifyFullNameLiteral(literal.value);
const broadcasts = new Map();
for (const literal of unlistedPaths.filter(
  (x) => x.classification === "broadcast-message-dispatch-path",
)) {
  if (!broadcasts.has(literal.value))
    broadcasts.set(literal.value, {
      path: literal.value,
      kind: "broadcast-message-dispatch-path-candidate",
      is_confirmed_rpc_request_route: false,
      status: "static-string-in-method-body",
      declarations: [],
      limitations: [
        "Path occurs in client message-handling code; this does not establish a remotely callable gRPC endpoint or request schema.",
      ],
    });
  broadcasts.get(literal.value).declarations.push(literal.location);
}
for (const message of outside_messages) {
  const constants = message.field_numbers
      .map((f) => f.number)
      .sort((a, b) => a - b),
    layout = message.wire_layout?.fields
      .map((f) => f.number)
      .sort((a, b) => a - b);
  message.field_number_cross_check =
    layout && JSON.stringify(constants) === JSON.stringify(layout)
      ? "matched"
      : "unverified";
}
const classifications = {};
for (const node of resolved)
  classifications[node.classification] =
    (classifications[node.classification] ?? 0) + 1;
const coverage = {
  schema_version: 1,
  artifact: source.artifact,
  catalog_sources,
  dex_files,
  classes_examined: classCount,
  method_definitions_examined_for_signature_and_annotations: methodCount,
  instruction_bodies_examined: instructionBodies,
  descriptor_invocation_sites: descriptor_invocation_sites.length,
  unique_routes_referenced_from_method_bodies: new Set(
    descriptor_invocation_sites.flatMap(
      (site) => site.reachable_route_candidates,
    ),
  ).size,
  method_descriptor_return_definitions: nodes.length,
  descriptor_classifications: classifications,
  moss_classes: mossCount,
  standard_stub_classes: stubCount,
  moss_transport_methods: moss_calls.length,
  moss_methods_with_resolved_descriptor_reference: moss_calls.filter(
    (m) => m.coverage === "rpc-descriptor-reference",
  ).length,
  transport_methods_classified_as_lifecycle: moss_calls.filter(
    (m) => m.coverage === "middleware-or-lifecycle",
  ).length,
  unresolved_transport_methods: moss_calls.filter(
    (m) => m.coverage === "unresolved-rpc-candidate",
  ).length,
  annotated_rpc_methods: annotations.length,
  additional_annotation_routes: unlistedAnnotations.length,
  additional_path_candidates: unlistedPaths.length,
  broadcast_dispatch_path_candidates: broadcasts.size,
  excluded_mime_or_url_literals: unlistedPaths.filter((x) =>
    ["android-mime-type", "store-url-text"].includes(x.classification),
  ).length,
  unclassified_full_name_literals: unlistedPaths.filter(
    (x) => x.classification === "unclassified-full-name-shaped-literal",
  ).length,
  associated_message_types: associatedTypes.size,
  associated_types_outside_existing_message_catalog: outside_messages.length,
  outside_message_wire_fields: outside_messages.reduce(
    (n, m) => n + (m.wire_layout?.field_count ?? 0),
    0,
  ),
  outside_message_field_number_cross_checks_matched: outside_messages.filter(
    (m) => m.field_number_cross_check === "matched",
  ).length,
  unresolved_associated_types: unobserved,
  diagnostics,
  runtime_verification: false,
  scope: [
    "Every pinned DEX class/method signature and method annotation was examined.",
    "All defined DEX method bodies were instruction-decoded for MethodDescriptor invoke references and literal full RPC path strings; native code, dynamic loading, reflection and constructed values remain outside coverage.",
    "Descriptor origin resolution is static reference reachability, not proof of returned value or a runtime call.",
  ],
};
const report = {
  schema_version: 1,
  artifact: source.artifact,
  catalog_sources,
  descriptor_methods: resolved,
  descriptor_invocation_sites,
  moss_transport_methods: moss_calls,
  annotated_rpc_methods: annotations,
  direct_path_candidates,
  outside_associated_messages: outside_messages,
  additional_annotations: unlistedAnnotations,
  additional_path_candidates: unlistedPaths,
  limitations: coverage.scope,
};
fs.mkdirSync(output, { recursive: true });
fs.writeFileSync(
  path.join(output, "grpc-additional.json"),
  JSON.stringify(
    {
      schema_version: 1,
      artifact: source.artifact,
      catalog_sources,
      new_confirmed_rpc_routes: [],
      broadcast_dispatch_paths: [...broadcasts.values()],
      limitations: [
        "No new io.grpc.MethodDescriptor routes were found in this audit; broadcast message path candidates must not be counted as confirmed request RPCs.",
      ],
    },
    null,
    2,
  ) + "\n",
);
fs.writeFileSync(
  path.join(output, "grpc-audit.json"),
  JSON.stringify(report, null, 2) + "\n",
);
fs.writeFileSync(
  path.join(output, "coverage-grpc-audit.json"),
  JSON.stringify(coverage, null, 2) + "\n",
);
console.log(
  JSON.stringify({
    ...coverage,
    dex_files: dex_files.length,
    diagnostics: diagnostics.length,
  }),
);
