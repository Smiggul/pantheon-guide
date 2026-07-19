import { I } from "../runeHelpers.js";

const UDYR_JGL_DEFAULT_RUNES = {
  keystone:       "Press the Attack",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Coup de Grace"],
  secondary:      "Inspiration",
  secondaryRunes: ["Approach Velocity","Magical Footwear"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Press the Attack lines up with Q-Awaken's burst. Legend: Haste allows faster form swaps and more Awaken uses per fight. Approach Velocity helps chase targets after E stun. Coup de Grace closes low HP targets. Build AD bruiser — Spear of Shojin first.",
};

const UDYR_TOP_DEFAULT_RUNES = {
  keystone:       "Grasp of the Undying",
  primary:        "Resolve",
  primaryRunes:   ["Shield Bash","Second Wind","Revitalize"],
  secondary:      "Inspiration",
  secondaryRunes: ["Approach Velocity","Biscuit Delivery"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Top Udyr trades the AD Shojin bruiser build for an AP stance-dancer, and Grasp fits the sustained-trade lane pattern better than Press the Attack does here. Shield Bash converts W's shield into bonus damage. Second Wind and Revitalize keep him healthy through lane poke. Approach Velocity chases targets after an E stun the same way Jungle's kit does.",
};

// ══════════════════════════════════════════════════════════════════════════
//  UDYR — Skirmisher / Bruiser (AD Build, patch 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"udyr", display:"Udyr", dd:"Udyr",
  color:"#1a5276", glow:"#2980b9",
  lanes:["Jungle","Top"],
  roles:{
    Jungle:{
      bans:["Rek'Sai","Karthus","Trundle"], replacements:["Warwick","Volibear","Shyvana"],
      role:"Skirmisher / Bruiser",
      corePath:"Spear of Shojin  ›  Boots of Swiftness  ›  Experimental Hexplate  ›  Death's Dance",
      coreNote:"Spear of Shojin first — ability haste converts directly to more Awaken uses per fight and faster form swap cycling. Boots of Swiftness for permanent kite resist (Udyr needs to stick to targets with E stun). Experimental Hexplate third for the on-ability-use move speed burst that lets you chase between E stuns. Death's Dance fourth for sustained survivability.",
      sideItems:["Spirit Visage","Sterak's Gage","Thornmail","Black Cleaver","Plated Steelcaps","Guardian Angel"],
      data:{
        JUGGERNAUT:{ahead:[I("Black Cleaver","Q-Awaken autos stack Cleaver — 6 hits shreds their armor."),I("Spear of Shojin","More Awaken uses per fight."),I("Death's Dance","Delay Darius/Mundo burst during your auto chain.")],behind:[I("Sterak's Gage","Shield when they walk you down."),I("Thornmail","GW on regen-heavy Juggernauts."),I("Plated Steelcaps","Auto reduction on every Juggernaut auto-weave.")],runes:{...UDYR_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Spear of Shojin","More E stuns per fight — keeps Divers from counter-diving."),I("Experimental Hexplate","Move speed burst between E stuns."),I("Black Cleaver","Q autos stack shred during the stun chain.")],behind:[I("Sterak's Gage","Shield after E stun fails to stop their dive."),I("Death's Dance","Delay burst during your next E window."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains.")],runes:{...UDYR_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Spear of Shojin","More W shield uses — absorb their burst attempt."),I("Experimental Hexplate","Chase them between their dashes."),I("Sterak's Gage","Absorb one-shot during your W form.")],behind:[I("Sterak's Gage","Shield vs one-shots."),I("Death's Dance","Delay burst while E stun lands."),I("Guardian Angel","Revive after failed counter-gank.")],runes:{...UDYR_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Spear of Shojin","More E stuns interrupts Fiora/Jax extended duel."),I("Experimental Hexplate","Chase between E stuns."),I("Black Cleaver","Q autos shred between stuns.")],behind:[I("Sterak's Gage","Shield when their sustained DPS peaks."),I("Death's Dance","Delay extended trade damage."),I("Thornmail","GW + reflect on auto-heavy Skirmishers.")],runes:{...UDYR_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Spear of Shojin","More W shields absorb their burst attempts."),I("Experimental Hexplate","Close before their combo fires."),I("Sterak's Gage","Absorb their burst.")],behind:[I("Spirit Visage","MR + W shield amplification."),I("Sterak's Gage","Secondary shield."),I("Mercury's Treads","Shorter CC so E can land.")],runes:{...UDYR_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Thornmail","GW on Vladimir/Swain drain."),I("Spirit Visage","W shield amp vs their sustained AP."),I("Spear of Shojin","More W form uses per fight.")],behind:[I("Spirit Visage","W shield amp non-negotiable."),I("Thornmail","GW cuts their regen."),I("Death's Dance","Delay sustained AP DPS.")],runes:{...UDYR_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Experimental Hexplate","Move speed burst closes poke gap on ability use."),I("Boots of Swiftness","Slow resist — poke slows don't stop your approach."),I("Spear of Shojin","More W shields on approach.")],behind:[I("Spirit Visage","W shield sustains through poke."),I("Sterak's Gage","Shield on arrival."),I("Mercury's Treads","Shorter CC so your approach completes.")],runes:{...UDYR_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Plated Steelcaps","ADC auto reduction."),I("Experimental Hexplate","Chase ADC kite pattern with move speed bursts."),I("Black Cleaver","Q autos shred after E stun.")],behind:[I("Plated Steelcaps","Non-negotiable."),I("Sterak's Gage","Survive carry burst."),I("Death's Dance","Delay DPS window.")],runes:{...UDYR_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Black Cleaver","Q autos shred carry after E stun."),I("Experimental Hexplate","Reach carry before Enchanter repositions."),I("Spear of Shojin","More E stuns to separate duo.")],behind:[I("Sterak's Gage","Survive carry burst."),I("Death's Dance","Delay combined burst."),I("Plated Steelcaps","Carry auto reduction.")],runes:{...UDYR_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Shorter CC — E stun trades with their CC."),I("Experimental Hexplate","Move speed dodge hooks between forms."),I("Spear of Shojin","More E stuns vs hook attempts.")],behind:[I("Mercury's Treads","Mandatory — CC stops your entire form pattern."),I("Sterak's Gage","Survive burst after CC lands."),I("Guardian Angel","Revive after getting caught.")],runes:{...UDYR_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Q autos stack Cleaver vs engage tanks."),I("Experimental Hexplate","Move speed burst into their backline during engage."),I("Spear of Shojin","More E stuns disrupts their engage pattern.")],behind:[I("Mercury's Treads","Their CC stops your form swaps."),I("Sterak's Gage","Survive engage burst."),I("Spirit Visage","W shield amp.")],runes:{...UDYR_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Q autos shred Warden armor."),I("Experimental Hexplate","Chase through their body-block."),I("Spear of Shojin","More E stuns past their peel.")],behind:[I("Sterak's Gage","Survive carry burst through body-block."),I("Black Cleaver","Still your shred path."),I("Mercury's Treads","Poppy E/Galio taunt — reduce.")],runes:{...UDYR_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Boots of Swiftness","Singed cannot outrun Udyr + slow resist."),I("Experimental Hexplate","Move speed burst closes on kiting Specialists."),I("Spear of Shojin","More E stuns on repositioning Specialists.")],behind:[I("Spirit Visage","W shield sustains."),I("Sterak's Gage","Survive burst setups."),I("Mercury's Treads","Teemo blind stops Q Awaken — Tenacity shortens.")],runes:{...UDYR_JGL_DEFAULT_RUNES}},
      },
    },
    Top:{
      bans:["Jax","Cho'Gath","Dr. Mundo"], replacements:["Renekton","Sett","Volibear"],
      role:"AP Stance-Dancer (off-meta)",
      corePath:"Boots of Swiftness  ›  Malignance  ›  Liandry's Torment  ›  Riftmaker",
      coreNote:"Top Udyr swaps the AD Shojin/Hexplate bruiser build for an AP stance-dancer — Malignance and Liandry's Torment turn Phoenix stance procs and E stuns into real magic damage, and Riftmaker's omnivamp keeps him healthy through extended trades. This is the weaker of his two lanes (currently D tier); it's viable but Jungle remains the stronger seat.",
      sideItems:["Rylai's Crystal Scepter","Zhonya's Hourglass","Banshee's Veil","Void Staff","Spirit Visage","Mercury's Treads"],
      data:{
        JUGGERNAUT:{ahead:[I("Liandry's Torment","Burn scales off their HP stacking."),I("Riftmaker","Omnivamp wins the sustained trade."),I("Malignance","Haste = more E stuns to interrupt their combo.")],behind:[I("Zhonya's Hourglass","Stall their all-in window."),I("Mercury's Treads","Shorter CC before the kill."),I("Spirit Visage","Amplify your own sustain.")],runes:{...UDYR_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rylai's Crystal Scepter","Slow shuts down their engage follow-up."),I("Riftmaker","Omnivamp outlasts the dive."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Negates their all-in timing entirely."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Mercury's Treads","Shorter CC to kite out.")],runes:{...UDYR_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Riftmaker","Omnivamp sustains through their burst window."),I("Zhonya's Hourglass","Insurance even with a lead."),I("Liandry's Torment","Burn punishes their short trades.")],behind:[I("Zhonya's Hourglass","Essential vs burst all-in."),I("Banshee's Veil","Blocks their engage opener."),I("Spirit Visage","Amp healing to recover.")],runes:{...UDYR_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Riftmaker","Omnivamp wins the extended duel."),I("Rylai's Crystal Scepter","Prevents them from ever sticking to you."),I("Liandry's Torment","Burn punishes their mid-fight sustain.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Spirit Visage","Amp self-heal in the duel."),I("Mercury's Treads","Shorter CC on their gap-close.")],runes:{...UDYR_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Zhonya's Hourglass","Insurance vs their burst window."),I("Riftmaker","Omnivamp outlasts the poke."),I("Mercury's Treads","Reduce CC in their combo.")],behind:[I("Zhonya's Hourglass","Mandatory vs burst mages."),I("Banshee's Veil","Blocks the CC that opens their combo."),I("Spirit Visage","Amp healing to recover.")],runes:{...UDYR_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pierce early MR before it stacks."),I("Riftmaker","Omnivamp wins the drain war."),I("Liandry's Torment","Burn outscales their sustain.")],behind:[I("Banshee's Veil","Blocks the CC that starts their combo."),I("Zhonya's Hourglass","Survive the sustained burst."),I("Spirit Visage","Amp healing to keep pace.")],runes:{...UDYR_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rylai's Crystal Scepter","Landing a slow punishes their positioning."),I("Riftmaker","Omnivamp sustains the approach."),I("Mercury's Treads","Reduce CC duration from range.")],behind:[I("Banshee's Veil","Blocks one long-range ability."),I("Mercury's Treads","Reduce CC duration from range."),I("Zhonya's Hourglass","Survive the poke on approach.")],runes:{...UDYR_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Rylai's Crystal Scepter","Permanent slow denies their kite entirely."),I("Liandry's Torment","Burn melts their thin HP pool."),I("Riftmaker","Omnivamp during the extended fight.")],behind:[I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Mercury's Treads","Reduce CC duration."),I("Banshee's Veil","Blocks the engage tool set up on you.")],runes:{...UDYR_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Liandry's Torment","Burn negates sustain comps over time."),I("Riftmaker","Omnivamp through the combined poke."),I("Void Staff","Keep damage relevant vs their kit.")],behind:[I("Void Staff","Keep damage relevant vs their kit."),I("Banshee's Veil","Blocks the setup CC on their carry combo."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...UDYR_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rylai's Crystal Scepter","Punish a missed hook with a guaranteed slow."),I("Riftmaker","Omnivamp during the extended fight after a catch."),I("Liandry's Torment","Burn once they whiff.")],behind:[I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),I("Zhonya's Hourglass","Buys time if you get caught."),I("Mercury's Treads","Shorter root/bind duration.")],runes:{...UDYR_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Penetrates their MR stacking."),I("Riftmaker","Omnivamp through the tank fight."),I("Rylai's Crystal Scepter","Keeps them permanently slowed.")],behind:[I("Void Staff","Required to deal damage through their resists."),I("Zhonya's Hourglass","Survive their engage combo."),I("Banshee's Veil","Blocks the CC that starts their initiation.")],runes:{...UDYR_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","MR-stacking Wardens still take real damage through pen."),I("Liandry's Torment","% HP burn stacks enormously against their pool."),I("Riftmaker","Omnivamp through their mitigation.")],behind:[I("Liandry's Torment","Only reliable damage vs a stacked-resist Warden."),I("Zhonya's Hourglass","Survive the engage they set up."),I("Banshee's Veil","Blocks their key CC.")],runes:{...UDYR_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Rylai's Crystal Scepter","Locks down kiting Specialists with perma-slow."),I("Liandry's Torment","Burn synergizes with sustained zone pressure."),I("Riftmaker","Omnivamp through their poke/regen kit.")],behind:[I("Mercury's Treads","Reduce blind/stun duration."),I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive burst setups.")],runes:{...UDYR_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
