import { I } from "../runeHelpers.js";

const LOCKE_MID_DEFAULT_RUNES = {
  keystone:       "Electrocute",
  primary:        "Domination",
  primaryRunes:   ["Sudden Impact","Sixth Sense","Ultimate Hunter"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Revitalize"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Electrocute procs off Q nail throw + auto consuming the mark — reliable 3-input. Sudden Impact fires on both E dashes. Ultimate Hunter reduces Purgatory from 120s toward 80s at full stacks. Bone Plating secondary — as a melee assassin you take damage before killing.",
};

// ══════════════════════════════════════════════════════════════════════════
//  LOCKE — AP Assassin (patch 26.14 — Q nerfed, adapt build)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"locke", display:"Locke", dd:"Locke",
  bans:["Kassadin","Ekko","Talon"], replacements:["Katarina","Akali","Diana"],
  color:"#2c3e50", glow:"#9b59b6",
  roles:{
    Mid:{
      role:"AP Assassin",
      corePath:"Lich Bane  ›  Sorcerer's Shoes  ›  Shadowflame  ›  Zhonya's Hourglass",
      coreNote:"Lich Bane first — Sheen proc fires on both nail-mark consumption auto AND on W recast, giving two Sheen procs per combo. Shadowflame third for flat pen vs mid-lane squishies. Zhonya's fourth since melee assassin who takes damage before dealing it. Rabadon's fifth to amplify all accumulated AP.",
      sideItems:["Rabadon's Deathcap","Stormsurge","Cryptbloom","Banshee's Veil","Hextech Rocketbelt","Void Staff"],
      data:{
        JUGGERNAUT:{ahead:[I("Cryptbloom","% pen bypasses their HP stacking — flat pen from Shadowflame wasted."),I("Void Staff","40% magic pen cuts through MR stack."),I("Zhonya's Hourglass","Stasis during their walk-down while poison mark ticks.")],behind:[I("Zhonya's Hourglass","Stasis during their burst — nail marks tick during stasis."),I("Banshee's Veil","Block one CC ability to land your Q combo safely."),I("Cryptbloom","% pen remains effective regardless of gold lead.")],runes:{...LOCKE_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Stormsurge","Proc damage on divers diving into melee range."),I("Shadowflame","Burst the diver before they close the gap fully."),I("Lich Bane","Sheen proc on Q mark consume + W recast in combo.")],behind:[I("Zhonya's Hourglass","Stasis cancels their dive window — nail marks still tick."),I("Banshee's Veil","Block Camille E / Irelia E before they can gap close."),I("Hextech Rocketbelt","Dash out of their dive with damage.")],runes:{...LOCKE_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Out-burst them — your Q mark + Lich Bane + Shadowflame one-shots squishies."),I("Stormsurge","Proc damage after first Sheen proc."),I("Lich Bane","Double Sheen in combo finishes them before their recast.")],behind:[I("Zhonya's Hourglass","Stasis during Zed Ult / Akali combo."),I("Banshee's Veil","Block Akali E / Katarina Shunpo opener."),I("Hextech Rocketbelt","Escape dash when they jump you.")],runes:{...LOCKE_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Stormsurge","Proc damage during their extended duel window."),I("Shadowflame","Flat pen burst wins the short window before their sustain kicks in."),I("Lich Bane","Double Sheen proc in combo — don't let them trade autos with you.")],behind:[I("Zhonya's Hourglass","Stasis during Fiora ult / Jax counter-strike."),I("Banshee's Veil","Block their engage opener."),I("Hextech Rocketbelt","Escape when they chase post-duel.")],runes:{...LOCKE_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Shadowflame","Out-burst them — your Q mark + Lich Bane Sheen proc is faster."),I("Stormsurge","Add proc damage during their cast animations."),I("Lich Bane","Double Sheen in combo deletes before their full combo fires.")],behind:[I("Banshee's Veil","Block their CC opener to land your Q safely."),I("Zhonya's Hourglass","Stasis during Syndra/Orianna full combo."),I("Hextech Rocketbelt","Create distance before their combo fires.")],runes:{...LOCKE_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Vladimir/Swain will stack MR — % pen necessary."),I("Shadowflame","Burst trades punish before they sustain back."),I("Lich Bane","Double Sheen forces a decision — fight or flee during the window.")],behind:[I("Zhonya's Hourglass","Stasis during their sustained AP DPS."),I("Banshee's Veil","Block Vladimir Transfusion range or Swain E."),I("Void Staff","% pen vs their MR building.")],runes:{...LOCKE_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Stormsurge","Close fast — proc fires immediately on arrival."),I("Shadowflame","One-shot on landing."),I("Hextech Rocketbelt","Dash in during their cast animation.")],behind:[I("Banshee's Veil","Block one long-range CC to create an approach window."),I("Hextech Rocketbelt","Dash past their poke to close the gap."),I("Zhonya's Hourglass","Stasis if they land CC on approach.")],runes:{...LOCKE_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","Flat pen one-shots any ADC — Q mark + Lich Bane + Shadowflame = instant."),I("Stormsurge","Proc damage eliminates any HP remaining."),I("Lich Bane","Double Sheen confirm the kill before they kite.")],behind:[I("Shadowflame","ADCs are always squishy — never give up flat pen vs them."),I("Hextech Rocketbelt","Dash past their kite pattern."),I("Zhonya's Hourglass","Stasis vs carry + support burst after you land.")],runes:{...LOCKE_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Flat pen into low-MR Enchanters."),I("Stormsurge","Proc damage while they try to shield/heal the carry."),I("Lich Bane","Burst the Enchanter before they react.")],behind:[I("Void Staff","They rush MR when losing — % pen required."),I("Zhonya's Hourglass","Stasis when carry follows up after you kill Enchanter."),I("Banshee's Veil","Block Lulu polymorph / Janna knock to land Q.")],runes:{...LOCKE_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Banshee's Veil","Block hook/root to approach — then Q mark + Lich Bane."),I("Shadowflame","Flat pen burst on gap-closed."),I("Stormsurge","Proc damage after Sheen.")],behind:[I("Banshee's Veil","Your only approach window — never skip vs hook supports."),I("Hextech Rocketbelt","Dash past their CC range."),I("Zhonya's Hourglass","Stasis after CC lands before their follow-up.")],runes:{...LOCKE_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","% pen into tank armor/MR stacking."),I("Cryptbloom","Healing amp from % pen source."),I("Stormsurge","Proc damage while they try to engage.")],behind:[I("Void Staff","% pen is your only damage source vs their stacking."),I("Zhonya's Hourglass","Stasis during Malphite Ult / Leona chain."),I("Banshee's Veil","Block their initiation ability.")],runes:{...LOCKE_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","% pen vs Warden HP/MR stacking."),I("Cryptbloom","% pen path."),I("Shadowflame","Burst through before they body-block for carry.")],behind:[I("Void Staff","Non-negotiable vs Warden stacking."),I("Zhonya's Hourglass","Stasis during combined Warden + carry burst."),I("Banshee's Veil","Block Poppy E / Galio taunt.")],runes:{...LOCKE_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Shadowflame","Burst Singed/GP before their kits engage."),I("Stormsurge","Proc damage mid-combo."),I("Lich Bane","Double Sheen closes kill before they activate kit.")],behind:[I("Banshee's Veil","Block Teemo blind / TF gold card before Q mark."),I("Zhonya's Hourglass","Stasis during Kennen stun + ult."),I("Hextech Rocketbelt","Escape when kiting Specialists catch you.")],runes:{...LOCKE_MID_DEFAULT_RUNES}},
      },
    },
  },
};
