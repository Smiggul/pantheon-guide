---
name: champion-validator
description: Validates FRGE.gg champion data — schema, all 13 enemy-class sections, rune pages, recommended (corePath) and situational (ahead/behind) builds, index.js imports/wiring, champion image paths, and Riot Data Dragon item/rune/shard asset references — and reports duplicate champion IDs, duplicate/double-wired entries, and inconsistencies. Strictly READ-ONLY: it produces a validation report with recommended fixes and NEVER modifies champion data. Use after adding or editing any champion file, item build, or rune page, or when the user asks to validate, check, audit, or verify champions or the roster.
when_to_use: >
  Trigger after any change to src/data/champs/*.js, the champ index.js, App.jsx (RUNE_TREES / SHARD_ICONS / DD_OVERRIDES), or theme.js item colors; or when the user says: validate champions, check champion data, audit the roster, verify builds or runes, or "did that edit break anything".
paths:
  - src/data/champs/**
  - src/App.jsx
  - src/theme.js
allowed-tools: Read Grep Glob Bash(node ${CLAUDE_SKILL_DIR}/scripts/validate-champions.mjs*)
---

Validate FRGE.gg champion data and report on it. **Never modify it.**

## Run the validator (read-only)

```
node "${CLAUDE_SKILL_DIR}/scripts/validate-champions.mjs"
```

It dynamically imports the assembled roster (`src/data/champs/index.js`) so a syntax error or missing cross-file constant — which `vite build` does *not* catch — surfaces as a hard error. It then cross-checks Riot Data Dragon (`item.json`, `runesReforged.json`, on-disk champion/rune/item images), reads `App.jsx` for `SHARD_ICONS`/`DD_OVERRIDES`, and scans `index.js` wiring. It **writes nothing**. Exit 0 = clean, exit 1 = errors.

## Turn the output into a report

Summarize its stdout for the user, grouped:
- **Errors (must fix):** schema-field gaps, missing/renamed item or rune names, incomplete 13-class coverage, files not imported into `index.js`, duplicate champion IDs, champions double-listed in `CHAMPS`, missing champion/asset images, runtime import failures.
- **Warnings (review):** count anomalies (rune 3/2, shards 3, ahead/behind size), duplicate `dd` keys, ban/replacement art not on disk.
- For every error, state a **specific recommended fix** — the file, the field, and exactly what to change. Present it; do not apply it.

## Hard rule — report only

NEVER edit, write, or auto-fix champion data, item builds, or rune pages from this skill. Output the report and recommendations only. If the user wants a fix applied, they will ask in a new message — then make the change and re-run the validator to confirm.

## Known scope limits (state these if relevant)

- **Skill order** is not part of the current champion schema; that check is informational and only validates if a `skillOrder` field is added later.
- **Deep rune-tree-row conflicts** (two runes chosen from the same tree row, e.g. the historic Yone bug) are not yet detected by the script — call one out manually if you notice it.
