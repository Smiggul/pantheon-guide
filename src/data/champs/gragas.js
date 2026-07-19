import { I } from "../runeHelpers.js";

const GRAGAS_JGL_DEFAULT_RUNES = {
  keystone:       "Dark Harvest",
  primary:        "Domination",
  primaryRunes:   ["Sudden Impact","Grisly Mementos","Treasure Hunter"],
  secondary:      "Sorcery",
  secondaryRunes: ["Transcendence","Waterwalking"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Dark Harvest snowballs off repeated jungle skirmishes and Explosive Cask executes, stacking permanent bonus damage all game. Sudden Impact procs off the Body Slam dash for burst true damage; Grisly Mementos and Treasure Hunter fund an early item spike from jungle clear gold. Transcendence adds haste for more Cask/Slam windows; Waterwalking speeds up jungle pathing.",
};

const GRAGAS_TOP_DEFAULT_RUNES = {
  keystone:       "Aftershock",
  primary:        "Resolve",
  primaryRunes:   ["Demolish","Conditioning","Overgrowth"],
  secondary:      "Precision",
  secondaryRunes: ["Triumph","Legend: Alacrity"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Same Aftershock burst-resistance core as Jungle. Legend: Alacrity replaces Ultimate Hunter for lane — Top Gragas doesn't need R uptime as urgently as jungle ganks demand, but attack speed helps him weave autos between ability cooldowns during extended trades.",
};

// ══════════════════════════════════════════════════════════════════════════
//  GRAGAS — Bruiser / Skirmisher-Tank
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"gragas", display:"Gragas", dd:"Gragas",
  color:"#b8860b", glow:"#e8a838",
  lanes:["Jungle","Top","Mid"],
  roles:{
    Jungle:{
      bans:["Ivern","Amumu","Zac"], replacements:["Warwick","Wukong","Sett"],
      role:"Bruiser / Skirmisher-Tank",
      corePath:"Sorcerer's Shoes  ›  Lich Bane  ›  Shadowflame  ›  Rabadon's Deathcap",
      coreNote:"Current-meta Gragas Jungle plays as an AP burst mage rather than a bruiser-tank. Sorcerer's Shoes gets pen online fast; Lich Bane amplifies the ability-into-auto pattern his Body Slam engage creates; Shadowflame adds extra burst on targets his E/R combo has already chunked; Rabadon's Deathcap scales the whole kit for a real one-rotation kill threat.",
      sideItems:["Riftmaker","Sunfire Aegis","Thornmail","Zhonya's Hourglass","Mercury's Treads","Void Staff","Rylai's Crystal Scepter"],
      data:{
        JUGGERNAUT:{ahead:[I("Riftmaker","Omnivamp wins the extended skirmish."),I("Sunfire Aegis","Burn while they can't punish your clear."),I("Thornmail","GW cuts their sustain.")],behind:[I("Plated Steelcaps","Reduces auto damage from a counter-gank."),I("Randuin's Omen","Crit/AS reduction if they build offense."),I("Spirit Visage","Amplify your own sustain.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Sunfire Aegis","Burn during their engage window."),I("Riftmaker","Omnivamp outlasts the dive."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Negates their all-in timing."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Mercury's Treads","Shorter CC on their engage.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Riftmaker","Omnivamp sustains through their burst window."),I("Sunfire Aegis","Punish close fights."),I("Zhonya's Hourglass","Insurance even with a lead.")],behind:[I("Zhonya's Hourglass","Essential vs burst junglers."),I("Spirit Visage","Amp healing to recover between skirmishes."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Riftmaker","Omnivamp wins the extended duel outright."),I("Thornmail","GW cuts their lifesteal."),I("Sunfire Aegis","Burn adds up over long fights.")],behind:[I("Randuin's Omen","Crit/AS reduction on Yi/Trynd/Kayn."),I("Spirit Visage","Amp self-heal in the duel."),I("Plated Steelcaps","Auto reduction.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Zhonya's Hourglass","Insurance vs their burst window."),I("Riftmaker","Omnivamp outlasts the poke."),I("Mercury's Treads","Reduce CC in their combo.")],behind:[I("Zhonya's Hourglass","Mandatory vs burst mages."),I("Force of Nature","MR stack vs sustained casting."),I("Mercury's Treads","Shorter CC on invades.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Force of Nature","Shrugs off their sustained magic damage."),I("Riftmaker","Omnivamp wins the drain war."),I("Sunfire Aegis","Burn adds up over their long fights.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Spirit Visage","Amp healing to keep pace."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration on the gank path."),I("Riftmaker","Omnivamp sustains the approach."),I("Zhonya's Hourglass","Survive the poke on arrival.")],behind:[I("Force of Nature","MR + move speed vs sustained poke."),I("Mercury's Treads","Reduce CC duration."),I("Zhonya's Hourglass","Second life on arrival.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Riftmaker","Omnivamp wins the burst race on the ADC."),I("Sunfire Aegis","Burn adds up during ganks."),I("Thornmail","GW cuts their sustain items.")],behind:[I("Plated Steelcaps","Non-negotiable auto reduction."),I("Randuin's Omen","Crit reduction vs their build."),I("Spirit Visage","Amp self-heal.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Thornmail","GW cuts their heal/shield economy."),I("Riftmaker","Omnivamp through their peel."),I("Sunfire Aegis","Burn pressures both members of the lane.")],behind:[I("Spirit Visage","Sustain vs their heal economy."),I("Force of Nature","MR vs their poke component."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge hooks while ganking."),I("Riftmaker","Omnivamp during extended fights after a catch."),I("Sunfire Aegis","Burn once you close.")],behind:[I("Mercury's Treads","Mandatory — a caught Gragas wastes the gank."),I("Zhonya's Hourglass","Survive the follow-up."),I("Spirit Visage","Amp healing to recover.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Thornmail","GW cuts their sustain in the tank fight."),I("Riftmaker","Omnivamp through the extended engage."),I("Sunfire Aegis","Burn during objective fights.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Force of Nature","MR vs Malphite/Gragas-mirror AP."),I("Spirit Visage","Sustain the war of attrition.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Thornmail","GW cuts Tahm Kench/Shen passive sustain."),I("Riftmaker","Omnivamp through their mitigation."),I("Sunfire Aegis","Burn through shields over time.")],behind:[I("Spirit Visage","Sustain through the peel war."),I("Force of Nature","MR vs Galio/K'Sante."),I("Zhonya's Hourglass","Survive their counter-peel.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Riftmaker","Omnivamp outlasts their poke/regen kit."),I("Sunfire Aegis","Burn denies their clear paths."),I("Thornmail","GW cuts sustain patterns.")],behind:[I("Mercury's Treads","Teemo blind, Kennen stun — shorten both."),I("Force of Nature","Counters AP specialists."),I("Spirit Visage","Amp your own sustain.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
      },
    },
    Top:{
      bans:["Mordekaiser","Vladimir","Garen"], replacements:["Renekton","Sett","Volibear"],
      role:"Bruiser / Skirmisher-Tank",
      corePath:"Sunfire Aegis  ›  Riftmaker  ›  Thornmail  ›  Force of Nature",
      coreNote:"Top Gragas plays similarly to Jungle — look for extended trades whenever his abilities are up, punishing all-in windows with the E stun into R zoning. Same itemization core; prioritize Force of Nature or Thornmail earlier based on the opposing damage type.",
      sideItems:["Plated Steelcaps","Mercury's Treads","Randuin's Omen","Abyssal Mask","Spirit Visage","Zhonya's Hourglass"],
      data:{
        JUGGERNAUT:{ahead:[I("Riftmaker","Omnivamp wins the sustained lane war."),I("Sunfire Aegis","Burn adds up over the trade."),I("Thornmail","GW cuts their sustain.")],behind:[I("Plated Steelcaps","Reduces auto damage from their all-in."),I("Randuin's Omen","Crit/AS reduction if they build offense."),I("Spirit Visage","Amplify your own sustain.")],runes:{...GRAGAS_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Sunfire Aegis","Burn during their engage window."),I("Riftmaker","Omnivamp outlasts the dive."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Negates their all-in timing entirely."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Mercury's Treads","Shorter CC on the engage.")],runes:{...GRAGAS_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Riftmaker","Omnivamp sustains through their burst window."),I("Sunfire Aegis","Punish their close-range commitment."),I("Zhonya's Hourglass","Insurance even with a lead.")],behind:[I("Zhonya's Hourglass","Essential vs burst all-in."),I("Spirit Visage","Amp healing to recover."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...GRAGAS_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Riftmaker","Omnivamp wins the extended duel."),I("Thornmail","GW cuts their lifesteal."),I("Sunfire Aegis","Burn adds up over long fights.")],behind:[I("Randuin's Omen","Crit/AS reduction on Yasuo/Yone/Tryndamere."),I("Spirit Visage","Amp self-heal in the duel."),I("Plated Steelcaps","Auto reduction.")],runes:{...GRAGAS_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Zhonya's Hourglass","Insurance vs their burst window."),I("Riftmaker","Omnivamp outlasts the poke."),I("Mercury's Treads","Reduce CC in their combo.")],behind:[I("Zhonya's Hourglass","Mandatory vs burst mages."),I("Force of Nature","MR stack vs sustained casting."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...GRAGAS_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Force of Nature","Shrugs off their sustained magic damage."),I("Riftmaker","Omnivamp wins the drain war."),I("Sunfire Aegis","Burn adds up over their long trades.")],behind:[I("Force of Nature","Mandatory vs Vladimir/Swain drain fights."),I("Spirit Visage","Amp healing to keep pace."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...GRAGAS_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Force of Nature","MR + move speed walks through poke to engage."),I("Riftmaker","Omnivamp sustains the approach."),I("Mercury's Treads","Reduce CC duration.")],behind:[I("Force of Nature","Non-negotiable vs sustained poke."),I("Mercury's Treads","Reduce CC duration from long range."),I("Zhonya's Hourglass","Survive the poke on approach.")],runes:{...GRAGAS_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Riftmaker","Omnivamp wins the burst race."),I("Thornmail","GW cuts their sustain items."),I("Sunfire Aegis","Burn adds up in the skirmish.")],behind:[I("Plated Steelcaps","Non-negotiable auto reduction."),I("Randuin's Omen","Crit reduction vs their build."),I("Spirit Visage","Amp self-heal.")],runes:{...GRAGAS_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Thornmail","GW cuts their heal/shield economy."),I("Riftmaker","Omnivamp through their peel."),I("Sunfire Aegis","Burn pressures both members of the lane.")],behind:[I("Spirit Visage","Sustain vs their heal economy."),I("Force of Nature","MR vs their poke component."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...GRAGAS_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Shorter hooks — harder to catch out."),I("Riftmaker","Omnivamp during extended fights."),I("Sunfire Aegis","Burn once you close.")],behind:[I("Mercury's Treads","Mandatory — caught Gragas is dead Gragas."),I("Zhonya's Hourglass","Survive the follow-up."),I("Spirit Visage","Amp healing to recover.")],runes:{...GRAGAS_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Thornmail","GW cuts their sustain in the tank fight."),I("Riftmaker","Omnivamp through the extended engage."),I("Sunfire Aegis","Burn during objective fights.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Force of Nature","MR vs Malphite/Gragas-mirror AP."),I("Spirit Visage","Sustain the war of attrition.")],runes:{...GRAGAS_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Thornmail","GW cuts Tahm Kench/Shen passive sustain."),I("Riftmaker","Omnivamp through their mitigation."),I("Sunfire Aegis","Burn through shields over time.")],behind:[I("Spirit Visage","Sustain through the peel war."),I("Force of Nature","MR vs Galio/K'Sante."),I("Zhonya's Hourglass","Survive their counter-peel.")],runes:{...GRAGAS_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Riftmaker","Omnivamp outlasts their poke/regen kit."),I("Sunfire Aegis","Burn denies their side-lane control."),I("Thornmail","GW cuts sustain patterns.")],behind:[I("Mercury's Treads","Teemo blind, Kennen stun — shorten both."),I("Force of Nature","Counters AP specialists."),I("Spirit Visage","Amp your own sustain.")],runes:{...GRAGAS_TOP_DEFAULT_RUNES}},
      },
    },
    Mid:{
      bans:["Malzahar","Sylas","Locke"], replacements:["Katarina","Aurelion Sol","Xerath"],
      role:"AP Burst-Mage / Off-Meta Poke",
      corePath:"Hextech Rocketbelt  ›  Lich Bane  ›  Shadowflame  ›  Rabadon's Deathcap",
      coreNote:"Mid Gragas is a D-tier off-meta pick that plays the same AP burst-mage pattern as his current jungle build. Hextech Rocketbelt's dash+burst proc pairs with a Body Slam engage; Lich Bane amplifies the follow-up auto; Shadowflame and Rabadon's turn the combo into a real kill threat by mid-game.",
      sideItems:["Sorcerer's Shoes","Void Staff","Zhonya's Hourglass","Rylai's Crystal Scepter","Morellonomicon","Banshee's Veil"],
      data:{
        JUGGERNAUT:{ahead:[I("Shadowflame","Burst low-MR Juggernauts from range."),I("Hextech Rocketbelt","Dash in, burst, dash out before they close."),I("Rabadon's Deathcap","Scaling burst ends the trade.")],behind:[I("Zhonya's Hourglass","Stall their all-in window entirely."),I("Banshee's Veil","Block their engage tool."),I("Sorcerer's Shoes","Keep damage relevant vs their MR.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Hextech Rocketbelt","Dash away from the dive after bursting."),I("Shadowflame","Burst them before the combo finishes."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Essential — negates their all-in timing."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Rylai's Crystal Scepter","Slow to kite the follow-up.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Out-burst them before their combo completes."),I("Zhonya's Hourglass","Insurance even with a lead."),I("Rabadon's Deathcap","AP edge wins the trade first.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis neutralises the full combo."),I("Banshee's Veil","Blocks their engage opener."),I("Hextech Rocketbelt","Dash out of kill range.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rabadon's Deathcap","Burst edge ends the fight before they close."),I("Rylai's Crystal Scepter","Slow kites the duelist."),I("Hextech Rocketbelt","Poke pressure whittles them down first.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Rylai's Crystal Scepter","Slow to disengage."),I("Hextech Rocketbelt","Dash to create distance.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Shadowflame","Out-burst them between cooldown windows."),I("Rabadon's Deathcap","AP edge wins the trade."),I("Hextech Rocketbelt","Poke pressure denies their setup.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo."),I("Zhonya's Hourglass","Survive the full rotation."),I("Sorcerer's Shoes","Keep damage relevant through their MR.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pierce early MR before it stacks."),I("Rabadon's Deathcap","Raw AP wins the burst trade."),I("Shadowflame","Burst window before they can drain back.")],behind:[I("Banshee's Veil","Blocks the CC that starts their combo."),I("Zhonya's Hourglass","Survive the sustained burst."),I("Morellonomicon","Cuts Vladimir/Swain healing.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Hextech Rocketbelt","Dash to close the gap before they can kite."),I("Rabadon's Deathcap","Burst edge wins once you close."),I("Shadowflame","Burst on arrival.")],behind:[I("Banshee's Veil","Blocks one long-range ability."),I("Zhonya's Hourglass","Survive the poke on approach."),I("Rylai's Crystal Scepter","Slow closes the range gap.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Hextech Rocketbelt","Poke pressure denies their farm."),I("Shadowflame","Burst the squishy ADC outright."),I("Rabadon's Deathcap","Amplify the killing blow.")],behind:[I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Banshee's Veil","Blocks the engage tool set up on you."),I("Sorcerer's Shoes","MR pen to stay relevant.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Extra pen through their shield spam."),I("Rabadon's Deathcap","Burst through shields to the carry."),I("Morellonomicon","Cuts their sustain package.")],behind:[I("Void Staff","Keep damage relevant vs their kit."),I("Banshee's Veil","Blocks the setup CC on their carry combo."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Hextech Rocketbelt","Dash dodges hooks entirely."),I("Rabadon's Deathcap","Burst them down once they whiff."),I("Shadowflame","Extra damage on the punish.")],behind:[I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),I("Zhonya's Hourglass","Buys time if you get caught."),I("Hextech Rocketbelt","Dash escape after a landed hook.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Penetrates their MR stacking."),I("Rabadon's Deathcap","Burst edge still matters past their frontline."),I("Hextech Rocketbelt","Poke before they can engage.")],behind:[I("Void Staff","Required to deal damage through their resists."),I("Zhonya's Hourglass","Survive their engage combo."),I("Banshee's Veil","Blocks the CC that starts their initiation.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","MR-stacking Wardens still take real damage through pen."),I("Rabadon's Deathcap","Amplify AP so shielded Wardens still take damage."),I("Shadowflame","Extra burst on a landed combo.")],behind:[I("Void Staff","Required vs a stacked-resist Warden."),I("Zhonya's Hourglass","Survive the engage they set up."),I("Banshee's Veil","Blocks their key CC.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Hextech Rocketbelt","Dash keeps you ahead of kiting Specialists."),I("Rabadon's Deathcap","Burst edge ends the fight."),I("Shadowflame","Extra burst vs squishy specialists caught close.")],behind:[I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive burst setups."),I("Sorcerer's Shoes","MR pen through their kit.")],runes:{...GRAGAS_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
