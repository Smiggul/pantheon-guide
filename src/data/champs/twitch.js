import { I } from "../runeHelpers.js";

const TWITCH_BOT_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Cut Down"],
  secondary:      "Sorcery",
  secondaryRunes: ["Axiom Arcanist","Gathering Storm"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Lethal Tempo is the best keystone on Twitch because he wants to land as many autos as possible during Spray and Pray's stealth ambush window. Triumph and Legend: Alacrity fund the ramp and add sustain; Cut Down punishes tanks who'd otherwise soak his stacked Deadly Venom damage. Axiom Arcanist and Gathering Storm both reward his ultimate's damage and long scaling games.",
};

// ══════════════════════════════════════════════════════════════════════════
//  TWITCH — Marksman / Stealth Ambush Carry
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"twitch", display:"Twitch", dd:"Twitch",
  color:"#3a5a1a", glow:"#9ae040",
  lanes:["Bot"],
  roles:{
    Bot:{
      bans:["Draven","Samira","Kalista"], replacements:["Jinx","Caitlyn","Yunara"],
      role:"Marksman / Stealth Ambush Carry",
      corePath:"The Collector  ›  Fiendhunter Bolts  ›  Infinity Edge  ›  Lord Dominik's Regards",
      coreNote:"Twitch plays for a stealth-ambush pattern — Camouflage hides his approach, Deadly Venom stacks damage-over-time with every hit, and Spray and Pray unloads a piercing volley once the ambush lands. The Collector executes anything Deadly Venom has already chunked; Fiendhunter Bolts adds on-hit magic damage that scales with his stacks; Infinity Edge and Lord Dominik's Regards scale the crit into a real DPS threat.",
      sideItems:["Berserker's Greaves","Guardian Angel","Mercury's Treads","Bloodthirster","Rapid Firecannon","Wit's End"],
      data:{
        JUGGERNAUT:{ahead:[I("Lord Dominik's Regards","Armor pen cuts through their stacked resists."),I("The Collector","Execute finishes what Deadly Venom chunked."),I("Infinity Edge","Crit damage wins the trade outright.")],behind:[I("Guardian Angel","Second life vs their walk-down."),I("Mercury's Treads","Shorter CC before the kill."),I("Bloodthirster","Shield + lifesteal to survive.")],runes:{...TWITCH_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rapid Firecannon","Range + slow kites the dive."),I("Infinity Edge","Crit damage punishes the failed dive."),I("Bloodthirster","Shield absorbs the opening burst.")],behind:[I("Bloodthirster","Shield is your lifeline behind."),I("Mercury's Treads","Shorter CC on their engage."),I("Guardian Angel","Second life.")],runes:{...TWITCH_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Infinity Edge","Crit wins the trade first."),I("The Collector","Execute finishes low-HP assassins after the trade."),I("Fiendhunter Bolts","On-hit damage adds up before they can react.")],behind:[I("Guardian Angel","Deny the kill."),I("Mercury's Treads","Shorter CC before the finisher."),I("Bloodthirster","Shield + lifesteal to survive.")],runes:{...TWITCH_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rapid Firecannon","Range keeps the duelist at arm's length."),I("Infinity Edge","Crit wins the extended trade."),I("Fiendhunter Bolts","On-hit damage adds up over the fight.")],behind:[I("Bloodthirster","Shield to survive the all-in."),I("Mercury's Treads","Shorter CC on their gap-close."),I("Guardian Angel","Second life.")],runes:{...TWITCH_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Bloodthirster","Shield through their combo."),I("Mercury's Treads","Reduce CC in their combo."),I("Rapid Firecannon","Range to poke back safely.")],behind:[I("Bloodthirster","Mandatory lifeline."),I("Mercury's Treads","Shorten CC duration."),I("Guardian Angel","Insurance.")],runes:{...TWITCH_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Lord Dominik's Regards","MR-ignoring pen cuts through their scaling resists."),I("Infinity Edge","Crit edge wins the burst trade."),I("Wit's End","MR + on-hit wins the drain war.")],behind:[I("Mercury's Treads","Shorter CC to disengage."),I("Bloodthirster","Lifesteal to keep pace."),I("Guardian Angel","Insurance.")],runes:{...TWITCH_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rapid Firecannon","Extra range wins the poke war."),I("Mercury's Treads","Reduce CC duration from range."),I("Infinity Edge","Crit edge wins once in range.")],behind:[I("Bloodthirster","Shield survives the poke on approach."),I("Mercury's Treads","Shorten their key CC from range."),I("Guardian Angel","Second life.")],runes:{...TWITCH_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Infinity Edge","Crit war wins the mirror matchup outright."),I("Lord Dominik's Regards","Armor pen shreds their build."),I("Fiendhunter Bolts","On-hit damage adds up.")],behind:[I("Bloodthirster","Shield vs their peel."),I("Mercury's Treads","Reduce CC duration."),I("Guardian Angel","Second life for a risky trade.")],runes:{...TWITCH_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Lord Dominik's Regards","Pen cuts through their shields to real HP."),I("Infinity Edge","Crit edge burst through the peel."),I("Fiendhunter Bolts","On-hit ignores shields over time.")],behind:[I("Bloodthirster","Lifesteal outlasts their sustain package."),I("Mercury's Treads","Reduce their disengage CC."),I("Guardian Angel","Insurance.")],runes:{...TWITCH_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Bloodthirster","Shield eats a hook's follow-up."),I("Infinity Edge","Crit edge punishes a whiffed hook."),I("Rapid Firecannon","Range keeps you out of hook threat.")],behind:[I("Mercury's Treads","Shorter root/bind duration."),I("Guardian Angel","Deny the pick's value."),I("Bloodthirster","Lifesteal if caught.")],runes:{...TWITCH_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Pen matters past their tank stats."),I("Fiendhunter Bolts","On-hit still matters past the engage."),I("Infinity Edge","Crit edge still relevant.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Second life."),I("Bloodthirster","Lifesteal through the initiation.")],runes:{...TWITCH_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Pen matters vs stacked-resist Wardens."),I("Fiendhunter Bolts","On-hit bypasses their mitigation over time."),I("Infinity Edge","Crit edge past their shields.")],behind:[I("Lord Dominik's Regards","Only reliable damage vs stacked resists."),I("Bloodthirster","Lifesteal survives their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...TWITCH_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Infinity Edge","Crit edge ends the fight before their kit matters."),I("Rapid Firecannon","Range keeps you ahead of kiting specialists."),I("The Collector","Execute finishes squishy specialists caught close.")],behind:[I("Mercury's Treads","Teemo blind/Kennen stun — shorten both."),I("Bloodthirster","Shield vs burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...TWITCH_BOT_DEFAULT_RUNES}},
      },
    },
  },
};
