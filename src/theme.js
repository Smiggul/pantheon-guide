// ─────────────────────────────────────────────────────────────────────────────
//  src/theme.js  —  All visual constants for pantheon-guide
//  Drop this file in src/ alongside App.jsx.
//
//  HOW TO USE IN App.jsx:
//    import { colors, surfaces, text, ui, layout, ITEM_COLORS } from './theme';
//
//  Then replace the inline `S` object at the top of App() with:
//    const { gold, goldDim, textDim, border: borderColor, panelBg } = colors;
//
//  For reusable component styles call the helper functions:
//    style={ui.champPortraitActive(champ.glow)}
//    style={ui.classBubbleActive(classEntry.color, classEntry.glow)}
// ─────────────────────────────────────────────────────────────────────────────

// ── Colour tokens ─────────────────────────────────────────────────────────────
export const colors = {
  // Gold palette
  gold:         "#f0d060",
  goldDim:      "#b8860b",
  goldFaint:    "rgba(180,120,20,.14)",
  goldBorder:   "rgba(180,120,20,.2)",

  // Text
  textPrimary:  "#e8d5b0",
  textDim:      "#6a7a5a",
  textFaint:    "rgba(200,180,140,.38)",

  // Backgrounds
  bgPage:       "#060a0f",
  bgPanel:      "rgba(5,12,25,.95)",
  bgSurface:    "rgba(255,255,255,.04)",
  bgDark:       "rgba(0,0,0,.45)",

  // Borders
  borderFaint:  "rgba(255,255,255,.07)",
  borderMid:    "rgba(255,255,255,.12)",

  // Game-state colours
  ahead:  { text:"#f0d060", bg:"rgba(184,134,11,.18)",  border:"#b8860b60" },
  behind: { text:"#7eb8f7", bg:"rgba(74,111,165,.18)",  border:"#4a6fa560" },
};

// ── Typography ────────────────────────────────────────────────────────────────
export const text = {
  eyebrow: {
    fontSize: "10px", letterSpacing: "3px",
    textTransform: "uppercase", color: colors.goldDim,
  },
  label: {
    fontSize: "9px", letterSpacing: "2px",
    textTransform: "uppercase", color: "rgba(255,255,255,.25)",
  },
  body: {
    fontSize: "12px", color: "#b0a080", lineHeight: 1.6,
  },
  small: {
    fontSize: "10px", color: colors.textDim,
  },
};

// ── Surfaces / containers ─────────────────────────────────────────────────────
export const surfaces = {
  panel: {
    background:   colors.bgPanel,
    border:       `1px solid ${colors.goldBorder}`,
    borderRadius: "12px",
    padding:      "16px 20px",
  },
  card: {
    background:   colors.bgSurface,
    border:       `1px solid ${colors.borderFaint}`,
    borderRadius: "9px",
    padding:      "12px 14px",
  },
  overlay: {
    background:   "rgba(6,12,28,.97)",
    border:       "1px solid rgba(200,155,60,.35)",
    borderRadius: "8px",
    boxShadow:    "0 8px 32px rgba(0,0,0,.7)",
  },
  modal: {
    background:   "rgba(6,12,28,.98)",
    border:       "1px solid rgba(180,120,20,.35)",
    borderRadius: "16px",
    boxShadow:    "0 24px 80px rgba(0,0,0,.8), 0 0 0 1px rgba(180,120,20,.1)",
  },
};

