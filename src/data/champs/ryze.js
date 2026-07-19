import { I } from "../runeHelpers.js";

const RYZE_MID_DEFAULT_RUNES = {
  keystone:       "Deathfire Touch",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Celerity","Scorch"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Overgrowth"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Ryze spams spells faster than any mage in the game, and Deathfire Touch adds a burn to every one of those hits — it stacks damage into his machine-gun EQ rotation better than any burst keystone. Manaflow Band feeds the mana pool his damage literally scales from, Celerity smooths his short-range weave pattern, and Scorch wins the early trades he needs to survive. Bone Plating and Overgrowth patch the weak early game before Rod of Ages comes online.",
};

// ══════════════════════════════════════════════════════════════════════════
//  RYZE — Mana-Stacking Battlemage / Late-Game Machine Gun
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"ryze", display:"Ryze", dd:"Ryze",
  color:"#1f3a6e", glow:"#5a8de0",
  lanes:["Mid"],
  roles:{
    Mid:{
      bans:["Naafiri","Aurelion Sol","Hwei"], replacements:["Viktor","Kassadin","Ahri"],
      role:"Mana-Stacking Battlemage / Late-Game Machine Gun",
      corePath:"Rod of Ages  ›  Mercury's Treads  ›  Archangel's Staff  ›  Actualizer",
      coreNote:"Ryze's damage scales off mana, so his build is a mana-stacking ramp: Rod of Ages grows into HP + mana + AP, Archangel's Staff converts the mana pool into raw AP and eventually Seraph's shield, and Actualizer layers on the haste that turns his rotation into a true machine gun. He is weak until two items and nearly unkillable in a side lane after three — play for the ramp, then Realm Warp flanks win fights your team didn't know were happening.",
      sideItems:["Seraph's Embrace","Zhonya's Hourglass","Banshee's Veil","Rylai's Crystal Scepter","Cosmic Drive","Void Staff"],
      data:{
        JUGGERNAUT:{ahead:[I("Rod of Ages","Stack HP and mana — they can't punish the ramp."),I("Rylai's Crystal Scepter","Perma-slow kites them forever with EQ spam."),I("Archangel's Staff","Mana-to-AP conversion outpaces their scaling.")],behind:[I("Zhonya's Hourglass","Stall the all-in when they reach you."),I("Banshee's Veil","Blocks their gap-close or pull."),I("Void Staff","Pen keeps the rotation damage honest.")],runes:{...RYZE_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rod of Ages","HP stacking blunts dive damage while you scale."),I("Rylai's Crystal Scepter","Slow their exit — a failed dive dies to EQ spam."),I("Zhonya's Hourglass","Stasis flips the tower dive.")],behind:[I("Zhonya's Hourglass","Mandatory dive insurance."),I("Banshee's Veil","Blocks the engage that starts the dive."),I("Mercury's Treads","Shorter CC, faster W root answer.")],runes:{...RYZE_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Rod of Ages","HP makes their one-shot math fail."),I("Zhonya's Hourglass","Deny the burst window entirely."),I("Archangel's Staff","Seraph's shield doubles the burst floor.")],behind:[I("Zhonya's Hourglass","Rush — stasis answers the combo you can't dodge."),I("Banshee's Veil","Blocks their opener."),I("Mercury's Treads","Reduces the lockdown before the burst.")],runes:{...RYZE_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rylai's Crystal Scepter","Slow denies the duel pattern — they can't stick to you."),I("Rod of Ages","HP + sustain wins the extended trade."),I("Archangel's Staff","Shield + AP outlasts their damage windows.")],behind:[I("Zhonya's Hourglass","Buy time in their all-in window."),I("Banshee's Veil","Blocks the engage tool."),I("Void Staff","Rotation damage stays real through MR.")],runes:{...RYZE_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Rod of Ages","HP stacking makes their full rotation survivable."),I("Archangel's Staff","Seraph's shield blanks their burst."),I("Void Staff","Out-damage them in the sustained window after.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo."),I("Zhonya's Hourglass","Survive the rotation, punish the cooldowns."),I("Mercury's Treads","MR + tenacity against their setup.")],runes:{...RYZE_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the mirror-style sustained fight."),I("Rod of Ages","Out-scale their HP ramp with your own."),I("Rylai's Crystal Scepter","Slow controls the spacing war.")],behind:[I("Banshee's Veil","Blocks the opening CC of their combo."),I("Zhonya's Hourglass","Survive the drain window."),I("Void Staff","Required through their MR curve.")],runes:{...RYZE_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Move through the poke and force the short-range game."),I("Rod of Ages","HP pool shrugs off poke chip."),I("Rylai's Crystal Scepter","Once close, the slow ends their kiting.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Survive the approach."),I("Cosmic Drive","Move speed to dodge the next volley.")],runes:{...RYZE_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Rylai's Crystal Scepter","Perma-slow ruins their kiting DPS."),I("Rod of Ages","HP makes you unburstable for an ADC."),I("Archangel's Staff","Shield covers the DPS you can't dodge.")],behind:[I("Zhonya's Hourglass","Deny their focus-fire window."),I("Banshee's Veil","Blocks the CC that sets their DPS up."),I("Mercury's Treads","Tenacity through the peel.")],runes:{...RYZE_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Void Staff","Pen burns through the shield sponge."),I("Rylai's Crystal Scepter","Slow sticks to the protected carry."),I("Archangel's Staff","Out-sustain their value curve.")],behind:[I("Void Staff","Keep damage real through shields."),I("Zhonya's Hourglass","Survive focus while your team engages."),I("Banshee's Veil","Blocks the setup CC.")],runes:{...RYZE_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rod of Ages","HP means a landed hook isn't lethal."),I("Rylai's Crystal Scepter","Punish the whiff with inescapable slows."),I("Archangel's Staff","Shield insurance for the pick attempt.")],behind:[I("Banshee's Veil","Spell shield eats the hook."),I("Zhonya's Hourglass","Stasis if the catch lands."),I("Mercury's Treads","Shorter lockdown on catch.")],runes:{...RYZE_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Shred the engage tank's MR."),I("Rylai's Crystal Scepter","Slow the engage before it starts."),I("Rod of Ages","HP to survive the engage that does land.")],behind:[I("Void Staff","Required to damage them at all."),I("Banshee's Veil","Blocks the initiation CC."),I("Zhonya's Hourglass","Survive the follow-up burst.")],runes:{...RYZE_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","Pen through the peel-tank's resists."),I("Rylai's Crystal Scepter","Slow lets you dive past them to the carry."),I("Archangel's Staff","Out-sustain the attrition war.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Zhonya's Hourglass","Survive being the focus."),I("Banshee's Veil","Blocks their lockdown.")],runes:{...RYZE_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Rod of Ages","Generic durability beats gimmick damage patterns."),I("Rylai's Crystal Scepter","Slow answers most trick kits."),I("Archangel's Staff","Scale past whatever they're doing.")],behind:[I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive the setup you can't scout."),I("Void Staff","Damage stays honest.")],runes:{...RYZE_MID_DEFAULT_RUNES}},
      },
    },
  },
};
