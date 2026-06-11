import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { getProductBySlug, products } from "@/app/data/products";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRight,
  Gem,
  Globe,
  PackageCheck,
  Ruler,
  ShieldCheck,
  Clock,
  MessageCircle,
  Hand,
  Users,
  Award,
} from "lucide-react";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Devashilpa`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Devashilpa Handcrafted Brass Sculptures`,
      description: product.description,
      images: [
        {
          url: product.images[0],
          width: 900,
          height: 650,
          alt: product.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Devashilpa`,
      description: product.description,
      images: [product.images[0]],
    },
    alternates: {
      canonical: `https://www.devashilpa.com/product/${slug}`,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Related: same category first, then others (exclude current)
  const sameCategory = products.filter(
    (item) => item.slug !== product.slug && item.category === product.category
  );
  const others = products.filter(
    (item) => item.slug !== product.slug && item.category !== product.category
  );
  const relatedProducts = [...sameCategory, ...others].slice(0, 3);

  const whatsappNumber = "916261068277";

  const whatsappText = `Hello Devashilpa, I am interested in this sculpture:

Product: ${product.name}
Category: ${product.category}
Material: ${product.material}
Size: ${product.size}

Please share price, availability, shipping cost, and custom options.`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappText
  )}`;

  const trustCards = [
    {
      icon: Hand,
      title: "Handcrafted in India",
      desc: "Made by master artisans using inherited Indian metal craft techniques.",
    },
    {
      icon: Globe,
      title: "Worldwide Shipping",
      desc: "Secure international delivery to collectors across the globe.",
    },
    {
      icon: PackageCheck,
      title: "Export Grade Packaging",
      desc: "Museum-quality protective packaging for every shipment.",
    },
    {
      icon: Ruler,
      title: "Custom Sizes Available",
      desc: "From 12-inch decor to grand 3–4 feet sculptures, made to order.",
    },
    {
      icon: Users,
      title: "Family Artisan Business",
      desc: "Generational Indian metalwork heritage in every piece.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#080604] text-[#f8f1df]">
      <Navbar />

      {/* ── PRODUCT DETAIL ── */}
      <section className="grid gap-12 px-6 py-12 md:grid-cols-2 md:px-12">
        {/* Image Gallery */}
        <div>
          {/* Main image with zoom on hover */}
          <div className="group overflow-hidden rounded-3xl bg-[#120d08]">
            <Image
              src={product.images[0]}
              alt={product.name}
              width={900}
              height={650}
              priority
              className="w-full object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Thumbnail strip (shows main image repeated if only one exists) */}
          {product.images.length > 1 && (
            <div className="mt-4 grid grid-cols-3 gap-3">
              {product.images.slice(0, 3).map((img, i) => (
                <div key={img} className="group overflow-hidden rounded-2xl bg-[#120d08]">
                  <Image
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    width={300}
                    height={220}
                    className="h-28 w-full object-cover transition duration-500 group-hover:scale-105"
                    sizes="33vw"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Craftsmanship note card */}
          <div className="mt-4 rounded-2xl border border-[#d6b15c]/20 bg-[#120d08] p-5">
            <div className="flex items-center gap-3">
              <Award className="text-[#d6b15c]" size={20} />
              <p className="text-sm font-medium text-[#d6b15c]">Museum-Grade Craftsmanship</p>
            </div>
            <p className="mt-2 text-xs leading-5 text-[#8e7b53]">
              Every Devashilpa piece is individually handcrafted — no two sculptures are
              ever completely identical. Natural variations are a mark of authentic artisan work.
            </p>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-start">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
            {product.category}
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            {product.name}
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#d8ccb2]">
            {product.description}
          </p>

          {/* Price card */}
          <div className="mt-6 rounded-2xl border border-[#d6b15c]/30 bg-[#120d08] p-5">
            <p className="text-xs uppercase tracking-widest text-[#d6b15c]">Price</p>
            <p className="mt-1 text-2xl font-semibold text-[#f8f1df]">
              {product.price}
            </p>
            <p className="mt-2 text-sm text-[#8e7b53]">
              Final price depends on size, material, detailing, finish, packing,
              and shipping destination.
            </p>
          </div>

          {/* Specifications grid */}
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              ["Material", product.material, Gem],
              ["Size", product.size, Ruler],
              ["Production Time", product.productionTime, Clock],
              ["Shipping", product.shipping, Globe],
              ["Packing", product.packing, PackageCheck],
              ["Authenticity", "Handcrafted, no two pieces identical", ShieldCheck],
            ].map(([title, value, Icon]: any) => (
              <div
                key={title}
                className="rounded-2xl border border-[#d6b15c]/20 bg-[#120d08] p-4 transition duration-200 hover:border-[#d6b15c]/40"
              >
                <div className="flex items-center gap-2">
                  <Icon className="text-[#d6b15c]" size={18} />
                  <p className="text-xs uppercase tracking-wider text-[#d6b15c]">{title}</p>
                </div>
                <p className="mt-2 text-sm leading-5 text-[#d8ccb2]">{value}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3 font-medium text-black transition duration-300 hover:bg-[#1db954] hover:shadow-[0_0_20px_rgba(37,211,102,0.3)]"
            >
              Ask Price on WhatsApp <MessageCircle size={18} />
            </a>

            <Link
              href="/custom-order"
              className="flex items-center gap-2 rounded-full bg-[#d6b15c] px-7 py-3 font-medium text-black transition duration-300 hover:bg-[#c4a14e]"
            >
              Request Custom Quote <ArrowRight size={18} />
            </Link>

            <Link
              href="/collections"
              className="rounded-full border border-[#d6b15c]/40 px-7 py-3 text-[#d6b15c] transition duration-300 hover:border-[#d6b15c] hover:bg-[#d6b15c]/10"
            >
              Back to Collections
            </Link>
          </div>

          <p className="mt-5 text-sm leading-6 text-[#8e7b53]">
            For international orders, shipping charges and delivery timeline are
            confirmed after destination, size, and packing requirements are reviewed.
          </p>
        </div>
      </section>

      {/* ── CRAFTSMANSHIP STORY ── */}
      <section className="grid gap-10 px-6 py-20 md:grid-cols-2 md:px-12">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
            Craftsmanship Story
          </p>

          <h2 className="mt-4 text-4xl font-semibold">
            Crafted through inherited tradition.
          </h2>

          <div className="mt-6 h-px w-16 bg-[#d6b15c]/40" />
        </div>

        <div className="space-y-5 text-lg leading-8 text-[#d8ccb2]">
          <p>
            Every Devashilpa masterpiece is created through traditional
            mold-making, metal casting, and hand finishing — a process that has
            been passed down through generations of Indian artisans.
          </p>

          <p>
            Since every sculpture is finished manually, each piece carries
            natural variations that make it truly one of a kind. These are not
            flaws — they are the signature of authentic human hands.
          </p>

          <p>
            Larger custom sculptures may take several weeks depending on size,
            material, detailing, and finish. A 4-feet sculpture may take around
            one month depending on complexity.
          </p>
        </div>
      </section>

      {/* ── TRUST CARDS ── */}
      <section className="px-6 py-20 md:px-12">
        <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
          Buyer Assurance
        </p>

        <h2 className="mt-4 text-4xl font-semibold">
          Trusted by Collectors Worldwide
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-5">
          {trustCards.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-3xl border border-[#d6b15c]/20 bg-[#120d08] p-6 text-center transition duration-300 hover:border-[#d6b15c]/50 hover:bg-[#1a1106]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#d6b15c]/10 transition duration-300 group-hover:bg-[#d6b15c]/20">
                <Icon className="text-[#d6b15c]" size={24} />
              </div>
              <h3 className="mt-4 text-sm font-medium text-[#f8f1df]">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-[#8e7b53]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BUYER INFORMATION ── */}
      <section className="px-6 py-20 md:px-12">
        <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
          Buyer Information
        </p>

        <h2 className="mt-4 text-4xl font-semibold">
          Before you place an inquiry.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            [
              "Custom Sizes Available",
              "Designs can be created in different sizes based on your requirement.",
            ],
            [
              "Material Options",
              "Brass, copper, mixed metal, and custom finish options are available.",
            ],
            [
              "Worldwide Shipping",
              "International shipping is available with secure protective packing.",
            ],
            [
              "Price on Request",
              "Pricing depends on size, metal, detailing, finish, and destination.",
            ],
            [
              "Handmade Variation",
              "Small variations are natural and prove genuine hand craftsmanship.",
            ],
            [
              "Custom Orders",
              "Reference images and personal design ideas can be discussed on WhatsApp.",
            ],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-3xl border border-[#d6b15c]/20 bg-[#120d08] p-7 transition duration-300 hover:border-[#d6b15c]/40"
            >
              <h3 className="text-xl font-medium text-[#d6b15c]">{title}</h3>
              <p className="mt-4 leading-7 text-[#d8ccb2] text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WhatsApp CTA ── */}
      <section className="mx-6 mb-20 overflow-hidden rounded-3xl md:mx-12">
        <div className="relative bg-[#d6b15c] px-8 py-16 text-center text-black">
          <h2 className="text-4xl font-semibold md:text-5xl">
            Interested in this masterpiece?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg">
            Message us directly on WhatsApp for price, availability, customization,
            packing, and international shipping details.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-8 py-3 font-medium text-[#d6b15c] transition hover:bg-[#1a1106]"
          >
            Inquire on WhatsApp <MessageCircle size={18} />
          </a>
        </div>
      </section>

      {/* ── RELATED PRODUCTS ── */}
      <section className="px-6 py-20 md:px-12">
        <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
          Related Masterpieces
        </p>

        <h2 className="mt-4 text-4xl font-semibold">You May Also Like</h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {relatedProducts.map((item) => (
            <Link
              href={`/product/${item.slug}`}
              key={item.id}
              className="group overflow-hidden rounded-3xl bg-[#120d08] transition duration-500 hover:shadow-[0_8px_40px_rgba(214,177,92,0.10)]"
            >
              <div className="overflow-hidden">
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  width={600}
                  height={450}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                  sizes="33vw"
                />
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-[#d6b15c]">
                  {item.category}
                </p>
                <h3 className="mt-2 text-xl font-medium text-[#f8f1df] transition duration-300 group-hover:text-[#d6b15c]">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#d8ccb2]">
                  {item.shortDescription}
                </p>
                <p className="mt-4 flex items-center gap-1.5 text-sm text-[#d6b15c] transition duration-300 group-hover:gap-3">
                  View Masterpiece <ArrowRight size={14} />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}