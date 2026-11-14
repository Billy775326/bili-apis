export const methodKey = (method) =>
  `${method.owner}->${method.name}${method.descriptor}`;
export function resolveDescriptorOrigins(nodes) {
  const indexed = new Map(nodes.map((node) => [node.key, node]));
  if (indexed.size !== nodes.length)
    throw Error("Duplicate descriptor method identity");
  return nodes.map((node) => {
    const seen = new Set(),
      queue = [node.key],
      routes = new Set(),
      missing = new Set();
    while (queue.length) {
      const key = queue.pop();
      if (seen.has(key)) continue;
      seen.add(key);
      const current = indexed.get(key);
      if (!current) {
        missing.add(key);
        continue;
      }
      for (const route of current.direct_routes ?? []) routes.add(route);
      for (const target of current.descriptor_calls ?? [])
        queue.push(target.key ?? target);
      for (const target of current.cache_origins ?? []) queue.push(target);
    }
    const origins = [...routes].sort();
    return {
      ...node,
      classification: node.direct_routes?.length
        ? "catalogued-builder"
        : origins.length
          ? "static-reference-to-builder"
          : "unresolved-descriptor-method",
      reachable_route_candidates: origins,
      missing_method_definitions: [...missing].sort(),
      traversed_methods: seen.size,
    };
  });
}
export function isValidRpcFullName(value) {
  return /^\/?[A-Za-z_][A-Za-z0-9_]*(?:\.[A-Za-z_][A-Za-z0-9_]*)+\/[A-Za-z_][A-Za-z0-9_]*$/.test(
    value,
  );
}
export function decodeAnnotatedMethod(annotation) {
  if (!annotation || !annotation.elements) return null;
  const e = annotation.elements;
  if (
    typeof e.fullMethodName !== "string" ||
    !isValidRpcFullName(e.fullMethodName)
  )
    return null;
  return {
    id: "/" + e.fullMethodName.replace(/^\//, ""),
    request_type: typeof e.requestType === "string" ? e.requestType : null,
    response_type: typeof e.responseType === "string" ? e.responseType : null,
    method_type: e.methodType ?? null,
  };
}
export function findInheritedMessageType(descriptor, classes) {
  const visited = new Set();
  let next = descriptor;
  while (next) {
    if (visited.has(next))
      return { status: "cycle", chain: [...visited, next] };
    visited.add(next);
    if (
      next === "Lcom/google/protobuf/GeneratedMessageLite;" ||
      next === "Lcom/google/protobuf/GeneratedMessageV3;"
    )
      return { status: "protobuf-supertype", chain: [...visited] };
    const cls = classes.get(next);
    if (!cls) return { status: "unresolved-supertype", chain: [...visited] };
    next = cls.superType;
  }
  return { status: "not-protobuf", chain: [...visited] };
}

export function classifyTransportMethod(method) {
  if (method.reachable_route_candidates?.length)
    return "rpc-descriptor-reference";
  const lifecycle = new Set([
    "addInternalMiddlewares",
    "addMiddleware",
    "serviceComponent",
  ]);
  if (
    method.transport_calls?.length &&
    method.transport_calls.every((call) =>
      lifecycle.has(call.target.split("->")[1]?.split("(")[0]),
    )
  )
    return "middleware-or-lifecycle";
  return "unresolved-rpc-candidate";
}

export function classifyFullNameLiteral(value) {
  if (!isValidRpcFullName(value)) return "not-full-name-shaped";
  if (value.startsWith("vnd.android.")) return "android-mime-type";
  if (value === "play.google.com/store") return "store-url-text";
  if (value.startsWith("/bilibili.broadcast.message."))
    return "broadcast-message-dispatch-path";
  return "unclassified-full-name-shaped-literal";
}
