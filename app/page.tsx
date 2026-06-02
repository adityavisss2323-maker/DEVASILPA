import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { products } from "@/app/data/products";
import {
  ArrowRight,
  Globe,
  Hand,
  ShieldCheck,
  Sparkles,
  Hammer,
  Gem,
} from "lucide-react";

export default function Home() {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <main className="min-h-screen bg-[#080604] text-[#f8f1df]">
      <Navbar />

      <section className="grid min-h-[85vh] items-center gap-10 px-6 py-12 md:grid-cols-2 md:px-12">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#d6b15c]">
            The Art of the Divine
          </p>

          <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
            Handcrafted Indian Sculptures with a Soul.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#d8ccb2]">
            Devashilpa preserves inherited Indian metal craftsmanship through
            handcrafted brass and copper sculptures made by master artisans.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/collections"
              className="flex items-center gap-2 rounded-full bg-[#d6b15c] px-6 py-3 font-medium text-black"
            >
              Explore Collection <ArrowRight size={18} />
            </Link>

            <Link
              href="/custom-order"
              className="rounded-full border border-[#d6b15c] px-6 py-3 text-[#d6b15c]"
            >
              Custom Order
            </Link>
          </div>
        </div>

        <Image
          src="/products/ganesha-chariot/main.jpg"
          alt="Devashilpa handcrafted brass sculpture"
          width={900}
          height={650}
          priority
          className="rounded-3xl object-cover shadow-2xl"
        />
      </section>

      <section className="grid gap-6 px-6 py-16 md:grid-cols-4 md:px-12">
        {[
          ["Handcrafted", "Made by master artisans", Hand],
          ["Heritage", "Inherited generational art", Sparkles],
          ["Worldwide", "International shipping available", Globe],
          ["Secure Packing", "Protected delivery packaging", ShieldCheck],
        ].map(([title, desc, Icon]: any) => (
          <div
            key={title}
            className="rounded-2xl border border-[#d6b15c]/30 bg-white/5 p-6"
          >
            <Icon className="mb-4 text-[#d6b15c]" />
            <h3 className="text-xl text-[#d6b15c]">{title}</h3>
            <p className="mt-2 text-sm text-[#d8ccb2]">{desc}</p>
          </div>
        ))}
      </section>

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

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {[
            "Clay Modelling",
            "Wax Detailing",
            "Mold Creation",
            "Metal Casting",
            "Hand Finishing",
            "Polishing",
            "Protective Coating",
            "Quality Inspection",
          ].map((step, index) => (
            <div
              key={step}
              className="rounded-3xl border border-[#d6b15c]/20 bg-[#120d08] p-6"
            >
              <div className="text-4xl font-semibold text-[#d6b15c]">
                {index + 1}
              </div>

              <h3 className="mt-4 text-xl font-medium text-[#f8f1df]">
                {step}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-[#120d08] p-10">
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

      <section className="px-6 py-24 md:px-12">
        <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
          Why Devashilpa
        </p>

        <h2 className="mt-4 text-5xl font-semibold md:text-6xl">
          Crafted for Collectors, Temples & Luxury Spaces
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
            <div key={title} className="rounded-3xl bg-[#120d08] p-8">
              <Icon className="mb-4 text-[#d6b15c]" />
              <h3 className="text-2xl text-[#d6b15c]">{title}</h3>
              <p className="mt-4 text-[#d8ccb2]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-10 px-6 py-20 md:grid-cols-2 md:px-12">
        <Image
          src="/products/ram-darbar/main.jpg"
          alt="Devashilpa heritage sculpture"
          width={800}
          height={600}
          className="rounded-3xl object-cover"
        />

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
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-[#d6b15c] px-6 py-3 text-[#d6b15c]"
          >
            Read Our Story <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            ["50+", "Years of Heritage"],
            ["100%", "Handcrafted"],
            ["11+", "Unique Masterpieces"],
            ["Worldwide", "Shipping Available"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-[#d6b15c]/20 bg-[#120d08] p-8 text-center"
            >
              <div className="text-4xl font-bold text-[#d6b15c]">{value}</div>

              <div className="mt-3 text-[#d8ccb2]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
              Featured
            </p>

            <h2 className="mt-3 text-4xl font-semibold">
              Featured Masterpieces
            </h2>
          </div>

          <Link
            href="/collections"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[#d6b15c] px-6 py-3 text-[#d6b15c]"
          >
            View All Collections <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <Link
              href={`/product/${product.slug}`}
              key={product.id}
              className="overflow-hidden rounded-3xl bg-[#120d08] transition hover:scale-[1.02]"
            >
              <Image
                src={product.images[0]}
                alt={product.name}
                width={600}
                height={450}
                className="h-80 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-[#d6b15c]">{product.category}</p>

                <h3 className="mt-2 text-2xl">{product.name}</h3>

                <p className="mt-4 text-sm leading-6 text-[#d8ccb2]">
                  {product.shortDescription}
                </p>

                <p className="mt-5 text-[#d6b15c]">View Masterpiece →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-6 my-20 rounded-3xl bg-[#d6b15c] px-8 py-16 text-center text-black md:mx-12">
        <h2 className="text-4xl font-semibold md:text-5xl">
          Looking for a custom sculpture?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg">
          Share your preferred size, material, and design idea. Devashilpa can
          create made-to-order sculptures according to your vision.
        </p>

        <Link
          href="/custom-order"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-8 py-3 text-[#d6b15c]"
        >
          Request Custom Creation <ArrowRight size={18} />
        </Link>
      </section>

      <Footer />
    </main>
  );
}