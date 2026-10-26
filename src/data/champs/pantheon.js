import { I } from "../runeHelpers.js";

// Research (2026-10-26): the owner made the Stormraider's line Pantheon Top's main build. The page is Spear Shot's
//   (Rank 1 EUW, October 2026): Stormraider's, Axiom Arcanist, Absorb Life + Legend: Haste from his videos; Transcendence
//   and Scorch fill the rows he never named. lolalytics 16.21 Emerald+: Stormraider's is the most common Pantheon Top
//   keystone (46.3% of 45.8k games; Conqueror 34.7%, Press the Attack 15.6%). The Conqueror class pages and their 31
//   matchup pages went with the old main build; they are in git history before this commit.
const PANTH_TOP_DEFAULT_RUNES = {
  keystone:       "Stormraider's Surge",
  primary:        "Sorcery",
  primaryRunes:   ["Axiom Arcanist","Transcendence","Scorch"],
  secondary:      "Precision",
  secondaryRunes: ["Absorb Life","Legend: Haste"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Stormraider's Surge triggers once the spear-into-empowered-combo deals a quarter of a champion's health, which Pantheon reaches reliably, and its speed lets you reset the spacing on your terms. Axiom Arcanist adds damage to Grand Starfall and cuts its cooldown on every takedown. Transcendence and Scorch add haste and early poke, Absorb Life heals on each last hit and kill through a lane of trades, and Legend: Haste turns takedowns into permanent basic-ability haste, so more Comet Spears.",
};

const PANTH_JGL_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Coup de Grace"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Cosmic Insight"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "The live meta page (u.gg / mobalytics 26.15): Conqueror for the sustained bruiser fight, Triumph + Legend: Alacrity + Coup de Grace to fund the clear and execute low targets on a gank. Inspiration secondary — Magical Footwear saves 300g toward the Sundered Sky spike, and Cosmic Insight shaves cooldowns off Smite, summoners and items for more gank/objective uptime.",
};

const PANTH_MID_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Last Stand"],
  secondary:      "Domination",
  secondaryRunes: ["Cheap Shot","Relentless Hunter"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Domination secondary maximizes the snowball potential unique to Mid — unlike Top, where Conqueror is the whole identity, Mid Pantheon leans into one-shotting squishies and roaming. Cheap Shot adds true damage on every W-stunned target; Relentless Hunter converts kills into faster roams to the side lanes.",
};

const PANTH_SUP_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Coup de Grace"],
  secondary:      "Domination",
  secondaryRunes: ["Cheap Shot","Relentless Hunter"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Coup de Grace executes low-HP targets after your W stun. Cheap Shot adds true damage on every W. Relentless Hunter enables roaming between Bot and Mid after getting kills.",
};

// ══════════════════════════════════════════════════════════════════════════
//  PANTHEON — Diver / Bruiser
// ══════════════════════════════════════════════════════════════════════════

