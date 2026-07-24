"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { products } from "@/app/data/products";
import { Reveal, ScaleIn } from "@/app/components/Animations";

const CATEGORIES = [
  "All Works",
  "Divine Collection",
  "Temple Decor",
  "Heritage Collection",
  "Luxury Decor",
  "Ganesha Collection",
  "Royal Collection",
  "Warrior Collection",
  "Krishna Collection",
  "Ramayana Collection",
  "Brass Lamps",
  "Temple Lamps",
];

export default function CollectionsPage() {
  const [category, setCategory] = useState("All Works");

  const filtered = useMemo(() => {
    let list = products.filter((p) => category === "All Works" || p.category === category);
    // Sort featured first, then newest
    return list.sort((a, b) => (a.featured === b.featured ? b.id - a.id : a.featured ? -1 : 1));
  }, [category]);

  return (
    <main style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
      <Navbar />

      {/* ── Page Header ── */}
      <section
        className="section-x"
        style={{
          paddingTop: "calc(var(--nav-h) + clamp(80px, 12vw, 180px))",
          paddingBottom: "clamp(60px, 8vw, 120px)",
        }}
      >
        <Reveal>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: 24 }}>
            <div>
              <span style={{ display: "block", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 32 }}>
                The Collection
              </span>
              <h1
                className="font-display"
                style={{ fontSize: "clamp(48px, 9vw, 130px)", fontWeight: 300, lineHeight: 0.95, color: "var(--text)", letterSpacing: "-0.02em" }}
              >
                The Archive.
              </h1>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
              <span className="font-display" style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 300, color: "var(--gold)", lineHeight: 1 }}>
                {filtered.length}
              </span>
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-3)" }}>
                Works
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Ultra-Minimal Filtering ── */}
      <div className="section-x" style={{ marginBottom: "clamp(60px, 10vw, 160px)", overflowX: "auto", paddingBottom: 24 }}>
        <Reveal delay={0.2}>
          <div style={{ display: "flex", gap: "32px", whiteSpace: "nowrap" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className="underline-anim"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  background: "transparent",
                  border: "none",
                  color: cat === category ? "var(--text)" : "var(--text-3)",
                  cursor: "pointer",
                  transition: "color 0.4s var(--ease-luxury)",
                  padding: "0 0 8px 0",
                  fontWeight: 400,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {/* ── Editorial Staggered Grid ── */}
      {filtered.length > 0 ? (
        <section
          className="section-x grid grid-cols-1 md:grid-cols-2"
          style={{
            paddingBottom: "clamp(80px, 12vw, 240px)",
            gap: "clamp(32px, 6vw, 120px)",
          }}
        >
          {filtered.map((product, i) => {
            const isEven = i % 2 !== 0;
            return (
              <div
                key={product.id}
                style={{
                  marginTop: isEven ? "var(--stagger, 0px)" : 0,
                  display: "flex",
                  flexDirection: "column",
                }}
                className={isEven ? "md:[--stagger:clamp(40px,15vw,240px)]" : ""}
              >
                <Reveal delay={(i % 2) * 0.1}>
                  <Link
                    href={`/product/${product.slug}`}
                    className="group"
                    style={{ display: "block", textDecoration: "none" }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        paddingBottom: isEven ? "133.33%" : "125%",
                        background: "var(--surface)",
                        overflow: "hidden",
                        marginBottom: 24,
                      }}
                    >
                      <Image
                        src={product.images[0].replace("main.jpg", "lux.jpg")}
                        alt={product.name}
                        fill
                        style={{ objectFit: "cover", objectPosition: "center 15%" }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="img-lux"
                      />
                    </div>
                    
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <h2
                        className="font-display"
                        style={{
                          fontSize: "clamp(24px, 3vw, 40px)",
                          fontWeight: 300,
                          color: "var(--text)",
                          lineHeight: 1.2,
                        }}
                      >
                        {product.name}
                      </h2>
                      <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-3)", textAlign: "right", marginLeft: 16 }}>
                        {product.category}
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </div>
            );
          })}
        </section>
      ) : (
        <section className="section-x section-y" style={{ textAlign: "center", minHeight: "40vh" }}>
          <Reveal>
            <p className="font-display" style={{ fontSize: "clamp(32px, 5vw, 64px)", color: "var(--text-3)", marginBottom: 24 }}>
              No works found.
            </p>
            <button onClick={() => setCategory("All Works")} className="underline-anim" style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text)", background: "none", border: "none", cursor: "pointer", paddingBottom: 4 }}>
              Return to Archive
            </button>
          </Reveal>
        </section>
      )}

      <Footer />
    </main>
  );
}