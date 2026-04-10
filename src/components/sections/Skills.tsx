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

    {/* stack.json — bigger block */}
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
        <span
          className="ml-auto text-[10px]"
          style={{ fontFamily: "'JetBrains Mono',monospace", color: C.muted }}
        >
          {Object.keys(STACK_JSON).length} categories ·{" "}
          {Object.values(STACK_JSON).flat().length} technologies
        </span>
      </div>
      <div
        className="p-5 overflow-x-auto"
        style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: 12.5,
          lineHeight: 2,
        }}
      >
        <div style={{ color: `${C.text}66` }}>{"{"}</div>
        {Object.entries(STACK_JSON).map(([key, vals], i, arr) => (
          <div key={key} className="pl-6 flex flex-wrap items-baseline gap-0">
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

    {/* Concepts */}
    <div
      className="text-[11px] tracking-widest uppercase mb-4"
      style={{ fontFamily: "'JetBrains Mono',monospace", color: C.muted }}
    >
      <span style={{ color: C.green }}>{"// "}</span>
      concepts i've actually used — not just read about
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
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

    {/* Currently levelling up — replaced "studying" with a proper section */}
    <div
      className="rounded-lg overflow-hidden"
      style={{ border: `1px solid ${C.border}`, background: C.surface }}
    >
      <div
        className="px-5 py-3"
        style={{
          borderBottom: `1px solid ${C.border}`,
          background: `${C.surface}cc`,
        }}
      >
        <span
          className="text-[11px] tracking-widest uppercase"
          style={{ fontFamily: "'JetBrains Mono',monospace", color: C.green }}
        >
          {"// "}
          <span style={{ color: C.muted }}>currently levelling up</span>
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {[
          {
            area: "System Design",
            items: [
              "Horizontal scaling",
              "Load balancing",
              "Database sharding",
              "Caching strategies",
              "CAP theorem",
            ],
            status: "active",
          },
          {
            area: "DSA in Java",
            items: [
              "Arrays & Hash Maps",
              "Two Pointers",
              "Sliding Window",
              "Binary Search",
              "Trees & Graphs",
            ],
            status: "active",
          },
          {
            area: "PostgreSQL Internals",
            items: [
              "MVCC & isolation levels",
              "Index types (B-tree, GIN)",
              "Query planner",
              "WAL & replication",
              "Partitioning",
            ],
            status: "active",
          },
        ].map((block, i, arr) => (
          <div
            key={block.area}
            className="p-5"
            style={{
              borderRight:
                i < arr.length - 1 ? `1px solid ${C.border}` : "none",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: C.green, boxShadow: `0 0 4px ${C.green}` }}
              />
              <span
                className="text-[12px] font-semibold"
                style={{ fontFamily: "'Oxanium',sans-serif", color: "#fff" }}
              >
                {block.area}
              </span>
            </div>
            <ul className="space-y-1.5">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="text-[11px] flex items-center gap-2"
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    color: C.muted,
                  }}
                >
                  <span style={{ color: C.dim }}>›</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
