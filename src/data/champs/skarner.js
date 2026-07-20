import { I } from "../runeHelpers.js";

const SKARNER_JGL_DEFAULT_RUNES = {
  keystone:       "Grasp of the Undying",
  primary:        "Resolve",
  primaryRunes:   ["Shield Bash","Conditioning","Overgrowth"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Approach Velocity"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Grasp procs off Skarner's Q-slam auto weaving and stacks the HP his quaking kit scales from — the brackern plays extended brawls, not burst windows. Shield Bash adds damage off his W shield cycling, Conditioning scales him into the mid-game wall his engage role demands, Overgrowth compounds the HP curve, Magical Footwear funds the Heartsteel rush, and Approach Velocity is the signature tech: everyone his E slams or R drags is slowed, so the move-speed bonus is permanently active in every gank.",
};

// ══════════════════════════════════════════════════════════════════════════
//  SKARNER — Primordial Sovereign: Kidnap Engage Tank  (B tier Jungle 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"skarner", display:"Skarner", dd:"Skarner",
  color:"#3a3a2a", glow:"#c0d060",
  lanes:["Jungle"],
  roles:{
    Jungle:{
      bans:["Ambessa","Fiddlesticks","Lillia"], replacements:["Sejuani","Zac","Amumu"],
      role:"Impale Kidnap Tank",
      corePath:"Heartsteel  ›  Plated Steelcaps  ›  Unending Despair  ›  Spirit Visage",
      coreNote:"Skarner's ult is the scariest sentence in the game: Impale three people and drag them into your team. Heartsteel stacks off the extended frontline brawls his kit forces, Unending Despair sustains him through the seconds he spends holding kidnapped carries, Spirit Visage amplifies the whole sustain package, and Jak'Sho ramps the resists as fights extend. His E wall-slam stun makes every jungle corridor a gank lane. Play for R windows: a triple Impale into your team is a won teamfight, full stop.",
      sideItems:["Jak'Sho, The Protean","Thornmail","Kaenic Rookern","Randuin's Omen","Force of Nature","Knight's Vow"],
      data:{
        JUGGERNAUT:{ahead:[I("Heartsteel","Win the HP race — they can't burst the brackern."),I("Thornmail","Anti-heal their sustain brawls."),I("Unending Despair","Sustain through the extended fight.")],behind:[I("Thornmail","Cut their healing before comparing bars."),I("Randuin's Omen","Slow their walk-down onto your carries."),I("Spirit Visage","Amplify your sustain package.")],runes:{...SKARNER_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Heartsteel","HP wall breaks their engage math."),I("Randuin's Omen","Slow the dive mid-animation."),I("Unending Despair","Sustain through the skirmish they start.")],behind:[I("Randuin's Omen","The active blanks their dive window."),I("Knight's Vow","Split the dive damage off your carry."),I("Spirit Visage","Sustain repeated attempts.")],runes:{...SKARNER_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Heartsteel","Their burst math never beats your HP curve."),I("Thornmail","Return damage on the attempt."),I("Randuin's Omen","Slow the reset escape — then Impale them.")],behind:[I("Kaenic Rookern","Magic shield vs AP assassins."),I("Knight's Vow","Eat the assassination attempt for your carry."),I("Randuin's Omen","Slow their exit for the turn.")],runes:{...SKARNER_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Unending Despair","Out-sustain their duel windows."),I("Thornmail","Anti-heal cuts their lifesteal loop."),I("Heartsteel","HP stacks while they whittle.")],behind:[I("Randuin's Omen","AS slow blunts their whole kit."),I("Thornmail","Grievous wounds vs their sustain."),I("Spirit Visage","Sustain the attrition war.")],runes:{...SKARNER_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Kaenic Rookern","Magic shield blanks their rotation — then kidnap them."),I("Heartsteel","HP floor under the burst."),I("Unending Despair","Heal back what lands.")],behind:[I("Kaenic Rookern","Rush the magic shield."),I("Spirit Visage","MR + healing through the poke."),I("Force of Nature","Stack MR + speed to engage anyway.")],runes:{...SKARNER_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Spirit Visage","Sustain war — your shield-heal loop wins it."),I("Kaenic Rookern","Shield resets every engage."),I("Force of Nature","Stack MR against the drain.")],behind:[I("Force of Nature","MR + speed answers the whole kit."),I("Spirit Visage","Amplify your healing."),I("Kaenic Rookern","Shield the ramp window.")],runes:{...SKARNER_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Heartsteel","Free HP off their poke chip."),I("Force of Nature","Speed + MR crosses the poke zone — E slam ends it."),I("Kaenic Rookern","Shield resets between volleys.")],behind:[I("Force of Nature","Required mobility through the poke."),I("Spirit Visage","Sustain back the chip."),I("Knight's Vow","Guard the carry they're sieging.")],runes:{...SKARNER_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Randuin's Omen","Crit reduction breaks their DPS math."),I("Thornmail","Return damage on every auto."),I("Heartsteel","Out-HP their shred curve — then Impale.")],behind:[I("Randuin's Omen","The active blanks their focus window."),I("Knight's Vow","Split their damage on your carry."),I("Thornmail","Anti-heal their lifesteal.")],runes:{...SKARNER_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Heartsteel","Their poke can't outpace your stacking."),I("Thornmail","Anti-heal the whole sustain lane."),I("Jak'Sho, The Protean","Drain tank through the shield war.")],behind:[I("Thornmail","Grievous wounds is the win condition."),I("Spirit Visage","Out-sustain their value."),I("Knight's Vow","Protect your carry through the poke.")],runes:{...SKARNER_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Heartsteel","Your R is the better catch — three at once."),I("Randuin's Omen","Slow the follow-up burst."),I("Thornmail","Punish the engage that follows.")],behind:[I("Knight's Vow","Save the caught carry with shared damage."),I("Randuin's Omen","Blank the follow-up window."),I("Spirit Visage","Sustain the repeated picks.")],runes:{...SKARNER_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Heartsteel","Out-tank the tank mirror — Impale wins the wombo war."),I("Thornmail","Anti-heal their sustain engage."),I("Jak'Sho, The Protean","Drain-stack the resist war.")],behind:[I("Kaenic Rookern","Shield the AP half of their engage."),I("Randuin's Omen","Slow their wombo follow-up."),I("Force of Nature","Speed + MR to counter-engage.")],runes:{...SKARNER_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Heartsteel","Out-scale the peel war — R drags the carry out of it."),I("Jak'Sho, The Protean","Resist drain cracks the stalemate."),I("Thornmail","Anti-heal their protected carry.")],behind:[I("Spirit Visage","Sustain the attrition stalemate."),I("Knight's Vow","Guard your carry through the siege."),I("Force of Nature","MR + speed for the flank Impale.")],runes:{...SKARNER_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Heartsteel","Generic HP answers most gimmicks."),I("Kaenic Rookern","Shield the surprise burst."),I("Thornmail","Punish whatever they're doing.")],behind:[I("Spirit Visage","Sustain through the unfamiliar."),I("Randuin's Omen","Slow the gimmick down."),I("Knight's Vow","Share what you can't predict.")],runes:{...SKARNER_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
