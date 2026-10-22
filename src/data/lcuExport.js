// ─────────────────────────────────────────────────────────────────────────────
//  lcuExport.js  —  builds the League Client (LCU) rune-page + item-set payloads
//  for a champion / role / enemy-class selection. Pure logic; no I/O, no client
//  calls. Stage 2 (electron/main.cjs) consumes these and PUTs them to the LCU.
//
//  All IDs come from src/data/lcuData.js (generated from CommunityDragon +
//  DDragon — canonical Riot ids, which the LCU requires). See that file's header.
// ─────────────────────────────────────────────────────────────────────────────
import { STYLE_IDS, RUNE_IDS, SHARD_IDS, FIRST_BACK, ITEM_IDS, CHAMP_KEYS, PARTYPE } from "./lcuData.js";
import { isRanged } from "./matchupAdjust.js";
import { gamePlan, bootsTimingOf } from "./gamePlan.js";
import { counterInteractions } from "./abilityInteractions.js";
import { tagsOf } from "./counterPicker.js";
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

// Every item appears once in an exported set (the user's rule, 2026-10-21).
// Before this, 9,844 of 9,945 roster sets listed some item twice: core items
// again under Situational, the boots again under Situational. An item stays in
// the first block that lists it, except that the matchup block (`keep`) outranks
// the generic lists, so a boot proposed against this opponent leaves the Boots
// list instead. Wards and potions are exempt: they are bought again and again.
const REBUY = ["Health Potion", "Refillable Potion", "Control Ward", "Stealth Ward",
  "Farsight Alteration", "Oracle Lens"];
function onceEach(blocks, keep = null) {
  const rebuy = new Set(REBUY.map((n) => String(itemId(n))));
  const seen = new Set((keep?.items || []).map((i) => i.id));
  return blocks
    .map((b) => (b === keep ? b : {
      ...b,
      items: b.items.filter((i) => rebuy.has(i.id) || (!seen.has(i.id) && seen.add(i.id))),
    }))
    .filter((b) => b.items.length > 0);
}

