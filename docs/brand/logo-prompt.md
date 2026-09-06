# FRGE.GG — Master Logo Prompt (V1, the ICON)

> **This is V1 — the icon tier.** Built, saved and approved for small sizes:
> favicon, the 32px tray icon, the .ico and the app icon.
> A second, detailed mascot (a buff blacksmith frog mid-swing) is specified
> separately in  and serves as the HERO mark. V2 does not
> replace V1 — a frog mid-swing cannot read at 32x32, which is exactly the size
> the tray icon needs.
>
> **Figma:** https://www.figma.com/design/qYucavOkOlW1QEHYYrLgcV

Brand asset. Version-controlled so the brief lives with the project rather than in
chat history. Palette here MUST stay in sync with the locked brand palette in
`CLAUDE.md` and `src/index.css`.

**Concept in one line:** FRGE is FORGE with the O removed — the frog is the missing
O, and an anvil hides in the frog's forehead.

**Decisions taken (2026-09-06):** golden frog (golden poison dart frog reference,
justifies `#D4AF37` without breaking the locked palette) + negative-space anvil.

**Symmetry rule REMOVED (2026-09-06), and this is the most important lesson here.**
The blanket "perfect vertical symmetry" requirement was inherited from an automotive
brief and was simply wrong for a gaming brand — T1, Fnatic, FaZe, Red Bull, Monster
and Slayer are none of them symmetrical, and that asymmetry is where their energy
comes from. Three separate symmetric anvils were built and all three read as a "T"
or a bone, because the single tapered horn IS the thing that makes an anvil
recognisable; mirror it and you have an I-beam. The rule now is: the FACE is
symmetric (faces should be), the ANVIL is asymmetric. That fixed it immediately.

**Known risk, guarded against in the brief:** a cartoon frog in a gaming context
reads as Pepe the Frog, which carries hate-symbol associations. The brief forbids
humanoid posture, smug expressions, and Pepe-green.

---

## The prompt

