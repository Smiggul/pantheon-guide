import { I } from "../runeHelpers.js";

const TRYNDAMERE_TOP_DEFAULT_RUNES = {
  keystone:       "Hail of Blades",
  primary:        "Domination",
  primaryRunes:   ["Sudden Impact","Grisly Mementos","Treasure Hunter"],
  secondary:      "Precision",
  secondaryRunes: ["Legend: Alacrity","Last Stand"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Hail of Blades is the current Tryndamere tech — three instant fury-stacking autos win the short trades his crit variance used to lose. Sudden Impact procs lethality off every E spin, Grisly Mementos stacks haste toward more spins, Treasure Hunter funds the crit curve, Legend: Alacrity compounds the attack speed his fury engine runs on, and Last Stand is written for him: Undying Rage means every fight ends with Tryndamere at max Last Stand value, swinging through his own death timer.",
};

// ══════════════════════════════════════════════════════════════════════════
//  TRYNDAMERE — Barbarian King: Undying Split-Pusher  (Top 51.3% 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"tryndamere", display:"Tryndamere", dd:"Tryndamere",
  color:"#5a2010", glow:"#f07040",
  lanes:["Top"],
  roles:{
    Top:{
      bans:["Jax","Malphite","Rammus"], replacements:["Yasuo","Riven","Fiora"],
      role:"Undying Rage Split-Pusher",
      corePath:"Ravenous Hydra  ›  Berserker's Greaves  ›  Phantom Dancer  ›  Infinity Edge",
      coreNote:"Tryndamere plays the simplest win condition in the game: hit things until they die, and refuse to die himself. Ravenous Hydra sustains the spin-farm split-push loop, Phantom Dancer feeds attack speed and the ghosting his stick-to-target pattern needs, Infinity Edge multiplies the fury-guaranteed crits into tower-and-champion-deleting DPS, and Lord Dominik's finishes tanks. Undying Rage makes every tower dive on him a coin flip he rigged — five seconds of unkillable is five seconds of someone else dying.",
      sideItems:["Lord Dominik's Regards","Bloodthirster","Sterak's Gage","Guardian Angel","Death's Dance","Mercurial Scimitar"],
      data:{
        JUGGERNAUT:{ahead:[I("Ravenous Hydra","Sustain out-trades their walk-down."),I("Infinity Edge","Crit through their HP stacking."),I("Lord Dominik's Regards","Giant slayer seals the duel.")],behind:[I("Bloodthirster","Sustain the chip war and scale."),I("Sterak's Gage","Survive the all-in — R covers the rest."),I("Guardian Angel","Insurance beyond Undying Rage.")],runes:{...TRYNDAMERE_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Phantom Dancer","Out-stick their engage — spin through the exit."),I("Infinity Edge","Kill the diver inside their own engage."),I("Ravenous Hydra","Sustain the brawl.")],behind:[I("Sterak's Gage","Shield their burst opener."),I("Death's Dance","Bleed through the counter-dive."),I("Guardian Angel","Two death-cheats stack absurdly.")],runes:{...TRYNDAMERE_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Phantom Dancer","Their burst meets Undying Rage — then they meet you."),I("Infinity Edge","Out-damage their reset window."),I("Ravenous Hydra","Heal back the chip.")],behind:[I("Sterak's Gage","Shield floor under the combo."),I("Guardian Angel","Trade one-shots and revive."),I("Mercurial Scimitar","Cleanse the lockdown opener.")],runes:{...TRYNDAMERE_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Infinity Edge","Win the duel mirror on guaranteed crits."),I("Ravenous Hydra","Sustain out-lasts their windows."),I("Phantom Dancer","Ghost through their kite attempts.")],behind:[I("Bloodthirster","Shield + sustain evens the duel."),I("Sterak's Gage","Survive their all-in — R the end."),I("Guardian Angel","Insurance in the forced 1v1.")],runes:{...TRYNDAMERE_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Phantom Dancer","Stick to them through the rotation — R blanks the burst."),I("Infinity Edge","Kill them in the cooldown gap."),I("Ravenous Hydra","Heal back the poke.")],behind:[I("Mercurial Scimitar","Cleanse the setup CC."),I("Sterak's Gage","Shield the rotation."),I("Guardian Angel","Survive the combo — twice.")],runes:{...TRYNDAMERE_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Ravenous Hydra","Sustain through the zone — spin out the other side."),I("Phantom Dancer","Speed through their control."),I("Bloodthirster","Out-sustain the drain war.")],behind:[I("Mercurial Scimitar","Cleanse the lock that holds you in it."),I("Sterak's Gage","Shield the ramped window."),I("Death's Dance","Bleed the sustained damage.")],runes:{...TRYNDAMERE_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Phantom Dancer","Speed + spin closes the poke gap fast."),I("Infinity Edge","Delete them on arrival."),I("Ravenous Hydra","Heal the approach chip.")],behind:[I("Bloodthirster","Sustain the poke war."),I("Sterak's Gage","Shield the committed engage."),I("Guardian Angel","Covers the forced dive.")],runes:{...TRYNDAMERE_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Phantom Dancer","Ghost through their kiting — spin resets close the rest."),I("Infinity Edge","Out-crit the crit carry."),I("Lord Dominik's Regards","Shred their armor buys.")],behind:[I("Sterak's Gage","Survive the kite-down — R the final gap."),I("Guardian Angel","Trade kills and revive."),I("Bloodthirster","Sustain the chip.")],runes:{...TRYNDAMERE_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Infinity Edge","Crit through the shield budget."),I("Ravenous Hydra","Sustain out-values their package."),I("Phantom Dancer","Stick through the peel.")],behind:[I("Lord Dominik's Regards","Pen the protected carry."),I("Mercurial Scimitar","Cleanse their CC package."),I("Guardian Angel","Survive the buffed carry.")],runes:{...TRYNDAMERE_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Phantom Dancer","Spin makes their hooks whiff — punish with fury."),I("Infinity Edge","Kill the catcher who missed."),I("Ravenous Hydra","Sustain the poke exchanges.")],behind:[I("Mercurial Scimitar","Cleanse the hook lockdown."),I("Sterak's Gage","Survive the caught scenario — R covers."),I("Guardian Angel","Insurance against the pick.")],runes:{...TRYNDAMERE_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Giant slayer melts the engage line."),I("Infinity Edge","Crit volume through their frontline."),I("Phantom Dancer","Ghost past them to the backline.")],behind:[I("Lord Dominik's Regards","Required pen vs stacked armor."),I("Mercurial Scimitar","Cleanse the chain CC."),I("Guardian Angel","Survive the wombo — R first, GA second.")],runes:{...TRYNDAMERE_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Shred the peel-tank — split-push around the rest."),I("Infinity Edge","Crit volume breaks mitigation."),I("Ravenous Hydra","Sustain the siege war.")],behind:[I("Lord Dominik's Regards","Mandatory vs their armor stack."),I("Bloodthirster","Sustain the attrition."),I("Guardian Angel","Insurance into the peel wall.")],runes:{...TRYNDAMERE_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Phantom Dancer","Speed + R answers most gimmicks."),I("Infinity Edge","Scale past the gimmick."),I("Ravenous Hydra","Sustain through the tricks.")],behind:[I("Mercurial Scimitar","Cleanse the key CC."),I("Sterak's Gage","Shield what you can't read."),I("Guardian Angel","Survive the unknown — twice.")],runes:{...TRYNDAMERE_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
