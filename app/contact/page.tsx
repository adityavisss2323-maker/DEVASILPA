import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Reveal } from "@/app/components/Animations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Devashilpa",
  description:
    "Contact Devashilpa for handcrafted brass sculpture inquiries, bespoke commissions, and international shipping information.",
  alternates: { canonical: "https://www.devashilpa.com/contact" },
};

const INFO = [
  { label: "Email",              value: "adityavisss.2323@gmail.com", href: "mailto:adityavisss.2323@gmail.com" },
  { label: "Phone / WhatsApp",   value: "+91 6261068277",             href: "tel:+916261068277" },
  { label: "Workshop",           value: "Shajapur, Madhya Pradesh, India", href: null },
  { label: "Worldwide Shipping", value: "Available to all countries — export-grade secure packaging.", href: null },
];

const inputStyle: React.CSSProperties = {
  background: "var(--surface)",
  border: "1px solid var(--gold-line)",
  padding: "14px 16px",
  fontSize: "0.85rem",
  color: "var(--text)",
  outline: "none",
  width: "100%",
  transition: "border-color 0.25s",
  fontFamily: "inherit",
};

export default function ContactPage() {
  return (
    <main style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
      <Navbar />

      {/* ── Header ── */}
      <Reveal>
        <section
          className="section-x"
          style={{
            paddingTop: "calc(var(--nav-h) + clamp(52px, 7vw, 100px))",
            paddingBottom: "clamp(44px, 5vw, 72px)",
            borderBottom: "1px solid var(--gold-line)",
          }}
        >
          <span className="label" style={{ display: "block", marginBottom: 24 }}>Contact Devashilpa</span>
          <h1
            className="font-display"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 6rem)", fontWeight: 300, lineHeight: 1.05, color: "#F5EDD8", maxWidth: 640, marginBottom: 24 }}
          >
            Let&apos;s create something timeless.
          </h1>
          <p style={{ color: "var(--text-2)", fontSize: "0.9rem", lineHeight: 1.85, maxWidth: 460 }}>
            Whether you are enquiring about an existing masterpiece, commissioning a custom sculpture, or arranging international shipping — we are here to help.
          </p>
        </section>
      </Reveal>

      {/* ── Two-column split ── */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          borderBottom: "1px solid var(--gold-line)",
          minHeight: 560,
        }}
        className="max-md:grid-cols-1"
      >
        {/* Left — Form */}
        <div
          className="section-x section-y"
          style={{ borderRight: "1px solid var(--gold-line)" }}
        >
          <span className="label" style={{ display: "block", marginBottom: 32 }}>Send a Message</span>
          <form
            action="mailto:adityavisss.2323@gmail.com"
            method="get"
            style={{ display: "flex", flexDirection: "column", gap: 14 }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="max-sm:grid-cols-1">
              <input name="name" placeholder="Full Name" style={inputStyle} />
              <input name="email" type="email" placeholder="Email Address" style={inputStyle} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="max-sm:grid-cols-1">
              <input name="phone" placeholder="Phone / WhatsApp" style={inputStyle} />
              <input name="country" placeholder="Country" style={inputStyle} />
            </div>
            <textarea
              name="body"
              rows={8}
              placeholder="Your message or inquiry…"
              style={{ ...inputStyle, resize: "none", lineHeight: 1.75 }}
            />
            <button
              type="submit"
              className="btn btn-outline-gold"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right — Contact info */}
        <div className="section-x section-y" style={{ background: "var(--surface)" }}>
          <span className="label" style={{ display: "block", marginBottom: 32 }}>Contact Information</span>

          <div>
            {INFO.map(({ label, value, href }, i) => (
              <div
                key={label}
                style={{
                  padding: "22px 0",
                  borderBottom: i < INFO.length - 1 ? "1px solid var(--gold-line)" : "none",
                }}
              >
                <span className="label-muted" style={{ display: "block", marginBottom: 10 }}>{label}</span>
                {href ? (
                  <a
                    href={href}
                    style={{ fontSize: "0.9rem", color: "var(--text-2)", textDecoration: "none", transition: "color 0.25s" }}
                    className="hover-gold"
                  >
                    {value}
                  </a>
                ) : (
                  <p style={{ fontSize: "0.9rem", color: "var(--text-2)", lineHeight: 1.65 }}>{value}</p>
                )}
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div style={{ marginTop: 36 }}>
            <a
              href="https://wa.me/916261068277"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 14, height: 14, flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
