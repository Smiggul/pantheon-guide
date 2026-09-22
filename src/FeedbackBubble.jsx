import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// ─────────────────────────────────────────────────────────────────────────────
//  FeedbackBubble — "tell me what to build next", without a backend.
//
//  FRGE is a static SPA in an Electron shell: there is no server to POST a form
//  to, and standing one up for feedback alone would add hosting cost for a
//  handful of messages a week. So this routes through things that already exist
//  and already notify the maintainer:
//
//    1. GitHub issue (primary) — the repo is public, so a prefilled
//       /issues/new URL opens in the browser with the title, body and context
//       already written. Threaded, searchable, notifies on reply, costs nothing,
//       and the report lands next to the code that has to change.
//    2. Clipboard (fallback) — if the browser is blocked, or the report is too
//       long to ride in a URL, the text is never lost.
//
//  There is deliberately NO mailto: route. It would have to hardcode the
//  maintainer's address, and this bundle ships to anyone — a public inbox in
//  readable JS is a scraper target. A contact address belongs behind the
//  planned backend (see Monetisation/accounts), not in the client.
//
//  Deliberately understated: a low-opacity pill in the corner that only comes
//  up to full contrast on hover. It should be findable when wanted and invisible
//  when not.
// ─────────────────────────────────────────────────────────────────────────────

const REPO  = "Smiggul/pantheon-guide";
const DRAFT_KEY = "frge.feedback.draft";

// GitHub's issue form is a GET, so the whole report rides in the query string.
// Browsers and GitHub both give up somewhere past ~8k; stay well under and fall
// back to clipboard-and-paste rather than opening a silently truncated issue.
const URL_BUDGET = 6000;

const KINDS = [
  { id: "feature", label: "Feature request", labels: "enhancement",
    hint: "Something FRGE should do that it doesn't." },
  { id: "bug",     label: "Bug report",      labels: "bug",
    hint: "Something that's broken or looks wrong." },
  { id: "data",    label: "Build / data fix", labels: "data",
    hint: "A build, rune page, matchup or skill order that's out of date." },
];

