// ─────────────────────────────────────────────────────────────────────────────
//  gamePlan.js — ONE item recommendation, ordered by game phase.
//
//  Two systems used to advise side by side without reconciling: the lane advice
//  (matchupAdjust.js, against the lane opponent) and the team readout (the
//  Enemy team panel's "Consider" chips, against the whole enemy team). With
//  Pantheon into Mordekaiser and an AD-heavy team, lane said Maw of Malmortius
//  and team said Death's Dance, and nothing said which comes first. This merges
//  them (the owner's plan, 2026-10-20):
//    Lane       item 1 and the boots, plus the first defensive answer when behind
//    Mid game   the next two buys
//    Late game  everything after; the team's answers sit here
//  Lane answers come first, team answers form the mid and late layer, and a
//  disagreement is said in a few words ("Maw for lane, Death's Dance for
//  teamfights").
//
//  Ahead vs Even/Behind (the app's mode switch): behind pulls defensive answers
//  forward, one right after item 1 and then every other buy; ahead keeps the
//  authored damage order and puts the defensive answers last. With no opponent
//  this is exactly the old App.jsx core reorder (orderCore, now here).
//
//  Boots: WHICH pair follows the lane opponent's damage type (Steelcaps <->
//  Mercury's; lolalytics 30-day matchup pages: 62-83% of top laners take
//  Steelcaps into Darius and Garen, and 55-74% take Mercury's into Teemo). WHEN follows the champion-role's own habit, from
//  bootsTiming.js: finished before item 1 when most games do so (Garen 61%,
//  Darius 51%, Yone 83%; 14 roles in all), otherwise after item 1. Tier-1 Boots
//  ride in the first back only where most games buy them by 10 minutes. Level-1
//  boots is never recommended: at most 0.6% of games in any role start with
//  them. Matchups barely move the timing (a few points of early boots), so no
//  matchup changes it. See CLAUDE.md "Game plan" for the numbers.
//
//  Pure logic, no React. Both the UI (the plan strip in the live bar) and
//  lcuExport.buildItemSet call it, so the client's item set follows the same
//  order the player sees.
// ─────────────────────────────────────────────────────────────────────────────
import { matchupAdvice, foeTraits, isRanged, ADD, MR_ITEMS, ARMOR_SET, ANTIHEAL_ITEMS, LETHALITY, HP_ITEMS, ARMOR_ITEMS } from "./matchupAdjust.js";
import { myProfileOf, teamThreats } from "./enemyTeam.js";
import { classOf } from "./champClasses.js";
import { CHAMPS } from "./champs/index.js";

// ── Stackers and crit carries in the enemy team (2026-11-23) ────────────────
// Read from each enemy's OWN main build in this app's data (audit-builds keeps it
// current), the way matchupAdjust reads the lane opponent: two or more items of a
// kind is a stacker. Each answer names the champions in its reason, and the
// reason is shown as text (not a hover) under the item.
const CHAMP_BY_DD = Object.fromEntries(CHAMPS.map((c) => [c.dd, c]));
const MR_STACK_ITEMS = new Set(["Force of Nature", "Kaenic Rookern", "Spirit Visage", "Abyssal Mask", "Maw of Malmortius",
  "Wit's End", "Jak'Sho, The Protean", "Banshee's Veil", "Hollow Radiance", "Mercurial Scimitar", "Verdant Barrier"]);
const CRIT_ITEMS = new Set(["Infinity Edge", "The Collector", "Navori Flickerblade", "Yun Tal Wildarrows", "Rapid Firecannon",
  "Phantom Dancer", "Essence Reaver", "Hexoptics C44", "Immortal Shieldbow", "Stormrazor", "Lord Dominik's Regards", "Bloodthirster"]);
// Already answering stacked health/armor: percent penetration, armor shred or current-health damage.
const PEN_ITEMS = new Set(["Lord Dominik's Regards", "Serylda's Grudge", "Black Cleaver", "Mortal Reminder",
  "Blade of The Ruined King", "Terminus"]);
const MAGIC_PEN_ITEMS = new Set(["Void Staff", "Cryptbloom"]);
const BRUISER_CLASSES = new Set(["JUGGERNAUT", "DIVER"]);
import { BOOTS_TIMING } from "./bootsTiming.js";

const BOOTS = ["Plated Steelcaps", "Mercury's Treads", "Sorcerer's Shoes", "Berserker's Greaves",
  "Ionian Boots of Lucidity", "Boots of Swiftness", "Gluttonous Greaves", "Symbiotic Soles"];
const BOOTS_SET = new Set(BOOTS.map((b) => b.toLowerCase()));
export const isBoots = (n) => BOOTS_SET.has(String(n || "").toLowerCase());

