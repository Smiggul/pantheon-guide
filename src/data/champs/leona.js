import { I } from "../runeHelpers.js";

const LEONA_SUP_DEFAULT_RUNES = {
  keystone:       "Aftershock",
  primary:        "Resolve",
  primaryRunes:   ["Font of Life","Bone Plating","Unflinching"],
  secondary:      "Inspiration",
  secondaryRunes: ["Biscuit Delivery","Cosmic Insight"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Leona scales the best with Aftershock out of any engage support — it triggers the instant Shield of Daybreak or Solar Flare lands, giving immediate burst resistance as you become the fight's focus. Font of Life heals your ADC when your CC connects; Bone Plating survives the return trade after an all-in engage and Unflinching keeps tenacity/resists up while you're locking down their carry. Inspiration secondary — Biscuit Delivery for lane sustain and Cosmic Insight for lower Solar Flare + summoner cooldowns (more engage windows).",
};

// ══════════════════════════════════════════════════════════════════════════
//  LEONA — Vanguard / Hard Engage
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"leona", display:"Leona", dd:"Leona",
  color:"#d4af37", glow:"#f0d060",
  lanes:["Support"],
  roles:{
    Support:{
      bans:["Taric","Nami","Milio"], replacements:["Nautilus","Braum","Rakan"],
      role:"Vanguard / Hard Engage",
      corePath:"Locket of the Iron Solari  ›  Knight's Vow  ›  Zeke's Convergence  ›  Frozen Heart",
      coreNote:"Leona plays for chain-CC engages. Locket adds early shielding to survive lane aggression; Zeke's amplifies your ADC's damage the instant your stun chain lands; Frozen Heart and Thornmail round out durability and GW for diving repeatedly.",
      sideItems:["Mercury's Treads","Plated Steelcaps","Knight's Vow","Randuin's Omen","Abyssal Mask","Redemption","Force of Nature"],
      data:{
        JUGGERNAUT:{ahead:[I("Zeke's Convergence","Amplify damage after your stun chain lands."),I("Locket of the Iron Solari","Shield vs their walk-down."),I("Knight's Vow","Protect your carry while you soak.")],behind:[I("Plated Steelcaps","Reduces auto damage vs their press."),I("Knight's Vow","Share damage taken."),I("Frozen Heart","AS slow blunts their DPS.")],runes:{...LEONA_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Locket of the Iron Solari","Shield absorbs their dive opener."),I("Zeke's Convergence","Amplify the counter-engage."),I("Frozen Heart","AS slow blunts their follow-up.")],behind:[I("Knight's Vow","Share damage so your ADC survives the dive."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Mercury's Treads","Shorter CC on their engage.")],runes:{...LEONA_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield eats the opener before it lands on your ADC."),I("Zeke's Convergence","Punish their commit with amplified damage."),I("Abyssal Mask","MR + damage amp vs AP assassins.")],behind:[I("Knight's Vow","Share the burst that would otherwise one-shot your ADC."),I("Mercury's Treads","Reduce the CC that opens their combo."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...LEONA_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Frozen Heart","AS slow shuts down the duelist."),I("Zeke's Convergence","Amplify ADC damage in the 2v2."),I("Knight's Vow","Share damage in the skirmish.")],behind:[I("Knight's Vow","Share damage so your ADC survives the duel."),I("Plated Steelcaps","Flat reduction vs auto-heavy champs."),I("Randuin's Omen","Crit reduction.")],runes:{...LEONA_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Mercury's Treads","Reduce CC chains — enables your own engage."),I("Locket of the Iron Solari","Shield through their combo."),I("Zeke's Convergence","Punish damage after they burst.")],behind:[I("Mercury's Treads","Shorter CC before their combo lands on your ADC."),I("Knight's Vow","Share the burst damage."),I("Abyssal Mask","MR + damage amp if focused.")],runes:{...LEONA_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Force of Nature","Shrugs off their sustained magic damage."),I("Knight's Vow","Share damage through the drain."),I("Zeke's Convergence","Amplify the punish.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Knight's Vow","Share the damage in the extended fight."),I("Abyssal Mask","MR + damage amp vs their kit.")],runes:{...LEONA_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Locket of the Iron Solari","Shields your ADC from poke chip."),I("Redemption","Offsets accumulated poke damage.")],behind:[I("Force of Nature","MR + move speed vs sustained poke."),I("Mercury's Treads","Reduce CC duration."),I("Redemption","Global heal offsets the chip.")],runes:{...LEONA_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Zeke's Convergence","Amplify your ADC's damage after the stun chain — Leona's whole kit enables this."),I("Knight's Vow","Share damage output."),I("Locket of the Iron Solari","Shield in the poke war.")],behind:[I("Knight's Vow","Non-negotiable — protect your carry."),I("Randuin's Omen","Crit reduction vs their DPS."),I("Plated Steelcaps","Flat auto reduction.")],runes:{...LEONA_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Frozen Heart","AS slow reduces their poke/heal uptime."),I("Zeke's Convergence","Amplify damage past their sustain."),I("Locket of the Iron Solari","Shield war.")],behind:[I("Locket of the Iron Solari","Core defensive value."),I("Knight's Vow","Share damage in the sustain war."),I("Force of Nature","Anti-AP if they poke hard.")],runes:{...LEONA_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge their hook so you land your own engage first."),I("Zeke's Convergence","Amplify the punish after you land your CC."),I("Locket of the Iron Solari","Shield vs pick attempts.")],behind:[I("Mercury's Treads","Mandatory — a caught Leona loses the whole engage plan."),I("Knight's Vow","Share damage if caught."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...LEONA_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Frozen Heart","Reduce their engage tempo with the AS slow."),I("Zeke's Convergence","Amplify your team's counter-engage."),I("Knight's Vow","Share damage during their initiation.")],behind:[I("Mercury's Treads","Shorter stuns from their engage chain."),I("Knight's Vow","Share damage during the engage."),I("Force of Nature","MR vs Malphite/Gragas AP damage.")],runes:{...LEONA_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Zeke's Convergence","Amplify ADC damage past their body-block."),I("Frozen Heart","AS slow blunts their peel value."),I("Knight's Vow","Share damage in the peel war.")],behind:[I("Knight's Vow","Share damage through the extended peel war."),I("Force of Nature","MR vs Galio/K'Sante AP damage."),I("Randuin's Omen","Crit reduction if paired with a marksman.")],runes:{...LEONA_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Mercury's Treads","Teemo blind, Kennen stun — land your own CC first."),I("Locket of the Iron Solari","Shield through their poke/kit."),I("Zeke's Convergence","Amplify damage in skirmishes.")],behind:[I("Force of Nature","Counters AP specialists (Teemo, Kennen)."),I("Mercury's Treads","Reduce blind/stun duration."),I("Knight's Vow","Share damage while you figure out the matchup.")],runes:{...LEONA_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
