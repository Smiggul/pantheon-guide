import { I } from "../runeHelpers.js";

const VEX_MID_DEFAULT_RUNES = {
  keystone:       "Electrocute",
  primary:        "Domination",
  primaryRunes:   ["Taste of Blood","Grisly Mementos","Ultimate Hunter"],
  secondary:      "Sorcery",
  secondaryRunes: ["Manaflow Band","Transcendence"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Electrocute procs in one Q-E-auto Gloom rotation, and Vex's fear passive guarantees the follow-up lands on a target running the wrong way. Taste of Blood sustains her through the poke lanes she hates, Grisly Mementos stacks haste off her pick-heavy pattern, Ultimate Hunter brings Shadow Surge around for the reset-chain teamfights that define her, and Manaflow Band + Transcendence fund the gloom-spam economy. Every enemy dash feeds her passive — the more mobile their comp, the sadder they end up.",
};

// ══════════════════════════════════════════════════════════════════════════
//  VEX — Gloomist: Anti-Dash Burst Mage  (A tier Mid 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"vex", display:"Vex", dd:"Vex",
  color:"#3a3a5a", glow:"#9080d0",
  lanes:["Mid"],
  altBuilds:{
    Mid:[{
      label:"OP 26.17 ALT", tag:"alt",
      corePath:"Luden's Echo  ›  Sorcerer's Shoes  ›  Stormsurge  ›  Rabadon's Deathcap",
      coreNote:"Skill-Capped burst line: Luden's Echo rush → Stormsurge second → Shadowflame or Rabadon's third, Electrocute. Stormsurge's Stormraider proc rewards Vex's fear-into-burst pattern and the extra magic pen helps delete squishies on her R reset chain — a more all-in burst variant of her standard Shadowflame build. Buffed indirectly by the Spellslinger's Shoes pen buff + Chain-Laced Crushers nerf. Blind-pick her; ban long-range mids (Xerath) that out-poke her.",
      runes:{...VEX_MID_DEFAULT_RUNES},
      sideItems:["Shadowflame","Zhonya's Hourglass","Void Staff","Cosmic Drive","Rabadon's Deathcap"],
    }],
  },
  roles:{
    Mid:{
      bans:["Taliyah","Hwei","Vladimir"], replacements:["Lux","Syndra","Lissandra"],
      role:"Anti-Dash Fear Mage",
      corePath:"Luden's Echo  ›  Sorcerer's Shoes  ›  Shadowflame  ›  Zhonya's Hourglass",
      coreNote:"Vex is the anti-mobility answer: every enemy dash procs her Gloom fear, turning dive comps into feeding comps. Luden's Echo adds burst to the Electrocute rotation, Shadowflame converts feared targets into executes, and Zhonya's Hourglass covers the R dash-in her reset pattern demands. Rabadon's Deathcap scales the one-rotation kill into the whole enemy team — R resets on takedown mean one pick becomes a pentakill lottery ticket. Draft her into Yasuo, Zed, Lee Sin and watch them despair.",
      sideItems:["Rabadon's Deathcap","Void Staff","Banshee's Veil","Morellonomicon","Cosmic Drive","Mejai's Soulstealer"],
      data:{
        JUGGERNAUT:{ahead:[I("Luden's Echo","Poke them off every wave — no dash means no answer."),I("Shadowflame","Pen punishes their low MR."),I("Rabadon's Deathcap","Scale the poke into real chunks.")],behind:[I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Void Staff","Pen keeps the gloom real."),I("Cosmic Drive","Speed to hold the spacing.")],runes:{...VEX_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Shadowflame","Their dash feeds your fear — burst the interrupted dive."),I("Luden's Echo","Full rotation beats their entry damage."),I("Zhonya's Hourglass","Stasis wastes what the fear didn't.")],behind:[I("Zhonya's Hourglass","Stasis covers the timing the fear misses."),I("Banshee's Veil","Blocks the engage opener."),I("Cosmic Drive","Speed to disengage.")],runes:{...VEX_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Every jump they make procs fear — punish it with executes."),I("Zhonya's Hourglass","Stasis blanks whatever connects."),I("Rabadon's Deathcap","End it before their second window.")],behind:[I("Zhonya's Hourglass","Rush — stasis plus fear is a double answer."),I("Banshee's Veil","Blocks the opener."),I("Void Staff","Keep your own burst honest.")],runes:{...VEX_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Luden's Echo","Chunk them at range — their dashes only feed you."),I("Shadowflame","Execute range on their engage attempt."),I("Cosmic Drive","Speed keeps the spacing yours.")],behind:[I("Zhonya's Hourglass","Deny the all-in window."),I("Banshee's Veil","Blocks their gap-close."),I("Cosmic Drive","Kite the duel you can't win straight.")],runes:{...VEX_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Luden's Echo","Your fear setup lands the rotation first."),I("Shadowflame","Pen wins the burst mirror."),I("Zhonya's Hourglass","Stasis their combo, answer with yours.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the burst honest.")],runes:{...VEX_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the sustained AP war."),I("Luden's Echo","Burst them before the drain ramps."),I("Morellonomicon","Cut the heal-back loop.")],behind:[I("Morellonomicon","Anti-heal first against drain mages."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...VEX_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Cosmic Drive","Speed closes their poke range — R finishes the approach."),I("Shadowflame","Delete them once inside."),I("Luden's Echo","Out-burst the poke war.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Cosmic Drive","Dodge speed between volleys.")],runes:{...VEX_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","One R rotation deletes their carry."),I("Rabadon's Deathcap","Guarantee the reset chain."),I("Luden's Echo","Poke them off the wave pre-fight.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the peel CC."),I("Void Staff","Burst stays lethal.")],runes:{...VEX_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Pen through the shield sponge."),I("Rabadon's Deathcap","Burst bigger than their shield budget."),I("Luden's Echo","Rotation volume outlasts shield cooldowns.")],behind:[I("Void Staff","Keep burst real through shields."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Banshee's Veil","Blocks the setup CC.")],runes:{...VEX_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Luden's Echo","Fear their engage, poke the whiff."),I("Shadowflame","Burst the catcher who missed."),I("Cosmic Drive","Speed makes their picks whiff.")],behind:[I("Banshee's Veil","Spell shield eats the hook."),I("Zhonya's Hourglass","Stasis if caught."),I("Cosmic Drive","Speed to sidestep.")],runes:{...VEX_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Shred the engage tank — their dash-in feeds fear anyway."),I("Rabadon's Deathcap","R the backline over their heads."),I("Luden's Echo","Poke the engage off before it starts.")],behind:[I("Void Staff","Required to matter from behind."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation.")],runes:{...VEX_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Shadowflame","Burst over the peel wall to the carry."),I("Rabadon's Deathcap","Out-burst their peel budget."),I("Void Staff","Cut through the resist stack.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Zhonya's Hourglass","Survive being focused."),I("Morellonomicon","Cut their sustain support.")],runes:{...VEX_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Luden's Echo","Fear answers most mobility gimmicks by design."),I("Shadowflame","Burst them in one window."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...VEX_MID_DEFAULT_RUNES}},
      },
    },
  },
};