// Items that buy time rather than damage. Moved here from App.jsx so the build
// card's core order and the plan cannot disagree.
export const DEFENSIVE_ITEMS = new Set(["sterak's gage", "spirit visage", "death's dance", "thornmail",
  "randuin's omen", "frozen heart", "zhonya's hourglass", "kaenic rookern", "force of nature",
  "warmog's armor", "jak'sho, the protean", "gargoyle stoneplate", "guardian angel",
  "maw of malmortius", "banshee's veil", "unending despair", "iceborn gauntlet", "sunfire aegis",
  "abyssal mask", "mercurial scimitar", "hollow radiance", "dead man's plate", "edge of night"]);
const isDef = (n) => DEFENSIVE_ITEMS.has(String(n || "").toLowerCase());

// Even/Behind ("Survive & Scale") moves the first defensive core item up to
// item 2; Ahead keeps the authored, damage-forward order. Boots are not moved.
export function orderCore(items, mode) {
  if (mode !== "behind" || items.length < 3) return items;
  const di = items.findIndex((n, i) => i > 0 && isDef(n) && !isBoots(n));
  if (di <= 1) return items;
  const out = [...items]; const [d] = out.splice(di, 1); out.splice(1, 0, d); return out;
}

// ── Boots timing (bootsTiming.js) ───────────────────────────────────────────
// first: finished boots before item 1 in most games. t1: tier-1 Boots on the
// first back (bought by 10 minutes in most games). none: the role rarely buys
// boots at all (Yuumi). Support data counts the quest item as item 1, so a
// support never reads as boots-first.
const MIN_SETS = 1000;
export function bootsTimingOf(dd, roleName) {
  const t = BOOTS_TIMING[`${dd}|${roleName}`];
  if (!t) return { first: false, t1: true, none: false, data: null };
  return {
    first: roleName !== "Support" && t.sets >= MIN_SETS && t.first >= 50,
    t1: t.early >= 50,
    none: t.games > 0 && t.sets / t.games < 0.2,
    data: t,
  };
}

// Put the boots where this champion-role finishes them: before item 1 when most
// games do, otherwise right after it. Used for the build card's core arrow.
export function placeBoots(items, timing) {
  const b = items.find(isBoots);
  if (!b) return items;
  const rest = items.filter((n) => n !== b);
  rest.splice(timing?.first ? 0 : Math.min(1, rest.length), 0, b);
  return rest;
}

const split = (p) => String(p || "").split("›").map((s) => s.trim()).filter(Boolean);
const DEFAULT_BOOTS = { AP: "Sorcerer's Shoes", AD: "Plated Steelcaps", AD_RANGED: "Berserker's Greaves", TANK: "Plated Steelcaps" };
const ANTIDIVE = { AD: "Guardian Angel", AD_RANGED: "Guardian Angel", AP: "Zhonya's Hourglass", TANK: "Randuin's Omen" };

// Short names for the one-line conflict note.
const SHORT = {
  "Mercury's Treads": "Mercury's", "Plated Steelcaps": "Steelcaps", "Maw of Malmortius": "Maw",
  "Randuin's Omen": "Randuin's", "Banshee's Veil": "Banshee's", "Zhonya's Hourglass": "Zhonya's",
  "Mercurial Scimitar": "Mercurial", "Force of Nature": "Force of Nature", "Kaenic Rookern": "Kaenic Rookern",
  "Guardian Angel": "Guardian Angel", "Death's Dance": "Death's Dance",
};
const short = (n) => SHORT[n] || n;

