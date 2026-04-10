import { useState, useRef, useEffect } from "react";
import { C } from "@/lib/portfolioData";
import SectionWrapper from "@/components/Layouts/SectionWrapper";

interface Props {
  onNav: (id: string) => void;
}

const CMDS = [
  "about",
  "skills",
  "projects",
  "contact",
  "whoami",
  "help",
  "clear",
] as const;

const Hero = ({ onNav }: Props) => {
  const [lines, setLines] = useState<string[]>([
    "Welcome to Tirth Terminal v2.0",
    "────────────────────────────────",
    "Type 'help' or click below ↓",
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const termRef = useRef<HTMLDivElement>(null);
  const shouldAutoScroll = useRef(true);

  useEffect(() => {
    const el = termRef.current;
    if (!el) return;

    requestAnimationFrame(() => {
      if (shouldAutoScroll.current) {
        el.scrollTop = el.scrollHeight;
      }
    });
  }, [lines]);

  const runCommand = (raw: string) => {
    const cmd = raw.toLowerCase().trim();
    let out: string[] = [];
    switch (cmd) {
      case "help":
        out = [
          "",
          "  about    → about section",
          "  skills   → skills section",
          "  projects → projects section",
          "  contact  → contact section",
          "  whoami   → who is Tirth?",
          "  clear    → clear terminal",
          "",
        ];
        break;
      case "about":
        out = ["  → navigating to /about..."];
        setTimeout(() => onNav("about"), 350);
        break;
      case "skills":
        out = ["  → navigating to /skills..."];
        setTimeout(() => onNav("skills"), 350);
        break;
      case "projects":
        out = ["  → navigating to /projects..."];
        setTimeout(() => onNav("projects"), 350);
        break;
      case "contact":
        out = ["  → navigating to /contact..."];
        setTimeout(() => onNav("contact"), 350);
        break;
      case "whoami":
        out = [
          "",
          "  Tirth Patel — Backend Developer",
          "  Node.js · Express · TypeScript · PostgreSQL",
          "  Redis · Docker · AWS EC2 · AWS RDS",
          "  Socket.io · JWT · RBAC · bcrypt",
          "  Mumbai · Fresher · Immediate joiner",
          "",
        ];
        break;
      case "clear":
        setLines([]);
        return;
      default:
        out = [
          `  bash: ${cmd}: command not found`,
          "  type 'help' to see commands",
        ];
    }
    setLines((p) => [...p, `$ ${raw}`, ...out]);
  };

  const submit = (cmd: string) => {
    if (!cmd.trim()) return;
    shouldAutoScroll.current = true; // 🔥 force scroll

    setHistory((p) => [...p, cmd]);
    setHistoryIndex(-1);
    runCommand(cmd);
    setInput("");
  };

  return (
    <SectionWrapper id="hero" tight>
      {/* Grid: 1 col on mobile, 2 cols on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center min-h-[85vh]">
        {/* ── LEFT ── */}
        <div className="flex flex-col gap-6">
          {/* Status */}
          <div
            className="inline-flex items-center gap-2 w-fit px-4 py-[5px] rounded-full"
            style={{
              border: `1px solid ${C.greenDim}`,
              background: `${C.green}0a`,
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: C.green,
                boxShadow: `0 0 10px ${C.green}`,
                animation: "pulse 2s infinite",
              }}
            />
            <span
              className="text-[11px] tracking-wider"
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                color: C.green,
              }}
            >
              available · immediate joiner
            </span>
          </div>

          {/* Name */}
          <div>
            <h1
              className="leading-none tracking-tight"
              style={{
                fontFamily: "'Oxanium',sans-serif",
                fontSize: "clamp(52px,8vw,80px)",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.02em",
              }}
            >
              Tirth
            </h1>
            <h1
              className="leading-none tracking-tight"
              style={{
                fontFamily: "'Oxanium',sans-serif",
                fontSize: "clamp(52px,8vw,80px)",
                fontWeight: 800,
                color: C.green,
                letterSpacing: "-0.02em",
              }}
            >
              Patel
            </h1>
          </div>

          {/* Code role */}
          <div
            className="text-[13px]"
            style={{ fontFamily: "'JetBrains Mono',monospace" }}
          >
            <span style={{ color: C.blue }}>const</span>
            <span style={{ color: C.text }}> role</span>
            <span style={{ color: C.muted }}> = </span>
            <span style={{ color: C.amber }}>"Backend Developer"</span>
          </div>

          {/* Bio */}
          <p
            className="text-[13px] leading-relaxed max-w-sm"
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              color: `${C.text}88`,
            }}
          >
            <span style={{ color: C.dim }}>{"// "}</span>I build fast, secure,
            production-ready backend systems. Node.js · PostgreSQL · Redis ·
            Docker · AWS. Mumbai.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNav("projects")}
              className="px-6 py-2.5 rounded text-[12px] font-bold tracking-wide cursor-pointer transition-all"
              style={{
                background: C.green,
                color: C.bg,
                border: "none",
                fontFamily: "'JetBrains Mono',monospace",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#33ffaa";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  C.green;
              }}
            >
              View Projects →
            </button>
            <a
              href="https://github.com/TirthWillLearn"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded text-[12px] transition-all"
              style={{
                border: `1px solid ${C.border}`,
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
              className="px-5 py-2.5 rounded text-[12px] transition-all"
              style={{
                border: `1px solid ${C.border}`,
                color: C.muted,
                fontFamily: "'JetBrains Mono',monospace",
                textDecoration: "none",
              }}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* ── RIGHT — terminal ── */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="rounded-lg overflow-hidden cursor-text"
          style={{
            background: C.surface,
            border: `1px solid ${C.border}`,
            boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
          }}
        >
          {/* Title bar */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{
              borderBottom: `1px solid ${C.border}`,
              background: `${C.bg}88`,
            }}
          >
            <span
              className="w-[11px] h-[11px] rounded-full"
              style={{ background: "#ff5f57" }}
            />
            <span
              className="w-[11px] h-[11px] rounded-full"
              style={{ background: "#febc2e" }}
            />
            <span
              className="w-[11px] h-[11px] rounded-full"
              style={{ background: "#28c840" }}
            />
            <span
              className="ml-2 text-[11px]"
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                color: C.muted,
              }}
            >
              tirth@portfolio:~$
            </span>
          </div>
          {/* Body */}
          <div
            ref={termRef}
            className="p-4 overflow-y-auto"
            onScroll={(e) => {
              const el = e.currentTarget;

              const isAtBottom =
                el.scrollHeight - el.scrollTop - el.clientHeight < 40;

              shouldAutoScroll.current = isAtBottom;
            }}
            style={{
              height: "clamp(260px, 40vh, 340px)",
              overscrollBehavior: "contain",
              scrollBehavior: "smooth",
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 12.5,
              lineHeight: 1.75,
            }}
          >
            {lines.map((line, i) => {
              const color = line.startsWith("$")
                ? C.green
                : line.includes("→")
                  ? C.blue
                  : line.includes("bash:")
                    ? C.red
                    : line.startsWith("  ") &&
                        !line.includes("bash:") &&
                        !line.includes("→")
                      ? C.amber
                      : line.includes("─")
                        ? C.muted
                        : C.text;
              return (
                <div key={i} style={{ color, whiteSpace: "pre-wrap" }}>
                  {line}
                </div>
              );
            })}
            <div className="flex gap-2 mt-1 items-center">
              <span style={{ color: C.green, flexShrink: 0 }}>$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault(); // 🔥 CRITICAL FIX

                    submit(input);
                  }
                  if (e.key === "ArrowUp") {
                    if (!history.length) return;
                    const idx =
                      historyIndex === -1
                        ? history.length - 1
                        : Math.max(0, historyIndex - 1);
                    setHistoryIndex(idx);
                    setInput(history[idx]);
                  }
                  if (e.key === "ArrowDown") {
                    if (historyIndex === -1) return;
                    const idx = historyIndex + 1;
                    if (idx >= history.length) {
                      setHistoryIndex(-1);
                      setInput("");
                    } else {
                      setHistoryIndex(idx);
                      setInput(history[idx]);
                    }
                  }
                  if (e.key === "Tab") {
                    e.preventDefault();
                    const m = CMDS.find((c) =>
                      c.startsWith(input.toLowerCase()),
                    );
                    if (m) setInput(m);
                  }
                }}
                placeholder="type 'help'..."
                className="bg-transparent border-none outline-none w-full text-[12.5px]"
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  color: C.text,
                }}
              />
            </div>
            {/* Quick commands */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["about", "skills", "projects", "contact"].map((cmd) => (
                <button
                  key={cmd}
                  onClick={(e) => {
                    e.stopPropagation();
                    submit(cmd);
                  }}
                  className="px-3 py-1 rounded text-[11px] cursor-pointer transition-all"
                  style={{
                    border: `1px solid ${C.border}`,
                    background: "transparent",
                    color: C.muted,
                    fontFamily: "'JetBrains Mono',monospace",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      C.green;
                    (e.currentTarget as HTMLButtonElement).style.color =
                      C.green;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      C.border;
                    (e.currentTarget as HTMLButtonElement).style.color =
                      C.muted;
                  }}
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
