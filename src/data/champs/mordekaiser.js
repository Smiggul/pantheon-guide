import { I } from "../runeHelpers.js";

const MORDEKAISER_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Revitalize"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror stacks fully inside one Death Realm duel, and Mordekaiser converts every stack into both damage and passive-fueled healing. Triumph refunds HP on the takedowns his ult manufactures, Legend: Haste feeds the Q-E-passive loop, Last Stand rewards the low-HP slugfests his kit drags everyone into, Bone Plating survives the trade openers, and Revitalize amplifies both his passive healing and W shield-heal conversion. The same page carries both Top and Jungle — the Death Realm doesn't care where the fight started.",
};

// ══════════════════════════════════════════════════════════════════════════
//  MORDEKAISER — Iron Revenant: Death-Realm Juggernaut  (S Top / OM Jgl 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"mordekaiser", display:"Mordekaiser", dd:"Mordekaiser",
  color:"#2a3a2a", glow:"#70c080",
  lanes:["Top","Jungle"],
  // NOTE: AD/bruiser Morde is NOT viable in 26.14 (AP-only). This alt is the
  // high-WR aggressive-AP line, distinct from the standard Rylai's/Liandry's path.
  altBuilds:{
    Top: [{
      label: "Dusk & Dawn AP",
      tag: "alt",
      corePath: "Rylai's Crystal Scepter  ›  Plated Steelcaps  ›  Riftmaker  ›  Liandry's Torment",
      coreNote: "The highest-win-rate Morde line on Mobalytics 26.14 (60.1% over ~1.5k games), more aggressive than the standard Rylai's/Liandry's tank-mage. Dusk and Dawn's alternating on-hit + move speed lets you chase inside the Death Realm, Riftmaker converts the extended duel into omnivamp true damage, and Experimental Hexplate speeds up and empowers Realm of Death itself — so you ult more often and hit harder inside it. Spirit Visage amplifies the whole sustain package. Same Conqueror gameplan, tuned for tempo and ult uptime rather than raw kiting.",
      runes: {
        keystone: "Conqueror",
        primary: "Precision",
        primaryRunes: ["Triumph", "Legend: Haste", "Last Stand"],
        secondary: "Resolve",
        secondaryRunes: ["Bone Plating", "Revitalize"],
        shards: ["Attack Speed", "Adaptive Force", "Health (scaling)"],
        reason: "Conqueror stacks fully inside one Death Realm duel and converts to healing off his passive; Legend: Haste feeds the ability spam Experimental Hexplate accelerates, Last Stand rewards the low-HP realm brawls, and Bone Plating + Revitalize survive the trades and amplify the Riftmaker/Spirit Visage sustain.",
      },
      sideItems: ["Spirit Visage", "Zhonya's Hourglass", "Rylai's Crystal Scepter", "Liandry's Torment", "Kaenic Rookern", "Thornmail"],
    }],
  },
  roles:{
    Top:{
      bans:["Fiora","Vayne","Teemo"], replacements:["Darius","Garen","Sett"],
      role:"Death-Realm Duelist Juggernaut",
      corePath:"Rylai's Crystal Scepter  ›  Plated Steelcaps  ›  Riftmaker  ›  Liandry's Torment",
      coreNote:"Mordekaiser wins by making the fight one-on-one — Realm of Death removes their best answer from the map, and this build makes the seven seconds inside unwinnable for them. Rylai's Crystal Scepter is the current first buy: the slow solves his only real problem (people walking away from E-Q), Riftmaker's omnivamp turns extended Death Realm duels into guaranteed wins, and Liandry's burn stacks with his passive AoE. Spirit Visage amplifies the whole healing package. Ult their carry, delete them, walk out with their stats.",
      sideItems:["Spirit Visage","Rabadon's Deathcap","Thornmail","Force of Nature","Zhonya's Hourglass","Sterak's Gage"],
      data:{
        JUGGERNAUT:{ahead:[I("Riftmaker","Omnivamp wins the juggernaut mirror slugfest."),I("Rylai's Crystal Scepter","They can't leave the passive circle slowed."),I("Liandry's Torment","Burn scales off their HP stacking.")],behind:[I("Thornmail","Anti-heal their sustain before comparing bars."),I("Spirit Visage","Amplify your own healing loop."),I("Plated Steelcaps","Cheap mitigation vs their autos.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rylai's Crystal Scepter","Slow the dive — they engage into the Death Realm."),I("Riftmaker","Out-sustain their engage window."),I("Sterak's Gage","Shield their burst opener.")],behind:[I("Sterak's Gage","Survive the all-in and turn it."),I("Spirit Visage","Heal through the skirmish aftermath."),I("Force of Nature","MR + speed vs AP divers.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Rylai's Crystal Scepter","Slowed assassins can't escape the realm."),I("Riftmaker","Their burst loses to your drain in seven seconds."),I("Liandry's Torment","Burn finishes what E-Q starts.")],behind:[I("Sterak's Gage","Shield floor under their one-shot math."),I("Zhonya's Hourglass","Stasis inside your own ult — ultimate bait."),I("Spirit Visage","Heal back the chip.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Riftmaker","The Death Realm duel is your game — omnivamp seals it."),I("Rylai's Crystal Scepter","Slow beats their mobility resets."),I("Liandry's Torment","Burn through their sustain windows.")],behind:[I("Thornmail","Anti-heal their lifesteal loop."),I("Sterak's Gage","Survive the duel you can't refuse."),I("Spirit Visage","Out-sustain the attrition.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Rylai's Crystal Scepter","Slow them into E-Q range — one pull ends it."),I("Riftmaker","Sustain through the poke, win the realm."),I("Spirit Visage","MR + healing vs their chip.")],behind:[I("Force of Nature","Stack MR + speed to survive the rotation."),I("Spirit Visage","Heal back the poke war."),I("Sterak's Gage","Shield the burst window.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Riftmaker","Your drain beats their drain inside the realm."),I("Spirit Visage","Amplify the sustain war in your favor."),I("Liandry's Torment","Burn stacks with your passive.")],behind:[I("Force of Nature","MR + speed answers the zone control."),I("Spirit Visage","Sustain the ramped window."),I("Thornmail","If they splash AD, punish it.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rylai's Crystal Scepter","One landed E means they never get to range again."),I("Riftmaker","Heal off the poke eaten on approach."),I("Rabadon's Deathcap","One realm rotation deletes them.")],behind:[I("Force of Nature","MR + speed crosses the poke zone."),I("Spirit Visage","Sustain back the chip."),I("Sterak's Gage","Shield the committed engage.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Rylai's Crystal Scepter","Slowed ADCs can't kite the Death Realm."),I("Riftmaker","Sustain through their DPS while Q chunks."),I("Rabadon's Deathcap","Guarantee the seven-second kill.")],behind:[I("Force of Nature","Speed to finally reach them."),I("Sterak's Gage","Survive the kite-down."),I("Spirit Visage","Heal through the chip war.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Rylai's Crystal Scepter","Ult the carry away from their enchanter — no shields cross realms."),I("Riftmaker","Out-sustain the shield budget."),I("Liandry's Torment","Burn through the sponge.")],behind:[I("Thornmail","Anti-heal the sustain package."),I("Spirit Visage","Your healing beats their poke."),I("Force of Nature","MR vs their damage splash.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rylai's Crystal Scepter","A landed hook pulls them into the Death Realm."),I("Riftmaker","Sustain the follow-up burst."),I("Liandry's Torment","Burn the catcher for the attempt.")],behind:[I("Mercury's Treads","Shorter lockdown on catch."),I("Sterak's Gage","Survive the caught scenario."),I("Spirit Visage","Heal the aftermath.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Liandry's Torment","Burn melts the engage tank — realm their carry instead."),I("Riftmaker","True damage ramp ignores their resists."),I("Rabadon's Deathcap","Scale past their durability curve.")],behind:[I("Force of Nature","MR + speed to disengage their wombo."),I("Thornmail","Anti-heal the sustain engage."),I("Spirit Visage","Sustain the chain CC aftermath.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Rylai's Crystal Scepter","Ult separates the carry from the peel-tank entirely."),I("Riftmaker","True damage cracks the mitigation stall."),I("Liandry's Torment","Burn through the HP wall.")],behind:[I("Liandry's Torment","Required burn vs stacked resists."),I("Spirit Visage","Sustain the stalemate."),I("Thornmail","Anti-heal their protected carry.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Rylai's Crystal Scepter","The realm removes most gimmicks from the fight."),I("Riftmaker","Sustain answers what you can't predict."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Spirit Visage","Sustain through the unfamiliar."),I("Sterak's Gage","Shield the surprise burst."),I("Force of Nature","Speed to just leave.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
      },
    },
    Jungle:{
      bans:["Lillia","Kindred","Master Yi"], replacements:["Volibear","Amumu","Warwick"],
      role:"Off-Meta Death-Realm Ganker",
      corePath:"Rylai's Crystal Scepter  ›  Plated Steelcaps  ›  Riftmaker  ›  Liandry's Torment",
      coreNote:"Jungle Mordekaiser is a genuine off-meta sleeper — low pick rate but a 53%+ win rate on real data, running the identical page and build as Top because the plan doesn't change: arrive, ult the carry, and delete them inside the Death Realm. His clear is honest AoE off Q and passive, and every gank carries the scariest threat in the game — a 1v1 nobody's carry can win. Rylai's makes his ganks stick, Riftmaker wins the realm duels, and the rest is Top Morde with a smite button.",
      sideItems:["Spirit Visage","Rabadon's Deathcap","Thornmail","Force of Nature","Zhonya's Hourglass","Sterak's Gage"],
      data:{
        JUGGERNAUT:{ahead:[I("Riftmaker","Omnivamp wins the invade slugfest."),I("Rylai's Crystal Scepter","They can't leave the passive circle slowed."),I("Liandry's Torment","Burn scales off their HP stacking.")],behind:[I("Thornmail","Anti-heal their sustain before comparing bars."),I("Spirit Visage","Amplify your healing loop."),I("Plated Steelcaps","Cheap mitigation vs their autos.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rylai's Crystal Scepter","Slow their engage — counter-gank into the realm."),I("Riftmaker","Out-sustain their engage window."),I("Sterak's Gage","Shield their burst opener.")],behind:[I("Sterak's Gage","Survive the all-in and turn it."),I("Spirit Visage","Heal through the skirmish aftermath."),I("Force of Nature","MR + speed vs AP divers.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Rylai's Crystal Scepter","Slowed assassins can't escape the realm."),I("Riftmaker","Their burst loses to your drain over seven seconds."),I("Liandry's Torment","Burn finishes what E-Q starts.")],behind:[I("Sterak's Gage","Shield floor under their one-shot math."),I("Zhonya's Hourglass","Stasis inside your own ult."),I("Spirit Visage","Heal back the chip.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Riftmaker","The Death Realm duel is your game — omnivamp seals it."),I("Rylai's Crystal Scepter","Slow beats their mobility resets."),I("Liandry's Torment","Burn through their sustain windows.")],behind:[I("Thornmail","Anti-heal their lifesteal loop."),I("Sterak's Gage","Survive the duel they force at camps."),I("Spirit Visage","Out-sustain the attrition.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Rylai's Crystal Scepter","Gank-slow them into E-Q range."),I("Riftmaker","Sustain through the poke, win the realm."),I("Spirit Visage","MR + healing vs their chip.")],behind:[I("Force of Nature","Stack MR + speed to survive the rotation."),I("Spirit Visage","Heal back the poke war."),I("Sterak's Gage","Shield the burst window.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Riftmaker","Your drain beats their drain inside the realm."),I("Spirit Visage","Amplify the sustain war."),I("Liandry's Torment","Burn stacks with your passive.")],behind:[I("Force of Nature","MR + speed answers the zone control."),I("Spirit Visage","Sustain the ramped window."),I("Thornmail","If they splash AD, punish it.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rylai's Crystal Scepter","One landed gank E and they never poke again."),I("Riftmaker","Heal off the poke eaten on approach."),I("Rabadon's Deathcap","One realm rotation deletes them.")],behind:[I("Force of Nature","MR + speed crosses the poke zone."),I("Spirit Visage","Sustain back the chip."),I("Sterak's Gage","Shield the committed gank.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Rylai's Crystal Scepter","Slowed ADCs can't kite the Death Realm."),I("Riftmaker","Sustain through their DPS while Q chunks."),I("Rabadon's Deathcap","Guarantee the seven-second kill.")],behind:[I("Force of Nature","Speed to finally reach them."),I("Sterak's Gage","Survive the kite-down."),I("Spirit Visage","Heal through the chip war.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Rylai's Crystal Scepter","Ult the carry away from the enchanter — no shields cross realms."),I("Riftmaker","Out-sustain the shield budget."),I("Liandry's Torment","Burn through the sponge.")],behind:[I("Thornmail","Anti-heal the sustain package."),I("Spirit Visage","Your healing beats their poke."),I("Force of Nature","MR vs their damage splash.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rylai's Crystal Scepter","Their hook feeds your realm — punish every catch."),I("Riftmaker","Sustain the follow-up burst."),I("Liandry's Torment","Burn the catcher for the attempt.")],behind:[I("Mercury's Treads","Shorter lockdown on catch."),I("Sterak's Gage","Survive the caught scenario."),I("Spirit Visage","Heal the aftermath.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Liandry's Torment","Burn melts the engage tank — realm their carry instead."),I("Riftmaker","True damage ramp ignores their resists."),I("Rabadon's Deathcap","Scale past their durability curve.")],behind:[I("Force of Nature","MR + speed to disengage their wombo."),I("Thornmail","Anti-heal the sustain engage."),I("Spirit Visage","Sustain the chain CC aftermath.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Rylai's Crystal Scepter","Ult separates the carry from the peel-tank entirely."),I("Riftmaker","True damage cracks the mitigation stall."),I("Liandry's Torment","Burn through the HP wall.")],behind:[I("Liandry's Torment","Required burn vs stacked resists."),I("Spirit Visage","Sustain the stalemate."),I("Thornmail","Anti-heal their protected carry.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Rylai's Crystal Scepter","The realm removes most gimmicks from the fight."),I("Riftmaker","Sustain answers what you can't predict."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Spirit Visage","Sustain through the unfamiliar."),I("Sterak's Gage","Shield the surprise burst."),I("Force of Nature","Speed to just leave.")],runes:{...MORDEKAISER_DEFAULT_RUNES}},
      },
    },
  },
};
