import { I } from "../runeHelpers.js";

const RENATA_SUP_DEFAULT_RUNES = {
  keystone:       "Guardian",
  primary:        "Resolve",
  primaryRunes:   ["Shield Bash","Bone Plating","Unflinching"],
  secondary:      "Domination",
  secondaryRunes: ["Sixth Sense","Relentless Hunter"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Guardian shields Renata and her carry the instant a fight starts, matching her enabler identity — Loyalty's chain-shield and Bailout's damage-redirect both reward staying near the ADC. Shield Bash converts that shield into bonus on-hit damage; Bone Plating and Unflinching round out survivability into hard-engage lanes. Sixth Sense and Relentless Hunter add vision-stacking and roam speed for cross-map Hostile Takeover plays.",
};

// ══════════════════════════════════════════════════════════════════════════
//  RENATA GLASC — Enchanter / Chain-Shield Enabler
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"renataglasc", display:"Renata Glasc", dd:"Renata",
  color:"#7a3a1a", glow:"#e8a860",
  lanes:["Support"],
  roles:{
    Support:{
      bans:["Fizz","Yone","Locke"], replacements:["Lulu","Karma","Nami"],
      role:"Enchanter / Chain-Shield Enabler",
      corePath:"Celestial Opposition  ›  Ionian Boots of Lucidity  ›  Locket of the Iron Solari  ›  Imperial Mandate",
      coreNote:"Renata Glasc plays for chain-shield peel backed by a game-flipping ultimate — Loyalty and Bailout keep her carry alive through anything, while Hostile Takeover can turn an enemy's own damage against their team. Celestial Opposition heals her for engaging near allies; Locket adds team-wide burst mitigation; Imperial Mandate amplifies damage the instant her CC lands.",
      sideItems:["Shurelya's Battlesong","Zeke's Convergence","Mercury's Treads","Redemption","Knight's Vow","Mikael's Blessing"],
      data:{
        JUGGERNAUT:{ahead:[I("Locket of the Iron Solari","Shield covers the walk-down window."),I("Imperial Mandate","Amplify damage after your CC lands."),I("Celestial Opposition","Heal supports the whole lane.")],behind:[I("Mikael's Blessing","Cleanse any CC they carry."),I("Mercury's Treads","Reduce their key CC."),I("Celestial Opposition","Core defensive value vs their press.")],runes:{...RENATA_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Celestial Opposition","Heal absorbs the opening burst."),I("Shurelya's Battlesong","Speed enables the counter-engage."),I("Imperial Mandate","Punish their commit.")],behind:[I("Mikael's Blessing","Cleanse the CC that starts the dive."),I("Celestial Opposition","Extra heal layer."),I("Mercury's Treads","Shorter CC on the engage.")],runes:{...RENATA_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield eats the opener before it lands on your ADC."),I("Imperial Mandate","Punish their commit with amplified damage."),I("Celestial Opposition","Heal recovers from the burst.")],behind:[I("Mikael's Blessing","Cleanse the setup CC before the burst lands."),I("Mercury's Treads","Reduce the CC that opens their combo."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...RENATA_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Zeke's Convergence","Amplify ADC damage in the 2v2."),I("Knight's Vow","Share damage in the skirmish."),I("Celestial Opposition","Heal war.")],behind:[I("Knight's Vow","Share damage so your ADC survives the duel."),I("Mikael's Blessing","Cleanse their all-in CC."),I("Mercury's Treads","Reduce their gap-close CC.")],runes:{...RENATA_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Mercury's Treads","Reduce CC chains before their combo."),I("Locket of the Iron Solari","Shield through the combo."),I("Celestial Opposition","Heal recovers from the burst.")],behind:[I("Mikael's Blessing","Cleanse the setup CC."),I("Mercury's Treads","Shorten CC duration."),I("Celestial Opposition","Extra heal layer.")],runes:{...RENATA_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Celestial Opposition","Heal sustains your lane through their drain war."),I("Knight's Vow","Share damage through the drain."),I("Imperial Mandate","Amplify the punish.")],behind:[I("Celestial Opposition","Global healing offsets their sustained damage."),I("Knight's Vow","Share the damage in the extended fight."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...RENATA_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Locket of the Iron Solari","Shields your ADC from poke chip."),I("Redemption","Offsets accumulated poke damage.")],behind:[I("Redemption","Global heal counters accumulated chip."),I("Mercury's Treads","Reduce CC duration."),I("Celestial Opposition","Heal layer.")],runes:{...RENATA_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Zeke's Convergence","Amplify your ADC's damage output."),I("Imperial Mandate","Aqua Prison-style CC-into-poke amplification."),I("Locket of the Iron Solari","Shield in the poke war.")],behind:[I("Mikael's Blessing","Cleanse the setup CC on your ADC."),I("Celestial Opposition","Non-negotiable — protect your carry."),I("Redemption","Offsets the deficit.")],runes:{...RENATA_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shurelya's Battlesong","Speed wins the peel-and-poke war."),I("Zeke's Convergence","Amplify ADC damage."),I("Celestial Opposition","Heal war.")],behind:[I("Locket of the Iron Solari","Shield war baseline."),I("Redemption","Global heal offsets theirs."),I("Mikael's Blessing","Cleanse their key CC.")],runes:{...RENATA_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mikael's Blessing","Cleanse hooks before the follow-up."),I("Locket of the Iron Solari","Shield vs pick attempts."),I("Mercury's Treads","Dodge the hook range.")],behind:[I("Mikael's Blessing","Mandatory — cleanses a landed hook."),I("Mercury's Treads","Reduce CC duration."),I("Celestial Opposition","Extra heal layer.")],runes:{...RENATA_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Celestial Opposition","Heal through the engage."),I("Mikael's Blessing","Cleanse their CC chain."),I("Shurelya's Battlesong","Speed enables the save.")],behind:[I("Mikael's Blessing","Cleanses the engage that would otherwise chain-CC your ADC."),I("Mercury's Treads","Shorter stuns from their initiation."),I("Celestial Opposition","Heal layer.")],runes:{...RENATA_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Zeke's Convergence","Amplify ADC damage past their body-block."),I("Celestial Opposition","Heal through their mitigation."),I("Knight's Vow","Share damage in the peel war.")],behind:[I("Knight's Vow","Share damage through the extended peel war."),I("Redemption","Global heal in the extended peel war."),I("Mercury's Treads","Poppy E/Galio taunt — reduce.")],runes:{...RENATA_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Mercury's Treads","Teemo blind, Kennen stun — land your own CC first."),I("Locket of the Iron Solari","Shield through their poke/kit."),I("Zeke's Convergence","Amplify damage in skirmishes.")],behind:[I("Mikael's Blessing","Cleanses burst setups."),I("Mercury's Treads","Reduce blind/stun duration."),I("Celestial Opposition","Heal while you figure out the matchup.")],runes:{...RENATA_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
