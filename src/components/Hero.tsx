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
    "────────────────────────────",
    "Type 'help' to start",
  ]);

  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const termRef = useRef<HTMLDivElement>(null);

  // ✅ ONLY terminal scroll (NOT page)
  useEffect(() => {
    if (termRef.current) {
      termRef.current.scrollTop = termRef.current.scrollHeight;
    }
  }, [lines]);

  const runCommand = (raw: string) => {
    const cmd = raw.toLowerCase().trim();
    let out: string[] = [];

    switch (cmd) {
      case "help":
        out = [
          "",
          "about    → about section",
          "skills   → skills section",
          "projects → projects section",
          "contact  → contact section",
          "whoami   → about me",
          "clear    → clear terminal",
          "",
        ];
        break;

      case "about":
        out = ["→ opening about..."];
        setTimeout(() => onNav("about"), 300);
        break;

      case "skills":
        out = ["→ opening skills..."];
        setTimeout(() => onNav("skills"), 300);
        break;

      case "projects":
        out = ["→ opening projects..."];
        setTimeout(() => onNav("projects"), 300);
        break;

      case "contact":
        out = ["→ opening contact..."];
        setTimeout(() => onNav("contact"), 300);
        break;

      case "whoami":
        out = [
          "",
          "Tirth Patel — Backend Developer",
          "Node.js · PostgreSQL · Redis",
          "Mumbai · Immediate joiner",
          "",
        ];
        break;

      case "clear":
        setLines([]);
        return;

      default:
        out = [`bash: ${cmd}: command not found`, "type 'help'"];
    }

    setLines((prev) => [...prev, `$ ${raw}`, ...out]);
  };

  const submit = (cmd: string) => {
    if (!cmd.trim()) return;

    setHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    runCommand(cmd);
    setInput("");
  };

  return (
    <SectionWrapper id="hero" tight>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "center",
          padding: "60px 0", // ✅ FIX (removed 100vh issue)
        }}
      >
        {/* LEFT */}
        <div>
          <h1 style={{ fontSize: "70px", color: "#fff" }}>Tirth</h1>
          <h1 style={{ fontSize: "70px", color: C.green }}>Patel</h1>

          <p style={{ color: C.muted }}>
            Backend Developer · Node.js · PostgreSQL · Redis
          </p>
        </div>

        {/* RIGHT TERMINAL */}
        <div
          onMouseDown={(e) => e.preventDefault()} // 🔥 prevents scroll jump
          onClick={() => inputRef.current?.focus()}
          style={{
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          {/* HEADER */}
          <div
            style={{
              padding: "10px 14px",
              borderBottom: `1px solid ${C.border}`,
              fontSize: "12px",
              color: C.muted,
            }}
          >
            terminal
          </div>

          {/* BODY */}
          <div
            ref={termRef}
            style={{
              height: 220, // ✅ compact
              maxHeight: 220,
              overflowY: "auto",
              padding: "14px",
              fontFamily: "monospace",
              fontSize: "12px",
              lineHeight: "1.7",
              overscrollBehavior: "contain", // 🔥 prevents page scroll
            }}
          >
            {lines.map((line, i) => (
              <div key={i} style={{ color: C.text }}>
                {line}
              </div>
            ))}

            {/* INPUT */}
            <div style={{ display: "flex", gap: "6px" }}>
              <span style={{ color: C.green }}>$</span>

              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onFocus={(e) => {
                  e.target.scrollIntoView({ block: "nearest" }); // 🔥 prevents jump
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    submit(input);
                  }

                  if (e.key === "ArrowUp") {
                    e.preventDefault();
                    if (!history.length) return;

                    const idx =
                      historyIndex === -1
                        ? history.length - 1
                        : Math.max(0, historyIndex - 1);

                    setHistoryIndex(idx);
                    setInput(history[idx]);
                  }

                  if (e.key === "ArrowDown") {
                    e.preventDefault();
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
                    const match = CMDS.find((c) =>
                      c.startsWith(input.toLowerCase()),
                    );
                    if (match) setInput(match);
                  }
                }}
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: C.text,
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
