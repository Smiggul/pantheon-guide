import { I } from "../runeHelpers.js";

const REKSAI_JGL_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Coup de Grace"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Cosmic Insight"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror stacks on Q empowered autos and E knockup. Coup de Grace closes out low HP targets after W knockup. Magical Footwear + Cosmic Insight free gold for Stridebreaker rush. Legend: Alacrity accelerates Q fury generation.",
};

// ══════════════════════════════════════════════════════════════════════════
//  REK'SAI — Diver / Assassin
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"reksai", display:"Rek'Sai", dd:"RekSai",
  bans:["Udyr","Olaf","Nocturne"], replacements:["Warwick","Vi","Xin Zhao"],
  color:"#8b0000", glow:"#e74c3c",
  roles:{
    Jungle:{
      role:"Diver / Assassin",
      corePath:"Stridebreaker  ›  Plated Steelcaps  ›  Spear of Shojin  ›  Sterak's Gage",
      coreNote:"Stridebreaker first for the AoE slow on W unburrow — they can't escape after you surface under them. Spear of Shojin third for ability haste to reduce W tunnel CD and more W knocks per fight. Sterak's fourth for the shield that keeps you alive mid-dive.",
      sideItems:["Guardian Angel","Death's Dance","Lord Dominik's Regards","Black Cleaver","Mercury's Treads","Serpent's Fang"],
      data:{
        JUGGERNAUT:{ahead:[I("Lord Dominik's Regards","% pen while ahead into their HP."),I("Black Cleaver","Q empowered autos stack Cleaver fast."),I("Stridebreaker","AoE slow on surface stops Juggernauts walking out.")],behind:[I("Sterak's Gage","Shield after W surface when they walk you down."),I("Death's Dance","Delay Darius/Mundo burst."),I("Plated Steelcaps","Auto reduction on their auto-weave.")],runes:{...REKSAI_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Stridebreaker","Surface under them — AoE slow and knock wins mirror dives."),I("Spear of Shojin","More W uses per fight = more knocks."),I("Sterak's Gage","Shield if their dive survives your burst.")],behind:[I("Sterak's Gage","Shield after failed gank."),I("Death's Dance","Delay their burst."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains.")],runes:{...REKSAI_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Stridebreaker","Surface burst before they can reposition."),I("Spear of Shojin","More E uses to chase escapes."),I("Sterak's Gage","Absorb their counter-burst.")],behind:[I("Sterak's Gage","Shield vs one-shots."),I("Guardian Angel","Revive after dive fails."),I("Death's Dance","Delay their burst while Q rage ticks.")],runes:{...REKSAI_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Stridebreaker","Slow stops Fiora/Jax extended duel pattern."),I("Spear of Shojin","More W knocks interrupts their dueling rhythm."),I("Sterak's Gage","Shield when their sustained DPS kicks in.")],behind:[I("Sterak's Gage","Shield at low HP."),I("Guardian Angel","Revive mid-fight."),I("Death's Dance","Delay sustained trade damage.")],runes:{...REKSAI_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Stridebreaker","Surface before their combo fires."),I("Sterak's Gage","Shield their retaliation."),I("Spear of Shojin","More W knocks to prevent casting.")],behind:[I("Sterak's Gage","Shield absorbs burst on failed gank."),I("Guardian Angel","Revive if they burst you before W."),I("Mercury's Treads","Shorter CC so W tunnel can surface.")],runes:{...REKSAI_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Stridebreaker","Close on kiting Battlemages and slow them."),I("Black Cleaver","Shred HP stacks — Cleaver fills on Q autos."),I("Spear of Shojin","More W interrupts their sustained DPS.")],behind:[I("Sterak's Gage","Shield when sustained AP damage catches you."),I("Death's Dance","Delay AP DPS."),I("Mercury's Treads","Shorter CC.")],runes:{...REKSAI_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Stridebreaker","Surface under them — AoE slow on arrival prevents escape."),I("Spear of Shojin","Faster W tunnel = surprise surface timing."),I("Sterak's Gage","Absorb poke on arrival.")],behind:[I("Sterak's Gage","Shield vs burst on arrival."),I("Mercury's Treads","Shorter CC so W surfaces."),I("Guardian Angel","Revive if burst lands before your W.")],runes:{...REKSAI_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Stridebreaker","Surface under ADC — AoE slow, they cannot kite."),I("Spear of Shojin","More W surfaces per fight."),I("Lord Dominik's Regards","% pen on tanky ADCs.")],behind:[I("Plated Steelcaps","Non-negotiable vs sustained ADC DPS."),I("Sterak's Gage","Shield vs carry burst."),I("Stridebreaker","Still your gank tool even behind.")],runes:{...REKSAI_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Stridebreaker","Surface between carry and Enchanter — AoE slow hits both."),I("Serpent's Fang","Shield strip on surface landing."),I("Spear of Shojin","More W surfaces to separate the duo.")],behind:[I("Serpent's Fang","Still mandatory — their shields negate everything."),I("Sterak's Gage","Survive carry burst."),I("Stridebreaker","Still your separation tool.")],runes:{...REKSAI_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Shorter CC — W tunnel is cancelled by most hooks."),I("Stridebreaker","Surface and slow before they reset."),I("Spear of Shojin","Faster W CD reduces hook vulnerability window.")],behind:[I("Mercury's Treads","Mandatory — CC stops tunnel entirely."),I("Sterak's Gage","Survive burst after being caught."),I("Guardian Angel","Revive if hook into burst kills you.")],runes:{...REKSAI_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Q autos stack Cleaver vs tanks."),I("Stridebreaker","Surface in their backline during engage."),I("Lord Dominik's Regards","% pen while ahead.")],behind:[I("Mercury's Treads","Their CC chains stop tunnels."),I("Sterak's Gage","Survive engage burst."),I("Death's Dance","Delay follow-up burst.")],runes:{...REKSAI_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Q autos shred Warden armor."),I("Lord Dominik's Regards","% pen into their stacking."),I("Stridebreaker","Surface past their body-block.")],behind:[I("Sterak's Gage","Survive carry burst through peel."),I("Black Cleaver","Still your shred path."),I("Mercury's Treads","Poppy E/Galio taunt — reduce.")],runes:{...REKSAI_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Stridebreaker","Surface under Singed/TF before they disengage."),I("Spear of Shojin","More W surfaces denies their repositioning."),I("Sterak's Gage","Survive their counter.")],behind:[I("Sterak's Gage","Survive burst setups."),I("Mercury's Treads","CC reduces tunnel options."),I("Guardian Angel","Revive after failed dive.")],runes:{...REKSAI_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
