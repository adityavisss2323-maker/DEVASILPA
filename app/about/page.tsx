import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Heritage | Devashilpa",
  description:
    "The story of Devashilpa — a family artisan workshop in Shajapur, India, preserving traditional brass sculpture craftsmanship through generations.",
  alternates: { canonical: "https://www.devashilpa.com/about" },
};

const VALUES = [
  { title: "Family Workshop",  desc: "A generational family tradition in Shajapur, Madhya Pradesh." },
  { title: "Traditional Craft", desc: "Seven-step process inherited across generations of artisans." },
  { title: "Museum Grade",     desc: "Each piece meets the standard of museum-quality metalwork." },
  { title: "Worldwide Reach",  desc: "Masterpieces shipped to collectors across every continent." },
];

export default function AboutPage() {
  return (
    <main style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
      <Navbar />

      {/* ── Cinematic Hero ── */}
      <section style={{ position: "relative", height: "100dvh", minHeight: 580, overflow: "hidden" }}>
        <Image
          src="/products/vishnu/main.jpg"
          alt="Sheshshayi Vishnu — handcrafted brass sculpture by Devashilpa"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          style={{ transform: "scale(1.04)" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(115deg, #080604 38%, rgba(8,6,4,0.80) 58%, rgba(8,6,4,0.22) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "35%",
            background: "linear-gradient(to top, #080604 0%, transparent 100%)",
          }}
        />
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
          <div style={{ maxWidth: 600 }}>
            <span className="lux-label hero-label block" style={{ marginBottom: 24 }}>Our Heritage</span>
            <h1
              className="font-display hero-h1"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 5rem)", lineHeight: 1.06, color: "#F2EBD9", marginBottom: 28 }}
            >
              A heritage inherited. A legacy preserved.
            </h1>
            <p
              className="hero-sub"
              style={{ color: "#C9BFA8", fontSize: "1rem", lineHeight: 1.8, maxWidth: 420, marginBottom: 40 }}
            >
              Devashilpa is built on a generational Indian art tradition, where every sculpture is shaped through inherited skill, devotion, and patient craftsmanship.
            </p>
            <Link href="/custom-order" className="btn-gold hero-cta">
              Request Custom Creation <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Brand Statement ── */}
      <section
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--gold-line)",
          borderBottom: "1px solid var(--gold-line)",
        }}
        className="section-x section-y"
      >
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <span className="lux-label block" style={{ marginBottom: 28 }}>The Devashilpa Philosophy</span>
          <p
            className="font-display"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", fontWeight: 300, lineHeight: 1.4, color: "#C9BFA8" }}
          >
            &ldquo;We do not manufacture. We create. Every sculpture that leaves our workshop is made entirely by human hands, carrying with it the devotion, patience, and skill of an artisan.&rdquo;
          </p>
        </div>
      </section>

      {/* ── Story split ── */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: 600,
          borderBottom: "1px solid var(--gold-line)",
        }}
        className="max-md:grid-cols-1"
      >
        <div className="img-zoom" style={{ position: "relative", minHeight: 480 }}>
          <Image
            src="/products/parthasarathy-chariot/main.jpg"
            alt="Parthasarathy Chariot — handcrafted brass by Devashilpa"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div
          className="section-x section-y"
          style={{ background: "var(--surface)", display: "flex", flexDirection: "column", justifyContent: "center" }}
        >
          <span className="lux-label block" style={{ marginBottom: 24 }}>Our Story</span>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)", lineHeight: 1.1, color: "#F2EBD9", marginBottom: 24 }}
          >
            Born from traditional hands, shaped for timeless spaces.
          </h2>
          <span className="gold-rule" style={{ marginBottom: 28 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 440 }}>
            <p style={{ fontSize: "0.9rem", color: "var(--text-2)", lineHeight: 1.85 }}>
              Devashilpa is a family workshop in Shajapur, Madhya Pradesh, where the tradition of brass sculpture has been passed down from master to apprentice across generations.
            </p>
            <p style={{ fontSize: "0.9rem", color: "var(--text-2)", lineHeight: 1.85 }}>
              Each sculpture begins as raw clay, travels through seven stages of craftsmanship, and emerges as a finished masterpiece — weeks or months later — ready to carry its story into the world.
            </p>
            <p style={{ fontSize: "0.9rem", color: "var(--text-2)", lineHeight: 1.85 }}>
              These are not products. They are heirlooms.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values grid ── */}
      <section
        className="section-x section-y"
        style={{ borderBottom: "1px solid var(--gold-line)" }}
      >
        <span className="lux-label block" style={{ marginBottom: 48 }}>What We Stand For</span>
        <div
          className="divider-grid"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
        >
          {VALUES.map(({ title, desc }) => (
            <div key={title} style={{ background: "var(--bg)", padding: "clamp(28px, 4vw, 48px) 28px" }} className="group">
              <h3 style={{ fontSize: "1rem", fontWeight: 400, color: "var(--gold)", marginBottom: 14, lineHeight: 1.3 }}>{title}</h3>
              <p style={{ fontSize: "0.82rem", color: "var(--text-3)", lineHeight: 1.75 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-x section-y" style={{ textAlign: "center" }}>
        <span className="lux-label block" style={{ marginBottom: 24 }}>Commission a Work</span>
        <h2
          className="font-display"
          style={{ fontSize: "clamp(2rem, 4vw, 3.6rem)", fontWeight: 300, color: "#F2EBD9", marginBottom: 20, maxWidth: 560, margin: "0 auto 20px" }}
        >
          Every sculpture carries its own soul.
        </h2>
        <p style={{ color: "var(--text-2)", fontSize: "0.9rem", maxWidth: 400, margin: "0 auto 40px", lineHeight: 1.8 }}>
          Share your preferred size, material, and design idea. We will create a made-to-order masterpiece based on your vision.
        </p>
        <Link href="/custom-order" className="btn-outline">
          Begin Your Commission <ArrowRight size={12} />
        </Link>
      </section>

      <Footer />
    </main>
  );
}
