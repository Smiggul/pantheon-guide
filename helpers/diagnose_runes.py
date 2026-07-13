"""
diagnose_runes.py
─────────────────
Run from your project folder:
  python diagnose_runes.py "D:\Downloadsss\dragontail-16.9.1.tgz"
"""
import sys
import tarfile

if len(sys.argv) < 2:
    print("Usage: python diagnose_runes.py <path-to-dragontail.tgz>")
    sys.exit(1)

tgz = sys.argv[1]

print(f"\nScanning {tgz} for rune-related paths...\n")

with tarfile.open(tgz, "r:gz") as tar:
    members = [
        m.name for m in tar.getmembers()
        if "perk" in m.name.lower()
        or "rune" in m.name.lower()
    ]

if not members:
    print("No perk/rune paths found at all.")
    print("\nShowing first 40 paths in the archive to check structure:\n")
    with tarfile.open(tgz, "r:gz") as tar:
        for m in list(tar.getmembers())[:40]:
            print(m.name)
else:
    print(f"Found {len(members)} rune-related paths. First 40:\n")
    for m in members[:40]:
        print(m)
    print(f"\n... {len(members)} total")
