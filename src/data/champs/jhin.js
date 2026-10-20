import { I } from "../runeHelpers.js";

const JHIN_BOT_DEFAULT_RUNES = {
  keystone:       "Fleet Footwork",
  primary:        "Precision",
  primaryRunes:   ["Presence of Mind","Legend: Bloodline","Coup de Grace"],
  secondary:      "Sorcery",
  secondaryRunes: ["Celerity","Gathering Storm"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Fleet Footwork rewards Jhin's poke-heavy 4-shot pattern with sustain and movement speed on every energised attack — exactly matching his ammo-based attack rhythm. Presence of Mind and Legend: Bloodline solve mana strain and add sustain; Coup de Grace finishes targets his fourth-shot crit has already chunked. Celerity and Gathering Storm both reward his long-range positioning and scaling identity. (Deathfire Touch is a legitimate alternate keystone since Jhin's passive lets him scale its base damage further than almost any other champion.)",
};

// ══════════════════════════════════════════════════════════════════════════
//  JHIN — Marksman / Fourth-Shot Executioner
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"jhin", display:"Jhin", dd:"Jhin",
  color:"#7a1a2a", glow:"#e8c060",
  lanes:["Bot"],
  altBuilds:{
    Bot:[{
      label:"Phantom Dancer kite", tag:"alt",
      corePath:"Hubris  ›  Phantom Dancer  ›  Infinity Edge  ›  Rapid Firecannon",
      coreNote:"Phantom Dancer looks wrong on a champion who cannot attack faster, but Jhin converts every point of bonus attack speed into AD, and the movement speed he gains on crit scales off that same bonus attack speed — 0.44% per point, so Phantom Dancer's 65% adds roughly 29% on top of his base 14%, about 43% in total. It turns the most immobile marksman in the game into a kiting one. On 26.20 it is about a quarter of Jhin games against a third for The Collector, with a slightly higher win rate. Take it into dive and assassin threats; The Collector does more damage when you are safe.",
      runes:{...JHIN_BOT_DEFAULT_RUNES},
      sideItems:["Boots of Swiftness","The Collector","Lord Dominik's Regards","Guardian Angel","Mercury's Treads","Bloodthirster"],
    }],
  },
  roles:{
    Bot:{
      bans:["Draven","Samira","Kalista"], replacements:["Jinx","Caitlyn","Yunara"],
      role:"Marksman / Fourth-Shot Executioner",
      corePath:"Hubris  ›  The Collector  ›  Infinity Edge  ›  Rapid Firecannon",
      coreNote:"Jhin plays for the fourth-shot crit. Hubris is his first item in about two thirds of Emerald+ games on 26.20, and The Collector is the most common second item: it executes champions below 5% health, which is exactly where the fourth shot leaves them, and pays 25 bonus gold per kill. Infinity Edge third spikes crit damage, and Rapid Firecannon and Lord Dominik's Regards are a near-even split fourth; take Lord Dominik's into health stackers. Phantom Dancer second is a close second choice — see the alternate — for games where you need to kite rather than execute.",
      sideItems:["Boots of Swiftness","Phantom Dancer","Lord Dominik's Regards","Guardian Angel","Mercury's Treads","Bloodthirster"],
      data:{
        JUGGERNAUT:{ahead:[I("Lord Dominik's Regards","Armor pen cuts through their stacked resists."),I("The Collector","Execute finishes what the fourth shot chunked."),I("Infinity Edge","Crit damage wins the trade outright.")],behind:[I("Guardian Angel","Second life vs their walk-down."),I("Mercury's Treads","Shorter CC before the kill."),I("Bloodthirster","Shield + lifesteal to survive.")],runes:{...JHIN_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rapid Firecannon","Range + slow kites the dive from max distance."),I("Infinity Edge","Crit damage punishes the failed dive."),I("Boots of Swiftness","Move speed to reposition the fourth shot.")],behind:[I("Boots of Swiftness","Reposition out of their engage range."),I("Mercury's Treads","Shorter CC on their engage."),I("Guardian Angel","Second life.")],runes:{...JHIN_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Infinity Edge","Crit wins the trade first."),I("The Collector","Execute finishes low-HP assassins after the trade."),I("Hubris","Extra AD from an early takedown.")],behind:[I("Guardian Angel","Deny the kill."),I("Mercury's Treads","Shorter CC before the finisher."),I("Bloodthirster","Shield + lifesteal to survive.")],runes:{...JHIN_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rapid Firecannon","Range keeps the duelist at arm's length."),I("Infinity Edge","Crit wins the extended trade."),I("Hubris","Extra AD from an early kill snowballs the lane.")],behind:[I("Boots of Swiftness","Reposition away from their gap-close."),I("Mercury's Treads","Shorter CC on their gap-close."),I("Guardian Angel","Second life.")],runes:{...JHIN_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Boots of Swiftness","Reposition dodges the combo entirely."),I("Mercury's Treads","Reduce CC in their combo."),I("Rapid Firecannon","Range to poke back safely.")],behind:[I("Boots of Swiftness","Reposition is your lifeline."),I("Mercury's Treads","Shorten CC duration."),I("Guardian Angel","Insurance.")],runes:{...JHIN_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Lord Dominik's Regards","MR-ignoring pen cuts through their scaling resists."),I("The Collector","Execute through their tank stats."),I("Infinity Edge","Crit edge wins the burst trade.")],behind:[I("Mercury's Treads","Shorter CC to disengage."),I("Bloodthirster","Lifesteal to keep pace."),I("Guardian Angel","Insurance.")],runes:{...JHIN_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rapid Firecannon","Extra range wins the poke war."),I("Mercury's Treads","Reduce CC duration from range."),I("Infinity Edge","Crit edge wins once in range.")],behind:[I("Boots of Swiftness","Reposition survives the poke on approach."),I("Mercury's Treads","Shorten their key CC from range."),I("Guardian Angel","Second life.")],runes:{...JHIN_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Infinity Edge","Crit war wins the mirror matchup outright."),I("Lord Dominik's Regards","Armor pen shreds their build."),I("The Collector","Execute finishes low-HP trades.")],behind:[I("Boots of Swiftness","Reposition vs their peel."),I("Mercury's Treads","Reduce CC duration."),I("Guardian Angel","Second life for a risky trade.")],runes:{...JHIN_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Lord Dominik's Regards","Pen cuts through their shields to real HP."),I("Infinity Edge","Crit edge burst through the peel."),I("The Collector","Execute cuts through shields entirely.")],behind:[I("Bloodthirster","Lifesteal outlasts their sustain package."),I("Mercury's Treads","Reduce their disengage CC."),I("Guardian Angel","Insurance.")],runes:{...JHIN_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Boots of Swiftness","Reposition dodges hook range."),I("Infinity Edge","Crit edge punishes a whiffed hook."),I("Rapid Firecannon","Range keeps you out of hook threat.")],behind:[I("Mercury's Treads","Shorter root/bind duration."),I("Guardian Angel","Deny the pick's value."),I("Bloodthirster","Lifesteal if caught.")],runes:{...JHIN_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Pen matters past their tank stats."),I("The Collector","Execute through their frontline."),I("Infinity Edge","Crit edge still relevant past the engage.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Second life."),I("Boots of Swiftness","Reposition away from the initiation.")],runes:{...JHIN_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Pen matters vs stacked-resist Wardens."),I("The Collector","Execute bypasses their mitigation."),I("Infinity Edge","Crit edge past their shields.")],behind:[I("Lord Dominik's Regards","Only reliable damage vs stacked resists."),I("Bloodthirster","Lifesteal survives their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...JHIN_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Infinity Edge","Crit edge ends the fight before their kit matters."),I("Rapid Firecannon","Range keeps you ahead of kiting specialists."),I("The Collector","Execute finishes squishy specialists caught close.")],behind:[I("Mercury's Treads","Teemo blind/Kennen stun — shorten both."),I("Boots of Swiftness","Reposition vs burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...JHIN_BOT_DEFAULT_RUNES}},
      },
    },
  },
};
