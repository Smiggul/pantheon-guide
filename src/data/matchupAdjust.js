// ─────────────────────────────────────────────────────────────────────────────
//  matchupAdjust.js — adjust the recommended build to the champion you are
//  actually laning against, not just to their class.
//
//  The class pages (JUGGERNAUT, DIVER, ...) are written for the typical member of
//  each class, so they miss what makes an opponent different. Mordekaiser is a
//  Juggernaut, like Darius and Garen, but he deals magic damage: the Juggernaut
//  page tells Pantheon to buy Death's Dance (armor) and never mentions magic
//  resist. This reads the opponent's own facts and proposes specific swaps.
//
//  Facts used, each from a source that can be checked:
//    damage type  damageTypes.js (hand-classified for all 173)
//    class        champClasses.js (aligned with Riot's official classes)
//    heals        enemyTeam.HEAL_CHAMPS (each entry backed by its kit text)
//    shields      enemyTeam.SHIELD_CHAMPS
//    heavy CC     enemyTeam.CC_CHAMPS + the CC-built classes
//    health/armor stacking: the opponent's OWN build from this app's champion
//                 data, which audit-builds keeps current
//    range        Riot's attackrange (lcuData.ATTACK_RANGE)
//
//  It only proposes. The UI shows the proposals and applies the rune changes on
//  one click; the exported item set carries the item proposals as one block.
//  Rune swaps are only ever made within the same row of the same tree, so they
//  cannot make a legal page illegal.
// ─────────────────────────────────────────────────────────────────────────────
import { classOf } from "./champClasses.js";
import { damageTypeOf } from "./damageTypes.js";
import { HEAL_CHAMPS, SHIELD_CHAMPS, CC_CHAMPS, myProfileOf } from "./enemyTeam.js";
import { ATTACK_RANGE } from "./lcuData.js";

// Melee tops out at 225 and ranged starts at 300, a clean gap. Riot's
// attackrange is the DEFAULT form: Mini Gnar lanes at range and Jayce pokes from
// cannon form, so for a laning-phase call they count as ranged. Kayle's 175 is
// right as listed, since she is melee until level 6. Also used by
// lcuExport.laneStartFor.
const RANGED_FROM = 300;
const LANES_RANGED = new Set(["Gnar", "Jayce"]);
export const isRanged = (dd) => LANES_RANGED.has(dd) || (ATTACK_RANGE[dd] ?? 0) >= RANGED_FROM;

const CC_CLASSES = new Set(["VANGUARD", "CATCHER", "WARDEN"]);
const HP_CLASSES = new Set(["JUGGERNAUT", "VANGUARD", "WARDEN"]);
const BURST_CLASSES = new Set(["ASSASSIN", "BURST_MAGE"]);

// Items that are mostly health, and mostly armor, for reading the opponent's build.
const HP_ITEMS = new Set(["Heartsteel", "Sunfire Aegis", "Warmog's Armor", "Riftmaker", "Rylai's Crystal Scepter",
  "Liandry's Torment", "Titanic Hydra", "Sterak's Gage", "Spirit Visage", "Jak'Sho, The Protean", "Kaenic Rookern",
  "Unending Despair", "Hollow Radiance", "Overlord's Bloodmail", "Black Cleaver", "Rod of Ages", "Randuin's Omen",
  "Dead Man's Plate", "Force of Nature", "Trinity Force", "Sundered Sky", "Experimental Hexplate", "Cosmic Drive"]);
const ARMOR_ITEMS = new Set(["Thornmail", "Randuin's Omen", "Frozen Heart", "Dead Man's Plate", "Sunfire Aegis",
  "Iceborn Gauntlet", "Plated Steelcaps", "Death's Dance", "Zhonya's Hourglass", "Jak'Sho, The Protean", "Guardian Angel"]);

// Defensive swaps: item -> the same slot's answer to the other damage type, BY
// YOUR PROFILE. A swap only happens when your profile has an entry, so an AD
// champion is never told to trade one mage item for another. Only close stand-ins
// are listed; anything else is left alone rather than guessed at.
const ALL = (to) => ({ AD: to, AD_RANGED: to, AP: to, TANK: to });
const VS_MAGIC = {
  "Death's Dance":      { AD: "Maw of Malmortius", AD_RANGED: "Maw of Malmortius" },
  "Plated Steelcaps":   ALL("Mercury's Treads"),
  "Zhonya's Hourglass": { AP: "Banshee's Veil" },
  "Randuin's Omen":     { AD: "Force of Nature", TANK: "Force of Nature" },
  "Frozen Heart":       { AD: "Kaenic Rookern", TANK: "Kaenic Rookern" },
  "Dead Man's Plate":   { AD: "Force of Nature", TANK: "Force of Nature" },
  "Sunfire Aegis":      { AD: "Hollow Radiance", TANK: "Hollow Radiance" },
  "Thornmail":          { AD: "Force of Nature", TANK: "Force of Nature" }, // kept when the opponent heals: it is also anti-heal
};
const VS_PHYSICAL = {
  "Maw of Malmortius":  { AD: "Death's Dance", AD_RANGED: "Death's Dance" },
  "Mercury's Treads":   ALL("Plated Steelcaps"), // kept when the opponent is heavy CC: tenacity still matters
  "Banshee's Veil":     { AP: "Zhonya's Hourglass" },
  "Force of Nature":    { AD: "Randuin's Omen", TANK: "Randuin's Omen" },
  "Kaenic Rookern":     { AD: "Death's Dance", TANK: "Frozen Heart" },
  "Hollow Radiance":    { AD: "Sunfire Aegis", TANK: "Sunfire Aegis" },
  "Spirit Visage":      { TANK: "Randuin's Omen" },
};
const answers = (table) => new Set(Object.values(table).flatMap((m) => Object.values(m)));
const MR_ITEMS = new Set([...answers(VS_MAGIC), "Spirit Visage", "Wit's End", "Mercurial Scimitar",
  "Abyssal Mask", "Jak'Sho, The Protean", "Verdant Barrier", "Mercury's Treads"]);
