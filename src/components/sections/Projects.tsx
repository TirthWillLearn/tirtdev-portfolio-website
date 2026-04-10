import { C, PROJECTS, METHOD_COLORS, HttpMethod } from "@/lib/portfolioData";

const Projects = () => (
  <section
    id="projects"
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
        proof of work
      </span>
      <span
        className="flex-1 h-px max-w-[80px]"
        style={{ background: C.border }}
      />
    </div>

    <h2
      className="text-3xl font-bold mb-2"
      style={{ fontFamily: "'Oxanium',sans-serif", color: "#fff" }}
    >
      Projects
    </h2>
    <p
      className="text-[12.5px] mb-10"
      style={{ fontFamily: "'JetBrains Mono',monospace", color: C.muted }}
    >
      Backend APIs with real architecture decisions — not just a list of
      technologies.
    </p>

    <div className="flex flex-col gap-6">
      {PROJECTS.map((p) => (
        <div
          key={p.file}
          className="project-card rounded-lg overflow-hidden"
          style={{ border: `1px solid ${C.border}`, background: C.surface }}
        >
          {/* Card header: stack on mobile, row on md+ */}
          <div
            className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 p-5 md:p-6"
            style={{ borderBottom: `1px solid ${C.border}` }}
          >
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span
                  className="text-[11px]"
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    color: C.muted,
                  }}
                >
                  {p.file}
                </span>
                {p.tag && (
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-sm tracking-wider"
                    style={{
                      border: `1px solid ${C.greenDim}`,
                      color: C.green,
                    }}
                  >
                    {p.tag}
                  </span>
                )}
              </div>
              <h3
                className="text-base font-semibold mb-2"
                style={{ fontFamily: "'Oxanium',sans-serif", color: "#fff" }}
              >
                {p.title}
              </h3>
              <p
                className="text-[12px] leading-relaxed"
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  color: C.muted,
                  maxWidth: 520,
                }}
              >
                {p.desc}
              </p>
            </div>
            {/* Buttons */}
            <div className="flex gap-2 shrink-0">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded text-[11px] transition-all"
                style={{
                  border: `1px solid ${C.border}`,
                  color: C.muted,
                  fontFamily: "'JetBrains Mono',monospace",
                  textDecoration: "none",
                }}
              >
                Code ↗
              </a>
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded text-[11px] font-bold"
                  style={{
                    background: C.green,
                    color: C.bg,
                    fontFamily: "'JetBrains Mono',monospace",
                    textDecoration: "none",
                  }}
                >
                  Live ↗
                </a>
              )}
            </div>
          </div>

          {/* Endpoints */}
          <div
            className="px-5 md:px-6 py-4"
            style={{ borderBottom: `1px solid ${C.border}` }}
          >
            <div
              className="text-[10px] tracking-widest uppercase mb-3"
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                color: C.muted,
              }}
            >
              API Routes
            </div>
            {p.endpoints.map((ep, i) => (
              <div
                key={i}
                className="flex items-center gap-3 py-1.5"
                style={{
                  borderBottom: `1px solid ${C.bg}`,
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 12,
                }}
              >
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-sm text-center shrink-0"
                  style={{
                    ...METHOD_COLORS[ep.m as HttpMethod],
                    minWidth: 52,
                    letterSpacing: "0.06em",
                  }}
                >
                  {ep.m}
                </span>
                <span
                  className="flex-1 truncate"
                  style={{ color: `${C.text}88` }}
                >
                  {ep.r}
                </span>
                {/* Route note: hidden on mobile, visible on md+ */}
                <span
                  className="hidden md:block text-[11px] shrink-0"
                  style={{ color: C.muted }}
                >
                  {ep.n}
                </span>
              </div>
            ))}
          </div>

          {/* Arch note */}
          <div className="px-5 md:px-6 py-4">
            <div
              className="text-[10px] tracking-widest uppercase mb-2"
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                color: C.muted,
              }}
            >
              Architecture Note
            </div>
            <p
              className="text-[12px] leading-relaxed pl-4"
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                color: C.muted,
                borderLeft: `2px solid ${C.blue}44`,
              }}
            >
              {p.arch}
            </p>
          </div>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-2 px-5 md:px-6 pb-5">
            {p.stack.map((s) => (
              <span
                key={s}
                className="px-2.5 py-1 rounded text-[11px]"
                style={{
                  border: `1px solid ${C.border}`,
                  color: C.muted,
                  fontFamily: "'JetBrains Mono',monospace",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* GitHub CTA */}
    <div
      className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-5 rounded-md"
      style={{ border: `1px solid ${C.border}`, background: C.surface }}
    >
      <div>
        <div
          className="text-[12px] mb-1"
          style={{ fontFamily: "'JetBrains Mono',monospace", color: C.green }}
        >
          $ git log --oneline --all
        </div>
        <div
          className="text-[12px]"
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            color: `${C.text}77`,
          }}
        >
          More work-in-progress on GitHub
        </div>
      </div>
      <a
        href="https://github.com/TirthWillLearn"
        target="_blank"
        rel="noreferrer"
        className="px-4 py-2 rounded text-[12px] shrink-0"
        style={{
          border: `1px solid ${C.border}`,
          color: C.muted,
          fontFamily: "'JetBrains Mono',monospace",
          textDecoration: "none",
        }}
      >
        github.com/TirthWillLearn ↗
      </a>
    </div>
  </section>
);

export default Projects;
