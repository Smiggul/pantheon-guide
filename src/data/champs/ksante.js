import { I } from "../runeHelpers.js";

const KSANTE_TOP_DEFAULT_RUNES = {
  keystone:       "Grasp of the Undying",
  primary:        "Resolve",
  primaryRunes:   ["Shield Bash","Second Wind","Overgrowth"],
  secondary:      "Inspiration",
  secondaryRunes: ["Biscuit Delivery","Cosmic Insight"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Grasp fits K'Sante's Q-poke trading rhythm and stacks the HP his whole kit multiplies — his Ntofos scale off resists and health both. Shield Bash adds damage on every W charge and passive shield window, Second Wind sustains the ranged-top and poke matchups that are his hardest lanes, Overgrowth compounds the HP scaling, and the Inspiration line (Biscuit Delivery, Cosmic Insight) smooths his famously rough early laning into the All Out monster he becomes at three items.",
};

// ══════════════════════════════════════════════════════════════════════════
//  K'SANTE — Pride of Nazumah: Tank-Skirmisher Hybrid  (Top 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"ksante", display:"K'Sante", dd:"KSante",
  color:"#5a4a2a", glow:"#f0d080",
  lanes:["Top"],
  roles:{
    Top:{
      bans:["Fiora","Gwen","Vayne"], replacements:["Malphite","Shen","Poppy"],
      role:"All Out Tank-Skirmisher",
      corePath:"Iceborn Gauntlet  ›  Plated Steelcaps  ›  Unending Despair  ›  Jak'Sho, The Protean",
      coreNote:"K'Sante is two champions on a toggle: a wall of a tank until R, then a resist-shedding skirmisher who executes in All Out. This build feeds both modes — Iceborn Gauntlet's spellblade slow rides his Q spam and sticks targets for the W charge, Unending Despair sustains the front-line minutes, and Jak'Sho plus Thornmail stack the resists his Ntofos convert into damage. The trick is patience: tank until their carry misposition costs them, then All Out turns your defense stats into a death sentence.",
      sideItems:["Thornmail","Spirit Visage","Kaenic Rookern","Randuin's Omen","Sterak's Gage","Force of Nature"],
      data:{
        JUGGERNAUT:{ahead:[I("Iceborn Gauntlet","Slow field keeps them off you between Q pokes."),I("Thornmail","Anti-heal their sustain trades."),I("Jak'Sho, The Protean","Resist drain wins the long brawl.")],behind:[I("Thornmail","Cut their healing before comparing bars."),I("Plated Steelcaps","Cheap mitigation vs their autos."),I("Spirit Visage","Amplify your sustain package.")],runes:{...KSANTE_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Iceborn Gauntlet","Slow the dive mid-animation — W knocks them back out."),I("Unending Despair","Sustain through the skirmish they start."),I("Jak'Sho, The Protean","Resists ramp as the dive extends.")],behind:[I("Randuin's Omen","The active blanks their dive window."),I("Spirit Visage","Sustain repeated attempts."),I("Kaenic Rookern","Shield vs AP divers.")],runes:{...KSANTE_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Iceborn Gauntlet","Slowed assassins can't escape the W stun window."),I("Thornmail","Return damage on the attempt."),I("Unending Despair","Heal back their failed burst.")],behind:[I("Kaenic Rookern","Magic shield vs AP assassins."),I("Randuin's Omen","Slow the reset escape."),I("Spirit Visage","Sustain back the chip.")],runes:{...KSANTE_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Jak'Sho, The Protean","Resist ramp wins the extended duel — then All Out ends it."),I("Thornmail","Anti-heal their lifesteal loop."),I("Iceborn Gauntlet","Slow field denies their reset spacing.")],behind:[I("Randuin's Omen","AS slow blunts their whole kit."),I("Thornmail","Grievous wounds vs their sustain."),I("Sterak's Gage","Survive the All Out you're forced into.")],runes:{...KSANTE_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Kaenic Rookern","Magic shield blanks their rotation."),I("Iceborn Gauntlet","Slow them into W range after they blow the combo."),I("Unending Despair","Heal back what lands.")],behind:[I("Kaenic Rookern","Rush the magic shield."),I("Spirit Visage","MR + healing through the poke."),I("Force of Nature","MR + speed to close.")],runes:{...KSANTE_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Spirit Visage","Sustain war — Second Wind feeds it."),I("Kaenic Rookern","Shield resets every trade."),I("Force of Nature","Stack MR against the drain.")],behind:[I("Force of Nature","MR + speed answers the whole kit."),I("Spirit Visage","Amplify your healing."),I("Kaenic Rookern","Shield the ramp window.")],runes:{...KSANTE_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Iceborn Gauntlet","One landed Q slow and you're on them."),I("Unending Despair","Heal off their poke chip."),I("Kaenic Rookern","Shield resets between volleys.")],behind:[I("Force of Nature","Required mobility through the poke."),I("Spirit Visage","Sustain back the chip."),I("Kaenic Rookern","Shield the approach.")],runes:{...KSANTE_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Iceborn Gauntlet","Spellblade slow ends their kiting."),I("Randuin's Omen","Crit reduction breaks their DPS math."),I("Thornmail","Return damage on every auto.")],behind:[I("Randuin's Omen","The active blanks their focus window."),I("Thornmail","Anti-heal their lifesteal."),I("Force of Nature","Speed to finally reach them.")],runes:{...KSANTE_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Iceborn Gauntlet","Slow through the peel to the carry."),I("Thornmail","Anti-heal the sustain package."),I("Jak'Sho, The Protean","Out-scale the shield budget with resists.")],behind:[I("Thornmail","Grievous wounds is the win condition."),I("Spirit Visage","Out-sustain their value."),I("Kaenic Rookern","Shield their poke rotation.")],runes:{...KSANTE_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Iceborn Gauntlet","A landed hook onto K'Sante is their mistake — W answers."),I("Unending Despair","Sustain the follow-up burst."),I("Thornmail","Punish the engage that follows.")],behind:[I("Randuin's Omen","Slow the follow-up window."),I("Spirit Visage","Sustain the repeated picks."),I("Kaenic Rookern","Shield vs AP catchers.")],runes:{...KSANTE_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Jak'Sho, The Protean","Win the resist war, then All Out converts it to damage."),I("Thornmail","Anti-heal their sustain engage."),I("Iceborn Gauntlet","Slow their follow-up wave.")],behind:[I("Kaenic Rookern","Shield the AP half of their engage."),I("Randuin's Omen","Slow their wombo follow-up."),I("Force of Nature","Speed + MR to counter-engage.")],runes:{...KSANTE_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Jak'Sho, The Protean","Out-resist the peel war — All Out breaks the stalemate."),I("Iceborn Gauntlet","Slow angles around their peel."),I("Thornmail","Anti-heal their protected carry.")],behind:[I("Spirit Visage","Sustain the attrition stalemate."),I("Thornmail","Anti-heal to make progress."),I("Force of Nature","MR + speed for the flank.")],runes:{...KSANTE_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Iceborn Gauntlet","Slow field answers most gimmicks."),I("Kaenic Rookern","Shield the surprise burst."),I("Jak'Sho, The Protean","Generic resists cover unknown damage.")],behind:[I("Spirit Visage","Sustain through the unfamiliar."),I("Randuin's Omen","Slow the gimmick down."),I("Sterak's Gage","Shield what you can't read.")],runes:{...KSANTE_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
