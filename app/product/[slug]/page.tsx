import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Reveal, FadeIn, ScaleIn, StaggerGroup, StaggerItem, SlideIn } from "@/app/components/Animations";
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
      title: `${product.name} — Handcrafted Brass Sculpture | Devashilpa`,
      description: product.description,
      images: [{ url: product.images[0].replace("main.jpg", "lux.jpg"), width: 1200, height: 900, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Devashilpa`,
      images: [product.images[0].replace("main.jpg", "lux.jpg")],
    },
    alternates: { canonical: `https://www.devashilpa.com/product/${slug}` },
  };
}

const TRUST = [
  { title: "Handcrafted\nin India",    sub: "Master artisans" },
  { title: "Worldwide\nShipping",      sub: "To every country" },
  { title: "Export Grade\nPackaging",  sub: "Museum-safe" },
  { title: "Custom Sizes\nAvailable",  sub: "12″ to 4 feet" },
  { title: "Museum Quality\nFinishing", sub: "Heirloom standard" },
];

const CRAFT = [
  { n: "01", title: "Clay Mold Creation",  desc: "The sculpture form is conceived and shaped in clay by the artisan's hand." },
  { n: "02", title: "Traditional Casting", desc: "Molten brass or copper is poured at high temperature into the precision mold." },
  { n: "03", title: "Hand Finishing",      desc: "Every surface detail — garments, ornaments, expressions — is refined by chisel." },
  { n: "04", title: "Hand Polishing",      desc: "Natural lustre is brought to the surface through patient hand polishing." },
  { n: "05", title: "Quality Inspection",  desc: "Each piece is inspected to museum-grade standards before being packed for dispatch." },
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

  const waText = encodeURIComponent(
    `Hello Devashilpa,\n\nI am interested in:\n\nMasterpiece: ${product.name}\nCategory: ${product.category}\nMaterial: ${product.material}\nSize: ${product.size}\n\nPlease share pricing, availability, and international shipping details.`
  );
  const waUrl = `https://wa.me/916261068277?text=${waText}`;

  const specs = [
    { label: "Material",         value: product.material },
    { label: "Size",             value: product.size },
    { label: "Production Time",  value: product.productionTime },
    { label: "Shipping",         value: product.shipping },
    { label: "Packaging",        value: product.packing },
  ];

  // Image paths for the product
  const luxImg   = product.images[0].replace("main.jpg", "lux.jpg");
  const heroImg  = product.images[0].replace("main.jpg", "hero.jpg");
  const whiteImg = product.images[0].replace("main.jpg", "white.jpg");

  return (
    <main style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
      <Navbar />

      {/* ── Breadcrumb ── */}
      <div
        className="section-x"
        style={{
          paddingTop: "calc(var(--nav-h) + 18px)",
          paddingBottom: 18,
          borderBottom: "1px solid var(--gold-line)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        {[
          { href: "/",            label: "Home" },
          { href: "/collections", label: "Collection" },
          { href: null,           label: product.name },
        ].map(({ href, label }, i) => (
          <span key={label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {i > 0 && <span style={{ color: "var(--text-4)", fontSize: "0.7rem" }}>/</span>}
            {href ? (
              <Link
                href={href}
                style={{ fontSize: "0.58rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--text-3)" }}
                className="hover-gold"
              >
                {label}
              </Link>
            ) : (
              <span style={{ fontSize: "0.58rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--gold)" }}>
                {label}
              </span>
            )}
          </span>
        ))}
      </div>

      {/* ═══════════════════════════════════════════
          ROLEX-LEVEL PRODUCT LAYOUT
          Left: large image gallery
          Right: sticky info panel
          ═══════════════════════════════════════════ */}
      <section
        className="section-x"
        style={{
          paddingTop: "clamp(40px, 5vw, 72px)",
          paddingBottom: "clamp(40px, 5vw, 72px)",
          display: "grid",
          gridTemplateColumns: "1.15fr 1fr",
          gap: "clamp(32px, 5vw, 80px)",
          alignItems: "start",
        }}
      >
        {/* LEFT — Image Gallery */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

          {/* Hero — lux.jpg: large dramatic atmospheric image */}
          <ScaleIn>
            <div
              className="img-zoom"
              style={{
                position: "relative",
                aspectRatio: "4/5",
                background: "var(--surface-2)",
                overflow: "hidden",
              }}
            >
              <Image
                src={luxImg}
                alt={`${product.name} — luxury presentation`}
                fill
                priority
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 55vw"
              />
            </div>
          </ScaleIn>

          {/* Secondary row — white.jpg + hero.jpg */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <ScaleIn delay={0.1}>
              <div
                className="img-zoom"
                style={{
                  position: "relative",
                  aspectRatio: "1/1",
                  background: "#F5F0E8",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={whiteImg}
                  alt={`${product.name} — white background`}
                  fill
                  style={{ objectFit: "contain", padding: "12px" }}
                  sizes="30vw"
                />
              </div>
            </ScaleIn>
            <ScaleIn delay={0.2}>
              <div
                className="img-zoom"
                style={{
                  position: "relative",
                  aspectRatio: "1/1",
                  background: "var(--surface-2)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={heroImg}
                  alt={`${product.name} — detail view`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="30vw"
                />
              </div>
            </ScaleIn>
          </div>

          {/* Authenticity note */}
          <FadeIn>
            <div
              style={{
                marginTop: 8,
                paddingLeft: 16,
                borderLeft: "2px solid rgba(212,175,106,0.35)",
              }}
            >
              <span className="label" style={{ display: "block", marginBottom: 6 }}>Authenticity</span>
              <p style={{ fontSize: "0.78rem", color: "var(--text-3)", lineHeight: 1.75 }}>
                Every Devashilpa piece is individually cast and finished by hand. Natural variations are a mark of genuine artisan work — no two pieces are ever identical.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* RIGHT — Sticky Info Panel */}
        <div style={{ position: "sticky", top: "calc(var(--nav-h) + 24px)", alignSelf: "start" }}>
          <SlideIn direction="right">
            <span className="label" style={{ display: "block", marginBottom: 16 }}>
              {product.category}
            </span>

            <h1
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3.4rem)",
                fontWeight: 300,
                lineHeight: 1.07,
                color: "#F5EDD8",
                marginBottom: 20,
              }}
            >
              {product.name}
            </h1>

            <span className="rule" style={{ marginBottom: 24 }} />

            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-2)",
                lineHeight: 1.9,
                marginBottom: 32,
              }}
            >
              {product.description}
            </p>

            {/* Pricing block */}
            <div
              style={{
                border: "1px solid var(--gold-line)",
                padding: "20px 24px",
                marginBottom: 28,
              }}
            >
              <span className="label-muted" style={{ display: "block", marginBottom: 10 }}>Pricing</span>
              <p
                className="font-display"
                style={{ fontSize: "1.9rem", fontWeight: 300, color: "#F5EDD8", marginBottom: 8 }}
              >
                {product.price}
              </p>
              <p style={{ fontSize: "0.75rem", color: "var(--text-3)", lineHeight: 1.65 }}>
                Final price varies by size, material, detailing, finish, and shipping destination. Contact us for a precise quote.
              </p>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <button
                  className="btn btn-gold"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <MessageCircle size={14} />
                  Ask Price on WhatsApp
                </button>
              </a>
              <Link href="/custom-order" style={{ textDecoration: "none" }}>
                <button
                  className="btn btn-outline-gold"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Request Custom Creation <ArrowRight size={12} />
                </button>
              </Link>
              <Link
                href="/collections"
                className="btn-text"
                style={{ justifyContent: "center", padding: "10px 0" }}
              >
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
                    padding: "13px 0",
                    borderBottom: i < specs.length - 1 ? "1px solid var(--gold-line)" : "none",
                  }}
                >
                  <span className="label-muted">{label}</span>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-2)", lineHeight: 1.55 }}>{value}</span>
                </div>
              ))}
            </div>
          </SlideIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TRUST SIGNALS
          ═══════════════════════════════════════════ */}
      <FadeIn>
        <section
          style={{
            background: "var(--surface)",
            borderTop: "1px solid var(--gold-line)",
            borderBottom: "1px solid var(--gold-line)",
          }}
        >
          <div
            className="grid-divider grid-divider-s"
            style={{ gridTemplateColumns: `repeat(${TRUST.length}, 1fr)` }}
          >
            {TRUST.map(({ title, sub }) => (
              <div
                key={title}
                style={{ padding: "clamp(24px, 3.5vw, 44px) 20px", textAlign: "center" }}
              >
                <p
                  style={{
                    fontSize: "clamp(0.82rem, 1.3vw, 1rem)",
                    fontWeight: 300,
                    color: "#F5EDD8",
                    lineHeight: 1.4,
                    whiteSpace: "pre-line",
                    marginBottom: 8,
                  }}
                >
                  {title}
                </p>
                <span className="label-muted">{sub}</span>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ═══════════════════════════════════════════
          HERITAGE STORYTELLING
          ═══════════════════════════════════════════ */}
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
        <Reveal>
          <span className="label" style={{ display: "block", marginBottom: 24 }}>Heritage &amp; Story</span>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.8rem, 3vw, 3.2rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "#F5EDD8",
              marginBottom: 24,
            }}
          >
            Not a product. An heirloom.
          </h2>
          <span className="rule" />
        </Reveal>

        <StaggerGroup>
          <StaggerItem>
            <p style={{ fontSize: "0.9rem", color: "var(--text-2)", lineHeight: 1.9, marginBottom: 20 }}>
              Every Devashilpa masterpiece is created through a five-step traditional process — clay modelling, traditional casting, hand finishing, polishing, and quality inspection — that has been inherited across generations of Indian artisans.
            </p>
          </StaggerItem>
          <StaggerItem>
            <p style={{ fontSize: "0.9rem", color: "var(--text-2)", lineHeight: 1.9, marginBottom: 20 }}>
              Because every stage is done entirely by hand, each sculpture carries natural variations that make it genuinely unique. These are not flaws — they are the signature of authentic craft.
            </p>
          </StaggerItem>
          <StaggerItem>
            <p style={{ fontSize: "0.9rem", color: "var(--text-2)", lineHeight: 1.9 }}>
              When you acquire a Devashilpa piece, you are not buying a decorative object. You are acquiring something made by human hands, with devotion and skill, that will endure for generations.
            </p>
          </StaggerItem>
        </StaggerGroup>
      </section>

      {/* ═══════════════════════════════════════════
          CRAFTSMANSHIP SECTION
          ═══════════════════════════════════════════ */}
      <section className="section-x section-y" style={{ borderBottom: "1px solid var(--gold-line)" }}>
        <Reveal>
          <span className="label" style={{ display: "block", marginBottom: 52 }}>The Making</span>
        </Reveal>
        <div
          className="grid-divider"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}
        >
          {CRAFT.map(({ n, title, desc }) => (
            <div
              key={n}
              style={{ background: "var(--bg)", padding: "clamp(24px, 3vw, 40px)" }}
              className="group"
            >
              <span
                style={{
                  fontSize: "0.65rem",
                  fontFamily: "monospace",
                  color: "var(--text-3)",
                  letterSpacing: "0.1em",
                  display: "block",
                  marginBottom: 20,
                  transition: "color 0.3s",
                }}
                className="group-hover:text-[#D4AF6A]"
              >
                {n}
              </span>
              <p style={{ fontSize: "0.95rem", fontWeight: 400, color: "#F5EDD8", marginBottom: 10, lineHeight: 1.3 }}>
                {title}
              </p>
              <p style={{ fontSize: "0.78rem", color: "var(--text-3)", lineHeight: 1.75 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHATSAPP CTA BANNER
          ═══════════════════════════════════════════ */}
      <Reveal>
        <section
          className="section-x section-y"
          style={{
            background: "var(--surface)",
            borderBottom: "1px solid var(--gold-line)",
            textAlign: "center",
          }}
        >
          <span className="label" style={{ display: "block", marginBottom: 20 }}>
            Interested in this Masterpiece?
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.8rem, 3vw, 3.2rem)",
              fontWeight: 300,
              color: "#F5EDD8",
              maxWidth: 560,
              margin: "0 auto 16px",
              lineHeight: 1.15,
            }}
          >
            Message us for pricing, availability &amp; international shipping.
          </h2>
          <p style={{ fontSize: "0.85rem", color: "var(--text-3)", marginBottom: 36 }}>
            We respond promptly. No commitment required.
          </p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <button
              className="btn btn-outline-gold"
              style={{ display: "inline-flex", alignItems: "center", gap: 10 }}
            >
              <MessageCircle size={13} />
              Inquire on WhatsApp
            </button>
          </a>
        </section>
      </Reveal>

      {/* ═══════════════════════════════════════════
          RELATED MASTERPIECES
          ═══════════════════════════════════════════ */}
      {related.length > 0 && (
        <section className="section-x section-y">
          <Reveal>
            <span className="label" style={{ display: "block", marginBottom: 52 }}>
              Related Masterpieces
            </span>
          </Reveal>
          <StaggerGroup>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: "clamp(24px, 3vw, 40px)",
              }}
            >
              {related.map((item) => (
                <StaggerItem key={item.id}>
                  <Link href={`/product/${item.slug}`} style={{ display: "block", textDecoration: "none" }} className="group">
                    <div
                      className="img-zoom"
                      style={{
                        position: "relative",
                        aspectRatio: "3/4",
                        background: "var(--surface-2)",
                        overflow: "hidden",
                        marginBottom: 16,
                      }}
                    >
                      <Image
                        src={item.images[0].replace("main.jpg", "lux.jpg")}
                        alt={item.name}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)",
                          opacity: 0,
                          transition: "opacity 0.5s",
                        }}
                        className="group-hover:opacity-100"
                      />
                    </div>
                    <span className="label" style={{ display: "block", marginBottom: 8 }}>{item.category}</span>
                    <h3
                      style={{ fontSize: "1rem", fontWeight: 300, color: "#F5EDD8", transition: "color 0.3s", lineHeight: 1.35 }}
                      className="group-hover:text-[#D4AF6A]"
                    >
                      {item.name}
                    </h3>
                    <div
                      style={{
                        height: 1,
                        background: "var(--gold)",
                        marginTop: 10,
                        opacity: 0.4,
                        transform: "scaleX(0)",
                        transformOrigin: "left",
                        transition: "transform 0.55s var(--ease-smooth)",
                      }}
                      className="group-hover:scale-x-100"
                    />
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </StaggerGroup>
        </section>
      )}

      <Footer />
    </main>
  );
}