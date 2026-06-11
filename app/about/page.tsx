import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Hammer, Flame, Hand, Sparkles, Gem, Globe, PackageCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Devashilpa",
  description:
    "Learn about Devashilpa — a family artisan business preserving traditional Indian brass and copper sculpture craftsmanship through generations.",
  alternates: { canonical: "https://www.devashilpa.com/about" },
};

const steps = [
  { Icon: Hammer,   title: "Mold Making",         desc: "Traditional sancha is prepared for the sculpture form." },
  { Icon: Flame,    title: "Metal Casting",        desc: "Brass or copper is cast under high temperature." },
  { Icon: Hand,     title: "Hand Finishing",       desc: "Every detail is refined manually by skilled artisans." },
  { Icon: Sparkles, title: "Final Masterpiece",    desc: "The sculpture is polished, inspected, and packed." },
];

export default function AboutPage() {
  return (
    <main className="bg-[#080604] text-[#F8F1DF] min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/products/parthasarathy-chariot/main.jpg"
          alt="Devashilpa — handcrafted brass sculptures"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(110deg, #080604 40%, rgba(8,6,4,0.65) 65%, rgba(8,6,4,0.2) 100%)" }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-36" style={{ background: "linear-gradient(to bottom, transparent, #080604)" }} />

        <div className="relative h-full flex flex-col justify-center px-6 md:px-16 pt-[72px]">
          <div className="max-w-2xl">
            <p className="luxury-label mb-6 anim-up d1">About Devashilpa</p>
            <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.06] anim-up d2">
              A heritage inherited.<br />A legacy preserved.
            </h1>
            <p className="text-[#D8CCB2] mt-7 text-lg leading-relaxed max-w-lg anim-up d3">
              Devashilpa is built on a generational Indian art tradition, where every sculpture 
              is shaped through inherited skill, devotion, and patient craftsmanship.
            </p>
            <Link
              href="/custom-order"
              className="inline-flex items-center gap-3 mt-10 bg-[#D6B15C] text-black text-xs uppercase tracking-[0.22em] px-7 py-4 transition-all duration-300 hover:bg-[#c4a14e] anim-up d4"
            >
              Request Custom Creation <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="border-t border-[#D6B15C]/10 py-28 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <p className="luxury-label mb-6">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#F8F1DF] leading-[1.1]">
              Born from traditional hands, shaped for timeless spaces.
            </h2>
            <span className="gold-divider mt-8 block" />
          </div>
          <div className="space-y-5 text-sm text-[#D8CCB2] leading-relaxed">
            <p>
              Devashilpa represents an inherited family art form passed through generations of 
              skilled craftsmanship. Each creation begins with traditional mold-making and is 
              brought to life through molten metal casting.
            </p>
            <p>
              Once the sculpture cools, artisans refine every curve, ornament, and detail by 
              hand. This process ensures that no two sculptures are ever exactly identical.
            </p>
            <p>
              From 12-inch decor pieces to large 3–4 feet custom sculptures, every masterpiece 
              is created according to size, material, detailing, and the customer&apos;s vision.
            </p>
          </div>
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section className="border-t border-[#D6B15C]/10 bg-[#120d08] py-28 px-6 md:px-16">
        <div className="text-center mb-20">
          <p className="luxury-label mb-5">Craftsmanship Process</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#F8F1DF]">
            From sancha to sculpture.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#D6B15C]/10 border border-[#D6B15C]/10">
          {steps.map(({ Icon, title, desc }, i) => (
            <div key={title} className="bg-[#120d08] p-10 group hover:bg-[#1a1106] transition-colors duration-300">
              <div className="font-mono text-xs text-[#D6B15C]/40 group-hover:text-[#D6B15C] transition-colors mb-6">0{i + 1}</div>
              <Icon className="text-[#D6B15C] mb-5 group-hover:scale-110 transition-transform duration-300" size={24} />
              <h3 className="text-[#D6B15C] font-light mb-3">{title}</h3>
              <p className="text-xs text-[#8e7b53] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features row ── */}
      <section className="border-t border-[#D6B15C]/10 grid grid-cols-1 md:grid-cols-3">
        {[
          { Icon: Gem,         title: "Custom Materials",   desc: "Brass, copper, mixed metal, and custom finish options." },
          { Icon: Globe,       title: "Worldwide Shipping", desc: "International delivery with secure export-grade packing." },
          { Icon: PackageCheck,title: "Secure Packing",     desc: "Each sculpture is carefully packed for safe transport." },
        ].map(({ Icon, title, desc }, i) => (
          <div
            key={title}
            className={`py-14 px-10 group hover:bg-[#120d08] transition-colors duration-300 ${i < 2 ? "border-b md:border-b-0 md:border-r border-[#D6B15C]/10" : ""}`}
          >
            <Icon className="text-[#D6B15C] mb-6 group-hover:scale-110 transition-transform duration-300" size={24} />
            <h3 className="text-xl font-light text-[#D6B15C] mb-3">{title}</h3>
            <p className="text-sm text-[#D8CCB2] leading-relaxed">{desc}</p>
          </div>
        ))}
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-[#D6B15C]/10 py-28 px-6 md:px-16 text-center">
        <p className="luxury-label mb-6">Commission a Work</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-[#F8F1DF] mb-6">
          Every sculpture carries its own soul.
        </h2>
        <p className="text-[#D8CCB2] max-w-lg mx-auto mb-10 text-sm leading-relaxed">
          Share your preferred size, material, and design idea. We create made-to-order 
          sculptures based on your vision.
        </p>
        <Link
          href="/custom-order"
          className="inline-flex items-center gap-3 border border-[#D6B15C] text-[#D6B15C] text-xs uppercase tracking-[0.25em] px-9 py-4 hover:bg-[#D6B15C] hover:text-black transition-all duration-300"
        >
          Start a Custom Order <ArrowRight size={13} />
        </Link>
      </section>

      <Footer />
    </main>
  );
}