const ARMOR_SET = new Set([...answers(VS_PHYSICAL), ...ARMOR_ITEMS]);

// What to ADD when nothing already covers a need, by your own profile.
const ADD = {
  mr:       { AD: "Maw of Malmortius", AD_RANGED: "Mercurial Scimitar", AP: "Banshee's Veil", TANK: "Force of Nature" },
  armor:    { AD: "Death's Dance", AD_RANGED: "Guardian Angel", AP: "Zhonya's Hourglass", TANK: "Randuin's Omen" },
  antiheal: { AD: "Chempunk Chainsword", AD_RANGED: "Mortal Reminder", AP: "Morellonomicon", TANK: "Thornmail" },
  shred:    { AD: "Black Cleaver", AD_RANGED: "Lord Dominik's Regards", AP: "Liandry's Torment", TANK: null },
};
const ANTIHEAL_ITEMS = new Set(["Chempunk Chainsword", "Executioner's Calling", "Mortal Reminder", "Morellonomicon",
  "Oblivion Orb", "Thornmail", "Bramble Vest"]);
const SHRED_ITEMS = new Set(["Black Cleaver", "Lord Dominik's Regards", "Serylda's Grudge", "Mortal Reminder",
  "Void Staff", "Liandry's Torment", "Blade of The Ruined King", "Terminus", "Cryptbloom", "Bloodletter's Curse"]);
const LETHALITY = new Set(["Voltaic Cyclosword", "Youmuu's Ghostblade", "Edge of Night", "Serylda's Grudge",
  "Profane Hydra", "Axiom Arc", "Umbral Glaive", "Hubris", "Opportunity", "Bastionbreaker", "The Collector"]);

const split = (p) => String(p || "").split("›").map((s) => s.trim()).filter(Boolean);

// The opponent's own main build in the same lane, or their first role.
function foeBuild(foe, roleName) {
  const r = foe?.roles?.[roleName] || Object.values(foe?.roles || {})[0];
  return r ? split(r.corePath) : [];
}

// ── The opponent's facts ────────────────────────────────────────────────────
export function foeTraits(foe, roleName) {
  const dd = foe.dd;
  const cls = classOf(dd);
  const build = foeBuild(foe, roleName);
  const hpItems = build.filter((n) => HP_ITEMS.has(n)).length;
  const armorItems = build.filter((n) => ARMOR_ITEMS.has(n) && n !== "Plated Steelcaps").length;
  return {
    dd, cls,
    damage: damageTypeOf(dd),                       // "AP" | "AD" | "Mixed"
    heals: HEAL_CHAMPS.has(dd),
    shields: SHIELD_CHAMPS.has(dd),
    cc: CC_CHAMPS.has(dd) || CC_CLASSES.has(cls),
    hpStack: HP_CLASSES.has(cls) || hpItems >= 2,
    armorStack: armorItems >= 2,
    ranged: isRanged(dd),
    burst: BURST_CLASSES.has(cls),
    build,
  };
}

export function traitChips(t) {
  const chips = [];
  chips.push({ key: "dmg", label: t.damage === "AP" ? "Magic damage" : t.damage === "AD" ? "Physical damage" : "Mixed damage" });
  if (t.heals) chips.push({ key: "heal", label: "Heals" });
  if (t.shields) chips.push({ key: "shield", label: "Shields" });
  if (t.hpStack) chips.push({ key: "hp", label: "Stacks health" });
  if (t.armorStack) chips.push({ key: "armor", label: "Stacks armor" });
  if (t.cc) chips.push({ key: "cc", label: "Heavy CC" });
  if (t.ranged) chips.push({ key: "ranged", label: "Ranged" });
  if (t.burst) chips.push({ key: "burst", label: "Burst" });
  return chips;
}

