import { I } from "../runeHelpers.js";

const JAYCE_TOP_DEFAULT_RUNES = {
  keystone:       "Stormraider's Surge",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Absolute Focus","Gathering Storm"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Biscuit Delivery"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Stormraider's Surge procs off Jayce's accelerated Q poke chunks, and the move-speed surge feeds his hit-and-run cannon pattern perfectly. Manaflow Band and Biscuit Delivery cover the mana his poke spam drains, Absolute Focus rewards staying at cannon range and healthy, Gathering Storm backs the scaling his lane dominance is meant to cash in, and Magical Footwear funds the Manamune rush a gold-hungry poke build depends on.",
};

// ══════════════════════════════════════════════════════════════════════════
//  JAYCE — Defender of Tomorrow: Poke Lane Bully  (A tier Top 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"jayce", display:"Jayce", dd:"Jayce",
  color:"#3a4a6a", glow:"#80b0e0",
  lanes:["Top"],
  roles:{
    Top:{
      bans:["Irelia","Warwick","Malphite"], replacements:["Camille","Fiora","Riven"],
      role:"Hextech Poke Bully / Form-Swap Carry",
      corePath:"Youmuu's Ghostblade  ›  Ionian Boots of Lucidity  ›  Manamune  ›  Voltaic Cyclosword",
      coreNote:"Jayce is the classic top-lane poke bully: accelerated cannon Q chunks half a health bar, and hammer form finishes anyone who wades in low. Youmuu's Ghostblade feeds both the poke pattern and the roam tempo, Manamune stacks toward Muramana off his double-resource spam, and Voltaic Cyclosword's energised proc rides the Q-gate slow for pick potential. Serylda's Grudge closes against armor. Win lane by 40 CS, then treat mid-game like a six-item sniper.",
      sideItems:["Serylda's Grudge","Edge of Night","Eclipse","Guardian Angel","Maw of Malmortius","Serpent's Fang"],
      data:{
        JUGGERNAUT:{ahead:[I("Youmuu's Ghostblade","Speed to poke-and-fade — they never touch you."),I("Manamune","Q spam chunks them from cannon range forever."),I("Serylda's Grudge","Pen keeps poke real through armor.")],behind:[I("Edge of Night","Block the pull that starts their all-in."),I("Guardian Angel","Insurance against the one landed engage."),I("Maw of Malmortius","Vs mixed-damage juggernauts.")],runes:{...JAYCE_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Voltaic Cyclosword","Burst them mid-dive with the energised proc."),I("Youmuu's Ghostblade","Out-speed their engage tempo."),I("Edge of Night","Block the dive-opener entirely.")],behind:[I("Edge of Night","Spell shield answers their engage ability."),I("Guardian Angel","Second life against the dive."),I("Maw of Malmortius","Shield vs AP divers.")],runes:{...JAYCE_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Youmuu's Ghostblade","Poke them out before they ever get a window."),I("Voltaic Cyclosword","Hammer-form burst wins the close fight."),I("Edge of Night","Their combo starts with one ability — block it.")],behind:[I("Edge of Night","Rush — the spell shield blanks their opener."),I("Guardian Angel","Trade one-shots and come back up."),I("Maw of Malmortius","Vs AP assassins.")],runes:{...JAYCE_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Manamune","Poke them below all-in HP before they engage."),I("Youmuu's Ghostblade","Speed controls who picks the fight."),I("Serylda's Grudge","Pen through their early bruiser items.")],behind:[I("Edge of Night","Block the gap-close that starts their duel."),I("Guardian Angel","Insurance when they force the fight."),I("Maw of Malmortius","Lifeline vs AP skirmishers.")],runes:{...JAYCE_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Youmuu's Ghostblade","Speed dodges their setup skillshot."),I("Voltaic Cyclosword","Your poke combo lands first."),I("Maw of Malmortius","Lifeline if they do connect.")],behind:[I("Maw of Malmortius","Magic shield floors their burst."),I("Edge of Night","Spell shield eats the combo starter."),I("Guardian Angel","Survive the rotation you can't dodge.")],runes:{...JAYCE_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Manamune","Outrange their sustained-damage zone with poke."),I("Serylda's Grudge","Pen scales into their HP items."),I("Youmuu's Ghostblade","Speed beats their spacing control.")],behind:[I("Maw of Malmortius","Magic lifeline against the drain."),I("Edge of Night","Blocks their opening CC."),I("Guardian Angel","Survive the extended fight.")],runes:{...JAYCE_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Manamune","Win the poke mirror — your Q hits harder."),I("Youmuu's Ghostblade","Speed closes when they whiff."),I("Voltaic Cyclosword","Burst on arrival.")],behind:[I("Edge of Night","Spell shield eats one poke spell."),I("Maw of Malmortius","Shield vs their AP poke."),I("Guardian Angel","Covers the committed engage.")],runes:{...JAYCE_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Voltaic Cyclosword","Squishy carries die to one accelerated Q + hammer combo."),I("Youmuu's Ghostblade","Speed through their kiting."),I("Serylda's Grudge","Pen through their armor shard.")],behind:[I("Edge of Night","Block the peel CC on the way in."),I("Guardian Angel","Trade kills and revive."),I("Maw of Malmortius","Vs mixed-damage carries.")],runes:{...JAYCE_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Serpent's Fang","The anti-shield item — built for this matchup."),I("Manamune","Poke volume outlasts shield cooldowns."),I("Youmuu's Ghostblade","Speed past peel to the carry.")],behind:[I("Serpent's Fang","Still correct — shields are the problem."),I("Edge of Night","Block the setup CC."),I("Guardian Angel","Survive the protected carry's damage.")],runes:{...JAYCE_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Youmuu's Ghostblade","Speed makes their hooks unlandable."),I("Manamune","Poke them down from outside hook range."),I("Edge of Night","Spell shield eats the hook outright.")],behind:[I("Edge of Night","Rush — the hook is their whole gameplan."),I("Guardian Angel","Survive the caught scenario."),I("Maw of Malmortius","Vs AP catchers.")],runes:{...JAYCE_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Serylda's Grudge","Armor pen keeps poke real through their frontline."),I("Manamune","Chunk them from outside engage radius."),I("Edge of Night","Block the engage CC.")],behind:[I("Edge of Night","Spell shield beats the initiation."),I("Guardian Angel","Survive the engage chain."),I("Serylda's Grudge","Required pen from behind.")],runes:{...JAYCE_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Serylda's Grudge","Pen through the peel-tank to the carry."),I("Manamune","Poke volume beats reactive peel."),I("Youmuu's Ghostblade","Speed picks angles their peel can't cover.")],behind:[I("Serylda's Grudge","Mandatory vs stacked armor."),I("Edge of Night","Block their lockdown."),I("Guardian Angel","Insurance on the dive.")],runes:{...JAYCE_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Manamune","Poke from range answers most gimmicks."),I("Youmuu's Ghostblade","Speed spacing beats trick kits."),I("Voltaic Cyclosword","Burst them in one window.")],behind:[I("Edge of Night","Spell shield covers the unreadable opener."),I("Guardian Angel","Survive what you can't scout."),I("Maw of Malmortius","Vs AP specialists.")],runes:{...JAYCE_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
