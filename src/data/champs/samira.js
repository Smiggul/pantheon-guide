import { I } from "../runeHelpers.js";

const SAMIRA_BOT_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Bloodline","Last Stand"],
  secondary:      "Domination",
  secondaryRunes: ["Taste of Blood","Treasure Hunter"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Samira relies on stacking Style points with a mix of spells and autos before popping off with Inferno Trigger, making her a prime Conqueror user — she scales mostly off spell damage and sustain, both boosted by the keystone's omnivamp. Triumph and Legend: Bloodline both fund her all-in sustain; Last Stand rewards the low-HP dives her aggressive playstyle invites. Taste of Blood adds early trade sustain; Treasure Hunter accelerates her snowball-dependent item spike.",
};

// ══════════════════════════════════════════════════════════════════════════
//  SAMIRA — Marksman / Max-Style All-In
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"samira", display:"Samira", dd:"Samira",
  color:"#8a1a3a", glow:"#f0a040",
  lanes:["Bot"],
  roles:{
    Bot:{
      bans:["Ashe","Xerath","Ziggs"], replacements:["Jinx","Caitlyn","Kai'Sa"],
      role:"Marksman / Max-Style All-In",
      corePath:"The Collector  ›  Gluttonous Greaves  ›  Infinity Edge  ›  Lord Dominik's Regards",
      coreNote:"Samira plays for a maximum-style all-in — dash through Wild Rush, cancel animations with Blade Whirl, and chain every spell/auto together to fill the Style meter toward a game-ending Inferno Trigger. The Collector executes anything her combo has chunked; Gluttonous Greaves' lifesteal funds the all-in commitment; Infinity Edge and Lord Dominik's Regards scale the crit into a real DPS threat.",
      sideItems:["Immortal Shieldbow","Bloodthirster","Guardian Angel","Mercury's Treads","Berserker's Greaves","Wit's End"],
      data:{
        JUGGERNAUT:{ahead:[I("Lord Dominik's Regards","Armor pen cuts through their stacked resists."),I("The Collector","Execute finishes what the combo chunked."),I("Infinity Edge","Crit damage wins the trade outright.")],behind:[I("Guardian Angel","Second life vs their walk-down."),I("Mercury's Treads","Shorter CC before the kill."),I("Gluttonous Greaves","Lifesteal to survive.")],runes:{...SAMIRA_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Immortal Shieldbow","Shield absorbs their engage burst."),I("Infinity Edge","Crit damage punishes the failed dive."),I("Gluttonous Greaves","Lifesteal outlasts the all-in.")],behind:[I("Immortal Shieldbow","Shield is your lifeline behind."),I("Mercury's Treads","Shorter CC on their engage."),I("Guardian Angel","Second life.")],runes:{...SAMIRA_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Immortal Shieldbow","Shield eats their burst opener."),I("Infinity Edge","Crit wins the trade first."),I("Bloodthirster","Extra shield layer.")],behind:[I("Immortal Shieldbow","Mandatory shield lifeline."),I("Guardian Angel","Deny the kill."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...SAMIRA_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Wit's End","MR + on-hit wins the extended trade."),I("Infinity Edge","Crit damage wins the duel outright."),I("The Collector","Execute finishes the duel.")],behind:[I("Gluttonous Greaves","Lifesteal to survive the all-in."),I("Mercury's Treads","Shorter CC on their gap-close."),I("Guardian Angel","Second life.")],runes:{...SAMIRA_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Immortal Shieldbow","Shield through their combo."),I("Mercury's Treads","Reduce CC in their combo."),I("Wit's End","MR + on-hit through their kit.")],behind:[I("Immortal Shieldbow","Mandatory lifeline."),I("Mercury's Treads","Shorten CC duration."),I("Guardian Angel","Insurance.")],runes:{...SAMIRA_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Lord Dominik's Regards","MR-ignoring pen cuts through their scaling resists."),I("Infinity Edge","Crit edge wins the burst trade."),I("Wit's End","MR + DPS wins the drain war.")],behind:[I("Mercury's Treads","Shorter CC to disengage."),I("Gluttonous Greaves","Lifesteal to keep pace."),I("Guardian Angel","Insurance.")],runes:{...SAMIRA_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Berserker's Greaves","AS to close the poke-war gap faster."),I("The Collector","Execute wins the exchange once you close."),I("Infinity Edge","Crit edge wins once in range.")],behind:[I("Immortal Shieldbow","Shield survives the poke on approach."),I("Mercury's Treads","Shorten their key CC from range."),I("Guardian Angel","Second life.")],runes:{...SAMIRA_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Infinity Edge","Crit war wins the mirror matchup outright."),I("Lord Dominik's Regards","Armor pen shreds their build."),I("The Collector","Execute finishes low-HP trades.")],behind:[I("Immortal Shieldbow","Shield vs their peel."),I("Mercury's Treads","Reduce CC duration."),I("Guardian Angel","Second life for a risky trade.")],runes:{...SAMIRA_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Lord Dominik's Regards","Pen cuts through their shields to real HP."),I("Infinity Edge","Crit edge burst through the peel."),I("The Collector","Execute cuts through shields entirely.")],behind:[I("Gluttonous Greaves","Lifesteal outlasts their sustain package."),I("Immortal Shieldbow","Shield vs the combined burst."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...SAMIRA_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Immortal Shieldbow","Shield eats a hook's follow-up."),I("Infinity Edge","Crit edge punishes a whiffed hook."),I("The Collector","Execute finishes a caught target.")],behind:[I("Mercury's Treads","Shorter root/bind duration."),I("Immortal Shieldbow","Shield if caught."),I("Guardian Angel","Deny the pick's value.")],runes:{...SAMIRA_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Pen matters past their tank stats."),I("The Collector","Execute through their frontline."),I("Infinity Edge","Crit edge still relevant past the engage.")],behind:[I("Immortal Shieldbow","Shield vs the initiation."),I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Second life.")],runes:{...SAMIRA_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Pen matters vs stacked-resist Wardens."),I("The Collector","Execute bypasses their mitigation."),I("Infinity Edge","Crit edge past their shields.")],behind:[I("Lord Dominik's Regards","Only reliable damage vs stacked resists."),I("Gluttonous Greaves","Lifesteal survives their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...SAMIRA_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Infinity Edge","Crit edge ends the fight before their kit matters."),I("Berserker's Greaves","AS keeps you ahead of kiting specialists."),I("The Collector","Execute finishes squishy specialists caught close.")],behind:[I("Mercury's Treads","Teemo blind/Kennen stun — shorten both."),I("Immortal Shieldbow","Shield vs burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...SAMIRA_BOT_DEFAULT_RUNES}},
      },
    },
  },
};
