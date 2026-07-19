import { I } from "../runeHelpers.js";

const ALISTAR_SUP_DEFAULT_RUNES = {
  keystone:       "Aftershock",
  primary:        "Resolve",
  primaryRunes:   ["Font of Life","Bone Plating","Unflinching"],
  secondary:      "Inspiration",
  secondaryRunes: ["Hextech Flashtraption","Cosmic Insight"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Aftershock triggers instantly off Headbutt-into-Pulverize, giving Alistar bonus resistances right as he becomes the fight's focus after knocking a target into his own team. Font of Life heals the ADC off that combo's CC; Bone Plating and Unflinching (swap for Second Wind vs poke, Overgrowth vs no-CC lanes) round out survivability. Hextech Flashtraption enables long-range surprise engages; Cosmic Insight speeds up the Headbutt/Pulverize combo's cooldown.",
};

// ══════════════════════════════════════════════════════════════════════════
//  ALISTAR — Vanguard / Knock-Up Engage
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"alistar", display:"Alistar", dd:"Alistar",
  color:"#5a2a1a", glow:"#c06040",
  lanes:["Support"],
  roles:{
    Support:{
      bans:["Morgana","Xerath","Nautilus"], replacements:["Thresh","Leona","Zac"],
      role:"Vanguard / Knock-Up Engage",
      corePath:"Boots of Swiftness  ›  Locket of the Iron Solari  ›  Zeke's Convergence  ›  Frozen Heart",
      coreNote:"Alistar plays for a guaranteed combo engage — Headbutt shoves a target into his team, Pulverize knocks them up, and Unbreakable Will lets him tank the counter-engage without dying. Boots of Swiftness gets him into combo range faster; Locket adds team-wide burst mitigation right as the knock-up lands; Zeke's Convergence and Frozen Heart both amplify the follow-up and round out his tank stats.",
      sideItems:["Knight's Vow","Redemption","Mercury's Treads","Randuin's Omen","Thornmail","Force of Nature"],
      data:{
        JUGGERNAUT:{ahead:[I("Zeke's Convergence","Amplify damage after your combo lands."),I("Locket of the Iron Solari","Shield vs their walk-down."),I("Knight's Vow","Protect your carry while you soak.")],behind:[I("Plated Steelcaps","Reduces auto damage vs their press."),I("Knight's Vow","Share damage taken."),I("Frozen Heart","AS slow blunts their DPS.")],runes:{...ALISTAR_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Boots of Swiftness","Reach combo range before their dive angle sets up."),I("Locket of the Iron Solari","Shield absorbs their dive opener."),I("Frozen Heart","AS slow blunts their follow-up.")],behind:[I("Knight's Vow","Share damage so your ADC survives the dive."),I("Mercury's Treads","Shorter CC on their engage."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...ALISTAR_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield eats the opener before it lands on your ADC."),I("Zeke's Convergence","Punish their commit with amplified damage."),I("Force of Nature","MR + move speed vs AP assassins.")],behind:[I("Knight's Vow","Share the burst that would otherwise one-shot your ADC."),I("Mercury's Treads","Reduce the CC that opens their combo."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...ALISTAR_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Frozen Heart","AS slow shuts down the duelist."),I("Zeke's Convergence","Amplify ADC damage in the 2v2."),I("Knight's Vow","Share damage in the skirmish.")],behind:[I("Knight's Vow","Share damage so your ADC survives the duel."),I("Randuin's Omen","Crit reduction."),I("Frozen Heart","AS slow blunts the duel.")],runes:{...ALISTAR_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Mercury's Treads","Reduce CC chains — enables your own engage."),I("Locket of the Iron Solari","Shield through their combo."),I("Zeke's Convergence","Punish damage after they burst.")],behind:[I("Mercury's Treads","Shorter CC before their combo lands on your ADC."),I("Knight's Vow","Share the burst damage."),I("Force of Nature","MR stack vs sustained casting.")],runes:{...ALISTAR_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Force of Nature","Shrugs off their sustained magic damage."),I("Knight's Vow","Share damage through the drain."),I("Zeke's Convergence","Amplify the punish.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Knight's Vow","Share the damage in the extended fight."),I("Randuin's Omen","Survivability into their sustained DPS.")],runes:{...ALISTAR_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Boots of Swiftness","Reach combo range before the poke wins the lane."),I("Locket of the Iron Solari","Shields your ADC from poke chip."),I("Mercury's Treads","Reduce CC duration from range.")],behind:[I("Mercury's Treads","Reduce CC duration."),I("Redemption","Offsets accumulated poke damage."),I("Locket of the Iron Solari","Shield layer.")],runes:{...ALISTAR_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Zeke's Convergence","Amplify your ADC's damage after the combo lands — Alistar's whole kit enables this."),I("Knight's Vow","Share damage output."),I("Locket of the Iron Solari","Shield in the poke war.")],behind:[I("Knight's Vow","Non-negotiable — protect your carry."),I("Randuin's Omen","Crit reduction vs their DPS."),I("Plated Steelcaps","Flat auto reduction.")],runes:{...ALISTAR_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Frozen Heart","AS slow reduces their poke/heal uptime."),I("Zeke's Convergence","Amplify damage past their sustain."),I("Locket of the Iron Solari","Shield war.")],behind:[I("Locket of the Iron Solari","Core defensive value."),I("Knight's Vow","Share damage in the sustain war."),I("Force of Nature","Anti-AP if they poke hard.")],runes:{...ALISTAR_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Boots of Swiftness","Land your own engage before they can hook."),I("Zeke's Convergence","Amplify the punish after you land your CC."),I("Locket of the Iron Solari","Shield vs pick attempts.")],behind:[I("Mercury's Treads","Mandatory — a caught Alistar loses the whole engage plan."),I("Knight's Vow","Share damage if caught."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...ALISTAR_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Frozen Heart","Reduce their engage tempo with AS slow."),I("Zeke's Convergence","Amplify your team's counter-engage."),I("Knight's Vow","Share damage during their initiation.")],behind:[I("Mercury's Treads","Shorter stuns from their engage chain."),I("Knight's Vow","Share damage during the engage."),I("Force of Nature","MR vs Malphite/Gragas AP damage.")],runes:{...ALISTAR_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Zeke's Convergence","Amplify ADC damage past their body-block."),I("Frozen Heart","AS slow blunts their peel value."),I("Knight's Vow","Share damage in the peel war.")],behind:[I("Knight's Vow","Share damage through the extended peel war."),I("Force of Nature","MR vs Galio/K'Sante AP damage."),I("Randuin's Omen","Crit reduction if paired with a marksman.")],runes:{...ALISTAR_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Mercury's Treads","Teemo blind, Kennen stun — land your own CC first."),I("Locket of the Iron Solari","Shield through their poke/kit."),I("Zeke's Convergence","Amplify damage in skirmishes.")],behind:[I("Force of Nature","Counters AP specialists (Teemo, Kennen)."),I("Mercury's Treads","Reduce blind/stun duration."),I("Knight's Vow","Share damage while you figure out the matchup.")],runes:{...ALISTAR_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