// ── Runes → LCU /lol-perks/v1/pages payload ─────────────────────────────────
//  selectedPerkIds order: keystone, 3 primary, 2 secondary, 3 shards (9 total).
// Which tree each rune belongs to, mirroring RUNE_TREES in App.jsx. NOT derived
// from Data Dragon icon paths: Riot files some icons under the wrong tree (Last
// Stand is a Precision rune whose icon lives in Styles/Sorcery/), so the asset
// layout is not a reliable source. The client REJECTS a page whose perks do not
// belong to the declared styles, so validating membership here turns a silent
// import failure into a clear local error. helpers/patch-diff.mjs flags any rune
// that disappears from Data Dragon, which is when this needs regenerating.
const RUNE_STYLE = {
  "Conqueror": "Precision",
  "Lethal Tempo": "Precision",
  "Press the Attack": "Precision",
  "Fleet Footwork": "Precision",
  "Absorb Life": "Precision",
  "Triumph": "Precision",
  "Presence of Mind": "Precision",
  "Legend: Alacrity": "Precision",
  "Legend: Haste": "Precision",
  "Legend: Bloodline": "Precision",
  "Coup de Grace": "Precision",
  "Cut Down": "Precision",
  "Last Stand": "Precision",
  "Electrocute": "Domination",
  "Dark Harvest": "Domination",
  "Hail of Blades": "Domination",
  "Cheap Shot": "Domination",
  "Taste of Blood": "Domination",
  "Sudden Impact": "Domination",
  "Sixth Sense": "Domination",
  "Grisly Mementos": "Domination",
  "Deep Ward": "Domination",
  "Treasure Hunter": "Domination",
  "Relentless Hunter": "Domination",
  "Ultimate Hunter": "Domination",
  "Summon Aery": "Sorcery",
  "Arcane Comet": "Sorcery",
  "Deathfire Touch": "Sorcery",
  "Stormraider's Surge": "Sorcery",
  "Manaflow Band": "Sorcery",
  "Nimbus Cloak": "Sorcery",
  "Axiom Arcanist": "Sorcery",
  "Transcendence": "Sorcery",
  "Celerity": "Sorcery",
  "Absolute Focus": "Sorcery",
  "Scorch": "Sorcery",
  "Waterwalking": "Sorcery",
  "Gathering Storm": "Sorcery",
  "Grasp of the Undying": "Resolve",
  "Aftershock": "Resolve",
  "Guardian": "Resolve",
  "Demolish": "Resolve",
  "Font of Life": "Resolve",
  "Shield Bash": "Resolve",
  "Conditioning": "Resolve",
  "Second Wind": "Resolve",
  "Bone Plating": "Resolve",
  "Overgrowth": "Resolve",
  "Revitalize": "Resolve",
  "Unflinching": "Resolve",
  "Glacial Augment": "Inspiration",
  "First Strike": "Inspiration",
  "Unsealed Spellbook": "Inspiration",
  "Hextech Flashtraption": "Inspiration",
  "Magical Footwear": "Inspiration",
  "Cash Back": "Inspiration",
  "Triple Tonic": "Inspiration",
  "Time Warp Tonic": "Inspiration",
  "Biscuit Delivery": "Inspiration",
  "Cosmic Insight": "Inspiration",
  "Approach Velocity": "Inspiration",
  "Jack Of All Trades": "Inspiration",
};

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
  // Membership check: a perk from the wrong tree passes every id lookup above but
  // is refused by the client, which surfaced as an unexplained "import failed".
  const wrongTree = [];
  const inTree = (n, tree) => {
    const t = RUNE_STYLE[n];
    if (t && tree && t !== tree) wrongTree.push(n + " is " + t + ", not " + tree);
  };
  if (runes.keystone) inTree(runes.keystone, runes.primary);
  for (const n of runes.primaryRunes || []) if (n) inTree(n, runes.primary);
  for (const n of runes.secondaryRunes || []) if (n) inTree(n, runes.secondary);

  const valid =
    missing.length === 0 &&
    wrongTree.length === 0 &&
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
    wrongTree,
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

// ── Doran's Ring without Mana ───────────────────────────────────────────────
// Ring's Drain restores Mana, and "If you can't gain Mana, heal for 45% of this
// value instead" (Riot 16.21.1). A champion without Mana (PARTYPE: Energy,
// Shield, Heat, None, ...) still gets its 18 AP and 90 Health, and heals 0.45
// Health a second (0.9 after hitting a champion). That is still the most common
// start for most of them, so Ring stays by default. Share of games that start
// Ring, lolalytics Emerald+ 16.20 (16.21 and OP.GG agree): Rumble Top 90%,
// Vladimir Mid 87%, Akali Top 72%, Mordekaiser Top 71%, Akali Mid 63%.
// Keyed by champion AND role: a start is a lane call. Only the manaless
// champions whose own data says otherwise are listed:
const MANALESS_START = {
  "Kennen:Top":   "Doran's Blade", // Blade 52%, Ring 27%, Bow 17% (51.6k games)
  // Dark Seal 36%, Blade 30%, Shield 14%, Ring 13% (183k games). Dark Seal stays
  // listed as the AP profile's "Start, greedy" block.
  "Katarina:Mid": "Doran's Blade",
};
const startFor = (champDd, roleName, prof) =>
  (prof.start === "Doran's Ring" && PARTYPE[champDd] !== "Mana" &&
    MANALESS_START[`${champDd}:${roleName}`]) || prof.start;