// ── Component style helpers ───────────────────────────────────────────────────
export const ui = {
  // Champion portrait — selected/active
  champPortraitActive: (glow) => ({
    borderRadius: "9px",
    overflow:     "hidden",
    border:       `2.5px solid ${glow}`,
    boxShadow:    `0 0 18px ${glow}60`,
    background:   "#111",
  }),

  // Champion portrait — picker grid (hover effect added via onMouseEnter)
  champPortraitPicker: {
    borderRadius: "9px",
    overflow:     "hidden",
    border:       "1.5px solid rgba(255,255,255,.12)",
    background:   "#111",
    transition:   "all .15s",
  },

  // Class bubble — default (inactive)
  classBubble: {
    cursor:       "pointer",
    borderRadius: "12px",
    padding:      "14px 10px 12px",
    textAlign:    "center",
    background:   colors.bgSurface,
    border:       `1.5px solid ${colors.borderFaint}`,
    transition:   "all .2s ease",
  },

  // Class bubble — active / selected
  classBubbleActive: (color, glow) => ({
    background:  `radial-gradient(circle at 50% 30%,${glow}38 0%,${color}22 60%,${color}12 100%)`,
    border:      `1.5px solid ${glow}90`,
    boxShadow:   `0 0 18px ${glow}45, inset 0 0 16px ${glow}10`,
    transform:   "scale(1.04)",
  }),

  // Item card (left border accent)
  itemCard: (accentColor) => ({
    background:  colors.bgSurface,
    border:      `1px solid ${colors.borderFaint}`,
    borderLeft:  `4px solid ${accentColor}`,
    borderRadius:"9px",
    padding:     "12px 14px",
    display:     "flex",
    gap:         "14px",
    alignItems:  "flex-start",
  }),

  // Floating ahead/behind toggle
  floatingToggle: {
    position:     "fixed",
    bottom:       "24px",
    right:        "24px",
    zIndex:       100,
    display:      "flex",
    borderRadius: "10px",
    overflow:     "hidden",
    border:       "1px solid rgba(255,255,255,.1)",
    background:   "rgba(0,0,0,.8)",
    boxShadow:    "0 4px 24px rgba(0,0,0,.6)",
  },

  // Role icon pill — active
  rolePillActive: (color, glow) => ({
    width:       "30px",
    height:      "30px",
    borderRadius:"6px",
    overflow:    "hidden",
    cursor:      "pointer",
    border:      `2px solid ${glow}`,
    background:  `${color}30`,
    boxShadow:   `0 0 10px ${glow}60`,
    opacity:     1,
    transition:  "all .15s",
    display:     "flex",
    alignItems:  "center",
    justifyContent: "center",
  }),

  // Role icon pill — inactive
  rolePillInactive: {
    width:       "30px",
    height:      "30px",
    borderRadius:"6px",
    overflow:    "hidden",
    cursor:      "pointer",
    border:      "1px solid rgba(255,255,255,.15)",
    background:  "#111",
    opacity:     0.4,
    transition:  "all .15s",
    display:     "flex",
    alignItems:  "center",
    justifyContent: "center",
  },

  // Search input in champion picker
  searchInput: {
    background:  "rgba(255,255,255,.06)",
    border:      "1px solid rgba(255,255,255,.12)",
    borderRadius:"7px",
    padding:     "7px 12px",
    color:       colors.textPrimary,
    fontSize:    "13px",
    outline:     "none",
    fontFamily:  "inherit",
  },

  // Filter pill — active (role filter buttons)
  filterPillActive: {
    display:        "flex",
    alignItems:     "center",
    gap:            "5px",
    padding:        "5px 12px",
    borderRadius:   "20px",
    cursor:         "pointer",
    border:         `1px solid ${colors.goldDim}`,
    background:     "rgba(184,134,11,.2)",
    color:          colors.gold,
    fontSize:       "11px",
    fontWeight:     "bold",
    letterSpacing:  ".5px",
    transition:     "all .15s",
  },

  // Filter pill — inactive
  filterPillInactive: {
    display:        "flex",
    alignItems:     "center",
    gap:            "5px",
    padding:        "5px 12px",
    borderRadius:   "20px",
    cursor:         "pointer",
    border:         "1px solid rgba(255,255,255,.1)",
    background:     "rgba(255,255,255,.04)",
    color:          "#6a7a5a",
    fontSize:       "11px",
    letterSpacing:  ".5px",
    transition:     "all .15s",
  },

  // Detail panel tab — active
  tabActive: (accentColor) => ({
    padding:       "7px 18px",
    border:        "none",
    cursor:        "pointer",
    background:    `${accentColor}35`,
    color:         accentColor,
    fontSize:      "12px",
    fontWeight:    "bold",
    letterSpacing: ".5px",
    transition:    "all .15s",
    boxShadow:     `inset 0 -2px 0 ${accentColor}`,
  }),

  // Detail panel tab — inactive
  tabInactive: {
    padding:       "7px 18px",
    border:        "none",
    cursor:        "pointer",
    background:    "transparent",
    color:         "#5a6a5a",
    fontSize:      "12px",
    letterSpacing: ".5px",
    transition:    "all .15s",
  },

  // RunePage: rune circle glow ring — selected
  runeRingSelected: (treeColor) => ({
    position:     "absolute",
    inset:        -3,
    borderRadius: "50%",
    border:       `2px solid ${treeColor}`,
    boxShadow:    `0 0 12px ${treeColor}80, 0 0 24px ${treeColor}30`,
    transition:   "all .18s",
    zIndex:       1,
  }),

  // RunePage: rune circle glow ring — unselected
  runeRingUnselected: {
    position:     "absolute",
    inset:        -1,
    borderRadius: "50%",
    border:       "1px solid rgba(255,255,255,.10)",
    boxShadow:    "none",
    transition:   "all .18s",
    zIndex:       1,
  },

  // RunePage: rune image wrapper — selected
  runeImageWrapSelected: {
    width:          "100%",
    height:         "100%",
    borderRadius:   "50%",
    overflow:       "hidden",
    background:     "rgba(0,0,0,.5)",
    opacity:        1,
    transition:     "opacity .18s",
    display:        "flex",
    alignItems:     "center",
    justifyContent: "center",
    filter:         "none",
  },

  // RunePage: rune image wrapper — unselected/dim
  runeImageWrapDim: {
    width:          "100%",
    height:         "100%",
    borderRadius:   "50%",
    overflow:       "hidden",
    background:     "rgba(0,0,0,.5)",
    opacity:        0.22,
    transition:     "opacity .18s",
    display:        "flex",
    alignItems:     "center",
    justifyContent: "center",
    filter:         "grayscale(100%)",
  },
};

