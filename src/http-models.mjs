/** Static DTO reachability, preserving Java/annotation facts without schema guesses. */
export const EXTERNAL_PREFIXES = [
  "Ljava/",
  "Ljavax/",
  "Landroid/",
  "Landroidx/",
  "Lkotlin/",
  "Lkotlinx/",
  "Lorg/jetbrains/",
  "Lorg/reactivestreams/",
  "Lio/reactivex/",
  "Lrx/",
  "Lretrofit/",
  "Lretrofit2/",
  "Lokhttp3/",
  "Lokio/",
  "Lcom/google/",
  "Lcom/squareup/",
  "Lcom/alibaba/",
  "Lcom/fasterxml/",
  "Lorg/json/",
  "Lorg/xml/",
  "Lorg/w3c/",
  "Ldalvik/",
];
export const isExternal = (descriptor) =>
  EXTERNAL_PREFIXES.some((prefix) => descriptor.startsWith(prefix));
export function descriptorReferences(descriptor) {
  if (typeof descriptor !== "string") return [];
  const plain = descriptor.replace(/^\[+/, "");
  return /^L[^;]+;$/.test(plain) ? [plain] : [];
}
/** Reads class signatures, nested classes, bounds, wildcards and type variables. */
export function signatureReferences(signature) {
  if (typeof signature !== "string") return [];
  const refs = new Set();
  let i = 0;
  function scan(stop) {
    while (i < signature.length && signature[i] !== stop) {
      const formal = /^[A-Za-z_$][A-Za-z0-9_$]*:/.exec(signature.slice(i));
      if (formal) {
        i += formal[0].length;
        continue;
      }
      if (signature[i] === "L") {
        i++;
        let current = "";
        while (i < signature.length) {
          const char = signature[i];
          if (char === ";") {
            i++;
            if (!current) throw Error("Empty signature class");
            refs.add("L" + current + ";");
            break;
          }
          if (char === "<") {
            if (current) refs.add("L" + current + ";");
            i++;
            scan(">");
            if (signature[i] !== ">") throw Error("Unclosed generic arguments");
            i++;
            continue;
          }
          if (char === ".") {
            current += "$";
            i++;
            continue;
          }
          if ("()[]:>^+-*".includes(char))
            throw Error("Malformed class signature");
          current += char;
          i++;
        }
        if (i === signature.length && signature[i - 1] !== ";")
          throw Error("Unterminated class signature");
      } else if (signature[i] === "T") {
        const semi = signature.indexOf(";", i),
          colon = signature.indexOf(":", i);
        if (semi !== -1 && (colon === -1 || colon > semi)) i = semi + 1;
        else i++;
      } else i++;
    }
  }
  scan(undefined);
  return [...refs].sort();
}
const preservedAnnotation = (type) =>
  type === "Ldalvik/annotation/Signature;" ||
  /\/(?:gson|fastjson|moshi|jackson)\//.test(type);
function signatureFrom(annotations) {
  const annotation = annotations.find(
    (a) => a.type === "Ldalvik/annotation/Signature;",
  );
  if (!annotation) return null;
  const value = annotation.elements.value;
  if (!Array.isArray(value) || value.some((x) => typeof x !== "string"))
    throw Error("Malformed Signature annotation");
  return value.join("");
}
export function classModel(dex, cls) {
  return {
    descriptor: cls.descriptor,
    dex: dex.name,
    class_def_index: cls.index,
    access_flags: cls.accessFlags,
    kind:
      cls.accessFlags & 0x4000
        ? "enum"
        : cls.accessFlags & 0x200
          ? "interface"
          : "class",
    super_type: cls.superType,
    interfaces: cls.interfaces,
    class_annotations: cls.annotations.filter((a) =>
      preservedAnnotation(a.type),
    ),
    generic_signature: signatureFrom(cls.annotations),
    fields: cls.definedFields
      .filter((def) => !def.isStatic || def.accessFlags & 0x4000)
      .map((def) => {
        const f = dex.fields[def.fieldIndex];
        return {
          name: f.name,
          descriptor: f.type,
          field_index: def.fieldIndex,
          access_flags: def.accessFlags,
          is_static: def.isStatic,
          is_enum_constant: Boolean(def.accessFlags & 0x4000),
          generic_signature: signatureFrom(def.annotations),
          annotations: def.annotations.filter((a) =>
            preservedAnnotation(a.type),
          ),
        };
      }),
  };
}
export function buildModelGraph(classIndex, endpoints) {
  const roots = new Map(),
    rootRefs = [];
  for (const endpoint of endpoints) {
    const descriptors = new Set([
      ...descriptorReferences(endpoint.return_type),
      ...endpoint.parameters.flatMap((p) => descriptorReferences(p.descriptor)),
      ...signatureReferences(endpoint.generic_signature),
    ]);
    for (const descriptor of descriptors) {
      if (!roots.has(descriptor)) roots.set(descriptor, []);
      roots.get(descriptor).push(endpoint.id);
      rootRefs.push({ endpoint_id: endpoint.id, descriptor });
    }
  }
  const queue = [...roots.keys()],
    seen = new Set(),
    models = [],
    references = [];
  let head = 0;
  while (head < queue.length) {
    const descriptor = queue[head++];
    if (seen.has(descriptor)) continue;
    seen.add(descriptor);
    if (isExternal(descriptor)) continue;
    const candidates = classIndex.get(descriptor);
    if (!candidates?.length) continue;
    for (const model of candidates) {
      const edges = [];
      for (const parent of descriptorReferences(model.super_type))
        edges.push({ kind: "supertype", target: parent });
      for (const parent of signatureReferences(model.generic_signature))
        edges.push({ kind: "class-signature", target: parent });
      for (const field of model.fields) {
        for (const target of descriptorReferences(field.descriptor))
          edges.push({
            kind: "field-type",
            field_index: field.field_index,
            target,
          });
        for (const target of signatureReferences(field.generic_signature))
          edges.push({
            kind: "field-signature",
            field_index: field.field_index,
            target,
          });
      }
      const record = {
        ...model,
        root_endpoint_ids: roots.get(descriptor) ?? [],
        references: edges.map((edge) => ({
          ...edge,
          status: isExternal(edge.target)
            ? "external-framework"
            : classIndex.has(edge.target)
              ? "app-class"
              : "unresolved",
        })),
      };
      models.push(record);
      for (const edge of record.references) {
        references.push({ source: descriptor, source_dex: model.dex, ...edge });
        if (edge.status === "app-class" && !seen.has(edge.target))
          queue.push(edge.target);
      }
    }
  }
  const classify = (d) =>
    isExternal(d)
      ? "external-framework"
      : classIndex.has(d)
        ? "app-class"
        : "unresolved";
  return {
    models,
    root_references: rootRefs.map((r) => ({
      ...r,
      status: classify(r.descriptor),
    })),
    external_descriptors: [
      ...new Set([
        ...rootRefs
          .filter((r) => classify(r.descriptor) === "external-framework")
          .map((r) => r.descriptor),
        ...references
          .filter((r) => r.status === "external-framework")
          .map((r) => r.target),
      ]),
    ].sort(),
    unresolved_descriptors: [
      ...new Set([
        ...rootRefs
          .filter((r) => classify(r.descriptor) === "unresolved")
          .map((r) => r.descriptor),
        ...references
          .filter((r) => r.status === "unresolved")
          .map((r) => r.target),
      ]),
    ].sort(),
    references,
  };
}
