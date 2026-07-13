"""
setup_ddragon.py
────────────────
Extracts your dragontail .tgz and copies the files the app needs
into public/ddragon/, preserving Data Dragon's exact structure.

Run once per patch from your project root:
  python setup_ddragon.py "D:\Downloadsss\dragontail-16.9.1.tgz"
"""

import json
import shutil
import sys
import tarfile
from pathlib import Path


PUBLIC_DIR = Path("public/ddragon")


def find_version(tar: tarfile.TarFile) -> str:
    for member in tar.getmembers():
        parts = Path(member.name).parts
        if len(parts) >= 1 and parts[0][0].isdigit():
            return parts[0]
    raise RuntimeError("Could not detect version folder in tgz.")


def extract_members(tar: tarfile.TarFile, prefix: str, dest: Path) -> int:
    """
    Extract all members whose path starts with `prefix` into `dest`,
    stripping the prefix so output paths are relative to dest.
    """
    count = 0
    for member in tar.getmembers():
        if not member.name.startswith(prefix):
            continue
        rel = member.name[len(prefix):]
        if not rel:
            continue
        out = dest / rel
        if member.isdir():
            out.mkdir(parents=True, exist_ok=True)
            continue
        out.parent.mkdir(parents=True, exist_ok=True)
        f = tar.extractfile(member)
        if f:
            out.write_bytes(f.read())
            count += 1
    return count


def main():
    if len(sys.argv) < 2:
        print("Usage: python setup_ddragon.py <dragontail-XX.X.X.tgz>")
        sys.exit(1)

    tgz_path = Path(sys.argv[1])
    if not tgz_path.exists():
        print(f"File not found: {tgz_path}")
        sys.exit(1)

    print(f"\n→ Opening {tgz_path.name} ...")

    with tarfile.open(tgz_path, "r:gz") as tar:
        version = find_version(tar)
        print(f"  Detected patch: {version}\n")

        # ── Champions ──────────────────────────────────────────────────────────
        dest = PUBLIC_DIR / "img" / "champion"
        dest.mkdir(parents=True, exist_ok=True)
        n = extract_members(tar, f"{version}/img/champion/", dest)
        print(f"  ✓ Champions:     {n} files")

        # ── Items (images) ─────────────────────────────────────────────────────
        dest = PUBLIC_DIR / "img" / "item"
        dest.mkdir(parents=True, exist_ok=True)
        n = extract_members(tar, f"{version}/img/item/", dest)
        print(f"  ✓ Item images:   {n} files")

        # ── item.json ──────────────────────────────────────────────────────────
        item_json_path = f"{version}/data/en_US/item.json"
        try:
            f   = tar.extractfile(tar.getmember(item_json_path))
            raw = json.loads(f.read().decode("utf-8"))
            slim = {
                "version": raw.get("version", version),
                "data": {
                    iid: {
                        "id":    int(iid),
                        "name":  info["name"],
                        "image": info["image"]["full"],   # e.g. "3071.png"
                    }
                    for iid, info in raw["data"].items()
                    if info.get("name")
                }
            }
            out = PUBLIC_DIR / "data" / "item.json"
            out.parent.mkdir(parents=True, exist_ok=True)
            out.write_text(
                json.dumps(slim, ensure_ascii=False, separators=(",", ":")),
                encoding="utf-8",
            )
            print(f"  ✓ item.json:     {len(slim['data'])} items indexed")
        except KeyError:
            print(f"  ⚠ item.json not found at {item_json_path}")

        # ── Rune images ────────────────────────────────────────────────────────
        # perk-images lives at the ROOT of the tgz (not inside the version folder)
        # confirmed: "img/perk-images/StatMods/..." not "16.9.1/img/perk-images/..."
        dest = PUBLIC_DIR / "img" / "perk-images"
        dest.mkdir(parents=True, exist_ok=True)
        n = extract_members(tar, "img/perk-images/", dest)
        print(f"  ✓ Rune images:   {n} files")

        # ── runesReforged.json ─────────────────────────────────────────────────
        rune_json_path = f"{version}/data/en_US/runesReforged.json"
        try:
            f   = tar.extractfile(tar.getmember(rune_json_path))
            raw = json.loads(f.read().decode("utf-8"))
            # Flat map: { "Conqueror": "perk-images/Styles/Precision/..." }
            slim = {}
            for tree in raw:
                slim[tree["name"]] = tree["icon"]
                for slot in tree.get("slots", []):
                    for rune in slot.get("runes", []):
                        slim[rune["name"]] = rune["icon"]
            out = PUBLIC_DIR / "data" / "runesReforged.json"
            out.write_text(
                json.dumps(slim, ensure_ascii=False, separators=(",", ":")),
                encoding="utf-8",
            )
            print(f"  ✓ runesReforged: {len(slim)} runes indexed")
        except KeyError:
            print(f"  ⚠ runesReforged.json not found at {rune_json_path}")

    # ── Version file ───────────────────────────────────────────────────────────
    (PUBLIC_DIR / "version.txt").write_text(version)

    print(f"""
╔══════════════════════════════════════════════════╗
║  Done! Patch {version:<37}║
║  public/ddragon/ is ready.                       ║
║                                                  ║
║  To update next patch:                           ║
║  python setup_ddragon.py <new-dragontail.tgz>    ║
║  No App.jsx changes needed.                      ║
╚══════════════════════════════════════════════════╝
""")


if __name__ == "__main__":
    main()
