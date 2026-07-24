import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Reveal, FadeIn, ScaleIn, StaggerGroup, StaggerItem, SlideIn } from "@/app/components/Animations";
import { products } from "@/app/data/products";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Devashilpa | Handcrafted Indian Brass Sculptures",
  description:
    "Museum-grade handcrafted brass and copper masterpieces by Indian artisans. Collector-grade divine sculptures, heritage art, and temple decor. Worldwide shipping.",
  alternates: { canonical: "https://www.devashilpa.com" },
};

const FEATURED = [
  "parthasarathy-chariot",
  "surya-rath-grand-edition",
  "vishnu",
  "durga-mahishasura-mardini",
  "ram-darbar",
  "ganesha-chariot",
];

const PROCESS = [
  { n: "01", title: "Clay Mold Creation",   desc: "The sculpture form is modelled in clay by hand — the foundation of every masterpiece." },
  { n: "02", title: "Traditional Casting",  desc: "Molten brass or copper is poured at high temperature into a precision mold." },
  { n: "03", title: "Hand Finishing",       desc: "Every surface detail — garments, ornaments, expressions — is refined by chisel." },
  { n: "04", title: "Hand Polishing",       desc: "The sculpture is polished by hand until its natural metallic lustre emerges." },
  { n: "05", title: "Worldwide Delivery",   desc: "Securely packed in export-grade materials and shipped to collectors worldwide." },
];

const TRUST = [
  { title: "Handcrafted\nin India",     sub: "By master artisans" },
  { title: "International\nShipping",   sub: "To every country" },
  { title: "Custom\nCommissions",       sub: "Any size or deity" },
  { title: "Export Grade\nPackaging",   sub: "Museum-safe delivery" },
  { title: "Museum Quality\nFinishing", sub: "Heirloom standard" },
];

