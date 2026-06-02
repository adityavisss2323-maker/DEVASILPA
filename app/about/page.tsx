import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import Image from "next/image";
import Link from "next/link";
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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#080604] text-[#f8f1df]">
      <nav className="flex items-center justify-between px-6 py-6 md:px-12">
        <Link href="/" className="text-2xl tracking-[0.35em] text-[#d6b15c]">
          DEVASHILPA
        </Link>

        <div className="hidden gap-8 text-sm md:flex">
          <Link href="/">Home</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/about">About</Link>
          <Link href="/custom-order">Custom Order</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

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
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d6b15c] px-7 py-3 font-medium text-black"
          >
            Request Custom Creation <ArrowRight size={18} />
          </Link>
        </div>

        <Image
          src="/products/chariot/room.png"
          alt="Devashilpa luxury sculpture display"
          width={900}
          height={650}
          className="rounded-3xl object-cover"
          priority
        />
      </section>

      <section className="grid gap-10 px-6 py-20 md:grid-cols-2 md:px-12">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
            Our Story
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Born from traditional hands, shaped for timeless spaces.
          </h2>
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
            <div key={title} className="rounded-3xl bg-[#120d08] p-8">
              <Icon className="mb-4 text-[#d6b15c]" />
              <h3 className="text-xl text-[#d6b15c]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#d8ccb2]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 px-6 py-20 md:grid-cols-3 md:px-12">
        {[
          ["Custom Materials", "Brass, copper, mixed metal, and custom options.", Gem],
          ["Worldwide Shipping", "International delivery available with secure packing.", Globe],
          ["Secure Packing", "Each sculpture is carefully packed for safe transport.", PackageCheck],
        ].map(([title, desc, Icon]: any) => (
          <div
            key={title}
            className="rounded-3xl border border-[#d6b15c]/30 bg-white/5 p-8"
          >
            <Icon className="mb-4 text-[#d6b15c]" />
            <h3 className="text-2xl text-[#d6b15c]">{title}</h3>
            <p className="mt-4 leading-7 text-[#d8ccb2]">{desc}</p>
          </div>
        ))}
      </section>

      <section className="mx-6 mb-20 rounded-3xl bg-[#d6b15c] px-8 py-16 text-center text-black md:mx-12">
        <h2 className="text-4xl font-semibold md:text-5xl">
          Every sculpture carries its own soul.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg">
          Share your preferred size, material, and design idea. Devashilpa can
          create a made-to-order sculpture based on your vision.
        </p>

        <Link
          href="/custom-order"
          className="mt-8 inline-flex rounded-full bg-black px-8 py-3 text-[#d6b15c]"
        >
          Start a Custom Order
        </Link>
      </section>
    </main>
  );
}
