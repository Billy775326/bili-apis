/** Pure, deterministic static snapshot comparison. No network or filesystem access. */
const compareText = (a, b) => (a < b ? -1 : a > b ? 1 : 0);
const canonical = (value) => JSON.stringify(stable(value));
function stable(value) {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === "object")
    return Object.fromEntries(
      Object.keys(value)
        .sort(compareText)
        .map((key) => [key, stable(value[key])]),
    );
  return value;
}
function unique(values) {
  return [
    ...new Map(values.map((value) => [canonical(value), value])).entries(),
  ]
    .sort(([a], [b]) => compareText(a, b))
    .map(([, value]) => value);
}
function requireArray(value, label) {
  if (!Array.isArray(value)) throw new TypeError(label + " must be an array");
  return value;
}
function assertBundle(bundle, label) {
  if (!bundle || !bundle.http || !bundle.grpc || !bundle.messages)
    throw new TypeError(label + " needs http, grpc and messages catalogs");
  const sha = bundle.http.artifact?.sha256;
  if (typeof sha !== "string" || !sha)
    throw new TypeError(label + " HTTP artifact hash missing");
  for (const kind of ["grpc", "messages"])
    if (bundle[kind].artifact?.sha256 !== sha)
      throw new Error(label + " catalog APK hashes differ");
  requireArray(bundle.http.endpoints, label + ".http.endpoints");
  requireArray(bundle.grpc.methods, label + ".grpc.methods");
  requireArray(bundle.messages.messages, label + ".messages.messages");
}
/** URL origin (including port) is retained; query/fragment values are excluded. */
export function normalizedHttpRoute(endpoint) {
  if (typeof endpoint.http_method !== "string" || !endpoint.http_method.trim())
    return null;
  const dynamic = (endpoint.parameters ?? []).some((p) =>
    (p.annotations ?? []).some((a) => a.type?.endsWith("/Url;")),
  );
  if (dynamic && !(typeof endpoint.path === "string" && endpoint.path.trim()))
    return null;
  const raw =
    endpoint.resolved_url_candidate ?? endpoint.absolute_url ?? endpoint.path;
  if (typeof raw !== "string" || !raw.trim()) return null;
  const stripped = raw.split(/[?#]/, 1)[0];
  let route = stripped;
  if (/^[a-z][a-z0-9+.-]*:\/\//i.test(stripped)) {
    try {
      const url = new URL(stripped);
      route = url.origin + url.pathname;
    } catch {
      return null;
    }
  }
  return endpoint.http_method.trim().toUpperCase() + " " + route;
}
function namedBindings(records) {
  const result = [];
  for (const endpoint of records)
    for (const parameter of endpoint.parameters ?? [])
      for (const annotation of parameter.annotations ?? []) {
        const match = annotation.type?.match(
          /\/(Query|Field|Path|Header|Part);$/,
        );
        if (!match) continue;
        const elements = annotation.elements ?? {},
          name = Object.hasOwn(elements, "value")
            ? elements.value
            : elements.name;
        if (typeof name !== "string") continue;
        const attributes = Object.fromEntries(
          Object.entries(elements).filter(
            ([key]) => key !== "value" && key !== "name",
          ),
        );
        result.push({
          binding: match[1],
          name,
          ...(Object.keys(attributes).length
            ? { attributes: stable(attributes) }
            : {}),
        });
      }
  return unique(result);
}
function grouped(items, key) {
  const result = new Map();
  for (const item of items) {
    const id = key(item);
    if (id === null) continue;
    if (!result.has(id)) result.set(id, []);
    result.get(id).push(item);
  }
  return result;
}
function setDifferences(left, right) {
  const leftKeys = [...left.keys()].sort(compareText),
    rightKeys = [...right.keys()].sort(compareText);
  return {
    play_count: left.size,
    official_count: right.size,
    common_count: leftKeys.filter((k) => right.has(k)).length,
    added: rightKeys.filter((k) => !left.has(k)),
    removed: leftKeys.filter((k) => !right.has(k)),
    common: leftKeys.filter((k) => right.has(k)),
  };
}
function compareHttp(play, official) {
  const left = grouped(play.endpoints, normalizedHttpRoute),
    right = grouped(official.endpoints, normalizedHttpRoute),
    sets = setDifferences(left, right),
    changed = [];
  for (const route of sets.common) {
    const before = namedBindings(left.get(route)),
      after = namedBindings(right.get(route));
    const a = new Map(before.map((x) => [canonical(x), x])),
      b = new Map(after.map((x) => [canonical(x), x]));
    const added = after.filter((x) => !a.has(canonical(x))),
      removed = before.filter((x) => !b.has(canonical(x)));
    if (added.length || removed.length)
      changed.push({
        route,
        added_bindings: added,
        removed_bindings: removed,
        play_declaration_ids: left
          .get(route)
          .map((e) => e.id)
          .sort(compareText),
        official_declaration_ids: right
          .get(route)
          .map((e) => e.id)
          .sort(compareText),
      });
  }
  return {
    ...sets,
    added_count: sets.added.length,
    removed_count: sets.removed.length,
    changed_count: changed.length,
    changed_parameters: changed,
    excluded_empty_or_dynamic_declarations: {
      play: play.endpoints.filter((e) => normalizedHttpRoute(e) === null)
        .length,
      official: official.endpoints.filter(
        (e) => normalizedHttpRoute(e) === null,
      ).length,
    },
    comparison_scope:
      "Union of explicitly named Query/Field/Path/Header/Part annotations per normalized verb+route; map/body-only parameters and runtime defaults are not inferred.",
  };
}
function candidates(records) {
  return unique(
    records.map((method) => ({
      request_type_candidate: Object.hasOwn(method, "request_type_candidate")
        ? method.request_type_candidate
        : null,
      response_type_candidate: Object.hasOwn(method, "response_type_candidate")
        ? method.response_type_candidate
        : null,
    })),
  );
}
function compareGrpc(play, official) {
  const left = grouped(play.methods, (m) => m.id),
    right = grouped(official.methods, (m) => m.id),
    sets = setDifferences(left, right),
    changed = [];
  for (const id of sets.common) {
    const before = candidates(left.get(id)),
      after = candidates(right.get(id));
    if (canonical(before) !== canonical(after))
      changed.push({ id, play_candidates: before, official_candidates: after });
  }
  return {
    ...sets,
    added_count: sets.added.length,
    removed_count: sets.removed.length,
    changed_count: changed.length,
    changed_candidates: changed,
    comparison_scope:
      "Static service/method IDs and request/response marshaller type candidates; no proof of active backend or wire compatibility.",
  };
}
const layoutKeys = [
  "flags",
  "field_count",
  "oneof_count",
  "has_bits_count",
  "min_field",
  "max_field",
  "entry_count",
  "map_count",
  "repeated_count",
  "check_initialized_count",
];
function fieldLayouts(records) {
  const map = new Map();
  for (const record of records)
    for (const field of record.wire_layout?.fields ?? []) {
      if (!Number.isInteger(field.number))
        throw new Error("Protobuf layout field number missing");
      const value = Object.fromEntries(
        ["number", "type_id", "type_and_flags", "oneof_index", "presence_index"]
          .filter((key) => Object.hasOwn(field, key))
          .map((key) => [key, field[key]]),
      );
      if (!map.has(field.number)) map.set(field.number, []);
      map.get(field.number).push(value);
    }
  for (const [number, variants] of map) map.set(number, unique(variants));
  return map;
}
function metadata(records, key) {
  return unique(
    records.map((record) =>
      Object.hasOwn(record.wire_layout ?? {}, key)
        ? { present: true, value: record.wire_layout[key] }
        : { present: false },
    ),
  );
}
function messageMetadata(records) {
  return {
    field_number_constants: unique(
      records.flatMap((m) =>
        (m.field_numbers ?? []).map((f) => ({
          constant: f.constant,
          number: f.number,
        })),
      ),
    ),
    declared_storage_fields: unique(
      records.flatMap((m) =>
        (m.declared_fields ?? []).map((f) => ({ name: f.name, type: f.type })),
      ),
    ),
  };
}
function compareMessages(play, official) {
  const left = grouped(play.messages, (m) => m.descriptor),
    right = grouped(official.messages, (m) => m.descriptor),
    sets = setDifferences(left, right),
    changed = [],
    metadataOnly = [];
  for (const descriptor of sets.common) {
    const before = left.get(descriptor),
      after = right.get(descriptor),
      beforeAvailable = before.filter(
        (m) => m.wire_layout !== null && m.wire_layout !== undefined,
      ).length,
      afterAvailable = after.filter(
        (m) => m.wire_layout !== null && m.wire_layout !== undefined,
      ).length,
      hasBoth = beforeAvailable > 0 && afterAvailable > 0;
    const a = fieldLayouts(before),
      b = fieldLayouts(after),
      addedFields = [],
      removedFields = [],
      changedFields = [];
    if (hasBoth) {
      for (const number of [...b.keys()].sort((a, b) => a - b)) {
        if (!a.has(number))
          addedFields.push({ number, layouts: b.get(number) });
        else if (canonical(a.get(number)) !== canonical(b.get(number)))
          changedFields.push({
            number,
            play_layouts: a.get(number),
            official_layouts: b.get(number),
          });
      }
      for (const number of [...a.keys()].sort((a, b) => a - b))
        if (!b.has(number))
          removedFields.push({ number, layouts: a.get(number) });
    }
    const metadataChanges = [];
    if (hasBoth)
      for (const key of layoutKeys) {
        const old = metadata(before, key),
          next = metadata(after, key);
        if (canonical(old) !== canonical(next))
          metadataChanges.push({
            property: key,
            play_values: old,
            official_values: next,
          });
      }
    const layoutCoverageChanged =
      canonical(unique(before.map((m) => Boolean(m.wire_layout)))) !==
      canonical(unique(after.map((m) => Boolean(m.wire_layout))));
    const oldMetadata = messageMetadata(before),
      newMetadata = messageMetadata(after),
      observedMetadataChanged =
        canonical(oldMetadata) !== canonical(newMetadata);
    if (
      addedFields.length ||
      removedFields.length ||
      changedFields.length ||
      metadataChanges.length ||
      layoutCoverageChanged
    )
      changed.push({
        descriptor,
        added_fields: addedFields,
        removed_fields: removedFields,
        changed_fields: changedFields,
        metadata_changes: metadataChanges,
        layout_coverage: {
          play_definitions: before.length,
          play_layouts: beforeAvailable,
          official_definitions: after.length,
          official_layouts: afterAvailable,
        },
        layout_comparison_available: hasBoth,
      });
    else if (observedMetadataChanged)
      metadataOnly.push({
        descriptor,
        play_observed_metadata: oldMetadata,
        official_observed_metadata: newMetadata,
      });
  }
  return {
    ...sets,
    added_count: sets.added.length,
    removed_count: sets.removed.length,
    changed_count: changed.length,
    changed_messages: changed,
    metadata_only_change_count: metadataOnly.length,
    metadata_only_changes: metadataOnly,
    comparison_scope:
      "RawMessageInfo layout field numbers, type IDs, flags and presence/oneof indices. Java storage fields/constants are separate metadata and do not establish protobuf source names.",
  };
}
export function compareAndroidCatalogs(play, official) {
  assertBundle(play, "play");
  assertBundle(official, "official");
  return {
    schema_version: 1,
    play_artifact: stable(play.http.artifact),
    official_artifact: stable(official.http.artifact),
    scope: "Static APK catalog snapshot comparison; no live API verification.",
    limitations: [
      "Version and distribution-channel effects are not isolated; do not attribute differences solely to channel.",
      "Declared parameter unions are observations, not requiredness/default/authentication or compatibility guarantees.",
      "Missing wire layouts are recorded as unavailable rather than interpreted as removed fields.",
      "DEX indices, source offsets and declaration order do not count as API/schema changes.",
    ],
    http: compareHttp(play.http, official.http),
    grpc: compareGrpc(play.grpc, official.grpc),
    protobuf: compareMessages(play.messages, official.messages),
  };
}
