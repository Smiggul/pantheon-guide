// ─────────────────────────────────────────────────────────────────────────────
//  itemCounters.js  —  groups situational items by WHAT THEY COUNTER, not just
//  what champ they're listed under. This is item-level metadata: add an entry
//  here once and every champion's "Common Situational Items" strip that
//  contains that item name automatically gets it labeled and explained — no
//  per-champion-file edits needed (same overlay pattern as itemRationale.js).
//
//  Shape: [{ label, items:[...names], note }]
//  Item names must match item.json / lcuData ITEM_IDS (same rule as champ data).
// ─────────────────────────────────────────────────────────────────────────────

export const ITEM_COUNTERS = [
  {
    label: "Anti-Heal",
    items: ["Chempunk Chainsword", "Morellonomicon", "Mortal Reminder", "Oblivion Orb", "Thornmail"],
    note: "Grievous Wounds cuts enemy healing, lifesteal and omnivamp by 40%. Buy into sustain champions — Warwick, Darius, Briar, Dr. Mundo, Aatrox, Volibear, Soraka, Vladimir — the moment their regen starts winning fights.",
  },
  {
    label: "Heavy Shields",
    items: ["Serpent's Fang"],
    note: "Reduces the target's shields by 50% on hit and deals bonus damage to shielded targets. Buy vs shield-stacking enchanters and comps — Lulu, Janna, Karma, Renata Glasc, Braum, Shen ult.",
  },
  {
    label: "Armor Stacking",
    items: ["Black Cleaver", "Serylda's Grudge", "Lord Dominik's Regards"],
    note: "Buy into armor-stacking tanks and juggernauts. Black Cleaver (gradual % current-armor shred + HP + haste) and Serylda's Grudge (flat % pen + slow) solve the same problem — most builds only have item-slot room for one, not both: take Serylda's when you need the slow to stick to a target, Cleaver for a longer sustained trade. Lord Dominik's Regards is the % max-HP pen pick specifically vs stacked-HP tanks.",
  },
];

// item display name -> its counter-category entry (or null). First match wins;
// no current entries overlap, but a name could theoretically appear in >1 group.
const INDEX = new Map();
for (const cat of ITEM_COUNTERS) for (const name of cat.items) if (!INDEX.has(name)) INDEX.set(name, cat);

export const counterCategoryOf = (name) => INDEX.get(name) || null;

export default ITEM_COUNTERS;
