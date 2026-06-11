"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/custom-order", label: "Custom Order" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 flex items-center justify-between px-6 py-5 transition-all duration-300 md:px-12 ${
          scrolled
            ? "border-b border-[#d6b15c]/10 bg-[#080604]/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="text-2xl tracking-[0.35em] text-[#d6b15c] transition duration-200 hover:text-[#f0d080]"
        >
          DEVASHILPA
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition duration-200 hover:text-[#d6b15c] ${
                pathname === href
                  ? "text-[#d6b15c]"
                  : "text-[#d8ccb2]"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex items-center justify-center rounded-xl border border-[#d6b15c]/20 p-2 text-[#d6b15c] transition duration-200 hover:bg-[#d6b15c]/10 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-[#080604]/97 pt-24 backdrop-blur-sm md:hidden">
          <div className="flex flex-col items-center gap-8 px-6 py-10">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-3xl font-light tracking-wider transition duration-200 hover:text-[#d6b15c] ${
                  pathname === href ? "text-[#d6b15c]" : "text-[#f8f1df]"
                }`}
              >
                {label}
              </Link>
            ))}

            <div className="mt-6 h-px w-24 bg-[#d6b15c]/30" />

            <Link
              href="/custom-order"
              className="rounded-full bg-[#d6b15c] px-8 py-3 text-base font-medium text-black transition hover:bg-[#c4a14e]"
            >
              Request Custom Order
            </Link>
          </div>
        </div>
      )}
    </>
  );
}