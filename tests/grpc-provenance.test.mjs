import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
const script = path.resolve("scripts/extract-grpc.mjs");
test("gRPC CLI rejects changed or missing pinned DEX before emitting a catalog", (t) => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "bili-grpc-input-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const dir = path.join(root, "dex");
  fs.mkdirSync(dir);
  const dex = Buffer.alloc(112);
  dex.write("dex\n039\0");
  dex.writeUInt32LE(112, 32);
  dex.writeUInt32LE(112, 36);
  dex.writeUInt32LE(0x12345678, 40);
  fs.writeFileSync(path.join(dir, "classes.dex"), dex);
  const provenance = path.join(root, "inputs.json");
  fs.writeFileSync(
    provenance,
    JSON.stringify({
      artifact: { sha256: "ab".repeat(32) },
      dex_files: [
        {
          name: "classes.dex",
          sha256: crypto.createHash("sha256").update(dex).digest("hex"),
        },
      ],
    }),
  );
  const out = path.join(root, "out");
  dex[50] = 1;
  fs.writeFileSync(path.join(dir, "classes.dex"), dex);
  let result = spawnSync(process.execPath, [script, dir, provenance, out], {
    encoding: "utf8",
  });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /DEX provenance mismatch/);
  assert.equal(fs.existsSync(out), false);
  fs.unlinkSync(path.join(dir, "classes.dex"));
  result = spawnSync(process.execPath, [script, dir, provenance, out], {
    encoding: "utf8",
  });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /count differs from provenance/);
});
