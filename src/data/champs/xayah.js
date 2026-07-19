import { I } from "../runeHelpers.js";

const XAYAH_BOT_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Presence of Mind","Legend: Bloodline","Coup de Grace"],
  secondary:      "Inspiration",
  secondaryRunes: ["Biscuit Delivery","Magical Footwear"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Lethal Tempo is Xayah's best keystone because gaining extra attack speed lets her get her feathers out faster and proc Featherstorm's root more often. Presence of Mind and Legend: Bloodline solve mana strain and add sustain. Biscuit Delivery and Magical Footwear get her item timing online faster; Coup de Grace finishes targets already whittled down by feather resets.",
};

// ══════════════════════════════════════════════════════════════════════════
//  XAYAH — Marksman / Feather-Root Carry
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"xayah", display:"Xayah", dd:"Xayah",
  color:"#7a1a2a", glow:"#e04050",
  lanes:["Bot"],
  roles:{
    Bot:{
      bans:["Draven","Samira","Kalista"], replacements:["Jinx","Caitlyn","Yunara"],
      role:"Marksman / Feather-Root Carry",
      corePath:"Essence Reaver  ›  Navori Flickerblade  ›  Infinity Edge  ›  Lord Dominik's Regards",
      coreNote:"Xayah plays for a feather-carpeted zone that roots anyone standing on 3+ blades — Bladecaller confirms the root, and Featherstorm both dodges and recalls every feather thrown. Essence Reaver's mana return keeps her attack speed abilities spamming; Navori Flickerblade lowers her ultimate's cooldown for more untargetable windows; Infinity Edge and Lord Dominik's Regards scale the crit into a real DPS threat.",
      sideItems:["Berserker's Greaves","Guardian Angel","Mercury's Treads","Bloodthirster","Rapid Firecannon","Wit's End"],
      data:{
        JUGGERNAUT:{ahead:[I("Lord Dominik's Regards","Armor pen cuts through their stacked resists."),I("Navori Flickerblade","Haste means more root windows."),I("Infinity Edge","Crit damage wins the trade outright.")],behind:[I("Guardian Angel","Second life vs their walk-down."),I("Mercury's Treads","Shorter CC before the kill."),I("Bloodthirster","Shield + lifesteal to survive.")],runes:{...XAYAH_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rapid Firecannon","Range + slow kites the dive."),I("Infinity Edge","Crit damage punishes the failed dive."),I("Bloodthirster","Shield absorbs the opening burst.")],behind:[I("Bloodthirster","Shield is your lifeline behind."),I("Mercury's Treads","Shorter CC on their engage."),I("Guardian Angel","Second life (Featherstorm dodges the follow-up).")],runes:{...XAYAH_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Bloodthirster","Shield eats their burst opener."),I("Infinity Edge","Crit wins the trade first."),I("Essence Reaver","Mana return keeps the feather zone up.")],behind:[I("Bloodthirster","Mandatory shield lifeline."),I("Guardian Angel","Deny the kill."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...XAYAH_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rapid Firecannon","Range keeps the duelist at arm's length."),I("Infinity Edge","Crit damage wins the extended trade."),I("Navori Flickerblade","Haste for more root windows.")],behind:[I("Bloodthirster","Shield to survive the all-in."),I("Mercury's Treads","Shorter CC on their gap-close."),I("Guardian Angel","Second life.")],runes:{...XAYAH_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Bloodthirster","Shield through their combo."),I("Mercury's Treads","Reduce CC in their combo."),I("Rapid Firecannon","Range to poke back safely.")],behind:[I("Bloodthirster","Mandatory lifeline."),I("Mercury's Treads","Shorten CC duration."),I("Guardian Angel","Insurance.")],runes:{...XAYAH_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Lord Dominik's Regards","MR-ignoring pen cuts through their scaling resists."),I("Infinity Edge","Crit edge wins the burst trade."),I("Wit's End","MR + on-hit wins the drain war.")],behind:[I("Mercury's Treads","Shorter CC to disengage."),I("Bloodthirster","Lifesteal to keep pace."),I("Guardian Angel","Insurance.")],runes:{...XAYAH_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rapid Firecannon","Extra range wins the poke war."),I("Mercury's Treads","Reduce CC duration from range."),I("Infinity Edge","Crit edge wins once in range.")],behind:[I("Bloodthirster","Shield survives the poke on approach."),I("Mercury's Treads","Shorten their key CC from range."),I("Guardian Angel","Second life.")],runes:{...XAYAH_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Infinity Edge","Crit war wins the mirror matchup outright."),I("Lord Dominik's Regards","Armor pen shreds their build."),I("Navori Flickerblade","Root windows decide the range mirror.")],behind:[I("Bloodthirster","Shield vs their peel."),I("Mercury's Treads","Reduce CC duration."),I("Guardian Angel","Second life for a risky trade.")],runes:{...XAYAH_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Lord Dominik's Regards","Pen cuts through their shields to real HP."),I("Infinity Edge","Crit edge burst through the peel."),I("Wit's End","On-hit ignores shields over time.")],behind:[I("Bloodthirster","Lifesteal outlasts their sustain package."),I("Mercury's Treads","Reduce their disengage CC."),I("Guardian Angel","Insurance.")],runes:{...XAYAH_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Bloodthirster","Shield eats a hook's follow-up."),I("Infinity Edge","Crit edge punishes a whiffed hook."),I("Rapid Firecannon","Range keeps you out of hook threat.")],behind:[I("Mercury's Treads","Shorter root/bind duration."),I("Bloodthirster","Shield if caught."),I("Guardian Angel","Deny the pick's value.")],runes:{...XAYAH_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Pen matters past their tank stats."),I("Navori Flickerblade","Root windows still matter past the engage."),I("Infinity Edge","Crit edge still relevant.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Second life."),I("Bloodthirster","Lifesteal through the initiation.")],runes:{...XAYAH_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Pen matters vs stacked-resist Wardens."),I("Wit's End","On-hit bypasses their mitigation over time."),I("Infinity Edge","Crit edge past their shields.")],behind:[I("Lord Dominik's Regards","Only reliable damage vs stacked resists."),I("Bloodthirster","Lifesteal survives their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...XAYAH_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Infinity Edge","Crit edge ends the fight before their kit matters."),I("Rapid Firecannon","Range keeps you ahead of kiting specialists."),I("Navori Flickerblade","Root windows finish squishy specialists caught close.")],behind:[I("Mercury's Treads","Teemo blind/Kennen stun — shorten both."),I("Bloodthirster","Shield vs burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...XAYAH_BOT_DEFAULT_RUNES}},
      },
    },
  },
};
