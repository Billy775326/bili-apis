import {
  classifyFunction,
  functionCategory,
  isEndpoint,
} from "./functions.mjs";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { gunzipSync } from "node:zlib";
export const readJson = (file) =>
  JSON.parse(fs.readFileSync(file, "utf8").replace(/^\uFEFF/, ""));
export const CATALOG_KINDS = [
  "http",
  "grpc",
  "artifact",
  "message",
  "http-model",
  "dynamic-url",
  "dex-route",
  "resource-route",
  "broadcast",
  "native-url",
  "native-jni",
  "java-native",
  "associated-message",
];
const definitions = [
  ["http", "http.json", "endpoints"],
  ["grpc", "grpc.json", "methods"],
  ["artifact", "artifacts.json", "candidates"],
  ["message", "messages.json", "messages"],
  ["http-model", "http-models.json", "models"],
  ["dynamic-url", "dex-routes.json", "dynamic_url_callers"],
  ["dex-route", "dex-routes.json", "route_argument_candidates"],
  ["resource-route", "resource-routes.json", "declarations"],
  ["broadcast", "grpc-additional.json", "broadcast_dispatch_paths"],
  ["native-url", "native.json", "candidates"],
  ["java-native", "native.json", "java_native_declarations"],
  [
    "native-jni",
    "native.json",
    (r) =>
      r.libraries.flatMap((l) =>
        l.jni_table_candidates.map((e) => ({
          ...e,
          member: l.member,
          member_sha256: l.sha256,
        })),
      ),
  ],
  ["associated-message", "grpc-audit.json", "outside_associated_messages"],
];
export function loadCatalog(root, { edition = "play" } = {}) {
  if (!["play", "official"].includes(edition))
    throw Error("edition must be play or official");
  const directory =
    edition === "official"
      ? path.join(root, "catalog", "official-android")
      : path.join(root, "catalog");
  const manifest =
    edition === "official"
      ? readJson(path.join(directory, "manifest.json"))
      : null;
  const cache = new Map();
  return definitions.flatMap(([kind, file, key]) => {
    if (!cache.has(file)) {
      const name = path.join(
        directory,
        file + (edition === "official" ? ".gz" : ""),
      );
      if (!fs.existsSync(name))
        throw Error("Missing required catalog: " + file);
      if (edition === "official") {
        const record = manifest.files.find((e) => e.name === file + ".gz"),
          packed = fs.readFileSync(name);
        if (
          !record ||
          !Number.isSafeInteger(record.bytes) ||
          record.bytes < 0 ||
          packed.length !== record.bytes ||
          crypto.createHash("sha256").update(packed).digest("hex") !==
            record.sha256
        )
          throw Error("Official catalog hash mismatch: " + file);
        const bytes = gunzipSync(packed, { maxOutputLength: 64 * 1024 * 1024 });
        if (
          bytes.length !== record.uncompressed_bytes ||
          crypto.createHash("sha256").update(bytes).digest("hex") !==
            record.uncompressed_sha256
        )
          throw Error("Official unpacked catalog hash mismatch: " + file);
        cache.set(file, JSON.parse(bytes.toString("utf8")));
      } else cache.set(file, readJson(name));
    }
    const data = cache.get(file),
      rows = typeof key === "function" ? key(data) : data[key];
    if (!Array.isArray(rows))
      throw Error(`Invalid ${file}: expected ${key} array`);
    return rows.map((e) => {
      let id = e.id;
      if (!id) {
        if (["message", "http-model", "associated-message"].includes(kind))
          id = kind + ":" + e.descriptor;
        else if (kind === "artifact")
          id =
            "artifact:" +
            e.archive_sha256.slice(0, 12) +
            ":" +
            e.member +
            ":" +
            e.member_byte_offset;
        else
          id =
            kind +
            ":" +
            crypto
              .createHash("sha256")
              .update(JSON.stringify(e))
              .digest("hex")
              .slice(0, 24);
      }
      return { ...e, id, ...(e.kind ? { record_kind: e.kind } : {}), kind };
    });
  });
}
export function select(
  entries,
  { kind, category, query = "", offset = 0, limit = 20 } = {},
) {
  if (kind && !CATALOG_KINDS.includes(kind))
    throw Error("kind must be one of: " + CATALOG_KINDS.join(", "));
  if (
    !Number.isSafeInteger(offset) ||
    offset < 0 ||
    !Number.isSafeInteger(limit) ||
    limit < 1 ||
    limit > 1000
  )
    throw Error("offset must be nonnegative; limit must be 1..1000");
  if (category) functionCategory(category);
  const q = query.toLowerCase(),
    matches = entries.filter(
      (e) =>
        (!kind || kind === e.kind) &&
        (!category ||
          (isEndpoint(e) && classifyFunction(e).category === category)) &&
        (!q || JSON.stringify(e).toLowerCase().includes(q)),
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
  const counts = Object.fromEntries(CATALOG_KINDS.map((k) => [k, 0])),
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
      "Counts are evidence records, not a count of callable interfaces. Static declarations, construction observations and unresolved candidates remain separate; live availability is not established.",
  };
}
