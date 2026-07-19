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
      corePath:"Hubris  ›  Ionian Boots of Lucidity  ›  Voltaic Cyclosword  ›  Axiom Arc",
      coreNote:"Kayn plays for an early invade-and-snowball pattern that culminates in a form choice — Rhaast against squishy teams, Shadow Assassin against tanky ones, both funneled through Shadow Step's terrain-phasing dash. Hubris rewards aggressive early takedowns with permanent AD; Voltaic Cyclosword's proc doubles his combo burst; Axiom Arc adds lethality and ultimate damage for whichever form he picks.",
      sideItems:["Serylda's Grudge","Edge of Night","Youmuu's Ghostblade","Duskblade of Draktharr","Guardian Angel","Maw of Malmortius"],
      data:{
        JUGGERNAUT:{ahead:[I("Serylda's Grudge","Slow keeps them inside kill range."),I("Edge of Night","Blocks their key engage CC."),I("Voltaic Cyclosword","Extra proc burst before their damage scales up.")],behind:[I("Edge of Night","Still blocks their key engage CC."),I("Maw of Malmortius","Shield vs their all-in."),I("Guardian Angel","Second chance if you get caught.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Edge of Night","Blocks the CC that starts their dive."),I("Duskblade of Draktharr","Burst them the instant Shadow Step reveals a target."),I("Youmuu's Ghostblade","Extra mobility to disengage after.")],behind:[I("Edge of Night","Mandatory — blocks the dive's opening CC."),I("Maw of Malmortius","Shield lifeline vs their burst."),I("Guardian Angel","Insurance after a bad trade.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Duskblade of Draktharr","Out-burst the mirror matchup."),I("Edge of Night","Blocks their setup CC before the combo."),I("Voltaic Cyclosword","Early trade edge from the proc.")],behind:[I("Edge of Night","Blocks their engage tool."),I("Maw of Malmortius","Shield vs the burst combo."),I("Guardian Angel","Deny the kill.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Serylda's Grudge","Slow denies their kite/duel pattern."),I("Axiom Arc","Extra burst wins the extended trade."),I("Edge of Night","Blocks their gap-close CC.")],behind:[I("Edge of Night","Blocks their all-in opener."),I("Maw of Malmortius","Shield through the duel."),I("Youmuu's Ghostblade","Mobility resets safely.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Edge of Night","Spellshield the combo's key CC."),I("Maw of Malmortius","Shield through the rotation."),I("Duskblade of Draktharr","Burst them before they can react.")],behind:[I("Maw of Malmortius","Mandatory lifeline vs burst mages."),I("Edge of Night","Blocks the setup CC."),I("Guardian Angel","Insurance.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Serylda's Grudge","Slow denies their kite/disengage."),I("Voltaic Cyclosword","Burst before they can drain back."),I("Edge of Night","Blocks their combo CC.")],behind:[I("Maw of Malmortius","MR + shield vs sustained AP."),I("Edge of Night","Blocks their combo opener."),I("Ionian Boots of Lucidity","Haste to disengage sooner.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Youmuu's Ghostblade","Mobility closes the gap before they can kite."),I("Duskblade of Draktharr","Burst on arrival."),I("Edge of Night","Blocks one poke ability.")],behind:[I("Edge of Night","Blocks their key poke/CC."),I("Maw of Malmortius","Survive the poke-to-burst combo."),I("Ionian Boots of Lucidity","Haste to close the gap faster.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Duskblade of Draktharr","Burst the squishy ADC outright."),I("Edge of Night","Blocks their one peel tool."),I("Serylda's Grudge","Slow denies the kite.")],behind:[I("Edge of Night","Blocks the engage tool set up on you."),I("Maw of Malmortius","Survive their DPS."),I("Guardian Angel","Second life for a risky dive.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Duskblade of Draktharr","Burst through shields to the carry."),I("Edge of Night","Blocks the peel CC."),I("Voltaic Cyclosword","Proc damage denies their sustain package.")],behind:[I("Edge of Night","Blocks the setup CC on their carry combo."),I("Maw of Malmortius","Survive the combined burst."),I("Guardian Angel","Insurance.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Edge of Night","Blocks the hook outright."),I("Youmuu's Ghostblade","Mobility dodges hooks entirely."),I("Duskblade of Draktharr","Punish a whiffed hook.")],behind:[I("Edge of Night","Mandatory — a landed hook cancels your whole combo otherwise."),I("Maw of Malmortius","Survive the follow-up."),I("Guardian Angel","Deny the pick's value.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Serylda's Grudge","Slow denies their initiation follow-through."),I("Edge of Night","Blocks their engage CC."),I("Voltaic Cyclosword","Burst before the frontline arrives.")],behind:[I("Edge of Night","Blocks the engage that chains into your death."),I("Maw of Malmortius","Survive the initiation."),I("Ionian Boots of Lucidity","Haste to reposition.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Duskblade of Draktharr","Burst past their body-block before the peel sets up."),I("Serylda's Grudge","Slow keeps the target in range past the Warden."),I("Axiom Arc","Extra burst matters past their mitigation.")],behind:[I("Edge of Night","Blocks their key CC."),I("Maw of Malmortius","Survive their counter-peel."),I("Guardian Angel","Insurance.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Edge of Night","Blocks Teemo blind / Kennen stun outright."),I("Duskblade of Draktharr","Burst vs squishy specialists caught close."),I("Youmuu's Ghostblade","Mobility keeps you ahead of kiting specialists.")],behind:[I("Edge of Night","Blocks their key disable."),I("Maw of Malmortius","AP specialists — lifeline shield."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...KAYN_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
