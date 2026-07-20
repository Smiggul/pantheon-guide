import { I } from "../runeHelpers.js";

const QUINN_TOP_DEFAULT_RUNES = {
  keystone:       "Electrocute",
  primary:        "Domination",
  primaryRunes:   ["Sudden Impact","Grisly Mementos","Treasure Hunter"],
  secondary:      "Sorcery",
  secondaryRunes: ["Absolute Focus","Gathering Storm"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Electrocute procs off Quinn's Harrier-auto-Q trading rhythm, converting the ranged-top bully pattern into real kill pressure. Sudden Impact fires lethality off every E vault, Grisly Mementos stacks haste from her constant skirmishing, Treasure Hunter pays out the roam-pick pattern Behind Enemy Lines enables, Absolute Focus rewards the healthy poke position her range guarantees, and Gathering Storm backs the scaling her map-wide tempo converts into towers.",
};

// ══════════════════════════════════════════════════════════════════════════
//  QUINN — Demacia's Wings: Ranged Top Roam Assassin  (A/A- Top 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"quinn", display:"Quinn", dd:"Quinn",
  color:"#3a4a6a", glow:"#a0c0f0",
  lanes:["Top"],
  roles:{
    Top:{
      bans:["Aatrox","Malphite","Gangplank"], replacements:["Teemo","Vayne","Jayce"],
      role:"Ranged Bully / Map-Wide Roamer",
      corePath:"Profane Hydra  ›  Boots of Swiftness  ›  The Collector  ›  Edge of Night",
      coreNote:"Quinn bullies melees at range all lane, then Behind Enemy Lines turns her into the fastest roamer in the game — a top laner who ganks bot in fifteen seconds. Profane Hydra slots its execute into her vault burst, The Collector converts the Electrocute combo into kills, Edge of Night blanks the peel spell on arrival, and Infinity Edge closes the crit curve. Vault the melee every time they step to CS; when the lane is won, fly somewhere and win another one.",
      sideItems:["Infinity Edge","Lord Dominik's Regards","Youmuu's Ghostblade","Guardian Angel","Mercurial Scimitar","Serylda's Grudge"],
      data:{
        JUGGERNAUT:{ahead:[I("Profane Hydra","Vault-poke them off every CS forever."),I("The Collector","Execute beats their HP stacking."),I("Serylda's Grudge","Pen + slow keeps them permanently away.")],behind:[I("Guardian Angel","Insurance when they finally connect."),I("Youmuu's Ghostblade","Speed to never be catchable."),I("Edge of Night","Block the pull that starts their all-in.")],runes:{...QUINN_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("The Collector","Vault interrupts the dive — execute the whiff."),I("Edge of Night","Block the engage opener."),I("Infinity Edge","Kill them inside their own engage.")],behind:[I("Edge of Night","Spell shield answers their engage ability."),I("Guardian Angel","Second life against the dive."),I("Mercurial Scimitar","Cleanse the lockdown.")],runes:{...QUINN_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("The Collector","Vault their jump and execute the reset gap."),I("Edge of Night","Block their opener."),I("Guardian Angel","Punish the attempt twice.")],behind:[I("Edge of Night","Rush — blanks their combo starter."),I("Guardian Angel","Trade one-shots and come back."),I("Mercurial Scimitar","Cleanse the setup CC.")],runes:{...QUINN_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Profane Hydra","Poke them below all-in HP — vault denies the duel."),I("The Collector","Execute the extended-fight reset."),I("Youmuu's Ghostblade","Speed controls who picks the fight.")],behind:[I("Edge of Night","Block the gap-close that starts their duel."),I("Guardian Angel","Insurance when they force it."),I("Serylda's Grudge","Pen + slow to kite the loss.")],runes:{...QUINN_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("The Collector","Vault-burst them in the cooldown gap."),I("Edge of Night","Block the rotation opener."),I("Infinity Edge","End it before the next combo.")],behind:[I("Edge of Night","Spell shield eats the combo starter."),I("Guardian Angel","Survive the rotation."),I("Mercurial Scimitar","Cleanse the setup CC.")],runes:{...QUINN_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Profane Hydra","Outrange their zone with Harrier poke."),I("Serylda's Grudge","Pen their HP items."),I("The Collector","Execute before the ramp.")],behind:[I("Edge of Night","Blocks their opening CC."),I("Guardian Angel","Survive the ramped window."),I("Youmuu's Ghostblade","Speed around the zone.")],runes:{...QUINN_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Youmuu's Ghostblade","Speed + vault erases their range advantage."),I("The Collector","Delete them on arrival."),I("Edge of Night","Block the self-peel they hold for you.")],behind:[I("Edge of Night","Spell shield eats one poke on approach."),I("Guardian Angel","Covers the committed engage."),I("Mercurial Scimitar","Cleanse the pick CC.")],runes:{...QUINN_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("The Collector","Win the ranged mirror — vault is the tiebreaker."),I("Infinity Edge","Crit spike out-scales them."),I("Lord Dominik's Regards","Shred their armor buys.")],behind:[I("Guardian Angel","Survive their focus, vault the aftermath."),I("Edge of Night","Block the peel CC."),I("Youmuu's Ghostblade","Speed advantage from behind.")],runes:{...QUINN_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("The Collector","Execute under the shield threshold."),I("Serylda's Grudge","Pen + slow through the peel."),I("Infinity Edge","Burst bigger than the budget.")],behind:[I("Serylda's Grudge","Keep damage real through shields."),I("Edge of Night","Block the setup CC."),I("Guardian Angel","Survive the buffed carry.")],runes:{...QUINN_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Youmuu's Ghostblade","Too fast to hook — vault the catcher who tries."),I("The Collector","Execute the whiff."),I("Edge of Night","Spell shield eats the hook outright.")],behind:[I("Edge of Night","Rush — the hook is their whole plan."),I("Guardian Angel","Survive the caught scenario."),I("Mercurial Scimitar","Cleanse the lockdown.")],runes:{...QUINN_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Serylda's Grudge","Pen keeps damage real through their frontline."),I("The Collector","Execute the engage tank at 5%."),I("Youmuu's Ghostblade","Fly around their engage entirely.")],behind:[I("Edge of Night","Spell shield beats the initiation."),I("Guardian Angel","Survive the engage chain."),I("Serylda's Grudge","Required pen from behind.")],runes:{...QUINN_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Giant slayer through the peel-tank."),I("The Collector","Execute the carry through the peel."),I("Youmuu's Ghostblade","Roam away — win the map instead.")],behind:[I("Serylda's Grudge","Mandatory pen vs stacked armor."),I("Edge of Night","Block their lockdown."),I("Guardian Angel","Insurance on the dive.")],runes:{...QUINN_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("The Collector","Vault-execute answers most gimmicks."),I("Youmuu's Ghostblade","Out-rotate the trick with raw speed."),I("Edge of Night","Block their key setup ability.")],behind:[I("Edge of Night","Spell shield covers the unreadable opener."),I("Guardian Angel","Survive what you can't scout."),I("Mercurial Scimitar","Cleanse the gimmick CC.")],runes:{...QUINN_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
