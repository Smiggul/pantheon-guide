import { I } from "../runeHelpers.js";

const FIZZ_MID_DEFAULT_RUNES = {
  keystone:       "Electrocute",
  primary:        "Domination",
  primaryRunes:   ["Sudden Impact","Grisly Mementos","Treasure Hunter"],
  secondary:      "Sorcery",
  secondaryRunes: ["Scorch","Transcendence"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Electrocute rewards Fizz's Playful/Trickster-into-Seastone-Trident 3-hit burst combo perfectly. Sudden Impact procs off the Playful/Trickster untargetable hop; Grisly Mementos and Treasure Hunter both fund his lethality-mage item spike faster than farming alone. Scorch adds early poke pressure through the untargetable dodge window; Transcendence adds haste for more frequent all-ins.",
};

const FIZZ_JGL_DEFAULT_RUNES = {
  keystone:       "Press the Attack",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Sorcery",
  secondaryRunes: ["Manaflow Band","Transcendence"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Jungle Fizz plays entirely differently from Mid — Playful/Trickster is an auto-attack reset, and Seastone Trident applies on-hit, so maxing W into a sustained-auto pattern (not burst-focused E) rewards attack speed far more than lethality. Press the Attack's 3-hit amplify fits the constant-reset auto pattern; Legend: Alacrity gives a huge DPS increase on top of it. Manaflow Band and Transcendence solve the mana strain from constant W hops and add haste.",
};

// ══════════════════════════════════════════════════════════════════════════
//  FIZZ — Assassin / Untargetable Dodge-and-Burst
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"fizz", display:"Fizz", dd:"Fizz",
  color:"#2e8a7a", glow:"#7ae0c8",
  lanes:["Mid","Jungle"],
  roles:{
    Mid:{
      bans:["Xerath","Lissandra","Galio"], replacements:["Katarina","Ahri","Zed"],
      role:"Assassin / Untargetable Dodge-and-Burst",
      corePath:"Lich Bane  ›  Shadowflame  ›  Zhonya's Hourglass  ›  Rabadon's Deathcap",
      coreNote:"Fizz plays for a dodge-and-burst all-in — Playful/Trickster hops him untargetable through a skillshot, Seastone Trident procs on-hit true damage, and Chum the Waters zones or finishes. Lich Bane's Sheen proc doubles his auto-into-combo burst; Shadowflame executes low-HP targets; Zhonya's Hourglass and the untargetable hop both cover his all-in commitment.",
      sideItems:["Sorcerer's Shoes","Void Staff","Banshee's Veil","Morellonomicon","Hextech Rocketbelt","Ionian Boots of Lucidity"],
      data:{
        JUGGERNAUT:{ahead:[I("Shadowflame","Burst low-MR Juggernauts from range."),I("Lich Bane","Sheen proc adds up over the trade."),I("Rabadon's Deathcap","Scaling burst ends the trade outright.")],behind:[I("Zhonya's Hourglass","Stall their all-in window entirely."),I("Banshee's Veil","Block their engage tool."),I("Void Staff","Pen remains effective regardless of gold lead.")],runes:{...FIZZ_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Lich Bane","Sheen proc punishes their dive attempt."),I("Shadowflame","Burst them before the combo finishes."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Essential — negates their all-in timing (Playful/Trickster hop stacks with this)."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Hextech Rocketbelt","Dash out of kill range.")],runes:{...FIZZ_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Out-burst them — the untargetable hop dodges their opener."),I("Zhonya's Hourglass","Insurance even with a lead."),I("Rabadon's Deathcap","AP edge wins the trade first.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis neutralises the full combo."),I("Banshee's Veil","Blocks their engage opener."),I("Hextech Rocketbelt","Dash out of kill range.")],runes:{...FIZZ_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rabadon's Deathcap","Burst edge ends the fight before they close."),I("Lich Bane","Sheen proc wins the auto-trade."),I("Hextech Rocketbelt","Dash keeps the duelist at range.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Void Staff","Keep damage relevant."),I("Hextech Rocketbelt","Dash to disengage.")],runes:{...FIZZ_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Zhonya's Hourglass","The untargetable hop plus stasis fully denies their combo."),I("Shadowflame","Out-burst them between cooldown windows."),I("Rabadon's Deathcap","AP edge wins the trade.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo."),I("Zhonya's Hourglass","Survive the full rotation."),I("Ionian Boots of Lucidity","Haste for more windows.")],runes:{...FIZZ_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pierce early MR before it stacks."),I("Rabadon's Deathcap","Raw AP wins the burst trade."),I("Shadowflame","Burst window before they can drain back.")],behind:[I("Banshee's Veil","Blocks the CC that starts their combo."),I("Zhonya's Hourglass","Survive the sustained burst."),I("Morellonomicon","Cuts Vladimir/Swain healing.")],runes:{...FIZZ_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Hextech Rocketbelt","Close the gap while the hop dodges their poke."),I("Rabadon's Deathcap","Burst edge wins once you close."),I("Shadowflame","Burst on arrival.")],behind:[I("Banshee's Veil","Blocks one long-range ability."),I("Ionian Boots of Lucidity","Haste to close faster."),I("Zhonya's Hourglass","Survive the poke on approach.")],runes:{...FIZZ_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","Burst the squishy ADC outright."),I("Rabadon's Deathcap","Amplify the killing blow."),I("Lich Bane","Sheen proc confirms the kill before they kite.")],behind:[I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Banshee's Veil","Blocks the engage tool set up on you."),I("Ionian Boots of Lucidity","Haste for more hops.")],runes:{...FIZZ_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Extra pen through their shield spam."),I("Rabadon's Deathcap","Burst through shields to the carry."),I("Morellonomicon","Cuts their sustain package.")],behind:[I("Void Staff","Keep damage relevant vs their kit."),I("Banshee's Veil","Blocks the setup CC on their carry combo."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...FIZZ_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Lich Bane","The untargetable hop dodges hooks entirely."),I("Rabadon's Deathcap","Burst them down once they whiff."),I("Shadowflame","Extra damage on the punish.")],behind:[I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),I("Zhonya's Hourglass","Buys time if you get caught."),I("Hextech Rocketbelt","Dash escape after a landed hook.")],runes:{...FIZZ_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Penetrates their MR stacking."),I("Rabadon's Deathcap","Burst edge still matters past their frontline."),I("Lich Bane","Sheen proc before they can engage.")],behind:[I("Void Staff","Required to deal damage through their resists."),I("Zhonya's Hourglass","Survive their engage combo."),I("Banshee's Veil","Blocks the CC that starts their initiation.")],runes:{...FIZZ_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","MR-stacking Wardens still take real damage through pen."),I("Rabadon's Deathcap","Amplify AP so shielded Wardens still take damage."),I("Shadowflame","Extra burst on a landed combo.")],behind:[I("Void Staff","Required vs a stacked-resist Warden."),I("Zhonya's Hourglass","Survive the engage they set up."),I("Banshee's Veil","Blocks their key CC.")],runes:{...FIZZ_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Hextech Rocketbelt","Keeps you ahead of kiting Specialists."),I("Rabadon's Deathcap","Burst edge ends the fight."),I("Shadowflame","Extra burst vs squishy specialists caught close.")],behind:[I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive burst setups."),I("Ionian Boots of Lucidity","Haste for more hops.")],runes:{...FIZZ_MID_DEFAULT_RUNES}},
      },
    },
    Jungle:{
      bans:["Kayn","Nocturne","Elise"], replacements:["Warwick","Wukong","Sett"],
      role:"Off-Meta On-Hit Skirmisher",
      corePath:"Dusk and Dawn  ›  Sorcerer's Shoes  ›  Nashor's Tooth  ›  Zhonya's Hourglass",
      coreNote:"Jungle Fizz leans on sustained auto-attack damage instead of Mid's burst-combo pattern — hop in and out with Playful/Trickster resets, stacking on-hit damage from Seastone Trident with every auto. Dusk and Dawn and Nashor's Tooth both reward the attack-speed-heavy, ability-haste-hungry playstyle; Zhonya's Hourglass buys time through counter-ganks.",
      sideItems:["Rabadon's Deathcap","Void Staff","Banshee's Veil","Ionian Boots of Lucidity","Riftmaker","Shadowflame"],
      data:{
        JUGGERNAUT:{ahead:[I("Nashor's Tooth","On-hit damage adds up over the sustained trade."),I("Dusk and Dawn","Proc damage wins the extended fight."),I("Zhonya's Hourglass","Stall their all-in window entirely.")],behind:[I("Zhonya's Hourglass","Stall their all-in window entirely."),I("Banshee's Veil","Block their engage tool."),I("Void Staff","Pen remains effective regardless of gold lead.")],runes:{...FIZZ_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Dusk and Dawn","Proc damage punishes their dive attempt."),I("Nashor's Tooth","On-hit sustains through the all-in."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Essential — negates their all-in timing (stacks with the W hop)."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Riftmaker","Omnivamp to outlast the dive.")],runes:{...FIZZ_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","The untargetable hop plus stasis fully denies their combo."),I("Nashor's Tooth","On-hit wins the extended trade."),I("Rabadon's Deathcap","AP edge wins the trade first.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis neutralises the full combo."),I("Banshee's Veil","Blocks their engage opener."),I("Riftmaker","Omnivamp to recover.")],runes:{...FIZZ_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Nashor's Tooth","On-hit + AS wins the extended duel outright."),I("Dusk and Dawn","Proc damage tips the auto-trade."),I("Riftmaker","Omnivamp sustains the fight.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Void Staff","Keep damage relevant."),I("Riftmaker","Omnivamp to survive.")],runes:{...FIZZ_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Zhonya's Hourglass","Survive the rotation, then punish."),I("Nashor's Tooth","On-hit through the poke."),I("Riftmaker","Omnivamp keeps you healthy.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo."),I("Zhonya's Hourglass","Survive the full rotation."),I("Ionian Boots of Lucidity","Haste for more hops.")],runes:{...FIZZ_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pierce early MR before it stacks."),I("Riftmaker","Omnivamp wins the drain war."),I("Nashor's Tooth","On-hit through their tank stats.")],behind:[I("Banshee's Veil","Blocks the CC that starts their combo."),I("Zhonya's Hourglass","Survive the sustained burst."),I("Riftmaker","Omnivamp to keep pace.")],runes:{...FIZZ_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Ionian Boots of Lucidity","Haste closes the gap faster with more hops."),I("Dusk and Dawn","Proc damage on arrival."),I("Rabadon's Deathcap","Burst edge wins once you close.")],behind:[I("Banshee's Veil","Blocks one long-range ability."),I("Zhonya's Hourglass","Survive the poke on approach."),I("Void Staff","Keep damage relevant.")],runes:{...FIZZ_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Nashor's Tooth","On-hit wins the sustained trade on the ADC."),I("Dusk and Dawn","Proc damage adds up."),I("Rabadon's Deathcap","Amplify the killing blow.")],behind:[I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Banshee's Veil","Blocks the engage tool set up on you."),I("Riftmaker","Omnivamp to keep pace.")],runes:{...FIZZ_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Nashor's Tooth","On-hit ignores shields over time."),I("Rabadon's Deathcap","Burst through shields to the carry."),I("Riftmaker","Omnivamp outlasts their sustain package.")],behind:[I("Void Staff","Keep damage relevant vs their kit."),I("Banshee's Veil","Blocks the setup CC on their carry combo."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...FIZZ_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Dusk and Dawn","The hop dodges hooks entirely."),I("Rabadon's Deathcap","Burst them down once they whiff."),I("Nashor's Tooth","On-hit damage on the punish.")],behind:[I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),I("Zhonya's Hourglass","Buys time if you get caught."),I("Riftmaker","Omnivamp recovers after a catch.")],runes:{...FIZZ_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Penetrates their MR stacking."),I("Nashor's Tooth","On-hit still matters past the frontline."),I("Riftmaker","Omnivamp through their tank pressure.")],behind:[I("Void Staff","Required to deal damage through their resists."),I("Zhonya's Hourglass","Survive their engage combo."),I("Banshee's Veil","Blocks the CC that starts their initiation.")],runes:{...FIZZ_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","MR-stacking Wardens still take real damage through pen."),I("Nashor's Tooth","On-hit bypasses their mitigation over time."),I("Riftmaker","Omnivamp through the peel war.")],behind:[I("Void Staff","Required vs a stacked-resist Warden."),I("Zhonya's Hourglass","Survive the engage they set up."),I("Banshee's Veil","Blocks their key CC.")],runes:{...FIZZ_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Ionian Boots of Lucidity","Haste keeps you ahead of kiting Specialists."),I("Rabadon's Deathcap","Burst edge ends the fight."),I("Nashor's Tooth","On-hit vs squishy specialists caught close.")],behind:[I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive burst setups."),I("Riftmaker","Omnivamp vs burst setups.")],runes:{...FIZZ_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
