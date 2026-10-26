// Tests for src/data/commandSearch.js. Run: node .scratch/command_tests.mjs
import { commandEntries, searchCommands } from "../src/data/commandSearch.js";
import { CHAMPS } from "../src/data/champs/index.js";

let pass = 0, fail = 0;
const eq = (name, got, want) => {
  if (JSON.stringify(got) === JSON.stringify(want)) { pass++; console.log(`  ok  ${name}`); }
  else { fail++; console.log(`  FAIL ${name}: got ${JSON.stringify(got)}, want ${JSON.stringify(want)}`); }
};

const pages = [
  { id: "tiers", label: "Tier list", words: "tiers meta" },
  { id: "draft", label: "Draft coach", words: "champ select picks bans" },
  { id: "settings", label: "Settings", words: "options preferences" },
];
const all = commandEntries(CHAMPS, pages);
const top = (q, o) => { const r = searchCommands(all, q, o)[0]; return r && (r.kind === "page" ? r.page.id : `${r.label}|${r.lane}`); };
const lanes = (q) => [...new Set(searchCommands(all, q).filter((e) => e.kind === "champ").map((e) => e.lane))];

eq("one entry per champion lane", all.filter((e) => e.label === "Darius").map((e) => e.lane), ["Top", "Jungle"]);
eq("exact name first", top("darius"), "Darius|Top");
eq("lane word narrows", top("darius jg"), "Darius|Jungle");
eq("lane word in front", top("jungle darius"), "Darius|Jungle");
eq("prefix", top("panth"), "Pantheon|" + CHAMPS.find((c) => c.id === "pantheon").lanes[0]);
eq("lane word alone lists only that lane", lanes("mid"), ["Mid"]);
eq("apostrophe ignored", searchCommands(all, "kaisa").some((e) => e.label === "Kai'Sa") || !CHAMPS.some((c) => c.display === "Kai'Sa"), true);
eq("space ignored", top("leesin"), "Lee Sin|Jungle");
eq("second word prefix", searchCommands(all, "sin").some((e) => e.label === "Lee Sin"), true);
eq("initials", top("tf"), "Twisted Fate|Mid");
eq("initials, lane", top("mf bot"), "Miss Fortune|Bot");
eq("champion name beats a page that starts with it", top("sett"), "Sett|Top");
eq("page by name", top("tier"), "tiers");
eq("page by keyword", top("bans"), "draft");
eq("settings", top("sett").startsWith("Sett") || top("sett") === "settings", true);
eq("lane word hides pages", searchCommands(all, "top").every((e) => e.kind === "champ"), true);
eq("nonsense finds nothing", searchCommands(all, "zzqx").length, 0);
eq("empty shows pages then current champion",
  searchCommands(all, "", { current: "darius" }).map((e) => e.kind === "page" ? e.page.id : e.label),
  ["tiers", "draft", "settings", "Darius", "Darius"]);
eq("limit", searchCommands(all, "a", { limit: 5 }).length, 5);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
