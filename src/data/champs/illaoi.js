import { I } from "../runeHelpers.js";

const ILLAOI_TOP_DEFAULT_RUNES = {
  keystone:       "Grasp of the Undying",
  primary:        "Resolve",
  primaryRunes:   ["Demolish","Bone Plating","Overgrowth"],
  secondary:      "Precision",
  secondaryRunes: ["Presence of Mind","Last Stand"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Grasp procs off Illaoi's tentacle-empowered trades and stacks the HP her drain-heavy brawls convert into damage windows. Demolish turns her zone-controlled lanes into plate gold, Bone Plating survives the trades before the tentacle nest matures, Overgrowth compounds the scaling, Presence of Mind funds the E-spam her whole lane pattern fishes with, and Last Stand backs the low-HP Leap of Faith teamfights where a surrounded Illaoi is the most dangerous champion in the game.",
};

// ══════════════════════════════════════════════════════════════════════════
//  ILLAOI — Kraken Priestess: Tentacle Zone Juggernaut  (S tier Top 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"illaoi", display:"Illaoi", dd:"Illaoi",
  color:"#3a4a3a", glow:"#80d090",
  lanes:["Top"],
  altBuilds:{
    Top:[{
      label:"OP 26.16 ALT", tag:"alt",
      corePath:"Black Cleaver  ›  Plated Steelcaps  ›  Sterak's Gage  ›  Spirit Visage",
      coreNote:"Skill-Capped 26.16 OP line: rush Black Cleaver, then slot Sterak's Gage SECOND (most Illaoi go Iceborn 2nd). After the 26.16 Black Cleaver +5 AD and Sterak's buffs, Cleaver→Sterak's is the higher win-probability spike — and even before the buffs Sterak's was already Illaoi's best win-rate second item over Iceborn. Best when the enemy team isn't stacking physical damage. Runes: Grasp in melee matchups (its health scaling loves the two big HP items), Conqueror into ranged or tankier comps.",
      runes:{...ILLAOI_TOP_DEFAULT_RUNES},
      sideItems:["Iceborn Gauntlet","Spirit Visage","Dead Man's Plate","Thornmail","Force of Nature"],
    }],
  },
  roles:{
    Top:{
      bans:["Vayne","Quinn","Gnar"], replacements:["Darius","Mordekaiser","Garen"],
      role:"Soul-Rip Zone Juggernaut",
      corePath:"Black Cleaver  ›  Plated Steelcaps  ›  Iceborn Gauntlet  ›  Sterak's Gage",
      coreNote:"Illaoi owns the ground she stands on: tentacles turn her lane into a minefield, E rips out souls to fight beside her, and Leap of Faith punishes anyone who groups on her. Black Cleaver shreds through the tentacle slam spam, Iceborn Gauntlet's slow keeps ripped souls' owners in the zone, Sterak's covers the all-in her R invites, and Spirit Visage amplifies the tentacle healing. Never chase her into the nest — and as her, never leave it. The god goes where the tentacles grow.",
      sideItems:["Spirit Visage","Thornmail","Maw of Malmortius","Dead Man's Plate","Unending Despair","Randuin's Omen"],
      data:{
        JUGGERNAUT:{ahead:[I("Black Cleaver","Shred them through the tentacle brawl."),I("Spirit Visage","Tentacle healing wins the sustain war."),I("Iceborn Gauntlet","Slow keeps them in the nest.")],behind:[I("Thornmail","Anti-heal their sustain trades."),I("Sterak's Gage","Survive the all-in and R the turn."),I("Spirit Visage","Amplify the tentacle heals.")],runes:{...ILLAOI_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Sterak's Gage","Their dive lands in the nest — R makes it a funeral."),I("Iceborn Gauntlet","Slow the dive mid-animation."),I("Black Cleaver","Shred the extended brawl.")],behind:[I("Sterak's Gage","Shield their burst opener."),I("Randuin's Omen","Slow their follow-up."),I("Maw of Malmortius","Vs AP divers.")],runes:{...ILLAOI_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sterak's Gage","Their burst math dies to your HP + R zone."),I("Iceborn Gauntlet","Slowed assassins eat every tentacle."),I("Black Cleaver","Chunk them in the failed window.")],behind:[I("Maw of Malmortius","Vs AP assassins."),I("Sterak's Gage","Shield floor under the combo."),I("Randuin's Omen","Slow their reset escape.")],runes:{...ILLAOI_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Black Cleaver","Shred them — the nest fights beside you."),I("Spirit Visage","Out-sustain their duel windows."),I("Iceborn Gauntlet","Slow denies their reset spacing.")],behind:[I("Randuin's Omen","AS slow blunts their DPS."),I("Thornmail","Anti-heal their lifesteal."),I("Sterak's Gage","Survive the duel in your zone.")],runes:{...ILLAOI_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Maw of Malmortius","Lifeline under their rotation — the soul fights on."),I("Sterak's Gage","Double shield floor."),I("Black Cleaver","Kill them in the cooldown gap.")],behind:[I("Maw of Malmortius","Rush the magic lifeline."),I("Mercury's Treads","Tenacity through the setup CC."),I("Spirit Visage","Sustain the poke war.")],runes:{...ILLAOI_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Spirit Visage","Sustain war — tentacle healing wins it."),I("Maw of Malmortius","Lifeline vs the ramp."),I("Black Cleaver","Shred them inside the nest.")],behind:[I("Maw of Malmortius","Magic lifeline against the drain."),I("Spirit Visage","Amplify your healing."),I("Mercury's Treads","Tenacity vs their locks.")],runes:{...ILLAOI_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Dead Man's Plate","Speed crosses the poke — E rips them into the nest."),I("Black Cleaver","Chunk them on arrival."),I("Sterak's Gage","Shield the approach chip.")],behind:[I("Mercury's Treads","MR chips their poke math."),I("Maw of Malmortius","Shield the approach."),I("Dead Man's Plate","Required closing speed.")],runes:{...ILLAOI_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Dead Man's Plate","Run down the ranged top — E makes their soul stay."),I("Black Cleaver","Shred their armor buys."),I("Randuin's Omen","Blunt the crits while you close.")],behind:[I("Randuin's Omen","The active blanks their DPS window."),I("Thornmail","Anti-heal their lifesteal."),I("Dead Man's Plate","Speed to finally reach them.")],runes:{...ILLAOI_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Black Cleaver","Shred through the shield sponge."),I("Spirit Visage","Out-sustain their value package."),I("Sterak's Gage","Their poke can't remove your all-in.")],behind:[I("Black Cleaver","Keep damage real through shields."),I("Thornmail","Anti-heal the sustain lane."),I("Mercury's Treads","Tenacity vs their CC.")],runes:{...ILLAOI_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Sterak's Gage","A hook into the nest is suicide — punish it."),I("Iceborn Gauntlet","Slow the follow-up."),I("Black Cleaver","Full slam combo on the whiff.")],behind:[I("Mercury's Treads","Shorter lockdown on catch."),I("Sterak's Gage","Survive the caught scenario."),I("Randuin's Omen","Slow the follow-up burst.")],runes:{...ILLAOI_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their armor — R their whole engage line."),I("Spirit Visage","Sustain the extended teamfight."),I("Iceborn Gauntlet","Slow their follow-up wave.")],behind:[I("Sterak's Gage","Shield the wombo."),I("Mercury's Treads","Tenacity through the CC chain."),I("Thornmail","Anti-heal their sustain engage.")],runes:{...ILLAOI_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Shred the peel-tank's armor stack."),I("Spirit Visage","Out-sustain the stall — tentacles farm it."),I("Unending Despair","Sustain cracks the stalemate.")],behind:[I("Black Cleaver","Required shred vs stacked armor."),I("Thornmail","Anti-heal their protected carry."),I("Sterak's Gage","Shield the counter-engage.")],runes:{...ILLAOI_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Black Cleaver","The nest answers most gimmicks."),I("Sterak's Gage","Shield the surprise burst."),I("Spirit Visage","Sustain through the tricks.")],behind:[I("Mercury's Treads","Tenacity vs unfamiliar CC."),I("Sterak's Gage","Shield what you can't read."),I("Maw of Malmortius","Vs AP specialists.")],runes:{...ILLAOI_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
