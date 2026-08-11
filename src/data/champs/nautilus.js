import { I } from "../runeHelpers.js";

const NAUTILUS_SUP_DEFAULT_RUNES = {
  keystone:       "Aftershock",
  primary:        "Resolve",
  primaryRunes:   ["Shield Bash","Bone Plating","Unflinching"],
  secondary:      "Inspiration",
  secondaryRunes: ["Biscuit Delivery","Cosmic Insight"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Aftershock triggers instantly off Dredge Line's pull or a landed Riptide knock-up, giving Nautilus bonus resistances right as he becomes the fight's focus — without it he's too squishy since his shield alone doesn't provide enough durability to commit. Shield Bash, Bone Plating, and Unflinching round out a full-durability primary tree, letting him fully commit to a Q pull without getting blown up immediately after. Biscuit Delivery and Cosmic Insight solve early sustain and speed up Depth Charge's cooldown.",
};

// ══════════════════════════════════════════════════════════════════════════
//  NAUTILUS — Vanguard / Guaranteed Pick
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"nautilus", display:"Nautilus", dd:"Nautilus",
  color:"#1a3a4a", glow:"#4a9ab0",
  lanes:["Support"],
  roles:{
    Support:{
      bans:["Morgana","Blitzcrank","Pyke"], replacements:["Thresh","Leona","Zac"],
      role:"Vanguard / Guaranteed Pick",
      corePath:"Locket of the Iron Solari  ›  Knight's Vow  ›  Zeke's Convergence  ›  Frozen Heart",
      coreNote:"Nautilus plays for a single guaranteed pick — Dredge Line hooks from max range, Riptide knocks up everyone nearby, and Depth Charge chases down anyone who tries to escape. Locket adds team-wide burst mitigation right as the hook lands; Zeke's Convergence amplifies the follow-up damage; Frozen Heart and Force of Nature round out the tank stats a durability-focused engage support needs.",
      sideItems:["Mercury's Treads","Plated Steelcaps","Knight's Vow","Randuin's Omen","Thornmail","Redemption"],
      data:{
        JUGGERNAUT:{ahead:[I("Zeke's Convergence","Amplify damage after your hook chain lands."),I("Locket of the Iron Solari","Shield vs their walk-down."),I("Knight's Vow","Protect your carry while you soak.")],behind:[I("Plated Steelcaps","Reduces auto damage vs their press."),I("Knight's Vow","Share damage taken."),I("Frozen Heart","AS slow blunts their DPS.")],runes:{...NAUTILUS_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Locket of the Iron Solari","Shield absorbs their dive opener."),I("Zeke's Convergence","Amplify the counter-engage."),I("Frozen Heart","AS slow blunts their follow-up.")],behind:[I("Knight's Vow","Share damage so your ADC survives the dive."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Mercury's Treads","Shorter CC on their engage.")],runes:{...NAUTILUS_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield eats the opener before it lands on your ADC."),I("Zeke's Convergence","Punish their commit with amplified damage."),I("Frozen Heart","AS slow blunts their follow-up.")],behind:[I("Knight's Vow","Share the burst that would otherwise one-shot your ADC."),I("Mercury's Treads","Reduce the CC that opens their combo."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...NAUTILUS_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Frozen Heart","AS slow shuts down the duelist."),I("Zeke's Convergence","Amplify ADC damage in the 2v2."),I("Knight's Vow","Share damage in the skirmish.")],behind:[I("Knight's Vow","Share damage so your ADC survives the duel."),I("Plated Steelcaps","Flat reduction vs auto-heavy champs."),I("Randuin's Omen","Crit reduction.")],runes:{...NAUTILUS_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Mercury's Treads","Reduce CC chains — enables your own hook."),I("Locket of the Iron Solari","Shield through their combo."),I("Zeke's Convergence","Punish damage after they burst.")],behind:[I("Mercury's Treads","Shorter CC before their combo lands on your ADC."),I("Knight's Vow","Share the burst damage."),I("Force of Nature","MR stack vs sustained casting.")],runes:{...NAUTILUS_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Force of Nature","Shrugs off their sustained magic damage."),I("Knight's Vow","Share damage through the drain."),I("Zeke's Convergence","Amplify the punish.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Knight's Vow","Share the damage in the extended fight."),I("Randuin's Omen","Survivability into their sustained DPS.")],runes:{...NAUTILUS_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Locket of the Iron Solari","Shields your ADC from poke chip."),I("Redemption","Offsets accumulated poke damage.")],behind:[I("Force of Nature","MR + move speed vs sustained poke."),I("Mercury's Treads","Reduce CC duration."),I("Redemption","Global heal offsets the chip.")],runes:{...NAUTILUS_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Zeke's Convergence","Amplify your ADC's damage after the hook lands — Nautilus's whole kit enables this."),I("Knight's Vow","Share damage output."),I("Locket of the Iron Solari","Shield in the poke war.")],behind:[I("Knight's Vow","Non-negotiable — protect your carry."),I("Randuin's Omen","Crit reduction vs their DPS."),I("Plated Steelcaps","Flat auto reduction.")],runes:{...NAUTILUS_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Frozen Heart","AS slow reduces their poke/heal uptime."),I("Zeke's Convergence","Amplify damage past their sustain."),I("Locket of the Iron Solari","Shield war.")],behind:[I("Locket of the Iron Solari","Core defensive value."),I("Knight's Vow","Share damage in the sustain war."),I("Force of Nature","Anti-AP if they poke hard.")],runes:{...NAUTILUS_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge their hook so you land your own hook first."),I("Zeke's Convergence","Amplify the punish after you land your CC."),I("Locket of the Iron Solari","Shield vs pick attempts.")],behind:[I("Mercury's Treads","Mandatory — a caught Nautilus loses the whole engage plan."),I("Knight's Vow","Share damage if caught."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...NAUTILUS_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Frozen Heart","Reduce their engage tempo with the AS slow."),I("Zeke's Convergence","Amplify your team's counter-engage."),I("Knight's Vow","Share damage during their initiation.")],behind:[I("Mercury's Treads","Shorter stuns from their engage chain."),I("Knight's Vow","Share damage during the engage."),I("Force of Nature","MR vs Malphite/Gragas AP damage.")],runes:{...NAUTILUS_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Zeke's Convergence","Amplify ADC damage past their body-block."),I("Frozen Heart","AS slow blunts their peel value."),I("Knight's Vow","Share damage in the peel war.")],behind:[I("Knight's Vow","Share damage through the extended peel war."),I("Force of Nature","MR vs Galio/K'Sante AP damage."),I("Randuin's Omen","Crit reduction if paired with a marksman.")],runes:{...NAUTILUS_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Mercury's Treads","Teemo blind, Kennen stun — land your own CC first."),I("Locket of the Iron Solari","Shield through their poke/kit."),I("Zeke's Convergence","Amplify damage in skirmishes.")],behind:[I("Force of Nature","Counters AP specialists (Teemo, Kennen)."),I("Mercury's Treads","Reduce blind/stun duration."),I("Knight's Vow","Share damage while you figure out the matchup.")],runes:{...NAUTILUS_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
