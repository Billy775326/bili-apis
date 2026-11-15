import test from "node:test";
import { fileURLToPath } from "node:url";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import { gzipSync, gunzipSync } from "node:zlib";
import { spawnSync } from "node:child_process";
import { loadCatalog, CATALOG_KINDS, summarize } from "../src/catalog.mjs";
const hash = (bytes) => crypto.createHash("sha256").update(bytes).digest("hex");
function records(edition) {
  const row = (data = {}) => ({ edition_marker: edition, ...data }),
    artifact = {
      sha256: edition === "official" ? "a".repeat(64) : "b".repeat(64),
    };
  return {
    "http.json": {
      artifact,
      endpoints: [
        row({ id: edition + "-http", http_method: "GET", path: "/x/search" }),
      ],
    },
    "grpc.json": {
      artifact,
      methods: [row({ id: "/fixture.api.Service/" + edition })],
    },
    "artifacts.json": {
      artifact,
      candidates: [
        row({
          archive_sha256: "f".repeat(64),
          member: "asset.json",
          member_byte_offset: 7,
        }),
      ],
    },
    "messages.json": {
      artifact,
      messages: [row({ descriptor: "Lfixture/" + edition + "Req;" })],
    },
    "http-models.json": {
      artifact,
      models: [row({ descriptor: "Lfixture/" + edition + "Model;" })],
    },
    "dex-routes.json": {
      artifact,
      dynamic_url_callers: [row()],
      route_argument_candidates: [row()],
    },
    "resource-routes.json": {
      artifact,
      declarations: [row({ kind: "fetch" })],
    },
    "grpc-additional.json": {
      artifact,
      broadcast_dispatch_paths: [
        row({ path: "/fixture.broadcast.Event/Update" }),
      ],
    },
    "native.json": {
      artifact,
      candidates: [row()],
      java_native_declarations: [row()],
      libraries: [
        {
          member: "lib/arm64-v8a/libfixture.so",
          sha256: "c".repeat(64),
          jni_table_candidates: [row({ jni_name: "example" })],
        },
      ],
    },
    "grpc-audit.json": {
      artifact,
      outside_associated_messages: [
        row({ descriptor: "Lfixture/" + edition + "Extra;" }),
      ],
    },
  };
}
function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "bili-edition-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const plain = path.join(root, "catalog/android/com.bilibili.app.in/play/6.8.0"),
    official = path.join(root, "catalog/android/tv.danmaku.bili/official/9.19.0");
  fs.mkdirSync(plain, { recursive: true });
  fs.mkdirSync(official, { recursive: true });
  for (const [name, data] of Object.entries(records("play")))
    fs.writeFileSync(path.join(plain, name), JSON.stringify(data));
  const manifest = {
    schema_version: 1,
    artifact: { sha256: "a".repeat(64) },
    files: [],
  };
  for (const [name, data] of Object.entries(records("official"))) {
    const bytes = Buffer.from(JSON.stringify(data)),
      packed = gzipSync(bytes);
    fs.writeFileSync(path.join(official, name + ".gz"), packed);
    manifest.files.push({
      name: name + ".gz",
      bytes: packed.length,
      sha256: hash(packed),
      uncompressed_bytes: bytes.length,
      uncompressed_sha256: hash(bytes),
    });
  }
  const save = () =>
    fs.writeFileSync(
      path.join(official, "manifest.json"),
      JSON.stringify(manifest),
    );
  save();
  return {
    root,
    plain,
    official,
    manifest,
    save,
    record: (name) => manifest.files.find((f) => f.name === name + ".gz"),
  };
}
function cliFixture(t) {
  const f = fixture(t);
  for (const dir of ["src", "bin"]) fs.mkdirSync(path.join(f.root, dir));
  for (const name of [
    "src/catalog.mjs",
    "src/android-editions.mjs",
    "src/functions.mjs",
    "bin/bili-apis.mjs",
  ])
    fs.copyFileSync(
      new URL("../" + name, import.meta.url),
      path.join(f.root, name),
    );
  return {
    ...f,
    run: (args) =>
      spawnSync(
        process.execPath,
        [path.join(f.root, "bin/bili-apis.mjs"), ...args],
        { encoding: "utf8", timeout: 10000 },
      ),
  };
}
test("edition selection loads all required kinds from isolated Play or official fixtures", (t) => {
  const f = fixture(t),
    defaultEntries = loadCatalog(f.root),
    play = loadCatalog(f.root, { edition: "play" }),
    official = loadCatalog(f.root, { edition: "official" });
  assert.deepEqual(defaultEntries, play);
  assert.equal(play.length, CATALOG_KINDS.length);
  assert.equal(official.length, CATALOG_KINDS.length);
  assert.ok(play.every((e) => e.edition_marker === "play"));
  assert.ok(official.every((e) => e.edition_marker === "official"));
  assert.deepEqual(
    summarize(official).counts,
    Object.fromEntries(CATALOG_KINDS.map((kind) => [kind, 1])),
  );
  assert.equal(
    official.find((e) => e.kind === "resource-route").record_kind,
    "fetch",
  );
  assert.equal(
    official.find((e) => e.kind === "native-jni").member,
    "lib/arm64-v8a/libfixture.so",
  );
});
test("official lookup never falls back to Play when an official file is missing", (t) => {
  const f = fixture(t);
  fs.unlinkSync(path.join(f.official, "http.json.gz"));
  assert.throws(
    () => loadCatalog(f.root, { edition: "official" }),
    /Missing required catalog: http.json/,
  );
  assert.ok(
    loadCatalog(f.root, { edition: "play" }).every(
      (e) => e.edition_marker === "play",
    ),
  );
});
test("edition validation rejects unknown values before touching catalog files", () => {
  for (const edition of ["unknown", "Official", "", null, 42, {}, []])
    assert.throws(
      () => loadCatalog("nonexistent-fixture-root", { edition }),
      /edition must be play or official/,
    );
});
test("corrupt compressed bytes fail their manifest hash before JSON is accepted", (t) => {
  const f = fixture(t),
    name = path.join(f.official, "http.json.gz"),
    packed = fs.readFileSync(name);
  packed[packed.length - 1] ^= 1;
  fs.writeFileSync(name, packed);
  assert.throws(
    () => loadCatalog(f.root, { edition: "official" }),
    /Official catalog hash mismatch: http.json/,
  );
});
test("gzip validity is checked even if a corrupted stream has a matching declared compressed hash", (t) => {
  const f = fixture(t),
    packed = Buffer.from("this is not gzip");
  fs.writeFileSync(path.join(f.official, "http.json.gz"), packed);
  f.record("http.json").sha256 = hash(packed);
  f.record("http.json").bytes = packed.length;
  f.save();
  assert.throws(() => loadCatalog(f.root, { edition: "official" }));
});
test("uncompressed byte length must match the manifest", (t) => {
  const f = fixture(t);
  f.record("http.json").uncompressed_bytes++;
  f.save();
  assert.throws(
    () => loadCatalog(f.root, { edition: "official" }),
    /Official unpacked catalog hash mismatch: http.json/,
  );
});
test("uncompressed JSON digest must match the manifest", (t) => {
  const f = fixture(t);
  f.record("http.json").uncompressed_sha256 = "0".repeat(64);
  f.save();
  assert.throws(
    () => loadCatalog(f.root, { edition: "official" }),
    /Official unpacked catalog hash mismatch: http.json/,
  );
});
test("an official file without a manifest integrity record is rejected", (t) => {
  const f = fixture(t);
  f.manifest.files = f.manifest.files.filter((x) => x.name !== "http.json.gz");
  f.save();
  assert.throws(
    () => loadCatalog(f.root, { edition: "official" }),
    /Official catalog hash mismatch: http.json/,
  );
});
test("valid gzip and checksums do not excuse malformed JSON or missing required arrays", (t) => {
  const f = fixture(t);
  for (const body of ["not json", JSON.stringify({ endpoints: null })]) {
    const bytes = Buffer.from(body),
      packed = gzipSync(bytes);
    fs.writeFileSync(path.join(f.official, "http.json.gz"), packed);
    Object.assign(f.record("http.json"), {
      bytes: packed.length,
      sha256: hash(packed),
      uncompressed_bytes: bytes.length,
      uncompressed_sha256: hash(bytes),
    });
    f.save();
    assert.throws(() => loadCatalog(f.root, { edition: "official" }));
  }
});
test("compressed file byte length must agree with its manifest record", (t) => {
  const f = fixture(t);
  f.record("http.json").bytes++;
  f.save();
  assert.throws(() => loadCatalog(f.root, { edition: "official" }));
});
test("CLI selects official only with explicit prefix and keeps Play as the default", (t) => {
  const f = cliFixture(t);
  for (const [args, edition] of [
    [["list", "--kind", "http"], "play"],
    [["--edition", "play", "list", "--kind", "http"], "play"],
    [["--edition", "official", "list", "--kind", "http"], "official"],
  ]) {
    const r = f.run(args);
    assert.equal(r.status, 0, r.stderr);
    const body = JSON.parse(r.stdout);
    assert.equal(body.entries.length, 1);
    assert.equal(body.entries[0].edition_marker, edition);
  }
});
test("CLI rejects unknown or incomplete edition without printing another edition", (t) => {
  const f = cliFixture(t);
  for (const args of [
    ["--edition"],
    ["--edition", "not-real", "stats"],
    ["--edition", "--help"],
    ["--edition", "official", "--edition", "play", "stats"],
  ]) {
    const r = f.run(args);
    assert.notEqual(r.status, 0);
    assert.equal(r.stdout, "");
    assert.ok(r.stderr.length > 0);
  }
});
test("CLI rejects misplaced edition flags instead of silently returning Play data", (t) => {
  const f = cliFixture(t);
  for (const args of [
    ["stats", "--edition", "official"],
    ["categories", "--edition", "official"],
  ]) {
    const r = f.run(args);
    assert.notEqual(r.status, 0);
    assert.equal(r.stdout, "");
  }
});

