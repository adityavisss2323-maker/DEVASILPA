"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/",             label: "Home" },
  { href: "/collections",  label: "Collection" },
  { href: "/about",        label: "Heritage" },
  { href: "/custom-order", label: "Commission" },
  { href: "/contact",      label: "Contact" },
];

const WA = "https://wa.me/916261068277";

export default function Navbar() {
  const pathname = usePathname();
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Header ── */}
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          height: "var(--nav-h)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 var(--gutter)",
          transition: "background 0.55s ease, backdrop-filter 0.55s ease, border-bottom 0.55s ease",
          background: scrolled ? "rgba(8,6,4,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid var(--gold-line)" : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.44em",
            textTransform: "uppercase",
            color: "#D4AF6A",
            fontWeight: 500,
            transition: "opacity 0.3s",
            textDecoration: "none",
          }}
          className="hover:opacity-60"
        >
          DEVASHILPA
        </Link>

        {/* Desktop nav — centred */}
        <nav
          className="hidden md:flex"
          style={{ gap: 38, position: "absolute", left: "50%", transform: "translateX(-50%)" }}
          aria-label="Primary navigation"
        >
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontSize: "0.58rem",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                fontWeight: 400,
                textDecoration: "none",
                color: pathname === href ? "#D4AF6A" : "#C8BAA0",
                transition: "color 0.3s",
                whiteSpace: "nowrap",
              }}
              className={pathname !== href ? "hover:text-[#F5EDD8]" : ""}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.58rem",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "#D4AF6A",
              border: "1px solid rgba(212,175,106,0.32)",
              padding: "9px 22px",
              textDecoration: "none",
              transition: "all 0.35s",
              whiteSpace: "nowrap",
            }}
            className="hover:bg-[#D4AF6A] hover:text-black hover:border-[#D4AF6A]"
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
          style={{ background: "none", border: "none", cursor: "pointer", color: "#C8BAA0", padding: 4, display: "flex" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* ── Mobile full-screen overlay ── */}
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
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
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
              padding: "18px 0",
              fontSize: "clamp(2.2rem, 9vw, 3.8rem)",
              fontWeight: 300,
              color: pathname === href ? "#D4AF6A" : "#F5EDD8",
              textDecoration: "none",
              textAlign: "center",
              transition: "color 0.25s, opacity 0.45s, transform 0.45s",
              transitionDelay: `${0.05 + i * 0.07}s`,
              borderBottom: i < NAV.length - 1 ? "1px solid rgba(212,175,106,0.1)" : "none",
              width: "min(80vw, 380px)",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(18px)",
            }}
          >
            {label}
          </Link>
        ))}

        <div style={{ marginTop: 52, opacity: open ? 1 : 0, transition: "opacity 0.35s 0.45s" }}>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-gold"
          >
            WhatsApp Inquiry
          </a>
        </div>
      </div>
    </>
  );
}