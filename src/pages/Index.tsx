import { useState, useEffect, useCallback, useRef } from "react";
import { BOOT_LINES, GLOBAL_CSS, C } from "@/lib/portfolioData";

import BootScreen from "@/components/BootScreen";
import { OSNavigation } from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

type Phase = "boot" | "exiting" | "main";

// Desktop: menubar=40 + 20 offset. Mobile: menubar=40 + 12 offset
const SCROLL_OFFSET = 56;

const Index = () => {
  const [phase, setPhase] = useState<Phase>("boot");
  const [bootLines, setBootLines] = useState<typeof BOOT_LINES>([]);
  const [active, setActive] = useState("hero");
  const isScrollingRef = useRef(false);

  // ── Boot ─────────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== "boot") return;
    const delays: number[] = [0];
    BOOT_LINES.forEach((line) => {
      const prev = delays[delays.length - 1];
      if (line.type === "blank") delays.push(prev + 100);
      else if (["div", "ready", "status"].includes(line.type))
        delays.push(prev + 280);
      else if (["ok", "route"].includes(line.type)) delays.push(prev + 160);
      else delays.push(prev + 380);
    });
    const timers = BOOT_LINES.map((line, i) =>
      setTimeout(() => setBootLines((p) => [...p, line]), delays[i]),
    );
    const end = setTimeout(
      () => {
        setPhase("exiting");
        setTimeout(() => setPhase("main"), 700);
      },
      delays[delays.length - 1] + 1100,
    );
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(end);
    };
  }, [phase]);

  // ── Scroll to top on load ─────────────────────────────────────
  useEffect(() => {
    if (phase !== "main") return;
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth";
    }, 150);
  }, [phase]);

  // ── Active section detection (locked during programmatic scroll) ──
  useEffect(() => {
    if (phase !== "main") return;
    const sections = ["hero", "about", "projects", "skills", "contact"];
    const handler = () => {
      if (isScrollingRef.current) return;
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= SCROLL_OFFSET + 30) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [phase]);

  // ── Scroll to section ─────────────────────────────────────────
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    isScrollingRef.current = true;
    setActive(id);
    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 900);
  }, []);

  const handleSkip = () => {
    setPhase("exiting");
    setTimeout(() => setPhase("main"), 400);
  };

  return (
    <>
      <style>{GLOBAL_CSS}</style>

      {(phase === "boot" || phase === "exiting") && (
        <BootScreen
          lines={bootLines}
          onSkip={handleSkip}
          exiting={phase === "exiting"}
        />
      )}

      {phase === "main" && (
        <div
          className="min-h-screen relative"
          style={{ background: C.bg, animation: "fadeIn 0.4s ease" }}
        >
          <div className="bg-grid fixed inset-0 z-0 opacity-35" />
          <div className="scanline" />

          <OSNavigation active={active} onNav={scrollTo} />

          {/*
            pt-10  = 40px (menubar height)
            md:pl-12 = 48px (activity bar width, desktop only)
            pb-14  = 56px (mobile bottom tab bar, mobile only)
            md:pb-6  = 24px (status bar height, desktop only)
          */}
          <div className="relative z-10 pt-10 md:pl-12 pb-14 md:pb-6">
            <Hero onNav={scrollTo} />
            <About />
            <Projects />
            <Skills />
            <Contact />

            <footer
              className="flex justify-between items-center flex-wrap gap-3 px-6 md:px-10 py-6"
              style={{ borderTop: `1px solid ${C.border}` }}
            >
              <span
                className="text-[11px]"
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  color: C.muted,
                }}
              >
                <span style={{ color: C.green }}>©</span>{" "}
                {new Date().getFullYear()} Tirth Patel
              </span>
              <span
                className="text-[11px]"
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  color: C.dim,
                }}
              >
                Built with Node.js thinking, not Figma.
              </span>
            </footer>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
