import { useState } from "react";
import { inGame as T } from "./theme.js";

// The in-game view. Once champ select ends, the app shows ONLY the build that
// went into the client: the item set block by block as the shop shows it, the
// rune page, the skill order and summoners, and why. Draft tools, class tiles
// and alternate builds stay out of sight, so the build on screen can never be
// one you did not import (the user, 2026-10-21). Laid out like the redesign mock
// (.taste-skill/mock/forge.html): on a wide window the item set runs left to
// right in buying order with runes, skills and "why" beneath; docked beside
// League it is the item set beside a side column.
//
// exp is a buildExport() result ({ itemSet, notes }). imported says whether it
// is what was actually sent this game; when false it is the app's current
// build, and the view says so.
export default function InGameView({
  champ, roleName, alt, foe, foeClass, exp, runes, imported, staleFoe,
  itemName, itemSrc, runeSrc, shardSrc, spellSrc, champImg,
  skills, spells, coreNote, width, onShowGuide,
}) {
  const [whyOpen, setWhyOpen] = useState(false);
  const [levelsOpen, setLevelsOpen] = useState(false);
  const mode = width >= 1200 ? "wide" : width > 640 ? "docked" : "narrow";
  const wide = mode === "wide";
  const icon = wide ? 40 : 34;
  const pad = wide ? 20 : 18;
  const blocks = exp?.itemSet?.blocks || [];
  const notes = exp?.notes || {};
  // The game plan's blocks (gamePlan.js via lcuExport): each item is tagged
  // core / boots / lane (answers the opponent) / team (answers their team).
  // An import made before the plan existed has a "Vs <opponent>" block instead.
  const PHASES = new Set(["Lane", "Mid game", "Late game"]);
  const planItems = (notes.plan?.phases || []).flatMap((p) => p.items);
  const answer = (name) => ["lane", "team"].includes(planItems.find((e) => e.name === name)?.tag);
  const vsBlock = blocks.find((b) => /^Vs /.test(b.type));
  const swaps = notes.swaps || [];
  const adds = (vsBlock ? vsBlock.items.map((i) => itemName(i.id)) : planItems.filter((e) => answer(e.name)).map((e) => e.name))
    .filter((n) => n && !swaps.some((s) => s.to === n));
  const conflicts = notes.plan?.conflicts || [];
  const cap1 = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

  const card = { background: T.surface, borderRadius: T.radiusCard, padding: `${pad}px`, minWidth: 0 };
  // Named areas exist only in the wide grid; anywhere else a stray area name
  // would push the card into implicit tracks.
  const area = (name) => (wide ? { gridArea: name } : {});
  const h2 = { margin: 0, fontSize: "16px", lineHeight: "24px", fontWeight: 600, color: T.text };
  const sub = { color: T.muted, fontSize: "13px" };
  const head = { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" };
  const textBtn = { border: 0, background: "none", color: T.text, font: `500 13px ${T.font}`, cursor: "pointer", padding: 0 };

  // ── pieces (plain functions, not components: no remount on re-render) ──────
  const itemIcon = (it, vs, key) => {
    const name = itemName(it.id) || "";
    const src = itemSrc(it.id);
    return (
      <span key={key} title={name} style={{ width: icon, height: icon, borderRadius: T.radiusIcon, position: "relative",
        flex: "none", background: T.raised, outline: vs ? `2px solid ${T.accent}` : "none", outlineOffset: "1px" }}>
        {src && <img src={src} alt={name} draggable={false}
          style={{ width: icon, height: icon, borderRadius: T.radiusIcon, display: "block" }} />}
        {it.count > 1 && (
          <span style={{ position: "absolute", right: -4, bottom: -4, fontSize: "11px", lineHeight: "14px", padding: "0 4px",
            borderRadius: "4px", background: T.ground, color: T.muted, fontVariantNumeric: "tabular-nums" }}>{it.count}</span>
        )}
      </span>
    );
  };

  const blockBody = (b, i) => {
    const vs = /^Vs /.test(b.type);
    const isStart = /^Start/.test(b.type) && i === blocks.findIndex((x) => /^Start/.test(x.type));
    const isPhase = PHASES.has(b.type);
    const isCore = b.type === "Core" || isPhase;
    const title = vs ? `For ${notes.foe || b.type.slice(3)}` : b.type;
    // A swap is noted under the block that holds the item it brings in (the
    // old Core block held the item it replaced).
    const coreSwaps = isCore ? swaps.filter((s) => b.items.some((it) => itemName(it.id) === (isPhase ? s.to : s.from))) : [];
    return (
      <>
        <h3 style={{ margin: 0, fontSize: "14px", lineHeight: "20px", fontWeight: 600, color: vs ? T.accent : T.text }}>{title}</h3>
        {isCore ? (
          <div style={{ display: "grid", gridTemplateColumns: mode === "docked" ? "repeat(2, minmax(0, 1fr))" : "minmax(0, 1fr)",
            gap: "8px 12px", marginTop: wide ? "8px" : "6px" }}>
            {b.items.map((it, k) => {
              const hit = isPhase && answer(itemName(it.id));
              return (
                <div key={k} style={{ display: "flex", gap: "10px", alignItems: "center", minWidth: 0 }}>
                  {itemIcon(it, hit)}
                  <span style={{ minWidth: 0, lineHeight: "18px", color: hit ? T.accent : T.text }}>{itemName(it.id)}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: wide ? "8px" : "6px" }}>
            {b.items.map((it, k) => itemIcon(it, vs, k))}
          </div>
        )}
        {isStart && notes.start && (
          <p style={{ margin: "6px 0 0", fontSize: "13px", color: T.muted }}>{cap1(notes.start)}.</p>
        )}
        {coreSwaps.map((s) => (
          <p key={s.to} style={{ margin: "6px 0 0", fontSize: "13px", color: T.muted }}>
            <b style={{ color: T.accent, fontWeight: 600 }}>{s.to}</b> instead of {s.from}
          </p>
        ))}
      </>
    );
  };

  // The item set as a timeline: left to right on a wide window, top to bottom docked.
  const spine = () => wide ? (
    <ol style={{ listStyle: "none", margin: "16px 0 0", padding: 0, display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))", gap: "20px" }}>
      {blocks.map((b, i) => {
        const vs = /^Vs /.test(b.type);
        return (
          <li key={i} style={{ position: "relative", paddingTop: "24px", minWidth: 0 }}>
            <span style={{ position: "absolute", left: 0, top: 0, width: 12, height: 12, borderRadius: "50%", boxSizing: "border-box",
              background: vs ? T.accent : T.ground, border: `2px solid ${vs ? T.accent : T.faint}` }} />
            {i < blocks.length - 1 && <span style={{ position: "absolute", left: 16, right: -16, top: 5, height: 2, background: T.rule }} />}
            {blockBody(b, i)}
          </li>
        );
      })}
    </ol>
  ) : (
    <ol style={{ listStyle: "none", margin: "14px 0 0", padding: 0 }}>
      {blocks.map((b, i) => {
        const vs = /^Vs /.test(b.type);
        return (
          <li key={i} style={{ position: "relative", padding: "0 0 10px 26px" }}>
            <span style={{ position: "absolute", left: 0, top: 4, width: 12, height: 12, borderRadius: "50%", boxSizing: "border-box",
              background: vs ? T.accent : T.ground, border: `2px solid ${vs ? T.accent : T.faint}` }} />
            {i < blocks.length - 1 && <span style={{ position: "absolute", left: 5, top: 20, bottom: 4, width: 2, background: T.rule }} />}
            {blockBody(b, i)}
          </li>
        );
      })}
    </ol>
  );

  const setCard = () => (
    <section style={{ ...card, ...area("set") }} aria-label="Item set">
      <div style={head}>
        <h2 style={h2}>Item set</h2>
        <span style={sub}>{imported ? "As imported" : "Not imported"}</span>
      </div>
      {spine()}
    </section>
  );

  const runeImgTag = (name, size, k = name) => {
    const src = name ? runeSrc(name) : null;
    return src
      ? <img key={k} src={src} alt={name} title={name} draggable={false}
          style={{ width: size, height: size, borderRadius: "50%", background: T.raised, display: "block" }} />
      : <span key={k} style={{ width: size, height: size, borderRadius: "50%", background: T.raised, display: "block" }} />;
  };
  const runesCard = () => runes ? (
    <section style={{ ...card, ...area("runes") }} aria-label="Rune page">
      <div style={head}><h2 style={h2}>Rune page</h2></div>
      <div style={{ display: "grid", gridTemplateColumns: "52px 1fr", gap: "6px 14px", marginTop: "12px", alignItems: "center" }}>
        {runeImgTag(runes.keystone, 52)}
        <div style={{ fontWeight: 600, color: T.text }}>
          {runes.keystone}
          <small style={{ display: "block", color: T.muted, fontWeight: 400, fontSize: "13px" }}>{runes.primary} keystone</small>
        </div>
        <div style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "6px" }}>
          {[[runes.primary, runes.primaryRunes], [runes.secondary, runes.secondaryRunes]].map(([tree, list]) => (
            <div key={tree}>
              <div style={{ color: T.faint, fontSize: "12px" }}>{tree}</div>
              <div style={{ display: "flex", gap: "8px", marginTop: "2px" }}>{(list || []).map((r, k) => runeImgTag(r, 32, `${tree}-${k}`))}</div>
            </div>
          ))}
        </div>
        <div style={{ gridColumn: "1 / -1", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap",
          color: T.muted, fontSize: "13px", marginTop: "2px" }}>
          {(runes.shards || []).filter(Boolean).map((s, k) => (
            <span key={k} style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
              <img src={shardSrc(s)} alt="" draggable={false} style={{ width: 18, height: 18, display: "block" }} />{s}
            </span>
          ))}
        </div>
      </div>
    </section>
  ) : null;

  const seq = skills?.seq || null;
  const rLevels = seq ? seq.map((k, i) => (k === "R" ? i + 1 : null)).filter(Boolean).join(", ") : "";
  const showLevels = wide || levelsOpen;
  const key = (k) => (
    <span key={k} style={{ width: 32, height: 32, borderRadius: "8px", background: T.raised, display: "grid", placeItems: "center" }}>{k}</span>
  );
  const skillsCard = () => (
    <section style={{ ...card, ...area("skills") }} aria-label="Skills and spells">
      <div style={head}><h2 style={h2}>Skills and spells</h2><span style={sub}>Max order</span></div>
      {skills?.max && (
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "12px", fontWeight: 600, color: T.text }}>
          {skills.max.flatMap((k, i) => (i ? [<span key={`a${i}`}>›</span>, key(k)] : [key(k)]))}
          {rLevels && !skills.noUlt && <span style={{ ...sub, marginLeft: "6px" }}>R at {rLevels}</span>}
        </div>
      )}
      {seq && !wide && (
        <p style={{ margin: "10px 0 0", color: T.muted, display: "flex", gap: "10px", alignItems: "baseline", flexWrap: "wrap" }}>
          Levels 1 to 3: <b style={{ color: T.text, fontWeight: 600 }}>{seq.slice(0, 3).join(", ")}</b>
          <button style={{ ...textBtn, marginLeft: "auto" }} onClick={() => setLevelsOpen((v) => !v)}>
            {levelsOpen ? "Hide levels" : "Show all 18 levels"}
          </button>
        </p>
      )}
      {seq && showLevels && (
        <div style={{ display: "grid", gridTemplateColumns: "20px repeat(18, 1fr)", gap: "2px", marginTop: wide ? "12px" : "10px",
          fontSize: "11px", color: T.faint }}>
          {["Q", "W", "E", "R"].map((k) => [
            <span key={k}>{k}</span>,
            ...Array.from({ length: 18 }, (_, i) => (
              <i key={`${k}${i}`} title={`Level ${i + 1}`} style={{ height: 14, borderRadius: "3px",
                background: seq[i] === k ? (k === "R" ? T.text : T.muted) : T.raised }} />
            )),
          ])}
        </div>
      )}
      {spells?.length > 0 && (
        <div style={{ display: "flex", gap: "12px", marginTop: "12px", color: T.muted }}>
          {spells.map((s) => (
            <span key={s} style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              {spellSrc(s) && <img src={spellSrc(s)} alt="" draggable={false} style={{ width: 24, height: 24, borderRadius: "6px", display: "block" }} />}
              {s}
            </span>
          ))}
        </div>
      )}
    </section>
  );

  const whyCard = () => coreNote ? (
    <section style={{ ...card, ...area("why") }} aria-label="Why this build">
      <div style={head}>
        <h2 style={h2}>Why this build</h2>
        <button style={textBtn} onClick={() => setWhyOpen((v) => !v)}>{whyOpen ? "Show less" : "Read all"}</button>
      </div>
      <p style={{ margin: "8px 0 0", color: T.muted, lineHeight: "21px",
        ...(whyOpen ? {} : { display: "-webkit-box", WebkitLineClamp: wide ? 8 : 6, WebkitBoxOrient: "vertical", overflow: "hidden" }) }}>
        {coreNote}
      </p>
    </section>
  ) : null;

  // ── finding: the opponent's traits and what they change ─────────────────────
  const traits = (notes.traits || []).map((t) => t.toLowerCase());
  const finding = notes.foe && traits.length ? (
    <p style={{ margin: "12px 0 0", fontSize: "15px", lineHeight: "22px", color: T.text }}>
      {notes.foe}: {traits.length > 1 ? `${traits.slice(0, -1).join(", ")} and ${traits.at(-1)}` : traits[0]}.{" "}
      {/* The plan's blocks already accent each answer and note each swap, so
          this sentence only lists them for an import with the older Vs block. */}
      {vsBlock && swaps.map((s, k) => (
        <span key={s.to}>{k ? "; " : ""}<b style={{ color: T.accent, fontWeight: 600 }}>{s.to}</b> replaces {s.from}</span>
      ))}
      {vsBlock && adds.length > 0 && (
        <>
          {swaps.length ? ", and " : ""}
          {adds.map((a, k) => <span key={a}>{k ? " and " : ""}<b style={{ color: T.accent, fontWeight: 600 }}>{a}</b></span>)}
          {adds.length > 1 ? " are" : " is"} added.
        </>
      )}
      {vsBlock && !adds.length && swaps.length > 0 && "."}
      {conflicts.map((c) => <span key={c} style={{ display: "block", marginTop: "4px", color: T.muted }}>{c}.</span>)}
    </p>
  ) : null;

  const warn = !imported
    ? "Not imported this game: this build is not in your client."
    : staleFoe
    ? `Imported before your opponent was known: not tuned for ${staleFoe}.`
    : null;


  return (
    <div style={{ fontFamily: T.font, fontSize: "14px", lineHeight: "20px", color: T.text, WebkitFontSmoothing: "antialiased" }}>
      <header style={{ height: 48, display: "flex", alignItems: "center", gap: "16px", maxWidth: 1920, margin: "0 auto",
        padding: wide ? "0 32px" : "0 16px", boxSizing: "border-box" }}>
        <span style={{ fontFamily: T.display, fontWeight: 800, fontSize: "18px", color: T.text }}>FRGE<span style={{ color: T.gold }}>.GG</span></span>
        <span style={{ display: "flex", alignItems: "center", gap: "8px", color: T.muted, fontSize: "13px" }}>
          <i style={{ width: 8, height: 8, borderRadius: "50%", background: T.live }} />In game
        </span>
        <button onClick={onShowGuide} title="Show the full guide"
          style={{ marginLeft: "auto", border: 0, background: T.surface, color: T.text, font: `500 13px ${T.font}`,
            padding: "8px 16px", borderRadius: "999px", cursor: "pointer" }}>
          Full guide
        </button>
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
          {foe && (
            <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: 40, padding: "0 14px 0 6px",
              borderRadius: "999px", background: T.surface, fontWeight: 500 }}>
              <img src={champImg(foe.dd)} alt="" draggable={false} style={{ width: 28, height: 28, borderRadius: "50%", display: "block" }} />
              <span>vs {foe.display}</span>
              {foeClass && <span style={{ color: T.muted }}>{cap1(foeClass.toLowerCase().replace(/_/g, " "))}</span>}
            </span>
          )}
        </div>
        {finding}
        {warn && (
          <p style={{ margin: "10px 0 0", fontSize: "13px", color: T.accent }}>{warn}</p>
        )}

        {mode === "wide" ? (
          <div style={{ display: "grid", gap: "24px", marginTop: "16px", alignItems: "start",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gridTemplateAreas: "'set set set' 'runes skills why'" }}>
            {setCard()}{runesCard()}{skillsCard()}{whyCard()}
          </div>
        ) : (
          <div style={{ display: "grid", gap: "24px", marginTop: "16px", alignItems: "start",
            gridTemplateColumns: mode === "docked" ? "minmax(0, 1.25fr) minmax(0, 1fr)" : "minmax(0, 1fr)" }}>
            {setCard()}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", minWidth: 0 }}>
              {runesCard()}{skillsCard()}{whyCard()}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
