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
};

// Champions the "R at 6/11/16" model doesn't fit — no traditional ultimate
// (Udyr's 4 stances) or transform kits (two ability sets). These need a richer
// display before their skill order can be shown correctly, so they're excluded.
export const NON_STANDARD_ULT = new Set(["Udyr", "Jayce", "Elise", "Nidalee", "Aphelios"]);

// dd: DDragon id; roleData: the role block; alt: selected alt build (both may
// carry their own `skillOrder` override).
export const skillOrderOf = (dd, roleData, alt) =>
  (alt && alt.skillOrder) || (roleData && roleData.skillOrder) || SKILL_MAX[dd] || null;

export default skillOrderOf;
