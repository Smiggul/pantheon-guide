// Tests for poolPick (src/data/poolPick.js): node helpers/test-pool-pick.mjs
import assert from "node:assert/strict";
import { poolPick } from "../src/data/poolPick.js";

let n = 0;
const t = (name, fn) => { fn(); n++; console.log("ok", name); };
const dds = (rows) => rows.map((r) => r.dd);

// [win rate Iron+Bronze, games, win rate Emerald+, games]
const DATA = { Top: {
  // The 24 Nov 2026 game: Pantheon has 121 low-elo games, the others enough.
  Singed: { Pantheon: [38, 121, 48.57, 385], Volibear: [41.3, 242, 51.8, 444], Mordekaiser: [44.9, 503, 50.19, 532] },
  // Everyone has enough low-elo games, and the gap is clear.
  Clear: { Pantheon: [55, 3000, 50, 3000], Volibear: [47, 3000, 52, 3000] },
  // Nobody has enough low-elo games; Emerald+ has.
  HighOnly: { Pantheon: [60, 40, 49, 900], Volibear: [40, 60, 53, 900] },
  // Not enough games anywhere.
  Thin: { Pantheon: [60, 40, 49, 90], Volibear: [40, 60, 53, 80] },
} };

t("ranks the low bracket among champions with enough games, not Emerald+", () => {
  const p = poolPick("Top", "Singed", new Set(), DATA);
  assert.equal(p.bracket, "Iron–Bronze");
  assert.equal(p.key, "lwr");
  assert.deepEqual(dds(p.ranked), ["Mordekaiser", "Volibear"]);
  assert.deepEqual(dds(p.thin), ["Pantheon"]);
  assert.equal(p.fewGames, false);
});

t("a gap inside 2 standard errors is close", () => {
  // 44.9% of 503 vs 41.3% of 242: 3.6 points, 2 SE is about 7.7.
  assert.equal(poolPick("Top", "Singed", new Set(), DATA).close, true);
});

t("says when every option loses", () => {
  assert.equal(poolPick("Top", "Singed", new Set(), DATA).allLose, true);
  assert.equal(poolPick("Top", "Clear", new Set(), DATA).allLose, false);
});

t("a clear gap on big samples is not close", () => {
  const p = poolPick("Top", "Clear", new Set(), DATA);
  assert.deepEqual(dds(p.ranked), ["Pantheon", "Volibear"]);
  assert.equal(p.close, false);
  assert.deepEqual(p.thin, []);
});

t("falls back to Emerald+ only when no one has enough low-elo games, and flags it", () => {
  const p = poolPick("Top", "HighOnly", new Set(), DATA);
  assert.equal(p.bracket, "Emerald+");
  assert.deepEqual(dds(p.ranked), ["Volibear", "Pantheon"]);
  assert.equal(p.fewGames, true);
});

t("with too few games anywhere it still ranks, flagged", () => {
  const p = poolPick("Top", "Thin", new Set(), DATA);
  assert.equal(p.ranked.length, 2);
  assert.equal(p.bracket, "Iron–Bronze");
  assert.deepEqual(dds(p.ranked), ["Pantheon", "Volibear"]);
  assert.equal(p.fewGames, true);
});

t("under FLOOR games a champion is neither ranked nor listed", () => {
  const d = { Top: { X: { Pantheon: [100, 2, 100, 3], Volibear: [44, 500, 50, 500] } } };
  const p = poolPick("Top", "X", new Set(), d);
  assert.deepEqual(dds(p.ranked), ["Volibear"]);
  assert.deepEqual(p.thin, []);
});

t("nothing shown when no one reaches FLOOR games", () => {
  const d = { Top: { X: { Pantheon: [100, 2, 100, 3], Volibear: [0, 9, 50, 20] } } };
  assert.equal(poolPick("Top", "X", new Set(), d), null);
});

t("excluded champions drop out; one left is no comparison", () => {
  const p = poolPick("Top", "Singed", new Set(["Mordekaiser", "Pantheon"]), DATA);
  assert.deepEqual(dds(p.ranked), ["Volibear"]);
  assert.equal(p.close, false);
});

t("unknown opponent gives null", () => {
  assert.equal(poolPick("Top", "Nobody", new Set(), DATA), null);
});

t("reads the bundled data by default", () => {
  const p = poolPick("Top", "Singed");
  assert.ok(p && p.ranked.length >= 1);
});

console.log(`${n} passed`);
