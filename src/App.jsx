import { useState, useEffect, useRef } from "react";
import { CHAMPS } from "./data/champs/index.js";
import { ITEM_RATIONALE } from "./data/itemRationale.js";
import { buildExport } from "./data/lcuExport.js";
import { CHAMP_KEYS } from "./data/lcuData.js";
import { classOf } from "./data/champClasses.js";
import { counterCategoryOf } from "./data/itemCounters.js";
import { spellsFor } from "./data/summonerSpells.js";

// ── Live champ-select lookup maps (LCU numeric championId ↔ app champ) ────────
const KEY_TO_DD = {};            // riot numeric key -> DDragon id
for (const [dd, key] of Object.entries(CHAMP_KEYS)) KEY_TO_DD[key] = dd;
const DD_TO_CHAMP = {};          // DDragon id -> CHAMPS entry
for (const c of CHAMPS) DD_TO_CHAMP[c.dd] = c;
const POS_ROLE = { top: "Top", jungle: "Jungle", middle: "Mid", bottom: "Bot", utility: "Support" };
const champByKey = (key) => DD_TO_CHAMP[KEY_TO_DD[key]] || null;

// Which locked enemy is most likely your lane opponent → returns its DDragon id.
function opponentDd(theirTeam, myPos, myRole) {
  const enemies = (theirTeam || []).filter((p) => p.championId > 0);
  if (!enemies.length) return null;
  if (myPos) {                                   // 1. exact enemy position, if provided
    const m = enemies.find((p) => p.assignedPosition && p.assignedPosition === myPos);
    if (m) return KEY_TO_DD[m.championId];
  }
  if (myRole) {                                  // 2. infer via roster lanes matching my role
    for (const p of enemies) {
      const c = champByKey(p.championId);
      const lanes = c ? (c.lanes || (c.roles ? Object.keys(c.roles) : [])) : [];
      if (lanes.includes(myRole)) return KEY_TO_DD[p.championId];
    }
  }
  return KEY_TO_DD[enemies[0].championId];        // 3. fallback: first locked enemy
}

// ─────────────────────────────────────────────────────────────────────────────
//  IMAGE HELPERS  (local paths — put PNGs in public/images/)
// ─────────────────────────────────────────────────────────────────────────────
const IMG      = "./images";
// Converts any display name to the Data Dragon filename format.
// Examples: "Vel'Koz" → "Velkoz",  "Dr. Mundo" → "DrMundo",
//           "Nunu & Willump" → "Nunu",  "Wukong" → "MonkeyKing"
const DD_OVERRIDES = {
  "Wukong":          "MonkeyKing",
  "Nunu & Willump":  "Nunu",
  "Jarvan IV":       "JarvanIV",
  "K'Sante":         "KSante",
  "Renata Glasc":    "Renata",
  "Aurelion Sol":    "AurelionSol",
  "Bel'Veth":        "Belveth",
  "Kog'Maw":         "KogMaw",
  "Cho'Gath":        "Chogath",
  "Kha'Zix":         "Khazix",
  "Kai'Sa":          "Kaisa",
  "Rek'Sai":         "RekSai",
  "LeBlanc":         "Leblanc",
  "Lee Sin":         "LeeSin",
  "Master Yi":       "MasterYi",
  "Miss Fortune":    "MissFortune",
  "Tahm Kench":      "TahmKench",
  "Twisted Fate":    "TwistedFate",
  "Dr. Mundo":       "DrMundo",
  "Vel'Koz":         "Velkoz",
  "Xin Zhao":        "XinZhao",

};

