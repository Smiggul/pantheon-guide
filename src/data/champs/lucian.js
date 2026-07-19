import { I } from "../runeHelpers.js";

const LUCIAN_BOT_DEFAULT_RUNES = {
  keystone:       "Press the Attack",
  primary:        "Precision",
  primaryRunes:   ["Presence of Mind","Legend: Bloodline","Coup de Grace"],
  secondary:      "Inspiration",
  secondaryRunes: ["Biscuit Delivery","Magical Footwear"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Press the Attack rewards Lucian's double-auto-per-Q rhythm with a guaranteed 3-hit amplify window — Ardent Blaze marks fall in fast between Piercing Light resets. Presence of Mind and Legend: Bloodline solve mana strain and add sustain. Biscuit Delivery and Magical Footwear get his item timing online faster; Coup de Grace finishes targets his relentless auto-and-ability barrage has already whittled down.",
};

// ══════════════════════════════════════════════════════════════════════════
//  LUCIAN — Marksman / Double-Auto Burst
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"lucian", display:"Lucian", dd:"Lucian",
  color:"#8a7a3a", glow:"#f0e0a0",
  lanes:["Bot"],
  roles:{
    Bot:{
      bans:["Draven","Samira","Kalista"], replacements:["Jinx","Caitlyn","Yunara"],
      role:"Marksman / Double-Auto Burst",
      corePath:"Essence Reaver  ›  Navori Flickerblade  ›  Infinity Edge  ›  Lord Dominik's Regards",
      coreNote:"Lucian plays for a relentless auto-ability weaving pattern — Piercing Light resets on takedown, Relentless Pursuit repositions, and The Culling unloads a burst of rapid fire. Essence Reaver's mana return keeps the ability spam going; Navori Flickerblade lowers his ultimate's cooldown; Infinity Edge and Lord Dominik's Regards scale the crit into a real DPS threat.",
      sideItems:["Gluttonous Greaves","Guardian Angel","Mercury's Treads","Bloodthirster","Rapid Firecannon","Wit's End"],
      data:{
        JUGGERNAUT:{ahead:[I("Lord Dominik's Regards","Armor pen cuts through their stacked resists."),I("Navori Flickerblade","Haste means more The Culling windows."),I("Infinity Edge","Crit damage wins the trade outright.")],behind:[I("Guardian Angel","Second life vs their walk-down."),I("Mercury's Treads","Shorter CC before the kill."),I("Gluttonous Greaves","Lifesteal to survive.")],runes:{...LUCIAN_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rapid Firecannon","Range + slow kites the dive."),I("Infinity Edge","Crit damage punishes the failed dive."),I("Gluttonous Greaves","Lifesteal outlasts the all-in.")],behind:[I("Gluttonous Greaves","Lifesteal is your lifeline behind."),I("Mercury's Treads","Shorter CC on their engage."),I("Guardian Angel","Second life (Relentless Pursuit dodges the follow-up).")],runes:{...LUCIAN_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Infinity Edge","Crit wins the trade first."),I("Essence Reaver","Mana return keeps the burst combo going."),I("Bloodthirster","Extra shield layer.")],behind:[I("Guardian Angel","Deny the kill."),I("Mercury's Treads","Shorter CC before the finisher."),I("Bloodthirster","Shield + lifesteal to survive.")],runes:{...LUCIAN_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rapid Firecannon","Range keeps the duelist at arm's length."),I("Infinity Edge","Crit damage wins the extended trade."),I("Navori Flickerblade","Haste for more burst windows.")],behind:[I("Gluttonous Greaves","Lifesteal to survive the all-in."),I("Mercury's Treads","Shorter CC on their gap-close."),I("Guardian Angel","Second life.")],runes:{...LUCIAN_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Gluttonous Greaves","Lifesteal through their combo."),I("Mercury's Treads","Reduce CC in their combo."),I("Rapid Firecannon","Range to poke back safely.")],behind:[I("Gluttonous Greaves","Mandatory lifeline."),I("Mercury's Treads","Shorten CC duration."),I("Guardian Angel","Insurance.")],runes:{...LUCIAN_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Lord Dominik's Regards","MR-ignoring pen cuts through their scaling resists."),I("Infinity Edge","Crit edge wins the burst trade."),I("Wit's End","MR + on-hit wins the drain war.")],behind:[I("Mercury's Treads","Shorter CC to disengage."),I("Gluttonous Greaves","Lifesteal to keep pace."),I("Guardian Angel","Insurance.")],runes:{...LUCIAN_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rapid Firecannon","Extra range wins the poke war."),I("Mercury's Treads","Reduce CC duration from range."),I("Infinity Edge","Crit edge wins once in range.")],behind:[I("Gluttonous Greaves","Lifesteal survives the poke on approach."),I("Mercury's Treads","Shorten their key CC from range."),I("Guardian Angel","Second life.")],runes:{...LUCIAN_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Infinity Edge","Crit war wins the mirror matchup outright."),I("Lord Dominik's Regards","Armor pen shreds their build."),I("Navori Flickerblade","Burst windows decide the trade.")],behind:[I("Gluttonous Greaves","Lifesteal vs their peel."),I("Mercury's Treads","Reduce CC duration."),I("Guardian Angel","Second life for a risky trade.")],runes:{...LUCIAN_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Lord Dominik's Regards","Pen cuts through their shields to real HP."),I("Infinity Edge","Crit edge burst through the peel."),I("Wit's End","On-hit ignores shields over time.")],behind:[I("Gluttonous Greaves","Lifesteal outlasts their sustain package."),I("Mercury's Treads","Reduce their disengage CC."),I("Guardian Angel","Insurance.")],runes:{...LUCIAN_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Guardian Angel","Relentless Pursuit dodges hooks — insurance if it still lands."),I("Infinity Edge","Crit edge punishes a whiffed hook."),I("Rapid Firecannon","Range keeps you out of hook threat.")],behind:[I("Mercury's Treads","Shorter root/bind duration."),I("Gluttonous Greaves","Lifesteal if caught."),I("Guardian Angel","Deny the pick's value.")],runes:{...LUCIAN_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Pen matters past their tank stats."),I("Navori Flickerblade","Burst windows still relevant past the engage."),I("Infinity Edge","Crit edge still relevant.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Second life."),I("Gluttonous Greaves","Lifesteal through the initiation.")],runes:{...LUCIAN_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Pen matters vs stacked-resist Wardens."),I("Wit's End","On-hit bypasses their mitigation over time."),I("Infinity Edge","Crit edge past their shields.")],behind:[I("Lord Dominik's Regards","Only reliable damage vs stacked resists."),I("Gluttonous Greaves","Lifesteal survives their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...LUCIAN_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Infinity Edge","Crit edge ends the fight before their kit matters."),I("Rapid Firecannon","Range keeps you ahead of kiting specialists."),I("Navori Flickerblade","Burst windows finish squishy specialists caught close.")],behind:[I("Mercury's Treads","Teemo blind/Kennen stun — shorten both."),I("Gluttonous Greaves","Lifesteal vs burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...LUCIAN_BOT_DEFAULT_RUNES}},
      },
    },
  },
};
