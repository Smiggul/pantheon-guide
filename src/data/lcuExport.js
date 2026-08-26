// ─────────────────────────────────────────────────────────────────────────────
//  lcuExport.js  —  builds the League Client (LCU) rune-page + item-set payloads
//  for a champion / role / enemy-class selection. Pure logic; no I/O, no client
//  calls. Stage 2 (electron/main.cjs) consumes these and PUTs them to the LCU.
//
//  All IDs come from src/data/lcuData.js (generated from CommunityDragon +
//  DDragon — canonical Riot ids, which the LCU requires). See that file's header.
// ─────────────────────────────────────────────────────────────────────────────
import { STYLE_IDS, RUNE_IDS, SHARD_IDS, FIRST_BACK, ITEM_IDS, CHAMP_KEYS } from "./lcuData.js";
import { classOf } from "./champClasses.js";
import { petFor } from "./junglePets.js";

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

// ── Champion profile ────────────────────────────────────────────────────────
// Drives which starter and which first-back filler actually make sense. The
// BUILD wins over the champion's class (AP Kai'Sa is a MARKSMAN by class but
// must start Doran's Ring), which is why the item markers are checked first.
function profileOf(champDd, coreNoBoots) {
  const low = coreNoBoots.map((s) => s.toLowerCase());
  const ap = low.filter((n) => AP_MARKERS.has(n)).length;
  const tank = low.filter((n) => TANK_MARKERS.has(n)).length;
  if (ap >= 1 && ap >= tank) return "AP";
  if (tank >= 2) return "TANK";
  const cls = classOf(champDd);
  if (cls === "MARKSMAN") return "AD_RANGED";
  if (cls === "VANGUARD" || cls === "WARDEN") return "TANK";
  return "AD_MELEE";
}

// Per-profile starting kit and the ~350-450g filler that pads the first back to
// a full purchase. Never hand an AP champion a Long Sword.
const PROFILE = {
  AP:        { start: "Doran's Ring",   startLabel: "caster",  filler: "Amplifying Tome", greedy: "Dark Seal" },
  AD_MELEE:  { start: "Doran's Blade",  startLabel: "melee",   filler: "Long Sword",      greedy: null },
  AD_RANGED: { start: "Doran's Blade",  startLabel: "ranged",  filler: "Long Sword",      greedy: null },
  TANK:      { start: "Doran's Shield", startLabel: "durable", filler: "Ruby Crystal",    greedy: null },
};

// Support quest line (World Atlas → Runic Compass) finishes into one of these.
// Pick the one that matches the build, but list them all so the player can swap.
const SUPPORT_FINISHERS = ["Bloodsong", "Solstice Sleigh", "Celestial Opposition", "Dream Maker", "Zaz'Zak's Realmspike"];
function supportFinishers(coreNoBoots) {
  const low = coreNoBoots.map((s) => s.toLowerCase());
  const has = (arr) => arr.some((x) => low.includes(x));
  let rec;
  if (has(["hextech rocketbelt", "luden's echo", "liandry's torment", "zaz'zak's realmspike", "blackfire torch", "horizon focus", "malignance"])) rec = "Zaz'Zak's Realmspike";
  else if (has(["umbral glaive", "youmuu's ghostblade", "profane hydra", "serpent's fang", "voltaic cyclosword", "edge of night"])) rec = "Bloodsong";
  else if (has(["dream maker", "moonstone renewer", "echoes of helia", "ardent censer", "staff of flowing water", "mikael's blessing", "redemption"])) rec = "Dream Maker";
  else if (has(["knight's vow", "sunfire aegis", "frozen heart", "zeke's convergence", "iceborn gauntlet", "jak'sho, the protean", "locket of the iron solari"])) rec = "Solstice Sleigh";
  else rec = "Celestial Opposition";
  return [rec, ...SUPPORT_FINISHERS.filter((x) => x !== rec)];
}

