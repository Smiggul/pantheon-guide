import { I } from "../runeHelpers.js";

const THRESH_SUP_DEFAULT_RUNES = {
  keystone:       "Aftershock",
  primary:        "Resolve",
  primaryRunes:   ["Font of Life","Bone Plating","Unflinching"],
  secondary:      "Inspiration",
  secondaryRunes: ["Biscuit Delivery","Cosmic Insight"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Aftershock triggers the instant your hook or Flay lands, giving burst resistance right as you become the fight's focus. Font of Life heals your ADC for a share of the target's max HP whenever your CC connects; Bone Plating blunts the return burst and Unflinching keeps your tenacity/resists up while you body-block for the carry. Inspiration secondary is the live standard — Biscuit Delivery solves the mana/sustain of a poke lane and Cosmic Insight shaves cooldowns off Flay, lantern and summoners for more plays.",
};

// ══════════════════════════════════════════════════════════════════════════
//  THRESH — Catcher / Engage-Peel
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"thresh", display:"Thresh", dd:"Thresh",
  color:"#2c3e50", glow:"#f0e68c",
  lanes:["Support"],
  roles:{
    Support:{
      bans:["Sona","Renata Glasc","Taric"], replacements:["Nautilus","Blitzcrank","Pantheon"],
      role:"Catcher / Engage-Peel",
      corePath:"Locket of the Iron Solari  ›  Knight's Vow  ›  Zeke's Convergence  ›  Frozen Heart",
      coreNote:"Thresh plays for picks and disengage. Locket first for early shielding and lane presence; Knight's Vow ties you to your ADC's damage output; Zeke's amplifies their crit/on-hit the instant your hook lands. Everything else follows from landing Death Sentence.",
      sideItems:["Mercury's Treads","Plated Steelcaps","Randuin's Omen","Force of Nature","Redemption","Abyssal Mask"],
      data:{
        JUGGERNAUT:{ahead:[I("Knight's Vow","Share damage taken to protect your ADC from the walk-down."),I("Locket of the Iron Solari","Shield covers the engage window."),I("Zeke's Convergence","Amplify your ADC's damage after the flay peel.")],behind:[I("Plated Steelcaps","Reduces auto damage vs their press."),I("Randuin's Omen","Crit/AS reduction if they build offense."),I("Frozen Heart","AS slow blunts their DPS.")],runes:{...THRESH_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Locket of the Iron Solari","Shield absorbs the dive's opening burst."),I("Zeke's Convergence","Amplify the counter-engage from Flay."),I("Knight's Vow","Share damage during the skirmish.")],behind:[I("Knight's Vow","Share the burst so your ADC survives the dive."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Mercury's Treads","Shorter CC on the engage.")],runes:{...THRESH_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield eats the opener before it lands on your ADC."),I("Zeke's Convergence","Amplify the punish once you flay them off."),I("Randuin's Omen","Crit reduction if they're AD-based.")],behind:[I("Knight's Vow","Share the burst that would otherwise one-shot your ADC."),I("Mercury's Treads","Reduce the CC that opens their combo."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...THRESH_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Zeke's Convergence","Amplify ADC damage in the 2v2 skirmish."),I("Knight's Vow","Share damage taken in the duel."),I("Frozen Heart","AS slow shuts down the duelist.")],behind:[I("Knight's Vow","Share damage so your ADC survives."),I("Plated Steelcaps","Flat reduction vs auto-heavy champs."),I("Randuin's Omen","Crit reduction.")],runes:{...THRESH_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Mercury's Treads","Reduce CC chains — enables your own engage."),I("Locket of the Iron Solari","Shield through their combo."),I("Zeke's Convergence","Amplify punish damage after they burst.")],behind:[I("Mercury's Treads","Shorter CC before their combo lands on your ADC."),I("Knight's Vow","Share the burst damage."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...THRESH_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Force of Nature","Shrugs off their sustained magic damage."),I("Knight's Vow","Share the drain damage."),I("Locket of the Iron Solari","Shield through the fight.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Knight's Vow","Share the damage in the extended fight."),I("Abyssal Mask","MR + damage amp vs their kit.")],runes:{...THRESH_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Locket of the Iron Solari","Shields your ADC from poke chip."),I("Zeke's Convergence","Amplify damage once you close the gap.")],behind:[I("Force of Nature","MR + move speed vs sustained poke."),I("Mercury's Treads","Reduce CC duration."),I("Redemption","Global heal offsets accumulated chip damage.")],runes:{...THRESH_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Knight's Vow","Share damage output so your ADC out-trades theirs."),I("Zeke's Convergence","Amplify your ADC's crit/on-hit."),I("Locket of the Iron Solari","Shield in the poke war.")],behind:[I("Knight's Vow","Non-negotiable — protect your carry."),I("Randuin's Omen","Crit reduction vs their DPS."),I("Plated Steelcaps","Flat auto reduction.")],runes:{...THRESH_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Frozen Heart","AS slow reduces their poke/heal uptime."),I("Zeke's Convergence","Amplify damage past their sustain."),I("Locket of the Iron Solari","Shield war.")],behind:[I("Locket of the Iron Solari","Core defensive value."),I("Knight's Vow","Share damage in the sustain war."),I("Force of Nature","Anti-AP if they poke hard.")],runes:{...THRESH_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge their hook so you land yours first."),I("Locket of the Iron Solari","Shield vs pick attempts."),I("Zeke's Convergence","Amplify the punish after you land your own hook.")],behind:[I("Mercury's Treads","Mandatory — a caught Thresh loses the whole engage plan."),I("Knight's Vow","Share damage if caught."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...THRESH_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Frozen Heart","Reduce their engage tempo with the AS slow."),I("Knight's Vow","Share damage taken during their initiation."),I("Zeke's Convergence","Amplify your team's counter-engage.")],behind:[I("Mercury's Treads","Shorter stuns from their engage chain."),I("Knight's Vow","Share damage during the engage."),I("Force of Nature","MR vs Malphite/Gragas AP damage.")],runes:{...THRESH_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Zeke's Convergence","Amplify ADC damage past their body-block."),I("Frozen Heart","AS slow blunts their peel value."),I("Knight's Vow","Share damage in the peel war.")],behind:[I("Knight's Vow","Share damage through the extended peel war."),I("Force of Nature","MR vs Galio/K'Sante AP damage."),I("Randuin's Omen","Crit reduction if paired with a marksman.")],runes:{...THRESH_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Mercury's Treads","Teemo blind, Kennen stun — land your hook first."),I("Locket of the Iron Solari","Shield through their poke/kit."),I("Zeke's Convergence","Amplify damage in skirmishes.")],behind:[I("Force of Nature","Counters AP specialists (Teemo, Kennen)."),I("Mercury's Treads","Reduce blind/stun duration."),I("Knight's Vow","Share damage while you figure out the matchup.")],runes:{...THRESH_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
