import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { products } from "@/app/data/products";
import type { Metadata } from "next";
import {
  ArrowRight,
  Globe,
  Hand,
  ShieldCheck,
  Sparkles,
  Hammer,
  Gem,
  Package,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Devashilpa | Handcrafted Brass Sculptures from India",
  description:
    "Luxury handcrafted brass sculptures, temple decor, divine idols, and heritage artworks created by Indian artisans. Worldwide shipping available.",
  alternates: {
    canonical: "https://www.devashilpa.com",
  },
};

// Specific featured masterpieces as requested
const FEATURED_SLUGS = [
  "parthasarathy-chariot",
  "surya-rath-grand-edition",
  "vishnu",
  "durga-mahishasura-mardini",
  "ram-darbar",
  "ganesha-chariot",
];

export default function Home() {
  const featuredProducts = FEATURED_SLUGS
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean) as typeof products;

  const trustItems = [
    {
      icon: Hand,
      title: "Handcrafted in India",
      desc: "Every piece shaped by master artisans using inherited techniques.",
    },
    {
      icon: Globe,
      title: "Worldwide Shipping",
      desc: "Secure international delivery to collectors across the globe.",
    },
    {
      icon: Package,
      title: "Export Grade Packaging",
      desc: "Museum-quality protective packaging for every shipment.",
    },
    {
      icon: Hammer,
      title: "Custom Sizes Available",
      desc: "From 12-inch decor pieces to grand 3–4 feet sculptures.",
    },
    {
      icon: Users,
      title: "Family Artisan Business",
      desc: "Generations of Indian metalwork heritage preserved in every piece.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#080604] text-[#f8f1df]">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative grid min-h-[88vh] items-center gap-10 overflow-hidden px-6 py-16 md:grid-cols-2 md:px-12">
        {/* Radial glow behind text */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-1/2 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 20% 40%, #D6B15C 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-[#d6b15c]">
            The Art of the Divine
          </p>

          <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
            Handcrafted Indian{" "}
            <span className="text-[#d6b15c]">Sculptures</span> with a Soul.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#d8ccb2]">
            Devashilpa preserves inherited Indian metal craftsmanship through
            handcrafted brass and copper sculptures made by master artisans.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/collections"
              className="flex items-center gap-2 rounded-full bg-[#d6b15c] px-7 py-3 font-medium text-black transition duration-300 hover:bg-[#c4a14e] hover:shadow-[0_0_24px_rgba(214,177,92,0.35)]"
            >
              Explore Collection <ArrowRight size={18} />
            </Link>

            <Link
              href="/custom-order"
              className="rounded-full border border-[#d6b15c] px-7 py-3 text-[#d6b15c] transition duration-300 hover:bg-[#d6b15c]/10"
            >
              Custom Order
            </Link>
          </div>

          {/* Mini trust badges */}
          <div className="mt-10 flex flex-wrap items-center gap-5">
            {["Handcrafted", "Worldwide Shipping", "Export Packaging", "Custom Sizes"].map(
              (badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 text-xs text-[#a89877]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d6b15c]" />
                  {badge}
                </span>
              )
            )}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-[#d6b15c]/5 blur-2xl" />
          <Image
            src="/products/ganesha-chariot/main.jpg"
            alt="Devashilpa handcrafted Royal Ganesha Chariot brass sculpture"
            width={900}
            height={650}
            priority
            className="relative rounded-3xl object-cover shadow-2xl shadow-black/60"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/60 p-4 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.25em] text-[#d6b15c]">
              Featured Piece
            </p>
            <p className="mt-1 text-lg font-medium">Royal Ganesha Chariot</p>
          </div>
        </div>
      </section>

      {/* ── QUICK TRUST STRIP ── */}
      <section className="grid gap-4 px-6 py-10 md:grid-cols-4 md:px-12">
        {[
          ["Handcrafted", "Made by master artisans", Hand],
          ["Heritage", "Inherited generational art", Sparkles],
          ["Worldwide", "International shipping available", Globe],
          ["Secure Packing", "Protected delivery packaging", ShieldCheck],
        ].map(([title, desc, Icon]: any) => (
          <div
            key={title}
            className="rounded-2xl border border-[#d6b15c]/20 bg-[#120d08] p-5 transition duration-300 hover:border-[#d6b15c]/50 hover:bg-[#1a1106]"
          >
            <Icon className="mb-3 text-[#d6b15c]" size={22} />
            <h3 className="text-base font-medium text-[#d6b15c]">{title}</h3>
            <p className="mt-1 text-sm text-[#d8ccb2]">{desc}</p>
          </div>
        ))}
      </section>

      {/* ── CRAFTSMANSHIP PROCESS ── */}
      <section className="px-6 py-24 md:px-12">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
            Traditional Craftsmanship
          </p>

          <h2 className="mt-4 text-5xl font-semibold md:text-6xl">
            Handcrafted Through a 7-Step Traditional Process
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#d8ccb2]">
            Every Devashilpa sculpture is created through generations-old Indian
            metal casting techniques. From clay modelling to final polishing,
            each masterpiece is handcrafted by skilled artisans without shortcuts
            or mass production.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-4">
          {[
            { step: "Clay Modelling", detail: "Traditional form sculpted by hand" },
            { step: "Wax Detailing", detail: "Intricate ornaments and features added" },
            { step: "Mold Creation", detail: "Precision mold encases the wax form" },
            { step: "Metal Casting", detail: "Molten brass poured under high heat" },
            { step: "Hand Finishing", detail: "Every curve refined by the artisan" },
            { step: "Polishing", detail: "Natural lustre brought to the surface" },
            { step: "Protective Coating", detail: "Heritage-preserving finish applied" },
            { step: "Quality Inspection", detail: "Museum-standard quality check" },
          ].map(({ step, detail }, index) => (
            <div
              key={step}
              className="group rounded-3xl border border-[#d6b15c]/10 bg-[#120d08] p-6 transition duration-300 hover:border-[#d6b15c]/40 hover:bg-[#1a1106]"
            >
              <div className="text-3xl font-bold text-[#d6b15c]/40 transition duration-300 group-hover:text-[#d6b15c]">
                0{index + 1}
              </div>
              <h3 className="mt-4 text-lg font-medium text-[#f8f1df]">{step}</h3>
              <p className="mt-2 text-sm leading-6 text-[#8e7b53]">{detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-[#d6b15c]/20 bg-[#120d08] p-10">
          <h3 className="text-3xl font-semibold text-[#d6b15c]">
            Why Every Piece Is Unique
          </h3>
          <p className="mt-6 text-lg leading-8 text-[#d8ccb2]">
            Since every sculpture is shaped, detailed, finished, and polished by
            hand, no two pieces are ever completely identical. Small variations
            are a mark of authentic craftsmanship and make each creation truly
            one of a kind.
          </p>
        </div>
      </section>

      {/* ── WHY DEVASHILPA ── */}
      <section className="px-6 py-24 md:px-12">
        <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
          Why Devashilpa
        </p>

        <h2 className="mt-4 text-5xl font-semibold md:text-6xl">
          Crafted for Collectors, Temples &amp; Luxury Spaces
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "Handmade",
              "Every sculpture is handcrafted by skilled artisans using traditional techniques.",
              Hand,
            ],
            [
              "Custom Sizes",
              "From small decor pieces to large 3–4 feet sculptures, made to order.",
              Hammer,
            ],
            [
              "Worldwide Shipping",
              "Secure packaging and international delivery available.",
              Globe,
            ],
            [
              "Heritage Craft",
              "Generations of Indian metal craftsmanship preserved in every piece.",
              Gem,
            ],
          ].map(([title, desc, Icon]: any) => (
            <div
              key={title}
              className="group rounded-3xl bg-[#120d08] p-8 transition duration-300 hover:bg-[#1a1106]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d6b15c]/10 transition duration-300 group-hover:bg-[#d6b15c]/20">
                <Icon className="text-[#d6b15c]" size={22} />
              </div>
              <h3 className="mt-6 text-2xl text-[#d6b15c]">{title}</h3>
              <p className="mt-4 leading-7 text-[#d8ccb2]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HERITAGE SECTION ── */}
      <section className="grid gap-10 px-6 py-20 md:grid-cols-2 md:px-12">
        <div className="overflow-hidden rounded-3xl">
          <Image
            src="/products/ram-darbar/main.jpg"
            alt="Devashilpa Ram Darbar heritage brass sculpture"
            width={800}
            height={600}
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
            Our Heritage
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            A legacy inherited through generations.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#d8ccb2]">
            Every sculpture begins with traditional mold-making and metal
            casting. Each piece is shaped, detailed, and finished by hand,
            making every creation one of a kind.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-[#d6b15c] px-6 py-3 text-[#d6b15c] transition duration-300 hover:bg-[#d6b15c]/10"
          >
            Read Our Story <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="px-6 py-16 md:px-12">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            ["50+", "Years of Heritage"],
            ["100%", "Handcrafted"],
            ["22+", "Unique Masterpieces"],
            ["Worldwide", "Shipping Available"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-[#d6b15c]/20 bg-[#120d08] p-8 text-center transition duration-300 hover:border-[#d6b15c]/50"
            >
              <div className="text-4xl font-bold text-[#d6b15c]">{value}</div>
              <div className="mt-3 text-[#d8ccb2]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED MASTERPIECES ── */}
      <section className="px-6 py-20 md:px-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
              Featured
            </p>
            <h2 className="mt-3 text-4xl font-semibold">Featured Masterpieces</h2>
            <p className="mt-2 text-[#8e7b53]">Museum-grade brass sculptures by Indian master artisans</p>
          </div>

          <Link
            href="/collections"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[#d6b15c] px-6 py-3 text-[#d6b15c] transition duration-300 hover:bg-[#d6b15c]/10"
          >
            View All 22+ Collections <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <Link
              href={`/product/${product.slug}`}
              key={product.id}
              className="group overflow-hidden rounded-3xl bg-[#120d08] transition duration-500 hover:shadow-[0_8px_40px_rgba(214,177,92,0.12)]"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={600}
                  height={450}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 transition duration-500 group-hover:opacity-100">
                  <span className="flex items-center gap-2 rounded-full bg-[#d6b15c] px-5 py-2 text-sm font-medium text-black">
                    View Masterpiece <ArrowRight size={14} />
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-[#d6b15c]">
                  {product.category}
                </p>

                <h3 className="mt-2 text-xl font-medium text-[#f8f1df]">
                  {product.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#d8ccb2]">
                  {product.shortDescription}
                </p>

                <p className="mt-5 inline-flex items-center gap-1.5 text-sm text-[#d6b15c] transition duration-300 group-hover:gap-3">
                  View Masterpiece <ArrowRight size={14} />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── INTERNATIONAL BUYER TRUST ── */}
      <section className="px-6 py-24 md:px-12">
        <div className="rounded-3xl border border-[#d6b15c]/20 bg-[#120d08] p-10 md:p-16">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
              For International Buyers
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold md:text-5xl">
              Trusted by Collectors, Temples &amp; Luxury Interiors Worldwide
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#d8ccb2]">
              Every Devashilpa sculpture is shipped securely to international collectors and
              institutions with full export-grade care.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-5">
            {trustItems.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group flex flex-col items-center rounded-2xl border border-[#d6b15c]/10 bg-[#080604]/60 p-6 text-center transition duration-300 hover:border-[#d6b15c]/40"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d6b15c]/10 transition duration-300 group-hover:bg-[#d6b15c]/20">
                  <Icon className="text-[#d6b15c]" size={24} />
                </div>
                <h3 className="mt-4 text-base font-medium text-[#f8f1df]">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#8e7b53]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOM ORDER CTA ── */}
      <section className="mx-6 my-20 overflow-hidden rounded-3xl md:mx-12">
        <div className="relative bg-[#d6b15c] px-8 py-16 text-center text-black">
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 70% 30%, #fff 0%, transparent 60%)",
            }}
          />
          <h2 className="relative text-4xl font-semibold md:text-5xl">
            Looking for a custom sculpture?
          </h2>

          <p className="relative mx-auto mt-5 max-w-2xl text-lg">
            Share your preferred size, material, and design idea. Devashilpa can
            create made-to-order sculptures according to your vision.
          </p>

          <Link
            href="/custom-order"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-black px-8 py-3 text-[#d6b15c] transition duration-300 hover:bg-[#1a1106]"
          >
            Request Custom Creation <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}