export default {
    id:      "pantheon",
    display:  "Pantheon",
    dd:       "Pantheon",       // must match filename: champions/Pantheon.png
    color:    "#c0392b",
    glow:     "#e74c3c",
    lanes:    ["Top", "Mid", "Support", "Jungle"],

    // Alternate / off-meta builds (toggleable in the UI). Kept in-file so a
    // champion's whole build picture lives in one place. Shape per role:
    // [{ label, tag:"off-meta"|"alt", corePath, coreNote, runes, sideItems }].
    altBuilds:{
      Top: [{
        label: "Lethality Carry",
        tag: "off-meta",
        corePath: "Youmuu's Ghostblade  ›  Voltaic Cyclosword  ›  The Collector  ›  Serylda's Grudge",
        coreNote: "The greedy glass-cannon line: full lethality, no bruiser durability. Press the Attack and a Sorcery secondary trade survivability for scaling damage, so you fold if caught: play for picks and position. Youmuu's Ghostblade is the roam and lethality spike, Voltaic Cyclosword adds energized burst, The Collector's execute turns spear plus combo into a kill, and Serylda's Grudge pens armor and slows. Then Opportunity, Edge of Night or Profane Hydra.",
        runes: {
          keystone: "Press the Attack",
          primary: "Precision",
          primaryRunes: ["Presence of Mind", "Legend: Haste", "Coup de Grace"],
          secondary: "Sorcery",
          secondaryRunes: ["Transcendence", "Gathering Storm"],
          shards: ["Adaptive Force", "Adaptive Force", "Health (scaling)"],
          reason: "Press the Attack rewards Pantheon's guaranteed three-hit trade (spear, W-auto, auto) with bonus damage AND a damage-amp on the target, so the combo and item procs that follow hit far harder — the burst engine of a lethality carry. The Sorcery secondary is the greedy scaling half: Transcendence gives the ability haste to keep spamming Q, and Gathering Storm stacks raw AD the longer the game runs, so you out-scale the lane into a hyper-carry. Presence of Mind funds the Q spam, Coup de Grace executes low targets, and double Adaptive Force shards maximise the early damage.",
        },
        sideItems: ["Ionian Boots of Lucidity", "Opportunity", "Edge of Night", "Profane Hydra", "Guardian Angel", "Serpent's Fang"],
      }, {
        label: "PTA Bruiser",
        tag: "alt",
        corePath: "Voltaic Cyclosword  ›  Black Cleaver  ›  Sundered Sky  ›  Death's Dance",
        // Research (2026-10-26): the owner's own Voltaic build, Pantheon Top's main until this date, moved here at his request
        //   ("my own, with my playstyle"), keeping this chip's Press the Attack page.
        coreNote: "Voltaic Cyclosword first: once you win the early spear trades, its energized proc, move speed and haste turn that lead into repeated one-combo bursts. Take Eclipse first when even or behind. Black Cleaver second keeps the trades snowballing, Sundered Sky adds a guaranteed-crit heal on Q, and Death's Dance outlasts long fights. Chempunk Chainsword only into sustain lanes (Warwick, Darius, Briar). Build toward The Brutalizer from Pickaxe, not Serrated Dirk. Boots by their damage type.",
        runes: {
          keystone: "Press the Attack",
          primary: "Precision",
          primaryRunes: ["Presence of Mind", "Legend: Haste", "Coup de Grace"],
          secondary: "Resolve",
          secondaryRunes: ["Bone Plating", "Overgrowth"],
          shards: ["Ability Haste", "Adaptive Force", "Health (scaling)"],
          reason: "Press the Attack rewards the exact three-hit trade Pantheon forces (spear, W-auto, auto) with a burst of bonus damage AND a damage-amp debuff on the target, so your Q follow-up and Voltaic proc hit for more. Presence of Mind funds the Q spam, Coup de Grace executes after the W-stun, and the Resolve secondary is the survivability the aggressive line needs — Bone Plating survives the burst-back after you commit, Overgrowth scales your HP for the drawn-out brawls.",
        },
        sideItems: ["Plated Steelcaps","Mercury's Treads","Chempunk Chainsword","Eclipse","Sterak's Gage","Spear of Shojin","Lord Dominik's Regards","Serpent's Fang","Mortal Reminder","Serylda's Grudge","Maw of Malmortius","Edge of Night","Randuin's Omen","Frozen Heart"],
      }],
      Mid: [{
        label: "Lethality Assassin",
        tag: "off-meta",
        corePath: "Youmuu's Ghostblade  ›  Ionian Boots of Lucidity  ›  Voltaic Cyclosword  ›  Edge of Night",
        // Research: Mobalytics 26.14, ~11k games.
        coreNote: "The one-shot roam build, not the Conqueror bruiser: rush lethality, spear-Q from max range, W-stun, and delete the squishy before they react. Youmuu's Ghostblade is the first-item spike for roam speed and lethality, Voltaic Cyclosword adds the energized burst, and Edge of Night blanks the peel spell saved for you. Black Cleaver or Serylda's close it. Far spikier and squishier than the standard page: snowball mid, then roam side lanes with Grand Starfall.",
        runes: {
          keystone: "Electrocute",
          primary: "Domination",
          primaryRunes: ["Sudden Impact", "Sixth Sense", "Treasure Hunter"],
          secondary: "Inspiration",
          secondaryRunes: ["Biscuit Delivery", "Cosmic Insight"],
          shards: ["Adaptive Force", "Adaptive Force", "Health (scaling)"],
          reason: "Electrocute completes in one spear-W-auto combo for the burst window; Sudden Impact procs lethality on every E-stun and leap, Treasure Hunter funds the lethality curve off picks, and the Inspiration splash (Biscuit Delivery, Cosmic Insight) sustains the roam and shortens Grand Starfall's cooldown.",
        },
        sideItems: ["Black Cleaver", "Serylda's Grudge", "Opportunity", "Profane Hydra", "The Collector", "Guardian Angel"],
      }],
    },

    roles:{
            Top:    {  
              // Jax is the user's call (2026-10-24: "Jax is a good ban"), kept despite the
              // data: lolalytics has him as Pantheon's 3rd-best matchup of 36 (55.1% over
              // 6,373 games, +452 gold at 15). Bans no longer affect the lane start.
              bans:["Malphite","Gangplank","Jax"], replacements:["Renekton","Sett","Wukong"],
              skillOrder:["Q","E","W"], // Top maxes Aegis (E) second, not W
                        corePath: "Bastionbreaker  ›  Plated Steelcaps  ›  Voltaic Cyclosword  ›  Edge of Night",
                        // Research (2026-10-26): the Stormraider's line, made the main build by the owner. Spear Shot's build
                        //   (Rank 1 EUW, October 2026), as it was the "Spear Shot — Stormraider's" alternate. lolalytics 16.21
                        //   Emerald+: Bastionbreaker opens 34.9% of Pantheon Top games (Eclipse 28.9%, Voltaic 12.4%), and
                        //   Bastionbreaker > Voltaic is the top first-two pair (31.4% of 45.8k games).
                        coreNote: "Stormraider's is the point: mobile duelists like Fiora choose when the fight happens, and spacing only goes so far. Stormraider's procs on the combo you already throw, then gives you the speed to reset the spacing on your terms. Bastionbreaker makes the line work: 22 lethality and true damage on ability hits, more than double Voltaic's lethality, on a champion whose damage is mostly abilities. Save Edge of Night's spell shield for the ability that decides the trade. Exhaust over Teleport.",
                        sideItems: ["Lord Dominik's Regards", "Sundered Sky", "Spear of Shojin", "Maw of Malmortius", "Guardian Angel", "Serpent's Fang", "Youmuu's Ghostblade", "Mercury's Treads"],
                        // How to play it, from a second high-elo source; every kit fact checked against Riot's 16.21 text
                        playTips: {
          source: "LoL Dobby, \"How a Full AD Pantheon Reached Rank 10\" (19 Oct 2026): a Korean-server Rank 10 Pantheon main on the same Stormraider's line.",
          tips: [
            { phase: "Lane", text: "Harass with Q plus Scorch, and stack Manaflow Band off every Q that lands. Tap Q in trades: a tap refunds 60% of its cooldown, while a charged throw slows you and leaves you exposed." },
            { phase: "Lane", text: "Track the enemy's level 2 spike while you poke. When you go in, open with Q, Flash and finish with W, auto, Q; Ignite early so the low-health Q bonus finishes them." },
            { phase: "Lane", text: "Go in with at least 3 Mortal Will stacks, so W and an auto bring you to 5 and the Q comes out empowered. Even 2 stacks can get there with an extra auto." },
            { phase: "Lane", text: "Hold W until they burn a skill or Flash, then follow the Flash with W: the damage procs Stormraider's for the chase, and the same speed gets you out if it goes wrong." },
            { phase: "Level 6", text: "Land a Q, back off fully as if you recalled, then ult as they walk up to farm. Don't W the instant you land; keep W, auto, Q for the finish." },
            { phase: "Level 6", text: "Grand Starfall fills Mortal Will on landing, so you can open with the empowered Q without spending Flash." },
            { phase: "Mid game", text: "Bastionbreaker first makes the empowered Q hit hard and snowballs off tower plating; Voltaic Cyclosword second. Once you have lethality, the empowered Q alone procs Stormraider's." },
            { phase: "Mid game", text: "Spend Mortal Will on Q rather than W: open Q, Flash, W instead of Flash, W. The empowered Q hits harder and comes back faster for a second Q. With full stacks and a threat on you, Q then E leaves them no counterplay." },
            { phase: "Teamfights", text: "Enemies can stand on your ult landing spot, so keep Flash for after you land. Hunt the marksman, and look for picks with Oracle Lens." },
          ],
          variant: "His build differs from Spear Shot's: Manaflow Band instead of Axiom Arcanist, Triumph + Cut Down instead of Absorb Life + Legend: Haste, and two Adaptive Force shards. He goes Doran's Blade into Bastionbreaker, Voltaic Cyclosword and an armor-penetration item, finishes items before upgrading basic Boots, and takes Serpent's Fang second into heavy shields. Spells: Ignite or Teleport with Flash. He names Malphite and Poppy as the hard matchups.",
        },
                        data: {
                                JUGGERNAUT: {
                                  ahead:  [ I("Lord Dominik's Regards","% armor pen + bonus dmg vs HP stacks — press the lead."), I("Serylda's Grudge","Q/Ult slow seals the execute. Armor pen on a losing Juggernaut."), I("Eclipse","Pure burst to convert lead into a one-rotation kill.") ],
                                  behind: [ I("Black Cleaver","HP + shred in one item — survive while peeling their armor."), I("Death's Dance","Delay lethal burst into a bleed, keeping combo window open."), I("Sterak's Gage","Shield keeps you alive when they catch you at low HP.") ],
                                  runes: {...PANTH_TOP_DEFAULT_RUNES},
                                },
                                DIVER: {
                                  ahead:  [ I("Eclipse","Convert lead fast — burst before they can sustain or disengage."), I("Youmuu's Ghostblade","Active move-speed to chase or re-engage after Ult landing."), I("Death's Dance","Sustain through their mirror-dive while burst finishes them.") ],
                                  behind: [ I("Sterak's Gage","Shield at low HP when Camille/Irelia survives burst and all-ins."), I("Plated Steelcaps","Flat auto reduction on Irelia/Renekton — every auto counts behind."), I("Death's Dance","Convert their burst to bleed so combo window still exists.") ],
                                   runes: {...PANTH_TOP_DEFAULT_RUNES},     
                   
                                },
                                ASSASSIN: {
                                  ahead:  [ I("Eclipse","Out-burst them — your lead means you delete first."), I("Youmuu's Ghostblade","Chase Zed/Akali who disengage after failed bursts."), I("Serylda's Grudge","Slow on Q/Ult stops Talon/Katarina re-entering after their dash.") ],
                                  behind: [ I("Maw of Malmortius","Magic shield at <35% HP — absorbs Akali/Ekko hybrid burst."), I("Edge of Night","Block their engagement opener (Akali E, Kata Shunpo) to survive."), I("Sterak's Gage","Second shield layer + HP; combined with E block, hard to one-shot.") ],
                                  runes: {...PANTH_TOP_DEFAULT_RUNES},                         
                                },
                                SKIRMISHER: {
                                  ahead:  [ I("Eclipse","Burst them before they stack defensive items."), I("Lord Dominik's Regards","Pen through early Fiora/Jax armor during your lead window."), I("Serylda's Grudge","Slow stops Yone/Yasuo kiting and keeps them in your combo.") ],
                                  behind: [ I("Randuin's Omen","Crit damage reduction — vital vs Yasuo, Yone, Tryndamere."), I("Frozen Heart","–20% nearby attack speed. Destroys Fiora/Tryndamere."), I("Black Cleaver","HP + shred to keep damage relevant while in deficit.") ],
                                  runes: {...PANTH_TOP_DEFAULT_RUNES},
                                },
                                BURST_MAGE: {
                                  ahead:  [ I("Eclipse","Dive in and blow them up before they land their full combo."), I("Youmuu's Ghostblade","Speed lets you gap-close faster than their cast animations."), I("Serpent's Fang","Orianna/Karma with early shields — 50% reduction on contact.") ],
                                  behind: [ I("Maw of Malmortius","Magic shield absorbs their dump-everything combo when behind."), I("Edge of Night","Block first CC (Syndra E / Lissandra Q) to prevent the chain."), I("Mercury's Treads","Shorter stun/root duration = more time to retaliate or E-block.") ],
                                  runes: {...PANTH_TOP_DEFAULT_RUNES},
                                },
                                BATTLEMAGE: {
                                  ahead:  [ I("Eclipse","Short burst window — kill before Vladimir can drain back up."), I("Mortal Reminder","GW 40% eliminates their sustain advantage before they regen."), I("Lord Dominik's Regards","Swain/Malzahar stack HP — % pen keeps damage high.") ],
                                  behind: [ I("Maw of Malmortius","Survive the sustained AP DPS window with magic shield."), I("Mortal Reminder","GW is your only offset for their healing when behind."), I("Sterak's Gage","Extra shield gives another window after sustained damage.") ],
                                   runes: {...PANTH_TOP_DEFAULT_RUNES},
                                },
                                ARTILLERY: {
                                  ahead:  [ I("Youmuu's Ghostblade","Sprint active closes the poke gap instantly."), I("Eclipse","One-shot on landing — no escape when you close that fast."), I("Spear of Shojin","Haste + Q reset = ranged poke pressure during the approach.") ],
                                  behind: [ I("Edge of Night","Block one long-range ability — the window to Ult onto them."), I("Mercury's Treads","Shorter Xerath/Vel'Koz CC = more time to close the gap."), I("Sterak's Gage","Survive poke damage accumulated while closing distance.") ],
                                   runes: {...PANTH_TOP_DEFAULT_RUNES},                                
                                },
                                MARKSMAN: {
                                  ahead:  [ I("Eclipse","Two-ability proc = guaranteed one-rotation kill on any ADC."), I("Youmuu's Ghostblade","Active speed closes before they can kite or reposition."), I("Serpent's Fang","Kai'Sa/Samira shields stripped — no escaping your burst.") ],
                                  behind: [ I("Plated Steelcaps","Flat auto reduction is massive — cuts every Jinx/Caitlyn attack."), I("Eclipse","Best damage path even behind — one good Ult = back in game."), I("Sterak's Gage","Shield keeps you alive long enough to find that combo window.") ],
                                   runes: {...PANTH_TOP_DEFAULT_RUNES},
                                },
                                ENCHANTER: {
                                  ahead:  [ I("Serpent's Fang","⭐ PRIORITY — 50% shield strip on contact while ahead."), I("Youmuu's Ghostblade","Active speed: Janna/Lulu can't reposition before your W stun."), I("Eclipse","Overkill burst — with Serpent's Fang up they simply die.") ],
                                  behind: [ I("Serpent's Fang","Still priority even behind — skipping costs every shield trade."), I("Mortal Reminder","Q poke applies GW to limit heals when you can't reach them."), I("Sterak's Gage","Survive Lulu polymorph + their carry's follow-up burst.") ],
                                  runes: {...PANTH_TOP_DEFAULT_RUNES},              
                                },
                                CATCHER: {
                                  ahead:  [ I("Youmuu's Ghostblade","Outmanoeuvre Blitz/Thresh entirely with active speed."), I("Eclipse","Close range, detonate — one-shot the Catcher before they reset."), I("Serpent's Fang","Zac/Morgana shields absorbed — more damage gets through.") ],
                                  behind: [ I("Edge of Night","Spell shield absorbs Blitz Q / Thresh hook — your lifeline."), I("Mercury's Treads","Shorter Nautilus root / Morgana bind when you get caught."), I("Sterak's Gage","Survive the collapse after their Catcher lands CC on you.") ],
                                    runes: {...PANTH_TOP_DEFAULT_RUNES},
                                },
                                VANGUARD: {
                                  ahead:  [ I("Eclipse","Ult in, E their CC, finish with burst before they act."), I("Black Cleaver","Shred Malphite/Ornn armor in 6 Q taps while team is disrupted."), I("Lord Dominik's Regards","% pen while ahead makes their armor irrelevant.") ],
                                  behind: [ I("Mercury's Treads","Default. Malphite Ult, Leona chain, Nautilus root — all shorter."), I("Sterak's Gage","Survive the burst that follows a Vanguard's initiation."), I("Randuin's Omen","AoE slow active peels their engage. Crit reduction vs carry builds.") ],
                                   runes: {...PANTH_TOP_DEFAULT_RUNES},
                                },
                                WARDEN: {
                                  ahead:  [ I("Serpent's Fang","Shen Ult + Braum passive shields stripped by 50% on contact."), I("Lord Dominik's Regards","% pen turns their armor stacking into irrelevant stats."), I("Serylda's Grudge","Slow on Ult stops Tahm Kench body-blocking at the last second.") ],
                                  behind: [ I("Black Cleaver","Shred gradually — even behind, 6 stacks still open them up."), I("Sterak's Gage","Survive their peel long enough to stack Cleaver."), I("Mercury's Treads","Poppy/Galio CC chains shut down your dives — reduce duration.") ],
                                   runes: {...PANTH_TOP_DEFAULT_RUNES},
                                },
                                SPECIALIST: {
                                  ahead:  [ I("Eclipse","Burst Singed/Shyvana before their stacks get critical."), I("Youmuu's Ghostblade","Active speed lets you chase Singed instead of him kiting forever."), I("Serylda's Grudge","Slow means even Quinn can't disengage from your combo.") ],
                                  behind: [ I("Mortal Reminder","GP Orange heal, Kayle sustain, Udyr regen — GW 40% cuts all."), I("Edge of Night","Teemo blind, TF gold card, Kennen stun — blocks their key setup."), I("Sterak's Gage","Survive the poke absorbed while getting to engage range.") ],
                                  runes: {...PANTH_TOP_DEFAULT_RUNES},
                                },
                              },
                    },

            Jungle: {  
              bans:["Briar","Wukong","Rek'Sai"], replacements:["Warwick","Udyr","Lee Sin"],
              skillOrder:["Q","W","E"], // Q@1,4,5,7,9 · W@2,8,10,12,13 · E@3,14,15,17,18
                corePath: "Sundered Sky  ›  Black Cleaver  ›  Guardian Angel  ›  Death's Dance",
                // Research: Sundered Sky's crit-heal edges out Eclipse as the priority first item in current meta.
                coreNote: "Jungle Pantheon relies on early tempo and ganks. Sundered Sky first for its crit-heal; Black Cleaver carries you into mid-game teamfights; Eclipse and Death's Dance round out the burst-into-sustain pattern.",
                sideItems: ["Plated Steelcaps","Mercury's Treads","Youmuu's Ghostblade","Edge of Night","Guardian Angel","Spear of Shojin","Maw of Malmortius","Serpent's Fang","Serylda's Grudge","Sterak's Gage"],

                data: {
                  DIVER: {
                    ahead:  [ I("Eclipse","Win early skirmishes instantly."), I("Youmuu's Ghostblade","Faster rotations between lanes."), I("Death's Dance","Outlast mirror dive fights.") ],
                    behind: [ I("Plated Steelcaps","Reduces sustained auto damage."), I("Sterak's Gage","Gives survivability during engages."), I("Death's Dance","Keeps you alive after committing.") ],
                    runes: { ...PANTH_JGL_DEFAULT_RUNES } 
                  },
                  ASSASSIN: {
                    ahead:  [ I("Eclipse","You win burst race easily when ahead."), I("Edge of Night","Block their engage tool."), I("Youmuu's Ghostblade","Catch them before they reset.") ],
                    behind: [ I("Maw of Malmortius","Essential vs AP assassins."), I("Sterak's Gage","Prevents one-shot after invade."), I("Death's Dance","Extends fight duration.") ],
                    runes: { ...PANTH_JGL_DEFAULT_RUNES }
                  },
                  VANGUARD: {
                    ahead:  [ I("Black Cleaver","Shred tanks for your team."), I("Eclipse","Still gives threat to backline."), I("Serylda's Grudge","Slow helps stick to carries after engage.") ],
                    behind: [ I("Mercury's Treads","Reduce CC chains."), I("Sterak's Gage","Survive engage burst."), I("Black Cleaver","Keep damage relevant.") ],
                    runes: { ...PANTH_JGL_DEFAULT_RUNES }                                         
                  },
                  MARKSMAN: {
                    ahead:  [ I("Youmuu's Ghostblade","Reach backline instantly."), I("Eclipse","Guaranteed one-shot combo."), I("Serpent's Fang","Removes shielding supports’ protection.") ],
                    behind: [ I("Plated Steelcaps","Reduce DPS from ADC."), I("Sterak's Gage","Survive initial burst."), I("Guardian Angel","Second life for risky engages.") ],
                    runes: {
                      ...PANTH_JGL_DEFAULT_RUNES,
                      reason: "Gank bot from the river bush and cut off the escape before the ADC can Flash. Coup de Grace over Last Stand — ADCs die fast.",
                      primaryRunes: ["Triumph","Legend: Haste","Coup de Grace"],
                    },
                    },
                  JUGGERNAUT: {
                    ahead:  [ I("Black Cleaver","Shred their armor stack across a gank + follow-up."), I("Eclipse","Burst finishes what the gank started."), I("Serylda's Grudge","Slow keeps them from ever reaching you back.") ],
                    behind: [ I("Plated Steelcaps","Reduces auto damage from a counter-gank."), I("Death's Dance","Delay lethal damage into a bleed."), I("Sterak's Gage","Shield keeps you alive on a bad invade.") ],
                    runes: { ...PANTH_JGL_DEFAULT_RUNES },
                  },
                  SKIRMISHER: {
                    ahead:  [ I("Eclipse","Burst them before they can stack defensives."), I("Serylda's Grudge","Slow denies their kite after your gank lands."), I("Youmuu's Ghostblade","Faster rotations catch them between camps.") ],
                    behind: [ I("Sterak's Gage","Survive their duel-focused all-in."), I("Death's Dance","Extends the fight so your team can collapse."), I("Plated Steelcaps","Auto reduction vs Fiora/Tryndamere.") ],
                    runes: { ...PANTH_JGL_DEFAULT_RUNES },
                  },
                  BURST_MAGE: {
                    ahead:  [ I("Youmuu's Ghostblade","Close the gap before they land their full combo."), I("Eclipse","One rotation kills once you're in range."), I("Edge of Night","Spell shield eats their engage CC.") ],
                    behind: [ I("Maw of Malmortius","Magic shield absorbs their burst on an invade."), I("Mercury's Treads","Shorter CC gives more time to react."), I("Edge of Night","Blocks the spell that opens their combo.") ],
                    runes: { ...PANTH_JGL_DEFAULT_RUNES },
                  },
                  BATTLEMAGE: {
                    ahead:  [ I("Eclipse","Short trade window kills before they can sustain back."), I("Death's Dance","Bleed conversion outlasts their drain."), I("Black Cleaver","HP + shred vs their scaling durability.") ],
                    behind: [ I("Maw of Malmortius","Survive their sustained AP DPS."), I("Death's Dance","Buys time for your team to help."), I("Sterak's Gage","Second window after a bad invade.") ],
                    runes: { ...PANTH_JGL_DEFAULT_RUNES },
                  },
                  ARTILLERY: {
                    ahead:  [ I("Youmuu's Ghostblade","Sprint closes the poke gap before they can reposition."), I("Eclipse","One-shot on arrival — no time to kite."), I("Edge of Night","Blocks the poke that punishes your gank path.") ],
                    behind: [ I("Edge of Night","Blocks one long-range ability on approach."), I("Mercury's Treads","Shorter CC from range."), I("Sterak's Gage","Survive poke accumulated while closing distance.") ],
                    runes: { ...PANTH_JGL_DEFAULT_RUNES },
                  },
                  ENCHANTER: {
                    ahead:  [ I("Serpent's Fang","⭐ Strips shields before your gank burst lands."), I("Eclipse","With shields gone, the carry just dies."), I("Youmuu's Ghostblade","No reposition window for the Enchanter.") ],
                    behind: [ I("Serpent's Fang","Still priority — never skip vs shield comps."), I("Death's Dance","Extends the fight for a follow-up gank."), I("Sterak's Gage","Survive their peel + carry burst.") ],
                    runes: { ...PANTH_JGL_DEFAULT_RUNES },
                  },
                  CATCHER: {
                    ahead:  [ I("Youmuu's Ghostblade","Outmanoeuvre hooks while ganking."), I("Eclipse","Burst them before they land a second CC."), I("Edge of Night","Blocks the hook entirely.") ],
                    behind: [ I("Edge of Night","Spell shield vs hook champs on invades."), I("Mercury's Treads","Shorter root/bind when caught."), I("Sterak's Gage","Survive the follow-up after a catch.") ],
                    runes: { ...PANTH_JGL_DEFAULT_RUNES },
                  },
                  WARDEN: {
                    ahead:  [ I("Serpent's Fang","Strip Shen/Braum shields on contact."), I("Black Cleaver","Shred through their mitigation over the fight."), I("Serylda's Grudge","Slow denies their body-block positioning.") ],
                    behind: [ I("Black Cleaver","Gradual shred still opens them up."), I("Sterak's Gage","Survive their peel long enough to stack Cleaver."), I("Mercury's Treads","Poppy/Galio CC chains shortened.") ],
                    runes: { ...PANTH_JGL_DEFAULT_RUNES },
                  },
                  SPECIALIST: {
                    ahead:  [ I("Eclipse","Burst Singed/Shyvana before their scaling matters."), I("Youmuu's Ghostblade","Chase down a kiting Specialist."), I("Serylda's Grudge","Slow denies their disengage tools.") ],
                    behind: [ I("Death's Dance","Sustain through their poke/regen kit."), I("Mercury's Treads","Teemo blind, Kennen stun — shorten both."), I("Sterak's Gage","Survive the approach on invades.") ],
                    runes: { ...PANTH_JGL_DEFAULT_RUNES },
                  },

                        },    // closes Jungle data:
                      },      // closes Jungle role

            Mid:    {  
              bans:["Ahri","Ziggs","Akali"], replacements:["Locke","Katarina","Talon"],
              skillOrder:["Q","W","E"], // Mid maxes Q, then W, then E
                        corePath: "Eclipse  ›  Sundered Sky  ›  Black Cleaver  ›  Spear of Shojin",
                        coreNote: "Mid Pantheon is a counterpick into assassins. Eclipse gives kill pressure on short trades; transition into bruiser for mid-game roams and skirmishes.",
                        sideItems: ["Plated Steelcaps","Mercury's Treads","Youmuu's Ghostblade","Edge of Night","Serpent's Fang","Maw of Malmortius","Death's Dance","Serylda's Grudge","Guardian Angel","Black Cleaver"],
                        data: {
                                ASSASSIN: {
                                  ahead:  [ I("Eclipse","You out-burst them — mid lane trades are shorter and lethal."), I("Youmuu's Ghostblade","Roam pressure — convert lane lead into map wins."), I("Serylda's Grudge","Slow prevents escape after their disengage tools.") ],
                                  behind: [ I("Plated Steelcaps","Reduces auto-based assassins like Zed/Qiyana."), I("Death's Dance","Convert burst to bleed so you survive initial combo."), I("Sterak's Gage","Prevents getting one-shot after failed engage.") ],
                                  runes: { ...PANTH_MID_DEFAULT_RUNES },
                                },
                                BURST_MAGE: {
                                  ahead:  [ I("Youmuu's Ghostblade","Close gap before they complete spell rotation."), I("Eclipse","One combo = kill before they kite back."), I("Edge of Night","Spell shield blocks key CC like Syndra E.") ],
                                  behind: [ I("Maw of Malmortius","Critical vs AP burst — gives second life window."), I("Mercury's Treads","Shorter CC chains = more chance to E-block."), I("Edge of Night","Blocks engage spell so you can still all-in.") ],
                                  runes: { ...PANTH_MID_DEFAULT_RUNES },                                
                                },
                                BATTLEMAGE: {
                                  ahead:  [ I("Mortal Reminder","Grievous Wounds denies sustain (Swain/Vlad)."), I("Eclipse","Kill during short trade windows before healing ramps."), I("Black Cleaver","HP + shred vs their scaling durability.") ],
                                  behind: [ I("Maw of Malmortius","Sustain through extended AP damage."), I("Mortal Reminder","Essential vs healing-based mages."), I("Sterak's Gage","Gives second rotation window in extended fights.") ],
                                  runes: { ...PANTH_MID_DEFAULT_RUNES },
                                },
                                ARTILLERY: {
                                  ahead:  [ I("Youmuu's Ghostblade","Gap close instantly from fog or roam."), I("Eclipse","Delete them before they reposition."), I("Edge of Night","Block one long-range CC tool.") ],
                                  behind: [ I("Edge of Night","Gives safe engage window vs poke champs."), I("Mercury's Treads","Reduce CC duration so you can reach them."), I("Sterak's Gage","Survive poke before committing.") ],
                                  runes: { ...PANTH_MID_DEFAULT_RUNES },
                                },
                                JUGGERNAUT: {
                                  ahead:  [ I("Black Cleaver","Shred their armor stack while wave-clearing freely."), I("Eclipse","Burst finishes the short trade before they close."), I("Serylda's Grudge","Slow keeps them from ever reaching you.") ],
                                  behind: [ I("Plated Steelcaps","Reduces auto damage vs Darius/Mordekaiser all-ins."), I("Death's Dance","Delay lethal burst into a bleed."), I("Guardian Angel","Second life to survive their push.") ],
                                  runes: { ...PANTH_MID_DEFAULT_RUNES },
                                },
                                DIVER: {
                                  ahead:  [ I("Eclipse","Burst before their engage combo completes."), I("Youmuu's Ghostblade","Faster roams punish their overextension."), I("Death's Dance","Outlast their all-in with bleed sustain.") ],
                                  behind: [ I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."), I("Death's Dance","Convert their burst to bleed so combo window stays open."), I("Guardian Angel","Second life after a bad dive.") ],
                                  runes: { ...PANTH_MID_DEFAULT_RUNES },
                                },
                                SKIRMISHER: {
                                  ahead:  [ I("Eclipse","Burst them before they stack defensives."), I("Serylda's Grudge","Slow stops Yasuo/Yone kiting."), I("Youmuu's Ghostblade","Roam pressure snowballs the lead.") ],
                                  behind: [ I("Guardian Angel","Trade even against a stronger duelist."), I("Death's Dance","Extends the fight for minion/turret help."), I("Plated Steelcaps","Auto reduction vs Fiora/Tryndamere.") ],
                                  runes: { ...PANTH_MID_DEFAULT_RUNES },
                                },
                                MARKSMAN: {
                                  ahead:  [ I("Eclipse","Two-ability proc guarantees a one-rotation kill."), I("Youmuu's Ghostblade","Close before they kite or reposition."), I("Serpent's Fang","Strip shields protecting the carry.") ],
                                  behind: [ I("Plated Steelcaps","Flat auto reduction vs ranged poke."), I("Guardian Angel","One good Ult and you're back in the game."), I("Death's Dance","Survive long enough to find your window.") ],
                                  runes: { ...PANTH_MID_DEFAULT_RUNES },
                                },
                                ENCHANTER: {
                                  ahead:  [ I("Serpent's Fang","⭐ Strips shields so your burst always connects."), I("Eclipse","Overkill burst once shields are gone."), I("Youmuu's Ghostblade","No reposition window before your all-in.") ],
                                  behind: [ I("Serpent's Fang","Still priority — never skip vs shield comps."), I("Death's Dance","Extends the fight for a follow-up."), I("Guardian Angel","Survive their peel + carry burst.") ],
                                  runes: { ...PANTH_MID_DEFAULT_RUNES },
                                },
                                CATCHER: {
                                  ahead:  [ I("Youmuu's Ghostblade","Outmanoeuvre hooks and engage first."), I("Eclipse","Kill before they reset the fight."), I("Edge of Night","Blocks hook/CC entirely.") ],
                                  behind: [ I("Edge of Night","Spell shield vs hook champs."), I("Mercury's Treads","Shorter root/bind when caught."), I("Guardian Angel","Second life if you get picked.") ],
                                  runes: { ...PANTH_MID_DEFAULT_RUNES },
                                },
                                VANGUARD: {
                                  ahead:  [ I("Black Cleaver","Shred their armor while your team punishes the engage."), I("Eclipse","Burst before their CC chain finishes."), I("Serylda's Grudge","Slow helps you stick to the backline after their engage.") ],
                                  behind: [ I("Mercury's Treads","Shorter stuns/roots from their initiation."), I("Guardian Angel","Survive the burst that follows their engage."), I("Black Cleaver","Keep damage relevant vs stacked armor.") ],
                                  runes: { ...PANTH_MID_DEFAULT_RUNES },
                                },
                                WARDEN: {
                                  ahead:  [ I("Serpent's Fang","Strip Shen/Braum shields on contact."), I("Black Cleaver","Shred through their mitigation gradually."), I("Serylda's Grudge","Slow denies their body-block angle.") ],
                                  behind: [ I("Black Cleaver","Gradual shred still opens them up."), I("Guardian Angel","Survive their peel long enough to stack Cleaver."), I("Mercury's Treads","Poppy/Galio CC chains shortened.") ],
                                  runes: { ...PANTH_MID_DEFAULT_RUNES },
                                },
                                SPECIALIST: {
                                  ahead:  [ I("Eclipse","Burst Singed/Shyvana before scaling matters."), I("Youmuu's Ghostblade","Chase a kiting Specialist."), I("Serylda's Grudge","Slow denies their disengage tools.") ],
                                  behind: [ I("Death's Dance","Sustain through poke/regen kits."), I("Mercury's Treads","Teemo blind, Kennen stun — both shortened."), I("Guardian Angel","Survive the approach.") ],
                                  runes: { ...PANTH_MID_DEFAULT_RUNES },
                                },
                              },
                    },

            Support:{  
              bans:["Janna","Braum","Zyra"], replacements:["Pyke","Xerath","Teemo"],
              skillOrder:["Q","W","E"], // Support opens W (Aegis-Vault poke/roam) then maxes Q
              skillSequence:["W","Q","E","Q","Q","R","Q","W","Q","W","R","W","W","E","E","R","E","E"],
                          corePath: "Umbral Glaive  ›  Eclipse  ›  Black Cleaver  ›  Sundered Sky",
                          coreNote: "Support Pantheon focuses on vision denial + early kill lanes. Umbral Glaive spike is mandatory for map control; then transition into bruiser.",
                          sideItems: ["Plated Steelcaps","Mercury's Treads","Youmuu's Ghostblade","Serpent's Fang","Maw of Malmortius","Death's Dance","Knight's Vow","Zeke's Convergence","Edge of Night"],

                          data: {
                            MARKSMAN: {
                              ahead:  [ I("Eclipse","Burst ADC instantly with W engage."), I("Youmuu's Ghostblade","Close gap before they kite."), I("Serpent's Fang","Remove shielding from supports.") ],
                              behind: [ I("Plated Steelcaps","Reduce ADC auto damage."), I("Knight's Vow","Protect your carry while behind."), I("Sterak's Gage","Survive engages.") ],
                              runes: { ...PANTH_SUP_DEFAULT_RUNES },
                            },
                            ENCHANTER: {
                              ahead:  [ I("Serpent's Fang","⭐ CORE — destroys shields (Lulu/Janna)."), I("Eclipse","With shields removed, burst always kills."), I("Youmuu's Ghostblade","No reposition window for them.") ],
                              behind: [ I("Serpent's Fang","Still mandatory — never skip."), I("Mortal Reminder","Reduce healing when fights drag."), I("Knight's Vow","Play peel instead of engage.") ],
                              runes: {
                                ...PANTH_SUP_DEFAULT_RUNES,
                                champOverrides: {
                                  "Lulu": {
                                    primaryRunes: ["Triumph","Legend: Haste","Coup de Grace"],
                                    reason: "Lulu's Glitterlance slows and her ult knocks up. You need Coup de Grace to execute carries before Lulu saves them.",
                                  },
                                },
                              },
                            },
                            CATCHER: {
                              ahead:  [ I("Youmuu's Ghostblade","Dodge hooks and engage first."), I("Eclipse","Kill them before they reset fight."), I("Edge of Night","Block hook/CC entirely.") ],
                              behind: [ I("Edge of Night","Spell shield vs hook champs."), I("Mercury's Treads","Reduce CC duration."), I("Knight's Vow","Play defensive around ADC.") ],
                              runes: { ...PANTH_SUP_DEFAULT_RUNES },
                            },
                            VANGUARD: {
                              ahead:  [ I("Black Cleaver","Help team shred tanks."), I("Eclipse","Still threatens backline."), I("Serpent's Fang","Remove shields from tank supports.") ],
                              behind: [ I("Mercury's Treads","Reduce CC lock duration."), I("Knight's Vow","Shift to peel role."), I("Sterak's Gage","Survive engage burst.") ],
                              runes: { ...PANTH_SUP_DEFAULT_RUNES },
                            },
                            JUGGERNAUT: {
                              ahead:  [ I("Black Cleaver","Shred their armor while your lane wins the 2v2."), I("Eclipse","Burst finishes the kill lane your W stun sets up."), I("Zeke's Convergence","Amplify your ADC's follow-up damage.") ],
                              behind: [ I("Plated Steelcaps","Reduces auto damage vs Darius/Sett walk-downs."), I("Knight's Vow","Protect your ADC while the Juggernaut presses."), I("Death's Dance","Delay lethal burst into a bleed.") ],
                              runes: { ...PANTH_SUP_DEFAULT_RUNES },
                            },
                            DIVER: {
                              ahead:  [ I("Eclipse","Burst before their dive combo lands."), I("Youmuu's Ghostblade","Reach the backline before the Diver commits."), I("Zeke's Convergence","Amplify your ADC's damage in the skirmish.") ],
                              behind: [ I("Knight's Vow","Share damage taken with your protected ADC."), I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."), I("Death's Dance","Sustain through the all-in.") ],
                              runes: { ...PANTH_SUP_DEFAULT_RUNES },
                            },
                            ASSASSIN: {
                              ahead:  [ I("Eclipse","Out-burst them before they can reset onto your ADC."), I("Edge of Night","Spell shield blocks their engage opener."), I("Youmuu's Ghostblade","Punish their disengage after a failed dive.") ],
                              behind: [ I("Edge of Night","Blocks the setup spell of their combo on your carry."), I("Knight's Vow","Share the burst that would otherwise one-shot your ADC."), I("Death's Dance","Survive long enough for peel to matter.") ],
                              runes: { ...PANTH_SUP_DEFAULT_RUNES },
                            },
                            SKIRMISHER: {
                              ahead:  [ I("Eclipse","Burst them before they can stick to your ADC."), I("Zeke's Convergence","Amplify damage during 2v2 skirmishes."), I("Youmuu's Ghostblade","Rotate faster to help other lanes.") ],
                              behind: [ I("Knight's Vow","Share damage so your ADC survives the duel."), I("Death's Dance","Extends the fight for your ADC's DPS to matter."), I("Plated Steelcaps","Auto reduction vs Fiora/Tryndamere.") ],
                              runes: { ...PANTH_SUP_DEFAULT_RUNES },
                            },
                            BURST_MAGE: {
                              ahead:  [ I("Youmuu's Ghostblade","Close the gap before their combo completes."), I("Eclipse","One rotation kills once shields are stripped."), I("Edge of Night","Blocks the CC that opens their combo on your ADC.") ],
                              behind: [ I("Edge of Night","Non-negotiable vs Syndra E / Ahri charm on your carry."), I("Mercury's Treads","Shorter CC gives your ADC more escape time."), I("Maw of Malmortius","Personal survivability if focused.") ],
                              runes: { ...PANTH_SUP_DEFAULT_RUNES },
                            },
                            BATTLEMAGE: {
                              ahead:  [ I("Eclipse","Short trade window kills before their sustain ramps."), I("Black Cleaver","HP + shred vs their scaling durability."), I("Zeke's Convergence","Amplify ADC damage in the 2v2.") ],
                              behind: [ I("Maw of Malmortius","Survive sustained AP damage."), I("Death's Dance","Bleed conversion outlasts their drain."), I("Knight's Vow","Protect your ADC through the drain fight.") ],
                              runes: { ...PANTH_SUP_DEFAULT_RUNES },
                            },
                            ARTILLERY: {
                              ahead:  [ I("Youmuu's Ghostblade","Close the poke gap before they reposition."), I("Eclipse","Delete them once you're in range."), I("Edge of Night","Blocks one long-range poke tool.") ],
                              behind: [ I("Edge of Night","Blocks the ability punishing your bot lane."), I("Mercury's Treads","Reduce CC duration from range."), I("Knight's Vow","Share the poke damage with your ADC.") ],
                              runes: { ...PANTH_SUP_DEFAULT_RUNES },
                            },
                            WARDEN: {
                              ahead:  [ I("Serpent's Fang","Strip Shen/Braum shields protecting their carry."), I("Black Cleaver","Shred through their mitigation over the fight."), I("Zeke's Convergence","Amplify ADC damage past the body-block.") ],
                              behind: [ I("Black Cleaver","Gradual shred still opens them up."), I("Knight's Vow","Protect your ADC through the peel war."), I("Mercury's Treads","Poppy/Galio CC chains shortened.") ],
                              runes: { ...PANTH_SUP_DEFAULT_RUNES },
                            },
                            SPECIALIST: {
                              ahead:  [ I("Eclipse","Burst a Specialist support before their kit matters."), I("Youmuu's Ghostblade","Rotate to punish their side-lane presence."), I("Zeke's Convergence","Amplify ADC damage in skirmishes.") ],
                              behind: [ I("Death's Dance","Sustain through poke/regen kits."), I("Mercury's Treads","Teemo blind, Kennen stun — both shortened."), I("Knight's Vow","Protect your ADC while you figure out the matchup.") ],
                              runes: { ...PANTH_SUP_DEFAULT_RUNES },
                            },
                          },
                    },

          },
  
  };
