import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { products } from "@/app/data/products";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Devashilpa | Handcrafted Brass Sculptures from India",
  description:
    "Museum-grade handcrafted brass sculptures by Indian master artisans. Collector-grade divine idols, heritage sculptures and temple decor. Worldwide shipping.",
  alternates: { canonical: "https://www.devashilpa.com" },
};

/* ──────────────────────────────
   Data
────────────────────────────── */
const FEATURED = [
  "parthasarathy-chariot",
  "surya-rath-grand-edition",
  "vishnu",
  "durga-mahishasura-mardini",
  "ram-darbar",
  "ganesha-chariot",
];

const TRUST = [
  { title: "Handcrafted in India",      sub: "By master artisans" },
  { title: "Worldwide Shipping",        sub: "To every country" },
  { title: "Export Grade Packaging",    sub: "Museum-safe delivery" },
  { title: "Custom Orders",            sub: "Any size or design" },
  { title: "Family Artisan Workshop",  sub: "Generational heritage" },
];

const PROCESS = [
  { n: "01", title: "Clay Modelling",     desc: "The sculpture is conceived and shaped in clay by the artisan's hand." },
  { n: "02", title: "Wax Detailing",      desc: "Intricate ornaments, garments and symbols are added in fine wax." },
  { n: "03", title: "Mold Creation",      desc: "A precision mold is formed around the complete wax sculpture." },
  { n: "04", title: "Metal Casting",      desc: "Molten brass is poured at high temperature into the prepared mold." },
  { n: "05", title: "Hand Chiselling",    desc: "The artisan chisels, files and refines every surface detail." },
  { n: "06", title: "Hand Polishing",     desc: "The sculpture is polished by hand to reveal its natural lustre." },
  { n: "07", title: "Quality Inspection", desc: "Each piece is inspected against museum-grade standards before dispatch." },
];

const COLLECTORS = [
  "Private Collectors",
  "Luxury Residences",
  "Five-Star Hotels",
  "Heritage Temples",
  "Interior Architects",
  "Museum Institutions",
];

