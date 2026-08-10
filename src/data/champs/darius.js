import { I } from "../runeHelpers.js";

const DARIUS_TOP_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Sorcery",
  secondaryRunes: ["Axiom Arcanist","Celerity"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "The live meta page (u.gg / mobalytics 26.15, ~54% WR): Conqueror stacks fast in Darius's spin-to-win trades for the AD + omnivamp to snowball a lead. Triumph heals off takedowns to chain Noxian Guillotine resets, Legend: Alacrity speeds the trade cadence, Last Stand rewards the low-HP brawls he lives on. Sorcery secondary — Axiom Arcanist amps his ability burst and Celerity adds move speed to stick with Apprehend on the tempo/lethality build.",
};

// ══════════════════════════════════════════════════════════════════════════
//  DARIUS — Juggernaut / Lane Bully
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"darius", display:"Darius", dd:"Darius",
  color:"#8b0000", glow:"#c0392b",
  lanes:["Top"],
  roles:{
    Top:{
      bans:["Cho'Gath","Teemo","Malphite"], replacements:["Renekton","Sett","Wukong"],
      role:"Juggernaut / Lane Bully",
      corePath:"Youmuu's Ghostblade  ›  Plated Steelcaps  ›  Dead Man's Plate  ›  Death's Dance",
      coreNote:"Darius wants to end the game before scaling comps take over. Stridebreaker's slow keeps targets in Decimate/Apprehend range for the stack-execute pattern; Black Cleaver shreds while Q stacks Hemorrhage bleed; Sterak's and Death's Dance keep him alive to land the Guillotine reset chain.",
      sideItems:["Plated Steelcaps","Mercury's Treads","Randuin's Omen","Frozen Heart","Maw of Malmortius","Guardian Angel"],
      data:{
        JUGGERNAUT:{ahead:[I("Black Cleaver","Shred their armor stack while your bleed racks up."),I("Stridebreaker","Slow sticks you to the mirror matchup."),I("Death's Dance","Outlast their sustain with your own bleed.")],behind:[I("Randuin's Omen","Crit/AS reduction if they build offense."),I("Plated Steelcaps","Reduces auto damage from their all-in."),I("Sterak's Gage","Shield when the walk-down connects.")],runes:{...DARIUS_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Stridebreaker","Slow denies their dash-out after committing."),I("Black Cleaver","Shred through their burst window."),I("Death's Dance","Bleed conversion outlasts their all-in.")],behind:[I("Sterak's Gage","Shield absorbs the engage burst."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Mercury's Treads","Shorter CC before the follow-up.")],runes:{...DARIUS_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sterak's Gage","Shield eats the opener — the bleed does the rest."),I("Death's Dance","Convert their burst into a bleed you outlast."),I("Stridebreaker","Slow denies their reset window.")],behind:[I("Sterak's Gage","Non-negotiable — survive the burst window."),I("Maw of Malmortius","AP assassins — lifeline shield."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...DARIUS_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Black Cleaver","Shred through their auto-heavy dueling."),I("Stridebreaker","Slow denies their kite pattern."),I("Death's Dance","Outlast the extended duel.")],behind:[I("Randuin's Omen","Crit reduction on Yasuo/Yone/Tryndamere."),I("Sterak's Gage","Survive their all-in spike."),I("Plated Steelcaps","Auto reduction.")],runes:{...DARIUS_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Stridebreaker","Close the gap before their combo completes."),I("Maw of Malmortius","Shield absorbs the burst on arrival."),I("Sterak's Gage","Second shield layer.")],behind:[I("Maw of Malmortius","Mandatory lifeline vs burst mages."),I("Mercury's Treads","Shorter CC before the combo lands."),I("Sterak's Gage","Survive the full rotation.")],runes:{...DARIUS_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Death's Dance","Bleed outlasts their sustained drain."),I("Black Cleaver","HP + shred vs their scaling durability."),I("Stridebreaker","Stick to them through the fight.")],behind:[I("Maw of Malmortius","Survive sustained AP DPS."),I("Death's Dance","Buy time for the bleed to work."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...DARIUS_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Stridebreaker","Gap-close instantly denies their poke window."),I("Mercury's Treads","Reduce CC duration from range."),I("Sterak's Gage","Survive the poke on approach.")],behind:[I("Mercury's Treads","Shorten their key CC from range."),I("Maw of Malmortius","Survive the poke-to-burst combo."),I("Sterak's Gage","Second shield layer.")],runes:{...DARIUS_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Stridebreaker","Reach the ADC before they can kite."),I("Black Cleaver","Shred through their armor stack."),I("Death's Dance","Survive their DPS while eating them.")],behind:[I("Plated Steelcaps","Non-negotiable — flat auto reduction."),I("Sterak's Gage","Survive the peel + DPS."),I("Guardian Angel","Second life for a risky dive.")],runes:{...DARIUS_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Black Cleaver","Shred through their shield economy over time."),I("Stridebreaker","Reach the carry despite the peel."),I("Death's Dance","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...DARIUS_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge the hook so you land Apprehend first."),I("Stridebreaker","Punish a whiffed hook instantly."),I("Black Cleaver","Kill the Catcher before they reset.")],behind:[I("Mercury's Treads","Mandatory — a caught Darius loses the whole trade."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Guardian Angel","Deny the pick's value entirely.")],runes:{...DARIUS_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their frontline stat for your whole team."),I("Death's Dance","Bleed outlasts their engage burst."),I("Stridebreaker","Slow denies their re-engage.")],behind:[I("Randuin's Omen","Crit/AS reduction if they pair with a carry."),I("Mercury's Treads","Shorter stuns from their engage."),I("Sterak's Gage","Survive the initiation.")],runes:{...DARIUS_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Gradual shred still opens Wardens up."),I("Stridebreaker","Stick through their peel."),I("Death's Dance","Sustain through the extended fight.")],behind:[I("Black Cleaver","Only reliable damage vs a stacked-resist Warden."),I("Sterak's Gage","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...DARIUS_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Stridebreaker","Run down a kiting Specialist."),I("Black Cleaver","Shred through their kit's mitigation."),I("Death's Dance","Sustain through their poke pattern.")],behind:[I("Mercury's Treads","Teemo blind / Kennen stun — shorten both."),I("Sterak's Gage","Survive burst setups."),I("Guardian Angel","Deny their splitpush snowball.")],runes:{...DARIUS_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
