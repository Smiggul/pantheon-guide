import { I } from "../runeHelpers.js";

const ORNN_TOP_DEFAULT_RUNES = {
  keystone:       "Grasp of the Undying",
  primary:        "Resolve",
  primaryRunes:   ["Demolish","Bone Plating","Overgrowth"],
  secondary:      "Inspiration",
  secondaryRunes: ["Biscuit Delivery","Magical Footwear"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Grasp procs off Ornn's W-brittle auto pattern and stacks the HP his Living Forge masterwork items multiply. Demolish converts his tankiness into plates during the long farm phases, Bone Plating survives the early trades before his item advantage kicks in, Overgrowth compounds the HP curve, and the Inspiration economy line (Biscuit Delivery, Magical Footwear) accelerates the forge — Ornn is the only champion whose gold curve upgrades his whole team's items, so economy runes pay double.",
};

// ══════════════════════════════════════════════════════════════════════════
//  ORNN — Fire Below the Mountain: Forge-God Tank  (A/B tier Top 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"ornn", display:"Ornn", dd:"Ornn",
  color:"#4a342a", glow:"#f08040",
  lanes:["Top"],
  roles:{
    Top:{
      bans:["Kennen","Warwick","Sylas"], replacements:["Malphite","K'Sante","Shen"],
      role:"Forge-God Teamfight Tank",
      corePath:"Sunfire Aegis  ›  Plated Steelcaps  ›  Thornmail  ›  Jak'Sho, The Protean",
      coreNote:"Ornn is the best pure teamfight tank in the game: brittle procs turn every ally's CC into bonus damage, and Call of the Forge God is a two-wave engage no comp can fully answer. Sunfire Aegis feeds the front-line burn identity, Thornmail plus Jak'Sho stack the resists his passive upgrades for free, and Kaenic Rookern closes against AP comps. His real win condition is the forge itself — by late game his team has two extra items' worth of masterwork upgrades. Play for teamfights; his ult wins any fight that starts on his timing.",
      sideItems:["Kaenic Rookern","Spirit Visage","Unending Despair","Randuin's Omen","Force of Nature","Frozen Heart"],
      data:{
        JUGGERNAUT:{ahead:[I("Sunfire Aegis","Burn them through the trade war."),I("Thornmail","Anti-heal their sustain."),I("Jak'Sho, The Protean","Resist ramp wins the long brawl.")],behind:[I("Thornmail","Cut their healing before comparing bars."),I("Plated Steelcaps","Cheap mitigation vs their autos."),I("Spirit Visage","Amplify your sustain.")],runes:{...ORNN_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Sunfire Aegis","Their dive stands in your burn aura."),I("Randuin's Omen","Slow the dive mid-animation."),I("Jak'Sho, The Protean","Resists ramp as they commit.")],behind:[I("Randuin's Omen","The active blanks their dive window."),I("Spirit Visage","Sustain repeated attempts."),I("Kaenic Rookern","Shield vs AP divers.")],runes:{...ORNN_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sunfire Aegis","Their burst math never beats your resist curve."),I("Thornmail","Return damage on the attempt."),I("Unending Despair","Heal back their failed burst.")],behind:[I("Kaenic Rookern","Magic shield vs AP assassins."),I("Randuin's Omen","Slow the reset escape."),I("Spirit Visage","Sustain back the chip.")],runes:{...ORNN_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Frozen Heart","AS slow blunts their whole kit."),I("Thornmail","Anti-heal their lifesteal loop."),I("Jak'Sho, The Protean","Resist ramp wins the extended duel.")],behind:[I("Randuin's Omen","Double AS reduction breaks their DPS."),I("Thornmail","Grievous wounds vs their sustain."),I("Spirit Visage","Sustain the attrition war.")],runes:{...ORNN_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Kaenic Rookern","Magic shield blanks their rotation."),I("Sunfire Aegis","Burn them while they poke."),I("Unending Despair","Heal back what lands.")],behind:[I("Kaenic Rookern","Rush the magic shield."),I("Spirit Visage","MR + healing through the poke."),I("Force of Nature","MR + speed to close.")],runes:{...ORNN_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Spirit Visage","Sustain war — Second Wind-style healing wins it."),I("Kaenic Rookern","Shield resets every trade."),I("Force of Nature","Stack MR against the drain.")],behind:[I("Force of Nature","MR + speed answers the whole kit."),I("Spirit Visage","Amplify your healing."),I("Kaenic Rookern","Shield the ramp window.")],runes:{...ORNN_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Force of Nature","MR + speed crosses the poke zone."),I("Unending Despair","Heal off their chip pattern."),I("Kaenic Rookern","Shield resets between volleys.")],behind:[I("Force of Nature","Required mobility through the poke."),I("Spirit Visage","Sustain back the chip."),I("Kaenic Rookern","Shield the approach.")],runes:{...ORNN_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Randuin's Omen","Crit reduction breaks their kite math."),I("Thornmail","Return damage on every auto."),I("Frozen Heart","AS slow deletes their DPS.")],behind:[I("Randuin's Omen","The active blanks their focus window."),I("Thornmail","Anti-heal their lifesteal."),I("Force of Nature","Speed to finally reach them.")],runes:{...ORNN_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Sunfire Aegis","Burn through the poke lane's shield budget."),I("Thornmail","Anti-heal the sustain package."),I("Jak'Sho, The Protean","Out-scale the shields with resists.")],behind:[I("Thornmail","Grievous wounds is the win condition."),I("Spirit Visage","Out-sustain their value."),I("Kaenic Rookern","Shield their poke rotation.")],runes:{...ORNN_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Sunfire Aegis","A landed hook onto Ornn is their mistake."),I("Randuin's Omen","Slow the follow-up burst."),I("Thornmail","Punish the engage that follows.")],behind:[I("Randuin's Omen","Blank the follow-up window."),I("Spirit Visage","Sustain the repeated picks."),I("Kaenic Rookern","Shield vs AP catchers.")],runes:{...ORNN_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Jak'Sho, The Protean","Win the tank mirror — your ult engages better."),I("Thornmail","Anti-heal their sustain engage."),I("Sunfire Aegis","Burn stacks in the extended teamfight.")],behind:[I("Kaenic Rookern","Shield the AP half of their engage."),I("Randuin's Omen","Slow their wombo follow-up."),I("Force of Nature","Speed + MR to counter-engage.")],runes:{...ORNN_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Sunfire Aegis","Burn cracks the peel stalemate slowly but surely."),I("Jak'Sho, The Protean","Out-resist the resist war."),I("Thornmail","Anti-heal their protected carry.")],behind:[I("Spirit Visage","Sustain the attrition stalemate."),I("Thornmail","Anti-heal to make progress."),I("Force of Nature","MR + speed for the flank ult.")],runes:{...ORNN_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Sunfire Aegis","Generic tank stats answer most gimmicks."),I("Kaenic Rookern","Shield the surprise burst."),I("Thornmail","Punish whatever they're doing.")],behind:[I("Spirit Visage","Sustain through the unfamiliar."),I("Randuin's Omen","Slow the gimmick down."),I("Force of Nature","Speed to just leave.")],runes:{...ORNN_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
