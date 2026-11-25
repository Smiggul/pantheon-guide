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

const corePlan = (champ, role, alt, mode) => buildExport(champ, role, "JUGGERNAUT", alt, null, null, null, { mode })
  .notes.plan.phases.flatMap((ph) => ph.items).filter((e) => e.tag === "core").map((e) => e.name);

t("an alternate without corePathAhead is never replaced by the role's ahead path", () => {
  // Strip the alternate's own Ahead path: both modes must then export its single core path.
  const { corePathAhead: _drop, ...alt } = panth.altBuilds.Top[0];
  const plan = (mode) => corePlan(panth, "Top", alt, mode).sort();
  assert.deepEqual(plan("ahead"), plan("behind"));
  assert.ok(!plan("ahead").includes("Bastionbreaker"));
});

// Every build in the owner's pool that carries two lines opens with its own item per mode,
// in the build card's path, the game plan and the export alike.
const POOL_LINES = [
  ["Pantheon", "Top", "Lethality Carry", "Youmuu's Ghostblade", "Youmuu's Ghostblade", "Voltaic Cyclosword", "Edge of Night"],
  ["Pantheon", "Top", "PTA Bruiser", "Voltaic Cyclosword", "Eclipse"],
  ["Pantheon", "Top", "Meme Build", "Heartsteel", "Heartsteel", "Overlord's Bloodmail", "Iceborn Gauntlet"],
  ["Pantheon", "Top", "Cleaver Bruiser", "Voltaic Cyclosword", "Black Cleaver"],
  ["Pantheon", "Jungle", null, "Sundered Sky", "Eclipse"],
  ["Pantheon", "Jungle", "Cleaver Teamfight", "Youmuu's Ghostblade", "Black Cleaver"],
  ["Volibear", "Top", null, "Statikk Shiv", "Dusk and Dawn"],
  ["Volibear", "Jungle", null, "Statikk Shiv", "Dusk and Dawn"],
  ["Shen", "Top", null, "Heartsteel", "Titanic Hydra"],
  ["DrMundo", "Top", null, "Heartsteel", "Warmog's Armor"],
  ["Yorick", "Top", null, "Trinity Force", "Eclipse"],
  ["Yorick", "Top", "Black Cleaver rush", "Black Cleaver", "Black Cleaver", "Trinity Force", "Sterak's Gage"],
  ["Trundle", "Top", null, "Trinity Force", "Ravenous Hydra"],
];
const BOOTS = /Boots|Steelcaps|Treads|Greaves/;
for (const [dd, role, label, aheadFirst, behindFirst, aheadOnly, behindOnly] of POOL_LINES) {
  t(`${dd} ${role} ${label || "main"}: ahead opens ${aheadFirst}, behind ${behindFirst}`, () => {
    const champ = CHAMPS.find((c) => c.dd === dd);
    const alt = label ? champ.altBuilds[role].find((a) => a.label === label) : null;
    const build = alt || champ.roles[role];
    assert.ok(build, `${dd} ${role} ${label} exists`);
    const firstItem = (mode) => split(corePathFor(build, mode)).find((n) => !BOOTS.test(n));
    assert.equal(firstItem("ahead"), aheadFirst);
    assert.equal(firstItem("behind"), behindFirst);
    const plan = (mode) => corePlan(champ, role, alt, mode);
    assert.equal(plan("ahead").find((n) => !BOOTS.test(n)), aheadFirst);
    assert.equal(plan("behind").find((n) => !BOOTS.test(n)), behindFirst);
    if (aheadOnly) {   // same opener: the line differs at the next item
      assert.ok(plan("ahead").includes(aheadOnly) && !plan("behind").includes(aheadOnly));
      assert.ok(plan("behind").includes(behindOnly) && !plan("ahead").includes(behindOnly));
    }
  });
}
function split(p) { return p.split("›").map((s) => s.trim()).filter(Boolean); }

console.log(`${n} passed`);
