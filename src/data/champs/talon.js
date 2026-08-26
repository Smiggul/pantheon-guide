import { I } from "../runeHelpers.js";

const TALON_MID_DEFAULT_RUNES = {
  keystone:       "Electrocute",
  primary:        "Domination",
  primaryRunes:   ["Sudden Impact","Grisly Mementos","Ultimate Hunter"],
  secondary:      "Sorcery",
  secondaryRunes: ["Absolute Focus","Scorch"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Electrocute fires on Talon's basic Q-W-auto pattern and rewards the three-hit passive bleed his whole kit is built around. Sudden Impact procs off every Assassin's Path parkour entry and Q leap, Grisly Mementos stacks haste off the roam-kill loop, and Ultimate Hunter feeds more Shadow Assault windows — his ult is his engage, his escape, and his teamfight burst all at once. Absolute Focus and Scorch make his early lane poke actually hurt.",
};

const TALON_JGL_DEFAULT_RUNES = {
  keystone:       "Fleet Footwork",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Coup de Grace"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Cosmic Insight"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Jungle Talon runs a completely different page from Mid: Fleet Footwork sustains his clear (his early camps are rough without it) and the move speed feeds his parkour gank paths. Triumph refunds HP on every gank kill, Legend: Alacrity speeds the clear further, Coup de Grace finishes what the W-bleed starts, and the Inspiration economy package accelerates the Umbral Glaive vision-control spike that defines his jungle identity.",
};

// ══════════════════════════════════════════════════════════════════════════
//  TALON — Blade's-Shadow Roam Assassin  (Mid + S tier Jungle 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"talon", display:"Talon", dd:"Talon",
  color:"#2a2a3e", glow:"#8a90c0",
  lanes:["Mid","Jungle"],
  altBuilds:{
    Jungle:[{
      label:"OP 26.17 ALT", tag:"alt",
      corePath:"Umbral Glaive  ›  Ionian Boots of Lucidity  ›  Bastionbreaker  ›  Voltaic Cyclosword",
      coreNote:"Skill-Capped one-shot Talon JG: still rush Umbral Glaive (its vision-denial passive is massive on him), then the three-item combo Umbral → Bastionbreaker → Voltaic Cyclosword. Every one of those has a burst passive, and the true damage from Umbral + Bastionbreaker lets you delete a squishy on the two-item spike. Fleet Footwork (buffed 26.16) keeps him a top-tier snowball jungler; use Bastionbreaker's tower shred to close games fast.",
      runes:{...TALON_JGL_DEFAULT_RUNES},
      sideItems:["Youmuu's Ghostblade","Serylda's Grudge","Edge of Night","Axiom Arc","Mercury's Treads"],
    }],
  },
  roles:{
    Mid:{
      bans:["Lissandra","Vladimir","Annie"], replacements:["Zed","Katarina","Naafiri"],
      role:"Roam Assassin / Parkour Ganker",
      corePath:"Youmuu's Ghostblade  ›  Ionian Boots of Lucidity  ›  Voltaic Cyclosword  ›  Edge of Night",
      coreNote:"Talon mid is a roam-first assassin — shove the wave, parkour over a wall, and delete a side laner before anyone sees the ping. Youmuu's Ghostblade gives the active move speed his roam timing is built around, Voltaic Cyclosword's energised proc slots straight into the Q opener, and Edge of Night's spell shield lets him jump targets who are saving one answer for him. Serylda's Grudge closes against the armor his kills fund.",
      sideItems:["Serylda's Grudge","Axiom Arc","Serpent's Fang","Guardian Angel","Maw of Malmortius","Opportunity"],
      data:{
        JUGGERNAUT:{ahead:[I("Youmuu's Ghostblade","Speed to poke-and-fade — never let them touch you."),I("Serylda's Grudge","Armor pen keeps Q chunks real."),I("Voltaic Cyclosword","Energised burst on every re-engage.")],behind:[I("Edge of Night","Spell shield blocks the pull that starts their kill."),I("Guardian Angel","Insurance against the one landed engage."),I("Maw of Malmortius","If their damage is mixed, the lifeline shield.")],runes:{...TALON_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Voltaic Cyclosword","Burst them mid-dive before their combo lands."),I("Youmuu's Ghostblade","Out-speed their engage tempo."),I("Edge of Night","Blocks the dive-opener entirely.")],behind:[I("Edge of Night","Spell shield answers the engage ability."),I("Guardian Angel","Second life against the dive."),I("Maw of Malmortius","Shield vs AP divers.")],runes:{...TALON_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Voltaic Cyclosword","Win the burst race with the energised opener."),I("Youmuu's Ghostblade","Speed controls who picks the fight."),I("Edge of Night","Their combo starts with one ability — block it.")],behind:[I("Edge of Night","Rush — the spell shield blanks their opener."),I("Guardian Angel","Trade one-shots and come back up."),I("Maw of Malmortius","Vs AP assassins, the shield wins the race.")],runes:{...TALON_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Youmuu's Ghostblade","Never duel — burst and leave before they ramp."),I("Voltaic Cyclosword","Frontload everything in the opening second."),I("Serylda's Grudge","Pen through their early bruiser items.")],behind:[I("Edge of Night","Block the gap-close that starts their duel."),I("Guardian Angel","Insurance when they force the fight."),I("Maw of Malmortius","Lifeline vs AP skirmishers.")],runes:{...TALON_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Voltaic Cyclosword","Your combo is faster — end it first."),I("Youmuu's Ghostblade","Speed dodges their setup skillshot."),I("Edge of Night","Block the rotation opener.")],behind:[I("Edge of Night","Spell shield eats the combo starter."),I("Maw of Malmortius","Magic shield floors their burst."),I("Guardian Angel","Survive the rotation you can't dodge.")],runes:{...TALON_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Youmuu's Ghostblade","Burst-and-fade beats sustained drain."),I("Voltaic Cyclosword","Kill inside one window before they ramp."),I("Serylda's Grudge","Pen scales into their HP items.")],behind:[I("Maw of Malmortius","Magic lifeline against the drain."),I("Edge of Night","Blocks their opening CC."),I("Guardian Angel","Survive the extended fight you can't avoid.")],runes:{...TALON_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Youmuu's Ghostblade","Active speed closes their range instantly."),I("Voltaic Cyclosword","Delete them on arrival."),I("Edge of Night","Block the self-peel spell they save for you.")],behind:[I("Edge of Night","Spell shield eats one poke spell on approach."),I("Maw of Malmortius","Shield vs their AP poke."),I("Guardian Angel","Covers the committed all-in.")],runes:{...TALON_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Voltaic Cyclosword","Squishy carries die to one Q-W-auto."),I("Youmuu's Ghostblade","Speed through their kiting."),I("Serylda's Grudge","Pen through their armor shard + Cloak.")],behind:[I("Edge of Night","Block the peel CC on the way in."),I("Guardian Angel","Trade kills and revive."),I("Maw of Malmortius","Vs mixed-damage bot lanes.")],runes:{...TALON_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Serpent's Fang","The anti-shield item — built for this matchup."),I("Voltaic Cyclosword","Burst through the shield window."),I("Youmuu's Ghostblade","Speed past peel to the carry.")],behind:[I("Serpent's Fang","Still correct from behind — shields are the problem."),I("Edge of Night","Block the setup CC."),I("Guardian Angel","Survive the protected carry's damage.")],runes:{...TALON_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Youmuu's Ghostblade","Speed makes their hooks unlandable."),I("Voltaic Cyclosword","Burst the catcher on the whiff."),I("Edge of Night","Spell shield eats the hook outright.")],behind:[I("Edge of Night","Rush — the hook is their whole gameplan."),I("Guardian Angel","Survive the caught scenario."),I("Maw of Malmortius","Vs AP catchers.")],runes:{...TALON_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Serylda's Grudge","Armor pen keeps damage real through their frontline."),I("Youmuu's Ghostblade","Speed around them to the backline."),I("Edge of Night","Block the engage CC.")],behind:[I("Edge of Night","Spell shield beats the initiation."),I("Guardian Angel","Survive the engage chain."),I("Serylda's Grudge","Required pen from behind.")],runes:{...TALON_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Serylda's Grudge","Pen through the peel-tank to the carry."),I("Voltaic Cyclosword","Enough frontload beats reactive peel."),I("Youmuu's Ghostblade","Speed picks the angle their peel can't cover.")],behind:[I("Serylda's Grudge","Mandatory vs stacked armor."),I("Edge of Night","Block their lockdown."),I("Guardian Angel","Insurance on the dive.")],runes:{...TALON_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Youmuu's Ghostblade","Roam away from the gimmick — punish elsewhere."),I("Voltaic Cyclosword","Burst them in one window."),I("Edge of Night","Block their key setup ability.")],behind:[I("Edge of Night","Spell shield covers the unreadable opener."),I("Guardian Angel","Survive the setup you can't scout."),I("Maw of Malmortius","Vs AP specialists.")],runes:{...TALON_MID_DEFAULT_RUNES}},
      },
    },
    Jungle:{
      bans:["Rammus","Poppy","Malphite"], replacements:["Kayn","Rengar","Nocturne"],
      role:"Vision-Control Assassin Jungler",
      corePath:"Umbral Glaive  ›  Boots of Swiftness  ›  Voltaic Cyclosword  ›  Axiom Arc",
      coreNote:"Jungle Talon is S-tier this patch on a Fleet Footwork sustain-clear into Umbral Glaive — the sweep-on-hit passive erases enemy vision along his parkour gank paths, so his ganks come from angles that were warded five seconds ago. Voltaic Cyclosword frontloads the gank burst, Axiom Arc refunds Shadow Assault off every takedown, and Serylda's Grudge closes the build against stacked armor.",
      sideItems:["Serylda's Grudge","Edge of Night","Serpent's Fang","Guardian Angel","Youmuu's Ghostblade","Opportunity"],
      data:{
        JUGGERNAUT:{ahead:[I("Voltaic Cyclosword","Burst-and-leave beats their jungle brawl."),I("Serylda's Grudge","Pen keeps chunks real through armor."),I("Axiom Arc","More ults = more skirmish resets.")],behind:[I("Edge of Night","Block the pull that starts their all-in."),I("Guardian Angel","Insurance in forced river fights."),I("Maw of Malmortius","Vs mixed-damage bruisers.")],runes:{...TALON_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Voltaic Cyclosword","Burst them mid-engage before the combo lands."),I("Umbral Glaive","Dark vision = they never see your counter-gank."),I("Edge of Night","Block the dive-opener.")],behind:[I("Edge of Night","Spell shield answers their engage ability."),I("Guardian Angel","Second life on contested dives."),I("Maw of Malmortius","Shield vs AP divers.")],runes:{...TALON_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Voltaic Cyclosword","Win the burst race in river fights."),I("Umbral Glaive","Vision control decides assassin mirrors."),I("Edge of Night","Block their combo opener.")],behind:[I("Edge of Night","Rush — blanks their opener in every skirmish."),I("Guardian Angel","Trade one-shots and come back."),I("Maw of Malmortius","Vs AP assassins.")],runes:{...TALON_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Voltaic Cyclosword","Frontload the fight — never let them ramp."),I("Serylda's Grudge","Pen through their bruiser core."),I("Axiom Arc","Ult resets escape their counter-engage.")],behind:[I("Edge of Night","Block the gap-close that starts their duel."),I("Guardian Angel","Insurance in the 1v1 you can't refuse."),I("Maw of Malmortius","Lifeline vs AP skirmishers.")],runes:{...TALON_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Voltaic Cyclosword","Your gank combo lands before their rotation."),I("Umbral Glaive","Kill wards, gank the unseen angle."),I("Edge of Night","Block the rotation opener.")],behind:[I("Edge of Night","Spell shield eats the combo starter."),I("Maw of Malmortius","Magic shield floors their burst."),I("Guardian Angel","Survive the caught scenario.")],runes:{...TALON_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Voltaic Cyclosword","Kill inside one window before they ramp."),I("Serylda's Grudge","Pen scales into their HP stacking."),I("Umbral Glaive","Flank angles their zone control can't watch.")],behind:[I("Maw of Malmortius","Magic lifeline against the drain."),I("Edge of Night","Blocks their opening CC."),I("Guardian Angel","Survive extended fights.")],runes:{...TALON_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Umbral Glaive","Erase the wards that protect their poke range."),I("Voltaic Cyclosword","Delete them on arrival."),I("Boots of Swiftness","Speed through the poke on approach.")],behind:[I("Edge of Night","Spell shield eats one poke spell."),I("Maw of Malmortius","Shield vs AP poke."),I("Guardian Angel","Covers the committed engage.")],runes:{...TALON_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Voltaic Cyclosword","Squishy carries die to one gank window."),I("Umbral Glaive","Their bot lane wards die before your gank."),I("Serylda's Grudge","Pen through their armor buys.")],behind:[I("Edge of Night","Block the peel CC on the way in."),I("Guardian Angel","Trade kills and revive."),I("Maw of Malmortius","Vs mixed-damage carries.")],runes:{...TALON_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Serpent's Fang","The anti-shield item — built for this."),I("Voltaic Cyclosword","Burst through the shield window."),I("Umbral Glaive","Sweep their defensive vision first.")],behind:[I("Serpent's Fang","Still correct — shields are the problem."),I("Edge of Night","Block the setup CC."),I("Guardian Angel","Survive the peel damage.")],runes:{...TALON_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Umbral Glaive","Kill their wards — catchers are blind without vision."),I("Voltaic Cyclosword","Burst the catcher on the whiff."),I("Edge of Night","Spell shield eats the hook.")],behind:[I("Edge of Night","Rush — the hook is their whole gameplan."),I("Guardian Angel","Survive the caught scenario."),I("Maw of Malmortius","Vs AP catchers.")],runes:{...TALON_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Serylda's Grudge","Pen keeps damage real through their frontline."),I("Umbral Glaive","Gank angles their engage can't cover."),I("Edge of Night","Block the engage CC.")],behind:[I("Edge of Night","Spell shield beats the initiation."),I("Guardian Angel","Survive the engage chain at objectives."),I("Serylda's Grudge","Required pen from behind.")],runes:{...TALON_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Serylda's Grudge","Pen through the peel-tank to the carry."),I("Voltaic Cyclosword","Frontload beats reactive peel."),I("Umbral Glaive","Unseen angles beat positioned peel.")],behind:[I("Serylda's Grudge","Mandatory vs stacked armor."),I("Edge of Night","Block their lockdown."),I("Guardian Angel","Insurance on the dive.")],runes:{...TALON_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Umbral Glaive","Vision control beats gimmick setups."),I("Voltaic Cyclosword","Burst them in one window."),I("Axiom Arc","Ult uptime answers weird kits.")],behind:[I("Edge of Night","Spell shield covers the unreadable opener."),I("Guardian Angel","Survive what you can't scout."),I("Maw of Malmortius","Vs AP specialists.")],runes:{...TALON_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
