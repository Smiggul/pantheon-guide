import { I } from "../runeHelpers.js";

const SHYVANA_JGL_DEFAULT_RUNES = {
  keystone:       "Press the Attack",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Last Stand"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Cosmic Insight"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Press the Attack procs fast with Q's rapid attacks on ganks. Legend: Haste over Alacrity — Shyvana's play pattern revolves around ability cooldowns more than sustained autos. Magical Footwear's +10 bonus move speed amplifies her dragon form stickiness. Swap to Conqueror vs tank-heavy comps.",
};

// ══════════════════════════════════════════════════════════════════════════
//  SHYVANA — Skirmisher / Bruiser
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"shyvana", display:"Shyvana", dd:"Shyvana",
  bans:["Trundle","Rek'Sai","Lillia"], replacements:["Udyr","Bel'Veth","Karthus"],
  color:"#c0392b", glow:"#e67e22",
  roles:{
    Jungle:{
      role:"Skirmisher / Bruiser",
      corePath:"Trinity Force  ›  Plated Steelcaps  ›  Guinsoo's Rageblade  ›  Titanic Hydra",
      coreNote:"Trinity Force first for Sheen proc on Q double-strike. Guinsoo's second enables on-hit Q magic damage that scales with dragon form. Titanic Hydra third for AoE damage on her Q resets. Prioritise dragon buffs — objective control is her kit's identity.",
      sideItems:["Blade of the Ruined King","Nashor's Tooth","Wit's End","Sterak's Gage","Death's Dance","Randuin's Omen"],
      data:{
        JUGGERNAUT:{ahead:[I("Blade of the Ruined King","% current HP on Q double-strike destroys their HP stacking."),I("Guinsoo's Rageblade","On-hit Q magic damage — ignores their armor stacking."),I("Titanic Hydra","AoE on Q resets shreds their camp while poking them.")],behind:[I("Sterak's Gage","Shield when they walk you down."),I("Death's Dance","Delay Darius/Mundo burst — E to disengage."),I("Plated Steelcaps","Auto reduction on every Juggernaut auto-weave.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Trinity Force","Sheen proc wins mirror dives."),I("Guinsoo's Rageblade","On-hit damage procs faster than their dive burst."),I("Blade of the Ruined King","% HP drain — sustains through dive skirmishes.")],behind:[I("Sterak's Gage","Shield when their dive beats your burst."),I("Death's Dance","Delay burst while you R form to escape."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Trinity Force","Close and burst before they reset."),I("Sterak's Gage","Absorb their burst attempt."),I("Guinsoo's Rageblade","On-hit DPS in dragon form executes them post-combo.")],behind:[I("Sterak's Gage","Shield vs one-shots — they burst faster than you."),I("Death's Dance","Delay burst while dragon form procs drain."),I("Wit's End","MR + on-hit for AP assassins Akali/Ekko.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Guinsoo's Rageblade","On-hit DPS wins extended duels vs Fiora/Jax."),I("Blade of the Ruined King","% HP drain — you sustain through their dueling damage."),I("Titanic Hydra","AoE on Q resets maintains DPS while they trade.")],behind:[I("Randuin's Omen","Crit reduction vs Yasuo/Yone — dragon form has no armour."),I("Sterak's Gage","Shield when their crit burst peaks."),I("Plated Steelcaps","Critical auto mitigation.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Trinity Force","Close before their combo fires."),I("Sterak's Gage","Shield their burst while you reach dragon form."),I("Wit's End","MR + on-hit while ahead vs AP mid laners.")],behind:[I("Wit's End","MR stack + drain — non-negotiable vs AP burst."),I("Sterak's Gage","Secondary shield."),I("Mercury's Treads","Shorter stun so dragon form can land.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Blade of the Ruined King","% HP drain on sustained AP targets."),I("Wit's End","MR + drain — your sustain vs their sustain."),I("Guinsoo's Rageblade","On-hit magic damage in dragon form beats their AP DPS.")],behind:[I("Wit's End","Non-negotiable — MR drain vs sustained AP."),I("Sterak's Gage","Shield when their DPS window opens."),I("Mercury's Treads","Shorter CC.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Trinity Force","Sprint passive closes poke gap."),I("Guinsoo's Rageblade","On-hit procs in dragon form melts them on arrival."),I("Sterak's Gage","Absorb poke burst accumulated on approach.")],behind:[I("Sterak's Gage","Shield vs burst on arrival."),I("Wit's End","MR vs AP poke."),I("Mercury's Treads","Shorter CC so your gank connects.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Plated Steelcaps","ADC auto reduction."),I("Guinsoo's Rageblade","On-hit DPS races their sustained damage."),I("Blade of the Ruined King","% HP drain on high-HP ADCs.")],behind:[I("Plated Steelcaps","Non-negotiable."),I("Sterak's Gage","Survive carry burst."),I("Death's Dance","Delay their DPS window.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Guinsoo's Rageblade","Dragon form on-hit DPS reaches carry through peel."),I("Titanic Hydra","AoE hits both Enchanter and carry."),I("Blade of the Ruined King","% HP drain sustains through Enchanter poke.")],behind:[I("Sterak's Gage","Survive carry + Enchanter burst."),I("Death's Dance","Delay combined burst."),I("Plated Steelcaps","Carry auto reduction.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Shorter CC chains — dragon form is cancelled by hooks."),I("Trinity Force","Close and burst before they reset CC."),I("Guinsoo's Rageblade","On-hit DPS on arrival.")],behind:[I("Mercury's Treads","Mandatory — CC kills dragon form entirely."),I("Sterak's Gage","Survive burst after CC lands."),I("Wit's End","AP Catchers drain.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Blade of the Ruined King","% HP drain on high-HP Vanguards."),I("Guinsoo's Rageblade","On-hit magic damage bypasses armor stacking."),I("Titanic Hydra","AoE on Q resets — hits engage tank and backline.")],behind:[I("Sterak's Gage","Survive engage burst."),I("Death's Dance","Delay burst."),I("Mercury's Treads","Their CC chains kill dragon form.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Blade of the Ruined King","% HP drain shreds Warden HP stacking."),I("Guinsoo's Rageblade","Magic on-hit bypasses their armor."),I("Titanic Hydra","AoE past their body-block.")],behind:[I("Sterak's Gage","Survive carry burst through body-block."),I("Death's Dance","Delay burst."),I("Mercury's Treads","Poppy E/Galio taunt — reduce.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Trinity Force","Sprint closes on kiting Specialists."),I("Guinsoo's Rageblade","Dragon form DPS melts Singed/Kennen."),I("Blade of the Ruined King","% HP drain on sustain Specialists.")],behind:[I("Wit's End","Kennen/Teemo AP — MR drain."),I("Sterak's Gage","Survive burst setups."),I("Mercury's Treads","Teemo blind stops Q double-strike — Tenacity shortens.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