```
# ROLE
You are a Senior Brand Identity Designer with 20+ years of experience creating
premium gaming hardware, esports and consumer-technology brands. You are connected
to Figma via MCP and have permission to create vector objects, frames, components,
styles and exports. You are NOT generating an AI illustration. You are creating a
mathematically perfect production-ready vector logo. Everything must be built using
vector paths and boolean operations. Do NOT trace any image. Do NOT use raster
graphics.

---

# PROJECT
Brand Name: FRGE.GG
Industry: Gaming / Esports Software
League of Legends pre-game companion app (desktop + web)

Brand Personality
- Playful
- Confident
- Crafted
- Characterful
- Warm
- Knowledgeable, without being po-faced

This brand does NOT take itself too seriously. It is a tool made by a player, for
players. It should feel like something you would put a sticker of on a laptop.

The logo should feel at home beside brands like:
- Razer
- SteelSeries
- Corsair
- MSI
- HyperX
- Discord
- Twitch
- T1
- Fnatic
- G2 Esports

It sits directly alongside these competitors and must be distinct from them:
- op.gg
- u.gg
- Blitz.gg
- Mobalytics

Avoid looking like:
- Automotive / motorsport
- Crypto / NFT / meme-coin
- Generic "angry animal in a shield" esports crest
- Children's mobile-game mascot
- Corporate SaaS

---

# CRITICAL CONSTRAINT - PEPE DISTANCE
This is a frog mascot in a gaming context. It MUST NOT read as Pepe the Frog,
which carries hate-symbol associations that would be catastrophic for this brand.

Hard rules:
- NOT humanoid. No shoulders, no torso, no arms, no clothing.
- NO smug, smirking, knowing or sardonic expression.
- NO green body with red/pink lips.
- It is an ICON, not a character pulling a face.
- Gold and orange palette, never Pepe-green.
- If at any point it resembles Pepe even slightly, redesign immediately.

The reference point is a heraldic or emblematic frog - closer to a guild crest or
a hardware-brand animal mark (Razer's triple-snake, Twitch's glitch) than to any
cartoon character.

---

# OBJECTIVE
Create the MASTER logo that every future asset derives from. This is the definitive
logo. It must be perfectly symmetrical and must survive being rendered at 32x32
pixels.

---

# CANVAS
Create a frame: 2000 x 2000 px
Background: #1B1B1E
Enable a 20px layout grid.

---

# COLOUR SYSTEM
Charcoal    #1B1B1E   (ground)
Gunmetal    #2A2F38   (surfaces)
Gold        #D4AF37   (mascot / premium accent)
Molten      #F97316   (energy / primary accent)
White       #F5F5F5   (text)

The mascot is GOLD, referencing the golden poison dart frog - a real species that
is genuinely gold. Molten orange is the energy accent. Do not introduce green.

---

# LOGO CONCEPT
The brand name FRGE is the word FORGE with the O removed.

THE FROG IS THE MISSING O.
THE ANVIL IS HIDDEN INSIDE THE FROG.

The primary mark is a frog rendered as a near-perfect circle, sitting in the O
position of the wordmark. FORGE spells F-O-R-G-E, so the O is the SECOND
character and the frog sits between the F and the R:

    F [frog] R G E

This must read simultaneously as FORGE, as FROG, and as FRGE. That triple reading
is the entire idea and must survive every simplification.

Two deliverables:
1. THE ICON - the frog alone, circular, standalone (favicon, tray, app icon)
2. THE LOCKUP - the full FRGE.GG wordmark with the frog as the O

---

# THE FROG (ICON)
Construct the frog mathematically. It must be built from circles and arcs placed
on the grid - compass-and-straightedge construction, NOT freehand drawing.

Requirements:
- Overall silhouette fits a perfect circle
- The FACE is vertically symmetric — eyes, pupils and mouth mirror exactly
- Two eyes as circles breaking the top of the circle silhouette - this is the
  single most recognisable frog cue and must survive at 32px
- Eyes are the ONLY facial feature at small sizes
- A single arc suggests the mouth at larger sizes only
- Pupils must nearly FILL the eye bulge, leaving only a thin gold rim. A small
  dot inside a large gold circle reads as an ear-hole, not an eye - this is the
  single difference between reading as a frog and reading as a bear
- No legs, no feet, no body below the head at icon size
- Negative space between the eyes should suggest an upward curve - quiet warmth,
  never a smirk

Curves are permitted and expected - but every curve must be a true circular arc
with a defined radius on the grid. No arbitrary bezier handles. No hand-drawn
feel. The frog should feel STAMPED or MINTED, like a coin or a guild token, not
illustrated.

---

# THE ANVIL (NEGATIVE SPACE)
An anvil is cut as NEGATIVE SPACE into the frog's face - the flat area below the
two eyes. Charcoal shows through the gold. This is the second reading: FROG on
the surface, FORGE underneath.

CONSTRUCTION - the anvil is ASYMMETRIC, deliberately:
- A tapered HORN on the left, coming to a point at roughly mid-height
- A flat horizontal top face, the widest element
- A squared HEEL on the right, stepping in underneath
- A pinched waist
- A splayed foot, narrower than the top face

DO NOT mirror the horn to make it symmetric. This was tried three times and it
fails every time - a double-horned anvil reads as an I-beam, a "T", a bone or a
bowtie. The single horn is the only cue that identifies an anvil at a glance. The
frog's face carries the symmetry; the anvil carries the asymmetry, which is also
what gives the mark its energy.

The anvil must never touch the outer circle edge or the eye circles - maintain a
minimum gap of one grid unit on all sides. It occupies no more than 30% of the
frog's area. It is a discovery, not the subject: someone should notice the frog
first and the anvil second.

---

# PROGRESSIVE DISCLOSURE (SIZE BEHAVIOUR)
The anvil is the first detail that will destroy legibility when scaled down.
Define three explicit states:

256px and above - FULL
  Frog, eyes, pupils, mouth arc, full anvil in negative space.

64px to 255px - REDUCED
  Frog, eyes, pupils and the full anvil. Only the mouth arc is dropped. The anvil
  does NOT simplify - the horn is what makes it legible, so removing detail from
  it defeats the purpose.

Below 64px (including the 32px tray icon) - SILHOUETTE
  Gold circle, two eye circles breaking the top edge, AND the pupils. Nothing
  else. The pupils are two plain dots and survive 32px perfectly - and without
  them the eye bulges read as EARS, so the mark becomes a bear. Corrected after
  building it: an earlier version of this brief dropped them.
  The anvil is removed COMPLETELY - not shrunk, not faded. A partially rendered
  anvil at 32px reads as dirt on the icon and is an automatic failure.

Build all three as separate components. Do not rely on scaling one artwork.

---

# THE WORDMARK
FRGE.GG

- F, R, G, E as geometric sans letterforms, squared and technical
- Reference face: Russo One (the app's display face)
- Equal stroke widths across all letters
- The frog occupies the O position at equal optical weight to the letters
- ".GG" renders in Molten #F97316, the letters in White #F5F5F5
- Letter-spacing generous enough that the frog does not crowd the R or the G

The wordmark must still read correctly if the frog is removed and replaced with
a plain circle - test this.

---

# VISUAL STYLE
Flat vector.
No bevel. No chrome. No metallic reflections. No 3D. No perspective. No outlines
around the mascot.

Use only a premium linear gradient on the frog:
Top Left     #F0C75A
Middle       #D4AF37
Bottom Right #A8862A

Very subtle. Almost flat.

---

# EFFECTS
Soft shadow
Opacity: 15%
Blur: 18
Offset Y: 6

Glow
Opacity: 12%
Blur: 26
Colour: #F97316

Keep it subtle. The glow references the forge, not neon.

---

# CLEAR SPACE
Define clear space around the logo equal to 25% of the frog's diameter.

---

# VARIANTS
Create as reusable Figma Components:
1.  Primary - gold gradient frog with anvil, full lockup
2.  Icon FULL - gold frog with anvil, 256px+
3.  Icon REDUCED - simplified anvil, 64-255px
4.  Icon SILHOUETTE - eyes only, below 64px
5.  Flat gold - no gradient
6.  Molten orange - single colour #F97316
7.  White - for dark grounds
8.  Charcoal - for light grounds
9.  Monochrome - single colour, no tonal variation
10. Favicon
11. App icon

---

# EXPORTS
These are the app's real asset requirements - match them exactly.

Master Lockup.svg
Master Lockup.pdf
Master Lockup 4096.png
Icon Transparent 4096.png
favicon.svg
favicon 32.png
tray-icon 32.png        <- SILHOUETTE variant, no anvil
AppIcon 1024.png
AppIcon.ico             <- multi-resolution: 16, 32, 48, 256
                           (256 = FULL, 48 = REDUCED, 32/16 = SILHOUETTE)

---

# QUALITY CHECK
Before finishing, verify:
- The face is vertically symmetric; the anvil is deliberately NOT
- Consistent stroke widths
- Pixel-perfect alignment
- Every curve is a true arc with a defined radius
- Clean vector paths, minimal anchor points
- Optimised SVG
- The frog reads as a frog at 32x32 with eyes alone
- The anvil reads as an anvil, NOT a T, an I-beam, a bone or a bowtie
- The anvil is absent entirely below 64px
- Someone notices the frog first and the anvil second
- The lockup reads as FORGE, FROG and FRGE simultaneously
- Zero resemblance to Pepe the Frog
- Suitable for embroidery, sticker die-cut, laser engraving and print
- Works on charcoal, on white, and on a champion splash-art background

If any part looks generic or resembles an existing logo too closely, redesign it
while keeping the same design principles.

The final result should look like the identity of a gaming tool made by someone
who loves the game - precise enough to trust, warm enough to like.
```

