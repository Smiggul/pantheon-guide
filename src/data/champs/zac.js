import { I } from "../runeHelpers.js";

const ZAC_JGL_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Last Stand"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Cosmic Insight"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror out-values Aftershock on current Zac — his Q is an auto-attack reset with a short W cooldown, so the stacking adaptive damage and healing from repeated procs carry out-damages the shield-window burst resistance. Legend: Haste feeds more Q/W/E casts to stack Conqueror faster. Magical Footwear and Cosmic Insight fund his ability-haste-hungry playstyle without cutting into core items.",
};

const ZAC_TOP_DEFAULT_RUNES = {
  keystone:       "Grasp of the Undying",
  primary:        "Resolve",
  primaryRunes:   ["Demolish","Second Wind","Revitalize"],
  secondary:      "Precision",
  secondaryRunes: ["Legend: Haste","Last Stand"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Grasp of the Undying converts Zac's sustained top-lane trades into free permanent HP and bonus damage, fitting a split-push pattern better than Jungle's burst-engage tempo. Demolish adds tower pressure between skirmishes; Second Wind and Revitalize keep him topped up through poke exchanges. Legend: Haste and Last Stand round out a real kill threat in extended duels.",
};

const ZAC_SUP_DEFAULT_RUNES = {
  keystone:       "Aftershock",
  primary:        "Resolve",
  primaryRunes:   ["Font of Life","Conditioning","Revitalize"],
  secondary:      "Precision",
  secondaryRunes: ["Triumph","Legend: Haste"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Aftershock still fits Support Zac's engage-then-tank pattern, healing the ADC he's protecting via Font of Life instead of Demolish's tower-push value. Revitalize amplifies that heal plus any Locket/shield the team stacks on top. Triumph and Legend: Haste replace Domination's kill-snowball runes — Zac fights constantly in lane and benefits more from sustained gold/haste than roam speed.",
};

// ══════════════════════════════════════════════════════════════════════════
//  ZAC — Vanguard / Bouncing Tank
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"zac", display:"Zac", dd:"Zac",
  color:"#2e7d32", glow:"#66bb6a",
  lanes:["Jungle","Support","Top"],
  roles:{
    Jungle:{
      bans:["Shaco","Talon","Nasus"], replacements:["Warwick","Wukong","Sett"],
      role:"Vanguard / Bouncing Tank",
      corePath:"Hextech Rocketbelt  ›  Ionian Boots of Lucidity  ›  Sunfire Aegis  ›  Spirit Visage",
      coreNote:"Zac now plays as a Conqueror-powered auto-reset skirmisher rather than a pure shield-tank. Hextech Rocketbelt's dash pairs with his own Elastic Slingshot engage and adds a burst proc for the auto-reset combo; Ionian Boots feeds the ability-haste-hungry playstyle; Sunfire Aegis adds clear speed and constant trade damage; Spirit Visage amplifies his passive HP-based self-heal.",
      sideItems:["Thornmail","Riftmaker","Frozen Heart","Plated Steelcaps","Mercury's Treads","Randuin's Omen","Force of Nature","Abyssal Mask"],
      data:{
        JUGGERNAUT:{ahead:[I("Riftmaker","Omnivamp wins the extended skirmish."),I("Sunfire Aegis","Burn while they can't punish your clear."),I("Thornmail","GW cuts their sustain.")],behind:[I("Plated Steelcaps","Reduces auto damage from a counter-gank."),I("Randuin's Omen","Crit/AS reduction if they build offense."),I("Spirit Visage","Amplify your own sustain.")],runes:{...ZAC_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Sunfire Aegis","Burn during their engage window."),I("Riftmaker","Omnivamp outlasts the dive."),I("Frozen Heart","AS slow blunts their follow-up.")],behind:[I("Mercury's Treads","Shorter CC on their engage."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Spirit Visage","Amp healing to recover.")],runes:{...ZAC_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Riftmaker","Omnivamp sustains through their burst window."),I("Sunfire Aegis","Punish close fights."),I("Frozen Heart","AS slow limits their follow-up.")],behind:[I("Spirit Visage","Amp healing to recover between skirmishes."),I("Mercury's Treads","Shorter CC before the finisher."),I("Abyssal Mask","MR + amp vs AP assassins.")],runes:{...ZAC_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Riftmaker","Omnivamp wins the extended duel outright."),I("Thornmail","GW cuts their lifesteal."),I("Sunfire Aegis","Burn adds up over long fights.")],behind:[I("Randuin's Omen","Crit/AS reduction on Yi/Trynd/Kayn."),I("Spirit Visage","Amp self-heal in the duel."),I("Frozen Heart","AS slow shuts down the duelist.")],runes:{...ZAC_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Riftmaker","Omnivamp outlasts the poke."),I("Force of Nature","MR stack vs sustained casting."),I("Sunfire Aegis","Burn while closing.")],behind:[I("Force of Nature","MR stack vs their combo."),I("Mercury's Treads","Shorter CC on invades."),I("Spirit Visage","Amp healing to recover.")],runes:{...ZAC_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Force of Nature","Shrugs off their sustained magic damage."),I("Riftmaker","Omnivamp wins the drain war."),I("Sunfire Aegis","Burn adds up over their long fights.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Spirit Visage","Amp healing to keep pace."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...ZAC_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration on the gank path."),I("Riftmaker","Omnivamp sustains the approach."),I("Force of Nature","MR + move speed to close.")],behind:[I("Force of Nature","MR + move speed vs sustained poke."),I("Mercury's Treads","Reduce CC duration."),I("Spirit Visage","Amp healing on arrival.")],runes:{...ZAC_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Riftmaker","Omnivamp wins the burst race on the ADC."),I("Sunfire Aegis","Burn adds up during ganks."),I("Thornmail","GW cuts their sustain items.")],behind:[I("Plated Steelcaps","Non-negotiable auto reduction."),I("Randuin's Omen","Crit reduction vs their build."),I("Spirit Visage","Amp self-heal.")],runes:{...ZAC_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Thornmail","GW cuts their heal/shield economy."),I("Riftmaker","Omnivamp through their peel."),I("Sunfire Aegis","Burn pressures both members of the lane.")],behind:[I("Spirit Visage","Sustain vs their heal economy."),I("Force of Nature","MR vs their poke component."),I("Abyssal Mask","MR + amp vs the combined burst.")],runes:{...ZAC_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge hooks while ganking."),I("Riftmaker","Omnivamp during extended fights after a catch."),I("Sunfire Aegis","Burn once you close.")],behind:[I("Mercury's Treads","Mandatory — a caught Zac wastes the gank."),I("Spirit Visage","Amp healing to recover."),I("Randuin's Omen","Survivability if it goes long.")],runes:{...ZAC_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Thornmail","GW cuts their sustain in the tank fight."),I("Riftmaker","Omnivamp through the extended engage."),I("Sunfire Aegis","Burn during objective fights.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Force of Nature","MR vs Malphite/Gragas AP."),I("Spirit Visage","Sustain the war of attrition.")],runes:{...ZAC_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Thornmail","GW cuts Tahm Kench/Shen passive sustain."),I("Riftmaker","Omnivamp through their mitigation."),I("Sunfire Aegis","Burn through shields over time.")],behind:[I("Spirit Visage","Sustain through the peel war."),I("Force of Nature","MR vs Galio/K'Sante."),I("Abyssal Mask","MR + amp vs their kit.")],runes:{...ZAC_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Riftmaker","Omnivamp outlasts their poke/regen kit."),I("Sunfire Aegis","Burn denies their clear paths."),I("Thornmail","GW cuts sustain patterns.")],behind:[I("Mercury's Treads","Teemo blind, Kennen stun — shorten both."),I("Force of Nature","Counters AP specialists."),I("Spirit Visage","Amp your own sustain.")],runes:{...ZAC_JGL_DEFAULT_RUNES}},
      },
    },
    Support:{
      bans:["Blitzcrank","Morgana","Pyke"], replacements:["Leona","Nautilus","Alistar"],
      role:"Off-Meta Engage",
      corePath:"Celestial Opposition  ›  Plated Steelcaps  ›  Sunfire Aegis  ›  Spirit Visage",
      coreNote:"Support Zac is an off-meta engage pick — same terrain-bounce and pull-based CC as Jungle, but built as a tank-support enabler instead of a skirmisher. Celestial Opposition heals him for engaging near allies, matching his HP-sacrifice passive; Plated Steelcaps and Sunfire Aegis add durability and burn for repeated dives; Spirit Visage amplifies the self-heal further. Works best in coordinated dive comps where the pull-engage sets up a guaranteed follow-up from the team.",
      sideItems:["Mercury's Treads","Locket of the Iron Solari","Zeke's Convergence","Frozen Heart","Force of Nature","Knight's Vow","Redemption"],
      data:{
        JUGGERNAUT:{ahead:[I("Zeke's Convergence","Amplify damage after your pull-engage lands."),I("Locket of the Iron Solari","Shield vs their walk-down."),I("Knight's Vow","Protect your carry while you soak.")],behind:[I("Plated Steelcaps","Reduces auto damage vs their press."),I("Knight's Vow","Share damage taken."),I("Frozen Heart","AS slow blunts their DPS.")],runes:{...ZAC_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Locket of the Iron Solari","Shield absorbs their dive opener."),I("Zeke's Convergence","Amplify the counter-engage."),I("Frozen Heart","AS slow blunts their follow-up.")],behind:[I("Knight's Vow","Share damage so your ADC survives the dive."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Mercury's Treads","Shorter CC on their engage.")],runes:{...ZAC_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield eats the opener before it lands on your ADC."),I("Zeke's Convergence","Punish their commit with amplified damage."),I("Abyssal Mask","MR + damage amp vs AP assassins.")],behind:[I("Knight's Vow","Share the burst that would otherwise one-shot your ADC."),I("Mercury's Treads","Reduce the CC that opens their combo."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...ZAC_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Frozen Heart","AS slow shuts down the duelist."),I("Zeke's Convergence","Amplify ADC damage in the 2v2."),I("Knight's Vow","Share damage in the skirmish.")],behind:[I("Knight's Vow","Share damage so your ADC survives the duel."),I("Plated Steelcaps","Flat reduction vs auto-heavy champs."),I("Randuin's Omen","Crit reduction.")],runes:{...ZAC_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Mercury's Treads","Reduce CC chains — enables your own engage."),I("Locket of the Iron Solari","Shield through their combo."),I("Zeke's Convergence","Punish damage after they burst.")],behind:[I("Mercury's Treads","Shorter CC before their combo lands on your ADC."),I("Knight's Vow","Share the burst damage."),I("Abyssal Mask","MR + damage amp if focused.")],runes:{...ZAC_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Force of Nature","Shrugs off their sustained magic damage."),I("Knight's Vow","Share damage through the drain."),I("Zeke's Convergence","Amplify the punish.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Knight's Vow","Share the damage in the extended fight."),I("Abyssal Mask","MR + damage amp vs their kit.")],runes:{...ZAC_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Locket of the Iron Solari","Shields your ADC from poke chip."),I("Redemption","Offsets accumulated poke damage.")],behind:[I("Force of Nature","MR + move speed vs sustained poke."),I("Mercury's Treads","Reduce CC duration."),I("Redemption","Global heal offsets the chip.")],runes:{...ZAC_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Zeke's Convergence","Amplify your ADC's damage after the pull-engage."),I("Knight's Vow","Share damage output."),I("Locket of the Iron Solari","Shield in the poke war.")],behind:[I("Knight's Vow","Non-negotiable — protect your carry."),I("Randuin's Omen","Crit reduction vs their DPS."),I("Plated Steelcaps","Flat auto reduction.")],runes:{...ZAC_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Frozen Heart","AS slow reduces their poke/heal uptime."),I("Zeke's Convergence","Amplify damage past their sustain."),I("Locket of the Iron Solari","Shield war.")],behind:[I("Locket of the Iron Solari","Core defensive value."),I("Knight's Vow","Share damage in the sustain war."),I("Force of Nature","Anti-AP if they poke hard.")],runes:{...ZAC_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge their hook so you land your own engage first."),I("Zeke's Convergence","Amplify the punish after you land your CC."),I("Locket of the Iron Solari","Shield vs pick attempts.")],behind:[I("Mercury's Treads","Mandatory — a caught Zac loses the whole engage plan."),I("Knight's Vow","Share damage if caught."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...ZAC_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Frozen Heart","Reduce their engage tempo with the AS slow."),I("Zeke's Convergence","Amplify your team's counter-engage."),I("Knight's Vow","Share damage during their initiation.")],behind:[I("Mercury's Treads","Shorter stuns from their engage chain."),I("Knight's Vow","Share damage during the engage."),I("Force of Nature","MR vs Malphite/Gragas AP damage.")],runes:{...ZAC_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Zeke's Convergence","Amplify ADC damage past their body-block."),I("Frozen Heart","AS slow blunts their peel value."),I("Knight's Vow","Share damage in the peel war.")],behind:[I("Knight's Vow","Share damage through the extended peel war."),I("Force of Nature","MR vs Galio/K'Sante AP damage."),I("Randuin's Omen","Crit reduction if paired with a marksman.")],runes:{...ZAC_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Mercury's Treads","Teemo blind, Kennen stun — land your own CC first."),I("Locket of the Iron Solari","Shield through their poke/kit."),I("Zeke's Convergence","Amplify damage in skirmishes.")],behind:[I("Force of Nature","Counters AP specialists (Teemo, Kennen)."),I("Mercury's Treads","Reduce blind/stun duration."),I("Knight's Vow","Share damage while you figure out the matchup.")],runes:{...ZAC_SUP_DEFAULT_RUNES}},
      },
    },
    Top:{
      bans:["Vayne","Fiora","Quinn"], replacements:["Sion","Wukong","Volibear"],
      role:"Off-Meta Split-Push Tank",
      corePath:"Sunfire Aegis  ›  Plated Steelcaps  ›  Spirit Visage  ›  Thornmail",
      coreNote:"Top Zac is a rare, low-pick-rate off-meta split-push tank — same HP-sacrifice identity as Jungle, but built for sustained top-lane trades instead of gank tempo. Sunfire Aegis adds constant burn to punish trades; Plated Steelcaps and Spirit Visage round out survivability and self-heal amp; Thornmail cuts through healing/lifesteal top laners.",
      sideItems:["Unending Despair","Mercury's Treads","Force of Nature","Randuin's Omen","Abyssal Mask","Riftmaker"],
      data:{
        JUGGERNAUT:{ahead:[I("Spirit Visage","Amp self-heal wins the sustained trade war."),I("Sunfire Aegis","Burn adds up over the trade."),I("Thornmail","GW cuts their sustain.")],behind:[I("Plated Steelcaps","Reduces auto damage from their all-in."),I("Randuin's Omen","Crit/AS reduction if they build offense."),I("Unending Despair","Extra shield + omnivamp to keep pace.")],runes:{...ZAC_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Sunfire Aegis","Burn during their engage window."),I("Spirit Visage","Amp self-heal outlasts the dive."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains.")],behind:[I("Mercury's Treads","Shorter CC on their engage."),I("Plated Steelcaps","Auto reduction on their combo."),I("Unending Despair","Shield absorbs the opening burst.")],runes:{...ZAC_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Spirit Visage","Self-heal sustains through their burst window."),I("Sunfire Aegis","Punish their close-range commitment."),I("Unending Despair","Shield vs the burst opener.")],behind:[I("Unending Despair","Shield + omnivamp vs burst all-in."),I("Mercury's Treads","Shorter CC before the finisher."),I("Abyssal Mask","MR + amp vs AP assassins.")],runes:{...ZAC_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Spirit Visage","Self-heal wins the extended duel."),I("Thornmail","GW cuts their lifesteal."),I("Sunfire Aegis","Burn adds up over long fights.")],behind:[I("Randuin's Omen","Crit/AS reduction on Yasuo/Yone/Tryndamere."),I("Spirit Visage","Amp self-heal in the duel."),I("Plated Steelcaps","Auto reduction.")],runes:{...ZAC_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Unending Despair","Shield vs their burst window."),I("Spirit Visage","Self-heal outlasts the poke."),I("Mercury's Treads","Reduce CC in their combo.")],behind:[I("Force of Nature","MR stack vs sustained casting."),I("Mercury's Treads","Shorter CC before the finisher."),I("Unending Despair","Extra shield layer.")],runes:{...ZAC_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Force of Nature","Shrugs off their sustained magic damage."),I("Spirit Visage","Self-heal wins the drain war."),I("Sunfire Aegis","Burn adds up over their long trades.")],behind:[I("Force of Nature","Mandatory vs Vladimir/Swain drain fights."),I("Spirit Visage","Amp healing to keep pace."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...ZAC_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Force of Nature","MR + move speed walks through poke to engage."),I("Spirit Visage","Self-heal sustains the approach."),I("Mercury's Treads","Reduce CC duration.")],behind:[I("Force of Nature","Non-negotiable vs sustained poke."),I("Mercury's Treads","Reduce CC duration from long range."),I("Unending Despair","Shield on approach.")],runes:{...ZAC_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Spirit Visage","Self-heal wins the burst race."),I("Thornmail","GW cuts their sustain items."),I("Sunfire Aegis","Burn adds up in the skirmish.")],behind:[I("Plated Steelcaps","Non-negotiable auto reduction."),I("Randuin's Omen","Crit reduction vs their build."),I("Spirit Visage","Amp self-heal.")],runes:{...ZAC_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Thornmail","GW cuts their heal/shield economy."),I("Spirit Visage","Self-heal through their peel."),I("Sunfire Aegis","Burn pressures both members of the lane.")],behind:[I("Spirit Visage","Sustain vs their heal economy."),I("Force of Nature","MR vs their poke component."),I("Unending Despair","Survive the combined burst.")],runes:{...ZAC_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Shorter hooks — harder to catch out."),I("Spirit Visage","Self-heal during extended fights."),I("Sunfire Aegis","Burn once you close.")],behind:[I("Mercury's Treads","Mandatory — caught Zac loses the trade."),I("Unending Despair","Shield if you get caught."),I("Spirit Visage","Amp healing to recover.")],runes:{...ZAC_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Thornmail","GW cuts their sustain in the tank fight."),I("Spirit Visage","Self-heal through the extended engage."),I("Sunfire Aegis","Burn during objective fights.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Force of Nature","MR vs Malphite/Gragas-mirror AP."),I("Spirit Visage","Sustain the war of attrition.")],runes:{...ZAC_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Thornmail","GW cuts Tahm Kench/Shen passive sustain."),I("Spirit Visage","Self-heal through their mitigation."),I("Sunfire Aegis","Burn through shields over time.")],behind:[I("Spirit Visage","Sustain through the peel war."),I("Force of Nature","MR vs Galio/K'Sante."),I("Unending Despair","Survive their counter-peel.")],runes:{...ZAC_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Spirit Visage","Self-heal outlasts their poke/regen kit."),I("Sunfire Aegis","Burn denies their side-lane control."),I("Thornmail","GW cuts sustain patterns.")],behind:[I("Mercury's Treads","Teemo blind, Kennen stun — shorten both."),I("Force of Nature","Counters AP specialists."),I("Spirit Visage","Amp your own sustain.")],runes:{...ZAC_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
