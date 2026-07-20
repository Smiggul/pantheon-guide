import { I } from "../runeHelpers.js";

const XINZHAO_JGL_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Coup de Grace"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Cosmic Insight"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror stacks fast through Xin's three-hit passive weaving and Q flurry, and his W heal converts the stacks into brawl sustain. Triumph refunds HP through the multi-takedown ganks his early tempo generates, Legend: Alacrity feeds both passive procs and Q knockup speed, Coup de Grace finishes the target his E-Q chain locks down, and the Inspiration economy line accelerates the Sundered Sky spike while Cosmic Insight brings Crescent Guard around for more duel-anyone windows.",
};

// ══════════════════════════════════════════════════════════════════════════
//  XIN ZHAO — Seneschal of Demacia: Early Duel Jungler  (S/B+ Jungle 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"xinzhao", display:"Xin Zhao", dd:"XinZhao",
  color:"#4a2a2a", glow:"#d08080",
  lanes:["Jungle"],
  roles:{
    Jungle:{
      bans:["Zac","Karthus","Nasus"], replacements:["Jarvan IV","Vi","Wukong"],
      role:"Three-Talon Duel Diver",
      corePath:"Sundered Sky  ›  Plated Steelcaps  ›  Black Cleaver  ›  Death's Dance",
      coreNote:"Xin Zhao owns the early game: his level-3 gank is among the strongest in the jungle, and Crescent Guard makes him unkillable by anyone outside the circle. Sundered Sky's crit-heal proc rides the E-Q dive opener, Black Cleaver shreds while stacking HP for the extended brawls his kit drags out, and Death's Dance converts burst into a bleed his W heals through. Guardian Angel insures the always-first-in pattern. Gank every lane before ten minutes; R turns any 2v2 into a 1v1 you win.",
      sideItems:["Guardian Angel","Sterak's Gage","Spirit Visage","Maw of Malmortius","Randuin's Omen","Spear of Shojin"],
      data:{
        JUGGERNAUT:{ahead:[I("Black Cleaver","Shred them through the extended brawl."),I("Sundered Sky","Heal-proc wins the trade war."),I("Death's Dance","Sustain conversion outlasts their damage.")],behind:[I("Death's Dance","Survive their burst and heal it back."),I("Sterak's Gage","Shield the all-in."),I("Spirit Visage","Amplify your W healing.")],runes:{...XINZHAO_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Sundered Sky","Win the engage mirror — your knockup opens first."),I("Black Cleaver","Shred through the counter-brawl."),I("Guardian Angel","Dive deeper than they dare.")],behind:[I("Guardian Angel","Insurance when both teams commit."),I("Sterak's Gage","Shield their engage burst."),I("Randuin's Omen","Slow their follow-up.")],runes:{...XINZHAO_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sundered Sky","E-Q catches them mid-jump — R blocks their exit damage."),I("Death's Dance","Their burst becomes a bleed."),I("Guardian Angel","Punish the attempt with a revive.")],behind:[I("Guardian Angel","Trade one-shots and come back up."),I("Maw of Malmortius","Vs AP assassins."),I("Sterak's Gage","Shield floor under the combo.")],runes:{...XINZHAO_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Sundered Sky","Crescent Guard turns their duel into your duel."),I("Black Cleaver","Shred their bruiser build."),I("Death's Dance","Sustain the extended 1v1.")],behind:[I("Randuin's Omen","AS slow blunts their DPS."),I("Guardian Angel","Insurance in the forced duel."),I("Maw of Malmortius","Lifeline vs AP skirmishers.")],runes:{...XINZHAO_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Sundered Sky","Knockup opener beats their rotation timing."),I("Maw of Malmortius","Lifeline under the full combo."),I("Death's Dance","Convert their burst to bleed.")],behind:[I("Maw of Malmortius","Rush the magic lifeline."),I("Mercury's Treads","Tenacity through their setup CC."),I("Guardian Angel","Survive the caught engage.")],runes:{...XINZHAO_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Sundered Sky","Dive them before the drain ramps — R blocks their poke."),I("Spirit Visage","Amplify your healing against theirs."),I("Black Cleaver","Shred them inside the flurry.")],behind:[I("Maw of Malmortius","Magic lifeline against the ramp."),I("Mercury's Treads","Tenacity vs their locks."),I("Spirit Visage","Sustain the war.")],runes:{...XINZHAO_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Sundered Sky","E erases their range — R deletes their poke mid-fight."),I("Black Cleaver","Chunk them on arrival."),I("Guardian Angel","Dive with insurance.")],behind:[I("Mercury's Treads","MR chips their poke math."),I("Maw of Malmortius","Shield the approach."),I("Guardian Angel","Covers the committed dive.")],runes:{...XINZHAO_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Sundered Sky","E-Q knockup deletes their carry — R blanks their kiting."),I("Black Cleaver","Shred their armor buys."),I("Death's Dance","Sustain through the focus fire.")],behind:[I("Randuin's Omen","Blunt the crits while you close."),I("Guardian Angel","Trade kills and revive."),I("Sterak's Gage","Survive the kite-down.")],runes:{...XINZHAO_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Black Cleaver","Shred through the shield sponge."),I("Sundered Sky","Burst through the shield window."),I("Sterak's Gage","Their poke can't remove your all-in.")],behind:[I("Black Cleaver","Keep damage real through shields."),I("Mercury's Treads","Tenacity vs their CC package."),I("Guardian Angel","Survive the protected carry.")],runes:{...XINZHAO_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Sundered Sky","Your E outranges most hooks — engage first."),I("Sterak's Gage","Shield covers the landed catch."),I("Black Cleaver","Full dive on the whiffing catcher.")],behind:[I("Mercury's Treads","Shorter lockdown on catch."),I("Guardian Angel","Survive the caught scenario."),I("Death's Dance","Bleed through the follow-up.")],runes:{...XINZHAO_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their armor for your whole team."),I("Sundered Sky","Win the engage race with the knockup."),I("Death's Dance","Sustain the extended teamfight.")],behind:[I("Sterak's Gage","Shield the counter-engage."),I("Mercury's Treads","Tenacity through the CC chain."),I("Guardian Angel","Insurance at objectives.")],runes:{...XINZHAO_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Shred the peel-tank's armor stack."),I("Sundered Sky","R kicks the peel away — the carry fights you alone."),I("Death's Dance","Sustain the long crack attempt.")],behind:[I("Black Cleaver","Required shred vs stacked armor."),I("Guardian Angel","Insurance on the forced dive."),I("Sterak's Gage","Shield the counter-burst.")],runes:{...XINZHAO_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Sundered Sky","Knockup-into-R-circle answers most gimmicks."),I("Black Cleaver","Generic shred works on everything."),I("Death's Dance","Sustain through the tricks.")],behind:[I("Mercury's Treads","Tenacity vs unfamiliar CC."),I("Guardian Angel","Survive the setup you can't read."),I("Maw of Malmortius","Vs AP specialists.")],runes:{...XINZHAO_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
