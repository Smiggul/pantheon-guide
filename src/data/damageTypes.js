// ─────────────────────────────────────────────────────────────────────────────
//  damageTypes.js  —  explicit per-champion damage type (AD = physical, AP =
//  magic, Mixed = meaningful hybrid). Authoritative and hand-classified, because
//  class is a poor proxy — Morgana/Zyra are AP catchers, Gwen/Lillia are AP
//  skirmishers, Mordekaiser is an AP juggernaut, Sion/Poppy are AD tanks, etc.
//  Class is only a fallback for a champion not listed here (e.g. a brand-new
//  release before it's classified). Keyed by DDragon id.
// ─────────────────────────────────────────────────────────────────────────────
import { classOf } from "./champClasses.js";

const MIXED = ["Jax", "Kaisa", "Kayle", "Corki"];

const AP = [
  "Teemo", "AurelionSol", "Katarina", "Xerath", "Locke", "Thresh", "Ahri", "Lulu",
  "Leona", "Swain", "Seraphine", "Gragas", "Karma", "Ziggs", "Zac", "Mel",
  "Blitzcrank", "Nami", "Akali", "Fiddlesticks", "Veigar", "Zoe", "Viktor",
  "Lissandra", "Fizz", "Nautilus", "Morgana", "Renata", "Braum", "Soraka", "Rakan",
  "Alistar", "Janna", "Elise", "Orianna", "Syndra", "Karthus", "Maokai", "Malphite",
  "Shen", "Amumu", "Azir", "Ryze", "Vladimir", "Kassadin", "Leblanc", "Sylas",
  "Ekko", "Diana", "Lux", "Zyra", "Sona", "Nidalee", "Brand", "Taliyah", "TahmKench",
  "Sejuani", "Aurora", "Velkoz", "Mordekaiser", "Hwei", "Rell", "Cassiopeia",
  "TwistedFate", "Neeko", "Vex", "Gwen", "Ornn", "Evelynn", "Bard", "Kennen",
  "Rumble", "Lillia", "Nunu", "Milio", "Annie", "Malzahar", "Galio", "Heimerdinger",
  "Taric", "Anivia", "Rammus", "Yuumi", "Singed", "Chogath", "Ivern", "Zilean",
];

const AD = [
  "Pantheon", "Renekton", "Sion", "MonkeyKing", "RekSai", "Shyvana", "Warwick",
  "Udyr", "Sett", "Volibear", "Nocturne", "Briar", "Jinx", "Darius", "LeeSin",
  "Yasuo", "Pyke", "Yone", "Zed", "Yorick", "Garen", "Zaahen", "Yunara", "Ambessa",
  "Olaf", "Irelia", "Kindred", "Caitlyn", "Ezreal", "Vayne", "Draven", "Riven",
  "Vi", "Naafiri", "Jhin", "Ashe", "Samira", "MissFortune", "Xayah", "Lucian",
  "Twitch", "Sivir", "Tristana", "Kayn", "MasterYi", "Viego", "Camille", "Fiora",
  "Aatrox", "Senna", "Varus", "Poppy", "Talon", "Rengar", "Shaco", "Gnar", "Kalista",
  "Zeri", "Jayce", "Smolder", "Graves", "Khazix", "JarvanIV", "KSante", "KogMaw",
  "Nasus", "Hecarim", "XinZhao", "Aphelios", "Belveth", "Skarner", "Nilah",
  "Qiyana", "Akshan", "Gangplank", "Urgot", "DrMundo", "Kled", "Illaoi",
  "Tryndamere", "Trundle", "Quinn",
];

export const DAMAGE_TYPE = {};
for (const dd of AP) DAMAGE_TYPE[dd] = "AP";
for (const dd of AD) DAMAGE_TYPE[dd] = "AD";
for (const dd of MIXED) DAMAGE_TYPE[dd] = "Mixed";

// Fallback for an unlisted champ: class-based best guess (magic-leaning classes
// → AP, physical → AD, else AD).
const AP_CLASSES = new Set(["BURST_MAGE", "BATTLEMAGE", "ARTILLERY", "ENCHANTER",
  "CATCHER", "VANGUARD", "WARDEN"]);
export function damageTypeOf(dd) {
  if (DAMAGE_TYPE[dd]) return DAMAGE_TYPE[dd];
  return AP_CLASSES.has(classOf(dd)) ? "AP" : "AD";
}

export default damageTypeOf;
