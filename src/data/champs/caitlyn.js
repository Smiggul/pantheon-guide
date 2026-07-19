import { I } from "../runeHelpers.js";

const CAITLYN_BOT_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Presence of Mind","Legend: Bloodline","Coup de Grace"],
  secondary:      "Sorcery",
  secondaryRunes: ["Absolute Focus","Gathering Storm"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Lethal Tempo's uncapped attack speed maximizes Caitlyn's range advantage — she can kite from outside retaliation range indefinitely once ramped. Presence of Mind solves the mana strain from constant Piltover Peacemaker pokes; Legend: Bloodline adds sustain. Absolute Focus and Gathering Storm reward her long-range poke lane and long scaling games; Coup de Grace finishes targets already whittled down by headshots and traps.",
};

// ══════════════════════════════════════════════════════════════════════════
//  CAITLYN — Marksman / Max-Range Sniper
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"caitlyn", display:"Caitlyn", dd:"Caitlyn",
  color:"#2e8b8b", glow:"#f0d078",
  lanes:["Bot"],
  roles:{
    Bot:{
      bans:["Draven","Zeri","Samira"], replacements:["Jinx","Yunara","Ziggs"],
      role:"Marksman / Max-Range Sniper",
      corePath:"Hexoptics C44  ›  Infinity Edge  ›  Rapid Firecannon  ›  Lord Dominik's Regards",
      coreNote:"Caitlyn plays for maximum-range poke and headshot resets — trap the escape route, peacemaker from max range, headshot for burst. Hexoptics C44 now leads the build for early poke and scaling; Infinity Edge and Rapid Firecannon both amplify her headshot crit damage and range; Lord Dominik's Regards keeps her relevant into tankier late-game targets.",
      sideItems:["Berserker's Greaves","Bloodthirster","Guardian Angel","Mercury's Treads","Immortal Shieldbow","Kraken Slayer"],
      data:{
        JUGGERNAUT:{ahead:[I("Lord Dominik's Regards","Armor pen cuts through their stacked resists."),I("Rapid Firecannon","Range keeps the trap-headshot loop entirely safe."),I("Infinity Edge","Crit damage wins the trade outright.")],behind:[I("Guardian Angel","Second life vs their walk-down."),I("Mercury's Treads","Shorter CC before the kill."),I("Bloodthirster","Shield + lifesteal to survive.")],runes:{...CAITLYN_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rapid Firecannon","Range + slow kites the dive from max distance."),I("Infinity Edge","Crit damage punishes the failed dive."),I("Immortal Shieldbow","Shield absorbs the opening burst.")],behind:[I("Immortal Shieldbow","Shield is your lifeline behind."),I("Mercury's Treads","Shorter CC on their engage."),I("Guardian Angel","Second life.")],runes:{...CAITLYN_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Immortal Shieldbow","Shield eats their burst opener."),I("Infinity Edge","Crit wins the trade first."),I("Bloodthirster","Extra shield layer.")],behind:[I("Immortal Shieldbow","Mandatory shield lifeline."),I("Guardian Angel","Deny the kill."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...CAITLYN_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rapid Firecannon","Range keeps the duelist at arm's length."),I("Infinity Edge","Crit damage wins the extended trade."),I("Lord Dominik's Regards","Armor pen adds up over the fight.")],behind:[I("Immortal Shieldbow","Shield to survive the all-in."),I("Mercury's Treads","Shorter CC on their gap-close."),I("Guardian Angel","Second life.")],runes:{...CAITLYN_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Immortal Shieldbow","Shield through their combo."),I("Mercury's Treads","Reduce CC in their combo."),I("Rapid Firecannon","Range to poke back safely.")],behind:[I("Immortal Shieldbow","Mandatory lifeline."),I("Mercury's Treads","Shorten CC duration."),I("Guardian Angel","Insurance.")],runes:{...CAITLYN_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Lord Dominik's Regards","MR-ignoring pen cuts through their scaling resists."),I("Infinity Edge","Crit edge wins the burst trade."),I("Rapid Firecannon","Range keeps the trade one-sided.")],behind:[I("Mercury's Treads","Shorter CC to disengage."),I("Bloodthirster","Lifesteal to keep pace."),I("Guardian Angel","Insurance.")],runes:{...CAITLYN_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rapid Firecannon","Extra range wins the poke war outright."),I("Mercury's Treads","Reduce CC duration from range."),I("Infinity Edge","Crit edge wins once in range.")],behind:[I("Immortal Shieldbow","Shield survives the poke on approach."),I("Mercury's Treads","Shorten their key CC from range."),I("Guardian Angel","Second life.")],runes:{...CAITLYN_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Infinity Edge","Crit war wins the range mirror outright."),I("Lord Dominik's Regards","Armor pen shreds their build."),I("Rapid Firecannon","Range advantage decides the lane.")],behind:[I("Immortal Shieldbow","Shield vs their peel."),I("Mercury's Treads","Reduce CC duration."),I("Guardian Angel","Second life for a risky trade.")],runes:{...CAITLYN_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Lord Dominik's Regards","Pen cuts through their shields to real HP."),I("Infinity Edge","Crit edge burst through the peel."),I("Rapid Firecannon","Poke pressure denies their sustain package.")],behind:[I("Immortal Shieldbow","Shield vs the combined burst."),I("Bloodthirster","Lifesteal outlasts their sustain package."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...CAITLYN_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rapid Firecannon","Range keeps you out of hook threat entirely."),I("Infinity Edge","Crit edge punishes a whiffed hook."),I("Immortal Shieldbow","Shield eats a hook's follow-up.")],behind:[I("Mercury's Treads","Shorter root/bind duration."),I("Immortal Shieldbow","Shield if caught."),I("Guardian Angel","Deny the pick's value.")],runes:{...CAITLYN_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Pen matters past their tank stats."),I("Rapid Firecannon","Range still lets you kite past the frontline."),I("Infinity Edge","Crit edge still relevant past the engage.")],behind:[I("Immortal Shieldbow","Shield vs the initiation."),I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Second life.")],runes:{...CAITLYN_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Pen matters vs stacked-resist Wardens."),I("Infinity Edge","Crit edge past their shields."),I("Rapid Firecannon","Range keeps you safe past their body-block.")],behind:[I("Lord Dominik's Regards","Only reliable damage vs stacked resists."),I("Bloodthirster","Lifesteal survives their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...CAITLYN_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Infinity Edge","Crit edge ends the fight before their kit matters."),I("Rapid Firecannon","Range keeps you ahead of kiting specialists."),I("Lord Dominik's Regards","Armor pen adds up over the fight.")],behind:[I("Mercury's Treads","Teemo blind/Kennen stun — shorten both."),I("Immortal Shieldbow","Shield vs burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...CAITLYN_BOT_DEFAULT_RUNES}},
      },
    },
  },
};