---

## The adversarial review block

Send this after the build to force iteration.

```
I am the founder of FRGE.GG. Before I ever see this logo, critique it as if it is
going through an internal review at Pentagram, Landor, Collins, or Wolff Olins.

Score the logo out of 10 in the following categories:
- Balance
- Symmetry (of the face only)
- Memorability
- Negative Space
- Anvil Legibility
- Mascot Charm
- Manufacturability
- Scalability
- 32px Legibility
- Gaming / Esports Brand Fit
- Pepe Distance
- Uniqueness
- Timelessness

For every category scoring under 10/10, explain why, improve the logo, and repeat
the review. Continue iterating until every category is a genuine 10/10.

Pay particular attention to three tensions:
1. Whimsy vs craft - it must feel light-hearted WITHOUT looking amateur. If it
   reads as sloppy or clip-art, that is a failure, not charm.
2. Charm vs scale - if the frog only works large, it has failed. The 32px tray
   silhouette is the real test.
3. Anvil vs frog - the anvil must be discoverable but subordinate. If the mark
   reads as "an anvil" before it reads as "a frog", the hierarchy is inverted and
   must be corrected. If the anvil is invisible even at 4096px, it is not earning
   its place.

Do not settle for "good enough." Treat this as the logo for a gaming brand that
will still be in use 30 years from now.
```
