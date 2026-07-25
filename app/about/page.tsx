import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Reveal, SlideIn, StaggerGroup, StaggerItem, FadeIn, ScaleIn } from "@/app/components/Animations";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Heritage | Devashilpa",
  description:
    "The story of Devashilpa — a family artisan workshop in Shajapur, India, preserving traditional brass and copper sculpture craftsmanship through generations.",
  alternates: { canonical: "https://www.devashilpa.com/about" },
};

const VALUES = [
  { title: "Family Workshop",       desc: "A generational family tradition in Shajapur, Madhya Pradesh." },
  { title: "Traditional Process",   desc: "Seven inherited steps from clay to finished masterpiece." },
  { title: "Museum Quality",        desc: "Each piece meets the standard of museum-quality metalwork." },
  { title: "Worldwide Presence",    desc: "Masterpieces shipped to collectors across every continent." },
];

export default function AboutPage() {
  return (
    <main style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
      <Navbar />

      {/* ── Cinematic Hero ── */}
      <section style={{ position: "relative", height: "100dvh", minHeight: 580, overflow: "hidden" }}>
        <Image
          src="/products/vishnu/lux.jpg"
          alt="Sheshshayi Vishnu — museum-grade brass by Devashilpa"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center", transform: "scale(1.05)" }}
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(110deg, rgba(10,8,6,0.92) 35%, rgba(10,8,6,0.70) 58%, rgba(10,8,6,0.18) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: "38%",
            background: "linear-gradient(to top, rgba(10,8,6,0.85), transparent)",
          }}
        />

        <div
          className="section-x"
          style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "var(--nav-h)" }}
        >
          <div style={{ maxWidth: 600 }}>
            <span className="label anim-hero-1" style={{ display: "block", marginBottom: 28 }}>OUR HERITAGE</span>
            <h1
              className="font-display anim-hero-2"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", lineHeight: 1.06, color: "var(--overlay-text)", marginBottom: 28 }}
            >
              A heritage inherited.<br />
              <em style={{ fontStyle: "italic", color: "var(--gold-bright)" }}>A legacy preserved.</em>
            </h1>
            <p
              className="anim-hero-3"
              style={{ color: "rgba(247,245,240,0.75)", fontSize: "1rem", lineHeight: 1.85, maxWidth: 420, marginBottom: 40 }}
            >
              Devashilpa is built on a generational Indian art tradition, where every sculpture is shaped through inherited skill, devotion, and patient craftsmanship.
            </p>
            <div className="anim-hero-4">
              <Link href="/custom-order" className="btn btn-gold">
                Request Custom Creation <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand Philosophy Quote ── */}
      <FadeIn>
        <section
          style={{
            background: "var(--surface)",
            borderTop: "1px solid var(--gold-line)",
            borderBottom: "1px solid var(--gold-line)",
          }}
          className="section-x section-y"
        >
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <span className="label" style={{ display: "block", marginBottom: 28 }}>THE PHILOSOPHY</span>
            <p
              className="font-display"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
                fontWeight: 300,
                lineHeight: 1.45,
                color: "var(--text-2)",
                fontStyle: "italic",
              }}
            >
              &ldquo;We do not manufacture. We create. Every sculpture that leaves our workshop is made entirely by human hands, carrying with it the devotion, patience, and skill of an artisan.&rdquo;
            </p>
          </div>
        </section>
      </FadeIn>

      {/* ── Story split ── */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: 640,
          borderBottom: "1px solid var(--gold-line)",
        }}
        className="max-md:grid-cols-1"
      >
        <ScaleIn>
          <div
            className="img-zoom"
            style={{ position: "relative", minHeight: 520, height: "100%" }}
          >
            <Image
              src="/products/parthasarathy-chariot/lux.jpg"
              alt="Parthasarathy Chariot — handcrafted brass by Devashilpa"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </ScaleIn>

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
            <span className="label" style={{ display: "block", marginBottom: 28 }}>THE MAKERS</span>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(2rem, 3vw, 3.2rem)", lineHeight: 1.1, color: "var(--text)", marginBottom: 28 }}
            >
              Born from traditional hands, shaped for timeless spaces.
            </h2>
            <span className="rule" style={{ marginBottom: 28 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 440 }}>
              <p style={{ fontSize: "0.9rem", color: "var(--text-2)", lineHeight: 1.9 }}>
                Devashilpa is a family workshop in Shajapur, Madhya Pradesh, where the tradition of brass sculpture has been passed down from master to apprentice across generations.
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--text-2)", lineHeight: 1.9 }}>
                Each sculpture begins as raw clay, travels through five stages of craftsmanship, and emerges as a finished masterpiece — weeks or months later — ready to carry its story into the world.
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--text-2)", lineHeight: 1.9, fontStyle: "italic" }}>
                These are not products. They are heirlooms.
              </p>
            </div>
          </div>
        </SlideIn>
      </section>

      {/* ── Values grid ── */}
      <section className="section-x section-y" style={{ borderBottom: "1px solid var(--gold-line)" }}>
        <Reveal>
          <span className="label" style={{ display: "block", marginBottom: 52 }}>What We Stand For</span>
        </Reveal>
        <StaggerGroup>
          <div
            className="grid-divider"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
          >
            {VALUES.map(({ title, desc }) => (
              <StaggerItem key={title}>
                <div style={{ background: "var(--bg)", padding: "clamp(28px, 4vw, 52px) 28px" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 400, color: "var(--gold)", marginBottom: 14, lineHeight: 1.3 }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-3)", lineHeight: 1.8 }}>
                    {desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerGroup>
      </section>

      {/* ── CTA ── */}
      <Reveal>
        <section className="section-x section-y" style={{ textAlign: "center" }}>
          <span className="label" style={{ display: "block", marginBottom: 24 }}>Commission a Work</span>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(2rem, 4vw, 3.8rem)", fontWeight: 300, color: "var(--text)", maxWidth: 560, margin: "0 auto 20px", lineHeight: 1.1 }}
          >
            Every sculpture carries its own soul.
          </h2>
          <p style={{ color: "var(--text-2)", fontSize: "0.9rem", maxWidth: 400, margin: "0 auto 40px", lineHeight: 1.85 }}>
            Share your preferred size, material, and design idea. We will create a made-to-order masterpiece based on your vision.
          </p>
          <Link href="/custom-order" className="btn btn-outline-gold">
            Begin Your Commission <ArrowRight size={12} />
          </Link>
        </section>
      </Reveal>

      <Footer />
    </main>
  );
}
