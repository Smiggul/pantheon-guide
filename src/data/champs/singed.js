import { I } from "../runeHelpers.js";

const SINGED_TOP_DEFAULT_RUNES = {
  keystone:       "Deathfire Touch",
  primary:        "Sorcery",
  primaryRunes:   ["Nimbus Cloak","Celerity","Scorch"],
  secondary:      "Precision",
  secondaryRunes: ["Triumph","Last Stand"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Deathfire Touch layers onto the poison trail — anyone chasing Singed is already burning twice. Nimbus Cloak turns every Ghost and Flash into a proxy escape or fling window, Celerity feeds the move-speed identity his entire kit multiplies, Scorch stacks with the gas in early trades, Triumph refunds HP through the chaos-fights he starts in their jungle, and Last Stand rewards the perpetually-low HP state that proxy Singed calls a normal Tuesday.",
};

// ══════════════════════════════════════════════════════════════════════════
//  SINGED — Mad Chemist: Proxy Poison Trailblazer  (S tier Top 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"singed", display:"Singed", dd:"Singed",
  color:"#4a5a20", glow:"#c0e050",
  lanes:["Top"],
  roles:{
    Top:{
      bans:["Teemo","Quinn","Cassiopeia"], replacements:["Dr. Mundo","Mordekaiser","Rumble"],
      role:"Proxy Trail Chaos Engine",
      corePath:"Boots of Swiftness  ›  Liandry's Torment  ›  Rylai's Crystal Scepter  ›  Dead Man's Plate",
      coreNote:"Singed is rank-6-tier on real data because nobody wins the game he's playing: proxy the wave behind their tower, fling whoever chases, and let the trail do the arguing. Liandry's Torment stacks a second burn on the gas, Rylai's Crystal Scepter makes the trail a slow zone nothing escapes, Dead Man's Plate feeds the speed engine, and Force of Nature turns their poke into his stats. Chase Singed and you lose; ignore Singed and you lose slower. There is no third option.",
      sideItems:["Force of Nature","Spirit Visage","Rabadon's Deathcap","Thornmail","Kaenic Rookern","Randuin's Omen"],
      data:{
        JUGGERNAUT:{ahead:[I("Rylai's Crystal Scepter","They chase, they slow, they die in the gas."),I("Liandry's Torment","Burn scales off their HP bar."),I("Dead Man's Plate","Speed they can never match.")],behind:[I("Rylai's Crystal Scepter","Kite the walk-down with trail slows."),I("Force of Nature","MR + speed to disengage."),I("Thornmail","Anti-heal their sustain.")],runes:{...SINGED_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rylai's Crystal Scepter","Fling the diver into the trail — slow seals it."),I("Liandry's Torment","Burn them through the whole engage."),I("Dead Man's Plate","Out-speed their commitment.")],behind:[I("Force of Nature","Speed + MR to escape the dive."),I("Randuin's Omen","Slow the engage mid-animation."),I("Spirit Visage","Sustain repeated attempts.")],runes:{...SINGED_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Rylai's Crystal Scepter","Slowed assassins marinate in the gas."),I("Dead Man's Plate","Too fast to assassinate."),I("Liandry's Torment","Punish every entry.")],behind:[I("Kaenic Rookern","Magic shield vs AP assassins."),I("Force of Nature","Speed to just leave."),I("Randuin's Omen","Slow their reset escape.")],runes:{...SINGED_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rylai's Crystal Scepter","The duel happens in your gas or not at all."),I("Liandry's Torment","Burn stacks while they chase."),I("Spirit Visage","Out-sustain their windows.")],behind:[I("Randuin's Omen","AS slow blunts their kit."),I("Thornmail","Anti-heal their lifesteal."),I("Force of Nature","Speed to deny the duel entirely.")],runes:{...SINGED_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Kaenic Rookern","Magic shield blanks the rotation — fling the caster."),I("Rylai's Crystal Scepter","Slow them into fling range."),I("Liandry's Torment","Burn the cooldown gap.")],behind:[I("Kaenic Rookern","Rush the magic shield."),I("Force of Nature","Stack MR + speed."),I("Spirit Visage","Sustain the poke war.")],runes:{...SINGED_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Force of Nature","Their poke feeds your speed — then they're in the gas."),I("Spirit Visage","Sustain war favors the chemist."),I("Liandry's Torment","Your burn out-ramps theirs.")],behind:[I("Force of Nature","MR + speed answers the whole kit."),I("Kaenic Rookern","Shield the ramp."),I("Spirit Visage","Amplify your sustain.")],runes:{...SINGED_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Dead Man's Plate","Speed closes the poke zone — fling ends the argument."),I("Force of Nature","Their poke literally speeds you up."),I("Rylai's Crystal Scepter","Slow their reposition.")],behind:[I("Force of Nature","Required mobility through the poke."),I("Kaenic Rookern","Shield the volleys."),I("Spirit Visage","Sustain back the chip.")],runes:{...SINGED_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Dead Man's Plate","Run the ranged top down — fling into tower."),I("Rylai's Crystal Scepter","Slowed kiters die in the trail."),I("Randuin's Omen","Blunt the crits while you close.")],behind:[I("Randuin's Omen","The active blanks their DPS window."),I("Force of Nature","Speed to finally reach them."),I("Thornmail","Anti-heal their lifesteal.")],runes:{...SINGED_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Liandry's Torment","The trail out-lasts any shield budget."),I("Rylai's Crystal Scepter","Slow through the peel."),I("Dead Man's Plate","Speed past the disengage.")],behind:[I("Thornmail","Anti-heal the sustain package."),I("Force of Nature","MR + speed vs their poke."),I("Spirit Visage","Out-sustain their value.")],runes:{...SINGED_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Dead Man's Plate","Too fast to hook — fling the catcher who tries."),I("Rylai's Crystal Scepter","Slow their follow-up."),I("Liandry's Torment","Burn the failed pick.")],behind:[I("Force of Nature","Speed makes their hooks pointless."),I("Kaenic Rookern","Shield vs AP catchers."),I("Randuin's Omen","Slow the follow-up burst.")],runes:{...SINGED_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Rylai's Crystal Scepter","Gas the choke their engage must cross."),I("Liandry's Torment","Burn melts the engage line."),I("Force of Nature","Speed around their wombo.")],behind:[I("Force of Nature","Speed + MR to counter-engage or leave."),I("Kaenic Rookern","Shield the AP half."),I("Randuin's Omen","Slow their follow-up wave.")],runes:{...SINGED_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Liandry's Torment","Burn through the peel-tank's HP."),I("Rabadon's Deathcap","Scale the gas past their mitigation."),I("Rylai's Crystal Scepter","Slow cracks the stall.")],behind:[I("Spirit Visage","Sustain the attrition stalemate."),I("Thornmail","Anti-heal their protected carry."),I("Force of Nature","Speed for the proxy flank.")],runes:{...SINGED_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Rylai's Crystal Scepter","The trail out-gimmicks most gimmicks."),I("Liandry's Torment","Burn beats trick durability."),I("Dead Man's Plate","Speed answers everything else.")],behind:[I("Kaenic Rookern","Shield the surprise burst."),I("Force of Nature","Speed to just leave."),I("Spirit Visage","Sustain through the unfamiliar.")],runes:{...SINGED_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
