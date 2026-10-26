import { useState } from "react";
import { inGame as T } from "./theme.js";
import { itemWhen } from "./data/itemWhen.js";
import { LANE, TEAM, card, h2, sub, head, textBtn } from "./forgeStyle.js";

// ─────────────────────────────────────────────────────────────────────────────
//  ForgeCards — the pieces of the redesigned build page (the approved mock,
//  .taste-skill/mock/forge.html, 2026-10-22), shared by the build page in
//  App.jsx and the in-game view, so the two can never drift apart. Tokens and
//  the colour maths (option C) live in forgeStyle.js.
//
//  Module-level components (stable identities), so they never remount on the
//  1.5s champ-select poll the way a component defined inside App would.
// ─────────────────────────────────────────────────────────────────────────────

const PHASES = new Set(["Lane", "Mid game", "Late game"]);
const cap1 = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
const listOf = (xs) => (xs.length > 1 ? [...xs.slice(0, -1).flatMap((x, i) => (i ? [", ", x] : [x])), " and ", xs.at(-1)] : xs);

// ── enemy chip ───────────────────────────────────────────────────────────────
// One enemy champion as a pill that sets the lane opponent: the Enemy team
// panel on the build page and the in-game view's picker. face is the portrait
// (the caller's, so each keeps its own image fallback); rest is the background
// when it is not the opponent, since the two sit on different surfaces.
export function EnemyChip({ name, face, on, onPick, colours, rest = T.raised }) {
  return (
    <button type="button" aria-pressed={!!on} onClick={() => { if (!on) onPick(); }}
      title={on ? "Your lane opponent" : `Set ${name} as your lane opponent`}
      style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 12px 4px 4px",
        borderRadius: "999px", border: 0, cursor: on ? "default" : "pointer", whiteSpace: "nowrap",
        background: on ? colours?.active || T.raised : rest, color: T.text, font: `500 13px ${T.font}` }}>
      {face}
      {name}
    </button>
  );
}

// ── segmented control ────────────────────────────────────────────────────────
export function Seg({ items, value, onPick, label, colours, disabled = false, title }) {
  return (
    <div role="group" aria-label={label} title={title}
      style={{ display: "inline-flex", background: T.surface, borderRadius: "999px", padding: "3px", flex: "0 1 auto",
        minWidth: 0, maxWidth: "100%", overflowX: "auto", scrollbarWidth: "none", opacity: disabled ? 0.55 : 1 }}>
      {items.map((it) => {
        const on = it.key === value;
        return (
          <button key={it.key} type="button" aria-pressed={on} disabled={disabled}
            onClick={() => { if (!on) onPick(it.key); }} title={it.title}
            style={{ border: 0, background: on ? colours.active : "transparent", color: on ? T.text : T.muted,
              font: `500 13px/20px ${T.font}`, padding: "6px 14px", borderRadius: "999px", whiteSpace: "nowrap",
              cursor: disabled ? "not-allowed" : on ? "default" : "pointer",
              transition: "background-color .15s ease, color .15s ease" }}>
            {it.label}
          </button>
        );
      })}
    </div>
  );
}

// ── one item icon ────────────────────────────────────────────────────────────
function ItemIcon({ id, name, size, tag, count, hover }) {
  const [bad, setBad] = useState(false);
  const ring = tag === "lane" ? LANE : tag === "team" ? TEAM : null;
  const src = id ? `/ddragon/img/item/${id}.png` : null;
  return (
    <span title={hover ? undefined : name} {...(hover ? hover(name) : {})}
      style={{ width: size, height: size, borderRadius: T.radiusIcon, position: "relative", flex: "none",
        background: !src || bad ? T.raised : "transparent",   // a placeholder only when the art is missing
        outline: ring ? `2px solid ${ring}` : "none", outlineOffset: "1px", display: "block" }}>
      {src && !bad && (
        <img src={src} alt={name || ""} draggable={false} onError={() => setBad(true)}
          style={{ width: size, height: size, borderRadius: T.radiusIcon, display: "block" }} />
      )}
      {count > 1 && (
        <span style={{ position: "absolute", right: -4, bottom: -4, fontSize: "11px", lineHeight: "14px", padding: "0 4px",
          borderRadius: "4px", background: T.ground, color: T.muted, fontVariantNumeric: "tabular-nums" }}>{count}</span>
      )}
    </span>
  );
}

// tags from the game plan: lane / team answers, by item name
const tagsFrom = (notes) => {
  const m = new Map();
  for (const p of notes?.plan?.phases || []) for (const e of p.items) m.set(String(e.name).toLowerCase(), e.tag);
  return (name) => { const t = m.get(String(name || "").toLowerCase()); return t === "lane" || t === "team" ? t : null; };
};

