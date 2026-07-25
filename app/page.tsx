import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import { Reveal, FadeIn, ScaleIn, SlideIn, StaggerGroup, StaggerItem, ParallaxImage } from "./components/Animations";
import { getProducts } from "./lib/db";

export const revalidate = 3600;

export default function Home() {
  const products = getProducts();
  const featured = products.filter(p => p.featured);

  return (
    <main style={{ background: "var(--bg)" }}>
      {/* ═══════════════════════════════════════════
          CHAPTER I — THE HERO
          Full-bleed image → overlay stays dark (image section, not page bg)
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
        <ParallaxImage
          src="/editorial/hero.jpg"
          alt="Devashilpa Heritage"
          priority
          className="img-lux"
          objectPosition="center 35%"
        />

        {/* Slightly lighter overlay gradient now that page bg is ivory, not black */}
        <div className="overlay-dark" />

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
              color: "rgba(247,245,240,0.65)",
              textTransform: "uppercase",
            }}>
              Masterpieces forged in fire.
            </p>

            <h1
              className="font-display"
              style={{
                fontSize: "clamp(48px, 9vw, 130px)",
                lineHeight: 0.95,
                color: "var(--overlay-text)",
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
              color: "var(--overlay-text)",
            }}>
              Discover the Collection
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CHAPTER II — PHILOSOPHY
          Ivory background — charcoal text
          ═══════════════════════════════════════════ */}
      <section className="section-x section-y" style={{ position: "relative", background: "var(--bg)" }}>
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

          <div style={{ gridColumn: "1 / 8", position: "relative" }} className="max-md:col-span-12">
            <ScaleIn>
              <div style={{ position: "relative", width: "100%", paddingBottom: "120%", overflow: "hidden" }}>
                <Image
                  src="/products/durga-mahishasura-mardini/lux.jpg"
                  alt="Devashilpa Atelier"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 10%" }}
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="img-lux"
                />
              </div>
            </ScaleIn>
          </div>

          <div
            style={{ gridColumn: "8 / 13", paddingLeft: "clamp(24px, 5vw, 80px)", display: "flex", flexDirection: "column", justifyContent: "center" }}
            className="max-md:col-span-12 max-md:mt-12 max-md:pl-0"
          >
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
          Slightly warm surface, not pure ivory
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
                <div style={{ position: "relative", width: "100%", height: "80vh", overflow: "hidden", marginBottom: 28 }}>
                  <Image
                    src={featured[0].images[0].replace("main.jpg", "lux.jpg")}
                    alt={featured[0].name}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 15%" }}
                    className="img-lux"
                    sizes="100vw"
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <h3 className="font-display" style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "var(--text)" }}>{featured[0].name}</h3>
                  <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)" }}>{featured[0].category}</span>
                </div>
              </Link>
            </Reveal>
          )}

          {/* Row 2: Two offset pieces */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(24px, 5vw, 80px)" }} className="max-md:grid-cols-1">
            {featured.slice(1, 3).map((product, i) => (
              <Reveal key={product.id} delay={i * 0.1}>
                <Link href={`/product/${product.slug}`} className="group" style={{ display: "block", marginTop: i === 1 ? "clamp(40px, 10vw, 160px)" : 0 }}>
                  <div style={{ position: "relative", width: "100%", paddingBottom: "133.33%", overflow: "hidden", marginBottom: 24 }}>
                    <Image
                      src={product.images[0].replace("main.jpg", "lux.jpg")}
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center 15%" }}
                      className="img-lux"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h3 className="font-display" style={{ fontSize: "28px", color: "var(--text)", marginBottom: 8 }}>{product.name}</h3>
                  <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)" }}>{product.category}</span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "clamp(80px, 10vw, 160px)" }}>
            <Link href="/collections" className="btn btn-charcoal">
              Explore the Archive
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CHAPTER IV — THE CRAFT
          Ivory bg — alternating image + text rows
          ═══════════════════════════════════════════ */}
      <section className="section-y" style={{ overflow: "hidden", background: "var(--bg)" }}>
        <div className="section-x" style={{ textAlign: "center", marginBottom: "clamp(80px, 10vw, 160px)" }}>
          <Reveal>
            <span style={{ display: "block", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 32 }}>
              The Discipline
            </span>
            <h2 className="font-display" style={{ fontSize: "clamp(40px, 6vw, 72px)", lineHeight: 1.05, color: "var(--text)" }}>
              Time is our most <br/>expensive material.
            </h2>
          </Reveal>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(80px, 12vw, 200px)" }}>
          {[
            { num: "01", title: "Sculpting the Form",  img: "/editorial/craft-01.jpg", desc: "Before brass is poured, the vision must exist in clay. Each masterpiece takes weeks to sculpt perfectly by hand." },
            { num: "02", title: "The Fire Casting",    img: "/editorial/craft-02.jpg", desc: "Using the ancient lost-wax technique, molten brass at 1,000°C is poured into the mold, capturing every microscopic detail." },
            { num: "03", title: "Patient Finishing",   img: "/editorial/craft-03.jpg", desc: "The raw cast is refined over hundreds of hours. Artisans painstakingly carve, polish, and treat the metal to achieve its heritage patina." },
          ].map((step, i) => {
            const isEven = i % 2 !== 0;
            return (
              <div
                key={step.num}
                className="section-x"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "clamp(40px, 8vw, 120px)",
                  alignItems: "center",
                }}
              >
                {/* Image */}
                <ScaleIn className="max-md:order-1" style={{ order: isEven ? 2 : 1 }}>
                  <div style={{ position: "relative", width: "100%", paddingBottom: "125%", overflow: "hidden" }}>
                    <Image
                      src={step.img}
                      alt={step.title}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="img-lux"
                    />
                  </div>
                </ScaleIn>

                {/* Text */}
                <div style={{ order: isEven ? 1 : 2 }} className="max-md:order-2">
                  <Reveal>
                    <span style={{ display: "block", fontSize: "14px", fontFamily: "var(--font-geist-mono), monospace", color: "var(--gold)", letterSpacing: "0.1em", marginBottom: 24 }}>
                      Step {step.num}
                    </span>
                    <h3 className="font-display" style={{ fontSize: "clamp(32px, 4vw, 56px)", color: "var(--text)", marginBottom: 32 }}>{step.title}</h3>
                    <p style={{ color: "var(--text-2)", fontSize: "17px", lineHeight: 1.8, fontWeight: 300, maxWidth: 480 }}>
                      {step.desc}
                    </p>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CHAPTER V — GLOBAL COLLECTORS
          Full-bleed parallax image — overlay stays dark
          ═══════════════════════════════════════════ */}
      <section style={{ position: "relative", minHeight: "90vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <ParallaxImage
          src="/editorial/collectors.jpg"
          alt="Devashilpa sculpture in luxury interior"
          className="img-lux"
        />
        <div className="overlay-dark" />
        <div className="section-x" style={{ position: "relative", zIndex: 1, maxWidth: 1000, margin: "0 auto", textAlign: "center", width: "100%" }}>
          <Reveal>
            <span style={{ display: "block", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(247,245,240,0.65)", marginBottom: 32 }}>
              Worldwide Presence
            </span>
            <h2 className="font-display" style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1.05, color: "var(--overlay-text)", marginBottom: 48 }}>
              Housed in the world&apos;s most <br/>exclusive interiors.
            </h2>
            <p style={{ color: "rgba(247,245,240,0.7)", fontSize: "17px", lineHeight: 1.8, fontWeight: 300, maxWidth: 600, margin: "0 auto", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              USA · UK · GERMANY · FRANCE · AUSTRALIA · UAE
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CHAPTER VI — THE COMMISSION
          Full-bleed parallax image — overlay stays dark
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
        <ParallaxImage
          src="/editorial/craft-02.jpg"
          alt="Bespoke Commission"
          className="img-lux"
        />

        <div className="overlay-dark" />

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
            <span style={{ display: "block", marginBottom: 40, fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(247,245,240,0.65)" }}>
              Private Commission
            </span>

            <h2
              className="font-display"
              style={{
                fontSize: "clamp(48px, 8vw, 110px)",
                lineHeight: 1,
                color: "var(--overlay-text)",
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