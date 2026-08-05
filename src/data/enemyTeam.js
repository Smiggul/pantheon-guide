// ─────────────────────────────────────────────────────────────────────────────
//  enemyTeam.js  —  reads the live enemy team (from the champ-select session) and
//  produces a "versus team" readout: each member's role + class + damage type, a
//  team damage split (AD / AP), threat flags (heavy CC, dive, shields, healing,
//  poke), and a short list of counter-items tailored to YOUR champion.
//
//  Pure logic, no React / no client calls. Keys are DDragon ids (matching
//  champClasses.js). classOf gives the primary class; the curated sets below add
//  the champ-specific facts a class label can't (an AP assassin vs an AD one,
//  who shields, who heals) so the recommendation is honest, not just class-shaped.
// ─────────────────────────────────────────────────────────────────────────────
import { classOf } from "./champClasses.js";

// Damage type ── classes that are cleanly one type, then per-champ overrides for
// the classes that split (assassins, specialists) and the few true hybrids.
const AD_CLASSES = new Set(["MARKSMAN", "SKIRMISHER", "DIVER", "JUGGERNAUT"]);
const AP_CLASSES = new Set(["BURST_MAGE", "BATTLEMAGE", "ARTILLERY", "ENCHANTER"]);
const TANK_CLASSES = new Set(["VANGUARD", "WARDEN", "CATCHER"]);
// AP champs whose class (ASSASSIN / SPECIALIST) doesn't imply magic damage.
const AP_OVERRIDE = new Set([
  "Akali", "Ekko", "Evelynn", "Fizz", "Kassadin", "Katarina", "Leblanc", "Locke", // AP assassins
  "Teemo", "Kennen", "Nidalee", "Heimerdinger", "Azir", "Singed", "TwistedFate", "Fiddlesticks", // AP specialists
]);
const MIXED_OVERRIDE = new Set(["Kaisa", "Jax", "Corki", "Kayle"]); // meaningful hybrid AD+AP

export function damageOf(dd) {
  if (MIXED_OVERRIDE.has(dd)) return "Mixed";
  const cls = classOf(dd);
  if (AP_OVERRIDE.has(dd)) return "AP";
  if (AP_CLASSES.has(cls)) return "AP";
  if (AD_CLASSES.has(cls)) return "AD";
  return "AD"; // tanks/catchers deal little; bucketed as physical for the split
}

// Curated fact sets (DDragon ids) ────────────────────────────────────────────
const SHIELD_CHAMPS = new Set([ // grant shields → Serpent's Fang shreds them
  "Lulu", "Karma", "Janna", "Seraphine", "Renata", "Ivern", "Milio", "Orianna",
  "Rakan", "Taric", "Yuumi", "Riven",
]);
const HEAL_CHAMPS = new Set([ // strong healing/sustain → Grievous Wounds
  "Soraka", "Sona", "Nami", "Yuumi", "Milio", "Taric", "Seraphine", "Aatrox",
  "DrMundo", "Warwick", "Vladimir", "Swain", "Briar", "Nilah", "Sylas", "Zac", "Fiddlesticks",
]);
// Hard, reliable CC beyond the inherently-CC tank classes (VANGUARD/CATCHER).
const CC_CHAMPS = new Set([
  "Ashe", "JarvanIV", "Lissandra", "Veigar", "Neeko", "Zoe", "Morgana", "Warwick",
  "Sett", "KSante", "Ahri", "TwistedFate", "Elise", "Anivia", "Brand", "Syndra", "Lux",
]);

// ── My champion's defensive itemisation flavour ─────────────────────────────
export function myProfileOf(dd) {
  const cls = classOf(dd);
  if (cls === "VANGUARD" || cls === "WARDEN") return "TANK";
  return damageOf(dd) === "AP" ? "AP" : "AD";
}

