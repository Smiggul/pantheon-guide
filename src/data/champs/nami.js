import { I } from "../runeHelpers.js";

const NAMI_SUP_DEFAULT_RUNES = {
  keystone:       "Summon Aery",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Revitalize"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Nami's poke-and-heal playstyle pairs perfectly with Summon Aery — her low cooldowns let her proc it again almost the moment it returns, adding shield or damage value to nearly every ability cast. Manaflow Band solves the mana strain of constant Q/W casting; Transcendence adds haste for more Aery procs. Bone Plating adds tankiness into engage-heavy lanes; Revitalize is the obvious pick to boost W's healing and Aery's shield value.",
};

// ══════════════════════════════════════════════════════════════════════════
//  NAMI — Enchanter / Poke-and-Peel
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"nami", display:"Nami", dd:"Nami",
  color:"#1a6b8a", glow:"#5ecbd8",
  lanes:["Support"],
  roles:{
    Support:{
      bans:["Blitzcrank","Pyke","Nautilus"], replacements:["Lulu","Leona","Thresh"],
      role:"Enchanter / Poke-and-Peel",
      corePath:"Echoes of Helia  ›  Ionian Boots of Lucidity  ›  Moonstone Renewer  ›  Ardent Censer",
      coreNote:"Nami plays for poke-and-peel — Aqua Prison lands the engage or the save, Tidecaller's Blessing empowers an ally's next auto, Ebb and Flow bounces heal/damage between herself and allies. Imperial Mandate detonates on her frequent CC landings for team-wide poke; Moonstone Renewer and Ardent Censer both amplify her already-strong heal/shield output onto the whole team.",
      sideItems:["Mercury's Treads","Staff of Flowing Water","Redemption","Zeke's Convergence","Chemtech Putrifier","Mikael's Blessing"],
      data:{
        JUGGERNAUT:{ahead:[I("Imperial Mandate","Aqua Prison landing detonates for extra poke."),I("Moonstone Renewer","Amplify the heal through their walk-down."),I("Redemption","Offsets accumulated poke damage.")],behind:[I("Mikael's Blessing","Cleanse any CC they carry."),I("Mercury's Treads","Reduce their key CC."),I("Moonstone Renewer","Core defensive value vs their press.")],runes:{...NAMI_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Staff of Flowing Water","Amplify the shield to peel the dive."),I("Imperial Mandate","Punish their commit after Aqua Prison lands."),I("Mikael's Blessing","Cleanse the CC that starts the dive.")],behind:[I("Mikael's Blessing","Cleanse and heal through the all-in."),I("Moonstone Renewer","Extra heal layer."),I("Mercury's Treads","Shorter CC on the engage.")],runes:{...NAMI_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Moonstone Renewer","Heal eats the opener."),I("Mikael's Blessing","Cleanse the setup CC before the burst lands."),I("Staff of Flowing Water","Amplify the save.")],behind:[I("Mikael's Blessing","Non-negotiable — cleanses the burst combo."),I("Moonstone Renewer","Extra heal layer."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...NAMI_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Zeke's Convergence","Amplify ADC damage in the 2v2."),I("Staff of Flowing Water","Amplify the peel shield."),I("Moonstone Renewer","Heal war.")],behind:[I("Moonstone Renewer","Heal to survive the duel."),I("Mikael's Blessing","Cleanse their all-in CC."),I("Mercury's Treads","Reduce their gap-close CC.")],runes:{...NAMI_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Mercury's Treads","Reduce CC chains before their combo."),I("Moonstone Renewer","Heal through the combo."),I("Mikael's Blessing","Cleanse the setup CC.")],behind:[I("Mikael's Blessing","Mandatory — cleanses the combo opener."),I("Mercury's Treads","Shorten CC duration."),I("Moonstone Renewer","Extra heal layer.")],runes:{...NAMI_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Redemption","Sustain your lane through their drain war."),I("Staff of Flowing Water","Amplify heals through their DPS."),I("Moonstone Renewer","Heal layer.")],behind:[I("Redemption","Global healing offsets their sustained damage."),I("Chemtech Putrifier","GW cuts Vladimir/Swain healing."),I("Moonstone Renewer","Heal war.")],runes:{...NAMI_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Moonstone Renewer","Mitigate poke chip with heal."),I("Redemption","Offsets the poke over time.")],behind:[I("Redemption","Global heal counters accumulated chip."),I("Mercury's Treads","Reduce CC duration."),I("Moonstone Renewer","Heal layer.")],runes:{...NAMI_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Zeke's Convergence","Amplify your ADC's damage output."),I("Imperial Mandate","Aqua Prison landing sets up amplified poke."),I("Staff of Flowing Water","Amplify heals on the carry.")],behind:[I("Moonstone Renewer","Non-negotiable — protect your carry."),I("Mikael's Blessing","Cleanse the setup CC on your ADC."),I("Redemption","Offsets the deficit.")],runes:{...NAMI_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Ardent Censer","Amplify the heal war in your favor."),I("Staff of Flowing Water","Amplify heals further."),I("Zeke's Convergence","Amplify ADC damage.")],behind:[I("Moonstone Renewer","Heal war baseline."),I("Redemption","Global heal offsets theirs."),I("Mikael's Blessing","Cleanse their key CC.")],runes:{...NAMI_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mikael's Blessing","Cleanse hooks before the follow-up."),I("Moonstone Renewer","Heal vs pick attempts."),I("Mercury's Treads","Dodge the hook range.")],behind:[I("Mikael's Blessing","Mandatory — cleanses a landed hook."),I("Mercury's Treads","Reduce CC duration."),I("Moonstone Renewer","Extra heal layer.")],runes:{...NAMI_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Moonstone Renewer","Heal through the engage."),I("Mikael's Blessing","Cleanse their CC chain."),I("Staff of Flowing Water","Amplify the save.")],behind:[I("Mikael's Blessing","Cleanses the engage that would otherwise chain-CC your ADC."),I("Mercury's Treads","Shorter stuns from their initiation."),I("Moonstone Renewer","Heal layer.")],runes:{...NAMI_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Ardent Censer","Amplify through their mitigation via heals."),I("Staff of Flowing Water","Amplify heals further."),I("Zeke's Convergence","Amplify ADC damage past the body-block.")],behind:[I("Moonstone Renewer","Heal war."),I("Redemption","Global heal in the extended peel war."),I("Chemtech Putrifier","GW cuts their passive sustain.")],runes:{...NAMI_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Mercury's Treads","Teemo blind, Kennen stun — reduce both."),I("Moonstone Renewer","Heal through their poke/kit."),I("Mikael's Blessing","Cleanse their key setup ability.")],behind:[I("Mercury's Treads","Shortens their key disable."),I("Mikael's Blessing","Cleanses burst setups."),I("Redemption","Global heal while you figure out the matchup.")],runes:{...NAMI_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
