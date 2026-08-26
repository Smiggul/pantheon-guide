// ─────────────────────────────────────────────────────────────────────────────
//  ddOverrides.js — the ONE canonical display-name → Data Dragon key map + the
//  resolver. Data Dragon's champion ids don't always match display names
//  ("Wukong" → "MonkeyKing", "Nunu & Willump" → "Nunu", "Cho'Gath" → "Chogath",
//  "Renata Glasc" → "Renata"). ALWAYS resolve a display name through toDDKey()
//  here instead of hand-writing a dd key — that's what keeps champion images,
//  CHAMP_KEYS / LCU ids, tier-list tiles, and jungle-clear routes all pointing at
//  the same champion. (A champ file's own `dd:` field already equals toDDKey of
//  its display name, so keying data by `champ.dd` is equivalent.)
// ─────────────────────────────────────────────────────────────────────────────

export const DD_OVERRIDES = {
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

// Fallback sanitiser for names not in the override map.
const strip = (name) => String(name)
  .replace(/'([A-Z])/g, (_, c) => c.toLowerCase()) // 'K → k  (Vel'Koz → Velkoz)
  .replace(/\./g, "")    // remove dots  (Dr. → Dr)
  .replace(/ & .*/g, "") // drop "& Willump" etc
  .replace(/ /g, "")     // remove spaces
  .replace(/'/g, "");    // any leftover apostrophes

// Display name → Data Dragon key (image filename, CHAMP_KEYS lookup, champ.dd).
export const toDDKey = (name) => DD_OVERRIDES[name] || strip(name);

// Alias kept for existing call sites — identical behaviour to toDDKey.
export const toDD = toDDKey;
