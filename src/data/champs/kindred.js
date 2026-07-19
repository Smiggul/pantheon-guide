import { I } from "../runeHelpers.js";

const KINDRED_JGL_DEFAULT_RUNES = {
  keystone:       "Press the Attack",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Coup de Grace"],
  secondary:      "Domination",
  secondaryRunes: ["Sudden Impact","Treasure Hunter"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Press the Attack rewards Kindred's consistent auto-attack-plus-Q rotation with a 3-hit burst window, matching her hit-and-run kiting pattern in skirmishes. Legend: Alacrity accelerates the attack-speed ramp her Q/E marks feed into. Sudden Impact procs off the Q dash; Treasure Hunter gets her to Kraken Slayer and The Collector faster than farming alone would, since crit items are expensive and she wants those spikes on curve. Coup de Grace finishes marked targets already whittled down by E's bonus damage.",
};

// ══════════════════════════════════════════════════════════════════════════
//  KINDRED — Marksman Jungler / Mark-and-Kite
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"kindred", display:"Kindred", dd:"Kindred",
  color:"#4a4a5e", glow:"#e8d4a0",
  lanes:["Jungle"],
  roles:{
    Jungle:{
      bans:["Kha'Zix","Rengar","Lee Sin"], replacements:["Warwick","Rek'Sai","Shyvana"],
      role:"Marksman Jungler / Mark-and-Kite",
      corePath:"Kraken Slayer  ›  Plated Steelcaps  ›  The Collector  ›  Lord Dominik's Regards",
      coreNote:"Kindred plays a hit-and-run kiting pattern — mark a target with E, poke it down, dash away with Q, and let Mounting Dread's bonus damage finish the job. Kraken Slayer's true damage proc rewards the attack-speed-heavy kiting style; Plated Steelcaps blunts early jungle-invade trades; The Collector executes marked targets outright; Lord Dominik's Regards keeps damage relevant into tankier late-game targets.",
      sideItems:["Berserker's Greaves","Infinity Edge","Guardian Angel","Bloodthirster","Mercury's Treads","Rapid Firecannon"],
      data:{
        JUGGERNAUT:{ahead:[I("Lord Dominik's Regards","Armor pen cuts through their stacking."),I("Kraken Slayer","True damage proc ignores armor."),I("The Collector","Execute finishes marked targets.")],behind:[I("Guardian Angel","Second life vs their walk-down."),I("Mercury's Treads","Shorter CC before the kill."),I("Bloodthirster","Shield + lifesteal to survive.")],runes:{...KINDRED_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rapid Firecannon","Range + slow kites the dive."),I("Kraken Slayer","True damage proc punishes the failed dive."),I("Infinity Edge","Crit wins the counter-punish.")],behind:[I("Mercury's Treads","Shorter CC on their engage."),I("Guardian Angel","Second life."),I("Bloodthirster","Lifesteal sustains through the dive.")],runes:{...KINDRED_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Infinity Edge","Crit wins the trade first."),I("The Collector","Execute finishes low-HP assassins after the trade."),I("Kraken Slayer","True damage proc adds up.")],behind:[I("Guardian Angel","Deny the kill."),I("Mercury's Treads","Shorter CC before the finisher."),I("Bloodthirster","Shield + lifesteal to survive.")],runes:{...KINDRED_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rapid Firecannon","Range keeps the duelist at arm's length."),I("Infinity Edge","Crit wins the extended trade."),I("Kraken Slayer","True damage proc adds up.")],behind:[I("Mercury's Treads","Shorter CC on their gap-close."),I("Guardian Angel","Second life."),I("Bloodthirster","Lifesteal to survive the all-in.")],runes:{...KINDRED_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Mercury's Treads","Reduce CC in their combo."),I("Rapid Firecannon","Range to poke back safely."),I("Kraken Slayer","True damage proc through their squishy build.")],behind:[I("Mercury's Treads","Shorten CC duration."),I("Guardian Angel","Insurance."),I("Bloodthirster","Lifesteal vs poke.")],runes:{...KINDRED_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Lord Dominik's Regards","MR-ignoring pen cuts through their scaling resists."),I("Kraken Slayer","True damage proc through their tank stats."),I("Infinity Edge","Crit edge wins the burst trade.")],behind:[I("Mercury's Treads","Shorter CC to disengage."),I("Bloodthirster","Lifesteal to keep pace."),I("Guardian Angel","Insurance.")],runes:{...KINDRED_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rapid Firecannon","Extra range wins the poke war."),I("Mercury's Treads","Reduce CC duration from range."),I("Infinity Edge","Crit edge wins once in range.")],behind:[I("Mercury's Treads","Shorten their key CC from range."),I("Guardian Angel","Second life."),I("Bloodthirster","Lifesteal to survive the poke.")],runes:{...KINDRED_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Infinity Edge","Crit war wins the mirror matchup outright."),I("Lord Dominik's Regards","Armor pen shreds their build."),I("Kraken Slayer","True damage proc adds up.")],behind:[I("Mercury's Treads","Reduce CC duration."),I("Guardian Angel","Second life for a risky invade."),I("Bloodthirster","Lifesteal to keep pace.")],runes:{...KINDRED_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("The Collector","Execute cuts through shields entirely."),I("Lord Dominik's Regards","Pen cuts through their shields to real HP."),I("Kraken Slayer","True damage ignores shields.")],behind:[I("Bloodthirster","Lifesteal outlasts their sustain package."),I("Mercury's Treads","Reduce their disengage CC."),I("Guardian Angel","Insurance.")],runes:{...KINDRED_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rapid Firecannon","Range keeps you out of hook threat."),I("Infinity Edge","Crit edge punishes a whiffed hook."),I("The Collector","Execute finishes a caught target.")],behind:[I("Mercury's Treads","Shorter root/bind duration."),I("Guardian Angel","Deny the pick's value."),I("Bloodthirster","Lifesteal if caught.")],runes:{...KINDRED_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Pen matters past their tank stats."),I("Kraken Slayer","True damage through their frontline."),I("Infinity Edge","Crit edge still relevant past the engage.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Second life."),I("Bloodthirster","Lifesteal through the initiation.")],runes:{...KINDRED_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Pen matters vs stacked-resist Wardens."),I("Kraken Slayer","True damage bypasses their mitigation."),I("Infinity Edge","Crit edge past their shields.")],behind:[I("Lord Dominik's Regards","Only reliable damage vs stacked resists."),I("Bloodthirster","Lifesteal survives their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...KINDRED_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Infinity Edge","Crit edge ends the fight before their kit matters."),I("Rapid Firecannon","Range keeps you ahead of kiting specialists."),I("The Collector","Execute finishes squishy specialists caught close.")],behind:[I("Mercury's Treads","Teemo blind/Kennen stun — shorten both."),I("Guardian Angel","Deny their split-push snowball."),I("Bloodthirster","Lifesteal vs burst setups.")],runes:{...KINDRED_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
