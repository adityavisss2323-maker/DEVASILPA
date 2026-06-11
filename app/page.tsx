import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { products } from "@/app/data/products";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Devashilpa | Handcrafted Brass Sculptures from India",
  description:
    "Luxury handcrafted brass sculptures, temple decor, divine idols and heritage artworks by Indian artisans. Worldwide shipping.",
  alternates: { canonical: "https://www.devashilpa.com" },
};

const FEATURED_SLUGS = [
  "parthasarathy-chariot",
  "surya-rath-grand-edition",
  "vishnu",
  "durga-mahishasura-mardini",
  "ram-darbar",
  "ganesha-chariot",
];

const PROCESS_STEPS = [
  { n: "01", title: "Clay Modelling",     desc: "The form is sculpted in clay by hand." },
  { n: "02", title: "Wax Detailing",      desc: "Intricate ornaments added in wax." },
  { n: "03", title: "Mold Creation",      desc: "A precision mold encases the wax form." },
  { n: "04", title: "Metal Casting",      desc: "Molten brass poured at high temperature." },
  { n: "05", title: "Hand Finishing",     desc: "Every detail refined by the artisan." },
  { n: "06", title: "Polishing",          desc: "Natural lustre brought to the surface." },
  { n: "07", title: "Quality Inspection", desc: "Museum-standard check before dispatch." },
];

const TRUST_ITEMS = [
  { title: "Handcrafted\nin India",        sub: "By master artisans" },
  { title: "Worldwide\nShipping",         sub: "To all countries" },
  { title: "Export Grade\nPackaging",     sub: "Museum-safe delivery" },
  { title: "Custom Sizes\nAvailable",     sub: "12″ to 4 feet" },
  { title: "Family\nArtisan Business",   sub: "Generational heritage" },
];

