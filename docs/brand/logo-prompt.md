# FRGE.GG — Master Logo Prompt

Brand asset. Version-controlled so the brief lives with the project rather than in
chat history. Palette here MUST stay in sync with the locked brand palette in
`CLAUDE.md` and `src/index.css`.

**Concept in one line:** FRGE is FORGE with the O removed — the frog is the missing
O, and an anvil hides in the frog's forehead.

**Decisions taken (2026-09-06):** golden frog (golden poison dart frog reference,
justifies `#D4AF37` without breaking the locked palette) + negative-space anvil.

**Known construction problem, already solved in the brief:** a conventional anvil
has a horn on one side and a heel on the other, so it is NOT vertically symmetrical
and collides with the symmetry rule. Dropping the horn entirely leaves an hourglass.
The brief specifies a *double-horned* anvil instead — symmetric, still legible.

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
position of the wordmark:

    F R [frog] G E

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
- Perfect vertical symmetry
- Two eyes as circles breaking the top of the circle silhouette - this is the
  single most recognisable frog cue and must survive at 32px
- Eyes are the ONLY facial feature at small sizes
- A single arc suggests the mouth at larger sizes only
- No pupils rendered as separate shapes below 64px
- No legs, no feet, no body below the head at icon size
- Negative space between the eyes should suggest an upward curve - quiet warmth,
  never a smirk

Curves are permitted and expected - but every curve must be a true circular arc
with a defined radius on the grid. No arbitrary bezier handles. No hand-drawn
feel. The frog should feel STAMPED or MINTED, like a coin or a guild token, not
illustrated.

---

# THE ANVIL (NEGATIVE SPACE)
An anvil is cut as NEGATIVE SPACE into the frog's forehead - the flat area
between and below the two eyes. Charcoal shows through the gold. This is the
second reading: FROG on the surface, FORGE underneath.

CONSTRUCTION - symmetry is mandatory:
A conventional anvil has a horn on one side and a heel on the other and is
therefore NOT vertically symmetrical. Do not use that silhouette. Instead build a
DOUBLE-HORNED anvil:
- Flat horizontal top face, the widest element
- A short tapered horn on BOTH sides, mirrored exactly
- Narrow waist
- Splayed base, narrower than the top face

The twin horns should nest into the valley formed between the two eyes.

FAILURE MODES to design against:
- If the horns are too short it reads as an HOURGLASS - lengthen them.
- If the waist is too narrow it reads as a BOWTIE - thicken it.
- If the base is wider than the top face it reads as a PLINTH - invert the ratio.
- The anvil must never touch the outer circle edge or the eye circles. Maintain
  a minimum gap equal to one grid unit on all sides.

The anvil occupies no more than 30% of the frog's total area. It is a discovery,
not the subject. Someone should notice the frog first and the anvil second.

---

# PROGRESSIVE DISCLOSURE (SIZE BEHAVIOUR)
The anvil is the first detail that will destroy legibility when scaled down.
Define three explicit states:

256px and above - FULL
  Frog, eyes, pupils, mouth arc, full anvil in negative space.

64px to 255px - REDUCED
  Frog, eyes, pupils. The anvil simplifies to its flat top face and waist only;
  the horns are dropped.

Below 64px (including the 32px tray icon) - SILHOUETTE
  Gold circle with two eye circles breaking the top edge. NOTHING ELSE.
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
- Perfect vertical symmetry, including the anvil
- Consistent stroke widths
- Pixel-perfect alignment
- Every curve is a true arc with a defined radius
- Clean vector paths, minimal anchor points
- Optimised SVG
- The frog reads as a frog at 32x32 with eyes alone
- The anvil reads as an anvil, NOT an hourglass, bowtie or plinth
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
- Symmetry
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
