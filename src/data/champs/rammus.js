import { I } from "../runeHelpers.js";

const RAMMUS_JGL_DEFAULT_RUNES = {
  keystone:       "Aftershock",
  primary:        "Resolve",
  primaryRunes:   ["Font of Life","Conditioning","Unflinching"],
  secondary:      "Precision",
  secondaryRunes: ["Triumph","Legend: Alacrity"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Aftershock fires on every Powerball knockup and taunt — Rammus engages constantly, and the resist burst covers the taunt duration where he soaks a full team's damage. Font of Life converts the perma-CC into team healing, Conditioning multiplies with W's armor steroid for absurd mid-game resists, Unflinching keeps the ball rolling through slows, and the Precision splash (Triumph, Legend: Alacrity) feeds the thornmail-auto pattern his taunt forces enemies to feed.",
};

// ══════════════════════════════════════════════════════════════════════════
//  RAMMUS — Armordillo: Taunt Counter-Tank  (S/A tier Jungle 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"rammus", display:"Rammus", dd:"Rammus",
  color:"#5a4a30", glow:"#e0b070",
  lanes:["Jungle"],
  roles:{
    Jungle:{
      bans:["Lillia","Karthus","Fiddlesticks"], replacements:["Malphite","Sejuani","Amumu"],
      role:"Powerball Taunt Counter-Tank",
      corePath:"Thornmail  ›  Plated Steelcaps  ›  Sunfire Aegis  ›  Jak'Sho, The Protean",
      coreNote:"Rammus is the hardest counter-pick in the jungle: into AD comps his W plus taunt literally makes enemies kill themselves. Thornmail rush turns every taunted auto into return damage with anti-heal attached, Sunfire Aegis burns through the taunt duration, Jak'Sho ramps the resists his W multiplies, and Protoplasm Harness closes the modern tank curve. Powerball is both his gank and his escape — the ball is rolling somewhere every twenty seconds, and wherever it stops, someone is airborne. Draft him into crit ADCs and watch them uninstall. OK?",
      sideItems:["Protoplasm Harness","Randuin's Omen","Spirit Visage","Kaenic Rookern","Force of Nature","Unending Despair"],
      data:{
        JUGGERNAUT:{ahead:[I("Thornmail","Taunted juggernauts beat themselves to death."),I("Sunfire Aegis","Burn through the forced trade."),I("Jak'Sho, The Protean","Resist ramp wins the brawl.")],behind:[I("Thornmail","Anti-heal + return damage evens the trade."),I("Randuin's Omen","Slow their walk-down."),I("Spirit Visage","Amplify Font of Life sustain.")],runes:{...RAMMUS_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Thornmail","Taunt the diver — their combo hits themselves."),I("Randuin's Omen","Slow the dive mid-animation."),I("Sunfire Aegis","Burn them through the attempt.")],behind:[I("Randuin's Omen","The active blanks their dive window."),I("Kaenic Rookern","Shield vs AP divers."),I("Spirit Visage","Sustain repeated attempts.")],runes:{...RAMMUS_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Thornmail","AD assassins die to their own combo — taunt and watch."),I("Jak'Sho, The Protean","Resist ramp raises their kill bar."),I("Randuin's Omen","Slow the reset escape.")],behind:[I("Kaenic Rookern","Magic shield vs AP assassins."),I("Randuin's Omen","Slow their exit for the turn."),I("Unending Despair","Heal back the chip.")],runes:{...RAMMUS_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Thornmail","Taunt + returns beat any auto-based duelist."),I("Randuin's Omen","AS slow doubles the denial."),I("Sunfire Aegis","Burn the extended duel.")],behind:[I("Randuin's Omen","Break their DPS math."),I("Thornmail","Grievous wounds vs their lifesteal."),I("Spirit Visage","Sustain the attrition.")],runes:{...RAMMUS_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Kaenic Rookern","Magic shield blanks the rotation — taunt the aftermath."),I("Sunfire Aegis","Burn while they wait on cooldowns."),I("Jak'Sho, The Protean","Ramp resists across the fight.")],behind:[I("Kaenic Rookern","Rush the magic shield — AP is your hard matchup."),I("Spirit Visage","MR + sustain through the poke."),I("Force of Nature","Stack MR + speed.")],runes:{...RAMMUS_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Kaenic Rookern","Shield resets every engage window."),I("Spirit Visage","Font of Life sustains the war."),I("Force of Nature","Stack MR against the drain.")],behind:[I("Force of Nature","MR + speed answers the whole kit."),I("Kaenic Rookern","Shield the ramp."),I("Spirit Visage","Amplify your sustain.")],runes:{...RAMMUS_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Force of Nature","Powerball + MR crosses the poke zone."),I("Sunfire Aegis","Burn them once you arrive."),I("Kaenic Rookern","Shield resets between volleys.")],behind:[I("Force of Nature","Required mobility through the poke."),I("Kaenic Rookern","Shield the approach."),I("Spirit Visage","Sustain back the chip.")],runes:{...RAMMUS_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Thornmail","The dream matchup — taunted ADCs solo themselves."),I("Randuin's Omen","Crit reduction stacks the humiliation."),I("Jak'Sho, The Protean","Resists past their pen curve.")],behind:[I("Thornmail","Still the answer — anti-heal their lifesteal."),I("Randuin's Omen","Blank their DPS window."),I("Sunfire Aegis","Burn while they auto you.")],runes:{...RAMMUS_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Thornmail","Anti-heal the sustain package — taunt through shields."),I("Sunfire Aegis","Burn outlasts the shield budget."),I("Jak'Sho, The Protean","Out-scale the value war.")],behind:[I("Thornmail","Grievous wounds is the win condition."),I("Spirit Visage","Out-sustain their value."),I("Randuin's Omen","Slow their protected carry.")],runes:{...RAMMUS_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Thornmail","A hook onto Rammus is a self-taunt — punish it."),I("Randuin's Omen","Slow the follow-up burst."),I("Sunfire Aegis","Burn the engage that follows.")],behind:[I("Randuin's Omen","Blank the follow-up window."),I("Kaenic Rookern","Shield vs AP catchers."),I("Spirit Visage","Sustain the repeated picks.")],runes:{...RAMMUS_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Thornmail","Anti-heal their sustain engage — out-taunt the wombo."),I("Jak'Sho, The Protean","Resist drain wins the tank war."),I("Sunfire Aegis","Burn stacks in the extended fight.")],behind:[I("Kaenic Rookern","Shield the AP half of their engage."),I("Randuin's Omen","Slow their wombo follow-up."),I("Force of Nature","Speed + MR to counter-engage.")],runes:{...RAMMUS_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Sunfire Aegis","Burn cracks the peel stalemate slowly."),I("Jak'Sho, The Protean","Out-resist the resist war."),I("Thornmail","Anti-heal their protected carry.")],behind:[I("Spirit Visage","Sustain the attrition stalemate."),I("Thornmail","Anti-heal to make progress."),I("Force of Nature","Powerball flank angles.")],runes:{...RAMMUS_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Thornmail","Most gimmicks still auto-attack — taunt punishes all of them."),I("Kaenic Rookern","Shield the surprise burst."),I("Sunfire Aegis","Burn whatever they're doing.")],behind:[I("Kaenic Rookern","Shield what you can't predict."),I("Randuin's Omen","Slow the gimmick down."),I("Force of Nature","Speed to just roll away.")],runes:{...RAMMUS_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
