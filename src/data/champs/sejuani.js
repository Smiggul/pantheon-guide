import { I } from "../runeHelpers.js";

const SEJUANI_JGL_DEFAULT_RUNES = {
  keystone:       "Aftershock",
  primary:        "Resolve",
  primaryRunes:   ["Font of Life","Conditioning","Overgrowth"],
  secondary:      "Precision",
  secondaryRunes: ["Triumph","Legend: Alacrity"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Aftershock fires on every Q charge and E stun — Sejuani engages constantly, so the resist burst is near-permanent in fights. Font of Life converts her endless CC into team healing, Conditioning scales her into the true frontline of the mid-game, Overgrowth stacks the HP her Frost Armor breaks off of, and the Precision splash (Triumph, Legend: Alacrity) keeps her clear speed and skirmish sustain honest for a tank.",
};

const SEJUANI_TOP_DEFAULT_RUNES = {
  keystone:       "Grasp of the Undying",
  primary:        "Resolve",
  primaryRunes:   ["Demolish","Second Wind","Overgrowth"],
  secondary:      "Sorcery",
  secondaryRunes: ["Manaflow Band","Scorch"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Top Sejuani runs a completely different page from Jungle: Grasp converts her lane trading pattern into stacking HP, Demolish turns her tankiness into tower gold, and Second Wind survives the ranged-top poke matchups. The Sorcery splash is the current tech — Manaflow Band solves her real lane mana problems and Scorch adds the early trade damage a tank lane otherwise lacks.",
};

// ══════════════════════════════════════════════════════════════════════════
//  SEJUANI — Fury of the North: Engage Tank  (B/C+ Jungle / B Top 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"sejuani", display:"Sejuani", dd:"Sejuani",
  color:"#2a4a5a", glow:"#70c0e0",
  lanes:["Jungle","Top"],
  roles:{
    Jungle:{
      bans:["Lillia","Kindred","Kayn"], replacements:["Zac","Amumu","Maokai"],
      role:"Permafrost Engage Tank",
      corePath:"Heartsteel  ›  Plated Steelcaps  ›  Unending Despair  ›  Thornmail",
      coreNote:"Sejuani is the classic engage-tank jungler: Q into the carry, chain the E stun, land Glacial Prison, and let the team clean up. Heartsteel stacks off every camp and skirmish her frontline role drags her into, Unending Despair sustains her through the extended fights her CC creates, and Thornmail plus Jak'Sho tune the resist profile to the enemy comp. Her damage is her team — she buys nothing but the right to keep engaging.",
      sideItems:["Jak'Sho, The Protean","Spirit Visage","Kaenic Rookern","Randuin's Omen","Force of Nature","Knight's Vow"],
      data:{
        JUGGERNAUT:{ahead:[I("Heartsteel","Win the HP race — they can't burst a stacked Sejuani."),I("Thornmail","Anti-heal their sustain brawls."),I("Unending Despair","Sustain through the extended fight.")],behind:[I("Thornmail","Cut their healing before comparing bars."),I("Randuin's Omen","Slow their walk-down onto your carries."),I("Spirit Visage","Amplify your sustain package.")],runes:{...SEJUANI_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Heartsteel","HP wall breaks their engage math."),I("Randuin's Omen","Slow the dive mid-animation."),I("Unending Despair","Sustain through the skirmish they start.")],behind:[I("Randuin's Omen","The active blanks their dive window."),I("Knight's Vow","Split the dive damage off your carry."),I("Spirit Visage","Sustain repeated attempts.")],runes:{...SEJUANI_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Heartsteel","Their burst math never beats your HP curve."),I("Thornmail","Return damage on the attempt."),I("Randuin's Omen","Slow the reset escape after their whiff.")],behind:[I("Kaenic Rookern","Magic shield vs AP assassins."),I("Knight's Vow","Eat the assassination attempt for your carry."),I("Randuin's Omen","Slow their exit and let the team turn.")],runes:{...SEJUANI_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Unending Despair","Out-sustain their duel windows."),I("Thornmail","Anti-heal cuts their lifesteal loop."),I("Heartsteel","HP stacks while they whittle.")],behind:[I("Randuin's Omen","AS slow blunts their whole kit."),I("Thornmail","Grievous wounds vs their sustain."),I("Spirit Visage","Sustain the attrition war.")],runes:{...SEJUANI_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Kaenic Rookern","Magic shield blanks their rotation."),I("Heartsteel","HP floor under the burst."),I("Unending Despair","Heal back what lands.")],behind:[I("Kaenic Rookern","Rush the magic shield."),I("Spirit Visage","MR + healing through the poke."),I("Force of Nature","Stack MR + speed to engage anyway.")],runes:{...SEJUANI_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Spirit Visage","Sustain war — Font of Life feeds it."),I("Kaenic Rookern","Shield resets every engage."),I("Force of Nature","Stack MR against the drain.")],behind:[I("Force of Nature","MR + speed answers the whole kit."),I("Spirit Visage","Amplify your healing."),I("Kaenic Rookern","Shield the ramp window.")],runes:{...SEJUANI_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Heartsteel","Free HP off their poke chip."),I("Force of Nature","Speed + MR to cross the poke zone and engage."),I("Kaenic Rookern","Shield resets between volleys.")],behind:[I("Force of Nature","Required mobility through the poke."),I("Spirit Visage","Sustain back the chip."),I("Knight's Vow","Guard the carry they're sieging.")],runes:{...SEJUANI_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Randuin's Omen","Crit reduction breaks their DPS math."),I("Thornmail","Return damage on every auto."),I("Heartsteel","Out-HP their shred curve.")],behind:[I("Randuin's Omen","The active blanks their focus window."),I("Knight's Vow","Split their damage on your carry."),I("Thornmail","Anti-heal their lifesteal.")],runes:{...SEJUANI_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Heartsteel","Their poke can't outpace your stacking."),I("Thornmail","Anti-heal the whole sustain lane."),I("Jak'Sho, The Protean","Drain tank through the shield war.")],behind:[I("Thornmail","Grievous wounds is the win condition."),I("Spirit Visage","Out-sustain their value."),I("Knight's Vow","Protect your carry through the poke.")],runes:{...SEJUANI_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Heartsteel","A landed hook onto you costs them the fight."),I("Randuin's Omen","Slow the follow-up burst."),I("Thornmail","Punish the engage that follows.")],behind:[I("Knight's Vow","Save the caught carry with shared damage."),I("Randuin's Omen","Blank the follow-up window."),I("Spirit Visage","Sustain the repeated picks.")],runes:{...SEJUANI_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Heartsteel","Out-tank the tank mirror."),I("Thornmail","Anti-heal their sustain engage."),I("Jak'Sho, The Protean","Drain-stack the resist war.")],behind:[I("Kaenic Rookern","Shield the AP half of their engage."),I("Randuin's Omen","Slow their wombo follow-up."),I("Force of Nature","Speed + MR to counter-engage.")],runes:{...SEJUANI_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Heartsteel","Out-scale the peel war with raw HP."),I("Jak'Sho, The Protean","Resist drain cracks the stalemate."),I("Thornmail","Anti-heal their protected carry.")],behind:[I("Spirit Visage","Sustain the attrition stalemate."),I("Knight's Vow","Guard your carry through the siege."),I("Force of Nature","MR + speed for the flank engage.")],runes:{...SEJUANI_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Heartsteel","Generic HP answers most gimmicks."),I("Kaenic Rookern","Shield the surprise burst."),I("Thornmail","Punish whatever they're doing.")],behind:[I("Spirit Visage","Sustain through the unfamiliar."),I("Randuin's Omen","Slow the gimmick down."),I("Knight's Vow","Share what you can't predict.")],runes:{...SEJUANI_JGL_DEFAULT_RUNES}},
      },
    },
    Top:{
      bans:["Fiora","Vayne","Gwen"], replacements:["Malphite","Shen","Sion"],
      role:"Grasp Lane Tank / Demolish Sieger",
      corePath:"Heartsteel  ›  Plated Steelcaps  ›  Dusk and Dawn  ›  Unending Despair",
      coreNote:"Top Sejuani swaps the jungle's Aftershock teamfight page for a Grasp lane-trading one — Q-auto trades stack Grasp and Heartsteel together, Demolish converts the tankiness into plates, and the lane becomes a farm-and-outscale exercise. Dusk and Dawn adds mid-game speed and damage to her roams, Unending Despair sustains the extended fights, and Randuin's Omen closes against the crit carries she'll be diving come late game.",
      sideItems:["Randuin's Omen","Spirit Visage","Thornmail","Kaenic Rookern","Force of Nature","Jak'Sho, The Protean"],
      data:{
        JUGGERNAUT:{ahead:[I("Heartsteel","Win the HP race in a farm lane."),I("Thornmail","Anti-heal their sustain trades."),I("Dusk and Dawn","Speed to kite their walk-up between Grasp procs.")],behind:[I("Thornmail","Cut their healing before comparing bars."),I("Plated Steelcaps","Cheap mitigation vs their autos."),I("Spirit Visage","Amplify your sustain.")],runes:{...SEJUANI_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Heartsteel","HP wall breaks their engage math."),I("Randuin's Omen","Slow the dive mid-animation."),I("Unending Despair","Sustain through the skirmish.")],behind:[I("Randuin's Omen","The active blanks their dive window."),I("Spirit Visage","Sustain repeated attempts."),I("Kaenic Rookern","Shield vs AP divers.")],runes:{...SEJUANI_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Heartsteel","Their burst math never beats your curve."),I("Thornmail","Return damage on the attempt."),I("Randuin's Omen","Slow the reset escape.")],behind:[I("Kaenic Rookern","Magic shield vs AP assassins."),I("Randuin's Omen","Slow their exit for your jungler."),I("Spirit Visage","Sustain back the chip.")],runes:{...SEJUANI_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Unending Despair","Out-sustain their duel windows."),I("Thornmail","Anti-heal their lifesteal loop."),I("Heartsteel","HP stacks while they whittle.")],behind:[I("Randuin's Omen","AS slow blunts their whole kit."),I("Thornmail","Grievous wounds vs their sustain."),I("Spirit Visage","Sustain the attrition war.")],runes:{...SEJUANI_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Kaenic Rookern","Magic shield blanks their rotation."),I("Heartsteel","HP floor under the burst."),I("Unending Despair","Heal back what lands.")],behind:[I("Kaenic Rookern","Rush the magic shield."),I("Spirit Visage","MR + healing through the poke."),I("Force of Nature","MR + speed to engage anyway.")],runes:{...SEJUANI_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Spirit Visage","Sustain war — Grasp + Second Wind feed it."),I("Kaenic Rookern","Shield resets every trade."),I("Force of Nature","Stack MR against the drain.")],behind:[I("Force of Nature","MR + speed answers the whole kit."),I("Spirit Visage","Amplify your healing."),I("Kaenic Rookern","Shield the ramp window.")],runes:{...SEJUANI_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Heartsteel","Free HP off their poke chip."),I("Force of Nature","Speed + MR crosses the poke zone."),I("Dusk and Dawn","Close fast and force the trade.")],behind:[I("Force of Nature","Required mobility through the poke."),I("Spirit Visage","Sustain back the chip."),I("Kaenic Rookern","Shield the volleys.")],runes:{...SEJUANI_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Randuin's Omen","Crit reduction breaks their kite math."),I("Dusk and Dawn","Speed runs them down."),I("Thornmail","Return damage on every auto.")],behind:[I("Randuin's Omen","The active blanks their DPS window."),I("Thornmail","Anti-heal their lifesteal."),I("Force of Nature","Speed to finally reach them.")],runes:{...SEJUANI_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Heartsteel","Their poke can't outpace your stacking."),I("Thornmail","Anti-heal the sustain package."),I("Dusk and Dawn","Speed forces fights they can't peel.")],behind:[I("Thornmail","Grievous wounds is the win condition."),I("Spirit Visage","Out-sustain their value."),I("Kaenic Rookern","Shield their poke rotation.")],runes:{...SEJUANI_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Heartsteel","A landed hook onto you costs them the fight."),I("Randuin's Omen","Slow the follow-up burst."),I("Thornmail","Punish the engage that follows.")],behind:[I("Randuin's Omen","Blank the follow-up window."),I("Spirit Visage","Sustain the repeated picks."),I("Kaenic Rookern","Shield vs AP catchers.")],runes:{...SEJUANI_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Heartsteel","Out-tank the tank mirror."),I("Thornmail","Anti-heal their sustain engage."),I("Jak'Sho, The Protean","Drain-stack the resist war.")],behind:[I("Kaenic Rookern","Shield the AP half of their engage."),I("Randuin's Omen","Slow their wombo follow-up."),I("Force of Nature","Speed + MR to counter-engage.")],runes:{...SEJUANI_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Heartsteel","Out-scale the peel war with raw HP."),I("Jak'Sho, The Protean","Resist drain cracks the stalemate."),I("Dusk and Dawn","Speed angles around their peel.")],behind:[I("Spirit Visage","Sustain the attrition stalemate."),I("Thornmail","Anti-heal their protected carry."),I("Force of Nature","MR + speed for the flank.")],runes:{...SEJUANI_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Heartsteel","Generic HP answers most gimmicks."),I("Kaenic Rookern","Shield the surprise burst."),I("Thornmail","Punish whatever they're doing.")],behind:[I("Spirit Visage","Sustain through the unfamiliar."),I("Randuin's Omen","Slow the gimmick down."),I("Force of Nature","Speed to just leave.")],runes:{...SEJUANI_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
