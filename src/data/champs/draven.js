import { I } from "../runeHelpers.js";

const DRAVEN_BOT_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Presence of Mind","Legend: Alacrity","Cut Down"],
  secondary:      "Inspiration",
  secondaryRunes: ["Cash Back","Triple Tonic"],
  shards:         ["Attack Speed","Adaptive Force","Health"],
  reason:         "Lethal Tempo's attack speed ramp feeds Draven's Spinning Axe catch-and-recast loop directly — more attack speed means more axes thrown, caught, and re-thrown for stacking bonus damage. Presence of Mind solves the mana strain from constant axe throws; Legend: Alacrity accelerates the ramp further. Cash Back speeds up his snowball-dependent item spike; Triple Tonic adds early sustain. Cut Down punishes tanks who'd otherwise soak his stacked axe damage.",
};

// ══════════════════════════════════════════════════════════════════════════
//  DRAVEN — Marksman / Snowball Lane Bully
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"draven", display:"Draven", dd:"Draven",
  color:"#8b0000", glow:"#ff6b35",
  lanes:["Bot"],
  roles:{
    Bot:{
      bans:["Xerath","Ziggs","Ashe"], replacements:["Jinx","Kai'Sa","Yunara"],
      role:"Marksman / Snowball Lane Bully",
      corePath:"Hubris  ›  Hexoptics C44  ›  Infinity Edge  ›  Lord Dominik's Regards",
      coreNote:"Draven plays for an all-in snowball lane — catch spinning axes for stacking bonus damage, and the earlier he gets ahead the harder he scales out of control. Hubris rewards aggressive early takedowns with permanent AD; Hexoptics C44 adds an early spike; Infinity Edge and Lord Dominik's Regards scale the crit into a real late-game DPS threat.",
      sideItems:["Gluttonous Greaves","Mercury's Treads","Bloodthirster","Guardian Angel","Serylda's Grudge","Wit's End"],
      data:{
        JUGGERNAUT:{ahead:[I("Lord Dominik's Regards","Armor pen cuts through their stacking."),I("Hubris","Permanent AD from early takedowns snowballs the lane."),I("Infinity Edge","Crit damage wins the trade outright.")],behind:[I("Guardian Angel","Second life vs their walk-down."),I("Gluttonous Greaves","Lifesteal to survive."),I("Mercury's Treads","Shorter CC before the kill.")],runes:{...DRAVEN_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Hubris","Early takedowns snowball before the dive threat matters."),I("Infinity Edge","Crit damage punishes the failed dive."),I("Bloodthirster","Shield + lifesteal to survive.")],behind:[I("Gluttonous Greaves","Lifesteal is your lifeline behind."),I("Mercury's Treads","Shorter CC on their engage."),I("Guardian Angel","Second life.")],runes:{...DRAVEN_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Bloodthirster","Shield eats their burst opener."),I("Infinity Edge","Crit wins the trade first."),I("Hubris","Snowball AD ends the trade before they can reset.")],behind:[I("Bloodthirster","Mandatory shield lifeline."),I("Guardian Angel","Deny the kill."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...DRAVEN_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Wit's End","MR + on-hit wins the extended trade."),I("Infinity Edge","Crit damage wins the duel outright."),I("Hexoptics C44","Early spike wins before their scaling kicks in.")],behind:[I("Bloodthirster","Lifesteal to survive the all-in."),I("Mercury's Treads","Shorter CC on their gap-close."),I("Guardian Angel","Second life.")],runes:{...DRAVEN_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Bloodthirster","Shield through their combo."),I("Mercury's Treads","Reduce CC in their combo."),I("Wit's End","MR + on-hit through their kit.")],behind:[I("Bloodthirster","Mandatory lifeline."),I("Mercury's Treads","Shorten CC duration."),I("Guardian Angel","Insurance.")],runes:{...DRAVEN_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Lord Dominik's Regards","MR-ignoring pen cuts through their scaling resists."),I("Infinity Edge","Crit edge wins the burst trade."),I("Wit's End","MR + DPS wins the drain war.")],behind:[I("Mercury's Treads","Shorter CC to disengage."),I("Gluttonous Greaves","Lifesteal to keep pace."),I("Guardian Angel","Insurance.")],runes:{...DRAVEN_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Hubris","Snowball AD wins the exchange once you close."),I("Infinity Edge","Crit edge wins once in range.")],behind:[I("Mercury's Treads","Shorten their key CC from range."),I("Guardian Angel","Second life."),I("Bloodthirster","Lifesteal to survive the poke.")],runes:{...DRAVEN_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Infinity Edge","Crit war wins the mirror matchup outright."),I("Lord Dominik's Regards","Armor pen shreds their build."),I("Hubris","Snowball AD from any early kill decides the lane.")],behind:[I("Bloodthirster","Shield vs their peel."),I("Mercury's Treads","Reduce CC duration."),I("Guardian Angel","Second life for a risky trade.")],runes:{...DRAVEN_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Lord Dominik's Regards","Pen cuts through their shields to real HP."),I("Infinity Edge","Crit edge burst through the peel."),I("Hubris","Snowball AD denies their sustain package.")],behind:[I("Bloodthirster","Lifesteal outlasts their sustain package."),I("Guardian Angel","Insurance vs the combined burst."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...DRAVEN_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge the hook so your axes keep spinning."),I("Infinity Edge","Crit edge punishes a whiffed hook."),I("Hubris","Snowball AD finishes a caught target.")],behind:[I("Mercury's Treads","Shorter root/bind duration."),I("Bloodthirster","Shield if caught."),I("Guardian Angel","Deny the pick's value.")],runes:{...DRAVEN_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Pen matters past their tank stats."),I("Hubris","Snowball AD still relevant past the engage."),I("Infinity Edge","Crit edge past the frontline.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Second life."),I("Bloodthirster","Lifesteal through the initiation.")],runes:{...DRAVEN_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Pen matters vs stacked-resist Wardens."),I("Hubris","Snowball AD bypasses their mitigation."),I("Infinity Edge","Crit edge past their shields.")],behind:[I("Lord Dominik's Regards","Only reliable damage vs stacked resists."),I("Bloodthirster","Lifesteal survives their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...DRAVEN_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Infinity Edge","Crit edge ends the fight before their kit matters."),I("Hubris","Snowball AD from an early kill decides the matchup."),I("Wit's End","MR + on-hit vs AP specialists.")],behind:[I("Mercury's Treads","Teemo blind/Kennen stun — shorten both."),I("Bloodthirster","Shield vs burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...DRAVEN_BOT_DEFAULT_RUNES}},
      },
    },
  },
};
