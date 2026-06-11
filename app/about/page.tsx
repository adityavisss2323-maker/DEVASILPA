import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Flame,
  Gem,
  Globe,
  Hammer,
  Hand,
  PackageCheck,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Devashilpa | Our Heritage & Story",
  description:
    "Learn about Devashilpa — a family artisan business preserving traditional Indian brass and copper sculpture craftsmanship through generations.",
  alternates: {
    canonical: "https://www.devashilpa.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#080604] text-[#f8f1df]">
      <Navbar />

      {/* ── HERO ── */}
      <section className="grid min-h-[80vh] items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-12">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
            About Devashilpa
          </p>

          <h1 className="mt-5 text-5xl font-semibold leading-tight md:text-7xl">
            A heritage inherited. A legacy preserved.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d8ccb2]">
            Devashilpa is built on a generational Indian art tradition, where
            every sculpture is shaped through inherited skill, devotion, and
            patient craftsmanship.
          </p>

          <Link
            href="/custom-order"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d6b15c] px-7 py-3 font-medium text-black transition duration-300 hover:bg-[#c4a14e]"
          >
            Request Custom Creation <ArrowRight size={18} />
          </Link>
        </div>

        <div className="overflow-hidden rounded-3xl">
          <Image
            src="/products/parthasarathy-chariot/main.jpg"
            alt="Devashilpa luxury brass sculpture display"
            width={900}
            height={650}
            className="w-full object-cover transition duration-700 hover:scale-105"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="grid gap-10 px-6 py-20 md:grid-cols-2 md:px-12">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
            Our Story
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Born from traditional hands, shaped for timeless spaces.
          </h2>

          <div className="mt-6 h-px w-16 bg-[#d6b15c]/40" />
        </div>

        <div className="space-y-5 text-lg leading-8 text-[#d8ccb2]">
          <p>
            Devashilpa represents an inherited family art form passed through
            generations of skilled craftsmanship. Each creation begins with
            traditional mold-making and is brought to life through molten metal
            casting.
          </p>

          <p>
            Once the sculpture cools, artisans refine every curve, ornament, and
            detail by hand. This process ensures that no two sculptures are ever
            exactly identical.
          </p>

          <p>
            From 12-inch decor pieces to large 3–4 feet custom sculptures, every
            masterpiece is created according to size, material, detailing, and
            the customer&apos;s vision.
          </p>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="px-6 py-20 md:px-12">
        <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
          Craftsmanship Process
        </p>

        <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
          From sancha to sculpture.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            ["Mold Making", "Traditional sancha is prepared for the sculpture.", Hammer],
            ["Metal Casting", "Brass, copper, or mixed metal is cast with care.", Flame],
            ["Hand Finishing", "Every detail is refined manually by artisans.", Hand],
            ["Final Masterpiece", "The sculpture is polished, packed, and shipped.", Sparkles],
          ].map(([title, desc, Icon]: any) => (
            <div
              key={title}
              className="group rounded-3xl bg-[#120d08] p-8 transition duration-300 hover:bg-[#1a1106]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d6b15c]/10 transition duration-300 group-hover:bg-[#d6b15c]/20">
                <Icon className="text-[#d6b15c]" size={20} />
              </div>
              <h3 className="mt-5 text-xl text-[#d6b15c]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#d8ccb2]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="grid gap-8 px-6 py-20 md:grid-cols-3 md:px-12">
        {[
          ["Custom Materials", "Brass, copper, mixed metal, and custom options.", Gem],
          ["Worldwide Shipping", "International delivery available with secure packing.", Globe],
          ["Secure Packing", "Each sculpture is carefully packed for safe transport.", PackageCheck],
        ].map(([title, desc, Icon]: any) => (
          <div
            key={title}
            className="rounded-3xl border border-[#d6b15c]/20 bg-[#120d08] p-8 transition duration-300 hover:border-[#d6b15c]/50"
          >
            <Icon className="mb-4 text-[#d6b15c]" size={24} />
            <h3 className="text-2xl text-[#d6b15c]">{title}</h3>
            <p className="mt-4 leading-7 text-[#d8ccb2]">{desc}</p>
          </div>
        ))}
      </section>

      {/* ── CTA ── */}
      <section className="mx-6 mb-20 overflow-hidden rounded-3xl md:mx-12">
        <div className="relative bg-[#d6b15c] px-8 py-16 text-center text-black">
          <h2 className="text-4xl font-semibold md:text-5xl">
            Every sculpture carries its own soul.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg">
            Share your preferred size, material, and design idea. Devashilpa can
            create a made-to-order sculpture based on your vision.
          </p>

          <Link
            href="/custom-order"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-8 py-3 text-[#d6b15c] transition hover:bg-[#1a1106]"
          >
            Start a Custom Order <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
