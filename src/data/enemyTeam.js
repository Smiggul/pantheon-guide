// ─────────────────────────────────────────────────────────────────────────────
//  enemyTeam.js  —  reads the live enemy team (from the champ-select session) and
//  produces a "versus team" readout: each member's role + class + damage type, a
//  team damage split (AD / AP) and threat flags (heavy CC, dive, shields, healing,
//  poke). The item answers to those threats are built by gamePlan.js.
//
//  Pure logic, no React / no client calls. Keys are DDragon ids (matching
//  champClasses.js). classOf gives the primary class; the curated sets below add
//  the champ-specific facts a class label can't (an AP assassin vs an AD one,
//  who shields, who heals) so the recommendation is honest, not just class-shaped.
// ─────────────────────────────────────────────────────────────────────────────
import { classOf } from "./champClasses.js";
import { damageTypeOf } from "./damageTypes.js";

// Damage type is now an explicit per-champion map (damageTypes.js) — class is a
// poor proxy (AP catchers, AP skirmishers, AD tanks…), so we classify each champ
// directly there and just re-export it here.
export const damageOf = (dd) => damageTypeOf(dd);
// Only true frontline tanks are counted as "tank" — catchers are mages/playmakers.
const TANK_CLASSES = new Set(["VANGUARD", "WARDEN"]);

// Curated fact sets (DDragon ids) ────────────────────────────────────────────
// Exported for matchupAdjust.js, which reads the same facts for the lane opponent.
export const SHIELD_CHAMPS = new Set([ // grant shields → Serpent's Fang shreds them
  "Lulu", "Karma", "Janna", "Seraphine", "Renata", "Ivern", "Milio", "Orianna",
  "Rakan", "Taric", "Yuumi", "Riven",
  // Big self-shields a lane opponent leans on (each kit's text names the shield):
  // Mordekaiser W, Sett W, Yasuo passive, Yone W, Garen W, Camille passive,
  // Malphite passive, Shen passive, Rumble W.
  "Mordekaiser", "Sett", "Yasuo", "Yone", "Garen", "Camille", "Malphite", "Shen", "Rumble",
]);
export const HEAL_CHAMPS = new Set([ // strong healing/sustain → Grievous Wounds
  "Soraka", "Sona", "Nami", "Yuumi", "Milio", "Taric", "Seraphine", "Aatrox",
  "DrMundo", "Warwick", "Vladimir", "Swain", "Briar", "Nilah", "Sylas", "Zac", "Fiddlesticks",
  // Self-sustain laners and junglers where Grievous Wounds is a standard buy:
  // the heal is a core part of how they win a fight, not a minor effect.
  "Mordekaiser", "Volibear", "Illaoi", "Olaf", "Darius", "Fiora", "Irelia", "Renekton",
  "Trundle", "Udyr", "Kayn", "Viego", "Gwen", "Gangplank", "Nasus", "Tryndamere", "MasterYi",
  "Yorick", "Maokai",
]);
// Hard, reliable CC beyond the inherently-CC tank classes (VANGUARD/CATCHER).
export const CC_CHAMPS = new Set([
  "Ashe", "JarvanIV", "Lissandra", "Veigar", "Neeko", "Zoe", "Morgana", "Warwick",
  "Sett", "KSante", "Ahri", "TwistedFate", "Elise", "Anivia", "Brand", "Syndra", "Lux",
]);

// ── My champion's defensive itemisation flavour ─────────────────────────────
export function myProfileOf(dd) {
  const cls = classOf(dd);
  if (cls === "VANGUARD" || cls === "WARDEN") return "TANK";
  return damageOf(dd) === "AP" ? "AP" : "AD";
}

// What the enemy team threatens, as counts. Shared by the Enemy team panel
// (analyzeEnemyTeam) and the game plan (gamePlan.js), which turns these into the
// mid and late layer of the build. dds: DDragon ids of the known enemies.
export function teamThreats(dds) {
  let ad = 0, ap = 0, mixed = 0, tank = 0;
  let shields = 0, heals = 0, dive = 0, cc = 0, poke = 0;
  for (const dd of dds || []) {
    if (!dd) continue;
    const cls = classOf(dd), dmg = damageOf(dd);
    if (dmg === "AP") ap++;
    else if (dmg === "Mixed") mixed++;
    else ad++;
    if (TANK_CLASSES.has(cls)) tank++;
    if (SHIELD_CHAMPS.has(dd)) shields++;
    if (HEAL_CHAMPS.has(dd)) heals++;
    if (cls === "ASSASSIN" || cls === "DIVER") dive++;
    if (cls === "VANGUARD" || cls === "CATCHER" || CC_CHAMPS.has(dd)) cc++;
    if (cls === "ARTILLERY" || cls === "BURST_MAGE") poke++;
  }
  return { ad, ap, mixed, tank, shields, heals, dive, cc, poke };
}

// ── Analyse the enemy team ──────────────────────────────────────────────────
//  theirTeam: [{ championId, assignedPosition }]  (from the LCU session)
//  keyToDd:   championId -> DDragon id  (passed in; lives in App.jsx)
//  posRole:   assignedPosition -> role label
//  myDd:      your champion's DDragon id
//  myOppDd:   your lane opponent's DDragon id (to highlight that member)
// The item answers to the team used to live here as a separate "Consider" list;
// they are now part of the one game plan (gamePlan.js), ordered by phase.
export function analyzeEnemyTeam(theirTeam, keyToDd, posRole, myDd, myOppDd) {
  const members = (theirTeam || [])
    .map((p) => {
      const dd = p.championId > 0 ? keyToDd[p.championId] : null;
      return {
        dd,
        role: posRole[p.assignedPosition] || null,
        cls: dd ? classOf(dd) : null,
        dmg: dd ? damageOf(dd) : null,
        isOpp: !!dd && dd === myOppDd,
        picked: !!dd,
      };
    })
    .filter((m) => m.picked); // only resolved picks; unpicked slots are dropped

  const t = teamThreats(members.map((m) => m.dd));
  const flags = [];
  if (t.cc >= 2) flags.push({ key: "cc", label: "heavy CC" });
  if (t.dive >= 1) flags.push({ key: "dive", label: t.dive >= 2 ? "dive-heavy" : "assassin threat" });
  if (t.shields >= 1) flags.push({ key: "shield", label: "enemy shielding" });
  if (t.heals >= 1) flags.push({ key: "heal", label: "enemy healing" });
  if (t.poke >= 2) flags.push({ key: "poke", label: "poke / burst" });

  return { members, split: { ad: t.ad, ap: t.ap, mixed: t.mixed, tank: t.tank }, flags,
    profile: myDd ? myProfileOf(myDd) : "AD" };
}

export default analyzeEnemyTeam;
