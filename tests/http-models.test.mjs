import test from "node:test";
import assert from "node:assert/strict";
import {
  signatureReferences,
  descriptorReferences,
  classModel,
  buildModelGraph,
} from "../src/http-models.mjs";
const model = (descriptor, fields = [], superType = "Ljava/lang/Object;") => ({
  descriptor,
  dex: "classes.dex",
  class_def_index: 1,
  access_flags: 1,
  kind: "class",
  super_type: superType,
  interfaces: [],
  class_annotations: [],
  generic_signature: null,
  fields,
});
const field = (name, descriptor, generic_signature = null) => ({
  name,
  descriptor,
  field_index: 0,
  access_flags: 1,
  is_static: false,
  is_enum_constant: false,
  generic_signature,
  annotations: [],
});
const endpoint = (descriptor = "LRequest;") => ({
  id: "classes.dex:1:POST",
  return_type: "Ljava/lang/Object;",
  parameters: [{ descriptor }],
  generic_signature: "(LRequest;)LCall<LResponse;>;",
});
test("reads bounded, nested and wildcard generic classes without creating type-variable models", () => {
  const signature =
    "<Left:Ljava/lang/Object;T:Ljava/lang/Number;>([TT;Ljava/util/List<+Lapp/Item;>;)Lapp/Outer<TT;>.Inner<-Lapp/Result;>;";
  const refs = signatureReferences(signature);
  assert.deepEqual(refs, [
    "Lapp/Item;",
    "Lapp/Outer$Inner;",
    "Lapp/Outer;",
    "Lapp/Result;",
    "Ljava/lang/Number;",
    "Ljava/lang/Object;",
    "Ljava/util/List;",
  ]);
  assert.deepEqual(descriptorReferences("[[Lapp/Item;"), ["Lapp/Item;"]);
  assert.deepEqual(descriptorReferences("[I"), []);
  assert.throws(
    () => signatureReferences("Ljava/util/List<LItem;"),
    /Unclosed/,
  );
});
test("preserves observed serialization names and alternate names without guessing requiredness", () => {
  const annotations = [
    {
      type: "Lcom/google/gson/annotations/SerializedName;",
      elements: { value: "server_id", alternate: ["id", "legacy_id"] },
    },
    {
      type: "Lcom/alibaba/fastjson/annotation/JSONField;",
      elements: { name: "other_id" },
    },
    { type: "Lcom/squareup/moshi/Json;", elements: { name: "moshi_id" } },
  ];
  const dex = { name: "classes.dex", fields: [{ name: "a", type: "J" }] },
    cls = {
      descriptor: "LRequest;",
      index: 2,
      accessFlags: 1,
      superType: "Ljava/lang/Object;",
      interfaces: [],
      annotations: [],
      definedFields: [
        { fieldIndex: 0, accessFlags: 0x81, isStatic: false, annotations },
      ],
    };
  const result = classModel(dex, cls);
  assert.deepEqual(result.fields[0].annotations, annotations);
  assert.equal(result.fields[0].access_flags, 0x81);
  assert.equal(Object.hasOwn(result.fields[0], "required"), false);
  assert.equal(Object.hasOwn(result.fields[0], "default"), false);
});
test("excludes static non-enum fields while retaining named enum constants", () => {
  const dex = {
      name: "classes.dex",
      fields: [
        { name: "DEFAULT", type: "LEnum;" },
        { name: "ONE", type: "LEnum;" },
        { name: "value", type: "I" },
      ],
    },
    cls = {
      descriptor: "LEnum;",
      index: 0,
      accessFlags: 0x4001,
      superType: "Ljava/lang/Enum;",
      interfaces: [],
      annotations: [],
      definedFields: [
        { fieldIndex: 0, accessFlags: 9, isStatic: true, annotations: [] },
        { fieldIndex: 1, accessFlags: 0x4019, isStatic: true, annotations: [] },
        { fieldIndex: 2, accessFlags: 1, isStatic: false, annotations: [] },
      ],
    };
  const result = classModel(dex, cls);
  assert.equal(result.kind, "enum");
  assert.deepEqual(
    result.fields.map((f) => f.name),
    ["ONE", "value"],
  );
  assert.equal(result.fields[0].is_enum_constant, true);
});
test("follows field generics and app superclass edges and excludes unrelated classes", () => {
  const models = [
    model(
      "LRequest;",
      [field("items", "Ljava/util/List;", "Ljava/util/List<LChild;>;")],
      "LBase;",
    ),
    model("LChild;"),
    model("LBase;", [field("other", "[[LNested;")]),
    model("LNested;"),
    model("LCall;"),
    model("LResponse;"),
    model("LUnrelated;"),
  ];
  const index = new Map(models.map((m) => [m.descriptor, [m]]));
  const result = buildModelGraph(index, [endpoint()]);
  assert.deepEqual(result.models.map((m) => m.descriptor).sort(), [
    "LBase;",
    "LCall;",
    "LChild;",
    "LNested;",
    "LRequest;",
    "LResponse;",
  ]);
  assert.ok(result.external_descriptors.includes("Ljava/util/List;"));
  assert.equal(result.unresolved_descriptors.length, 0);
});
test("retains dangling edges and duplicate class identities instead of claiming complete schemas", () => {
  const one = model("LRequest;", [field("missing", "LMissing;")]),
    two = { ...model("LRequest;"), dex: "classes2.dex" };
  const result = buildModelGraph(new Map([["LRequest;", [one, two]]]), [
    { ...endpoint(), generic_signature: null },
  ]);
  assert.equal(result.models.length, 2);
  assert.deepEqual(result.unresolved_descriptors, ["LMissing;"]);
  assert.equal(
    result.models[0].references.find((r) => r.target === "LMissing;").status,
    "unresolved",
  );
  assert.equal(result.models[0].root_endpoint_ids[0], "classes.dex:1:POST");
  assert.ok(
    result.root_references.some(
      (r) =>
        r.descriptor === "Ljava/lang/Object;" &&
        r.status === "external-framework",
    ),
  );
});
