import { I } from "../runeHelpers.js";

// Research (2026-10-26, patch 16.21, lolalytics Emerald+, 96,792 games): Press the Attack is the keystone in 55.9% of
//   games, First Strike 37.1%. Most common page: Presence of Mind (52%), Legend: Bloodline (41%, Alacrity 17%),
//   Coup de Grace (33%, Cut Down 25%), Sorcery Manaflow Band + Gathering Storm. It goes with the Bloodthirster line;
//   the First Strike page moved with Hubris to the alternate.
const MISSFORTUNE_BOT_DEFAULT_RUNES = {
  keystone:       "Press the Attack",
  primary:        "Precision",
  primaryRunes:   ["Presence of Mind","Legend: Bloodline","Coup de Grace"],
  secondary:      "Sorcery",
  secondaryRunes: ["Manaflow Band","Gathering Storm"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Press the Attack lands on the third auto of a trade, and the target takes more damage from every Love Tap and Double Up after it. Presence of Mind refunds mana for constant Q poke, Legend: Bloodline adds the life steal a Bloodthirster build leans on, and Coup de Grace finishes the low-health targets her passive already punishes. Manaflow Band and Gathering Storm fund and scale the poke.",
};

const MISSFORTUNE_BOT_FIRST_STRIKE_RUNES = {
  keystone:       "First Strike",
  primary:        "Inspiration",
  primaryRunes:   ["Cash Back","Biscuit Delivery","Jack Of All Trades"],
  secondary:      "Sorcery",
  secondaryRunes: ["Manaflow Band","Gathering Storm"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "First Strike rewards Miss Fortune's Love Tap poke — she can safely chip a lane opponent from range and get bonus gold/damage for landing first. Cash Back and Jack Of All Trades both accelerate her item spike; Biscuit Delivery covers early sustain. Manaflow Band and Gathering Storm reward her long, scaling wave-clear-into-Bullet-Time games.",
};

// ══════════════════════════════════════════════════════════════════════════
//  MISS FORTUNE — Marksman / Wave-Clear Poke Carry
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"missfortune", display:"Miss Fortune", dd:"MissFortune",
  color:"#8a1a1a", glow:"#f0c040",
  lanes:["Bot"],
  altBuilds:{
    Bot:[{
      label:"Hubris lethality", tag:"alt",
      corePath:"Hubris  ›  The Collector  ›  Infinity Edge  ›  Lord Dominik's Regards",
      // Research (2026-10-26, 16.21): the main build until this date. Still opens 25.6% of 90,714 lolalytics Emerald+ games
      //   (Hubris > Collector 23.5% of first-two pairs); OP.GG core Hubris > Collector > IE 16.5%. It pairs with First Strike.
      coreNote:"Hubris first for lanes you can win early: every takedown adds bonus AD for 90 seconds, and First Strike's bonus gold brings The Collector sooner.",
      runes:{...MISSFORTUNE_BOT_FIRST_STRIKE_RUNES},
      sideItems:["Bloodthirster","Guardian Angel","Boots of Swiftness","Mercury's Treads","Rapid Firecannon","Edge of Night"],
    }],
  },
  roles:{
    Bot:{
      bans:["Draven","Samira","Kalista"], replacements:["Jinx","Caitlyn","Yunara"],
      role:"Marksman / Wave-Clear Poke Carry",
      corePath:"Bloodthirster  ›  The Collector  ›  Infinity Edge  ›  Lord Dominik's Regards",
      // Research (2026-10-26, patch 16.21, Emerald+): lolalytics build-itemset, 90,714 games: Bloodthirster opens 43.8%,
      //   Hubris 25.6%, The Collector 22.6%; first two Bloodthirster > Collector 36.2%, Hubris > Collector 23.5%; first three
      //   Bloodthirster > Collector > IE 29.7%. OP.GG core: Bloodthirster > Collector > IE 27.5%, Hubris > Collector > IE 16.5%.
      //   The Hubris line is the appended alternate.
      coreNote:"Miss Fortune plays for a Love Tap poke lane that snowballs into Bullet Time teamfight damage, and her passive bonus damage against low-HP targets rewards constant chip pressure. Bloodthirster's life steal and overflow shield let her keep trading without backing; The Collector executes anything her poke has already chunked; Infinity Edge and Lord Dominik's Regards scale the crit into a real late-game threat.",
      sideItems:["Boots of Swiftness","Guardian Angel","Mercury's Treads","Hubris","Rapid Firecannon","Berserker's Greaves"],
      data:{
        JUGGERNAUT:{ahead:[I("Lord Dominik's Regards","Armor pen cuts through their stacked resists."),I("The Collector","Execute finishes what Love Tap chunked."),I("Infinity Edge","Crit damage wins the trade outright.")],behind:[I("Guardian Angel","Second life vs their walk-down."),I("Mercury's Treads","Shorter CC before the kill."),I("Bloodthirster","Shield + lifesteal to survive.")],runes:{...MISSFORTUNE_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rapid Firecannon","Range + slow kites the dive."),I("Infinity Edge","Crit damage punishes the failed dive."),I("Boots of Swiftness","Move speed to reposition Bullet Time.")],behind:[I("Boots of Swiftness","Reposition out of their engage range."),I("Mercury's Treads","Shorter CC on their engage."),I("Guardian Angel","Second life.")],runes:{...MISSFORTUNE_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Infinity Edge","Crit wins the trade first."),I("The Collector","Execute finishes low-HP assassins after the trade."),I("Hubris","Extra AD from an early takedown.")],behind:[I("Guardian Angel","Deny the kill."),I("Mercury's Treads","Shorter CC before the finisher."),I("Bloodthirster","Shield + lifesteal to survive.")],runes:{...MISSFORTUNE_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rapid Firecannon","Range keeps the duelist at arm's length."),I("Infinity Edge","Crit wins the extended trade."),I("Hubris","Extra AD from an early kill snowballs the lane.")],behind:[I("Boots of Swiftness","Reposition away from their gap-close."),I("Mercury's Treads","Shorter CC on their gap-close."),I("Guardian Angel","Second life.")],runes:{...MISSFORTUNE_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Boots of Swiftness","Reposition dodges the combo entirely."),I("Mercury's Treads","Reduce CC in their combo."),I("Rapid Firecannon","Range to poke back safely.")],behind:[I("Boots of Swiftness","Reposition is your lifeline."),I("Mercury's Treads","Shorten CC duration."),I("Guardian Angel","Insurance.")],runes:{...MISSFORTUNE_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Lord Dominik's Regards","MR-ignoring pen cuts through their scaling resists."),I("The Collector","Execute through their tank stats."),I("Infinity Edge","Crit edge wins the burst trade.")],behind:[I("Mercury's Treads","Shorter CC to disengage."),I("Bloodthirster","Lifesteal to keep pace."),I("Guardian Angel","Insurance.")],runes:{...MISSFORTUNE_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rapid Firecannon","Extra range wins the poke war."),I("Mercury's Treads","Reduce CC duration from range."),I("Infinity Edge","Crit edge wins once in range.")],behind:[I("Boots of Swiftness","Reposition survives the poke on approach."),I("Mercury's Treads","Shorten their key CC from range."),I("Guardian Angel","Second life.")],runes:{...MISSFORTUNE_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Infinity Edge","Crit war wins the mirror matchup outright."),I("Lord Dominik's Regards","Armor pen shreds their build."),I("The Collector","Execute finishes low-HP trades.")],behind:[I("Boots of Swiftness","Reposition vs their peel."),I("Mercury's Treads","Reduce CC duration."),I("Guardian Angel","Second life for a risky trade.")],runes:{...MISSFORTUNE_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Lord Dominik's Regards","Pen cuts through their shields to real HP."),I("Infinity Edge","Crit edge burst through the peel."),I("The Collector","Execute cuts through shields entirely.")],behind:[I("Bloodthirster","Lifesteal outlasts their sustain package."),I("Mercury's Treads","Reduce their disengage CC."),I("Guardian Angel","Insurance.")],runes:{...MISSFORTUNE_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Boots of Swiftness","Reposition dodges hook range."),I("Infinity Edge","Crit edge punishes a whiffed hook."),I("Rapid Firecannon","Range keeps you out of hook threat.")],behind:[I("Mercury's Treads","Shorter root/bind duration."),I("Guardian Angel","Deny the pick's value."),I("Bloodthirster","Lifesteal if caught.")],runes:{...MISSFORTUNE_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Pen matters past their tank stats."),I("The Collector","Execute through their frontline."),I("Infinity Edge","Crit edge still relevant past the engage.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Second life."),I("Boots of Swiftness","Reposition away from the initiation.")],runes:{...MISSFORTUNE_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Pen matters vs stacked-resist Wardens."),I("The Collector","Execute bypasses their mitigation."),I("Infinity Edge","Crit edge past their shields.")],behind:[I("Lord Dominik's Regards","Only reliable damage vs stacked resists."),I("Bloodthirster","Lifesteal survives their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...MISSFORTUNE_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Infinity Edge","Crit edge ends the fight before their kit matters."),I("Rapid Firecannon","Range keeps you ahead of kiting specialists."),I("The Collector","Execute finishes squishy specialists caught close.")],behind:[I("Mercury's Treads","Teemo blind/Kennen stun — shorten both."),I("Boots of Swiftness","Reposition vs burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...MISSFORTUNE_BOT_DEFAULT_RUNES}},
      },
    },
  },
};
