"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/custom-order", label: "Custom Order" },
  { href: "/contact", label: "Contact" },
];

const WA_URL = "https://wa.me/916261068277";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      {/* ── Main Navbar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#080604]/90 backdrop-blur-xl border-b border-[#D6B15C]/10"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-16 h-[72px]">

          {/* Logo */}
          <Link
            href="/"
            className="luxury-label text-[#D6B15C] hover:opacity-70 transition-opacity duration-300 text-[11px]"
          >
            DEVASHILPA
          </Link>

          {/* Center nav — desktop */}
          <nav className="hidden md:flex items-center gap-9" aria-label="Primary navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  pathname === href
                    ? "text-[#D6B15C]"
                    : "text-[#D8CCB2] hover:text-[#F8F1DF]"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right: WhatsApp CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 border border-[#D6B15C]/35 text-[#D6B15C] text-[10px] uppercase tracking-[0.2em] px-4 py-2 transition-all duration-300 hover:bg-[#D6B15C] hover:text-black hover:border-[#D6B15C]"
              aria-label="WhatsApp Inquiry"
            >
              <MessageCircle size={13} />
              Inquire
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden text-[#D8CCB2] hover:text-[#D6B15C] transition-colors duration-200 p-1"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      <div
        className={`fixed inset-0 z-40 bg-[#080604] flex flex-col transition-all duration-500 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10 pb-16">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-display text-4xl font-light transition-colors duration-200 ${
                pathname === href ? "text-[#D6B15C]" : "text-[#F8F1DF] hover:text-[#D6B15C]"
              }`}
            >
              {label}
            </Link>
          ))}

          <div className="mt-4 flex flex-col items-center gap-4">
            <span className="gold-divider" />
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#D6B15C] text-[#D6B15C] text-xs uppercase tracking-[0.25em] px-7 py-3 hover:bg-[#D6B15C] hover:text-black transition-all duration-300"
            >
              <MessageCircle size={14} />
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </div>
    </>
  );
}