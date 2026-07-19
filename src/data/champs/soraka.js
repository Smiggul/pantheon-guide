import { I } from "../runeHelpers.js";

const SORAKA_SUP_DEFAULT_RUNES = {
  keystone:       "Summon Aery",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Revitalize"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Summon Aery adds free poke or shield value to Soraka's already constant Starcall casts. Manaflow Band solves the mana strain of nonstop healing and casting; Transcendence adds haste for more Astral Infusion heal windows. Bone Plating covers all-in lanes; Scorch (or Gathering Storm in harder matchups) adds early pressure. Revitalize is the obvious pick to amplify her sky-high heal-per-cast output even further.",
};

// ══════════════════════════════════════════════════════════════════════════
//  SORAKA — Enchanter / Global Sustain
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"soraka", display:"Soraka", dd:"Soraka",
  color:"#5a3a7a", glow:"#e0c0f0",
  lanes:["Support"],
  roles:{
    Support:{
      bans:["Blitzcrank","Pyke","Nautilus"], replacements:["Lulu","Nami","Karma"],
      role:"Enchanter / Global Sustain",
      corePath:"Dream Maker  ›  Ionian Boots of Lucidity  ›  Moonstone Renewer  ›  Redemption",
      coreNote:"Soraka plays for outlasting the enemy team through sheer sustain — Starcall pokes and self-heals, Astral Infusion tops off any ally on the map, and Wish revives the whole team from a losing fight. Dream Maker and Moonstone Renewer both massively amplify her already-absurd heal output; Ionian Boots gets haste online fast for more heal windows; Redemption adds a second global save on top of Wish.",
      sideItems:["Dawncore","Staff of Flowing Water","Mikael's Blessing","Chemtech Putrifier","Ardent Censer","Mercury's Treads"],
      data:{
        JUGGERNAUT:{ahead:[I("Moonstone Renewer","Heal covers the walk-down window."),I("Redemption","Global save if they still connect."),I("Dream Maker","Amplifies the shield/heal further.")],behind:[I("Mikael's Blessing","Cleanse any CC they carry."),I("Mercury's Treads","Reduce their key CC."),I("Moonstone Renewer","Core defensive value vs their press.")],runes:{...SORAKA_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Staff of Flowing Water","Amplify the heal to peel the dive."),I("Moonstone Renewer","Heal absorbs the opening burst."),I("Mikael's Blessing","Cleanse the CC that starts the dive.")],behind:[I("Mikael's Blessing","Cleanse and heal through the all-in."),I("Moonstone Renewer","Extra heal layer."),I("Mercury's Treads","Shorter CC on the engage.")],runes:{...SORAKA_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Moonstone Renewer","Heal eats the opener."),I("Mikael's Blessing","Cleanse the setup CC before the burst lands."),I("Staff of Flowing Water","Amplify the save.")],behind:[I("Mikael's Blessing","Non-negotiable — cleanses the burst combo."),I("Moonstone Renewer","Extra heal layer."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...SORAKA_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Staff of Flowing Water","Amplify the heal war in the 2v2."),I("Ardent Censer","Amplify ADC damage in the duel."),I("Moonstone Renewer","Heal war.")],behind:[I("Moonstone Renewer","Heal to survive the duel."),I("Mikael's Blessing","Cleanse their all-in CC."),I("Mercury's Treads","Reduce their gap-close CC.")],runes:{...SORAKA_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Mercury's Treads","Reduce CC chains before their combo."),I("Moonstone Renewer","Heal through the combo."),I("Mikael's Blessing","Cleanse the setup CC.")],behind:[I("Mikael's Blessing","Mandatory — cleanses the combo opener."),I("Mercury's Treads","Shorten CC duration."),I("Moonstone Renewer","Extra heal layer.")],runes:{...SORAKA_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Redemption","Sustain your lane through their drain war."),I("Staff of Flowing Water","Amplify heals through their DPS."),I("Moonstone Renewer","Heal layer.")],behind:[I("Redemption","Global healing offsets their sustained damage."),I("Chemtech Putrifier","GW cuts Vladimir/Swain healing."),I("Moonstone Renewer","Heal war.")],runes:{...SORAKA_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Moonstone Renewer","Mitigate poke chip with heal."),I("Redemption","Offsets the poke over time.")],behind:[I("Redemption","Global heal counters accumulated chip."),I("Mercury's Treads","Reduce CC duration."),I("Moonstone Renewer","Heal layer.")],runes:{...SORAKA_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Ardent Censer","Amplify your ADC's damage output."),I("Staff of Flowing Water","Amplify heals on the carry."),I("Moonstone Renewer","Non-negotiable — protect your carry.")],behind:[I("Moonstone Renewer","Non-negotiable — protect your carry."),I("Mikael's Blessing","Cleanse the setup CC on your ADC."),I("Redemption","Offsets the deficit.")],runes:{...SORAKA_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Ardent Censer","Amplify the heal war in your favor."),I("Staff of Flowing Water","Amplify heals further."),I("Moonstone Renewer","Heal war.")],behind:[I("Moonstone Renewer","Heal war baseline."),I("Redemption","Global heal offsets theirs."),I("Mikael's Blessing","Cleanse their key CC.")],runes:{...SORAKA_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mikael's Blessing","Cleanse hooks before the follow-up."),I("Moonstone Renewer","Heal vs pick attempts."),I("Mercury's Treads","Dodge the hook range.")],behind:[I("Mikael's Blessing","Mandatory — cleanses a landed hook."),I("Mercury's Treads","Reduce CC duration."),I("Moonstone Renewer","Extra heal layer.")],runes:{...SORAKA_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Moonstone Renewer","Heal through the engage."),I("Mikael's Blessing","Cleanse their CC chain."),I("Staff of Flowing Water","Amplify the save.")],behind:[I("Mikael's Blessing","Cleanses the engage that would otherwise chain-CC your ADC."),I("Mercury's Treads","Shorter stuns from their initiation."),I("Moonstone Renewer","Heal layer.")],runes:{...SORAKA_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Ardent Censer","Amplify through their mitigation via heals."),I("Staff of Flowing Water","Amplify heals further."),I("Moonstone Renewer","Amplify ADC damage past the body-block.")],behind:[I("Moonstone Renewer","Heal war."),I("Redemption","Global heal in the extended peel war."),I("Chemtech Putrifier","GW cuts their passive sustain.")],runes:{...SORAKA_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Mercury's Treads","Teemo blind, Kennen stun — reduce both."),I("Moonstone Renewer","Heal through their poke/kit."),I("Mikael's Blessing","Cleanse their key setup ability.")],behind:[I("Mercury's Treads","Shortens their key disable."),I("Mikael's Blessing","Cleanses burst setups."),I("Redemption","Global heal while you figure out the matchup.")],runes:{...SORAKA_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
