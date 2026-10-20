// ─────────────────────────────────────────────────────────────────────────────
//  champClasses.js  —  maps every champion (by DDragon id, matching lcuData's
//  CHAMP_KEYS) to one of the app's 13 enemy classes. Used by the live champ-select
//  assistant to auto-suggest which enemy class you're laning into. It is a
//  best-effort primary-class label — the user can always override the selector.
//
//  Keys are DDragon ids (e.g. "MonkeyKing", "DrMundo", "Belveth"), so an LCU
//  numeric championId resolves via  CHAMP_KEYS (id->key) inverted  ->  this map.
// ─────────────────────────────────────────────────────────────────────────────

// Aligned with Riot's official class (the League wiki's champion list) on
// 2026-10-20: 18 champions moved, and where Riot lists two classes the app takes
// the first. Four deliberately differ, because Riot's SPECIALIST is a catch-all
// and a functional label gives better matchup advice:
//   Graves, Quinn  Riot SPECIALIST -> MARKSMAN    ranged AD auto-attackers
//   Chogath        Riot SPECIALIST -> BATTLEMAGE  his damage is magic either way
//   Zilean         Riot SPECIALIST -> ENCHANTER   his kit is ally utility
// Class does NOT encode damage type (Mordekaiser is a Juggernaut who deals magic
// damage): damageTypes.js holds that, and matchupAdjust.js uses both.
const BY_CLASS = {
  JUGGERNAUT: ["Aatrox","Darius","Garen","Mordekaiser","Sett","Nasus","Illaoi","DrMundo","Urgot",
    "Volibear","Yorick","Trundle","Udyr"],
  DIVER: ["Ambessa","Briar","Camille","Diana","Elise","Hecarim","Irelia","JarvanIV",
    "LeeSin","Olaf","Pantheon","RekSai","Renekton","Shyvana","Vi",
    "Warwick","MonkeyKing","XinZhao"],
  ASSASSIN: ["Akali","Ekko","Evelynn","Fizz","Kassadin","Katarina","Khazix","Leblanc","Locke",
    "Naafiri","Nocturne","Pyke","Qiyana","Rengar","Shaco","Talon","Zed"],
  SKIRMISHER: ["Belveth","Fiora","Gwen","Jax","Kayn","Kled","Lillia","MasterYi","Nilah","Riven",
    "Tryndamere","Viego","Yasuo","Yone","Zaahen"],
  BURST_MAGE: ["Ahri","Annie","Aurora","Brand","Lissandra","Lux","Neeko","Orianna","Sylas","Syndra",
    "TwistedFate","Veigar","Vex","Zoe"],
  BATTLEMAGE: ["Anivia","AurelionSol","Cassiopeia","Chogath","Karthus","Malzahar",
    "Rumble","Ryze","Swain","Taliyah","Viktor","Vladimir"],
  ARTILLERY: ["Hwei","Jayce","Mel","Velkoz","Xerath","Ziggs"],
  MARKSMAN: ["Akshan","Aphelios","Ashe","Caitlyn","Corki","Draven","Ezreal","Graves","Jhin","Jinx",
    "Kaisa","Kalista","Kindred","KogMaw","Lucian","MissFortune","Quinn","Samira","Senna","Sivir",
    "Smolder","Tristana","Twitch","Varus","Vayne","Xayah","Yunara","Zeri"],
  ENCHANTER: ["Janna","Karma","Lulu","Milio","Nami","Renata","Seraphine","Sona","Soraka","Taric",
    "Yuumi","Zilean"],
  CATCHER: ["Bard","Blitzcrank","Ivern","Morgana","Rakan","Thresh","Zyra"],
  VANGUARD: ["Alistar","Amumu","Gragas","Leona","Malphite","Maokai","Nautilus","Nunu",
    "Ornn","Rammus","Rell","Sejuani","Sion","Skarner","Zac"],
  WARDEN: ["Braum","Galio","KSante","Poppy","Shen","TahmKench"],
  SPECIALIST: ["Azir","Fiddlesticks","Gangplank","Gnar","Heimerdinger","Kayle","Kennen",
    "Nidalee","Singed","Teemo"],
};

// invert to  ddId -> CLASS
export const CHAMP_CLASS = {};
for (const [cls, ids] of Object.entries(BY_CLASS)) for (const id of ids) CHAMP_CLASS[id] = cls;

export const classOf = (ddId) => CHAMP_CLASS[ddId] || null;

export default CHAMP_CLASS;
