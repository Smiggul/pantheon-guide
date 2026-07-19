import { I } from "../runeHelpers.js";

const ASHE_BOT_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Presence of Mind","Legend: Alacrity","Cut Down"],
  secondary:      "Inspiration",
  secondaryRunes: ["Approach Velocity","Biscuit Delivery"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Lethal Tempo's uncapped attack speed rewards Ashe's Focus-stacking passive — the more she attacks the same target, the more crit chance she builds toward guaranteed crits. Presence of Mind and Legend: Alacrity solve mana strain and accelerate the ramp. Approach Velocity closes distance onto a target she's already slowed with Volley or Enchanted Crystal Arrow; Biscuit Delivery covers early sustain. Cut Down punishes tanks who'd otherwise soak her steady DPS.",
};

const ASHE_SUP_DEFAULT_RUNES = {
  keystone:       "Arcane Comet",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Domination",
  secondaryRunes: ["Cheap Shot","Treasure Hunter"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Support Ashe leans into pure poke — Volley slows and chips HP from max range, and Arcane Comet adds a free proc on every landed hit. Manaflow Band and Transcendence solve the mana strain of constant W spam and add haste; Scorch adds early lane pressure. Cheap Shot adds true damage to anything Volley has slowed; Treasure Hunter funds the poke-item spike faster than a support's gold income alone would allow.",
};

// ══════════════════════════════════════════════════════════════════════════
//  ASHE — Marksman / Focus-Stacking Kiter
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"ashe", display:"Ashe", dd:"Ashe",
  color:"#4a7a9a", glow:"#c0e8f0",
  lanes:["Bot","Support"],
  roles:{
    Bot:{
      bans:["Draven","Samira","Kalista"], replacements:["Jinx","Caitlyn","Yunara"],
      role:"Marksman / Focus-Stacking Kiter",
      corePath:"Hexoptics C44  ›  Berserker's Greaves  ›  Phantom Dancer  ›  Infinity Edge",
      coreNote:"Ashe plays for a steady kiting DPS pattern — Volley pokes and slows, Focus builds toward permanent crit chance, and Enchanted Crystal Arrow snipes a pick from across the map. Hexoptics C44 leads the build for early scaling; Phantom Dancer and Infinity Edge both push her Focus-crit synergy toward its cap for a real late-game DPS threat.",
      sideItems:["Lord Dominik's Regards","Guardian Angel","Mercury's Treads","Bloodthirster","Rapid Firecannon","Immortal Shieldbow"],
      data:{
        JUGGERNAUT:{ahead:[I("Lord Dominik's Regards","Armor pen cuts through their stacked resists."),I("Phantom Dancer","AS + crit adds up over the poke war."),I("Infinity Edge","Crit damage wins the trade outright.")],behind:[I("Guardian Angel","Second life vs their walk-down."),I("Mercury's Treads","Shorter CC before the kill."),I("Bloodthirster","Shield + lifesteal to survive.")],runes:{...ASHE_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rapid Firecannon","Range + slow kites the dive."),I("Infinity Edge","Crit damage punishes the failed dive."),I("Immortal Shieldbow","Shield absorbs the opening burst.")],behind:[I("Immortal Shieldbow","Shield is your lifeline behind."),I("Mercury's Treads","Shorter CC on their engage."),I("Guardian Angel","Second life.")],runes:{...ASHE_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Immortal Shieldbow","Shield eats their burst opener."),I("Infinity Edge","Crit wins the trade first."),I("Bloodthirster","Extra shield layer.")],behind:[I("Immortal Shieldbow","Mandatory shield lifeline."),I("Guardian Angel","Deny the kill."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...ASHE_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rapid Firecannon","Range + Volley slow keeps the duelist at arm's length."),I("Infinity Edge","Crit damage wins the extended trade."),I("Phantom Dancer","AS adds up over the fight.")],behind:[I("Immortal Shieldbow","Shield to survive the all-in."),I("Mercury's Treads","Shorter CC on their gap-close."),I("Guardian Angel","Second life.")],runes:{...ASHE_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Immortal Shieldbow","Shield through their combo."),I("Mercury's Treads","Reduce CC in their combo."),I("Rapid Firecannon","Range to poke back safely.")],behind:[I("Immortal Shieldbow","Mandatory lifeline."),I("Mercury's Treads","Shorten CC duration."),I("Guardian Angel","Insurance.")],runes:{...ASHE_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Lord Dominik's Regards","MR-ignoring pen cuts through their scaling resists."),I("Infinity Edge","Crit edge wins the burst trade."),I("Phantom Dancer","AS keeps DPS up through their tank stats.")],behind:[I("Immortal Shieldbow","Shield vs sustained drain."),I("Mercury's Treads","Shorter CC to disengage."),I("Bloodthirster","Lifesteal to keep pace.")],runes:{...ASHE_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rapid Firecannon","Extra range wins the poke war."),I("Mercury's Treads","Reduce CC duration from range."),I("Infinity Edge","Crit edge wins once in range.")],behind:[I("Immortal Shieldbow","Shield survives the poke on approach."),I("Mercury's Treads","Shorten their key CC from range."),I("Guardian Angel","Second life.")],runes:{...ASHE_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Infinity Edge","Crit war wins outright."),I("Lord Dominik's Regards","Armor pen shreds their build."),I("Rapid Firecannon","Volley slow decides the poke-range mirror.")],behind:[I("Immortal Shieldbow","Shield vs their peel."),I("Mercury's Treads","Reduce CC duration."),I("Guardian Angel","Second life for a risky trade.")],runes:{...ASHE_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Lord Dominik's Regards","Pen cuts through their shields to real HP."),I("Infinity Edge","Crit edge burst through the peel."),I("Phantom Dancer","AS ignores shields over time.")],behind:[I("Immortal Shieldbow","Shield vs the combined burst."),I("Bloodthirster","Lifesteal outlasts their sustain package."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...ASHE_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Immortal Shieldbow","Shield eats a hook's follow-up."),I("Infinity Edge","Crit edge punishes a whiffed hook."),I("Rapid Firecannon","Range keeps you out of hook threat.")],behind:[I("Mercury's Treads","Shorter root/bind duration."),I("Immortal Shieldbow","Shield if caught."),I("Guardian Angel","Deny the pick's value.")],runes:{...ASHE_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Pen matters past their tank stats."),I("Phantom Dancer","AS keeps DPS up past their frontline."),I("Infinity Edge","Crit edge still relevant past the engage.")],behind:[I("Immortal Shieldbow","Shield vs the initiation."),I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Second life.")],runes:{...ASHE_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Pen matters vs stacked-resist Wardens."),I("Phantom Dancer","AS bypasses their mitigation over time."),I("Infinity Edge","Crit edge past their shields.")],behind:[I("Lord Dominik's Regards","Only reliable damage vs stacked resists."),I("Immortal Shieldbow","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...ASHE_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Infinity Edge","Crit edge ends the fight before their kit matters."),I("Rapid Firecannon","Range keeps you ahead of kiting specialists."),I("Phantom Dancer","AS proc ends the fight.")],behind:[I("Mercury's Treads","Teemo blind/Kennen stun — shorten both."),I("Immortal Shieldbow","Shield vs burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...ASHE_BOT_DEFAULT_RUNES}},
      },
    },
    Support:{
      bans:["Lux","Blitzcrank","Pyke"], replacements:["Nami","Lulu","Karma"],
      role:"Poke Enchanter / Cross-Map Pick",
      corePath:"Ionian Boots of Lucidity  ›  Malignance  ›  Imperial Mandate  ›  Rylai's Crystal Scepter",
      coreNote:"Support Ashe plays the same poke-and-slow pattern as Bot but built to enable a carry instead of farming a lane — Volley chip damage stacks up over a whole game, and Enchanted Crystal Arrow can snipe a target from anywhere on the map. Ionian Boots and Malignance both add haste for more frequent Volley/arrow windows; Imperial Mandate detonates on the slow for team-wide poke; Rylai's Crystal Scepter adds AoE slow utility.",
      sideItems:["Mercury's Treads","Zhonya's Hourglass","Banshee's Veil","Redemption","Locket of the Iron Solari","Mikael's Blessing"],
      data:{
        JUGGERNAUT:{ahead:[I("Imperial Mandate","Volley slow detonates for team-wide poke."),I("Rylai's Crystal Scepter","Slow keeps them out of the walk-down window."),I("Malignance","Haste means more Volley windows.")],behind:[I("Zhonya's Hourglass","Stall their all-in window entirely."),I("Banshee's Veil","Block their engage tool."),I("Mercury's Treads","Reduce their key CC.")],runes:{...ASHE_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rylai's Crystal Scepter","Slow zones the dive attempt."),I("Imperial Mandate","Punish their commit with amplified poke."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Essential — negates their all-in timing."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Mercury's Treads","Shorter CC on the engage.")],runes:{...ASHE_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Rylai's Crystal Scepter","Slow denies their reset window."),I("Zhonya's Hourglass","Insurance even with a lead."),I("Imperial Mandate","Punish their commit.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis neutralises the full combo."),I("Banshee's Veil","Blocks their engage opener."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...ASHE_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rylai's Crystal Scepter","Slow denies their kite/duel pattern."),I("Imperial Mandate","Amplify ADC damage in the 2v2."),I("Malignance","Haste for more Volley windows.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Banshee's Veil","Blocks their gap-close CC."),I("Mercury's Treads","Reduce their gap-close CC.")],runes:{...ASHE_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Zhonya's Hourglass","Survive the rotation, then poke the punish."),I("Mercury's Treads","Reduce CC chains before their combo."),I("Rylai's Crystal Scepter","Slow denies their setup.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo."),I("Zhonya's Hourglass","Survive the full rotation."),I("Mercury's Treads","Shorten CC duration.")],runes:{...ASHE_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Rylai's Crystal Scepter","Slow denies their sustained damage window."),I("Imperial Mandate","Amplify damage through their tank stats."),I("Malignance","Haste sustains the poke war.")],behind:[I("Banshee's Veil","Blocks the CC that starts their combo."),I("Zhonya's Hourglass","Survive the sustained burst."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...ASHE_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Rylai's Crystal Scepter","Slow wins the poke war."),I("Zhonya's Hourglass","Survive the poke on approach.")],behind:[I("Banshee's Veil","Blocks one long-range ability."),I("Mercury's Treads","Reduce CC duration."),I("Zhonya's Hourglass","Survive the poke on approach.")],runes:{...ASHE_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Imperial Mandate","Amplify your ADC's damage after the slow lands."),I("Rylai's Crystal Scepter","Slow amplifies your ADC's kiting."),I("Malignance","Haste for more poke windows.")],behind:[I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Banshee's Veil","Blocks the engage tool set up on your ADC."),I("Mercury's Treads","Reduce CC duration.")],runes:{...ASHE_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Imperial Mandate","Amplify the poke war in your favor."),I("Rylai's Crystal Scepter","Slow denies their peel."),I("Malignance","Haste wins the sustain race.")],behind:[I("Redemption","Global heal offsets theirs."),I("Banshee's Veil","Blocks the setup CC on their carry combo."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...ASHE_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge the hook so your own poke lands first."),I("Rylai's Crystal Scepter","Slow punishes a whiffed hook."),I("Imperial Mandate","Amplify the punish.")],behind:[I("Mikael's Blessing","Cleanse a landed hook."),I("Zhonya's Hourglass","Buys time if you get caught."),I("Mercury's Treads","Reduce CC duration.")],runes:{...ASHE_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Rylai's Crystal Scepter","Slow before they can fully engage."),I("Imperial Mandate","Amplify your team's counter-engage."),I("Malignance","Haste for more poke windows.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Zhonya's Hourglass","Survive their engage combo."),I("Banshee's Veil","Blocks the CC that starts their initiation.")],runes:{...ASHE_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Imperial Mandate","Amplify ADC damage past their body-block."),I("Rylai's Crystal Scepter","Slow past their body-block."),I("Malignance","Haste wins the peel war.")],behind:[I("Redemption","Global heal in the extended peel war."),I("Zhonya's Hourglass","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...ASHE_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Mercury's Treads","Teemo blind, Kennen stun — land your own poke first."),I("Rylai's Crystal Scepter","Slow through their poke/kit."),I("Imperial Mandate","Amplify damage in skirmishes.")],behind:[I("Mercury's Treads","Reduce blind/stun duration."),I("Mikael's Blessing","Cleanse burst setups."),I("Redemption","Global heal while you figure out the matchup.")],runes:{...ASHE_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
