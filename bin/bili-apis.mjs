#!/usr/bin/env node
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
  const [command = "stats", ...args] = process.argv.slice(2);
  if (command === "--help" || command === "help")
    console.log(
      "bili-apis stats\nbili-apis list [--kind KIND] [--query TEXT] [--offset N] [--limit N]\nbili-apis show ID\nAll output is JSON; no API requests are sent.\nKinds: " + CATALOG_KINDS.join("|"),
    );
  else {
    const entries = loadCatalog(root);
    let result;
    if (command === "stats") result = summarize(entries);
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
          !["--kind", "--query", "--offset", "--limit"].includes(flag) ||
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
