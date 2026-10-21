---
name: player-facing-text
description: Keeps every piece of text the FRGE.GG end user sees (the player in champ select or in game) down to what changes a decision. Explanations of WHY something was built or chosen belong to the developer, in chat, code comments and CLAUDE.md, never in the product. Use whenever writing or editing any visible string. That includes UI labels, headings, buttons, tooltips, notes and warnings, the item set and rune page titles exported to the League client, and champion data shown on screen (coreNote, rune reason, item why, playTips, alt labels).
when_to_use: >
  Trigger before adding or changing any string that renders in the app or reaches the League client:
  JSX text and title= tooltips in src/*.jsx, block/set titles and notes in src/data/lcuExport.js,
  labels and why-strings in src/data/matchupAdjust.js, enemyTeam.js and itemRationale.js, and
  coreNote / reason / I(name, why) / playTips / altBuilds labels in src/data/champs/*.js.
  Also when the user says text is too long, overruns, over-explains, or is unnecessary.
paths:
  - src/**/*.jsx
  - src/data/**
---

# Player-facing text

## Two audiences, two places

| Audience | Who | Where their text goes | How much |
|---|---|---|---|
| The developer | the person you are working with in this session | chat replies, commit messages, code comments, CLAUDE.md, memory | explain freely: why, sources, numbers, trade-offs |
| The end user | a player mid-champ-select or mid-game, reading at a glance | the app UI, and everything exported to the League client | only what changes what they buy, pick, level or do |

The developer said it directly (2026-10-21): *"never over explain in the data the user actually sees, it's fine if you explain to me why you've done things, but the end user doesn't need to know these things."*

## The one test

For every visible string ask: **does this change what the player buys, picks, levels or does?**
If not, cut it. If it only explains how or why the app decided something, the explanation goes to the developer instead (the chat reply, a code comment, CLAUDE.md).

## Never in player-facing text

- **Confirmation that nothing changed.** "Your usual start holds: melee lane, not a worst matchup" was cut as "completely unnecessary". If the default stands, say nothing.
- **Provenance and verification.** Sources, dates verified, "per lolalytics", "Emerald+ data", "the user's call", patch-sweep history, sample sizes. Exception: a number that decides a choice, kept short (an alternate's win rate next to the main build's).
- **How the app works inside.** Detection logic, fallbacks, which function chose what, "auto-detected from lane positions because...".
- **Repeating the heading or the obvious.** "Item set: the items in your item set", "in buying order" under a timeline that already reads in buying order.
- **Hedges, asides and parentheses** that pad a label: "(pick one)", "(~1000g)", "— magic damage, heals, shields" tacked onto a title.
- **Emojis.** A standing rule of this project: official Riot art or images the developer supplies only. Ask before using any icon that is not one of those.

## Length budgets

- **Subheadings and block titles: a few words, about 24 characters at most.** The in-game shop cuts long ones off. Use "Start vs Mordekaiser", "First back", "Core", "Boots", "Vs Mordekaiser", "Situational", "Vision".
- **Top titles** may carry champion, role and opponent: "FRGE.GG — Pantheon Top vs Mordekaiser". Keep the "FRGE.GG" prefix, because `main.cjs` replaces earlier sets by it. Short forms ("Panth vs Morde") are an open idea; ask before adopting one.
- **Buttons:** 1 to 3 words, naming the action ("Import matchup build", "Full guide").
- **Notes and warnings:** one short clause, and only when there is something to act on. For example, "Ranged: sustain the poke" when the start switched to Doran's Shield.
- **Tooltips:** one line that says what clicking does, not how the feature works.
- **Long text** (coreNote, playTips) sits behind "Read all" or a tap. It is still about playing the champion, never about how the build was researched.

## Before and after, from this project

| Before | After |
|---|---|
| `Start — vs Mordekaiser (your usual start holds: melee lane, not a worst matchup)` | `Start vs Mordekaiser` |
| `Vs Mordekaiser — magic damage, heals, shields` | `Vs Mordekaiser` |
| `Situational vs juggernaut` | `Situational` |
| `First back (~1000g)` | `First back` |
| `Support item — finish (pick one)` | `Support item` |
| a "+5 more" pill hiding imported items | show every item; hiding is not shortening |

## Where the explanation goes instead

Do the work of explaining, just not in the product:
1. Say it to the developer in the chat reply: what you cut, what you kept, and why.
2. If a future session needs it, put it in a code comment beside the logic or in CLAUDE.md.
3. If a reason is genuinely useful to the player, keep it out of the title and the export. Show it in the app (the in-game view's start note), and only when it changes a decision.

## Checklist before finishing a change that touches visible text

- [ ] Every new or edited visible string passes the one test.
- [ ] No title or subheading exceeds its budget. Measure the longest across the roster when it is generated (champion and opponent names vary: "Start vs Fiddlesticks", "Nunu & Willump").
- [ ] Nothing exported to the client carries app-only fields (`buildExport` strips `notes`).
- [ ] The reasoning you cut is in your reply to the developer, or in a comment or CLAUDE.md.
- [ ] Existing over-explained text you happened to touch is trimmed. A sweep of text you did not touch is a separate job: propose it, do not start it unasked.
