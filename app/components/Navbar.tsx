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

  const linkStyle = (href: string) => ({
    fontSize: "11px",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    fontWeight: 400,
    textDecoration: "none",
    /* On hero (transparent nav) links stay ivory; once scrolled use charcoal */
    color: scrolled
      ? (pathname === href ? "var(--text)" : "var(--text-3)")
      : (pathname === href ? "var(--overlay-text)" : "rgba(247,245,240,0.7)"),
    transition: "color 0.35s",
    whiteSpace: "nowrap" as const,
  });

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          height: "var(--nav-h)",
          display: "flex",
          alignItems: "center",
          padding: "0 var(--gutter)",
          transition: "background 0.7s var(--ease-smooth), border-color 0.7s var(--ease-smooth)",
          /* Transparent on hero (page starts with image), frosted ivory once scrolled */
          background: scrolled ? "rgba(250,248,245,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(163,128,71,0.12)" : "1px solid transparent",
        }}
      >
        {/* ── Logo (left, flex: 1) ── */}
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <Link
            href="/"
            style={{
              fontSize: "11px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              /* Ivory on hero image, charcoal once scrolled */
              color: scrolled ? "var(--text)" : "var(--overlay-text)",
              fontWeight: 400,
              textDecoration: "none",
              transition: "color 0.35s",
            }}
          >
            Devashilpa
          </Link>
        </div>

        {/* ── Centre nav links — desktop only ── */}
        <nav
          className="hidden md:flex"
          style={{
            flex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(24px, 4vw, 56px)",
          }}
          aria-label="Primary navigation"
        >
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="underline-anim"
              style={linkStyle(href)}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* ── Right slot: Inquire (desktop) | Hamburger (mobile) ── */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
          {/* Inquire — desktop only */}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-anim hidden md:inline-block"
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: scrolled ? "var(--text)" : "var(--overlay-text)",
              textDecoration: "none",
              transition: "color 0.35s",
            }}
          >
            Inquire
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: scrolled ? "var(--text)" : "var(--overlay-text)",
              padding: 4,
              display: "flex",
              transition: "color 0.35s",
            }}
          >
            {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* ── Mobile full-screen menu overlay — ivory drawer ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 90,
          background: "var(--bg)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.5s var(--ease-luxury)",
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
              fontSize: "clamp(36px, 9vw, 64px)",
              fontWeight: 300,
              color: pathname === href ? "var(--gold)" : "var(--text)",
              textDecoration: "none",
              textAlign: "center",
              transition: "color 0.3s, opacity 0.5s var(--ease-luxury), transform 0.5s var(--ease-luxury)",
              transitionDelay: `${0.05 + i * 0.05}s`,
              width: "min(80vw, 380px)",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {label}
          </Link>
        ))}

        <div
          style={{
            marginTop: 56,
            opacity: open ? 1 : 0,
            transition: "opacity 0.5s 0.35s, transform 0.5s 0.35s var(--ease-luxury)",
            transform: open ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-anim"
            style={{
              fontSize: "12px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold)",
              textDecoration: "none",
            }}
          >
            Inquire Directly
          </a>
        </div>
      </div>
    </>
  );
}