export default function Home() {
  const featured = FEATURED
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean) as typeof products;

  return (
    <main style={{ background: "#080604", color: "#F5EDD8" }}>
      <Navbar />

      {/* ═══════════════════════════════════════════
          SECTION 1 — CINEMATIC HERO
          Background: lux.jpg (luxury dark dramatic)
          ═══════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          minHeight: "80vh",
          overflow: "hidden",
        }}
      >
        {/* lux.jpg hero background with subtle parallax setup (transform scaled) */}
        <Image
          src="/products/parthasarathy-chariot/lux.jpg"
          alt="Parthasarathy Chariot — museum-grade handcrafted brass by Devashilpa"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center", transform: "scale(1.05)" }}
          sizes="100vw"
        />

        {/* Subtle gradient overlay to add texture and ensure text readability, matching brass/heritage tone */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.4) 50%, rgba(176,141,87,0.15) 100%)",
          }}
        />

        {/* Content */}
        <div
          className="section-x"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: "var(--nav-h)",
          }}
        >
          <div style={{ maxWidth: 860 }}>

            <p className="anim-hero-1" style={{ 
              marginBottom: 32, 
              letterSpacing: "0.15em", 
              fontSize: "13px", 
              color: "var(--text-3)", 
              textTransform: "uppercase" 
            }}>
              Devashilpa — Shajapur, India
            </p>

            <h1
              className="font-display anim-hero-2"
              style={{
                fontSize: "clamp(36px, 7vw, 96px)",
                lineHeight: 1.05,
                color: "var(--text)",
                marginBottom: 32,
              }}
            >
              Handcrafted Indian Masterpieces.
            </h1>

            <p
              className="anim-hero-3"
              style={{
                color: "var(--text-2)",
                fontSize: "clamp(1rem, 1.4vw, 1.1rem)",
                lineHeight: 1.6,
                maxWidth: 480,
                marginBottom: "clamp(48px, 6vw, 72px)",
              }}
            >
              Museum-grade brass sculptures crafted through generations of traditional Indian artistry. Each piece is a heirloom.
            </p>

            <div
              className="anim-hero-4"
              style={{ display: "flex", flexWrap: "wrap", gap: 40, alignItems: "center" }}
            >
              <Link href="/collections" className="btn btn-gold">
                Explore the Collection
              </Link>
              <Link href="/custom-order" className="underline-anim" style={{ 
                fontSize: "12px", 
                letterSpacing: "0.15em", 
                textTransform: "uppercase", 
                color: "var(--text)" 
              }}>
                Request Custom Creation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — BRAND STORY (Editorial split)
          lux.jpg from another product + large type
          ═══════════════════════════════════════════ */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: 700,
          borderTop: "1px solid var(--gold-line)",
          borderBottom: "1px solid var(--gold-line)",
        }}
        className="max-md:grid-cols-1"
      >
        {/* Left — Large luxury image */}
        <ScaleIn>
          <div
            className="img-zoom"
            style={{ position: "relative", minHeight: 560, height: "100%" }}
          >
            <Image
              src="/products/ram-darbar/lux.jpg"
              alt="Ram Darbar — heritage brass sculpture by Devashilpa"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Subtle dark overlay at bottom */}
            <div
              style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                height: "30%",
                background: "linear-gradient(to top, rgba(8,6,4,0.65), transparent)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 28,
                left: 28,
              }}
            >
              <span className="label-white">Ram Darbar Heritage Ensemble</span>
            </div>
          </div>
        </ScaleIn>

        {/* Right — Story */}
        <SlideIn direction="right">
          <div
            className="section-x section-y"
            style={{
              background: "var(--surface)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <span className="label" style={{ marginBottom: 28 }}>The Devashilpa Story</span>

            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2.2rem, 3.5vw, 3.6rem)",
                lineHeight: 1.1,
                color: "#F5EDD8",
                marginBottom: 32,
              }}
            >
              Not products.<br />
              <em style={{ fontStyle: "italic", color: "#D4AF6A" }}>Heirlooms.</em>
            </h2>

            <span className="rule" style={{ marginBottom: 32 }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 440 }}>
              <p style={{ color: "#C8BAA0", fontSize: "0.95rem", lineHeight: 1.9 }}>
                Devashilpa is a family workshop in Shajapur, Madhya Pradesh, where the tradition of brass sculpture has been inherited across generations. Every piece begins as raw clay in an artisan&apos;s hands.
              </p>
              <p style={{ color: "#C8BAA0", fontSize: "0.95rem", lineHeight: 1.9 }}>
                What follows is a weeks-long journey through traditional casting, patient hand-finishing, and meticulous polishing — until a finished masterpiece emerges, unlike any other piece ever made.
              </p>
            </div>

            <div style={{ marginTop: 44 }}>
              <Link href="/about" className="btn btn-outline-gold">
                Our Heritage <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </SlideIn>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — FEATURED MASTERPIECES
          Apple-style cards with lux.jpg images
          ═══════════════════════════════════════════ */}
      <section className="section-x section-y">
        {/* Header */}
        <Reveal>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 20,
              marginBottom: "clamp(48px, 6vw, 80px)",
            }}
          >
            <div>
              <span className="label" style={{ display: "block", marginBottom: 20 }}>Featured Masterpieces</span>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(2.4rem, 4.5vw, 4.2rem)",
                  lineHeight: 1.08,
                  color: "#F5EDD8",
                  maxWidth: 520,
                }}
              >
                Selected Works from<br />the Collection
              </h2>
            </div>
            <Link href="/collections" className="btn-text underline-anim" style={{ alignSelf: "flex-end" }}>
              View All 22+ Works <ArrowRight size={12} />
            </Link>
          </div>
        </Reveal>

        {/* Gallery — alternating sizes like Apple */}
        <StaggerGroup>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "clamp(14px, 2vw, 24px)",
            }}
          >
            {featured.map((product, i) => (
              <StaggerItem key={product.id}>
                <Link
                  href={`/product/${product.slug}`}
                  style={{ display: "block", textDecoration: "none" }}
                  className="group"
                >
                  {/* Image — use lux.jpg for rich dramatic presentation */}
                  <div
                    className="img-zoom"
                    style={{
                      position: "relative",
                      aspectRatio: i === 0 ? "3/4" : i === 1 ? "3/4" : "4/5",
                      background: "var(--surface-2)",
                      overflow: "hidden",
                      marginBottom: 18,
                    }}
                  >
                    <Image
                      src={product.images[0].replace("main.jpg", "lux.jpg")}
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    />

                    {/* Subtle gradient */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)",
                        opacity: 0,
                        transition: "opacity 0.5s ease",
                      }}
                      className="group-hover:opacity-100"
                    />

                    {/* CTA text on hover */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 20, left: 20, right: 20,
                        opacity: 0,
                        transform: "translateY(10px)",
                        transition: "all 0.5s var(--ease-smooth)",
                      }}
                      className="group-hover:opacity-100 group-hover:translate-y-0"
                    >
                      <span
                        style={{
                          fontSize: "0.6rem",
                          letterSpacing: "0.28em",
                          textTransform: "uppercase",
                          color: "#F5EDD8",
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        View Masterpiece <ArrowRight size={11} />
                      </span>
                    </div>

                    {product.featured && (
                      <div
                        style={{
                          position: "absolute",
                          top: 16, left: 16,
                          background: "var(--gold)",
                          color: "#060402",
                          fontSize: "0.55rem",
                          fontWeight: 600,
                          letterSpacing: "0.25em",
                          textTransform: "uppercase",
                          padding: "5px 12px",
                        }}
                      >
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Text */}
                  <span className="label" style={{ display: "block", marginBottom: 8 }}>
                    {product.category}
                  </span>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 300,
                      color: "#F5EDD8",
                      lineHeight: 1.35,
                      transition: "color 0.3s",
                    }}
                    className="group-hover:text-[#D4AF6A]"
                  >
                    {product.name}
                  </h3>

                  {/* Animated gold line */}
                  <div
                    style={{
                      height: 1,
                      background: "var(--gold)",
                      marginTop: 12,
                      opacity: 0.45,
                      transform: "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.6s var(--ease-smooth)",
                    }}
                    className="group-hover:scale-x-100"
                  />
                </Link>
              </StaggerItem>
            ))}
          </div>
        </StaggerGroup>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — CRAFTSMANSHIP PROCESS
          Luxury timeline
          ═══════════════════════════════════════════ */}
      <section
        style={{
          borderTop: "1px solid var(--gold-line)",
          borderBottom: "1px solid var(--gold-line)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: 0,
          }}
          className="max-md:grid-cols-1"
        >
          {/* Left — Sticky heading */}
          <div
            className="section-x section-y"
            style={{
              background: "var(--surface)",
              borderRight: "1px solid var(--gold-line)",
            }}
          >
            <div className="md:sticky md:top-24">
              <Reveal>
                <span className="label" style={{ display: "block", marginBottom: 28 }}>The Craft</span>
                <h2
                  className="font-display"
                  style={{
                    fontSize: "clamp(2rem, 3.5vw, 3.4rem)",
                    lineHeight: 1.1,
                    color: "#F5EDD8",
                    marginBottom: 28,
                  }}
                >
                  Five steps.<br />Weeks of work.<br />One masterpiece.
                </h2>
                <span className="rule" style={{ marginBottom: 28 }} />
                <p style={{ color: "#C8BAA0", fontSize: "0.88rem", lineHeight: 1.9, maxWidth: 300 }}>
                  Every Devashilpa sculpture is made entirely by hand. No shortcuts. No mass production. Only inherited skill and patient Indian craftsmanship.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Right — Process steps */}
          <div className="section-x section-y">
            <StaggerGroup>
              {PROCESS.map(({ n, title, desc }) => (
                <StaggerItem key={n}>
                  <div
                    style={{
                      display: "flex",
                      gap: 28,
                      paddingBottom: "clamp(28px, 4vw, 44px)",
                      marginBottom: "clamp(28px, 4vw, 44px)",
                      borderBottom: "1px solid var(--gold-line)",
                    }}
                    className="group"
                  >
                    <span
                      style={{
                        fontSize: "0.65rem",
                        fontFamily: "monospace",
                        color: "var(--text-3)",
                        letterSpacing: "0.1em",
                        paddingTop: 4,
                        minWidth: 28,
                        transition: "color 0.3s",
                        flexShrink: 0,
                      }}
                      className="group-hover:text-[#D4AF6A]"
                    >
                      {n}
                    </span>
                    <div>
                      <p
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 400,
                          color: "#F5EDD8",
                          marginBottom: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {title}
                      </p>
                      <p style={{ color: "#7A6E58", fontSize: "0.85rem", lineHeight: 1.8 }}>
                        {desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — TRUST SECTION
          Divider grid with luxury signal items
          ═══════════════════════════════════════════ */}
      <FadeIn>
        <section
          style={{
            background: "var(--surface)",
            borderBottom: "1px solid var(--gold-line)",
          }}
        >
          <div
            className="grid-divider grid-divider-s"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            }}
          >
            {TRUST.map(({ title, sub }) => (
              <div
                key={title}
                style={{
                  padding: "clamp(32px, 4vw, 56px) 24px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                    fontWeight: 300,
                    color: "#F5EDD8",
                    lineHeight: 1.4,
                    whiteSpace: "pre-line",
                    marginBottom: 10,
                  }}
                >
                  {title}
                </p>
                <span className="label-muted">{sub}</span>
              </div>
            ))}
          </div>

          {/* Worldwide destinations */}
          <div
            className="section-x"
            style={{
              paddingTop: "clamp(32px, 4vw, 52px)",
              paddingBottom: "clamp(32px, 4vw, 52px)",
              textAlign: "center",
              borderTop: "1px solid var(--gold-line)",
            }}
          >
            <p className="label-muted" style={{ marginBottom: 16 }}>
              Shipped to collectors in
            </p>
            <p
              className="font-display"
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
                fontWeight: 300,
                color: "#C8BAA0",
                letterSpacing: "0.04em",
              }}
            >
              USA &nbsp;·&nbsp; UK &nbsp;·&nbsp; Germany &nbsp;·&nbsp; France &nbsp;·&nbsp; Australia &nbsp;·&nbsp; UAE
            </p>
          </div>
        </section>
      </FadeIn>

      {/* ═══════════════════════════════════════════
          SECTION 6 — LUXURY CTA BANNER
          Background: hero.jpg
          "Create a Legacy Piece."
          ═══════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: 500,
        }}
      >
        <Image
          src="/products/surya-rath-grand-edition/hero.jpg"
          alt="Surya Rath — Devashilpa brass sculpture"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(4,3,2,0.82)",
          }}
        />

        <div
          className="section-x section-y"
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Reveal>
            <span className="label-white" style={{ display: "block", marginBottom: 28 }}>
              Bespoke Commission
            </span>

            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 6rem)",
                lineHeight: 1.06,
                color: "#F5EDD8",
                maxWidth: 700,
                marginBottom: 28,
                margin: "0 auto 28px",
              }}
            >
              Create a Legacy Piece.
            </h2>

            <p
              style={{
                color: "rgba(200,186,160,0.85)",
                fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)",
                lineHeight: 1.85,
                maxWidth: 480,
                margin: "0 auto",
                marginBottom: 44,
              }}
            >
              Commission a sculpture shaped entirely by your vision — your preferred deity, size, material, and finish. Created only for you.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
              <Link href="/custom-order" className="btn btn-gold">
                Begin Your Commission <ArrowRight size={13} />
              </Link>
              <Link href="/collections" className="btn btn-outline-white">
                Browse the Collection
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}