export default function Home() {
  const featuredProducts = FEATURED_SLUGS
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean) as typeof products;

  return (
    <main className="bg-[#080604] text-[#F8F1DF]">
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO — Fullscreen cinematic
      ══════════════════════════════════════════ */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background image */}
        <Image
          src="/products/parthasarathy-chariot/main.jpg"
          alt="Devashilpa — Parthasarathy Chariot, handcrafted brass sculpture"
          fill
          priority
          className="object-cover object-center scale-[1.03]"
          sizes="100vw"
        />

        {/* Cinematic gradient — dark left, open right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, #080604 38%, rgba(8,6,4,0.75) 58%, rgba(8,6,4,0.25) 100%)",
          }}
        />
        {/* Bottom fade into page */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #080604)" }}
        />

        {/* Text content */}
        <div className="relative h-full flex flex-col justify-center px-6 md:px-16 pt-20">
          <div className="max-w-2xl">
            <p className="luxury-label anim-up d1">The Art of the Divine</p>

            <h1 className="font-display text-[2.8rem] md:text-[4.5rem] lg:text-[5.2rem] font-light leading-[1.06] mt-6 mb-7 anim-up d2">
              Handcrafted Indian Sculptures for Collectors, Temples &amp; Luxury Spaces.
            </h1>

            <p className="text-[#D8CCB2] text-lg leading-relaxed max-w-lg mb-10 anim-up d3">
              Made by Indian artisans using traditional brass casting and hand-finishing techniques.
            </p>

            <div className="flex flex-wrap gap-4 anim-up d4">
              <Link
                href="/collections"
                className="inline-flex items-center gap-3 bg-[#D6B15C] text-black text-xs uppercase tracking-[0.22em] px-7 py-4 transition-all duration-300 hover:bg-[#c4a14e]"
              >
                Explore Masterpieces <ArrowRight size={14} />
              </Link>
              <Link
                href="/custom-order"
                className="inline-flex items-center gap-3 border border-[#D6B15C]/40 text-[#D6B15C] text-xs uppercase tracking-[0.22em] px-7 py-4 transition-all duration-300 hover:border-[#D6B15C] hover:bg-[#D6B15C]/8"
              >
                Request Custom Quote
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-6 md:left-16 flex items-center gap-3 anim-in d6">
            <div className="h-px w-10 bg-[#8e7b53]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#8e7b53]">Scroll</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BRAND STATEMENT
      ══════════════════════════════════════════ */}
      <section className="px-6 md:px-16 py-28 border-b border-[#D6B15C]/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="luxury-label mb-8">Devashilpa</p>
          <p className="font-display text-3xl md:text-5xl font-light text-[#D8CCB2] leading-[1.3]">
            &ldquo;Every sculpture is shaped, detailed, and finished by hand — 
            making each creation truly one of a kind.&rdquo;
          </p>
          <span className="gold-divider mx-auto mt-10 block" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURED MASTERPIECES
      ══════════════════════════════════════════ */}
      <section className="px-6 md:px-16 py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="luxury-label mb-5">Featured Masterpieces</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#F8F1DF]">Selected Works</h2>
          </div>
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D6B15C] border-b border-[#D6B15C]/40 pb-0.5 hover:border-[#D6B15C] transition-colors duration-300 self-start md:self-auto"
          >
            View All 22+ Works <ArrowRight size={12} />
          </Link>
        </div>

        {/* Product grid — gallery tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <Link
              href={`/product/${product.slug}`}
              key={product.id}
              className="group block"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#120d08] mb-5">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* CTA that slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#F8F1DF] flex items-center gap-2">
                    View Masterpiece <ArrowRight size={12} />
                  </span>
                </div>
              </div>

              {/* Text */}
              <div>
                <p className="luxury-label text-[#D6B15C] mb-2 text-[10px]">{product.category}</p>
                <h3 className="text-[#F8F1DF] text-lg font-light group-hover:text-[#D6B15C] transition-colors duration-300">
                  {product.name}
                </h3>
                {/* Animated underline */}
                <div
                  className="h-px bg-[#D6B15C]/40 mt-3 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          THE MAKING — Editorial process section
      ══════════════════════════════════════════ */}
      <section className="border-t border-[#D6B15C]/10 py-28">
        <div className="px-6 md:px-16">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            {/* Left heading */}
            <div className="md:sticky md:top-28 md:self-start">
              <p className="luxury-label mb-6">The Craft</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-[#F8F1DF] leading-[1.15]">
                Created through a 7-step traditional process.
              </h2>
              <span className="gold-divider mt-8 block" />
              <p className="text-[#D8CCB2] mt-6 leading-relaxed text-sm max-w-sm">
                From clay modelling to final polishing — each masterpiece is handcrafted 
                by skilled artisans without shortcuts or mass production.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-xs uppercase tracking-[0.2em] text-[#D6B15C] border-b border-[#D6B15C]/40 pb-0.5 hover:border-[#D6B15C] transition-colors duration-300"
              >
                Our Story <ArrowRight size={12} />
              </Link>
            </div>

            {/* Right steps */}
            <div>
              {PROCESS_STEPS.map(({ n, title, desc }, i) => (
                <div
                  key={n}
                  className="flex items-start gap-6 py-7 border-b border-[#D6B15C]/10 group"
                >
                  <span className="text-xs font-mono text-[#D6B15C]/50 group-hover:text-[#D6B15C] transition-colors duration-300 pt-0.5 shrink-0">
                    {n}
                  </span>
                  <div>
                    <p className="text-[#F8F1DF] font-light">{title}</p>
                    <p className="text-[#8e7b53] text-sm mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HERITAGE SPLIT SECTION
      ══════════════════════════════════════════ */}
      <section className="grid md:grid-cols-2 border-t border-[#D6B15C]/10">
        <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
          <Image
            src="/products/ram-darbar/main.jpg"
            alt="Ram Darbar Heritage Ensemble — Devashilpa"
            fill
            className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="bg-[#120d08] flex flex-col justify-center px-10 md:px-16 py-20">
          <p className="luxury-label mb-6">Our Heritage</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#F8F1DF] leading-[1.1]">
            A legacy inherited through generations.
          </h2>
          <span className="gold-divider mt-8 mb-8 block" />
          <p className="text-[#D8CCB2] leading-relaxed mb-10 text-sm">
            Devashilpa represents an inherited family art tradition. Every sculpture begins 
            with traditional mold-making and is brought to life through molten metal casting — 
            a process refined across generations.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-3 border border-[#D6B15C]/30 text-[#D6B15C] text-xs uppercase tracking-[0.22em] px-6 py-3.5 self-start hover:bg-[#D6B15C] hover:text-black hover:border-[#D6B15C] transition-all duration-300"
          >
            Read Our Story <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS ROW
      ══════════════════════════════════════════ */}
      <section className="border-t border-[#D6B15C]/10 grid grid-cols-2 md:grid-cols-4">
        {[
          { value: "50+",       label: "Years of Heritage" },
          { value: "100%",      label: "Handcrafted" },
          { value: "22+",       label: "Unique Masterpieces" },
          { value: "Worldwide", label: "Shipping Available" },
        ].map(({ value, label }, i) => (
          <div
            key={label}
            className={`py-14 px-8 text-center ${i < 3 ? "border-r border-[#D6B15C]/10" : ""} border-b md:border-b-0 border-[#D6B15C]/10`}
          >
            <p className="font-display text-5xl md:text-6xl font-light text-[#D6B15C]">{value}</p>
            <p className="luxury-label text-[#8e7b53] mt-4 text-[10px]">{label}</p>
          </div>
        ))}
      </section>

      {/* ══════════════════════════════════════════
          WORLDWIDE TRUST
      ══════════════════════════════════════════ */}
      <section className="bg-[#120d08] border-t border-[#D6B15C]/10 py-28 px-6 md:px-16">
        <div className="text-center mb-16">
          <p className="luxury-label mb-5">For International Buyers</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#F8F1DF] max-w-2xl mx-auto leading-[1.2]">
            Trusted by Collectors, Temples &amp; Luxury Interiors Worldwide
          </h2>
        </div>

        {/* Trust grid with dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-px bg-[#D6B15C]/10 border border-[#D6B15C]/10">
          {TRUST_ITEMS.map(({ title, sub }) => (
            <div key={title} className="bg-[#120d08] p-8 md:p-10 text-center">
              <p className="font-display text-xl md:text-2xl font-light text-[#F8F1DF] leading-snug whitespace-pre-line">
                {title}
              </p>
              <p className="luxury-label text-[#8e7b53] mt-3 text-[10px]">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CUSTOM CTA
      ══════════════════════════════════════════ */}
      <section className="px-6 md:px-16 py-28 border-t border-[#D6B15C]/10">
        <div className="border border-[#D6B15C]/15 p-12 md:p-20 text-center max-w-4xl mx-auto">
          <p className="luxury-label mb-6">Bespoke Commissions</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-[#F8F1DF] mb-6 leading-[1.1]">
            Commission a sculpture made for your vision.
          </h2>
          <p className="text-[#D8CCB2] mb-10 max-w-lg mx-auto leading-relaxed text-sm">
            Share your preferred size, material, and design idea. Each creation is made to order — 
            from 12-inch decor pieces to grand 3–4 feet sculptures.
          </p>
          <Link
            href="/custom-order"
            className="inline-flex items-center gap-3 border border-[#D6B15C] text-[#D6B15C] text-xs uppercase tracking-[0.25em] px-9 py-4 hover:bg-[#D6B15C] hover:text-black transition-all duration-300"
          >
            Begin Your Commission <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}