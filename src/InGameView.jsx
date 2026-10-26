import { useState } from "react";
import { inGame as T } from "./theme.js";
import { ItemSetCard, SituationalCard, SkillsCard, RunesCard, Finding } from "./ForgeCards.jsx";
import { LANE, layoutOf } from "./forgeStyle.js";

// The in-game view. Once champ select ends, the app shows ONLY the build that
// went into the client: the item set block by block as the shop shows it, the
// rune page, the skill order and summoners, and the situational items with when
// to buy each. Draft tools and alternate builds stay out of sight, so the build
// on screen can never be one you did not import (the user, 2026-10-21). It is
// built from the same pieces as the build page (ForgeCards.jsx, the approved
// 2026-10-22 redesign): on a wide window the item set runs left to right in
// buying order with runes, skills and situational beneath; docked beside League
// it is the item set beside a side column.
//
// exp is a buildExport() result ({ itemSet, notes }). imported says whether it
// is what was actually sent this game; when false it is the app's current
// build, and the view says so. colours: champColours() of the champion in game.
//
// The lane opponent can be changed here too (the user, 2026-10-26: the guess is
// wrong often enough that it must be correctable mid-game, without leaving this
// view). enemies: the enemy team's CHAMPS entries; onFoe(dd) sets the opponent,
// onFoe(null) goes back to the guess; foeManual says it was set by hand. The
// build stays the imported one: a changed opponent only adds the warning, since
// nothing can be imported into a game already running.
export default function InGameView({
  champ, roleName, alt, foe, foeClass, exp, runes, imported, staleFoe, importedFoe,
  enemies = [], foeManual = false, onFoe,
  itemName, runeSrc, spellSrc, champImg, colours,
  skills, spells, width, onShowGuide, feedback,
}) {
  const [foeOpen, setFoeOpen] = useState(false);
  const layout = layoutOf(width);
  const wide = layout === "wide";
  const blocks = exp?.itemSet?.blocks || [];
  const notes = exp?.notes || {};
  const sitBlock = blocks.find((b) => b.type === "Situational");
  const cap1 = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
  const area = (a) => (wide ? { gridArea: a } : undefined);

  const setCard = (
    <ItemSetCard blocks={blocks} notes={notes} itemName={itemName} colours={colours} layout={layout}
      sub={imported ? "As imported" : "Not imported"} style={area("set")} />
  );
  const runesCard = <RunesCard runes={runes} runeSrc={runeSrc} layout={layout} style={area("runes")} />;
  const skillsCard = (
    <SkillsCard skills={skills} spells={spells} spellSrc={spellSrc} colours={colours} layout={layout} style={area("skills")} />
  );
  const sitCard = <SituationalCard block={sitBlock} itemName={itemName} layout={layout} style={area("sit")} />;

  const warn = !imported
    ? "Not imported this game: this build is not in your client."
    : staleFoe
    ? importedFoe
      ? `Imported for ${importedFoe}: not tuned for ${staleFoe}.`
      : `Imported before your opponent was known: not tuned for ${staleFoe}.`
    : null;
  const canPick = !!onFoe && enemies.length > 0;
  const chip = (on) => ({ display: "inline-flex", alignItems: "center", gap: "8px", height: 36, padding: "0 12px 0 4px",
    borderRadius: "999px", border: 0, cursor: on ? "default" : "pointer", whiteSpace: "nowrap",
    background: on ? colours?.active || T.raised : T.surface, color: T.text, font: `500 13px ${T.font}` });
  const pickFoe = (dd) => { onFoe(dd); setFoeOpen(false); };

  return (
    <div style={{ fontFamily: T.font, fontSize: "14px", lineHeight: "20px", color: T.text, WebkitFontSmoothing: "antialiased" }}>
      <header style={{ height: 48, display: "flex", alignItems: "center", gap: "16px", maxWidth: 1920, margin: "0 auto",
        padding: wide ? "0 32px" : "0 16px", boxSizing: "border-box" }}>
        <span style={{ fontFamily: T.display, fontWeight: 800, fontSize: "18px", color: T.text }}>FRGE<span style={{ color: T.gold }}>.GG</span></span>
        <span style={{ display: "flex", alignItems: "center", gap: "8px", color: T.muted, fontSize: "13px" }}>
          <i style={{ width: 8, height: 8, borderRadius: "50%", background: T.live }} />In game
        </span>
        {/* Feedback sits here, not in a pill floating bottom-left: docked
            beside League the pill covered the item set's last row. */}
        <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: "16px" }}>
          {feedback}
          <button type="button" onClick={onShowGuide} title="Show the full guide"
            style={{ border: 0, background: T.surface, color: T.text, font: `500 13px ${T.font}`,
              padding: "8px 16px", borderRadius: "999px", cursor: "pointer" }}>
            Full guide
          </button>
        </span>
      </header>

      <main style={{ maxWidth: 1920, margin: "0 auto", padding: wide ? "12px 32px 24px" : "12px 16px 16px", boxSizing: "border-box" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <img src={champImg(champ.dd)} alt="" draggable={false}
            style={{ width: 52, height: 52, borderRadius: "12px", objectFit: "cover", display: "block" }} />
          <div>
            <h1 style={{ margin: 0, fontFamily: T.display, fontSize: "28px", lineHeight: "32px", letterSpacing: "-.02em", fontWeight: 800 }}>
              {champ.display}
            </h1>
            <p style={{ margin: "2px 0 0", color: T.muted }}>{roleName}{alt ? ` · ${alt.label}` : ""}</p>
          </div>
          {(foe || canPick) && (
            <button type="button" disabled={!canPick} aria-expanded={canPick ? foeOpen : undefined}
              onClick={() => setFoeOpen((v) => !v)} title={canPick ? "Change your lane opponent" : undefined}
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: 40, padding: foe ? "0 14px 0 6px" : "0 14px",
                borderRadius: "999px", border: 0, background: T.surface, color: T.text, font: `500 14px ${T.font}`,
                cursor: canPick ? "pointer" : "default" }}>
              {foe && <img src={champImg(foe.dd)} alt="" draggable={false} style={{ width: 28, height: 28, borderRadius: "50%", display: "block" }} />}
              <span>{foe ? `vs ${foe.display}` : "Choose opponent"}</span>
              {foe && foeClass && <span style={{ color: T.muted }}>{cap1(foeClass.toLowerCase().replace(/_/g, " "))}</span>}
              {canPick && <span aria-hidden="true" style={{ color: T.muted }}>{foeOpen ? "▴" : "▾"}</span>}
            </button>
          )}
        </div>
        {canPick && foeOpen && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
            {enemies.map((e) => {
              const on = foe?.dd === e.dd;
              return (
                <button key={e.dd} type="button" aria-pressed={on} onClick={() => { if (!on) pickFoe(e.dd); }}
                  title={on ? "Your lane opponent" : `Set ${e.display} as your lane opponent`} style={chip(on)}>
                  <img src={champImg(e.dd)} alt="" draggable={false} style={{ width: 28, height: 28, borderRadius: "50%", display: "block" }} />
                  {e.display}
                </button>
              );
            })}
            {foeManual && (
              <button type="button" onClick={() => pickFoe(null)} style={chip(false)}>
                <span style={{ paddingLeft: 8 }}>Back to auto-detect</span>
              </button>
            )}
          </div>
        )}
        <Finding notes={notes} />
        {warn && (
          <p style={{ margin: "10px 0 0", fontSize: "13px", color: LANE }}>{warn}</p>
        )}

        {wide ? (
          <div style={{ display: "grid", gap: "24px", marginTop: "16px", alignItems: "start",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gridTemplateAreas: "'set set set' 'runes skills sit'" }}>
            {setCard}{runesCard}{skillsCard}{sitCard}
          </div>
        ) : (
          <div style={{ display: "grid", gap: "16px", marginTop: "16px", alignItems: "start",
            gridTemplateColumns: layout === "docked" ? "minmax(0, 1.25fr) minmax(0, 1fr)" : "minmax(0, 1fr)" }}>
            {setCard}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", minWidth: 0 }}>
              {runesCard}{skillsCard}{sitCard}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
