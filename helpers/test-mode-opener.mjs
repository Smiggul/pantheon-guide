// Tests for the per-mode opener (corePathAhead): node helpers/test-mode-opener.mjs
// A role may carry `corePathAhead`, the build when the app's switch says Ahead;
// `corePath` stays the Even/Behind build (the app's default mode).
import assert from "node:assert/strict";
import { corePathFor } from "../src/data/corePath.js";
import { gamePlan } from "../src/data/gamePlan.js";
import { buildExport } from "../src/data/lcuExport.js";
import { CHAMPS } from "../src/data/champs/index.js";

let n = 0;
const t = (name, fn) => { fn(); n++; console.log("ok", name); };
const first = (path) => path.split("›")[0].trim();

const role = { corePath: "Eclipse › Black Cleaver", corePathAhead: "Voltaic Cyclosword › Bastionbreaker" };

t("ahead picks corePathAhead, behind picks corePath", () => {
  assert.equal(corePathFor(role, "ahead"), role.corePathAhead);
  assert.equal(corePathFor(role, "behind"), role.corePath);
});

t("a role without corePathAhead uses corePath in both modes", () => {
  assert.equal(corePathFor({ corePath: "Eclipse" }, "ahead"), "Eclipse");
  assert.equal(corePathFor(null, "ahead"), "");
});

const panth = CHAMPS.find((c) => c.dd === "Pantheon");
const top = panth.roles.Top;

t("Pantheon Top opens Voltaic ahead and Eclipse behind", () => {
  assert.equal(first(corePathFor(top, "ahead")), "Voltaic Cyclosword");
  assert.equal(first(corePathFor(top, "behind")), "Eclipse");
});

t("the game plan's first item follows the mode", () => {
  const foe = CHAMPS.find((c) => c.dd === "Darius");
  const plan = (mode) => gamePlan({ champ: panth, roleName: "Top", roleData: top, mode, foe });
  const firstOf = (p) => p.phases.flatMap((ph) => ph.items).find((e) => e.tag === "core").name;
  assert.equal(firstOf(plan("ahead")), "Voltaic Cyclosword");
  assert.equal(firstOf(plan("behind")), "Eclipse");
});

t("the exported item set follows the mode", () => {
  const blockNames = (mode) => buildExport(panth, "Top", "JUGGERNAUT", null, null, null, null, { mode })
    .itemSet.blocks.flatMap((b) => b.items.map((i) => i.id));
  const ids = (mode) => new Set(blockNames(mode));
  // 6699 Voltaic Cyclosword, 6692 Eclipse
  assert.ok(ids("ahead").has("6699"));
  assert.ok(ids("behind").has("6692"));
  assert.notDeepEqual([...ids("ahead")], [...ids("behind")]);
});

t("a selected alternate is never replaced by the role's ahead path", () => {
  // The alternate has no corePathAhead, so both modes export its own core path.
  const alt = panth.altBuilds.Top[0];
  const plan = (mode) => buildExport(panth, "Top", "JUGGERNAUT", alt, null, null, null, { mode })
    .notes.plan.phases.flatMap((ph) => ph.items).filter((e) => e.tag === "core").map((e) => e.name).sort();
  assert.deepEqual(plan("ahead"), plan("behind"));
  assert.ok(!plan("ahead").includes("Bastionbreaker"));
});

console.log(`${n} passed`);