// Counter items keyed by (need, my profile). Names must match item.json so the
// icons resolve. Each entry is the item the reader should build for that threat.
const MR_ITEM   = { AP: "Banshee's Veil", AD: "Maw of Malmortius", TANK: "Force of Nature" };
const ARMOR_ITEM = { AP: "Zhonya's Hourglass", AD: "Death's Dance", TANK: "Randuin's Omen" };
const ANTIHEAL  = { AP: "Morellonomicon", AD: "Chempunk Chainsword", TANK: "Thornmail" };
const ANTIDIVE  = { AP: "Zhonya's Hourglass", AD: "Guardian Angel", TANK: "Randuin's Omen" };

// ── Analyse the enemy team ──────────────────────────────────────────────────
//  theirTeam: [{ championId, assignedPosition }]  (from the LCU session)
//  keyToDd:   championId -> DDragon id  (passed in; lives in App.jsx)
//  posRole:   assignedPosition -> role label
//  myDd:      your champion's DDragon id (tailors the counters)
//  myOppDd:   your lane opponent's DDragon id (to highlight that member)
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

  let ad = 0, ap = 0, mixed = 0, tank = 0;
  let shields = 0, heals = 0, dive = 0, cc = 0, poke = 0;
  for (const m of members) {
    if (m.dmg === "AP") ap++;
    else if (m.dmg === "Mixed") { mixed++; ap += 0; ad += 0; }
    else ad++;
    if (TANK_CLASSES.has(m.cls)) tank++;
    if (SHIELD_CHAMPS.has(m.dd)) shields++;
    if (HEAL_CHAMPS.has(m.dd)) heals++;
    if (m.cls === "ASSASSIN" || m.cls === "DIVER") dive++;
    if (m.cls === "VANGUARD" || m.cls === "CATCHER" || CC_CHAMPS.has(m.dd)) cc++;
    if (m.cls === "ARTILLERY" || m.cls === "BURST_MAGE") poke++;
  }

  const flags = [];
  if (cc >= 2) flags.push({ key: "cc", label: "heavy CC" });
  if (dive >= 1) flags.push({ key: "dive", label: dive >= 2 ? "dive-heavy" : "assassin threat" });
  if (shields >= 1) flags.push({ key: "shield", label: "enemy shielding" });
  if (heals >= 1) flags.push({ key: "heal", label: "enemy healing" });
  if (poke >= 2) flags.push({ key: "poke", label: "poke / burst" });

  const prof = myDd ? myProfileOf(myDd) : "AD";
  const counters = buildCounters({ ad, ap, cc, dive, shields, heals }, prof);

  return { members, split: { ad, ap, mixed, tank }, flags, counters, profile: prof };
}

function buildCounters({ ad, ap, cc, dive, shields, heals }, prof) {
  const out = [];
  const push = (name, why) => { if (name && !out.some((o) => o.name === name)) out.push({ name, why }); };

  const apLean = ap >= 2 && ap >= ad;
  const adLean = ad >= 2 && ad > ap;

  // 1) Anti-heal first — it's cheap, early, and hard-counters a whole strategy.
  if (heals >= 1) push(ANTIHEAL[prof], "cuts enemy healing (Grievous Wounds)");

  // 2) Boots + a resist item against the dominant damage type.
  if (apLean) {
    push("Mercury's Treads", `${ap} AP threats — MR + tenacity`);
    push(MR_ITEM[prof], "magic resist vs their casters");
  } else if (adLean) {
    push("Plated Steelcaps", `${ad} AD threats — armor`);
    push(ARMOR_ITEM[prof], "armor vs their physical damage");
  }

  // 3) Shield-shred (lethality item — only meaningful on AD builds).
  if (shields >= 1 && prof === "AD") push("Serpent's Fang", "shreds enemy shields");

  // 4) Anti-dive / survive their assassins.
  if (dive >= 1) push(ANTIDIVE[prof], dive >= 2 ? "survive the dive" : "blunt their assassin");

  // 5) If they're CC-heavy but we didn't already take Mercs, flag tenacity.
  if (cc >= 2 && !out.some((o) => o.name === "Mercury's Treads"))
    push("Mercury's Treads", "cut the CC chain (tenacity)");

  return out.slice(0, 4);
}

export default analyzeEnemyTeam;
