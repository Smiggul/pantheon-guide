import { I } from "../runeHelpers.js";

const NASUS_TOP_DEFAULT_RUNES = {
  keystone:       "Fleet Footwork",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Second Wind","Unflinching"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Fleet Footwork solves the only phase Nasus can lose: the first fifteen minutes. Heal-on-hit plus move speed lets him stack Q through lanes that should deny him, Triumph sustains the all-ins, Legend: Haste feeds the Q cooldown that decides his stacking rate, Last Stand backs the low-HP ult fights, and Second Wind + Unflinching survive the poke and kite that bullies try. Every game past 25 minutes belongs to the dog.",
};

const NASUS_JGL_DEFAULT_RUNES = {
  keystone:       "Fleet Footwork",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Cut Down"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Approach Velocity"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Jungle Nasus stacks Q off camps uncontested — no lane bully can deny a wolf pack. Fleet Footwork sustains the clear, Cut Down replaces Last Stand because his gank targets are the enemy's HP-stacked frontline, and the Inspiration line is jungle tech: Magical Footwear funds the Protoplasm Harness rush and Approach Velocity accelerates ganks onto anyone his Wither has already slowed to a crawl. The dog scales twice — Q stacks and jungle income.",
};

// ══════════════════════════════════════════════════════════════════════════
//  NASUS — Curator of the Sands: Stack Juggernaut  (A Top / A Jungle 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"nasus", display:"Nasus", dd:"Nasus",
  color:"#5a4a1a", glow:"#e0c070",
  lanes:["Top","Jungle"],
  roles:{
    Top:{
      bans:["Teemo","Vayne","Gnar"], replacements:["Garen","Darius","Sion"],
      role:"Q-Stack Scaling Juggernaut",
      corePath:"Trinity Force  ›  Ionian Boots of Lucidity  ›  Frozen Heart  ›  Spirit Visage",
      coreNote:"Nasus plays for the 400-stack future: farm, Wither whoever steps up, and let time win. Trinity Force triples down on the Q Spellblade proc — the current core over pure tank — Frozen Heart plus its haste feeds more Qs per fight, and Spirit Visage amplifies his passive lifesteal into real durability. Thornmail answers the lifesteal carries who think they can kite him. Wither is one of the strongest single-target debuffs in the game — cast it on the carry, not the tank, every single fight.",
      sideItems:["Thornmail","Sterak's Gage","Kaenic Rookern","Randuin's Omen","Force of Nature","Dead Man's Plate"],
      data:{
        JUGGERNAUT:{ahead:[I("Trinity Force","Q procs win the juggernaut slugfest."),I("Spirit Visage","Amplified lifesteal outlasts their sustain."),I("Thornmail","Anti-heal their half of the trade war.")],behind:[I("Thornmail","Cut their healing before comparing stacks."),I("Frozen Heart","AS slow blunts their DPS."),I("Sterak's Gage","Survive the all-in and keep stacking.")],runes:{...NASUS_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Frozen Heart","Their engage speed dies in your AS-slow aura."),I("Trinity Force","Punish the failed dive with Q procs."),I("Spirit Visage","Sustain through the skirmish.")],behind:[I("Randuin's Omen","Slow the dive mid-animation."),I("Sterak's Gage","Shield their burst opener."),I("Kaenic Rookern","Vs AP divers.")],runes:{...NASUS_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sterak's Gage","Their burst math never beats your HP + shield."),I("Trinity Force","One Wither + Q trade deletes them."),I("Spirit Visage","Heal back their poke chip.")],behind:[I("Kaenic Rookern","Magic shield vs AP assassins."),I("Sterak's Gage","Shield floor under the combo."),I("Randuin's Omen","Slow their reset escape.")],runes:{...NASUS_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Frozen Heart","AS slow + Wither turns duelists into minions."),I("Thornmail","Anti-heal their sustain loop."),I("Trinity Force","Q procs out-trade their extended kit.")],behind:[I("Randuin's Omen","Double AS reduction breaks their DPS."),I("Thornmail","Grievous wounds vs their lifesteal."),I("Sterak's Gage","Survive the duel and farm on.")],runes:{...NASUS_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Kaenic Rookern","Magic shield blanks their rotation."),I("Spirit Visage","MR + healing through the poke."),I("Trinity Force","Kill them in two Withered seconds.")],behind:[I("Kaenic Rookern","Rush the magic shield."),I("Force of Nature","Stack MR + speed to close."),I("Sterak's Gage","Shield the burst window.")],runes:{...NASUS_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Spirit Visage","Sustain war — your passive lifesteal wins it."),I("Kaenic Rookern","Shield resets every trade."),I("Force of Nature","Stack MR against the drain.")],behind:[I("Force of Nature","MR + speed answers the whole kit."),I("Spirit Visage","Amplify your healing."),I("Kaenic Rookern","Shield the ramp window.")],runes:{...NASUS_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Force of Nature","MR + speed crosses the poke zone — then Wither."),I("Spirit Visage","Heal back the chip with Fleet."),I("Trinity Force","One reach ends the poke game.")],behind:[I("Force of Nature","Required mobility through the poke."),I("Kaenic Rookern","Shield the volleys."),I("Spirit Visage","Sustain the farm game anyway.")],runes:{...NASUS_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Frozen Heart","AS slow + Wither deletes their DPS entirely."),I("Randuin's Omen","Crit reduction stacks the denial."),I("Dead Man's Plate","Speed to finally reach them.")],behind:[I("Randuin's Omen","The active blanks their kite window."),I("Thornmail","Anti-heal their lifesteal."),I("Force of Nature","Speed through the kiting.")],runes:{...NASUS_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Trinity Force","Their poke can't stop the stack train."),I("Thornmail","Anti-heal the sustain package."),I("Dead Man's Plate","Speed forces the fight they're avoiding.")],behind:[I("Thornmail","Grievous wounds is the win condition."),I("Spirit Visage","Out-sustain their value."),I("Force of Nature","MR + speed vs their poke.")],runes:{...NASUS_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Dead Man's Plate","Speed makes their hooks whiff."),I("Sterak's Gage","A landed hook onto Nasus is their mistake."),I("Trinity Force","Punish the whiff with a Withered trade.")],behind:[I("Mercury's Treads","Shorter lockdown on catch."),I("Sterak's Gage","Survive the caught scenario."),I("Randuin's Omen","Slow the follow-up.")],runes:{...NASUS_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Trinity Force","Q procs out-damage the tank mirror."),I("Thornmail","Anti-heal their sustain engage."),I("Spirit Visage","Sustain the extended teamfight.")],behind:[I("Kaenic Rookern","Shield the AP half of their engage."),I("Randuin's Omen","Slow their wombo follow-up."),I("Force of Nature","Speed + MR to counter-engage.")],runes:{...NASUS_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Trinity Force","Stacked Qs eventually out-damage any mitigation."),I("Frozen Heart","Win the attrition stall on your terms."),I("Thornmail","Anti-heal their protected carry.")],behind:[I("Spirit Visage","Sustain the stalemate."),I("Thornmail","Anti-heal to make progress."),I("Force of Nature","MR + speed for the flank.")],runes:{...NASUS_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Trinity Force","Stacked Q answers most gimmicks eventually."),I("Kaenic Rookern","Shield the surprise burst."),I("Spirit Visage","Sustain through the tricks.")],behind:[I("Spirit Visage","Sustain through the unfamiliar."),I("Sterak's Gage","Shield what you can't read."),I("Randuin's Omen","Slow the gimmick down.")],runes:{...NASUS_TOP_DEFAULT_RUNES}},
      },
    },
    Jungle:{
      bans:["Udyr","Briar","Kha'Zix"], replacements:["Amumu","Volibear","Malphite"],
      skillOrder:["Q","W","E"], // Jungle Nasus maxes W (Wither slow) before E; Top maxes E (global Q>E>W)
      role:"Uncontested Stack Farmer",
      corePath:"Protoplasm Harness  ›  Boots of Swiftness  ›  Iceborn Gauntlet  ›  Spirit Visage",
      coreNote:"Jungle Nasus solves his own biggest weakness — no lane bully exists in the jungle, so the Q stacks come free. Protoplasm Harness is the current jungle-item core, Iceborn Gauntlet's spellblade slow chains with Wither so gank targets simply stop moving, and Spirit Visage plus Jak'Sho tune him into an unkillable mid-game. His ganks look slow until you notice the target is Withered, Iceborn-slowed, and dead. Farm to 300 stacks by 20 minutes and side-lane the map apart.",
      sideItems:["Jak'Sho, The Protean","Thornmail","Kaenic Rookern","Sterak's Gage","Randuin's Omen","Force of Nature"],
      data:{
        JUGGERNAUT:{ahead:[I("Iceborn Gauntlet","Slow field wins the invade brawl."),I("Spirit Visage","Amplified lifesteal outlasts them."),I("Thornmail","Anti-heal their sustain.")],behind:[I("Thornmail","Cut their healing before comparing stacks."),I("Jak'Sho, The Protean","Resist ramp evens the brawl."),I("Sterak's Gage","Survive and keep farming.")],runes:{...NASUS_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Iceborn Gauntlet","Their engage dies in the slow field."),I("Jak'Sho, The Protean","Resists ramp as their dive extends."),I("Spirit Visage","Sustain the counter-skirmish.")],behind:[I("Randuin's Omen","Slow the dive mid-animation."),I("Sterak's Gage","Shield their burst opener."),I("Kaenic Rookern","Vs AP divers.")],runes:{...NASUS_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sterak's Gage","Their invade burst never beats your HP curve."),I("Iceborn Gauntlet","Slow them into Wither range — then they die."),I("Spirit Visage","Heal back the chip.")],behind:[I("Kaenic Rookern","Magic shield vs AP assassins."),I("Sterak's Gage","Shield floor under the combo."),I("Randuin's Omen","Slow their reset escape.")],runes:{...NASUS_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Iceborn Gauntlet","Slow + Wither turns duelists into camps."),I("Thornmail","Anti-heal their sustain loop."),I("Jak'Sho, The Protean","Resist ramp wins the extended 1v1.")],behind:[I("Randuin's Omen","AS reduction breaks their DPS."),I("Thornmail","Grievous wounds vs their lifesteal."),I("Sterak's Gage","Survive the invade duel.")],runes:{...NASUS_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Kaenic Rookern","Magic shield blanks their rotation."),I("Spirit Visage","MR + healing through the poke."),I("Iceborn Gauntlet","Two Withered seconds end them.")],behind:[I("Kaenic Rookern","Rush the magic shield."),I("Force of Nature","Stack MR + speed to close."),I("Sterak's Gage","Shield the burst window.")],runes:{...NASUS_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Spirit Visage","Sustain war — your lifesteal wins it."),I("Kaenic Rookern","Shield resets every skirmish."),I("Force of Nature","Stack MR against the drain.")],behind:[I("Force of Nature","MR + speed answers the whole kit."),I("Spirit Visage","Amplify your healing."),I("Kaenic Rookern","Shield the ramp window.")],runes:{...NASUS_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Force of Nature","MR + speed crosses the poke — then Wither."),I("Spirit Visage","Heal back the chip."),I("Iceborn Gauntlet","One reach ends the poke game.")],behind:[I("Force of Nature","Required mobility through the poke."),I("Kaenic Rookern","Shield the volleys."),I("Spirit Visage","Sustain the farm game anyway.")],runes:{...NASUS_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Iceborn Gauntlet","Slow + Wither deletes their DPS at objectives."),I("Randuin's Omen","Crit reduction stacks the denial."),I("Thornmail","Return damage on every auto.")],behind:[I("Randuin's Omen","The active blanks their kite window."),I("Thornmail","Anti-heal their lifesteal."),I("Force of Nature","Speed through the kiting.")],runes:{...NASUS_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Iceborn Gauntlet","Their shields can't stop the Withered walk-down."),I("Thornmail","Anti-heal the sustain package."),I("Jak'Sho, The Protean","Out-scale the shield budget.")],behind:[I("Thornmail","Grievous wounds is the win condition."),I("Spirit Visage","Out-sustain their value."),I("Force of Nature","MR + speed vs their poke.")],runes:{...NASUS_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Iceborn Gauntlet","A landed hook onto Nasus costs them the fight."),I("Sterak's Gage","Shield the follow-up burst."),I("Spirit Visage","Sustain the pick attempts.")],behind:[I("Mercury's Treads","Shorter lockdown on catch."),I("Sterak's Gage","Survive the caught scenario."),I("Randuin's Omen","Slow the follow-up.")],runes:{...NASUS_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Iceborn Gauntlet","Q procs out-damage the tank mirror at objectives."),I("Thornmail","Anti-heal their sustain engage."),I("Jak'Sho, The Protean","Resist drain wins the tank war.")],behind:[I("Kaenic Rookern","Shield the AP half of their engage."),I("Randuin's Omen","Slow their wombo follow-up."),I("Force of Nature","Speed + MR to counter-engage.")],runes:{...NASUS_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Iceborn Gauntlet","Stacked Qs out-damage any mitigation eventually."),I("Jak'Sho, The Protean","Win the attrition stall."),I("Thornmail","Anti-heal their protected carry.")],behind:[I("Spirit Visage","Sustain the stalemate."),I("Thornmail","Anti-heal to make progress."),I("Force of Nature","MR + speed for the flank.")],runes:{...NASUS_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Iceborn Gauntlet","Slow + stacks answer most gimmicks."),I("Kaenic Rookern","Shield the surprise burst."),I("Spirit Visage","Sustain through the tricks.")],behind:[I("Spirit Visage","Sustain through the unfamiliar."),I("Sterak's Gage","Shield what you can't read."),I("Randuin's Omen","Slow the gimmick down.")],runes:{...NASUS_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