// ── Page-level layout ─────────────────────────────────────────────────────────
export const layout = {
  page: {
    minHeight:   "100vh",
    background:  "radial-gradient(ellipse at 15% 5%,#0d1117 0%,#060a0f 55%,#0a0d14 100%)",
    fontFamily:  "'Georgia','Times New Roman',serif",
    color:       colors.textPrimary,
  },
  pageHeader: {
    textAlign:   "center",
    padding:     "28px 24px 14px",
    background:  "linear-gradient(180deg,rgba(180,120,20,.14) 0%,transparent 100%)",
    borderBottom:`1px solid ${colors.goldBorder}`,
  },
  section: {
    maxWidth: "1400px",
    margin:   "0 auto",
    padding:  "0 24px",
  },
  bubblesGrid: {
    display:               "grid",
    gridTemplateColumns:   "repeat(auto-fill, minmax(148px, 1fr))",
    gap:                   "10px",
    padding:               "14px 24px",
    maxWidth:              "1400px",
    margin:                "0 auto",
  },
  champPickerGrid: {
    overflowY:             "auto",
    padding:               "16px 20px 20px",
    display:               "grid",
    gridTemplateColumns:   "repeat(auto-fill, minmax(78px, 1fr))",
    gap:                   "10px",
    flex:                  1,
  },
  classChampGrid: {
    display:             "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(72px, 1fr))",
    gap:                 "10px",
  },
};

// ── Item accent colours (dot fallback when item image is missing) ──────────────
export const ITEM_COLORS = {
  // Fighters
  "Eclipse":                  "#ffd700",
  "Black Cleaver":            "#e74c3c",
  "Sundered Sky":             "#ffe066",
  "Trinity Force":            "#ff8c00",
  "Spear of Shojin":          "#ff9800",
  "Stridebreaker":            "#e74c3c",
  "Heartsteel":               "#e91e63",
  "Titanic Hydra":            "#e67e22",
  "Ravenous Hydra":           "#c0392b",
  "Guinsoo's Rageblade":      "#9b59b6",
  "Experimental Hexplate":    "#ff6b35",
  "Dusk and Dawn":            "#9b59b6",
  "Navori Flickerblade":      "#3498db",

  // Armor pen
  "Serylda's Grudge":         "#f39c12",
  "Lord Dominik's Regards":   "#e67e22",

  // Survivability
  "Sterak's Gage":            "#1abc9c",
  "Death's Dance":            "#e91e63",
  "Guardian Angel":           "#f39c12",
  "Maw of Malmortius":        "#9b59b6",
  "Banshee's Veil":           "#673ab7",
  "Sterak's Gage":            "#1abc9c",
  "Spirit Visage":            "#3498db",
  "Thornmail":                "#2ecc71",
  "Warmog's Armor":           "#c0392b",
  "Force of Nature":          "#27ae60",
  "Dead Man's Plate":         "#2e4053",
  "Gargoyle Stoneplate":      "#7f8c8d",

  // Boots
  "Plated Steelcaps":         "#95a5a6",
  "Mercury's Treads":         "#3498db",
  "Sorcerer's Shoes":         "#7986cb",
  "Boots of Swiftness":       "#80cbc4",
  "Ionian Boots of Lucidity": "#27ae60",

  // Grievous wounds
  "Mortal Reminder":          "#ff5722",
  "Randuin's Omen":           "#2ecc71",
  "Frozen Heart":             "#00bcd4",

  // Utility
  "Serpent's Fang":           "#4caf50",
  "Youmuu's Ghostblade":      "#607d8b",
  "Edge of Night":            "#1a0a2e",

  // On-hit
  "Nashor's Tooth":           "#9cba00",
  "Wit's End":                "#40e0d0",
  "Blade of the Ruined King": "#8b0000",

  // AP
  "Liandry's Torment":        "#ff6b35",
  "Malignance":               "#a855f7",
  "Shadowflame":              "#ff4444",
  "Rabadon's Deathcap":       "#ff69b4",
  "Void Staff":               "#9400d3",
  "Morellonomicon":           "#b22222",
  "Zhonya's Hourglass":       "#daa520",
  "Rylai's Crystal Scepter":  "#4fc3f7",
  "Lich Bane":                "#b8860b",
  "Stormsurge":               "#00bcd4",
  "Cryptbloom":               "#2ecc71",
  "Hextech Rocketbelt":       "#ff6b35",
};
