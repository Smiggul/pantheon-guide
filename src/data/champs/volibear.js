import { I } from "../runeHelpers.js";

const VOLIBEAR_TOP_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Demolish","Revitalize"],
  // Research (2026-11-01, lolalytics 16.21 Emerald+): Most Common page, 62.2% of 90,467 games, takes Adaptive in
  //   the second shard row; every other row already matched.
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Lethal Tempo is now the standard Volibear keystone in both lanes — the attack speed compounds with his passive's bonus damage and W healing. Legend: Haste keeps Q/E/R available more often. Demolish converts lane priority into plates under your R tower-disable dives; Revitalize amplifies the W self-heal that anchors his whole trading pattern.",
};

const VOLIBEAR_JGL_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Last Stand"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Jack Of All Trades"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Lethal Tempo stacks with the passive's bonus attack speed — at max stacks your W bites come out twice as often and the second W executes. Triumph heals on gank kills, Last Stand rewards fighting at the HP range where W heals biggest. Magical Footwear saves gold toward the 2-item spike; Jack Of All Trades' flat stat bonus rounds out early skirmish power.",
};

// ══════════════════════════════════════════════════════════════════════════
//  VOLIBEAR — Top tank / Jungle bruiser
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"volibear", display:"Volibear", dd:"Volibear",
  color:"#2e5f8a", glow:"#5dade2",
  altBuilds:{
    Top:[{
      // Research (2026-11-01, lolalytics 16.21 Emerald+, Volibear Top): Statikk Shiv is now the most common first item
      //   (40.8% of 77,197 games; Dusk and Dawn 36.9%), but its games split three ways, so Dusk and Dawn > Navori stays
      //   the most common pair (23.1%) and the main build. The Statikk line players build is Statikk > Dusk and Dawn
      //   (17.1% of pairs) > Navori (1,111 games, 55.4% WR as a three-item set); OP.GG's second core row is the same
      //   three items (4.4%, 55.1%). It replaced the old "Statikk Waveclear" (Dusk and Dawn > Statikk, 5.5% of pairs).
      label:"Statikk Shiv first", tag:"alt",
      corePath:"Statikk Shiv  ›  Dusk and Dawn  ›  Navori Flickerblade  ›  Spirit Visage",
      coreNote:"Statikk Shiv first for wave clear: shove, then roam or dive with R. Dusk and Dawn and Navori after it, as in the main build.",
      runes:{...VOLIBEAR_TOP_DEFAULT_RUNES},
      sideItems:["Navori Flickerblade","Wit's End","Thornmail","Kaenic Rookern","Sterak's Gage","Mercury's Treads"],
    },{
      label:"Full Tank", tag:"alt",
      corePath:"Sunfire Aegis  ›  Jak'Sho, The Protean  ›  Spirit Visage  ›  Thornmail",
      coreNote:"Pure durability instead of on-hit DPS. The kit carries it: R disables a tower and its shield and AoE keep you diving, W still heals off every bite, and the passive deals percent-max-health magic damage without damage items. Sunfire, Jak'Sho, Spirit Visage, Thornmail, with Aftershock to punish your own engage. Best into heavy-damage teams or when your team needs a front line: far harder to kill, far less of a carry. Kaenic Rookern into AP, Randuin's or Frozen Heart into crit.",
      runes:{ keystone:"Aftershock", primary:"Resolve", primaryRunes:["Font of Life","Conditioning","Overgrowth"], secondary:"Precision", secondaryRunes:["Triumph","Legend: Haste"], shards:["Ability Haste","Health (scaling)","Health"], reason:"Aftershock turns Volibear's guaranteed E/R engage into a burst of resistances + a damage pop, exactly when he dives in — the tank keystone that rewards his all-in pattern. Font of Life and Conditioning scale his frontline durability, Overgrowth compounds it in longer games; Triumph + Legend: Haste keep him healthy and spamming his kit through the fight." },
      sideItems:["Warmog's Armor","Kaenic Rookern","Frozen Heart","Randuin's Omen","Unending Despair","Mercury's Treads"],
    },{
      // Research (2026-10-27): Zwag, "Volibear but I one shot the entire enemy team with chain lightning" (24 Oct 2026,
      //   Top, 27/6/1 win). Read from frames: the rune page at 0:05, the post-game items at 27:40, the inventory every two
      //   minutes for the order (Statikk Shiv by 8:00, Spellslinger's Shoes and Lost Chapter by 10:00, Shadowflame by
      //   18:00, Rabadon's and Stormsurge by 24:00, Void Staff last). Passive text (16.21): the 5-stack lightning deals
      //   +45% AP to the target and 4 closest enemies, and AP adds attack speed.
      label:"Meme Build", tag:"meme", hint:"Full AP",
      corePath:"Statikk Shiv  ›  Spellslinger's Shoes  ›  Shadowflame  ›  Rabadon's Deathcap  ›  Stormsurge",
      coreNote:"Full AP chain lightning. Your passive's lightning scales with AP and jumps to the 4 closest enemies, and Statikk Shiv's bolts chain on top. Stack the passive in every trade, then dive the backline with R. Void Staff last.",
      runes:{ keystone:"Press the Attack", primary:"Precision", primaryRunes:["Presence of Mind","Legend: Alacrity","Cut Down"], secondary:"Sorcery", secondaryRunes:["Absolute Focus","Gathering Storm"], shards:["Adaptive Force","Adaptive Force","Health (scaling)"], reason:"Press the Attack stacks fast with the passive's attack speed. Absolute Focus and Gathering Storm add AP." },
      sideItems:["Void Staff"],
    },{
      // Research (2026-11-01): the owner asked for a tank Statikk Shiv build with Heartsteel and Thornmail. It is rare:
      //   lolalytics 16.21 Emerald+ Volibear Top has Heartsteel first in 70 of 77,197 games (26 wins), Heartsteel >
      //   Statikk in 9 and Statikk > Heartsteel in 7, so there is no sourced order or rune page. Heartsteel first is
      //   Claude's call, because its permanent health grows with every proc and the procs start when it is bought.
      //   The kit fits (16.21 ability text): W deals +6% bonus health (+9% on a marked target) and E's shield is 14%
      //   of max health, so the stacks feed both. Grasp of the Undying is the health-stacking keystone; the Resolve
      //   rows, Precision secondary and shards are Claude's calls, the shards copied from the old Top page.
      label:"Heartsteel Tank", tag:"alt",
      corePath:"Heartsteel  ›  Statikk Shiv  ›  Thornmail  ›  Spirit Visage",
      coreNote:"Stack health instead of damage: W hits harder and E shields more with every Heartsteel stack. Rush Heartsteel to start stacking early. Rarely built and weaker than the main build, so pick it for long games.",
      runes:{ keystone:"Grasp of the Undying", primary:"Resolve", primaryRunes:["Demolish","Conditioning","Overgrowth"], secondary:"Precision", secondaryRunes:["Triumph","Legend: Haste"], shards:["Attack Speed","Health (scaling)","Health"], reason:"Grasp and Overgrowth add permanent health on top of Heartsteel's. Demolish turns your shoves into plates." },
      sideItems:["Plated Steelcaps","Unending Despair","Randuin's Omen","Kaenic Rookern","Warmog's Armor","Jak'Sho, The Protean"],
    }],
  },
  roles:{
    Top:{
      bans:["Teemo","Fiora","Aatrox"], replacements:["Sett","Renekton","Sion"],
      role:"Juggernaut / Tank",
      corePath:"Dusk and Dawn  ›  Navori Flickerblade  ›  Spirit Visage  ›  Thornmail",
      // Research: Current meta favors Dusk and Dawn plus Navori over the older Heartsteel/Sunfire Aegis core.
      coreNote:"Dusk and Dawn's on-hit and crit hybrid stats and Navori Flickerblade's cooldown refund both feed your passive's per-cast bonus damage directly. Spirit Visage amplifies W self-healing, your core sustain; Thornmail or Force of Nature last, by their damage profile. Heartsteel is a fine alternative for long, scaling matches. R disables the tower: Demolish plus dive is your win condition.",
      sideItems:["Force of Nature","Dead Man's Plate","Warmog's Armor","Randuin's Omen","Frozen Heart","Abyssal Mask","Mercury's Treads","Plated Steelcaps","Heartsteel","Sunfire Aegis"],
      data:{
        JUGGERNAUT:{ahead:[I("Sunfire Aegis","Burn stacks while you out-sustain their walk-down with W."),I("Spirit Visage","Amplifies W healing — you win the HP war."),I("Thornmail","GW cuts Darius/Mundo regen while they hit you.")],behind:[I("Thornmail","GW 40% is the equaliser vs their sustain."),I("Spirit Visage","W healing keeps you relevant behind."),I("Warmog's Armor","Regen between waves — never base, never lose tower.")],runes:{...VOLIBEAR_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Sunfire Aegis","Burn while Q stun + E slow field lock their dive."),I("Dead Man's Plate","Counter-charge their engage with Q speed."),I("Spirit Visage","W healing out-lasts their extended dive.")],behind:[I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Spirit Visage","W sustain wins the second fight."),I("Randuin's Omen","Active slow breaks their re-engage.")],runes:{...VOLIBEAR_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sunfire Aegis","They must enter melee — burn + Q stun punishes."),I("Spirit Visage","W heals back their burst attempt."),I("Dead Man's Plate","Chase them down after the failed one-shot.")],behind:[I("Sterak's Gage","Shield absorbs the burst window."),I("Spirit Visage","Heal back what their combo chunks."),I("Abyssal Mask","AP assassins — MR + amplify your damage.")],runes:{...VOLIBEAR_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Thornmail","GW + reflect on their auto-heavy dueling."),I("Spirit Visage","W healing wins extended trades they want."),I("Sunfire Aegis","Burn adds up over their long fights.")],behind:[I("Randuin's Omen","Crit reduction + active slow on Trynd/Yone."),I("Thornmail","GW on Fiora/Jax lifesteal."),I("Frozen Heart","Attack speed slow gimps their DPS.")],runes:{...VOLIBEAR_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Spirit Visage","MR + W healing back their combo."),I("Abyssal Mask","MR + damage amp when you land Q on them."),I("Sunfire Aegis","Burn while they can't kite your Q speed.")],behind:[I("Force of Nature","Stacking MR + move speed to close the gap."),I("Mercury's Treads","Shorter CC chains before your Q stun lands."),I("Spirit Visage","Heal back their poke between waves.")],runes:{...VOLIBEAR_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Force of Nature","Move speed + MR vs sustained AP DPS."),I("Spirit Visage","W healing races their drain."),I("Thornmail","GW on Vladimir/Swain healing.")],behind:[I("Force of Nature","Non-negotiable vs Rumble/Vlad DPS."),I("Mercury's Treads","Tenacity vs their layered CC."),I("Spirit Visage","Sustain to survive lane at all.")],runes:{...VOLIBEAR_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Force of Nature","MR + move speed — walk through poke and stun them."),I("Dead Man's Plate","More approach speed with Q."),I("Spirit Visage","W heals back the poke tax.")],behind:[I("Force of Nature","Non-negotiable — move speed is the answer."),I("Warmog's Armor","Regen the poke between trades — Second Wind covers the rest."),I("Mercury's Treads","Their layered slows/CC.")],runes:{...VOLIBEAR_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Dead Man's Plate","Q + charge speed reaches them before they kite."),I("Randuin's Omen","Crit reduction + active slow."),I("Sunfire Aegis","Burn while they're stunned in melee.")],behind:[I("Plated Steelcaps","Auto reduction non-negotiable."),I("Randuin's Omen","Crit + active slow."),I("Frozen Heart","Attack speed slow cuts their DPS.")],runes:{...VOLIBEAR_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Thornmail","GW cuts their heal/shield value."),I("Dead Man's Plate","Reach the carry through peel."),I("Sunfire Aegis","Burn pressures both of them.")],behind:[I("Thornmail","GW equaliser."),I("Spirit Visage","Your healing vs their healing."),I("Mercury's Treads","Their disengage CC.")],runes:{...VOLIBEAR_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Shorter hooks/roots — Q stun needs you moving."),I("Dead Man's Plate","Speed through their zone control."),I("Spirit Visage","Heal back pick attempts.")],behind:[I("Mercury's Treads","Mandatory — caught Volibear is dead Volibear."),I("Force of Nature","MR + move speed vs AP catchers."),I("Sterak's Gage","Survive the follow-up burst after a hook.")],runes:{...VOLIBEAR_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Sunfire Aegis","Burn during their engage — you out-tank them."),I("Abyssal Mask","Amp your damage in their AoE engage."),I("Spirit Visage","W healing through the engage chaos.")],behind:[I("Mercury's Treads","Tenacity vs their CC chains."),I("Force of Nature","MR vs Malphite/Gragas AP."),I("Warmog's Armor","Out-sustain the war of attrition.")],runes:{...VOLIBEAR_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Sunfire Aegis","Burn through their shields over time."),I("Dead Man's Plate","Speed past their body-block to the carry."),I("Thornmail","GW on Shen/Braum sustain support.")],behind:[I("Thornmail","GW keeps fights winnable."),I("Spirit Visage","Sustain the long peel war."),I("Mercury's Treads","Poppy/Galio CC.")],runes:{...VOLIBEAR_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Spirit Visage","W healing beats Teemo/GP poke chip."),I("Force of Nature","MR + move speed runs down AP Specialists."),I("Sunfire Aegis","Burn punishes their short range windows.")],behind:[I("Force of Nature","Teemo/Kennen AP — MR + move speed."),I("Mercury's Treads","Blind/stun duration cut."),I("Warmog's Armor","Regen their poke between all-ins.")],runes:{...VOLIBEAR_TOP_DEFAULT_RUNES}},
      },
    },
    Jungle:{
      bans:["Kindred","Rek'Sai","Elise"], replacements:["Udyr","Warwick","Sett"],
      role:"Juggernaut / Bruiser",
      corePath:"Dusk and Dawn  ›  Navori Flickerblade  ›  Spirit Visage  ›  Thornmail",
      // Research: Dusk and Dawn plus Navori feed his passive better than the older Trinity Force/Sundered Sky pattern.
      coreNote:"Same core as Top: Dusk and Dawn's on-hit and crit hybrid and Navori Flickerblade's cooldown refund feed your passive's per-cast damage. Spirit Visage amplifies the W healing that anchors every gank. Gank with E from fog for the slow field, Q stun on arrival, and R to break tower dives.",
      sideItems:["Dead Man's Plate","Force of Nature","Wit's End","Blade of The Ruined King","Mercury's Treads","Plated Steelcaps","Trinity Force","Sundered Sky","Titanic Hydra"],
      data:{
        JUGGERNAUT:{ahead:[I("Sundered Sky","Crit-heal bite wins the bruiser mirror."),I("Blade of The Ruined King","% HP shred on their stacked health."),I("Thornmail","GW on their regen while you DPS.")],behind:[I("Sterak's Gage","Shield when their walk-down connects."),I("Thornmail","GW equaliser."),I("Spirit Visage","W healing keeps skirmishes winnable.")],runes:{...VOLIBEAR_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Trinity Force","Sheen W burst wins the 1v1 before their combo cycles."),I("Sundered Sky","Heal-burst mid-skirmish."),I("Dead Man's Plate","Counter-gank arrival speed.")],behind:[I("Sterak's Gage","Survive their engage burst."),I("Plated Steelcaps","Auto-heavy Divers."),I("Spirit Visage","Sustain to farm back into the game.")],runes:{...VOLIBEAR_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sundered Sky","Heal-burst denies their kill threshold."),I("Sterak's Gage","Shield eats the one-shot — then they're in melee with a bear."),I("Trinity Force","Sheen burst punishes their commit.")],behind:[I("Sterak's Gage","Non-negotiable — survive the burst window."),I("Maw of Malmortius","AP assassins — lifeline shield."),I("Spirit Visage","Amp all your healing behind.")],runes:{...VOLIBEAR_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Wit's End","On-hit MR race with Lethal Tempo stacking."),I("Sundered Sky","Heal-burst wins extended duels."),I("Thornmail","GW their lifesteal.")],behind:[I("Randuin's Omen","Crit/AS reduction on Yi/Trynd."),I("Sterak's Gage","Shield their all-in spike."),I("Thornmail","GW keeps duels honest.")],runes:{...VOLIBEAR_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Wit's End","MR + on-hit while you stick with Q."),I("Sundered Sky","Heal back their rotation."),I("Trinity Force","Kill them in the gap between combos.")],behind:[I("Maw of Malmortius","Lifeline vs their pick attempt."),I("Mercury's Treads","Shorter CC before your stun."),I("Spirit Visage","MR + healing.")],runes:{...VOLIBEAR_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Wit's End","MR + on-hit vs their DPS."),I("Spirit Visage","Healing races their drain."),I("Sundered Sky","Burst-heal through their burn.")],behind:[I("Force of Nature","Stacking MR + move speed."),I("Mercury's Treads","Tenacity."),I("Spirit Visage","Sustain.")],runes:{...VOLIBEAR_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Dead Man's Plate","Gap-close speed on ganks."),I("Wit's End","MR chip while approaching."),I("Trinity Force","One rotation kills once you arrive.")],behind:[I("Force of Nature","MR + move speed is the whole matchup."),I("Mercury's Treads","Their layered slows."),I("Sterak's Gage","Survive the poke on arrival.")],runes:{...VOLIBEAR_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Dead Man's Plate","Reach them before the kite starts."),I("Blade of The Ruined King","% HP + slow to stick."),I("Sundered Sky","Heal-burst through their DPS.")],behind:[I("Plated Steelcaps","Auto reduction."),I("Randuin's Omen","Crit + active slow."),I("Sterak's Gage","Survive to land Q stun.")],runes:{...VOLIBEAR_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Thornmail","GW cuts their heal/shield economy."),I("Dead Man's Plate","Speed through peel to the carry."),I("Trinity Force","Burst through shields with Sheen.")],behind:[I("Thornmail","GW equaliser."),I("Wit's End","MR vs their poke."),I("Spirit Visage","Your sustain vs theirs.")],runes:{...VOLIBEAR_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Shorter picks — you gank through their vision line."),I("Dead Man's Plate","Speed past hook zones."),I("Sundered Sky","Heal through pick damage.")],behind:[I("Mercury's Treads","Mandatory."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Force of Nature","AP catchers.")],runes:{...VOLIBEAR_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Trinity Force","Sheen burst punishes tanks pre-items."),I("Blade of The Ruined King","% HP for the tank war."),I("Sundered Sky","Sustain in extended objective fights.")],behind:[I("Mercury's Treads","Tenacity vs engage chains."),I("Wit's End","MR + DPS to still matter."),I("Thornmail","GW in objective fights.")],runes:{...VOLIBEAR_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Blade of The Ruined King","% HP melts their shield-wall."),I("Trinity Force","Sheen burst through Braum/Shen mitigation."),I("Dead Man's Plate","Around the body-block to the carry.")],behind:[I("Wit's End","MR + on-hit to fight through peel."),I("Sterak's Gage","Survive their counter-peel."),I("Thornmail","GW.")],runes:{...VOLIBEAR_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Wit's End","MR on-hit vs Teemo/Kennen junglers-adjacent."),I("Sundered Sky","Heal through chip."),I("Dead Man's Plate","Run down kiters.")],behind:[I("Wit's End","MR + sustain DPS."),I("Mercury's Treads","Teemo blind — Tenacity shortens."),I("Sterak's Gage","Survive burst setups.")],runes:{...VOLIBEAR_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
