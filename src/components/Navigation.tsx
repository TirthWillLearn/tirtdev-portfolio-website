import { useState, useEffect } from "react";
import { C } from "@/lib/portfolioData";

interface NavProps {
  active: string;
  onNav: (id: string) => void;
}

const SECTIONS = [
  { id: "hero", label: "_hero.ts", icon: "⌂" },
  { id: "about", label: "about.md", icon: "◉" },
  { id: "projects", label: "projects/", icon: "⊡" },
  { id: "skills", label: "stack.json", icon: "<>" },
  { id: "contact", label: "contact.ts", icon: "✉" },
];

// ── SVG Icons ───────────────────────────────────────────────────
function IconHome({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M8 2L2 7v7h4v-4h4v4h4V7L8 2z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconPerson({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M2 14c0-3 2.7-5 6-5s6 2 6 5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconFolder({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M2 4h4l2 2h6v7H2V4z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconCode({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M5 4L1 8l4 4M11 4l4 4-4 4M9 2l-2 12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconMail({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect
        x="2"
        y="4"
        width="12"
        height="9"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M2 5l6 5 6-5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconSearch({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <circle cx="6" cy="6" r="3.5" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M9 9l2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconGit({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 13 13" fill="none">
      <circle cx="3" cy="3" r="1.5" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="10" cy="3" r="1.5" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="3" cy="10" r="1.5" stroke="currentColor" strokeWidth="1.1" />
      <path
        d="M3 4.5v4M4.5 3h4"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

const SECTION_ICONS = {
  hero: IconHome,
  about: IconPerson,
  projects: IconFolder,
  skills: IconCode,
  contact: IconMail,
};

// ── Command Palette ─────────────────────────────────────────────
function CommandPalette({
  onNav,
  onClose,
}: {
  onNav: (id: string) => void;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [hi, setHi] = useState(0);

  const items = [
    ...SECTIONS.map((s) => ({
      label: s.label,
      id: s.id,
      type: "section" as const,
    })),
    { label: "github.com/TirthWillLearn", id: "gh", type: "link" as const },
    { label: "linkedin.com/in/tirth-k-patel", id: "li", type: "link" as const },
  ];

  const filtered = query
    ? items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()))
    : items;

  useEffect(() => {
    setHi(0);
  }, [query]);

  const select = (item: (typeof items)[0]) => {
    if (item.type === "section") onNav(item.id);
    else if (item.id === "gh")
      window.open("https://github.com/TirthWillLearn", "_blank");
    else if (item.id === "li")
      window.open("https://linkedin.com/in/tirth-k-patel", "_blank");
    onClose();
  };

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-[8888]"
        style={{ background: "rgba(5,8,15,0.7)", backdropFilter: "blur(4px)" }}
      />
      <div
        className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[min(560px,90vw)] rounded-lg overflow-hidden z-[9000]"
        style={{
          background: C.surface2,
          border: `1px solid ${C.border2}`,
          boxShadow: "0 32px 80px rgba(0,0,0,0.8)",
          animation: "fadeIn 0.15s ease",
        }}
      >
        {/* Input */}
        <div
          className="flex items-center gap-3 px-4 py-3"
          style={{ borderBottom: `1px solid ${C.border}` }}
        >
          <IconSearch />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setHi((h) => Math.min(h + 1, filtered.length - 1));
              }
              if (e.key === "ArrowUp") {
                e.preventDefault();
                setHi((h) => Math.max(h - 1, 0));
              }
              if (e.key === "Enter") {
                if (filtered[hi]) select(filtered[hi]);
              }
              if (e.key === "Escape") {
                onClose();
              }
            }}
            placeholder="Navigate to section..."
            className="flex-1 bg-transparent border-none outline-none text-[13px]"
            style={{ fontFamily: "'JetBrains Mono',monospace", color: C.text }}
          />
          <span
            className="text-[10px] px-1.5 py-0.5 rounded"
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              color: C.muted,
              border: `1px solid ${C.border}`,
            }}
          >
            ESC
          </span>
        </div>
        {/* Results */}
        <div className="max-h-80 overflow-y-auto">
          {filtered.map((item, i) => {
            const SIcon =
              item.type === "section"
                ? SECTION_ICONS[item.id as keyof typeof SECTION_ICONS]
                : null;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHi(i)}
                onClick={() => select(item)}
                className="flex items-center gap-3 px-4 py-2.5 cursor-pointer transition-all"
                style={{
                  background: i === hi ? `${C.green}0f` : "transparent",
                  borderLeft:
                    i === hi ? `2px solid ${C.green}` : "2px solid transparent",
                }}
              >
                <span style={{ color: i === hi ? C.green : C.muted }}>
                  {SIcon ? <SIcon size={14} /> : <IconSearch size={14} />}
                </span>
                <span
                  className="flex-1 text-[12.5px]"
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    color: i === hi ? C.text : `${C.text}88`,
                  }}
                >
                  {item.label}
                </span>
                {i === hi && (
                  <span
                    className="text-[10px] px-1.5 rounded"
                    style={{
                      color: C.muted,
                      border: `1px solid ${C.border}`,
                      fontFamily: "'JetBrains Mono',monospace",
                    }}
                  >
                    ↵
                  </span>
                )}
              </div>
            );
          })}
        </div>
        {/* Footer */}
        <div
          className="flex gap-4 px-4 py-2"
          style={{
            borderTop: `1px solid ${C.border}`,
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 10,
            color: C.muted,
          }}
        >
          {[
            ["↑↓", "navigate"],
            ["↵", "select"],
            ["ESC", "close"],
          ].map(([k, v]) => (
            <span key={k}>
              <span
                className="px-1.5 py-0.5 rounded mr-1"
                style={{ border: `1px solid ${C.border}` }}
              >
                {k}
              </span>
              {v}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

// ── Mobile Menu Drawer ──────────────────────────────────────────
function MobileDrawer({
  active,
  onNav,
  onClose,
}: {
  active: string;
  onNav: (id: string) => void;
  onClose: () => void;
}) {
  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-[300]"
        style={{ background: "rgba(5,8,15,0.7)", backdropFilter: "blur(4px)" }}
      />
      <div
        className="fixed top-0 right-0 bottom-0 w-64 z-[400] flex flex-col"
        style={{
          background: C.surface,
          borderLeft: `1px solid ${C.border}`,
          animation: "slideInRight 0.2s ease",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: `1px solid ${C.border}` }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded flex items-center justify-center"
              style={{ background: C.green }}
            >
              <span
                style={{
                  fontFamily: "'Oxanium',sans-serif",
                  fontSize: 10,
                  fontWeight: 800,
                  color: "#05080f",
                }}
              >
                TP
              </span>
            </div>
            <span
              style={{
                fontFamily: "'Oxanium',sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color: "#fff",
              }}
            >
              tirth.dev
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-lg leading-none"
            style={{
              color: C.muted,
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "monospace",
            }}
          >
            ✕
          </button>
        </div>

        {/* Nav links */}
        <div className="flex-1 py-4">
          {SECTIONS.map((s) => {
            const SIcon = SECTION_ICONS[s.id as keyof typeof SECTION_ICONS];
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => {
                  onNav(s.id);
                  onClose();
                }}
                className="w-full flex items-center gap-3 px-5 py-3 text-left transition-all"
                style={{
                  background: isActive ? `${C.green}0f` : "none",
                  borderLeft: isActive
                    ? `2px solid ${C.green}`
                    : "2px solid transparent",
                  color: isActive ? C.green : C.muted,
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 13,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <SIcon size={15} />
                <span>{s.label}</span>
              </button>
            );
          })}
        </div>

        {/* Bottom links */}
        <div
          className="px-5 py-5 space-y-3"
          style={{ borderTop: `1px solid ${C.border}` }}
        >
          <a
            href="https://github.com/TirthWillLearn"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[12px]"
            style={{
              color: C.muted,
              fontFamily: "'JetBrains Mono',monospace",
              textDecoration: "none",
            }}
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/tirth-k-patel"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[12px]"
            style={{
              color: C.muted,
              fontFamily: "'JetBrains Mono',monospace",
              textDecoration: "none",
            }}
          >
            LinkedIn ↗
          </a>
          <div className="flex items-center gap-2 mt-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: C.green, boxShadow: `0 0 6px ${C.green}` }}
            />
            <span
              className="text-[11px]"
              style={{
                color: C.green,
                fontFamily: "'JetBrains Mono',monospace",
              }}
            >
              available for hire
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

// ── Menu Dropdown ───────────────────────────────────────────────
function MenuDropdown({
  label,
  items,
  onNav,
}: {
  label: string;
  items: { label: string; id: string }[];
  onNav: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        onMouseEnter={() => setOpen(true)}
        onClick={() => setOpen((o) => !o)}
        className="h-10 px-3 text-[11px] tracking-wider transition-all cursor-pointer"
        style={{
          background: open ? `${C.green}12` : "none",
          border: "none",
          color: open ? C.text : C.muted,
          fontFamily: "'JetBrains Mono',monospace",
        }}
      >
        {label}
      </button>
      {open && (
        <div
          className="absolute top-full left-0 min-w-[180px] rounded-md overflow-hidden z-[999]"
          style={{
            background: C.surface2,
            border: `1px solid ${C.border2}`,
            boxShadow: "0 16px 40px rgba(0,0,0,0.7)",
            animation: "fadeIn 0.1s ease",
          }}
        >
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNav(item.id);
                setOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-[11.5px] transition-all cursor-pointer"
              style={{
                background: "none",
                border: "none",
                color: `${C.text}99`,
                fontFamily: "'JetBrains Mono',monospace",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = `${C.green}0f`;
                (e.target as HTMLElement).style.color = C.text;
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "none";
                (e.target as HTMLElement).style.color = `${C.text}99`;
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Menu Bar ────────────────────────────────────────────────────
export function MenuBar({
  active,
  onNav,
  onCommandPalette,
}: NavProps & { onCommandPalette: () => void }) {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(
      () =>
        setTime(
          new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        ),
      60000,
    );
    return () => clearInterval(t);
  }, []);

  const handleNav = (id: string) => {
    if (id === "gh") window.open("https://github.com/TirthWillLearn", "_blank");
    else if (id === "li")
      window.open("https://linkedin.com/in/tirth-k-patel", "_blank");
    else onNav(id);
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 h-10 flex items-center justify-between px-4 z-[500]"
        style={{
          background: `${C.surface}f5`,
          borderBottom: `1px solid ${C.border}`,
          backdropFilter: "blur(20px)",
          fontFamily: "'JetBrains Mono',monospace",
        }}
      >
        {/* LEFT: logo */}
        <div className="flex items-center gap-0">
          <div
            className="flex items-center gap-2 pr-4 h-10"
            style={{ borderRight: `1px solid ${C.border}` }}
          >
            <div
              className="w-[22px] h-[22px] rounded flex items-center justify-center shrink-0"
              style={{ background: C.green }}
            >
              <span
                style={{
                  fontFamily: "'Oxanium',sans-serif",
                  fontSize: 11,
                  fontWeight: 800,
                  color: "#05080f",
                  letterSpacing: "-0.02em",
                }}
              >
                TP
              </span>
            </div>
            <div className="flex flex-col gap-0">
              <span
                className="text-[11px] font-bold leading-none tracking-wide"
                style={{ fontFamily: "'Oxanium',sans-serif", color: "#fff" }}
              >
                tirth.dev
              </span>
              <span
                className="text-[9px] leading-none tracking-wider"
                style={{ color: C.muted }}
              >
                backend dev
              </span>
            </div>
          </div>

          {/* Desktop dropdown menus — hidden on mobile */}
          <div className="hidden md:flex items-center ml-1">
            {[
              { label: "File", items: [{ label: "about.md", id: "about" }] },
              {
                label: "Navigate",
                items: SECTIONS.map((s) => ({ label: s.label, id: s.id })),
              },
              {
                label: "Help",
                items: [
                  { label: "github ↗", id: "gh" },
                  { label: "linkedin ↗", id: "li" },
                ],
              },
            ].map((m) => (
              <MenuDropdown
                key={m.label}
                label={m.label}
                items={m.items}
                onNav={handleNav}
              />
            ))}
          </div>
        </div>

        {/* CENTER: command palette — hidden on mobile */}
        <button
          onClick={onCommandPalette}
          className="hidden md:flex items-center gap-2 justify-between rounded cursor-pointer transition-all min-w-[200px] px-3 py-[5px]"
          style={{
            background: C.surface2,
            border: `1px solid ${C.border}`,
            fontFamily: "'JetBrains Mono',monospace",
            color: C.muted,
            fontSize: 11,
          }}
        >
          <div className="flex items-center gap-2">
            <IconSearch size={12} />
            <span>
              <span style={{ color: C.green }}>~/</span>
              <span style={{ color: C.text }}>{active}</span>
              <span style={{ color: C.muted }}>.ts</span>
            </span>
          </div>
          <span
            className="text-[9px] px-1.5 py-0.5 rounded tracking-wider"
            style={{ border: `1px solid ${C.border}` }}
          >
            ⌘K
          </span>
        </button>

        {/* RIGHT: desktop status pills */}
        <div className="hidden md:flex items-center">
          {[
            { label: "● available", color: C.green },
            { label: "Node.js v20" },
            { label: "Mumbai, IN" },
            { label: time },
          ].map((p) => (
            <div
              key={p.label}
              className="px-3 h-10 flex items-center text-[11px] whitespace-nowrap"
              style={{
                borderLeft: `1px solid ${C.border}`,
                color: p.color || C.muted,
              }}
            >
              {p.label}
            </div>
          ))}
        </div>

        {/* MOBILE: hamburger button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="flex md:hidden items-center justify-center w-9 h-9 rounded cursor-pointer"
          style={{
            background: "none",
            border: `1px solid ${C.border}`,
            color: C.muted,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M2 4h12M2 8h12M2 12h12"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <MobileDrawer
          active={active}
          onNav={onNav}
          onClose={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}

// ── Activity Bar — desktop only ─────────────────────────────────
export function ActivityBar({ active, onNav }: NavProps) {
  return (
    <div
      className="hidden md:flex fixed top-10 left-0 bottom-6 w-12 flex-col items-center pt-2 z-[400]"
      style={{ background: C.surface, borderRight: `1px solid ${C.border}` }}
    >
      <div className="flex flex-col items-center gap-0.5 flex-1">
        {SECTIONS.map((s) => {
          const SIcon = SECTION_ICONS[s.id as keyof typeof SECTION_ICONS];
          const isActive = active === s.id;
          return (
            <button
              key={s.id}
              onClick={() => onNav(s.id)}
              title={s.label}
              className="relative w-10 h-10 flex items-center justify-center rounded cursor-pointer transition-all"
              style={{
                background: "none",
                border: "none",
                color: isActive ? C.green : C.muted,
              }}
              onMouseEnter={(e) => {
                if (!isActive)
                  (e.currentTarget as HTMLButtonElement).style.color = C.text;
              }}
              onMouseLeave={(e) => {
                if (!isActive)
                  (e.currentTarget as HTMLButtonElement).style.color = C.muted;
              }}
            >
              {isActive && (
                <span
                  className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-r"
                  style={{ background: C.green }}
                />
              )}
              <SIcon size={17} />
            </button>
          );
        })}
      </div>
      <div className="flex flex-col items-center gap-0.5 pb-2">
        <a
          href="https://github.com/TirthWillLearn"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
          className="w-10 h-10 flex items-center justify-center rounded transition-all"
          style={{ color: C.muted, textDecoration: "none" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = C.text;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = C.muted;
          }}
        >
          <svg width="17" height="17" viewBox="0 0 16 16" fill="none">
            <rect
              x="1"
              y="1"
              width="14"
              height="14"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M4 6h2v2H4zM4 9h2v2H4zM7 6h5M7 9h3"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

// ── Status Bar — desktop only ───────────────────────────────────
export function StatusBar({ active }: { active: string }) {
  return (
    <div
      className="hidden md:flex fixed bottom-0 left-0 right-0 h-6 items-center justify-between px-3 z-[500]"
      style={{
        background: C.greenDim,
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: 11,
      }}
    >
      <div className="flex items-center gap-3" style={{ color: "#fff" }}>
        <div className="flex items-center gap-1">
          <IconGit size={11} />
          <span> main</span>
        </div>
        <span>Backend Developer</span>
        <span>Node.js v20.11.0</span>
      </div>
      <div
        className="flex items-center gap-2"
        style={{ color: "rgba(255,255,255,0.7)" }}
      >
        {SECTIONS.map((s) => (
          <span
            key={s.id}
            style={{
              fontSize: 9,
              opacity: s.id === active ? 1 : 0.45,
              color: s.id === active ? "#fff" : "inherit",
            }}
          >
            {s.id === active ? "◆" : "◇"}
          </span>
        ))}
        <span className="ml-1">{active}.ts</span>
      </div>
      <div
        className="flex items-center gap-3"
        style={{ color: "rgba(255,255,255,0.8)" }}
      >
        <span>UTF-8</span>
        <span>TypeScript</span>
        <span>Mumbai, IN</span>
        <span
          className="px-2 py-0.5 rounded font-semibold"
          style={{ background: "rgba(0,0,0,0.2)", color: "#fff" }}
        >
          ● available
        </span>
      </div>
    </div>
  );
}

// ── Mobile Bottom Tab Bar ───────────────────────────────────────
export function MobileTabBar({ active, onNav }: NavProps) {
  return (
    <div
      className="flex md:hidden fixed bottom-0 left-0 right-0 h-14 items-center justify-around z-[400] px-2"
      style={{
        background: C.surface,
        borderTop: `1px solid ${C.border}`,
        backdropFilter: "blur(12px)",
      }}
    >
      {SECTIONS.map((s) => {
        const SIcon = SECTION_ICONS[s.id as keyof typeof SECTION_ICONS];
        const isActive = active === s.id;
        return (
          <button
            key={s.id}
            onClick={() => onNav(s.id)}
            className="flex flex-col items-center gap-1 px-3 py-1 rounded transition-all cursor-pointer"
            style={{
              background: "none",
              border: "none",
              color: isActive ? C.green : C.muted,
            }}
          >
            <SIcon size={18} />
            <span
              className="text-[9px] leading-none"
              style={{ fontFamily: "'JetBrains Mono',monospace" }}
            >
              {s.id}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ── OSNavigation (main export) ──────────────────────────────────
export function OSNavigation({ active, onNav }: NavProps) {
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCmdOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <MenuBar
        active={active}
        onNav={onNav}
        onCommandPalette={() => setCmdOpen(true)}
      />
      <ActivityBar active={active} onNav={onNav} />
      <StatusBar active={active} />
      <MobileTabBar active={active} onNav={onNav} />
      {cmdOpen && (
        <CommandPalette onNav={onNav} onClose={() => setCmdOpen(false)} />
      )}
    </>
  );
}
