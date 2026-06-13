import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { getProductBySlug, products } from "@/app/data/products";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, MessageCircle } from "lucide-react";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
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
      title: `${product.name} | Devashilpa — Handcrafted Brass Sculpture`,
      description: product.description,
      images: [{ url: product.images[0], width: 900, height: 650, alt: product.name }],
    },
    twitter: { card: "summary_large_image", title: `${product.name} | Devashilpa`, images: [product.images[0]] },
    alternates: { canonical: `https://www.devashilpa.com/product/${slug}` },
  };
}

const CRAFT_STEPS = [
  { n: "01", title: "Clay Modelling",    desc: "The form is conceived and modelled in clay by the artisan." },
  { n: "02", title: "Wax Detailing",     desc: "Every ornament and symbol is applied in fine wax." },
  { n: "03", title: "Mold Creation",     desc: "A precision mold is formed around the complete wax form." },
  { n: "04", title: "Metal Casting",     desc: "Molten brass is poured at high temperature into the mold." },
  { n: "05", title: "Hand Chiselling",   desc: "Every surface detail is refined by hand chisel and file." },
  { n: "06", title: "Hand Polishing",    desc: "Natural lustre is brought to the surface by hand." },
];

const TRUST = [
  { title: "Handcrafted\nin India",      sub: "Master artisans" },
  { title: "Worldwide\nShipping",        sub: "To every country" },
  { title: "Export Grade\nPackaging",   sub: "Museum-safe" },
  { title: "Custom Sizes\nAvailable",   sub: "12″ to 4 feet" },
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = [
    ...products.filter((p) => p.slug !== product.slug && p.category === product.category),
    ...products.filter((p) => p.slug !== product.slug && p.category !== product.category),
  ].slice(0, 3);

  const waText = `Hello Devashilpa,\n\nI am interested in:\n\nMasterpiece: ${product.name}\nCategory: ${product.category}\nMaterial: ${product.material}\nSize: ${product.size}\n\nPlease share pricing, availability, and shipping details.`;
  const waUrl  = `https://wa.me/916261068277?text=${encodeURIComponent(waText)}`;

  const specs = [
    { label: "Material",          value: product.material },
    { label: "Size",              value: product.size },
    { label: "Production Time",   value: product.productionTime },
    { label: "Shipping",          value: product.shipping },
    { label: "Packaging",         value: product.packing },
  ];

  return (
    <main style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
      <Navbar />

      {/* ── Breadcrumb ── */}
      <div
        className="section-x"
        style={{
          paddingTop: "calc(var(--nav-h) + 20px)",
          paddingBottom: 20,
          borderBottom: "1px solid var(--gold-line)",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        {[
          { href: "/",           label: "Home" },
          { href: "/collections", label: "Collection" },
          { href: null,           label: product.name },
        ].map(({ href, label }, i) => (
          <span key={label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {i > 0 && <span style={{ color: "var(--text-3)", fontSize: "0.7rem" }}>/</span>}
            {href ? (
              <Link href={href} style={{ fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-3)", textDecoration: "none" }} className="hover:text-[#C8A96E]">
                {label}
              </Link>
            ) : (
              <span style={{ fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)" }}>
                {label}
              </span>
            )}
          </span>
        ))}
      </div>

      {/* ════════════════════════════════════════════
          MUSEUM EXHIBIT LAYOUT
          Left: large image | Right: sticky info
          ════════════════════════════════════════════ */}
      <section
        className="section-x"
        style={{
          paddingTop: "clamp(40px, 5vw, 72px)",
          paddingBottom: "clamp(40px, 5vw, 72px)",
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: "clamp(32px, 5vw, 80px)",
          alignItems: "start",
        }}
      >
        {/* Left — Hero Image */}
        <div>
          <div
            className="img-zoom"
            style={{
              position: "relative",
              aspectRatio: "4/5",
              background: "var(--surface)",
              overflow: "hidden",
            }}
          >
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>

          {/* Authenticity note */}
          <div
            style={{
              marginTop: 20,
              paddingLeft: 16,
              borderLeft: "2px solid rgba(200,169,110,0.35)",
            }}
          >
            <span className="lux-label block" style={{ marginBottom: 6 }}>Authenticity</span>
            <p style={{ fontSize: "0.78rem", color: "var(--text-3)", lineHeight: 1.7 }}>
              Every Devashilpa piece is individually cast and finished by hand. Natural variations are a mark of genuine artisan work — no two pieces are ever identical.
            </p>
          </div>
        </div>

        {/* Right — Sticky info panel */}
        <div style={{ position: "sticky", top: "calc(var(--nav-h) + 24px)", alignSelf: "start" }}>
          <span className="lux-label block" style={{ marginBottom: 16 }}>{product.category}</span>

          <h1
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
              fontWeight: 300,
              lineHeight: 1.08,
              color: "#F2EBD9",
              marginBottom: 20,
            }}
          >
            {product.name}
          </h1>

          <span className="gold-rule" style={{ marginBottom: 24 }} />

          <p style={{ fontSize: "0.9rem", color: "var(--text-2)", lineHeight: 1.85, marginBottom: 32 }}>
            {product.description}
          </p>

          {/* Pricing */}
          <div
            style={{
              border: "1px solid var(--gold-line)",
              padding: "20px 24px",
              marginBottom: 28,
            }}
          >
            <span className="lux-label-muted block" style={{ marginBottom: 8 }}>Pricing</span>
            <p
              className="font-display"
              style={{ fontSize: "1.8rem", fontWeight: 300, color: "#F2EBD9", marginBottom: 8 }}
            >
              {product.price}
            </p>
            <p style={{ fontSize: "0.75rem", color: "var(--text-3)", lineHeight: 1.6 }}>
              Final price varies by size, material, detailing, finish, and shipping destination.
            </p>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <button
                className="btn-gold"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <MessageCircle size={14} />
                Ask Price on WhatsApp
              </button>
            </a>
            <Link href="/custom-order" style={{ textDecoration: "none" }}>
              <button className="btn-outline" style={{ width: "100%", justifyContent: "center" }}>
                Request Custom Creation <ArrowRight size={12} />
              </button>
            </Link>
            <Link href="/collections" className="btn-ghost" style={{ justifyContent: "center", padding: "10px 0" }}>
              ← Back to Collection
            </Link>
          </div>

          {/* Specifications */}
          <div style={{ borderTop: "1px solid var(--gold-line)", paddingTop: 24 }}>
            {specs.map(({ label, value }, i) => (
              <div
                key={label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1.8fr",
                  gap: 16,
                  padding: "14px 0",
                  borderBottom: i < specs.length - 1 ? "1px solid var(--gold-line)" : "none",
                }}
              >
                <span className="lux-label-muted">{label}</span>
                <span style={{ fontSize: "0.8rem", color: "var(--text-2)", lineHeight: 1.5 }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          TRUST SIGNALS
          ════════════════════════════════════════════ */}
      <section
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--gold-line)",
          borderBottom: "1px solid var(--gold-line)",
        }}
      >
        <div
          className="divider-grid divider-grid-surface"
          style={{
            gridTemplateColumns: `repeat(${TRUST.length}, 1fr)`,
          }}
        >
          {TRUST.map(({ title, sub }) => (
            <div key={title} style={{ padding: "clamp(24px, 4vw, 48px) 20px", textAlign: "center" }}>
              <p
                style={{
                  fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)",
                  fontWeight: 300,
                  color: "#F2EBD9",
                  lineHeight: 1.4,
                  whiteSpace: "pre-line",
                  marginBottom: 8,
                }}
              >
                {title}
              </p>
              <span className="lux-label-muted">{sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          HERITAGE STORY
          ════════════════════════════════════════════ */}
      <section
        className="section-x section-y"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "clamp(40px, 6vw, 100px)",
          alignItems: "start",
          borderBottom: "1px solid var(--gold-line)",
        }}
      >
        <div>
          <span className="lux-label block" style={{ marginBottom: 24 }}>Heritage &amp; Story</span>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)", fontWeight: 300, lineHeight: 1.1, color: "#F2EBD9", marginBottom: 24 }}
          >
            This is not a product. It is an heirloom.
          </h2>
          <span className="gold-rule" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <p style={{ fontSize: "0.9rem", color: "var(--text-2)", lineHeight: 1.85 }}>
            Every Devashilpa masterpiece is created through a seven-step traditional process — clay modelling, wax detailing, mold creation, metal casting, hand chiselling, polishing, and inspection — that has been passed through generations of Indian artisans.
          </p>
          <p style={{ fontSize: "0.9rem", color: "var(--text-2)", lineHeight: 1.85 }}>
            Because every stage is done entirely by hand, each sculpture carries natural variations that make it genuinely unique. These are not flaws — they are the signature of authentic craft.
          </p>
          <p style={{ fontSize: "0.9rem", color: "var(--text-2)", lineHeight: 1.85 }}>
            When you acquire a Devashilpa piece, you are not buying a decorative object. You are acquiring something made by human hands, with devotion and skill, that will endure for generations.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CRAFTSMANSHIP STEPS
          ════════════════════════════════════════════ */}
      <section className="section-x section-y" style={{ borderBottom: "1px solid var(--gold-line)" }}>
        <span className="lux-label block" style={{ marginBottom: 48 }}>The Making</span>
        <div
          className="divider-grid"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}
        >
          {CRAFT_STEPS.map(({ n, title, desc }) => (
            <div key={n} style={{ padding: "clamp(24px, 3vw, 40px)", background: "var(--bg)" }} className="group">
              <span
                style={{ fontSize: "0.65rem", fontFamily: "monospace", color: "var(--text-3)", letterSpacing: "0.1em", display: "block", marginBottom: 20, transition: "color 0.3s" }}
                className="group-hover:text-[#C8A96E]"
              >
                {n}
              </span>
              <p style={{ fontSize: "0.95rem", fontWeight: 400, color: "#F2EBD9", marginBottom: 10, lineHeight: 1.3 }}>{title}</p>
              <p style={{ fontSize: "0.78rem", color: "var(--text-3)", lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          WHATSAPP CTA BANNER
          ════════════════════════════════════════════ */}
      <section
        className="section-x section-y"
        style={{
          background: "var(--surface)",
          borderBottom: "1px solid var(--gold-line)",
          textAlign: "center",
        }}
      >
        <span className="lux-label block" style={{ marginBottom: 20 }}>Interested in this Masterpiece?</span>
        <h2
          className="font-display"
          style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)", fontWeight: 300, color: "#F2EBD9", marginBottom: 16, maxWidth: 560, margin: "0 auto 16px" }}
        >
          Message us for pricing, availability &amp; international shipping.
        </h2>
        <p style={{ fontSize: "0.85rem", color: "var(--text-2)", marginBottom: 36 }}>
          We respond promptly on WhatsApp.
        </p>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          <button className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <MessageCircle size={13} />
            Inquire on WhatsApp
          </button>
        </a>
      </section>

      {/* ════════════════════════════════════════════
          RELATED MASTERPIECES
          ════════════════════════════════════════════ */}
      {related.length > 0 && (
        <section className="section-x section-y">
          <span className="lux-label block" style={{ marginBottom: 48 }}>Related Masterpieces</span>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "clamp(24px, 3vw, 40px)",
            }}
          >
            {related.map((item) => (
              <Link key={item.id} href={`/product/${item.slug}`} style={{ display: "block", textDecoration: "none" }} className="group card-lift">
                <div
                  className="img-zoom"
                  style={{ position: "relative", aspectRatio: "3/4", background: "var(--surface)", overflow: "hidden", marginBottom: 16 }}
                >
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)", opacity: 0, transition: "opacity 0.5s" }} className="group-hover:opacity-100" />
                </div>
                <span className="lux-label block" style={{ marginBottom: 8 }}>{item.category}</span>
                <h3 style={{ fontSize: "1rem", fontWeight: 300, color: "#F2EBD9", transition: "color 0.3s", lineHeight: 1.3 }} className="group-hover:text-[#C8A96E]">
                  {item.name}
                </h3>
                <div style={{ height: 1, background: "var(--gold)", marginTop: 10, transform: "scaleX(0)", transformOrigin: "left", opacity: 0.4, transition: "transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)" }} className="group-hover:scale-x-100" />
              </Link>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}