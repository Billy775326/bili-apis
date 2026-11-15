import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { parse } from "@babel/parser";
import { ZipReader } from "../src/zip.mjs";
import {
  analyzeJavaScript,
  analyzeJson,
  fingerprint,
} from "../src/resource-routes.mjs";
const limits = {
  member_bytes: 8 * 1024 * 1024,
  nested_archive_bytes: 64 * 1024 * 1024,
  nested_depth: 3,
  total_selected_bytes: 512 * 1024 * 1024,
  selected_members: 10000,
};
const inputs = [],
  args = process.argv.slice(2);
let output = "catalog/android/com.bilibili.app.in/play/6.8.0/resource-routes.json",
  coverageOutput = "catalog/android/com.bilibili.app.in/play/6.8.0/coverage-resource-routes.json";
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--apk") inputs.push(args[++i]);
  else if (args[i] === "--output") output = args[++i];
  else if (args[i] === "--coverage") coverageOutput = args[++i];
  else throw Error("Unknown argument " + args[i]);
}
if (!inputs.length) throw Error("Supply --apk FILE");
const declarations = [],
  candidates = [],
  configuration = [],
  coverage = [],
  archives = [];
let selectedBytes = 0,
  selectedMembers = 0;
function add(result, origin) {
  for (const [key, target] of [
    ["declarations", declarations],
    ["candidates", candidates],
    ["configs", configuration],
  ])
    for (const value of result[key]) target.push({ ...origin, ...value });
}
function scripts(html) {
  const result = [];
  let cursor = 0;
  while (cursor < html.length) {
    const start = html.slice(cursor).search(/<script\b/i);
    if (start < 0) break;
    const p = cursor + start;
    let q = p + 7,
      quote = null;
    for (; q < html.length; q++) {
      const c = html[q];
      if (quote) {
        if (c === quote) quote = null;
      } else if (c === '"' || c === "'") quote = c;
      else if (c === ">") break;
    }
    if (q === html.length) throw Error("Unclosed HTML script start");
    const close = html.slice(q + 1).search(/<\/script\s*>/i);
    if (close < 0) throw Error("Unclosed HTML script body");
    const bodyStart = q + 1,
      bodyEnd = bodyStart + close,
      tag = html.slice(p, q + 1);
    cursor = bodyEnd + html.slice(bodyEnd).match(/^<\/script\s*>/i)[0].length;
    if (/\bsrc\s*=/i.test(tag)) continue;
    const type = tag.match(/\btype\s*=\s*["']([^"']+)["']/i)?.[1];
    if (
      type &&
      !["text/javascript", "application/javascript", "module"].includes(
        type.toLowerCase(),
      )
    )
      continue;
    result.push({ start: bodyStart, text: html.slice(bodyStart, bodyEnd) });
  }
  return result;
}
async function archive(filename, chain, depth) {
  const zip = new ZipReader(filename);
  try {
    for (const entry of zip.entries) {
      const nested = /\.(?:zip|jar|apkm|xapk)$/i.test(entry.name),
        asar = /\.asar$/i.test(entry.name),
        opaque = /\.bundle$/i.test(entry.name),
        text = /\.(?:[cm]?js|json|html?)$/i.test(entry.name);
      if (!nested && !asar && !opaque && !text) continue;
      const row = {
        chain,
        member: entry.name,
        member_index: entry.index,
        size: entry.size,
        status: "pending",
        reason: null,
      };
      coverage.push(row);
      if (asar || opaque) {
        row.status = "unsupported-format";
        row.reason = asar
          ? "ASAR parser not available; no ASAR file appeared in the supplied base inventory"
          : "Opaque .bundle container; not treated as JavaScript by suffix";
        continue;
      }
      const cap = nested ? limits.nested_archive_bytes : limits.member_bytes;
      if (
        entry.size > cap ||
        entry.compressedSize > cap ||
        selectedBytes + entry.size > limits.total_selected_bytes ||
        selectedMembers >= limits.selected_members
      ) {
        row.status = "skipped-budget";
        row.reason = "Declared resource budget exceeded";
        continue;
      }
      selectedMembers++;
      selectedBytes += entry.size;
      const bytes = zip.readEntry(entry, cap),
        hash = fingerprint(bytes),
        origin = {
          archive_chain: chain,
          member: entry.name,
          member_sha256: hash,
        };
      row.sha256 = hash;
      if (nested) {
        if (depth >= limits.nested_depth) {
          row.status = "skipped-depth";
          row.reason = "Nested archive depth exhausted";
          continue;
        }
        if (
          bytes.readUInt32LE(0) !== 0x04034b50 &&
          bytes.readUInt32LE(0) !== 0x06054b50
        ) {
          row.status = "unsupported-container";
          row.reason = "ZIP suffix does not match ZIP local/end header";
          continue;
        }
        const temp = fs.mkdtempSync(path.join(os.tmpdir(), "bili-resource-")),
          file = path.join(temp, "nested.zip");
        try {
          fs.writeFileSync(file, bytes);
          row.status = "nested-zip-expanded";
          await archive(
            file,
            [...chain, { member: entry.name, sha256: hash }],
            depth + 1,
          );
        } catch (error) {
          row.status = "nested-zip-error";
          row.reason = error.message;
        } finally {
          fs.rmSync(temp, { recursive: true, force: true });
        }
        continue;
      }
      let source;
      try {
        source = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
      } catch {
        row.status = "unsupported-encoding";
        row.reason = "Resource is not valid UTF-8";
        continue;
      }
      try {
        if (/\.json$/i.test(entry.name)) {
          add(analyzeJson(source), origin);
          row.status = "parsed-json";
        } else if (/\.html?$/i.test(entry.name)) {
          const bodies = scripts(source);
          let parsed = 0;
          for (const body of bodies) {
            add(
              analyzeJavaScript(body.text, parse, {
                sourceUtf16Offset: body.start,
                sourceByteOffset: Buffer.byteLength(
                  source.slice(0, body.start),
                  "utf8",
                ),
              }),
              origin,
            );
            parsed++;
          }
          row.status = "parsed-html-inline-scripts";
          row.inline_script_count = parsed;
          row.reason =
            "Quote-aware script-tag extraction; full HTML DOM semantics are not evaluated";
        } else {
          add(analyzeJavaScript(source, parse), origin);
          row.status = "parsed-javascript";
        }
      } catch (error) {
        row.status = "parse-error";
        row.reason =
          error.name +
          ": " +
          (error.reasonCode ?? "invalid or unsupported syntax");
      }
    }
  } finally {
    zip.close();
  }
}
for (const input of inputs) {
  const filename = path.basename(input);
  const { createHash } = await import("node:crypto");
  const hash = createHash("sha256");
  for await (const chunk of fs.createReadStream(input)) hash.update(chunk);
  const sha256 = hash.digest("hex");
  archives.push({ filename, sha256 });
  await archive(input, [{ archive: filename, sha256 }], 0);
}
const result = {
  schema_version: 1,
  scope:
    "Syntactic request declarations and wrapper candidates from bundled JavaScript/JSON/HTML and nested ZIP resources",
  parser: { name: "@babel/parser", version: "8.0.4" },
  limitations: [
    "No JavaScript is executed; client/wrapper names may refer to unrelated or overridden objects.",
    "Computed routes and bases remain unresolved. No cross-module data-flow, import binding, dynamic downloads or live requests are inferred.",
    "Relative routes in unresolved .get/.post wrappers are candidates, not validated interfaces.",
    "Request-config object and call observations can refer to the same request; do not add raw observation counts as unique interface counts.",
    "HTML processing is quote-aware inline-script extraction, not a complete HTML parser.",
  ],
  archives,
  declarations,
  candidates,
  configuration,
};
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, JSON.stringify(result, null, 2) + "\n");
fs.writeFileSync(
  coverageOutput,
  JSON.stringify(
    {
      schema_version: 1,
      limits,
      selected_members: selectedMembers,
      selected_bytes: selectedBytes,
      counts: {
        declarations: declarations.length,
        candidates: candidates.length,
        configuration: configuration.length,
        nested_archives: coverage.filter(
          (x) => x.status === "nested-zip-expanded",
        ).length,
        by_status: Object.fromEntries(
          [...new Set(coverage.map((x) => x.status))].map((status) => [
            status,
            coverage.filter((x) => x.status === status).length,
          ]),
        ),
      },
      members: coverage,
    },
    null,
    2,
  ) + "\n",
);
console.log(
  JSON.stringify({
    declarations: declarations.length,
    candidates: candidates.length,
    configurations: configuration.length,
    resources: coverage.length,
  }),
);
