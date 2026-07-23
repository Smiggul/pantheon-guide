import { I } from "../runeHelpers.js";

const PANTH_TOP_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Presence of Mind","Legend: Haste","Last Stand"],
  secondary:      "Sorcery",
  secondaryRunes: ["Transcendence","Scorch"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "The live meta page (Mobalytics/u.gg 26.14, ~63% WR on the top build): Conqueror stacks fast on Q spam. Presence of Mind is the key change over Triumph — it refunds mana on every takedown and restores mana as you damage champions, which is what actually lets Pantheon spam Q and W through a lane without recalling. Legend: Haste lowers Q/W/E cooldowns, Last Stand rewards the low-HP Conqueror brawls, and Transcendence + Scorch add CDR and early poke.",
};

const PANTH_JGL_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Last Stand"],
  secondary:      "Inspiration",
  secondaryRunes: ["Hextech Flashtraption","Cosmic Insight"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Hextech Flashtraption replaces Flash while on CD with a wall-traversing version — surprise W stuns from unexpected jungle angles. Cosmic Insight reduces Summoner Spell CDs for more Smite and Hexflash uptime.",
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
        coreNote: "The greedy glass-cannon line — skip the bruiser durability entirely and build a full-lethality carry that snowballs into a one-shot machine. PTA + a Sorcery secondary trade survivability for raw scaling damage: you farm, roam, and delete squishies, but you fold if you get caught, so play for picks and position. Youmuu's Ghostblade is the roam + lethality spike, Voltaic Cyclosword adds the energized auto-reset burst, The Collector gives the execute threshold that turns a spear + combo into an instant kill, and Serylda's Grudge pens armor + slows so nothing escapes the follow-up. Opportunity, Edge of Night, or Profane Hydra continue it. Play greedy — scale, pick, and carry.",
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
        corePath: "Voltaic Cyclosword  ›  Black Cleaver  ›  Spear of Shojin  ›  Death's Dance",
        coreNote: "A personal line — Press the Attack instead of Conqueror, with a Resolve secondary for survivability, built on Voltaic Cyclosword and the rest of the lethality/bruiser items. PTA procs on the spear → W-stun → auto three-hit and then amplifies ALL damage the target takes for the window, so the follow-up Q and item burst land much harder — perfect for the short, decisive trades Pantheon lives on. Voltaic first for the energized auto-reset burst + move speed, Black Cleaver for the armor shred + HP, Spear of Shojin for the ability haste + ability-damage amp that supercharges the Q-spam trades, and Death's Dance to outlast. Black Cleaver already handles your armor pen, so Serylda's Grudge is an either/or swap for it (sideItems) — take Serylda's over Cleaver when you need the slow to stick, not both. Tankier and more forgiving than the pure-lethality Carry line — you brawl the trades instead of one-shotting from range.",
        runes: {
          keystone: "Press the Attack",
          primary: "Precision",
          primaryRunes: ["Presence of Mind", "Legend: Haste", "Coup de Grace"],
          secondary: "Resolve",
          secondaryRunes: ["Bone Plating", "Overgrowth"],
          shards: ["Ability Haste", "Adaptive Force", "Health (scaling)"],
          reason: "Press the Attack rewards the exact three-hit trade Pantheon forces (spear, W-auto, auto) with a burst of bonus damage AND a damage-amp debuff on the target, so your Q follow-up and Voltaic proc hit for more. Presence of Mind funds the Q spam, Coup de Grace executes after the W-stun, and the Resolve secondary is the survivability the aggressive line needs — Bone Plating survives the burst-back after you commit, Overgrowth scales your HP for the drawn-out brawls.",
        },
        sideItems: ["Serylda's Grudge", "Eclipse", "Edge of Night", "Opportunity", "Sterak's Gage", "Youmuu's Ghostblade", "Maw of Malmortius", "Serpent's Fang"],
      }],
      Mid: [{
        label: "Lethality Assassin",
        tag: "off-meta",
        corePath: "Youmuu's Ghostblade  ›  Ionian Boots of Lucidity  ›  Voltaic Cyclosword  ›  Edge of Night",
        coreNote: "The one-shot roam build (Mobalytics 26.14, ~11k games), not the Conqueror bruiser: rush lethality, spear-Q from max range, W-stun, and delete the squishy before they react. Youmuu's Ghostblade is the first-item spike — roam speed + lethality — Voltaic Cyclosword adds the energized auto-reset burst, and Edge of Night blanks the peel spell saved for you. Black Cleaver or Serylda's close it. Far spikier and squishier than the standard page — snowball mid, roam side lanes with Grand Starfall.",
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
              bans:["Jax","Malphite","Fiora"], replacements:["Renekton","Sett","Wukong"],
                        corePath: "Voltaic Cyclosword  ›  Black Cleaver  ›  Sundered Sky  ›  Death's Dance",
                        coreNote: "Voltaic Cyclosword first — the lead-snowball line. Once you win the early spear trades, Voltaic's energized proc + move speed + ability haste convert that lead into repeated one-combo bursts far better than Eclipse. Eclipse is the safer alternative first item and still shows up below in Situational Items — pick it instead when you're even or behind rather than ahead. Black Cleaver is the standard second core: its shred keeps Conqueror trades snowballing. Sundered Sky adds the guaranteed-crit heal on Q, and Death's Dance turns extended fights into a bleed you outlast. Chempunk Chainsword (below, under Anti-Heal) is Pantheon's best AD scaling swap specifically into sustain lanes — Warwick, Darius, Briar — not a default buy. First back after Voltaic is The Brutalizer (it now builds from Pickaxe, not Serrated Dirk, since its rework — so buy toward Brutalizer, not a dead-end Dirk); swap Plated Steelcaps / Mercury's Treads to the matchup's damage type.",
                        sideItems: ["Plated Steelcaps","Mercury's Treads","Chempunk Chainsword","Eclipse","Sterak's Gage","Spear of Shojin","Lord Dominik's Regards","Serpent's Fang","Mortal Reminder","Serylda's Grudge","Maw of Malmortius","Banshee's Veil","Randuin's Omen","Frozen Heart"],
                        data: {
                                JUGGERNAUT: {
                                  ahead:  [ I("Lord Dominik's Regards","% armor pen + bonus dmg vs HP stacks — press the lead."), I("Serylda's Grudge","Q/Ult slow seals the execute. Armor pen on a losing Juggernaut."), I("Eclipse","Pure burst to convert lead into a one-rotation kill.") ],
                                  behind: [ I("Black Cleaver","HP + shred in one item — survive while peeling their armor."), I("Death's Dance","Delay lethal burst into a bleed, keeping combo window open."), I("Sterak's Gage","Shield keeps you alive when they catch you at low HP.") ],
                                  runes: {
                                            keystone: "Conqueror",
                                            primary: "Precision",
                                            primaryRunes: ["Presence of Mind","Legend: Haste","Cut Down"],
                                            secondary: "Sorcery",
                                            secondaryRunes: ["Transcendence","Scorch"],
                                            shards: ["Ability Haste","Adaptive Force","Health (scaling)"],
                                            reason: "Cut Down amplifies damage vs high-HP Juggernauts by up to 15%. Conqueror stacks on every Q poke.",
                                            champOverrides: {
                                              "Dr. Mundo": {
                                                secondaryRunes: ["Transcendence","Gathering Storm"],
                                                reason: "Dr. Mundo outscales you hard — Gathering Storm helps you stay relevant. Rush Mortal Reminder.",
                                              },
                                              "Nasus": {
                                                primaryRunes: ["Presence of Mind","Legend: Haste","Last Stand"],
                                                secondary: "Domination",
                                                secondaryRunes: ["Cheap Shot","Relentless Hunter"],
                                                shards: ["Ability Haste","Adaptive Force","Health (scaling)"],
                                                reason: "Nasus is a lane bully pre-30 stacks but loses late. Relentless Hunter lets you roam and starve him of CS.",
                                              },
                                            },
                                          },
                                },
                                DIVER: {
                                  ahead:  [ I("Eclipse","Convert lead fast — burst before they can sustain or disengage."), I("Youmuu's Ghostblade","Active move-speed to chase or re-engage after Ult landing."), I("Death's Dance","Sustain through their mirror-dive while burst finishes them.") ],
                                  behind: [ I("Sterak's Gage","Shield at low HP when Camille/Irelia survives burst and all-ins."), I("Plated Steelcaps","Flat auto reduction on Irelia/Renekton — every auto counts behind."), I("Death's Dance","Convert their burst to bleed so combo window still exists.") ],
                                   runes: {
                                            keystone: "Conqueror",
                                            primary: "Precision",
                                            primaryRunes: ["Triumph","Legend: Bloodline","Last Stand"],
                                            secondary: "Resolve",
                                            secondaryRunes: ["Bone Plating","Second Wind"],
                                            shards: ["Ability Haste","Adaptive Force","Health (scaling)"],
                                            reason: "Divers CC you during dives — Tenacity shortens every stun, slow and root. Bone Plating reduces their burst on landing.",
                                            champOverrides: {
                                              "Irelia": {
                                                primaryRunes: ["Triumph","Legend: Bloodline","Last Stand"],
                                                secondary: "Resolve",
                                                secondaryRunes: ["Bone Plating","Conditioning"],
                                                shards: ["Ability Haste","Adaptive Force","Health (scaling)"],
                                                reason: "Irelia's mark and stun stack into long CC chains. Bone Plating breaks her short-trade pattern. E her during the stun.",
                                              },
                                              "Camille": {
                                                secondary: "Resolve",
                                                secondaryRunes: ["Bone Plating","Second Wind"],
                                                reason: "Camille's E deals physical + true damage. Bone Plating reduces both hits. Don't fight her in her hextech cage.",
                                              },
                                              "Sylas": {
                                                shards: ["Ability Haste","Adaptive Force","Tenacity"],
                                                reason: "Sylas deals AP damage — swap the armor shard for MR. His chains CC you — Tenacity is essential.",
                                              },
                                            },
                                          },     
                   
                                },
                                ASSASSIN: {
                                  ahead:  [ I("Eclipse","Out-burst them — your lead means you delete first."), I("Youmuu's Ghostblade","Chase Zed/Akali who disengage after failed bursts."), I("Serylda's Grudge","Slow on Q/Ult stops Talon/Katarina re-entering after their dash.") ],
                                  behind: [ I("Maw of Malmortius","Magic shield at <35% HP — absorbs Akali/Ekko hybrid burst."), I("Banshee's Veil","Block their engagement opener (Akali E, Kata Shunpo) to survive."), I("Sterak's Gage","Second shield layer + HP; combined with E block, hard to one-shot.") ],
                                  runes: {
                                          keystone: "Conqueror",
                                          primary: "Precision",
                                          primaryRunes: ["Triumph","Legend: Bloodline","Last Stand"],
                                          secondary: "Resolve",
                                          secondaryRunes: ["Bone Plating","Second Wind"],
                                          shards: ["Ability Haste","Adaptive Force","Tenacity"],
                                          reason: "Assassin burst windows are short — Bone Plating breaks their opener. Magic Resist shard vs AP assassins.",
                                          champOverrides: {
                                            "Zed": {
                                              secondary: "Sorcery",
                                              secondaryRunes: ["Transcendence","Scorch"],
                                              shards: ["Ability Haste","Adaptive Force","Health (scaling)"],
                                              reason: "Zed deals pure AD — armor shard over MR. Scorch pokes him pre-6. Trade into his W shadow, not out of it.",
                                            },
                                            "Katarina": {
                                              primaryRunes: ["Triumph","Legend: Bloodline","Coup de Grace"],
                                              reason: "Kata has no hard CC so Tenacity is less critical — but her dagger slow + shunpo still benefits from it. Coup de Grace secures resets.",
                                            },
                                            "Fizz": {
                                              shards: ["Ability Haste","Adaptive Force","Tenacity"],
                                              reason: "Fizz is pure AP — MR shard throughout. His E makes him untargetable; never W or Q into his E. Bone Plating blocks his Q-AA combo.",
                                            },
                                            "Akali": {
                                              reason: "Akali's ring slows inside it — Tenacity is essential to escape. Bone Plating breaks her Q-AA opener before her empowered Q.",
                                            },
                                          },
                                        },                         
                                },
                                SKIRMISHER: {
                                  ahead:  [ I("Eclipse","Burst them before they stack defensive items."), I("Lord Dominik's Regards","Pen through early Fiora/Jax armor during your lead window."), I("Serylda's Grudge","Slow stops Yone/Yasuo kiting and keeps them in your combo.") ],
                                  behind: [ I("Randuin's Omen","Crit damage reduction — vital vs Yasuo, Yone, Tryndamere."), I("Frozen Heart","–20% nearby attack speed. Destroys Fiora/Tryndamere."), I("Black Cleaver","HP + shred to keep damage relevant while in deficit.") ],
                                  runes: {
                                          keystone: "Conqueror",
                                          primary: "Precision",
                                          primaryRunes: ["Triumph","Legend: Haste","Last Stand"],
                                          secondary: "Sorcery",
                                          secondaryRunes: ["Transcendence","Scorch"],
                                          shards: ["Ability Haste","Adaptive Force","Health (scaling)"],
                                          reason: "Standard Conqueror page. Skirmishers have minimal CC — Haste over Tenacity. Scorch pokes them before they can stack defenses.",
                                          champOverrides: {
                                            "Yasuo": {
                                              primaryRunes: ["Triumph","Legend: Bloodline","Last Stand"],
                                              secondary: "Resolve",
                                              secondaryRunes: ["Bone Plating","Unflinching"],
                                              shards: ["Ability Haste","Adaptive Force","Tenacity"],
                                              reason: "Yasuo's R is a guaranteed knockup into any ally CC — Tenacity + Unflinching shortens it. Bone Plating breaks his Wind Wall trade burst. Magic Resist vs his E true damage passive.",
                                            },
                                            "Yone": {
                                              primaryRunes: ["Triumph","Legend: Bloodline","Last Stand"],
                                              secondary: "Resolve",
                                              secondaryRunes: ["Bone Plating","Second Wind"],
                                              shards: ["Ability Haste","Adaptive Force","Tenacity"],
                                              reason: "Yone deals hybrid physical + magic damage via Soul Unbound. MR shard + Bone Plating reduces both. Tenacity on his E knockback.",
                                            },
                                            "Fiora": {
                                              primaryRunes: ["Triumph","Legend: Alacrity","Last Stand"],
                                              secondary: "Sorcery",
                                              secondaryRunes: ["Transcendence","Gathering Storm"],
                                              shards: ["Ability Haste","Adaptive Force","Health (scaling)"],
                                              reason: "Fiora barely CCs you — skip Tenacity entirely. Alacrity wins short trades before she procs vitals. Gathering Storm: she outscales you, so you scale back.",
                                            },
                                            "Tryndamere": {
                                              primaryRunes: ["Triumph","Legend: Bloodline","Last Stand"],
                                              secondary: "Resolve",
                                              secondaryRunes: ["Bone Plating","Revitalize"],
                                              shards: ["Ability Haste","Adaptive Force","Health (scaling)"],
                                              reason: "Tryndamere's adrenaline rage + Ignite = CC chain window. Tenacity on his slow. Bone Plating reduces his short-trade crit burst.",
                                            },
                                            "Jax": {
                                              primaryRunes: ["Triumph","Legend: Bloodline","Last Stand"],
                                              secondary: "Resolve",
                                              secondaryRunes: ["Bone Plating","Second Wind"],
                                              reason: "Jax counter-strike stuns — Tenacity essential. Bone Plating makes his E-AA burst shorter. You beat him pre-6; respect his ult power spike.",
                                            },
                                            "Master Yi": {
                                              primaryRunes: ["Triumph","Legend: Haste","Coup de Grace"],
                                              secondary: "Domination",
                                              secondaryRunes: ["Cheap Shot","Relentless Hunter"],
                                              reason: "Yi has zero CC. Skip Tenacity. Your W stun + Ignite during Meditate is his biggest fear. Coup de Grace executes him at low HP post-Q.",
                                            },
                                          },
                                        },
                                },
                                BURST_MAGE: {
                                  ahead:  [ I("Eclipse","Dive in and blow them up before they land their full combo."), I("Youmuu's Ghostblade","Speed lets you gap-close faster than their cast animations."), I("Serpent's Fang","Orianna/Karma with early shields — 50% reduction on contact.") ],
                                  behind: [ I("Maw of Malmortius","Magic shield absorbs their dump-everything combo when behind."), I("Banshee's Veil","Block first CC (Syndra E / Lissandra Q) to prevent the chain."), I("Mercury's Treads","Shorter stun/root duration = more time to retaliate or E-block.") ],
                                  runes: {
                                            keystone: "Conqueror",
                                            primary: "Precision",
                                            primaryRunes: ["Presence of Mind","Legend: Haste","Last Stand"],
                                            secondary: "Sorcery",
                                            secondaryRunes: ["Transcendence","Scorch"],
                                            shards: ["Ability Haste","Adaptive Force","Tenacity"],
                                            reason: "Magic Resist shard throughout vs burst mages. Scorch poke trades punish their limited mobility between casts.",
                                            champOverrides: {
                                              "Syndra": {
                                                secondary: "Resolve",
                                                secondaryRunes: ["Bone Plating","Second Wind"],
                                                reason: "Syndra's ball scatter (E) stuns you from range — Bone Plating reduces her follow-up burst. Respect her power spike at 9 balls.",
                                              },
                                              "Veigar": {
                                                secondary: "Resolve",
                                                secondaryRunes: ["Bone Plating","Second Wind"],
                                                reason: "Veigar's Event Horizon cage stuns corner-to-corner. Never stand near walls. Bone Plating reduces his Q-auto opener damage.",
                                              },
                                            },
                                          },
                                },
                                BATTLEMAGE: {
                                  ahead:  [ I("Eclipse","Short burst window — kill before Vladimir can drain back up."), I("Mortal Reminder","GW 40% eliminates their sustain advantage before they regen."), I("Lord Dominik's Regards","Swain/Malzahar stack HP — % pen keeps damage high.") ],
                                  behind: [ I("Maw of Malmortius","Survive the sustained AP DPS window with magic shield."), I("Mortal Reminder","GW is your only offset for their healing when behind."), I("Sterak's Gage","Extra shield gives another window after sustained damage.") ],
                                   runes: {
                                            keystone: "Conqueror",
                                            primary: "Precision",
                                            primaryRunes: ["Triumph","Legend: Haste","Last Stand"],
                                            secondary: "Sorcery",
                                            secondaryRunes: ["Transcendence","Scorch"],
                                            shards: ["Ability Haste","Adaptive Force","Tenacity"],
                                            reason: "Battlemages want sustained trades — Conqueror meets them there and beats them at it. Scorch adds early poke pressure.",
                                            champOverrides: {
                                              "Vladimir": {
                                                keystone: "Conqueror",
                                                primaryRunes: ["Triumph","Legend: Haste","Last Stand"],
                                                secondary: "Resolve",
                                                secondaryRunes: ["Second Wind","Conditioning"],
                                                reason: "Vladimir's Transfusion sustain is a war of attrition. Second Wind lets you sustain back. Build Mortal Reminder second.",
                                              },
                                              "Cassiopeia": {
                                                shards: ["Ability Haste","Adaptive Force","Tenacity"],
                                                secondary: "Resolve",
                                                secondaryRunes: ["Bone Plating","Second Wind"],
                                                reason: "Cassiopeia's Twin Fang chains deal massive DPS when poisoned. Bone Plating breaks her opener. Never walk into her miasma without E.",
                                              },
                                            },
                                          },
                                },
                                ARTILLERY: {
                                  ahead:  [ I("Youmuu's Ghostblade","Sprint active closes the poke gap instantly."), I("Eclipse","One-shot on landing — no escape when you close that fast."), I("Spear of Shojin","Haste + Q reset = ranged poke pressure during the approach.") ],
                                  behind: [ I("Banshee's Veil","Block one long-range ability — the window to Ult onto them."), I("Mercury's Treads","Shorter Xerath/Vel'Koz CC = more time to close the gap."), I("Sterak's Gage","Survive poke damage accumulated while closing distance.") ],
                                   runes: {
                                            keystone: "Fleet Footwork",
                                            primary: "Precision",
                                            primaryRunes: ["Absorb Life","Legend: Haste","Last Stand"],
                                            secondary: "Sorcery",
                                            secondaryRunes: ["Nimbus Cloak","Celerity"],
                                            shards: ["Ability Haste","Adaptive Force","Tenacity"],
                                            reason: "Fleet Footwork sustains through poke lane. Nimbus Cloak + Celerity grants burst speed on Flash/Ignite to close the poke gap instantly.",
                                            champOverrides: {
                                              "Xerath": {
                                                secondaryRunes: ["Nimbus Cloak","Celerity"],
                                                reason: "Xerath's range means you must close quickly. Nimbus Cloak on Ignite = free gap close at his max range.",
                                              },
                                            },
                                          },                                
                                },
                                MARKSMAN: {
                                  ahead:  [ I("Eclipse","Two-ability proc = guaranteed one-rotation kill on any ADC."), I("Youmuu's Ghostblade","Active speed closes before they can kite or reposition."), I("Serpent's Fang","Kai'Sa/Samira shields stripped — no escaping your burst.") ],
                                  behind: [ I("Plated Steelcaps","Flat auto reduction is massive — cuts every Jinx/Caitlyn attack."), I("Eclipse","Best damage path even behind — one good Ult = back in game."), I("Sterak's Gage","Shield keeps you alive long enough to find that combo window.") ],
                                   runes: {
                                            keystone: "Press the Attack",
                                            primary: "Precision",
                                            primaryRunes: ["Triumph","Legend: Haste","Coup de Grace"],
                                            secondary: "Domination",
                                            secondaryRunes: ["Cheap Shot","Relentless Hunter"],
                                            shards: ["Ability Haste","Adaptive Force","Health (scaling)"],
                                            reason: "Press the Attack procs faster on ADCs than Conqueror stacks. Coup de Grace executes from your burst. Relentless Hunter enables roaming after tower.",
                                          },
                                },
                                ENCHANTER: {
                                  ahead:  [ I("Serpent's Fang","⭐ PRIORITY — 50% shield strip on contact while ahead."), I("Youmuu's Ghostblade","Active speed: Janna/Lulu can't reposition before your W stun."), I("Eclipse","Overkill burst — with Serpent's Fang up they simply die.") ],
                                  behind: [ I("Serpent's Fang","Still priority even behind — skipping costs every shield trade."), I("Mortal Reminder","Q poke applies GW to limit heals when you can't reach them."), I("Sterak's Gage","Survive Lulu polymorph + their carry's follow-up burst.") ],
                                  runes: {
                                            keystone: "Press the Attack",
                                            primary: "Precision",
                                            primaryRunes: ["Triumph","Legend: Haste","Coup de Grace"],
                                            secondary: "Domination",
                                            secondaryRunes: ["Cheap Shot","Relentless Hunter"],
                                            shards: ["Ability Haste","Adaptive Force","Health (scaling)"],
                                            reason: "Press the Attack procs in 3 autos into their carry — amplifies your burst window after shields are stripped. Cheap Shot adds true damage on W stun.",
                                            champOverrides: {
                                              "Lulu": {
                                                primaryRunes: ["Triumph","Legend: Bloodline","Coup de Grace"],
                                                reason: "Lulu's Glitterlance slows and her ult knocks up. Tenacity reduces both CC durations significantly.",
                                              },
                                              "Janna": {
                                                primaryRunes: ["Triumph","Legend: Haste","Coup de Grace"],
                                                secondary: "Sorcery",
                                                secondaryRunes: ["Nimbus Cloak","Celerity"],
                                                reason: "Janna's whirlwind knockup + Monsoon knockback are her only CC. Nimbus Cloak lets you chase after she blows R.",
                                              },
                                            },
                                          },              
                                },
                                CATCHER: {
                                  ahead:  [ I("Youmuu's Ghostblade","Outmanoeuvre Blitz/Thresh entirely with active speed."), I("Eclipse","Close range, detonate — one-shot the Catcher before they reset."), I("Serpent's Fang","Zac/Morgana shields absorbed — more damage gets through.") ],
                                  behind: [ I("Banshee's Veil","Spell shield absorbs Blitz Q / Thresh hook — your lifeline."), I("Mercury's Treads","Shorter Nautilus root / Morgana bind when you get caught."), I("Sterak's Gage","Survive the collapse after their Catcher lands CC on you.") ],
                                    runes: {
                                              keystone: "Conqueror",
                                              primary: "Precision",
                                              primaryRunes: ["Triumph","Legend: Bloodline","Last Stand"],
                                              secondary: "Inspiration",
                                              secondaryRunes: ["Hextech Flashtraption","Cosmic Insight"],
                                              shards: ["Ability Haste","Adaptive Force","Health (scaling)"],
                                              reason: "Hextech Flashtraption lets you Flash through walls on a 20s CD while standing still — surprise W stuns from unexpected angles. Tenacity on every hook.",
                                              champOverrides: {
                                                "Morgana": {
                                                  secondary: "Resolve",
                                                  secondaryRunes: ["Bone Plating","Second Wind"],
                                                  shards: ["Ability Haste","Adaptive Force","Tenacity"],
                                                  reason: "Morgana deals AP damage with Black Shield blocking your CC. Resolve secondary for durability. MR shard vs her Q + W damage.",
                                                },
                                                "Blitzcrank": {
                                                  reason: "Blitz hook into Power Fist = hard CC chain. If he misses his hook, all-in immediately — his cooldowns are long early.",
                                                },
                                              },
                                            },
                                },
                                VANGUARD: {
                                  ahead:  [ I("Eclipse","Ult in, E their CC, finish with burst before they act."), I("Black Cleaver","Shred Malphite/Ornn armor in 6 Q taps while team is disrupted."), I("Lord Dominik's Regards","% pen while ahead makes their armor irrelevant.") ],
                                  behind: [ I("Mercury's Treads","Default. Malphite Ult, Leona chain, Nautilus root — all shorter."), I("Sterak's Gage","Survive the burst that follows a Vanguard's initiation."), I("Randuin's Omen","AoE slow active peels their engage. Crit reduction vs carry builds.") ],
                                   runes: {
                                            keystone: "Conqueror",
                                            primary: "Precision",
                                            primaryRunes: ["Presence of Mind","Legend: Haste","Cut Down"],
                                            secondary: "Sorcery",
                                            secondaryRunes: ["Transcendence","Scorch"],
                                            shards: ["Ability Haste","Adaptive Force","Health (scaling)"],
                                            reason: "Cut Down deals up to 15% more damage vs high-HP tanks. Conqueror stacks faster than they can rotate CC.",
                                            champOverrides: {
                                              "Malphite": {
                                                shards: ["Ability Haste","Adaptive Force","Tenacity"],
                                                secondary: "Resolve",
                                                secondaryRunes: ["Second Wind","Conditioning"],
                                                reason: "Malphite deals AP damage via passive and ult. MR shard + Conditioning gives sustained MR scaling into his ult timing.",
                                              },
                                              "Leona": {
                                                primaryRunes: ["Presence of Mind","Legend: Bloodline","Cut Down"],
                                                reason: "Leona chains: E stun → W → R stun. Tenacity on every CC in the chain. Never fight her with her E up.",
                                              },
                                            },
                                          },
                                },
                                WARDEN: {
                                  ahead:  [ I("Serpent's Fang","Shen Ult + Braum passive shields stripped by 50% on contact."), I("Lord Dominik's Regards","% pen turns their armor stacking into irrelevant stats."), I("Serylda's Grudge","Slow on Ult stops Tahm Kench body-blocking at the last second.") ],
                                  behind: [ I("Black Cleaver","Shred gradually — even behind, 6 stacks still open them up."), I("Sterak's Gage","Survive their peel long enough to stack Cleaver."), I("Mercury's Treads","Poppy/Galio CC chains shut down your dives — reduce duration.") ],
                                   runes: {
                                            keystone: "Conqueror",
                                            primary: "Precision",
                                            primaryRunes: ["Presence of Mind","Legend: Haste","Cut Down"],
                                            secondary: "Sorcery",
                                            secondaryRunes: ["Transcendence","Scorch"],
                                            shards: ["Ability Haste","Adaptive Force","Health (scaling)"],
                                            reason: "Cut Down vs high-HP Wardens. Conqueror stacks fast enough on Braum/Shen that sustained trades are winnable.",
                                            champOverrides: {
                                              "Poppy": {
                                                primaryRunes: ["Presence of Mind","Legend: Bloodline","Cut Down"],
                                                secondary: "Resolve",
                                                secondaryRunes: ["Bone Plating","Second Wind"],
                                                reason: "Poppy's Steadfast Presence blocks dashes and her E knocks into walls. Tenacity + Bone Plating makes her trades shorter. Don't dash near walls.",
                                              },
                                              "Galio": {
                                                shards: ["Ability Haste","Adaptive Force","Tenacity"],
                                                reason: "Galio deals AP damage. MR shard over armor. His taunt CC + ult knockup = Tenacity is more valuable than Haste here.",
                                                primaryRunes: ["Presence of Mind","Legend: Bloodline","Cut Down"],
                                              },
                                            },
                                          },
                                },
                                SPECIALIST: {
                                  ahead:  [ I("Eclipse","Burst Singed/Shyvana before their stacks get critical."), I("Youmuu's Ghostblade","Active speed lets you chase Singed instead of him kiting forever."), I("Serylda's Grudge","Slow means even Quinn can't disengage from your combo.") ],
                                  behind: [ I("Mortal Reminder","GP Orange heal, Kayle sustain, Udyr regen — GW 40% cuts all."), I("Banshee's Veil","Teemo blind, TF gold card, Kennen stun — blocks their key setup."), I("Sterak's Gage","Survive the poke absorbed while getting to engage range.") ],
                                  runes: {
                                            keystone: "Conqueror",
                                            primary: "Precision",
                                            primaryRunes: ["Triumph","Legend: Haste","Last Stand"],
                                            secondary: "Sorcery",
                                            secondaryRunes: ["Transcendence","Scorch"],
                                            shards: ["Ability Haste","Adaptive Force","Health (scaling)"],
                                            reason: "Default sustained page — Specialists are so varied that Conqueror works as the baseline across most of them.",
                                            champOverrides: {
                                              "Singed": {
                                                keystone: "Conqueror",
                                                primaryRunes: ["Triumph","Legend: Haste","Last Stand"],
                                                secondary: "Sorcery",
                                                secondaryRunes: ["Nimbus Cloak","Celerity"],
                                                reason: "Nimbus Cloak on Ignite gives you a movement speed burst to close on Singed while he runs. Without it, he simply kites you forever.",
                                              },
                                              "Teemo": {
                                                keystone: "Grasp of the Undying",
                                                primary: "Resolve",
                                                primaryRunes: ["Shield Bash","Bone Plating","Overgrowth"],
                                                secondary: "Domination",
                                                secondaryRunes: ["Cheap Shot","Relentless Hunter"],
                                                shards: ["Ability Haste","Adaptive Force","Tenacity"],
                                                reason: "Grasp wins short trades (Teemo blind = your autos are useless so trades MUST be short). Bone Plating absorbs his Q blind + auto opener. MR shard vs his AP damage.",
                                              },
                                              "Gangplank": {
                                                primaryRunes: ["Triumph","Legend: Haste","Last Stand"],
                                                secondary: "Sorcery",
                                                secondaryRunes: ["Transcendence","Scorch"],
                                                reason: "GP Oranges cleanse your W stun — bait them first, then W when he's used the Orange. Scorch poke synergises with your ranged Q harassment.",
                                              },
                                            },
                                          },
                                },
                              },
                    },

            Jungle: {  
              bans:["Briar","Wukong","Rek'Sai"], replacements:["Warwick","Udyr","Lee Sin"],
                corePath: "Sundered Sky  ›  Black Cleaver  ›  Eclipse  ›  Death's Dance",
                coreNote: "Jungle Pantheon relies on early tempo and ganks. Sundered Sky's crit-heal now edges out Eclipse as the priority first item in current meta; Black Cleaver transitions into mid-game teamfights; Eclipse and Death's Dance round out the burst-into-sustain pattern.",
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
                      reason: "Hextech Flashtraption from river bush: appear behind bot lane to cut off escape before the hook lands. Coup de Grace over Last Stand — ADCs die fast.",
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
                                  behind: [ I("Maw of Malmortius","Critical vs AP burst — gives second life window."), I("Mercury's Treads","Shorter CC chains = more chance to E-block."), I("Banshee's Veil","Blocks engage spell so you can still all-in.") ],
                                  runes: { ...PANTH_MID_DEFAULT_RUNES },                                
                                },
                                BATTLEMAGE: {
                                  ahead:  [ I("Mortal Reminder","Grievous Wounds denies sustain (Swain/Vlad)."), I("Eclipse","Kill during short trade windows before healing ramps."), I("Black Cleaver","HP + shred vs their scaling durability.") ],
                                  behind: [ I("Maw of Malmortius","Sustain through extended AP damage."), I("Mortal Reminder","Essential vs healing-based mages."), I("Sterak's Gage","Gives second rotation window in extended fights.") ],
                                  runes: { ...PANTH_MID_DEFAULT_RUNES },
                                },
                                ARTILLERY: {
                                  ahead:  [ I("Youmuu's Ghostblade","Gap close instantly from fog or roam."), I("Eclipse","Delete them before they reposition."), I("Edge of Night","Block one long-range CC tool.") ],
                                  behind: [ I("Banshee's Veil","Gives safe engage window vs poke champs."), I("Mercury's Treads","Reduce CC duration so you can reach them."), I("Sterak's Gage","Survive poke before committing.") ],
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
                              behind: [ I("Banshee's Veil","Spell shield vs hook champs."), I("Mercury's Treads","Reduce CC duration."), I("Knight's Vow","Play defensive around ADC.") ],
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