// ── Matchup-aware lane start ──────────────────────────────────────────────────────────
// The PROFILE start above is chosen by who YOU are. Which Doran's to open with
// also depends on who you are laning against, so once the opponent is known two
// calls with strong consensus can override it. Both are Top only, and only for
// a melee champion:
//   vs a ranged laner         -> Doran's Shield. Riot's own text: "after taking
//                                damage from a champion, restore Health over 8
//                                seconds" — built for a lane of being poked.
//   vs a curated worst matchup -> Doran's Shield, to survive a lane you are not
//                                going to win — UNLESS you hold an early-phase
//                                edge on them (Pantheon beats Jax early and loses
//                                late), because a starter is an early-game call.
//
// Deliberately NOT driven by the counter engine's matchup score: it rates
// Pantheon +4 into Gangplank, his #2 curated ban, because GP is melee by auto
// range while his lane is ranged Q poke. The curated bans are more trustworthy.
//
// Mid and Bot are left alone on purpose. Melee mids vs ranged mages split by
// champion (Yasuo often Shield, Zed and Yone Blade), and every Bot opponent is
// ranged, so range carries no matchup information there.
// isRanged (melee vs ranged, with the Gnar/Jayce laning-form exceptions) lives
// in matchupAdjust.js, which uses the same rule for the matchup proposals.

