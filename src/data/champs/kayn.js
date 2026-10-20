import { I } from "../runeHelpers.js";

const KAYN_JGL_DEFAULT_RUNES = {
  keystone:       "Dark Harvest",
  primary:        "Domination",
  primaryRunes:   ["Sudden Impact","Grisly Mementos","Treasure Hunter"],
  secondary:      "Inspiration",
  secondaryRunes: ["Cosmic Insight","Magical Footwear"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Dark Harvest snowballs off Kayn's Reaping Slash-into-invade pattern, stacking permanent execute damage all game. Sudden Impact procs off the Shadow Step dash through terrain; Grisly Mementos and Treasure Hunter both fund his transformation-dependent item spike. Cosmic Insight and Magical Footwear cut cooldowns and get his boots online for free, feeding more Shadow Step dashes per gank.",
};

// ══════════════════════════════════════════════════════════════════════════
//  KAYN — Assassin / Form-Choice Invader
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"kayn", display:"Kayn", dd:"Kayn",
  color:"#3a1a4a", glow:"#8a3ae0",
  lanes:["Jungle"],
  roles:{
    Jungle:{
      bans:["Warwick","Vi","Elise"], replacements:["Wukong","Sett","Shyvana"],
      role:"Assassin / Form-Choice Invader",
      corePath:"Voltaic Cyclosword  ›  Ionian Boots of Lucidity  ›  Bastionbreaker  ›  Lord Dominik's Regards",
      coreNote:"Kayn plays for an early invade-and-snowball pattern that ends in a form choice, both forms funneled through Shadow Step's terrain-phasing dash. Most players now open Voltaic Cyclosword: it is his first item in 56% of Emerald+ jungle games on 26.20 (Lolalytics build orders, ~103k of ~184k) against 25% for Hubris, and OP.GG has it on 74% of his games. Its energized attack adds a slice of the target's current health to his opening combo. After Voltaic the build splits by form. Shadow Assassin, the burst form for squishy teams, takes Bastionbreaker, the most common second item (30%), for bonus true damage on his next ability hit, then Lord Dominik's Regards (33% after that pair) for armor penetration; that is the path shown. Rhaast, the healing bruiser form for tanky teams, takes Black Cleaver second (25%), then Death's Dance (67% after that pair) and usually Spirit Visage. That Rhaast line barely varies, which makes it the single most common three-item build on OP.GG (7.6% of cores, ~10k games). Hubris first is still a quarter of games: its takedowns grant bonus AD for 90 seconds, so it rewards a successful early invade.",
      sideItems:["Hubris","Black Cleaver","Death's Dance","Spirit Visage","Axiom Arc","Serylda's Grudge","Edge of Night","Youmuu's Ghostblade","Guardian Angel","Maw of Malmortius"],
      data:{
        JUGGERNAUT:{ahead:[I("Serylda's Grudge","Slow keeps them inside kill range."),I("Edge of Night","Blocks their key engage CC."),I("Voltaic Cyclosword","Extra proc burst before their damage scales up.")],behind:[I("Edge of Night","Still blocks their key engage CC."),I("Maw of Malmortius","Shield vs their all-in."),I("Guardian Angel","Second chance if you get caught.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Edge of Night","Blocks the CC that starts their dive."),I("Axiom Arc","A takedown refunds part of Umbral Trespass's cooldown, so it is ready for their next dive."),I("Youmuu's Ghostblade","Extra mobility to disengage after.")],behind:[I("Edge of Night","Mandatory — blocks the dive's opening CC."),I("Maw of Malmortius","Shield lifeline vs their burst."),I("Guardian Angel","Insurance after a bad trade.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Bastionbreaker","Your next ability hit on a champion deals bonus true damage, so you win the race to burst first."),I("Edge of Night","Blocks their setup CC before the combo."),I("Voltaic Cyclosword","Early trade edge from the proc.")],behind:[I("Edge of Night","Blocks their engage tool."),I("Maw of Malmortius","Shield vs the burst combo."),I("Guardian Angel","Deny the kill.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Serylda's Grudge","Slow denies their kite/duel pattern."),I("Axiom Arc","Extra burst wins the extended trade."),I("Edge of Night","Blocks their gap-close CC.")],behind:[I("Edge of Night","Blocks their all-in opener."),I("Maw of Malmortius","Shield through the duel."),I("Youmuu's Ghostblade","Mobility resets safely.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Edge of Night","Spellshield the combo's key CC."),I("Maw of Malmortius","Shield through the rotation."),I("Bastionbreaker","Bonus true damage on your next ability hit kills a squishy mage in one rotation.")],behind:[I("Maw of Malmortius","Mandatory lifeline vs burst mages."),I("Edge of Night","Blocks the setup CC."),I("Guardian Angel","Insurance.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Serylda's Grudge","Slow denies their kite/disengage."),I("Voltaic Cyclosword","Burst before they can drain back."),I("Edge of Night","Blocks their combo CC.")],behind:[I("Maw of Malmortius","MR + shield vs sustained AP."),I("Edge of Night","Blocks their combo opener."),I("Ionian Boots of Lucidity","Haste to disengage sooner.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Youmuu's Ghostblade","Mobility closes the gap before they can kite."),I("Hubris","Takedowns grant bonus AD for 90 seconds, so one pick on an artillery mage snowballs the next fight."),I("Edge of Night","Blocks one poke ability.")],behind:[I("Edge of Night","Blocks their key poke/CC."),I("Maw of Malmortius","Survive the poke-to-burst combo."),I("Ionian Boots of Lucidity","Haste to close the gap faster.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Axiom Arc","Killing the ADC refunds part of Umbral Trespass's cooldown for the next target in the fight."),I("Edge of Night","Blocks their one peel tool."),I("Serylda's Grudge","Slow denies the kite.")],behind:[I("Edge of Night","Blocks the engage tool set up on you."),I("Maw of Malmortius","Survive their DPS."),I("Guardian Angel","Second life for a risky dive.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Serpent's Fang","Damaging their carry cuts the shields the enchanter puts on them, so your combo still kills."),I("Edge of Night","Blocks the peel CC."),I("Voltaic Cyclosword","Proc damage denies their sustain package.")],behind:[I("Edge of Night","Blocks the setup CC on their carry combo."),I("Maw of Malmortius","Survive the combined burst."),I("Guardian Angel","Insurance.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Edge of Night","Blocks the hook outright."),I("Youmuu's Ghostblade","Mobility dodges hooks entirely."),I("Hubris","Punish a whiffed hook: the takedown grants bonus AD for 90 seconds.")],behind:[I("Edge of Night","Mandatory — a landed hook cancels your whole combo otherwise."),I("Maw of Malmortius","Survive the follow-up."),I("Guardian Angel","Deny the pick's value.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Serylda's Grudge","Slow denies their initiation follow-through."),I("Edge of Night","Blocks their engage CC."),I("Voltaic Cyclosword","Burst before the frontline arrives.")],behind:[I("Edge of Night","Blocks the engage that chains into your death."),I("Maw of Malmortius","Survive the initiation."),I("Ionian Boots of Lucidity","Haste to reposition.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Serpent's Fang","Damaging the carry cuts the shields the Warden puts on them, so the burst still kills."),I("Serylda's Grudge","Slow keeps the target in range past the Warden."),I("Axiom Arc","Extra burst matters past their mitigation.")],behind:[I("Edge of Night","Blocks their key CC."),I("Maw of Malmortius","Survive their counter-peel."),I("Guardian Angel","Insurance.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Edge of Night","Blocks Teemo blind / Kennen stun outright."),I("Bastionbreaker","Your next ability hit deals bonus true damage to burst a squishy Specialist, and the takedown arms a true-damage hit on the next turret."),I("Youmuu's Ghostblade","Mobility keeps you ahead of kiting specialists.")],behind:[I("Edge of Night","Blocks their key disable."),I("Maw of Malmortius","AP specialists — lifeline shield."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
