import { I } from "../runeHelpers.js";

const TRISTANA_BOT_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Cut Down"],
  secondary:      "Inspiration",
  secondaryRunes: ["Cash Back","Triple Tonic"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Lethal Tempo is Tristana's best keystone since its damage scales heavily with attack speed, and Rapid Fire provides a massive steroid to ramp it up quickly. Triumph and Legend: Alacrity fund the ramp and add sustain. Cash Back speeds up her item spike; Triple Tonic adds early sustain. Cut Down punishes tanks who'd otherwise soak her explosive-charge damage.",
};

// ══════════════════════════════════════════════════════════════════════════
//  TRISTANA — Marksman / Attack-Speed Explosive Carry
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"tristana", display:"Tristana", dd:"Tristana",
  color:"#c06a1a", glow:"#f0a840",
  lanes:["Bot"],
  roles:{
    Bot:{
      bans:["Draven","Samira","Kalista"], replacements:["Jinx","Caitlyn","Yunara"],
      role:"Marksman / Attack-Speed Explosive Carry",
      corePath:"Hexoptics C44  ›  Navori Flickerblade  ›  Infinity Edge  ›  Lord Dominik's Regards",
      coreNote:"Tristana plays for an attack-speed ramp into a point-blank Buster Shot execute — Rapid Fire stacks attack speed, Explosive Charge detonates for bonus damage, and Rocket Jump both engages and escapes. Hexoptics C44 leads the build for early scaling; Navori Flickerblade lowers Rocket Jump's cooldown; Infinity Edge and Lord Dominik's Regards scale the crit into a real DPS threat.",
      sideItems:["Berserker's Greaves","Guardian Angel","Mercury's Treads","Bloodthirster","Rapid Firecannon","Wit's End"],
      data:{
        JUGGERNAUT:{ahead:[I("Lord Dominik's Regards","Armor pen cuts through their stacked resists."),I("Navori Flickerblade","Haste means more Rocket Jump resets."),I("Infinity Edge","Crit damage wins the trade outright.")],behind:[I("Guardian Angel","Second life vs their walk-down."),I("Mercury's Treads","Shorter CC before the kill."),I("Bloodthirster","Shield + lifesteal to survive.")],runes:{...TRISTANA_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Navori Flickerblade","Rocket Jump resets punish the failed dive."),I("Infinity Edge","Crit damage punishes the failed dive."),I("Bloodthirster","Shield absorbs the opening burst.")],behind:[I("Bloodthirster","Shield is your lifeline behind."),I("Mercury's Treads","Shorter CC on their engage."),I("Guardian Angel","Second life (Rocket Jump escapes the follow-up).")],runes:{...TRISTANA_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Bloodthirster","Shield eats their burst opener."),I("Infinity Edge","Crit wins the trade first."),I("Navori Flickerblade","Rocket Jump resets punish their commit.")],behind:[I("Bloodthirster","Mandatory shield lifeline."),I("Guardian Angel","Deny the kill."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...TRISTANA_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rapid Firecannon","Range keeps the duelist at arm's length."),I("Infinity Edge","Crit damage wins the extended trade."),I("Navori Flickerblade","Haste for more Rocket Jump resets.")],behind:[I("Bloodthirster","Shield to survive the all-in."),I("Mercury's Treads","Shorter CC on their gap-close."),I("Guardian Angel","Second life.")],runes:{...TRISTANA_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Bloodthirster","Shield through their combo."),I("Mercury's Treads","Reduce CC in their combo."),I("Navori Flickerblade","Rocket Jump escapes the combo.")],behind:[I("Bloodthirster","Mandatory lifeline."),I("Mercury's Treads","Shorten CC duration."),I("Guardian Angel","Insurance.")],runes:{...TRISTANA_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Lord Dominik's Regards","MR-ignoring pen cuts through their scaling resists."),I("Infinity Edge","Crit edge wins the burst trade."),I("Wit's End","MR + on-hit wins the drain war.")],behind:[I("Mercury's Treads","Shorter CC to disengage."),I("Bloodthirster","Lifesteal to keep pace."),I("Guardian Angel","Insurance.")],runes:{...TRISTANA_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Navori Flickerblade","Rocket Jump closes the poke-war gap faster."),I("Mercury's Treads","Reduce CC duration from range."),I("Infinity Edge","Crit edge wins once in range.")],behind:[I("Bloodthirster","Shield survives the poke on approach."),I("Mercury's Treads","Shorten their key CC from range."),I("Guardian Angel","Second life.")],runes:{...TRISTANA_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Infinity Edge","Crit war wins the mirror matchup outright."),I("Lord Dominik's Regards","Armor pen shreds their build."),I("Navori Flickerblade","Rocket Jump engages decide the lane.")],behind:[I("Bloodthirster","Shield vs their peel."),I("Mercury's Treads","Reduce CC duration."),I("Guardian Angel","Second life for a risky trade.")],runes:{...TRISTANA_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Lord Dominik's Regards","Pen cuts through their shields to real HP."),I("Infinity Edge","Crit edge burst through the peel."),I("Wit's End","On-hit ignores shields over time.")],behind:[I("Bloodthirster","Lifesteal outlasts their sustain package."),I("Mercury's Treads","Reduce their disengage CC."),I("Guardian Angel","Insurance.")],runes:{...TRISTANA_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Navori Flickerblade","Rocket Jump dodges hooks entirely."),I("Infinity Edge","Crit edge punishes a whiffed hook."),I("Rapid Firecannon","Range keeps you out of hook threat.")],behind:[I("Mercury's Treads","Shorter root/bind duration."),I("Bloodthirster","Shield if caught."),I("Guardian Angel","Deny the pick's value.")],runes:{...TRISTANA_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Pen matters past their tank stats."),I("Navori Flickerblade","Rocket Jump repositions past the engage."),I("Infinity Edge","Crit edge still relevant.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Second life."),I("Bloodthirster","Lifesteal through the initiation.")],runes:{...TRISTANA_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Pen matters vs stacked-resist Wardens."),I("Wit's End","On-hit bypasses their mitigation over time."),I("Infinity Edge","Crit edge past their shields.")],behind:[I("Lord Dominik's Regards","Only reliable damage vs stacked resists."),I("Bloodthirster","Lifesteal survives their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...TRISTANA_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Infinity Edge","Crit edge ends the fight before their kit matters."),I("Navori Flickerblade","Rocket Jump keeps you ahead of kiting specialists."),I("Rapid Firecannon","Range extension seals the deal.")],behind:[I("Mercury's Treads","Teemo blind/Kennen stun — shorten both."),I("Bloodthirster","Shield vs burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...TRISTANA_BOT_DEFAULT_RUNES}},
      },
    },
  },
};
