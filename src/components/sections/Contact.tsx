import { useState, useRef } from "react";
import { C } from "@/lib/portfolioData";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "sent" | "error";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [cooldown, setCooldown] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    if (cooldown > 0) return;

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: name, from_email: email, message },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");

      // 60s cooldown after successful send — prevents spam
      setCooldown(60);
      const timer = setInterval(() => {
        setCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    background: C.surface,
    border: `1px solid ${C.border}`,
    borderRadius: 4,
    color: C.text,
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 12.5,
    outline: "none",
    width: "100%",
    padding: "10px 14px",
    transition: "border-color 0.15s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 10,
    color: C.muted,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: 6,
  };

  const isBlocked = status === "sending" || cooldown > 0;

  const btnLabel =
    status === "sending"
      ? "Sending..."
      : cooldown > 0
        ? `Wait ${cooldown}s to send again`
        : "Send Message →";

  return (
    <section
      id="contact"
      className="w-full max-w-5xl mx-auto px-4 md:px-8 py-14 md:py-20"
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
          reach out
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
        Contact
      </h2>
      <p
        className="text-[12.5px] mb-10"
        style={{ fontFamily: "'JetBrains Mono',monospace", color: C.muted }}
      >
        Open to backend roles. Drop a message or reach out directly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* ── LEFT: Form ── */}
        <div>
          <p
            className="text-[11px] tracking-widest uppercase mb-5"
            style={{ fontFamily: "'JetBrains Mono',monospace", color: C.muted }}
          >
            Send a message
          </p>

          {status === "sent" ? (
            <div
              className="p-6 rounded text-center"
              style={{
                border: `1px solid ${C.greenDim}`,
                background: `${C.green}0a`,
              }}
            >
              <div className="text-2xl mb-2">✓</div>
              <p
                className="text-[13px] font-semibold"
                style={{ fontFamily: "'Oxanium',sans-serif", color: C.green }}
              >
                Message sent!
              </p>
              <p
                className="text-[12px] mt-1"
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  color: C.muted,
                }}
              >
                I'll get back to you soon.
              </p>
              {cooldown > 0 ? (
                <p
                  className="text-[11px] mt-3"
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    color: C.muted,
                  }}
                >
                  Send another in {cooldown}s
                </p>
              ) : (
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-[11px] underline cursor-pointer"
                  style={{
                    background: "none",
                    border: "none",
                    color: C.muted,
                    fontFamily: "'JetBrains Mono',monospace",
                  }}
                >
                  Send another
                </button>
              )}
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <div>
                <label style={labelStyle}>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = C.green)}
                  onBlur={(e) => (e.target.style.borderColor = C.border)}
                />
              </div>

              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = C.green)}
                  onBlur={(e) => (e.target.style.borderColor = C.border)}
                />
              </div>

              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about the role or project..."
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                  onFocus={(e) => (e.target.style.borderColor = C.green)}
                  onBlur={(e) => (e.target.style.borderColor = C.border)}
                />
              </div>

              {status === "error" && (
                <p
                  className="text-[12px]"
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    color: C.red,
                  }}
                >
                  Something went wrong. Try LinkedIn instead.
                </p>
              )}

              <button
                type="submit"
                disabled={isBlocked}
                style={{
                  background: isBlocked ? C.dim : C.green,
                  color: isBlocked ? C.muted : C.bg,
                  border: "none",
                  borderRadius: 4,
                  padding: "11px 24px",
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: isBlocked ? "not-allowed" : "pointer",
                  transition: "all 0.2s",
                  width: "100%",
                  letterSpacing: "0.03em",
                }}
              >
                {btnLabel}
              </button>
            </form>
          )}
        </div>

        {/* ── RIGHT: Links + info ── */}
        <div className="flex flex-col gap-6">
          <div>
            <p
              className="text-[11px] tracking-widest uppercase mb-4"
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                color: C.muted,
              }}
            >
              Or reach out directly
            </p>
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: "in",
                  label: "LinkedIn",
                  sub: "linkedin.com/in/tirth-k-patel",
                  href: "https://linkedin.com/in/tirth-k-patel",
                  color: C.blue,
                },
                {
                  icon: "gh",
                  label: "GitHub",
                  sub: "github.com/TirthWillLearn",
                  href: "https://github.com/TirthWillLearn",
                  color: C.green,
                },
              ].map(({ icon, label, sub, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card flex items-center justify-between p-4 rounded"
                  style={{
                    border: `1px solid ${C.border}`,
                    background: C.surface,
                    textDecoration: "none",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded flex items-center justify-center text-[11px] font-bold shrink-0"
                      style={{
                        border: `1px solid ${C.border}`,
                        color,
                        fontFamily: "'Oxanium',sans-serif",
                      }}
                    >
                      {icon}
                    </div>
                    <div>
                      <div
                        className="text-[13px] font-semibold"
                        style={{
                          fontFamily: "'Oxanium',sans-serif",
                          color: "#fff",
                        }}
                      >
                        {label}
                      </div>
                      <div
                        className="text-[11px] mt-0.5"
                        style={{
                          fontFamily: "'JetBrains Mono',monospace",
                          color: C.muted,
                        }}
                      >
                        {sub}
                      </div>
                    </div>
                  </div>
                  <span style={{ color, fontSize: 16 }}>↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick info */}
          <div
            className="rounded p-5"
            style={{ border: `1px solid ${C.border}`, background: C.surface }}
          >
            <div
              className="text-[10px] tracking-widest uppercase mb-4"
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                color: C.muted,
              }}
            >
              Quick Info
            </div>
            {[
              ["📍", "Mumbai, India · open to relocation"],
              ["⏱", "Immediate joiner · Full-time only"],
              ["🎓", "BCA · Hinduja College Mumbai (2024)"],
            ].map(([icon, text]) => (
              <div
                key={text as string}
                className="flex gap-3 mb-2.5 text-[12.5px]"
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  color: `${C.text}88`,
                }}
              >
                <span>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 mt-3">
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: C.green,
                  boxShadow: `0 0 6px ${C.green}`,
                  animation: "pulse 2s infinite",
                }}
              />
              <span
                className="text-[12px]"
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  color: C.green,
                }}
              >
                Currently available
              </span>
            </div>
          </div>

          {/* Terminal closer */}
          <div
            className="text-[12px]"
            style={{ fontFamily: "'JetBrains Mono',monospace", color: C.muted }}
          >
            <span style={{ color: C.green }}>$ </span>
            curl -X POST /api/hire/tirth{" "}
            <span
              style={{ color: C.amber }}
            >{`--data '{"role":"Backend Developer"}'`}</span>
            <span className="cursor" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
