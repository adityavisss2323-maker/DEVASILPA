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
          justifyContent: "space-between",
          padding: "0 var(--gutter)",
          transition: "background 0.8s var(--ease-smooth), border-color 0.8s var(--ease-smooth)",
          background: scrolled ? "rgba(0,0,0,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "11px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--text)",
            fontWeight: 400,
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          className="hover:text-gold"
        >
          Devashilpa
        </Link>

        <nav
          className="hidden md:flex"
          style={{ gap: 56, position: "absolute", left: "50%", transform: "translateX(-50%)" }}
          aria-label="Primary navigation"
        >
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="underline-anim"
              style={{
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 400,
                textDecoration: "none",
                color: pathname === href ? "var(--text)" : "var(--text-3)",
                transition: "color 0.3s",
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-anim"
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--text)",
              textDecoration: "none",
            }}
          >
            Inquire
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text)", padding: 4, display: "flex" }}
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </header>

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 90,
          background: "var(--black)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.6s var(--ease-luxury)",
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
              padding: "24px 0",
              fontSize: "clamp(40px, 9vw, 64px)",
              fontWeight: 300,
              color: pathname === href ? "var(--gold)" : "var(--text)",
              textDecoration: "none",
              textAlign: "center",
              transition: "color 0.3s, opacity 0.6s var(--ease-luxury), transform 0.6s var(--ease-luxury)",
              transitionDelay: `${0.05 + i * 0.05}s`,
              width: "min(80vw, 380px)",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(24px)",
            }}
          >
            {label}
          </Link>
        ))}

        <div style={{ marginTop: 80, opacity: open ? 1 : 0, transition: "opacity 0.6s 0.4s", transform: open ? "translateY(0)" : "translateY(24px)" }}>
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