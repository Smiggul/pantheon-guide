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

// Tank jungle page. 26.20 replaced the old full-AP Fleet Footwork page: Guardian
// is now the most common Shen jungle keystone (Fleet is about 5% of games).
const SHEN_JGL_DEFAULT_RUNES = {
  keystone:       "Guardian",
  primary:        "Resolve",
  primaryRunes:   ["Shield Bash","Conditioning","Overgrowth"],
  secondary:      "Sorcery",
  secondaryRunes: ["Axiom Arcanist","Transcendence"],
  shards:         ["Ability Haste","Health","Health"],
  reason:         "Guardian is the most common Shen jungle keystone on 26.20, in close to three games in five (the sample is small, under 7k Emerald+ games). It shields Shen and the ally he is protecting together, and Stand United already puts him beside the ally who is about to die, anywhere on the map. Shield Bash adds damage to his next hit after every shield, Conditioning and Overgrowth scale the resist and health stat line his tank items build, and the Sorcery splash strengthens his ultimate (Axiom Arcanist) and adds ability haste (Transcendence) for more taunts and more global saves.",
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
      role:"Tank Ganker / Global Save",
      corePath:"Protoplasm Harness  ›  Plated Steelcaps  ›  Unending Despair  ›  Abyssal Mask",
      coreNote:"Shen jungle on 26.20 is a tank, not the old full-AP build. The sample is small, under 7k Emerald+ games, so read the numbers loosely, but the gaps are wide: Protoplasm Harness is the first item in about 42% of games against about 14% for Dusk and Dawn, Plated Steelcaps are the most common boots, Guardian is the most common keystone, and the full-AP items barely appear at all. The play pattern: clear, gank with Shadow Dash's taunt, and use Stand United to turn fights on the other side of the map. Protoplasm Harness gives a large health pool and a lifeline heal when a gank goes wrong; Unending Despair is the usual second item and drains health from everyone around you in a long fight; Abyssal Mask is the most common third and makes nearby enemies take more magic damage, your mages' included. Thornmail is the common swap into auto-attack teams. Titanic Hydra into Dusk and Dawn is the main bruiser alternative; the full-AP line survives as a Top alternate.",
      sideItems:["Thornmail","Titanic Hydra","Dusk and Dawn","Heartsteel","Randuin's Omen","Spirit Visage","Force of Nature","Mercury's Treads"],
      data:{
        JUGGERNAUT:{ahead:[I("Thornmail","Wounds and armor win the long brawl against their sustain."),I("Titanic Hydra","Health-scaled cleave gives your ganks real damage into a frontline."),I("Randuin's Omen","Less crit damage, and the active slows the walk-down.")],behind:[I("Plated Steelcaps","Cheap auto-attack reduction against the walk-down."),I("Thornmail","Grievous Wounds before you compare health bars."),I("Spirit Visage","Stronger heals from Protoplasm Harness and Unending Despair.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Randuin's Omen","Slow their follow-up after they commit onto your carry."),I("Thornmail","Punishes the auto chain once the dive lands."),I("Knight's Vow","Take part of the damage meant for the ally they dive.")],behind:[I("Plated Steelcaps","Auto reduction against auto-heavy divers."),I("Mercury's Treads","Shorter CC on their engage."),I("Knight's Vow","Shares the burst so your taunt can peel in time.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Knight's Vow","Absorb part of the combo aimed at your carry."),I("Thornmail","Punishes the autos in an AD assassin's combo."),I("Kaenic Rookern","Magic shield against AP assassins.")],behind:[I("Kaenic Rookern","The shield eats the opener of an AP combo."),I("Mercury's Treads","Shorter CC before the finisher."),I("Plated Steelcaps","Blunts AD assassins' auto weaves.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Thornmail","Wounds cut their lifesteal mid-duel."),I("Frozen Heart","Its aura slows the attack speed they duel with."),I("Titanic Hydra","Health-scaled damage keeps the duel even.")],behind:[I("Randuin's Omen","Less crit damage, and the active slows their chase."),I("Plated Steelcaps","Auto reduction."),I("Spirit Visage","Stronger heals keep you in the duel.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Kaenic Rookern","Magic shield blanks the first rotation."),I("Force of Nature","Stacking MR against repeated spells."),I("Hollow Radiance","MR plus burn damage when you dive them.")],behind:[I("Kaenic Rookern","Rush the magic shield."),I("Mercury's Treads","Shorter CC from their setup spell."),I("Spirit Visage","MR and stronger heals between rotations.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Force of Nature","Built for sustained magic damage."),I("Hollow Radiance","MR plus burn damage through the long fight."),I("Spirit Visage","MR and stronger heals in the drain war.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Mercury's Treads","Shorter CC to disengage."),I("Kaenic Rookern","The shield comes back between trades.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Dead Man's Plate","Move speed to cross their poke range on a gank."),I("Force of Nature","MR and move speed to close the gap."),I("Mercury's Treads","Shorter CC on the approach.")],behind:[I("Force of Nature","MR and move speed vs sustained poke."),I("Spirit Visage","Heal back the chip before the fight."),I("Mercury's Treads","Reduce CC duration from range.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Randuin's Omen","Less crit damage while you taunt them."),I("Thornmail","Wounds cut their lifesteal."),I("Frozen Heart","Its aura slows their attack speed where they stand.")],behind:[I("Plated Steelcaps","Non-negotiable auto reduction."),I("Randuin's Omen","Crit reduction vs their build."),I("Knight's Vow","Share the damage your carry takes.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Thornmail","Wounds cut into the heals they rely on."),I("Titanic Hydra","Real damage when you taunt the shielded carry."),I("Jak'Sho, The Protean","Resists ramp through the long fight their sustain forces.")],behind:[I("Spirit Visage","Sustain vs their poke."),I("Force of Nature","MR against their poke damage."),I("Thornmail","Wounds so a taunt-kill sticks.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Shorter hook CC, so your taunt lands first."),I("Knight's Vow","Take part of the follow-up damage on the hooked ally."),I("Randuin's Omen","The active slows their follow-up after the catch.")],behind:[I("Mercury's Treads","Mandatory — reduces the CC that opens a catch."),I("Spirit Visage","Recover after a catch."),I("Kaenic Rookern","Shield against AP catchers.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Thornmail","Wounds cut their sustain in the tank fight."),I("Jak'Sho, The Protean","Resists ramp across their long engage."),I("Titanic Hydra","Health-scaled cleave chunks their frontline.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Force of Nature","MR against AP tanks."),I("Spirit Visage","Sustain the war of attrition.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Thornmail","Wounds cut Tahm Kench/Poppy-style sustain."),I("Titanic Hydra","Health-scaled damage through their mitigation."),I("Jak'Sho, The Protean","Resists ramp across the long peel war.")],behind:[I("Spirit Visage","Sustain through the peel war."),I("Force of Nature","MR against AP wardens."),I("Randuin's Omen","Crit reduction if they protect a marksman.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Titanic Hydra","Health-scaled cleave runs down a kiting Specialist."),I("Thornmail","Wounds cut sustain-based gimmicks."),I("Dead Man's Plate","Move speed to reach a splitter or kiter.")],behind:[I("Mercury's Treads","Teemo blind / Kennen stun — shorten both."),I("Force of Nature","Counters AP specialists."),I("Spirit Visage","Survive the burst setups.")],runes:{...SHEN_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
