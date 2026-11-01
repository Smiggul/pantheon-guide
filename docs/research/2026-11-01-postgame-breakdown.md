# Post-game breakdown: research

The owner asked for this on 1 Nov 2026, after seeing iTero's ads for a breakdown of your last match. Nothing is built yet: this note covers what exists, what Riot allows, and a phased plan.

## What iTero and the others offer

- **iTero (itero.gg).** It advertises post-game analysis through a "Macro Coach": macro mistakes, strengths and improvement areas. The Macro Coach unlocks after ten games and compares your stats with players of your rank. Third-party reviews call the breakdown deep but overwhelming the first time you open it. One comparison rates it "Good", behind Mobalytics ("Best"). Most coverage is promotional, and I found no independent test of its accuracy.
- **Mobalytics** is the usual benchmark for detailed post-game breakdowns.

## What FRGE can do that they can't

FRGE knows **the build you imported for that game**: the rune page, the item set ordered by phase, the boots timing and the lane opponent (`lastImport` in App.jsx). So it can grade your game against your own plan, not just against averages:

- **Build adherence.** Which items you bought and in what order, against the imported set. For example: "Core done by 24:10; Spirit Visage was skipped for a second damage item."
- **Item timings** against the champion-role's real timings: `bootsTiming.js` already holds when most games buy boots.
- **The lane opponent.** CS, gold and level against them at 10 and 15 minutes, and whether you used the matchup answers (anti-heal against a healer, and so on).
- **Rune swaps.** Whether the page you played was the one recommended for that opponent.

## Where the data comes from

| Source | What it gives | Key needed | Notes |
|---|---|---|---|
| League client (LCU), end of game | The scoreboard: champions, positions, K/D/A, gold, CS, damage, vision, final items | No | Read locally right after the game, the same way FRGE already talks to champ select. Unofficial: Riot says the LCU can change or disappear at any time. The endpoint path (`/lol-end-of-game/v1/eog-stats-block` in community captures) must be checked against a running client. |
| Riot API Match-V5 and its timeline | Minute-by-minute frames (gold, CS, XP, position) and events (item purchases with timestamps, kills, wards, objectives) | Yes, a production key | Item purchase times, CS at 10 and gold difference all come from here. Riot's rule: when data exists in both the Riot API and the LCU, use the Riot API. |

## Riot's rules that shape this

From the developer portal; the 2026 wording should be rechecked before applying:

- **The key must never ship in the app.** Riot forbids an API key in distributed binaries. Match-V5 therefore needs a small FRGE server that holds the key and proxies requests, and FRGE has no backend today. The "FRGE.GG Launch Economics" artifact already covers this approval gate and a cheap hosting stack.
- **One product per production key,** approved against a working prototype or mockup of the user flow.
- **Game integrity.** No information the player couldn't otherwise know, no tools that "dictate player decisions", and no MMR calculators. A post-game review of your own match is the accepted kind of tool. Wording matters: "what happened and how it compares", not orders.
- **A free tier is required** if FRGE is ever monetised.

## Plan

1. **Phase 1: no key, ships in the desktop app.** After a game, read the end-of-game stats from the client and set them beside the build FRGE imported:
   - final items against the plan;
   - CS per minute, damage, vision and deaths against the lane opponent from the scoreboard.
   
   This is enough for a "your game vs your plan" card. It sits behind an LCU endpoint that may change, so it should fail quietly.
2. **Phase 2: the timeline.** Apply for a production key with Phase 1 as the prototype, and run a small server that holds the key. Then add purchase times, CS and gold at 10 and 15 minutes, a death map by phase and objective participation.
3. **Phase 3: rank comparison** (iTero's "after ten games" idea). Compare your last N games with lolalytics-style averages for your rank on that champion and role, using the same Emerald+ data the build audits use.

## Open decisions for the owner

- Phase 1 only for now, or apply for the production key now? Approval can take weeks.
- Where it lives: a card in the in-game view after the game ends, a "Last game" page, or both.
- Text budget: it follows the player-facing-text rule (one short line per finding), not a dashboard of every stat.

## Sources

- [iTero, League of Legends Companion Coach](https://www.itero.gg/)
- [European Gaming: "The app you need if you're tired of throwing"](https://europeangaming.eu/portal/latest-news/2025/11/18/196546/the-app-you-need-to-download-if-youre-tired-of-throwing-in-league-of-legends/)
- [buildzcrank: Best LoL companion apps 2026](https://buildzcrank.com/en/blog/best-league-of-legends-app-2026/)
- [Eneba: Best esports AI tools 2026](https://www.eneba.com/hub/ai-tools/esports-ai-tools/)
- [Riot Developer Portal: League of Legends](https://developer.riotgames.com/docs/lol)
- [Riot Developer Portal: League client APIs](https://developer.riotgames.com/league-client-apis.html)
- [Hextech Docs: Getting started with the LCU API](https://hextechdocs.dev/getting-started-with-the-lcu-api/)
- [Community capture of the LCU end-of-game stats](https://gist.github.com/xadamxk/8b3c795d98773d0879eb1b02742bee0e)
