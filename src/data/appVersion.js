// FRGE's version as the owner reads it (2026-10-26): 0.<LoL patch>.<features>.<build updates>.
// The installer and the auto-updater only accept three numbers, so package.json carries
// 0.<patch>.<features × 100 + build updates>: 0.21.1.1 ships as 0.21.101, 0.21.2.1 as 0.21.201.
// That keeps every release higher than the last, so installed apps keep updating. A new LoL
// patch starts again at .1.1 (0.22.1.1 = 0.22.101); season 27 moves to 1.x. Releases from
// before the scheme (0.21.1 and earlier) show as they are.

/** "0.21.101" -> "0.21.1.1"; "0.21.1" -> "0.21.1". */
export function shownVersion(version) {
  const m = /^(\d+)\.(\d+)\.(\d+)$/.exec(String(version || "").trim());
  if (!m) return version || "";
  const [major, minor, patch] = m.slice(1).map(Number);
  if (patch < 100) return `${major}.${minor}.${patch}`;
  return `${major}.${minor}.${Math.floor(patch / 100)}.${patch % 100}`;
}

/** "0.21.1.1" -> "0.21.101", for package.json; builds must stay under 100. */
export function packageVersion(shown) {
  const m = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/.exec(String(shown || "").trim());
  if (!m) throw new Error(`Not a 0.patch.features.builds version: ${shown}`);
  const [major, minor, features, builds] = m.slice(1).map(Number);
  if (builds > 99) throw new Error("Build updates run 1-99 per feature version");
  return `${major}.${minor}.${features * 100 + builds}`;
}
