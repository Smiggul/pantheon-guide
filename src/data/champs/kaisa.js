import { I } from "../runeHelpers.js";

const KAISA_BOT_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Presence of Mind","Legend: Bloodline","Coup de Grace"],
  secondary:      "Inspiration",
  secondaryRunes: ["Biscuit Delivery","Magical Footwear"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Lethal Tempo's attack speed ramp compounds with Kai'Sa's Plasma passive, which already deals bonus on-hit damage per auto — the more autos land, the more her hybrid AD/AP scaling snowballs. Presence of Mind and Legend: Bloodline solve mana and add sustain through the Icathian Rain/Void Seeker poke pattern. Biscuit Delivery and Magical Footwear get her item timing online faster. Coup de Grace finishes targets her Plasma stacks have already chunked.",
};

// ══════════════════════════════════════════════════════════════════════════
//  KAI'SA — Marksman / Hybrid Evolution Carry
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"kaisa", display:"Kai'Sa", dd:"Kaisa",
  color:"#5b2c6f", glow:"#e91e8c",
  lanes:["Bot"],
  roles:{
    Bot:{
      bans:["Draven","Samira","Nautilus"], replacements:["Jinx","Yunara","Caitlyn"],
      role:"Marksman / Hybrid Evolution Carry",
      corePath:"Kraken Slayer  ›  Berserker's Greaves  ›  Guinsoo's Rageblade  ›  Nashor's Tooth",
      coreNote:"Kai'Sa plays a hybrid on-hit/burst evolution pattern — Plasma stacks reward attack speed and ability haste equally, so her build leans into both. Kraken Slayer's true damage proc rewards the auto-heavy playstyle; Guinsoo's Rageblade stacks attack speed toward evolving Icathian Rain; Nashor's Tooth adds ability haste and on-hit AP that both feed Plasma.",
      sideItems:["Runaan's Hurricane","Void Staff","Guardian Angel","Mercury's Treads","Wit's End","Rapid Firecannon"],
      data:{
        JUGGERNAUT:{ahead:[I("Void Staff","Pen keeps damage relevant through their armor/MR stacking."),I("Kraken Slayer","True damage proc ignores their stacking."),I("Guinsoo's Rageblade","AS stacking adds up over the fight.")],behind:[I("Guardian Angel","Second life vs their walk-down."),I("Mercury's Treads","Shorter CC before the kill."),I("Wit's End","MR + on-hit if they build offense.")],runes:{...KAISA_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rapid Firecannon","Range + slow kites the dive."),I("Kraken Slayer","True damage proc punishes the failed dive."),I("Guardian Angel","Second life if it still connects.")],behind:[I("Mercury's Treads","Shorter CC on their engage."),I("Wit's End","MR lifeline vs AP divers."),I("Guardian Angel","Insurance.")],runes:{...KAISA_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Wit's End","MR + on-hit vs AP assassins."),I("Kraken Slayer","True damage proc wins the trade first."),I("Nashor's Tooth","Ability haste keeps Void Seeker resets coming.")],behind:[I("Guardian Angel","Deny the kill."),I("Wit's End","MR lifeline vs AP assassins."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...KAISA_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Runaan's Hurricane","Bolts wins the extended auto-race."),I("Kraken Slayer","True damage proc adds up."),I("Guinsoo's Rageblade","AS stacking wins the duel.")],behind:[I("Mercury's Treads","Shorter CC on their gap-close."),I("Guardian Angel","Second life."),I("Wit's End","MR + on-hit to stall.")],runes:{...KAISA_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Wit's End","MR + on-hit vs their combo."),I("Mercury's Treads","Reduce CC in their combo."),I("Rapid Firecannon","Range to poke back safely.")],behind:[I("Wit's End","MR lifeline vs burst mages."),I("Mercury's Treads","Shorten CC duration."),I("Guardian Angel","Insurance.")],runes:{...KAISA_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen cuts through their scaling resists."),I("Kraken Slayer","True damage proc through their tank stats."),I("Wit's End","MR + DPS wins the drain war.")],behind:[I("Mercury's Treads","Shorter CC to disengage."),I("Wit's End","Mandatory MR + sustain vs drain."),I("Guardian Angel","Insurance.")],runes:{...KAISA_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rapid Firecannon","Extra range wins the poke war."),I("Mercury's Treads","Reduce CC duration from range."),I("Kraken Slayer","True damage proc wins once in range.")],behind:[I("Mercury's Treads","Shorten their key CC from range."),I("Guardian Angel","Second life."),I("Wit's End","MR vs sustained poke.")],runes:{...KAISA_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Kraken Slayer","True damage proc wins the mirror matchup."),I("Runaan's Hurricane","Bolts adds up over the trade."),I("Guinsoo's Rageblade","AS stacking wins the auto-race.")],behind:[I("Guardian Angel","Second life for a risky trade."),I("Mercury's Treads","Reduce CC duration."),I("Wit's End","MR + on-hit if they go hybrid.")],runes:{...KAISA_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Kraken Slayer","True damage ignores shields."),I("Void Staff","Pen cuts through their shields to real HP."),I("Nashor's Tooth","Ability haste burst through the peel.")],behind:[I("Guardian Angel","Insurance vs the combined burst."),I("Wit's End","Outlast their sustain package."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...KAISA_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rapid Firecannon","Range keeps you out of hook threat."),I("Kraken Slayer","True damage punishes a whiffed hook."),I("Nashor's Tooth","Ability haste keeps escapes available.")],behind:[I("Mercury's Treads","Shorter root/bind duration."),I("Guardian Angel","Deny the pick's value."),I("Wit's End","Sustain if caught.")],runes:{...KAISA_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Pen matters past their tank stats."),I("Kraken Slayer","True damage through their frontline."),I("Runaan's Hurricane","Bolts still relevant past the engage.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Second life."),I("Wit's End","MR vs Malphite/Gragas AP damage.")],runes:{...KAISA_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","Pen matters vs stacked-resist Wardens."),I("Kraken Slayer","True damage bypasses their mitigation."),I("Runaan's Hurricane","Bolts past their shields.")],behind:[I("Void Staff","Required vs a stacked-resist Warden."),I("Guardian Angel","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...KAISA_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Rapid Firecannon","Range keeps you ahead of kiting specialists."),I("Kraken Slayer","True damage proc ends the fight."),I("Guinsoo's Rageblade","AS stacking finishes squishy specialists caught close.")],behind:[I("Mercury's Treads","Teemo blind/Kennen stun — shorten both."),I("Guardian Angel","Deny their split-push snowball."),I("Wit's End","MR vs AP specialists.")],runes:{...KAISA_BOT_DEFAULT_RUNES}},
      },
    },
  },
};
