import { I } from "../runeHelpers.js";

const EKKO_MID_DEFAULT_RUNES = {
  keystone:       "Hail of Blades",
  primary:        "Domination",
  primaryRunes:   ["Sudden Impact","Grisly Mementos","Relentless Hunter"],
  secondary:      "Sorcery",
  secondaryRunes: ["Absolute Focus","Scorch"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Mid Ekko's current page is Hail of Blades — three fast autos weave into the Q-E combo to proc his passive almost instantly, frontloading trades harder than Electrocute in the current patch. Sudden Impact fires on every E blink, Grisly Mementos stacks haste off his roam picks, Relentless Hunter speeds the roams themselves, and Absolute Focus + Scorch add lane-phase punch while he's healthy.",
};

const EKKO_JGL_DEFAULT_RUNES = {
  keystone:       "Dark Harvest",
  primary:        "Domination",
  primaryRunes:   ["Sudden Impact","Grisly Mementos","Treasure Hunter"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Cosmic Insight"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Jungle Ekko farms Dark Harvest souls off every gank instead of needing lane trades — the stacking execute pairs perfectly with his passive burst on low-HP targets. Sudden Impact procs on E in every gank, Treasure Hunter accelerates the two-item spike his clear feeds, and the Inspiration pairing (free boots + Cosmic Insight) is the standard economy package that lets him hit Dusk and Dawn faster.",
};

// ══════════════════════════════════════════════════════════════════════════
//  EKKO — Time-Rewind Burst Diver  (A tier Mid + A tier Jungle 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"ekko", display:"Ekko", dd:"Ekko",
  color:"#0f4a4a", glow:"#3fd4b0",
  lanes:["Mid","Jungle"],
  roles:{
    Mid:{
      bans:["Malzahar","Lissandra","Vladimir"], replacements:["Katarina","Akali","Fizz"],
      role:"Time-Rewind Burst Mage",
      corePath:"Dusk and Dawn  ›  Sorcerer's Shoes  ›  Shadowflame  ›  Rabadon's Deathcap",
      coreNote:"Ekko trades in short passive-proc windows and always keeps R as the undo button. Dusk and Dawn is his premier first buy this patch — the move speed and damage proc match his dash-in dash-out pattern exactly. Shadowflame converts chunked targets into kills, Rabadon's Deathcap scales both the burst and the R heal, and Void Staff closes against MR stacking. Fight, rewind, fight again.",
      sideItems:["Void Staff","Zhonya's Hourglass","Banshee's Veil","Lich Bane","Hextech Rocketbelt","Cosmic Drive"],
      data:{
        JUGGERNAUT:{ahead:[I("Dusk and Dawn","Speed to weave passive procs and leave untouched."),I("Shadowflame","Pen punishes their low MR."),I("Rabadon's Deathcap","Chunk harder each trade window.")],behind:[I("Zhonya's Hourglass","Stasis covers the gap-close you misjudge."),I("Void Staff","Keep proc damage real through MR."),I("Hextech Rocketbelt","Extra dash to stay out of reach.")],runes:{...EKKO_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Shadowflame","Burst them mid-dive before their combo lands."),I("Dusk and Dawn","Outpace their engage speed."),I("Zhonya's Hourglass","Stasis + R is a double undo.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis buys time for R to come back."),I("Banshee's Veil","Blocks the engage opener."),I("Cosmic Drive","Speed to disengage.")],runes:{...EKKO_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Win the burst race — your R undoes theirs."),I("Rabadon's Deathcap","Bigger combo kills first."),I("Zhonya's Hourglass","Stasis forces their combo onto nothing.")],behind:[I("Zhonya's Hourglass","Rush — stasis plus R blanks two kill attempts."),I("Banshee's Veil","Blocks the opener."),I("Void Staff","Burst stays lethal.")],runes:{...EKKO_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Dusk and Dawn","Speed controls the trade windows — never give the long fight."),I("Shadowflame","Burst them inside one passive window."),I("Rabadon's Deathcap","End it before their DPS ramps.")],behind:[I("Zhonya's Hourglass","Deny the all-in they want."),I("Banshee's Veil","Blocks their gap-close."),I("Void Staff","Pen through their MR buys.")],runes:{...EKKO_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Shadowflame","Your combo plus R-undo beats their rotation."),I("Rabadon's Deathcap","Bigger burst wins the race."),I("Dusk and Dawn","Speed dodges half their skillshots.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation, R back to safety."),I("Void Staff","Keep your own burst honest.")],runes:{...EKKO_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Dusk and Dawn","Speed beats their sustained-damage spacing."),I("Shadowflame","Burst before their drain ramps."),I("Morellonomicon","Cut the heal-back loop.")],behind:[I("Banshee's Veil","Blocks their opening CC."),I("Zhonya's Hourglass","Survive the drain window."),I("Void Staff","Pen through their MR curve.")],runes:{...EKKO_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Dusk and Dawn","Speed closes the gap their kit depends on."),I("Shadowflame","Delete them on arrival."),I("Rabadon's Deathcap","Kill from full HP once close.")],behind:[I("Banshee's Veil","Eats one poke spell on approach."),I("Zhonya's Hourglass","Covers the committed engage."),I("Cosmic Drive","More speed to weave in.")],runes:{...EKKO_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","Squishy carries die inside one passive proc."),I("Rabadon's Deathcap","Guarantee the one-shot."),I("Dusk and Dawn","Speed through their kiting.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the peel CC."),I("Void Staff","Burst stays lethal.")],runes:{...EKKO_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Pen through the shield sponge."),I("Rabadon's Deathcap","Burst bigger than their shield budget."),I("Dusk and Dawn","Speed past peel to the carry.")],behind:[I("Void Staff","Keep burst real through shields."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Banshee's Veil","Blocks the setup CC.")],runes:{...EKKO_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Dusk and Dawn","Speed makes their hooks unlandable."),I("Shadowflame","Burst the catcher on the whiff."),I("Rabadon's Deathcap","Punish damage on every miss.")],behind:[I("Banshee's Veil","Spell shield eats the hook."),I("Zhonya's Hourglass","Stasis if caught, R when it ends."),I("Cosmic Drive","Speed to sidestep.")],runes:{...EKKO_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Shred the engage tank's MR."),I("Dusk and Dawn","Speed out of their engage radius."),I("Rabadon's Deathcap","Burst the backline behind them.")],behind:[I("Void Staff","Required to matter from behind."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation.")],runes:{...EKKO_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Shadowflame","Pen through peel to the carry."),I("Rabadon's Deathcap","Burst bigger than their peel budget."),I("Dusk and Dawn","Speed around the Warden's zone.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Zhonya's Hourglass","Survive being focused."),I("Banshee's Veil","Blocks their lockdown.")],runes:{...EKKO_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Dusk and Dawn","Speed answers most gimmick kits."),I("Shadowflame","Burst them in one window."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","R + stasis covers the unreadable."),I("Void Staff","Damage stays honest.")],runes:{...EKKO_MID_DEFAULT_RUNES}},
      },
    },
    Jungle:{
      bans:["Kindred","Lee Sin","Kayn"], replacements:["Kayn","Diana","Karthus"],
      role:"AP Burst Jungler / Objective Flanker",
      corePath:"Dusk and Dawn  ›  Sorcerer's Shoes  ›  Shadowflame  ›  Rabadon's Deathcap",
      coreNote:"Jungle Ekko clears fast with passive procs on camps and converts Dark Harvest stacks into gank kill-pressure that mid Ekko has to trade for. Dusk and Dawn remains the premier spike; Shadowflame turns chunked gank targets into kills; Rabadon's Deathcap and Zhonya's Hourglass close out the standard AP core. His R makes him the best tower-dive jungler in the game — dive, kill, rewind out.",
      sideItems:["Zhonya's Hourglass","Void Staff","Banshee's Veil","Lich Bane","Mejai's Soulstealer","Cosmic Drive"],
      data:{
        JUGGERNAUT:{ahead:[I("Dusk and Dawn","Kite their jungle 1v1s with speed procs."),I("Shadowflame","Pen punishes their low MR."),I("Rabadon's Deathcap","Chunk them out of every skirmish.")],behind:[I("Zhonya's Hourglass","Stasis escapes the invade brawl."),I("Void Staff","Keep damage real through MR."),I("Banshee's Veil","Blocks the pull that starts their all-in.")],runes:{...EKKO_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Shadowflame","Burst them mid-engage before the combo lands."),I("Dusk and Dawn","Out-tempo their dives with your own speed."),I("Zhonya's Hourglass","Stasis + R doubles your dive safety.")],behind:[I("Zhonya's Hourglass","Mandatory — you're their prime skirmish target."),I("Banshee's Veil","Blocks the engage opener."),I("Cosmic Drive","Speed to disengage.")],runes:{...EKKO_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Win the burst race in river fights."),I("Rabadon's Deathcap","Bigger combo kills first."),I("Zhonya's Hourglass","Stasis forces their combo onto nothing.")],behind:[I("Zhonya's Hourglass","Rush — stasis + R blanks two kill attempts."),I("Banshee's Veil","Blocks the opener."),I("Void Staff","Burst stays lethal.")],runes:{...EKKO_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Dusk and Dawn","Never give them the extended jungle duel."),I("Shadowflame","Burst inside one passive window."),I("Rabadon's Deathcap","End skirmishes before their DPS ramps.")],behind:[I("Zhonya's Hourglass","Deny the 1v1 they invade for."),I("Banshee's Veil","Blocks their gap-close."),I("Void Staff","Pen through their MR buys.")],runes:{...EKKO_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Shadowflame","Your combo plus R-undo beats their rotation."),I("Rabadon's Deathcap","Bigger burst wins the race."),I("Dusk and Dawn","Speed dodges their setup skillshots.")],behind:[I("Banshee's Veil","Blocks the combo opener on ganks."),I("Zhonya's Hourglass","Survive the rotation, R out."),I("Void Staff","Keep your burst honest.")],runes:{...EKKO_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Dusk and Dawn","Speed beats their zone-control spacing."),I("Shadowflame","Burst before their drain ramps."),I("Morellonomicon","Cut the heal-back loop.")],behind:[I("Banshee's Veil","Blocks their opening CC."),I("Zhonya's Hourglass","Survive the drain window."),I("Void Staff","Pen through their MR curve.")],runes:{...EKKO_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Dusk and Dawn","Flank speed closes their range advantage."),I("Shadowflame","Delete them on arrival."),I("Rabadon's Deathcap","Kill from full HP once close.")],behind:[I("Banshee's Veil","Eats one poke spell on the flank."),I("Zhonya's Hourglass","Covers the committed dive."),I("Cosmic Drive","More speed on the approach.")],runes:{...EKKO_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","Squishy carries die inside one gank window."),I("Rabadon's Deathcap","Guarantee the one-shot."),I("Dusk and Dawn","Speed through their kiting.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the peel CC."),I("Void Staff","Burst stays lethal.")],runes:{...EKKO_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Pen through the shield sponge on ganks."),I("Rabadon's Deathcap","Burst bigger than their shield budget."),I("Dusk and Dawn","Speed past peel to the carry.")],behind:[I("Void Staff","Keep burst real through shields."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Banshee's Veil","Blocks the setup CC.")],runes:{...EKKO_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Dusk and Dawn","Speed makes their picks unlandable."),I("Shadowflame","Burst the catcher on the whiff."),I("Rabadon's Deathcap","Punish damage on every miss.")],behind:[I("Banshee's Veil","Spell shield eats the hook in river."),I("Zhonya's Hourglass","Stasis if caught, R when it ends."),I("Cosmic Drive","Speed to sidestep.")],runes:{...EKKO_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Shred the engage tank contesting objectives."),I("Dusk and Dawn","Speed out of their engage radius."),I("Rabadon's Deathcap","Burst the backline behind them.")],behind:[I("Void Staff","Required to matter from behind."),I("Zhonya's Hourglass","Survive the engage chain at objectives."),I("Banshee's Veil","Blocks the initiation.")],runes:{...EKKO_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Shadowflame","Pen through peel on your dives."),I("Rabadon's Deathcap","Burst bigger than their peel budget."),I("Dusk and Dawn","Speed around the Warden's zone.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Zhonya's Hourglass","Survive being focused."),I("Banshee's Veil","Blocks their lockdown.")],runes:{...EKKO_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Dusk and Dawn","Speed answers most gimmick kits."),I("Shadowflame","Burst them in one window."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","R + stasis covers the unreadable."),I("Void Staff","Damage stays honest.")],runes:{...EKKO_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
