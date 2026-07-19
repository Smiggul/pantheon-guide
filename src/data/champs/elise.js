import { I } from "../runeHelpers.js";

const ELISE_SUP_DEFAULT_RUNES = {
  keystone:       "Electrocute",
  primary:        "Domination",
  primaryRunes:   ["Sudden Impact","Deep Ward","Relentless Hunter"],
  secondary:      "Precision",
  secondaryRunes: ["Triumph","Coup de Grace"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Support Elise keeps the Electrocute burst identity — Cocoon into spider-form combo procs it on every landed pick. Sudden Impact fires off every rappel, Deep Ward turns her lane wards into sturdier vision, Relentless Hunter speeds the level-6 roam pattern that defines the role, and the Precision splash (Triumph, Coup de Grace) converts her all-in kill pressure into finished kills instead of close calls. She's a kill-lane support: land Cocoon and someone dies.",
};

const ELISE_JGL_DEFAULT_RUNES = {
  keystone:       "Dark Harvest",
  primary:        "Domination",
  primaryRunes:   ["Cheap Shot","Grisly Mementos","Relentless Hunter"],
  secondary:      "Precision",
  secondaryRunes: ["Triumph","Coup de Grace"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Dark Harvest snowballs off Elise's early-invade skirmish pattern, stacking permanent execute damage that Spider Q then finishes with. Cheap Shot adds true damage to anything Cocoon has stunned; Grisly Mementos funds her item spike; Relentless Hunter adds roam speed between ganks. Triumph and Coup de Grace round out the kill-securing identity a Dark Harvest stacker needs.",
};

// ══════════════════════════════════════════════════════════════════════════
//  ELISE — Assassin / Human-Spider Ambush
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"elise", display:"Elise", dd:"Elise",
  color:"#4a1a1a", glow:"#c02020",
  lanes:["Jungle","Support"],
  roles:{
    Jungle:{
      bans:["Nocturne","Warwick","Kayn"], replacements:["Wukong","Sett","Shyvana"],
      role:"Assassin / Human-Spider Ambush",
      corePath:"Stormsurge  ›  Sorcerer's Shoes  ›  Shadowflame  ›  Zhonya's Hourglass",
      coreNote:"Elise plays for a spider-form burst pattern — Cocoon stuns from range in human form, then Spider Form's Skittering Frenzy and Venomous Bite finish the kill up close, with Rappel repositioning for the next gank. Stormsurge's proc rewards the poke-into-burst combo; Shadowflame executes low-HP targets Cocoon has already set up; Zhonya's Hourglass buys time when a counter-invade catches her mid-combo.",
      sideItems:["Rabadon's Deathcap","Void Staff","Banshee's Veil","Morellonomicon","Liandry's Torment","Ionian Boots of Lucidity"],
      data:{
        JUGGERNAUT:{ahead:[I("Shadowflame","Burst low-MR Juggernauts from range."),I("Stormsurge","Poke wears them down before the fight starts."),I("Rabadon's Deathcap","Scaling burst ends the trade outright.")],behind:[I("Zhonya's Hourglass","Stall their all-in window entirely."),I("Banshee's Veil","Block their engage tool."),I("Void Staff","Pen remains effective regardless of gold lead.")],runes:{...ELISE_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Stormsurge","Proc damage on divers diving into melee range."),I("Shadowflame","Burst the diver before they close the gap fully."),I("Zhonya's Hourglass","Insurance even while ahead (Rappel also repositions).")],behind:[I("Zhonya's Hourglass","Stasis cancels their dive window."),I("Banshee's Veil","Block their engage ability before they can gap close."),I("Ionian Boots of Lucidity","Haste for more Rappel resets.")],runes:{...ELISE_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Out-burst them — Cocoon buys the window."),I("Stormsurge","Proc damage after the first hit."),I("Zhonya's Hourglass","Insurance even with a lead.")],behind:[I("Zhonya's Hourglass","Stasis neutralises the full combo (Rappel also escapes)."),I("Banshee's Veil","Block their engage opener."),I("Ionian Boots of Lucidity","Haste to disengage.")],runes:{...ELISE_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Stormsurge","Proc damage during the extended duel window."),I("Shadowflame","Flat pen burst wins the short window before their sustain kicks in."),I("Liandry's Torment","Burn wins the extended fight.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Banshee's Veil","Block their engage opener."),I("Ionian Boots of Lucidity","Haste to disengage.")],runes:{...ELISE_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Shadowflame","Out-burst them — Cocoon lands first."),I("Stormsurge","Add proc damage during their cast animations."),I("Zhonya's Hourglass","Survive the full rotation, then punish.")],behind:[I("Banshee's Veil","Block their CC opener to land your own combo safely."),I("Zhonya's Hourglass","Stasis during their full combo."),I("Ionian Boots of Lucidity","Haste to create distance.")],runes:{...ELISE_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","They will stack MR — pen necessary."),I("Shadowflame","Burst trades punish before they sustain back."),I("Liandry's Torment","Burn wins the drain war.")],behind:[I("Zhonya's Hourglass","Stasis during their sustained AP DPS."),I("Banshee's Veil","Block their key setup ability."),I("Void Staff","Pen vs their MR building.")],runes:{...ELISE_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Stormsurge","Close fast — proc fires immediately on arrival."),I("Shadowflame","One-shot on landing."),I("Ionian Boots of Lucidity","Haste closes the gap faster.")],behind:[I("Banshee's Veil","Block one long-range CC to create an approach window."),I("Zhonya's Hourglass","Stasis if they land CC on approach."),I("Ionian Boots of Lucidity","Haste closes the gap.")],runes:{...ELISE_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","Flat pen one-shots any ADC — Cocoon confirms the kill."),I("Stormsurge","Proc damage eliminates any HP remaining."),I("Rabadon's Deathcap","Confirm the kill before they kite.")],behind:[I("Shadowflame","ADCs are always squishy — never give up flat pen vs them."),I("Ionian Boots of Lucidity","Haste to close their kite pattern."),I("Zhonya's Hourglass","Stasis vs carry + support burst after you land.")],runes:{...ELISE_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Flat pen into low-MR Enchanters."),I("Stormsurge","Proc damage while they try to shield/heal the carry."),I("Rabadon's Deathcap","Burst the Enchanter before they react.")],behind:[I("Void Staff","They rush MR when losing — pen required."),I("Zhonya's Hourglass","Stasis when carry follows up after you kill the Enchanter."),I("Banshee's Veil","Block their peel CC to land Cocoon.")],runes:{...ELISE_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Banshee's Veil","Block hook/root to approach — then Cocoon combo."),I("Shadowflame","Flat pen burst on gap-closed."),I("Stormsurge","Proc damage after the opener.")],behind:[I("Banshee's Veil","Your only approach window — never skip vs hook champions."),I("Ionian Boots of Lucidity","Haste to escape their CC range."),I("Zhonya's Hourglass","Stasis after CC lands before their follow-up.")],runes:{...ELISE_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Pen into tank armor/MR stacking."),I("Liandry's Torment","Healing amp from the burn source."),I("Stormsurge","Proc damage while they try to engage.")],behind:[I("Void Staff","Pen is your only reliable damage source vs their stacking."),I("Zhonya's Hourglass","Stasis during their initiation chain."),I("Banshee's Veil","Block their initiation ability.")],runes:{...ELISE_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","Pen vs Warden HP/MR stacking."),I("Liandry's Torment","Burn path bypasses their mitigation."),I("Shadowflame","Burst through before they body-block for the carry.")],behind:[I("Void Staff","Non-negotiable vs Warden stacking."),I("Zhonya's Hourglass","Stasis during combined Warden + carry burst."),I("Banshee's Veil","Block their key CC.")],runes:{...ELISE_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Shadowflame","Burst Singed/GP before their kits engage."),I("Stormsurge","Proc damage mid-combo."),I("Rabadon's Deathcap","Closes the kill before they activate their kit.")],behind:[I("Banshee's Veil","Block Teemo blind / TF gold card before your Cocoon."),I("Zhonya's Hourglass","Stasis during Kennen stun + ult."),I("Ionian Boots of Lucidity","Haste to escape kiting specialists.")],runes:{...ELISE_JGL_DEFAULT_RUNES}},
      },
    },
    Support:{
      bans:["Blitzcrank","Leona","Nautilus"], replacements:["Zyra","Brand","Vel'Koz"],
      role:"Cocoon Kill-Lane Support",
      corePath:"Bloodsong  ›  Sorcerer's Shoes  ›  Stormsurge  ›  Shadowflame",
      coreNote:"Support Elise is a kill lane in a bottle: Cocoon is a hook-class pick tool, and the spider-form follow-up bursts harder than most mid laners at level 3. Bloodsong amps her carry's damage after every landed stun, Stormsurge detonates off the Electrocute combo, and Shadowflame converts chunked targets into executes. Zhonya's covers the rappel-in positioning. Her human-spider toggle means she never runs out of things to cast — poke with human Q, kill with spider Q, and roam mid from level 6 like a second jungler.",
      sideItems:["Zhonya's Hourglass","Rabadon's Deathcap","Void Staff","Banshee's Veil","Vigilant Wardstone","Cosmic Drive"],
      data:{
        JUGGERNAUT:{ahead:[I("Stormsurge","Poke-burst them off the wave from range."),I("Shadowflame","Pen punishes their low MR."),I("Bloodsong","Amp the carry kiting them.")],behind:[I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Void Staff","Pen keeps the burst real."),I("Banshee's Veil","Blocks the pull.")],runes:{...ELISE_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Stormsurge","Burst them mid-dive with Cocoon setup."),I("Shadowflame","Execute the committed diver."),I("Zhonya's Hourglass","Rappel plus stasis double-dodges the engage.")],behind:[I("Zhonya's Hourglass","Mandatory — squishy supports are the dive target."),I("Banshee's Veil","Blocks the engage opener."),I("Vigilant Wardstone","See the dive coming.")],runes:{...ELISE_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Roaming assassins hunt supports — stasis answers."),I("Shadowflame","Cocoon into burst wins the race."),I("Stormsurge","Punish every entry.")],behind:[I("Zhonya's Hourglass","Rush — rappel alone won't save you."),I("Banshee's Veil","Blocks the opener."),I("Vigilant Wardstone","Track the roam before it lands.")],runes:{...ELISE_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Shadowflame","Cocoon at range — they never get to duel."),I("Stormsurge","Chip them below all-in HP."),I("Void Staff","Pen through their MR items.")],behind:[I("Zhonya's Hourglass","Deny their dive-the-support plan."),I("Banshee's Veil","Blocks the gap-close."),I("Cosmic Drive","Speed to hold spacing.")],runes:{...ELISE_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Stormsurge","Your Cocoon setup lands the rotation first."),I("Zhonya's Hourglass","Stasis their combo."),I("Shadowflame","Pen wins the burst mirror.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the burst honest.")],runes:{...ELISE_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the sustained AP war."),I("Stormsurge","Burst them before the drain ramps."),I("Shadowflame","Execute the ramped battlemage early.")],behind:[I("Morellonomicon","Cut the heal-back loop."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...ELISE_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Cosmic Drive","Speed closes their poke range — rappel finishes."),I("Shadowflame","Delete them once inside."),I("Stormsurge","Out-burst the poke war.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Vigilant Wardstone","Vision beats the poke angle.")],runes:{...ELISE_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","One Cocoon on their carry is one kill."),I("Stormsurge","Burst proc on the stunned target."),I("Bloodsong","Amp your carry's follow-up.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the engage set on you."),I("Void Staff","Burst stays lethal.")],runes:{...ELISE_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Pen through the shield sponge."),I("Stormsurge","Burst bigger than their shield budget."),I("Void Staff","Pen the protected carry.")],behind:[I("Morellonomicon","Cut the heal package."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Void Staff","Keep the burst honest.")],runes:{...ELISE_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Shadowflame","Win the pick mirror — Cocoon outranges most hooks."),I("Stormsurge","Burst the catcher who missed."),I("Bloodsong","Amp the follow-up on your pick.")],behind:[I("Banshee's Veil","Spell shield eats the hook — your lifeline."),I("Zhonya's Hourglass","Stasis if caught."),I("Vigilant Wardstone","Vision beats the flank hook.")],runes:{...ELISE_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Shadowflame","Cocoon the engage before it starts."),I("Void Staff","Pen through their MR stack."),I("Stormsurge","Burst the backline behind them.")],behind:[I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation CC."),I("Void Staff","Required through the frontline.")],runes:{...ELISE_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","Pen through the peel-tank's resists."),I("Shadowflame","Burst over the peel wall."),I("Rabadon's Deathcap","Out-scale the peel budget.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Morellonomicon","Cut their sustain support."),I("Zhonya's Hourglass","Survive the counter-engage.")],runes:{...ELISE_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Stormsurge","Cocoon-burst answers most gimmicks."),I("Shadowflame","Execute them in one window."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...ELISE_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
