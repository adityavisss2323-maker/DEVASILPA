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
} from "lucide-react";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Not Found" };
  return {
    title: `${product.name} | Devashilpa`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Devashilpa`,
      description: product.description,
      images: [{ url: product.images[0], width: 900, height: 650, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Devashilpa`,
      description: product.description,
      images: [product.images[0]],
    },
    alternates: { canonical: `https://www.devashilpa.com/product/${slug}` },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  // Same category first, then others
  const related = [
    ...products.filter((p) => p.slug !== product.slug && p.category === product.category),
    ...products.filter((p) => p.slug !== product.slug && p.category !== product.category),
  ].slice(0, 3);

  const whatsappNumber = "916261068277";
  const whatsappText = `Hello Devashilpa, I am interested in:\n\nProduct: ${product.name}\nCategory: ${product.category}\nMaterial: ${product.material}\nSize: ${product.size}\n\nPlease share price, availability and shipping details.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  const specs = [
    { label: "Material",         value: product.material,         Icon: Gem },
    { label: "Size",             value: product.size,             Icon: Ruler },
    { label: "Production Time",  value: product.productionTime,   Icon: Clock },
    { label: "Shipping",         value: product.shipping,         Icon: Globe },
    { label: "Packing",          value: product.packing,          Icon: PackageCheck },
    { label: "Authenticity",     value: "Handcrafted — no two pieces identical", Icon: ShieldCheck },
  ];

  const trust = [
    { Icon: Hand,         title: "Handcrafted in India",       sub: "By master artisans" },
    { Icon: Globe,        title: "Worldwide Shipping",          sub: "To all countries" },
    { Icon: PackageCheck, title: "Export Grade Packaging",      sub: "Museum-safe delivery" },
    { Icon: Ruler,        title: "Custom Sizes Available",      sub: "12″ to 4 feet" },
    { Icon: Users,        title: "Family Artisan Business",     sub: "Generational heritage" },
  ];

  return (
    <main className="bg-[#080604] text-[#F8F1DF] min-h-screen">
      <Navbar />

      {/* ── Breadcrumb ── */}
      <div className="pt-[72px] px-6 md:px-16 py-5 border-b border-[#D6B15C]/10">
        <nav className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#8e7b53]">
          <Link href="/" className="hover:text-[#D6B15C] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/collections" className="hover:text-[#D6B15C] transition-colors">Collections</Link>
          <span>/</span>
          <span className="text-[#D6B15C]">{product.name}</span>
        </nav>
      </div>

      {/* ── Product Detail — Apple-style sticky split ── */}
      <section className="px-6 md:px-16 py-16 grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-20">

        {/* Left: Image */}
        <div>
          <div className="group relative overflow-hidden bg-[#120d08]" style={{ aspectRatio: "4/5" }}>
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>

          {/* Craftsmanship note */}
          <div className="border-l-2 border-[#D6B15C]/40 pl-5 mt-6">
            <p className="luxury-label text-[10px] mb-1">Authenticity</p>
            <p className="text-xs text-[#8e7b53] leading-relaxed">
              Each Devashilpa piece is individually cast and finished by hand. Natural variations 
              are a mark of genuine artisan work — no two pieces are ever identical.
            </p>
          </div>
        </div>

        {/* Right: Sticky product info */}
        <div className="md:sticky md:top-28 md:self-start">
          <p className="luxury-label mb-4">{product.category}</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#F8F1DF] leading-[1.08] mb-6">
            {product.name}
          </h1>
          <span className="gold-divider mb-6 block" />
          <p className="text-[#D8CCB2] leading-relaxed mb-8 text-sm">
            {product.description}
          </p>

          {/* Price */}
          <div className="border border-[#D6B15C]/15 p-5 mb-8">
            <p className="luxury-label text-[#8e7b53] text-[10px] mb-1">Pricing</p>
            <p className="font-display text-3xl font-light text-[#F8F1DF]">{product.price}</p>
            <p className="text-xs text-[#8e7b53] mt-2 leading-relaxed">
              Final price varies by size, material, detailing, finish, and shipping destination.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3 mb-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#25D366] text-black text-xs uppercase tracking-[0.2em] py-4 px-7 w-full font-medium transition-all duration-300 hover:bg-[#1db954]"
            >
              <MessageCircle size={15} />
              Ask Price on WhatsApp
            </a>
            <Link
              href="/custom-order"
              className="flex items-center justify-center gap-2.5 border border-[#D6B15C]/30 text-[#D6B15C] text-xs uppercase tracking-[0.2em] py-4 px-7 w-full transition-all duration-300 hover:border-[#D6B15C] hover:bg-[#D6B15C] hover:text-black"
            >
              Request Custom Quote <ArrowRight size={13} />
            </Link>
            <Link
              href="/collections"
              className="flex items-center justify-center text-[#8e7b53] text-xs uppercase tracking-[0.15em] py-3 hover:text-[#D6B15C] transition-colors w-full"
            >
              ← Back to Collections
            </Link>
          </div>

          {/* Specs grid */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {specs.map(({ label, value, Icon }) => (
              <div key={label} className="border border-[#D6B15C]/10 p-4 hover:border-[#D6B15C]/25 transition-colors duration-200">
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={13} className="text-[#D6B15C] shrink-0" />
                  <p className="luxury-label text-[#8e7b53] text-[9px]">{label}</p>
                </div>
                <p className="text-xs text-[#D8CCB2] leading-relaxed">{value}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#8e7b53] leading-relaxed">
            For international orders, shipping charges and delivery timeline are confirmed after 
            destination, size, and packing requirements are reviewed.
          </p>
        </div>
      </section>

      {/* ── Trust Cards ── */}
      <section className="border-t border-[#D6B15C]/10 bg-[#120d08] py-20 px-6 md:px-16">
        <p className="luxury-label mb-12 text-center">Buyer Assurance</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-[#D6B15C]/10 border border-[#D6B15C]/10">
          {trust.map(({ Icon, title, sub }) => (
            <div key={title} className="bg-[#120d08] p-7 text-center group hover:bg-[#1a1106] transition-colors duration-300">
              <Icon className="text-[#D6B15C] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={22} />
              <p className="text-sm font-light text-[#F8F1DF] leading-snug">{title}</p>
              <p className="luxury-label text-[#8e7b53] text-[9px] mt-2">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Craftsmanship Story ── */}
      <section className="border-t border-[#D6B15C]/10 py-24 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="luxury-label mb-5">The Making</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#F8F1DF] leading-tight">
              Crafted through inherited tradition.
            </h2>
            <span className="gold-divider mt-7 block" />
          </div>
          <div className="space-y-5 text-sm text-[#D8CCB2] leading-relaxed">
            <p>
              Every Devashilpa masterpiece is created through traditional mold-making, metal 
              casting, and hand-finishing — a process passed down through generations.
            </p>
            <p>
              Since every sculpture is finished manually, each piece carries natural variations 
              that make it truly one of a kind. These are not flaws — they are the signature of 
              authentic human hands.
            </p>
            <p>
              Larger custom sculptures may take several weeks depending on size, material, 
              detailing, and finish. A 4-feet sculpture may take around one month.
            </p>
          </div>
        </div>
      </section>

      {/* ── WhatsApp CTA Banner ── */}
      <section className="border-t border-[#D6B15C]/10 bg-[#120d08] py-16 px-6 md:px-16 text-center">
        <p className="luxury-label mb-5">Interested in this Masterpiece?</p>
        <h2 className="font-display text-3xl md:text-4xl font-light text-[#F8F1DF] mb-8 max-w-lg mx-auto">
          Message us directly for price, availability, and international shipping.
        </h2>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 border border-[#25D366] text-[#25D366] text-xs uppercase tracking-[0.22em] px-8 py-4 hover:bg-[#25D366] hover:text-black transition-all duration-300"
        >
          <MessageCircle size={14} />
          Inquire on WhatsApp
        </a>
      </section>

      {/* ── Related Masterpieces ── */}
      {related.length > 0 && (
        <section className="border-t border-[#D6B15C]/10 py-24 px-6 md:px-16">
          <p className="luxury-label mb-5">Related Masterpieces</p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-[#F8F1DF] mb-14">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((item) => (
              <Link href={`/product/${item.slug}`} key={item.id} className="group block">
                <div className="relative overflow-hidden bg-[#120d08] mb-4" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <p className="luxury-label text-[10px] mb-1.5">{item.category}</p>
                <h3 className="text-[#F8F1DF] font-light group-hover:text-[#D6B15C] transition-colors duration-300">
                  {item.name}
                </h3>
                <div className="h-px bg-[#D6B15C]/30 mt-3 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </Link>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}