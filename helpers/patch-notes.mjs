// ─────────────────────────────────────────────────────────────────────────────
//  patch-notes.mjs — read Riot's official patch notes and say what changed.
//
//  patch-diff.mjs answers "which items moved" from Data Dragon. That is
//  mechanically exact but silent about INTENT: it sees a stat delta, not "we are
//  buffing his W cooldown so he can use it more freely". This reads the actual
//  notes, so the patch PR carries Riot's own wording for every champion in the
//  FRGE roster that was touched.
//
//  The notes URL is fully predictable from the bundled Data Dragon version —
//  ddragon 16.17.x is game patch 26.17 (major runs 10 ahead), which maps to
//  /en-us/news/game-updates/league-of-legends-patch-26-17-notes — so no index
//  scraping is needed.
//
//  Run:  node helpers/patch-notes.mjs [--patch 26.17] [--out notes.md]
// ─────────────────────────────────────────────────────────────────────────────
import fs from "node:fs";

const args = process.argv.slice(2);
const argOf = (f, d = null) => { const i = args.indexOf(f); return i !== -1 && args[i + 1] ? args[i + 1] : d; };
const OUT = argOf("--out");

// ── Work out the patch number ────────────────────────────────────────────────
let patch = argOf("--patch");
if (!patch) {
  try {
    const ver = fs.readFileSync("public/ddragon/version.txt", "utf8").trim();     // e.g. 16.17.1
    const [maj, min] = ver.split(".");
    patch = `${Number(maj) + 10}.${min}`;                                          // 26.17
  } catch {
    console.error("patch-notes: no --patch given and public/ddragon/version.txt is unreadable.");
    process.exit(2);
  }
}
const slug = `league-of-legends-patch-${patch.replace(".", "-")}-notes`;
const URL_ = `https://www.leagueoflegends.com/en-us/news/game-updates/${slug}/`;

// ── Fetch ────────────────────────────────────────────────────────────────────
let html = "";
let bailed = false;
try {
  const res = await fetch(URL_, { headers: { "User-Agent": "Mozilla/5.0 (FRGE.GG patch bot)" }, redirect: "follow" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  html = await res.text();
} catch (err) {
  // Notes often publish a few hours after the Data Dragon bump, so a miss here
  // is normal on patch day and must not fail the workflow.
  const msg = `Riot's patch notes for **${patch}** could not be read (${err.message}). ` +
    `They usually publish alongside or shortly after the client patch — re-run this step later, or read them at ${URL_}`;
  console.log(msg);
  if (OUT) fs.writeFileSync(OUT, `## Patch notes\n\n${msg}\n`, "utf8");
  bailed = true;   // not process.exit(): exiting mid-socket-teardown trips a libuv assertion on Windows
}

// ── Parse ────────────────────────────────────────────────────────────────────
// Riot's markup is stable: one .patch-change-block per champion/item, carrying an
// h3.change-title (with a machine-readable id), an optional blockquote of intent,
// h4.change-detail-title per ability, and <li> rows of "Attribute: old ⇒ new".
const strip = (s) => s.replace(/<[^>]+>/g, "")
  .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&#39;|&rsquo;/g, "'")
  .replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">")
  .replace(/\s+/g, " ").trim();

const body = (bailed ? "" : html).replace(/<style[\s\S]*?<\/style>/g, "").replace(/<script[\s\S]*?<\/script>/g, "");

const blocks = [];
const blockRe = /<div class="[^"]*patch-change-block[^"]*"[\s\S]*?(?=<div class="[^"]*patch-change-block|<header|<footer|$)/g;
for (const m of body.matchAll(blockRe)) {
  const chunk = m[0];
  const titleM = chunk.match(/<h3[^>]*class="[^"]*change-title[^"]*"[^>]*(?:id="patch-([^"]+)")?[^>]*>([\s\S]*?)<\/h3>/);
  if (!titleM) continue;
  const name = strip(titleM[2]);
  if (!name) continue;

  const ctxM = chunk.match(/<blockquote[^>]*class="[^"]*context[^"]*"[^>]*>\s*<p>([\s\S]*?)<\/p>/);
  const context = ctxM ? strip(ctxM[1]) : "";

  // Ability headings and the change rows that follow each one.
  const details = [];
  const partRe = /<h4[^>]*class="[^"]*change-detail-title[^"]*"[^>]*>([\s\S]*?)<\/h4>([\s\S]*?)(?=<h4[^>]*class="[^"]*change-detail-title|$)/g;
  for (const p of chunk.matchAll(partRe)) {
    const label = strip(p[1]);
    const rows = [...p[2].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((r) => strip(r[1])).filter(Boolean);
    if (label || rows.length) details.push({ label, rows });
  }
  // Items and system changes have no ability <h4>, so the loop above finds
  // nothing — fall back to every change row in the block.
  if (!details.length) {
    const rows = [...chunk.matchAll(/<li>([\s\S]*?)<\/li>/g)].map((r) => strip(r[1])).filter(Boolean);
    if (rows.length) details.push({ label: "", rows });
  }
  blocks.push({ name, id: titleM[1] || "", context, details });
}

// ── Which of these are OUR champions? ────────────────────────────────────────
let roster = new Map();     // lowercased display name -> display
try {
  const { CHAMPS } = await import("../src/data/champs/index.js");
  roster = new Map(CHAMPS.map((c) => [c.display.toLowerCase(), c.display]));
} catch { /* roster unavailable — still report the raw notes */ }

const isChamp = (b) => roster.has(b.name.toLowerCase());
const champBlocks = blocks.filter(isChamp);
const otherBlocks = blocks.filter((b) => !isChamp(b));

// ── Report ───────────────────────────────────────────────────────────────────
const L = [`## Riot's patch ${patch} notes`, ""];
if (!blocks.length) {
  L.push(`The notes page was fetched but no change blocks were recognised — Riot may have changed their markup.`,
    `Read them directly: ${URL_}`, "");
} else {
  L.push(`[Full notes](${URL_}) · **${champBlocks.length}** roster champions changed, **${otherBlocks.length}** other entries.`, "");

  if (champBlocks.length) {
    L.push("### Champions in the FRGE roster", "");
    for (const b of champBlocks) {
      L.push(`<details><summary><b>${b.name}</b>${b.details.length ? ` — ${b.details.map((d) => d.label).filter(Boolean).join(", ")}` : ""}</summary>`, "");
      if (b.context) L.push(`> ${b.context}`, "");
      for (const d of b.details) {
        if (d.label) L.push(`**${d.label}**`);
        for (const r of d.rows) L.push(`- ${r}`);
        L.push("");
      }
      L.push("</details>", "");
    }
  }
  if (otherBlocks.length) {
    L.push("### Items, runes and systems", "");
    for (const b of otherBlocks) {
      const summary = b.details.flatMap((d) => d.rows).slice(0, 4);
      L.push(`- **${b.name}**${summary.length ? ` — ${summary.join("; ")}` : ""}`);
    }
    L.push("");
  }
}

if (!bailed) {
  const report = L.join("\n");
  if (OUT) fs.writeFileSync(OUT, report, "utf8");
  console.log(report);

  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT,
      `notes_champs=${champBlocks.length}\nnotes_other=${otherBlocks.length}\nnotes_url=${URL_}\n`);
  }
}
