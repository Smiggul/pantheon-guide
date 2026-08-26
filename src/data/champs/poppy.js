import { I } from "../runeHelpers.js";

const POPPY_TOP_DEFAULT_RUNES = {
  keystone:       "Grasp of the Undying",
  primary:        "Resolve",
  primaryRunes:   ["Shield Bash","Second Wind","Overgrowth"],
  secondary:      "Precision",
  secondaryRunes: ["Presence of Mind","Last Stand"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Grasp of the Undying rewards Poppy's auto-attack-heavy trading pattern with permanent HP and a free proc every few seconds. Shield Bash converts Steadfast Presence's passive shield into bonus on-hit damage; Second Wind and Overgrowth cover the early lane phase before Keeper's Verdict comes online as a game-changing knockback. Presence of Mind and Last Stand round out mana sustain and reward the low-HP all-ins her own aggression invites.",
};

const POPPY_SUP_DEFAULT_RUNES = {
  keystone:       "Aftershock",
  primary:        "Resolve",
  primaryRunes:   ["Font of Life","Bone Plating","Unflinching"],
  secondary:      "Inspiration",
  secondaryRunes: ["Cosmic Insight","Hextech Flashtraption"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Support Poppy is now stronger on Aftershock than Hail of Blades (52.5% vs sub-51% after the 26.16 Hail of Blades nerf + her W passive-resist buff to 16%): W into a Heroic Charge wall-stun procs Aftershock right as you dive, making the engage far tankier. Font of Life heals your carry off the CC; Bone Plating and Unflinching survive the return fire. Cosmic Insight + Hextech Flashtraption speed Keeper's Verdict and enable surprise long-range engages.",
};

// ══════════════════════════════════════════════════════════════════════════
//  POPPY — Warden / Wall-Pin Engage
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"poppy", display:"Poppy", dd:"Poppy",
  color:"#7a5a1a", glow:"#f0c860",
  lanes:["Top","Support"],
  roles:{
    Top:{
      bans:["Jayce","Quinn","Kennen"], replacements:["Sett","Volibear","Jax"],
      role:"Warden / Wall-Pin Duelist",
      corePath:"Sundered Sky  ›  Plated Steelcaps  ›  Winter's Approach  ›  Thornmail",
      coreNote:"Poppy plays for a tanky auto-trade pattern that culminates in a Keeper's Verdict knockback — Steadfast Presence blocks dashes near her, Heroic Charge stuns anything pinned to a wall, and her hammer swing threatens to end a duel or a whole fight. Sundered Sky's healing rewards the auto-heavy trade pattern; Plated Steelcaps blunts early lane bullies; Winter's Approach and Thornmail both round out durability and GW for repeated trades.",
      sideItems:["Spirit Visage","Sterak's Gage","Guardian Angel","Force of Nature","Mercury's Treads","Randuin's Omen"],
      data:{
        JUGGERNAUT:{ahead:[I("Sundered Sky","Healing wins the sustained trade war."),I("Thornmail","GW cuts their sustain."),I("Winter's Approach","Stacks toward a real damage threat.")],behind:[I("Sterak's Gage","Shield when the walk-down connects."),I("Mercury's Treads","Shorter CC before the kill."),I("Plated Steelcaps","Reduces auto damage from their press.")],runes:{...POPPY_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Sundered Sky","Healing outlasts the dive — Steadfast Presence blocks the dash in."),I("Winter's Approach","Stacks build toward the knockback."),I("Sterak's Gage","Shield through the engage.")],behind:[I("Sterak's Gage","Shield absorbs the engage burst."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Mercury's Treads","Shorter CC on their engage.")],runes:{...POPPY_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sterak's Gage","Shield eats the opener — Steadfast Presence blocks the dash."),I("Thornmail","GW punishes their commit."),I("Sundered Sky","Healing recovers between windows.")],behind:[I("Sterak's Gage","Non-negotiable — survive the burst window."),I("Guardian Angel","Deny the kill."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...POPPY_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Sundered Sky","Healing wins the extended duel outright."),I("Thornmail","GW cuts their lifesteal."),I("Winter's Approach","Stacks tip the auto-trade.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Plated Steelcaps","Auto reduction."),I("Sundered Sky","Sustain through the duel.")],runes:{...POPPY_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Sterak's Gage","Absorb the burst before it lands."),I("Force of Nature","MR stack vs sustained casting."),I("Sundered Sky","Sustain through the poke.")],behind:[I("Sterak's Gage","Secondary shield."),I("Mercury's Treads","Shorter CC before the combo lands."),I("Guardian Angel","Insurance.")],runes:{...POPPY_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Force of Nature","Shrugs off their sustained magic damage."),I("Sundered Sky","Healing wins the drain war."),I("Winter's Approach","Stacks toward relevant damage.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Sundered Sky","Buy time for the healing to matter."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...POPPY_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Plated Steelcaps","Sets up the approach through poke."),I("Winter's Approach","Stacks up while you close the gap."),I("Mercury's Treads","Reduce CC duration from range.")],behind:[I("Mercury's Treads","Reduce CC duration."),I("Sterak's Gage","Second shield layer."),I("Guardian Angel","Insurance on approach.")],runes:{...POPPY_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Thornmail","GW cuts their sustain items."),I("Winter's Approach","Reach the ADC before they can kite."),I("Sundered Sky","Survive their DPS while you close.")],behind:[I("Sterak's Gage","Survive the peel + DPS."),I("Guardian Angel","Second life for a risky dive."),I("Mercury's Treads","Reduce CC duration.")],runes:{...POPPY_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Thornmail","GW destroys their heal/shield economy."),I("Winter's Approach","Reach the carry despite the peel."),I("Sundered Sky","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Sundered Sky","Outlast their sustain package."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...POPPY_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge the hook so your combo lands first."),I("Winter's Approach","Punish a whiffed hook instantly."),I("Sundered Sky","Sustain through the follow-up.")],behind:[I("Mercury's Treads","Mandatory — a caught Poppy loses the whole trade."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Guardian Angel","Deny the pick's value entirely.")],runes:{...POPPY_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Thornmail","GW cuts their sustain in the tank fight."),I("Sundered Sky","Sustain outlasts their engage burst."),I("Winter's Approach","Keeper's Verdict punishes their re-engage window.")],behind:[I("Sterak's Gage","Survive the initiation."),I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Insurance vs the follow-up.")],runes:{...POPPY_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Thornmail","GW cuts Warden sustain/passive."),I("Sundered Sky","Healing still wins the peel war."),I("Winter's Approach","Stacks through the extended fight.")],behind:[I("Sterak's Gage","Survive their counter-peel."),I("Force of Nature","MR vs Galio/K'Sante."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...POPPY_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Winter's Approach","Run down a kiting Specialist."),I("Thornmail","GW cuts sustain patterns."),I("Sundered Sky","Sustain through their poke pattern.")],behind:[I("Mercury's Treads","Teemo blind / Kennen stun — shorten both."),I("Sterak's Gage","Survive burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...POPPY_TOP_DEFAULT_RUNES}},
      },
    },
    Support:{
      bans:["Blitzcrank","Pyke","Nautilus"], replacements:["Thresh","Leona","Zac"],
      role:"Burst-Engage Enabler",
      corePath:"Bloodsong  ›  Boots of Swiftness  ›  Dead Man's Plate  ›  Locket of the Iron Solari",
      coreNote:"Support Poppy plays for a wall-pin engage — Heroic Charge shoves an enemy into a wall for a bonus stun, then Hail of Blades' burst and Keeper's Verdict's knockback finish the pick. Bloodsong rewards the burst-engage pattern; Dead Man's Plate adds the charge speed to actually reach engage range; Locket adds team-wide burst mitigation right as the stun lands.",
      sideItems:["Bandlepipes","Zeke's Convergence","Mercury's Treads","Knight's Vow","Randuin's Omen","Thornmail"],
      data:{
        JUGGERNAUT:{ahead:[I("Zeke's Convergence","Amplify damage after your wall-pin stun lands."),I("Locket of the Iron Solari","Shield vs their walk-down."),I("Knight's Vow","Protect your carry while you soak.")],behind:[I("Randuin's Omen","Crit/AS reduction if they build offense."),I("Knight's Vow","Share damage taken."),I("Thornmail","GW cuts their sustain.")],runes:{...POPPY_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Locket of the Iron Solari","Shield absorbs their dive opener."),I("Zeke's Convergence","Amplify the counter-engage."),I("Dead Man's Plate","Charge speed enables the counter-engage.")],behind:[I("Knight's Vow","Share damage so your ADC survives the dive."),I("Mercury's Treads","Shorter CC on their engage."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...POPPY_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield eats the opener before it lands on your ADC."),I("Zeke's Convergence","Punish their commit with amplified damage."),I("Bloodsong","Proc damage punishes their commit.")],behind:[I("Knight's Vow","Share the burst that would otherwise one-shot your ADC."),I("Mercury's Treads","Reduce the CC that opens their combo."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...POPPY_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Zeke's Convergence","Amplify ADC damage in the 2v2."),I("Knight's Vow","Share damage in the skirmish."),I("Locket of the Iron Solari","Shield war.")],behind:[I("Knight's Vow","Share damage so your ADC survives the duel."),I("Randuin's Omen","Crit reduction."),I("Mercury's Treads","Reduce their gap-close CC.")],runes:{...POPPY_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Mercury's Treads","Reduce CC chains — enables your own engage."),I("Locket of the Iron Solari","Shield through their combo."),I("Zeke's Convergence","Punish damage after they burst.")],behind:[I("Mercury's Treads","Shorter CC before their combo lands on your ADC."),I("Knight's Vow","Share the burst damage."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...POPPY_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Thornmail","GW cuts their sustain through the drain."),I("Knight's Vow","Share damage through the drain."),I("Zeke's Convergence","Amplify the punish.")],behind:[I("Knight's Vow","Share the damage in the extended fight."),I("Thornmail","GW cuts their regen even behind."),I("Randuin's Omen","Survivability into their sustained DPS.")],runes:{...POPPY_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Locket of the Iron Solari","Shields your ADC from poke chip."),I("Dead Man's Plate","Charge speed closes the gap.")],behind:[I("Randuin's Omen","Survivability vs sustained poke."),I("Mercury's Treads","Reduce CC duration."),I("Locket of the Iron Solari","Shield layer.")],runes:{...POPPY_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Zeke's Convergence","Amplify your ADC's damage after the stun lands — Poppy's whole kit enables this."),I("Knight's Vow","Share damage output."),I("Locket of the Iron Solari","Shield in the poke war.")],behind:[I("Knight's Vow","Non-negotiable — protect your carry."),I("Randuin's Omen","Crit reduction vs their DPS."),I("Mercury's Treads","Reduce CC duration.")],runes:{...POPPY_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Thornmail","GW reduces their poke/heal uptime."),I("Zeke's Convergence","Amplify damage past their sustain."),I("Locket of the Iron Solari","Shield war.")],behind:[I("Locket of the Iron Solari","Core defensive value."),I("Knight's Vow","Share damage in the sustain war."),I("Randuin's Omen","Survivability if they poke hard.")],runes:{...POPPY_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge their hook so you land your own stun first."),I("Zeke's Convergence","Amplify the punish after you land your CC."),I("Locket of the Iron Solari","Shield vs pick attempts.")],behind:[I("Mercury's Treads","Mandatory — a caught Poppy loses the whole engage plan."),I("Knight's Vow","Share damage if caught."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...POPPY_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Randuin's Omen","Reduce their engage tempo with crit/AS reduction."),I("Zeke's Convergence","Amplify your team's counter-engage."),I("Knight's Vow","Share damage during their initiation.")],behind:[I("Mercury's Treads","Shorter stuns from their engage chain."),I("Knight's Vow","Share damage during the engage."),I("Randuin's Omen","Survivability vs their damage.")],runes:{...POPPY_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Zeke's Convergence","Amplify ADC damage past their body-block."),I("Thornmail","GW blunts their peel value."),I("Knight's Vow","Share damage in the peel war.")],behind:[I("Knight's Vow","Share damage through the extended peel war."),I("Randuin's Omen","Crit reduction if paired with a marksman."),I("Thornmail","GW cuts their sustain.")],runes:{...POPPY_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Mercury's Treads","Teemo blind, Kennen stun — land your own CC first."),I("Locket of the Iron Solari","Shield through their poke/kit."),I("Zeke's Convergence","Amplify damage in skirmishes.")],behind:[I("Mercury's Treads","Reduce blind/stun duration."),I("Knight's Vow","Share damage while you figure out the matchup."),I("Thornmail","Counters AP specialists via GW.")],runes:{...POPPY_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
