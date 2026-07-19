import { I } from "../runeHelpers.js";

const SENNA_DEFAULT_RUNES = {
  keystone:       "Deathfire Touch",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Celerity","Gathering Storm"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Jack Of All Trades"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Deathfire Touch works extremely well on Senna — Piercing Darkness marks a primary target for single-target burn while everyone else nearby eats the AoE burn. Celerity is the standout pick in this row, since her whole kit revolves around staying in the perfect spot to soul-harvest for stacks while remaining safe, and it amplifies the bonus move speed her passive already grants. Magical Footwear covers the boots slot for free economy; Jack Of All Trades converts her varied item stats into more Adaptive Force.",
};

// ══════════════════════════════════════════════════════════════════════════
//  SENNA — Marksman / Soul-Harvest Dual-Role Carry
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"senna", display:"Senna", dd:"Senna",
  color:"#3a2a4a", glow:"#c090e8",
  lanes:["Support","Bot"],
  roles:{
    Support:{
      bans:["Blitzcrank","Pyke","Nautilus"], replacements:["Thresh","Leona","Zac"],
      role:"Soul-Harvest Poke Enchanter",
      corePath:"Bloodsong  ›  Boots of Swiftness  ›  Black Cleaver  ›  Statikk Shiv",
      coreNote:"Support Senna plays for relentless soul-harvest poke — Piercing Darkness pokes and heals through allies, Last Embrace roots from range, and every soul collected converts into permanent AD, range, and lifesteal. Bloodsong rewards her poke-and-proc rhythm early; Black Cleaver shreds armor for her Q; Statikk Shiv and Rapid Firecannon both extend her effective range and wave-clear.",
      sideItems:["Rapid Firecannon","Guardian Angel","Mercury's Treads","Mikael's Blessing","Redemption","Locket of the Iron Solari"],
      data:{
        JUGGERNAUT:{ahead:[I("Black Cleaver","Shred cuts through their stacking while Q burns."),I("Bloodsong","Proc damage adds up over the poke war."),I("Statikk Shiv","Wave clear + proc damage.")],behind:[I("Guardian Angel","Second life vs their walk-down."),I("Mercury's Treads","Shorter CC before the kill."),I("Locket of the Iron Solari","Shield covers the press.")],runes:{...SENNA_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rapid Firecannon","Range + slow kites the dive."),I("Statikk Shiv","Proc damage punishes the failed dive."),I("Locket of the Iron Solari","Shield absorbs the opening burst.")],behind:[I("Locket of the Iron Solari","Shield is your lifeline behind."),I("Mercury's Treads","Shorter CC on their engage."),I("Guardian Angel","Second life.")],runes:{...SENNA_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield eats their burst opener."),I("Statikk Shiv","Crit wins the trade first."),I("Mikael's Blessing","Cleanse the setup CC.")],behind:[I("Mikael's Blessing","Non-negotiable — cleanses the burst combo."),I("Guardian Angel","Deny the kill."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...SENNA_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rapid Firecannon","Range keeps the duelist at arm's length."),I("Black Cleaver","Shred wins the extended trade."),I("Bloodsong","Proc damage tips the auto-trade.")],behind:[I("Locket of the Iron Solari","Shield to survive the all-in."),I("Mikael's Blessing","Cleanse their all-in CC."),I("Mercury's Treads","Reduce their gap-close CC.")],runes:{...SENNA_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Mercury's Treads","Reduce CC chains before their combo."),I("Locket of the Iron Solari","Shield through the combo."),I("Mikael's Blessing","Cleanse the setup CC.")],behind:[I("Mikael's Blessing","Mandatory — cleanses the combo opener."),I("Mercury's Treads","Shorten CC duration."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...SENNA_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Redemption","Sustain your lane through their drain war."),I("Black Cleaver","Shred wins the drain war."),I("Statikk Shiv","Proc damage adds up.")],behind:[I("Redemption","Global healing offsets their sustained damage."),I("Mikael's Blessing","Cleanse their key CC."),I("Locket of the Iron Solari","Shield war.")],runes:{...SENNA_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Rapid Firecannon","Range wins the poke war."),I("Redemption","Offsets the poke over time.")],behind:[I("Redemption","Global heal counters accumulated chip."),I("Mercury's Treads","Reduce CC duration."),I("Locket of the Iron Solari","Shield layer.")],runes:{...SENNA_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Statikk Shiv","Amplify your ADC's damage output alongside your own."),I("Bloodsong","Proc damage in the trade."),I("Locket of the Iron Solari","Shield in the poke war.")],behind:[I("Locket of the Iron Solari","Non-negotiable — protect your carry."),I("Mikael's Blessing","Cleanse the setup CC on your ADC."),I("Redemption","Offsets the deficit.")],runes:{...SENNA_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Black Cleaver","Shred negates their sustain package."),I("Bloodsong","Proc damage past their heal economy."),I("Statikk Shiv","Poke pressure denies their sustain package.")],behind:[I("Locket of the Iron Solari","Shield war baseline."),I("Redemption","Global heal offsets theirs."),I("Mikael's Blessing","Cleanse their key CC.")],runes:{...SENNA_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mikael's Blessing","Cleanse hooks before the follow-up."),I("Locket of the Iron Solari","Shield vs pick attempts."),I("Mercury's Treads","Dodge the hook range.")],behind:[I("Mikael's Blessing","Mandatory — cleanses a landed hook."),I("Mercury's Treads","Reduce CC duration."),I("Guardian Angel","Deny the pick's value.")],runes:{...SENNA_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their frontline stat for your whole team."),I("Mikael's Blessing","Cleanse their CC chain."),I("Locket of the Iron Solari","Shield through the engage.")],behind:[I("Mikael's Blessing","Cleanses the engage that would otherwise chain-CC your ADC."),I("Mercury's Treads","Shorter stuns from their initiation."),I("Locket of the Iron Solari","Shield layer.")],runes:{...SENNA_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Shred still opens Wardens up."),I("Rapid Firecannon","Range past their body-block."),I("Statikk Shiv","Amplify ADC damage past the body-block.")],behind:[I("Locket of the Iron Solari","Shield war."),I("Redemption","Global heal in the extended peel war."),I("Guardian Angel","Insurance.")],runes:{...SENNA_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Mercury's Treads","Teemo blind, Kennen stun — reduce both."),I("Locket of the Iron Solari","Shield through their poke/kit."),I("Bloodsong","Proc damage in skirmishes.")],behind:[I("Mercury's Treads","Shortens their key disable."),I("Mikael's Blessing","Cleanses burst setups."),I("Redemption","Global heal while you figure out the matchup.")],runes:{...SENNA_DEFAULT_RUNES}},
      },
    },
    Bot:{
      bans:["Draven","Samira","Kalista"], replacements:["Jinx","Caitlyn","Yunara"],
      role:"Soul-Harvest Crit Carry",
      corePath:"Statikk Shiv  ›  Black Cleaver  ›  Hexoptics C44  ›  Infinity Edge",
      coreNote:"ADC Senna plays the same soul-harvest identity as Support but built to carry the damage herself — same poke-and-collect pattern, just with a fuller crit-scaling item path since she isn't splitting resources with a support's utility items. Statikk Shiv adds wave clear the enchanter version skips; Black Cleaver shreds armor for her passive-empowered autos; Hexoptics C44 and Infinity Edge scale the crit into a real late-game DPS threat.",
      sideItems:["Boots of Swiftness","Guardian Angel","Mercury's Treads","Bloodthirster","Rapid Firecannon","Lord Dominik's Regards"],
      data:{
        JUGGERNAUT:{ahead:[I("Lord Dominik's Regards","Armor pen cuts through their stacked resists."),I("Black Cleaver","Shred adds up over the trade."),I("Infinity Edge","Crit damage wins the trade outright.")],behind:[I("Guardian Angel","Second life vs their walk-down."),I("Mercury's Treads","Shorter CC before the kill."),I("Bloodthirster","Shield + lifesteal to survive.")],runes:{...SENNA_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rapid Firecannon","Range + slow kites the dive."),I("Infinity Edge","Crit damage punishes the failed dive."),I("Bloodthirster","Shield absorbs the opening burst.")],behind:[I("Bloodthirster","Shield is your lifeline behind."),I("Mercury's Treads","Shorter CC on their engage."),I("Guardian Angel","Second life.")],runes:{...SENNA_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Bloodthirster","Shield eats their burst opener."),I("Infinity Edge","Crit wins the trade first."),I("Statikk Shiv","Proc damage adds up.")],behind:[I("Bloodthirster","Mandatory shield lifeline."),I("Guardian Angel","Deny the kill."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...SENNA_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rapid Firecannon","Range keeps the duelist at arm's length."),I("Infinity Edge","Crit damage wins the extended trade."),I("Black Cleaver","Shred tips the auto-trade.")],behind:[I("Bloodthirster","Shield to survive the all-in."),I("Mercury's Treads","Shorter CC on their gap-close."),I("Guardian Angel","Second life.")],runes:{...SENNA_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Bloodthirster","Shield through their combo."),I("Mercury's Treads","Reduce CC in their combo."),I("Rapid Firecannon","Range to poke back safely.")],behind:[I("Bloodthirster","Mandatory lifeline."),I("Mercury's Treads","Shorten CC duration."),I("Guardian Angel","Insurance.")],runes:{...SENNA_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Lord Dominik's Regards","MR-ignoring pen cuts through their scaling resists."),I("Infinity Edge","Crit edge wins the burst trade."),I("Black Cleaver","Shred wins the drain war.")],behind:[I("Mercury's Treads","Shorter CC to disengage."),I("Bloodthirster","Lifesteal to keep pace."),I("Guardian Angel","Insurance.")],runes:{...SENNA_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rapid Firecannon","Extra range wins the poke war."),I("Mercury's Treads","Reduce CC duration from range."),I("Infinity Edge","Crit edge wins once in range.")],behind:[I("Bloodthirster","Shield survives the poke on approach."),I("Mercury's Treads","Shorten their key CC from range."),I("Guardian Angel","Second life.")],runes:{...SENNA_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Infinity Edge","Crit war wins the mirror matchup outright."),I("Lord Dominik's Regards","Armor pen shreds their build."),I("Black Cleaver","Shred adds up.")],behind:[I("Bloodthirster","Shield vs their peel."),I("Mercury's Treads","Reduce CC duration."),I("Guardian Angel","Second life for a risky trade.")],runes:{...SENNA_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Lord Dominik's Regards","Pen cuts through their shields to real HP."),I("Infinity Edge","Crit edge burst through the peel."),I("Black Cleaver","Shred negates their sustain package.")],behind:[I("Bloodthirster","Lifesteal outlasts their sustain package."),I("Mercury's Treads","Reduce their disengage CC."),I("Guardian Angel","Insurance.")],runes:{...SENNA_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Bloodthirster","Shield eats a hook's follow-up."),I("Infinity Edge","Crit edge punishes a whiffed hook."),I("Rapid Firecannon","Range keeps you out of hook threat.")],behind:[I("Mercury's Treads","Shorter root/bind duration."),I("Bloodthirster","Shield if caught."),I("Guardian Angel","Deny the pick's value.")],runes:{...SENNA_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Pen matters past their tank stats."),I("Black Cleaver","Shred through their frontline."),I("Infinity Edge","Crit edge still relevant past the engage.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Second life."),I("Bloodthirster","Lifesteal through the initiation.")],runes:{...SENNA_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Pen matters vs stacked-resist Wardens."),I("Black Cleaver","Shred bypasses their mitigation."),I("Infinity Edge","Crit edge past their shields.")],behind:[I("Lord Dominik's Regards","Only reliable damage vs stacked resists."),I("Bloodthirster","Lifesteal survives their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...SENNA_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Infinity Edge","Crit edge ends the fight before their kit matters."),I("Rapid Firecannon","Range keeps you ahead of kiting specialists."),I("Black Cleaver","Shred finishes squishy specialists caught close.")],behind:[I("Mercury's Treads","Teemo blind/Kennen stun — shorten both."),I("Bloodthirster","Shield vs burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...SENNA_DEFAULT_RUNES}},
      },
    },
  },
};
