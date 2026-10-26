// ─────────────────────────────────────────────────────────────────────────────
//  CommandMenu.jsx — Ctrl+K: jump to any champion and lane, or any page.
//
//  Type a name, with a lane word if you like ("darius jg", "tf mid"), or a page
//  ("tier", "draft", "settings"). Up and Down move, Enter opens, Esc closes.
//  The matching lives in data/commandSearch.js.
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useEffect, useRef } from "react";
import { inGame as T } from "./theme.js";
import { searchCommands } from "./data/commandSearch.js";

export const Kbd = ({ children }) => (
  <kbd style={{ font:`600 10.5px ${T.font}`, color:T.faint, background:"rgba(255,255,255,.06)",
    border:`1px solid ${T.rule}`, borderRadius:"5px", padding:"1px 5px", lineHeight:"15px",
    fontVariantNumeric:"tabular-nums" }}>{children}</kbd>
);

export default function CommandMenu({ entries, current, champImg, onChamp, onClose }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const listRef = useRef(null);
  const results = searchCommands(entries, query, { current });
  const sel = Math.min(active, Math.max(results.length - 1, 0));

  // Keep the highlighted row in view while moving with the arrow keys
  useEffect(() => {
    listRef.current?.querySelector(`[data-row="${sel}"]`)?.scrollIntoView({ block:"nearest" });
  }, [sel]);

  const run = (e) => {
    if (!e) return;
    onClose();
    if (e.kind === "champ") onChamp(e.champ, e.lane);
    else e.page.act();
  };
  const onKey = (ev) => {
    if (ev.key === "ArrowDown") { ev.preventDefault(); setActive(Math.min(sel + 1, results.length - 1)); }
    else if (ev.key === "ArrowUp") { ev.preventDefault(); setActive(Math.max(sel - 1, 0)); }
    else if (ev.key === "Enter") { ev.preventDefault(); run(results[sel]); }
    else if (ev.key === "Escape") { ev.preventDefault(); onClose(); }
  };

  return (
    <div onMouseDown={onClose} style={{ position:"fixed", inset:0, zIndex:200, background:"rgba(10,10,12,.55)",
      display:"flex", justifyContent:"center", alignItems:"flex-start", paddingTop:"12vh" }}>
      <div role="dialog" aria-label="Go to a champion or page" onMouseDown={(ev) => ev.stopPropagation()}
        style={{ width:"min(560px, calc(100vw - 32px))", background:T.surface, borderRadius:"14px",
          border:`1px solid ${T.rule}`, boxShadow:"0 24px 64px rgba(0,0,0,.6)", overflow:"hidden",
          fontFamily:T.font, color:T.text }}>
        <input autoFocus value={query} onKeyDown={onKey}
          onChange={(ev) => { setQuery(ev.target.value); setActive(0); }}
          placeholder="Champion, lane or page"
          aria-label="Search champions and pages"
          style={{ width:"100%", boxSizing:"border-box", border:0, outline:"none", background:"transparent",
            padding:"16px 18px", font:`500 15px ${T.font}`, color:T.text, borderBottom:`1px solid ${T.rule}` }} />
        <div ref={listRef} role="listbox" style={{ maxHeight:"min(420px, 60vh)", overflowY:"auto", padding:"6px" }}>
          {results.length === 0 && (
            <div style={{ padding:"18px 12px", color:T.faint, fontSize:"13px" }}>Nothing matches “{query}”.</div>
          )}
          {results.map((e, i) => (
            <div key={e.id} data-row={i} role="option" aria-selected={i === sel}
              onMouseMove={() => i !== sel && setActive(i)} onClick={() => run(e)}
              style={{ display:"flex", alignItems:"center", gap:"12px", padding:"8px 10px", borderRadius:"9px",
                cursor:"pointer", background: i === sel ? T.active : "transparent" }}>
              {e.kind === "champ"
                ? <img src={champImg(e.champ.display)} alt="" width="28" height="28" loading="lazy"
                    style={{ borderRadius:"7px", flex:"none", background:T.raised }} />
                : <span style={{ width:"28px", height:"28px", borderRadius:"7px", flex:"none", background:T.raised,
                    display:"grid", placeItems:"center", color:T.faint, fontSize:"13px" }}>›</span>}
              <span style={{ fontSize:"14px", fontWeight:600 }}>{e.label}</span>
              <span style={{ marginLeft:"auto", fontSize:"12px", color:T.faint }}>
                {e.kind === "champ" ? e.lane : "Page"}
              </span>
            </div>
          ))}
        </div>
        <div style={{ display:"flex", gap:"14px", padding:"8px 14px", borderTop:`1px solid ${T.rule}`,
          fontSize:"11px", color:T.faint, alignItems:"center" }}>
          <span><Kbd>↑</Kbd> <Kbd>↓</Kbd> move</span>
          <span><Kbd>Enter</Kbd> open</span>
          <span><Kbd>Esc</Kbd> close</span>
          <span style={{ marginLeft:"auto" }}><Kbd>Ctrl</Kbd> <Kbd>K</Kbd></span>
        </div>
      </div>
    </div>
  );
}
