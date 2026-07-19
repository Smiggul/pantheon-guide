import { I } from "../runeHelpers.js";

const SMOLDER_BOT_DEFAULT_RUNES = {
  keystone:       "Deathfire Touch",
  primary:        "Sorcery",
  primaryRunes:   ["Nimbus Cloak","Celerity","Gathering Storm"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Jack Of All Trades"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Smolder is the biggest Deathfire Touch enjoyer in the game — every stacked Q dragon-breath applies the burn, rewarding exactly the spell-spam stacking loop his kit is built around. Nimbus Cloak + Celerity keep the family flying ahead of dive attempts, Gathering Storm doubles down on the hyperscaling identity his 225-stack power spikes define, and the Inspiration splash (Magical Footwear, Jack Of All Trades) funds and accelerates his notoriously greedy item curve.",
};

// ══════════════════════════════════════════════════════════════════════════
//  SMOLDER — Fiery Fledgling: Stack-Scaling Dragon ADC  (A tier Bot 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"smolder", display:"Smolder", dd:"Smolder",
  color:"#7a4a10", glow:"#f0a030",
  lanes:["Bot"],
  roles:{
    Bot:{
      bans:["Draven","Lucian","Caitlyn"], replacements:["Jinx","Sivir","Tristana"],
      role:"Stack-Scaling Dragon Caster",
      corePath:"Essence Reaver  ›  Gluttonous Greaves  ›  Black Cleaver  ›  Spear of Shojin",
      coreNote:"Smolder is a stack-scaling caster-carry: every Q kill grows the dragon breath, and the build feeds the spell loop rather than the auto attack. Essence Reaver refunds mana on every Spellblade Q, Gluttonous Greaves adds omnivamp to the poke war, Black Cleaver turns his Q cleave into an armor-shredding team tool, and Spear of Shojin's spell-haste loop is his whole DPS engine. Rapid Firecannon closes with the siege range his artillery-adjacent late game abuses. Survive to 225 stacks and the game ends itself.",
      sideItems:["Rapid Firecannon","Serylda's Grudge","Lord Dominik's Regards","Bloodthirster","Guardian Angel","Immortal Shieldbow"],
      data:{
        JUGGERNAUT:{ahead:[I("Black Cleaver","Q cleave shreds their armor every cast."),I("Spear of Shojin","Haste loop means endless kiting damage."),I("Serylda's Grudge","Pen + slow keeps them permanently off you.")],behind:[I("Rapid Firecannon","Range to farm stacks outside their reach."),I("Guardian Angel","Insurance when they finally connect."),I("Bloodthirster","Sustain the chip war.")],runes:{...SMOLDER_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Essence Reaver","W-E spam melts them mid-engage."),I("Spear of Shojin","Haste keeps the disengage spells up."),I("Rapid Firecannon","Range denies the dive angle entirely.")],behind:[I("Guardian Angel","Second life against the inevitable dive."),I("Immortal Shieldbow","Lifeline shield mid-engage."),I("Rapid Firecannon","Stack from dive-proof distance.")],runes:{...SMOLDER_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Rapid Firecannon","Poke from outside their engage range."),I("Guardian Angel","Punish the all-in with a revive."),I("Spear of Shojin","E is always up to fly away.")],behind:[I("Guardian Angel","Rush — trade the one-shot and come back."),I("Immortal Shieldbow","Shield floor under their burst."),I("Rapid Firecannon","Never be in their jump range.")],runes:{...SMOLDER_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Spear of Shojin","Kite-DPS loop wins the duel they can't end."),I("Black Cleaver","Shred through their bruiser items."),I("Bloodthirster","Sustain their damage windows.")],behind:[I("Guardian Angel","Insurance in the duel you can't refuse."),I("Immortal Shieldbow","Lifeline vs their all-in."),I("Rapid Firecannon","Kite from further out.")],runes:{...SMOLDER_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Essence Reaver","Out-DPS them in their cooldown gap."),I("Rapid Firecannon","Outrange the combo entirely."),I("Bloodthirster","Shield passive blunts the poke.")],behind:[I("Immortal Shieldbow","Shield eats the burst rotation."),I("Guardian Angel","Survive the one combo."),I("Rapid Firecannon","Stack from combo-proof range.")],runes:{...SMOLDER_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Spear of Shojin","Out-DPS their drain from range."),I("Black Cleaver","Q cleave through their HP items."),I("Bloodthirster","Sustain through the zone chip.")],behind:[I("Immortal Shieldbow","Lifeline under sustained damage."),I("Guardian Angel","Survive the ramped window."),I("Rapid Firecannon","Kite outside the drain zone.")],runes:{...SMOLDER_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rapid Firecannon","Win the range war with charged siege pokes."),I("Essence Reaver","Mana to match their poke volume."),I("Spear of Shojin","Haste out-cycles their cooldowns.")],behind:[I("Immortal Shieldbow","Shield eats the poke spike."),I("Guardian Angel","Covers the forced engage."),I("Bloodthirster","Sustain the chip war.")],runes:{...SMOLDER_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Black Cleaver","Q cleave out-trades their single-target autos."),I("Spear of Shojin","Spell DPS beats auto DPS at even items."),I("Lord Dominik's Regards","Shred their armor buys.")],behind:[I("Guardian Angel","Survive their focus, burn the aftermath."),I("Immortal Shieldbow","Lifeline in the 2v2."),I("Rapid Firecannon","Stack from outside their range.")],runes:{...SMOLDER_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Spear of Shojin","Sustained burn out-values shield cycles."),I("Black Cleaver","Shred through the protected frontline."),I("Serylda's Grudge","Pen + slow through the peel.")],behind:[I("Bloodthirster","Enter the sustain war yourself."),I("Guardian Angel","Survive the buffed carry."),I("Rapid Firecannon","Poke over the shield wall.")],runes:{...SMOLDER_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rapid Firecannon","Stack and poke from outside hook range."),I("Essence Reaver","Punish every whiff with a Q volley."),I("Spear of Shojin","E always up to dodge the angle.")],behind:[I("Guardian Angel","Survive the caught scenario."),I("Immortal Shieldbow","Shield the follow-up burst."),I("Rapid Firecannon","Never enter hook range at all.")],runes:{...SMOLDER_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Q cleave shreds the whole engage line."),I("Lord Dominik's Regards","Giant slayer through their HP."),I("Rapid Firecannon","Poke them down before they ever engage.")],behind:[I("Lord Dominik's Regards","Required pen vs stacked armor."),I("Guardian Angel","Survive the wombo."),I("Immortal Shieldbow","Lifeline through the chain CC.")],runes:{...SMOLDER_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Serylda's Grudge","Pen + slow cracks the peel wall."),I("Black Cleaver","Shred stacks on the tank protecting them."),I("Spear of Shojin","DPS volume eventually breaks any mitigation.")],behind:[I("Lord Dominik's Regards","Mandatory vs their armor stack."),I("Guardian Angel","Insurance into the peel wall."),I("Bloodthirster","Sustain the attrition siege.")],runes:{...SMOLDER_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Rapid Firecannon","Range answers most gimmick kits."),I("Essence Reaver","Spell-spam DPS through the tricks."),I("Spear of Shojin","Haste loop out-cycles setups.")],behind:[I("Guardian Angel","Survive the setup you can't scout."),I("Immortal Shieldbow","Lifeline vs surprise burst."),I("Rapid Firecannon","Stack from safety meanwhile.")],runes:{...SMOLDER_BOT_DEFAULT_RUNES}},
      },
    },
  },
};
