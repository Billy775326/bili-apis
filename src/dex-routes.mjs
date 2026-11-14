import { instructions } from "./grpc.mjs";
const DOMAINS = [
  "bilibili.com",
  "biliapi.com",
  "biliapi.net",
  "biligame.com",
  "biligame.net",
  "bilivideo.com",
  "bilivideo.cn",
  "biliimg.com",
  "hdslb.com",
  "b23.tv",
  "bili2233.cn",
];
export function sanitizeRoute(text) {
  if (typeof text !== "string") return null;
  const value = text.split(/[?#]/, 1)[0];
  if (/^https?:\/\//i.test(value) || /^wss?:\/\//i.test(value)) {
    try {
      const url = new URL(value);
      if (
        !DOMAINS.some(
          (d) => url.hostname === d || url.hostname.endsWith("." + d),
        )
      )
        return null;
      return {
        value: url.origin + url.pathname,
        host: url.hostname,
        scheme: url.protocol.slice(0, -1),
        path: url.pathname,
      };
    } catch {
      return null;
    }
  }
  if (/^\/(?:x\/|pgc\/|bilibili\.|xlive\/|passport\/)/.test(value))
    return { value, host: null, scheme: null, path: value };
  return null;
}
const methodKey = (m) => m.owner + "->" + m.name + m.descriptor;
const fieldKey = (f) => f.owner + "->" + f.name + ":" + f.type;
const value = (text, location, deps = []) => ({
  text,
  literal_type: "string",
  locations: [location],
  dependencies: deps,
});
function stringArgument(fact, type) {
  if (!fact || fact.builder) return null;
  if (fact.literal_type !== "integer") return fact;
  let text;
  if (["I", "B", "S"].includes(type)) text = fact.text;
  else if (type === "C") text = String.fromCharCode(Number(fact.text) & 65535);
  else if (type === "Z") text = Number(fact.text) ? "true" : "false";
  else if (
    [
      "Ljava/lang/Object;",
      "Ljava/lang/String;",
      "Ljava/lang/CharSequence;",
    ].includes(type) &&
    fact.text === "0"
  )
    text = "null";
  else return null;
  return { ...fact, text, literal_type: "string" };
}
const joined = (a, b) =>
  a && b && a.literal_type !== "integer" && b.literal_type !== "integer"
    ? {
        text: a.text + b.text,
        locations: [...a.locations, ...b.locations],
        dependencies: [...new Set([...a.dependencies, ...b.dependencies])],
      }
    : null;
export function dynamicTargets(http) {
  const out = new Map();
  for (const e of http.endpoints) {
    const parameters = e.parameters
      .filter((p) => p.annotations.some((a) => a.type.endsWith("/Url;")))
      .map((p) => p.position);
    if (parameters.length)
      out.set(e.declaring_class + "->" + e.method_name + e.method_descriptor, {
        endpoint_id: e.id,
        http_method: e.http_method,
        parameters,
      });
  }
  return out;
}
function argumentRegister(event, method, position) {
  let word = event.is_static ? 0 : 1;
  for (let i = 0; i < position; i++)
    word += ["J", "D"].includes(method.parameters[i]) ? 2 : 1;
  return event.arguments[word];
}
export function verifiedRouteSemantics(implementation, artifactSha256) {
  const result = new Map();
  if (implementation?.original_apk_sha256 !== artifactSha256) return result;
  const facts = implementation.facts ?? [],
    evidence = implementation.evidence ?? [];
  for (let i = 0; i < facts.length; i++) {
    const fact = facts[i];
    if (
      fact.label !== "okhttp-url-setter" ||
      fact.dex_owner !== "Lokhttp3/z$a;" ||
      fact.method !== "l" ||
      fact.dex_descriptor !== "(Ljava/lang/String;)V"
    )
      continue;
    const ei = evidence.findIndex(
      (e) =>
        e.label === fact.label &&
        typeof e.parent_evidence_id === "string" &&
        e.source_status === "complete",
    );
    if (ei < 0) continue;
    result.set(fact.dex_owner + "->" + fact.method + fact.dex_descriptor, {
      implementation_fact: "evidence/round2-implementation.json#/facts/" + i,
      implementation_evidence:
        "evidence/round2-implementation.json#/evidence/" + ei,
      parent_evidence_id: evidence[ei].parent_evidence_id,
      artifact_sha256: artifactSha256,
      scope:
        "Verified static URL setter semantics; no HTTP verb or runtime request claim",
    });
  }
  return result;
}
function sinkKind(method, semantics) {
  if (semantics.has(methodKey(method))) return "verified-url-setter";
  if (method.owner === "Ljava/net/URL;" && method.name === "<init>")
    return "java-url-constructor";
  if (
    method.owner === "Ljava/net/URI;" &&
    ["<init>", "create"].includes(method.name)
  )
    return "java-uri-construction";
  if (method.owner === "Landroid/net/Uri;" && method.name === "parse")
    return "android-uri-construction";
  if (method.owner === "Landroid/webkit/WebView;" && method.name === "loadUrl")
    return "webview-navigation";
  if (method.owner.startsWith("Lokhttp3/"))
    return "okhttp-string-argument-unverified-semantics";
  if (/^(?:setUrl|url|setUri|uri|loadUrl|baseUrl)$/.test(method.name))
    return "url-named-method-candidate";
  return "unclassified-string-argument";
}
/** Register facts are discarded at joins/branches; no nearest-string attribution. */
export function analyzeRouteMethod(
  dex,
  definition,
  method,
  constants,
  targets,
  semantics = new Map(),
) {
  const bytes = dex.bytes,
    start = definition.codeOffset + 16,
    count = bytes.readUInt32LE(definition.codeOffset + 12),
    targetsPc = new Set(),
    boundaries = new Set(),
    staticWrites = [],
    literals = [],
    observations = [],
    calls = [],
    eventsByPc = new Map();
  let hasRelevant = false;
  const events = instructions(bytes, definition.codeOffset, (ins) => {
    boundaries.add(ins.code_unit_offset);
    const { opcode: op, word, byte_offset: p, code_unit_offset: pc } = ins;
    if (op === 0x28) targetsPc.add(pc + ((word << 16) >> 24));
    if (op === 0x29) targetsPc.add(pc + bytes.readInt16LE(p + 2));
    if (op === 0x2a) targetsPc.add(pc + bytes.readInt32LE(p + 2));
    if (op >= 0x32 && op <= 0x3d) targetsPc.add(pc + bytes.readInt16LE(p + 2));
    if (op === 0x2b || op === 0x2c) {
      const payload = pc + bytes.readInt32LE(p + 2),
        at = start + payload * 2;
      if (at < start || at + 4 > start + count * 2)
        throw Error("Switch payload outside code");
      const id = bytes.readUInt16LE(at),
        n = bytes.readUInt16LE(at + 2);
      if (id !== (op === 0x2b ? 0x100 : 0x200))
        throw Error("Wrong switch payload kind");
      const off = op === 0x2b ? at + 8 : at + 4 + n * 4;
      if (off + n * 4 > start + count * 2)
        throw Error("Truncated switch target list");
      for (let i = 0; i < n; i++)
        targetsPc.add(pc + bytes.readInt32LE(off + i * 4));
    }
    if (op === 0x62) {
      const f = dex.fields[bytes.readUInt16LE(p + 2)];
      if (!f) throw Error("Invalid sget-object field");
      if (constants.has(fieldKey(f))) hasRelevant = true;
    }
    if (op === 0x69) {
      const field = dex.fields[bytes.readUInt16LE(p + 2)];
      if (!field) throw Error("Invalid sput-object field");
      staticWrites.push(fieldKey(field));
    }
  });
  for (const pc of targetsPc)
    if (!boundaries.has(pc))
      throw Error("Branch target is not an instruction boundary");
  for (const event of events) {
    if (event.kind === "string") {
      if (event.index >= dex.strings.length)
        throw Error("Invalid const-string index");
      if (
        sanitizeRoute(dex.strings[event.index]) ||
        /bili|^https?:|^wss?:/i.test(dex.strings[event.index])
      )
        hasRelevant = true;
    }
    if (event.kind === "invoke") {
      const invoked = dex.methods[event.index];
      if (!invoked) throw Error("Invalid invoke method");
      const at = start + event.code_unit_offset * 2,
        op = bytes[at],
        expectedWords =
          (op === 0x71 || op === 0x77 ? 0 : 1) +
          invoked.parameters.reduce(
            (n, t) => n + (["J", "D"].includes(t) ? 2 : 1),
            0,
          );
      if (
        event.arguments.length !== expectedWords ||
        (op >= 0x6e && op <= 0x72 && event.arguments.length > 5)
      )
        throw Error("Invalid invoke argument word count");
      const registerCount = bytes.readUInt16LE(definition.codeOffset);
      if (event.arguments.some((r) => r >= registerCount))
        throw Error("Invoke register outside code frame");
      if (targets.has(methodKey(invoked))) hasRelevant = true;
    }
    eventsByPc.set(event.code_unit_offset, event);
  }
  if (!hasRelevant) return { literals, observations, calls, staticWrites };
  const registers = new Map();
  let pending = null;
  instructions(bytes, definition.codeOffset, (ins) => {
    const { opcode: op, word, byte_offset: p, code_unit_offset: pc } = ins;
    const loc = {
      dex: dex.name,
      method_index: method.index,
      code_unit_offset: pc,
    };
    if (targetsPc.has(pc)) {
      registers.clear();
      pending = null;
    }
    const previousPending = pending;
    pending = null;
    const dest8 = word >>> 8,
      dest4 = (word >>> 8) & 15,
      src4 = word >>> 12;
    const put = (r, v) => {
      if (v) registers.set(r, v);
      else registers.delete(r);
    };
    if ([1, 4, 7].includes(op)) {
      put(dest4, registers.get(src4));
      return;
    }
    if ([2, 5, 8].includes(op)) {
      put(dest8, registers.get(bytes.readUInt16LE(p + 2)));
      return;
    }
    if ([3, 6, 9].includes(op)) {
      put(bytes.readUInt16LE(p + 2), registers.get(bytes.readUInt16LE(p + 4)));
      return;
    }
    if (op >= 0x0a && op <= 0x0c) {
      put(dest8, previousPending);
      return;
    }
    if (op === 0x0d) {
      registers.clear();
      return;
    }
    if (op === 0x1a || op === 0x1b) {
      const index =
          op === 0x1a ? bytes.readUInt16LE(p + 2) : bytes.readUInt32LE(p + 2),
        text = dex.strings[index];
      const item = value(text, { ...loc, string_index: index });
      put(dest8, item);
      const route = sanitizeRoute(text);
      if (route)
        literals.push({ ...route, source: { ...loc, string_index: index } });
      return;
    }
    if (op === 0x12 || op === 0x13 || op === 0x14) {
      const n =
        op === 0x12
          ? (word << 16) >> 28
          : op === 0x13
            ? bytes.readInt16LE(p + 2)
            : bytes.readInt32LE(p + 2);
      put(op === 0x12 ? dest4 : dest8, {
        ...value(String(n), loc),
        literal_type: "integer",
      });
      return;
    }
    if (op === 0x22) {
      const type = dex.types[bytes.readUInt16LE(p + 2)];
      put(
        dest8,
        type === "Ljava/lang/StringBuilder;" ||
          type === "Ljava/lang/StringBuffer;"
          ? { builder: true, current: value("", loc) }
          : null,
      );
      return;
    }
    if (op === 0x62) {
      const field = dex.fields[bytes.readUInt16LE(p + 2)];
      if (!field) throw Error("Invalid sget-object field");
      const key = fieldKey(field),
        constant = constants.get(key);
      put(
        dest8,
        typeof constant === "string"
          ? value(constant, { ...loc, field_index: field.index }, [key])
          : null,
      );
      return;
    }
    const event = eventsByPc.get(pc);
    if (event?.kind === "invoke") {
      const invoked = dex.methods[event.index],
        isStatic = op === 0x71 || op === 0x77;
      event.is_static = isStatic;
      const receiver = isStatic ? null : registers.get(event.arguments[0]);
      const args = invoked.parameters.map((_, position) =>
        registers.get(argumentRegister(event, invoked, position)),
      );
      const dynamic = targets.get(methodKey(invoked));
      if (dynamic) {
        for (const position of dynamic.parameters) {
          const fact = args[position];
          calls.push({
            endpoint_id: dynamic.endpoint_id,
            http_method: dynamic.http_method,
            source: loc,
            declaring_class: method.owner,
            method_name: method.name,
            method_descriptor: method.descriptor,
            callee: {
              method_index: invoked.index,
              owner: invoked.owner,
              name: invoked.name,
              descriptor: invoked.descriptor,
            },
            parameter_position: position,
            argument_register: argumentRegister(event, invoked, position),
            fact: fact?.builder ? null : (fact ?? null),
            value_status:
              fact && !fact.builder
                ? "constant-within-basic-block"
                : "unresolved-register-value",
          });
        }
      }
      for (let position = 0; position < args.length; position++) {
        const fact = args[position];
        if (!fact || fact.builder || !sanitizeRoute(fact.text)) continue;
        observations.push({
          source: loc,
          declaring_class: method.owner,
          method_name: method.name,
          method_descriptor: method.descriptor,
          callee: {
            method_index: invoked.index,
            owner: invoked.owner,
            name: invoked.name,
            descriptor: invoked.descriptor,
          },
          parameter_position: position,
          argument_register: argumentRegister(event, invoked, position),
          sink_kind: dynamic
            ? dynamic.parameters.includes(position)
              ? "retrofit-dynamic-url-caller"
              : "retrofit-non-url-string-argument"
            : sinkKind(invoked, semantics),
          sink_semantics_evidence: semantics.get(methodKey(invoked)) ?? null,
          fact,
          http_method: dynamic?.http_method ?? null,
        });
      }
      if (
        (invoked.owner === "Ljava/lang/StringBuilder;" ||
          invoked.owner === "Ljava/lang/StringBuffer;") &&
        receiver?.builder
      ) {
        if (invoked.name === "<init>") {
          receiver.current =
            invoked.parameters.length === 0
              ? value("", loc)
              : invoked.parameters[0] === "I" &&
                  args[0]?.literal_type === "integer" &&
                  Number(args[0].text) >= 0
                ? value("", loc)
                : ["Ljava/lang/String;", "Ljava/lang/CharSequence;"].includes(
                      invoked.parameters[0],
                    ) && args[0]?.literal_type !== "integer"
                  ? (args[0] ?? null)
                  : null;
        } else if (invoked.name === "append") {
          receiver.current = joined(
            receiver.current,
            stringArgument(args[0], invoked.parameters[0]),
          );
          pending = receiver;
        } else if (invoked.name === "toString") pending = receiver.current;
        else receiver.current = null;
        return;
      }
      if (invoked.owner === "Ljava/lang/String;" && invoked.name === "concat")
        pending = joined(receiver, args[0]);
      else if (
        invoked.owner === "Ljava/lang/String;" &&
        invoked.name === "valueOf"
      )
        pending = stringArgument(args[0], invoked.parameters[0]);
      else if (
        invoked.owner === "Lkotlin/jvm/internal/Intrinsics;" &&
        invoked.name === "stringPlus"
      )
        pending = joined(
          stringArgument(args[0], invoked.parameters[0]),
          stringArgument(args[1], invoked.parameters[1]),
        );
      for (const fact of [receiver, ...args])
        if (fact?.builder) fact.current = null;
      return;
    }
    if (
      op === 0x1f ||
      op === 0x00 ||
      op === 0x69 ||
      op === 0x68 ||
      op === 0x67 ||
      op === 0x66 ||
      op === 0x65 ||
      op === 0x64 ||
      op === 0x63
    )
      return;
    if ((op >= 0x28 && op <= 0x3d) || (op >= 0x0e && op <= 0x11)) {
      registers.clear();
      return;
    }
    // Conservatively clear all facts for unsupported writes/alias effects.
    registers.clear();
  });
  return { literals, observations, calls, staticWrites };
}
export function staticStringConstants(dex) {
  const result = [];
  for (const cls of dex.classes) {
    const fields = cls.definedFields.filter((f) => f.isStatic);
    for (let i = 0; i < cls.staticValues.length; i++) {
      const definition = fields[i],
        field = dex.fields[definition.fieldIndex],
        constant = cls.staticValues[i];
      if (
        definition.accessFlags & 0x10 &&
        field.type === "Ljava/lang/String;" &&
        typeof constant === "string"
      )
        result.push([fieldKey(field), constant]);
    }
  }
  return result;
}
export function finalizeFact(fact, written) {
  if (!fact)
    return { status: "unresolved-register-value", route: null, sources: [] };
  if (fact.dependencies.some((key) => written.has(key)))
    return {
      status: "unresolved-static-field-written-in-bytecode",
      route: null,
      sources: fact.locations,
    };
  const route = sanitizeRoute(fact.text);
  return {
    status: route ? "static-route-candidate" : "constant-not-a-selected-route",
    route,
    sources: fact.locations,
  };
}
