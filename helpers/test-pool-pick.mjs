// Tests for poolPick (src/data/poolPick.js): node helpers/test-pool-pick.mjs
import assert from "node:assert/strict";
import { poolPick, poolLead } from "../src/data/poolPick.js";

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
  const d = { Top: { X: { Shen: [100, 2, 100, 3], Volibear: [44, 500, 50, 500] } } };
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

// The 25 Nov 2026 game: into Illaoi with Mordekaiser banned, 0.23.2.3 said "Play Volibear" at 42%.
const ILLAOI = { Top: { Illaoi: { Volibear: [41.5, 1213, 46.75, 815], Pantheon: [38.2, 416, 54.75, 537], Shen: [42.3, 326, 50.22, 689] } } };

t("when every option loses, no pool champion is the pick", () => {
  const p = poolPick("Top", "Illaoi", new Set(), ILLAOI);
  assert.equal(p.allLose, true);
  assert.deepEqual(poolLead(p), []);
});

t("a winning pick leads alone, or with the runner-up when close", () => {
  assert.deepEqual(poolLead(poolPick("Top", "Clear", new Set(), DATA)), ["Pantheon"]);
  const close = { Top: { X: { Pantheon: [52, 3000, 50, 3000], Volibear: [51.5, 3000, 50, 3000] } } };
  assert.deepEqual(poolLead(poolPick("Top", "X", new Set(), close)), ["Pantheon", "Volibear"]);
});

// The comfort pick (2026-11-25): Pantheon, the owner's most-mastered champion, is always listed.
t("the comfort pick is listed from Emerald+ when his bracket has too few games", () => {
  const d = { Top: { Ryze: { Pantheon: [46.4, 28, 52.25, 111], Volibear: [44, 500, 50, 500] } } };
  const pan = poolPick("Top", "Ryze", new Set(), d).thin.find((r) => r.dd === "Pantheon");
  assert.ok(pan);
  assert.equal(pan.rateKey, "hwr");
  assert.equal(pan.rate, 52.25);
});

t("the comfort pick with too few games anywhere is listed without a rate", () => {
  const d = { Top: { X: { Pantheon: [100, 2, 100, 3], Volibear: [44, 500, 50, 500] } } };
  const pan = poolPick("Top", "X", new Set(), d).thin.find((r) => r.dd === "Pantheon");
  assert.ok(pan);
  assert.equal(pan.rate, null);
});

t("a banned or taken comfort pick stays out", () => {
  const d = { Top: { Ryze: { Pantheon: [46.4, 28, 52.25, 111], Volibear: [44, 500, 50, 500] } } };
  const p = poolPick("Top", "Ryze", new Set(["Pantheon"]), d);
  assert.ok(!p.thin.concat(p.ranked).some((r) => r.dd === "Pantheon"));
});

t("reads the bundled data by default", () => {
  const p = poolPick("Top", "Singed");
  assert.ok(p && p.ranked.length >= 1);
});

console.log(`${n} passed`);