// ── The plan ────────────────────────────────────────────────────────────────
//  champ      { dd, display }            roleName  "Top" | "Mid" | ...
//  roleData   the role block, any selected alternate already merged in
//  enemyClass the class page in use (may be null)
//  mode       "ahead" | "behind" (the app's Ahead / Even-Behind switch)
//  foe        the lane opponent's champion object, or null
//  enemies    DDragon ids of the enemy team's locked picks (may include foe)
//  page, curated  the rune page in use and whether a hand-written matchup page
//             applied (passed through to matchupAdvice for rune swaps)
//
//  Returns { phases: [{key, title, items:[{name, tag, from?, why?}]}], boots,
//  conflicts: [string], extra: [names past the plan], lane: matchupAdvice result
//  (chips, rune swaps, swapped page) or null, team: threat counts or null }.
//  tag: "core" (authored build), "boots", "lane" (answer to the opponent),
//  "team" (answer to the enemy team); boots changed for a threat carry `by`.
export function gamePlan({ champ, roleName, roleData, enemyClass = null, mode = "behind",
  foe = null, enemies = [], page = null, curated = false }) {
  if (!champ || !roleData) return null;
  const base = myProfileOf(champ.dd);
  const prof = base === "AD" && isRanged(champ.dd) ? "AD_RANGED" : base;
  const timing = bootsTimingOf(champ.dd, roleName);

  const authored = split(roleData.corePath);
  const coreBoots = authored.find(isBoots) || null;
  const core = authored.filter((n) => !isBoots(n));
  const baseBoots = timing.none && !coreBoots ? null
    : coreBoots || timing.data?.pair || DEFAULT_BOOTS[prof];

  // 1) Lane. The boots first: magic damage turns Steelcaps into Mercury's,
  // physical damage the reverse (kept against heavy CC, where the tenacity
  // matters). Decided here rather than by matchupAdvice, whose swap is skipped
  // when the class list happens to name the other pair already.
  const hasFoe = !!foe && foe.dd !== champ.dd;
  const ft = hasFoe ? foeTraits(foe, roleName) : null;
  let boots = baseBoots ? { name: baseBoots, tag: "boots" } : null;
  // `by` says which threat changed the pair: "lane" here, "team" below.
  if (boots && ft?.damage === "AP" && boots.name === "Plated Steelcaps")
    boots = { name: "Mercury's Treads", tag: "boots", by: "lane", from: boots.name, why: "magic resist: they deal magic damage" };
  else if (boots && ft?.damage === "AD" && boots.name === "Mercury's Treads" && !ft.cc)
    boots = { name: "Plated Steelcaps", tag: "boots", by: "lane", from: boots.name, why: "armor: they deal physical damage" };
  // matchupAdvice sees the chosen boots, so a resist they already give counts.
  const withBoots = boots ? [core[0], boots.name, ...core.slice(1)].filter(Boolean) : core;
  const lane = hasFoe
    ? matchupAdvice({ champ, roleName, roleData: { ...roleData, corePath: withBoots.join(" › ") },
        enemyClass, page, foe, curated })
    : null;

  const entries = core.map((name) => ({ name, tag: "core" }));
  const laneAdds = [];
  for (const it of lane?.items || []) {
    if (isBoots(it.to) || isBoots(it.from)) continue;          // the boots are decided above
    const at = it.from ? entries.findIndex((e) => e.name === it.from) : -1;
    if (at >= 0) entries[at] = { name: it.to, tag: "lane", from: it.from, why: it.why };
    else laneAdds.push({ name: it.to, tag: "lane", from: it.from, why: it.why });
  }

  // 2) Team: answers to the whole enemy team (the lane opponent included, they
  // fight too). Only what the plan does not already cover is added.
  const dds = [...new Set([...(enemies || []), foe?.dd].filter(Boolean))].filter((d) => d !== champ.dd);
  const team = dds.length >= 2 ? teamThreats(dds) : null;
  const listed = () => [...entries, ...laneAdds].map((e) => e.name);
  const teamAdds = [];
  const covers = (set) => listed().some((n) => set.has(n)) || teamAdds.some((e) => set.has(e.name));
  const addTeam = (name, why) => {
    if (name && !listed().includes(name) && !teamAdds.some((e) => e.name === name)) teamAdds.push({ name, tag: "team", why });
  };
  let teamResist = null;
  if (team) {
    if (team.heals >= 1 && !covers(ANTIHEAL_ITEMS)) addTeam(ADD.antiheal[prof], "Grievous Wounds cuts their team's healing");
    const apLean = team.ap >= 2 && team.ap >= team.ad;
    const adLean = team.ad >= 2 && team.ad > team.ap;
    if (apLean) { teamResist = "mr"; if (!covers(MR_ITEMS)) addTeam(ADD.mr[prof], "magic resist against their casters"); }
    else if (adLean) { teamResist = "armor"; if (!covers(ARMOR_SET)) addTeam(ADD.armor[prof], "armor against their physical damage"); }
    if (team.shields >= 1 && prof.startsWith("AD") && listed().some((n) => LETHALITY.has(n)))
      addTeam("Serpent's Fang", "cuts the shields they lean on");
    if (team.dive >= 1) addTeam(ANTIDIVE[prof], team.dive >= 2 ? "survive their dive" : "survive their assassin");

    // Stackers and crit carries, by name. Item passives as Riot words them (16.23):
    // LDR Giant Slayer + 35% armor pen, Ruined King Mist's Edge (current health),
    // Serylda's 35% armor pen, Black Cleaver Carve, Liandry's max-health burn,
    // Void Staff 40% magic pen, Randuin's Resilience (30% less crit damage).
    const foes = dds.map((d) => CHAMP_BY_DD[d]).filter(Boolean).map((c) => ({ c, b: foeTraits(c, null).build }));
    const count = (b, set) => b.filter((n) => set.has(n) && n !== "Plated Steelcaps").length;
    const hpS = foes.filter((f) => count(f.b, HP_ITEMS) >= 2).map((f) => f.c);
    const armS = foes.filter((f) => count(f.b, ARMOR_ITEMS) >= 2).map((f) => f.c);
    const mrS = foes.filter((f) => count(f.b, MR_STACK_ITEMS) >= 2).map((f) => f.c);
    const critS = foes.filter((f) => count(f.b, CRIT_ITEMS) >= 2).map((f) => f.c);
    const names = (list) => list.slice(0, 2).map((c) => c.display).join(" and ");
    const lethal = listed().some((n) => LETHALITY.has(n));
    // The build may already hold the answer (Jinx builds Lord Dominik's anyway): then the
    // reason goes on that item instead, so the player still sees why it matters here.
    const noteOn = (set, why) => {
      const e = [...entries, ...laneAdds].find((x) => set.has(x.name));
      if (e && !e.why) { e.why = why; e.teamNote = true; }
    };
    // Every stacker is named (up to two), with what the team stacks between them.
    const who = { list: [...new Set([...hpS, ...armS])],
      what: hpS.length && armS.length ? "health and armor" : hpS.length ? "health" : "armor" };
    const PEN_WHY = {
      "Lord Dominik's Regards": `Giant Slayer and 35% armor pen into ${names(who.list)}'s ${who.what} stacking`,
      "Serylda's Grudge": `35% armor pen into ${names(who.list)}'s ${who.what} stacking`,
      "Black Cleaver": `Carve shreds ${names(who.list)}'s armor`,
      "Blade of The Ruined King": `Mist's Edge hits for a share of current health: ${names(who.list)} stacks ${who.what}`,
      "Mortal Reminder": `armor pen into ${names(who.list)}'s ${who.what} stacking`,
      "Terminus": `armor pen on its dark attacks into ${names(who.list)}'s ${who.what} stacking`,
    };
    if ((hpS.length || armS.length) && covers(PEN_ITEMS)) {
      const e = [...entries, ...laneAdds].find((x) => PEN_WHY[x.name]);
      if (e) noteOn(new Set([e.name]), PEN_WHY[e.name]);
    }
    if (prof === "AP" && mrS.length && covers(MAGIC_PEN_ITEMS))
      noteOn(MAGIC_PEN_ITEMS, `magic pen into ${names(mrS)}'s magic resist stacking`);
    if ((hpS.length || armS.length) && !covers(PEN_ITEMS)) {
      if (prof === "AD_RANGED") {
        addTeam("Lord Dominik's Regards", PEN_WHY["Lord Dominik's Regards"]);
      } else if (prof === "AD" && lethal) {
        addTeam("Serylda's Grudge", PEN_WHY["Serylda's Grudge"]);
      } else if (prof === "AD" && hpS.length) {
        addTeam("Blade of The Ruined King", PEN_WHY["Blade of The Ruined King"]);
      } else if (prof === "AD") {
        addTeam("Black Cleaver", PEN_WHY["Black Cleaver"]);
      } else if (prof === "AP" && hpS.length) {
        addTeam("Liandry's Torment", `Torment burns max health: ${names(hpS)} stacks health`);
      }
    }
    if (prof === "AP" && mrS.length && !covers(MAGIC_PEN_ITEMS))
      addTeam("Void Staff", `40% magic pen into ${names(mrS)}'s magic resist stacking`);
    if (critS.length && (prof === "TANK" || (prof === "AD" && BRUISER_CLASSES.has(classOf(champ.dd))))
      && !covers(new Set(["Randuin's Omen"])))
      addTeam("Randuin's Omen", `Resilience: 30% less damage from ${names(critS)}'s critical strikes`);
    // No lane opponent yet: the team's damage picks the boots instead.
    if (!lane && boots && (boots.name === "Plated Steelcaps" || boots.name === "Mercury's Treads")) {
      const want = apLean || (team.cc >= 2 && !adLean) ? "Mercury's Treads" : adLean ? "Plated Steelcaps" : null;
      if (want && want !== boots.name) boots = { name: want, tag: "boots", by: "team", from: boots.name,
        why: want === "Mercury's Treads" ? "magic resist and tenacity against their team" : "armor against their team" };
    }
  }

  // 3) Conflict: the lane opponent and the team want different resists.
  const conflicts = [];
  let conflictPair = [];
  const laneResist = lane?.traits?.damage === "AP" ? "mr" : lane?.traits?.damage === "AD" ? "armor" : null;
  if (laneResist && teamResist && laneResist !== teamResist) {
    const setL = laneResist === "mr" ? MR_ITEMS : ARMOR_SET;
    const setT = teamResist === "mr" ? MR_ITEMS : ARMOR_SET;
    const l = [...entries, ...laneAdds].find((e) => e.tag === "lane" && setL.has(e.name))?.name
      || (boots && setL.has(boots.name) ? boots.name : null);
    const t = teamAdds.find((e) => setT.has(e.name))?.name
      || entries.find((e) => setT.has(e.name) && !isBoots(e.name))?.name;
    if (l && t) { conflictPair = [l, t]; conflicts.push(`${short(l)} for lane, ${short(t)} for teamfights`); }
  }

  // 4) Order. Item 1 and the boots open the lane in the champion's own order.
  const [first, ...rest] = entries;
  const open = [first, boots].filter(Boolean);
  if (boots && timing.first && first) open.reverse();
  const defLane = [...rest.filter((e) => e.tag === "lane" && isDef(e.name)), ...laneAdds.filter((e) => isDef(e.name))];
  // Anti-heal against a sustain laner comes early (their healing wins the lane
  // trades); the other damage answers (shield break, shred) after the core.
  const offLane = laneAdds.filter((e) => !isDef(e.name) && ANTIHEAL_ITEMS.has(e.name));
  const offLater = [...laneAdds.filter((e) => !isDef(e.name) && !ANTIHEAL_ITEMS.has(e.name))];
  const defTeam = teamAdds.filter((e) => isDef(e.name));
  const offTeam = teamAdds.filter((e) => !isDef(e.name));
  let seq;
  if (mode === "behind") {
    // Defensive answers first: the lane's, then the core's own, then the team's;
    // one straight after item 1, then every other buy.
    const defCore = rest.filter((e) => e.tag === "core" && isDef(e.name));
    const def = [...defLane, ...defCore, ...defTeam];
    const dmgCore = rest.filter((e) => !def.includes(e));
    const dmg = [...dmgCore.slice(0, 1), ...offLane, ...dmgCore.slice(1), ...offLater, ...offTeam];
    seq = [...open];
    if (def.length) seq.push(def.shift());
    while (def.length || dmg.length) {
      if (dmg.length) seq.push(dmg.shift());
      if (def.length) seq.push(def.shift());
    }
  } else {
    // Damage first: the authored core (a lane swap stays in its slot), the
    // damage answers, and the defensive answers last.
    const added = new Set(defLane.filter((e) => laneAdds.includes(e)));
    seq = [...open, ...rest.slice(0, 1), ...offLane, ...rest.slice(1), ...offLater, ...offTeam, ...[...added], ...defTeam];
  }

  // A full build is boots + five items; one more is listed as the next option.
  // Anything past that goes back to Situational.
  const CAP = 7;
  // Both items a conflict note names must be in the plan, not in Situational.
  conflictPair.forEach((n, k) => {
    const slot = CAP - conflictPair.length + k;
    const at = seq.findIndex((e) => e.name === n);
    if (at > slot) { const [e] = seq.splice(at, 1); seq.splice(slot, 0, e); }
  });
  // The authored core always stays in the plan (the user's call, 2026-10-22):
  // answers fill the slots the core leaves, and never push a core item out to
  // Situational. A lane swap stands in its core item's slot, and the boots and
  // both items of a conflict note are kept too.
  const protectedSlot = (e) => e.tag === "core" || e.tag === "boots"
    || (e.from && core.includes(e.from)) || conflictPair.includes(e.name);
  let owed = seq.filter(protectedSlot).length;
  const kept = [], spill = [];
  for (const e of seq) {
    if (protectedSlot(e)) { kept.push(e); owed--; }
    else if (kept.length + owed < CAP) kept.push(e);
    else spill.push(e);
  }
  const extra = spill.map((e) => e.name);
  const laneLen = open.length + (mode === "behind" && kept.length > open.length && isDef(kept[open.length]?.name) ? 1 : 0);
  const phases = [
    { key: "lane", title: "Lane", items: kept.slice(0, laneLen) },
    { key: "mid", title: "Mid game", items: kept.slice(laneLen, laneLen + 2) },
    { key: "late", title: "Late game", items: kept.slice(laneLen + 2) },
  ].filter((p) => p.items.length);

  return {
    phases,
    boots: boots ? { ...boots, first: timing.first, t1: timing.t1 } : null,
    conflicts,
    extra,
    lane,
    team,
    mode,
  };
}

export default gamePlan;
