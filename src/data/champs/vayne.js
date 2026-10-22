import { I } from "../runeHelpers.js";

const VAYNE_BOT_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Coup de Grace"],
  secondary:      "Resolve",
  secondaryRunes: ["Conditioning","Overgrowth"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Lethal Tempo's uncapped attack speed is Vayne's entire identity — every Silver Bolts proc and Tumble reset comes faster the longer a fight goes, and few champions scale attack speed as hard. Legend: Alacrity accelerates the ramp further. Conditioning and Overgrowth round out the survivability she lacks early, covering the gap until items and levels let her duel safely. Coup de Grace finishes low-HP targets her on-hit DPS has already worn down.",
};

// ══════════════════════════════════════════════════════════════════════════
//  VAYNE — Marksman / Hyper-Scaling On-Hit Duelist
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"vayne", display:"Vayne", dd:"Vayne",
  color:"#5a4a6e", glow:"#c9c9d9",
  lanes:["Bot","Top"],
  altBuilds:{
    Top:[{
      label:"Experimental Hexplate burst", tag:"alt",
      corePath:"Experimental Hexplate  ›  Essence Reaver  ›  Stormrazor  ›  Fiendhunter Bolts",
      // Research: The minority line, and the build this guide used to lead with: Hexplate first in about a quarter of
      //   games, against nearly half for BotRK. Essence Reaver follows it in about half of those games. About
      //   48.6% against 51.0% for BotRK as a first item; the fourth item varies on a small sample.
      coreNote:"Experimental Hexplate first: its ultimate haste and post-ult attack and move speed bring Final Hour up more often, and Essence Reaver then Stormrazor turn it into a burstier Tumble-and-auto pattern rather than a long on-hit duel. It wins a couple of points less often as a first item than Blade of The Ruined King.",
      runes:{...VAYNE_BOT_DEFAULT_RUNES},
      sideItems:["Blade of The Ruined King","Guinsoo's Rageblade","Infinity Edge","Berserker's Greaves","Guardian Angel","Wit's End"],
    }],
  },
  roles:{
    Bot:{
      bans:["Draven","Xerath","Ashe"], replacements:["Jinx","Yunara","Caitlyn"],
      role:"Marksman / Hyper-Scaling On-Hit Duelist",
      corePath:"Blade of The Ruined King  ›  Guinsoo's Rageblade  ›  Terminus  ›  Jak'Sho, The Protean",
      coreNote:"Vayne plays a hyper-scaling on-hit duelist pattern — Silver Bolts stacks true damage, Tumble repositions, Condemn zones. Blade of The Ruined King's % HP damage and slow lead the build; Guinsoo's Rageblade stacks attack speed toward the cap; Terminus adds pen that alternates with on-hit healing; Jak'Sho gives resistances that scale with the fight's length.",
      sideItems:["Berserker's Greaves","Mercury's Treads","Wit's End","Guardian Angel","Bloodthirster","Kraken Slayer"],
      data:{
        JUGGERNAUT:{ahead:[I("Blade of The Ruined King","% HP damage beats their HP-stacking model."),I("Terminus","Pen + on-hit healing wins the sustained trade."),I("Guinsoo's Rageblade","AS stacking adds up over the fight.")],behind:[I("Guardian Angel","Second life vs their walk-down."),I("Mercury's Treads","Shorter CC before the kill."),I("Wit's End","MR + on-hit if they build offense.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Blade of The Ruined King","Slow denies their dash-out after committing."),I("Terminus","On-hit healing outlasts the all-in."),I("Guardian Angel","Second life if it still connects.")],behind:[I("Mercury's Treads","Shorter CC on their engage."),I("Wit's End","MR lifeline vs AP divers."),I("Guardian Angel","Insurance.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Wit's End","MR + on-hit vs AP assassins."),I("Blade of The Ruined King","% HP damage wins the trade first."),I("Jak'Sho, The Protean","Resistances scale the longer the fight runs.")],behind:[I("Guardian Angel","Deny the kill."),I("Wit's End","MR lifeline vs AP assassins."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Blade of The Ruined King","% HP damage wins the extended duel outright."),I("Guinsoo's Rageblade","AS stacking wins the auto-race."),I("Terminus","On-hit healing sustains the fight.")],behind:[I("Mercury's Treads","Shorter CC on their gap-close."),I("Guardian Angel","Second life."),I("Jak'Sho, The Protean","Resistances stall the all-in.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Wit's End","MR + on-hit vs their combo."),I("Mercury's Treads","Reduce CC in their combo."),I("Jak'Sho, The Protean","Resistances survive the rotation.")],behind:[I("Wit's End","MR lifeline vs burst mages."),I("Mercury's Treads","Shorten CC duration."),I("Guardian Angel","Insurance.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Wit's End","MR + DPS wins the drain war."),I("Terminus","On-hit healing outlasts their drain."),I("Jak'Sho, The Protean","Resistances scale with their sustained damage.")],behind:[I("Wit's End","Mandatory MR + sustain vs drain."),I("Mercury's Treads","Shorter CC to disengage."),I("Guardian Angel","Insurance.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Blade of The Ruined King","Gap-close punishes their poke window."),I("Jak'Sho, The Protean","Resistances survive the poke on approach.")],behind:[I("Mercury's Treads","Reduce CC duration."),I("Guardian Angel","Second life."),I("Wit's End","MR vs sustained poke.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Blade of The Ruined King","% HP damage shreds their HP pool."),I("Guinsoo's Rageblade","AS stacking wins the auto-race."),I("Terminus","On-hit healing tips the sustained trade.")],behind:[I("Guardian Angel","Second life for a risky trade."),I("Mercury's Treads","Reduce CC duration."),I("Wit's End","MR + on-hit if they go hybrid.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Blade of The Ruined King","% HP damage cuts through shields."),I("Terminus","On-hit healing outlasts their sustain package."),I("Wit's End","MR + on-hit through their kit.")],behind:[I("Guardian Angel","Insurance vs the combined burst."),I("Terminus","Outlast their sustain package."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge the hook so your own combo lands first."),I("Blade of The Ruined King","Punish a whiffed hook instantly."),I("Terminus","On-hit healing recovers after a catch.")],behind:[I("Mercury's Treads","Mandatory — a caught Vayne loses the whole trade."),I("Guardian Angel","Deny the pick's value."),I("Terminus","Sustain if caught.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Blade of The Ruined King","% HP damage through their tank stats."),I("Jak'Sho, The Protean","Resistances still matter past the frontline."),I("Terminus","On-hit healing through the initiation.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Second life."),I("Wit's End","MR vs Malphite/Gragas AP damage.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Blade of The Ruined King","% HP damage through their mitigation."),I("Terminus","On-hit healing through the extended peel war."),I("Jak'Sho, The Protean","Resistances stall their counter-peel.")],behind:[I("Blade of The Ruined King","Only reliable damage vs stacked resists."),I("Guardian Angel","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Blade of The Ruined King","Run down a kiting Specialist with the slow."),I("Guinsoo's Rageblade","AS stacking ends the fight."),I("Terminus","On-hit healing sustains through their kit.")],behind:[I("Mercury's Treads","Teemo blind/Kennen stun — shorten both."),I("Guardian Angel","Deny their split-push snowball."),I("Wit's End","MR vs AP specialists.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
      },
    },
    Top:{
      bans:["Malphite","Poppy","Renekton"], replacements:["Sett","Volibear","Jax"],
      role:"Off-Meta On-Hit Duelist",
      corePath:"Blade of The Ruined King  ›  Guinsoo's Rageblade  ›  Terminus  ›  Jak'Sho, The Protean",
      // Research: She now builds like Bot. BotRK is the most common opener, in nearly half of games; Guinsoo's follows in
      //   most of those; Terminus is the usual third and Jak'Sho the most common fourth. Experimental Hexplate,
      //   which this guide used to open with, is about a quarter of games and wins less often (the alternate
      //   build). A niche pick in this lane, at about a 50% win rate on 26.20.
      coreNote:"Top Vayne plays the same hyper-scaling on-hit pattern as Bot (Silver Bolts true damage, Tumble repositions, Condemn pins duelists against walls), and the solo lane levels her faster than a support lane would. Blade of The Ruined King first for its current-health damage, lifesteal and slow against high-health top laners. Guinsoo's Rageblade second applies your on-hit effects twice on every third attack, Terminus third adds penetration and resists, and Jak'Sho, The Protean fourth.",
      sideItems:["Berserker's Greaves","Experimental Hexplate","Essence Reaver","Kraken Slayer","Wit's End","Mercury's Treads","Guardian Angel","Bloodthirster"],
      data:{
        JUGGERNAUT:{ahead:[I("Blade of The Ruined King","% HP damage beats their HP-stacking model."),I("Essence Reaver","Mana return keeps Tumble spamming through the trade."),I("Stormrazor","Burst proc adds up over the fight.")],behind:[I("Guardian Angel","Second life vs their walk-down."),I("Mercury's Treads","Shorter CC before the kill."),I("Wit's End","MR + on-hit if they build offense.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Experimental Hexplate","Haste + burst punishes the dive."),I("Blade of The Ruined King","Slow denies their dash-out."),I("Guardian Angel","Second life if it still connects.")],behind:[I("Mercury's Treads","Shorter CC on their engage."),I("Wit's End","MR lifeline vs AP divers."),I("Guardian Angel","Insurance.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Wit's End","MR + on-hit vs AP assassins."),I("Stormrazor","Burst proc wins the trade first."),I("Essence Reaver","Mana return keeps Tumble available to reposition.")],behind:[I("Guardian Angel","Deny the kill."),I("Wit's End","MR lifeline vs AP assassins."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Blade of The Ruined King","% HP damage wins the extended duel outright."),I("Stormrazor","Burst proc wins the auto-race."),I("Fiendhunter Bolts","On-hit damage sustains the fight.")],behind:[I("Mercury's Treads","Shorter CC on their gap-close."),I("Guardian Angel","Second life."),I("Wit's End","MR + on-hit to stall.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Wit's End","MR + on-hit vs their combo."),I("Mercury's Treads","Reduce CC in their combo."),I("Essence Reaver","Mana return keeps Tumble up to dodge.")],behind:[I("Wit's End","MR lifeline vs burst mages."),I("Mercury's Treads","Shorten CC duration."),I("Guardian Angel","Insurance.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Wit's End","MR + DPS wins the drain war."),I("Fiendhunter Bolts","On-hit damage outlasts their drain."),I("Experimental Hexplate","Haste keeps the combo loop faster than their sustain.")],behind:[I("Wit's End","Mandatory MR + sustain vs drain."),I("Mercury's Treads","Shorter CC to disengage."),I("Guardian Angel","Insurance.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Experimental Hexplate","Haste + burst closes the poke gap."),I("Essence Reaver","Mana return sustains the approach.")],behind:[I("Mercury's Treads","Reduce CC duration."),I("Guardian Angel","Second life."),I("Wit's End","MR vs sustained poke.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Blade of The Ruined King","% HP damage shreds their HP pool."),I("Stormrazor","Burst proc wins the auto-race."),I("Fiendhunter Bolts","On-hit damage tips the sustained trade.")],behind:[I("Guardian Angel","Second life for a risky trade."),I("Mercury's Treads","Reduce CC duration."),I("Wit's End","MR + on-hit if they go hybrid.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Blade of The Ruined King","% HP damage cuts through shields."),I("Fiendhunter Bolts","On-hit damage outlasts their sustain package."),I("Wit's End","MR + on-hit through their kit.")],behind:[I("Guardian Angel","Insurance vs the combined burst."),I("Fiendhunter Bolts","Outlast their sustain package."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge the hook so your own combo lands first."),I("Blade of The Ruined King","Punish a whiffed hook instantly."),I("Essence Reaver","Mana return keeps Tumble ready to dodge.")],behind:[I("Mercury's Treads","Mandatory — a caught Vayne loses the whole trade."),I("Guardian Angel","Deny the pick's value."),I("Fiendhunter Bolts","Sustain if caught.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Blade of The Ruined King","% HP damage through their tank stats."),I("Experimental Hexplate","Haste keeps pressure past the frontline."),I("Fiendhunter Bolts","On-hit damage through the initiation.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Second life."),I("Wit's End","MR vs Malphite/Gragas AP damage.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Blade of The Ruined King","% HP damage through their mitigation."),I("Fiendhunter Bolts","On-hit damage through the extended peel war."),I("Stormrazor","Burst proc still matters past their shields.")],behind:[I("Blade of The Ruined King","Only reliable damage vs stacked resists."),I("Guardian Angel","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Blade of The Ruined King","Run down a kiting Specialist with the slow."),I("Stormrazor","Burst proc ends the fight."),I("Fiendhunter Bolts","On-hit damage sustains through their kit.")],behind:[I("Mercury's Treads","Teemo blind/Kennen stun — shorten both."),I("Guardian Angel","Deny their split-push snowball."),I("Wit's End","MR vs AP specialists.")],runes:{...VAYNE_BOT_DEFAULT_RUNES}},
      },
    },
  },
};
