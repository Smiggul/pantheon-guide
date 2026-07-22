// ─────────────────────────────────────────────────────────────────────────────
//  champClasses.js  —  maps every champion (by DDragon id, matching lcuData's
//  CHAMP_KEYS) to one of the app's 13 enemy classes. Used by the live champ-select
//  assistant to auto-suggest which enemy class you're laning into. It is a
//  best-effort primary-class label — the user can always override the selector.
//
//  Keys are DDragon ids (e.g. "MonkeyKing", "DrMundo", "Belveth"), so an LCU
//  numeric championId resolves via  CHAMP_KEYS (id->key) inverted  ->  this map.
// ─────────────────────────────────────────────────────────────────────────────

const BY_CLASS = {
  JUGGERNAUT: ["Darius","Garen","Mordekaiser","Sett","Nasus","Illaoi","DrMundo","Urgot",
    "Yorick","KSante","Olaf","Trundle","Udyr"],
  DIVER: ["Aatrox","Ambessa","Briar","Camille","Diana","Elise","Hecarim","Irelia","JarvanIV",
    "Kayn","Kled","LeeSin","Nocturne","Pantheon","RekSai","Renekton","Shyvana","Sylas","Vi",
    "Viego","Volibear","Warwick","MonkeyKing","XinZhao","Zaahen"],
  ASSASSIN: ["Akali","Ekko","Evelynn","Fizz","Kassadin","Katarina","Khazix","Leblanc","Locke",
    "Naafiri","Pyke","Qiyana","Rengar","Shaco","Talon","Zed"],
  SKIRMISHER: ["Belveth","Fiora","Gwen","Jax","Lillia","MasterYi","Nilah","Riven","Tryndamere",
    "Yasuo","Yone"],
  BURST_MAGE: ["Ahri","Annie","Aurora","Lissandra","Lux","Mel","Neeko","Orianna","Syndra",
    "Veigar","Vex","Zoe"],
  BATTLEMAGE: ["Anivia","AurelionSol","Brand","Cassiopeia","Chogath","Hwei","Karthus","Malzahar",
    "Rumble","Ryze","Swain","Taliyah","Viktor","Vladimir"],
  ARTILLERY: ["Velkoz","Xerath","Ziggs"],
  MARKSMAN: ["Akshan","Aphelios","Ashe","Caitlyn","Corki","Draven","Ezreal","Graves","Jhin","Jinx",
    "Kaisa","Kalista","Kindred","KogMaw","Lucian","MissFortune","Quinn","Samira","Senna","Sivir",
    "Smolder","Tristana","Twitch","Varus","Vayne","Xayah","Yunara","Zeri"],
  ENCHANTER: ["Ivern","Janna","Karma","Lulu","Milio","Nami","Seraphine","Sona","Soraka","Taric",
    "Yuumi","Zilean"],
  CATCHER: ["Bard","Blitzcrank","Morgana","Rakan","Renata","Thresh","Zyra"],
  VANGUARD: ["Alistar","Amumu","Galio","Gragas","Leona","Malphite","Maokai","Nautilus","Nunu",
    "Ornn","Rammus","Rell","Sejuani","Sion","Skarner","Zac"],
  WARDEN: ["Braum","Poppy","Shen","TahmKench"],
  SPECIALIST: ["Azir","Fiddlesticks","Gangplank","Gnar","Heimerdinger","Jayce","Kayle","Kennen",
    "Nidalee","Singed","Teemo","TwistedFate"],
};

// invert to  ddId -> CLASS
export const CHAMP_CLASS = {};
for (const [cls, ids] of Object.entries(BY_CLASS)) for (const id of ids) CHAMP_CLASS[id] = cls;

export const classOf = (ddId) => CHAMP_CLASS[ddId] || null;

export default CHAMP_CLASS;
