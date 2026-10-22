// ─────────────────────────────────────────────────────────────────────────────
//  forgeStyle.js — tokens and colour maths for the redesigned build page and
//  the in-game view (the components live in ForgeCards.jsx).
//
//  Colour (option C, the owner's choice, 2026-10-22): the champion's colour,
//  sampled from the splash on screen, for the primary button, selected
//  controls, the item set timeline and the skill-level blips. Orange and blue
//  keep ONE meaning on every champion: answers to the lane opponent, answers to
//  their team. Gold is for the FRGE.GG wordmark only.
// ─────────────────────────────────────────────────────────────────────────────
import { inGame as T } from "./theme.js";

export const LANE = "#f97316";   // answers to the lane opponent
export const TEAM = "#6db4e6";   // answers to their team

// ── colour maths: keep any champion colour readable on the dark cards ────────
const norm = (h) => {
  const s = String(h || "").trim();
  if (/^#[0-9a-f]{3}$/i.test(s)) return "#" + s.slice(1).split("").map((c) => c + c).join("");
  return /^#[0-9a-f]{6}$/i.test(s) ? s : "#d4af37";
};
const rgb = (h) => { const n = parseInt(norm(h).slice(1), 16); return [n >> 16, (n >> 8) & 255, n & 255]; };
const hex = (c) => "#" + c.map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");
const lum = (h) => {
  const [r, g, b] = rgb(h).map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const mix = (a, b, t) => hex(rgb(a).map((v, i) => v + (rgb(b)[i] - v) * t));
// Lighten toward white until it reads at 4.5:1 on the card surface (the
// mock's readable()).
export const readable = (h, bg = T.surface) => {
  let c = norm(h), t = 0;
  while (contrast(c, bg) < 4.5 && t < 1) { t += 0.05; c = mix(norm(h), "#ffffff", t); }
  return c;
};
const inkOn = (h) => (contrast(h, T.ground) >= contrast(h, T.text) ? T.ground : T.text);
const rgba = (h, a) => `rgba(${rgb(h).join(",")},${a})`;

// Everything the champion colour drives, from one sampled hex.
export function champColours(m) {
  const base = norm(m);
  const tint = readable(base);
  return {
    primary: base,                                  // the primary button
    ink: inkOn(base),                               // text on the primary button
    tint,                                           // timeline, level blips
    tintHi: readable(mix(tint, "#ffffff", 0.45)),   // R levels
    active: rgba(base, 0.3),                        // a selected segment
  };
}

// wide >= 1200: the item set spans the window; docked 641-1199: item set beside
// a side column (the desktop app docks at ~806 beside League); narrow: one column.
export const layoutOf = (w) => (w >= 1200 ? "wide" : w > 640 ? "docked" : "narrow");

export const card = (pad) => ({ background: T.surface, borderRadius: T.radiusCard, padding: `${pad}px`, minWidth: 0, boxSizing: "border-box" });
export const h2 = { margin: 0, fontSize: "16px", lineHeight: "24px", fontWeight: 600, color: T.text };
export const sub = { color: T.muted, fontSize: "13px" };
export const head = { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" };
export const textBtn = { border: 0, background: "none", color: T.text, font: `500 13px ${T.font}`, cursor: "pointer", padding: 0 };
