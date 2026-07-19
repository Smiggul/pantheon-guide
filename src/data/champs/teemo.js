import { I } from "../runeHelpers.js";

const TEEMO_TOP_DEFAULT_RUNES = {
  keystone:       "Press the Attack",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Overgrowth"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Press the Attack procs in 3 autos and amplifies all damage to the target by 8% — pairs with Toxic Shot poison ticking during that window. Legend: Alacrity increases auto attack speed for more poison stacks per second. Bone Plating makes short melee trades survivable.",
};

const TEEMO_JGL_DEFAULT_RUNES = {
  keystone:       "Dark Harvest",
  primary:        "Domination",
  primaryRunes:   ["Cheap Shot","Grisly Mementos","Ultimate Hunter"],
  secondary:      "Sorcery",
  secondaryRunes: ["Absolute Focus","Gathering Storm"],
  shards:         ["Adaptive Force","Adaptive Force","Health"],
  reason:         "Dark Harvest stacks off every kill and executes low-HP champions — mushrooms are perfect triggers. Cheap Shot adds true damage on Toxic Shot slow. Ultimate Hunter reduces mushroom CD for permanent map control.",
};

const TEEMO_MID_DEFAULT_RUNES = {
  keystone:       "Press the Attack",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Overgrowth"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Same Press the Attack core as Top — current meta runs this over the old Dark Harvest page for Mid too. The 8% amp on 3 autos pairs with Toxic Shot poison ticking, Legend: Alacrity adds attack speed for more poison stacks per second, and Bone Plating survives short melee all-ins from dive-heavy mid matchups.",
};

const TEEMO_SUP_DEFAULT_RUNES = {
  keystone:       "Dark Harvest",
  primary:        "Domination",
  primaryRunes:   ["Cheap Shot","Grisly Mementos","Ultimate Hunter"],
  secondary:      "Sorcery",
  secondaryRunes: ["Absolute Focus","Gathering Storm"],
  shards:         ["Adaptive Force","Adaptive Force","Health"],
  reason:         "Dark Harvest off mushroom procs in the bot lane. Ultimate Hunter is the reason to play Teemo Support — reducing R CD means more mushrooms placed per minute for permanent vision denial.",
};

// ══════════════════════════════════════════════════════════════════════════
//  TEEMO — AP On-Hit Specialist
// ══════════════════════════════════════════════════════════════════════════

