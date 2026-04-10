import { C, STACK_JSON, CONCEPTS } from "@/lib/portfolioData";

const Skills = () => (
  <section
    id="skills"
    className="w-full max-w-5xl mx-auto px-4 md:px-8 py-14 md:py-20"
    style={{ borderTop: `1px solid ${C.border}` }}
  >
    {/* Label */}
    <div className="flex items-center gap-3 mb-8">
      <span className="text-[11px]" style={{ color: C.green }}>
        {"// "}
      </span>
      <span
        className="text-[11px] tracking-widest uppercase"
        style={{ color: C.muted }}
      >
        technical profile
      </span>
      <span
        className="flex-1 h-px max-w-[80px]"
        style={{ background: C.border }}
      />
    </div>

    <h2
      className="text-3xl font-bold mb-8"
      style={{ fontFamily: "'Oxanium',sans-serif", color: "#fff" }}
    >
      Stack & Skills
    </h2>

    {/* stack.json block */}
    <div
      className="rounded-lg overflow-hidden mb-9"
      style={{ background: C.surface, border: `1px solid ${C.border}` }}
    >
      <div
        className="flex items-center gap-2 px-4 py-2.5"
        style={{
          borderBottom: `1px solid ${C.border}`,
          background: `${C.surface}cc`,
        }}
      >
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ background: "#ff5f57" }}
        />
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ background: "#febc2e" }}
        />
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ background: "#28c840" }}
        />
        <span
          className="ml-2 text-[11px]"
          style={{ fontFamily: "'JetBrains Mono',monospace", color: C.muted }}
        >
          stack.json
        </span>
      </div>
      <div
        className="p-5 overflow-x-auto leading-loose text-[12.5px]"
        style={{ fontFamily: "'JetBrains Mono',monospace" }}
      >
        <div style={{ color: `${C.text}66` }}>{"{"}</div>
        {Object.entries(STACK_JSON).map(([key, vals], i, arr) => (
          <div key={key} className="pl-6">
            <span style={{ color: C.blue }}>"{key}"</span>
            <span style={{ color: `${C.text}55` }}>: [</span>
            {vals.map((v, j) => (
              <span key={v}>
                <span style={{ color: C.amber }}>"{v}"</span>
                {j < vals.length - 1 && (
                  <span style={{ color: C.muted }}>, </span>
                )}
              </span>
            ))}
            <span style={{ color: `${C.text}55` }}>]</span>
            {i < arr.length - 1 && <span style={{ color: C.muted }}>,</span>}
          </div>
        ))}
        <div style={{ color: `${C.text}66` }}>{"}"}</div>
      </div>
    </div>

    {/* Concepts label */}
    <div
      className="text-[11px] tracking-widest uppercase mb-4"
      style={{ fontFamily: "'JetBrains Mono',monospace", color: C.muted }}
    >
      <span style={{ color: C.green }}>{"// "}</span>
      concepts i've actually used — not just read about
    </div>

    {/* Concept cards: 1 col mobile, 2 col md+ */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {CONCEPTS.map((c) => (
        <div
          key={c.title}
          className="concept-card rounded p-4"
          style={{ border: `1px solid ${C.border}` }}
        >
          <h4
            className="text-[13px] font-semibold mb-1.5"
            style={{ fontFamily: "'Oxanium',sans-serif", color: "#fff" }}
          >
            {c.title}
          </h4>
          <p
            className="text-[12px] leading-relaxed"
            style={{ fontFamily: "'JetBrains Mono',monospace", color: C.muted }}
          >
            {c.body}
          </p>
        </div>
      ))}
    </div>

    {/* Learning note */}
    <div
      className="mt-5 p-4 rounded"
      style={{ border: `1px solid ${C.border}` }}
    >
      <p
        className="text-[12.5px] leading-relaxed"
        style={{ fontFamily: "'JetBrains Mono',monospace", color: C.muted }}
      >
        <span style={{ color: C.green }}>{"// "}</span>
        Currently studying:{" "}
        <span style={{ color: `${C.text}88` }}>
          System Design (Alex Xu), DSA in Java, PostgreSQL internals. Bias
          toward understanding{" "}
        </span>
        <span style={{ color: C.amber }}>why</span>
        <span style={{ color: `${C.text}88` }}> before </span>
        <span style={{ color: C.amber }}>how</span>
        <span style={{ color: `${C.text}88` }}>.</span>
      </p>
    </div>
  </section>
);

export default Skills;
