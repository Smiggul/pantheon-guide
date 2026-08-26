import { I } from "../runeHelpers.js";

const SHEN_TOP_DEFAULT_RUNES = {
  keystone:       "Grasp of the Undying",
  primary:        "Resolve",
  primaryRunes:   ["Shield Bash","Second Wind","Overgrowth"],
  secondary:      "Inspiration",
  secondaryRunes: ["Approach Velocity","Biscuit Delivery"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Grasp of the Undying rewards Shen's auto-attack-heavy trading pattern with permanent HP and a free proc every few seconds. Shield Bash converts Spirit's Refuge's block into bonus on-hit damage; Second Wind and Overgrowth cover the early lane phase before Stand United becomes a global save. Approach Velocity closes distance onto an already-impaired target; Biscuit Delivery covers the mana curve.",
};

const SHEN_SUP_DEFAULT_RUNES = {
  keystone:       "Aftershock",
  primary:        "Resolve",
  primaryRunes:   ["Font of Life","Bone Plating","Unflinching"],
  secondary:      "Domination",
  secondaryRunes: ["Sudden Impact","Ultimate Hunter"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Support Shen plays the same protective identity as Top but positioned to peel for a carry — Aftershock triggers the instant Shadow Dash's taunt lands, giving him bonus resistances right as he becomes the fight's focus. Font of Life heals the ADC off the taunt; Bone Plating and Unflinching round out survivability into hard-engage lanes. Sudden Impact procs off the dash itself; Ultimate Hunter reduces Stand United's cooldown for more global saves.",
};

// Off-meta full-AP jungle (C-tier ~50%, popularised by boss FFS): Fleet + a
// Dusk-and-Dawn ability-haste core. Haste — not raw AP — is what scales it.
const SHEN_JGL_DEFAULT_RUNES = {
  keystone:       "Fleet Footwork",
  primary:        "Precision",
  primaryRunes:   ["Presence of Mind","Legend: Haste","Coup de Grace"],
  secondary:      "Sorcery",
  secondaryRunes: ["Transcendence","Gathering Storm"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Fleet Footwork is the highest-value jungle keystone — 100% effective on monsters, it keeps Shen at full HP through the clear with zero sustain items. Everything else stacks ability haste (Legend: Haste + Transcendence + the haste shard) because Dusk and Dawn makes Shen burn Q stacks fast, so haste — not raw AP — is what scales this build. Gathering Storm carries the AP into the late game; Coup de Grace closes the picks his Q-nuke sets up.",
};

// ══════════════════════════════════════════════════════════════════════════
//  SHEN — Warden / Taunt-and-Global-Save
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"shen", display:"Shen", dd:"Shen",
  color:"#1a2a3a", glow:"#5a9ac0",
  lanes:["Top","Support","Jungle"],
  altBuilds:{
    Top:[{
      label:"Full AP", tag:"off-meta",
      corePath:"Dusk and Dawn  ›  Sorcerer's Shoes  ›  Cosmic Drive  ›  Cryptbloom",
      coreNote:"Full-AP Shen — the ability-haste tech build (popularised in the jungle by boss FFS, but it works in lane too). Dusk and Dawn is mandatory: its double on-hit burns Q stacks faster and lets you replicate the last Q stack for ~33% more Q value, so this build scales with ability haste more than raw AP. Rush Dusk and Dawn → Cosmic Drive → Cryptbloom (haste + magic pen), and your Q starts nuking (his %-max-HP Q + Dusk and Dawn ≈ 20-30% max HP per cast). A carry Shen, not a tank — much squishier, so lean on R for global presence and pick your fights. Rocketbelt/Zhonya's from the side.",
      runes:{ keystone:"Fleet Footwork", primary:"Precision", primaryRunes:["Presence of Mind","Legend: Haste","Coup de Grace"], secondary:"Sorcery", secondaryRunes:["Transcendence","Gathering Storm"], shards:["Ability Haste","Adaptive Force","Health (scaling)"], reason:"Fleet Footwork gives the constant sustain Shen wants and everything else stacks ability haste — Legend: Haste + Transcendence + the haste shard — because Dusk and Dawn makes him burn Q stacks fast, so haste (not AP) is what scales this build. Gathering Storm carries the AP into the late game." },
      sideItems:["Hextech Rocketbelt","Zhonya's Hourglass","Void Staff","Riftmaker","Mercury's Treads"],
    }],
  },
  roles:{
    Top:{
      bans:["Vayne","Fiora","Camille"], replacements:["Sett","Volibear","Jax"],
      role:"Warden / Split-Push-and-Global-Save",
      corePath:"Titanic Hydra  ›  Plated Steelcaps  ›  Dusk and Dawn  ›  Bandlepipes",
      coreNote:"Shen plays for a split-push-and-global-save pattern — Spirit's Refuge blocks incoming damage, Shadow Dash taunts whatever it hits, and Stand United teleports to and shields any ally anywhere on the map. Titanic Hydra scales off his tank HP for real split-push damage; Plated Steelcaps blunts auto-heavy lane bullies; Dusk and Dawn and Bandlepipes both round out haste and team-wide utility.",
      sideItems:["Thornmail","Spirit Visage","Force of Nature","Mercury's Treads","Randuin's Omen","Sunfire Aegis"],
      data:{
        JUGGERNAUT:{ahead:[I("Titanic Hydra","HP-scaled damage wins the sustained trade war."),I("Thornmail","GW cuts their sustain."),I("Dusk and Dawn","Proc damage adds up over the fight.")],behind:[I("Plated Steelcaps","Reduces auto damage from their press."),I("Spirit Visage","Amplify your own sustain."),I("Randuin's Omen","Crit/AS reduction if they build offense.")],runes:{...SHEN_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Titanic Hydra","Proc burst punishes their dive."),I("Dusk and Dawn","Proc damage on the counter-engage."),I("Spirit Visage","Amplify self-heal through the all-in.")],behind:[I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Mercury's Treads","Shorter CC on their engage."),I("Spirit Visage","Amp self-heal to recover.")],runes:{...SHEN_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Spirit Visage","Amp self-heal eats the opener."),I("Titanic Hydra","Punish their commit with proc damage."),I("Dusk and Dawn","Proc damage wins the trade first.")],behind:[I("Spirit Visage","Amp healing to recover between skirmishes."),I("Mercury's Treads","Shorter CC before the finisher."),I("Force of Nature","MR vs AP assassins.")],runes:{...SHEN_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Titanic Hydra","HP-scaled damage wins the extended duel outright."),I("Thornmail","GW cuts their lifesteal."),I("Dusk and Dawn","Proc damage tips the auto-trade.")],behind:[I("Randuin's Omen","Crit/AS reduction on Yi/Trynd/Kayn."),I("Spirit Visage","Amp self-heal in the duel."),I("Plated Steelcaps","Auto reduction.")],runes:{...SHEN_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Spirit Visage","Amp self-heal absorbs the burst."),I("Force of Nature","MR stack vs sustained casting."),I("Titanic Hydra","Punish their cooldown window.")],behind:[I("Force of Nature","MR stack vs their combo."),I("Mercury's Treads","Shorter CC on invades."),I("Spirit Visage","Amp healing to recover.")],runes:{...SHEN_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Force of Nature","Shrugs off their sustained magic damage."),I("Titanic Hydra","HP-scaled damage wins the drain war."),I("Thornmail","GW cuts their regen.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Spirit Visage","Amp healing to keep pace."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...SHEN_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration on approach."),I("Force of Nature","MR + move speed to close."),I("Dusk and Dawn","Proc damage on arrival.")],behind:[I("Force of Nature","MR + move speed vs sustained poke."),I("Mercury's Treads","Reduce CC duration."),I("Spirit Visage","Amp healing on arrival.")],runes:{...SHEN_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Titanic Hydra","HP-scaled damage wins the burst race on the ADC."),I("Thornmail","GW cuts their sustain items."),I("Plated Steelcaps","Auto reduction on the ADC.")],behind:[I("Plated Steelcaps","Non-negotiable auto reduction."),I("Randuin's Omen","Crit reduction vs their build."),I("Spirit Visage","Amp self-heal.")],runes:{...SHEN_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Thornmail","GW destroys their heal/shield economy."),I("Titanic Hydra","Reach the carry despite the peel."),I("Dusk and Dawn","Proc damage pressures the sustain war.")],behind:[I("Spirit Visage","Sustain vs their heal economy."),I("Force of Nature","MR vs their poke component."),I("Randuin's Omen","Survivability if they poke hard.")],runes:{...SHEN_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge the hook so your taunt lands first."),I("Titanic Hydra","Punish a whiffed hook instantly."),I("Spirit Visage","Amp healing after a catch.")],behind:[I("Mercury's Treads","Mandatory — reduces the CC that opens a catch."),I("Spirit Visage","Amp healing to recover."),I("Randuin's Omen","Survivability if it goes long.")],runes:{...SHEN_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Thornmail","GW cuts their sustain in the tank fight."),I("Titanic Hydra","Punish their re-engage window."),I("Dusk and Dawn","Proc damage during the extended engage.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Force of Nature","MR vs Malphite/Gragas AP."),I("Spirit Visage","Sustain the war of attrition.")],runes:{...SHEN_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Thornmail","GW cuts Tahm Kench/Poppy passive sustain."),I("Titanic Hydra","HP-scaled damage still wins the peel war."),I("Dusk and Dawn","Proc damage through their mitigation.")],behind:[I("Spirit Visage","Sustain through the peel war."),I("Force of Nature","MR vs Galio/K'Sante."),I("Randuin's Omen","Crit reduction if paired with a marksman.")],runes:{...SHEN_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Titanic Hydra","Run down a kiting Specialist."),I("Thornmail","GW cuts sustain patterns."),I("Dusk and Dawn","Proc damage through their poke pattern.")],behind:[I("Mercury's Treads","Teemo blind / Kennen stun — shorten both."),I("Spirit Visage","Survive burst setups."),I("Force of Nature","Counters AP specialists.")],runes:{...SHEN_TOP_DEFAULT_RUNES}},
      },
    },
    Support:{
      bans:["Poppy","Milio","Karma"], replacements:["Thresh","Leona","Zac"],
      role:"Taunt-Engage Peel",
      corePath:"Plated Steelcaps  ›  Heartsteel  ›  Thornmail  ›  Locket of the Iron Solari",
      coreNote:"Support Shen plays for taunt-engage peel backed by a global save — Shadow Dash taunts a diving threat off the carry, Spirit's Refuge blocks a burst window, and Stand United can teleport in and shield an ally in a losing fight anywhere on the map. Plated Steelcaps blunts early auto trades; Heartsteel scales HP off his passive proc for a real tank stat pool; Thornmail and Locket both round out GW and burst mitigation.",
      sideItems:["Bandlepipes","Zeke's Convergence","Mercury's Treads","Knight's Vow","Randuin's Omen","Redemption"],
      data:{
        JUGGERNAUT:{ahead:[I("Locket of the Iron Solari","Shield covers the walk-down window."),I("Thornmail","GW cuts their sustain."),I("Knight's Vow","Protect your carry while you soak.")],behind:[I("Plated Steelcaps","Reduces auto damage vs their press."),I("Knight's Vow","Share damage taken."),I("Heartsteel","Extra HP pool to soak.")],runes:{...SHEN_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Locket of the Iron Solari","Shield absorbs their dive opener."),I("Zeke's Convergence","Amplify the counter-engage."),I("Heartsteel","HP pool tanks the opening burst.")],behind:[I("Knight's Vow","Share damage so your ADC survives the dive."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Mercury's Treads","Shorter CC on their engage.")],runes:{...SHEN_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield eats the opener before it lands on your ADC."),I("Zeke's Convergence","Punish their commit with amplified damage."),I("Heartsteel","HP pool tanks the burst.")],behind:[I("Knight's Vow","Share the burst that would otherwise one-shot your ADC."),I("Mercury's Treads","Reduce the CC that opens their combo."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...SHEN_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Thornmail","GW shuts down the duelist."),I("Zeke's Convergence","Amplify ADC damage in the 2v2."),I("Knight's Vow","Share damage in the skirmish.")],behind:[I("Knight's Vow","Share damage so your ADC survives the duel."),I("Plated Steelcaps","Flat reduction vs auto-heavy champs."),I("Randuin's Omen","Crit reduction.")],runes:{...SHEN_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Mercury's Treads","Reduce CC chains — enables your own taunt."),I("Locket of the Iron Solari","Shield through their combo."),I("Zeke's Convergence","Punish damage after they burst.")],behind:[I("Mercury's Treads","Shorter CC before their combo lands on your ADC."),I("Knight's Vow","Share the burst damage."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...SHEN_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Force of Nature","Shrugs off their sustained magic damage."),I("Knight's Vow","Share damage through the drain."),I("Zeke's Convergence","Amplify the punish.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Knight's Vow","Share the damage in the extended fight."),I("Randuin's Omen","Survivability into their sustained DPS.")],runes:{...SHEN_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Locket of the Iron Solari","Shields your ADC from poke chip."),I("Redemption","Offsets accumulated poke damage.")],behind:[I("Redemption","Global heal offsets the chip."),I("Mercury's Treads","Reduce CC duration."),I("Locket of the Iron Solari","Shield layer.")],runes:{...SHEN_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Zeke's Convergence","Amplify your ADC's damage after the taunt lands — Shen's whole kit enables this."),I("Knight's Vow","Share damage output."),I("Locket of the Iron Solari","Shield in the poke war.")],behind:[I("Knight's Vow","Non-negotiable — protect your carry."),I("Randuin's Omen","Crit reduction vs their DPS."),I("Plated Steelcaps","Flat auto reduction.")],runes:{...SHEN_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Thornmail","GW reduces their poke/heal uptime."),I("Zeke's Convergence","Amplify damage past their sustain."),I("Locket of the Iron Solari","Shield war.")],behind:[I("Locket of the Iron Solari","Core defensive value."),I("Knight's Vow","Share damage in the sustain war."),I("Force of Nature","Anti-AP if they poke hard.")],runes:{...SHEN_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge their hook so you land your own taunt first."),I("Zeke's Convergence","Amplify the punish after you land your CC."),I("Locket of the Iron Solari","Shield vs pick attempts.")],behind:[I("Mercury's Treads","Mandatory — a caught Shen loses the whole engage plan."),I("Knight's Vow","Share damage if caught."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...SHEN_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Thornmail","Reduce their engage tempo with GW."),I("Zeke's Convergence","Amplify your team's counter-engage."),I("Knight's Vow","Share damage during their initiation.")],behind:[I("Mercury's Treads","Shorter stuns from their engage chain."),I("Knight's Vow","Share damage during the engage."),I("Randuin's Omen","Survivability vs their damage.")],runes:{...SHEN_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Zeke's Convergence","Amplify ADC damage past their body-block."),I("Thornmail","GW blunts their peel value."),I("Knight's Vow","Share damage in the peel war.")],behind:[I("Knight's Vow","Share damage through the extended peel war."),I("Randuin's Omen","Crit reduction if paired with a marksman."),I("Thornmail","GW cuts their sustain.")],runes:{...SHEN_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Mercury's Treads","Teemo blind, Kennen stun — land your own CC first."),I("Locket of the Iron Solari","Shield through their poke/kit."),I("Zeke's Convergence","Amplify damage in skirmishes.")],behind:[I("Mercury's Treads","Reduce blind/stun duration."),I("Knight's Vow","Share damage while you figure out the matchup."),I("Redemption","Global heal while you figure out the matchup.")],runes:{...SHEN_SUP_DEFAULT_RUNES}},
      },
    },
    Jungle:{
      bans:["Kha'Zix","Nocturne","Graves"], replacements:["Ivern","Zac","Maokai"],
      role:"AP Ganker (off-meta)",
      buildLabel:"Full AP",
      corePath:"Dusk and Dawn  ›  Sorcerer's Shoes  ›  Cosmic Drive  ›  Cryptbloom",
      coreNote:"Off-meta full-AP Shen jungle (C-tier ~50%, popularised by boss FFS). Dusk and Dawn is mandatory — its double on-hit burns Q stacks faster and you replicate the last stack for ~33% more Q value, so this build scales with ability haste over raw AP. Fleet Footwork keeps you full HP through the clear; farm to your Q-nuke spike, then abuse Stand United (R) for global ganks — the ult presence is his whole edge over other junglers. Kite camps with W's shield; take magic-resist boots over Sorcerer's Shoes into heavy AP. See the Jungle Coach (🌲, right edge) for the clear route.",
      sideItems:["Hextech Rocketbelt","Zhonya's Hourglass","Void Staff","Riftmaker","Rylai's Crystal Scepter","Mercury's Treads"],
      data:{
        JUGGERNAUT:{ahead:[I("Void Staff","Pierce their MR — %-HP Q still melts stacked health."),I("Cryptbloom","Pen + the takedown heal for the extended fight."),I("Rylai's Crystal Scepter","Perma-slow keeps the walk-down champ off you.")],behind:[I("Zhonya's Hourglass","Stall their all-in while your clear catches up."),I("Cosmic Drive","Haste + move speed to kite the bruiser."),I("Mercury's Treads","Shorter CC before the kill.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Hextech Rocketbelt","Dash to close or peel the dive + burst."),I("Rylai's Crystal Scepter","Slow shuts down their engage follow-up."),I("Void Staff","Keep the Q-nuke lethal through their resists.")],behind:[I("Zhonya's Hourglass","Negates the all-in timing."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Mercury's Treads","Shorter CC on their gap-close.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Stasis blanks their combo, then Q back."),I("Void Staff","Burst through their MR while ahead."),I("Rylai's Crystal Scepter","Slow denies the reset window.")],behind:[I("Zhonya's Hourglass","Essential vs a burst all-in."),I("Banshee's Veil","Blocks the opener."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rylai's Crystal Scepter","Perma-slow wins the extended duel."),I("Void Staff","Q damage stays lethal through their pen."),I("Morellonomicon","Grievous Wounds cuts their mid-fight sustain.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Cosmic Drive","Kite the fight you can't win straight."),I("Mercury's Treads","Shorter CC on their gap-close.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Banshee's Veil","Blocks the combo opener, then punish."),I("Void Staff","Win the burst mirror through their MR."),I("Zhonya's Hourglass","Stasis their rotation, answer with Q.")],behind:[I("Banshee's Veil","Mandatory — eats their setup CC."),I("Mercury's Treads","Shorten the combo's CC."),I("Zhonya's Hourglass","Survive the rotation.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pierce MR in the sustained AP war."),I("Morellonomicon","Anti-heal cuts the drain loop."),I("Cryptbloom","Pen + heal for the long fight.")],behind:[I("Banshee's Veil","Blocks the opening CC."),I("Mercury's Treads","Shorter CC to disengage."),I("Zhonya's Hourglass","Survive their ramped window.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Hextech Rocketbelt","Dash closes their poke range for the R gank."),I("Cosmic Drive","Move speed to dodge the poke on approach."),I("Void Staff","Delete them once inside.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Mercury's Treads","Reduce CC duration from range."),I("Cosmic Drive","Speed between volleys.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Zhonya's Hourglass","Stasis their focus, taunt them off the clean-up."),I("Void Staff","Burst the carry through their defensive item."),I("Rylai's Crystal Scepter","Slow denies the kite.")],behind:[I("Zhonya's Hourglass","Survive the DPS window."),I("Mercury's Treads","Shorten the peel CC."),I("Banshee's Veil","Blocks the setup CC on you.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Morellonomicon","Grievous Wounds guts their heal/shield economy."),I("Void Staff","Burst past the shields."),I("Cryptbloom","Pen + the takedown heal on the dive.")],behind:[I("Void Staff","Keep damage relevant through shields."),I("Morellonomicon","Cut their heals so a taunt-kill sticks."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge the hook so your taunt lands first."),I("Void Staff","Punish a whiffed pick with burst."),I("Rylai's Crystal Scepter","Slow zones their hook attempts.")],behind:[I("Mercury's Treads","Mandatory — reduces the CC that opens a catch."),I("Banshee's Veil","Spell shield eats the hook."),I("Zhonya's Hourglass","Buys time if caught.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Pierce their engage-tank MR."),I("Cryptbloom","Pen + AoE heal through the tank fight."),I("Rylai's Crystal Scepter","Perma-slow the initiation.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Banshee's Veil","Blocks the CC that starts their initiation."),I("Zhonya's Hourglass","Survive the engage combo.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","MR-stacking Wardens still take real Q damage."),I("Cryptbloom","Pen makes the %-HP Q hurt through mitigation."),I("Morellonomicon","Cut Tahm Kench/Poppy passive sustain.")],behind:[I("Void Staff","Only reliable damage vs stacked resists."),I("Zhonya's Hourglass","Survive the engage they set up."),I("Mercury's Treads","Shorten their key CC.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Rylai's Crystal Scepter","Perma-slow locks down kiting Specialists."),I("Void Staff","Q stays lethal through their resists."),I("Hextech Rocketbelt","Dash closes on a repositioning Specialist.")],behind:[I("Mercury's Treads","Teemo blind / Kennen stun — shorten both."),I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive burst setups.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