export default {
    id:      "teemo",
    display:  "Teemo",
    dd:       "Teemo",
    role:     "AP On-Hit Specialist",
    color:    "#27ae60",
    glow:     "#2ecc71",
    lanes:    ["Top", "Mid", "Support", "Jungle"],

    roles:{
      Top:{
        bans:["Pantheon","Irelia","Sion"], replacements:["Quinn","Kennen","Vayne"],
        corePath: "Statikk Shiv  ›  Liandry's Torment  ›  Malignance  ›  Rylai's Crystal Scepter",
        coreNote: "Current meta replaces the old Nashor's Tooth rush with Statikk Shiv — the on-hit lightning proc clears waves instantly, freeing Teemo to hit towers earlier and set up R shrooms sooner. Liandry's still burns tanks, Malignance still amplifies mushroom map control; Nashor's Tooth remains a fine situational pick when the lane calls for pure sustained DPS instead of wave-clear speed.",
        sideItems: ["Sorcerer's Shoes","Plated Steelcaps","Mercury's Treads","Nashor's Tooth","Morellonomicon","Shadowflame","Void Staff","Zhonya's Hourglass","Banshee's Veil","Demonic Embrace","Cosmic Drive"],

        data: {
          JUGGERNAUT: {
            ahead:  [ I("Liandry's Torment","Burn scales off their HP stacking — perfect into juggernauts."), I("Rylai's Crystal Scepter","Perma-slow prevents them ever reaching you."), I("Nashor's Tooth","Sustained DPS while kiting wins every extended trade.") ],
            behind: [ I("Plated Steelcaps","Reduces auto damage from champs like Darius/Sett."), I("Zhonya's Hourglass","Stall their all-in window and survive burst."), I("Rylai's Crystal Scepter","Utility slow keeps them off you even when weak.") ],
            runes: { ...TEEMO_TOP_DEFAULT_RUNES },
          },
          DIVER: {
            ahead:  [ I("Nashor's Tooth","Higher DPS to punish failed engages."), I("Rylai's Crystal Scepter","Slows their engage follow-up completely."), I("Liandry's Torment","Burn continues even after they disengage.") ],
            behind: [ I("Zhonya's Hourglass","Negates their dive combo timing."), I("Plated Steelcaps","Reduces sustained damage during all-in."), I("Banshee's Veil","Blocks engage abilities like Camille hook.") ],
            runes: { ...TEEMO_TOP_DEFAULT_RUNES },
          },
          ASSASSIN: {
            ahead:  [ I("Shadowflame","Out-burst them — your lead means you delete first after blinding."), I("Rabadon's Deathcap","AP advantage wins the trade before their combo can complete."), I("Malignance","Haste = faster Q casts; blind them the moment they dash in.") ],
            behind: [ I("Zhonya's Hourglass","Stasis neutralises Zed Ult / Akali full combo — they waste it all."), I("Banshee's Veil","Block Akali E engage or Kata Shunpo — prevent the opening dash."), I("Morellonomicon","Slow their regen after skirmish so they can't recover and re-engage.") ],
            runes: { ...TEEMO_TOP_DEFAULT_RUNES },
          },
          SKIRMISHER: {
            ahead:  [ I("Nashor's Tooth","You out-DPS them if they can't stick."), I("Rylai's Crystal Scepter","Stops Yasuo/Yone from chasing."), I("Liandry's Torment","Burn punishes their mid-fight sustain.") ],
            behind: [ I("Plated Steelcaps","Critical vs auto-heavy duelists."), I("Zhonya's Hourglass","Buy time vs burst windows."), I("Morellonomicon","Cut healing from lifesteal champs.") ],
            runes: { ...TEEMO_TOP_DEFAULT_RUNES },
          },
          BURST_MAGE: {
            ahead:  [ I("Rabadon's Deathcap","Out-AP them — mushrooms and autos deal more than their combo."), I("Shadowflame","After they miss their opener, burst before the cooldown resets."), I("Malignance","More shrooms faster = no safe ground for them to stand on.") ],
            behind: [ I("Banshee's Veil","Block the CC that starts their combo (Syndra E / Annie stun)."), I("Zhonya's Hourglass","Survive the full AP detonation; poison and shroom stacks remain."), I("Malignance","Haste for more Q casts and shroom density — outzone them safely.") ],
            runes: { ...TEEMO_TOP_DEFAULT_RUNES },
          },
          BATTLEMAGE: {
            ahead:  [ I("Rabadon's Deathcap","Outscale their sustained damage with raw AP — burst trades win."), I("Void Staff","Ryze/Viktor build early MR — 40% pen pierces it as you press ahead."), I("Shadowflame","Burst trades in the lead window punish before they can drain back.") ],
            behind: [ I("Morellonomicon","Vladimir Transfusion + Swain drain — GW 40% on every auto."), I("Malignance","Keep Toxic Shot stacks up from max range — no need to trade."), I("Zhonya's Hourglass","Survive Ryze/Viktor burst on a bad engage; poison does the work.") ],
            runes: { ...TEEMO_TOP_DEFAULT_RUNES },
          },
          ARTILLERY: {
            ahead:  [ I("Boots of Swiftness","Dodge Xerath/Vel'Koz skillshots freely while pressuring forward."), I("Rabadon's Deathcap","Your AP wins at range — mushrooms in their poke lane are lethal."), I("Shadowflame","Once you close the gap and blind, flat pen one-shots the Artillery.") ],
            behind: [ I("Malignance","More shrooms = zone out their entire safe poke angle on the map."), I("Boots of Swiftness","Slow resist + speed to dodge skillshots when you can't get hit."), I("Banshee's Veil","Block one long-range stun — the window to push in or escape.") ],
            runes: { ...TEEMO_TOP_DEFAULT_RUNES },
          },
          MARKSMAN: {
            ahead:  [ I("Nashor's Tooth","⭐ PRIORITY — Blind nullifies every ADC auto for 2–3 seconds."), I("Shadowflame","Post-blind, flat pen + AP one-shots most ADCs before blind wears off."), I("Rabadon's Deathcap","Amplify shroom burst — one shroom can execute a low ADC.") ],
            behind: [ I("Morellonomicon","Deny lifesteal and Bloodthirster shields — their sustain gone."), I("Liandry's Torment","Poison stacks melt Kai'Sa/Vayne HP items safely from range."), I("Rylai's Crystal Scepter","Slow on every auto; kite the ADC indefinitely even from deficit.") ],
            runes: { ...TEEMO_TOP_DEFAULT_RUNES },
          },
          ENCHANTER: {
            ahead:  [ I("Shadowflame","10% extra pen vs shielded targets — counters Lulu/Janna spam."), I("Rabadon's Deathcap","Mushrooms shred through their shields and one-shot the carry."), I("Malignance","More shrooms under the Enchanter force constant repositioning.") ],
            behind: [ I("Morellonomicon","Soraka/Nami core is healing — GW on every auto neuters them."), I("Malignance","Shrooms placed faster; zone Enchanters off their peel angles."), I("Liandry's Torment","Poison burn on every auto drains through Soraka's healing output.") ],
            runes: { ...TEEMO_TOP_DEFAULT_RUNES },
          },
          CATCHER: {
            ahead:  [ I("Boots of Swiftness","Outpace Blitzcrank Q and Thresh hook with slow-resist + speed."), I("Shadowflame","If you get close, burst the Catcher before they chain another CC."), I("Malignance","Mushrooms in hook angles force Catchers to reposition or die.") ],
            behind: [ I("Boots of Swiftness","Slow-resist is your survival tool vs Morgana root / Nautilus CC."), I("Banshee's Veil","Spell shield absorbs Blitz hook / Morgana bind — most critical item."), I("Zhonya's Hourglass","If Nautilus chains you anyway, stasis buys your team time to respond.") ],
            runes: { ...TEEMO_TOP_DEFAULT_RUNES },
          },
          VANGUARD: {
            ahead:  [ I("Liandry's Torment","Melts high-HP tanks."), I("Void Staff","Penetrates early MR stacking."), I("Rylai's Crystal Scepter","Keeps tanks permanently slowed.") ],
            behind: [ I("Void Staff","Required to deal damage vs MR stack."), I("Zhonya's Hourglass","Survive engage combos."), I("Rylai's Crystal Scepter","Utility even when behind.") ],
            runes: { ...TEEMO_TOP_DEFAULT_RUNES },
          },
          WARDEN: {
            ahead:  [ I("Void Staff","K'Sante/Galio stack MR — % pen is your answer while ahead."), I("Liandry's Torment","% HP burn stacks enormously against high-HP Wardens while ahead."), I("Rabadon's Deathcap","Amplify your AP so even shielded Wardens take serious shroom damage.") ],
            behind: [ I("Liandry's Torment","% HP burn is your only reliable damage vs Warden HP/MR stacks."), I("Malignance","Mushrooms zone Tahm Kench/Shen from peeling with their body."), I("Morellonomicon","Tahm Kench passive sustain + Shen regen — GW reduces tankiness.") ],
            runes: { ...TEEMO_TOP_DEFAULT_RUNES },
          },
          SPECIALIST: {
            ahead:  [ I("Malignance","Mushroom spam controls side lanes."), I("Liandry's Torment","Synergy with poison + traps."), I("Shadowflame","Extra burst vs squishy specialists.") ],
            behind: [ I("Morellonomicon","Anti-heal vs sustain champs."), I("Banshee's Veil","Block key abilities (Teemo blind mirror, Kennen stun)."), I("Zhonya's Hourglass","Survive burst setups.") ],
            runes: { ...TEEMO_TOP_DEFAULT_RUNES },
          },
        },
      },

      Jungle:{
        bans:["Warwick","Udyr","Elise"], replacements:["Lillia","Nidalee","Shyvana"],
        corePath: "Malignance  ›  Liandry's Torment  ›  Nashor's Tooth  ›  Rylai's Crystal Scepter",
        coreNote: "Teemo jungle plays for fast clears and map control. Malignance enables constant mushroom pressure on objectives; Liandry's amplifies burn for camps and fights.",
        sideItems: ["Sorcerer's Shoes","Ionian Boots of Lucidity","Morellonomicon","Void Staff","Zhonya's Hourglass","Banshee's Veil","Shadowflame","Demonic Embrace","Cosmic Drive"],

        data: {
          JUGGERNAUT: {
            ahead:  [ I("Liandry's Torment","Burn scales off their HP stacking — outlasts a Juggernaut's engage."), I("Rylai's Crystal Scepter","Perma-slow denies them ever closing the gank distance."), I("Nashor's Tooth","Sustained DPS wins if they commit to the chase.") ],
            behind: [ I("Plated Steelcaps","Reduces auto damage from Darius/Sett counter-ganks."), I("Zhonya's Hourglass","Stall their all-in window entirely."), I("Rylai's Crystal Scepter","Slow keeps distance even from a losing position.") ],
            runes: { ...TEEMO_JGL_DEFAULT_RUNES },
          },
          DIVER: {
            ahead:  [ I("Liandry's Torment","Burn punishes their HP stacking during engages."), I("Rylai's Crystal Scepter","Slows completely disrupt their dive pathing."), I("Nashor's Tooth","DPS wins extended skirmishes.") ],
            behind: [ I("Zhonya's Hourglass","Negates their all-in timing."), I("Rylai's Crystal Scepter","Utility slow helps team peel."), I("Morellonomicon","Cuts their sustain in fights.") ],
            runes: { ...TEEMO_JGL_DEFAULT_RUNES },
          },
          ASSASSIN: {
            ahead:  [ I("Nashor's Tooth","Punish melee range with constant DPS."), I("Malignance","Trap jungle paths — denies their mobility."), I("Shadowflame","Burst squishy targets before they escape.") ],
            behind: [ I("Zhonya's Hourglass","Essential vs burst junglers."), I("Banshee's Veil","Blocks engage tools."), I("Rylai's Crystal Scepter","Peel yourself with slows.") ],
            runes: { ...TEEMO_JGL_DEFAULT_RUNES },
          },
          SKIRMISHER: {
            ahead:  [ I("Nashor's Tooth","Out-DPS in extended fights."), I("Liandry's Torment","Burn punishes their sustain."), I("Rylai's Crystal Scepter","Prevents them sticking to you.") ],
            behind: [ I("Morellonomicon","Reduce healing from lifesteal champs."), I("Zhonya's Hourglass","Buy time vs dueling champs."), I("Rylai's Crystal Scepter","Utility remains strong.") ],
            runes: { ...TEEMO_JGL_DEFAULT_RUNES },
          },
          BURST_MAGE: {
            ahead:  [ I("Rabadon's Deathcap","Out-AP them on ganks — mushrooms and autos out-damage their combo."), I("Shadowflame","Punish the moment their burst combo goes on cooldown."), I("Malignance","Haste = more Q casts to blind through their setup.") ],
            behind: [ I("Banshee's Veil","Blocks the CC that opens their counter-gank combo."), I("Zhonya's Hourglass","Survive the full rotation if invaded."), I("Malignance","Shroom the paths they gank through instead of contesting.") ],
            runes: { ...TEEMO_JGL_DEFAULT_RUNES },
          },
          BATTLEMAGE: {
            ahead:  [ I("Rabadon's Deathcap","Outscale their sustained drain with raw AP."), I("Void Staff","Pierce early MR stacking on scaling mages."), I("Morellonomicon","Cut healing from Vladimir/Swain drain fights.") ],
            behind: [ I("Morellonomicon","Mandatory vs sustain-heavy invades."), I("Zhonya's Hourglass","Survive burst if caught in the jungle."), I("Malignance","Zone camps with mushrooms instead of contesting directly.") ],
            runes: { ...TEEMO_JGL_DEFAULT_RUNES },
          },
          VANGUARD: {
            ahead:  [ I("Liandry's Torment","Melts tank junglers."), I("Void Staff","Penetrates MR stacking."), I("Malignance","Objective control with traps.") ],
            behind: [ I("Void Staff","Required vs MR stack."), I("Zhonya's Hourglass","Survive engage."), I("Rylai's Crystal Scepter","Teamfight utility.") ],
            runes: { ...TEEMO_JGL_DEFAULT_RUNES },
          },
          ARTILLERY: {
            ahead:  [ I("Malignance","Mushrooms zone their poke off the objective entirely."), I("Boots of Swiftness","Slow resist dodges skillshots while invading their jungle."), I("Rabadon's Deathcap","Your AP wins once you close the gap.") ],
            behind: [ I("Banshee's Veil","Blocks the poke ability that punishes your invades."), I("Malignance","Zone camps and objectives with traps from max range."), I("Boots of Swiftness","Survive skillshot-heavy counter-jungling.") ],
            runes: { ...TEEMO_JGL_DEFAULT_RUNES },
          },
          MARKSMAN: {
            ahead:  [ I("Shadowflame","Extra burst vs squishy backline."), I("Rylai's Crystal Scepter","Slow prevents escape."), I("Liandry's Torment","Burn finishes targets after disengage.") ],
            behind: [ I("Zhonya's Hourglass","Avoid burst from ADC focus."), I("Rylai's Crystal Scepter","Peel and kite."), I("Banshee's Veil","Block engage CC.") ],
            runes: { ...TEEMO_JGL_DEFAULT_RUNES },
          },
          ENCHANTER: {
            ahead:  [ I("Morellonomicon","⭐ Mandatory vs healing/shielding."), I("Liandry's Torment","Burn counters sustain comps."), I("Malignance","Zone objectives with traps.") ],
            behind: [ I("Morellonomicon","Still required anti-heal."), I("Zhonya's Hourglass","Survive buffed carries."), I("Rylai's Crystal Scepter","Utility slows for team.") ],
            runes: { ...TEEMO_JGL_DEFAULT_RUNES },
          },
          CATCHER: {
            ahead:  [ I("Rylai's Crystal Scepter","Punish missed engages."), I("Malignance","Control jungle choke points."), I("Liandry's Torment","Burn during extended fights.") ],
            behind: [ I("Banshee's Veil","Block hooks/pick tools."), I("Zhonya's Hourglass","Survive catches."), I("Ionian Boots of Lucidity","More traps, more control.") ],
            runes: { ...TEEMO_JGL_DEFAULT_RUNES },
          },
          WARDEN: {
            ahead:  [ I("Void Staff","MR-stacking Wardens still take real damage through pen."), I("Liandry's Torment","% HP burn racks up while you kite their engage."), I("Malignance","Trap the paths a Warden tries to body-block for their team.") ],
            behind: [ I("Liandry's Torment","Only reliable damage vs a stacked-resist Warden."), I("Malignance","Zone their peel angles with mushrooms instead of engaging."), I("Morellonomicon","Cut Tahm Kench/Shen passive sustain.") ],
            runes: { ...TEEMO_JGL_DEFAULT_RUNES },
          },
          SPECIALIST: {
            ahead:  [ I("Malignance","Mushroom density denies Gangplank/Shyvana clear paths."), I("Shadowflame","Burst Singed before the kite loop starts."), I("Rabadon's Deathcap","Amplify shroom burst for objective skirmishes.") ],
            behind: [ I("Boots of Swiftness","Slow resist is your only out vs an infinite Singed chase."), I("Morellonomicon","Cuts GP Orange healing and Udyr passive regen."), I("Malignance","Deny camp/objective control with more traps.") ],
            runes: { ...TEEMO_JGL_DEFAULT_RUNES },
          },
        },
      },

      Mid:{
        bans:["Talon","Fizz","Katarina"], replacements:["Xerath","Aurelion Sol","Kennen"],
        corePath: "Statikk Shiv  ›  Malignance  ›  Liandry's Torment  ›  Rylai's Crystal Scepter",

        coreNote: "Mid Teemo plays for lane dominance and anti-melee control. Statikk Shiv's on-hit lightning clears waves instantly and chains through clustered minions/champions for constant poke pressure; Malignance and Liandry's amplify sustained burn and mushroom map control once lane priority is secured.",

        sideItems: [
          "Sorcerer's Shoes","Mercury's Treads","Plated Steelcaps","Nashor's Tooth",
          "Zhonya's Hourglass","Banshee's Veil","Shadowflame",
          "Void Staff","Morellonomicon","Cosmic Drive"
        ],

        data: {

          JUGGERNAUT: {
            ahead: [
              I("Liandry's Torment","Burn scales off their HP stacking — wins the wave-clear war."),
              I("Rylai's Crystal Scepter","Perma-slow keeps a Juggernaut from ever closing lane distance."),
              I("Nashor's Tooth","Sustained DPS punishes every push attempt.")
            ],
            behind: [
              I("Plated Steelcaps","Reduces auto damage from Darius/Mordekaiser all-ins."),
              I("Zhonya's Hourglass","Stall their all-in window and survive burst."),
              I("Rylai's Crystal Scepter","Slow keeps you safe even when behind.")
            ],
            runes: { ...TEEMO_MID_DEFAULT_RUNES },
          },

          DIVER: {
            ahead: [
              I("Nashor's Tooth","Higher DPS punishes failed roams into your lane."),
              I("Rylai's Crystal Scepter","Slows shut down their engage follow-up completely."),
              I("Liandry's Torment","Burn continues ticking even after they disengage.")
            ],
            behind: [
              I("Zhonya's Hourglass","Negates their all-in combo timing entirely."),
              I("Banshee's Veil","Blocks the engage ability that starts their dive."),
              I("Mercury's Treads","Shorter CC lets you kite out.")
            ],
            runes: { ...TEEMO_MID_DEFAULT_RUNES },
          },

          ASSASSIN: {
            ahead: [
              I("Nashor's Tooth","Constant DPS punishes melee attempts to farm."),
              I("Liandry's Torment","Burn continues after short trades — they can't re-engage safely."),
              I("Rylai's Crystal Scepter","Slow completely disrupts dash-in/out patterns.")
            ],
            behind: [
              I("Zhonya's Hourglass","Essential vs burst all-in (Zed, Talon, Katarina)."),
              I("Plated Steelcaps","Reduces AD assassin auto damage during trades."),
              I("Rylai's Crystal Scepter","Utility slow lets you kite instead of dying instantly.")
            ],
            runes: { ...TEEMO_MID_DEFAULT_RUNES },
          },

          SKIRMISHER: {
            ahead: [
              I("Nashor's Tooth","Win extended trades through superior DPS."),
              I("Liandry's Torment","Burn punishes sustain fighters over time."),
              I("Rylai's Crystal Scepter","Prevents them sticking to you in duels.")
            ],
            behind: [
              I("Zhonya's Hourglass","Buy time vs all-in duelists."),
              I("Morellonomicon","Reduce healing (Yasuo, Yone lifesteal builds)."),
              I("Rylai's Crystal Scepter","Kiting becomes your primary survival tool.")
            ],
            runes: { ...TEEMO_MID_DEFAULT_RUNES },
          },

          BURST_MAGE: {
            ahead: [
              I("Nashor's Tooth","Out-trade between cooldown windows."),
              I("Shadowflame","Amplifies burst against low MR targets."),
              I("Liandry's Torment","Punishes them when abilities are down.")
            ],
            behind: [
              I("Banshee's Veil","Blocks key CC (Syndra E, Ahri charm)."),
              I("Mercury's Treads","Reduce CC duration to survive combos."),
              I("Zhonya's Hourglass","Second life vs full spell rotations.")
            ],
            runes: { ...TEEMO_MID_DEFAULT_RUNES },
          },

          BATTLEMAGE: {
            ahead: [
              I("Liandry's Torment","Burn outscales their sustain in extended fights."),
              I("Morellonomicon","Cuts healing (Vladimir, Swain)."),
              I("Nashor's Tooth","Sustained DPS keeps pressure constant.")
            ],
            behind: [
              I("Morellonomicon","Mandatory vs sustain-heavy kits."),
              I("Banshee's Veil","Prevents getting locked in extended fights."),
              I("Rylai's Crystal Scepter","Control spacing instead of trading.")
            ],
            runes: { ...TEEMO_MID_DEFAULT_RUNES },
          },

          ARTILLERY: {
            ahead: [
              I("Rylai's Crystal Scepter","Landing one Q → they cannot escape follow-up."),
              I("Nashor's Tooth","Punish when they misposition."),
              I("Malignance","Control choke points — deny safe positioning.")
            ],
            behind: [
              I("Banshee's Veil","Blocks key poke/CC ability."),
              I("Mercury's Treads","Reduce CC duration from long-range abilities."),
              I("Malignance","Play for map control instead of lane dominance.")
            ],
            runes: { ...TEEMO_MID_DEFAULT_RUNES },
          },

          MARKSMAN: {
            ahead: [
              I("Nashor's Tooth","Blind + autos completely shuts them down."),
              I("Liandry's Torment","Burn punishes their low HP pool."),
              I("Rylai's Crystal Scepter","They cannot kite with permanent slow.")
            ],
            behind: [
              I("Plated Steelcaps","Flat auto reduction vs ADC damage."),
              I("Zhonya's Hourglass","Avoid being burst in fights."),
              I("Rylai's Crystal Scepter","Peel yourself and your team.")
            ],
            runes: { ...TEEMO_MID_DEFAULT_RUNES },
          },

          ENCHANTER: {
            ahead: [
              I("Morellonomicon","⭐ Mandatory — cuts healing and shielding value."),
              I("Liandry's Torment","Burn negates sustain comps."),
              I("Malignance","Zone fights with mushrooms — deny positioning.")
            ],
            behind: [
              I("Morellonomicon","Still mandatory — never skip vs sustain."),
              I("Banshee's Veil","Block CC that enables buffed carries."),
              I("Rylai's Crystal Scepter","Utility over damage when behind.")
            ],
            runes: { ...TEEMO_MID_DEFAULT_RUNES },
          },

          CATCHER: {
            ahead: [
              I("Rylai's Crystal Scepter","Punish missed hooks instantly."),
              I("Nashor's Tooth","DPS when they fail engage."),
              I("Malignance","Trap choke points to deny picks.")
            ],
            behind: [
              I("Banshee's Veil","Blocks hook/pick abilities."),
              I("Zhonya's Hourglass","Survive if caught."),
              I("Rylai's Crystal Scepter","Kite after disengage.")
            ],
            runes: { ...TEEMO_MID_DEFAULT_RUNES },
          },

          VANGUARD: {
            ahead: [
              I("Liandry's Torment","Melts HP-stacking tanks."),
              I("Void Staff","Penetrates MR stacking."),
              I("Malignance","Objective control through traps.")
            ],
            behind: [
              I("Void Staff","Required vs MR stack."),
              I("Zhonya's Hourglass","Survive engage."),
              I("Rylai's Crystal Scepter","Teamfight utility.")
            ],
            runes: { ...TEEMO_MID_DEFAULT_RUNES },
          },

          WARDEN: {
            ahead: [
              I("Void Staff","MR-stacking Wardens (K'Sante, Galio) still take real damage through pen."),
              I("Liandry's Torment","% HP burn stacks enormously against their HP pool."),
              I("Malignance","Zone their peel angle with mushrooms while ahead.")
            ],
            behind: [
              I("Liandry's Torment","Only reliable damage vs a stacked-resist Warden."),
              I("Morellonomicon","Cuts Tahm Kench/Shen passive sustain."),
              I("Rylai's Crystal Scepter","Slow keeps you safe from their engage.")
            ],
            runes: { ...TEEMO_MID_DEFAULT_RUNES },
          },

          SPECIALIST: {
            ahead: [
              I("Malignance","Mushroom spam denies Gangplank/Singed side-lane control."),
              I("Nashor's Tooth","Blind negates Kayle/Kennen auto-reliant trades."),
              I("Shadowflame","Extra burst vs squishy specialists.")
            ],
            behind: [
              I("Morellonomicon","Anti-heal vs GP Orange/Udyr regen."),
              I("Banshee's Veil","Blocks Kennen stun or the mirror Teemo blind."),
              I("Zhonya's Hourglass","Survive burst setups.")
            ],
            runes: { ...TEEMO_MID_DEFAULT_RUNES },
          },

        },
      },

      Support:{
        bans:["Blitzcrank","Leona","Nautilus"], replacements:["Zyra","Xerath","Pantheon"],
        corePath: "Malignance  ›  Liandry's Torment  ›  Rylai's Crystal Scepter  ›  Morellonomicon",
        coreNote: "Support Teemo plays for vision denial and choke control. Mushrooms replace wards as zone tools.",
        sideItems: ["Sorcerer's Shoes","Ionian Boots of Lucidity","Morellonomicon","Zhonya's Hourglass","Banshee's Veil","Void Staff","Demonic Embrace","Shadowflame"],

        data: {
          JUGGERNAUT: {
            ahead:  [ I("Liandry's Torment","Burn scales off their HP stacking as they walk down your ADC."), I("Rylai's Crystal Scepter","Perma-slow keeps a Juggernaut off your carry entirely."), I("Malignance","Mushrooms zone the exact path they need to engage.") ],
            behind: [ I("Zhonya's Hourglass","Buys time for your ADC to reposition."), I("Rylai's Crystal Scepter","Slow is your only peel tool without hard CC."), I("Morellonomicon","Cuts their sustain if the fight drags on.") ],
            runes: { ...TEEMO_SUP_DEFAULT_RUNES },
          },
          DIVER: {
            ahead:  [ I("Rylai's Crystal Scepter","Slows shut down the dive before it reaches your ADC."), I("Liandry's Torment","Burn punishes their commitment."), I("Malignance","Mushrooms warn of and zone their engage angle.") ],
            behind: [ I("Zhonya's Hourglass","Negates their all-in timing on your backline."), I("Banshee's Veil","Blocks the engage tool that starts the dive."), I("Rylai's Crystal Scepter","Kite to protect your carry.") ],
            runes: { ...TEEMO_SUP_DEFAULT_RUNES },
          },
          ASSASSIN: {
            ahead:  [ I("Rylai's Crystal Scepter","Slow denies their reset window after the burst combo."), I("Liandry's Torment","Burn ticks even if they disengage after a failed dive."), I("Malignance","Mushrooms deny the flank angle assassins need on your ADC.") ],
            behind: [ I("Zhonya's Hourglass","Essential vs burst all-in on your carry."), I("Banshee's Veil","Blocks the setup spell of their combo."), I("Morellonomicon","Slows their regen so they can't reset and re-dive.") ],
            runes: { ...TEEMO_SUP_DEFAULT_RUNES },
          },
          SKIRMISHER: {
            ahead:  [ I("Rylai's Crystal Scepter","Prevents them from ever sticking to your carry."), I("Liandry's Torment","Burn punishes extended 2v2 skirmishes."), I("Malignance","Choke-point control denies their engage lane.") ],
            behind: [ I("Zhonya's Hourglass","Buy time vs an all-in duelist targeting your ADC."), I("Morellonomicon","Cuts lifesteal-heavy skirmisher sustain."), I("Rylai's Crystal Scepter","Kiting is your primary peel tool.") ],
            runes: { ...TEEMO_SUP_DEFAULT_RUNES },
          },
          BURST_MAGE: {
            ahead:  [ I("Banshee's Veil","Spell shield eats the exact combo-opener burst mages need on your ADC."), I("Rylai's Crystal Scepter","Slow denies follow-up after their burst window."), I("Malignance","Zone their poke angle with mushrooms.") ],
            behind: [ I("Banshee's Veil","Mandatory — blocks the CC that starts their combo on your carry."), I("Zhonya's Hourglass","Second life after a full rotation lands anyway."), I("Morellonomicon","Cuts their sustain in prolonged trades.") ],
            runes: { ...TEEMO_SUP_DEFAULT_RUNES },
          },
          BATTLEMAGE: {
            ahead:  [ I("Morellonomicon","Cuts Vladimir/Swain drain healing before it snowballs."), I("Liandry's Torment","Burn outlasts their sustained damage."), I("Malignance","Mushroom zone control denies their positioning.") ],
            behind: [ I("Morellonomicon","Mandatory vs sustain-heavy battlemages."), I("Banshee's Veil","Prevents your carry from getting locked down."), I("Rylai's Crystal Scepter","Control spacing instead of trading.") ],
            runes: { ...TEEMO_SUP_DEFAULT_RUNES },
          },
          ARTILLERY: {
            ahead:  [ I("Malignance","Mushrooms zone their poke lane off your ADC entirely."), I("Rylai's Crystal Scepter","Landing a slow denies their repositioning after poke."), I("Void Staff","Keep damage relevant through their MR.") ],
            behind: [ I("Banshee's Veil","Blocks the poke/CC ability punishing your lane."), I("Malignance","Play for zone control instead of contesting poke."), I("Zhonya's Hourglass","Survive burst on a bad engage.") ],
            runes: { ...TEEMO_SUP_DEFAULT_RUNES },
          },
          MARKSMAN: {
            ahead:  [ I("Liandry's Torment","Constant burn poke forces recalls."), I("Rylai's Crystal Scepter","Slow prevents escape after poke."), I("Shadowflame","Extra damage vs squishy ADCs.") ],
            behind: [ I("Zhonya's Hourglass","Survive all-ins."), I("Morellonomicon","Reduce lifesteal sustain."), I("Rylai's Crystal Scepter","Utility slow still valuable.") ],
            runes: { ...TEEMO_SUP_DEFAULT_RUNES },
          },
          ENCHANTER: {
            ahead:  [ I("Morellonomicon","Mandatory vs healing/shielding."), I("Liandry's Torment","Burn counters sustain."), I("Malignance","Zone their positioning.") ],
            behind: [ I("Morellonomicon","Still required anti-heal."), I("Zhonya's Hourglass","Survive polymorph setups."), I("Banshee's Veil","Block engage CC.") ],
            runes: { ...TEEMO_SUP_DEFAULT_RUNES },
          },
          CATCHER: {
            ahead:  [ I("Rylai's Crystal Scepter","Punish missed hooks with slows."), I("Liandry's Torment","Burn during extended trades."), I("Malignance","Control choke points.") ],
            behind: [ I("Banshee's Veil","Block hooks."), I("Zhonya's Hourglass","Survive engages."), I("Ionian Boots of Lucidity","Lower cooldowns for more traps.") ],
            runes: { ...TEEMO_SUP_DEFAULT_RUNES },
          },
          VANGUARD: {
            ahead:  [ I("Liandry's Torment","Melts tank supports."), I("Morellonomicon","Reduce healing."), I("Rylai's Crystal Scepter","Kite engages easily.") ],
            behind: [ I("Zhonya's Hourglass","Avoid engage burst."), I("Morellonomicon","Still needed vs sustain."), I("Banshee's Veil","Block engage abilities.") ],
            runes: { ...TEEMO_SUP_DEFAULT_RUNES },
          },
          WARDEN: {
            ahead:  [ I("Void Staff","MR-stacking Wardens still take real damage through pen."), I("Liandry's Torment","% HP burn racks up as they body-block for their carry."), I("Malignance","Zone their peel angle so they can't protect their ADC.") ],
            behind: [ I("Liandry's Torment","Only reliable damage vs a stacked-resist Warden."), I("Morellonomicon","Cuts Tahm Kench/Shen passive sustain."), I("Zhonya's Hourglass","Survive the engage they set up.") ],
            runes: { ...TEEMO_SUP_DEFAULT_RUNES },
          },
          SPECIALIST: {
            ahead:  [ I("Malignance","Mushroom vision denial is your entire lane plan vs a Specialist."), I("Liandry's Torment","Burn synergizes with poison + trap zone control."), I("Shadowflame","Extra burst vs squishy specialists caught in your zone.") ],
            behind: [ I("Morellonomicon","Anti-heal vs sustain specialists (GP Orange, Udyr regen)."), I("Banshee's Veil","Blocks their key setup ability."), I("Zhonya's Hourglass","Survive burst setups.") ],
            runes: { ...TEEMO_SUP_DEFAULT_RUNES },
          },
        },
      },

    },
  };