export default function FeedbackBubble({ S, appVersion, patch, champ, role, offset = 26 }) {
  const [open, setOpen]   = useState(false);
  const [kind, setKind]   = useState("feature");
  const [title, setTitle] = useState("");
  const [body, setBody]   = useState("");
  const [attach, setAttach] = useState(true);
  const [note, setNote]   = useState(null);     // transient confirmation line
  const [hover, setHover] = useState(false);
  const areaRef = useRef(null);

  const gold    = S?.gold    || "#D4AF37";
  const goldDim = S?.goldDim || "#a1852a";
  const border  = S?.border  || "rgba(212,175,55,.2)";
  const orange  = S?.orange  || "#F97316";

  // A half-written report survives a mis-click, a theme switch or a restart.
  useEffect(() => {
    try {
      const d = JSON.parse(localStorage.getItem(DRAFT_KEY) || "null");
      if (d) { setKind(d.kind || "feature"); setTitle(d.title || ""); setBody(d.body || ""); }
    } catch { /* no draft, or storage unavailable */ }
  }, []);
  useEffect(() => {
    try {
      if (title || body) localStorage.setItem(DRAFT_KEY, JSON.stringify({ kind, title, body }));
      else localStorage.removeItem(DRAFT_KEY);
    } catch { /* storage full or blocked — the draft is a convenience, not a requirement */ }
  }, [kind, title, body]);

  useEffect(() => { if (open) areaRef.current?.focus(); }, [open]);
  useEffect(() => {
    if (!open) return;
    const esc = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  const flash = (msg) => { setNote(msg); setTimeout(() => setNote(null), 3200); };

  const active = KINDS.find((k) => k.id === kind) || KINDS[0];

  // What the maintainer needs to reproduce anything, gathered automatically so
  // the reporter doesn't have to know to include it.
  const contextBlock = () => {
    const rows = [
      ["App",      appVersion ? `v${appVersion}` : "web"],
      ["Patch",    patch || "unknown"],
      ["Viewing",  champ ? `${champ}${role ? ` — ${role}` : ""}` : "—"],
      ["Platform", typeof navigator !== "undefined" ? navigator.platform || "unknown" : "unknown"],
    ];
    return `\n\n---\n${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}`;
  };

  const fullBody = () => body.trim() + (attach ? contextBlock() : "");
  const fullTitle = () => title.trim() || `${active.label} from FRGE.GG`;

  const copy = async (text) => {
    try { await navigator.clipboard.writeText(text); return true; }
    catch { return false; }
  };

  const clear = () => { setTitle(""); setBody(""); };

  const openGithub = async () => {
    if (!body.trim()) return flash("Add a description first.");
    const base = `https://github.com/${REPO}/issues/new`;
    const qs = (b) => `?title=${encodeURIComponent(fullTitle())}` +
                      `&labels=${encodeURIComponent(active.labels)}` +
                      `&body=${encodeURIComponent(b)}`;
    const text = fullBody();
    // Too long to ride in the URL: put it on the clipboard and open an empty
    // form, so the report survives instead of arriving cut in half.
    if ((base + qs(text)).length > URL_BUDGET) {
      const ok = await copy(text);
      window.open(base + qs(ok ? "Paste the copied report here." : ""), "_blank", "noopener");
      flash(ok ? "Report copied — paste it into the issue." : "Too long for a link; write it in the issue.");
    } else {
      window.open(base + qs(text), "_blank", "noopener");
      flash("GitHub opened in your browser.");
    }
    clear();
  };

  const copyAll = async () => {
    if (!body.trim()) return flash("Add a description first.");
    const ok = await copy(`${fullTitle()}\n\n${fullBody()}`);
    flash(ok ? "Copied — send it however you like." : "Couldn't reach the clipboard.");
  };

  const inputStyle = {
    width: "100%", boxSizing: "border-box", background: "rgba(0,0,0,.35)",
    border: `1px solid ${border}`, borderRadius: "6px", color: "#e6e9ec",
    fontSize: "12px", padding: "7px 9px", fontFamily: "inherit", outline: "none",
  };

  const panel = (
    <div style={{
      position: "fixed", left: "22px", bottom: `${offset + 42}px`, zIndex: 9998,
      width: "min(340px, calc(100vw - 44px))",
    }}>
      <div className="frge-panel" style={{
        background: "rgba(27,27,30,.98)", borderColor: border,
        padding: "14px 15px", boxShadow: "0 18px 48px rgba(0,0,0,.65)",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
          marginBottom: "10px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "2.5px", textTransform: "uppercase",
            color: goldDim }}>Send feedback</div>
          <button onClick={() => setOpen(false)} aria-label="Close feedback"
            style={{ background: "none", border: "none", color: "#7a8288", cursor: "pointer",
              fontSize: "16px", lineHeight: 1, padding: "0 2px" }}>×</button>
        </div>

        <div style={{ display: "flex", gap: "5px", marginBottom: "9px" }}>
          {KINDS.map((k) => (
            <button key={k.id} onClick={() => setKind(k.id)}
              style={{
                flex: 1, cursor: "pointer", fontSize: "10px", padding: "5px 4px",
                borderRadius: "6px", fontFamily: "inherit",
                border: `1px solid ${kind === k.id ? gold : "rgba(255,255,255,.1)"}`,
                background: kind === k.id ? `${gold}22` : "rgba(255,255,255,.03)",
                color: kind === k.id ? gold : "#9aa0a6",
              }}>{k.label}</button>
          ))}
        </div>
        <div style={{ fontSize: "10px", color: "#7a8288", marginBottom: "9px" }}>{active.hint}</div>

        <input value={title} onChange={(e) => setTitle(e.target.value)}
          placeholder="One-line summary (optional)"
          style={{ ...inputStyle, marginBottom: "7px" }} />
        <textarea ref={areaRef} value={body} onChange={(e) => setBody(e.target.value)}
          placeholder={kind === "data"
            ? "Which champion, role and item or rune is wrong — and what it should be."
            : kind === "bug"
            ? "What you did, what happened, and what you expected instead."
            : "What you'd like FRGE to do."}
          rows={5} style={{ ...inputStyle, resize: "vertical", lineHeight: 1.5 }} />

        <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer",
          margin: "9px 0 11px", fontSize: "10px", color: "#8b9198" }}>
          <input type="checkbox" checked={attach} onChange={(e) => setAttach(e.target.checked)}
            style={{ accentColor: gold, cursor: "pointer" }} />
          Attach version, patch and the champion you're viewing
        </label>

        <button onClick={openGithub} className="frge-cta"
          style={{
            width: "100%", cursor: "pointer", fontFamily: "inherit", fontSize: "11px",
            letterSpacing: "1px", textTransform: "uppercase", padding: "9px",
            borderRadius: "7px", border: `1px solid ${gold}`, background: `${gold}26`,
            color: gold, marginBottom: "7px",
          }}>Open a GitHub issue</button>

        {/* For anyone without a GitHub account: copy it out and send it
            however they already talk to us. */}
        <button onClick={copyAll} style={{
          width: "100%", cursor: "pointer", fontFamily: "inherit", fontSize: "10px",
          padding: "7px", borderRadius: "6px", border: "1px solid rgba(255,255,255,.12)",
          background: "rgba(255,255,255,.03)", color: "#9aa0a6",
        }}>Copy to clipboard instead</button>

        {note && (
          <div style={{ marginTop: "9px", fontSize: "10px", color: orange, lineHeight: 1.4 }}>
            {note}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-expanded={open}
        title="Suggest a feature, report a bug or flag a wrong build"
        style={{
          position: "fixed", left: "22px", bottom: `${offset}px`, zIndex: 9998,
          cursor: "pointer", fontFamily: "inherit",
          fontSize: "10px", letterSpacing: "1.5px", textTransform: "uppercase",
          padding: "7px 13px", borderRadius: "8px",
          border: `1px solid ${open || hover ? border : "rgba(255,255,255,.08)"}`,
          background: open || hover ? "rgba(27,27,30,.95)" : "rgba(27,27,30,.55)",
          color: open || hover ? gold : "rgba(200,204,209,.45)",
          backdropFilter: "blur(6px)",
          opacity: open || hover ? 1 : 0.42,
          transition: "opacity .18s, color .18s, background .18s, border-color .18s",
        }}>
        Feedback
      </button>
      {open && typeof document !== "undefined" && createPortal(panel, document.body)}
    </>
  );
}
