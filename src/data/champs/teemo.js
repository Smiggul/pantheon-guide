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
  keystone:       "Dark Harvest",
  primary:        "Domination",
  primaryRunes:   ["Cheap Shot","Grisly Mementos","Ultimate Hunter"],
  secondary:      "Sorcery",
  secondaryRunes: ["Absolute Focus","Gathering Storm"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Dark Harvest snowballs hard in mid lane where kill pressure is highest. Ultimate Hunter reduces mushroom CD — more shrooms placed per minute means permanent zone control in mid lane choke points.",
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
        corePath: "Liandry's Torment  ›  Nashor's Tooth  ›  Malignance  ›  Rylai's Crystal Scepter",
        coreNote: "Teemo top plays for lane dominance and zone control. Liandry's burns tanks, Nashor's enables DPS, Malignance amplifies mushroom map control.",
        sideItems: ["Sorcerer's Shoes","Plated Steelcaps","Mercury's Treads","Morellonomicon","Shadowflame","Void Staff","Zhonya's Hourglass","Banshee's Veil","Demonic Embrace","Cosmic Drive"],

        data: {
          JUGGERNAUT: {
            ahead:  [ I("Liandry's Torment","Burn scales off their HP stacking — perfect into juggernauts."), I("Rylai's Crystal Scepter","Perma-slow prevents them ever reaching you."), I("Nashor's Tooth","Sustained DPS while kiting wins every extended trade.") ],
            behind: [ I("Plated Steelcaps","Reduces auto damage from champs like Darius/Sett."), I("Zhonya's Hourglass","Stall their all-in window and survive burst."), I("Rylai's Crystal Scepter","Utility slow keeps them off you even when weak.") ],
          },
          DIVER: {
            ahead:  [ I("Nashor's Tooth","Higher DPS to punish failed engages."), I("Rylai's Crystal Scepter","Slows their engage follow-up completely."), I("Liandry's Torment","Burn continues even after they disengage.") ],
            behind: [ I("Zhonya's Hourglass","Negates their dive combo timing."), I("Plated Steelcaps","Reduces sustained damage during all-in."), I("Banshee's Veil","Blocks engage abilities like Camille hook.") ],
          },
          SKIRMISHER: {
            ahead:  [ I("Nashor's Tooth","You out-DPS them if they can't stick."), I("Rylai's Crystal Scepter","Stops Yasuo/Yone from chasing."), I("Liandry's Torment","Burn punishes their mid-fight sustain.") ],
            behind: [ I("Plated Steelcaps","Critical vs auto-heavy duelists."), I("Zhonya's Hourglass","Buy time vs burst windows."), I("Morellonomicon","Cut healing from lifesteal champs.") ],
          },
          VANGUARD: {
            ahead:  [ I("Liandry's Torment","Melts high-HP tanks."), I("Void Staff","Penetrates early MR stacking."), I("Rylai's Crystal Scepter","Keeps tanks permanently slowed.") ],
            behind: [ I("Void Staff","Required to deal damage vs MR stack."), I("Zhonya's Hourglass","Survive engage combos."), I("Rylai's Crystal Scepter","Utility even when behind.") ],
          },
          SPECIALIST: {
            ahead:  [ I("Malignance","Mushroom spam controls side lanes."), I("Liandry's Torment","Synergy with poison + traps."), I("Shadowflame","Extra burst vs squishy specialists.") ],
            behind: [ I("Morellonomicon","Anti-heal vs sustain champs."), I("Banshee's Veil","Block key abilities (Teemo blind mirror, Kennen stun)."), I("Zhonya's Hourglass","Survive burst setups.") ],
          },
        },
      },

      Jungle:{  
        bans:["Warwick","Udyr","Elise"], replacements:["Lillia","Nidalee","Shyvana"],
        corePath: "Malignance  ›  Liandry's Torment  ›  Nashor's Tooth  ›  Rylai's Crystal Scepter",
        coreNote: "Teemo jungle plays for fast clears and map control. Malignance enables constant mushroom pressure on objectives; Liandry's amplifies burn for camps and fights.",
        sideItems: ["Sorcerer's Shoes","Ionian Boots of Lucidity","Morellonomicon","Void Staff","Zhonya's Hourglass","Banshee's Veil","Shadowflame","Demonic Embrace","Cosmic Drive"],

        data: {
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
          VANGUARD: {
            ahead:  [ I("Liandry's Torment","Melts tank junglers."), I("Void Staff","Penetrates MR stacking."), I("Malignance","Objective control with traps.") ],
            behind: [ I("Void Staff","Required vs MR stack."), I("Zhonya's Hourglass","Survive engage."), I("Rylai's Crystal Scepter","Teamfight utility.") ],
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
        },
      },

      Mid:{
        bans:["Talon","Fizz","Katarina"], replacements:["Xerath","Aurelion Sol","Kennen"],
        corePath: "Nashor's Tooth  ›  Liandry's Torment  ›  Malignance  ›  Rylai's Crystal Scepter",

        coreNote: "Mid Teemo plays for lane dominance and anti-melee control. Nashor's enables constant poke and wave pressure; Liandry's amplifies sustained burn; Malignance transitions into map control through mushrooms once lane priority is secured.",

        sideItems: [
          "Sorcerer's Shoes","Mercury's Treads","Plated Steelcaps",
          "Zhonya's Hourglass","Banshee's Veil","Shadowflame",
          "Void Staff","Morellonomicon","Cosmic Drive"
        ],

        data: {

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

        },
      },

            Support:{  
              bans:["Blitzcrank","Leona","Nautilus"], replacements:["Zyra","Xerath","Pantheon"],
        corePath: "Malignance  ›  Liandry's Torment  ›  Rylai's Crystal Scepter  ›  Morellonomicon",
        coreNote: "Support Teemo plays for vision denial and choke control. Mushrooms replace wards as zone tools.",
        sideItems: ["Sorcerer's Shoes","Ionian Boots of Lucidity","Morellonomicon","Zhonya's Hourglass","Banshee's Veil","Void Staff","Demonic Embrace","Shadowflame"],

        data: {
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
          },
        },
      },

    },
    corePath: "Nashor's Tooth  ›  Liandry's Torment  ›  Malignance  ›  Sorcerer's Shoes",
    coreNote: "Nashor's first for on-hit AP + attack speed spike. Liandry's second for % max HP burn through tanks. Malignance third for ability haste and shroom density. Sorc Shoes for flat magic pen to close out the build.",
    sideItems: ["Shadowflame","Rabadon's Deathcap","Void Staff","Morellonomicon","Zhonya's Hourglass","Rylai's Crystal Scepter","Wit's End","Banshee's Veil","Boots of Swiftness"],
    data: {
      JUGGERNAUT: {
        ahead:  [ I("Shadowflame","Flat pen into low-MR Juggernauts while ahead — burst trades hurt."), I("Rabadon's Deathcap","Amplify all AP; shrooms deal enormous burst on a gold lead."), I("Void Staff","If they rush Wit's End early — 40% magic pen keeps damage up.") ],
        behind: [ I("Liandry's Torment","% max HP burn bypasses their HP stacking — no stats required."), I("Rylai's Crystal Scepter","Every Toxic Shot auto applies a slow — impossible to reach you."), I("Morellonomicon","Dr. Mundo/Warwick regen + Nasus stacking — GW on every auto.") ],
      },
      DIVER: {
        ahead:  [ I("Nashor's Tooth","⭐ Blind (Q) negates Irelia/Camille empowered auto combos entirely."), I("Shadowflame","Burst in the 2-second blind window — they can't fight back."), I("Malignance","Haste = more Q casts + shrooms to zone their approach angles.") ],
        behind: [ I("Zhonya's Hourglass","Stasis during their dive wastes all cooldowns — emerge poisoning."), I("Rylai's Crystal Scepter","Autos + Q apply slows every hit — Lee Sin/Hecarim can't stick."), I("Wit's End","MR + attack speed + drain for extended kiting vs Sylas/Diana.") ],
      },
      ASSASSIN: {
        ahead:  [ I("Shadowflame","Out-burst them — your lead means you delete first after blinding."), I("Rabadon's Deathcap","AP advantage wins the trade before their combo can complete."), I("Malignance","Haste = faster Q casts; blind them the moment they dash in.") ],
        behind: [ I("Zhonya's Hourglass","Stasis neutralises Zed Ult / Akali full combo — they waste all."), I("Banshee's Veil","Block Akali E engage or Kata Shunpo — prevent the opening dash."), I("Morellonomicon","Slow their regen after skirmish so they can't recover and re-engage.") ],
      },
      SKIRMISHER: {
        ahead:  [ I("Nashor's Tooth","⭐ Blind hard-counters Fiora/Tryndamere/Master Yi entirely."), I("Shadowflame","Burst them in the blind window; they have nothing to fight back with."), I("Malignance","More Q casts = more blinds in extended duels vs Jax/Kayn.") ],
        behind: [ I("Zhonya's Hourglass","Jax passive and Fiora riposte eat your burst — stasis buys resets."), I("Wit's End","MR + sustain for the extended trades Skirmishers always force."), I("Rylai's Crystal Scepter","Slows on every auto let you re-kite even from a bad position.") ],
      },
      BURST_MAGE: {
        ahead:  [ I("Rabadon's Deathcap","Out-AP them — mushrooms and autos deal more than their combo."), I("Shadowflame","After they miss their opener, burst before the cooldown resets."), I("Malignance","More shrooms faster = no safe ground for them to stand on.") ],
        behind: [ I("Banshee's Veil","Block the CC that starts their combo (Syndra E / Annie stun)."), I("Zhonya's Hourglass","Survive the full AP detonation; poison and shroom stacks remain."), I("Malignance","Haste for more Q casts and shroom density — outzone them safely.") ],
      },
      BATTLEMAGE: {
        ahead:  [ I("Rabadon's Deathcap","Outscale their sustained damage with raw AP — burst trades win."), I("Void Staff","Ryze/Viktor build early MR — 40% pen pierces it as you press ahead."), I("Shadowflame","Burst trades in the lead window punish before they can drain back.") ],
        behind: [ I("Morellonomicon","Vladimir Transfusion + Swain drain — GW 40% on every auto."), I("Malignance","Keep Toxic Shot stacks up from max range — no need to trade."), I("Zhonya's Hourglass","Survive Ryze/Viktor burst on a bad engage; poison does the work.") ],
      },
      ARTILLERY: {
        ahead:  [ I("Boots of Swiftness","Dodge Xerath/Vel'Koz skillshots freely while pressuring forward."), I("Rabadon's Deathcap","Your AP wins at range — mushrooms in their poke lane are lethal."), I("Shadowflame","Once you close the gap and blind, flat pen one-shots the Artillery.") ],
        behind: [ I("Malignance","More shrooms = zone out their entire safe poke angle on the map."), I("Boots of Swiftness","Slow resist + speed to dodge skillshots when you can't get hit."), I("Banshee's Veil","Block one long-range stun — the window to push in or escape.") ],
      },
      MARKSMAN: {
        ahead:  [ I("Nashor's Tooth","⭐ PRIORITY — Blind nullifies every ADC auto for 2–3 seconds."), I("Shadowflame","Post-blind, flat pen + AP one-shots most ADCs before blind wears off."), I("Rabadon's Deathcap","Amplify shroom burst — one shroom can execute a low ADC.") ],
        behind: [ I("Morellonomicon","Deny lifesteal and Bloodthirster shields — their sustain gone."), I("Liandry's Torment","Poison stacks melt Kai'Sa/Vayne HP items safely from range."), I("Rylai's Crystal Scepter","Slow on every auto; kite the ADC indefinitely even from deficit.") ],
      },
      ENCHANTER: {
        ahead:  [ I("Shadowflame","10% extra pen vs shielded targets — counters Lulu/Janna spam."), I("Rabadon's Deathcap","Mushrooms shred through their shields and one-shot the carry."), I("Malignance","More shrooms under the Enchanter force constant repositioning.") ],
        behind: [ I("Morellonomicon","Soraka/Nami core is healing — GW on every auto neuters them."), I("Malignance","Shrooms placed faster; zone Enchanters off their peel angles."), I("Liandry's Torment","Poison burn on every auto drains through Soraka's healing output.") ],
      },
      CATCHER: {
        ahead:  [ I("Boots of Swiftness","Outpace Blitzcrank Q and Thresh hook with slow-resist + speed."), I("Shadowflame","If you get close, burst the Catcher before they chain another CC."), I("Malignance","Mushrooms in hook angles force Catchers to reposition or die.") ],
        behind: [ I("Boots of Swiftness","Slow-resist is your survival tool vs Morgana root / Nautilus CC."), I("Banshee's Veil","Spell shield absorbs Blitz hook / Morgana bind — most critical item."), I("Zhonya's Hourglass","If Nautilus chains you anyway, stasis buys your team time to respond.") ],
      },
      VANGUARD: {
        ahead:  [ I("Void Staff","Press your lead — % magic pen pierces their MR before they stack."), I("Liandry's Torment","% HP burn while ahead stacks enormously as they build Warmog's."), I("Rabadon's Deathcap","Amplify all AP; mushrooms burst even low-MR tanks heavily.") ],
        behind: [ I("Liandry's Torment","% HP burn is the only reliable damage vs Malphite/Ornn stacking."), I("Malignance","Mushrooms ahead of their engage path zone them from initiating."), I("Rylai's Crystal Scepter","Slow on every auto lets you kite Leona/Sejuani indefinitely.") ],
      },
      WARDEN: {
        ahead:  [ I("Void Staff","K'Sante/Galio stack MR — % pen is your answer while ahead."), I("Liandry's Torment","% HP burn stacks enormously against high-HP Wardens while ahead."), I("Rabadon's Deathcap","Amplify your AP so even shielded Wardens take serious shroom damage.") ],
        behind: [ I("Liandry's Torment","% HP burn is your only reliable damage vs Warden HP/MR stacks."), I("Malignance","Mushrooms zone Tahm Kench/Shen from peeling with their body."), I("Morellonomicon","Tahm Kench passive sustain + Shen regen — GW reduces tankiness.") ],
      },
      SPECIALIST: {
        ahead:  [ I("Shadowflame","Burst Singed before he can begin his kite loop."), I("Rabadon's Deathcap","Amplify shroom burst so GP barrels and Shyvana dives become lethal."), I("Malignance","More shroom speed = deny Gangplank barrel spots entirely.") ],
        behind: [ I("Boots of Swiftness","Singed chases you infinitely — slow resist is your only out."), I("Morellonomicon","GP Oranges, Kayle sustain, Udyr regen — GW 40% cuts all of it."), I("Malignance","More shroom density to deny Gangplank barrel placement.") ],
      },
    },
  };
