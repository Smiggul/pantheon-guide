// ─────────────────────────────────────────────────────────────────────────────
//  skillOrders.js  —  ability max-priority order (which BASIC ability to rank up
//  first → last). The ultimate (R) is leveled at 6 / 11 / 16 whenever available,
//  so it's shown first and not part of the arrays here.
//
//  This is curated meta knowledge — Data Dragon has ability names/icons but NOT
//  the recommended level order. It's a growing, best-effort set (verify per
//  patch): a champion not listed simply hides the Skill-order row, and a role /
//  alt build can override with its own `skillOrder:["Q","E","W"]`. Keyed by
//  DDragon id (so "MonkeyKing", "Khazix", "MissFortune", …).
// ─────────────────────────────────────────────────────────────────────────────
export const SKILL_MAX = {
  // ── Mid ──
  Ahri: ["Q", "W", "E"], Syndra: ["Q", "W", "E"], Orianna: ["Q", "W", "E"],
  Lux: ["E", "Q", "W"], Katarina: ["Q", "E", "W"], Zed: ["Q", "E", "W"],
  Yasuo: ["Q", "E", "W"], Yone: ["Q", "E", "W"], Viktor: ["Q", "E", "W"],
  Akali: ["Q", "E", "W"], Fizz: ["Q", "E", "W"], Vladimir: ["Q", "E", "W"],
  Ryze: ["Q", "E", "W"], Veigar: ["Q", "E", "W"], Annie: ["Q", "W", "E"],
  Anivia: ["Q", "E", "W"], Lissandra: ["Q", "W", "E"], Zoe: ["Q", "E", "W"],
  Leblanc: ["Q", "W", "E"], Kassadin: ["Q", "E", "W"], Malzahar: ["E", "Q", "W"],
  Talon: ["W", "Q", "E"], Naafiri: ["Q", "E", "W"], Swain: ["Q", "W", "E"],
  // ── Top ──
  Darius: ["Q", "W", "E"], Garen: ["E", "Q", "W"], Nasus: ["Q", "E", "W"],
  Pantheon: ["Q", "W", "E"], Renekton: ["Q", "W", "E"], Aatrox: ["Q", "E", "W"],
  Fiora: ["Q", "E", "W"], Sett: ["Q", "E", "W"], Teemo: ["E", "Q", "W"],
  Gangplank: ["Q", "E", "W"], Singed: ["Q", "E", "W"],
  // ── Jungle ──
  MasterYi: ["Q", "E", "W"], Warwick: ["Q", "E", "W"], Hecarim: ["Q", "E", "W"],
  LeeSin: ["Q", "E", "W"], Vi: ["Q", "E", "W"], Briar: ["Q", "W", "E"],
  Viego: ["Q", "E", "W"], Khazix: ["Q", "E", "W"], Graves: ["Q", "E", "W"],
  Kindred: ["Q", "W", "E"], Nocturne: ["Q", "W", "E"], XinZhao: ["Q", "E", "W"],
  JarvanIV: ["Q", "E", "W"], Olaf: ["Q", "E", "W"], Rengar: ["Q", "W", "E"],
  Evelynn: ["Q", "E", "W"], Karthus: ["Q", "E", "W"], Diana: ["Q", "W", "E"],
  Ekko: ["Q", "E", "W"], Gragas: ["Q", "E", "W"],
  // ── Bot ──
  Jinx: ["Q", "W", "E"], Caitlyn: ["Q", "W", "E"], Ezreal: ["Q", "W", "E"],
  Lucian: ["Q", "W", "E"], Draven: ["Q", "W", "E"], Vayne: ["Q", "W", "E"],
  Jhin: ["Q", "W", "E"], Kaisa: ["Q", "W", "E"], Ashe: ["W", "Q", "E"],
  Tristana: ["E", "Q", "W"], MissFortune: ["Q", "E", "W"], Xayah: ["Q", "E", "W"],
  Sivir: ["Q", "W", "E"], Samira: ["Q", "E", "W"], Zeri: ["Q", "E", "W"],
  KogMaw: ["W", "Q", "E"], Varus: ["Q", "W", "E"], Senna: ["Q", "W", "E"],
  Corki: ["Q", "E", "W"], Twitch: ["E", "Q", "W"], Akshan: ["Q", "E", "W"],
  // ── Support ──
  Morgana: ["W", "Q", "E"], Soraka: ["Q", "W", "E"], Brand: ["W", "Q", "E"],
  Karma: ["Q", "E", "W"], Braum: ["Q", "E", "W"], Zyra: ["Q", "E", "W"],
  Pyke: ["Q", "E", "W"], Velkoz: ["Q", "W", "E"], Sona: ["Q", "W", "E"],
  Zilean: ["Q", "E", "W"], Xerath: ["Q", "W", "E"], Yuumi: ["Q", "E", "W"],
  Taric: ["Q", "E", "W"],

  // ── Wave 2: broader coverage (best-effort inherited knowledge — max-first is
  //    reliable; 2nd/3rd priority + role/build splits still owed a verified pass) ──
  // Top
  AurelionSol: ["Q", "W", "E"], Sion: ["Q", "W", "E"], MonkeyKing: ["Q", "E", "W"],
  Shyvana: ["W", "E", "Q"], Volibear: ["Q", "W", "E"], Yorick: ["Q", "E", "W"],
  Jax: ["Q", "W", "E"], Irelia: ["Q", "W", "E"], Riven: ["Q", "E", "W"],
  Camille: ["Q", "W", "E"], Poppy: ["Q", "W", "E"], Malphite: ["Q", "E", "W"],
  Shen: ["Q", "E", "W"], KSante: ["Q", "W", "E"], Gnar: ["Q", "E", "W"],
  Mordekaiser: ["Q", "E", "W"], Gwen: ["Q", "E", "W"], Ornn: ["W", "Q", "E"],
  Kayle: ["E", "Q", "W"], Kennen: ["Q", "W", "E"], Rumble: ["Q", "E", "W"],
  Urgot: ["W", "Q", "E"], DrMundo: ["Q", "E", "W"], Kled: ["Q", "E", "W"],
  Illaoi: ["Q", "E", "W"], Tryndamere: ["E", "Q", "W"], Chogath: ["Q", "E", "W"],
  Trundle: ["Q", "W", "E"], Quinn: ["Q", "E", "W"], Heimerdinger: ["W", "Q", "E"],
  TahmKench: ["Q", "E", "W"],
  // Jungle
  RekSai: ["Q", "E", "W"], Zac: ["Q", "E", "W"], Kayn: ["Q", "W", "E"],
  Maokai: ["Q", "E", "W"], Amumu: ["E", "Q", "W"], Shaco: ["Q", "E", "W"],
  Sejuani: ["W", "E", "Q"], Belveth: ["Q", "W", "E"], Skarner: ["Q", "E", "W"],
  Rammus: ["Q", "E", "W"], Fiddlesticks: ["W", "E", "Q"], Lillia: ["W", "Q", "E"],
  Nunu: ["W", "Q", "E"], Ivern: ["Q", "W", "E"],
  // Mid
  Azir: ["Q", "W", "E"], Sylas: ["Q", "W", "E"], Taliyah: ["Q", "E", "W"],
  Cassiopeia: ["Q", "E", "W"], TwistedFate: ["W", "Q", "E"], Neeko: ["Q", "E", "W"],
  Vex: ["Q", "E", "W"], Ziggs: ["Q", "W", "E"], Qiyana: ["Q", "E", "W"], Galio: ["Q", "E", "W"],
  // Bot
  Kalista: ["Q", "E", "W"], Nilah: ["Q", "E", "W"], Smolder: ["Q", "E", "W"],
  // Support
  Thresh: ["E", "Q", "W"], Lulu: ["E", "W", "Q"], Leona: ["W", "E", "Q"],
  Seraphine: ["E", "Q", "W"], Blitzcrank: ["W", "E", "Q"], Nami: ["W", "E", "Q"],
  Nautilus: ["W", "Q", "E"], Renata: ["E", "Q", "W"], Rakan: ["W", "E", "Q"],
  Alistar: ["W", "Q", "E"], Janna: ["W", "E", "Q"], Milio: ["Q", "E", "W"],
  Bard: ["Q", "W", "E"], Rell: ["W", "Q", "E"],

  // ── Wave 3: verified against build sites (u.gg / lolstats / mobalytics /
  //    escorenews), incl. the special-kit champs. Only Mel lacks reliable data. ──
  Udyr: ["Q", "E", "W", "R"], Aphelios: ["Q", "E", "W"], Nidalee: ["Q", "E", "W"],
  Jayce: ["Q", "E", "W"], Elise: ["Q", "W", "E"], Aurora: ["Q", "E", "W"],
  Ambessa: ["Q", "E", "W"], Hwei: ["Q", "E", "W"], Zaahen: ["Q", "E", "W"],
  Yunara: ["Q", "W", "E"], Locke: ["Q", "E", "W"], Mel: ["Q", "E", "W"],
};

// Udyr has no ultimate — his kit is 4 stances (Q/W/E/R) that ALL level on the
// basic-ability schedule (rank-ups at 3/5/7/9/…), so the "R at 6/11/16" framing
// doesn't apply and R belongs IN the max-priority array, not as a separate chip.
// R's position adapts to the build: AD-Q jungle maxes Q first with R last
// (SKILL_MAX.Udyr = Q>E>W>R); the AP Top page overrides to R>W>E>Q since
// Wingborne Storm is its main damage stance (see udyr.js Top.skillOrder). The
// display hides the 6/11/16 chip for NO_ULT champs and renders all four stances
// as one numbered priority. Transform champs (Jayce/Elise/Nidalee) and Aphelios
// have real ults and display normally.
export const NO_ULT = new Set(["Udyr"]);

// dd: DDragon id; roleData: the role block; alt: selected alt build (both may
// carry their own `skillOrder` override).
export const skillOrderOf = (dd, roleData, alt) =>
  (alt && alt.skillOrder) || (roleData && roleData.skillOrder) || SKILL_MAX[dd] || null;

export default skillOrderOf;
