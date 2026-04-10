import { C } from "@/lib/portfolioData";
import SectionWrapper from "@/components/Layouts/SectionWrapper";

const INFO = [
  { k: "Education", v: "BCA — Hinduja College, Mumbai (2024)" },
  {
    k: "University",
    v: "YCMOU (Yashwantrao Chavan Maharashtra Open University)",
  },
  { k: "Location", v: "Mumbai, India (Borivali / Naigaon area)" },
  { k: "Status", v: "Fresher · Immediate joiner · Open to relocation" },
  { k: "Preference", v: "Full-time · Backend Developer · Node.js Developer" },
  {
    k: "Interests",
    v: "Backend Systems · Cloud Computing · AWS · Open Source",
  },
];

const BIO = [
  "I'm a self-taught backend developer from Mumbai. I build reliable, performant server-side systems — not UIs. My focus is on what happens after the request hits the server.",
  "I found backend development on my own after a long, winding path through college. Once I found it, I went deep — built real projects from scratch, broke things intentionally, and figured out why they broke. SQL transactions, row-level locking, RBAC, Redis, Docker — none of it was copy-pasted. Every piece was understood before it was written.",
  "I haven't shipped to millions of users yet. But every decision in my projects — from database indexing to error handling to auth middleware — reflects how I actually think about building backend systems. Data consistency first. Security at the boundary. Clean architecture throughout.",
  "I'm actively looking for my first full-time backend role where I can grow fast, contribute meaningfully, and work with engineers I can learn from.",
];

const About = () => (
  <SectionWrapper id="about">
    {/* Label */}
    <div className="flex items-center gap-3 mb-8">
      <span className="text-[11px]" style={{ color: C.green }}>
        {"// "}
      </span>
      <span
        className="text-[11px] tracking-widest uppercase"
        style={{ color: C.muted }}
      >
        readme.md
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
      About Me
    </h2>

    {/* Bio */}
    <div className="flex flex-col gap-3 mb-10">
      {BIO.map((para, i) => (
        <p
          key={i}
          className="text-[13px] leading-loose"
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            color: `${C.text}88`,
          }}
        >
          {i === 0 && <span style={{ color: C.dim }}>{"// "}</span>}
          {para}
        </p>
      ))}
    </div>

    {/* Info grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {INFO.map(({ k, v }) => (
        <div
          key={k}
          className="rounded-md p-4"
          style={{ border: `1px solid ${C.border}`, background: C.surface }}
        >
          <div
            className="text-[10px] tracking-widest uppercase mb-1.5"
            style={{ color: C.muted }}
          >
            {k}
          </div>
          <div
            className="text-[12px]"
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              color: `${C.text}cc`,
            }}
          >
            {v}
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default About;
