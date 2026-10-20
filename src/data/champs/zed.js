import { I } from "../runeHelpers.js";

const ZED_MID_DEFAULT_RUNES = {
  keystone:       "First Strike",
  primary:        "Inspiration",
  primaryRunes:   ["Cash Back","Triple Tonic","Jack Of All Trades"],
  secondary:      "Precision",
  secondaryRunes: ["Legend: Haste","Cut Down"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "First Strike is Zed's most common keystone on 26.20, on about 54-60% of Emerald+ mid games (OP.GG 102k games, Lolalytics 127k); Electrocute has fallen to about 17% with a lower win rate. Opening a trade with Razor Shuriken from his shadow triggers it: 7% extra damage for 3 seconds, with part of that bonus damage paid back as gold, which speeds up the Voltaic Cyclosword and Bastionbreaker spikes. Cash Back refunds 7.5% of every legendary item, Triple Tonic hands out elixirs at levels 3, 6 and 9, and Jack Of All Trades turns his mix of item stats into ability haste and adaptive force. Precision secondary: Legend: Haste lowers his basic-ability cooldowns as he farms and takes kills, and Cut Down adds damage while the target is above 60% health, which is when his all-in starts.",
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
      corePath:"Voltaic Cyclosword  ›  Bastionbreaker  ›  Lord Dominik's Regards  ›  Axiom Arc",
      coreNote:"Zed plays for isolated burst windows — walk a wave, land Razor Shuriken into Death Mark, reset with Living Shadow. On 26.20 the front of his build is settled: Voltaic Cyclosword is his first item in about 69% of Emerald+ mid games (Lolalytics, ~136k), Bastionbreaker follows it 72% of the time, and all five of OP.GG's top cores start with the pair. Voltaic Cyclosword's energized attack adds a slice of the target's current health to the combo, and Bastionbreaker adds bonus true damage to his next ability hit every 20 seconds. Lord Dominik's Regards is the most common third item (28% of games after that pair, ~21k; OP.GG agrees): its armor penetration keeps the burst lethal once the enemy buys armor, and Giant Slayer adds damage against bonus-health targets. Axiom Arc is only a narrow fourth; each takedown refunds part of Death Mark's cooldown.",
      sideItems:["Ionian Boots of Lucidity","Mercury's Treads","Gluttonous Greaves","Serylda's Grudge","Edge of Night","Serpent's Fang","Eclipse","Youmuu's Ghostblade","Umbral Glaive","Maw of Malmortius","Guardian Angel"],
      data:{
        JUGGERNAUT:{ahead:[I("Serylda's Grudge","Slow keeps you out of range while they can't catch back up."),I("Edge of Night","Blocks the CC that would let them punish your engage."),I("Voltaic Cyclosword","Extra proc burst before their damage scales up.")],behind:[I("Edge of Night","Still blocks their key engage CC."),I("Maw of Malmortius","Shield vs their all-in."),I("Guardian Angel","Second chance if you get caught.")],runes:{...ZED_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Edge of Night","Blocks the CC that starts their dive."),I("Axiom Arc","A takedown refunds part of Death Mark's cooldown, so it is back up for their next dive."),I("Youmuu's Ghostblade","Extra mobility to disengage after the trade.")],behind:[I("Edge of Night","Mandatory — blocks the dive's opening CC."),I("Maw of Malmortius","Shield lifeline vs their burst."),I("Guardian Angel","Insurance after a bad trade.")],runes:{...ZED_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Bastionbreaker","Your next ability hit on a champion deals bonus true damage, so you win the race to burst first."),I("Edge of Night","Blocks their setup CC before the combo."),I("Voltaic Cyclosword","Early trade edge from the proc.")],behind:[I("Edge of Night","Blocks their engage tool."),I("Maw of Malmortius","Shield vs the burst combo."),I("Guardian Angel","Deny the kill.")],runes:{...ZED_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Serylda's Grudge","Slow denies their kite/duel pattern."),I("Axiom Arc","Extra burst wins the extended trade."),I("Edge of Night","Blocks their gap-close CC.")],behind:[I("Edge of Night","Blocks their all-in opener."),I("Maw of Malmortius","Shield through the duel."),I("Umbral Glaive","Vision denial to reset safely.")],runes:{...ZED_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Edge of Night","Spellshield the combo's key CC."),I("Maw of Malmortius","Shield through the rotation."),I("Bastionbreaker","Bonus true damage on your next ability hit lets one Shuriken-into-Death Mark rotation kill a squishy mage.")],behind:[I("Maw of Malmortius","Mandatory lifeline vs burst mages."),I("Edge of Night","Blocks the setup CC."),I("Guardian Angel","Insurance.")],runes:{...ZED_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Serylda's Grudge","Slow denies their kite/disengage."),I("Voltaic Cyclosword","Burst before they can drain back."),I("Edge of Night","Blocks their combo CC.")],behind:[I("Maw of Malmortius","MR + shield vs sustained AP."),I("Edge of Night","Blocks their combo opener."),I("Ionian Boots of Lucidity","Haste to disengage sooner.")],runes:{...ZED_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Youmuu's Ghostblade","Mobility closes the gap before they can kite."),I("Bastionbreaker","Bonus true damage on your next ability hit chunks them the moment you close the gap."),I("Edge of Night","Blocks one poke ability.")],behind:[I("Edge of Night","Blocks their key poke/CC."),I("Maw of Malmortius","Survive the poke-to-burst combo."),I("Ionian Boots of Lucidity","Haste to close the gap faster.")],runes:{...ZED_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Axiom Arc","Killing the ADC refunds part of Death Mark's cooldown for the next target in the fight."),I("Edge of Night","Blocks their one peel tool."),I("Serylda's Grudge","Slow denies the kite.")],behind:[I("Edge of Night","Blocks the engage tool set up on you."),I("Maw of Malmortius","Survive their DPS."),I("Guardian Angel","Second life for a risky dive.")],runes:{...ZED_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Serpent's Fang","Damaging their carry cuts the shields the enchanter puts on them, so your combo still kills."),I("Umbral Glaive","Vision denial so your dive lands clean."),I("Edge of Night","Blocks the peel CC.")],behind:[I("Edge of Night","Blocks the setup CC on their carry combo."),I("Maw of Malmortius","Survive the combined burst."),I("Guardian Angel","Insurance.")],runes:{...ZED_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Edge of Night","Blocks the hook outright."),I("Youmuu's Ghostblade","Mobility dodges hooks entirely."),I("Axiom Arc","Kill them after a whiffed hook and Death Mark comes back sooner.")],behind:[I("Edge of Night","Mandatory — a landed hook cancels your whole combo otherwise."),I("Maw of Malmortius","Survive the follow-up."),I("Guardian Angel","Deny the pick's value.")],runes:{...ZED_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Serylda's Grudge","Slow denies their initiation follow-through."),I("Edge of Night","Blocks their engage CC."),I("Voltaic Cyclosword","Burst before the frontline arrives.")],behind:[I("Edge of Night","Blocks the engage that chains into your death."),I("Maw of Malmortius","Survive the initiation."),I("Ionian Boots of Lucidity","Haste to reposition.")],runes:{...ZED_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Serpent's Fang","Damaging the carry cuts the shields the Warden puts on them, so the burst still kills."),I("Serylda's Grudge","Slow keeps the carry in range past the Warden."),I("Axiom Arc","Extra burst still matters past their mitigation.")],behind:[I("Edge of Night","Blocks their key CC."),I("Maw of Malmortius","Survive their counter-peel."),I("Guardian Angel","Insurance.")],runes:{...ZED_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Edge of Night","Blocks Teemo blind / Kennen stun outright."),I("Bastionbreaker","Your next ability hit deals bonus true damage to burst a squishy Specialist, and the takedown arms a true-damage hit on the next turret."),I("Youmuu's Ghostblade","Mobility keeps you ahead of kiting specialists.")],behind:[I("Edge of Night","Blocks their key disable."),I("Maw of Malmortius","AP specialists — lifeline shield."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...ZED_MID_DEFAULT_RUNES}},
      },
    },
  },
};
