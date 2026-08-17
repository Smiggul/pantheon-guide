import { I } from "../runeHelpers.js";

const SERAPHINE_SUP_DEFAULT_RUNES = {
  keystone:       "Summon Aery",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Gathering Storm"],
  secondary:      "Resolve",
  secondaryRunes: ["Font of Life","Revitalize"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Summon Aery massively outperforms Comet on Support Seraphine, bouncing between her poke and her ally-targeted notes for extra damage or shield value on every cast. Manaflow Band solves the mana strain of constant Q/E casts; Gathering Storm rewards how long her games tend to run. Font of Life heals the ADC off her CC; Revitalize amplifies every shield and heal her empowered notes provide — Seraphine gets more value from it than almost anyone.",
};

const SERAPHINE_ADC_DEFAULT_RUNES = {
  keystone:       "Arcane Comet",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Precision",
  secondaryRunes: ["Presence of Mind","Coup de Grace"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Comet rewards Seraphine's long-range Q and E poke the same way it does for any artillery mage. Manaflow Band and Presence of Mind solve her mana problem from constant casting. Coup de Grace finishes targets whittled down by the poke instead of relying on auto-attack DPS she doesn't have.",
};

// ══════════════════════════════════════════════════════════════════════════
//  SERAPHINE — Enchanter-Mage / Triple-Role Flex
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"seraphine", display:"Seraphine", dd:"Seraphine",
  color:"#e8a4d8", glow:"#f8c8f0",
  lanes:["Support","Bot"],
  altBuilds:{
    Bot:[{
      label:"OP 26.16 ALT", tag:"alt",
      corePath:"Archangel's Staff  ›  Sorcerer's Shoes  ›  Demonic Embrace  ›  Rylai's Crystal Scepter",
      coreNote:"Skill-Capped 26.16 solo-carry bot Seraphine: a cheap, effective scaling core — Archangel's Staff → Demonic Embrace → Rylai's — that she completes fast off the ADC role-quest gold (versus the 3,000g+ items traditional ADCs rush). Tankier and more consistent than the Malignance burst line; her kit does the skirmish work, so she stays impactful no matter how lane goes. The only real threat is a hook support, so ban Blitzcrank or Pyke.",
      runes:{...SERAPHINE_ADC_DEFAULT_RUNES},
      sideItems:["Malignance","Liandry's Torment","Cosmic Drive","Zhonya's Hourglass","Void Staff"],
    }],
  },
  roles:{
    Support:{
      bans:["Galio","Taric","Janna"], replacements:["Lulu","Karma","Milio"],
      role:"Enchanter-Mage / Poke-Peel",
      corePath:"Dream Maker  ›  Echoes of Helia  ›  Moonstone Renewer  ›  Rylai's Crystal Scepter",
      coreNote:"Support Seraphine amplifies her notes off ally-cast spells for team-wide poke and shielding. Dream Maker now leads the build, boosting shield/heal power onto whoever needs it most the same role Staff of Flowing Water used to fill; Echoes of Helia and Moonstone Renewer stack further heal/shield amp, and Rylai's slow adds AoE peel/poke utility to her notes.",
      sideItems:["Mercury's Treads","Staff of Flowing Water","Locket of the Iron Solari","Redemption","Ardent Censer","Zeke's Convergence","Mikael's Blessing"],
      data:{
        JUGGERNAUT:{ahead:[I("Locket of the Iron Solari","Shield covers the walk-down window."),I("Staff of Flowing Water","Amplify the shield further."),I("Redemption","Global save if they still connect.")],behind:[I("Locket of the Iron Solari","Core defensive value vs their press."),I("Mikael's Blessing","Cleanse any CC they carry."),I("Mercury's Treads","Reduce their key CC.")],runes:{...SERAPHINE_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Staff of Flowing Water","Amplify the shield to peel the dive."),I("Locket of the Iron Solari","Shield absorbs the opening burst."),I("Mikael's Blessing","Cleanse the CC that starts the dive.")],behind:[I("Mikael's Blessing","Cleanse and heal through the all-in."),I("Locket of the Iron Solari","Extra shield layer."),I("Mercury's Treads","Shorter CC on the engage.")],runes:{...SERAPHINE_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield eats the opener."),I("Mikael's Blessing","Cleanse the setup CC before the burst lands."),I("Staff of Flowing Water","Amplify the save.")],behind:[I("Mikael's Blessing","Non-negotiable — cleanses the burst combo."),I("Locket of the Iron Solari","Extra shield layer."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...SERAPHINE_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Zeke's Convergence","Amplify ADC damage in the 2v2."),I("Staff of Flowing Water","Amplify the peel shield."),I("Locket of the Iron Solari","Shield war.")],behind:[I("Locket of the Iron Solari","Shield to survive the duel."),I("Mikael's Blessing","Cleanse their all-in CC."),I("Mercury's Treads","Reduce their gap-close CC.")],runes:{...SERAPHINE_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Mercury's Treads","Reduce CC chains before their combo."),I("Locket of the Iron Solari","Shield through the combo."),I("Mikael's Blessing","Cleanse the setup CC.")],behind:[I("Mikael's Blessing","Mandatory — cleanses the combo opener."),I("Mercury's Treads","Shorten CC duration."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...SERAPHINE_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Redemption","Sustain your lane through their drain war."),I("Staff of Flowing Water","Amplify shields through their DPS."),I("Locket of the Iron Solari","Shield layer.")],behind:[I("Redemption","Global healing offsets their sustained damage."),I("Chemtech Putrifier","GW cuts their healing."),I("Locket of the Iron Solari","Shield war.")],runes:{...SERAPHINE_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Locket of the Iron Solari","Mitigate poke chip."),I("Redemption","Offsets the poke over time.")],behind:[I("Redemption","Global heal counters accumulated chip."),I("Mercury's Treads","Reduce CC duration."),I("Locket of the Iron Solari","Shield layer.")],runes:{...SERAPHINE_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Zeke's Convergence","Amplify your ADC's damage output."),I("Ardent Censer","Amplify heals/on-hit through the trade."),I("Staff of Flowing Water","Amplify shields on the carry.")],behind:[I("Locket of the Iron Solari","Non-negotiable — protect your carry."),I("Mikael's Blessing","Cleanse the setup CC on your ADC."),I("Redemption","Offsets the deficit.")],runes:{...SERAPHINE_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Ardent Censer","Amplify the heal war in your favor."),I("Staff of Flowing Water","Amplify shields further."),I("Zeke's Convergence","Amplify ADC damage.")],behind:[I("Locket of the Iron Solari","Shield war baseline."),I("Redemption","Global heal offsets theirs."),I("Mikael's Blessing","Cleanse their key CC.")],runes:{...SERAPHINE_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mikael's Blessing","Cleanse hooks before the follow-up."),I("Locket of the Iron Solari","Shield vs pick attempts."),I("Mercury's Treads","Dodge the hook range.")],behind:[I("Mikael's Blessing","Mandatory — cleanses a landed hook."),I("Mercury's Treads","Reduce CC duration."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...SERAPHINE_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Locket of the Iron Solari","Shield through the engage."),I("Mikael's Blessing","Cleanse their CC chain."),I("Staff of Flowing Water","Amplify the save.")],behind:[I("Mikael's Blessing","Cleanses the engage that would otherwise chain-CC your ADC."),I("Mercury's Treads","Shorter stuns from their initiation."),I("Locket of the Iron Solari","Shield layer.")],runes:{...SERAPHINE_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Ardent Censer","Amplify through their mitigation via heals."),I("Staff of Flowing Water","Amplify shields further."),I("Zeke's Convergence","Amplify ADC damage past the body-block.")],behind:[I("Locket of the Iron Solari","Shield war."),I("Redemption","Global heal in the extended peel war."),I("Chemtech Putrifier","GW cuts their passive sustain.")],runes:{...SERAPHINE_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Mercury's Treads","Teemo blind, Kennen stun — reduce both."),I("Locket of the Iron Solari","Shield through their poke/kit."),I("Mikael's Blessing","Cleanse their key setup ability.")],behind:[I("Mercury's Treads","Shortens their key disable."),I("Mikael's Blessing","Cleanses burst setups."),I("Redemption","Global heal while you figure out the matchup.")],runes:{...SERAPHINE_SUP_DEFAULT_RUNES}},
      },
    },
    Bot:{
      bans:["Xayah","Ashe","Aphelios"], replacements:["Jinx","Miss Fortune","Xerath"],
      role:"AP Poke-Carry",
      corePath:"Malignance  ›  Luden's Echo  ›  Shadowflame  ›  Rabadon's Deathcap",
      coreNote:"ADC Seraphine trades auto-attack DPS for AoE poke and scaling burst. Malignance and Luden's Echo proc off her empowered notes for wave clear and extra damage; Shadowflame and Rabadon's turn her into a real teamfight threat by mid-game.",
      sideItems:["Sorcerer's Shoes","Mercury's Treads","Zhonya's Hourglass","Banshee's Veil","Void Staff","Cosmic Drive"],
      data:{
        JUGGERNAUT:{ahead:[I("Shadowflame","Burst low-MR Juggernauts from range."),I("Malignance","Haste = more poke casts before they close."),I("Rabadon's Deathcap","Scaling burst ends the trade.")],behind:[I("Zhonya's Hourglass","Stall their all-in window entirely."),I("Mercury's Treads","Shorter CC before the kill."),I("Banshee's Veil","Block their engage tool.")],runes:{...SERAPHINE_ADC_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Cosmic Drive","Mobility kites the dive attempt."),I("Shadowflame","Burst them before the combo finishes."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Essential — negates their all-in timing."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Mercury's Treads","Shorter CC to kite out.")],runes:{...SERAPHINE_ADC_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Out-burst them before their combo completes."),I("Zhonya's Hourglass","Insurance even with a lead."),I("Rabadon's Deathcap","AP edge wins the trade first.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis neutralises the full combo."),I("Banshee's Veil","Blocks their engage opener."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...SERAPHINE_ADC_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rabadon's Deathcap","Burst edge ends the fight before they close."),I("Cosmic Drive","Kite the duelist with mobility."),I("Malignance","Poke pressure whittles them down first.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Mercury's Treads","Shorter CC on their gap-close."),I("Cosmic Drive","Mobility to disengage.")],runes:{...SERAPHINE_ADC_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Shadowflame","Out-burst them between cooldown windows."),I("Rabadon's Deathcap","AP edge wins the trade."),I("Malignance","Poke pressure denies their setup.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo."),I("Zhonya's Hourglass","Survive the full rotation."),I("Mercury's Treads","Shorten CC duration.")],runes:{...SERAPHINE_ADC_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pierce early MR before it stacks."),I("Rabadon's Deathcap","Raw AP wins the burst trade."),I("Shadowflame","Burst window before they can drain back.")],behind:[I("Banshee's Veil","Blocks the CC that starts their combo."),I("Zhonya's Hourglass","Survive the sustained burst."),I("Void Staff","Keep damage relevant through resists.")],runes:{...SERAPHINE_ADC_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Cosmic Drive","Mobility to dodge skillshots on approach."),I("Rabadon's Deathcap","Burst edge wins once you close."),I("Shadowflame","Burst on arrival.")],behind:[I("Banshee's Veil","Blocks one long-range ability."),I("Mercury's Treads","Reduce CC duration from range."),I("Zhonya's Hourglass","Survive the poke on approach.")],runes:{...SERAPHINE_ADC_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Malignance","Out-poke the mirror ADC matchup."),I("Shadowflame","Burst the squishy ADC outright."),I("Rabadon's Deathcap","Amplify the killing blow.")],behind:[I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Banshee's Veil","Blocks the engage tool set up on you."),I("Mercury's Treads","Reduce CC duration.")],runes:{...SERAPHINE_ADC_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Extra pen through their shield spam."),I("Rabadon's Deathcap","Burst through shields to the carry."),I("Malignance","Poke pressure negates their sustain package.")],behind:[I("Void Staff","Keep damage relevant vs their kit."),I("Banshee's Veil","Blocks the setup CC on their carry combo."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...SERAPHINE_ADC_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Cosmic Drive","Mobility dodges hooks entirely."),I("Rabadon's Deathcap","Burst them down once they whiff."),I("Shadowflame","Extra damage on the punish.")],behind:[I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),I("Zhonya's Hourglass","Buys time if you get caught."),I("Mercury's Treads","Shorter root/bind duration.")],runes:{...SERAPHINE_ADC_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Penetrates their MR stacking."),I("Rabadon's Deathcap","Burst edge still matters past their frontline."),I("Malignance","Poke before they can engage.")],behind:[I("Void Staff","Required to deal damage through their resists."),I("Zhonya's Hourglass","Survive their engage combo."),I("Banshee's Veil","Blocks the CC that starts their initiation.")],runes:{...SERAPHINE_ADC_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","MR-stacking Wardens still take real damage through pen."),I("Rabadon's Deathcap","Amplify AP so shielded Wardens still take damage."),I("Shadowflame","Extra burst on a landed combo.")],behind:[I("Void Staff","Required vs a stacked-resist Warden."),I("Zhonya's Hourglass","Survive the engage they set up."),I("Banshee's Veil","Blocks their key CC.")],runes:{...SERAPHINE_ADC_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Cosmic Drive","Mobility keeps you ahead of kiting Specialists."),I("Rabadon's Deathcap","Burst edge ends the fight."),I("Shadowflame","Extra burst vs squishy specialists caught close.")],behind:[I("Mercury's Treads","Reduce blind/stun duration."),I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive burst setups.")],runes:{...SERAPHINE_ADC_DEFAULT_RUNES}},
      },
    },
  },
};
