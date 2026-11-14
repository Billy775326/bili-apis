import { createHash } from "node:crypto";
const METHODS = new Set([
  "GET",
  "POST",
  "PUT",
  "PATCH",
  "DELETE",
  "HEAD",
  "OPTIONS",
  "CONNECT",
  "TRACE",
]);
const CLIENT_METHODS = new Set([
  "get",
  "post",
  "put",
  "patch",
  "delete",
  "head",
  "options",
]);
const PATH_PREFIX =
  /^(?:https?:\/\/|wss?:\/\/|\/|(?:api|x|pgc|bapis|v[0-9]+)\/)/;
const name = (node) =>
  node?.type === "Identifier"
    ? node.name
    : node?.type === "StringLiteral"
      ? node.value
      : null;
function literal(node) {
  if (!node) return null;
  if (
    node.type === "StringLiteral" ||
    (node.type === "Literal" && typeof node.value === "string")
  )
    return node.value;
  if (node.type === "TemplateLiteral" && node.expressions.length === 0)
    return node.quasis[0].value.cooked;
  if (node.type === "BinaryExpression" && node.operator === "+") {
    const left = literal(node.left),
      right = literal(node.right);
    if (left !== null && right !== null) return left + right;
  }
  return null;
}
function propertyMap(node) {
  const map = new Map();
  if (node?.type !== "ObjectExpression") return map;
  for (const p of node.properties) {
    if (p.type === "ObjectProperty" && !p.computed) {
      const key = name(p.key);
      if (key !== null) map.set(key, p.value);
    }
  }
  return map;
}
function calleeName(node) {
  if (node?.type === "Identifier") return node.name;
  if (
    node?.type === "MemberExpression" ||
    node?.type === "OptionalMemberExpression"
  ) {
    const owner = calleeName(node.object),
      key = node.computed ? literal(node.property) : name(node.property);
    return owner && key ? owner + "." + key : null;
  }
  return null;
}
function keys(node) {
  return [...propertyMap(node).keys()].filter((x) => x.length <= 128).sort();
}
function safeRoute(value) {
  if (value === null)
    return { path: null, query_parameter_names: [], computed: true };
  let clean = value.split("#", 1)[0],
    query = [];
  const q = clean.indexOf("?");
  if (q >= 0) {
    try {
      query = [...new URLSearchParams(clean.slice(q + 1)).keys()]
        .filter((x) => x.length <= 128)
        .sort();
    } catch {}
    clean = clean.slice(0, q);
  }
  if (clean.length > 2048)
    return {
      path: null,
      query_parameter_names: query,
      computed: true,
      reason: "static route exceeds 2048 character output budget",
    };
  try {
    if (/^(?:https?|wss?):\/\//.test(clean)) {
      const u = new URL(clean);
      u.username = "";
      u.password = "";
      clean = u.href;
    }
  } catch {
    return {
      path: null,
      query_parameter_names: query,
      computed: true,
      reason: "invalid static URL",
    };
  }
  return { path: clean, query_parameter_names: query, computed: false };
}
function position(source, node, offset = 0, byteOffset = 0) {
  return {
    source_utf16_offset: offset + (node?.start ?? 0),
    source_byte_offset:
      byteOffset + Buffer.byteLength(source.slice(0, node?.start ?? 0), "utf8"),
    source_utf16_length: (node?.end ?? 0) - (node?.start ?? 0),
  };
}
export function analyzeJavaScript(
  source,
  parse,
  { sourceUtf16Offset = 0, sourceByteOffset = 0 } = {},
) {
  const ast = parse(source, {
    sourceType: "unambiguous",
    errorRecovery: false,
    allowReturnOutsideFunction: true,
    allowAwaitOutsideFunction: true,
    plugins: ["jsx", "importAttributes"],
  });
  const declarations = [],
    candidates = [],
    configs = [],
    seen = new Set();
  function record(node, route, method, kind, config, callee, body = null) {
    const raw = literal(route),
      safe = safeRoute(raw);
    if (
      raw !== null &&
      (/^(?:data|javascript|mailto):/.test(raw) || raw.length === 0)
    )
      return;
    if (
      kind === "client-method-candidate" &&
      (raw === null
        ? !/axios|http|request|client/i.test(callee ?? "")
        : !PATH_PREFIX.test(raw))
    )
      return;
    const props = propertyMap(config),
      base = literal(props.get("baseURL") ?? props.get("baseUrl"));
    let verb = method ?? literal(props.get("method"));
    verb = verb?.toUpperCase() ?? null;
    if (verb && !METHODS.has(verb)) verb = null;
    const header = propertyMap(props.get("headers")),
      contentType = literal(
        header.get("Content-Type") ?? header.get("content-type"),
      );
    const item = {
      kind,
      transport:
        kind === "websocket-construction"
          ? "websocket"
          : contentType?.includes("grpc-web")
            ? "grpc-web"
            : "http",
      ...safe,
      method: verb,
      base_url: base === null ? null : safeRoute(base).path,
      callee: callee ?? null,
      request_keys: keys(body ?? props.get("data") ?? props.get("body")),
      query_keys: keys(props.get("params")),
      headers: [...header.keys()].sort(),
      ...position(source, node, sourceUtf16Offset, sourceByteOffset),
      verification: "syntactic-static-observation",
      limitations: [
        "Callee identity, wrapper semantics, runtime overrides and request execution are unverified.",
      ],
    };
    if (raw === null)
      item.expression = {
        type: route?.type ?? "missing",
        identifier: route?.type === "Identifier" ? route.name : null,
      };
    const id = [
      item.kind,
      item.source_utf16_offset,
      item.path,
      item.method,
    ].join(":");
    if (seen.has(id)) return;
    seen.add(id);
    if (kind === "client-method-candidate") candidates.push(item);
    else declarations.push(item);
  }
  function walk(node, parent) {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) {
      for (const child of node) walk(child, parent);
      return;
    }
    if (
      node.type === "CallExpression" ||
      node.type === "OptionalCallExpression"
    ) {
      const called = calleeName(node.callee),
        args = node.arguments ?? [];
      if (
        called === "fetch" ||
        called === "window.fetch" ||
        called === "globalThis.fetch"
      ) {
        const config = propertyMap(args[1]);
        record(
          node,
          args[0],
          config.has("method") ? literal(config.get("method")) : "GET",
          "fetch-call",
          args[1],
          called,
        );
      } else if (called === "axios" || called === "axios.request") {
        const p = propertyMap(args[0]);
        record(node, p.get("url"), null, "axios-config-call", args[0], called);
      } else if (node.callee?.type === "MemberExpression") {
        const method = node.callee.computed
          ? literal(node.callee.property)
          : name(node.callee.property);
        if (CLIENT_METHODS.has(method)) {
          const known = called?.startsWith("axios.");
          record(
            node,
            args[0],
            method.toUpperCase(),
            known ? "axios-method-call" : "client-method-candidate",
            args[
              method === "get" ||
              method === "delete" ||
              method === "head" ||
              method === "options"
                ? 1
                : 2
            ],
            called,
            ["post", "put", "patch"].includes(method) ? args[1] : null,
          );
        } else if (
          method === "open" &&
          args.length >= 2 &&
          METHODS.has(literal(args[0])?.toUpperCase())
        )
          record(
            node,
            args[1],
            literal(args[0]),
            "xhr-shaped-open-call",
            null,
            called,
          );
      }
    }
    if (
      node.type === "NewExpression" &&
      ["WebSocket", "window.WebSocket"].includes(calleeName(node.callee))
    )
      record(
        node,
        node.arguments?.[0],
        "GET",
        "websocket-construction",
        null,
        calleeName(node.callee),
      );
    if (node.type === "ObjectExpression") {
      const p = propertyMap(node),
        url = p.get("url") ?? p.get("path"),
        method = literal(p.get("method"));
      if (url && method && METHODS.has(method.toUpperCase()))
        record(node, url, method, "request-config-object", node, null);
      const base = literal(p.get("baseURL") ?? p.get("baseUrl"));
      if (base && PATH_PREFIX.test(base))
        configs.push({
          kind: "base-url-config",
          ...safeRoute(base),
          ...position(source, node, sourceUtf16Offset, sourceByteOffset),
        });
    }
    for (const [key, value] of Object.entries(node))
      if (
        ![
          "loc",
          "start",
          "end",
          "extra",
          "comments",
          "tokens",
          "errors",
        ].includes(key) &&
        value &&
        typeof value === "object"
      )
        walk(value, node);
  }
  walk(ast, null);
  return { declarations, candidates, configs };
}
export function analyzeJson(source) {
  const parsed = JSON.parse(source),
    declarations = [],
    configs = [];
  function walk(value, pointer = "") {
    if (!value || typeof value !== "object") return;
    if (!Array.isArray(value)) {
      const route = value.url ?? value.path,
        method =
          typeof value.method === "string" ? value.method.toUpperCase() : null;
      if (
        typeof route === "string" &&
        route.length > 0 &&
        !/^(?:data|javascript|mailto):/.test(route) &&
        METHODS.has(method)
      )
        declarations.push({
          kind: "json-request-config",
          transport: "http",
          ...safeRoute(route),
          method,
          base_url:
            typeof value.baseURL === "string"
              ? safeRoute(value.baseURL).path
              : null,
          json_pointer: pointer,
          verification: "parsed-json-static-observation",
          request_keys:
            value.data && typeof value.data === "object"
              ? Object.keys(value.data).sort()
              : [],
          query_keys:
            value.params && typeof value.params === "object"
              ? Object.keys(value.params).sort()
              : [],
        });
      for (const key of ["baseURL", "baseUrl", "apiHost"])
        if (typeof value[key] === "string" && PATH_PREFIX.test(value[key]))
          configs.push({
            kind: "json-base-url-config",
            ...safeRoute(value[key]),
            json_pointer: pointer + "/" + key,
          });
    }
    for (const [key, child] of Object.entries(value))
      walk(
        child,
        pointer + "/" + key.replaceAll("~", "~0").replaceAll("/", "~1"),
      );
  }
  walk(parsed);
  return { declarations, candidates: [], configs };
}
export function fingerprint(source) {
  return createHash("sha256").update(source).digest("hex");
}
