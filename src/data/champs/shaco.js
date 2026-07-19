import { I } from "../runeHelpers.js";

const SHACO_JGL_DEFAULT_RUNES = {
  keystone:       "Hail of Blades",
  primary:        "Domination",
  primaryRunes:   ["Sudden Impact","Grisly Mementos","Relentless Hunter"],
  secondary:      "Precision",
  secondaryRunes: ["Legend: Alacrity","Coup de Grace"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "AD crit Shaco is the current meta build, and Hail of Blades frontloads three fast autos — with backstab crits and Q's guaranteed crit, the burst window deletes squishies before they turn around. Sudden Impact procs on every Deceive, Grisly Mementos stacks haste off his pick pattern, Relentless Hunter speeds the cross-map gank tempo, and Legend: Alacrity + Coup de Grace convert the opener into a finished kill.",
};

// ══════════════════════════════════════════════════════════════════════════
//  SHACO — Demon Jester: AD Crit Trickster  (S tier Jungle 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"shaco", display:"Shaco", dd:"Shaco",
  color:"#4a2a0a", glow:"#e08030",
  lanes:["Jungle"],
  roles:{
    Jungle:{
      bans:["Rammus","Fiddlesticks","Zac"], replacements:["Kayn","Rengar","Nocturne"],
      role:"Stealth Pick Assassin / Box Trickster",
      corePath:"Voltaic Cyclosword  ›  Berserker's Greaves  ›  The Collector  ›  Infinity Edge",
      coreNote:"Meta Shaco is AD crit: Voltaic Cyclosword's energised proc rides the Deceive backstab opener, The Collector executes anyone the burst leaves at 5%, and Infinity Edge multiplies the guaranteed Q crit into true one-shot territory. Lord Dominik's Regards closes against armor. His boxes are the other half of the kit — objective control, anti-facecheck, and free Hail of Blades procs on anyone who walks the wrong path.",
      sideItems:["Lord Dominik's Regards","Edge of Night","Youmuu's Ghostblade","Guardian Angel","Serpent's Fang","Opportunity"],
      data:{
        JUGGERNAUT:{ahead:[I("The Collector","Execute threshold beats their HP stacking."),I("Lord Dominik's Regards","Pen keeps crits real through armor."),I("Voltaic Cyclosword","Burst-and-Deceive-out — never brawl them.")],behind:[I("Edge of Night","Block the pull that starts their all-in."),I("Guardian Angel","Insurance when they corner you."),I("Youmuu's Ghostblade","Speed to never be catchable.")],runes:{...SHACO_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Voltaic Cyclosword","Burst them mid-engage from stealth."),I("The Collector","Execute the diver who commits low."),I("Edge of Night","Block the dive-opener.")],behind:[I("Edge of Night","Spell shield answers their engage ability."),I("Guardian Angel","Second life on contested dives."),I("Youmuu's Ghostblade","Speed to escape the collapse.")],runes:{...SHACO_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Voltaic Cyclosword","Your stealth opener wins the burst race."),I("The Collector","Execute before their combo finishes."),I("Edge of Night","Block their opener.")],behind:[I("Edge of Night","Rush — blanks their combo starter."),I("Guardian Angel","Trade one-shots; the clone confuses the revive."),I("Youmuu's Ghostblade","Speed resets the assassin mirror.")],runes:{...SHACO_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("The Collector","Never duel — burst, execute, Deceive out."),I("Infinity Edge","Crit spike ends fights in the opener."),I("Youmuu's Ghostblade","Speed controls who picks the fight.")],behind:[I("Edge of Night","Block the gap-close that starts their duel."),I("Guardian Angel","Insurance when they force the 1v1."),I("Lord Dominik's Regards","Pen through their bruiser items.")],runes:{...SHACO_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Voltaic Cyclosword","Backstab opener lands before their rotation."),I("The Collector","Execute through their Zhonya's timing."),I("Edge of Night","Block the rotation opener.")],behind:[I("Edge of Night","Spell shield eats the combo starter."),I("Maw of Malmortius","Magic shield floors their burst."),I("Guardian Angel","Survive the caught scenario.")],runes:{...SHACO_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Voltaic Cyclosword","Kill inside one stealth window before they ramp."),I("The Collector","Execute beats drain sustain."),I("Youmuu's Ghostblade","Speed around their zone control.")],behind:[I("Maw of Malmortius","Magic lifeline against the drain."),I("Edge of Night","Blocks their opening CC."),I("Guardian Angel","Survive extended fights.")],runes:{...SHACO_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Voltaic Cyclosword","Deceive erases their range advantage instantly."),I("The Collector","Delete them on arrival."),I("Infinity Edge","One backstab crit ends it.")],behind:[I("Edge of Night","Spell shield eats one poke spell on approach."),I("Youmuu's Ghostblade","Speed through the poke zone."),I("Guardian Angel","Covers the committed engage.")],runes:{...SHACO_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("The Collector","Squishy carries die to stealth-opener plus execute."),I("Infinity Edge","Crit math guarantees the one-shot."),I("Lord Dominik's Regards","Pen through their armor buys.")],behind:[I("Edge of Night","Block the peel CC on the way in."),I("Guardian Angel","Trade kills and revive."),I("Youmuu's Ghostblade","Speed through their kiting.")],runes:{...SHACO_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Serpent's Fang","The anti-shield item — built for this matchup."),I("The Collector","Execute under the shield threshold."),I("Voltaic Cyclosword","Burst through the shield window.")],behind:[I("Serpent's Fang","Still correct — shields are the problem."),I("Edge of Night","Block the setup CC."),I("Guardian Angel","Survive the peel damage.")],runes:{...SHACO_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Youmuu's Ghostblade","Speed + stealth makes their hooks pointless."),I("Voltaic Cyclosword","Burst the catcher on the whiff."),I("Edge of Night","Spell shield eats the hook.")],behind:[I("Edge of Night","Rush — the hook is their whole gameplan."),I("Guardian Angel","Survive the caught scenario."),I("Maw of Malmortius","Vs AP catchers.")],runes:{...SHACO_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Pen keeps crits real through their frontline."),I("Youmuu's Ghostblade","Deceive angles their engage can't cover."),I("Edge of Night","Block the engage CC.")],behind:[I("Edge of Night","Spell shield beats the initiation."),I("Guardian Angel","Survive the engage chain at objectives."),I("Lord Dominik's Regards","Required pen from behind.")],runes:{...SHACO_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Giant slayer through the peel-tank."),I("The Collector","Execute the carry through the peel."),I("Voltaic Cyclosword","Frontload beats reactive peel.")],behind:[I("Lord Dominik's Regards","Mandatory vs stacked armor."),I("Edge of Night","Block their lockdown."),I("Guardian Angel","Insurance on the dive.")],runes:{...SHACO_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Youmuu's Ghostblade","Out-trick the trickster matchups with tempo."),I("The Collector","Execute them in one window."),I("Voltaic Cyclosword","Burst from stealth beats setup kits.")],behind:[I("Edge of Night","Spell shield covers the unreadable opener."),I("Guardian Angel","Survive what you can't scout."),I("Maw of Malmortius","Vs AP specialists.")],runes:{...SHACO_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
