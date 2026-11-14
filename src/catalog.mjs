import fs from "node:fs";
import path from "node:path";
export const readJson = (file) =>
  JSON.parse(fs.readFileSync(file, "utf8").replace(/^\uFEFF/, ""));
export function loadCatalog(root) {
  return [
    ["http", "http.json", "endpoints"],
    ["grpc", "grpc.json", "methods"],
    ["artifact", "artifacts.json", "candidates"],
    ["message", "messages.json", "messages"],
    ["http-model", "http-models.json", "models"],
  ].flatMap(([kind, file, key]) => {
    const name = path.join(root, "catalog", file);
    if (!fs.existsSync(name)) throw Error("Missing required catalog: " + file);
    const data = readJson(name);
    if (!Array.isArray(data[key]))
      throw Error(`Invalid ${file}: expected ${key} array`);
    return data[key].map((e) => ({
      ...e,
      id:
        e.id ??
        (kind === "message" || kind === "http-model"
          ? kind + ":" + e.descriptor
          : "artifact:" +
            e.archive_sha256.slice(0, 12) +
            ":" +
            e.member +
            ":" +
            e.member_byte_offset),
      kind,
    }));
  });
}
export function select(
  entries,
  { kind, query = "", offset = 0, limit = 20 } = {},
) {
  if (
    kind &&
    !["http", "grpc", "artifact", "message", "http-model"].includes(kind)
  )
    throw Error("kind must be http, grpc, artifact, message or http-model");
  if (
    !Number.isSafeInteger(offset) ||
    offset < 0 ||
    !Number.isSafeInteger(limit) ||
    limit < 1 ||
    limit > 1000
  )
    throw Error("offset must be nonnegative; limit must be 1..1000");
  const text = query.toLowerCase(),
    matches = entries.filter(
      (e) =>
        (!kind || e.kind === kind) &&
        (!text || JSON.stringify(e).toLowerCase().includes(text)),
    );
  return {
    total: matches.length,
    offset,
    limit,
    next_offset: offset + limit < matches.length ? offset + limit : null,
    entries: matches.slice(offset, offset + limit),
  };
}
export function summarize(entries) {
  const counts = { http: 0, grpc: 0, artifact: 0, message: 0, "http-model": 0 },
    verbs = {};
  for (const e of entries) {
    if (!(e.kind in counts)) throw Error("Unknown catalog kind");
    counts[e.kind]++;
    if (e.kind === "http") {
      const verb = e.http_method ?? "dynamic";
      verbs[verb] = (verbs[verb] ?? 0) + 1;
    }
  }
  return {
    entries: entries.length,
    counts,
    http_verbs: verbs,
    verification:
      "Static APK declarations/candidates; live availability is not established.",
  };
}
