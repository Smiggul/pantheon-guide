# FRGE.GG — V2 "Forge Frog" (in progress)

Companion to `logo-prompt.md`. That file specifies **V1**, the geometric icon mark
(frog head with a single-horn anvil in negative space). V1 is **built, saved and
approved for small sizes** — see the Figma file below.

This file specifies **V2**, a detailed mascot: a buff blacksmith frog mid-swing at
an anvil.

**Figma file:** https://www.figma.com/design/qYucavOkOlW1QEHYYrLgcV
(V1 lives in the frame `V1 — Icon Mark (SAVED)`; V2 in `V2 — Forge Frog (scene)`)

**Status:** V2 blocked mid-build on the Figma MCP tool-call limit (Starter plan).
Resume by rebuilding the `V2` frame from the geometry below.

---

## The two-tier decision

V2 does not replace V1 — it cannot. A frog mid-swing with a hammer and anvil has
no chance of reading at 32x32, and the app needs a tray icon at exactly that size.
So the system is two-tier, which is how crest-plus-monogram brands work:

| Tier | Mark | Used for |
|---|---|---|
| **Icon** | V1 — frog head, anvil in negative space | favicon, 32px tray icon, `.ico`, app icon, avatar |
| **Hero** | V2 — buff blacksmith frog at the anvil | landing page, README, store art, stickers, merch |

Confirmed by the user: *"the V1 logo is fine for a tray icon for now."*

---

## Direction

A **buff** blacksmith frog, mid-swing, hammer raised over the shoulder, anvil in
front of him. Gold on charcoal, same locked palette.

"Buff" is doing real work here, not just flavour — see the lessons below.

---

## Lessons already paid for (do not repeat these)

**A naturalistic sitting frog reads as a blob.** Two attempts stacked ellipses of
similar size (head 92x78 against a body 112x105) and both merged into an amorphous
mass that read as a snowman or a slug. Overlapping primitives only read as anatomy
when their sizes contrast sharply.

**The V-taper is the fix.** Wide deltoids over a narrow waist is the single most
readable "powerful figure" silhouette there is, and it is far easier to land than
naturalistic frog anatomy. Target roughly a 1.75:1 shoulder-to-waist ratio.

**Size contrast, not detail, creates readability.** Big haunch/legs, upright torso,
head clearly smaller and clearly higher, eye bulges clearly protruding above the
skull. When in doubt, exaggerate the difference.

**`outlineStroke()` re-parents the node.** Building limbs as stroked paths and
converting them to fills works well, but the returned node escapes to the page —
`appendChild` it back into the frame before unioning or it silently vanishes from
the composition.

**Pepe risk rises sharply here.** V1 was safe because it was a head icon. A frog
with arms and a humanoid stance is much closer to the danger. Guardrails:
- Side or three-quarter ACTION pose, never front-facing and static
- Focused/mid-effort, never smug, knowing or sardonic
- Gold, never Pepe-green
- He is doing a job, not reacting to the viewer — that is the main distancing move

---

## Geometry as built (1200 x 1200 frame, resume from here)

Ground slab: `x 80, y 900, 960 x 28`, radius 14, Gunmetal `#2A2F38`.

Anvil (single horn, pointing left toward the frog), fill Gold-dark `#A8862A`:

```
M 520 660 L 600 630 L 900 630 L 900 694 L 800 712 L 782 776
L 860 806 L 860 850 L 660 850 L 660 806 L 738 776 L 720 712 L 600 694 Z
```

Frog, unioned from primitives, gold gradient `#F0C75A -> #D4AF37 -> #A8862A`:

| Part | Shape | Centre | Radii |
|---|---|---|---|
| torso | polygon | `M 218 442 L 448 442 L 396 672 L 268 672 Z` | V-taper 225 -> 127 |
| delt-L / delt-R | ellipse | 232,452 / 440,452 | 80 x 76 |
| chest | ellipse | 332,500 | 110 x 78 |
| hips | ellipse | 332,690 | 84 x 58 |
| head | ellipse | 332,322 | 90 x 76 |
| jaw | ellipse | 332,372 | 74 x 46 |
| eye-L / eye-R | ellipse | 282,248 / 384,248 | 50 |
| leg-L / leg-R | stroked limb w74 | 292,690 -> 250,872 / 380,690 -> 428,872 | |
| foot-L / foot-R | ellipse | 242,878 / 436,878 | 62 x 26 |
| arm-R upper / fore | stroked limb w68 / w58 | 440,452 -> 512,350 -> 588,262 | |
| bicep-R | ellipse | 478,400 | 46 x 50 |
| arm-L upper / fore | stroked limb w66 / w56 | 232,452 -> 214,592 -> 300,668 | |
| bicep-L | ellipse | 222,520 | 44 x 48 |

Still to add: the hammer (handle from the raised hand at ~588,262 angled up-right,
head perpendicular at the end) and molten-orange spark bursts at the anvil's top
face — the sparks are what give `#F97316` a job in the mark and sell the strike.

---

## Open questions for the next session

1. Does the buff silhouette actually read, or does it need hand-authored bezier
   curves rather than unioned primitives? Primitives have failed twice on the
   naturalistic version; the V-taper is the test of whether they can work at all.
2. Should the scene sit inside a **circular badge**? It would preserve the
   frog-as-the-O trick from V1, so the wordmark lockup still works with V2 in it.
3. Front-facing three-quarter (shows the physique better) vs strict profile
   (safer on Pepe distance, clearer hammer arc)?
