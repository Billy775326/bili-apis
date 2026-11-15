#!/usr/bin/env node
import { FUNCTION_CATEGORIES } from "../src/functions.mjs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  loadCatalog,
  select,
  summarize,
  CATALOG_KINDS,
} from "../src/catalog.mjs";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
try {
  const input = process.argv.slice(2);
  let edition = "play";
  if (input[0] === "--edition") {
    input.shift();
    edition = input.shift();
    if (!["play", "official"].includes(edition))
      throw Error("edition must be play or official");
  }
  const [command = "stats", ...args] = input;
  if (["stats", "categories"].includes(command) && args.length)
    throw Error(
      command + " takes no arguments; --edition must precede the command",
    );
  if (command === "--help" || command === "help")
    console.log(
      "bili-apis stats\nbili-apis categories\nbili-apis list [--category CATEGORY] [--kind KIND] [--query TEXT] [--offset N] [--limit N]\nbili-apis show ID\nPrefix any command with --edition official to inspect the official Android catalog. Default edition: play.\nAll output is JSON; no API requests are sent.\nKinds: " +
        CATALOG_KINDS.join("|"),
    );
  else {
    const entries = loadCatalog(root, { edition });
    let result;
    if (command === "stats") result = summarize(entries);
    else if (command === "categories")
      result = FUNCTION_CATEGORIES.map((c) => ({
        ...c,
        total: select(entries, { category: c.id, limit: 1 }).total,
      }));
    else if (command === "show") {
      if (args.length !== 1) throw Error("show requires one ID");
      result = entries.filter((e) => e.id === args[0]);
      if (!result.length) throw Error("No matching ID");
    } else if (command === "list") {
      const options = {};
      for (let i = 0; i < args.length; i += 2) {
        const flag = args[i],
          value = args[i + 1];
        if (
          !["--kind", "--category", "--query", "--offset", "--limit"].includes(
            flag,
          ) ||
          value === undefined
        )
          throw Error("Unknown or incomplete option: " + flag);
        const key = flag.slice(2);
        if (key in options) throw Error("Duplicate option: " + flag);
        options[key] = ["offset", "limit"].includes(key)
          ? Number(value)
          : value;
      }
      result = select(entries, options);
    } else throw Error("Unknown command: " + command);
    console.log(JSON.stringify(result, null, 2));
  }
} catch (e) {
  console.error(e.message);
  process.exitCode = 1;
}
