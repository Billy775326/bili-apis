#!/usr/bin/env node
import { ANDROID_EDITIONS, resolveAndroidEdition } from '../src/android-editions.mjs';
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
  const selectors = {};
  while (['--edition', '--package', '--version'].includes(input[0])) {
    const flag = input.shift(), value = input.shift();
    const key = {'--edition':'edition','--package':'packageName','--version':'version'}[flag];
    if (key in selectors || !value || value.startsWith('--')) throw Error('Duplicate or incomplete selector: ' + flag);
    selectors[key] = value;
  }
  const baseline = resolveAndroidEdition(selectors);
  const edition = baseline.edition;
  const [command = "stats", ...args] = input;
  if (["stats", "categories", "editions"].includes(command) && args.length)
    throw Error(
      command + " takes no arguments; --edition, --package and --version must precede the command",
    );
  if (command === "--help" || command === "help")
    console.log(
      "bili-apis editions\nbili-apis [--edition play|official] [--package NAME] [--version VERSION] stats\nbili-apis categories\nbili-apis list [--category CATEGORY] [--kind KIND] [--query TEXT] [--offset N] [--limit N]\nbili-apis show ID\nSelectors must precede the command and must describe one pinned package/channel/version. Default edition: play. editions lists the available baselines.\nAll output is JSON; no API requests are sent.\nKinds: " +
        CATALOG_KINDS.join("|"),
    );
  else if (command === 'editions') console.log(JSON.stringify(ANDROID_EDITIONS, null, 2));
  else {
    const entries = loadCatalog(root, { edition });
    let result;
    if (command === "stats") result = { baseline, ...summarize(entries) };
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
      result = { baseline, ...select(entries, options) };
    } else throw Error("Unknown command: " + command);
    console.log(JSON.stringify(result, null, 2));
  }
} catch (e) {
  console.error(e.message);
  process.exitCode = 1;
}