// ── the item set, as the client receives it ──────────────────────────────────
// Every block in buying order except Situational (it has its own card). Wide:
// a left-to-right timeline; docked: the same timeline top to bottom. The swaps
// are stated once, in the finding above; never again under the blocks.
export function ItemSetCard({ blocks, notes, itemName, colours, layout, sub: subText, itemHover, style }) {
  const wide = layout === "wide";
  const size = wide ? 40 : 34;
  const pad = wide ? 20 : 18;
  const tagOf = tagsFrom(notes);
  const shown = (blocks || []).filter((b) => b.type !== "Situational");
  const firstStart = shown.findIndex((b) => /^Start/.test(b.type));
  const tags = new Set(shown.flatMap((b) => b.items.map((it) => tagOf(itemName(it.id)))).filter(Boolean));
  const foe = notes?.foe;

  const body = (b, i) => {
    const vs = /^Vs /.test(b.type);                    // an import made before the game plan existed
    const named = PHASES.has(b.type) || b.type === "Core";
    return (
      <>
        <h3 style={{ margin: 0, fontSize: "14px", lineHeight: "20px", fontWeight: 600, color: T.text }}>{b.type}</h3>
        {named ? (
          <div style={{ display: "grid", gap: "8px 12px", marginTop: wide ? "8px" : "6px",
            gridTemplateColumns: wide ? "minmax(0, 1fr)" : "repeat(2, minmax(0, 1fr))" }}>
            {b.items.map((it, k) => {
              const name = itemName(it.id) || "";
              const t = tagOf(name);
              return (
                <div key={k} style={{ display: "flex", gap: "10px", alignItems: "center", minWidth: 0 }}>
                  <ItemIcon id={it.id} name={name} size={size} tag={t} count={it.count} hover={itemHover} />
                  <span style={{ minWidth: 0, lineHeight: "18px", color: t === "lane" ? LANE : t === "team" ? TEAM : T.text }}>{name}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: wide ? "8px" : "6px" }}>
            {b.items.map((it, k) => {
              const name = itemName(it.id) || "";
              return <ItemIcon key={k} id={it.id} name={name} size={size} tag={vs ? "lane" : tagOf(name)} count={it.count} hover={itemHover} />;
            })}
          </div>
        )}
        {i === firstStart && notes?.start && (
          <p style={{ margin: "6px 0 0", fontSize: "13px", color: T.muted }}>{cap1(notes.start)}.</p>
        )}
      </>
    );
  };
  const dot = (b, extra) => {
    const filled = PHASES.has(b.type) || b.type === "Core";
    return <span aria-hidden="true" style={{ position: "absolute", width: 12, height: 12, borderRadius: "50%", boxSizing: "border-box",
      background: filled ? colours.tint : T.ground, border: `2px solid ${colours.tint}`, ...extra }} />;
  };

  return (
    <section aria-labelledby="set-h" style={{ ...card(pad), ...style }}>
      <div style={head}>
        <h2 id="set-h" style={h2}>Item set</h2>
        {tags.size > 0 ? (
          <span style={{ ...sub, display: "inline-flex", gap: "14px", alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }}>
            {tags.has("lane") && <span><i style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: LANE, marginRight: 6 }} />{foe ? `vs ${foe}` : "vs your lane"}</span>}
            {tags.has("team") && <span><i style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: TEAM, marginRight: 6 }} />vs their team</span>}
          </span>
        ) : subText ? <span style={sub}>{subText}</span> : null}
      </div>
      {wide ? (
        <ol style={{ listStyle: "none", margin: "16px 0 0", padding: 0, display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))", gap: "20px" }}>
          {shown.map((b, i) => (
            <li key={`${b.type}-${i}`} style={{ position: "relative", paddingTop: "24px", minWidth: 0 }}>
              {dot(b, { left: 0, top: 0 })}
              {i < shown.length - 1 && <span aria-hidden="true" style={{ position: "absolute", left: 16, right: -16, top: 5, height: 2, background: T.rule }} />}
              {body(b, i)}
            </li>
          ))}
        </ol>
      ) : (
        <ol style={{ listStyle: "none", margin: "14px 0 0", padding: 0 }}>
          {shown.map((b, i) => (
            <li key={`${b.type}-${i}`} style={{ position: "relative", padding: i < shown.length - 1 ? "0 0 8px 26px" : "0 0 0 26px" }}>
              {dot(b, { left: 0, top: 4 })}
              {i < shown.length - 1 && <span aria-hidden="true" style={{ position: "absolute", left: 5, top: 20, bottom: 4, width: 2, background: T.rule }} />}
              {body(b, i)}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

// ── situational: each item once, with when to buy it ────────────────────────
export function SituationalCard({ block, itemName, layout, itemHover, style }) {
  const items = block?.items || [];
  if (!items.length) return null;
  const wide = layout === "wide";
  const size = wide ? 34 : 28;
  return (
    <section aria-labelledby="sit-h" style={{ ...card(wide ? 20 : 18), ...style }}>
      <div style={head}><h2 id="sit-h" style={h2}>Situational</h2><span style={sub}>In your item set</span></div>
      <ul style={{ listStyle: "none", margin: "12px 0 0", padding: 0, display: "grid",
        gridTemplateColumns: wide ? "repeat(auto-fill, minmax(180px, 1fr))" : "repeat(2, minmax(0, 1fr))",
        gap: wide ? "10px 16px" : "10px 12px" }}>
        {items.map((it, k) => {
          const name = itemName(it.id) || "";
          const when = itemWhen(name);
          return (
            <li key={k} style={{ display: "flex", gap: "10px", alignItems: "center", minWidth: 0 }}>
              <ItemIcon id={it.id} name={name} size={size} count={it.count} hover={itemHover} />
              <div style={{ minWidth: 0 }}>
                <b style={{ display: "block", fontWeight: 600, color: T.text, fontSize: wide ? "14px" : "13px", lineHeight: wide ? "18px" : "17px" }}>{name}</b>
                {when && <span style={{ display: "block", color: T.muted, fontSize: wide ? "13px" : "12px", lineHeight: wide ? "18px" : "16px" }}>{when}</span>}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// ── skills and spells ────────────────────────────────────────────────────────
// Max order, the R levels, the 18-level grid (wide; docked it sits behind a
// tap) and the summoner spells.
export function SkillsCard({ skills, spells, spellSrc, colours, layout, keyHover, style }) {
  const [open, setOpen] = useState(false);
  const wide = layout === "wide";
  const seq = skills?.seq || null;
  const rLevels = seq && !skills?.noUlt ? seq.map((k, i) => (k === "R" ? i + 1 : null)).filter(Boolean).join(", ") : "";
  const showLevels = wide || open;
  const key = (k) => (
    <span key={k} {...(keyHover ? keyHover(k) : {})}
      style={{ width: 32, height: 32, borderRadius: "8px", background: T.raised, display: "grid", placeItems: "center", color: T.text }}>{k}</span>
  );
  return (
    <section aria-labelledby="skill-h" style={{ ...card(wide ? 20 : 18), ...style }}>
      <div style={head}><h2 id="skill-h" style={h2}>Skills and spells</h2>{skills?.max && <span style={sub}>Max order</span>}</div>
      {skills?.max && (
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "12px", fontWeight: 600, color: T.text, flexWrap: "wrap" }}>
          {skills.max.flatMap((k, i) => (i ? [<span key={`a${i}`} aria-hidden="true">›</span>, key(k)] : [key(k)]))}
          {rLevels && <span style={{ ...sub, fontWeight: 400, marginLeft: "6px" }}>R at {rLevels}</span>}
        </div>
      )}
      {seq && !wide && (
        <p style={{ margin: "10px 0 0", color: T.muted, display: "flex", gap: "10px", alignItems: "baseline", flexWrap: "wrap" }}>
          Levels 1 to 3: <b style={{ color: T.text, fontWeight: 600 }}>{seq.slice(0, 3).join(", ")}</b>
          <button type="button" style={{ ...textBtn, marginLeft: "auto" }} onClick={() => setOpen((v) => !v)} aria-expanded={open}>
            {open ? "Hide levels" : "Show all 18 levels"}
          </button>
        </p>
      )}
      {seq && showLevels && (
        <div style={{ display: "grid", gridTemplateColumns: "20px repeat(18, minmax(0, 1fr))", gap: "2px", marginTop: wide ? "12px" : "10px",
          fontSize: "11px", lineHeight: "14px", color: T.faint }}>
          {["Q", "W", "E", "R"].map((k) => [
            <span key={k}>{k}</span>,
            ...Array.from({ length: 18 }, (_, i) => (
              <i key={`${k}${i}`} title={`Level ${i + 1}`} style={{ height: 14, borderRadius: "3px",
                background: seq[i] === k ? (k === "R" && !skills?.noUlt ? colours.tintHi : colours.tint) : T.raised }} />
            )),
          ])}
        </div>
      )}
      {spells?.length > 0 && (
        <div style={{ display: "flex", gap: "12px", marginTop: "12px", color: T.muted, flexWrap: "wrap" }}>
          {spells.map((s) => {
            const src = spellSrc(s);
            return (
              <span key={s} style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                {src && <img src={src} alt="" draggable={false} style={{ width: 24, height: 24, borderRadius: "6px", display: "block" }} />}
                {s}
              </span>
            );
          })}
        </div>
      )}
    </section>
  );
}

// ── the rune page, compact ───────────────────────────────────────────────────
// Keystone, the chosen runes per tree and the shards. `action` is the head's
// right slot (the build page's "Edit runes"); `children` sits underneath (the
// matchup's rune swaps).
export function RunesCard({ runes, runeSrc, layout, action, children, style }) {
  if (!runes) return null;
  const wide = layout === "wide";
  const ks = wide ? 52 : 44;   // keystone size
  const img = (name, size, k) => {
    const src = name ? runeSrc(name) : null;
    return src
      ? <img key={k} src={src} alt={name} title={name} draggable={false}
          style={{ width: size, height: size, borderRadius: "50%", background: T.raised, display: "block" }} />
      : <span key={k} style={{ width: size, height: size, borderRadius: "50%", background: T.raised, display: "block" }} />;
  };
  return (
    <section aria-labelledby="rune-h" style={{ ...card(wide ? 20 : 18), ...style }}>
      <div style={head}><h2 id="rune-h" style={h2}>Rune page</h2>{action}</div>
      <div style={{ display: "grid", gridTemplateColumns: `${ks}px minmax(0, 1fr)`, gap: "6px 14px", marginTop: wide ? "12px" : "10px", alignItems: "center" }}>
        {img(runes.keystone, ks, "ks")}
        <div style={{ fontWeight: 600, color: T.text, minWidth: 0 }}>
          {runes.keystone || "No keystone"}
          <small style={{ display: "block", color: T.muted, fontWeight: 400, fontSize: "13px" }}>{runes.primary} keystone</small>
        </div>
        <div style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: wide ? "6px" : "2px" }}>
          {[[runes.primary, runes.primaryRunes], [runes.secondary, runes.secondaryRunes]].map(([tree, list], t) => (
            <div key={t}>
              <div style={{ color: T.faint, fontSize: "12px" }}>{tree || "No secondary"}</div>
              <div style={{ display: "flex", gap: "8px", marginTop: "2px" }}>{(list || []).map((r, k) => img(r, 32, `${t}-${k}`))}</div>
            </div>
          ))}
        </div>
        <div style={{ gridColumn: "1 / -1", color: T.muted, fontSize: "13px", marginTop: "2px" }}>
          {(runes.shards || []).filter(Boolean).join(" · ")}
        </div>
      </div>
      {children}
    </section>
  );
}

// ── the finding: one sentence on the lane opponent, one line on their team ───
// "Mordekaiser: magic damage, heals, shields and stacks health. Mercury's Treads
// replaces Plated Steelcaps; Maw of Malmortius replaces Death's Dance, and
// Chempunk Chainsword is added." Then "Their team: ..." and any conflict line.
export function Finding({ notes, style }) {
  const plan = notes?.plan;
  if (!plan) return null;
  const all = plan.phases.flatMap((p) => p.items);
  const laneSwaps = all.filter((e) => e.tag === "lane" && e.from);
  const laneAdds = all.filter((e) => e.tag === "lane" && !e.from);
  const teamAdds = all.filter((e) => e.tag === "team");
  const traits = (notes.traits || []).map((t) => t.toLowerCase());
  const b = (name, col) => <b key={name} style={{ color: col, fontWeight: 600 }}>{name}</b>;
  const lane = notes.foe && (traits.length || laneSwaps.length || laneAdds.length);
  if (!lane && !teamAdds.length && !(plan.conflicts || []).length) return null;
  return (
    <p style={{ marginTop: "12px", marginBottom: 0, fontSize: "15px", lineHeight: "22px", color: T.text, ...style }}>
      {lane && (
        <>
          {notes.foe}{traits.length ? <>: {listOf(traits)}.</> : "."}{" "}
          {laneSwaps.map((s, k) => <span key={s.name}>{k ? "; " : ""}{b(s.name, LANE)} replaces {s.from}</span>)}
          {laneAdds.length > 0 && <>{laneSwaps.length ? ", and " : ""}{listOf(laneAdds.map((a) => b(a.name, LANE)))} {laneAdds.length > 1 ? "are" : "is"} added.</>}
          {!laneAdds.length && laneSwaps.length > 0 && "."}
        </>
      )}
      {teamAdds.length > 0 && (
        <span style={{ display: lane ? "block" : "inline", marginTop: lane ? "4px" : 0, color: T.muted, fontSize: "14px" }}>
          Their team: {listOf(teamAdds.map((a) => b(a.name, TEAM)))}.
        </span>
      )}
      {(plan.conflicts || []).map((c) => (
        <span key={c} style={{ display: "block", marginTop: "4px", color: T.muted, fontSize: "14px" }}>{c}.</span>
      ))}
    </p>
  );
}
