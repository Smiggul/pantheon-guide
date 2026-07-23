import { I } from "../runeHelpers.js";

const CHOGATH_TOP_DEFAULT_RUNES = {
  keystone:       "Hail of Blades",
  primary:        "Domination",
  primaryRunes:   ["Cheap Shot","Grisly Mementos","Ultimate Hunter"],
  secondary:      "Sorcery",
  secondaryRunes: ["Axiom Arcanist","Celerity"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Modern Cho'Gath plays AP burst-tank, and Hail of Blades frontloads the trade: three fast autos with Vorpal Spike magic damage between Rupture and Feral Scream. Cheap Shot fires true damage on every knockup and silence, Grisly Mementos stacks haste off the pick pattern, Ultimate Hunter is the headline — more Feasts means more true-damage executes and more stacks — while Axiom Arcanist amplifies Feast itself and Celerity feeds the surprisingly fast walking mountain.",
};

// ══════════════════════════════════════════════════════════════════════════
//  CHO'GATH — Terror of the Void: AP Feast Tank  (Top ~51% 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"chogath", display:"Cho'Gath", dd:"Chogath",
  color:"#3a2a4a", glow:"#b080e0",
  lanes:["Top"],
  // Standard Cho'Gath (below) is the modern AP Hail of Blades burst mage. This
  // is the full-tank line — the higher-WR build on Mobalytics 26.14 (53.1% / 2.7k).
  altBuilds:{
    Top: [{
      label: "Full Tank",
      tag: "alt",
      corePath: "Heartsteel  ›  Mercury's Treads  ›  Hollow Radiance  ›  Unending Despair",
      coreNote: "Full-tank Cho'Gath — you become an HP monster the enemy simply can't kill, and Feast still executes for a flat chunk while your R and Q keep AP-agnostic base damage. Heartsteel snowballs your health bar every trade, Hollow Radiance + Unending Despair make you a burning, damage-reflecting frontline, and Jak'Sho / Thornmail close it. Grasp + Demolish win the lane by attrition and tower pressure. Completely different job from the AP burst build — you soak and peel and eat, rather than one-shotting the backline.",
      runes: {
        keystone: "Grasp of the Undying",
        primary: "Resolve",
        primaryRunes: ["Demolish", "Second Wind", "Overgrowth"],
        secondary: "Inspiration",
        secondaryRunes: ["Biscuit Delivery", "Cosmic Insight"],
        shards: ["Ability Haste", "Health (scaling)", "Health (scaling)"],
        reason: "Grasp permanently grows your health each trade — perfectly on-theme for the HP-stacking tank. Demolish converts your lane bully-ing into towers, Second Wind + Overgrowth make you unkillable in lane and scale your HP into the late game, and the Inspiration splash (Biscuit Delivery, Cosmic Insight) sustains mana/health and adds haste. Double Health-scaling shards feed the whole gameplan.",
      },
      sideItems: ["Jak'Sho, The Protean", "Thornmail", "Warmog's Armor", "Kaenic Rookern", "Spirit Visage", "Frozen Heart", "Sunfire Aegis"],
    }],
  },
  roles:{
    Top:{
      bans:["Fiora","Vayne","Gwen"], replacements:["Sion","Dr. Mundo","Malphite"],
      role:"Feast-Stacking AP Terror",
      corePath:"Hextech Rocketbelt  ›  Boots of Swiftness  ›  Riftmaker  ›  Dead Man's Plate",
      coreNote:"Cho'Gath scales infinitely and this build weaponizes the journey: Hextech Rocketbelt guarantees the Rupture-Scream combo lands, Riftmaker converts the AP-tank statline into true-damage drain, Dead Man's Plate feeds the roam-slam pattern, and Jak'Sho ramps the resists his Feast HP multiplies. Every Feast is permanent HP and a true-damage execute — eat the enemy top laner at six, eat their carry at every teamfight, and by forty minutes he's a raid boss with a dinner bell.",
      sideItems:["Jak'Sho, The Protean","Rabadon's Deathcap","Kaenic Rookern","Thornmail","Spirit Visage","Randuin's Omen"],
      data:{
        JUGGERNAUT:{ahead:[I("Riftmaker","True-damage drain wins the brawl — Feast finishes it."),I("Rabadon's Deathcap","Scale the combo past their HP."),I("Thornmail","Anti-heal their sustain.")],behind:[I("Thornmail","Cut their healing before comparing bars."),I("Jak'Sho, The Protean","Resist ramp evens the brawl."),I("Spirit Visage","Amplify your carnivore healing.")],runes:{...CHOGATH_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Hextech Rocketbelt","Counter-engage — Rupture their dive mid-air."),I("Riftmaker","Out-sustain their engage window."),I("Jak'Sho, The Protean","Resists ramp as they commit.")],behind:[I("Randuin's Omen","Slow the dive mid-animation."),I("Kaenic Rookern","Shield vs AP divers."),I("Spirit Visage","Sustain repeated attempts.")],runes:{...CHOGATH_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Riftmaker","Their burst can't out-math Feast HP — silence ruins the combo."),I("Kaenic Rookern","Shield vs AP assassins."),I("Rabadon's Deathcap","One knockup rotation deletes them.")],behind:[I("Kaenic Rookern","Magic shield vs the burst."),I("Randuin's Omen","Slow the reset escape — then Feast."),I("Spirit Visage","Sustain back the chip.")],runes:{...CHOGATH_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Riftmaker","Drain out-lasts their duel windows — W silences the resets."),I("Thornmail","Anti-heal their lifesteal loop."),I("Jak'Sho, The Protean","Resist ramp wins the extended 1v1.")],behind:[I("Randuin's Omen","AS slow blunts their DPS."),I("Thornmail","Grievous wounds vs their sustain."),I("Spirit Visage","Sustain the attrition.")],runes:{...CHOGATH_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Kaenic Rookern","Magic shield blanks the rotation — silence blanks the next."),I("Riftmaker","Drain back what lands."),I("Rabadon's Deathcap","Out-burst the burster.")],behind:[I("Kaenic Rookern","Rush the magic shield."),I("Spirit Visage","MR + sustain through the poke."),I("Jak'Sho, The Protean","Ramp resists across the fight.")],runes:{...CHOGATH_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Riftmaker","Your drain beats their drain — Feast breaks the tie."),I("Kaenic Rookern","Shield resets every trade."),I("Spirit Visage","Amplify the sustain war.")],behind:[I("Kaenic Rookern","MR shield answers the ramp."),I("Spirit Visage","Amplify your healing."),I("Randuin's Omen","If they splash AD, punish it.")],runes:{...CHOGATH_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Hextech Rocketbelt","Dash + Rupture erases their range advantage."),I("Dead Man's Plate","Speed crosses the poke zone."),I("Riftmaker","Drain back the approach chip.")],behind:[I("Kaenic Rookern","Shield the volleys."),I("Spirit Visage","Sustain back the chip."),I("Dead Man's Plate","Required closing speed.")],runes:{...CHOGATH_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Hextech Rocketbelt","Dash-Rupture deletes the ranged top's kiting."),I("Dead Man's Plate","Speed to reach them."),I("Randuin's Omen","Blunt the crits while you close.")],behind:[I("Randuin's Omen","The active blanks their DPS window."),I("Thornmail","Anti-heal their lifesteal."),I("Dead Man's Plate","Speed to finally connect.")],runes:{...CHOGATH_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Rabadon's Deathcap","Burst through the shield budget — Feast ignores it anyway."),I("Riftmaker","Out-sustain their value."),I("Thornmail","Anti-heal the package.")],behind:[I("Thornmail","Grievous wounds is the win condition."),I("Spirit Visage","Out-sustain their poke."),I("Kaenic Rookern","Shield their damage half.")],runes:{...CHOGATH_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Hextech Rocketbelt","A hook onto Cho'Gath is a dinner invitation."),I("Riftmaker","Drain the follow-up burst."),I("Randuin's Omen","Slow their escape — Feast the catcher.")],behind:[I("Randuin's Omen","Slow the follow-up window."),I("Kaenic Rookern","Shield vs AP catchers."),I("Spirit Visage","Sustain the pick attempts.")],runes:{...CHOGATH_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Riftmaker","True damage wins the tank mirror — Feast eats the loser."),I("Rabadon's Deathcap","Out-scale their durability curve."),I("Thornmail","Anti-heal their sustain engage.")],behind:[I("Kaenic Rookern","Shield the AP half of their engage."),I("Randuin's Omen","Slow their wombo follow-up."),I("Jak'Sho, The Protean","Ramp the counter-fight.")],runes:{...CHOGATH_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Riftmaker","True damage cracks the peel stalemate — Feast is true too."),I("Rabadon's Deathcap","Out-scale the mitigation budget."),I("Thornmail","Anti-heal their protected carry.")],behind:[I("Riftmaker","Required true damage vs stacked resists."),I("Spirit Visage","Sustain the stalemate."),I("Thornmail","Anti-heal to make progress.")],runes:{...CHOGATH_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Hextech Rocketbelt","Rupture-silence answers most gimmicks."),I("Riftmaker","Drain through the tricks."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Kaenic Rookern","Shield the surprise burst."),I("Randuin's Omen","Slow the gimmick down."),I("Spirit Visage","Sustain through the unfamiliar.")],runes:{...CHOGATH_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
