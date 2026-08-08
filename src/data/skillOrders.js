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
  // Mid
  Ahri: ["Q", "W", "E"], Syndra: ["Q", "W", "E"], Orianna: ["Q", "W", "E"],
  Lux: ["E", "Q", "W"], Katarina: ["Q", "E", "W"], Zed: ["Q", "E", "W"],
  Yasuo: ["Q", "E", "W"], Yone: ["Q", "E", "W"], Viktor: ["Q", "E", "W"],
  // Top
  Darius: ["Q", "W", "E"], Garen: ["E", "Q", "W"], Nasus: ["Q", "E", "W"],
  Pantheon: ["Q", "W", "E"], Renekton: ["Q", "W", "E"], Aatrox: ["Q", "E", "W"],
  Fiora: ["Q", "E", "W"], Sett: ["Q", "E", "W"], Teemo: ["E", "Q", "W"],
  // Jungle
  MasterYi: ["Q", "E", "W"], Warwick: ["Q", "E", "W"], Hecarim: ["Q", "E", "W"],
  LeeSin: ["Q", "E", "W"], Vi: ["Q", "E", "W"], Briar: ["Q", "W", "E"],
  // Bot
  Jinx: ["Q", "W", "E"], Caitlyn: ["Q", "W", "E"], Ezreal: ["Q", "W", "E"],
  Lucian: ["Q", "W", "E"], Draven: ["Q", "W", "E"], Vayne: ["Q", "W", "E"],
  Jhin: ["Q", "W", "E"], Kaisa: ["Q", "W", "E"], Ashe: ["W", "Q", "E"],
  Tristana: ["E", "Q", "W"], MissFortune: ["Q", "E", "W"],
  // Support
  Morgana: ["W", "Q", "E"], Soraka: ["Q", "W", "E"], Brand: ["W", "Q", "E"],
};

// dd: DDragon id; roleData: the role block; alt: selected alt build (both may
// carry their own `skillOrder` override).
export const skillOrderOf = (dd, roleData, alt) =>
  (alt && alt.skillOrder) || (roleData && roleData.skillOrder) || SKILL_MAX[dd] || null;

export default skillOrderOf;
