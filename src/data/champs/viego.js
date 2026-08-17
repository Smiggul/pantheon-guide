import { I } from "../runeHelpers.js";

const VIEGO_JGL_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Coup de Grace"],
  secondary:      "Inspiration",
  secondaryRunes: ["Cosmic Insight","Magical Footwear"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Viego's build heavily abuses his Q passive and crit scalings for both burst and extended damage, and Conqueror's omnivamp keeps him alive through the invades and skirmishes that identity demands. Triumph and Legend: Alacrity fund the ramp and add sustain; Coup de Grace finishes targets already whittled down. Cosmic Insight and Magical Footwear cut cooldowns and get his boots online for free — sit on Magical Footwear until his first two core items complete.",
};

// ══════════════════════════════════════════════════════════════════════════
//  VIEGO — Skirmisher / Possession Duelist
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"viego", display:"Viego", dd:"Viego",
  color:"#1a2a5a", glow:"#4a6ac0",
  lanes:["Jungle"],
  altBuilds:{
    Jungle:[{
      label:"OP 26.16 ALT", tag:"alt",
      corePath:"Bastionbreaker  ›  Ionian Boots of Lucidity  ›  The Collector  ›  Lord Dominik's Regards",
      coreNote:"Skill-Capped 26.16 snowball Viego: Bastionbreaker rush (buffed last patch) over the usual Kraken Slayer, into The Collector → Lord Dominik's. You get 22 lethality plus Bastionbreaker's true-damage proc, so a W-stun into a one-shot on a squishy is brutal. Best when you're snowballing hard early or the enemy team is majority squishy — Kraken rush stays better into tankier teams for the extended skirmish.",
      runes:{...VIEGO_JGL_DEFAULT_RUNES},
      sideItems:["Kraken Slayer","Edge of Night","Serylda's Grudge","Death's Dance","Mercury's Treads"],
    }],
  },
  roles:{
    Jungle:{
      bans:["Nocturne","Warwick","Kayn"], replacements:["Wukong","Sett","Shyvana"],
      role:"Skirmisher / Possession Duelist",
      corePath:"Kraken Slayer  ›  The Collector  ›  Immortal Shieldbow  ›  Lord Dominik's Regards",
      coreNote:"Viego plays for a repeated pick-and-possess pattern — Blade of the Ruined King Q's a target, kills it, and Spectral Maiden lets him briefly possess and reset with a champion's own body. Kraken Slayer's true damage proc and The Collector's execute both reward the burst-into-kill loop; Immortal Shieldbow's shield covers the commitment; Lord Dominik's Regards keeps damage relevant into tankier late-game targets.",
      sideItems:["Plated Steelcaps","Guardian Angel","Mercury's Treads","Bloodthirster","Wit's End","Sterak's Gage"],
      data:{
        JUGGERNAUT:{ahead:[I("Lord Dominik's Regards","Armor pen cuts through their stacked resists."),I("Kraken Slayer","True damage proc ignores their armor stacking."),I("The Collector","Execute finishes what Q chunked.")],behind:[I("Guardian Angel","Second life vs their walk-down."),I("Plated Steelcaps","Reduces auto damage from their press."),I("Immortal Shieldbow","Shield to survive.")],runes:{...VIEGO_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Immortal Shieldbow","Shield absorbs their engage burst."),I("Kraken Slayer","True damage proc punishes the failed dive."),I("Guardian Angel","Second life if it still connects.")],behind:[I("Immortal Shieldbow","Shield is your lifeline behind."),I("Mercury's Treads","Shorter CC on their engage."),I("Guardian Angel","Insurance.")],runes:{...VIEGO_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Immortal Shieldbow","Shield eats their burst opener."),I("The Collector","Execute finishes low-HP assassins after the trade."),I("Kraken Slayer","True damage proc wins the trade first.")],behind:[I("Immortal Shieldbow","Mandatory shield lifeline."),I("Guardian Angel","Deny the kill."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...VIEGO_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Kraken Slayer","True damage proc wins the extended trade."),I("Wit's End","MR + on-hit wins the auto-race."),I("The Collector","Execute finishes the duel.")],behind:[I("Immortal Shieldbow","Shield to survive the all-in."),I("Mercury's Treads","Shorter CC on their gap-close."),I("Guardian Angel","Second life.")],runes:{...VIEGO_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Immortal Shieldbow","Shield through their combo."),I("Mercury's Treads","Reduce CC in their combo."),I("Wit's End","MR + on-hit through their kit.")],behind:[I("Immortal Shieldbow","Mandatory lifeline."),I("Mercury's Treads","Shorten CC duration."),I("Guardian Angel","Insurance.")],runes:{...VIEGO_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Lord Dominik's Regards","MR-ignoring pen cuts through their scaling resists."),I("Kraken Slayer","True damage proc through their tank stats."),I("Wit's End","MR + DPS wins the drain war.")],behind:[I("Mercury's Treads","Shorter CC to disengage."),I("Bloodthirster","Lifesteal to keep pace."),I("Guardian Angel","Insurance.")],runes:{...VIEGO_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Plated Steelcaps","Sets up the approach through poke."),I("Kraken Slayer","True damage proc wins once in range."),I("Mercury's Treads","Reduce CC duration from range.")],behind:[I("Immortal Shieldbow","Shield survives the poke on approach."),I("Mercury's Treads","Shorten their key CC from range."),I("Guardian Angel","Second life.")],runes:{...VIEGO_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("The Collector","Execute finishes low-HP trades."),I("Lord Dominik's Regards","Armor pen shreds their build."),I("Kraken Slayer","True damage proc adds up.")],behind:[I("Immortal Shieldbow","Shield vs their peel."),I("Mercury's Treads","Reduce CC duration."),I("Guardian Angel","Second life for a risky trade.")],runes:{...VIEGO_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("The Collector","Execute cuts through shields entirely."),I("Lord Dominik's Regards","Pen cuts through their shields to real HP."),I("Kraken Slayer","True damage ignores shields.")],behind:[I("Bloodthirster","Lifesteal outlasts their sustain package."),I("Mercury's Treads","Reduce their disengage CC."),I("Guardian Angel","Insurance.")],runes:{...VIEGO_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Immortal Shieldbow","Shield eats a hook's follow-up."),I("The Collector","Execute finishes a caught target."),I("Kraken Slayer","True damage punishes a whiffed hook.")],behind:[I("Mercury's Treads","Shorter root/bind duration."),I("Immortal Shieldbow","Shield if caught."),I("Guardian Angel","Deny the pick's value.")],runes:{...VIEGO_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Pen matters past their tank stats."),I("Kraken Slayer","True damage through their frontline."),I("The Collector","Execute still relevant past the engage.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Second life."),I("Immortal Shieldbow","Shield through the initiation.")],runes:{...VIEGO_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Pen matters vs stacked-resist Wardens."),I("Kraken Slayer","True damage bypasses their mitigation."),I("The Collector","Execute past their shields.")],behind:[I("Lord Dominik's Regards","Only reliable damage vs stacked resists."),I("Bloodthirster","Lifesteal survives their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...VIEGO_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("The Collector","Execute finishes squishy specialists caught close."),I("Wit's End","MR + on-hit keeps you ahead of kiting specialists."),I("Kraken Slayer","True damage proc ends the fight.")],behind:[I("Mercury's Treads","Teemo blind/Kennen stun — shorten both."),I("Guardian Angel","Deny their split-push snowball."),I("Immortal Shieldbow","Shield vs burst setups.")],runes:{...VIEGO_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
