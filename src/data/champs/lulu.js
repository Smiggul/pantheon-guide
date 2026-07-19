import { I } from "../runeHelpers.js";

const LULU_SUP_DEFAULT_RUNES = {
  keystone:       "Summon Aery",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Revitalize"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Summon Aery bounces between Lulu's shields/heals and her poke, adding extra peel damage or ally shielding on every cast. Manaflow Band solves the mana problem from constant W/E casts. Transcendence's haste means more Whimsy polymorphs and Help Pix procs; Scorch adds early poke pressure. Revitalize amplifies every shield and heal she casts — the core enchanter stat.",
};

// ══════════════════════════════════════════════════════════════════════════
//  LULU — Enchanter / Peel-Playmaker
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"lulu", display:"Lulu", dd:"Lulu",
  color:"#c9a4e0", glow:"#e8d0f5",
  lanes:["Support"],
  roles:{
    Support:{
      bans:["Braum","Vel'Koz","Sona"], replacements:["Nami","Karma","Milio"],
      role:"Enchanter / Peel-Playmaker",
      corePath:"Dream Maker  ›  Ardent Censer  ›  Moonstone Renewer  ›  Redemption",
      coreNote:"Lulu enables her ADC's damage and denies enemy dive with Whimsy's polymorph. Dream Maker is now the standard rush item — it amplifies shields/heals onto her carry the same way Staff of Flowing Water used to, but with better scaling. Ardent Censer and Moonstone Renewer stack heal/shield power further; Redemption turns teamfights around with a global heal.",
      sideItems:["Mercury's Treads","Staff of Flowing Water","Zeke's Convergence","Shurelya's Battlesong","Chemtech Putrifier","Mikael's Blessing"],
      data:{
        JUGGERNAUT:{ahead:[I("Locket of the Iron Solari","Shield covers the walk-down window."),I("Staff of Flowing Water","Amplify the shield further."),I("Redemption","Global save if they still connect.")],behind:[I("Locket of the Iron Solari","Core defensive value vs their press."),I("Redemption","Offsets chip damage over the lane."),I("Mercury's Treads","Reduce any CC they carry.")],runes:{...LULU_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Staff of Flowing Water","Amplify the W speed buff to peel the dive."),I("Locket of the Iron Solari","Shield absorbs the opening burst."),I("Mikael's Blessing","Cleanse the CC that starts the dive.")],behind:[I("Mikael's Blessing","Cleanse and heal through the all-in."),I("Locket of the Iron Solari","Extra shield layer."),I("Mercury's Treads","Shorter CC on the engage.")],runes:{...LULU_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield eats the opener."),I("Mikael's Blessing","Cleanse the setup CC before the burst lands."),I("Staff of Flowing Water","Amplify the save.")],behind:[I("Mikael's Blessing","Non-negotiable — cleanses the burst combo."),I("Locket of the Iron Solari","Extra shield layer."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...LULU_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Staff of Flowing Water","Amplify the peel speed buff in the 2v2."),I("Zeke's Convergence","Amplify ADC damage in the duel."),I("Locket of the Iron Solari","Shield war.")],behind:[I("Locket of the Iron Solari","Shield to survive the duel."),I("Mikael's Blessing","Cleanse their all-in CC."),I("Mercury's Treads","Reduce their gap-close CC.")],runes:{...LULU_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Mercury's Treads","Reduce CC chains before their combo."),I("Locket of the Iron Solari","Shield through the combo."),I("Mikael's Blessing","Cleanse the setup CC.")],behind:[I("Mikael's Blessing","Mandatory — cleanses the combo opener."),I("Mercury's Treads","Shorten CC duration."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...LULU_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Redemption","Sustain your lane through their drain war."),I("Staff of Flowing Water","Amplify shields through their DPS."),I("Locket of the Iron Solari","Shield layer.")],behind:[I("Redemption","Global healing offsets their sustained damage."),I("Chemtech Putrifier","GW cuts Vladimir/Swain healing."),I("Locket of the Iron Solari","Shield war.")],runes:{...LULU_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Locket of the Iron Solari","Mitigate poke chip."),I("Redemption","Offsets the poke over time.")],behind:[I("Redemption","Global heal counters accumulated chip."),I("Mercury's Treads","Reduce CC duration."),I("Locket of the Iron Solari","Shield layer.")],runes:{...LULU_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Zeke's Convergence","Amplify your ADC's damage output."),I("Ardent Censer","Amplify heals/on-hit through the trade."),I("Staff of Flowing Water","Amplify shields on the carry.")],behind:[I("Locket of the Iron Solari","Non-negotiable — protect your carry."),I("Mikael's Blessing","Cleanse the setup CC on your ADC."),I("Redemption","Offsets the deficit.")],runes:{...LULU_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Ardent Censer","Amplify the heal war in your favor."),I("Staff of Flowing Water","Amplify shields further."),I("Zeke's Convergence","Amplify ADC damage.")],behind:[I("Locket of the Iron Solari","Shield war baseline."),I("Redemption","Global heal offsets theirs."),I("Mikael's Blessing","Cleanse their key CC.")],runes:{...LULU_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mikael's Blessing","Cleanse hooks before the follow-up."),I("Locket of the Iron Solari","Shield vs pick attempts."),I("Mercury's Treads","Dodge the hook range.")],behind:[I("Mikael's Blessing","Mandatory — cleanses a landed hook."),I("Mercury's Treads","Reduce CC duration."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...LULU_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Locket of the Iron Solari","Shield through the engage."),I("Mikael's Blessing","Cleanse their CC chain."),I("Staff of Flowing Water","Amplify the save.")],behind:[I("Mikael's Blessing","Cleanses the engage that would otherwise chain-CC your ADC."),I("Mercury's Treads","Shorter stuns from their initiation."),I("Locket of the Iron Solari","Shield layer.")],runes:{...LULU_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Ardent Censer","Amplify through their mitigation via heals."),I("Staff of Flowing Water","Amplify shields further."),I("Zeke's Convergence","Amplify ADC damage past the body-block.")],behind:[I("Locket of the Iron Solari","Shield war."),I("Redemption","Global heal in the extended peel war."),I("Chemtech Putrifier","GW cuts their passive sustain.")],runes:{...LULU_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Mercury's Treads","Teemo blind, Kennen stun — reduce both."),I("Locket of the Iron Solari","Shield through their poke/kit."),I("Mikael's Blessing","Cleanse their key setup ability.")],behind:[I("Mercury's Treads","Shortens their key disable."),I("Mikael's Blessing","Cleanses burst setups."),I("Redemption","Global heal while you figure out the matchup.")],runes:{...LULU_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
