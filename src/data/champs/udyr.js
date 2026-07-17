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

// ══════════════════════════════════════════════════════════════════════════
//  UDYR — Skirmisher / Bruiser (AD Build, patch 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"udyr", display:"Udyr", dd:"Udyr",
  bans:["Rek'Sai","Karthus","Trundle"], replacements:["Warwick","Volibear","Shyvana"],
  color:"#1a5276", glow:"#2980b9",
  roles:{
    Jungle:{
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
  },
};
