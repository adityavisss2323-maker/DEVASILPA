import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "./components/Footer";
import { Reveal, FadeIn, ScaleIn, SlideIn, StaggerGroup, StaggerItem } from "./components/Animations";
import { products } from "./data/products";

export default function Home() {
  const featured = products.filter(p => p.featured);

  return (
    <main style={{ background: "var(--bg)" }}>
      {/* ═══════════════════════════════════════════
          CHAPTER I — THE HERO
          Pure cinematic. No borders.
          ═══════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          minHeight: "800px",
          overflow: "hidden",
        }}
      >
        <Image
          src="/products/parthasarathy-chariot/lux.jpg"
          alt="Devashilpa Heritage"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center", transform: "scale(1.02)" }}
          sizes="100vw"
        />

        {/* Minimal gradient strictly at bottom for text contrast */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 40%)",
          }}
        />

        <div
          className="section-x"
          style={{
            position: "absolute",
            bottom: "12vh",
            left: 0, right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Reveal>
            <p style={{ 
              marginBottom: 40, 
              letterSpacing: "0.2em", 
              fontSize: "11px", 
              color: "rgba(247,245,240,0.6)", 
              textTransform: "uppercase" 
            }}>
              Masterpieces forged in fire.
            </p>

            <h1
              className="font-display"
              style={{
                fontSize: "clamp(48px, 9vw, 130px)",
                lineHeight: 0.95,
                color: "var(--text)",
                letterSpacing: "-0.02em",
                marginBottom: 56,
              }}
            >
              Indian Heritage.
            </h1>

            <Link href="/collections" className="underline-anim" style={{ 
              fontSize: "12px", 
              letterSpacing: "0.15em", 
              textTransform: "uppercase", 
              color: "var(--text)" 
            }}>
              Discover the Collection
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CHAPTER II — PHILOSOPHY (Merged Story)
          Overlapping editorial layout
          ═══════════════════════════════════════════ */}
      <section className="section-x section-y" style={{ position: "relative" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "24px" }}>
          
          <div style={{ gridColumn: "1 / 13", textAlign: "center", marginBottom: "clamp(80px, 10vw, 140px)" }}>
            <Reveal>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(40px, 6vw, 84px)",
                  lineHeight: 1.05,
                  color: "var(--text)",
                  maxWidth: 900,
                  margin: "0 auto",
                }}
              >
                We do not make products.<br/>
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>We create heirlooms.</em>
              </h2>
            </Reveal>
          </div>

          <div style={{ gridColumn: "1 / 8", position: "relative", minHeight: "70vh" }} className="max-md:col-span-12">
            <ScaleIn>
              <div style={{ position: "relative", width: "100%", height: "100%", minHeight: 400 }}>
                <Image
                  src="/products/ram-darbar/lux.jpg"
                  alt="Ram Darbar Heritage"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>
            </ScaleIn>
          </div>

          <div style={{ gridColumn: "8 / 13", paddingLeft: "clamp(24px, 5vw, 80px)", display: "flex", flexDirection: "column", justifyContent: "center" }} className="max-md:col-span-12 max-md:mt-12 max-md:pl-0">
            <SlideIn direction="right">
              <span style={{ display: "block", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 32 }}>
                The Atelier
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                <p style={{ color: "var(--text-2)", fontSize: "17px", lineHeight: 1.8, fontWeight: 300 }}>
                  Devashilpa is a family workshop in Shajapur, Madhya Pradesh. Here, the ancient tradition of brass sculpture has been passed from father to son across generations. Every piece begins as raw clay in an artisan&apos;s hands.
                </p>
                <p style={{ color: "var(--text-2)", fontSize: "17px", lineHeight: 1.8, fontWeight: 300 }}>
                  What follows is a weeks-long journey through traditional casting, patient hand-finishing, and meticulous polishing — until a finished masterpiece emerges, bearing the soul of its maker.
                </p>
              </div>
              <div style={{ marginTop: 56 }}>
                <Link href="/about" className="underline-anim" style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text)" }}>
                  Read Our Story
                </Link>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CHAPTER III — THE COLLECTION
          Asymmetrical Masonry Editorial Grid
          ═══════════════════════════════════════════ */}
      <section className="section-x section-y" style={{ background: "var(--surface)" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "clamp(80px, 10vw, 160px)" }}>
            <span style={{ display: "block", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 32 }}>
              Selected Works
            </span>
            <h2 className="font-display" style={{ fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 1, color: "var(--text)" }}>
              The Archive
            </h2>
          </div>
        </Reveal>

        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          {/* Row 1: Massive featured piece */}
          {featured[0] && (
            <Reveal>
              <Link href={`/product/${featured[0].slug}`} className="group" style={{ display: "block", marginBottom: "clamp(40px, 8vw, 120px)" }}>
                <div style={{ position: "relative", width: "100%", height: "80vh", overflow: "hidden", marginBottom: 32 }}>
                  <Image src={featured[0].images[0].replace("main.jpg", "lux.jpg")} alt={featured[0].name} fill style={{ objectFit: "cover", transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)" }} className="group-hover:scale-105" sizes="100vw" />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <h3 className="font-display" style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "var(--text)" }}>{featured[0].name}</h3>
                  <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-3)" }}>{featured[0].category}</span>
                </div>
              </Link>
            </Reveal>
          )}

          {/* Row 2: Two offset pieces */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(24px, 5vw, 80px)" }} className="max-md:grid-cols-1">
            {featured.slice(1, 3).map((product, i) => (
              <Reveal key={product.id} delay={i * 0.1}>
                <Link href={`/product/${product.slug}`} className="group" style={{ display: "block", marginTop: i === 1 ? "clamp(40px, 10vw, 160px)" : 0 }}>
                  <div style={{ position: "relative", width: "100%", aspectRatio: "3/4", overflow: "hidden", marginBottom: 24 }}>
                    <Image src={product.images[0].replace("main.jpg", "lux.jpg")} alt={product.name} fill style={{ objectFit: "cover", transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)" }} className="group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  <h3 className="font-display" style={{ fontSize: "28px", color: "var(--text)", marginBottom: 8 }}>{product.name}</h3>
                  <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-3)" }}>{product.category}</span>
                </Link>
              </Reveal>
            ))}
          </div>
          
          <div style={{ textAlign: "center", marginTop: "clamp(80px, 10vw, 160px)" }}>
            <Link href="/collections" className="btn btn-gold">
              Explore the Archive
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CHAPTER IV — THE CRAFT
          Museum Placard Style
          ═══════════════════════════════════════════ */}
      <section className="section-x section-y">
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal>
            <div style={{ marginBottom: "clamp(80px, 10vw, 160px)" }}>
              <span style={{ display: "block", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 32 }}>
                The Discipline
              </span>
              <h2 className="font-display" style={{ fontSize: "clamp(40px, 6vw, 72px)", lineHeight: 1.05, color: "var(--text)" }}>
                Time is our most <br/>expensive material.
              </h2>
            </div>
          </Reveal>

          <StaggerGroup>
            {[
              { num: "01", title: "Sculpting the Form", desc: "Before brass is poured, the vision must exist in clay. Each masterpiece takes weeks to sculpt perfectly by hand." },
              { num: "02", title: "The Fire Casting", desc: "Using the ancient lost-wax technique, molten brass at 1,000°C is poured into the mold, capturing every microscopic detail." },
              { num: "03", title: "Patient Finishing", desc: "The raw cast is refined over hundreds of hours. Artisans painstakingly carve, polish, and treat the metal to achieve its heritage patina." }
            ].map((step) => (
              <StaggerItem key={step.num}>
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "100px 1fr", 
                  gap: "24px", 
                  padding: "48px 0",
                  borderBottom: "1px solid var(--surface-3)"
                }} className="max-md:grid-cols-1">
                  <span style={{ fontSize: "14px", fontFamily: "var(--font-geist-mono), monospace", color: "var(--text-4)", letterSpacing: "0.1em" }}>
                    {step.num}
                  </span>
                  <div>
                    <h3 style={{ fontSize: "18px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text)", marginBottom: 16 }}>{step.title}</h3>
                    <p style={{ color: "var(--text-2)", fontSize: "16px", lineHeight: 1.8, maxWidth: 600, fontWeight: 300 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CHAPTER V — THE COMMISSION
          Full immersion
          ═══════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/products/surya-rath-grand-edition/hero.jpg"
          alt="Bespoke Commission"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
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
            <span style={{ display: "block", marginBottom: 40, fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(247,245,240,0.7)" }}>
              Private Commission
            </span>

            <h2
              className="font-display"
              style={{
                fontSize: "clamp(48px, 8vw, 110px)",
                lineHeight: 1,
                color: "var(--text)",
                maxWidth: 1000,
                margin: "0 auto 48px",
                letterSpacing: "-0.01em",
              }}
            >
              Shape your legacy.
            </h2>

            <p
              style={{
                color: "rgba(247,245,240,0.8)",
                fontSize: "18px",
                lineHeight: 1.7,
                maxWidth: 560,
                margin: "0 auto 64px",
                fontWeight: 300,
              }}
            >
              For collectors and institutions seeking unparalleled exclusivity. Commission a sculpture tailored entirely to your vision, crafted strictly for you.
            </p>

            <Link href="/custom-order" className="btn btn-gold">
              Initiate Commission
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}