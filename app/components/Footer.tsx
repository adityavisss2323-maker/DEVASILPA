import Link from "next/link";

const PAGES = [
  { href: "/",             label: "Home" },
  { href: "/collections",  label: "Collection" },
  { href: "/about",        label: "Heritage" },
  { href: "/custom-order", label: "Commission" },
  { href: "/contact",      label: "Contact" },
];
const POLICIES = [
  { href: "/shipping-policy", label: "Shipping Policy" },
  { href: "/privacy-policy",  label: "Privacy Policy" },
  { href: "/terms",           label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--gold-line)",
        color: "var(--text-2)",
      }}
    >
      {/* Brand statement */}
      <div
        className="section-x"
        style={{
          paddingTop: "clamp(56px, 7vw, 100px)",
          paddingBottom: "clamp(44px, 5vw, 68px)",
          borderBottom: "1px solid var(--gold-line)",
        }}
      >
        <span className="label" style={{ display: "block", marginBottom: 28 }}>Devashilpa</span>
        <p
          className="font-display"
          style={{
            fontSize: "clamp(1.6rem, 3vw, 3rem)",
            fontWeight: 300,
            lineHeight: 1.3,
            color: "#F5EDD8",
            maxWidth: 680,
          }}
        >
          Preserving inherited Indian metal craftsmanship — one handcrafted masterpiece at a time.
        </p>
      </div>

      {/* Links grid */}
      <div
        className="section-x"
        style={{
          paddingTop: "clamp(40px, 5vw, 68px)",
          paddingBottom: "clamp(40px, 5vw, 68px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "clamp(32px, 4vw, 56px)",
          borderBottom: "1px solid var(--gold-line)",
        }}
      >
        {/* Explore */}
        <div>
          <p className="label-muted" style={{ marginBottom: 24 }}>Explore</p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
            {PAGES.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} style={{ fontSize: "0.85rem", color: "var(--text-2)", textDecoration: "none", transition: "color 0.25s" }} className="hover-gold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div>
          <p className="label-muted" style={{ marginBottom: 24 }}>Information</p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
            {POLICIES.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} style={{ fontSize: "0.85rem", color: "var(--text-2)", textDecoration: "none", transition: "color 0.25s" }} className="hover-gold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="label-muted" style={{ marginBottom: 24 }}>Contact</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <p style={{ fontSize: "0.85rem", color: "var(--text-2)", lineHeight: 1.5 }}>Shajapur, Madhya Pradesh, India</p>
            <a href="tel:+916261068277" style={{ fontSize: "0.85rem", color: "var(--text-2)", textDecoration: "none", transition: "color 0.25s" }} className="hover-gold">+91 6261068277</a>
            <a href="mailto:adityavisss.2323@gmail.com" style={{ fontSize: "0.85rem", color: "var(--text-2)", textDecoration: "none", transition: "color 0.25s", wordBreak: "break-all" }} className="hover-gold">adityavisss.2323@gmail.com</a>
          </div>
        </div>

        {/* Delivery */}
        <div>
          <p className="label-muted" style={{ marginBottom: 24 }}>Delivery</p>
          <div style={{ border: "1px solid var(--gold-line)", padding: "20px", marginBottom: 20 }}>
            <span className="label" style={{ display: "block", marginBottom: 10 }}>Worldwide</span>
            <p style={{ fontSize: "0.82rem", color: "var(--text-2)", lineHeight: 1.7 }}>
              Secure export-grade packaging. International shipping to all countries.
            </p>
          </div>
          <a
            href="https://wa.me/916261068277"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-gold"
            style={{ fontSize: "0.55rem", padding: "10px 18px" }}
          >
            WhatsApp Inquiry
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="section-x"
        style={{
          paddingTop: 24,
          paddingBottom: 24,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <p style={{ fontSize: "0.72rem", color: "var(--text-4)" }}>
          © {new Date().getFullYear()} Devashilpa. All Rights Reserved.
        </p>
        <p style={{ fontSize: "0.72rem", color: "var(--text-4)" }}>
          Handcrafted in Shajapur, Madhya Pradesh, India
        </p>
      </div>
    </footer>
  );
}