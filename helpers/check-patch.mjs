// ─────────────────────────────────────────────────────────────────────────────
//  check-patch.mjs  —  is a new League (Data Dragon) patch out?
//
//  Compares the version bundled in public/ddragon/version.txt against the latest
//  on the official Data Dragon API. Prints a one-line status. In GitHub Actions
//  (GITHUB_OUTPUT set) it also emits `outdated`, `latest` and `local` outputs so
//  the workflow can decide whether to run the update. Always exits 0 — "no new
//  patch" is a normal result, not a failure.
//
//  Run:  node helpers/check-patch.mjs
// ─────────────────────────────────────────────────────────────────────────────
import fs from "node:fs";

const VERSION_FILE = "public/ddragon/version.txt";
const VERSIONS_URL = "https://ddragon.leagueoflegends.com/api/versions.json";

const local = fs.existsSync(VERSION_FILE)
  ? fs.readFileSync(VERSION_FILE, "utf8").trim()
  : "(none)";

let latest = local;
try {
  const res = await fetch(VERSIONS_URL);
  if (!res.ok) throw new Error(`versions.json HTTP ${res.status}`);
  const versions = await res.json();
  latest = Array.isArray(versions) && versions[0] ? versions[0] : local;
} catch (err) {
  console.error(`check-patch: could not reach Data Dragon (${err.message}); assuming up to date.`);
}

const outdated = latest !== local && latest !== "(none)";
console.log(`Data Dragon — bundled ${local} · latest ${latest} · ${outdated ? "⟶ UPDATE AVAILABLE" : "up to date"}`);

if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(process.env.GITHUB_OUTPUT,
    `outdated=${outdated}\nlatest=${latest}\nlocal=${local}\n`);
}
