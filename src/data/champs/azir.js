import { I } from "../runeHelpers.js";

const AZIR_MID_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Presence of Mind","Legend: Alacrity","Cut Down"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Overgrowth"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Azir is an attack-speed mage — his soldiers strike on his auto-attack timer, so Lethal Tempo directly scales his entire damage output. Presence of Mind sustains the mana-hungry poke phase, Legend: Alacrity stacks even more soldier attack speed, and Cut Down helps shred the frontliners who dive him. Bone Plating and Overgrowth patch up his notoriously weak early laning.",
};

// ══════════════════════════════════════════════════════════════════════════
//  AZIR — Soldier Control Mage / Hyperscaler
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"azir", display:"Azir", dd:"Azir",
  color:"#8a6d2f", glow:"#e8c96a",
  lanes:["Mid"],
  altBuilds:{
    Mid:[{
      label:"Dusk and Dawn spellblade", tag:"alt",
      corePath:"Dusk and Dawn  ›  Sorcerer's Shoes  ›  Shadowflame  ›  Rabadon's Deathcap",
      coreNote:"A minority Azir line: Dusk and Dawn first instead of Nashor's Tooth, in about 6-9% of games on lolalytics. Its spellblade loads extra damage into the soldier attack after each ability, so it front-loads short trades rather than buying the sustained soldier DPS Nashor's gives. It is not a stronger build: at equal item counts it finishes within about a point of Nashor's-first, behind at two and three items and ahead at four, so pick it for the trading pattern, not the numbers. Players who take it buy Sorcerer's Shoes and follow with Shadowflame more often than Nashor's Tooth.",
      runes:{ keystone:"Press the Attack", primary:"Precision", primaryRunes:["Presence of Mind","Legend: Alacrity","Cut Down"], secondary:"Sorcery", secondaryRunes:["Manaflow Band","Gathering Storm"], shards:["Attack Speed","Adaptive Force","Health (scaling)"], reason:"Press the Attack instead of the main page's Lethal Tempo, with a greedier Sorcery secondary in place of Resolve. Presence of Mind and Manaflow Band together fix his mana for the trade-heavy lane this line plays; Legend: Alacrity adds the attack speed his soldiers want; Cut Down and Gathering Storm scale the mid-late teamfight. Swap back to the Resolve secondary into lanes that can kill you early." },
      sideItems:["Nashor's Tooth","Zhonya's Hourglass","Void Staff","Banshee's Veil","Rylai's Crystal Scepter"],
    }],
  },
  roles:{
    Mid:{
      bans:["Fizz","Zed","Irelia"], replacements:["Orianna","Syndra","Xerath"],
      role:"Soldier Control Mage / Hyperscaler",
      corePath:"Nashor's Tooth  ›  Sorcerer's Shoes  ›  Shadowflame  ›  Rabadon's Deathcap",
      coreNote:"Azir fights through his sand soldiers — every item that buys attack speed or AP multiplies their drumbeat of on-hit magic damage. Nashor's Tooth is the defining spike and the first item in over 80% of Azir games: attack speed plus on-hit AP is exactly what soldiers convert into DPS. Shadowflame adds burst against the squishies you poke low, and Rabadon's Deathcap is now the usual third item, about twice as common there as Zhonya's Hourglass. Move Zhonya's up when the enemy has the dive to punish a Shurima Shuffle — ult them into your carries, then stasis through the retaliation.",
      sideItems:["Zhonya's Hourglass","Void Staff","Banshee's Veil","Rylai's Crystal Scepter","Riftmaker","Ionian Boots of Lucidity"],
      data:{
        JUGGERNAUT:{ahead:[I("Nashor's Tooth","Soldier DPS shreds them before they ever reach you."),I("Shadowflame","Punish their low MR with flat pen."),I("Rabadon's Deathcap","Scaling AP turns soldiers into a sustained shredder.")],behind:[I("Zhonya's Hourglass","Stasis when they finally force the gap close."),I("Void Staff","Pen keeps soldier damage real without a gold lead."),I("Banshee's Veil","Blocks the gap-closer or pull that starts their kill window.")],runes:{...AZIR_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Zhonya's Hourglass","Even ahead, stasis answers the tower dive."),I("Nashor's Tooth","Out-DPS them while soldiers body-block."),I("Shadowflame","Burst the diver before the combo lands.")],behind:[I("Zhonya's Hourglass","Mandatory — negates the all-in you can't outrun."),I("Banshee's Veil","Blocks the engage spell that starts the dive."),I("Ionian Boots of Lucidity","More E/R uptime to disengage.")],runes:{...AZIR_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Deny the reset-window even while winning."),I("Shadowflame","Out-burst them at range before they close."),I("Nashor's Tooth","Soldiers zone the walk-up entirely.")],behind:[I("Zhonya's Hourglass","Rush it — stasis is the only real assassin answer."),I("Banshee's Veil","Blocks the opening ability of their combo."),I("Ionian Boots of Lucidity","Haste for E-out escapes.")],runes:{...AZIR_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Nashor's Tooth","Sustained soldier DPS wins extended duels."),I("Rabadon's Deathcap","Raw AP edge before they complete items."),I("Shadowflame","Burst window on their engage cooldowns.")],behind:[I("Zhonya's Hourglass","Buy time against their all-in windows."),I("Void Staff","Damage stays relevant through their MR items."),I("Banshee's Veil","Blocks the gap-close that starts the duel.")],runes:{...AZIR_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Shadowflame","Win the poke war with flat pen burst."),I("Nashor's Tooth","Out-DPS them between their cooldown windows."),I("Rabadon's Deathcap","Scaling edge ends the lane outright.")],behind:[I("Banshee's Veil","Blocks the CC that opens their rotation."),I("Zhonya's Hourglass","Survive the full combo, punish the cooldowns."),I("Void Staff","Keep damage honest while behind.")],runes:{...AZIR_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pierce their MR stacking early."),I("Nashor's Tooth","Sustained DPS out-trades their drain style."),I("Morellonomicon","Cuts Vladimir/Swain healing loops.")],behind:[I("Banshee's Veil","Blocks the CC that starts their sustained combo."),I("Zhonya's Hourglass","Survive the drain window."),I("Void Staff","Required pen through defensive MR.")],runes:{...AZIR_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Ionian Boots of Lucidity","Haste to close and punish their immobility."),I("Nashor's Tooth","Once in range, soldiers out-DPS any poke."),I("Shadowflame","Burst them in one soldier window.")],behind:[I("Banshee's Veil","Eats one long-range rotation."),I("Zhonya's Hourglass","Survive the poke while closing."),I("Void Staff","Damage holds up from behind.")],runes:{...AZIR_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Nashor's Tooth","Soldier range means they can never free-hit you."),I("Shadowflame","Burst the squishy carry in one rotation."),I("Rabadon's Deathcap","Amplify the pick damage.")],behind:[I("Zhonya's Hourglass","Deny their DPS window in fights."),I("Banshee's Veil","Blocks the CC that sets you up for them."),I("Ionian Boots of Lucidity","Haste to kite their range advantage.")],runes:{...AZIR_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Pen scales against their shield stacking."),I("Nashor's Tooth","Sustained DPS burns through heal/shield cycles."),I("Morellonomicon","Cuts the sustain package at the source.")],behind:[I("Void Staff","Keep soldier damage real through shields."),I("Zhonya's Hourglass","Survive the protected carry's focus."),I("Banshee's Veil","Blocks the setup CC.")],runes:{...AZIR_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Nashor's Tooth","Soldiers punish every whiffed hook from range."),I("Shadowflame","Burst the catcher when they miss."),I("Rabadon's Deathcap","Amplify the punish window.")],behind:[I("Banshee's Veil","Spell shield eats the hook — your lifeline."),I("Zhonya's Hourglass","Stasis if the catch lands."),I("Ionian Boots of Lucidity","Haste for E escapes.")],runes:{...AZIR_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Shred their MR before they stack it."),I("Nashor's Tooth","Sustained soldier DPS melts engage tanks."),I("Rabadon's Deathcap","Scale damage past their durability curve.")],behind:[I("Void Staff","Required to hurt them at all from behind."),I("Zhonya's Hourglass","Survive the engage you can't stop."),I("Banshee's Veil","Blocks the initiation CC.")],runes:{...AZIR_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","Pen keeps DPS real through peel resists."),I("Nashor's Tooth","Sustained damage outlasts their cooldown peel."),I("Shadowflame","Burst their carry in a peel gap.")],behind:[I("Void Staff","Mandatory vs stacked-resist Wardens."),I("Zhonya's Hourglass","Survive being the focus target."),I("Banshee's Veil","Blocks their key lockdown.")],runes:{...AZIR_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Nashor's Tooth","Soldier range answers most gimmick kits safely."),I("Shadowflame","Burst them in a single soldier window."),I("Rabadon's Deathcap","Scaling edge wins the long game.")],behind:[I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive burst setups you can't read."),I("Void Staff","Damage stays honest.")],runes:{...AZIR_MID_DEFAULT_RUNES}},
      },
    },
  },
};
