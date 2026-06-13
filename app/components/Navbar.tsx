"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/",            label: "Home" },
  { href: "/collections", label: "Collection" },
  { href: "/about",       label: "Heritage" },
  { href: "/custom-order",label: "Commission" },
  { href: "/contact",     label: "Contact" },
];

const WA = "https://wa.me/916261068277";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    height: "var(--nav-h)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 var(--gutter)",
    transition: "background 0.5s ease, border-bottom 0.5s ease",
    background: scrolled ? "rgba(8,6,4,0.94)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(200,169,110,0.12)" : "1px solid transparent",
  };

  return (
    <>
      <header style={navStyle}>
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.42em",
            textTransform: "uppercase",
            color: "#C8A96E",
            fontWeight: 500,
            transition: "opacity 0.3s",
            textDecoration: "none",
          }}
          className="hover:opacity-60"
        >
          DEVASHILPA
        </Link>

        {/* Desktop nav — centre */}
        <nav className="hidden md:flex" style={{ gap: 36 }} aria-label="Main navigation">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                fontWeight: 400,
                textDecoration: "none",
                color: pathname === href ? "#C8A96E" : "#C9BFA8",
                transition: "color 0.3s",
              }}
              className={pathname !== href ? "hover:text-[#F2EBD9]" : ""}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop right — Inquire */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "#C8A96E",
              border: "1px solid rgba(200,169,110,0.35)",
              padding: "8px 20px",
              textDecoration: "none",
              transition: "all 0.35s",
              whiteSpace: "nowrap",
            }}
            className="hover:bg-[#C8A96E] hover:text-black hover:border-[#C8A96E]"
          >
            Inquire
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          style={{ color: "#C9BFA8", background: "none", border: "none", cursor: "pointer", padding: 4 }}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      {/* ── Mobile overlay ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 90,
          background: "#080604",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 0,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
        aria-hidden={!open}
      >
        {NAV.map(({ href, label }, i) => (
          <Link
            key={href}
            href={href}
            className="font-display"
            style={{
              display: "block",
              padding: "20px 0",
              fontSize: "clamp(2.2rem, 8vw, 3.5rem)",
              fontWeight: 300,
              color: pathname === href ? "#C8A96E" : "#F2EBD9",
              textDecoration: "none",
              textAlign: "center",
              transition: "color 0.25s",
              borderBottom: i < NAV.length - 1 ? "1px solid rgba(200,169,110,0.1)" : "none",
              width: "min(80vw, 400px)",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(16px)",
              transitionDelay: open ? `${i * 0.07}s` : "0s",
              transitionProperty: "opacity, transform, color",
            }}
          >
            {label}
          </Link>
        ))}

        <div style={{ marginTop: 48 }}>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ opacity: open ? 1 : 0, transition: "opacity 0.3s 0.4s" }}
          >
            WhatsApp Inquiry
          </a>
        </div>
      </div>
    </>
  );
}