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
  { k: "Target CTC", v: "₹3 – 4.8 LPA" },
  { k: "Role", v: "Backend Developer · Node.js Developer" },
];

const BIO = [
  "I'm a self-taught backend developer based in Mumbai. My focus is building reliable, performant APIs — not flashy UIs.",
  "I discovered backend development on my own after a winding path through college. Once I found it, I went deep: built projects from scratch, understood SQL transactions, row-level locking, RBAC, Redis — not by copy-pasting but by actually breaking things and figuring out why.",
  "I'm a fresher, which means I haven't shipped to millions of users yet. But every project I've built reflects how I actually think about backend systems — data consistency, security boundaries, and clean architecture.",
  "Currently studying system design seriously (reading Alex Xu), practising DSA in Java, and looking for my first backend role where I can keep growing fast.",
];

const About = () => (
  <SectionWrapper id="about">
    {/* Section label */}
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

    {/* Info grid: 1 col mobile, 2 col md+ */}
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
