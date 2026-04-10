import { useRef, useEffect, useState } from "react";
import { C, BOOT_LINES, BootLine } from "@/lib/portfolioData";

interface BootScreenProps {
  lines: BootLine[];
  onSkip: () => void;
  exiting: boolean;
}

const lineColor = (type: BootLine["type"]): string => {
  if (type === "cmd") return C.green;
  if (type === "ok") return C.green;
  if (type === "route") return C.blue;
  if (type === "status") return C.green;
  if (type === "ready") return C.text;
  if (type === "div") return C.muted;
  if (type === "init") return `${C.text}99`;
  return C.muted;
};

const BootScreen = ({ lines, onSkip, exiting }: BootScreenProps) => {
  const endRef = useRef<HTMLDivElement>(null);

  // 🔥 NEW: typing state
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex].t;

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const copy = [...prev];
          copy[currentLineIndex] =
            (copy[currentLineIndex] || "") + currentLine[currentCharIndex];
          return copy;
        });

        setCurrentCharIndex((prev) => prev + 1);
      }, 8); // typing speed

      return () => clearTimeout(timeout);
    } else {
      // move to next line
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 60);

      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, currentLineIndex, lines]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [displayedLines]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: C.bg,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'JetBrains Mono', monospace",
        animation: exiting ? "bootFadeOut 0.7s ease forwards" : "none",
      }}
    >
      {/* top glow bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: `linear-gradient(90deg, transparent, ${C.green}, transparent)`,
          opacity: 0.6,
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "680px",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          maxHeight: "85vh",
        }}
      >
        {/* header */}
        <div
          style={{
            marginBottom: "24px",
            paddingBottom: "16px",
            borderBottom: `1px solid ${C.border}`,
          }}
        >
          <div style={{ color: C.muted, fontSize: "11px" }}>
            TIRTH.DEV — PORTFOLIO OS v2.0.1
          </div>

          <div style={{ color: C.green, fontSize: "13px" }}>
            Initializing system
            <span className="cursor" />
          </div>
        </div>

        {/* terminal */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            fontSize: "12.5px",
            lineHeight: "1.9",
            paddingRight: "8px",
          }}
        >
          {displayedLines.map((text, i) => {
            const line = lines[i];

            return (
              <div
                key={i}
                style={{ color: lineColor(line.type), minHeight: "20px" }}
              >
                {line.type === "ok" ? (
                  <>
                    <span style={{ color: C.green }}>[ OK ] </span>
                    <span style={{ color: C.text }}>
                      {text.replace("[   OK   ] ", "")}
                    </span>
                  </>
                ) : line.type === "route" ? (
                  <>
                    <span style={{ color: C.green }}>[ OK ] </span>
                    <span style={{ color: C.blue }}>
                      {text.replace("[   OK   ] ", "")}
                    </span>
                  </>
                ) : line.type === "status" ? (
                  <span style={{ color: C.green, fontWeight: 600 }}>
                    {text}
                  </span>
                ) : (
                  text
                )}
              </div>
            );
          })}

          {/* blinking cursor */}
          <span
            style={{
              display: "inline-block",
              width: "8px",
              height: "14px",
              background: C.green,
              marginLeft: "4px",
              animation: "blink 1s infinite",
            }}
          />

          <div ref={endRef} />
        </div>

        {/* footer */}
        <div
          style={{
            marginTop: "24px",
            paddingTop: "16px",
            borderTop: `1px solid ${C.border}`,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ color: C.muted, fontSize: "11px" }}>
            {displayedLines.length < BOOT_LINES.length
              ? `Loading... ${Math.round(
                  (displayedLines.length / BOOT_LINES.length) * 100,
                )}%`
              : "System ready"}
          </div>

          <button
            onClick={onSkip}
            style={{
              background: "none",
              border: `1px solid ${C.border}`,
              color: C.muted,
              padding: "5px 14px",
              borderRadius: "3px",
              cursor: "pointer",
              fontSize: "11px",
            }}
          >
            Skip →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BootScreen;
