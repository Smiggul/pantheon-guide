import { I } from "../runeHelpers.js";

const NAAFIRI_JGL_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Coup de Grace"],
  secondary:      "Inspiration",
  secondaryRunes: ["Cosmic Insight","Magical Footwear"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror gives Naafiri very good consistent damage in extended jungle skirmishes — every hit from her summoned hound pack stacks toward the omnivamp. Legend: Alacrity feeds more attacks from the hound swarm; Coup de Grace finishes targets already whittled down. Cosmic Insight and Magical Footwear cut cooldowns and get her boots online for free, both funding a faster jungle clear and gank tempo.",
};

const NAAFIRI_MID_DEFAULT_RUNES = {
  keystone:       "Hail of Blades",
  primary:        "Domination",
  primaryRunes:   ["Sudden Impact","Sixth Sense","Treasure Hunter"],
  secondary:      "Sorcery",
  secondaryRunes: ["Scorch","Transcendence"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Hail of Blades' burst of attack speed lets Naafiri's hound pack land its whole rotation of hits in the first few seconds of a fight, which is exactly the isolated-target burst window her kit is built around. Sudden Impact procs off the Q dash; Treasure Hunter funds her lethality item spike faster than farming alone. Scorch adds early poke pressure; Transcendence adds haste for more frequent all-ins.",
};

// ══════════════════════════════════════════════════════════════════════════
//  NAAFIRI — Assassin / Pack-Hunt Burst
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"naafiri", display:"Naafiri", dd:"Naafiri",
  color:"#6b1a2a", glow:"#e88040",
  lanes:["Jungle","Mid"],
  altBuilds:{
    Jungle:[{
      label:"Lethality burst", tag:"alt",
      corePath:"Voltaic Cyclosword  ›  Axiom Arc  ›  Ionian Boots of Lucidity  ›  Serylda's Grudge",
      // Research: Her previous main build, and still the second most common line: Axiom Arc follows Voltaic in about 27%
      //   of Emerald+ jungle games that start Voltaic (lolalytics, ~12k), and Serylda's comes next in 39% of
      //   those. It uses the same Conqueror page because the rune data is not split by build.
      coreNote:"The lethality line: Axiom Arc after Voltaic Cyclosword, then Serylda's Grudge. It trades the bruiser line's armor and damage deferral for lethality and ability haste, so the pack kills one isolated target faster, but you have much less to fall back on if the first all-in fails. Take it into squishy teams you can catch alone; take the bruiser line into front lines and long fights. Same Conqueror page.",
      runes:{...NAAFIRI_JGL_DEFAULT_RUNES},
      sideItems:["Edge of Night","Hubris","Serpent's Fang","Maw of Malmortius","Guardian Angel"],
    }],
  },
  roles:{
    Jungle:{
      bans:["Nocturne","Wukong","Briar"], replacements:["Warwick","Sett","Shyvana"],
      role:"Bruiser / Pack-Hunt Skirmisher",
      corePath:"Voltaic Cyclosword  ›  Ionian Boots of Lucidity  ›  Black Cleaver  ›  Death's Dance",
      // Research: On 26.20 Black Cleaver follows Voltaic in 55% of Emerald+ jungle games that start Voltaic (lolalytics,
      //   ~24k), against 27% for Axiom Arc, and Death's Dance comes next 65% of the time. 55% of her three-item
      //   builds contain Black Cleaver, and Voltaic into Cleaver into Death's Dance is OP.GG's top core by a wide
      //   margin (23% of cores, 55.5% over ~10.5k games; the next is 7%). The lethality line is kept as an
      //   alternate.
      coreNote:"Jungle Naafiri builds as a bruiser, not a one-shot assassin: Voltaic Cyclosword, Black Cleaver, then Death's Dance. Your damage is physical and spread across a long skirmish, so Black Cleaver's armor shred and Fervor movement speed keep paying off, and Death's Dance spreads incoming burst over three seconds and wipes what is left on a takedown. That suits the Conqueror page, which rewards long fights over a single burst.",
      sideItems:["Plated Steelcaps","Mercury's Treads","Spear of Shojin","Guardian Angel","Serpent's Fang","Edge of Night","Maw of Malmortius","Axiom Arc","Serylda's Grudge","Hubris"],
      data:{
        JUGGERNAUT:{ahead:[I("Serylda's Grudge","Slow keeps them inside the pack's range."),I("Edge of Night","Blocks their key engage CC."),I("Voltaic Cyclosword","Extra proc burst before their damage scales up.")],behind:[I("Edge of Night","Still blocks their key engage CC."),I("Maw of Malmortius","Shield vs their all-in."),I("Guardian Angel","Second chance if you get caught.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Edge of Night","Blocks the CC that starts their dive."),I("Axiom Arc","A takedown refunds part of The Call of the Pack's cooldown, so it is ready for their next dive."),I("Death's Dance","Spreads their dive burst over three seconds, and a takedown wipes whatever damage is left.")],behind:[I("Edge of Night","Mandatory — blocks the dive's opening CC."),I("Maw of Malmortius","Shield lifeline vs their burst."),I("Guardian Angel","Insurance after a bad trade.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Hubris","Win the first skirmish and the takedown grants bonus AD for 90 seconds to snowball the mirror."),I("Edge of Night","Blocks their setup CC before the combo."),I("Voltaic Cyclosword","Early trade edge from the proc.")],behind:[I("Edge of Night","Blocks their engage tool."),I("Maw of Malmortius","Shield vs the burst combo."),I("Guardian Angel","Deny the kill.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Serylda's Grudge","Slow denies their kite/duel pattern."),I("Axiom Arc","Extra burst wins the extended trade."),I("Edge of Night","Blocks their gap-close CC.")],behind:[I("Edge of Night","Blocks their all-in opener."),I("Maw of Malmortius","Shield through the duel."),I("Death's Dance","Spreads the duel's damage over three seconds and cleanses the rest on a takedown, so you outlast them.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Edge of Night","Spellshield the combo's key CC."),I("Maw of Malmortius","Shield through the rotation."),I("Axiom Arc","Lethality and ability haste get your combo back up between their cooldowns.")],behind:[I("Maw of Malmortius","Mandatory lifeline vs burst mages."),I("Edge of Night","Blocks the setup CC."),I("Guardian Angel","Insurance.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Serylda's Grudge","Slow denies their kite/disengage."),I("Voltaic Cyclosword","Burst before they can drain back."),I("Edge of Night","Blocks their combo CC.")],behind:[I("Maw of Malmortius","MR + shield vs sustained AP."),I("Edge of Night","Blocks their combo opener."),I("Ionian Boots of Lucidity","Haste to disengage sooner.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Black Cleaver","Fervor grants movement speed every time you deal physical damage, so you stay on a mage trying to kite you."),I("Hubris","Takedowns grant bonus AD for 90 seconds, so one pick on an artillery mage snowballs the next fight."),I("Edge of Night","Blocks one poke ability.")],behind:[I("Edge of Night","Blocks their key poke/CC."),I("Maw of Malmortius","Survive the poke-to-burst combo."),I("Ionian Boots of Lucidity","Haste to close the gap faster.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Axiom Arc","Killing the ADC refunds part of The Call of the Pack's cooldown for the next target in the fight."),I("Edge of Night","Blocks their one peel tool."),I("Serylda's Grudge","Slow denies the kite.")],behind:[I("Edge of Night","Blocks the engage tool set up on you."),I("Maw of Malmortius","Survive their DPS."),I("Guardian Angel","Second life for a risky dive.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Serpent's Fang","Damaging their carry cuts the shields the enchanter puts on them, so your combo still kills."),I("Serylda's Grudge","Once the carry drops below half health your abilities slow them, so the enchanter's peel cannot drag them away."),I("Edge of Night","Blocks the peel CC.")],behind:[I("Edge of Night","Blocks the setup CC on their carry combo."),I("Maw of Malmortius","Survive the combined burst."),I("Guardian Angel","Insurance.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Edge of Night","Blocks the hook outright."),I("Death's Dance","If a hook lands, the follow-up burst is spread over three seconds, giving you time to fight back."),I("Hubris","Punish a whiffed hook: the takedown grants bonus AD for 90 seconds.")],behind:[I("Edge of Night","Mandatory — a landed hook cancels your whole combo otherwise."),I("Maw of Malmortius","Survive the follow-up."),I("Guardian Angel","Deny the pick's value.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Serylda's Grudge","Slow denies their initiation follow-through."),I("Edge of Night","Blocks their engage CC."),I("Voltaic Cyclosword","Burst before the frontline arrives.")],behind:[I("Edge of Night","Blocks the engage that chains into your death."),I("Maw of Malmortius","Survive the initiation."),I("Ionian Boots of Lucidity","Haste to reposition.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Serpent's Fang","Damaging the carry cuts the shields the Warden puts on them, so the burst still kills."),I("Serylda's Grudge","Slow keeps the pack in range past the Warden."),I("Axiom Arc","Extra burst matters past their mitigation.")],behind:[I("Edge of Night","Blocks their key CC."),I("Maw of Malmortius","Survive their counter-peel."),I("Guardian Angel","Insurance.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Edge of Night","Blocks Teemo blind / Kennen stun outright."),I("Axiom Arc","Catch a squishy Specialist out and the takedown refunds part of The Call of the Pack's cooldown for the next gank."),I("Black Cleaver","Fervor's movement speed on every physical hit keeps you on a kiting Specialist while the armor shred stacks.")],behind:[I("Edge of Night","Blocks their key disable."),I("Maw of Malmortius","AP specialists — lifeline shield."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
      },
    },
    Mid:{
      bans:["Malzahar","Diana","Lissandra"], replacements:["Katarina","Ahri","Zed"],
      role:"Assassin / Pack-Hunt Burst",
      corePath:"Voltaic Cyclosword  ›  Axiom Arc  ›  Serylda's Grudge  ›  Edge of Night",
      coreNote:"Mid Naafiri plays the same pack-hunt burst pattern as Jungle — dash in with Q, summon the hound swarm, and delete an isolated target before they can respond. Voltaic Cyclosword and Axiom Arc both fund the early-to-mid lethality spike; Serylda's Grudge's slow keeps the target inside pack range; Edge of Night blocks the one CC/spellshield-able ability that would otherwise stop the combo.",
      sideItems:["Youmuu's Ghostblade","Bastionbreaker","Umbral Glaive","Maw of Malmortius","Guardian Angel","Ionian Boots of Lucidity"],
      data:{
        JUGGERNAUT:{ahead:[I("Serylda's Grudge","Slow keeps them inside the pack's range."),I("Edge of Night","Blocks their key engage CC."),I("Voltaic Cyclosword","Extra proc burst before their damage scales up.")],behind:[I("Edge of Night","Still blocks their key engage CC."),I("Maw of Malmortius","Shield vs their all-in."),I("Guardian Angel","Second chance if you get caught.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Edge of Night","Blocks the CC that starts their dive."),I("Axiom Arc","A takedown refunds part of The Call of the Pack's cooldown, so it is ready for their next dive."),I("Youmuu's Ghostblade","Extra mobility to disengage after.")],behind:[I("Edge of Night","Mandatory — blocks the dive's opening CC."),I("Maw of Malmortius","Shield lifeline vs their burst."),I("Guardian Angel","Insurance after a bad trade.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Bastionbreaker","Your next ability hit on a champion deals bonus true damage, so you win the race to burst first."),I("Edge of Night","Blocks their setup CC before the combo."),I("Voltaic Cyclosword","Early trade edge from the proc.")],behind:[I("Edge of Night","Blocks their engage tool."),I("Maw of Malmortius","Shield vs the burst combo."),I("Guardian Angel","Deny the kill.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Serylda's Grudge","Slow denies their kite/duel pattern."),I("Axiom Arc","Extra burst wins the extended trade."),I("Edge of Night","Blocks their gap-close CC.")],behind:[I("Edge of Night","Blocks their all-in opener."),I("Maw of Malmortius","Shield through the duel."),I("Umbral Glaive","Vision denial to reset safely.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Edge of Night","Spellshield the combo's key CC."),I("Maw of Malmortius","Shield through the rotation."),I("Bastionbreaker","Bonus true damage on your next ability hit kills a squishy mage in one rotation.")],behind:[I("Maw of Malmortius","Mandatory lifeline vs burst mages."),I("Edge of Night","Blocks the setup CC."),I("Guardian Angel","Insurance.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Serylda's Grudge","Slow denies their kite/disengage."),I("Voltaic Cyclosword","Burst before they can drain back."),I("Edge of Night","Blocks their combo CC.")],behind:[I("Maw of Malmortius","MR + shield vs sustained AP."),I("Edge of Night","Blocks their combo opener."),I("Ionian Boots of Lucidity","Haste to disengage sooner.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Youmuu's Ghostblade","Mobility closes the gap before they can kite."),I("Hubris","Takedowns grant bonus AD for 90 seconds, so one pick on an artillery mage snowballs the next fight."),I("Edge of Night","Blocks one poke ability.")],behind:[I("Edge of Night","Blocks their key poke/CC."),I("Maw of Malmortius","Survive the poke-to-burst combo."),I("Ionian Boots of Lucidity","Haste to close the gap faster.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Axiom Arc","Killing the ADC refunds part of The Call of the Pack's cooldown for the next target in the fight."),I("Edge of Night","Blocks their one peel tool."),I("Serylda's Grudge","Slow denies the kite.")],behind:[I("Edge of Night","Blocks the engage tool set up on you."),I("Maw of Malmortius","Survive their DPS."),I("Guardian Angel","Second life for a risky dive.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Serpent's Fang","Damaging their carry cuts the shields the enchanter puts on them, so your combo still kills."),I("Umbral Glaive","Vision denial so your dive lands clean."),I("Edge of Night","Blocks the peel CC.")],behind:[I("Edge of Night","Blocks the setup CC on their carry combo."),I("Maw of Malmortius","Survive the combined burst."),I("Guardian Angel","Insurance.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Edge of Night","Blocks the hook outright."),I("Youmuu's Ghostblade","Mobility dodges hooks entirely."),I("Axiom Arc","Kill them after a whiffed hook and The Call of the Pack comes back sooner.")],behind:[I("Edge of Night","Mandatory — a landed hook cancels your whole combo otherwise."),I("Maw of Malmortius","Survive the follow-up."),I("Guardian Angel","Deny the pick's value.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Serylda's Grudge","Slow denies their initiation follow-through."),I("Edge of Night","Blocks their engage CC."),I("Voltaic Cyclosword","Burst before the frontline arrives.")],behind:[I("Edge of Night","Blocks the engage that chains into your death."),I("Maw of Malmortius","Survive the initiation."),I("Ionian Boots of Lucidity","Haste to reposition.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Serpent's Fang","Damaging the carry cuts the shields the Warden puts on them, so the burst still kills."),I("Serylda's Grudge","Slow keeps the pack in range past the Warden."),I("Axiom Arc","Extra burst matters past their mitigation.")],behind:[I("Edge of Night","Blocks their key CC."),I("Maw of Malmortius","Survive their counter-peel."),I("Guardian Angel","Insurance.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Edge of Night","Blocks Teemo blind / Kennen stun outright."),I("Bastionbreaker","Your next ability hit deals bonus true damage to burst a squishy Specialist, and the takedown arms a true-damage hit on the next turret."),I("Youmuu's Ghostblade","Mobility keeps you ahead of kiting specialists.")],behind:[I("Edge of Night","Blocks their key disable."),I("Maw of Malmortius","AP specialists — lifeline shield."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
      },
    },
  },
};
