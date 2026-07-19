import { I } from "../runeHelpers.js";

const ZED_MID_DEFAULT_RUNES = {
  keystone:       "First Strike",
  primary:        "Inspiration",
  primaryRunes:   ["Cash Back","Triple Tonic","Jack Of All Trades"],
  secondary:      "Precision",
  secondaryRunes: ["Cut Down","Legend: Haste"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "First Strike rewards Zed's poke-first playstyle — entering combat before the enemy earns bonus gold and damage on the opening trade, and he can reliably proc it against most ranged mids with Shuriken poke. Cash Back accelerates his lethality item spike; Triple Tonic and Jack Of All Trades round out early sustain and item-stat scaling. Cut Down punishes tankier targets who'd otherwise out-scale his burst; Legend: Haste keeps Death Mark and Living Shadow available more often.",
};

// ══════════════════════════════════════════════════════════════════════════
//  ZED — Assassin / Isolation Burst
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"zed", display:"Zed", dd:"Zed",
  color:"#1a1a2e", glow:"#c0392b",
  lanes:["Mid"],
  roles:{
    Mid:{
      bans:["Malzahar","Diana","Lissandra"], replacements:["Katarina","Ahri","Locke"],
      role:"Assassin / Isolation Burst",
      corePath:"Voltaic Cyclosword  ›  Axiom Arc  ›  Serylda's Grudge  ›  Edge of Night",
      coreNote:"Zed plays for isolated burst windows — walk a wave, land Shuriken into Death Mark, reset with Living Shadow. Voltaic Cyclosword's proc doubles his combo burst early; Axiom Arc and Serylda's Grudge add lethality and a slow to stick the kill; Edge of Night blocks the single CC that would otherwise stop Death Mark's execute from landing.",
      sideItems:["Ionian Boots of Lucidity","Duskblade of Draktharr","Youmuu's Ghostblade","Umbral Glaive","Maw of Malmortius","Guardian Angel"],
      data:{
        JUGGERNAUT:{ahead:[I("Serylda's Grudge","Slow keeps you out of range while they can't catch back up."),I("Edge of Night","Blocks the CC that would let them punish your engage."),I("Voltaic Cyclosword","Extra proc burst before their damage scales up.")],behind:[I("Edge of Night","Still blocks their key engage CC."),I("Maw of Malmortius","Shield vs their all-in."),I("Guardian Angel","Second chance if you get caught.")],runes:{...ZED_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Edge of Night","Blocks the CC that starts their dive."),I("Duskblade of Draktharr","Burst them the instant Death Mark reveals."),I("Youmuu's Ghostblade","Extra mobility to disengage after the trade.")],behind:[I("Edge of Night","Mandatory — blocks the dive's opening CC."),I("Maw of Malmortius","Shield lifeline vs their burst."),I("Guardian Angel","Insurance after a bad trade.")],runes:{...ZED_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Duskblade of Draktharr","Out-burst the mirror matchup."),I("Edge of Night","Blocks their setup CC before the combo."),I("Voltaic Cyclosword","Early trade edge from the proc.")],behind:[I("Edge of Night","Blocks their engage tool."),I("Maw of Malmortius","Shield vs the burst combo."),I("Guardian Angel","Deny the kill.")],runes:{...ZED_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Serylda's Grudge","Slow denies their kite/duel pattern."),I("Axiom Arc","Extra burst wins the extended trade."),I("Edge of Night","Blocks their gap-close CC.")],behind:[I("Edge of Night","Blocks their all-in opener."),I("Maw of Malmortius","Shield through the duel."),I("Umbral Glaive","Vision denial to reset safely.")],runes:{...ZED_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Edge of Night","Spellshield the combo's key CC."),I("Maw of Malmortius","Shield through the rotation."),I("Duskblade of Draktharr","Burst them before they can react.")],behind:[I("Maw of Malmortius","Mandatory lifeline vs burst mages."),I("Edge of Night","Blocks the setup CC."),I("Guardian Angel","Insurance.")],runes:{...ZED_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Serylda's Grudge","Slow denies their kite/disengage."),I("Voltaic Cyclosword","Burst before they can drain back."),I("Edge of Night","Blocks their combo CC.")],behind:[I("Maw of Malmortius","MR + shield vs sustained AP."),I("Edge of Night","Blocks their combo opener."),I("Ionian Boots of Lucidity","Haste to disengage sooner.")],runes:{...ZED_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Youmuu's Ghostblade","Mobility closes the gap before they can kite."),I("Duskblade of Draktharr","Burst on arrival."),I("Edge of Night","Blocks one poke ability.")],behind:[I("Edge of Night","Blocks their key poke/CC."),I("Maw of Malmortius","Survive the poke-to-burst combo."),I("Ionian Boots of Lucidity","Haste to close the gap faster.")],runes:{...ZED_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Duskblade of Draktharr","Burst the squishy ADC outright."),I("Edge of Night","Blocks their one peel tool."),I("Serylda's Grudge","Slow denies the kite.")],behind:[I("Edge of Night","Blocks the engage tool set up on you."),I("Maw of Malmortius","Survive their DPS."),I("Guardian Angel","Second life for a risky dive.")],runes:{...ZED_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Duskblade of Draktharr","Burst through shields to the carry."),I("Umbral Glaive","Vision denial so your dive lands clean."),I("Edge of Night","Blocks the peel CC.")],behind:[I("Edge of Night","Blocks the setup CC on their carry combo."),I("Maw of Malmortius","Survive the combined burst."),I("Guardian Angel","Insurance.")],runes:{...ZED_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Edge of Night","Blocks the hook outright."),I("Youmuu's Ghostblade","Mobility dodges hooks entirely."),I("Duskblade of Draktharr","Punish a whiffed hook.")],behind:[I("Edge of Night","Mandatory — a landed hook cancels your whole combo otherwise."),I("Maw of Malmortius","Survive the follow-up."),I("Guardian Angel","Deny the pick's value.")],runes:{...ZED_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Serylda's Grudge","Slow denies their initiation follow-through."),I("Edge of Night","Blocks their engage CC."),I("Voltaic Cyclosword","Burst before the frontline arrives.")],behind:[I("Edge of Night","Blocks the engage that chains into your death."),I("Maw of Malmortius","Survive the initiation."),I("Ionian Boots of Lucidity","Haste to reposition.")],runes:{...ZED_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Duskblade of Draktharr","Burst past their body-block before the peel sets up."),I("Serylda's Grudge","Slow keeps the carry in range past the Warden."),I("Axiom Arc","Extra burst still matters past their mitigation.")],behind:[I("Edge of Night","Blocks their key CC."),I("Maw of Malmortius","Survive their counter-peel."),I("Guardian Angel","Insurance.")],runes:{...ZED_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Edge of Night","Blocks Teemo blind / Kennen stun outright."),I("Duskblade of Draktharr","Burst vs squishy specialists caught close."),I("Youmuu's Ghostblade","Mobility keeps you ahead of kiting specialists.")],behind:[I("Edge of Night","Blocks their key disable."),I("Maw of Malmortius","AP specialists — lifeline shield."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...ZED_MID_DEFAULT_RUNES}},
      },
    },
  },
};