export default function Home() {
  const featured = FEATURED
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean) as typeof products;

  return (
    <main className="bg-[#080604] text-[#F2EBD9]">
      <Navbar />

      {/* ════════════════════════════════════════════
          STEP 1 — CURIOSITY
          Cinematic fullscreen hero
          One powerful headline. Large image.
          ════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden" style={{ height: "100dvh", minHeight: 600 }}>
        {/* Full-bleed hero image */}
        <Image
          src="/products/parthasarathy-chariot/main.jpg"
          alt="Parthasarathy Chariot — handcrafted brass sculpture by Devashilpa"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          style={{ transform: "scale(1.04)" }}
        />

        {/* Atmosphere layers */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(115deg, #080604 36%, rgba(8,6,4,0.82) 56%, rgba(8,6,4,0.28) 100%)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: "35%", background: "linear-gradient(to top, #080604 0%, transparent 100%)" }}
        />

        {/* Hero copy */}
        <div
          className="absolute inset-0 flex flex-col justify-center section-x"
          style={{ paddingTop: "var(--nav-h)" }}
        >
          <div style={{ maxWidth: 640 }}>
            <span className="lux-label hero-label block mb-8">Devashilpa — Est. Family Artisan Workshop</span>

            <h1
              className="font-display hero-h1"
              style={{
                fontSize: "clamp(2.6rem, 5.5vw, 5.2rem)",
                lineHeight: 1.06,
                color: "#F2EBD9",
                marginBottom: "clamp(20px, 3vw, 32px)",
              }}
            >
              Handcrafted Indian Sculptures for Collectors, Temples &amp; Luxury Spaces.
            </h1>

            <p
              className="hero-sub"
              style={{
                color: "#C9BFA8",
                fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)",
                lineHeight: 1.75,
                maxWidth: 440,
                marginBottom: "clamp(28px, 4vw, 44px)",
              }}
            >
              Made by Indian artisans using traditional brass casting and hand-finishing techniques passed down through generations.
            </p>

            <div className="hero-cta flex flex-wrap gap-4">
              <Link href="/collections" className="btn-gold">
                Explore the Collection <ArrowRight size={13} />
              </Link>
              <Link href="/custom-order" className="btn-outline">
                Request Custom Creation
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="hero-scroll absolute"
            style={{ bottom: "clamp(28px, 4vw, 48px)", left: "var(--gutter)" }}
          >
            <div className="flex items-center gap-3">
              <div style={{ width: 40, height: 1, background: "#7A6E58" }} />
              <span className="lux-label-muted" style={{ color: "#7A6E58" }}>Scroll to explore</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          STEP 2 — TRUST BAR
          Immediate trust signals after hero
          ════════════════════════════════════════════ */}
      <section
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--gold-line)",
          borderBottom: "1px solid var(--gold-line)",
        }}
      >
        <div className="section-x" style={{ paddingTop: 28, paddingBottom: 28 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "1px",
            }}
          >
            {TRUST.map(({ title, sub }) => (
              <div key={title} style={{ padding: "20px 16px", textAlign: "center" }}>
                <p style={{ color: "#F2EBD9", fontSize: "0.8rem", fontWeight: 400, lineHeight: 1.4, marginBottom: 6 }}>
                  {title}
                </p>
                <span className="lux-label-muted">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          STEP 3 — ADMIRATION
          Featured Masterpieces — gallery tile layout
          ════════════════════════════════════════════ */}
      <section className="section-y section-x">
        {/* Section header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            marginBottom: "clamp(48px, 6vw, 80px)",
          }}
        >
          <span className="lux-label">Featured Masterpieces</span>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", lineHeight: 1.1, color: "#F2EBD9", maxWidth: 480 }}
            >
              Selected Works from the Collection
            </h2>
            <Link
              href="/collections"
              className="btn-ghost hover-line"
              style={{ whiteSpace: "nowrap", alignSelf: "flex-end" }}
            >
              View All 22+ Works <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* Gallery grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "clamp(16px, 2.5vw, 32px)",
          }}
        >
          {featured.map((product) => (
            <Link
              href={`/product/${product.slug}`}
              key={product.id}
              style={{ display: "block", textDecoration: "none" }}
              className="group card-lift"
            >
              {/* Image */}
              <div
                className="img-zoom"
                style={{
                  position: "relative",
                  aspectRatio: "3 / 4",
                  background: "var(--surface)",
                  marginBottom: 20,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)",
                    opacity: 0,
                    transition: "opacity 0.5s ease",
                  }}
                  className="group-hover:opacity-100"
                />
                {/* Hover CTA */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    right: 20,
                    opacity: 0,
                    transform: "translateY(8px)",
                    transition: "all 0.5s ease",
                  }}
                  className="group-hover:opacity-100 group-hover:translate-y-0"
                >
                  <span
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "#F2EBD9",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    View Masterpiece <ArrowRight size={11} />
                  </span>
                </div>
              </div>

              {/* Text */}
              <div>
                <span className="lux-label block" style={{ marginBottom: 8 }}>{product.category}</span>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 300,
                    color: "#F2EBD9",
                    transition: "color 0.3s",
                    lineHeight: 1.35,
                  }}
                  className="group-hover:text-[#C8A96E]"
                >
                  {product.name}
                </h3>
                {/* Animated gold underline */}
                <div
                  style={{
                    height: 1,
                    background: "var(--gold)",
                    marginTop: 12,
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    opacity: 0.45,
                  }}
                  className="group-hover:scale-x-100"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          STEP 4 — HERITAGE STORY
          Who makes them. Why they are different.
          ════════════════════════════════════════════ */}
      <section
        style={{ borderTop: "1px solid var(--gold-line)", borderBottom: "1px solid var(--gold-line)" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: 600,
          }}
          className="max-md:grid-cols-1"
        >
          {/* Left — Image */}
          <div
            className="img-zoom"
            style={{ position: "relative", minHeight: 480 }}
          >
            <Image
              src="/products/ram-darbar/main.jpg"
              alt="Ram Darbar — handcrafted brass sculpture by Devashilpa"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right — Story */}
          <div
            className="section-x section-y flex flex-col justify-center"
            style={{ background: "var(--surface)" }}
          >
            <span className="lux-label block" style={{ marginBottom: 24 }}>Our Heritage</span>

            <h2
              className="font-display"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", lineHeight: 1.12, color: "#F2EBD9", marginBottom: 32 }}
            >
              A family art form, passed through generations.
            </h2>

            <span className="gold-rule" style={{ marginBottom: 32 }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 440 }}>
              <p style={{ color: "#C9BFA8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                Devashilpa is not a factory. It is a family workshop in Shajapur, Madhya Pradesh, where the art of brass sculpture has been passed down from master to apprentice across generations.
              </p>
              <p style={{ color: "#C9BFA8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                Each sculpture begins as raw clay in the hands of an artisan who has spent years perfecting form, proportion, and detail. What follows is a seven-step process that takes weeks — sometimes months — before a finished masterpiece leaves the workshop.
              </p>
              <p style={{ color: "#C9BFA8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                These are not products. They are heirlooms.
              </p>
            </div>

            <div style={{ marginTop: 44 }}>
              <Link href="/about" className="btn-outline" style={{ alignSelf: "flex-start" }}>
                Our Story <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          STEP 5 — CRAFTSMANSHIP TIMELINE
          Show effort. Show human touch. Build desire.
          ════════════════════════════════════════════ */}
      <section className="section-y section-x">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "clamp(40px, 6vw, 100px)",
            alignItems: "start",
          }}
          className="max-md:grid-cols-1"
        >
          {/* Left — Sticky heading */}
          <div className="md:sticky md:top-28 md:self-start">
            <span className="lux-label block" style={{ marginBottom: 24 }}>The Making</span>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.4rem)", lineHeight: 1.1, color: "#F2EBD9", marginBottom: 28 }}
            >
              Seven steps. Weeks of work. One masterpiece.
            </h2>
            <span className="gold-rule" style={{ marginBottom: 28 }} />
            <p style={{ color: "#C9BFA8", fontSize: "0.9rem", lineHeight: 1.8, maxWidth: 340 }}>
              Every Devashilpa sculpture is made entirely by hand. No shortcuts. No machinery for the creative work. Only inherited skill and patient craftsmanship.
            </p>
          </div>

          {/* Right — Steps */}
          <div>
            {PROCESS.map(({ n, title, desc }) => (
              <div
                key={n}
                style={{
                  display: "flex",
                  gap: 24,
                  padding: "28px 0",
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
                  }}
                  className="group-hover:text-[#C8A96E]"
                >
                  {n}
                </span>
                <div>
                  <p style={{ color: "#F2EBD9", fontWeight: 400, fontSize: "1rem", marginBottom: 8, lineHeight: 1.3 }}>
                    {title}
                  </p>
                  <p style={{ color: "#7A6E58", fontSize: "0.85rem", lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          STEP 6 — DESIRE
          Global Collector Section
          "Perfect for" — sell the placement
          ════════════════════════════════════════════ */}
      <section
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--gold-line)",
          borderBottom: "1px solid var(--gold-line)",
        }}
      >
        <div className="section-y section-x">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto", marginBottom: "clamp(48px, 6vw, 80px)" }}>
            <span className="lux-label block" style={{ marginBottom: 20 }}>Global Collectors</span>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(2rem, 4vw, 3.6rem)", lineHeight: 1.1, color: "#F2EBD9" }}
            >
              Crafted for those who demand the exceptional.
            </h2>
          </div>

          {/* Collector types in divider grid */}
          <div
            className="divider-grid divider-grid-surface"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}
          >
            {COLLECTORS.map((type) => (
              <div
                key={type}
                style={{ padding: "clamp(28px, 4vw, 48px) 24px", textAlign: "center" }}
              >
                <p
                  className="font-display"
                  style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)", color: "#F2EBD9", fontWeight: 300, lineHeight: 1.3 }}
                >
                  {type}
                </p>
              </div>
            ))}
          </div>

          {/* Worldwide visual */}
          <div style={{ textAlign: "center", marginTop: "clamp(48px, 6vw, 80px)" }}>
            <p style={{ color: "#7A6E58", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 20 }}>
              Shipped worldwide to
            </p>
            <p
              className="font-display"
              style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)", color: "#C9BFA8", letterSpacing: "0.05em", fontWeight: 300 }}
            >
              USA · UK · Germany · France · Australia · UAE
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          STEP 7 — INQUIRY
          Custom Creation CTA
          ════════════════════════════════════════════ */}
      <section className="section-y section-x">
        <div
          className="card-border"
          style={{
            maxWidth: 860,
            margin: "0 auto",
            padding: "clamp(48px, 7vw, 96px) clamp(28px, 5vw, 80px)",
            textAlign: "center",
          }}
        >
          <span className="lux-label block" style={{ marginBottom: 24 }}>Bespoke Commission</span>

          <h2
            className="font-display"
            style={{ fontSize: "clamp(2rem, 4vw, 3.8rem)", lineHeight: 1.08, color: "#F2EBD9", marginBottom: 24 }}
          >
            Commission a sculpture shaped entirely by your vision.
          </h2>

          <span className="gold-rule" style={{ margin: "0 auto 28px" }} />

          <p
            style={{
              color: "#C9BFA8",
              fontSize: "0.95rem",
              lineHeight: 1.85,
              maxWidth: 480,
              margin: "0 auto",
              marginBottom: 44,
            }}
          >
            Share your preferred deity, size, material, and finish. Our artisans will craft a unique masterpiece made only for you — from intimate 12-inch pieces to grand 4-feet sculptures.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
            <Link href="/custom-order" className="btn-gold">
              Begin Your Commission <ArrowRight size={13} />
            </Link>
            <Link href="/collections" className="btn-ghost" style={{ alignSelf: "center" }}>
              Browse the Collection
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}