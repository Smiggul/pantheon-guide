import { I } from "../runeHelpers.js";

const MALPHITE_TOP_DEFAULT_RUNES = {
  keystone:       "Arcane Comet",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Resolve",
  secondaryRunes: ["Overgrowth","Second Wind"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Arcane Comet punishes every landed Seismic Shard from range, matching Malphite's poke-then-engage lane pattern. Manaflow Band and Transcendence solve the mana strain of constant Q poke and add haste; Scorch adds early pressure. Overgrowth and Second Wind cover the early game before Unstoppable Force comes online as a game-changing engage.",
};

const MALPHITE_JGL_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Cosmic Insight"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror's stacking omnivamp fuels Malphite's auto-and-Thunderclap jungle clear, keeping him topped up through invades and skirmishes. Legend: Alacrity feeds the auto-trade ramp; Last Stand rewards fighting through low-HP dives before Unstoppable Force turns a gank around. Magical Footwear and Cosmic Insight cut cooldowns and get his boots online for free, funding a faster clear and more frequent ganks.",
};

const MALPHITE_SUP_DEFAULT_RUNES = {
  keystone:       "Arcane Comet",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Revitalize"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Support Malphite plays a poke-and-engage pattern rather than his usual tank-duelist identity — Arcane Comet punishes every landed Seismic Shard from range, matching his kit's long-range poke tool. Manaflow Band and Transcendence solve the mana strain and add haste; Scorch adds early lane pressure. Bone Plating and Revitalize round out survivability and amplify whatever shields/heals his team stacks on top of Unstoppable Force's engage.",
};

