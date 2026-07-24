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
          ═══════════════════════════════════════════ */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "90vh",
          borderTop: "1px solid var(--gold-line)",
          borderBottom: "1px solid var(--gold-line)",
        }}
        className="max-md:grid-cols-1"
      >
        {/* Left — Large luxury image */}
        <ScaleIn>
          <div
            className="img-zoom"
            style={{ position: "relative", minHeight: "60vh", height: "100%" }}
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
                background: "linear-gradient(to top, rgba(10,10,10,0.85), transparent)",
              }}
            />
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
            <span style={{ 
              marginBottom: 40, 
              fontSize: "12px", 
              letterSpacing: "0.15em", 
              textTransform: "uppercase", 
              color: "var(--text-3)" 
            }}>
              The Devashilpa Story
            </span>

            <h2
              className="font-display"
              style={{
                fontSize: "clamp(40px, 4vw, 56px)",
                lineHeight: 1.1,
                color: "var(--text)",
                marginBottom: 48,
              }}
            >
              Not products.<br />
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Heirlooms.</em>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 32, maxWidth: 520 }}>
              <p style={{ color: "var(--text-2)", fontSize: "16px", lineHeight: 1.8 }}>
                Devashilpa is a family workshop in Shajapur, Madhya Pradesh, where the tradition of brass sculpture has been inherited across generations. Every piece begins as raw clay in an artisan&apos;s hands.
              </p>
              <p style={{ color: "var(--text-2)", fontSize: "16px", lineHeight: 1.8 }}>
                What follows is a weeks-long journey through traditional casting, patient hand-finishing, and meticulous polishing — until a finished masterpiece emerges, unlike any other piece ever made.
              </p>
            </div>

            <div style={{ marginTop: 56 }}>
              <Link href="/about" className="underline-anim" style={{ 
                fontSize: "13px", 
                letterSpacing: "0.15em", 
                textTransform: "uppercase", 
                color: "var(--text)" 
              }}>
                Discover Our Heritage
              </Link>
            </div>
          </div>
        </SlideIn>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — FEATURED MASTERPIECES
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
              gap: 40,
              marginBottom: "clamp(60px, 8vw, 120px)",
            }}
          >
            <div>
              <span style={{ display: "block", marginBottom: 24, fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-3)" }}>
                Featured Masterpieces
              </span>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(48px, 5vw, 64px)",
                  lineHeight: 1.05,
                  color: "var(--text)",
                  maxWidth: 600,
                }}
              >
                Selected Works from<br />the Collection
              </h2>
            </div>
            <Link href="/collections" className="underline-anim" style={{ alignSelf: "flex-end", fontSize: "13px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text)" }}>
              View All Works
            </Link>
          </div>
        </Reveal>

        {/* Gallery */}
        <StaggerGroup>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
              gap: "clamp(40px, 5vw, 80px)",
            }}
          >
            {featured.slice(0, 4).map((product) => (
              <StaggerItem key={product.id}>
                <Link
                  href={`/product/${product.slug}`}
                  style={{ display: "block", textDecoration: "none" }}
                  className="group"
                >
                  <div
                    className="img-zoom"
                    style={{
                      position: "relative",
                      aspectRatio: "3/4",
                      background: "var(--surface-2)",
                      overflow: "hidden",
                      marginBottom: 24,
                    }}
                  >
                    <Image
                      src={product.images[0].replace("main.jpg", "lux.jpg")}
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>

                  <span style={{ 
                    display: "block", 
                    marginBottom: 12, 
                    fontSize: "11px", 
                    letterSpacing: "0.15em", 
                    textTransform: "uppercase", 
                    color: "var(--text-3)" 
                  }}>
                    {product.category}
                  </span>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 400,
                      color: "var(--text)",
                      lineHeight: 1.35,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {product.name}
                  </h3>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </StaggerGroup>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — EDITORIAL FEATURES (3-COLUMN GRID)
          ═══════════════════════════════════════════ */}
      <FadeIn>
        <section
          className="section-x section-y"
          style={{
            background: "var(--surface)",
            borderTop: "1px solid var(--gold-line)",
            borderBottom: "1px solid var(--gold-line)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "clamp(60px, 8vw, 120px)",
            }}
          >
            {/* Feature 1 */}
            <div>
              <span style={{ display: "block", fontSize: "32px", fontWeight: 300, color: "var(--gold)", marginBottom: 24, fontFamily: "var(--font-cormorant)" }}>
                01
              </span>
              <h3 style={{ fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text)", marginBottom: 16 }}>
                Handcrafted in India
              </h3>
              <p style={{ color: "var(--text-2)", fontSize: "15px", lineHeight: 1.8 }}>
                Every sculpture is shaped entirely by hand through generations of traditional brass artistry, ensuring museum-grade finishing.
              </p>
            </div>
            {/* Feature 2 */}
            <div>
              <span style={{ display: "block", fontSize: "32px", fontWeight: 300, color: "var(--gold)", marginBottom: 24, fontFamily: "var(--font-cormorant)" }}>
                02
              </span>
              <h3 style={{ fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text)", marginBottom: 16 }}>
                Custom Commissions
              </h3>
              <p style={{ color: "var(--text-2)", fontSize: "15px", lineHeight: 1.8 }}>
                Commission a bespoke masterpiece tailored to your exact specifications — from intimate 12-inch pieces to grand temple installations.
              </p>
            </div>
            {/* Feature 3 */}
            <div>
              <span style={{ display: "block", fontSize: "32px", fontWeight: 300, color: "var(--gold)", marginBottom: 24, fontFamily: "var(--font-cormorant)" }}>
                03
              </span>
              <h3 style={{ fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text)", marginBottom: 16 }}>
                Global Delivery
              </h3>
              <p style={{ color: "var(--text-2)", fontSize: "15px", lineHeight: 1.8 }}>
                Secure export-grade packaging and fully insured international shipping to collectors worldwide.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ═══════════════════════════════════════════
          SECTION 5 — LUXURY CTA BANNER
          ═══════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
            background: "linear-gradient(135deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.6) 100%)",
          }}
        />

        <div
          className="section-x"
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Reveal>
            <span style={{ display: "block", marginBottom: 32, fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-2)" }}>
              Bespoke Commission
            </span>

            <h2
              className="font-display"
              style={{
                fontSize: "clamp(48px, 6vw, 96px)",
                lineHeight: 1.05,
                color: "var(--text)",
                maxWidth: 800,
                margin: "0 auto 40px",
              }}
            >
              Create a Legacy Piece.
            </h2>

            <p
              style={{
                color: "var(--text-2)",
                fontSize: "17px",
                lineHeight: 1.7,
                maxWidth: 520,
                margin: "0 auto 56px",
              }}
            >
              Commission a sculpture shaped entirely by your vision — your preferred deity, size, material, and finish. Created only for you.
            </p>

            <Link href="/custom-order" className="btn btn-gold">
              Begin Your Commission
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}