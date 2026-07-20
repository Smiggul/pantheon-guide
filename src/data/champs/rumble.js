import { I } from "../runeHelpers.js";

const RUMBLE_TOP_DEFAULT_RUNES = {
  keystone:       "Deathfire Touch",
  primary:        "Sorcery",
  primaryRunes:   ["Nimbus Cloak","Absolute Focus","Scorch"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Unflinching"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Deathfire Touch stacks a burn on top of Rumble's flamespitter — two DoTs ticking through every trade he takes in the danger zone. Nimbus Cloak converts summoner casts into engage windows for the Equalizer angle, Absolute Focus rewards the ranged harass phase before all-ins, Scorch wins the early flame trades, and Bone Plating + Unflinching stabilise the melee matchups that want to punish his manaless aggression before Liandry's arrives.",
};

// ══════════════════════════════════════════════════════════════════════════
//  RUMBLE — Mechanized Menace: Flamespitter Battlemage  (B/C+ Top 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"rumble", display:"Rumble", dd:"Rumble",
  color:"#5a2a10", glow:"#f08040",
  lanes:["Top"],
  roles:{
    Top:{
      bans:["Kennen","Kayle","Shen"], replacements:["Teemo","Kennen","Aurora"],
      role:"Danger-Zone Flame Battlemage",
      corePath:"Liandry's Torment  ›  Sorcerer's Shoes  ›  Bloodletter's Curse  ›  Zhonya's Hourglass",
      coreNote:"Rumble is a danger-zone game: keep heat in the yellow band and his flamespitter melts entire waves and health bars alike. Liandry's Torment triple-stacks the burn identity, Bloodletter's Curse is the current core — its MR shred amplifies every flame tick and Equalizer second — and Zhonya's Hourglass covers the point-blank spraying his damage profile demands. Rabadon's closes the scaling. The Equalizer is a teamfight-deciding wall of fire: cast it across the choke they must cross, not on where they stand.",
      sideItems:["Rabadon's Deathcap","Void Staff","Rylai's Crystal Scepter","Morellonomicon","Banshee's Veil","Spirit Visage"],
      data:{
        JUGGERNAUT:{ahead:[I("Liandry's Torment","Burn scales off their HP as they walk the flames."),I("Bloodletter's Curse","Shred amplifies every tick."),I("Rylai's Crystal Scepter","Slowed juggernauts roast longer.")],behind:[I("Rylai's Crystal Scepter","Kite their walk-down with flame slows."),I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Void Staff","Pen keeps the burn real.")],runes:{...RUMBLE_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Liandry's Torment","Burn them through the whole dive."),I("Zhonya's Hourglass","Stasis wastes the engage in your flames."),I("Bloodletter's Curse","Shred the diver mid-commit.")],behind:[I("Zhonya's Hourglass","Rush — stasis in your own fire wins dives."),I("Banshee's Veil","Blocks the engage opener."),I("Spirit Visage","Sustain through repeated attempts.")],runes:{...RUMBLE_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Stasis blanks the combo — they stand in flames after."),I("Liandry's Torment","Burn punishes every entry."),I("Rylai's Crystal Scepter","Slowed assassins can't leave the zone.")],behind:[I("Zhonya's Hourglass","Stasis is the matchup."),I("Banshee's Veil","Blocks the opener."),I("Void Staff","Keep the burn honest.")],runes:{...RUMBLE_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Liandry's Torment","The extended duel happens inside your flames — you win it."),I("Bloodletter's Curse","Shred through their MR buys."),I("Rylai's Crystal Scepter","Slow denies their reset spacing.")],behind:[I("Zhonya's Hourglass","Deny the all-in window."),I("Rylai's Crystal Scepter","Kite the duel with slows."),I("Spirit Visage","Out-sustain the attrition.")],runes:{...RUMBLE_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Liandry's Torment","Your sustained burn out-totals their combo."),I("Zhonya's Hourglass","Stasis their rotation, flame the gap."),I("Bloodletter's Curse","Shred wins the damage race.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the layers honest.")],runes:{...RUMBLE_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the DoT mirror."),I("Liandry's Torment","Your burn out-ramps theirs."),I("Morellonomicon","Cut the heal-back loop.")],behind:[I("Morellonomicon","Anti-heal first against drain mages."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...RUMBLE_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rylai's Crystal Scepter","Slow their reposition once you land the harpoons."),I("Liandry's Torment","One flame pass out-values three pokes."),I("Bloodletter's Curse","Shred the squishy poker.")],behind:[I("Banshee's Veil","Eats one long-range spell on approach."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Spirit Visage","Sustain the chip while closing.")],runes:{...RUMBLE_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Rylai's Crystal Scepter","Slowed ADCs can't kite out of the flames."),I("Liandry's Torment","Burn through their lifesteal."),I("Rabadon's Deathcap","One Equalizer ends them.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the peel CC."),I("Void Staff","Burn stays lethal.")],runes:{...RUMBLE_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Liandry's Torment","Burn outlasts their shield budget."),I("Morellonomicon","Cut the heal package."),I("Bloodletter's Curse","Shred through the sponge.")],behind:[I("Morellonomicon","Anti-heal is the win condition."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Void Staff","Keep the burn honest.")],runes:{...RUMBLE_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rylai's Crystal Scepter","Your flame zone beats their hook zone."),I("Liandry's Torment","Punish every attempt with burns."),I("Zhonya's Hourglass","Stasis the landed hook.")],behind:[I("Banshee's Veil","Spell shield eats the hook."),I("Zhonya's Hourglass","Stasis if caught."),I("Spirit Visage","Sustain the pick attempts.")],runes:{...RUMBLE_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Liandry's Torment","Percent-HP burn melts engage tanks."),I("Bloodletter's Curse","Shred their MR for the whole team."),I("Void Staff","Double pen through the stack.")],behind:[I("Void Staff","Required through their frontline."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation CC.")],runes:{...RUMBLE_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Liandry's Torment","Burn through the peel-tank's HP."),I("Bloodletter's Curse","Shred cracks the resist wall."),I("Rabadon's Deathcap","Equalizer out-scales the peel budget.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Morellonomicon","Cut their sustain support."),I("Zhonya's Hourglass","Survive the counter-engage.")],runes:{...RUMBLE_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Liandry's Torment","The flame zone answers most gimmicks."),I("Rylai's Crystal Scepter","Slow beats trick mobility."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...RUMBLE_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