// ══════════════════════════════════════════════════════════════════════════
//  MALPHITE — Vanguard / Unstoppable Force Engage
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"malphite", display:"Malphite", dd:"Malphite",
  color:"#4a4a5a", glow:"#a0a0c0",
  lanes:["Top","Jungle","Support"],
  altBuilds:{
    Top:[{
      label:"Full AP", tag:"alt",
      corePath:"Malignance  ›  Sorcerer's Shoes  ›  Stormsurge  ›  Zhonya's Hourglass",
      coreNote:"Full-AP burst Malphite — take this over the tank build when the enemy team is squishier and more magic-damage-heavy. Building MR as a tank underperforms right now (Hollow Radiance wins ~3% less than Sunfire), so the split is full-armor tank vs full AP. Malignance + Stormsurge turn R → E into a one-shot on the enemy carries, and Zhonya's covers the dive. Into a heavy-AD comp stay tank (Frozen Heart + Sunfire); into squishy/AP, go this.",
      runes:{...MALPHITE_SUP_DEFAULT_RUNES},
      sideItems:["Rabadon's Deathcap","Shadowflame","Void Staff","Cosmic Drive","Rylai's Crystal Scepter"],
    }],
  },
  roles:{
    Top:{
      bans:["Vayne","Teemo","Quinn"], replacements:["Sett","Volibear","Jax"],
      role:"Vanguard / Poke-Then-Engage",
      corePath:"Sunfire Aegis  ›  Plated Steelcaps  ›  Thornmail  ›  Frozen Heart",
      coreNote:"Malphite plays for a poke-then-engage pattern — Seismic Shard pokes and slows, Thunderclap adds burn to auto trades, and Unstoppable Force can single-handedly win a teamfight by knocking up the whole enemy team. Sunfire Aegis adds constant burn and clear speed; Plated Steelcaps blunts early auto trades; Thornmail and Frozen Heart both round out the durability and GW his tank identity needs.",
      sideItems:["Jak'Sho, The Protean","Spirit Visage","Force of Nature","Mercury's Treads","Randuin's Omen","Kaenic Rookern"],
      data:{
        JUGGERNAUT:{ahead:[I("Thornmail","GW cuts their sustain."),I("Sunfire Aegis","Burn adds up over the trade."),I("Frozen Heart","AS slow blunts their DPS.")],behind:[I("Plated Steelcaps","Reduces auto damage from their press."),I("Randuin's Omen","Crit/AS reduction if they build offense."),I("Spirit Visage","Amplify your own sustain.")],runes:{...MALPHITE_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Sunfire Aegis","Burn during their engage window."),I("Frozen Heart","AS slow blunts their follow-up."),I("Jak'Sho, The Protean","Resistances scale into the fight.")],behind:[I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Mercury's Treads","Shorter CC on their engage."),I("Spirit Visage","Amp self-heal to recover.")],runes:{...MALPHITE_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Jak'Sho, The Protean","Resistances eat the opener."),I("Sunfire Aegis","Punish close fights."),I("Frozen Heart","AS slow limits their follow-up.")],behind:[I("Spirit Visage","Amp healing to recover between skirmishes."),I("Mercury's Treads","Shorter CC before the finisher."),I("Force of Nature","MR vs AP assassins.")],runes:{...MALPHITE_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Thornmail","GW cuts their lifesteal."),I("Sunfire Aegis","Burn adds up over long fights."),I("Frozen Heart","AS slow shuts down the duelist.")],behind:[I("Randuin's Omen","Crit/AS reduction on Yi/Trynd/Kayn."),I("Spirit Visage","Amp self-heal in the duel."),I("Plated Steelcaps","Auto reduction.")],runes:{...MALPHITE_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Jak'Sho, The Protean","Resistances survive their combo."),I("Force of Nature","MR stack vs sustained casting."),I("Sunfire Aegis","Burn while closing.")],behind:[I("Force of Nature","MR stack vs their combo."),I("Mercury's Treads","Shorter CC on invades."),I("Spirit Visage","Amp healing to recover.")],runes:{...MALPHITE_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Force of Nature","Shrugs off their sustained magic damage."),I("Sunfire Aegis","Burn adds up over their long fights."),I("Jak'Sho, The Protean","Resistances scale with their sustained damage.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Spirit Visage","Amp healing to keep pace."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...MALPHITE_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration on the approach."),I("Force of Nature","MR + move speed to close."),I("Jak'Sho, The Protean","Resistances survive the poke.")],behind:[I("Force of Nature","MR + move speed vs sustained poke."),I("Mercury's Treads","Reduce CC duration."),I("Spirit Visage","Amp healing on arrival.")],runes:{...MALPHITE_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Thornmail","GW cuts their sustain items."),I("Plated Steelcaps","Auto reduction on the ADC."),I("Frozen Heart","AS slow shuts down their DPS.")],behind:[I("Plated Steelcaps","Non-negotiable auto reduction."),I("Randuin's Omen","Crit reduction vs their build."),I("Spirit Visage","Amp self-heal.")],runes:{...MALPHITE_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Thornmail","GW destroys their heal/shield economy."),I("Sunfire Aegis","Burn pressures both members of the lane."),I("Frozen Heart","AS slow reduces their poke/heal uptime.")],behind:[I("Spirit Visage","Sustain vs their heal economy."),I("Force of Nature","Anti-AP if they poke hard."),I("Randuin's Omen","Survivability if they poke hard.")],runes:{...MALPHITE_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge hooks while you land your own engage."),I("Sunfire Aegis","Burn once you close."),I("Jak'Sho, The Protean","Resistances survive the follow-up.")],behind:[I("Mercury's Treads","Mandatory — reduces the CC that opens a catch."),I("Spirit Visage","Amp healing to recover."),I("Randuin's Omen","Survivability if it goes long.")],runes:{...MALPHITE_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Thornmail","GW cuts their sustain in the tank fight."),I("Frozen Heart","Reduce their engage tempo with the AS slow."),I("Jak'Sho, The Protean","Resistances scale with the extended engage.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Force of Nature","MR vs Malphite/Gragas AP."),I("Spirit Visage","Sustain the war of attrition.")],runes:{...MALPHITE_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Thornmail","GW cuts Tahm Kench/Shen passive sustain."),I("Sunfire Aegis","Burn through shields over time."),I("Frozen Heart","AS slow blunts their peel value.")],behind:[I("Spirit Visage","Sustain through the peel war."),I("Force of Nature","MR vs Galio/K'Sante."),I("Randuin's Omen","Crit reduction if paired with a marksman.")],runes:{...MALPHITE_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Sunfire Aegis","Burn denies their clear paths."),I("Thornmail","GW cuts sustain patterns."),I("Jak'Sho, The Protean","Resistances outlast their poke/regen kit.")],behind:[I("Mercury's Treads","Teemo blind, Kennen stun — shorten both."),I("Force of Nature","Counters AP specialists."),I("Spirit Visage","Amp your own sustain.")],runes:{...MALPHITE_TOP_DEFAULT_RUNES}},
      },
    },
    Jungle:{
      bans:["Sylas","Nasus","Nocturne"], replacements:["Wukong","Sett","Shyvana"],
      skillOrder:["W","E","Q"], // Jungle Malphite maxes W (AP auto-attacks) first; Top/Support max Q (global Q>E>W)
      role:"Off-Meta Bruiser-Tank Jungler",
      corePath:"Dusk and Dawn  ›  Plated Steelcaps  ›  Zeke's Convergence  ›  Sunfire Aegis",
      coreNote:"Jungle Malphite plays a bruiser-tank pattern rather than the pure-tank identity his lane counterpart runs — auto-trade through the jungle, gank with Seismic Shard's slow, and knock up a whole team with Unstoppable Force. Dusk and Dawn adds early damage and haste; Zeke's Convergence amplifies the follow-up the instant his ultimate lands; Sunfire Aegis rounds out clear speed and durability.",
      sideItems:["Thornmail","Frozen Heart","Spirit Visage","Force of Nature","Mercury's Treads","Randuin's Omen"],
      data:{
        JUGGERNAUT:{ahead:[I("Sunfire Aegis","Burn adds up over the skirmish."),I("Thornmail","GW cuts their sustain."),I("Dusk and Dawn","Proc damage wins the extended fight.")],behind:[I("Plated Steelcaps","Reduces auto damage from a counter-gank."),I("Frozen Heart","AS slow blunts their DPS."),I("Spirit Visage","Amplify your own sustain.")],runes:{...MALPHITE_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Dusk and Dawn","Proc damage punishes their dive attempt."),I("Sunfire Aegis","Burn during their engage window."),I("Zeke's Convergence","Amplify the counter-engage.")],behind:[I("Mercury's Treads","Shorter CC on their engage."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Spirit Visage","Amp self-heal to recover.")],runes:{...MALPHITE_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zeke's Convergence","Punish their commit with amplified damage."),I("Dusk and Dawn","Proc damage wins the trade first."),I("Sunfire Aegis","Punish close fights.")],behind:[I("Spirit Visage","Amp healing to recover between skirmishes."),I("Mercury's Treads","Shorter CC before the finisher."),I("Force of Nature","MR vs AP assassins.")],runes:{...MALPHITE_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Thornmail","GW cuts their lifesteal."),I("Dusk and Dawn","Proc damage tips the auto-trade."),I("Sunfire Aegis","Burn adds up over long fights.")],behind:[I("Randuin's Omen","Crit/AS reduction on Yi/Trynd/Kayn."),I("Spirit Visage","Amp self-heal in the duel."),I("Plated Steelcaps","Auto reduction.")],runes:{...MALPHITE_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Zeke's Convergence","Punish damage after they burst."),I("Force of Nature","MR stack vs sustained casting."),I("Sunfire Aegis","Burn while closing.")],behind:[I("Force of Nature","MR stack vs their combo."),I("Mercury's Treads","Shorter CC on invades."),I("Spirit Visage","Amp healing to recover.")],runes:{...MALPHITE_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Force of Nature","Shrugs off their sustained magic damage."),I("Dusk and Dawn","Proc damage wins the drain war."),I("Sunfire Aegis","Burn adds up over their long fights.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Spirit Visage","Amp healing to keep pace."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...MALPHITE_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration on the gank path."),I("Dusk and Dawn","Proc damage sustains the approach."),I("Force of Nature","MR + move speed to close.")],behind:[I("Force of Nature","MR + move speed vs sustained poke."),I("Mercury's Treads","Reduce CC duration."),I("Spirit Visage","Amp healing on arrival.")],runes:{...MALPHITE_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Dusk and Dawn","Proc damage wins the burst race on the ADC."),I("Thornmail","GW cuts their sustain items."),I("Sunfire Aegis","Burn adds up during ganks.")],behind:[I("Plated Steelcaps","Non-negotiable auto reduction."),I("Randuin's Omen","Crit reduction vs their build."),I("Spirit Visage","Amp self-heal.")],runes:{...MALPHITE_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Thornmail","GW cuts their heal/shield economy."),I("Zeke's Convergence","Amplify through their peel."),I("Sunfire Aegis","Burn pressures both members of the lane.")],behind:[I("Spirit Visage","Sustain vs their heal economy."),I("Force of Nature","MR vs their poke component."),I("Zeke's Convergence","Amplify past their sustain.")],runes:{...MALPHITE_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge hooks while ganking."),I("Dusk and Dawn","Proc damage during extended fights after a catch."),I("Sunfire Aegis","Burn once you close.")],behind:[I("Mercury's Treads","Mandatory — a caught Malphite wastes the gank."),I("Spirit Visage","Amp healing to recover."),I("Randuin's Omen","Survivability if it goes long.")],runes:{...MALPHITE_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Thornmail","GW cuts their sustain in the tank fight."),I("Zeke's Convergence","Amplify through the extended engage."),I("Sunfire Aegis","Burn during objective fights.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Force of Nature","MR vs Malphite/Gragas AP."),I("Spirit Visage","Sustain the war of attrition.")],runes:{...MALPHITE_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Thornmail","GW cuts Tahm Kench/Shen passive sustain."),I("Dusk and Dawn","Proc damage through their mitigation."),I("Sunfire Aegis","Burn through shields over time.")],behind:[I("Spirit Visage","Sustain through the peel war."),I("Force of Nature","MR vs Galio/K'Sante."),I("Randuin's Omen","Crit reduction if paired with a marksman.")],runes:{...MALPHITE_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Dusk and Dawn","Proc damage outlasts their poke/regen kit."),I("Sunfire Aegis","Burn denies their clear paths."),I("Thornmail","GW cuts sustain patterns.")],behind:[I("Mercury's Treads","Teemo blind, Kennen stun — shorten both."),I("Force of Nature","Counters AP specialists."),I("Spirit Visage","Amp your own sustain.")],runes:{...MALPHITE_JGL_DEFAULT_RUNES}},
      },
    },
    Support:{
      bans:["Morgana","Swain","Brand"], replacements:["Thresh","Leona","Nautilus"],
      role:"Off-Meta Poke-Engage",
      corePath:"Malignance  ›  Sorcerer's Shoes  ›  Stormsurge  ›  Zhonya's Hourglass",
      coreNote:"Support Malphite trades his usual tank-bruiser identity for an AP poke-engage pattern — Seismic Shard pokes from range, and Unstoppable Force still knocks up a whole enemy team to set up a kill regardless of build. Malignance's haste means more frequent knock-up windows; Sorcerer's Shoes and Stormsurge both fund the poke damage; Zhonya's Hourglass buys time through the counter-engage his all-in invites.",
      sideItems:["Locket of the Iron Solari","Zeke's Convergence","Mercury's Treads","Rylai's Crystal Scepter","Banshee's Veil","Redemption"],
      data:{
        JUGGERNAUT:{ahead:[I("Locket of the Iron Solari","Shield covers the walk-down window."),I("Zeke's Convergence","Amplify damage after your knock-up lands."),I("Stormsurge","Poke wears them down before the fight starts.")],behind:[I("Zhonya's Hourglass","Stall their all-in window entirely."),I("Banshee's Veil","Block their engage tool."),I("Mercury's Treads","Reduce their key CC.")],runes:{...MALPHITE_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rylai's Crystal Scepter","Slow zones the dive attempt."),I("Locket of the Iron Solari","Shield absorbs their dive opener."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Essential — negates their all-in timing."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Mercury's Treads","Shorter CC on the engage.")],runes:{...MALPHITE_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield eats the opener before it lands on your ADC."),I("Zeke's Convergence","Punish their commit with amplified damage."),I("Zhonya's Hourglass","Insurance even with a lead.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis neutralises the full combo."),I("Banshee's Veil","Blocks their engage opener."),I("Mercury's Treads","Reduce the CC that opens their combo.")],runes:{...MALPHITE_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rylai's Crystal Scepter","Slow denies their kite/duel pattern."),I("Zeke's Convergence","Amplify ADC damage in the 2v2."),I("Stormsurge","Poke whittles them down first.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Banshee's Veil","Blocks their gap-close CC."),I("Mercury's Treads","Reduce their gap-close CC.")],runes:{...MALPHITE_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Zhonya's Hourglass","Survive the rotation, then punish."),I("Locket of the Iron Solari","Shield through their combo."),I("Zeke's Convergence","Punish damage after they burst.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo."),I("Zhonya's Hourglass","Survive the full rotation."),I("Mercury's Treads","Shorten CC duration.")],runes:{...MALPHITE_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Stormsurge","Poke wins the drain war."),I("Zeke's Convergence","Amplify the punish."),I("Rylai's Crystal Scepter","Slow keeps them in the fight.")],behind:[I("Redemption","Global healing offsets their sustained damage."),I("Zhonya's Hourglass","Survive the sustained burst."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...MALPHITE_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Locket of the Iron Solari","Shields your ADC from poke chip."),I("Redemption","Offsets accumulated poke damage.")],behind:[I("Redemption","Global heal counters accumulated chip."),I("Mercury's Treads","Reduce CC duration."),I("Locket of the Iron Solari","Shield layer.")],runes:{...MALPHITE_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Zeke's Convergence","Amplify your ADC's damage after the knock-up lands — Malphite's whole kit enables this."),I("Rylai's Crystal Scepter","Slow amplifies your ADC's kiting."),I("Locket of the Iron Solari","Shield in the poke war.")],behind:[I("Locket of the Iron Solari","Non-negotiable — protect your carry."),I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Mercury's Treads","Reduce CC duration.")],runes:{...MALPHITE_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Stormsurge","Amplify the poke war in your favor."),I("Zeke's Convergence","Amplify damage past their sustain."),I("Rylai's Crystal Scepter","Slow denies their peel.")],behind:[I("Locket of the Iron Solari","Core defensive value."),I("Redemption","Global heal offsets theirs."),I("Banshee's Veil","Blocks their key CC.")],runes:{...MALPHITE_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge their hook so you land your own engage first."),I("Zeke's Convergence","Amplify the punish after you land your CC."),I("Locket of the Iron Solari","Shield vs pick attempts.")],behind:[I("Mercury's Treads","Mandatory — a caught Malphite loses the whole engage plan."),I("Zhonya's Hourglass","Buys time if you get caught."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...MALPHITE_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Rylai's Crystal Scepter","Slow before they can fully engage."),I("Zeke's Convergence","Amplify your team's counter-engage."),I("Stormsurge","Poke before they can engage.")],behind:[I("Mercury's Treads","Shorter stuns from their engage chain."),I("Zhonya's Hourglass","Survive their engage combo."),I("Banshee's Veil","Blocks the CC that starts their initiation.")],runes:{...MALPHITE_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Zeke's Convergence","Amplify ADC damage past their body-block."),I("Rylai's Crystal Scepter","Slow past their body-block."),I("Stormsurge","Poke past their mitigation.")],behind:[I("Redemption","Global heal in the extended peel war."),I("Zhonya's Hourglass","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...MALPHITE_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Mercury's Treads","Teemo blind, Kennen stun — land your own CC first."),I("Locket of the Iron Solari","Shield through their poke/kit."),I("Zeke's Convergence","Amplify damage in skirmishes.")],behind:[I("Mercury's Treads","Reduce blind/stun duration."),I("Banshee's Veil","Blocks their key setup ability."),I("Redemption","Global heal while you figure out the matchup.")],runes:{...MALPHITE_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
