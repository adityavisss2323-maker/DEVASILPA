import Link from "next/link";

const LINKS = [
  { href: "/",             label: "Home" },
  { href: "/collections",  label: "Collection" },
  { href: "/about",        label: "Heritage" },
  { href: "/custom-order", label: "Commission" },
  { href: "/contact",      label: "Contact" },
  { href: "/shipping",     label: "Shipping" },
  { href: "/privacy",      label: "Privacy" },
  { href: "/terms",        label: "Terms" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--black)",
        color: "var(--text-3)",
      }}
    >
      <div
        className="section-x"
        style={{
          paddingTop: "clamp(120px, 15vw, 200px)",
          paddingBottom: "clamp(60px, 8vw, 100px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "14px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--text)",
            marginBottom: 80,
            display: "block",
          }}
        >
          Devashilpa
        </Link>

        {/* Minimal single column of understated links */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "32px 48px", maxWidth: 700, marginBottom: 80 }}>
          {LINKS.map(({ href, label }) => (
            <Link 
              key={href} 
              href={href} 
              className="underline-anim"
              style={{ 
                fontSize: "11px", 
                letterSpacing: "0.2em", 
                textTransform: "uppercase", 
                color: "var(--text-2)" 
              }}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://wa.me/916261068277"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-anim"
            style={{ 
              fontSize: "11px", 
              letterSpacing: "0.2em", 
              textTransform: "uppercase", 
              color: "var(--gold)" 
            }}
          >
            Inquire
          </a>
        </div>

        <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-4)" }}>
          © {new Date().getFullYear()} Devashilpa. Handcrafted in India.
        </p>
      </div>
    </footer>
  );
}