import { I } from "../runeHelpers.js";

const SIVIR_BOT_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Presence of Mind","Legend: Bloodline","Cut Down"],
  secondary:      "Inspiration",
  secondaryRunes: ["Cash Back","Triple Tonic"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Lethal Tempo rewards Sivir's wave-clear-into-fight pattern with ramping attack speed — Boomerang Blade clears fast and On The Hunt lets her arrive at every skirmish first. Presence of Mind and Legend: Bloodline solve mana strain and add sustain. Cash Back speeds up her item spike; Triple Tonic adds early sustain. Cut Down punishes tanks who'd otherwise soak her steady poke-and-DPS.",
};

// ══════════════════════════════════════════════════════════════════════════
//  SIVIR — Marksman / Wave-Clear-and-Roam Carry
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"sivir", display:"Sivir", dd:"Sivir",
  color:"#6a5a1a", glow:"#e0c840",
  lanes:["Bot"],
  roles:{
    Bot:{
      bans:["Draven","Samira","Kalista"], replacements:["Jinx","Caitlyn","Yunara"],
      role:"Marksman / Wave-Clear-and-Roam Carry",
      corePath:"Essence Reaver  ›  Navori Flickerblade  ›  Infinity Edge  ›  Lord Dominik's Regards",
      coreNote:"Sivir plays for a wave-clear-into-teamfight pattern — Boomerang Blade pushes lanes fast, Spell Shield blocks the one ability that would kill her, and On The Hunt lets her whole team collapse on a skirmish. Essence Reaver's mana return keeps the clear going all game; Navori Flickerblade lowers On The Hunt's cooldown; Infinity Edge and Lord Dominik's Regards scale the crit into a real DPS threat.",
      sideItems:["Berserker's Greaves","Guardian Angel","Mercury's Treads","Bloodthirster","Rapid Firecannon","Wit's End"],
      data:{
        JUGGERNAUT:{ahead:[I("Lord Dominik's Regards","Armor pen cuts through their stacked resists."),I("Navori Flickerblade","Haste means more On The Hunt windows."),I("Infinity Edge","Crit damage wins the trade outright.")],behind:[I("Guardian Angel","Second life vs their walk-down."),I("Mercury's Treads","Shorter CC before the kill."),I("Bloodthirster","Shield + lifesteal to survive.")],runes:{...SIVIR_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rapid Firecannon","Range + slow kites the dive."),I("Infinity Edge","Crit damage punishes the failed dive."),I("Bloodthirster","Shield absorbs the opening burst.")],behind:[I("Bloodthirster","Shield is your lifeline behind (Spell Shield also blocks a targeted opener)."),I("Mercury's Treads","Shorter CC on their engage."),I("Guardian Angel","Second life.")],runes:{...SIVIR_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Bloodthirster","Spell Shield plus this shield eats their burst opener."),I("Infinity Edge","Crit wins the trade first."),I("Essence Reaver","Mana return keeps the clear-and-poke going.")],behind:[I("Bloodthirster","Mandatory shield lifeline."),I("Guardian Angel","Deny the kill."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...SIVIR_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rapid Firecannon","Range keeps the duelist at arm's length."),I("Infinity Edge","Crit damage wins the extended trade."),I("Navori Flickerblade","Haste for more On The Hunt engages.")],behind:[I("Bloodthirster","Shield to survive the all-in."),I("Mercury's Treads","Shorter CC on their gap-close."),I("Guardian Angel","Second life.")],runes:{...SIVIR_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Bloodthirster","Spell Shield blocks their key ability outright."),I("Mercury's Treads","Reduce CC in their combo."),I("Rapid Firecannon","Range to poke back safely.")],behind:[I("Bloodthirster","Spell Shield is your lifeline vs their combo opener."),I("Mercury's Treads","Shorten CC duration."),I("Guardian Angel","Insurance.")],runes:{...SIVIR_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Lord Dominik's Regards","MR-ignoring pen cuts through their scaling resists."),I("Infinity Edge","Crit edge wins the burst trade."),I("Wit's End","MR + on-hit wins the drain war.")],behind:[I("Mercury's Treads","Shorter CC to disengage."),I("Bloodthirster","Lifesteal to keep pace."),I("Guardian Angel","Insurance.")],runes:{...SIVIR_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Bloodthirster","Spell Shield blocks their one long-range ability."),I("Mercury's Treads","Reduce CC duration from range."),I("Infinity Edge","Crit edge wins once in range.")],behind:[I("Bloodthirster","Spell Shield absorbs their poke opener."),I("Mercury's Treads","Shorten their key CC from range."),I("Guardian Angel","Second life.")],runes:{...SIVIR_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Infinity Edge","Crit war wins the mirror matchup outright."),I("Lord Dominik's Regards","Armor pen shreds their build."),I("Navori Flickerblade","On The Hunt engages decide the lane.")],behind:[I("Bloodthirster","Shield vs their peel."),I("Mercury's Treads","Reduce CC duration."),I("Guardian Angel","Second life for a risky trade.")],runes:{...SIVIR_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Lord Dominik's Regards","Pen cuts through their shields to real HP."),I("Infinity Edge","Crit edge burst through the peel."),I("Wit's End","On-hit ignores shields over time.")],behind:[I("Bloodthirster","Lifesteal outlasts their sustain package."),I("Mercury's Treads","Reduce their disengage CC."),I("Guardian Angel","Insurance.")],runes:{...SIVIR_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Bloodthirster","Spell Shield blocks the hook outright."),I("Infinity Edge","Crit edge punishes a whiffed hook."),I("Rapid Firecannon","Range keeps you out of hook threat.")],behind:[I("Bloodthirster","Spell Shield is your lifeline vs a hook."),I("Mercury's Treads","Shorter root/bind duration."),I("Guardian Angel","Deny the pick's value.")],runes:{...SIVIR_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Pen matters past their tank stats."),I("Bloodthirster","Spell Shield blocks their key initiation tool."),I("Infinity Edge","Crit edge still relevant.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Second life."),I("Bloodthirster","Spell Shield blocks the engage.")],runes:{...SIVIR_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Pen matters vs stacked-resist Wardens."),I("Wit's End","On-hit bypasses their mitigation over time."),I("Infinity Edge","Crit edge past their shields.")],behind:[I("Lord Dominik's Regards","Only reliable damage vs stacked resists."),I("Bloodthirster","Lifesteal survives their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...SIVIR_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Infinity Edge","Crit edge ends the fight before their kit matters."),I("Rapid Firecannon","Range keeps you ahead of kiting specialists."),I("Bloodthirster","Spell Shield blocks their key setup ability.")],behind:[I("Mercury's Treads","Teemo blind/Kennen stun — shorten both."),I("Bloodthirster","Spell Shield blocks burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...SIVIR_BOT_DEFAULT_RUNES}},
      },
    },
  },
};