// ── Rune swaps (same row, same tree: legality is preserved) ─────────────────
function runeSwaps(page, me, t) {
  if (!page?.keystone) return [];
  const has = (n) => [...(page.primaryRunes || []), ...(page.secondaryRunes || [])].includes(n);
  const out = [];
  if (t.ranged && !isRanged(me)) {
    if (has("Bone Plating")) out.push({ from: "Bone Plating", to: "Second Wind",
      why: "Second Wind heals back the poke a ranged laner chips you with between trades" });
  } else if (t.burst) {
    if (has("Second Wind")) out.push({ from: "Second Wind", to: "Bone Plating",
      why: "Bone Plating blunts the burst combo, where Second Wind only heals afterwards" });
  }
  if (t.cc) {
    for (const r of ["Overgrowth", "Revitalize"]) if (has(r)) {
      out.push({ from: r, to: "Unflinching", why: "tenacity and slow resist shorten their crowd control" });
      break;
    }
    const s = page.shards?.[2];
    if (s === "Health" || s === "Health (scaling)")
      out.push({ shard: 2, from: s, to: "Tenacity", why: "the tenacity shard shortens their crowd control" });
  }
  return out;
}

export function applyRuneSwaps(page, swaps) {
  if (!page || !swaps?.length) return page;
  const next = { ...page,
    primaryRunes: [...(page.primaryRunes || [])],
    secondaryRunes: [...(page.secondaryRunes || [])],
    shards: [...(page.shards || [])] };
  for (const s of swaps) {
    if (s.shard != null) { next.shards[s.shard] = s.to; continue; }
    for (const k of ["primaryRunes", "secondaryRunes"]) {
      const i = next[k].indexOf(s.from);
      if (i >= 0) next[k][i] = s.to;
    }
  }
  return next;
}

// ── The whole proposal ──────────────────────────────────────────────────────
//  champ      your champion object        roleName  "Top" | "Mid" | ...
//  roleData   your role block              enemyClass the class page in use
//  page       the rune page in use (runeSel shape)
//  foe        the opponent's champion object
//  curated    true when a hand-written per-opponent rune page already applied;
//             it is the more specific source, so no rune swaps are proposed.
export function matchupAdvice({ champ, roleName, roleData, enemyClass, page, foe, curated = false }) {
  if (!champ || !foe || !roleData || foe.dd === champ.dd) return null;
  const t = foeTraits(foe, roleName);
  const base = myProfileOf(champ.dd);
  const prof = base === "AD" && isRanged(champ.dd) ? "AD_RANGED" : base;

  const cell = roleData.data?.[enemyClass] || {};
  const core = split(roleData.corePath);
  const listed = [...core, ...(cell.ahead || []).map((e) => e.name), ...(cell.behind || []).map((e) => e.name)];
  const has = (set) => listed.some((n) => set.has(n));
  const items = [];
  const seen = new Set(listed);
  const add = (item, why) => { if (item && !seen.has(item)) { seen.add(item); items.push({ to: item, why }); } };

  // 1) Resist against their damage type: swap what is listed, then add if nothing covers it.
  if (t.damage === "AP" || t.damage === "AD") {
    const table = t.damage === "AP" ? VS_MAGIC : VS_PHYSICAL;
    let swaps = 0;
    for (const n of listed) {
      const to = table[n]?.[prof];
      if (swaps >= 2 || !to || seen.has(to)) continue;
      if (n === "Thornmail" && t.heals) continue;
      if (n === "Mercury's Treads" && t.cc) continue;
      seen.add(to);
      items.push({ from: n, to, why: t.damage === "AP"
        ? "magic resist instead of armor: they deal magic damage"
        : "armor instead of magic resist: they deal physical damage" });
      swaps++;
    }
    const covered = t.damage === "AP" ? has(MR_ITEMS) || items.some((i) => MR_ITEMS.has(i.to))
                                      : has(ARMOR_SET) || items.some((i) => ARMOR_SET.has(i.to));
    if (!covered) add(ADD[t.damage === "AP" ? "mr" : "armor"][prof],
      t.damage === "AP" ? "they deal magic damage" : "they deal physical damage");
  }
  // 2) Anti-heal into a sustain champion.
  if (t.heals && !has(ANTIHEAL_ITEMS)) add(ADD.antiheal[prof], "Grievous Wounds cuts their healing");
  // 3) Percent penetration or health shred into a health stacker.
  if ((t.hpStack || t.armorStack) && !has(SHRED_ITEMS)) add(ADD.shred[prof],
    t.armorStack ? "percent armor shred beats flat penetration into stacked armor"
                 : "they stack health, so percent shred outscales flat penetration");
  // 4) Shield breaker, only for a lethality build.
  if (t.shields && prof.startsWith("AD") && has(LETHALITY) && !seen.has("Serpent's Fang"))
    add("Serpent's Fang", "cuts the shields they lean on");

  const runes = curated ? [] : runeSwaps(page, champ.dd, t);
  return {
    foe: foe.display, traits: t, chips: traitChips(t),
    items: items.slice(0, 4),
    runes,
    page: runes.length ? applyRuneSwaps(page, runes) : null,
  };
}

export default matchupAdvice;
