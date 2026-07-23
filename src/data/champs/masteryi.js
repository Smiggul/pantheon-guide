import { I } from "../runeHelpers.js";

const MASTERYI_JGL_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Coup de Grace"],
  secondary:      "Inspiration",
  secondaryRunes: ["Cosmic Insight","Magical Footwear"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Lethal Tempo rewards Master Yi's Highlander-fueled attack speed ramp — the longer a fight or chase goes, the harder Wuju Style and Alpha Strike's resets snowball. Triumph and Legend: Alacrity fund the ramp and add sustain; Coup de Grace finishes targets already whittled down by Alpha Strike's bonus damage. Cosmic Insight and Magical Footwear cut cooldowns and get his boots online for free.",
};

// ══════════════════════════════════════════════════════════════════════════
//  MASTER YI — Skirmisher / Attack-Speed Snowball
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"masteryi", display:"Master Yi", dd:"MasterYi",
  color:"#7a1a1a", glow:"#f0c060",
  lanes:["Jungle"],
  // Standard Master Yi (below) is on-hit. This is the crit line — the higher-WR
  // build on Mobalytics 26.14 (52.8% / 1.5k games), more burst/one-shot.
  altBuilds:{
    Jungle: [{
      label: "Crit (Collector/IE)",
      tag: "alt",
      corePath: "The Collector  ›  Berserker's Greaves  ›  Infinity Edge  ›  Bloodthirster",
      coreNote: "The crit one-shot line rather than the on-hit DPS build. The Collector opens with lethality + an execute that turns Q-reset chains into instant resets on low targets; Infinity Edge makes every Alpha Strike + auto crit for enormous burst, and Bloodthirster's shield + lifesteal keeps you topped between camps and fights. This build deletes squishies faster than on-hit but shreds tanks slower — pick it into squishy/burstable enemy comps. Lord Dominik's or Death's Dance close it out.",
      runes: {
        keystone: "Lethal Tempo",
        primary: "Precision",
        primaryRunes: ["Triumph", "Legend: Alacrity", "Coup de Grace"],
        secondary: "Domination",
        secondaryRunes: ["Sudden Impact", "Treasure Hunter"],
        shards: ["Attack Speed", "Adaptive Force", "Health (scaling)"],
        reason: "Lethal Tempo still gives the attack-speed ramp to weave crit autos between Q resets. Coup de Grace stacks with The Collector to execute low targets, Legend: Alacrity feeds the crit-auto cadence, and the Domination splash (Sudden Impact on every Q/Alpha Strike, Treasure Hunter) funds the gold-hungry crit curve.",
      },
      sideItems: ["Lord Dominik's Regards", "Death's Dance", "Guardian Angel", "Blade of The Ruined King", "Mortal Reminder", "Wit's End"],
    }],
  },
  roles:{
    Jungle:{
      bans:["Kayn","Elise","Nocturne"], replacements:["Wukong","Sett","Warwick"],
      role:"Skirmisher / Attack-Speed Snowball",
      corePath:"Kraken Slayer  ›  Gluttonous Greaves  ›  Guinsoo's Rageblade  ›  Experimental Hexplate",
      coreNote:"Master Yi plays for an untouchable auto-attack snowball — Alpha Strike dodges damage and resets on takedown, Wuju Style adds true damage, and Highlander removes all slows while accelerating everything else. Kraken Slayer's true damage proc and Guinsoo's Rageblade's attack-speed stacking both reward the auto-heavy playstyle; Experimental Hexplate adds burst and haste for more frequent all-ins; Death's Dance lets him commit fully to a fight.",
      sideItems:["Death's Dance","Guardian Angel","Mercury's Treads","Wit's End","Sterak's Gage","Rapid Firecannon"],
      data:{
        JUGGERNAUT:{ahead:[I("Kraken Slayer","True damage proc ignores their armor stacking."),I("Guinsoo's Rageblade","AS stacking wins the sustained trade."),I("Death's Dance","Outlast their sustain with your own.")],behind:[I("Guardian Angel","Second life vs their walk-down."),I("Mercury's Treads","Shorter CC before the kill."),I("Gluttonous Greaves","Lifesteal to survive.")],runes:{...MASTERYI_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Experimental Hexplate","Haste + burst punishes the dive."),I("Kraken Slayer","True damage proc punishes the failed dive."),I("Guardian Angel","Second life if it still connects.")],behind:[I("Mercury's Treads","Shorter CC on their engage."),I("Wit's End","MR lifeline vs AP divers."),I("Guardian Angel","Insurance.")],runes:{...MASTERYI_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Wit's End","MR + on-hit vs AP assassins."),I("Kraken Slayer","True damage proc wins the trade first."),I("Guinsoo's Rageblade","AS stacking keeps Alpha Strike resets coming.")],behind:[I("Guardian Angel","Deny the kill."),I("Wit's End","MR lifeline vs AP assassins."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...MASTERYI_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Guinsoo's Rageblade","AS stacking wins the extended auto-race."),I("Kraken Slayer","True damage proc adds up."),I("Death's Dance","Sustain through the duel.")],behind:[I("Mercury's Treads","Shorter CC on their gap-close."),I("Guardian Angel","Second life."),I("Wit's End","MR + on-hit to stall.")],runes:{...MASTERYI_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Wit's End","MR + on-hit vs their combo."),I("Mercury's Treads","Reduce CC in their combo."),I("Rapid Firecannon","Range to poke back safely.")],behind:[I("Wit's End","MR lifeline vs burst mages."),I("Mercury's Treads","Shorten CC duration."),I("Guardian Angel","Insurance.")],runes:{...MASTERYI_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Wit's End","MR + DPS wins the drain war."),I("Death's Dance","Sustain outlasts their drain."),I("Kraken Slayer","True damage proc through their tank stats.")],behind:[I("Wit's End","Mandatory MR + sustain vs drain."),I("Mercury's Treads","Shorter CC to disengage."),I("Guardian Angel","Insurance.")],runes:{...MASTERYI_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Experimental Hexplate","Haste + burst closes the poke gap."),I("Mercury's Treads","Reduce CC duration from range."),I("Kraken Slayer","True damage proc wins once in range.")],behind:[I("Mercury's Treads","Shorten their key CC from range."),I("Guardian Angel","Second life."),I("Wit's End","MR vs sustained poke.")],runes:{...MASTERYI_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Kraken Slayer","True damage proc wins the mirror matchup."),I("Guinsoo's Rageblade","AS stacking wins the auto-race."),I("Death's Dance","Sustain through their DPS while you close.")],behind:[I("Guardian Angel","Second life for a risky invade."),I("Mercury's Treads","Reduce CC duration."),I("Wit's End","MR + on-hit if they go hybrid.")],runes:{...MASTERYI_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Kraken Slayer","True damage ignores shields."),I("Guinsoo's Rageblade","AS stacking cuts through their sustain package."),I("Wit's End","On-hit ignores shields over time.")],behind:[I("Guardian Angel","Insurance vs the combined burst."),I("Wit's End","Outlast their sustain package."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...MASTERYI_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rapid Firecannon","Range keeps you out of hook threat."),I("Kraken Slayer","True damage punishes a whiffed hook."),I("Guinsoo's Rageblade","AS stacking keeps escapes available.")],behind:[I("Mercury's Treads","Shorter root/bind duration."),I("Guardian Angel","Deny the pick's value."),I("Wit's End","Sustain if caught.")],runes:{...MASTERYI_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Wit's End","MR through their tank stats."),I("Kraken Slayer","True damage through their frontline."),I("Guinsoo's Rageblade","AS stacking still relevant past the engage.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Second life."),I("Wit's End","MR vs Malphite/Gragas AP damage.")],runes:{...MASTERYI_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Wit's End","MR-stacking Wardens still take real damage through on-hit."),I("Kraken Slayer","True damage bypasses their mitigation."),I("Guinsoo's Rageblade","AS stacking past their shields.")],behind:[I("Wit's End","Required vs a stacked-resist Warden."),I("Guardian Angel","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...MASTERYI_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Rapid Firecannon","Range keeps you ahead of kiting specialists."),I("Kraken Slayer","True damage proc ends the fight."),I("Guinsoo's Rageblade","AS stacking finishes squishy specialists caught close.")],behind:[I("Mercury's Treads","Teemo blind/Kennen stun — shorten both."),I("Guardian Angel","Deny their split-push snowball."),I("Wit's End","MR vs AP specialists.")],runes:{...MASTERYI_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
