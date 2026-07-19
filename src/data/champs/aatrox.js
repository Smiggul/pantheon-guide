import { I } from "../runeHelpers.js";

const AATROX_JGL_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Last Stand"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Cosmic Insight"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Jungle Aatrox keeps the Conqueror brawling identity but swaps Top's lane-survival secondary for the Inspiration economy line — his Q healing already sustains the clear, so free boots and Cosmic Insight accelerate the Hubris spike and shorten World Ender windows instead. Triumph refunds HP through multi-kill ganks, Legend: Haste feeds the Q chain every fight revolves around, and Last Stand backs the low-HP revive-threat fights World Ender creates.",
};

const AATROX_TOP_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Revitalize"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror stacks fast off Aatrox's Q sword-sweep combo, and the omnivamp compounds with his own passive healing from ability damage. Legend: Haste speeds up the whole combo loop; Last Stand rewards the low-HP all-ins his own aggression invites. Bone Plating covers the melee-range weakness before World Ender comes online; Revitalize amplifies the passive heal even further.",
};

// ══════════════════════════════════════════════════════════════════════════
//  AATROX — Juggernaut / Sword-Sweep Bruiser
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"aatrox", display:"Aatrox", dd:"Aatrox",
  color:"#3a1a1a", glow:"#c02020",
  lanes:["Top","Jungle"],
  roles:{
    Top:{
      bans:["Vayne","Quinn","Fiora"], replacements:["Darius","Sett","Volibear"],
      role:"Juggernaut / Sword-Sweep Bruiser",
      corePath:"Spear of Shojin  ›  Plated Steelcaps  ›  Sundered Sky  ›  Death's Dance",
      coreNote:"Aatrox plays for a repeated Q sword-sweep combo — each cast heals off ability damage, Umbral Dash repositions between casts, and World Ender turns a losing fight into a takeover. Spear of Shojin's haste and true damage scale directly with the passive heal; Sundered Sky's healing compounds further; Death's Dance lets him commit fully to the all-in without fearing the counter-hit.",
      sideItems:["Sterak's Gage","Guardian Angel","Black Cleaver","Serylda's Grudge","Mercury's Treads","Thornmail"],
      data:{
        JUGGERNAUT:{ahead:[I("Sundered Sky","Healing wins the sustained trade war."),I("Spear of Shojin","Haste + true damage adds up over the fight."),I("Death's Dance","Outlast their sustain with your own.")],behind:[I("Sterak's Gage","Shield when the walk-down connects."),I("Mercury's Treads","Shorter CC before the kill."),I("Plated Steelcaps","Reduces auto damage from their press.")],runes:{...AATROX_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Spear of Shojin","Proc burst punishes their dive."),I("Sundered Sky","Healing outlasts the all-in."),I("Sterak's Gage","Shield through the engage.")],behind:[I("Sterak's Gage","Shield absorbs the engage burst."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Mercury's Treads","Shorter CC on their engage.")],runes:{...AATROX_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sterak's Gage","Shield eats the opener while your passive heal recovers."),I("Death's Dance","Convert their burst into sustain you outlast."),I("Spear of Shojin","Punish their commit with true damage.")],behind:[I("Sterak's Gage","Non-negotiable — survive the burst window."),I("Guardian Angel","Deny the kill."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...AATROX_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Sundered Sky","Healing wins the extended duel outright."),I("Black Cleaver","Shred through their auto-heavy dueling."),I("Spear of Shojin","Haste tips the auto-trade.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Plated Steelcaps","Auto reduction."),I("Death's Dance","Sustain through the duel.")],runes:{...AATROX_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Sterak's Gage","Absorb the burst before it lands."),I("Death's Dance","Sustain through the poke."),I("Spear of Shojin","Punish their cooldown window.")],behind:[I("Sterak's Gage","Secondary shield."),I("Mercury's Treads","Shorter CC before the combo lands."),I("Guardian Angel","Insurance.")],runes:{...AATROX_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Death's Dance","Sustain outlasts their drain."),I("Black Cleaver","HP + shred vs their scaling durability."),I("Sundered Sky","Healing keeps you in the fight.")],behind:[I("Death's Dance","Buy time for your passive heal to matter."),I("Sterak's Gage","Shield through the drain war."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...AATROX_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Plated Steelcaps","Sets up the approach through poke."),I("Spear of Shojin","Haste closes the poke-war gap faster."),I("Serylda's Grudge","Slow closes the last of the gap.")],behind:[I("Mercury's Treads","Reduce CC duration."),I("Sterak's Gage","Second shield layer."),I("Guardian Angel","Insurance on approach.")],runes:{...AATROX_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Serylda's Grudge","Slow denies the kite."),I("Spear of Shojin","Burst edge wins the race."),I("Death's Dance","Survive their DPS while you close.")],behind:[I("Sterak's Gage","Survive the peel + DPS."),I("Guardian Angel","Second life for a risky dive."),I("Mercury's Treads","Reduce CC duration.")],runes:{...AATROX_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Black Cleaver","Shred through their shield economy over time."),I("Spear of Shojin","True damage burst through the peel."),I("Death's Dance","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...AATROX_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge the hook so your combo lands first."),I("Spear of Shojin","Punish a whiffed hook instantly."),I("Death's Dance","Sustain through the follow-up.")],behind:[I("Mercury's Treads","Mandatory — a caught Aatrox loses the whole trade."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Guardian Angel","Deny the pick's value entirely.")],runes:{...AATROX_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their frontline stat for your whole team."),I("Death's Dance","Sustain outlasts their engage burst."),I("Spear of Shojin","Punish their re-engage window.")],behind:[I("Sterak's Gage","Survive the initiation."),I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Insurance vs the follow-up.")],runes:{...AATROX_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Gradual shred still opens Wardens up."),I("Sundered Sky","Healing still wins the peel war."),I("Death's Dance","Sustain through the extended fight.")],behind:[I("Black Cleaver","Only reliable damage vs a stacked-resist Warden."),I("Sterak's Gage","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...AATROX_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Spear of Shojin","Run down a kiting Specialist with haste."),I("Black Cleaver","Shred through their kit's mitigation."),I("Death's Dance","Sustain through their poke pattern.")],behind:[I("Mercury's Treads","Teemo blind / Kennen stun — shorten both."),I("Sterak's Gage","Survive burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...AATROX_TOP_DEFAULT_RUNES}},
      },
    },
    Jungle:{
      bans:["Ivern","Nidalee","Evelynn"], replacements:["Jarvan IV","Vi","Warwick"],
      role:"World Ender Skirmish Jungler",
      corePath:"Hubris  ›  Plated Steelcaps  ›  Sundered Sky  ›  Death's Dance",
      coreNote:"Jungle Aatrox is A-tier on real data — his Q healing makes the clear free, and every gank arrives with three knockups and a revive threat. Hubris snowballs the skirmish-heavy pattern his Conqueror brawling wins, Sundered Sky spikes the dive opener, and Death's Dance converts focus fire into a bleed he heals through mid-World Ender. Maw closes against AP comps. He wants every dragon fight to be a brawl in a phone booth — with World Ender up, take every 50/50 and win most of them.",
      sideItems:["Maw of Malmortius","Sterak's Gage","Spear of Shojin","Black Cleaver","Guardian Angel","Spirit Visage"],
      data:{
        JUGGERNAUT:{ahead:[I("Sundered Sky","Q-chain brawls beat them with Conqueror stacked."),I("Death's Dance","Sustain conversion outlasts their trades."),I("Black Cleaver","Shred through the invade brawl.")],behind:[I("Death's Dance","Survive their burst and heal it back."),I("Sterak's Gage","Shield the all-in."),I("Spirit Visage","Amplify the World Ender healing.")],runes:{...AATROX_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Sundered Sky","Win the engage mirror — your knockups chain longer."),I("Death's Dance","Out-sustain their engage window."),I("Black Cleaver","Shred through the extended brawl.")],behind:[I("Sterak's Gage","Shield their engage burst."),I("Death's Dance","Bleed through the counter-dive."),I("Guardian Angel","Insurance when both teams commit.")],runes:{...AATROX_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Death's Dance","Their burst becomes a bleed you heal through."),I("Sundered Sky","Q knockup interrupts the combo."),I("Hubris","Snowball the failed assassination attempts.")],behind:[I("Guardian Angel","Trade one-shots and come back up."),I("Maw of Malmortius","Vs AP assassins."),I("Sterak's Gage","Shield floor under the combo.")],runes:{...AATROX_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Sundered Sky","The extended brawl is your game — Conqueror + Q healing."),I("Death's Dance","Sustain conversion wins the war."),I("Black Cleaver","Shred their bruiser build.")],behind:[I("Sterak's Gage","Survive the duel they force at camps."),I("Maw of Malmortius","Lifeline vs AP skirmishers."),I("Guardian Angel","Insurance in the 1v1.")],runes:{...AATROX_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Sundered Sky","Knockup opener beats their rotation timing."),I("Maw of Malmortius","Lifeline under the full combo."),I("Death's Dance","Convert their burst to bleed.")],behind:[I("Maw of Malmortius","Rush the magic lifeline."),I("Mercury's Treads","Tenacity through their setup CC."),I("Guardian Angel","Survive the caught engage.")],runes:{...AATROX_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Sundered Sky","Dive them before the drain ramps."),I("Spirit Visage","Amplify your healing against theirs."),I("Black Cleaver","Shred them inside the Q chain.")],behind:[I("Maw of Malmortius","Magic lifeline against the ramp."),I("Mercury's Treads","Tenacity vs their locks."),I("Death's Dance","Bleed through the sustained damage.")],runes:{...AATROX_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Sundered Sky","Gank them — artillery can't fight three knockups."),I("Spear of Shojin","Haste to chain the Q lock."),I("Death's Dance","Bleed through the poke on approach.")],behind:[I("Mercury's Treads","MR chips their poke math."),I("Maw of Malmortius","Shield the approach."),I("Guardian Angel","Covers the committed dive.")],runes:{...AATROX_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Sundered Sky","Knockup-chain deletes their carry at objectives."),I("Black Cleaver","Shred their armor buys."),I("Death's Dance","Sustain through the focus fire.")],behind:[I("Sterak's Gage","Survive the kite-down."),I("Guardian Angel","Trade kills and revive."),I("Death's Dance","Bleed through their DPS.")],runes:{...AATROX_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Black Cleaver","Shred through the shield sponge."),I("Sundered Sky","Burst through the shield window."),I("Sterak's Gage","Their poke can't remove your all-in.")],behind:[I("Black Cleaver","Keep damage real through shields."),I("Mercury's Treads","Tenacity vs their CC package."),I("Guardian Angel","Survive the protected carry.")],runes:{...AATROX_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Sundered Sky","Q knockup outranges most hooks — engage first."),I("Sterak's Gage","Shield covers the landed catch."),I("Black Cleaver","Full dive on the whiffing catcher.")],behind:[I("Mercury's Treads","Shorter lockdown on catch."),I("Guardian Angel","Survive the caught scenario."),I("Death's Dance","Bleed through the follow-up.")],runes:{...AATROX_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their armor for your whole team."),I("Sundered Sky","Out-brawl the engage tank at objectives."),I("Death's Dance","Sustain the extended teamfight.")],behind:[I("Sterak's Gage","Shield the counter-engage."),I("Mercury's Treads","Tenacity through the CC chain."),I("Guardian Angel","Insurance at objectives.")],runes:{...AATROX_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Shred the peel-tank's armor stack."),I("Sundered Sky","Knockups move the carry out of the peel bubble."),I("Death's Dance","Sustain the long crack attempt.")],behind:[I("Black Cleaver","Required shred vs stacked armor."),I("Guardian Angel","Insurance on the forced dive."),I("Sterak's Gage","Shield the counter-burst.")],runes:{...AATROX_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Sundered Sky","Three knockups answer most gimmicks."),I("Black Cleaver","Generic shred works on everything."),I("Death's Dance","Sustain through the tricks.")],behind:[I("Mercury's Treads","Tenacity vs unfamiliar CC."),I("Guardian Angel","Survive the setup you can't read."),I("Maw of Malmortius","Vs AP specialists.")],runes:{...AATROX_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
