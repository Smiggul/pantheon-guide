import { I } from "../runeHelpers.js";

const JANNA_SUP_DEFAULT_RUNES = {
  keystone:       "Summon Aery",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Celerity","Gathering Storm"],
  secondary:      "Resolve",
  secondaryRunes: ["Font of Life","Revitalize"],
  shards:         ["Adaptive Force","Move Speed","Health (scaling)"],
  reason:         "Summon Aery adds free shield or damage value to Janna's constant Zephyr and Howling Gale poke. Manaflow Band solves the mana strain of nonstop casting; Celerity and Gathering Storm both reward her disengage-heavy playstyle and long scaling games. Font of Life heals the ADC off any impair Howling Gale lands; Revitalize is the obvious pick to amplify Eye of the Storm's shield and her tornado's utility even further.",
};

// ══════════════════════════════════════════════════════════════════════════
//  JANNA — Enchanter / Disengage-and-Peel
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"janna", display:"Janna", dd:"Janna",
  color:"#2a6a7a", glow:"#a0e0f0",
  lanes:["Support"],
  roles:{
    Support:{
      bans:["Blitzcrank","Pyke","Nautilus"], replacements:["Lulu","Nami","Karma"],
      role:"Enchanter / Disengage-and-Peel",
      corePath:"Dream Maker  ›  Boots of Swiftness  ›  Moonstone Renewer  ›  Redemption",
      coreNote:"Janna plays for disengage-and-peel — Howling Gale knocks up an overextended enemy, Eye of the Storm shields the carry, and Monsoon knocks everyone back while healing the whole team. Dream Maker and Moonstone Renewer both massively amplify her shield/heal output; Boots of Swiftness gets her into peel range faster; Redemption adds a second global save on top of Monsoon.",
      sideItems:["Shurelya's Battlesong","Ardent Censer","Mikael's Blessing","Staff of Flowing Water","Chemtech Putrifier","Mercury's Treads"],
      data:{
        JUGGERNAUT:{ahead:[I("Moonstone Renewer","Shield covers the walk-down window."),I("Staff of Flowing Water","Amplify the shield further."),I("Redemption","Global save if they still connect.")],behind:[I("Mikael's Blessing","Cleanse any CC they carry."),I("Mercury's Treads","Reduce their key CC."),I("Moonstone Renewer","Core defensive value vs their press.")],runes:{...JANNA_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Staff of Flowing Water","Amplify the shield to peel the dive."),I("Moonstone Renewer","Shield absorbs the opening burst."),I("Mikael's Blessing","Cleanse the CC that starts the dive.")],behind:[I("Mikael's Blessing","Cleanse and heal through the all-in."),I("Moonstone Renewer","Extra shield layer."),I("Mercury's Treads","Shorter CC on the engage.")],runes:{...JANNA_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Moonstone Renewer","Shield eats the opener."),I("Mikael's Blessing","Cleanse the setup CC before the burst lands."),I("Staff of Flowing Water","Amplify the save.")],behind:[I("Mikael's Blessing","Non-negotiable — cleanses the burst combo."),I("Moonstone Renewer","Extra shield layer."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...JANNA_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Staff of Flowing Water","Amplify the peel shield in the 2v2."),I("Ardent Censer","Amplify ADC damage in the duel."),I("Moonstone Renewer","Shield war.")],behind:[I("Moonstone Renewer","Shield to survive the duel."),I("Mikael's Blessing","Cleanse their all-in CC."),I("Mercury's Treads","Reduce their gap-close CC.")],runes:{...JANNA_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Mercury's Treads","Reduce CC chains before their combo."),I("Moonstone Renewer","Shield through the combo."),I("Mikael's Blessing","Cleanse the setup CC.")],behind:[I("Mikael's Blessing","Mandatory — cleanses the combo opener."),I("Mercury's Treads","Shorten CC duration."),I("Moonstone Renewer","Extra shield layer.")],runes:{...JANNA_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Redemption","Sustain your lane through their drain war."),I("Staff of Flowing Water","Amplify shields through their DPS."),I("Moonstone Renewer","Shield layer.")],behind:[I("Redemption","Global healing offsets their sustained damage."),I("Chemtech Putrifier","GW cuts Vladimir/Swain healing."),I("Moonstone Renewer","Shield war.")],runes:{...JANNA_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Moonstone Renewer","Mitigate poke chip."),I("Redemption","Offsets the poke over time.")],behind:[I("Redemption","Global heal counters accumulated chip."),I("Mercury's Treads","Reduce CC duration."),I("Moonstone Renewer","Shield layer.")],runes:{...JANNA_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Ardent Censer","Amplify your ADC's damage output."),I("Staff of Flowing Water","Amplify shields on the carry."),I("Moonstone Renewer","Non-negotiable — protect your carry.")],behind:[I("Moonstone Renewer","Non-negotiable — protect your carry."),I("Mikael's Blessing","Cleanse the setup CC on your ADC."),I("Redemption","Offsets the deficit.")],runes:{...JANNA_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Ardent Censer","Amplify the heal war in your favor."),I("Staff of Flowing Water","Amplify shields further."),I("Moonstone Renewer","Shield war.")],behind:[I("Moonstone Renewer","Shield war baseline."),I("Redemption","Global heal offsets theirs."),I("Mikael's Blessing","Cleanse their key CC.")],runes:{...JANNA_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mikael's Blessing","Cleanse hooks before the follow-up."),I("Moonstone Renewer","Shield vs pick attempts."),I("Mercury's Treads","Dodge the hook range.")],behind:[I("Mikael's Blessing","Mandatory — cleanses a landed hook."),I("Mercury's Treads","Reduce CC duration."),I("Moonstone Renewer","Extra shield layer.")],runes:{...JANNA_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Moonstone Renewer","Shield through the engage."),I("Mikael's Blessing","Cleanse their CC chain."),I("Staff of Flowing Water","Amplify the save (Monsoon also knocks them all back).")],behind:[I("Mikael's Blessing","Cleanses the engage that would otherwise chain-CC your ADC."),I("Mercury's Treads","Shorter stuns from their initiation."),I("Moonstone Renewer","Shield layer.")],runes:{...JANNA_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Ardent Censer","Amplify through their mitigation via heals."),I("Staff of Flowing Water","Amplify shields further."),I("Moonstone Renewer","Amplify ADC damage past the body-block.")],behind:[I("Moonstone Renewer","Shield war."),I("Redemption","Global heal in the extended peel war."),I("Chemtech Putrifier","GW cuts their passive sustain.")],runes:{...JANNA_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Mercury's Treads","Teemo blind, Kennen stun — reduce both."),I("Moonstone Renewer","Shield through their poke/kit."),I("Mikael's Blessing","Cleanse their key setup ability.")],behind:[I("Mercury's Treads","Shortens their key disable."),I("Mikael's Blessing","Cleanses burst setups."),I("Redemption","Global heal while you figure out the matchup.")],runes:{...JANNA_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