const toDD = (name) => {
  if (DD_OVERRIDES[name]) return DD_OVERRIDES[name];
  return name
    .replace(/'([A-Z])/g, (_, c) => c.toLowerCase()) // 'K → k  (Vel'Koz → Velkoz)
    .replace(/\./g,  "")   // remove dots  (Dr. → Dr)
    .replace(/ & .*/g, "") // drop & Willump etc
    .replace(/ /g,   "")   // remove spaces
    .replace(/'/g,   "");  // any leftover apostrophes
};

// ── Data Dragon base (populated by setup_ddragon.py) ─────────────────────────
const DD = "/ddragon";

// Champions — uses your existing toDD() key
const champImg = (name) => {
  const key = DD_OVERRIDES[name] || name
    .replace(/'([A-Z])/g, (_, c) => c.toLowerCase())
    .replace(/\./g,  "")
    .replace(/ & .*/g, "")
    .replace(/ /g,   "")
    .replace(/'/g,   "");
  return `${DD}/img/champion/${key}.png`;
};

// Items — resolved at runtime from item.json (numeric ID)
// itemMap is populated in useEffect below — keys lowercased so champion data
// doesn't break on DD casing quirks ("Blade of The Ruined King")
const itemImg = (name, itemMap) => {
  const id = itemMap?.[name?.toLowerCase()];
  return id ? `${DD}/img/item/${id}.png` : null;
};

// Runes — resolved at runtime from runesReforged.json (icon path)
// runeMap is populated in useEffect below — { "Conqueror": "perk-images/Styles/..." }
const runeImg = (name, runeMap) => {
  const path = runeMap?.[name];
  // all rune/perk images in DD are .png — use the icon path exactly as given
  return path ? `${DD}/img/${path}` : null;
};

// Summoner spells — resolved at runtime from summonerSpells.json (icon path)
// spellMap is { "Flash": "spell/SummonerFlash.png", ... }
const spellImg = (name, spellMap) => {
  const path = spellMap?.[name];
  return path ? `${DD}/img/${path}` : null;
};

// Stat shards — map display names to exact DD filenames
const SHARD_ICONS = {
  "Attack Speed":     "StatMods/StatModsAttackSpeedIcon.png",
  "Adaptive Force":   "StatMods/StatModsAdaptiveForceIcon.png",
  "Ability Haste":    "StatMods/StatModsCDRScalingIcon.png",
  "Move Speed":       "StatMods/StatModsMovementSpeedIcon.png",
  "Health":           "StatMods/StatModsHealthPlusIcon.png",
  "Health (scaling)": "StatMods/StatModsHealthScalingIcon.png",
  "Tenacity":         "StatMods/StatModsTenacityIcon.png",

};
const shardImg = (name) =>
  `${DD}/img/perk-images/${SHARD_ICONS[name] || "StatMods/StatModsAdaptiveForceIcon.png"}`;

// Role icons — not in DD, keep your own files
const ROLE_ICON_NAMES = {
  Top:     "position-top",
  Jungle:  "position-jungle",
  Mid:     "position-middle",
  Bot:     "position-bottom",
  Support: "position-utility",
};
const roleIcon = (role) =>
  `/images/roles/${ROLE_ICON_NAMES[role] || role.toLowerCase()}.svg`;


// ─────────────────────────────────────────────────────────────────────────────
//  ITEM ACCENT COLOURS  (fallback dot colour when image is missing)
// ─────────────────────────────────────────────────────────────────────────────
const IC = {
  "Eclipse":"#ffd700","Black Cleaver":"#e74c3c","Sundered Sky":"#ffe066",
  "Trinity Force":"#ff8c00","Spear of Shojin":"#ff9800",
  "Serylda's Grudge":"#f39c12","Lord Dominik's Regards":"#e67e22",
  "Sterak's Gage":"#1abc9c","Death's Dance":"#e91e63",
  "Plated Steelcaps":"#95a5a6","Mercury's Treads":"#3498db",
  "Maw of Malmortius":"#9b59b6","Banshee's Veil":"#673ab7",
  "Mortal Reminder":"#ff5722","Randuin's Omen":"#2ecc71",
  "Frozen Heart":"#00bcd4","Serpent's Fang":"#4caf50",
  "Youmuu's Ghostblade":"#607d8b","Nashor's Tooth":"#9cba00",
  "Liandry's Torment":"#ff6b35","Malignance":"#a855f7",
  "Shadowflame":"#ff4444","Rabadon's Deathcap":"#ff69b4",
  "Void Staff":"#9400d3","Morellonomicon":"#b22222",
  "Zhonya's Hourglass":"#daa520","Rylai's Crystal Scepter":"#4fc3f7",
  "Wit's End":"#40e0d0","Sorcerer's Shoes":"#7986cb",
  "Boots of Swiftness":"#80cbc4",
};
const ic = (n) => IC[n] || "#aaaaaa";

// ─────────────────────────────────────────────────────────────────────────────
//  ENEMY CLASSES
// ─────────────────────────────────────────────────────────────────────────────
const CLASSES = {
  JUGGERNAUT:  { label:"Juggernaut",  color:"#c0392b", glow:"#e74c3c", desc:"High HP, high damage, low mobility. Walks you down.", champions:["Darius","Garen","Sett","Mordekaiser","Nasus","Urgot","Illaoi","Dr. Mundo","Trundle","Sion","Yorick","Olaf","Warwick","Volibear","Aatrox"] },
  DIVER:       { label:"Diver",        color:"#d35400", glow:"#e67e22", desc:"Mobile fighters who mirror your aggression. Extended fights kill you.", champions:["Irelia","Camille","Renekton","Vi","Lee Sin","Hecarim","Jarvan IV","Briar","Rek'Sai","Diana","Wukong","Xin Zhao","Sylas","Elise","Nocturne","Riven", "Pantheon"] },
  ASSASSIN:    { label:"Assassin",    color:"#7d3c98", glow:"#9b59b6", desc:"One-shot from fog of war. Their burst window is your kill window.", champions:["Zed","Akali","Talon","Katarina","Kha'Zix","Fizz","Evelynn","Kassadin","LeBlanc","Ekko","Qiyana","Rengar","Naafiri","Shaco","Pyke"] },
  SKIRMISHER:  { label:"Skirmisher",  color:"#1a6b3c", glow:"#27ae60", desc:"Win extended fights. Survive your burst and they out-duel you.", champions:["Fiora","Jax","Yasuo","Yone","Tryndamere","Gwen","Master Yi","Kayn","Kled","Viego","Nilah","Lillia"] },
  BURST_MAGE:  { label:"Burst Mage",  color:"#1a5276", glow:"#2980b9", desc:"Single large combo from range. Often CC before you can react.", champions:["Syndra","Veigar","Orianna","Lissandra","Vex","Annie","Zoe","Aurora","Neeko","Ahri","Karma","Lux"] },
  BATTLEMAGE:  { label:"Battlemage",  color:"#0e6655", glow:"#1abc9c", desc:"Sustained AP DPS at medium range, often with significant healing.", champions:["Vladimir","Ryze","Cassiopeia","Swain","Viktor","Karthus","Brand","Malzahar","Azir","Rumble","Taliyah","Aurelion Sol"] },
  ARTILLERY:   { label:"Artillery",   color:"#4a235a", glow:"#8e44ad", desc:"Long-range poke outside your engage range. Whittle you down first.", champions:["Xerath","Vel'Koz","Ziggs","Heimerdinger","Hwei","Mel","Jayce","Lux"] },
  MARKSMAN:    { label:"Marksman",    color:"#7b6d00", glow:"#f1c40f", desc:"Fragile but deal massive sustained DPS if left uncontested.", champions:["Jinx","Caitlyn","Jhin","Kai'Sa","Draven","Aphelios","Ashe","Kalista","Xayah","Lucian","Vayne","Zeri","Tristana","Samira","Miss Fortune","Ezreal","Sivir","Smolder"] },
  ENCHANTER:   { label:"Enchanter",   color:"#145a32", glow:"#2ecc71", desc:"Shields and heals negate your burst. Can knock you away mid-engage.", champions:["Janna","Lulu","Soraka","Yuumi","Nami","Sona","Milio","Karma","Taric","Renata Glasc","Seraphine"] },
  CATCHER:     { label:"Catcher",     color:"#2471a3", glow:"#3498db", desc:"CC chains remove your mobility. Hooks kill your dive pattern.", champions:["Thresh","Blitzcrank","Morgana","Nautilus","Skarner","Zac","Bard","Ivern","Zyra","Maokai","Varus","Lissandra"] },
  VANGUARD:    { label:"Vanguard",    color:"#2e4053", glow:"#5d6d7e", desc:"Engage tanks. Hard CC into team collapse.", champions:["Malphite","Leona","Nautilus","Maokai","Sejuani","Jarvan IV","Gragas","Amumu","Alistar","Ornn","Zac","Rammus","Volibear","Nunu & Willump"] },
  WARDEN:      { label:"Warden",      color:"#4d3319", glow:"#a04000", desc:"Block your damage for their carry. Shield generators and peel machines.", champions:["Braum","Shen","Tahm Kench","Poppy","Galio","K'Sante"] },
  SPECIALIST:  { label:"Specialist",  color:"#5f5f5f", glow:"#95a5a6", desc:"Wildly varied kits. Each plays by their own rules — read the matchup.", champions:["Teemo","Singed","Gangplank","Shyvana","Graves","Kayle","Kennen","Nidalee","Quinn","Twisted Fate","Udyr","Fiddlesticks","Gnar","Zilean"] },
};


// ─────────────────────────────────────────────────────────────────────────────
//  RUNE TREES  — full layout for every path (patch 26.9)
// ─────────────────────────────────────────────────────────────────────────────
const RUNE_TREES = {
  Precision: {
    color: "#D4AF37", label: "Precision", abbr: "P",
    keystones: ["Conqueror","Lethal Tempo","Press the Attack","Fleet Footwork"],
    rows: [
      ["Absorb Life","Triumph","Presence of Mind"],          // Overheal → Absorb Life
      ["Legend: Alacrity","Legend: Haste","Legend: Bloodline"], // Tenacity → Bloodline
      ["Coup de Grace","Cut Down","Last Stand"],
    ],
  },
  Domination: {
    color: "#c0392b", label: "Domination", abbr: "D",
    keystones: ["Electrocute","Dark Harvest","Predator","Hail of Blades"],
    rows: [
      ["Cheap Shot","Taste of Blood","Sudden Impact"],
      ["Sixth Sense","Grisly Mementos","Deep Ward"],         // all 3 renamed
      ["Treasure Hunter","Relentless Hunter","Ultimate Hunter"],
    ],
  },
  Sorcery: {
    color: "#9b59b6", label: "Sorcery", abbr: "S",
    keystones: ["Summon Aery","Arcane Comet","Deathfire Touch","Stormraider's Surge"],
    rows: [
      ["Manaflow Band","Nimbus Cloak","Axiom Arcanist"],
      ["Transcendence","Celerity","Absolute Focus"],
      ["Scorch","Waterwalking","Gathering Storm"],
    ],
  },
  Resolve: {
    color: "#27ae60", label: "Resolve", abbr: "R",
    keystones: ["Grasp of the Undying","Aftershock","Guardian"],
    rows: [
      ["Demolish","Font of Life","Shield Bash"],
      ["Conditioning","Second Wind","Bone Plating"],
      ["Overgrowth","Revitalize","Unflinching"],
    ],
  },
  Inspiration: {
    color: "#3498db", label: "Inspiration", abbr: "I",
    keystones: ["Glacial Augment","First Strike","Unsealed Spellbook"],
    rows: [
      ["Hextech Flashtraption","Magical Footwear","Cash Back"],
      ["Triple Tonic","Time Warp Tonic","Biscuit Delivery"],
      ["Cosmic Insight","Approach Velocity","Jack Of All Trades"],
    ],
  },
};

    // ─────────────────────────────────────────────────────────────────────────────
    //  STAT SHARDS
    // ─────────────────────────────────────────────────────────────────────────────
   const STAT_SHARDS = [
  { label:"Offense", options:["Attack Speed","Adaptive Force","Ability Haste"]  },
  { label:"Flex",    options:["Adaptive Force","Move Speed","Health"]           },
  { label:"Defense", options:["Health (scaling)","Tenacity","Health"]           },
];

const RUNE_DESCRIPTIONS = {
  // Keystones
  "Conqueror":           "Gain stacks of Adaptive Force on hitting champions. At 6 stacks, gain bonus Omnivamp (9% melee / 5% ranged).",
  "Press the Attack":    "3 consecutive hits on a champion deal bonus damage and make them take 8% increased damage for 6s.",
  "Lethal Tempo":        "Gain bonus attack speed, stacking up to 6 times. At max stacks, exceed the attack speed cap.",
  "Fleet Footwork":      "Energised attacks heal you and grant a burst of movement speed.",
  "Electrocute":         "Hitting a champion with 3 separate attacks or abilities deals bonus adaptive damage.",
  "Dark Harvest":        "Dealing damage to a champion below 50% HP harvests their soul, increasing Dark Harvest's damage permanently.",
  "Predator":            "Upgrade your boots to grant a powerful dash towards enemies, dealing damage on impact.",
  "Hail of Blades":      "Gain massively increased attack speed on the first 3 attacks against champions.",
  "Summon Aery":         "Your attacks and abilities send Aery to damage enemies or shield allies.",
  "Arcane Comet":        "Damaging a champion calls down Arcane Comet at their location.",
  "Deathfire Touch":     "Abilities deal a burn of 4-12 + 8% bonus AD + 3% AP per second, doubling after 3s.",
  "Stormraider's Surge": "Dealing 25% of a champion's max HP within 3s grants move speed and slow resistance.",
  "Grasp of the Undying":"Every 4s in combat, your next attack on a champion deals bonus damage, heals you, and grows your HP permanently.",
  "Aftershock":          "Immobilising a champion grants you bonus resistances and then detonates for AoE damage.",
  "Guardian":            "Protect nearby allied champions with a damage-absorbing shield when they take damage.",
  "Glacial Augment":     "Slowing enemies with CC creates icy zones that slow and reduce their damage.",
  "First Strike":        "Entering combat before enemies grants bonus gold and damage on first strike.",
  "Unsealed Spellbook":  "Swap Summoner Spells while out of combat. Each unique swap improves your Summoner Spells permanently.",
  // Precision row 1
  "Absorb Life":         "Killing units restores a small amount of HP. Heal amount increases with level.",
  "Triumph":             "Takedowns restore 8% missing HP and grant an additional 20 gold.",
  "Presence of Mind":    "Damaging an enemy champion restores mana/energy. Takedowns fully restore it.",
  // Precision row 2
  "Legend: Alacrity":    "Gain bonus attack speed (up to 18%) as you earn Legend stacks from kills and objectives.",
  "Legend: Haste":       "Gain bonus ability haste (up to 20) as you earn Legend stacks.",
  "Legend: Bloodline":   "Gain bonus omnivamp (up to 8%) as you earn Legend stacks.",
  // Precision row 3
  "Coup de Grace":       "Deal 8% more damage to champions below 40% HP.",
  "Cut Down":            "Deal 5–15% more damage to champions with more max HP than you.",
  "Last Stand":          "Deal 5–11% more damage to champions while you are below 60% HP.",
  // Domination row 1
  "Cheap Shot":          "Damaging champions with impaired movement deals 10–45 bonus true damage (level-scaling). 4s CD.",
  "Taste of Blood":      "Heal when you damage an enemy champion. 20s CD.",
  "Sudden Impact":       "Gain magic penetration and lethality after using a dash, leap, blink, or leaving stealth.",
  // Domination row 2
  "Sixth Sense":         "Gain vision of nearby wards periodically. Earn stacks for warding and vision assists.",
  "Grisly Mementos":     "Collect eyeballs from kills and assists. Each eyeball grants Adaptive Force permanently.",
  "Deep Ward":           "Gain ward-placing charges. Place wards to earn stacks that reduce future ward CDs.",
  // Domination row 3
  "Treasure Hunter":     "Earn bonus gold on the next takedown after purchasing a Bounty Hunter stack (unique champs).",
  "Relentless Hunter":   "Earn unique kills for increasing out-of-combat movement speed (up to +45).",
  "Ultimate Hunter":     "Earn stacks for unique kills, reducing your Ultimate CD by up to 20%.",
  // Sorcery row 1
  "Manaflow Band":       "Hitting a champion with an ability permanently increases your max mana by 25 (up to 250).",
  "Nimbus Cloak":        "Using a Summoner Spell grants a brief burst of move speed based on the spell's CD.",
  "Axiom Arcanist":      "Gain bonus Ability Power. Your Ultimate deals bonus damage on the first target.",
  // Sorcery row 2
  "Transcendence":       "Gain 5 Ability Haste at level 5 and 8. On champion takedown, reduce non-Ultimate CDs by 20%.",
  "Celerity":            "Gain 1% move speed. All move speed bonuses are 7% more effective on you.",
  "Absolute Focus":      "While above 70% HP, gain bonus Adaptive Force.",
  // Sorcery row 3
  "Scorch":              "Your first ability hit on a champion every 10s burns them for 20–39 bonus magic damage.",
  "Waterwalking":        "Gain movement speed and Adaptive Force while in the river.",
  "Gathering Storm":     "Every 10 minutes, gain increasing amounts of Adaptive Force.",
  // Resolve row 1
  "Demolish":            "Charge up a powerful hit against towers while near them. Deals bonus HP-scaling damage.",
  "Font of Life":        "Impairing an enemy champion marks them. Allies who attack marked targets heal.",
  "Shield Bash":         "While shielded, gain bonus Armor and MR. Attacks deal bonus damage equal to a portion of your shield.",
  // Resolve row 2
  "Conditioning":        "After 12 minutes, gain +8 Armor and MR. These are increased by 4% for each other Armor/MR source.",
  "Second Wind":         "After taking damage from a champion, regenerate 6 HP + 4% of your missing HP over 10s.",
  "Bone Plating":        "After taking damage from a champion, the next 3 hits deal 30–60 less damage. 45s CD.",
  // Resolve row 3
  "Overgrowth":          "Gain permanent HP for every 8 nearby enemy units that die. At 120 stacks, gain 3.5% max HP.",
  "Revitalize":          "Outgoing heals and shields are 5% stronger. If the target is below 40% HP, increase to 10%.",
  "Unflinching":         "Gain 10–25 bonus Tenacity and Slow Resistance based on missing HP.",
  // Inspiration row 1
  "Hextech Flashtraption":"While Flash is on cooldown, replace it with Hexflash (20s CD). Hexflash can be used while in CC.",
  "Magical Footwear":    "Receive free Slightly Magical Boots at 12 minutes (−30s per takedown). Cannot buy boots before.",
  "Cash Back":           "Receive a portion of gold back when you purchase a Legendary item.",
  // Inspiration row 2
  "Triple Tonic":        "Potions provide additional benefits. Your first potion restores more HP.",
  "Time Warp Tonic":     "Potions and elixirs take effect instantly for part of their value.",
  "Biscuit Delivery":    "Receive a Total Biscuit of Everlasting Will at 2, 4 and 6 minutes. Grants max mana permanently on use.",
  // Inspiration row 3
  "Cosmic Insight":      "Gain +15 Summoner Spell Haste and +10 Item Haste.",
  "Approach Velocity":   "Gain bonus movement speed toward immobilised enemy champions or allies below 30% HP.",
  "Jack Of All Trades":  "Gain stacks of Adaptive Force for each different stat from items. At 10 stacks, gain bonus Haste.",
  // Stat shards
  "Attack Speed":        "+10% Attack Speed.",
  "Adaptive Force":      "+9 Adaptive Force (5.4 AD or 9 AP).",
  "Ability Haste":       "+8 Ability Haste.",
  "Move Speed":          "+8 Movement Speed (flat).",
  "Health":              "+65 Health (flat).",
  "Health (scaling)":    "+10–180 HP (based on level).",
  "Tenacity":            "+10% Tenacity and Slow Resistance.",
};

    // Helper — merges a champ override with the default page
    const mergeRunePage = (defaults, override = {}) => ({
      ...defaults,
      ...override,
      // these arrays need explicit override if specified, otherwise keep default
      primaryRunes:   override.primaryRunes   || defaults.primaryRunes,
      secondaryRunes: override.secondaryRunes || defaults.secondaryRunes,
      shards:         override.shards         || defaults.shards,
    });
 

// Ensure lanes always reflects reality for role-based champions.
// This means you only need to update `roles` — lanes stays in sync automatically.
CHAMPS.forEach(c => {
  if (c.roles) {
    c.lanes = Object.keys(c.roles);
  }
});


// ─────────────────────────────────────────────────────────────────────────────
//  LANE CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const LANES = [
  { key:"Top",     label:"Top",     emoji:"🏰" },
  { key:"Jungle",  label:"Jungle",  emoji:"🌲" },
  { key:"Mid",     label:"Mid",     emoji:"🔮" },
  { key:"Bot",     label:"Bot",     emoji:"🏹" },
  { key:"Support", label:"Support", emoji:"💚" },
];


// ─────────────────────────────────────────────────────────────────────────────
//  APP
// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  const [champ,        setChamp]        = useState(CHAMPS[0]);
  const [activeRole,   setActiveRole]   = useState(null); 
  const [openClass,    setOpenClass]    = useState(null);
  const [mode,         setMode]         = useState("behind");
  const [imgErr,       setImgErr]       = useState({});
  const [showCore,     setShowCore]     = useState(false);
  const [altBuildIdx,  setAltBuildIdx]  = useState(-1); // -1 = primary build; 0+ = ALT_BUILDS index
  // Track window width so the items|runes workspace can stack to one column on
  // narrow/half-screen windows (side-by-side squeezes the fixed-size rune page).
  const [winW, setWinW] = useState(typeof window !== "undefined" ? window.innerWidth : 1440);
  useEffect(() => {
    const onResize = () => setWinW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const narrowWorkspace = winW < 1080;
  // Lane selector state: null = show lane buttons, string = show champs for that lane
  const [showPicker,      setShowPicker]      = useState(false);
  const [champSearch,     setChampSearch]     = useState("");
  const [champRoleFilter, setChampRoleFilter] = useState("All");
  // Resolve which role/lane is currently active for this champion
  const currentRole = (activeRole && champ.roles?.[activeRole])
    ? activeRole
    : champ.lanes?.[0];

    const [itemMap, setItemMap] = useState({});   // displayName → numeric id string
    const [runeMap, setRuneMap] = useState({});   // runeName    → icon path string
    const [spellMap, setSpellMap] = useState({}); // spellName   → icon path string

useEffect(() => {
  // Load item name → ID map
  fetch("/ddragon/data/item.json")
    .then(r => r.json())
    .then(json => {
      const map = {};
      Object.values(json.data).forEach(item => {
        // item.image is "3071.png" — strip extension for the id
        // keep the first (lowest-id = base) item when Ornn Masterwork
        // upgrades share the same name
        const key = item.name.toLowerCase();
        if (!(key in map)) map[key] = item.image.replace(".png", "");
      });
      setItemMap(map);
    })
    .catch(e => console.warn("item.json failed to load", e));

  // Load rune name → icon path map
  fetch("/ddragon/data/runesReforged.json")
    .then(r => r.json())
    .then(json => {
      // runesReforged.json is already a flat { name: iconPath } object
      // from our setup script — just use it directly
      setRuneMap(json);
    })
    .catch(e => console.warn("runesReforged.json failed to load", e));

  // Load summoner-spell name → icon path map (flat { name: iconPath })
  fetch("/ddragon/data/summonerSpells.json")
    .then(r => r.json())
    .then(setSpellMap)
    .catch(e => console.warn("summonerSpells.json failed to load", e));
}, []);

  // If the champion has a roles object (Pantheon), read from that.
  // Otherwise (Teemo, Renekton) fall back to the champion object itself.
  const activeChampRole = champ.roles
    ? (champ.roles[currentRole] || champ.roles[champ.lanes[0]])
    : champ;

  // Recommended summoner spells for the active champion/role
  const buildSpells = spellsFor(champ.dd, currentRole);

  // ── Alternate / off-meta build overlay ──────────────────────────────────────
  const altList = champ.altBuilds?.[currentRole] || [];
  useEffect(() => { setAltBuildIdx(-1); }, [champ.id, currentRole]);
  const activeAlt = altBuildIdx >= 0 ? altList[altBuildIdx] : null;
  const buildCorePath  = activeAlt ? activeAlt.corePath  : activeChampRole.corePath;
  const buildCoreNote  = activeAlt ? activeAlt.coreNote  : activeChampRole.coreNote;
  const buildSideItems = activeAlt ? activeAlt.sideItems : activeChampRole.sideItems;

  // ── Live rune page (lifted out of RunePage so it's the single source of truth
  //    for BOTH the always-visible editable page AND what gets imported) ────────
  // The recommended page for the current champ/role/class (or alt build); falls
  // back to the role's first-class page when no enemy class is picked yet.
  const recommendedRunes = activeAlt
    ? activeAlt.runes
    : (activeChampRole.data?.[openClass]?.runes
       ?? Object.values(activeChampRole.data || {})[0]?.runes
       ?? null);
  const EMPTY_RUNES = { primary: "Precision", keystone: "", primaryRunes: [null, null, null],
    secondary: "", secondaryRunes: [], shards: [null, null, null] };
  const [runeSel, setRuneSel] = useState(EMPTY_RUNES);
  // Reset the editable page to the recommendation whenever the matchup changes.
  useEffect(() => {
    const r = recommendedRunes;
    setRuneSel(r ? {
      primary:        r.primary || "Precision",
      keystone:       r.keystone || "",
      primaryRunes:   r.primaryRunes   ? [...r.primaryRunes]   : [null, null, null],
      secondary:      r.secondary || "",
      secondaryRunes: r.secondaryRunes ? [...r.secondaryRunes] : [],
      shards:         r.shards         ? [...r.shards]         : [null, null, null],
    } : EMPTY_RUNES);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [champ.id, currentRole, openClass, altBuildIdx]);

  // ── Desktop-only: apply the current rune page + item set to a running client ─
  const isDesktop = typeof window !== "undefined" && window.frge?.isDesktop;
  const [applyState, setApplyState] = useState(null); // null | "sending" | {ok,msg}
  const sendToLeague = async () => {
    if (!isDesktop || applyState === "sending") return;
    setApplyState("sending");
    try {
      const payload = buildExport(champ, currentRole, openClass, activeAlt, runeSel);
      const res = await window.frge.applyBuild({
        runePage: payload.runePage,
        itemSet: payload.itemSet,
      });
      if (res?.ok) {
        const items = res.itemStatus != null && res.itemStatus < 300;
        setApplyState({ ok: true, msg: items ? "Runes + items imported" : "Runes imported" });
      } else {
        setApplyState({ ok: false, msg: res?.error || `Failed (rune ${res?.runeStatus ?? "?"})` });
      }
    } catch (e) {
      setApplyState({ ok: false, msg: e.message });
    }
    setTimeout(() => setApplyState((s) => (s === "sending" ? s : null)), 4000);
  };
  useEffect(() => { setApplyState(null); }, [champ.id, currentRole, openClass, altBuildIdx]);

  // ── Live champ-select sync (desktop) ────────────────────────────────────────
  const [csState, setCsState]   = useState(null);   // last session summary from main
  const [csSync,  setCsSync]    = useState(true);    // auto-follow hovered/locked champ
  const [preHoverOn, setPreHoverOn] = useState(true); // auto-hover the selected champ, ON by default
  const [csMsg,   setCsMsg]     = useState(null);    // transient hover/status message
  // Refs so the mount-once champ-select subscription always sees current values.
  const csSyncRef = useRef(csSync);
  const preHoverOnRef = useRef(preHoverOn);
  const preHoverSentRef = useRef(false);   // hovered once this session
  const autoImportedRef = useRef(false);   // imported once this session
  const champRef = useRef(champ);
  const roleRef  = useRef(currentRole);
  const classRef = useRef(openClass);
  const altRef   = useRef(activeAlt);
  const runeSelRef = useRef(runeSel);
  useEffect(() => { csSyncRef.current = csSync; }, [csSync]);
  useEffect(() => { preHoverOnRef.current = preHoverOn; }, [preHoverOn]);
  useEffect(() => { champRef.current = champ; }, [champ]);
  useEffect(() => { roleRef.current = currentRole; }, [currentRole]);
  useEffect(() => { classRef.current = openClass; }, [openClass]);
  useEffect(() => { altRef.current = activeAlt; }, [activeAlt]);
  useEffect(() => { runeSelRef.current = runeSel; }, [runeSel]);
  useEffect(() => { if (!csMsg) return; const t = setTimeout(() => setCsMsg(null), 5000); return () => clearTimeout(t); }, [csMsg]);

  useEffect(() => {
    if (!isDesktop || !window.frge?.onChampSelect) return;
    const importCurrent = () => {
      const p = buildExport(champRef.current, roleRef.current, classRef.current, altRef.current, runeSelRef.current);
      return window.frge.applyBuild({ runePage: p.runePage, itemSet: p.itemSet });
    };
    const unsub = window.frge.onChampSelect((data) => {
      setCsState(data);
      if (!data || !data.active) {           // reset per-session guards
        preHoverSentRef.current = false;
        autoImportedRef.current = false;
        return;
      }

      // Pre-hover the selected champ once, while your pick is still empty,
      // then auto-import its build — unless the champ is banned.
      if (preHoverOnRef.current && !preHoverSentRef.current &&
          data.pickActionId != null && !data.pickCompleted &&
          !data.championId && !data.championPickIntent) {
        const key = CHAMP_KEYS[champRef.current.dd];
        if (key) {
          preHoverSentRef.current = true;
          if ((data.bannedChampionIds || []).includes(key)) {
            setCsMsg(`${champRef.current.display} is banned — pre-hover skipped`);
          } else {
            window.frge.hoverChampion({ championId: key, actionId: data.pickActionId })
              .then((r) => {
                if (!r?.ok) { setCsMsg(`Hover failed: ${r?.error || "?"}`); return; }
                setCsMsg("Pre-hovered — importing build…");
                if (!autoImportedRef.current) {
                  autoImportedRef.current = true;
                  importCurrent()
                    .then((ir) => setCsMsg(ir?.ok ? "Pre-hovered + build imported" : `Import failed: ${ir?.error || "?"}`))
                    .catch((e) => setCsMsg(`Import failed: ${e.message}`));
                }
              })
              .catch((e) => setCsMsg(`Hover failed: ${e.message}`));
          }
        }
      }

      if (!csSyncRef.current) return;

      // Follow the champion you're hovering / have locked
      const myKey = data.championId || data.championPickIntent;
      const target = myKey ? champByKey(myKey) : null;
      if (target) {
        setChamp((prev) => (prev.id === target.id ? prev : target));
        const role = POS_ROLE[data.assignedPosition];
        const resolvedRole = role && (target.roles ? target.roles[role] : true)
          ? role
          : (target.roles ? Object.keys(target.roles)[0] : null);
        setActiveRole(resolvedRole);
        // Auto-match the lane opponent's class
        const oppDd = opponentDd(data.theirTeam, data.assignedPosition, resolvedRole);
        const oc = oppDd ? classOf(oppDd) : null;
        if (oc) setOpenClass(oc);
      }
    });
    return unsub;
  }, [isDesktop]);

  const onErr   = (k) => setImgErr(p => ({ ...p, [k]: true }));
  const imgFail = (k) => imgErr[k];
 
  const pickChamp = (c) => {
    setChamp(c);
    setActiveRole(c.roles ? Object.keys(c.roles)[0] : null);
    setOpenClass(null);
    setShowCore(false);
    setShowPicker(false);       // close the floating picker
    setChampSearch("");         // reset search
    setChampRoleFilter("All");  // reset filter
  };

  const classEntry = openClass ? CLASSES[openClass] : null;
  // Filter out the currently selected champion from the opponent list
  const classItems = openClass
  ? (activeChampRole.data?.[openClass]?.[mode]
     || champ.data?.[openClass]?.[mode]
     || [])
  : [];
  const classChamps = classEntry
    ? classEntry.champions.filter(c => c !== champ.display)
    : [];

  const coreArrow = buildCorePath.split("›").map(s => s.trim());

  // ── Colour helpers ────────────────────────────────────────────────────────
  const S = {                       // shared style tokens
    border:       "rgba(212,175,55,.2)",
    panelBg:      "rgba(27,27,30,.95)",
    textDim:      "#7a8288",
    gold:         "#D4AF37",
    goldDim:      "#a1852a",
    orange:       "#F97316",        // primary energy accent — CTAs, hero glow
  };


  // ── Reusable: portrait chip ───────────────────────────────────────────────
  const ChampChip = ({ name, size = 56 }) => {
    const ek = `chip-${name}`;
    return (
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"5px" }}>
        <div style={{
          width:size, height:size, borderRadius:"8px", overflow:"hidden",
          border:`1.5px solid rgba(255,255,255,.14)`,
          background:"#2A2F38",
        }}>
          {!imgFail(ek)
            ? <img src={champImg(name)} alt={name} onError={() => onErr(ek)}
                style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
            : <div style={{ width:"100%", height:"100%", display:"flex",
                alignItems:"center", justifyContent:"center",
                fontSize:size*0.35, color:"#5c6a7a" }}>{name[0]}</div>
          }
        </div>
        <span style={{
          fontSize:"11px", color:"#D4AF37", textAlign:"center",
          maxWidth:size+10, lineHeight:1.2,
          overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap",
        }}>{name}</span>
      </div>
    );
  };

  // ── Reusable: item card ───────────────────────────────────────────────────
  const ItemCard = ({ item, rank, glow }) => {
    const col = ic(item.name);
    const ek  = `item-${item.name}`;
    const src = itemImg(item.name, itemMap);
    const rationale = ITEM_RATIONALE[item.name];
    return (
      <div className="frge-card" style={{
        background:"rgba(255,255,255,.04)",
        border:`1px solid rgba(255,255,255,.08)`,
        borderLeft:`4px solid ${col}`,
        borderRadius:"9px", padding:"12px 14px",
        display:"flex", gap:"14px", alignItems:"flex-start",
      }}>
        <div style={{
          width:"52px", height:"52px", flexShrink:0,
          borderRadius:"8px", overflow:"hidden",
          border:`1.5px solid ${col}55`, background:`${col}18`,
          display:"flex", alignItems:"center", justifyContent:"center",
          boxShadow:`0 0 10px ${col}30`,
        }}>
          {src && !imgFail(ek)
            ? <img src={src} alt={item.name} onError={() => onErr(ek)}
                style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
            : <div style={{ width:"12px", height:"12px", borderRadius:"50%",
                background:col, boxShadow:`0 0 8px ${col}` }} />
          }
        </div>
        <div style={{ flex:1 }}>
          <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"4px" }}>
            <span style={{ fontWeight:"bold", fontSize:"14px", color:col }}>{item.name}</span>
            <span style={{
              fontSize:"10px", color:glow, marginLeft:"auto", flexShrink:0,
              background:`${glow}14`, border:`1px solid ${glow}30`,
              borderRadius:"4px", padding:"2px 6px", letterSpacing:"1px",
            }}>#{rank}</span>
          </div>
          <p style={{ margin:0, fontSize:"12px", color:"#c7ccd1", lineHeight:1.6 }}>{item.why}</p>
          {rationale && (
            <p style={{
              margin:"6px 0 0", paddingTop:"6px",
              borderTop:"1px solid rgba(255,255,255,.06)",
              fontSize:"11px", color:"rgba(200,204,209,.5)",
              lineHeight:1.5, fontStyle:"italic",
            }}>{rationale}</p>
          )}
        </div>
      </div>
    );
  };

 // Controlled: the selection (`sel`) and its setter live in App, so this page is
 // always the single source of truth for what gets imported (WYSIWYG), and its
 // state survives App re-renders (e.g. the 1.5s champ-select poll) instead of
 // resetting. `recommended` drives the gold "recommended" dots.
 const RunePage = ({ sel, setSel, recommended, enemyChamp }) => {
  const primTree = sel.primary;
  const keystone = sel.keystone;
  const primRows = sel.primaryRunes;
  const secTree  = sel.secondary;
  const secRunes = sel.secondaryRunes;
  const shards   = sel.shards;
  const override = recommended?.champOverrides?.[enemyChamp] || null;
  const [tooltip, setTooltip] = useState(null);

  const ALL_TREES = Object.keys(RUNE_TREES);

  // Recommended picks stay marked (gold dot) even after the user deviates —
  // rune names are unique across trees so one flat set covers both columns.
  const recSet = new Set(recommended
    ? [recommended.keystone,
       ...(recommended.primaryRunes   || []),
       ...(recommended.secondaryRunes || [])]
    : []);
  const recDotStyle = {
    position: "absolute", top: -2, right: -2, width: 9, height: 9,
    borderRadius: "50%", background: "#D4AF37",
    border: "1.5px solid #161618",
    boxShadow: "0 0 6px rgba(212,175,55,.9)", zIndex: 3,
    pointerEvents: "none",
  };

  // ── Handlers (all operate on the lifted `sel` via setSel) ──────────────────
  // In-game behavior: clicking the other page's tree swaps primary ↔ secondary.
  // Old secondary picks slot into the new primary rows; the first two old
  // primary picks carry over as the new secondary pair. Keystone must be
  // re-picked, like the client.
  const swap = (s) => {
    if (!s.secondary) return s;
    const newPrim = s.secondary;
    return {
      ...s,
      primary: newPrim,
      secondary: s.primary,
      primaryRunes: RUNE_TREES[newPrim].rows.map(row => s.secondaryRunes.find(r => row.includes(r)) || null),
      secondaryRunes: s.primaryRunes.filter(Boolean).slice(0, 2),
      keystone: "",
    };
  };
  const swapTrees = () => setSel(swap);

  const pickPrimTree = (name) => setSel(s =>
    name === s.primary ? s
    : name === s.secondary ? swap(s)
    : { ...s, primary: name, keystone: "", primaryRunes: [null, null, null] });

  const pickSecTree = (name) => setSel(s =>
    name === s.primary ? swap(s)
    : name === s.secondary ? { ...s, secondary: "", secondaryRunes: [] }
    : { ...s, secondary: name, secondaryRunes: [] });

  const pickKeystone = (name) => setSel(s => ({ ...s, keystone: s.keystone === name ? "" : name }));

  const pickPrimRune = (rowIdx, name) => setSel(s => {
    const next = [...s.primaryRunes];
    next[rowIdx] = next[rowIdx] === name ? null : name;
    return { ...s, primaryRunes: next };
  });

  const pickSecRune = (name, rowIdx) => setSel(s => {
    if (s.secondaryRunes.includes(name)) return { ...s, secondaryRunes: s.secondaryRunes.filter(r => r !== name) };
    const rowRunes   = RUNE_TREES[s.secondary]?.rows[rowIdx] || [];
    const withoutRow = s.secondaryRunes.filter(r => !rowRunes.includes(r));
    // page full → deselect the last-picked rune and take the new one
    const nextSec = withoutRow.length >= 2 ? [withoutRow[0], name] : [...withoutRow, name];
    return { ...s, secondaryRunes: nextSec };
  });

  const pickShard = (rowIdx, name) => setSel(s => {
    const n = [...s.shards]; n[rowIdx] = name; return { ...s, shards: n };
  });

  const tip     = (name, e) => setTooltip({ name, x: e.clientX, y: e.clientY });
  const moveTip = (name, e) => setTooltip(t => t ? { ...t, x: e.clientX, y: e.clientY } : null);

  // ── Rune circle ───────────────────────────────────────────────────────────
  const Rune = ({ name, size = 42, isKeystone = false, selected, treeColor,
                  locked = false, onClick }) => {
    const ek    = `rune-${name.replace(/[^a-zA-Z0-9]/g, "")}`;
    const src   = runeImg(name, runeMap);
    const dim   = !selected || locked;
    const isRec = recSet.has(name);
    return (
      <div
        key={name}
        onClick={!locked ? onClick : undefined}
        onMouseEnter={e  => tip(name, e)}
        onMouseMove={e   => moveTip(name, e)}
        onMouseLeave={()  => setTooltip(null)}
        style={{
          width: size, height: size, borderRadius: "50%",
          position: "relative", flexShrink: 0,
          cursor: locked ? "not-allowed" : "pointer",
          transition: "all .18s ease",
          transform: tooltip?.name === name && selected ? "scale(1.12)" : "scale(1)",
        }}
      >
        {/* Glow ring */}
        <div style={{
          position: "absolute", inset: selected && !locked ? -3 : -1,
          borderRadius: "50%",
          border: selected && !locked
            ? `2px solid ${treeColor}`
            : "1px solid rgba(255,255,255,.10)",
          boxShadow: selected && !locked
            ? `0 0 12px ${treeColor}80, 0 0 24px ${treeColor}30`
            : "none",
          transition: "all .18s", zIndex: 1,
        }} />
        {/* Image */}
        <div style={{
          width: "100%", height: "100%", borderRadius: "50%",
          overflow: "hidden", background: "rgba(0,0,0,.5)",
          opacity: dim ? (locked ? 0.08 : 0.22) : 1,
          transition: "opacity .18s",
          display: "flex", alignItems: "center", justifyContent: "center",
          filter: dim ? "grayscale(100%)" : "none",
        }}>
          {src && !imgFail(ek)
            ? <img src={src} alt={name} onError={() => onErr(ek)}
                style={{ width: "78%", height: "78%", objectFit: "contain", display: "block" }} />
            : <span style={{
                fontSize: isKeystone ? 11 : 9, fontWeight: "bold",
                textAlign: "center", padding: "2px", lineHeight: 1.1,
                color: selected && !locked ? treeColor : "#444",
              }}>
                {name.replace(/['\u2019]/g, "").split(" ").map(w => w[0]).join("").slice(0, 3).toUpperCase()}
              </span>
          }
        </div>
        {/* Recommended marker \u2014 visible regardless of selection state */}
        {isRec && <div style={recDotStyle} />}
      </div>
    );
  };

  // ── Tree icon row ─────────────────────────────────────────────────────────
  // "blocked" is the tree held by the other page — clicking it swaps the pages,
  // so it stays clickable, just visually parked.
  const TreeSelector = ({ active, blocked, onPick, label, recTree }) => (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: "8px", letterSpacing: "2px",
        color: "rgba(255,255,255,.22)", textTransform: "uppercase", marginBottom: 6 }}>
        {label}
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        {ALL_TREES.map(t => {
          const isActive  = t === active;
          const isBlocked = t === blocked;
          const isRec     = t === recTree;
          const meta      = RUNE_TREES[t];
          const src       = runeImg(t, runeMap);
          const ek        = `tree-${t}`;
          return (
            <div key={t} style={{ position: "relative", flexShrink: 0 }}
              title={isBlocked ? "Click to swap primary ↔ secondary" : t}>
              <div
                onClick={() => onPick(t)}
                onMouseEnter={e  => tip(t, e)}
                onMouseLeave={()  => setTooltip(null)}
                style={{
                  width: 36, height: 36, borderRadius: "50%", overflow: "hidden",
                  border: isActive
                    ? `2px solid ${meta.color}`
                    : "1.5px solid rgba(255,255,255,.12)",
                  background: isActive ? `${meta.color}20` : "rgba(0,0,0,.4)",
                  boxShadow: isActive ? `0 0 14px ${meta.color}70` : "none",
                  opacity: isBlocked ? 0.35 : 1,
                  cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all .15s",
                  filter: !isActive && !isBlocked
                    ? "grayscale(60%) brightness(0.65)" : "none",
                }}
              >
                {src && !imgFail(ek)
                  ? <img src={src} alt={t} onError={() => onErr(ek)}
                      style={{ width: "80%", height: "80%", objectFit: "contain" }} />
                  : <span style={{ fontSize: 9, fontWeight: "bold",
                      color: isActive ? meta.color : "#555" }}>{meta.abbr}</span>
                }
              </div>
              {isRec && <div style={recDotStyle} />}
            </div>
          );
        })}
      </div>
    </div>
  );

  // ── Primary column ────────────────────────────────────────────────────────
  const primMeta = RUNE_TREES[primTree];

  const PrimaryColumn = () => (
    <div style={{ flex: 1, minWidth: 0 }}>
      <TreeSelector active={primTree} blocked={secTree}
        onPick={pickPrimTree} label="Primary Path" recTree={recommended?.primary} />

      <div style={{ display: "flex", alignItems: "center", gap: 8,
        marginBottom: 10, paddingBottom: 8,
        borderBottom: `1px solid ${primMeta.color}40` }}>
        <span style={{ fontSize: 13, fontWeight: "bold",
          color: primMeta.color, letterSpacing: ".5px" }}>{primTree}</span>
        <span style={{ marginLeft: "auto", fontSize: 9, letterSpacing: "2px",
          color: "rgba(255,255,255,.35)", fontWeight: 600 }}>PRIMARY</span>
      </div>

      {/* Keystones */}
      <div style={{ fontSize: "8px", letterSpacing: "2px",
        color: "rgba(255,255,255,.22)", textTransform: "uppercase",
        textAlign: "center", marginBottom: 6 }}>Keystone</div>
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 14 }}>
        {primMeta.keystones.map(k => Rune({
          name: k, size: 54, isKeystone: true,
          selected: keystone === k, treeColor: primMeta.color,
          onClick: () => pickKeystone(k),
        }))}
      </div>
      <div style={{ height: 1, background: "rgba(255,255,255,.07)", margin: "0 0 12px" }} />

      {/* Minor rows */}
      {primMeta.rows.map((row, ri) => (
        <div key={ri} style={{ marginBottom: 10 }}>
          <div style={{ fontSize: "7px", letterSpacing: "1.5px",
            color: "rgba(255,255,255,.16)", textTransform: "uppercase",
            textAlign: "center", marginBottom: 4 }}>Row {ri + 1}</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
            {row.map(r => Rune({
              name: r, size: 40,
              selected: primRows[ri] === r, treeColor: primMeta.color,
              onClick: () => pickPrimRune(ri, r),
            }))}
          </div>
        </div>
      ))}
    </div>
  );

  // ── Secondary column ──────────────────────────────────────────────────────
  const secMeta = secTree ? RUNE_TREES[secTree] : null;

  const SecondaryColumn = () => (
    <div style={{ flex: 1, minWidth: 0 }}>
      <TreeSelector active={secTree} blocked={primTree}
        onPick={pickSecTree} label="Secondary Path" recTree={recommended?.secondary} />

      {secMeta ? (
        <>
          <div style={{ display: "flex", alignItems: "center", gap: 8,
            marginBottom: 10, paddingBottom: 8,
            borderBottom: `1px solid ${secMeta.color}40` }}>
            <span style={{ fontSize: 13, fontWeight: "bold",
              color: secMeta.color, letterSpacing: ".5px" }}>{secTree}</span>
            <span style={{ marginLeft: "auto", fontSize: 9, letterSpacing: "2px",
              color: "rgba(255,255,255,.35)", fontWeight: 600 }}>SECONDARY</span>
            <span style={{
              fontSize: "8px", padding: "2px 6px", borderRadius: 10,
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.10)",
              color: secRunes.length >= 2 ? secMeta.color : "rgba(255,255,255,.25)",
              letterSpacing: ".5px",
            }}>{secRunes.length}/2</span>
          </div>

          {secMeta.rows.map((row, ri) => {
            return (
              <div key={ri} style={{ marginBottom: 10 }}>
                <div style={{ fontSize: "7px", letterSpacing: "1.5px",
                  color: "rgba(255,255,255,.16)", textTransform: "uppercase",
                  textAlign: "center", marginBottom: 4 }}>Row {ri + 1}</div>
                <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
                  {row.map(r => Rune({
                    name: r, size: 40,
                    selected: secRunes.includes(r), treeColor: secMeta.color,
                    onClick: () => pickSecRune(r, ri),
                  }))}
                </div>
              </div>
            );
          })}
        </>
      ) : (
        /* No secondary selected */
        <div style={{ display: "flex", flexDirection: "column", gap: 20,
          padding: "30px 20px", alignItems: "center" }}>
          {[0, 1].map(i => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                border: "1.5px solid rgba(255,255,255,.22)",
                margin: "0 auto 6px",
              }} />
              <div style={{ fontSize: 10, color: "rgba(255,255,255,.25)",
                letterSpacing: ".5px", textTransform: "uppercase" }}>Secondary</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,.18)", marginTop: 2 }}>
                Select your secondary path above
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Stat shards — always visible */}
      <div style={{ marginTop: 16, paddingTop: 12,
        borderTop: "1px solid rgba(255,255,255,.06)" }}>
        <div style={{ fontSize: "9px", letterSpacing: "3px", color: S.goldDim,
          textTransform: "uppercase", marginBottom: 8 }}>Stat Shards</div>
        {STAT_SHARDS.map((row, ri) => (
          <div key={ri} style={{ display: "flex", alignItems: "center",
            gap: 8, marginBottom: 6 }}>
            <span style={{ fontSize: 9, color: S.textDim,
              width: 50, flexShrink: 0 }}>{row.label}</span>
            <div style={{ display: "flex", gap: 6 }}>
              {row.options.map(opt => {
                const isSel    = shards[ri] === opt;
                const isRec    = recommended?.shards?.[ri] === opt;
                const shardSrc = shardImg(opt);
                const ek       = `shard-${opt.replace(/[^a-zA-Z0-9]/g, "")}`;
                return (
                  <div key={opt} style={{ position: "relative" }}>
                  <div
                    onClick={() => pickShard(ri, opt)}
                    onMouseEnter={e  => tip(opt, e)}
                    onMouseLeave={()  => setTooltip(null)}
                    style={{
                      width: 24, height: 24, borderRadius: "50%", cursor: "pointer",
                      background: isSel ? "rgba(212,175,55,.2)" : "rgba(255,255,255,.04)",
                      border: isSel ? "1.5px solid rgba(212,175,55,.7)"
                        : "1px solid rgba(255,255,255,.12)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: isSel ? "0 0 8px rgba(212,175,55,.5)" : "none",
                      opacity: isSel ? 1 : 0.28,
                      overflow: "hidden", transition: "all .15s",
                    }}>
                    {shardSrc && !imgFail(ek)
                      ? <img src={shardSrc} alt={opt} onError={() => onErr(ek)}
                          style={{ width: "80%", height: "80%", objectFit: "contain" }} />
                      : <div style={{
                          width: 8, height: 8,
                          clipPath: "polygon(50% 0%,100% 50%,50% 100%,0% 50%)",
                          background: isSel ? "#D4AF37" : "rgba(255,255,255,.3)",
                        }} />
                    }
                  </div>
                  {isRec && <div style={{ ...recDotStyle, width: 7, height: 7 }} />}
                  </div>
                );
              })}
            </div>
            <span style={{ fontSize: 10, color: shards[ri] ? S.gold : S.textDim }}>
              {shards[ri] || "—"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ position: "relative" }}>
      {/* Override badge */}
      {override && (
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          marginBottom: 12, padding: "4px 10px",
          background: "rgba(212,175,55,.12)",
          border: "1px solid rgba(212,175,55,.3)",
          borderRadius: 20, fontSize: 10, color: S.gold, letterSpacing: "1px",
        }}>
          ✦ CHAMPION-SPECIFIC — {enemyChamp.toUpperCase()}
        </div>
      )}

      {/* Legend */}
      <div style={{ display: "flex", alignItems: "center", gap: 6,
        marginBottom: 10, fontSize: 9, letterSpacing: "1px",
        color: "rgba(255,255,255,.35)", textTransform: "uppercase" }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
          background: "#D4AF37", boxShadow: "0 0 5px rgba(212,175,55,.8)",
          display: "inline-block" }} />
        Recommended · click the other path's icon to swap primary ↔ secondary
      </div>

      {/* Two columns */}
      <div style={{ display: "flex", gap: 24 }}>
        {PrimaryColumn()}
        {SecondaryColumn()}
      </div>

      {/* Why this page */}
      {recommended?.reason && (
        <div style={{
          marginTop: 14, padding: "10px 14px",
          background: "rgba(255,255,255,.03)",
          border: "1px solid rgba(255,255,255,.06)",
          borderRadius: 8, borderLeft: `3px solid ${primMeta.color}`,
        }}>
          <div style={{ fontSize: 9, letterSpacing: "2px", color: primMeta.color,
            textTransform: "uppercase", marginBottom: 4 }}>Recommended page — why</div>
          <p style={{ margin: 0, fontSize: 11, color: "#c7ccd1", lineHeight: 1.6 }}>
            {recommended.reason}
          </p>
        </div>
      )}

      {/* Cursor tooltip */}
      {tooltip && (
        <div style={{
          position: "fixed", left: tooltip.x + 16, top: tooltip.y - 12,
          zIndex: 9999, pointerEvents: "none", maxWidth: 240,
          background: "rgba(27,27,30,.97)",
          border: "1px solid rgba(212,175,55,.35)",
          borderRadius: 8, padding: "8px 12px",
          boxShadow: "0 8px 32px rgba(0,0,0,.7)",
        }}>
          <div style={{ fontSize: 12, fontWeight: "bold", color: "#D4AF37",
            marginBottom: 4, letterSpacing: ".3px" }}>{tooltip.name}</div>
          <div style={{ fontSize: 11, color: "#c7ccd1", lineHeight: 1.5 }}>
            {RUNE_DESCRIPTIONS[tooltip.name] || ""}
          </div>
        </div>
      )}
    </div>
  );
};

  // ── Derived champ-select display values ─────────────────────────────────
  const csActive = !!csState?.active;
  const detectedKey = csActive ? (csState.championId || csState.championPickIntent) : 0;
  const detectedChamp = detectedKey ? champByKey(detectedKey) : null;
  const detectedRole = csActive ? POS_ROLE[csState.assignedPosition] : null;
  const csOppDd = csActive
    ? opponentDd(csState.theirTeam, csState.assignedPosition,
        detectedRole || (detectedChamp?.roles ? Object.keys(detectedChamp.roles)[0] : null))
    : null;
  const csOppChamp = csOppDd ? DD_TO_CHAMP[csOppDd] : null;
  const csOppClass = csOppDd ? classOf(csOppDd) : null;
  const preHoverChamp = preHoverOn ? champ : null;
  const csStatus = !csState ? "Connecting to client…"
    : csState.active ? "In champ select"
    : csState.reason === "no-client" ? "League client not detected"
    : csState.reason === "not-in-select" ? "Waiting for champ select…"
    : "Client idle";

  // ────────────────────────────────────────────────────────────────────────
  return (
    <div style={{
      minHeight:"100vh",
      position:"relative",
      background:"radial-gradient(ellipse at 15% 5%,#2A2F38 0%,#1B1B1E 55%,#161618 100%)",
      fontFamily:"'Spartan MB','Cinzel','Arial Black',sans-serif",
      color:"#F5F5F5",
      }}>

      {/* ── PAGE HEADER ── */}
      <div style={{
        textAlign:"center", padding:"10px 24px 8px",
        background:"linear-gradient(180deg,rgba(249,115,22,.14) 0%,transparent 100%)",
        borderBottom:`1px solid ${S.border}`,
      }}>
        <div style={{ fontSize:"10px", letterSpacing:"6px", color:S.goldDim,
          textTransform:"uppercase", marginBottom:"2px" }}>
          FRGE.GG · Patch 26.14
        </div>
        <h1 style={{
          fontSize:"clamp(18px,2.6vw,24px)", fontWeight:"bold",
          color:S.orange, margin:"0 0 2px",
          textShadow:"0 0 40px rgba(249,115,22,.45)", letterSpacing:"2px",
        }}>
          {champ.display} — Situational Itemization
        </h1>
      <p style={{ margin:0, fontSize:"12px", color:champ.glow, letterSpacing:"1px" }}>
        {activeChampRole.role}
        {champ.roles && (
         <span style={{ color:"rgba(255,255,255,.3)", margin:"0 8px" }}>·</span>
      )}
      {champ.roles && (
         <span style={{ fontSize:"11px", color:"rgba(255,255,255,.4)" }}>{currentRole}</span>
      )}
      </p>
      </div>

      {/* ── LIVE CHAMP SELECT BAR (desktop only) ── */}
      {isDesktop && (
        <div style={{
          background: csActive ? "rgba(20,40,30,.55)" : "rgba(0,0,0,.5)",
          borderBottom:`1px solid ${csActive ? "rgba(76,175,125,.35)" : "rgba(212,175,55,.14)"}`,
          padding:"9px 24px",
        }}>
          <div style={{ maxWidth:"min(96vw,1900px)", margin:"0 auto", display:"flex",
            alignItems:"center", gap:"14px", flexWrap:"wrap", fontFamily:"inherit" }}>

            {/* status dot + label */}
            <span style={{ display:"flex", alignItems:"center", gap:"7px", flexShrink:0 }}>
              <span style={{ width:"9px", height:"9px", borderRadius:"50%",
                background: csActive ? "#4caf7d" : csState?.reason === "no-client" ? "#d9564f" : "#D4AF37",
                boxShadow:`0 0 8px ${csActive ? "#4caf7d" : "transparent"}` }} />
              <span style={{ fontSize:"11px", letterSpacing:"2px", textTransform:"uppercase",
                color: csActive ? "#8fe0b4" : S.goldDim }}>{csStatus}</span>
            </span>

            {/* live matchup readout */}
            {csActive && detectedChamp && (
              <span style={{ fontSize:"13px", color:"#d7e8dd" }}>
                You: <b style={{ color:"#fff" }}>{detectedChamp.display}</b>
                {detectedRole && <span style={{ color:"rgba(255,255,255,.5)" }}> ({detectedRole})</span>}
                {csOppChamp && (
                  <>
                    <span style={{ color:"rgba(255,255,255,.35)", margin:"0 8px" }}>vs</span>
                    <b style={{ color:"#f0b8b0" }}>{csOppChamp.display}</b>
                    {csOppClass && <span style={{ color:"rgba(255,255,255,.5)" }}> — {csOppClass.replace(/_/g," ").toLowerCase()}</span>}
                  </>
                )}
              </span>
            )}
            {csActive && !detectedChamp && (
              <span style={{ fontSize:"12px", color:"rgba(255,255,255,.45)" }}>
                Hover or lock a champion…
              </span>
            )}

            {/* controls */}
            <div style={{ marginLeft:"auto", display:"flex", alignItems:"center", gap:"10px" }}>
              {csMsg && <span style={{ fontSize:"11px", color:"#8fe0b4" }}>{csMsg}</span>}

              {/* pre-hover (auto-hovers the selected champ on entering champ select,
                  then imports its build — skips if the champ is banned) */}
              <button
                onClick={() => setPreHoverOn((v) => !v)}
                title="When ON, the champion selected here is auto-hovered the instant champ select opens, then its build is imported (unless it's banned)"
                style={{
                  cursor:"pointer", borderRadius:"20px", padding:"5px 12px", fontSize:"11px",
                  letterSpacing:".5px",
                  border:`1px solid ${preHoverOn ? "#D4AF37" : "rgba(255,255,255,.15)"}`,
                  background: preHoverOn ? "rgba(212,175,55,.15)" : "rgba(255,255,255,.03)",
                  color: preHoverOn ? S.gold : "#9aa0a6",
                }}>
                {preHoverOn ? `⚑ Pre-hover: ${champ.display}` : "⚑ Pre-hover OFF"}
              </button>

              {/* auto-sync toggle */}
              <button
                onClick={() => setCsSync((v) => !v)}
                title="Auto-follow the champion you hover/lock and auto-match the enemy laner"
                style={{
                  cursor:"pointer", borderRadius:"20px", padding:"5px 12px", fontSize:"11px",
                  letterSpacing:".5px",
                  border:`1px solid ${csSync ? "#4caf7d" : "rgba(255,255,255,.15)"}`,
                  background: csSync ? "rgba(76,175,125,.15)" : "rgba(255,255,255,.03)",
                  color: csSync ? "#6bd6a0" : "#9aa0a6",
                }}>
                {csSync ? "⟳ Auto-sync ON" : "⟳ Auto-sync OFF"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── CHAMPION SELECTOR BAR ── */}
      <div style={{
        background:"rgba(0,0,0,.45)",
        borderBottom:`1px solid rgba(212,175,55,.14)`,
        padding:"7px 24px",
      }}>
        <div style={{
          maxWidth:"min(96vw,1900px)", margin:"0 auto",
          display:"flex", alignItems:"center", gap:"16px", flexWrap:"wrap",
        }}>

          <span style={{ fontSize:"10px", letterSpacing:"3px", color:S.goldDim,
            textTransform:"uppercase", flexShrink:0 }}>Playing as</span>

          {/* Active portrait — clicking opens the picker */}
          <div
            onClick={() => setShowPicker(true)}
            title="Click to change champion"
            style={{
              width:"56px", height:"56px", borderRadius:"9px", overflow:"hidden",
              border:`2.5px solid ${champ.glow}`,
              boxShadow:`0 0 18px ${champ.glow}60`, background:"#1B1B1E",
              flexShrink:0, cursor:"pointer", position:"relative",
              transition:"all .18s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = `0 0 26px ${champ.glow}90`;
              e.currentTarget.style.filter = "brightness(1.15)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = `0 0 18px ${champ.glow}60`;
              e.currentTarget.style.filter = "none";
            }}
          >
            {!imgFail(`me-${champ.dd}`)
              ? <img src={champImg(champ.dd)} alt={champ.display}
                  onError={() => onErr(`me-${champ.dd}`)}
                  style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
              : <div style={{ width:"100%", height:"100%", display:"flex",
                  alignItems:"center", justifyContent:"center",
                  fontSize:"20px", color:champ.glow }}>{champ.display[0]}</div>
            }
            {/* Small swap hint icon */}
            <div style={{
              position:"absolute", bottom:2, right:2,
              background:"rgba(0,0,0,.7)", borderRadius:"3px",
              padding:"1px 3px", fontSize:"9px", lineHeight:1,
            }}>⇄</div>
          </div>

          {/* Name + role icons */}
          <div>
            <div style={{ fontSize:"16px", fontWeight:"bold", color:champ.glow, marginBottom:"6px" }}>
              {champ.display}
            </div>
            {champ.roles ? (
              <div style={{ display:"flex", gap:"6px" }}>
                {Object.keys(champ.roles).map(roleKey => {
                  const isActive = currentRole === roleKey;
                  const ek = `role-${roleKey}`;
                  return (
                    <div key={roleKey} onClick={() => setActiveRole(roleKey)} title={roleKey}
                      style={{
                        width:"30px", height:"30px", borderRadius:"6px", overflow:"hidden",
                        cursor:"pointer",
                        border: isActive ? `2px solid ${champ.glow}` : "1px solid rgba(255,255,255,.15)",
                        background: isActive ? `${champ.color}30` : "#1B1B1E",
                        boxShadow: isActive ? `0 0 10px ${champ.glow}60` : "none",
                        opacity: isActive ? 1 : 0.4,
                        transition:"all .15s",
                        display:"flex", alignItems:"center", justifyContent:"center",
                      }}>
                      {!imgFail(ek)
                        ? <img src={roleIcon(roleKey)} alt={roleKey} onError={() => onErr(ek)}
                            style={{ width:"20px", height:"20px", objectFit:"contain",
                              filter: isActive ? "brightness(1)" : "grayscale(80%) brightness(0.5)" }} />
                        : <span style={{ fontSize:"9px", fontWeight:"bold",
                            color: isActive ? champ.glow : "#555" }}>{roleKey[0]}</span>
                      }
                    </div>
                  );
                })}
              </div>
            ) : (
              <div style={{ fontSize:"11px", color:S.textDim }}>{champ.lanes.join(" · ")}</div>
            )}
          </div>

          {/* ── DRAFT TILES: recommended ban + replacement if banned ── */}
          <div style={{ display:"flex", gap:"10px", marginLeft:"auto", flexWrap:"wrap" }}>
            {[
              { label:"Recommended Ban",
                names: activeChampRole?.bans         || champ.bans,         accent:"#e74c3c" },
              { label:"Recommended Replacement",
                names: activeChampRole?.replacements || champ.replacements, accent:"#27ae60" },
            ].map(tile => tile.names?.length ? (
              <div key={tile.label} style={{
                background:"rgba(255,255,255,.02)",
                border:`1px solid ${tile.accent}30`,
                borderRadius:"10px", padding:"7px 10px 6px",
              }}>
                <div style={{ fontSize:"9px", letterSpacing:"2px", color:tile.accent,
                  textTransform:"uppercase", marginBottom:"6px", opacity:.85 }}>
                  {tile.label}
                </div>
                <div style={{ display:"flex", gap:"8px" }}>
                  {tile.names.map(name => {
                    const ek     = `draft-${name}`;
                    const roster = CHAMPS.find(c => c.display === name);
                    return (
                      <div key={name}
                        onClick={roster && roster !== champ ? () => pickChamp(roster) : undefined}
                        title={roster ? `${name} — in your pool, click to play` : name}
                        style={{ display:"flex", flexDirection:"column", alignItems:"center",
                          gap:"3px", width:"46px",
                          cursor: roster && roster !== champ ? "pointer" : "default" }}>
                        <div style={{
                          width:"34px", height:"34px", borderRadius:"6px", overflow:"hidden",
                          border:`1.5px solid ${tile.accent}50`, background:"#2A2F38",
                          boxShadow: roster ? `0 0 6px ${tile.accent}40` : "none",
                        }}>
                          {!imgFail(ek)
                            ? <img src={champImg(name)} alt={name} onError={() => onErr(ek)}
                                style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                            : <div style={{ width:"100%", height:"100%", display:"flex",
                                alignItems:"center", justifyContent:"center",
                                fontSize:"12px", color:"#5c6a7a" }}>{name[0]}</div>
                          }
                        </div>
                        <span style={{ fontSize:"9px", color:"#D4AF37", textAlign:"center",
                          lineHeight:1.15, maxWidth:"46px", overflow:"hidden",
                          textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null)}
          </div>

        </div>
      </div>

      {/* ── FLOATING CHAMPION PICKER MODAL ── */}
      {showPicker && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setShowPicker(false)}
            style={{
              position:"fixed", inset:0, zIndex:999,
              background:"rgba(0,0,0,.72)",
              backdropFilter:"blur(4px)",
            }}
          />

          {/* Modal */}
          <div style={{
            position:"fixed", top:"50%", left:"50%",
            transform:"translate(-50%,-50%)",
            zIndex:1000,
            width:"min(680px, 92vw)",
            maxHeight:"78vh",
            background:"rgba(27,27,30,.98)",
            border:`1px solid rgba(212,175,55,.35)`,
            borderRadius:"16px",
            boxShadow:"0 24px 80px rgba(0,0,0,.8), 0 0 0 1px rgba(212,175,55,.1)",
            display:"flex", flexDirection:"column",
            overflow:"hidden",
          }}>

            {/* Modal header */}
            <div style={{
              padding:"18px 20px 14px",
              borderBottom:"1px solid rgba(255,255,255,.06)",
              display:"flex", alignItems:"center", gap:"14px",
            }}>
              <span style={{ fontSize:"11px", letterSpacing:"3px", color:S.goldDim,
                textTransform:"uppercase", flex:1 }}>Select Champion</span>

              {/* Search */}
              <input
                autoFocus
                value={champSearch}
                onChange={e => setChampSearch(e.target.value)}
                placeholder="Search..."
                style={{
                  background:"rgba(255,255,255,.06)",
                  border:"1px solid rgba(255,255,255,.12)",
                  borderRadius:"7px", padding:"7px 12px",
                  color:"#F5F5F5", fontSize:"13px",
                  outline:"none", width:"180px",
                  fontFamily:"inherit",
                }}
              />

              {/* Close */}
              <button onClick={() => setShowPicker(false)} style={{
                background:"none", border:"none", cursor:"pointer",
                color:"rgba(255,255,255,.35)", fontSize:"20px",
                lineHeight:1, padding:"0 2px",
                transition:"color .15s",
              }}
              onMouseEnter={e => e.target.style.color = "rgba(255,255,255,.8)"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,.35)"}
              >✕</button>
            </div>

            {/* Role filter pills */}
            <div style={{
              display:"flex", gap:"6px", padding:"12px 20px 10px",
              borderBottom:"1px solid rgba(255,255,255,.05)",
              flexWrap:"wrap",
            }}>
              {["All", "Top", "Jungle", "Mid", "Bot", "Support"].map(role => {
                const isActive = champRoleFilter === role;
                const ek = `rf-${role}`;
                return (
                  <button key={role} onClick={() => setChampRoleFilter(role)} style={{
                    display:"flex", alignItems:"center", gap:"5px",
                    padding:"5px 12px", borderRadius:"20px", cursor:"pointer",
                    border: isActive ? `1px solid ${S.goldDim}` : "1px solid rgba(255,255,255,.1)",
                    background: isActive ? `rgba(212,175,55,.2)` : "rgba(255,255,255,.04)",
                    color: isActive ? S.gold : "#7a8288",
                    fontSize:"11px", fontWeight: isActive ? "bold" : "normal",
                    letterSpacing:".5px", transition:"all .15s",
                  }}>
                    {role !== "All" && (
                      <img src={roleIcon(role)} alt={role} style={{
                        width:"14px", height:"14px", objectFit:"contain",
                        filter: isActive ? "brightness(1.4)" : "grayscale(80%) brightness(0.6)",
                      }} />
                    )}
                    {role}
                  </button>
                );
              })}
            </div>

            {/* Champion grid — scrollable */}
            <div style={{
              overflowY:"auto", padding:"16px 20px 20px",
              display:"grid",
              gridTemplateColumns:"repeat(auto-fill, minmax(78px, 1fr))",
              gap:"10px",
              flex:1,
            }}>
              {CHAMPS
                .filter(c => {
                  const matchSearch = champSearch === ""
                    || c.display.toLowerCase().includes(champSearch.toLowerCase());
                  const matchRole = champRoleFilter === "All"
                    || c.lanes.includes(champRoleFilter);
                  return matchSearch && matchRole;
                })
                .map(c => {
                  const isCurrent = c.id === champ.id;
                  const ek = `pk-${c.dd}`;
                  return (
                    <div key={c.id} onClick={() => !isCurrent && pickChamp(c)}
                      style={{
                        cursor: isCurrent ? "default" : "pointer",
                        textAlign:"center",
                        opacity: isCurrent ? 0.4 : 1,
                        transition:"all .15s",
                      }}>
                      <div style={{
                        width:"60px", height:"60px", borderRadius:"9px", overflow:"hidden",
                        border: isCurrent
                          ? `2px solid ${c.glow}`
                          : "1.5px solid rgba(255,255,255,.1)",
                        background:"#1B1B1E", margin:"0 auto 6px",
                        transition:"all .15s",
                      }}
                      onMouseEnter={e => {
                        if (!isCurrent) {
                          e.currentTarget.style.border = `2px solid ${c.glow}`;
                          e.currentTarget.style.boxShadow = `0 0 14px ${c.glow}55`;
                          e.currentTarget.style.transform = "scale(1.08)";
                        }
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.border = isCurrent
                          ? `2px solid ${c.glow}`
                          : "1.5px solid rgba(255,255,255,.1)";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.transform = "scale(1)";
                      }}>
                        {!imgFail(ek)
                          ? <img src={champImg(c.dd)} alt={c.display} onError={() => onErr(ek)}
                              style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                          : <div style={{ width:"100%", height:"100%", display:"flex",
                              alignItems:"center", justifyContent:"center",
                              fontSize:"20px", color:c.glow, background:`${c.color}20` }}>
                              {c.display[0]}
                            </div>
                        }
                      </div>
                      <div style={{
                        fontSize:"10px", color: isCurrent ? c.glow : "#9aa0a6",
                        whiteSpace:"nowrap", overflow:"hidden",
                        textOverflow:"ellipsis", maxWidth:"78px", margin:"0 auto",
                      }}>{c.display}</div>

                      {/* Role icons under each champion in picker */}
                      <div style={{ display:"flex", justifyContent:"center", gap:"2px", marginTop:"3px" }}>
                        {c.lanes.map(lane => (
                          <img key={lane} src={roleIcon(lane)} alt={lane} title={lane}
                            style={{ width:"10px", height:"10px", objectFit:"contain",
                              opacity:0.5, filter:"grayscale(40%)" }} />
                        ))}
                      </div>
                    </div>
                  );
                })}

              {/* Empty state */}
              {CHAMPS.filter(c => {
                const matchSearch = champSearch === ""
                  || c.display.toLowerCase().includes(champSearch.toLowerCase());
                const matchRole = champRoleFilter === "All"
                  || c.lanes.includes(champRoleFilter);
                return matchSearch && matchRole;
              }).length === 0 && (
                <div style={{
                  gridColumn:"1/-1", textAlign:"center",
                  padding:"32px 0", color:S.textDim,
                  fontSize:"13px", fontStyle:"italic",
                }}>
                  No champions match "{champSearch}" in {champRoleFilter}.
                </div>
              )}
            </div>

          </div>
        </>
      )}

      {/* ── CORE BUILD PATH ── */}
      <div style={{ maxWidth:"min(96vw,1900px)", margin:"8px auto 0", padding:"0 24px" }}>
        <div style={{
          background:S.panelBg,
          border:`1px solid ${S.border}`,
          borderRadius:"12px", padding:"11px 18px",
        }}>
          <div style={{ display:"flex", alignItems:"center",
            marginBottom: showCore ? "14px" : "0" }}>
            <span style={{ fontSize:"10px", letterSpacing:"3px", color:S.goldDim,
              textTransform:"uppercase" }}>Core Build Path</span>
            {isDesktop && (
              <button
                onClick={sendToLeague}
                disabled={applyState === "sending"}
                className="frge-cta"
                title="Import this rune page + item set into the running League client"
                style={{
                  marginLeft:"auto",
                  cursor: applyState === "sending" ? "default" : "pointer",
                  borderRadius:"20px", padding:"5px 14px", fontSize:"11px",
                  letterSpacing:".5px", fontWeight:"bold",
                  border:`1px solid ${
                    applyState && applyState !== "sending"
                      ? (applyState.ok ? "#4caf7d" : "#d9564f")
                      : `${S.orange}aa`}`,
                  background:
                    applyState && applyState !== "sending"
                      ? (applyState.ok ? "rgba(76,175,125,.15)" : "rgba(217,86,79,.15)")
                      : `${S.orange}22`,
                  color:
                    applyState === "sending" ? S.textDim
                      : applyState ? (applyState.ok ? "#6bd6a0" : "#f08a84")
                      : S.orange,
                  transition:"all .15s",
                }}>
                {applyState === "sending" ? "Importing…"
                  : applyState ? (applyState.ok ? "✓ " : "✕ ") + applyState.msg
                  : "⚡ Import to League"}
              </button>
            )}
            <button onClick={() => setShowCore(v => !v)} style={{
              marginLeft: isDesktop ? "12px" : "auto", background:"none", border:"none",
              cursor:"pointer", color:S.textDim, fontSize:"11px", letterSpacing:"1px",
            }}>
              {showCore ? "▲ Hide" : "▼ Why?"}
            </button>
          </div>

          {/* Summoner spells for this role */}
          <div style={{ display:"flex", alignItems:"center", gap:"10px", marginTop:"12px" }}>
            <span style={{ fontSize:"10px", letterSpacing:"2px", color:S.goldDim,
              textTransform:"uppercase", flexShrink:0 }}>Summoners</span>
            {buildSpells.map(spell => {
              const ek = `spell-${spell}`;
              const src = spellImg(spell, spellMap);
              return (
                <div key={spell} style={{ display:"flex", alignItems:"center", gap:"6px" }}>
                  <div style={{
                    width:"28px", height:"28px", borderRadius:"6px", overflow:"hidden",
                    border:`1px solid ${S.orange}55`, background:`${S.orange}12`,
                    display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
                  }}>
                    {src && !imgFail(ek)
                      ? <img src={src} alt={spell} onError={() => onErr(ek)}
                          style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                      : <div style={{ width:"9px", height:"9px", borderRadius:"50%", background:S.orange }} />
                    }
                  </div>
                  <span style={{ fontSize:"12px", fontWeight:"600", color:"#d7d9dd",
                    whiteSpace:"nowrap" }}>{spell}</span>
                </div>
              );
            })}
          </div>

          {/* Build toggle — only when an alternate/off-meta build exists for this role */}
          {altList.length > 0 && (
            <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", marginTop:"12px" }}>
              {[{ label: activeChampRole.buildLabel || "Standard", tag:"meta", idx:-1 },
                ...altList.map((b, i) => ({ label:b.label, tag:b.tag, idx:i }))].map(({ label, tag, idx }) => {
                const on = altBuildIdx === idx;
                const off = tag === "off-meta";
                const accent = off ? "#e08040" : S.gold;
                return (
                  <button key={idx} onClick={() => setAltBuildIdx(idx)}
                    className="frge-pill" aria-pressed={on} style={{
                    cursor:"pointer", borderRadius:"20px", padding:"4px 12px",
                    fontSize:"11px", letterSpacing:".5px", fontWeight: on ? "bold" : "normal",
                    border:`1px solid ${on ? accent : "rgba(255,255,255,.12)"}`,
                    background: on ? `${accent}22` : "rgba(255,255,255,.03)",
                    color: on ? accent : "#8a9096", transition:"all .15s",
                  }}>
                    {label}
                    {off && <span style={{ opacity:.7, marginLeft:"5px", fontSize:"9px" }}>OFF-META</span>}
                  </button>
                );
              })}
            </div>
          )}

          {/* Arrow chain */}
          <div style={{ display:"flex", alignItems:"center", flexWrap:"wrap", gap:"6px",
            marginTop:"12px", marginBottom: showCore ? "14px" : "0" }}>
            {coreArrow.map((item, idx) => {
              const col = ic(item);
              const ek  = `core-${item}`;
              const src = itemImg(item, itemMap);
              return (
                <div key={idx} style={{ display:"flex", alignItems:"center", gap:"6px" }}>
                  <div style={{
                    width:"44px", height:"44px", borderRadius:"8px", overflow:"hidden",
                    border:`2px solid ${col}55`, background:`${col}15`,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    boxShadow:`0 0 10px ${col}30`, flexShrink:0,
                  }}>
                    {src && !imgFail(ek)
                      ? <img src={src} alt={item} onError={() => onErr(ek)}
                          style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                      : <div style={{ width:"12px", height:"12px", borderRadius:"50%",
                          background:col, boxShadow:`0 0 6px ${col}` }} />
                    }
                  </div>
                  <span style={{ fontSize:"13px", fontWeight:"600", color:col,
                    whiteSpace:"nowrap" }}>{item}</span>
                  {idx < coreArrow.length - 1 && (
                    <span style={{ color:"rgba(212,175,55,.45)", fontSize:"18px",
                      margin:"0 2px", fontWeight:"300" }}>›</span>
                  )}
                </div>
              );
            })}
          </div>

          {showCore && (
            <p style={{ margin:0, fontSize:"13px", color:"#b7bcc2", lineHeight:1.7,
              borderTop:`1px solid ${S.border}`, paddingTop:"12px" }}>
              {buildCoreNote}
            </p>
          )}
        </div>
      </div>

      {/* ── CLASS BUBBLES ── */}
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit, minmax(116px, 1fr))",
        gap:"8px", padding:"9px 24px",
        maxWidth:"min(96vw,1900px)", margin:"0 auto",
      }}>
        {Object.keys(CLASSES).map(k => {
          const d  = CLASSES[k];
          const on = openClass === k;
          // First 3 champions in this class, excluding the one we're playing
          const previewChamps = d.champions
            .filter(c => c !== champ.display)
            .slice(0, 3);
          return (
            <div key={k} onClick={() => setOpenClass(on ? null : k)}
              className={`frge-tile${on ? " frge-tile--on" : ""}`}
              role="button" tabIndex={0} aria-pressed={on}
              onKeyDown={(ev) => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); setOpenClass(on ? null : k); } }}
              // Per-class colours are passed as CSS custom properties so the
              // hover/active visuals can live in CSS (inline background/border/
              // box-shadow/transform would otherwise override the :hover rules).
              style={{
              "--tile-bg-on": `radial-gradient(circle at 50% 30%,${d.glow}38 0%,${d.color}22 60%,${d.color}12 100%)`,
              "--tile-border-on": `${d.glow}90`,
              "--tile-shadow-on": `0 0 18px ${d.glow}45, inset 0 0 16px ${d.glow}10`,
              "--tile-hover-border": `${d.glow}66`,
              "--tile-hover-glow": `${d.glow}33`,
              cursor:"pointer", borderRadius:"12px",
              padding:"8px 8px 7px", textAlign:"center",
            }}>
              <div style={{ fontSize:"20px", marginBottom:"2px" }}>{d.emoji}</div>

              {/* 3 champion portrait previews */}
              <div style={{ display:"flex", justifyContent:"center", gap:"3px", marginBottom:"4px" }}>
                {previewChamps.map(c => {
                  const ek = `bubble-${c}`;
                  return (
                    <div key={c} style={{
                      width:"23px", height:"23px", borderRadius:"5px", overflow:"hidden",
                      border:`1px solid rgba(255,255,255,.18)`,
                      background:"#2A2F38", flexShrink:0,
                    }}>
                      {!imgFail(ek)
                        ? <img src={champImg(c)} alt={c} title={c} onError={() => onErr(ek)}
                            style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                        : <div style={{ width:"100%", height:"100%", display:"flex",
                            alignItems:"center", justifyContent:"center",
                            fontSize:"9px", color:"#5c6a7a" }}>{c[0]}</div>
                      }
                    </div>
                  );
                })}
              </div>

              <div style={{ fontSize:"10.5px", fontWeight:"bold", letterSpacing:".6px",
                color: on ? d.glow : "#D4AF37", textTransform:"uppercase", lineHeight:1.15 }}>
                {d.label}
              </div>
              <div style={{ marginTop:"2px", fontSize:"9px", color:"rgba(200,204,209,.38)" }}>
                {d.champions.length} champs
              </div>
            </div>
          );
        })}
      </div>

      {/* ── DETAIL PANEL ── */}
      {/* ── BUILD WORKSPACE — items + runes side by side, always visible ── */}
      <div style={{ maxWidth:"min(96vw,1900px)", margin:"0 auto 16px", padding:"0 24px" }}>
        <div style={{
          background: classEntry
            ? `linear-gradient(135deg,rgba(20,20,26,.98) 0%,${classEntry.color}12 100%)`
            : "rgba(20,20,26,.92)",
          border:`1px solid ${classEntry ? `${classEntry.glow}55` : "rgba(212,175,55,.18)"}`,
          borderRadius:"14px", padding:"16px 20px",
          boxShadow: classEntry ? `0 0 34px ${classEntry.glow}18` : "none",
          transition:"border-color .2s, box-shadow .2s",
        }}>
          {/* key replays the fade-up whenever the matchup or build changes */}
          <div key={`${champ.id}-${currentRole}-${openClass}-${altBuildIdx}`}
            className="frge-enter"
            style={{ display:"grid",
            gridTemplateColumns: narrowWorkspace ? "1fr" : "minmax(0,1fr) minmax(0,1.05fr)",
            gap: narrowWorkspace ? "18px" : "28px", alignItems:"start" }}>

            {/* ── LEFT: items ── */}
            <div>
              {classEntry ? (
                <>
                  <div style={{ display:"flex", alignItems:"center", gap:"11px",
                    marginBottom:"16px", flexWrap:"wrap" }}>
                    <span style={{ fontSize:"26px" }}>{classEntry.emoji}</span>
                    <div style={{ flex:1, minWidth:0 }}>
                      <h2 style={{ margin:"0 0 2px", fontSize:"16px", color:classEntry.glow,
                        letterSpacing:"1.5px", textTransform:"uppercase" }}>
                        {champ.display} vs {classEntry.label}
                      </h2>
                      <p style={{ margin:0, fontSize:"11px", color:"#b7bcc2", fontStyle:"italic" }}>
                        {classEntry.desc}
                      </p>
                    </div>
                    <button onClick={() => setMode(mode === "ahead" ? "behind" : "ahead")} style={{
                      padding:"10px 15px", cursor:"pointer", border:"1px solid rgba(255,255,255,.1)",
                      background: mode==="ahead" ? "rgba(212,175,55,.18)" : "rgba(74,111,165,.18)",
                      color: mode==="ahead" ? "#D4AF37" : "#7eb8f7",
                      borderRadius:"7px", fontSize:"13px", fontWeight:"bold",
                      transition:"all .15s", whiteSpace:"nowrap",
                    }}>
                      {mode === "ahead" ? "⚔ AHEAD" : "🛡 EVEN / BEHIND"}
                    </button>
                  </div>

                  <div style={{ fontSize:"10px", letterSpacing:"3px", color:classEntry.glow,
                    textTransform:"uppercase", marginBottom:"10px",
                    borderBottom:`1px solid ${classEntry.glow}28`, paddingBottom:"6px" }}>
                    Items · {mode==="ahead" ? "Ahead" : "Even / Behind"}
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", gap:"8px", marginBottom:"20px" }}>
                    {classItems.map((item, i) => (
                      <ItemCard key={i} item={item} rank={i+1} glow={classEntry.glow} />
                    ))}
                  </div>

                  <div style={{ fontSize:"10px", letterSpacing:"3px", color:classEntry.glow,
                    textTransform:"uppercase", marginBottom:"10px",
                    borderBottom:`1px solid ${classEntry.glow}28`, paddingBottom:"6px" }}>
                    Champions in class
                  </div>
                  <div style={{ display:"grid",
                    gridTemplateColumns:"repeat(auto-fill, minmax(56px, 1fr))", gap:"8px" }}>
                    {classChamps.map(c => {
                      const ek = `cls-${c}`;
                      return (
                        <div key={c} style={{
                          display:"flex", flexDirection:"column", alignItems:"center", gap:"4px",
                          background:`${classEntry.color}18`,
                          border:`1px solid ${classEntry.glow}28`,
                          borderRadius:"7px", padding:"6px 3px 5px",
                        }}>
                          <div style={{
                            width:"42px", height:"42px", borderRadius:"6px", overflow:"hidden",
                            border:`1.5px solid ${classEntry.glow}45`, background:"#2A2F38",
                          }}>
                            {!imgFail(ek)
                              ? <img src={champImg(c)} alt={c} title={c} onError={() => onErr(ek)}
                                  style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                              : <div style={{ width:"100%", height:"100%", display:"flex",
                                  alignItems:"center", justifyContent:"center",
                                  fontSize:"13px", color:"#5c6a7a" }}>{c[0]}</div>
                            }
                          </div>
                          <span style={{ fontSize:"9px", color:"#D4AF37", textAlign:"center",
                            lineHeight:1.2, maxWidth:"52px", overflow:"hidden",
                            textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{c}</span>
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center",
                  justifyContent:"center", textAlign:"center", height:"100%",
                  minHeight:"320px", padding:"24px",
                  border:"1px dashed rgba(212,175,55,.2)", borderRadius:"10px",
                  background:"rgba(255,255,255,.015)" }}>
                  <div style={{ fontSize:"34px", marginBottom:"12px", opacity:.5 }}>⚔</div>
                  <div style={{ fontSize:"13px", color:"#b7bcc2", lineHeight:1.6, maxWidth:"280px" }}>
                    Pick a <b style={{ color:S.gold }}>matchup class</b> above to load {champ.display}'s
                    ranked item build for that enemy type — the rune page on the right updates to match.
                  </div>
                </div>
              )}
            </div>

            {/* ── RIGHT: runes (always visible + editable) ── */}
            <div style={{ isolation:"isolate" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"12px",
                paddingBottom:"6px",
                borderBottom:`1px solid ${classEntry ? `${classEntry.glow}28` : "rgba(212,175,55,.2)"}` }}>
                <span style={{ fontSize:"10px", letterSpacing:"3px",
                  color: classEntry ? classEntry.glow : S.gold, textTransform:"uppercase" }}>
                  ◈ Rune Page{classEntry ? ` · vs ${classEntry.label}` : ""}
                </span>
                <span style={{ marginLeft:"auto", fontSize:"9px", color:S.textDim,
                  letterSpacing:".5px", fontStyle:"italic" }}>
                  editable — imports exactly as shown
                </span>
              </div>
              <RunePage
                sel={runeSel} setSel={setRuneSel}
                recommended={recommendedRunes}
                enemyChamp={""}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── SITUATIONAL ITEMS STRIP ── */}
      <div style={{ maxWidth:"min(96vw,1900px)", margin:"0 auto 14px", padding:"0 24px" }}>
        <div style={{
          background:"rgba(255,255,255,.02)", border:`1px solid rgba(180,140,60,.13)`,
          borderRadius:"12px", padding:"16px 20px",
        }}>
          <div style={{ fontSize:"10px", letterSpacing:"3px", color:S.goldDim,
            textTransform:"uppercase", marginBottom:"12px" }}>
            Common Situational Items — {champ.display}
          </div>
          {(() => {
            const chip = (name) => {
              const col = ic(name);
              const ek  = `side-${name}`;
              const src = itemImg(name, itemMap);
              return (
                <div key={name} style={{
                  display:"flex", alignItems:"center", gap:"7px",
                  background:"rgba(255,255,255,.03)",
                  border:`1px solid ${col}30`, borderRadius:"7px",
                  padding:"6px 10px",
                }}>
                  <div style={{
                    width:"26px", height:"26px", borderRadius:"4px", overflow:"hidden",
                    background:`${col}18`, border:`1px solid ${col}40`,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    flexShrink:0,
                  }}>
                    {src && !imgFail(ek)
                      ? <img src={src} alt={name} onError={() => onErr(ek)}
                          style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                      : <div style={{ width:"8px", height:"8px", borderRadius:"50%",
                          background:col }} />
                    }
                  </div>
                  <span style={{ fontSize:"12px", color:col, whiteSpace:"nowrap" }}>{name}</span>
                </div>
              );
            };

            // Group by what each item counters (Anti-Heal, Heavy Shields,
            // Armor Stacking, ...) — item-level metadata from itemCounters.js,
            // so this works for every champion without per-champ authoring.
            const groups = new Map();
            const leftover = [];
            for (const name of buildSideItems) {
              const cat = counterCategoryOf(name);
              if (cat) {
                if (!groups.has(cat.label)) groups.set(cat.label, { note: cat.note, items: [] });
                groups.get(cat.label).items.push(name);
              } else leftover.push(name);
            }

            return (
              <>
                {[...groups.entries()].map(([label, g]) => (
                  <div key={label} style={{ marginBottom:"14px" }}>
                    <div style={{ fontSize:"10px", letterSpacing:"2px", color:"#e08040",
                      textTransform:"uppercase", marginBottom:"6px" }}>
                      For {label}
                    </div>
                    <div style={{ display:"flex", flexWrap:"wrap", gap:"8px", marginBottom:"6px" }}>
                      {g.items.map(chip)}
                    </div>
                    {g.note && <p style={{ margin:"0 0 4px", fontSize:"11px",
                      color:"#b7bcc2", lineHeight:1.5 }}>{g.note}</p>}
                  </div>
                ))}
                {leftover.length > 0 && (
                  <div>
                    {groups.size > 0 && (
                      <div style={{ fontSize:"10px", letterSpacing:"2px", color:S.goldDim,
                        textTransform:"uppercase", marginBottom:"6px" }}>
                        General
                      </div>
                    )}
                    <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
                      {leftover.map(chip)}
                    </div>
                  </div>
                )}
              </>
            );
          })()}
        </div>
      </div>

      {/* ── FLOATING GAME STATE TOGGLE ── */}
      <div style={{
        position: "fixed",
        bottom: "30px",
        right: "25px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}>
      
      {/* SINGLE TOGGLE BUTTON */}
      <button
        onClick={() => setMode(mode === "ahead" ? "behind" : "ahead")}
        style={{
          padding:"16px 22px",
          cursor:"pointer",
          border:"1px solid rgba(255,255,255,.1)",
          borderRadius:"10px",
          background: mode === "ahead"
            ? "rgba(212,175,55,.25)"
            : "rgba(74,111,165,.25)",
          color: mode === "ahead" ? "#D4AF37" : "#7eb8f7",
          fontSize:"24px",
          transition:"all .15s",
          backdropFilter:"blur(6px)",
          boxShadow: mode === "ahead"
            ? "0 0 12px rgba(212,175,55,.35)"
            : "0 0 12px rgba(74,111,165,.35)",
        }}
      >
        {mode === "ahead" ? "⚔" : "🛡"}
      </button>

      {/* TEXT UNDERNEATH */}
      <div style={{
        fontSize:"16px",
        color:"rgba(200,204,209,.5)",
        fontStyle:"italic",
        textAlign:"center",
        lineHeight:1.2,
      }}>
        {mode === "ahead"
          ? "Snowball your lead"
          : "Survive & Scale"}
      </div>
      </div>

    </div>
  );
}
