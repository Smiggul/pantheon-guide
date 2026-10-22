import { I } from "../runeHelpers.js";

const YUNARA_BOT_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Cut Down"],
  secondary:      "Inspiration",
  secondaryRunes: ["Biscuit Delivery","Magical Footwear"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Almost all of Yunara's power comes from getting as many autos off as possible during her Q Unleash window and Transcendent ultimate — Lethal Tempo's uncapped attack speed is exactly what that demands. Legend: Alacrity accelerates the ramp further. Biscuit Delivery and Magical Footwear solve early mana and gold problems so she reaches her item spike on curve. Cut Down punishes tanks who'd otherwise soak her crit damage.",
};

// ══════════════════════════════════════════════════════════════════════════
//  YUNARA — Marksman / Traditional Crit Carry
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"yunara", display:"Yunara", dd:"Yunara",
  color:"#7fd4c1", glow:"#e0fff5",
  lanes:["Bot"],
  roles:{
    Bot:{
      bans:["Draven","Samira","Kalista"], replacements:["Jinx","Yasuo","Ziggs"],
      role:"Marksman / Traditional Crit Carry",
      corePath:"Kraken Slayer  ›  Runaan's Hurricane  ›  Infinity Edge  ›  Lord Dominik's Regards",
      // Research: On 26.20 Hurricane is her standard second item, on about 81% of OP.GG Emerald+ Yunara games (~179k), and
      //   Kraken into Hurricane into IE is the most common core (27.9%, 55.1% over ~47k games). Fiendhunter Bolts
      //   has fallen to about 12% of games. The first item is a genuine split: Kraken on 51.5% of games, Yun Tal
      //   on 43.3%, Yun Tal winning more (50.9% to 48.3%). Gluttonous Greaves has overtaken Berserker's as her
      //   most common boots. Her 26.20 nerf cut the flat bonus damage on Cultivation of Spirit (Q), not her items.
      coreNote:"Yunara is an orb-walking crit marksman: spacing, positioning and attack uptime win her fights. Kraken Slayer or Yun Tal Wildarrows first; Yun Tal has won slightly more often, so it is a fair swap. Runaan's Hurricane second: you have no wave-clear ability, and Hurricane's bolts apply on-hit to two extra targets, covering that gap in lane and spreading your damage in fights. Infinity Edge third. Gluttonous Greaves for boots.",
      sideItems:["Gluttonous Greaves","Berserker's Greaves","Yun Tal Wildarrows","Fiendhunter Bolts","Hexoptics C44","Immortal Shieldbow","Bloodthirster","Guardian Angel","Mercury's Treads","Rapid Firecannon"],
      data:{
        JUGGERNAUT:{ahead:[I("Lord Dominik's Regards","Armor pen cuts through their stacked resists."),I("Kraken Slayer","The third-hit bonus grows as they drop — pair it with armor pen into armor stacking."),I("Infinity Edge","Crit damage wins the trade outright.")],behind:[I("Guardian Angel","Second life vs their walk-down."),I("Mercury's Treads","Shorter CC before the kill."),I("Bloodthirster","Shield + lifesteal to survive.")],runes:{...YUNARA_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Immortal Shieldbow","Shield absorbs their engage burst."),I("Infinity Edge","Crit damage punishes the failed dive."),I("Rapid Firecannon","Range + slow to kite the follow-up.")],behind:[I("Immortal Shieldbow","Shield is your lifeline behind."),I("Mercury's Treads","Shorter CC on their engage."),I("Guardian Angel","Second life.")],runes:{...YUNARA_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Immortal Shieldbow","Shield eats their burst opener."),I("Infinity Edge","Crit wins the trade first."),I("Bloodthirster","Extra shield layer.")],behind:[I("Immortal Shieldbow","Mandatory shield lifeline."),I("Guardian Angel","Deny the kill."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...YUNARA_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rapid Firecannon","Range keeps the duelist at arm's length."),I("Infinity Edge","Crit damage wins the extended trade."),I("Kraken Slayer","Every third hit adds bonus damage — it adds up.")],behind:[I("Immortal Shieldbow","Shield to survive the all-in."),I("Mercury's Treads","Shorter CC on their gap-close."),I("Guardian Angel","Second life.")],runes:{...YUNARA_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Immortal Shieldbow","Shield through their combo."),I("Mercury's Treads","Reduce CC in their combo."),I("Rapid Firecannon","Range to poke back safely.")],behind:[I("Immortal Shieldbow","Mandatory lifeline."),I("Mercury's Treads","Shorten CC duration."),I("Guardian Angel","Insurance.")],runes:{...YUNARA_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Lord Dominik's Regards","MR-ignoring pen cuts through their scaling resists."),I("Kraken Slayer","The third-hit bonus grows as their tank health drops."),I("Infinity Edge","Crit edge wins the burst trade.")],behind:[I("Immortal Shieldbow","Shield vs sustained drain."),I("Mercury's Treads","Shorter CC to disengage."),I("Bloodthirster","Lifesteal to keep pace.")],runes:{...YUNARA_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rapid Firecannon","Extra range wins the poke war."),I("Mercury's Treads","Reduce CC duration from range."),I("Infinity Edge","Crit edge wins once in range.")],behind:[I("Immortal Shieldbow","Shield survives the poke on approach."),I("Mercury's Treads","Shorten their key CC from range."),I("Guardian Angel","Second life.")],runes:{...YUNARA_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Infinity Edge","Crit war wins outright."),I("Lord Dominik's Regards","Armor pen shreds their build."),I("Kraken Slayer","Every third hit adds bonus damage — it adds up.")],behind:[I("Immortal Shieldbow","Shield vs their peel."),I("Mercury's Treads","Reduce CC duration."),I("Guardian Angel","Second life for a risky trade.")],runes:{...YUNARA_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Lord Dominik's Regards","Pen cuts through their shields to real HP."),I("Infinity Edge","Crit edge burst through the peel."),I("Kraken Slayer","Steady third-hit damage outlasts their shield cycle.")],behind:[I("Immortal Shieldbow","Shield vs the combined burst."),I("Bloodthirster","Lifesteal outlasts their sustain package."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...YUNARA_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Immortal Shieldbow","Shield eats a hook's follow-up."),I("Infinity Edge","Crit edge punishes a whiffed hook."),I("Rapid Firecannon","Range keeps you out of hook threat.")],behind:[I("Mercury's Treads","Shorter root/bind duration."),I("Immortal Shieldbow","Shield if caught."),I("Guardian Angel","Deny the pick's value.")],runes:{...YUNARA_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Pen matters past their tank stats."),I("Kraken Slayer","Missing-health bonus damage grinds down their frontline."),I("Infinity Edge","Crit edge still relevant past the engage.")],behind:[I("Immortal Shieldbow","Shield vs the initiation."),I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Second life.")],runes:{...YUNARA_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Pen matters vs stacked-resist Wardens."),I("Kraken Slayer","The third-hit bonus grows as they drop, so the fight still ends."),I("Infinity Edge","Crit edge past their shields.")],behind:[I("Lord Dominik's Regards","Only reliable damage vs stacked resists."),I("Immortal Shieldbow","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...YUNARA_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Infinity Edge","Crit edge ends the fight before their kit matters."),I("Rapid Firecannon","Range keeps you ahead of kiting specialists."),I("Kraken Slayer","Every third hit adds bonus damage — it adds up.")],behind:[I("Mercury's Treads","Teemo blind/Kennen stun — shorten both."),I("Immortal Shieldbow","Shield vs burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...YUNARA_BOT_DEFAULT_RUNES}},
      },
    },
  },
};
