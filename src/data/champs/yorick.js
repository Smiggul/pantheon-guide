import { I } from "../runeHelpers.js";

const YORICK_TOP_DEFAULT_RUNES = {
  keystone:       "Grasp of the Undying",
  primary:        "Resolve",
  primaryRunes:   ["Demolish","Bone Plating","Overgrowth"],
  secondary:      "Precision",
  secondaryRunes: ["Presence of Mind","Legend: Bloodline"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Grasp of the Undying procs off Yorick's auto-attack-heavy split-push trades and grows permanent HP, matching his win condition of outlasting the lane before Maiden of the Mist snowballs. Demolish adds tower pressure between skirmishes; Bone Plating and Overgrowth keep him alive through poke. Presence of Mind solves the mana strain of constant Q/W casts; Legend: Bloodline gives sustain to keep pushing waves and summoning ghouls.",
};

// ══════════════════════════════════════════════════════════════════════════
//  YORICK — Juggernaut / Split-Push Summoner
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"yorick", display:"Yorick", dd:"Yorick",
  color:"#3a4a3a", glow:"#6b8a6b",
  lanes:["Top","Jungle"],
  altBuilds:{
    Top:[{
      label:"OP 26.16 ALT", tag:"alt",
      corePath:"Black Cleaver  ›  Plated Steelcaps  ›  Spear of Shojin  ›  Sterak's Gage",
      coreNote:"Skill-Capped 26.16 OP line: Black Cleaver rush (his best-performing rush item in recent patches, now buffed) → Spear of Shojin → Sterak's Gage. Yorick benefits from BOTH the Cleaver and Sterak's 26.16 buffs, so his power spikes hard. Best into comps stacking armor — Cleaver's % armor shred scales with their stacking. Conqueror keystone into tank tops. Into squishier comps you can still rush Trinity Force instead (both are now good rushes).",
      runes:{...YORICK_TOP_DEFAULT_RUNES},
      sideItems:["Trinity Force","Death's Dance","Thornmail","Plated Steelcaps","Spirit Visage"],
    }],
  },
  roles:{
    Top:{
      bans:["Fiora","Jayce","Quinn"], replacements:["Darius","Sett","Volibear"],
      role:"Juggernaut / Split-Push Summoner",
      corePath:"Plated Steelcaps  ›  Trinity Force  ›  Black Cleaver  ›  Spear of Shojin",
      coreNote:"Yorick plays for relentless split-push pressure — Mourning Mist marks stack toward Awakening's slow, ghouls zone the sidelane, and Maiden of the Mist demands a response. Plated Steelcaps and Trinity Force add early tankiness and damage; Black Cleaver shreds armor for his auto-heavy trades; Spear of Shojin's ability haste keeps ghouls and Maiden summons coming.",
      sideItems:["Sterak's Gage","Death's Dance","Force of Nature","Thornmail","Guardian Angel","Mercury's Treads"],
      data:{
        JUGGERNAUT:{ahead:[I("Black Cleaver","Shred their armor stack while ghouls chip away."),I("Trinity Force","Proc damage wins the trade outright."),I("Death's Dance","Outlast their sustain with your own.")],behind:[I("Plated Steelcaps","Reduces auto damage from their all-in."),I("Sterak's Gage","Shield when the walk-down connects."),I("Thornmail","GW cuts their sustain.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Trinity Force","Proc burst punishes their dive."),I("Black Cleaver","Shred through their engage burst."),I("Sterak's Gage","Shield through the all-in.")],behind:[I("Sterak's Gage","Shield absorbs the engage burst."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Mercury's Treads","Shorter CC on their engage.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sterak's Gage","Shield eats the opener while the Maiden covers you."),I("Death's Dance","Convert their burst into sustain you outlast."),I("Trinity Force","Punish their commit with proc damage.")],behind:[I("Sterak's Gage","Non-negotiable — survive the burst window."),I("Force of Nature","AP assassins — MR stack."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Black Cleaver","Shred through their auto-heavy dueling."),I("Trinity Force","Proc damage wins the extended duel."),I("Death's Dance","Outlast the fight with ghouls tagging in.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Plated Steelcaps","Auto reduction."),I("Death's Dance","Sustain through the duel.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Sterak's Gage","Absorb the burst before it lands."),I("Force of Nature","MR stack vs sustained casting."),I("Death's Dance","Sustain through the poke.")],behind:[I("Force of Nature","Mandatory MR stack."),I("Sterak's Gage","Secondary shield."),I("Mercury's Treads","Shorter CC before the combo lands.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Death's Dance","Sustain outlasts their drain."),I("Black Cleaver","HP + shred vs their scaling durability."),I("Trinity Force","Stick to them through the fight.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Death's Dance","Buy time for ghouls to overwhelm."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Plated Steelcaps","Sets up the approach through poke."),I("Trinity Force","Gap-close punishes their poke window."),I("Mercury's Treads","Reduce CC duration from range.")],behind:[I("Mercury's Treads","Shorten their key CC from range."),I("Force of Nature","MR + move speed vs sustained poke."),I("Sterak's Gage","Second shield layer.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Trinity Force","Reach the ADC before they can kite."),I("Black Cleaver","Shred through their armor stack."),I("Death's Dance","Survive their DPS while ghouls swarm.")],behind:[I("Plated Steelcaps","Non-negotiable — flat auto reduction."),I("Sterak's Gage","Survive the peel + DPS."),I("Guardian Angel","Second life for a risky dive.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Black Cleaver","Shred through their shield economy over time."),I("Trinity Force","Reach the carry despite the peel."),I("Death's Dance","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge the hook so ghouls and Maiden stay committed."),I("Trinity Force","Punish a whiffed hook instantly."),I("Black Cleaver","Kill the Catcher before they reset.")],behind:[I("Mercury's Treads","Mandatory — a caught Yorick loses the whole trade."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Guardian Angel","Deny the pick's value entirely.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their frontline stat for your whole team."),I("Death's Dance","Sustain outlasts their engage burst."),I("Trinity Force","Punish their re-engage window.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Sterak's Gage","Survive the initiation."),I("Force of Nature","MR vs Malphite/Gragas AP.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Gradual shred still opens Wardens up."),I("Trinity Force","Stick through their peel."),I("Death's Dance","Sustain through the extended fight.")],behind:[I("Black Cleaver","Only reliable damage vs a stacked-resist Warden."),I("Sterak's Gage","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Trinity Force","Run down a kiting Specialist."),I("Black Cleaver","Shred through their kit's mitigation."),I("Death's Dance","Sustain through their poke pattern.")],behind:[I("Mercury's Treads","Teemo blind / Kennen stun — shorten both."),I("Sterak's Gage","Survive burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
      },
    },
    Jungle:{
      bans:["Nunu & Willump","Kayn","Warwick"], replacements:["Wukong","Sett","Shyvana"],
      role:"Off-Meta Split-Push Jungler",
      corePath:"Plated Steelcaps  ›  Trinity Force  ›  Black Cleaver  ›  Spear of Shojin",
      coreNote:"Jungle Yorick trades gank tempo for a snowballing ghoul clear and early invades — same split-push identity as Top, just pathing the jungle instead of a lane. Plated Steelcaps and Trinity Force clear camps fast and add early duel power; Black Cleaver shreds armor for skirmishes; Spear of Shojin's haste keeps ghoul summons and Maiden uptime high through the mid-game.",
      sideItems:["Sterak's Gage","Death's Dance","Force of Nature","Thornmail","Guardian Angel","Mercury's Treads"],
      data:{
        JUGGERNAUT:{ahead:[I("Black Cleaver","Shred their armor stack while ghouls chip away."),I("Trinity Force","Proc damage wins the skirmish outright."),I("Death's Dance","Outlast their sustain with your own.")],behind:[I("Plated Steelcaps","Reduces auto damage from a counter-gank."),I("Sterak's Gage","Shield when the walk-down connects."),I("Thornmail","GW cuts their sustain.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Trinity Force","Proc burst punishes their dive."),I("Black Cleaver","Shred through their engage burst."),I("Sterak's Gage","Shield through the all-in.")],behind:[I("Sterak's Gage","Shield absorbs the engage burst."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Mercury's Treads","Shorter CC on their engage.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sterak's Gage","Shield eats the opener while the Maiden covers you."),I("Death's Dance","Convert their burst into sustain you outlast."),I("Trinity Force","Punish their commit with proc damage.")],behind:[I("Sterak's Gage","Non-negotiable — survive the burst window."),I("Force of Nature","AP assassins — MR stack."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Black Cleaver","Shred through their auto-heavy dueling."),I("Trinity Force","Proc damage wins the extended duel."),I("Death's Dance","Outlast the fight with ghouls tagging in.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Plated Steelcaps","Auto reduction."),I("Death's Dance","Sustain through the duel.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Sterak's Gage","Absorb the burst before it lands."),I("Force of Nature","MR stack vs sustained casting."),I("Death's Dance","Sustain through the poke.")],behind:[I("Force of Nature","Mandatory MR stack."),I("Sterak's Gage","Secondary shield."),I("Mercury's Treads","Shorter CC on invades.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Death's Dance","Sustain outlasts their drain."),I("Black Cleaver","HP + shred vs their scaling durability."),I("Trinity Force","Stick to them through the fight.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Death's Dance","Buy time for ghouls to overwhelm."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Plated Steelcaps","Sets up the approach through poke."),I("Trinity Force","Gap-close punishes their poke window."),I("Mercury's Treads","Reduce CC duration on the gank path.")],behind:[I("Mercury's Treads","Shorten their key CC from range."),I("Force of Nature","MR + move speed vs sustained poke."),I("Sterak's Gage","Second shield layer.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Trinity Force","Reach the ADC before they can kite."),I("Black Cleaver","Shred through their armor stack."),I("Death's Dance","Survive their DPS while ghouls swarm.")],behind:[I("Plated Steelcaps","Non-negotiable — flat auto reduction."),I("Sterak's Gage","Survive the peel + DPS."),I("Guardian Angel","Second life for a risky dive.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Black Cleaver","Shred through their shield economy over time."),I("Trinity Force","Reach the carry despite the peel."),I("Death's Dance","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge hooks while ganking."),I("Trinity Force","Punish a whiffed hook instantly."),I("Black Cleaver","Kill the Catcher before they reset.")],behind:[I("Mercury's Treads","Mandatory — a caught Yorick wastes the gank."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Guardian Angel","Deny the pick's value entirely.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their frontline stat for your whole team."),I("Death's Dance","Sustain outlasts their engage burst."),I("Trinity Force","Punish their re-engage window.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Sterak's Gage","Survive the initiation."),I("Force of Nature","MR vs Malphite/Gragas AP.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Gradual shred still opens Wardens up."),I("Trinity Force","Stick through their peel."),I("Death's Dance","Sustain through the extended fight.")],behind:[I("Black Cleaver","Only reliable damage vs a stacked-resist Warden."),I("Sterak's Gage","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Trinity Force","Run down a kiting Specialist."),I("Black Cleaver","Shred through their kit's mitigation."),I("Death's Dance","Sustain through their poke pattern.")],behind:[I("Mercury's Treads","Teemo blind / Kennen stun — shorten both."),I("Sterak's Gage","Survive burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...YORICK_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
