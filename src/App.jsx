import { useState, useEffect } from "react";
import { CHAMPS } from "./data/champs/index.js";

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
    color: "#c89b3c", label: "Precision", abbr: "P",
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
}, []);

  // If the champion has a roles object (Pantheon), read from that.
  // Otherwise (Teemo, Renekton) fall back to the champion object itself.
  const activeChampRole = champ.roles
    ? (champ.roles[currentRole] || champ.roles[champ.lanes[0]])
    : champ;

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

  const coreArrow = activeChampRole.corePath.split("›").map(s => s.trim());

  // ── Colour helpers ────────────────────────────────────────────────────────
  const S = {                       // shared style tokens
    border:       "rgba(180,120,20,.2)",
    panelBg:      "rgba(5,12,25,.95)",
    textDim:      "#6a7a5a",
    gold:         "#f0d060",
    goldDim:      "#b8860b",
  };

  const [detailTab, setDetailTab] = useState("items"); // "items" | "runes"

  // ── Reusable: portrait chip ───────────────────────────────────────────────
  const ChampChip = ({ name, size = 56 }) => {
    const ek = `chip-${name}`;
    return (
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"5px" }}>
        <div style={{
          width:size, height:size, borderRadius:"8px", overflow:"hidden",
          border:`1.5px solid rgba(255,255,255,.14)`,
          background:"#0d1a2a",
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
          fontSize:"11px", color:"#c8a96a", textAlign:"center",
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
    return (
      <div style={{
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
          <p style={{ margin:0, fontSize:"12px", color:"#b0a080", lineHeight:1.6 }}>{item.why}</p>
        </div>
      </div>
    );
  };

 const RunePage = ({ runeData, enemyChamp }) => {
  const override    = runeData?.champOverrides?.[enemyChamp];
  const recommended = runeData
    ? (override ? mergeRunePage(runeData, override) : runeData)
    : null;

  const [primTree,  setPrimTree]  = useState(recommended?.primary        || "Precision");
  const [keystone,  setKeystone]  = useState(recommended?.keystone       || "");
  const [primRows,  setPrimRows]  = useState(recommended?.primaryRunes   || [null, null, null]);
  const [secTree,   setSecTree]   = useState(recommended?.secondary      || "");
  const [secRunes,  setSecRunes]  = useState(recommended?.secondaryRunes || []);
  const [shards,    setShards]    = useState(recommended?.shards         || [null, null, null]);
  const [tooltip,   setTooltip]   = useState(null);

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
    borderRadius: "50%", background: "#c89b3c",
    border: "1.5px solid #0a0d14",
    boxShadow: "0 0 6px rgba(200,155,60,.9)", zIndex: 3,
    pointerEvents: "none",
  };

  // ── Handlers ─────────────────────────────────────────────────────────────
  // In-game behavior: clicking the other page's tree swaps primary ↔ secondary.
  // Old secondary picks slot into the new primary rows; the first two old
  // primary picks carry over as the new secondary pair. Keystone must be
  // re-picked, like the client.
  const swapTrees = () => {
    if (!secTree) return;
    const newPrim = secTree;
    setPrimRows(RUNE_TREES[newPrim].rows.map(row => secRunes.find(r => row.includes(r)) || null));
    setSecRunes(primRows.filter(Boolean).slice(0, 2));
    setPrimTree(newPrim);
    setSecTree(primTree);
    setKeystone("");
  };

  const pickPrimTree = (name) => {
    if (name === primTree) return;
    if (name === secTree)  { swapTrees(); return; }
    setPrimTree(name);
    setKeystone("");
    setPrimRows([null, null, null]);
  };

  const pickSecTree = (name) => {
    if (name === primTree) { swapTrees(); return; }
    if (name === secTree)  { setSecTree(""); setSecRunes([]); return; }
    setSecTree(name);
    setSecRunes([]);
  };

  const pickKeystone = (name) => setKeystone(k => k === name ? "" : name);

  const pickPrimRune = (rowIdx, name) => {
    setPrimRows(prev => {
      const next = [...prev];
      next[rowIdx] = next[rowIdx] === name ? null : name;
      return next;
    });
  };

  const pickSecRune = (name, rowIdx) => {
    setSecRunes(prev => {
      if (prev.includes(name)) return prev.filter(r => r !== name);
      const rowRunes   = RUNE_TREES[secTree]?.rows[rowIdx] || [];
      const withoutRow = prev.filter(r => !rowRunes.includes(r));
      // page full → deselect the last-picked rune and take the new one
      if (withoutRow.length >= 2) return [withoutRow[0], name];
      return [...withoutRow, name];
    });
  };

  const pickShard = (rowIdx, name) => {
    setShards(prev => { const n = [...prev]; n[rowIdx] = name; return n; });
  };

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
        {primMeta.keystones.map(k => (
          <Rune key={k} name={k} size={54} isKeystone
            selected={keystone === k} treeColor={primMeta.color}
            onClick={() => pickKeystone(k)} />
        ))}
      </div>
      <div style={{ height: 1, background: "rgba(255,255,255,.07)", margin: "0 0 12px" }} />

      {/* Minor rows */}
      {primMeta.rows.map((row, ri) => (
        <div key={ri} style={{ marginBottom: 10 }}>
          <div style={{ fontSize: "7px", letterSpacing: "1.5px",
            color: "rgba(255,255,255,.16)", textTransform: "uppercase",
            textAlign: "center", marginBottom: 4 }}>Row {ri + 1}</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
            {row.map(r => (
              <Rune key={r} name={r} size={40}
                selected={primRows[ri] === r} treeColor={primMeta.color}
                onClick={() => pickPrimRune(ri, r)} />
            ))}
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
                  {row.map(r => {
                    const isSel = secRunes.includes(r);
                    return (
                      <Rune key={r} name={r} size={40}
                        selected={isSel} treeColor={secMeta.color}
                        onClick={() => pickSecRune(r, ri)} />
                    );
                  })}
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
                      background: isSel ? "rgba(200,155,60,.2)" : "rgba(255,255,255,.04)",
                      border: isSel ? "1.5px solid rgba(200,155,60,.7)"
                        : "1px solid rgba(255,255,255,.12)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: isSel ? "0 0 8px rgba(200,155,60,.5)" : "none",
                      opacity: isSel ? 1 : 0.28,
                      overflow: "hidden", transition: "all .15s",
                    }}>
                    {shardSrc && !imgFail(ek)
                      ? <img src={shardSrc} alt={opt} onError={() => onErr(ek)}
                          style={{ width: "80%", height: "80%", objectFit: "contain" }} />
                      : <div style={{
                          width: 8, height: 8,
                          clipPath: "polygon(50% 0%,100% 50%,50% 100%,0% 50%)",
                          background: isSel ? "#c89b3c" : "rgba(255,255,255,.3)",
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
          background: "rgba(200,155,60,.12)",
          border: "1px solid rgba(200,155,60,.3)",
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
          background: "#c89b3c", boxShadow: "0 0 5px rgba(200,155,60,.8)",
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
          <p style={{ margin: 0, fontSize: 11, color: "#b0a080", lineHeight: 1.6 }}>
            {recommended.reason}
          </p>
        </div>
      )}

      {/* Cursor tooltip */}
      {tooltip && (
        <div style={{
          position: "fixed", left: tooltip.x + 16, top: tooltip.y - 12,
          zIndex: 9999, pointerEvents: "none", maxWidth: 240,
          background: "rgba(6,12,28,.97)",
          border: "1px solid rgba(200,155,60,.35)",
          borderRadius: 8, padding: "8px 12px",
          boxShadow: "0 8px 32px rgba(0,0,0,.7)",
        }}>
          <div style={{ fontSize: 12, fontWeight: "bold", color: "#f0d060",
            marginBottom: 4, letterSpacing: ".3px" }}>{tooltip.name}</div>
          <div style={{ fontSize: 11, color: "#b0a080", lineHeight: 1.5 }}>
            {RUNE_DESCRIPTIONS[tooltip.name] || ""}
          </div>
        </div>
      )}
    </div>
  );
};

  // ────────────────────────────────────────────────────────────────────────
  return (
    <div style={{
      minHeight:"100vh",
      position:"relative",
      background:"radial-gradient(ellipse at 15% 5%,#0d1117 0%,#060a0f 55%,#0a0d14 100%)",
      fontFamily:"'Cinzel','Georgia','Times New Roman',serif",
      color:"#e8d5b0",
      }}>

      {/* ── PAGE HEADER ── */}
      <div style={{
        textAlign:"center", padding:"28px 24px 14px",
        background:"linear-gradient(180deg,rgba(180,120,20,.14) 0%,transparent 100%)",
        borderBottom:`1px solid ${S.border}`,
      }}>
        <div style={{ fontSize:"11px", letterSpacing:"6px", color:S.goldDim,
          textTransform:"uppercase", marginBottom:"6px" }}>
          Aspectum Martis · Patch 16.9
        </div>
        <h1 style={{
          fontSize:"clamp(18px,3.5vw,30px)", fontWeight:"bold",
          color:S.gold, margin:"0 0 6px",
          textShadow:"0 0 40px rgba(240,208,96,.45)", letterSpacing:"2px",
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

      {/* ── CHAMPION SELECTOR BAR ── */}
      <div style={{
        background:"rgba(0,0,0,.45)",
        borderBottom:`1px solid rgba(180,120,20,.14)`,
        padding:"12px 24px",
      }}>
        <div style={{
          maxWidth:"1400px", margin:"0 auto",
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
              boxShadow:`0 0 18px ${champ.glow}60`, background:"#111",
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
                        background: isActive ? `${champ.color}30` : "#111",
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
                          border:`1.5px solid ${tile.accent}50`, background:"#0d1a2a",
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
                        <span style={{ fontSize:"9px", color:"#c8a96a", textAlign:"center",
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
            background:"rgba(6,12,28,.98)",
            border:`1px solid rgba(180,120,20,.35)`,
            borderRadius:"16px",
            boxShadow:"0 24px 80px rgba(0,0,0,.8), 0 0 0 1px rgba(180,120,20,.1)",
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
                  color:"#e8d5b0", fontSize:"13px",
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
                    background: isActive ? `rgba(184,134,11,.2)` : "rgba(255,255,255,.04)",
                    color: isActive ? S.gold : "#6a7a5a",
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
                        background:"#111", margin:"0 auto 6px",
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
                        fontSize:"10px", color: isCurrent ? c.glow : "#9a8a6a",
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
      <div style={{ maxWidth:"1400px", margin:"8px auto 0", padding:"0 24px" }}>
        <div style={{
          background:S.panelBg,
          border:`1px solid ${S.border}`,
          borderRadius:"12px", padding:"16px 20px",
        }}>
          <div style={{ display:"flex", alignItems:"center",
            marginBottom: showCore ? "14px" : "0" }}>
            <span style={{ fontSize:"10px", letterSpacing:"3px", color:S.goldDim,
              textTransform:"uppercase" }}>Core Build Path</span>
            <button onClick={() => setShowCore(v => !v)} style={{
              marginLeft:"auto", background:"none", border:"none",
              cursor:"pointer", color:S.textDim, fontSize:"11px", letterSpacing:"1px",
            }}>
              {showCore ? "▲ Hide" : "▼ Why?"}
            </button>
          </div>

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
                    <span style={{ color:"rgba(180,120,20,.45)", fontSize:"18px",
                      margin:"0 2px", fontWeight:"300" }}>›</span>
                  )}
                </div>
              );
            })}
          </div>

          {showCore && (
            <p style={{ margin:0, fontSize:"13px", color:"#a0896a", lineHeight:1.7,
              borderTop:`1px solid ${S.border}`, paddingTop:"12px" }}>
              {activeChampRole.coreNote}
            </p>
          )}
        </div>
      </div>

      {/* ── CLASS BUBBLES ── */}
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill, minmax(148px, 1fr))",
        gap:"10px", padding:"14px 24px",
        maxWidth:"1400px", margin:"0 auto",
      }}>
        {Object.keys(CLASSES).map(k => {
          const d  = CLASSES[k];
          const on = openClass === k;
          // First 3 champions in this class, excluding the one we're playing
          const previewChamps = d.champions
            .filter(c => c !== champ.display)
            .slice(0, 3);
          return (
            <div key={k} onClick={() => { setOpenClass(on ? null : k); setDetailTab("items"); }} style={{
              cursor:"pointer", borderRadius:"12px",
              padding:"14px 10px 12px", textAlign:"center",
              background: on
                ? `radial-gradient(circle at 50% 30%,${d.glow}38 0%,${d.color}22 60%,${d.color}12 100%)`
                : "rgba(255,255,255,.04)",
              border: on ? `1.5px solid ${d.glow}90` : "1.5px solid rgba(255,255,255,.07)",
              boxShadow: on ? `0 0 18px ${d.glow}45,inset 0 0 16px ${d.glow}10` : "none",
              transform: on ? "scale(1.04)" : "scale(1)",
              transition:"all .2s ease",
            }}>
              <div style={{ fontSize:"26px", marginBottom:"6px" }}>{d.emoji}</div>

              {/* 3 champion portrait previews */}
              <div style={{ display:"flex", justifyContent:"center", gap:"3px", marginBottom:"7px" }}>
                {previewChamps.map(c => {
                  const ek = `bubble-${c}`;
                  return (
                    <div key={c} style={{
                      width:"28px", height:"28px", borderRadius:"5px", overflow:"hidden",
                      border:`1px solid rgba(255,255,255,.18)`,
                      background:"#0d1a2a", flexShrink:0,
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

              <div style={{ fontSize:"11px", fontWeight:"bold", letterSpacing:".8px",
                color: on ? d.glow : "#c8a96a", textTransform:"uppercase", lineHeight:1.2 }}>
                {d.label}
              </div>
              <div style={{ marginTop:"4px", fontSize:"10px", color:"rgba(200,180,140,.38)" }}>
                {d.champions.length} champs
              </div>
            </div>
          );
        })}
      </div>

      {/* ── DETAIL PANEL ── */}
      {classEntry && (
        <div style={{ maxWidth:"1400px", margin:"0 auto 16px", padding:"0 24px" }}>
          <div style={{
            background:`linear-gradient(135deg,rgba(12,12,20,.98) 0%,${classEntry.color}18 100%)`,
            border:`1px solid ${classEntry.glow}55`,
            borderRadius:"14px", padding:"24px",
            boxShadow:`0 0 34px ${classEntry.glow}20`,
          }}>
            {/* Panel header */}
            <div style={{ display:"flex", alignItems:"center", gap:"12px",
              marginBottom:"18px", flexWrap:"wrap" }}>
              <span style={{ fontSize:"30px" }}>{classEntry.emoji}</span>
              <div style={{ flex:1 }}>
                <h2 style={{ margin:"0 0 3px", fontSize:"20px", color:classEntry.glow,
                  letterSpacing:"2px", textTransform:"uppercase" }}>
                  {champ.display} vs {classEntry.label}
                </h2>
                <p style={{ margin:0, fontSize:"12px", color:"#a0896a", fontStyle:"italic" }}>
                  {classEntry.desc}
                </p>
              </div>
                <button onClick={() => setMode(mode === "ahead" ? "behind" : "ahead")}
                  style={{
                  padding:"16px 22px",
                  cursor:"pointer",
                  border:"1px solid rgba(255,255,255,.1)",
                  background: mode==="ahead" ? "rgba(184,134,11,.18)" : "rgba(74,111,165,.18)",
                  color: mode==="ahead" ? "#f0d060" : "#7eb8f7",
                  borderRadius:"7px",
                  fontSize:"18px",
                  transition:"all .15s",                  
                  }}>
                  {mode === "ahead" ? "⚔ AHEAD" : "🛡 EVEN / BEHIND"}
                </button>
              
            </div>
            {/* Tab switcher — Items vs Runes */}
            <div style={{
              display:"flex", gap:"0", marginBottom:"16px",
              background:"rgba(0,0,0,.3)", borderRadius:"7px", overflow:"hidden",
              border:"1px solid rgba(255,255,255,.07)", alignSelf:"flex-start",
            }}>
              {[
                { key:"items", label:"⚔ Items" },
                { key:"runes", label:"◈ Runes" },
              ].map(t => (
                <button key={t.key} onClick={() => setDetailTab(t.key)} style={{
                  padding:"7px 18px", border:"none", cursor:"pointer",
                  background: detailTab===t.key ? `${classEntry.color}35` : "transparent",
                  color: detailTab===t.key ? classEntry.glow : "#5a6a5a",
                  fontSize:"12px", fontWeight: detailTab===t.key ? "bold" : "normal",
                  letterSpacing:".5px", transition:"all .15s",
                  borderRight: t.key==="items" ? "1px solid rgba(255,255,255,.06)" : "none",
                  boxShadow: detailTab===t.key ? `inset 0 -2px 0 ${classEntry.glow}` : "none",
                }}>
                  {t.label}
                </button>
              ))}
            </div>

            {/* Content swap */}
            {detailTab === "items" && (
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1.35fr", gap:"20px" }}>

                {/* Champions in class */}
                <div>
                  <div style={{ fontSize:"10px", letterSpacing:"3px", color:classEntry.glow,
                    textTransform:"uppercase", marginBottom:"12px",
                    borderBottom:`1px solid ${classEntry.glow}28`, paddingBottom:"6px" }}>
                    Champions in class
                  </div>
                  <div style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(auto-fill, minmax(72px, 1fr))",
                    gap:"10px",
                  }}>
                    {classChamps.map(c => {
                      const ek = `cls-${c}`;
                      return (
                        <div key={c} style={{
                          display:"flex", flexDirection:"column", alignItems:"center", gap:"5px",
                          background:`${classEntry.color}18`,
                          border:`1px solid ${classEntry.glow}28`,
                          borderRadius:"8px", padding:"8px 4px 6px",
                        }}>
                          <div style={{
                            width:"52px", height:"52px", borderRadius:"7px", overflow:"hidden",
                            border:`1.5px solid ${classEntry.glow}45`,
                            background:"#0d1a2a",
                          }}>
                            {!imgFail(ek)
                              ? <img src={champImg(c)} alt={c} title={c} onError={() => onErr(ek)}
                                  style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                              : <div style={{ width:"100%", height:"100%", display:"flex",
                                  alignItems:"center", justifyContent:"center",
                                  fontSize:"14px", color:"#5c6a7a" }}>{c[0]}</div>
                            }
                          </div>
                          <span style={{
                            fontSize:"10px", color:"#c8a96a", textAlign:"center",
                            lineHeight:1.2, maxWidth:"68px",
                            overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap",
                          }}>{c}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Item recommendations */}
                <div>
                  <div style={{ fontSize:"10px", letterSpacing:"3px", color:classEntry.glow,
                    textTransform:"uppercase", marginBottom:"12px",
                    borderBottom:`1px solid ${classEntry.glow}28`, paddingBottom:"6px" }}>
                    Items · {champ.display} · {mode==="ahead" ? "Ahead" : "Even / Behind"}
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", gap:"8px" }}>
                    {classItems.map((item, i) => (
                      <ItemCard key={i} item={item} rank={i+1} glow={classEntry.glow} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {detailTab === "runes" && (
              <div style={{ isolation: "isolate" }}>
                {/* key forces a remount on role/class change — RunePage's picks
                    are useState-initialized from runeData and won't otherwise
                    reset when a different role/class's recommendation loads */}
                <RunePage
                  key={`${champ.id}-${currentRole}-${openClass}`}
                  runeData={activeChampRole.data?.[openClass]?.runes ?? null}
                  enemyChamp={""}
                />
              </div>
            )}
          </div>
        </div>
      )}

      {!classEntry && (
        <div style={{ textAlign:"center", padding:"16px",
          color:"rgba(180,150,80,.25)", fontSize:"13px",
          fontStyle:"italic", letterSpacing:"1px" }}>
          ↑ Click any class bubble to see {champ.display}'s situational items
        </div>
      )}

      {/* ── SITUATIONAL ITEMS STRIP ── */}
      <div style={{ maxWidth:"1400px", margin:"0 auto 32px", padding:"0 24px" }}>
        <div style={{
          background:"rgba(255,255,255,.02)", border:`1px solid rgba(180,140,60,.13)`,
          borderRadius:"12px", padding:"16px 20px",
        }}>
          <div style={{ fontSize:"10px", letterSpacing:"3px", color:S.goldDim,
            textTransform:"uppercase", marginBottom:"12px" }}>
            Common Situational Items — {champ.display}
          </div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
            {activeChampRole.sideItems.map(name => {
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
            })}
          </div>
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
            ? "rgba(184,134,11,.25)"
            : "rgba(74,111,165,.25)",
          color: mode === "ahead" ? "#f0d060" : "#7eb8f7",
          fontSize:"24px",
          transition:"all .15s",
          backdropFilter:"blur(6px)",
          boxShadow: mode === "ahead"
            ? "0 0 12px rgba(184,134,11,.35)"
            : "0 0 12px rgba(74,111,165,.35)",
        }}
      >
        {mode === "ahead" ? "⚔" : "🛡"}
      </button>

      {/* TEXT UNDERNEATH */}
      <div style={{
        fontSize:"16px",
        color:"rgba(200,180,140,.5)",
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
