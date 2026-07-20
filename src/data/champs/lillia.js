import { I } from "../runeHelpers.js";

const LILLIA_JGL_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Coup de Grace"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Cosmic Insight"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror stacks instantly off Lillia's multi-target Q spinning and converts into healing through her passive's ramping burns — she's a drain-fighter disguised as a skirmisher. Triumph refunds HP through the extended kite-fights she wins, Legend: Haste keeps the Q uptime near-permanent, Coup de Grace finishes what the dream-dust burns started, and the Inspiration line (Magical Footwear, Cosmic Insight) accelerates her item-hungry curve and shortens the Lilting Lullaby windows her picks revolve around.",
};

// ══════════════════════════════════════════════════════════════════════════
//  LILLIA — Bashful Bloom: Kite-Burn Drain Jungler  (A tier Jungle 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"lillia", display:"Lillia", dd:"Lillia",
  color:"#4a2a3a", glow:"#f090c0",
  lanes:["Jungle"],
  roles:{
    Jungle:{
      bans:["Udyr","Briar","Warwick"], replacements:["Karthus","Ekko","Nidalee"],
      role:"Dream-Dust Kite Jungler",
      corePath:"Liandry's Torment  ›  Sorcerer's Shoes  ›  Riftmaker  ›  Zhonya's Hourglass",
      coreNote:"Lillia never stops moving and never stops burning — Q's speed stacking makes her literally uncatchable while dream dust melts everyone chasing her. Liandry's Torment triple-stacks the burn identity, Riftmaker's omnivamp converts the sustained damage into a health bar that refuses to drop, and Zhonya's covers the moments the kite breaks down. Rylai's makes the kiting inescapable. Lilting Lullaby is one of the best engage-and-disengage ults in the game — sleep three, burst one, dance away.",
      sideItems:["Rylai's Crystal Scepter","Rabadon's Deathcap","Void Staff","Morellonomicon","Banshee's Veil","Cosmic Drive"],
      data:{
        JUGGERNAUT:{ahead:[I("Liandry's Torment","Burn scales off their HP while they chase forever."),I("Rylai's Crystal Scepter","Slowed juggernauts never touch the deer."),I("Riftmaker","Drain the extended chase-fight.")],behind:[I("Rylai's Crystal Scepter","Kite their invades with slows."),I("Zhonya's Hourglass","Stasis escapes the caught clear."),I("Void Staff","Pen keeps the burn real.")],runes:{...LILLIA_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Riftmaker","Out-sustain their engage window while burning."),I("Rylai's Crystal Scepter","Slow the dive — they never complete it."),I("Zhonya's Hourglass","Stasis wastes the engage.")],behind:[I("Zhonya's Hourglass","Mandatory — you're soft when the kite breaks."),I("Banshee's Veil","Blocks the engage opener."),I("Cosmic Drive","More speed to reopen the gap.")],runes:{...LILLIA_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Rylai's Crystal Scepter","Slowed assassins burn to death mid-chase."),I("Zhonya's Hourglass","Stasis blanks their combo."),I("Riftmaker","Drain back whatever lands.")],behind:[I("Zhonya's Hourglass","Rush — stasis answers the invade one-shot."),I("Banshee's Veil","Blocks the opener."),I("Cosmic Drive","Speed beats their gap-close.")],runes:{...LILLIA_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Riftmaker","Their duel is your kite — omnivamp wins it."),I("Liandry's Torment","Burn stacks while they whiff."),I("Rylai's Crystal Scepter","Slow denies their stick entirely.")],behind:[I("Zhonya's Hourglass","Deny the 1v1 they invade for."),I("Rylai's Crystal Scepter","Kite harder."),I("Morellonomicon","Cut their sustain.")],runes:{...LILLIA_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Liandry's Torment","Your sustained burn out-totals their combo."),I("Zhonya's Hourglass","Stasis their rotation, burn the gap."),I("Riftmaker","Drain back the poke.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the burn honest.")],runes:{...LILLIA_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the drain mirror."),I("Riftmaker","Your omnivamp out-ramps theirs."),I("Morellonomicon","Cut the heal-back loop.")],behind:[I("Morellonomicon","Anti-heal first."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...LILLIA_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Cosmic Drive","Q speed stacking closes their poke range for free."),I("Liandry's Torment","Burn them once inside."),I("Rylai's Crystal Scepter","Slow their reposition.")],behind:[I("Banshee's Veil","Eats one long-range spell on approach."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Cosmic Drive","More approach speed.")],runes:{...LILLIA_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Rylai's Crystal Scepter","Slowed ADCs can't kite the burn deer."),I("Liandry's Torment","Burn through their lifesteal."),I("Rabadon's Deathcap","Sleep-into-W one-shots them.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the peel CC."),I("Void Staff","Burn stays lethal.")],runes:{...LILLIA_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Liandry's Torment","Burn outlasts their shield budget."),I("Morellonomicon","Cut the heal package."),I("Void Staff","Pen through the sponge.")],behind:[I("Morellonomicon","Anti-heal is the win condition."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Void Staff","Keep the burn honest.")],runes:{...LILLIA_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Cosmic Drive","Speed makes their hooks unlandable."),I("Liandry's Torment","Burn the catcher for every attempt."),I("Rylai's Crystal Scepter","Slow their follow-up.")],behind:[I("Banshee's Veil","Spell shield eats the hook."),I("Zhonya's Hourglass","Stasis if caught."),I("Cosmic Drive","Speed to reposition.")],runes:{...LILLIA_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Liandry's Torment","Percent-HP burn melts engage tanks at objectives."),I("Rylai's Crystal Scepter","Slow the engage before it starts."),I("Void Staff","Pen through their MR stack.")],behind:[I("Void Staff","Required against their frontline."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation.")],runes:{...LILLIA_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Liandry's Torment","Burn through the peel-tank's HP."),I("Void Staff","Pen through their resist stack."),I("Rabadon's Deathcap","Out-scale the peel budget.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Morellonomicon","Cut their sustain support."),I("Zhonya's Hourglass","Survive the counter-engage.")],runes:{...LILLIA_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Rylai's Crystal Scepter","Kite-and-burn answers most gimmicks."),I("Liandry's Torment","DoTs beat trick durability."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...LILLIA_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