// ── Build a full LCU-style item set for a champ/role/enemy-class ─────────────
//  customItems (optional): a Build Forge set { starter, core, situational } —
//  when present it replaces the recommended item blocks so the exported/imported
//  set is exactly what the user forged (runes still come from the rune page).
export function buildItemSet(champDd, roleName, enemyClass, roleData, customItems = null) {
  const hasCustom = customItems &&
    ((customItems.starter?.length || 0) + (customItems.core?.length || 0) + (customItems.boots?.length || 0) + (customItems.situational?.length || 0) > 0);
  if (hasCustom) {
    const key = CHAMP_KEYS[champDd];
    const blocks = [
      itemBlock("Starter", [...(customItems.starter || []), "Stealth Ward"]),
      itemBlock("Core", customItems.core || []),
      itemBlock("Boots", customItems.boots || []),
      itemBlock("Situational", customItems.situational || []),
      itemBlock("Vision & consumables", ["Control Ward", "Stealth Ward", "Farsight Alteration", "Oracle Lens"]),
    ].filter((b) => b.items.length > 0);
    return {
      title: `FRGE.GG — ${champDd} ${roleName} (forged)`,
      type: "custom", map: "any", mode: "any", sortrank: 1, startedFrom: "blank",
      associatedMaps: [11, 12], associatedChampions: key ? [key] : [], blocks,
    };
  }

  const core = String(roleData.corePath || "").split("›").map((s) => s.trim()).filter(Boolean);
  const boots = core.find((n) => BOOTS_LOWER.has(n.toLowerCase()));
  const coreNoBoots = core.filter((n) => n !== boots);
  const firstCore = coreNoBoots[0] || core[0];
  const firstBack = firstCore ? FIRST_BACK[firstCore] : null;
  const prof = PROFILE[profileOf(champDd, coreNoBoots)];
  const situational = roleData.sideItems || [];
  const ahead = (roleData.data?.[enemyClass]?.ahead || []).map((e) => e?.name).filter(Boolean);

  // Jungle starts with a smite pet; support starts with the World Atlas quest
  // item and finishes into a support item — never a Doran's/laning start.
  const pet = roleName === "Jungle" ? petFor(champDd, roleData, null) : null;
  const isSupport = roleName === "Support" && !pet;
  const supFin = isSupport ? supportFinishers(coreNoBoots) : null;
  const startBlocks = pet
    ? [
        // Pet (450g) + Health Potion (50g) = exactly the 500g start; Refillable
        // Potion (150g) would push it to 600g, which isn't affordable at level 1.
        itemBlock(`Jungle pet — ${pet}`, [pet, "Health Potion", "Stealth Ward"]),
        itemBlock("Alt pets", ["Scorchclaw Pup", "Gustwalker Hatchling", "Mosstomper Seedling"].filter((p) => p !== pet)),
      ]
    : isSupport
    ? [
        // Support quest item (World Atlas → Runic Compass) + the finished support
        // items it upgrades into — recommended finisher first, then the rest.
        itemBlock("Start — support quest", ["World Atlas", "Health Potion", "Stealth Ward"]),
        itemBlock("Support item — finish (pick one)", supFin),
      ]
    : [
        // Laning starts, each a complete buy — standard, then the situational swaps.
        itemBlock(`Start — standard (${prof.startLabel})`, [prof.start, "Health Potion", "Stealth Ward"]),
        ...(prof.start !== "Doran's Shield"
          ? [itemBlock("Start — vs poke / ranged harass", ["Doran's Shield", "Health Potion", "Stealth Ward"])]
          : []),
        itemBlock("Start — vs heavy damage (tanky)", ["Doran's Helm", "Health Potion", "Stealth Ward"]),
        ...(prof.greedy
          ? [itemBlock("Start — greedy / snowball", [prof.greedy, "Health Potion", "Stealth Ward"])]
          : []),
        ...(profileOf(champDd, coreNoBoots) === "AD_RANGED"
          ? [itemBlock("Start — attack speed / on-hit", ["Doran's Bow", "Health Potion", "Stealth Ward"])]
          : []),
      ];

  const blocks = [
    ...startBlocks,
    // First back: ~900-1300g. The first core item's real building block, a
    // damage-type-appropriate filler (never a Long Sword on an AP champ), the
    // greedy stacking option where it applies, then boots and a ward.
    itemBlock("First back (~1000g)", isSupport
      ? [supFin[0], "Boots", "Control Ward"]
      : [firstBack, prof.filler, prof.greedy, "Boots", "Control Ward"]),
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
//  runesOverride (optional): the live, possibly user-edited rune page from the UI.
//  When present it wins over both the alt build and the data recommendation, so
//  the export is exactly the (editable) rune page the user sees — WYSIWYG import.
export function buildExport(champ, roleName, enemyClass, altBuild = null, runesOverride = null, customItems = null) {
  const base = champ.roles ? champ.roles[roleName] : champ; // single-role champs store data flat
  const roleData = altBuild
    ? { ...base, corePath: altBuild.corePath, sideItems: altBuild.sideItems || base?.sideItems,
        pet: altBuild.pet || base?.pet }
    : base;
  const data = base?.data || {};
  const runes = runesOverride
    || (altBuild
      ? altBuild.runes
      : (data[enemyClass]?.runes || data[Object.keys(data)[0]]?.runes || {}));
  const label = altBuild ? `${champ.display} ${altBuild.label}` : `${champ.display} ${roleName}`;
  const rune = buildRunePayload(runes, `FRGE ${label}`);
  const itemSet = buildItemSet(champ.dd, roleName, enemyClass, roleData || {}, customItems);
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
