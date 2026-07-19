import { I } from "../runeHelpers.js";

const BLITZCRANK_SUP_DEFAULT_RUNES = {
  keystone:       "Glacial Augment",
  primary:        "Inspiration",
  primaryRunes:   ["Hextech Flashtraption","Biscuit Delivery","Cosmic Insight"],
  secondary:      "Sorcery",
  secondaryRunes: ["Nimbus Cloak","Celerity"],
  shards:         ["Ability Haste","Health (scaling)","Health (scaling)"],
  reason:         "Glacial Augment leaves a slowing frozen trail behind a landed Rocket Grab — once Blitzcrank hooks a target, they're effectively never escaping it. Hextech Flashtraption gives a second Flash for repeat hook attempts; Biscuit Delivery and Cosmic Insight solve early sustain and haste. Nimbus Cloak and Celerity stack pure movement speed to actually reach hook range in the first place.",
};

// ══════════════════════════════════════════════════════════════════════════
//  BLITZCRANK — Catcher / Single-Target Pick
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"blitzcrank", display:"Blitzcrank", dd:"Blitzcrank",
  color:"#7a5c3e", glow:"#d4a15a",
  lanes:["Support"],
  roles:{
    Support:{
      bans:["Morgana","Lulu","Karma"], replacements:["Thresh","Leona","Zac"],
      role:"Catcher / Single-Target Pick",
      corePath:"Celestial Opposition  ›  Boots of Swiftness  ›  Locket of the Iron Solari  ›  Zeke's Convergence",
      coreNote:"Blitzcrank plays for a single landed Rocket Grab into a guaranteed kill — hook, silence, punch, and the whole team collapses on the pulled target. Celestial Opposition heals him for engaging near allies; Boots of Swiftness gets him into hook range faster; Locket adds team-wide burst mitigation; Zeke's Convergence amplifies the damage the moment his hook connects.",
      sideItems:["Bandlepipes","Shurelya's Battlesong","Knight's Vow","Randuin's Omen","Thornmail","Mercury's Treads"],
      data:{
        JUGGERNAUT:{ahead:[I("Locket of the Iron Solari","Shield covers the walk-down window."),I("Zeke's Convergence","Amplify damage after your hook lands."),I("Knight's Vow","Protect your carry while you soak.")],behind:[I("Randuin's Omen","Crit/AS reduction if they build offense."),I("Knight's Vow","Share damage taken."),I("Thornmail","GW cuts their sustain.")],runes:{...BLITZCRANK_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Boots of Swiftness","Reach hook range before their dive angle sets up."),I("Locket of the Iron Solari","Shield absorbs their dive opener."),I("Zeke's Convergence","Amplify the counter-engage.")],behind:[I("Knight's Vow","Share damage so your ADC survives the dive."),I("Mercury's Treads","Shorter CC on their engage."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...BLITZCRANK_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield eats the opener before it lands on your ADC."),I("Zeke's Convergence","Punish their commit with amplified damage."),I("Celestial Opposition","Heal off engaging near your carry.")],behind:[I("Knight's Vow","Share the burst that would otherwise one-shot your ADC."),I("Mercury's Treads","Reduce the CC that opens their combo."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...BLITZCRANK_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Zeke's Convergence","Amplify ADC damage in the 2v2."),I("Knight's Vow","Share damage in the skirmish."),I("Locket of the Iron Solari","Shield war.")],behind:[I("Knight's Vow","Share damage so your ADC survives the duel."),I("Randuin's Omen","Crit reduction."),I("Thornmail","GW on auto-heavy champs.")],runes:{...BLITZCRANK_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Mercury's Treads","Reduce CC chains — enables your own hook."),I("Locket of the Iron Solari","Shield through their combo."),I("Zeke's Convergence","Punish damage after they burst.")],behind:[I("Mercury's Treads","Shorter CC before their combo lands on your ADC."),I("Knight's Vow","Share the burst damage."),I("Celestial Opposition","Heal off engaging to save your carry.")],runes:{...BLITZCRANK_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Thornmail","GW cuts their sustain through the drain."),I("Knight's Vow","Share damage through the drain."),I("Zeke's Convergence","Amplify the punish.")],behind:[I("Knight's Vow","Share the damage in the extended fight."),I("Thornmail","GW cuts their regen even behind."),I("Randuin's Omen","Survivability into their sustained DPS.")],runes:{...BLITZCRANK_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Boots of Swiftness","Reach hook range before the poke wins the lane."),I("Locket of the Iron Solari","Shields your ADC from poke chip."),I("Mercury's Treads","Reduce CC duration from range.")],behind:[I("Mercury's Treads","Reduce CC duration."),I("Randuin's Omen","Survivability vs sustained poke."),I("Locket of the Iron Solari","Shield layer.")],runes:{...BLITZCRANK_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Zeke's Convergence","Amplify your ADC's damage after the hook lands — Blitzcrank's whole kit enables this."),I("Knight's Vow","Share damage output."),I("Locket of the Iron Solari","Shield in the poke war.")],behind:[I("Knight's Vow","Non-negotiable — protect your carry."),I("Randuin's Omen","Crit reduction vs their DPS."),I("Thornmail","Flat auto reduction.")],runes:{...BLITZCRANK_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Thornmail","GW reduces their poke/heal uptime."),I("Zeke's Convergence","Amplify damage past their sustain."),I("Locket of the Iron Solari","Shield war.")],behind:[I("Locket of the Iron Solari","Core defensive value."),I("Knight's Vow","Share damage in the sustain war."),I("Randuin's Omen","Survivability if they poke hard.")],runes:{...BLITZCRANK_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Boots of Swiftness","Land your own hook before they land theirs."),I("Zeke's Convergence","Amplify the punish after you land your CC."),I("Locket of the Iron Solari","Shield vs pick attempts.")],behind:[I("Mercury's Treads","Mandatory — a caught Blitzcrank loses the whole engage plan."),I("Knight's Vow","Share damage if caught."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...BLITZCRANK_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Thornmail","Reduce their engage tempo with GW."),I("Zeke's Convergence","Amplify your team's counter-engage."),I("Knight's Vow","Share damage during their initiation.")],behind:[I("Mercury's Treads","Shorter stuns from their engage chain."),I("Knight's Vow","Share damage during the engage."),I("Randuin's Omen","Survivability vs their damage.")],runes:{...BLITZCRANK_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Zeke's Convergence","Amplify ADC damage past their body-block."),I("Thornmail","GW blunts their peel value."),I("Knight's Vow","Share damage in the peel war.")],behind:[I("Knight's Vow","Share damage through the extended peel war."),I("Randuin's Omen","Crit reduction if paired with a marksman."),I("Thornmail","GW cuts their sustain.")],runes:{...BLITZCRANK_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Boots of Swiftness","Land your own CC first vs Teemo blind / Kennen stun."),I("Locket of the Iron Solari","Shield through their poke/kit."),I("Zeke's Convergence","Amplify damage in skirmishes.")],behind:[I("Mercury's Treads","Reduce blind/stun duration."),I("Knight's Vow","Share damage while you figure out the matchup."),I("Thornmail","Counters AP specialists via GW.")],runes:{...BLITZCRANK_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
