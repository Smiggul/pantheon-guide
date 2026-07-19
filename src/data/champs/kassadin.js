import { I } from "../runeHelpers.js";

const KASSADIN_MID_DEFAULT_RUNES = {
  keystone:       "First Strike",
  primary:        "Inspiration",
  primaryRunes:   ["Cash Back","Triple Tonic","Cosmic Insight"],
  secondary:      "Domination",
  secondaryRunes: ["Sudden Impact","Ultimate Hunter"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Kassadin's lane is about surviving to level 16, and First Strike converts even passive trading into the gold that accelerates his item spikes. Cash Back and Triple Tonic compound the economy game, Cosmic Insight smooths every cooldown, Sudden Impact procs off every Riftwalk for bonus pen, and Ultimate Hunter is the whole show — more Riftwalks is more mobility, more burst, and more escapes.",
};

// ══════════════════════════════════════════════════════════════════════════
//  KASSADIN — Void Hyperscaler / Level-16 Monster  (A tier Mid 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"kassadin", display:"Kassadin", dd:"Kassadin",
  color:"#3a2a5a", glow:"#9a6ae0",
  lanes:["Mid"],
  roles:{
    Mid:{
      bans:["Talon","Zed","Irelia"], replacements:["Fizz","Katarina","Sylas"],
      role:"Void Hyperscaler / Level-16 Monster",
      corePath:"Rod of Ages  ›  Sorcerer's Shoes  ›  Archangel's Staff  ›  Malignance",
      coreNote:"Kassadin is the purest scaling pick in the game — weak early, unstoppable at three items and level 16. Rod of Ages gives the HP/mana/AP ramp that carries the awkward early game; Archangel's Staff converts the mana stack into AP and eventually a Seraph's lifeline; Malignance hammers Riftwalk's cooldown so the ult becomes a spammable blink. Farm safely, take the free First Strike gold, and the game solves itself past 25 minutes.",
      sideItems:["Seraph's Embrace","Zhonya's Hourglass","Void Staff","Rabadon's Deathcap","Banshee's Veil","Lich Bane"],
      data:{
        JUGGERNAUT:{ahead:[I("Rod of Ages","Ramp HP freely — they can never catch a Riftwalk."),I("Malignance","More blinks = they literally never touch you."),I("Rabadon's Deathcap","Scale the burst past their durability.")],behind:[I("Zhonya's Hourglass","Stasis covers the one mistake they can punish."),I("Archangel's Staff","Seraph's shield doubles the error margin."),I("Void Staff","Pen keeps damage honest.")],runes:{...KASSADIN_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rod of Ages","HP blunts the dive; Riftwalk out the other side."),I("Malignance","Blink cooldown wins the disengage war."),I("Zhonya's Hourglass","Stasis flips the dive entirely.")],behind:[I("Zhonya's Hourglass","Mandatory — buy time until Riftwalk is back."),I("Banshee's Veil","Blocks the engage that starts the dive."),I("Mercury's Treads","Shorter CC before the escape.")],runes:{...KASSADIN_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Rod of Ages","HP makes their one-shot fail; you out-scale from there."),I("Zhonya's Hourglass","Stasis answers the combo cleanly."),I("Malignance","Blink out before the follow-up lands.")],behind:[I("Zhonya's Hourglass","Rush it — this lane is about not dying pre-16."),I("Banshee's Veil","Blocks their opener."),I("Seraph's Embrace","Shield floor under their burst.")],runes:{...KASSADIN_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Malignance","Riftwalk spam means they never get the extended fight."),I("Rod of Ages","HP + sustain covers the trades you take."),I("Rabadon's Deathcap","Burst them down between their windows.")],behind:[I("Zhonya's Hourglass","Deny the all-in window."),I("Seraph's Embrace","Shield floor for the duel you can't refuse."),I("Void Staff","Keep the burst real through MR.")],runes:{...KASSADIN_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Rod of Ages","Your passive shield + HP blanks magic burst."),I("Rabadon's Deathcap","Out-burst them in your window."),I("Malignance","Blink dodges half their rotation on reaction.")],behind:[I("Banshee's Veil","Blocks the combo opener — huge with your MR passive."),I("Zhonya's Hourglass","Survive the full rotation."),I("Seraph's Embrace","Shield stacks with the passive.")],runes:{...KASSADIN_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen through their MR while your passive eats their damage."),I("Rod of Ages","Out-ramp their sustain curve."),I("Rabadon's Deathcap","Burst beats drain if it's big enough.")],behind:[I("Banshee's Veil","Blocks the CC that lets them stick to you."),I("Zhonya's Hourglass","Survive the drain window."),I("Void Staff","Required through their MR.")],runes:{...KASSADIN_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Malignance","Riftwalk gaps their spacing instantly."),I("Rod of Ages","Free HP through the poke war."),I("Rabadon's Deathcap","One rotation deletes them once you land.")],behind:[I("Seraph's Embrace","Shield absorbs the poke you can't dodge."),I("Zhonya's Hourglass","Cover the engage attempt."),I("Mercury's Treads","MR chips away their poke math.")],runes:{...KASSADIN_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Malignance","Blink onto them; they're dead before kiting starts."),I("Rabadon's Deathcap","Amplify the pick burst."),I("Rod of Ages","HP covers the DPS race.")],behind:[I("Zhonya's Hourglass","Stasis blanks their focus fire."),I("Seraph's Embrace","Shield floor under sustained DPS."),I("Banshee's Veil","Blocks the setup CC.")],runes:{...KASSADIN_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Rabadon's Deathcap","Enough AP bursts through any shield."),I("Void Staff","Pen cuts the shield sponge math."),I("Malignance","Blink past the peel onto the carry.")],behind:[I("Void Staff","Keep burst real through shields."),I("Zhonya's Hourglass","Survive the protected carry's damage."),I("Seraph's Embrace","Your own shield war.")],runes:{...KASSADIN_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Malignance","Riftwalk makes hooks unlandable."),I("Rod of Ages","HP means a landed catch isn't lethal."),I("Rabadon's Deathcap","Punish every whiff with a full combo.")],behind:[I("Banshee's Veil","Spell shield eats the hook."),I("Zhonya's Hourglass","Stasis if caught."),I("Mercury's Treads","Shorter lockdown on catch.")],runes:{...KASSADIN_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Shred the engage tank's MR."),I("Malignance","Blink out of every engage attempt."),I("Rabadon's Deathcap","Scale damage past their durability.")],behind:[I("Void Staff","Required to matter from behind."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation.")],runes:{...KASSADIN_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","Pen through peel resists to the backline."),I("Malignance","Blink past the Warden entirely."),I("Rabadon's Deathcap","Burst through the peel.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Zhonya's Hourglass","Survive being the focus."),I("Seraph's Embrace","Shield floor while diving.")],runes:{...KASSADIN_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Malignance","Blink spacing answers most gimmick kits."),I("Rod of Ages","Generic durability beats trick damage."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Cover the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...KASSADIN_MID_DEFAULT_RUNES}},
      },
    },
  },
};
