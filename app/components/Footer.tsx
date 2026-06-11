import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/custom-order", label: "Custom Order" },
  { href: "/contact", label: "Contact" },
];

const policyLinks = [
  { href: "/shipping-policy", label: "Shipping Policy" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080604] border-t border-[#D6B15C]/10">
      {/* Top: Brand statement */}
      <div className="border-b border-[#D6B15C]/10 px-6 md:px-16 py-16">
        <p className="luxury-label text-[#D6B15C] mb-6">Devashilpa</p>
        <p className="font-display text-3xl md:text-4xl font-light text-[#F8F1DF] max-w-2xl leading-snug">
          Preserving inherited Indian metal craftsmanship — one handcrafted sculpture at a time.
        </p>
      </div>

      {/* Middle: Links & Contact */}
      <div className="px-6 md:px-16 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Explore */}
        <div>
          <p className="luxury-label text-[#8e7b53] mb-6">Explore</p>
          <ul className="space-y-3">
            {quickLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-[#D8CCB2] hover:text-[#D6B15C] transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div>
          <p className="luxury-label text-[#8e7b53] mb-6">Information</p>
          <ul className="space-y-3">
            {policyLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-[#D8CCB2] hover:text-[#D6B15C] transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="luxury-label text-[#8e7b53] mb-6">Contact</p>
          <div className="space-y-3">
            <p className="text-sm text-[#D8CCB2]">Shajapur, Madhya Pradesh, India</p>
            <a href="tel:+916261068277" className="block text-sm text-[#D8CCB2] hover:text-[#D6B15C] transition-colors duration-300">
              +91 6261068277
            </a>
            <a href="mailto:adityavisss.2323@gmail.com" className="block text-sm text-[#D8CCB2] hover:text-[#D6B15C] transition-colors duration-300 break-all">
              adityavisss.2323@gmail.com
            </a>
          </div>
        </div>

        {/* Worldwide shipping badge */}
        <div>
          <p className="luxury-label text-[#8e7b53] mb-6">Delivery</p>
          <div className="space-y-4">
            <div className="border border-[#D6B15C]/20 p-4">
              <p className="luxury-label text-[#D6B15C] mb-2 text-[10px]">Worldwide</p>
              <p className="text-sm text-[#D8CCB2] leading-relaxed">
                Secure export-grade packaging. International shipping to all countries.
              </p>
            </div>
            <a
              href="https://wa.me/916261068277"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#D6B15C]/25 text-[#D6B15C] text-[10px] uppercase tracking-[0.2em] px-4 py-2.5 hover:bg-[#D6B15C] hover:text-black hover:border-[#D6B15C] transition-all duration-300"
            >
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="border-t border-[#D6B15C]/10 px-6 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#8e7b53]">
          © {new Date().getFullYear()} Devashilpa. All Rights Reserved.
        </p>
        <p className="text-xs text-[#8e7b53]">
          Handcrafted in Shajapur, Madhya Pradesh, India
        </p>
      </div>
    </footer>
  );
}