export function laneStartFor(champDd, roleName, roleData, foe) {
  if (!foe || roleName !== "Top" || isRanged(champDd)) return null;
  if (isRanged(foe.dd)) {
    return { item: "Doran's Shield", label: "ranged: sustain the poke" };
  }
  const worst = roleData?.bans || [];
  if (worst.includes(foe.display)) {
    const earlyEdge = counterInteractions(champDd, foe.dd, tagsOf(foe.dd))
      .some((e) => e.phase === "early");
    if (!earlyEdge) return { item: "Doran's Shield", label: "worst matchup: survive lane" };
  }
  return null;
}

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
//  foe (optional): the lane opponent's champ object, when known. Tailors the
//  recommended starter (see laneStartFor) and names them in the set title.
//
//  champName (optional): the display name for the set title (falls back to the
//  Data Dragon key, which reads wrong for Wukong: "MonkeyKing").
//
//  Block titles (the subheadings) stay SHORT: the in-game shop cuts long ones
//  off (the user, 2026-10-21: "extensive unnecessary description in the
//  subheadings"). The reasons that used to ride in them come back in `notes`,
//  which buildExport strips off before anything reaches the client; the app's
//  in-game view shows them instead. The set's own title keeps champion, role and
//  opponent ("FRGE.GG — Pantheon Top vs Mordekaiser"); the user may want short
//  forms later ("Panth vs Morde"), undecided.
//
//  opts.mode ("ahead" | "behind") and opts.enemies (DDragon ids of the enemy
//  team) feed the game plan (gamePlan.js): the Lane / Mid game / Late game
//  blocks are the same ordered recommendation the app shows.
export function buildItemSet(champDd, roleName, enemyClass, roleData, customItems = null, foe = null, champName = null, opts = {}) {
  const mode = opts.mode === "ahead" ? "ahead" : "behind";
  const who = champName || champDd;
  const hasCustom = customItems &&
    ((customItems.starter?.length || 0) + (customItems.core?.length || 0) + (customItems.boots?.length || 0) + (customItems.situational?.length || 0) > 0);
  if (hasCustom) {
    const key = CHAMP_KEYS[champDd];
    const blocks = [
      itemBlock("Start", [...(customItems.starter || []), "Stealth Ward"]),
      itemBlock("Core", customItems.core || []),
      itemBlock("Boots", customItems.boots || []),
      itemBlock("Situational", customItems.situational || []),
      itemBlock("Vision", ["Control Ward", "Stealth Ward", "Farsight Alteration", "Oracle Lens"]),
    ].filter((b) => b.items.length > 0);
    return {
      title: `FRGE.GG — ${who} ${roleName} (forged)`,
      type: "custom", map: "any", mode: "any", sortrank: 1, startedFrom: "blank",
      associatedMaps: [11, 12], associatedChampions: key ? [key] : [], blocks,
      notes: { start: null, foe: null, traits: [], swaps: [], plan: null },
    };
  }

  const core = String(roleData.corePath || "").split("›").map((s) => s.trim()).filter(Boolean);
  const boots = core.find((n) => BOOTS_LOWER.has(n.toLowerCase()));
  const coreNoBoots = core.filter((n) => n !== boots);
  const firstCore = coreNoBoots[0] || core[0];
  const firstBack = firstCore ? FIRST_BACK[firstCore] : null;
  const prof = PROFILE[profileOf(champDd, coreNoBoots)];
  const start = startFor(champDd, roleName, prof);
  const situational = roleData.sideItems || [];
  // The class page's list for the current mode (it used to be the Ahead list
  // whatever the switch said).
  const classList = (roleData.data?.[enemyClass]?.[mode] || []).map((e) => e?.name).filter(Boolean);

  // Jungle starts with a smite pet; support starts with the World Atlas quest
  // item and finishes into a support item — never a Doran's/laning start.
  const pet = roleName === "Jungle" ? petFor(champDd, roleData, null) : null;
  const isSupport = roleName === "Support" && !pet;
  const supFin = isSupport ? supportFinishers(coreNoBoots) : null;
  // Only meaningful for a laner; null when it would just repeat the standard start.
  const tailoredRaw = !pet && !isSupport ? laneStartFor(champDd, roleName, roleData, foe) : null;
  const tailored = tailoredRaw && tailoredRaw.item !== start ? tailoredRaw : null;
  // When the opponent WAS checked (Top, melee) and the usual start still holds,
  // the title still names them, so it never looks like it ignored who you are
  // laning against. Pantheon into Mordekaiser is the case: 88% of Emerald+ games
  // start Doran's Blade there.
  const startChecked = !pet && !isSupport && !!foe && roleName === "Top" && !isRanged(champDd);
  const standardTitle = startChecked && !tailored ? `Start vs ${foe.display}` : "Start";
  // A reason only when the start CHANGED for the opponent. "Your usual start
  // holds" was cut as noise (the user, 2026-10-21: "completely unnecessary").
  const startWhy = tailored ? tailored.label : null;
  const startBlocks = pet
    ? [
        // Pet (450g) + Health Potion (50g) = exactly the 500g start; Refillable
        // Potion (150g) would push it to 600g, which isn't affordable at level 1.
        itemBlock("Jungle pet", [pet, "Health Potion", "Stealth Ward"]),
        itemBlock("Other pets", ["Scorchclaw Pup", "Gustwalker Hatchling", "Mosstomper Seedling"].filter((p) => p !== pet)),
      ]
    : isSupport
    ? [
        // Support quest item (World Atlas → Runic Compass) + the finished support
        // items it upgrades into — recommended finisher first, then the rest.
        itemBlock("Start", ["World Atlas", "Health Potion", "Stealth Ward"]),
        itemBlock("Support item", supFin),
      ]
    : startChecked
    ? [
        // The opponent was checked, so there is ONE start, chosen for them: the
        // tailored one, or the usual one titled with the opponent. Offering
        // the generic alternatives next to it would undo the decision (the user's
        // call, 2026-10-21: "only one starter vs Morde, not 3").
        tailored
          ? itemBlock(`Start vs ${foe.display}`, [tailored.item, "Health Potion", "Stealth Ward"])
          : itemBlock(standardTitle, [start, "Health Potion", "Stealth Ward"]),
      ]
    : [
        // Nobody to plan against yet (or a lane the start logic does not judge):
        // each laning start as a complete buy, the standard first, then the swaps.
        itemBlock(standardTitle, [start, "Health Potion", "Stealth Ward"]),
        ...(start !== "Doran's Shield"
          ? [itemBlock("Start vs poke", ["Doran's Shield", "Health Potion", "Stealth Ward"])]
          : []),
        itemBlock("Start, tanky", ["Doran's Helm", "Health Potion", "Stealth Ward"]),
        ...(prof.greedy
          ? [itemBlock("Start, greedy", [prof.greedy, "Health Potion", "Stealth Ward"])]
          : []),
        ...(profileOf(champDd, coreNoBoots) === "AD_RANGED"
          ? [itemBlock("Start, on-hit", ["Doran's Bow", "Health Potion", "Stealth Ward"])]
          : []),
      ];

  // The one game plan (gamePlan.js): the core, the boots at this champion's own
  // timing, the answers to the lane opponent and to the enemy team, ordered by
  // phase for the Ahead / Even-Behind switch.
  const plan = gamePlan({ champ: { dd: champDd, display: who }, roleName, roleData, enemyClass, mode,
    foe, enemies: opts.enemies || [] });
  const timing = bootsTimingOf(champDd, roleName);
  // Tier-1 Boots on the first back only where most games buy them by 10
  // minutes (or finish them before item 1); elsewhere they come after item 1.
  const t1Boots = !timing.none && (timing.t1 || timing.first) ? "Boots" : null;
  const phaseBlocks = (plan?.phases || []).map((p) => itemBlock(p.title, p.items.map((e) => e.name)));
  const blocks = onceEach([
    ...startBlocks,
    // First back: ~900-1300g. The first core item's real building block, a
    // damage-type-appropriate filler (never a Long Sword on an AP champ), the
    // greedy stacking option where it applies, then boots and a ward.
    itemBlock("First back", isSupport
      ? [supFin[0], t1Boots, "Control Ward"]
      : [firstBack, prof.filler, prof.greedy, t1Boots, "Control Ward"]),
    ...phaseBlocks,
    ...(timing.none && !boots ? [] : [itemBlock("Other boots", [boots, ...BOOTS])]),
    itemBlock("Situational", [...(plan?.extra || []), ...classList, ...situational]),
    itemBlock("Vision", ["Control Ward", "Stealth Ward", "Farsight Alteration", "Oracle Lens"]),
  ]);

  const key = CHAMP_KEYS[champDd];
  return {
    // "FRGE.GG" must lead: main.cjs replaces earlier sets by that prefix.
    title: `FRGE.GG — ${who} ${roleName}${foe ? ` vs ${foe.display}` : ""}`,
    type: "custom",
    map: "any",
    mode: "any",
    sortrank: 1,
    startedFrom: "blank",
    associatedMaps: [11, 12],
    associatedChampions: key ? [key] : [],
    blocks,
    // For the app only, never sent: why the start was chosen, who it was
    // chosen against, their traits, which items the matchup swapped, and the
    // plan itself (each item tagged core / boots / lane / team) with any note
    // where lane and team disagree.
    notes: {
      start: startWhy || null,
      foe: foe ? foe.display : null,
      traits: (plan?.lane?.chips || []).map((c) => c.label),
      swaps: (plan?.phases || []).flatMap((p) => p.items).filter((e) => e.from).map((e) => ({ from: e.from, to: e.name })),
      plan: plan ? {
        mode,
        phases: plan.phases.map((p) => ({ key: p.key, title: p.title,
          items: p.items.map((e) => ({ name: e.name, tag: e.by || e.tag, from: e.from || null })) })),
        conflicts: plan.conflicts,
      } : null,
    },
  };
}

