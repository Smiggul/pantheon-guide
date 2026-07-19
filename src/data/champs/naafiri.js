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
  roles:{
    Jungle:{
      bans:["Nocturne","Wukong","Briar"], replacements:["Warwick","Sett","Shyvana"],
      role:"Assassin / Pack-Hunt Burst",
      corePath:"Voltaic Cyclosword  ›  Axiom Arc  ›  Ionian Boots of Lucidity  ›  Serylda's Grudge",
      coreNote:"Naafiri plays for a snowballing pack-hunt pattern — summon the hound pack with her passive, dash in with Q, and let the swarm overwhelm an isolated target. Voltaic Cyclosword's proc doubles her early burst; Axiom Arc adds lethality and ultimate damage; Serylda's Grudge's slow keeps a target inside the pack's attack range long enough to finish the kill.",
      sideItems:["Edge of Night","Youmuu's Ghostblade","Duskblade of Draktharr","Umbral Glaive","Maw of Malmortius","Guardian Angel"],
      data:{
        JUGGERNAUT:{ahead:[I("Serylda's Grudge","Slow keeps them inside the pack's range."),I("Edge of Night","Blocks their key engage CC."),I("Voltaic Cyclosword","Extra proc burst before their damage scales up.")],behind:[I("Edge of Night","Still blocks their key engage CC."),I("Maw of Malmortius","Shield vs their all-in."),I("Guardian Angel","Second chance if you get caught.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Edge of Night","Blocks the CC that starts their dive."),I("Duskblade of Draktharr","Burst them the instant the pack reveals a target."),I("Youmuu's Ghostblade","Extra mobility to disengage after.")],behind:[I("Edge of Night","Mandatory — blocks the dive's opening CC."),I("Maw of Malmortius","Shield lifeline vs their burst."),I("Guardian Angel","Insurance after a bad trade.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Duskblade of Draktharr","Out-burst the mirror matchup."),I("Edge of Night","Blocks their setup CC before the combo."),I("Voltaic Cyclosword","Early trade edge from the proc.")],behind:[I("Edge of Night","Blocks their engage tool."),I("Maw of Malmortius","Shield vs the burst combo."),I("Guardian Angel","Deny the kill.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Serylda's Grudge","Slow denies their kite/duel pattern."),I("Axiom Arc","Extra burst wins the extended trade."),I("Edge of Night","Blocks their gap-close CC.")],behind:[I("Edge of Night","Blocks their all-in opener."),I("Maw of Malmortius","Shield through the duel."),I("Umbral Glaive","Vision denial to reset safely.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Edge of Night","Spellshield the combo's key CC."),I("Maw of Malmortius","Shield through the rotation."),I("Duskblade of Draktharr","Burst them before they can react.")],behind:[I("Maw of Malmortius","Mandatory lifeline vs burst mages."),I("Edge of Night","Blocks the setup CC."),I("Guardian Angel","Insurance.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Serylda's Grudge","Slow denies their kite/disengage."),I("Voltaic Cyclosword","Burst before they can drain back."),I("Edge of Night","Blocks their combo CC.")],behind:[I("Maw of Malmortius","MR + shield vs sustained AP."),I("Edge of Night","Blocks their combo opener."),I("Ionian Boots of Lucidity","Haste to disengage sooner.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Youmuu's Ghostblade","Mobility closes the gap before they can kite."),I("Duskblade of Draktharr","Burst on arrival."),I("Edge of Night","Blocks one poke ability.")],behind:[I("Edge of Night","Blocks their key poke/CC."),I("Maw of Malmortius","Survive the poke-to-burst combo."),I("Ionian Boots of Lucidity","Haste to close the gap faster.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Duskblade of Draktharr","Burst the squishy ADC outright."),I("Edge of Night","Blocks their one peel tool."),I("Serylda's Grudge","Slow denies the kite.")],behind:[I("Edge of Night","Blocks the engage tool set up on you."),I("Maw of Malmortius","Survive their DPS."),I("Guardian Angel","Second life for a risky dive.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Duskblade of Draktharr","Burst through shields to the carry."),I("Umbral Glaive","Vision denial so your dive lands clean."),I("Edge of Night","Blocks the peel CC.")],behind:[I("Edge of Night","Blocks the setup CC on their carry combo."),I("Maw of Malmortius","Survive the combined burst."),I("Guardian Angel","Insurance.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Edge of Night","Blocks the hook outright."),I("Youmuu's Ghostblade","Mobility dodges hooks entirely."),I("Duskblade of Draktharr","Punish a whiffed hook.")],behind:[I("Edge of Night","Mandatory — a landed hook cancels your whole combo otherwise."),I("Maw of Malmortius","Survive the follow-up."),I("Guardian Angel","Deny the pick's value.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Serylda's Grudge","Slow denies their initiation follow-through."),I("Edge of Night","Blocks their engage CC."),I("Voltaic Cyclosword","Burst before the frontline arrives.")],behind:[I("Edge of Night","Blocks the engage that chains into your death."),I("Maw of Malmortius","Survive the initiation."),I("Ionian Boots of Lucidity","Haste to reposition.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Duskblade of Draktharr","Burst past their body-block before the peel sets up."),I("Serylda's Grudge","Slow keeps the pack in range past the Warden."),I("Axiom Arc","Extra burst matters past their mitigation.")],behind:[I("Edge of Night","Blocks their key CC."),I("Maw of Malmortius","Survive their counter-peel."),I("Guardian Angel","Insurance.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Edge of Night","Blocks Teemo blind / Kennen stun outright."),I("Duskblade of Draktharr","Burst vs squishy specialists caught close."),I("Youmuu's Ghostblade","Mobility keeps you ahead of kiting specialists.")],behind:[I("Edge of Night","Blocks their key disable."),I("Maw of Malmortius","AP specialists — lifeline shield."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...NAAFIRI_JGL_DEFAULT_RUNES}},
      },
    },
    Mid:{
      bans:["Malzahar","Diana","Lissandra"], replacements:["Katarina","Ahri","Zed"],
      role:"Assassin / Pack-Hunt Burst",
      corePath:"Voltaic Cyclosword  ›  Axiom Arc  ›  Serylda's Grudge  ›  Edge of Night",
      coreNote:"Mid Naafiri plays the same pack-hunt burst pattern as Jungle — dash in with Q, summon the hound swarm, and delete an isolated target before they can respond. Voltaic Cyclosword and Axiom Arc both fund the early-to-mid lethality spike; Serylda's Grudge's slow keeps the target inside pack range; Edge of Night blocks the one CC/spellshield-able ability that would otherwise stop the combo.",
      sideItems:["Youmuu's Ghostblade","Duskblade of Draktharr","Umbral Glaive","Maw of Malmortius","Guardian Angel","Ionian Boots of Lucidity"],
      data:{
        JUGGERNAUT:{ahead:[I("Serylda's Grudge","Slow keeps them inside the pack's range."),I("Edge of Night","Blocks their key engage CC."),I("Voltaic Cyclosword","Extra proc burst before their damage scales up.")],behind:[I("Edge of Night","Still blocks their key engage CC."),I("Maw of Malmortius","Shield vs their all-in."),I("Guardian Angel","Second chance if you get caught.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Edge of Night","Blocks the CC that starts their dive."),I("Duskblade of Draktharr","Burst them the instant the pack reveals a target."),I("Youmuu's Ghostblade","Extra mobility to disengage after.")],behind:[I("Edge of Night","Mandatory — blocks the dive's opening CC."),I("Maw of Malmortius","Shield lifeline vs their burst."),I("Guardian Angel","Insurance after a bad trade.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Duskblade of Draktharr","Out-burst the mirror matchup."),I("Edge of Night","Blocks their setup CC before the combo."),I("Voltaic Cyclosword","Early trade edge from the proc.")],behind:[I("Edge of Night","Blocks their engage tool."),I("Maw of Malmortius","Shield vs the burst combo."),I("Guardian Angel","Deny the kill.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Serylda's Grudge","Slow denies their kite/duel pattern."),I("Axiom Arc","Extra burst wins the extended trade."),I("Edge of Night","Blocks their gap-close CC.")],behind:[I("Edge of Night","Blocks their all-in opener."),I("Maw of Malmortius","Shield through the duel."),I("Umbral Glaive","Vision denial to reset safely.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Edge of Night","Spellshield the combo's key CC."),I("Maw of Malmortius","Shield through the rotation."),I("Duskblade of Draktharr","Burst them before they can react.")],behind:[I("Maw of Malmortius","Mandatory lifeline vs burst mages."),I("Edge of Night","Blocks the setup CC."),I("Guardian Angel","Insurance.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Serylda's Grudge","Slow denies their kite/disengage."),I("Voltaic Cyclosword","Burst before they can drain back."),I("Edge of Night","Blocks their combo CC.")],behind:[I("Maw of Malmortius","MR + shield vs sustained AP."),I("Edge of Night","Blocks their combo opener."),I("Ionian Boots of Lucidity","Haste to disengage sooner.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Youmuu's Ghostblade","Mobility closes the gap before they can kite."),I("Duskblade of Draktharr","Burst on arrival."),I("Edge of Night","Blocks one poke ability.")],behind:[I("Edge of Night","Blocks their key poke/CC."),I("Maw of Malmortius","Survive the poke-to-burst combo."),I("Ionian Boots of Lucidity","Haste to close the gap faster.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Duskblade of Draktharr","Burst the squishy ADC outright."),I("Edge of Night","Blocks their one peel tool."),I("Serylda's Grudge","Slow denies the kite.")],behind:[I("Edge of Night","Blocks the engage tool set up on you."),I("Maw of Malmortius","Survive their DPS."),I("Guardian Angel","Second life for a risky dive.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Duskblade of Draktharr","Burst through shields to the carry."),I("Umbral Glaive","Vision denial so your dive lands clean."),I("Edge of Night","Blocks the peel CC.")],behind:[I("Edge of Night","Blocks the setup CC on their carry combo."),I("Maw of Malmortius","Survive the combined burst."),I("Guardian Angel","Insurance.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Edge of Night","Blocks the hook outright."),I("Youmuu's Ghostblade","Mobility dodges hooks entirely."),I("Duskblade of Draktharr","Punish a whiffed hook.")],behind:[I("Edge of Night","Mandatory — a landed hook cancels your whole combo otherwise."),I("Maw of Malmortius","Survive the follow-up."),I("Guardian Angel","Deny the pick's value.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Serylda's Grudge","Slow denies their initiation follow-through."),I("Edge of Night","Blocks their engage CC."),I("Voltaic Cyclosword","Burst before the frontline arrives.")],behind:[I("Edge of Night","Blocks the engage that chains into your death."),I("Maw of Malmortius","Survive the initiation."),I("Ionian Boots of Lucidity","Haste to reposition.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Duskblade of Draktharr","Burst past their body-block before the peel sets up."),I("Serylda's Grudge","Slow keeps the pack in range past the Warden."),I("Axiom Arc","Extra burst matters past their mitigation.")],behind:[I("Edge of Night","Blocks their key CC."),I("Maw of Malmortius","Survive their counter-peel."),I("Guardian Angel","Insurance.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Edge of Night","Blocks Teemo blind / Kennen stun outright."),I("Duskblade of Draktharr","Burst vs squishy specialists caught close."),I("Youmuu's Ghostblade","Mobility keeps you ahead of kiting specialists.")],behind:[I("Edge of Night","Blocks their key disable."),I("Maw of Malmortius","AP specialists — lifeline shield."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...NAAFIRI_MID_DEFAULT_RUNES}},
      },
    },
  },
};
