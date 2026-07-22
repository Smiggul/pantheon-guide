// ─────────────────────────────────────────────────────────────────────────────
//  lcuExport.js  —  builds the League Client (LCU) rune-page + item-set payloads
//  for a champion / role / enemy-class selection. Pure logic; no I/O, no client
//  calls. Stage 2 (electron/main.cjs) consumes these and PUTs them to the LCU.
//
//  All IDs come from src/data/lcuData.js (generated from CommunityDragon +
//  DDragon — canonical Riot ids, which the LCU requires). See that file's header.
// ─────────────────────────────────────────────────────────────────────────────
import { STYLE_IDS, RUNE_IDS, SHARD_IDS, FIRST_BACK, ITEM_IDS, CHAMP_KEYS } from "./lcuData.js";

// item name -> canonical id (case-insensitive; unknown -> null)
export const itemId = (name) =>
  name == null ? null : (ITEM_IDS[String(name).trim().toLowerCase()] ?? null);

const itemBlock = (type, names) => ({
  type,
  items: [...new Set(names.filter(Boolean))]
    .map(itemId)
    .filter((id) => id != null)
    .map((id) => ({ id: String(id), count: 1 })),
});

// ── Runes → LCU /lol-perks/v1/pages payload ─────────────────────────────────
//  selectedPerkIds order: keystone, 3 primary, 2 secondary, 3 shards (9 total).
export function buildRunePayload(runes, pageName = "FRGE.GG") {
  const missing = [];
  const look = (n, table) => {
    const v = table[n];
    if (v == null) missing.push(n);
    return v;
  };
  const primaryStyleId = look(runes.primary, STYLE_IDS);
  const subStyleId = look(runes.secondary, STYLE_IDS);
  const selectedPerkIds = [
    look(runes.keystone, RUNE_IDS),
    ...(runes.primaryRunes || []).map((n) => look(n, RUNE_IDS)),
    ...(runes.secondaryRunes || []).map((n) => look(n, RUNE_IDS)),
    ...(runes.shards || []).map((n) => look(n, SHARD_IDS)),
  ];
  const valid =
    missing.length === 0 &&
    primaryStyleId != null &&
    subStyleId != null &&
    selectedPerkIds.length === 9 &&
    selectedPerkIds.every((x) => x != null);
  return {
    page: {
      name: String(pageName).slice(0, 24),
      primaryStyleId,
      subStyleId,
      selectedPerkIds: selectedPerkIds.filter((x) => x != null),
      current: true,
    },
    valid,
    missing,
  };
}

// ── Item set enrichment ─────────────────────────────────────────────────────
const BOOTS = ["Plated Steelcaps","Mercury's Treads","Sorcerer's Shoes","Berserker's Greaves",
  "Ionian Boots of Lucidity","Boots of Swiftness","Gluttonous Greaves"];
const BOOTS_LOWER = new Set(BOOTS.map((b) => b.toLowerCase()));
const AP_MARKERS = new Set(["Rabadon's Deathcap","Luden's Echo","Liandry's Torment","Shadowflame",
  "Nashor's Tooth","Riftmaker","Malignance","Rod of Ages","Archangel's Staff","Lich Bane",
  "Rylai's Crystal Scepter","Void Staff","Zhonya's Hourglass","Stormsurge","Cosmic Drive",
  "Hextech Rocketbelt","Cryptbloom","Morellonomicon","Horizon Focus","Blackfire Torch",
  "Bloodletter's Curse","Seraph's Embrace","Dawncore","Mejai's Soulstealer"].map((s) => s.toLowerCase()));
const TANK_MARKERS = new Set(["Sunfire Aegis","Thornmail","Randuin's Omen","Frozen Heart",
  "Spirit Visage","Force of Nature","Kaenic Rookern","Jak'Sho, The Protean","Warmog's Armor",
  "Dead Man's Plate","Heartsteel","Unending Despair","Iceborn Gauntlet","Gargoyle Stoneplate",
  "Winter's Approach","Overlord's Bloodmail","Titanic Hydra"].map((s) => s.toLowerCase()));

function inferStart(coreNoBoots) {
  const low = coreNoBoots.map((s) => s.toLowerCase());
  const ap = low.filter((n) => AP_MARKERS.has(n)).length;
  const tank = low.filter((n) => TANK_MARKERS.has(n)).length;
  if (ap >= 1 && ap >= tank) return "Doran's Ring";
  if (tank >= 2) return "Doran's Shield";
  return "Doran's Blade";
}

// ── Build a full LCU-style item set for a champ/role/enemy-class ─────────────
export function buildItemSet(champDd, roleName, enemyClass, roleData) {
  const core = String(roleData.corePath || "").split("›").map((s) => s.trim()).filter(Boolean);
  const boots = core.find((n) => BOOTS_LOWER.has(n.toLowerCase()));
  const coreNoBoots = core.filter((n) => n !== boots);
  const firstCore = coreNoBoots[0] || core[0];
  const firstBack = firstCore ? FIRST_BACK[firstCore] : null;
  const start = inferStart(coreNoBoots);
  const situational = roleData.sideItems || [];
  const ahead = (roleData.data?.[enemyClass]?.ahead || []).map((e) => e?.name).filter(Boolean);

  const blocks = [
    itemBlock("Starting", [start, "Health Potion", "Stealth Ward", "Doran's Blade", "Doran's Ring", "Doran's Shield"]),
    itemBlock("First back", [firstBack, "Control Ward"]),
    itemBlock(`Core — ${roleName}`, coreNoBoots),
    itemBlock("Boots", [boots, ...BOOTS]),
    itemBlock(`Situational vs ${String(enemyClass).replace(/_/g, " ").toLowerCase()}`, [...ahead, ...situational]),
    itemBlock("Vision & consumables", ["Control Ward", "Stealth Ward", "Farsight Alteration", "Oracle Lens"]),
  ].filter((b) => b.items.length > 0);

  const key = CHAMP_KEYS[champDd];
  return {
    title: `FRGE.GG — ${champDd} ${roleName}`,
    type: "custom",
    map: "any",
    mode: "any",
    sortrank: 1,
    startedFrom: "blank",
    associatedMaps: [11, 12],
    associatedChampions: key ? [key] : [],
    blocks,
  };
}

// ── Top-level: everything the export button needs for the current selection ──
//  altBuild (optional): a selected ALT_BUILDS entry — when present its corePath,
//  sideItems and runes override the role's primary build so the export matches
//  exactly what the UI is showing.
export function buildExport(champ, roleName, enemyClass, altBuild = null) {
  const base = champ.roles ? champ.roles[roleName] : champ; // single-role champs store data flat
  const roleData = altBuild
    ? { ...base, corePath: altBuild.corePath, sideItems: altBuild.sideItems || base?.sideItems }
    : base;
  const data = base?.data || {};
  const runes = altBuild
    ? altBuild.runes
    : (data[enemyClass]?.runes || data[Object.keys(data)[0]]?.runes || {});
  const label = altBuild ? `${champ.display} ${altBuild.label}` : `${champ.display} ${roleName}`;
  const rune = buildRunePayload(runes, `FRGE ${label}`);
  const itemSet = buildItemSet(champ.dd, roleName, enemyClass, roleData || {});
  return {
    champion: champ.display,
    role: roleName,
    enemyClass,
    altLabel: altBuild ? altBuild.label : null,
    runePage: rune.page,
    runeValid: rune.valid,
    runeMissing: rune.missing,
    itemSet,
  };
}

export default buildExport;
