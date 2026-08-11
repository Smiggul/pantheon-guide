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
  Pantheon: ["Q", "W", "E"], Renekton: ["Q", "E", "W"], Aatrox: ["Q", "E", "W"],
  Fiora: ["Q", "E", "W"], Sett: ["Q", "W", "E"], Teemo: ["E", "Q", "W"],
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
  Camille: ["Q", "E", "W"], Poppy: ["Q", "E", "W"], Malphite: ["Q", "E", "W"],
  Shen: ["Q", "E", "W"], KSante: ["Q", "W", "E"], Gnar: ["Q", "E", "W"],
  Mordekaiser: ["Q", "E", "W"], Gwen: ["Q", "E", "W"], Ornn: ["W", "Q", "E"],
  Kayle: ["E", "Q", "W"], Kennen: ["Q", "W", "E"], Rumble: ["Q", "E", "W"],
  Urgot: ["W", "Q", "E"], DrMundo: ["Q", "E", "W"], Kled: ["Q", "E", "W"],
  Illaoi: ["Q", "E", "W"], Tryndamere: ["E", "Q", "W"], Chogath: ["Q", "E", "W"],
  Trundle: ["Q", "W", "E"], Quinn: ["Q", "E", "W"], Heimerdinger: ["W", "Q", "E"],
  TahmKench: ["Q", "E", "W"],
  // Jungle
  RekSai: ["Q", "E", "W"], Zac: ["E", "W", "Q"], Kayn: ["Q", "W", "E"],
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

// ── Level-by-level sequence (18 entries) for the skill-order grid ────────────
// Most champs don't need hand-authored per-level data: the sequence is derived
// from the max-priority order by standard leveling rules. Pin an exact 18-entry
// array here (or as a role/alt `skillSequence`) only where the derivation is
// notably off (unusual first-skill, transform ults, etc.). Keyed by DDragon id.
export const SKILL_SEQUENCE = {
  // Per-champ exact sequences go here only when they're role-agnostic. Multi-role
  // champs whose sequence differs by role (e.g. Pantheon Top Q>E>W vs Support's
  // W-first) MUST pin per-role via a role `skillSequence`, never here — a global
  // pin leaks the wrong order onto every other role.
};

// Textbook derivation. `ability` at slots 6/11/16 (the ultimate for normal kits;
// for no-ult champs it's the 4th-priority stance — see skillSequenceOf). The
// three `basics` each get one early unlock point (levels 1-3 in priority order),
// then every remaining point goes to the highest-priority non-maxed basic whose
// next rank is unlocked (rank r needs champ level ≥ 2r-1). Matches guide-site
// sequences closely for standard kits.
const deriveSequence = (basics, ultKey) => {
  if (!basics || basics.length < 3) return null;
  const b = basics.slice(0, 3);
  const rank = { [ultKey]: 0 };
  b.forEach((k) => { rank[k] = 0; });
  const ULT = new Set([6, 11, 16]);
  const seq = [];
  for (let lvl = 1; lvl <= 18; lvl++) {
    if (ULT.has(lvl)) { rank[ultKey]++; seq.push(ultKey); continue; }
    if (lvl <= 3) { const k = b[lvl - 1]; rank[k]++; seq.push(k); continue; }
    const pick =
      b.find((k) => rank[k] < 5 && lvl >= 2 * (rank[k] + 1) - 1) ||
      b.find((k) => rank[k] < 5) || b[0];
    rank[pick]++; seq.push(pick);
  }
  return seq;
};

// 18-entry array of ability keys ("Q"/"W"/"E"/"R"), or null when no order exists.
// No-ult champs (Udyr): the four stances all level, so the lowest-priority stance
// (order[3]) fills the 6/11/16 slots while the top three max as basics — this
// reproduces the real lines (AD Q>E>W with R dipped for the awaken CC; AP R>E>W
// maxed with Q barely touched) without pretending R is a 6/11/16 ultimate.
export const skillSequenceOf = (dd, roleData, alt) => {
  const explicit =
    (alt && alt.skillSequence) || (roleData && roleData.skillSequence) || SKILL_SEQUENCE[dd];
  if (explicit) return explicit;
  const order = skillOrderOf(dd, roleData, alt);
  if (!order || order.length < 3) return null;
  if (NO_ULT.has(dd)) {
    return order.length >= 4 ? deriveSequence(order.slice(0, 3), order[3]) : null;
  }
  return deriveSequence(order.slice(0, 3), "R");
};

export default skillOrderOf;