// ── Top-level: everything the export button needs for the current selection ──
//  altBuild (optional): a selected ALT_BUILDS entry — when present its corePath,
//  sideItems and runes override the role's primary build so the export matches
//  exactly what the UI is showing.
//  runesOverride (optional): the live, possibly user-edited rune page from the UI.
//  When present it wins over both the alt build and the data recommendation, so
//  the export is exactly the (editable) rune page the user sees — WYSIWYG import.
//  opts (optional): { mode, enemies } for the game plan, see buildItemSet.
export function buildExport(champ, roleName, enemyClass, altBuild = null, runesOverride = null, customItems = null, foe = null, opts = {}) {
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
  // Bans fall back to champ level, the same way the Recommended Ban tiles read them.
  const itemRole = { ...(roleData || {}), bans: roleData?.bans || champ.bans || [] };
  // notes are for the app; the client gets the item set without them.
  const { notes, ...itemSet } = buildItemSet(champ.dd, roleName, enemyClass, itemRole, customItems, foe, champ.display, opts);
  return {
    champion: champ.display,
    role: roleName,
    enemyClass,
    altLabel: altBuild ? altBuild.label : null,
    runePage: rune.page,
    runeValid: rune.valid,
    runeMissing: rune.missing,
    runeWrongTree: rune.wrongTree,
    itemSet,
    notes,
  };
}

export default buildExport;
