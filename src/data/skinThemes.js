// ─────────────────────────────────────────────────────────────────────────────
//  skinThemes.js — per-champion skin palettes for the Forge theme.
//   Colours were sampled directly off each champion skin's splash art
//   (primary / highlight / accent). When the Forge theme is active and the
//   selected champion has an entry here, the app re-skins its accents to this
//   palette and drops the skin splash behind the hero (dimmed, never obscuring).
//   Keyed by Data Dragon id (champ.dd). `splash` is the file base in
//   public/skins/<splash>.jpg (bundled downsampled art — offline-safe).
//   Extend this map to add more champions; anything not listed falls back to
//   the default molten forge palette.
// ─────────────────────────────────────────────────────────────────────────────
export const SKIN_THEMES = {
  Ornn:      { skin: "The Forge",       m: "#E24A2A", h: "#FF8C42", a: "#8A1F24", splash: "Ornn_0" },
  Volibear:  { skin: "Duality Dragon",  m: "#2E7BE8", h: "#7FC0FF", a: "#E8C271", splash: "Volibear_7" },
  Pantheon:  { skin: "Ruined",          m: "#22C7A6", h: "#7FF7DD", a: "#1B7A68", splash: "Pantheon_25" },
  Aatrox:    { skin: "Blood Moon",      m: "#C4202A", h: "#F0484A", a: "#7A1418", splash: "Aatrox_7" },
  Lillia:    { skin: "Spirit Blossom",  m: "#9B6BE8", h: "#C79CFF", a: "#F072C5", splash: "Lillia_1" },
  Teemo:     { skin: "Little Devil",    m: "#D9242A", h: "#FF9E3D", a: "#8A4FA8", splash: "Teemo_14" },
  Yasuo:     { skin: "Nightbringer",    m: "#E86A1E", h: "#FFB35A", a: "#7A3410", splash: "Yasuo_9" },
  Jinx:      { skin: "Star Guardian",   m: "#E33A66", h: "#FF7E9C", a: "#8B4FBE", splash: "Jinx_4" },
  Kaisa:     { skin: "K/DA",            m: "#9A3FE8", h: "#C77BFF", a: "#E84AC4", splash: "Kaisa_14" },
  Zed:       { skin: "Galaxy Slayer",   m: "#C9A24A", h: "#FFD880", a: "#4A5BC8", splash: "Zed_13" },
};

export const skinThemeOf = (dd) => SKIN_THEMES[dd] || null;
