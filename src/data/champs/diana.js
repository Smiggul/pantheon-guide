import { I } from "../runeHelpers.js";

const DIANA_JGL_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Coup de Grace"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Cosmic Insight"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Jungle Diana plays extended AP-bruiser fights where her passive cleave and Q-R resets stack Conqueror fully — she's not a one-shot assassin in this role, she's a dive-and-outlast brawler. Triumph refunds HP through multi-kill teamfights, Legend: Alacrity speeds both her clear and her passive procs, Coup de Grace finishes the divers she drags low, and the Inspiration economy package accelerates her two-item spike.",
};

const DIANA_MID_DEFAULT_RUNES = {
  keystone:       "Electrocute",
  primary:        "Domination",
  primaryRunes:   ["Sudden Impact","Grisly Mementos","Treasure Hunter"],
  secondary:      "Resolve",
  secondaryRunes: ["Shield Bash","Bone Plating"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Mid Diana plays a burstier pattern than Jungle — Q poke into E-dash all-in, where Electrocute fires on the Q-E-auto combo. Sudden Impact procs on every Lunar Rush, Grisly Mementos and Treasure Hunter fund the fast Stormsurge spike, and the Resolve pairing is the current tech: Shield Bash adds damage every time her W shield triggers, and Bone Plating survives the assassin matchups mid throws at her.",
};

// ══════════════════════════════════════════════════════════════════════════
//  DIANA — Lunar Dive Bruiser (Jungle) / Moonburst Assassin (Mid)  26.14
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"diana", display:"Diana", dd:"Diana",
  color:"#3a3a50", glow:"#c0c8e8",
  lanes:["Jungle","Mid"],
  roles:{
    Jungle:{
      bans:["Kindred","Master Yi","Kayn"], replacements:["Ekko","Kayn","Karthus"],
      role:"Lunar Dive Bruiser / Teamfight Wombo",
      corePath:"Dusk and Dawn  ›  Sorcerer's Shoes  ›  Riftmaker  ›  Zhonya's Hourglass",
      coreNote:"Jungle Diana wants five-person Moonfall ults, and her build backs that plan: Dusk and Dawn is the standard AP tempo spike, Riftmaker's omnivamp and true-damage ramp fit the extended brawls her R starts, and Zhonya's Hourglass lets her dive in first and survive the retaliation while her team follows up. Rabadon's Deathcap closes the build into real one-rotation kill threat.",
      sideItems:["Rabadon's Deathcap","Void Staff","Banshee's Veil","Nashor's Tooth","Cosmic Drive","Spirit Visage"],
      data:{
        JUGGERNAUT:{ahead:[I("Riftmaker","Out-sustain them in the long brawl."),I("Dusk and Dawn","Speed to kite their walk-up between passive procs."),I("Rabadon's Deathcap","Scale the cleave past their durability.")],behind:[I("Zhonya's Hourglass","Stasis breaks their all-in rhythm."),I("Void Staff","Pen keeps damage real through MR."),I("Spirit Visage","Sustain war insurance.")],runes:{...DIANA_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Riftmaker","Out-brawl the dive with omnivamp."),I("Zhonya's Hourglass","Stasis flips their engage."),I("Dusk and Dawn","Speed out-tempos their dive paths.")],behind:[I("Zhonya's Hourglass","Mandatory — you're both diving; yours needs insurance."),I("Banshee's Veil","Blocks the engage opener."),I("Spirit Visage","Heal through the skirmish chip.")],runes:{...DIANA_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Stasis blanks their combo; your R pulls them back in."),I("Riftmaker","Your sustain beats their burst-or-nothing plan."),I("Rabadon's Deathcap","Out-burst them in your window.")],behind:[I("Zhonya's Hourglass","Rush — stasis answers the one-shot."),I("Banshee's Veil","Blocks the opener."),I("Void Staff","Keep the burst honest.")],runes:{...DIANA_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Riftmaker","The extended duel is exactly what Conqueror Diana wins."),I("Dusk and Dawn","Speed controls the reset windows."),I("Rabadon's Deathcap","Burst edge inside the brawl.")],behind:[I("Zhonya's Hourglass","Deny their all-in window."),I("Spirit Visage","Sustain insurance in forced 1v1s."),I("Void Staff","Damage through their MR items.")],runes:{...DIANA_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Dusk and Dawn","Speed dodges their setup; R pulls them out of position."),I("Riftmaker","Heal back their poke between windows."),I("Rabadon's Deathcap","Out-burst them once on top.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Spirit Visage","Blunt the magic chip.")],runes:{...DIANA_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the sustained AP war."),I("Riftmaker","Your omnivamp out-ramps their drain."),I("Dusk and Dawn","Speed controls the spacing.")],behind:[I("Morellonomicon","Cut their healing loop first."),I("Zhonya's Hourglass","Survive their ramped window."),I("Spirit Visage","Double down on sustain.")],runes:{...DIANA_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Dusk and Dawn","Speed + E-dash erases their range advantage."),I("Rabadon's Deathcap","One rotation deletes them on arrival."),I("Riftmaker","Heal off the poke eaten on approach.")],behind:[I("Banshee's Veil","Eats one long-range spell on the flank."),I("Zhonya's Hourglass","Covers the committed dive."),I("Cosmic Drive","More approach speed.")],runes:{...DIANA_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Rabadon's Deathcap","R + passive deletes the carry in one window."),I("Dusk and Dawn","Speed through their kiting."),I("Riftmaker","Sustain through the DPS you eat diving.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire mid-dive."),I("Banshee's Veil","Blocks the peel CC."),I("Void Staff","Burst stays lethal.")],runes:{...DIANA_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Rabadon's Deathcap","Burst bigger than their shield budget."),I("Void Staff","Pen cuts the shield sponge math."),I("Dusk and Dawn","Speed past peel to the carry.")],behind:[I("Void Staff","Keep burst real through shields."),I("Zhonya's Hourglass","Survive the counter-focus."),I("Morellonomicon","Cut their sustain package.")],runes:{...DIANA_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Dusk and Dawn","Speed makes their picks whiff."),I("Riftmaker","Heal off chip; punish every miss with R."),I("Rabadon's Deathcap","Full rotation on the whiffing catcher.")],behind:[I("Banshee's Veil","Spell shield eats the hook."),I("Zhonya's Hourglass","Stasis if caught."),I("Spirit Visage","Survive the follow-up.")],runes:{...DIANA_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Shred the engage tank at objectives."),I("Riftmaker","True-damage ramp ignores their resists."),I("Zhonya's Hourglass","Dive in, stasis their counter-engage.")],behind:[I("Void Staff","Required to hurt them from behind."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation.")],runes:{...DIANA_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","Pen through peel resists to the backline."),I("Rabadon's Deathcap","Burst bigger than their peel budget."),I("Riftmaker","Ramp through the extended peel war.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Zhonya's Hourglass","Survive being the dive target."),I("Morellonomicon","Cut their sustain support.")],runes:{...DIANA_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Riftmaker","Sustain brawling answers most gimmicks."),I("Dusk and Dawn","Speed spacing beats trick kits."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...DIANA_JGL_DEFAULT_RUNES}},
      },
    },
    Mid:{
      bans:["Talon","Zed","Fizz"], replacements:["Katarina","Akali","Sylas"],
      role:"Moonburst Assassin / Lane Diver",
      corePath:"Stormsurge  ›  Sorcerer's Shoes  ›  Shadowflame  ›  Zhonya's Hourglass",
      coreNote:"Mid Diana plays assassin, not bruiser — Q poke until the E window opens, then the full Electrocute burst. Stormsurge's magic-boom passive rides along with exactly that pattern, Shadowflame executes what the combo chunks, and Zhonya's Hourglass covers the post-dive cooldown gap. Rabadon's Deathcap converts the mid-game pick pattern into one-rotation kills on anything squishy.",
      sideItems:["Rabadon's Deathcap","Void Staff","Banshee's Veil","Riftmaker","Mejai's Soulstealer","Cosmic Drive"],
      data:{
        JUGGERNAUT:{ahead:[I("Stormsurge","Poke pattern beats their all-or-nothing walk-up."),I("Shadowflame","Pen punishes their low MR."),I("Rabadon's Deathcap","Chunk half their HP per combo.")],behind:[I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Void Staff","Keep combo damage real through MR."),I("Banshee's Veil","Blocks the pull/gap-close.")],runes:{...DIANA_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Shadowflame","Burst them mid-dive before their combo lands."),I("Stormsurge","Proc damage wins the trade race."),I("Zhonya's Hourglass","Stasis wastes their engage.")],behind:[I("Zhonya's Hourglass","Mandatory dive insurance."),I("Banshee's Veil","Blocks the engage opener."),I("Riftmaker","Shift to sustain if burst can't finish.")],runes:{...DIANA_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Win the burst race — Shield Bash gives you the edge."),I("Rabadon's Deathcap","Bigger combo kills first."),I("Zhonya's Hourglass","Stasis forces their combo onto nothing.")],behind:[I("Zhonya's Hourglass","Rush — stasis answers the one-shot."),I("Banshee's Veil","Blocks the opener."),I("Void Staff","Burst stays lethal.")],runes:{...DIANA_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Stormsurge","Burst them inside one window — never duel extended."),I("Shadowflame","Execute range ends the fight early."),I("Rabadon's Deathcap","One-shot math beats duel math.")],behind:[I("Zhonya's Hourglass","Deny the extended fight they want."),I("Banshee's Veil","Blocks their gap-close."),I("Riftmaker","Sustain pivot if forced to brawl.")],runes:{...DIANA_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Shadowflame","Your E-dash combo lands before their rotation."),I("Rabadon's Deathcap","Bigger burst wins the mirror."),I("Zhonya's Hourglass","Stasis their combo, then punish.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep your own burst honest.")],runes:{...DIANA_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Stormsurge","Poke-burst beats drain if it lands first."),I("Shadowflame","Kill inside one window before they ramp."),I("Morellonomicon","Cut the heal-back loop.")],behind:[I("Banshee's Veil","Blocks their opening CC."),I("Zhonya's Hourglass","Survive the drain window."),I("Void Staff","Pen through their MR curve.")],runes:{...DIANA_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Stormsurge","E-dash erases their range in one cast."),I("Shadowflame","Delete them on arrival."),I("Rabadon's Deathcap","Kill from full HP once close.")],behind:[I("Banshee's Veil","Eats one poke spell on approach."),I("Zhonya's Hourglass","Covers the committed all-in."),I("Cosmic Drive","Speed to close between their casts.")],runes:{...DIANA_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","Squishy carries die inside one E-combo."),I("Rabadon's Deathcap","Guarantee the one-shot."),I("Stormsurge","Proc rides the burst for overkill.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the peel CC."),I("Void Staff","Burst stays lethal.")],runes:{...DIANA_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Pen through the shield sponge."),I("Rabadon's Deathcap","Burst bigger than their shield budget."),I("Stormsurge","Proc forces shields early, combo kills after.")],behind:[I("Void Staff","Keep burst real through shields."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Banshee's Veil","Blocks the setup CC.")],runes:{...DIANA_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Stormsurge","Poke them down — they can't hook what outranges them."),I("Shadowflame","Burst the catcher on the whiff."),I("Rabadon's Deathcap","Punish damage on every miss.")],behind:[I("Banshee's Veil","Spell shield eats the hook."),I("Zhonya's Hourglass","Stasis if caught."),I("Cosmic Drive","Speed to sidestep.")],runes:{...DIANA_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Shred the engage tank's MR."),I("Rabadon's Deathcap","Burst the backline behind them."),I("Stormsurge","Proc chunks their squishies through the frontline.")],behind:[I("Void Staff","Required to matter from behind."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation.")],runes:{...DIANA_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Shadowflame","Pen through peel to the carry."),I("Rabadon's Deathcap","Burst bigger than their peel budget."),I("Void Staff","Cut through the resist stack.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Zhonya's Hourglass","Survive being focused."),I("Banshee's Veil","Blocks their lockdown.")],runes:{...DIANA_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Stormsurge","Poke-burst answers most gimmick kits."),I("Shadowflame","Burst them in one window."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...DIANA_MID_DEFAULT_RUNES}},
      },
    },
  },
};
