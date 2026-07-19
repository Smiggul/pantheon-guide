import { I } from "../runeHelpers.js";

const KARMA_SUP_DEFAULT_RUNES = {
  keystone:       "Summon Aery",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Gathering Storm"],
  secondary:      "Resolve",
  secondaryRunes: ["Font of Life","Revitalize"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Summon Aery bounces between Karma's poke and her Mantra-empowered shield, adding extra damage or shield value on every cast. Manaflow Band solves the significant mana strain of constant Q/E casts; Transcendence and Gathering Storm reward her long, scaling games. Font of Life heals the ADC off her CC; Revitalize amplifies every shield her E Inspire provides.",
};

const KARMA_MID_DEFAULT_RUNES = {
  keystone:       "Arcane Comet",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Resolve",
  secondaryRunes: ["Second Wind","Overgrowth"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Comet punishes every Mantra-empowered Q landed from safe range. Manaflow Band solves the mana problem. Second Wind and Overgrowth let Karma survive lane before her poke damage output starts to matter in the mid-game siege phase.",
};

// ══════════════════════════════════════════════════════════════════════════
//  KARMA — Poke-Enchanter / Flex Utility
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"karma", display:"Karma", dd:"Karma",
  color:"#e67e22", glow:"#f39c12",
  lanes:["Support","Mid"],
  roles:{
    Support:{
      bans:["Blitzcrank","Nautilus","Taric"], replacements:["Lulu","Milio","Nami"],
      role:"Poke-Enchanter / Shield-Tempo",
      corePath:"Ionian Boots of Lucidity  ›  Echoes of Helia  ›  Moonstone Renewer  ›  Redemption",
      coreNote:"Karma plays for poke-shield tempo. Ionian Boots' haste means more Mantra casts and shield uptime; Echoes of Helia and Moonstone Renewer stack heal/shield amplification onto her E; Redemption turns a losing fight around with a global heal.",
      sideItems:["Mercury's Treads","Staff of Flowing Water","Locket of the Iron Solari","Mikael's Blessing","Ardent Censer","Zeke's Convergence","Chemtech Putrifier"],
      data:{
        JUGGERNAUT:{ahead:[I("Locket of the Iron Solari","Shield covers the walk-down window."),I("Staff of Flowing Water","Amplify the shield further."),I("Redemption","Global save if they still connect.")],behind:[I("Locket of the Iron Solari","Core defensive value vs their press."),I("Mikael's Blessing","Cleanse any CC they carry."),I("Mercury's Treads","Reduce their key CC.")],runes:{...KARMA_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Staff of Flowing Water","Amplify the shield to peel the dive."),I("Locket of the Iron Solari","Shield absorbs the opening burst."),I("Mikael's Blessing","Cleanse the CC that starts the dive.")],behind:[I("Mikael's Blessing","Cleanse and heal through the all-in."),I("Locket of the Iron Solari","Extra shield layer."),I("Mercury's Treads","Shorter CC on the engage.")],runes:{...KARMA_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield eats the opener."),I("Mikael's Blessing","Cleanse the setup CC before the burst lands."),I("Staff of Flowing Water","Amplify the save.")],behind:[I("Mikael's Blessing","Non-negotiable — cleanses the burst combo."),I("Locket of the Iron Solari","Extra shield layer."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...KARMA_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Zeke's Convergence","Amplify ADC damage in the 2v2."),I("Staff of Flowing Water","Amplify the peel shield."),I("Locket of the Iron Solari","Shield war.")],behind:[I("Locket of the Iron Solari","Shield to survive the duel."),I("Mikael's Blessing","Cleanse their all-in CC."),I("Mercury's Treads","Reduce their gap-close CC.")],runes:{...KARMA_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Mercury's Treads","Reduce CC chains before their combo."),I("Locket of the Iron Solari","Shield through the combo."),I("Mikael's Blessing","Cleanse the setup CC.")],behind:[I("Mikael's Blessing","Mandatory — cleanses the combo opener."),I("Mercury's Treads","Shorten CC duration."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...KARMA_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Redemption","Sustain your lane through their drain war."),I("Staff of Flowing Water","Amplify shields through their DPS."),I("Locket of the Iron Solari","Shield layer.")],behind:[I("Redemption","Global healing offsets their sustained damage."),I("Chemtech Putrifier","GW cuts their healing."),I("Locket of the Iron Solari","Shield war.")],runes:{...KARMA_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Locket of the Iron Solari","Mitigate poke chip."),I("Redemption","Offsets the poke over time.")],behind:[I("Redemption","Global heal counters accumulated chip."),I("Mercury's Treads","Reduce CC duration."),I("Locket of the Iron Solari","Shield layer.")],runes:{...KARMA_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Zeke's Convergence","Amplify your ADC's damage output."),I("Ardent Censer","Amplify heals/on-hit through the trade."),I("Staff of Flowing Water","Amplify shields on the carry.")],behind:[I("Locket of the Iron Solari","Non-negotiable — protect your carry."),I("Mikael's Blessing","Cleanse the setup CC on your ADC."),I("Redemption","Offsets the deficit.")],runes:{...KARMA_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Ardent Censer","Amplify the heal war in your favor."),I("Staff of Flowing Water","Amplify shields further."),I("Zeke's Convergence","Amplify ADC damage.")],behind:[I("Locket of the Iron Solari","Shield war baseline."),I("Redemption","Global heal offsets theirs."),I("Mikael's Blessing","Cleanse their key CC.")],runes:{...KARMA_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mikael's Blessing","Cleanse hooks before the follow-up."),I("Locket of the Iron Solari","Shield vs pick attempts."),I("Mercury's Treads","Dodge the hook range.")],behind:[I("Mikael's Blessing","Mandatory — cleanses a landed hook."),I("Mercury's Treads","Reduce CC duration."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...KARMA_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Locket of the Iron Solari","Shield through the engage."),I("Mikael's Blessing","Cleanse their CC chain."),I("Staff of Flowing Water","Amplify the save.")],behind:[I("Mikael's Blessing","Cleanses the engage that would otherwise chain-CC your ADC."),I("Mercury's Treads","Shorter stuns from their initiation."),I("Locket of the Iron Solari","Shield layer.")],runes:{...KARMA_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Ardent Censer","Amplify through their mitigation via heals."),I("Staff of Flowing Water","Amplify shields further."),I("Zeke's Convergence","Amplify ADC damage past the body-block.")],behind:[I("Locket of the Iron Solari","Shield war."),I("Redemption","Global heal in the extended peel war."),I("Chemtech Putrifier","GW cuts their passive sustain.")],runes:{...KARMA_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Mercury's Treads","Teemo blind, Kennen stun — reduce both."),I("Locket of the Iron Solari","Shield through their poke/kit."),I("Mikael's Blessing","Cleanse their key setup ability.")],behind:[I("Mercury's Treads","Shortens their key disable."),I("Mikael's Blessing","Cleanses burst setups."),I("Redemption","Global heal while you figure out the matchup.")],runes:{...KARMA_SUP_DEFAULT_RUNES}},
      },
    },
    Mid:{
      bans:["Orianna","LeBlanc","Zed"], replacements:["Xerath","Ahri","Locke"],
      role:"Poke-Mage / Off-Meta Siege",
      corePath:"Luden's Echo  ›  Shadowflame  ›  Rabadon's Deathcap  ›  Void Staff",
      coreNote:"Mid Karma is an older-meta poke-mage pick that resurfaces when siege comps are strong. Luden's Echo procs off Mantra-empowered Q for wave clear and poke damage; Rabadon's and Void Staff round out a burst spike most mid laners don't respect.",
      sideItems:["Sorcerer's Shoes","Mercury's Treads","Zhonya's Hourglass","Banshee's Veil","Cosmic Drive","Morellonomicon"],
      data:{
        JUGGERNAUT:{ahead:[I("Shadowflame","Burst low-MR Juggernauts from range."),I("Rabadon's Deathcap","Scaling burst ends the trade outright."),I("Luden's Echo","Poke wears them down before the fight starts.")],behind:[I("Zhonya's Hourglass","Stall their all-in window entirely."),I("Mercury's Treads","Shorter CC before the kill."),I("Banshee's Veil","Block their engage tool.")],runes:{...KARMA_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Cosmic Drive","Mobility kites the dive attempt."),I("Shadowflame","Burst them before the combo finishes."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Essential — negates their all-in timing."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Mercury's Treads","Shorter CC to kite out.")],runes:{...KARMA_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Out-burst them before their combo completes."),I("Rabadon's Deathcap","AP edge wins the trade first."),I("Zhonya's Hourglass","Insurance even with a lead.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis neutralises the full combo."),I("Banshee's Veil","Blocks their engage opener."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...KARMA_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rabadon's Deathcap","Burst edge ends the fight before they close."),I("Cosmic Drive","Kite the duelist with mobility."),I("Luden's Echo","Poke whittles them down first.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Mercury's Treads","Shorter CC on their gap-close."),I("Cosmic Drive","Mobility to disengage.")],runes:{...KARMA_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Shadowflame","Out-burst them between cooldown windows."),I("Rabadon's Deathcap","AP edge wins the trade."),I("Luden's Echo","Poke pressure denies their setup.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo."),I("Zhonya's Hourglass","Survive the full rotation."),I("Mercury's Treads","Shorten CC duration.")],runes:{...KARMA_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pierce early MR before it stacks."),I("Rabadon's Deathcap","Raw AP wins the burst trade."),I("Shadowflame","Burst window before they can drain back.")],behind:[I("Banshee's Veil","Blocks the CC that starts their combo."),I("Zhonya's Hourglass","Survive the sustained burst."),I("Morellonomicon","Cuts Vladimir/Swain healing.")],runes:{...KARMA_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Cosmic Drive","Mobility to dodge skillshots on approach."),I("Rabadon's Deathcap","Burst edge wins once you close."),I("Shadowflame","Burst on arrival.")],behind:[I("Banshee's Veil","Blocks one long-range ability."),I("Mercury's Treads","Reduce CC duration from range."),I("Zhonya's Hourglass","Survive the poke on approach.")],runes:{...KARMA_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","Burst the squishy ADC outright."),I("Rabadon's Deathcap","Amplify the killing blow."),I("Luden's Echo","Poke pressure denies their farm.")],behind:[I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Banshee's Veil","Blocks the engage tool set up on you."),I("Mercury's Treads","Reduce CC duration.")],runes:{...KARMA_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Extra pen through their shield spam."),I("Rabadon's Deathcap","Burst through shields to the carry."),I("Morellonomicon","Cuts their sustain package.")],behind:[I("Void Staff","Keep damage relevant vs their kit."),I("Banshee's Veil","Blocks the setup CC on their carry combo."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...KARMA_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Cosmic Drive","Mobility dodges hooks entirely."),I("Rabadon's Deathcap","Burst them down once they whiff."),I("Shadowflame","Extra damage on the punish.")],behind:[I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),I("Zhonya's Hourglass","Buys time if you get caught."),I("Mercury's Treads","Shorter root/bind duration.")],runes:{...KARMA_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Penetrates their MR stacking."),I("Rabadon's Deathcap","Burst edge still matters past their frontline."),I("Luden's Echo","Poke before they can engage.")],behind:[I("Void Staff","Required to deal damage through their resists."),I("Zhonya's Hourglass","Survive their engage combo."),I("Banshee's Veil","Blocks the CC that starts their initiation.")],runes:{...KARMA_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","MR-stacking Wardens still take real damage through pen."),I("Rabadon's Deathcap","Amplify AP so shielded Wardens still take damage."),I("Shadowflame","Extra burst on a landed combo.")],behind:[I("Void Staff","Required vs a stacked-resist Warden."),I("Zhonya's Hourglass","Survive the engage they set up."),I("Banshee's Veil","Blocks their key CC.")],runes:{...KARMA_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Cosmic Drive","Mobility keeps you ahead of kiting Specialists."),I("Rabadon's Deathcap","Burst edge ends the fight."),I("Shadowflame","Extra burst vs squishy specialists caught close.")],behind:[I("Mercury's Treads","Reduce blind/stun duration."),I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive burst setups.")],runes:{...KARMA_MID_DEFAULT_RUNES}},
      },
    },
  },
};