const projectRoot = new URL("../", import.meta.url);
const packagedJson = (relative) =>
  JSON.parse(
    fs
      .readFileSync(new URL(relative, projectRoot), "utf8")
      .replace(/^\uFEFF/, ""),
  );
function packagedOfficial() {
  const manifest = packagedJson("catalog/android/tv.danmaku.bili/official/9.19.0/manifest.json"),
    data = new Map();
  assert.equal(
    new Set(manifest.files.map((file) => file.name)).size,
    manifest.files.length,
  );
  for (const record of manifest.files) {
    const packed = fs.readFileSync(
      new URL("catalog/android/tv.danmaku.bili/official/9.19.0/" + record.name, projectRoot),
    );
    assert.equal(packed.length, record.bytes, record.name + " compressed size");
    assert.equal(
      hash(packed),
      record.sha256,
      record.name + " compressed digest",
    );
    const bytes = gunzipSync(packed, { maxOutputLength: 64 * 1024 * 1024 });
    assert.equal(
      bytes.length,
      record.uncompressed_bytes,
      record.name + " JSON size",
    );
    assert.equal(
      hash(bytes),
      record.uncompressed_sha256,
      record.name + " JSON digest",
    );
    data.set(record.name.slice(0, -3), JSON.parse(bytes.toString("utf8")));
  }
  return { manifest, data };
}
test("shipped official gzip datasets agree with pinned APK, binary manifest and all 36 DEX digests", () => {
  const { manifest, data } = packagedOfficial(),
    inputs = packagedJson("evidence/official-android/inputs.json"),
    receipt = packagedJson("evidence/official-android/download.json"),
    identity = packagedJson("evidence/official-android/manifest.json");
  assert.deepEqual(manifest.artifact, inputs.artifact);
  assert.equal(inputs.artifact.sha256, receipt.sha256);
  assert.equal(inputs.artifact.size, receipt.received_bytes);
  assert.equal(inputs.artifact.sha256, identity.artifact_sha256);
  assert.equal(inputs.artifact.package_name, identity.package_name);
  assert.equal(inputs.artifact.version_name, identity.version_name);
  assert.equal(inputs.artifact.version_code, identity.version_code);
  assert.equal(inputs.dex_files.length, 36);
  assert.equal(new Set(inputs.dex_files.map((d) => d.name)).size, 36);
  for (const dex of inputs.dex_files) {
    assert.match(dex.sha256, /^[0-9a-f]{64}$/);
    assert.ok(Number.isSafeInteger(dex.size) && dex.size > 0);
  }
  const pinned = new Map(inputs.dex_files.map((d) => [d.name, d]));
  for (const name of ["http.json", "grpc.json", "coverage-grpc-audit.json"]) {
    const catalog = data.get(name);
    assert.equal(catalog.artifact.sha256, inputs.artifact.sha256);
    assert.equal(catalog.dex_files.length, 36);
    for (const dex of catalog.dex_files) {
      assert.equal(
        dex.sha256,
        pinned.get(dex.name)?.sha256,
        name + ":" + dex.name,
      );
      assert.equal(dex.size, pinned.get(dex.name)?.size, name + ":" + dex.name);
    }
  }
  for (const [name, record] of Object.entries(
    data.get("grpc-audit.json").catalog_sources,
  )) {
    const sourceName =
      name === "grpc_sha256"
        ? "grpc.json.gz"
        : name === "messages_sha256"
          ? "messages.json.gz"
          : null;
    if (sourceName)
      assert.equal(
        record,
        manifest.files.find((f) => f.name === sourceName)
          .source_pretty_json_sha256,
        "audit input lineage " + name,
      );
  }
  for (const [name, catalog] of data)
    if (catalog.artifact)
      assert.equal(catalog.artifact.sha256, inputs.artifact.sha256, name);
});
test("shipped official row counts and field checks match coverage while Play stays separate", () => {
  const { data } = packagedOfficial(),
    hc = data.get("coverage-http.json"),
    gc = data.get("coverage-grpc.json"),
    ga = data.get("coverage-grpc-audit.json"),
    hm = data.get("coverage-http-models.json"),
    nc = data.get("coverage-native.json"),
    ac = data.get("coverage-artifacts.json"),
    rc = data.get("coverage-resource-routes.json");
  assert.equal(data.get("http.json").endpoints.length, hc.http_declarations);
  assert.equal(data.get("grpc.json").methods.length, gc.unique_methods);
  assert.equal(data.get("messages.json").messages.length, gc.message_classes);
  assert.equal(
    data
      .get("messages.json")
      .messages.reduce((n, m) => n + (m.wire_layout?.fields.length ?? 0), 0),
    gc.decoded_wire_fields,
  );
  assert.equal(
    data
      .get("messages.json")
      .messages.filter((m) => m.field_number_cross_check === "matched").length,
    gc.field_number_cross_checks_matched,
  );
  assert.equal(
    data.get("http-models.json").models.length,
    hm.model_definitions,
  );
  assert.equal(
    data
      .get("http-models.json")
      .models.reduce((n, m) => n + m.fields.length, 0),
    hm.fields,
  );
  assert.equal(data.get("native.json").candidates.length, nc.url_candidates);
  assert.equal(
    data.get("native.json").java_native_declarations.length,
    nc.java_native_methods,
  );
  assert.equal(
    data.get("native.json").libraries.flatMap((l) => l.jni_table_candidates)
      .length,
    nc.jni_table_candidates,
  );
  assert.equal(
    data.get("artifacts.json").candidates.length,
    ac.counts.candidates,
  );
  assert.equal(
    data.get("resource-routes.json").declarations.length,
    rc.counts.declarations,
  );
  assert.equal(
    data.get("grpc-audit.json").outside_associated_messages.length,
    ga.associated_types_outside_existing_message_catalog,
  );
  assert.equal(
    data.get("grpc-additional.json").broadcast_dispatch_paths.length,
    ga.broadcast_dispatch_path_candidates,
  );
  const official = loadCatalog(fileURLToPath(projectRoot), {
    edition: "official",
  });
  assert.equal(summarize(official).counts.http, hc.http_declarations);
  assert.equal(summarize(official).counts.grpc, gc.unique_methods);
  assert.equal(gc.unique_methods, 625);
  assert.equal(packagedJson("catalog/android/com.bilibili.app.in/play/6.8.0/grpc.json").methods.length, 604);
});
