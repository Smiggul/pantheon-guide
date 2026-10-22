import { I } from "../runeHelpers.js";

const PYKE_SUP_DEFAULT_RUNES = {
  keystone:       "Hail of Blades",
  primary:        "Domination",
  primaryRunes:   ["Cheap Shot","Sixth Sense","Ultimate Hunter"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Unflinching"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Hail of Blades gives 3 rapid attacks the instant Pyke commits — it fills the attack-speed gap his AD/lethality build otherwise lacks, enough to burst through a squishy target before they can react. Cheap Shot adds true damage to any impaired (feared/rooted/slowed) target. Ultimate Hunter scales off constant kill participation, which Pyke's gold-share passive generates relentlessly. Bone Plating and Unflinching keep him alive during his all-in commitment.",
};

const PYKE_MID_DEFAULT_RUNES = {
  keystone:       "Hail of Blades",
  primary:        "Domination",
  primaryRunes:   ["Sudden Impact","Grisly Mementos","Ultimate Hunter"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Unflinching"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Same Hail of Blades burst core as Support, with Sudden Impact (bonus true damage after Phantom Undertow's dash) and Grisly Mementos in place of Cheap Shot and Sixth Sense. The Resolve secondary stays: Bone Plating and Unflinching keep him alive through solo-lane trades, since he has no support items or peeling ADC beside him before his all-ins come online.",
};

// ══════════════════════════════════════════════════════════════════════════
//  PYKE — Assassin / Kill-Lane Roamer
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"pyke", display:"Pyke", dd:"Pyke",
  color:"#1a3a4a", glow:"#4ecdc4",
  lanes:["Support","Mid"],
  roles:{
    Support:{
      bans:["Sona","Renata Glasc","Rell"], replacements:["Thresh","Nautilus","Pantheon"],
      role:"Assassin / Kill-Lane Roamer",
      corePath:"Umbral Glaive  ›  Youmuu's Ghostblade  ›  Edge of Night  ›  Axiom Arc",
      // Research: On 26.20 Umbral is his first legendary in about 71% of Emerald+ support games (lolalytics, ~152k games),
      //   and Umbral into Youmuu's into Edge of Night is his most common three-item build (17% of lolalytics
      //   builds, ~7.4k; 15.7% of OP.GG cores), well ahead of Edge of Night before Youmuu's (about 10%). Eclipse
      //   no longer appears in his builds. Axiom Arc is only a narrow fourth, with Voltaic almost level. Boots of
      //   Swiftness are on 72-75% of his games.
      coreNote:"Pyke plays for kill-lane pressure and cross-map executes. After the support item: Umbral Glaive, Youmuu's Ghostblade, Edge of Night. Umbral reveals nearby wards and traps as you roam and adds true damage to your next attack after you leave sight; Youmuu's speed and Wraith Step take you to the next lane; Edge of Night's spell shield blocks the CC that would stop your engage. Axiom Arc or Voltaic Cyclosword fourth; Axiom refunds part of Death From Below's cooldown on takedowns. Boots of Swiftness.",
      sideItems:["Boots of Swiftness","Ionian Boots of Lucidity","Mercury's Treads","Plated Steelcaps","Voltaic Cyclosword","Serpent's Fang","Hubris","Maw of Malmortius","Guardian Angel"],
      data:{
        JUGGERNAUT:{ahead:[I("Voltaic Cyclosword","An ability hit energizes your next attack to take a slice of their current health, so even a high-HP target feels the engage."),I("Youmuu's Ghostblade","Roam speed picks off their teammates while they're stuck top."),I("Axiom Arc","Each takedown refunds part of Death From Below's cooldown for the next pick.")],behind:[I("Plated Steelcaps","Reduces auto damage vs their press."),I("Mercury's Treads","Shorter CC on the engage."),I("Maw of Malmortius","Lifeline vs their all-in.")],runes:{...PYKE_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Edge of Night","Spell shield eats the engage that starts their dive."),I("Voltaic Cyclosword","Energized bonus damage after Bone Skewer wins the short all-in."),I("Youmuu's Ghostblade","Reposition faster than their follow-up.")],behind:[I("Edge of Night","Blocks the CC that opens their combo."),I("Maw of Malmortius","Lifeline vs the burst."),I("Mercury's Treads","Shorter CC on the engage.")],runes:{...PYKE_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Edge of Night","Two spellshields vs an assassin is an unfair fight."),I("Umbral Glaive","Attack after time out of their sight and Umbral adds true damage, so you strike before their combo starts."),I("Youmuu's Ghostblade","Reach them before they can reset.")],behind:[I("Edge of Night","Blocks the setup spell of their combo."),I("Maw of Malmortius","Lifeline vs the burst."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...PYKE_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Voltaic Cyclosword","An ability into the energized attack wins the short trade before their duel ramps up."),I("Hubris","A takedown grants bonus AD for 90 seconds, so winning one skirmish snowballs the next."),I("Youmuu's Ghostblade","Roam speed avoids the extended duel entirely.")],behind:[I("Maw of Malmortius","Lifeline vs their all-in spike."),I("Mercury's Treads","Shorter CC on their gap-close."),I("Plated Steelcaps","Reduces auto-heavy duelist damage.")],runes:{...PYKE_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Edge of Night","Spell shield eats the combo opener."),I("Voltaic Cyclosword","Once Edge of Night eats their combo, an ability into the energized attack finishes the squishy mage."),I("Youmuu's Ghostblade","Close the gap before their rotation completes.")],behind:[I("Edge of Night","Mandatory — blocks the CC that starts their combo."),I("Maw of Malmortius","Lifeline vs the full rotation."),I("Mercury's Treads","Shorten CC duration.")],runes:{...PYKE_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Voltaic Cyclosword","An ability into the energized attack bursts them before their sustain ramps."),I("Youmuu's Ghostblade","Reach them before they can drain back."),I("Edge of Night","Blocks the CC they open the drain with.")],behind:[I("Maw of Malmortius","Lifeline vs sustained AP damage."),I("Mercury's Treads","Shorter CC to disengage."),I("Plated Steelcaps","Auto reduction if hybrid.")],runes:{...PYKE_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Youmuu's Ghostblade","Close the poke gap before they reposition."),I("Edge of Night","Blocks one long-range CC tool."),I("Umbral Glaive","Reveals the wards that would spot your approach, then adds true damage to your first attack.")],behind:[I("Edge of Night","Blocks the ability punishing your engage attempt."),I("Mercury's Treads","Reduce CC duration from range."),I("Maw of Malmortius","Survive the poke on approach.")],runes:{...PYKE_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Voltaic Cyclosword","An ability hit energizes your next attack for a slice of the ADC's current health."),I("Youmuu's Ghostblade","Close before they can kite."),I("Serpent's Fang","Strip shields protecting the carry.")],behind:[I("Plated Steelcaps","Flat auto reduction if forced to engage."),I("Mercury's Treads","Reduce peel CC."),I("Maw of Malmortius","Survive the peel + DPS.")],runes:{...PYKE_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Serpent's Fang","Strips shields so your burst always connects."),I("Umbral Glaive","Clears the wards around their carry, so the enchanter cannot see the engage coming."),I("Youmuu's Ghostblade","No reposition window before your all-in.")],behind:[I("Serpent's Fang","Still priority — never skip vs shield comps."),I("Edge of Night","Blocks their disengage CC."),I("Maw of Malmortius","Survive their peel + carry burst.")],runes:{...PYKE_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Youmuu's Ghostblade","Outmanoeuvre hooks and engage first."),I("Axiom Arc","Win the pick war and the takedown refunds part of Death From Below's cooldown."),I("Edge of Night","Blocks hook/CC entirely.")],behind:[I("Edge of Night","Spell shield vs hook champs."),I("Mercury's Treads","Shorter root/bind duration."),I("Maw of Malmortius","Survive the follow-up after a catch.")],runes:{...PYKE_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Axiom Arc","Takedowns after their engage refund part of Death From Below's cooldown, so you can chain executes through the fight."),I("Edge of Night","Blocks the engage CC that would lock you down first."),I("Youmuu's Ghostblade","Rotate before their frontline arrives.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Maw of Malmortius","Survive the burst that follows their initiation."),I("Edge of Night","Blocks a key CC in the chain.")],runes:{...PYKE_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Serpent's Fang","Shen/Braum shields stripped by 50% on contact."),I("Voltaic Cyclosword","The energized attack's current-health damage still chunks a carry hiding behind the Warden."),I("Youmuu's Ghostblade","Wraith Step's Ghosting walks you through the body-block to the carry.")],behind:[I("Maw of Malmortius","Survive their peel."),I("Mercury's Treads","Reduce their CC chains."),I("Edge of Night","Blocks a key setup CC.")],runes:{...PYKE_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Umbral Glaive","Reveals Teemo mushrooms and other traps near you, and the out-of-sight true damage bursts a squishy Specialist."),I("Youmuu's Ghostblade","Chase down a kiting Specialist."),I("Axiom Arc","Takedowns refund part of Death From Below's cooldown for the next pick.")],behind:[I("Mercury's Treads","Teemo blind, Kennen stun — shorten both."),I("Maw of Malmortius","Survive burst setups."),I("Edge of Night","Blocks their key setup ability.")],runes:{...PYKE_SUP_DEFAULT_RUNES}},
      },
    },
    Mid:{
      bans:["Malzahar","Galio","Diana"], replacements:["Katarina","Locke","Ahri"],
      role:"Assassin / Off-Meta Solo Lane",
      corePath:"Profane Hydra  ›  Ionian Boots of Lucidity  ›  Voltaic Cyclosword  ›  Bastionbreaker",
      // Research: Thin data: about 1,000 Emerald+ games on 26.20 (0.04% pick rate, 45.9% win rate on lolalytics; OP.GG
      //   shows a similar ~870), so the exact order is indicative, not settled. Profane Hydra is his first item in
      //   roughly 70-85% of those games; Voltaic and Bastionbreaker follow in the most common builds.
      coreNote:"Mid Pyke is an off-meta pick for coordinated dive-heavy comps. Without a support item or a support beside you, you need your own wave clear: Profane Hydra first, whose attacks cleave nearby enemies and whose active hits everything around you. Voltaic Cyclosword and Bastionbreaker follow. The lane is clunky without a peeling ADC, so you are strongest when your jungler paths mid early to cover it.",
      sideItems:["Boots of Swiftness","Mercury's Treads","Youmuu's Ghostblade","Axiom Arc","Edge of Night","Serpent's Fang","Serylda's Grudge","Maw of Malmortius"],
      data:{
        JUGGERNAUT:{ahead:[I("Eclipse","Shield tanks one hit; the burst still kills."),I("Youmuu's Ghostblade","Roam speed to help other lanes instead of trading."),I("Serylda's Grudge","Slow denies their retaliation.")],behind:[I("Mercury's Treads","Shorter CC before the kill."),I("Maw of Malmortius","Lifeline vs their all-in."),I("Edge of Night","Blocks their engage.")],runes:{...PYKE_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Edge of Night","Spell shield eats their engage."),I("Eclipse","Shield + burst wins the mirror all-in."),I("Youmuu's Ghostblade","Reposition faster than their follow-up.")],behind:[I("Edge of Night","Blocks the CC that opens their combo."),I("Maw of Malmortius","Lifeline vs the burst."),I("Mercury's Treads","Shorter CC on the engage.")],runes:{...PYKE_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Edge of Night","Two spellshields vs an assassin is unfair."),I("Eclipse","Out-burst them before their combo completes."),I("Youmuu's Ghostblade","Reach them before they can reset.")],behind:[I("Edge of Night","Blocks the setup spell of their combo."),I("Maw of Malmortius","Lifeline vs the burst."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...PYKE_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Eclipse","Shield absorbs their opener."),I("Serylda's Grudge","Slow denies their kite/reset."),I("Youmuu's Ghostblade","Roam speed avoids the extended duel.")],behind:[I("Maw of Malmortius","Lifeline vs their all-in spike."),I("Mercury's Treads","Shorter CC on their gap-close."),I("Edge of Night","Blocks a key CC.")],runes:{...PYKE_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Edge of Night","Spell shield eats the combo opener."),I("Eclipse","Out-burst them once the shield is up."),I("Youmuu's Ghostblade","Close before their rotation completes.")],behind:[I("Edge of Night","Mandatory — blocks their combo's CC."),I("Maw of Malmortius","Lifeline vs the full rotation."),I("Mercury's Treads","Shorten CC duration.")],runes:{...PYKE_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Eclipse","Short trade window kills before their sustain ramps."),I("Youmuu's Ghostblade","Reach them before they drain back."),I("Serylda's Grudge","Slow denies their kite.")],behind:[I("Maw of Malmortius","Lifeline vs sustained AP damage."),I("Mercury's Treads","Shorter CC to disengage."),I("Edge of Night","Blocks a key CC.")],runes:{...PYKE_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Youmuu's Ghostblade","Close the poke gap before they reposition."),I("Edge of Night","Blocks one long-range CC tool."),I("Eclipse","Delete them once in range.")],behind:[I("Edge of Night","Blocks the ability punishing your engage."),I("Mercury's Treads","Reduce CC duration from range."),I("Maw of Malmortius","Survive the poke on approach.")],runes:{...PYKE_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Eclipse","Two-ability proc guarantees the kill."),I("Youmuu's Ghostblade","Close before they kite."),I("Serpent's Fang","Strip shields protecting the carry.")],behind:[I("Mercury's Treads","Reduce peel CC."),I("Maw of Malmortius","Survive the peel + DPS."),I("Edge of Night","Blocks their peel CC.")],runes:{...PYKE_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Serpent's Fang","Strips shields so your burst always connects."),I("Eclipse","Overkill burst once shields are gone."),I("Youmuu's Ghostblade","No reposition window before your all-in.")],behind:[I("Serpent's Fang","Still priority — never skip vs shield comps."),I("Edge of Night","Blocks their disengage CC."),I("Maw of Malmortius","Survive combined burst.")],runes:{...PYKE_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Youmuu's Ghostblade","Outmanoeuvre hooks and engage first."),I("Eclipse","Kill before they reset the fight."),I("Edge of Night","Blocks hook/CC entirely.")],behind:[I("Edge of Night","Spell shield vs hook champs."),I("Mercury's Treads","Shorter root/bind duration."),I("Maw of Malmortius","Survive the follow-up after a catch.")],runes:{...PYKE_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Eclipse","Burst finishes what their engage started."),I("Serylda's Grudge","Slow helps stick to the backline."),I("Youmuu's Ghostblade","Rotate before their frontline arrives.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Maw of Malmortius","Survive the burst that follows."),I("Edge of Night","Blocks a key CC.")],runes:{...PYKE_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Serpent's Fang","Shen/Braum shields stripped on contact."),I("Eclipse","Burst even shielded targets."),I("Serylda's Grudge","Slow stops their body-block positioning.")],behind:[I("Maw of Malmortius","Survive their peel."),I("Mercury's Treads","Reduce their CC chains."),I("Edge of Night","Blocks a key setup CC.")],runes:{...PYKE_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Eclipse","Burst Singed/Teemo before their kit fully matters."),I("Youmuu's Ghostblade","Chase down a kiting Specialist."),I("Serylda's Grudge","Slow denies their disengage.")],behind:[I("Mercury's Treads","Teemo blind, Kennen stun — shorten both."),I("Maw of Malmortius","Survive burst setups."),I("Edge of Night","Blocks their key setup ability.")],runes:{...PYKE_MID_DEFAULT_RUNES}},
      },
    },
  },
};
