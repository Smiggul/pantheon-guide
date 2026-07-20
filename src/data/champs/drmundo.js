import { I } from "../runeHelpers.js";

const DRMUNDO_TOP_DEFAULT_RUNES = {
  keystone:       "Grasp of the Undying",
  primary:        "Resolve",
  primaryRunes:   ["Demolish","Second Wind","Overgrowth"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Approach Velocity"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Grasp stacks HP off Mundo's cleaver-poke trading pattern, and HP is the only stat he converts into everything else. Demolish turns the unkillable farm phase into plate gold, Second Wind sustains the poke matchups that try to deny his scaling, Overgrowth compounds the HP curve his passive multiplies, Magical Footwear funds the Warmog's rush, and Approach Velocity is the current tech — every cleaver-slowed target speeds Mundo toward wherever he pleases.",
};

const DRMUNDO_JGL_DEFAULT_RUNES = {
  keystone:       "Fleet Footwork",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Coup de Grace"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Approach Velocity"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Jungle Mundo swaps Grasp for Fleet Footwork — heal-on-hit plus move speed carries his famously HP-hungry clear and closes the gap on ganks his cleaver alone can't. Triumph refunds HP through skirmishes, Legend: Alacrity speeds both clear and E-empowered swats, Coup de Grace finishes what the cleaver chunks, and the Inspiration line (Magical Footwear, Approach Velocity) mirrors Top's economy tech — slowed gank targets feed the Approach Velocity chase-down.",
};

// ══════════════════════════════════════════════════════════════════════════
//  DR. MUNDO — Madman of Zaun: HP-Stacking Regenerator  (S Top / A Jgl 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"drmundo", display:"Dr. Mundo", dd:"DrMundo",
  color:"#4a2a4a", glow:"#c080e0",
  lanes:["Top","Jungle"],
  roles:{
    Top:{
      bans:["Fiora","Gwen","Kayle"], replacements:["Sion","Ornn","K'Sante"],
      role:"Unkillable HP Mountain",
      corePath:"Warmog's Armor  ›  Boots of Swiftness  ›  Heartsteel  ›  Spirit Visage",
      coreNote:"Mundo goes where he pleases because nothing can stop him: his passive shrugs the first CC, his ult regenerates a full health bar, and Warmog's plus Heartsteel stack the HP that every part of his kit multiplies. Spirit Visage amplifies the entire regeneration engine, Thornmail punishes anyone trying to auto through it, and the cleaver spam chunks harder than his tank frame suggests. He has one real weakness — percent-HP true damage — so ban Fiora or accept a hard lane. Everyone else eventually runs out of damage before he runs out of health.",
      sideItems:["Thornmail","Randuin's Omen","Kaenic Rookern","Force of Nature","Unending Despair","Overlord's Bloodmail"],
      data:{
        JUGGERNAUT:{ahead:[I("Warmog's Armor","Out-HP the HP war — regen between every trade."),I("Thornmail","Anti-heal their sustain."),I("Heartsteel","Stack the mirror advantage.")],behind:[I("Thornmail","Cut their healing before comparing bars."),I("Spirit Visage","Amplify your regen engine."),I("Randuin's Omen","Slow their walk-down.")],runes:{...DRMUNDO_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Warmog's Armor","Their dive math fails against the regen floor."),I("Randuin's Omen","Slow the dive mid-animation."),I("Unending Despair","Sustain through the skirmish.")],behind:[I("Randuin's Omen","The active blanks their dive window."),I("Spirit Visage","Sustain repeated attempts."),I("Kaenic Rookern","Shield vs AP divers.")],runes:{...DRMUNDO_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Warmog's Armor","Assassins can't burst a mountain — regen erases their work."),I("Thornmail","Return damage on the attempt."),I("Heartsteel","Stack past their kill threshold forever.")],behind:[I("Kaenic Rookern","Magic shield vs AP assassins."),I("Randuin's Omen","Slow the reset escape."),I("Spirit Visage","Regen back the chip.")],runes:{...DRMUNDO_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Thornmail","Anti-heal their sustain — yours is bigger."),I("Randuin's Omen","AS slow blunts their whole kit."),I("Warmog's Armor","Out-regen the extended duel.")],behind:[I("Thornmail","Grievous wounds vs their lifesteal."),I("Randuin's Omen","Break their DPS math."),I("Spirit Visage","Amplify the regen war.")],runes:{...DRMUNDO_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Kaenic Rookern","Magic shield blanks their rotation — regen the rest."),I("Warmog's Armor","HP floor under the burst math."),I("Spirit Visage","MR + regen through the poke.")],behind:[I("Kaenic Rookern","Rush the magic shield."),I("Spirit Visage","MR + healing through the poke war."),I("Force of Nature","Stack MR + speed to close.")],runes:{...DRMUNDO_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Spirit Visage","Regen war — Mundo wins regen wars."),I("Kaenic Rookern","Shield resets every trade."),I("Force of Nature","Stack MR against the drain.")],behind:[I("Force of Nature","MR + speed answers the whole kit."),I("Spirit Visage","Amplify your healing."),I("Kaenic Rookern","Shield the ramp window.")],runes:{...DRMUNDO_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Warmog's Armor","Regen out-paces their poke math entirely."),I("Force of Nature","Speed + MR crosses the zone."),I("Heartsteel","Free HP off their chip.")],behind:[I("Force of Nature","Required mobility through the poke."),I("Spirit Visage","Regen back the chip."),I("Kaenic Rookern","Shield the volleys.")],runes:{...DRMUNDO_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Randuin's Omen","Crit reduction breaks their kite math."),I("Thornmail","Return damage on every auto."),I("Force of Nature","Speed to finally reach them.")],behind:[I("Randuin's Omen","The active blanks their DPS window."),I("Thornmail","Anti-heal their lifesteal."),I("Force of Nature","Speed through the kiting.")],runes:{...DRMUNDO_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Warmog's Armor","Their poke can't outpace your regen."),I("Thornmail","Anti-heal the sustain package."),I("Overlord's Bloodmail","Convert the HP lead into damage.")],behind:[I("Thornmail","Grievous wounds is the win condition."),I("Spirit Visage","Out-sustain their value."),I("Force of Nature","MR + speed vs their poke.")],runes:{...DRMUNDO_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Warmog's Armor","A landed hook onto Mundo is a free Grasp proc."),I("Randuin's Omen","Slow the follow-up burst."),I("Thornmail","Punish the engage that follows.")],behind:[I("Randuin's Omen","Blank the follow-up window."),I("Spirit Visage","Regen the repeated picks."),I("Kaenic Rookern","Shield vs AP catchers.")],runes:{...DRMUNDO_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Warmog's Armor","Out-tank the tank mirror on regen alone."),I("Thornmail","Anti-heal their sustain engage."),I("Overlord's Bloodmail","HP-to-damage conversion wins it.")],behind:[I("Kaenic Rookern","Shield the AP half of their engage."),I("Randuin's Omen","Slow their wombo follow-up."),I("Force of Nature","Speed + MR to counter-engage.")],runes:{...DRMUNDO_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Overlord's Bloodmail","Convert the HP war into damage they must answer."),I("Warmog's Armor","Out-scale the stall on regen."),I("Thornmail","Anti-heal their protected carry.")],behind:[I("Spirit Visage","Sustain the attrition stalemate."),I("Thornmail","Anti-heal to make progress."),I("Force of Nature","MR + speed for the flank.")],runes:{...DRMUNDO_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Warmog's Armor","Generic HP + regen answers most gimmicks."),I("Kaenic Rookern","Shield the surprise burst."),I("Thornmail","Punish whatever they're doing.")],behind:[I("Spirit Visage","Regen through the unfamiliar."),I("Randuin's Omen","Slow the gimmick down."),I("Force of Nature","Speed to just leave.")],runes:{...DRMUNDO_TOP_DEFAULT_RUNES}},
      },
    },
    Jungle:{
      bans:["Udyr","Briar","Kha'Zix"], replacements:["Amumu","Sejuani","Zac"],
      role:"Regenerating Farm Jungler",
      corePath:"Heartsteel  ›  Boots of Swiftness  ›  Dead Man's Plate  ›  Spirit Visage",
      coreNote:"Jungle Mundo trades lane bullying risk for uncontested scaling: his passive plus Fleet sustains the clear, and no jungler wants to fight a camp-fed regenerator at objectives. Heartsteel stacks off every camp, Dead Man's Plate converts his roaming mass into gank speed and slam damage, Spirit Visage amplifies the whole engine, and Titanic Hydra converts the HP pile into real cleave damage. Gank with cleaver-slow plus Approach Velocity chase-down; by 25 minutes he's the frontline their whole team budget can't dent.",
      sideItems:["Titanic Hydra","Thornmail","Warmog's Armor","Kaenic Rookern","Randuin's Omen","Force of Nature"],
      data:{
        JUGGERNAUT:{ahead:[I("Heartsteel","Win the HP race off jungle income."),I("Thornmail","Anti-heal their sustain brawls."),I("Titanic Hydra","Convert the HP pile into cleave.")],behind:[I("Thornmail","Cut their healing before comparing bars."),I("Spirit Visage","Amplify your regen."),I("Randuin's Omen","Slow their walk-down.")],runes:{...DRMUNDO_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Dead Man's Plate","Counter-gank at slam speed."),I("Randuin's Omen","Slow the dive mid-animation."),I("Spirit Visage","Regen through the skirmish.")],behind:[I("Randuin's Omen","The active blanks their dive window."),I("Spirit Visage","Sustain repeated attempts."),I("Kaenic Rookern","Shield vs AP divers.")],runes:{...DRMUNDO_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Warmog's Armor","Their invade burst can't dent the regen floor."),I("Thornmail","Return damage on the attempt."),I("Heartsteel","Stack past their kill threshold.")],behind:[I("Kaenic Rookern","Magic shield vs AP assassins."),I("Randuin's Omen","Slow the reset escape."),I("Spirit Visage","Regen back the chip.")],runes:{...DRMUNDO_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Thornmail","Anti-heal their duel sustain — out-regen the rest."),I("Randuin's Omen","AS slow blunts their kit."),I("Titanic Hydra","Cleave damage wins the extended 1v1.")],behind:[I("Thornmail","Grievous wounds vs their lifesteal."),I("Randuin's Omen","Break their DPS math."),I("Spirit Visage","Amplify the regen war.")],runes:{...DRMUNDO_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Kaenic Rookern","Magic shield blanks their rotation."),I("Warmog's Armor","HP floor under the burst."),I("Spirit Visage","MR + regen through the poke.")],behind:[I("Kaenic Rookern","Rush the magic shield."),I("Spirit Visage","MR + healing through the poke."),I("Force of Nature","Stack MR + speed to close.")],runes:{...DRMUNDO_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Spirit Visage","Regen war — Mundo wins regen wars."),I("Kaenic Rookern","Shield resets every skirmish."),I("Force of Nature","Stack MR against the drain.")],behind:[I("Force of Nature","MR + speed answers the whole kit."),I("Spirit Visage","Amplify your healing."),I("Kaenic Rookern","Shield the ramp window.")],runes:{...DRMUNDO_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Dead Man's Plate","Slam speed crosses the poke zone."),I("Warmog's Armor","Regen out-paces their poke."),I("Heartsteel","Free HP off their chip.")],behind:[I("Force of Nature","Required mobility through the poke."),I("Spirit Visage","Regen back the chip."),I("Kaenic Rookern","Shield the volleys.")],runes:{...DRMUNDO_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Randuin's Omen","Crit reduction breaks their kite math at objectives."),I("Thornmail","Return damage on every auto."),I("Dead Man's Plate","Slam through their peel.")],behind:[I("Randuin's Omen","The active blanks their DPS window."),I("Thornmail","Anti-heal their lifesteal."),I("Force of Nature","Speed through the kiting.")],runes:{...DRMUNDO_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Warmog's Armor","Their poke can't outpace your regen."),I("Thornmail","Anti-heal the sustain package."),I("Titanic Hydra","Cleave through the shield sponge.")],behind:[I("Thornmail","Grievous wounds is the win condition."),I("Spirit Visage","Out-sustain their value."),I("Force of Nature","MR + speed vs their poke.")],runes:{...DRMUNDO_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Warmog's Armor","A landed hook onto Mundo costs them the fight."),I("Randuin's Omen","Slow the follow-up burst."),I("Thornmail","Punish the engage that follows.")],behind:[I("Randuin's Omen","Blank the follow-up window."),I("Spirit Visage","Regen the repeated picks."),I("Kaenic Rookern","Shield vs AP catchers.")],runes:{...DRMUNDO_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Warmog's Armor","Out-tank the tank mirror at objectives."),I("Thornmail","Anti-heal their sustain engage."),I("Titanic Hydra","Cleave wins the frontline war.")],behind:[I("Kaenic Rookern","Shield the AP half of their engage."),I("Randuin's Omen","Slow their wombo follow-up."),I("Force of Nature","Speed + MR to counter-engage.")],runes:{...DRMUNDO_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Titanic Hydra","Cleave cracks the peel stalemate."),I("Warmog's Armor","Out-scale the stall on regen."),I("Thornmail","Anti-heal their protected carry.")],behind:[I("Spirit Visage","Sustain the attrition stalemate."),I("Thornmail","Anti-heal to make progress."),I("Force of Nature","MR + speed for the flank.")],runes:{...DRMUNDO_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Warmog's Armor","Generic HP + regen answers most gimmicks."),I("Kaenic Rookern","Shield the surprise burst."),I("Thornmail","Punish whatever they're doing.")],behind:[I("Spirit Visage","Regen through the unfamiliar."),I("Randuin's Omen","Slow the gimmick down."),I("Force of Nature","Speed to just leave.")],runes:{...DRMUNDO_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
