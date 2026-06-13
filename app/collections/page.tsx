"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { products } from "@/app/data/products";
import { Search, X, ArrowRight } from "lucide-react";

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

type Sort = "featured" | "name" | "newest";

export default function CollectionsPage() {
  const [search,   setSearch]   = useState("");
  const [category, setCategory] = useState("All Works");
  const [sort,     setSort]     = useState<Sort>("featured");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    let list = products.filter((p) => {
      const matchQ   = !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
      const matchCat = category === "All Works" || p.category === category;
      return matchQ && matchCat;
    });
    if (sort === "featured") list = [...list].sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));
    if (sort === "name")     list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "newest")   list = [...list].sort((a, b) => b.id - a.id);
    return list;
  }, [search, category, sort]);

  const clear = () => { setSearch(""); setCategory("All Works"); setSort("featured"); };

  return (
    <main style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
      <Navbar />

      {/* ── Page Header ── */}
      <section
        className="section-x"
        style={{
          paddingTop: "calc(var(--nav-h) + clamp(48px, 7vw, 96px))",
          paddingBottom: "clamp(40px, 5vw, 64px)",
          borderBottom: "1px solid var(--gold-line)",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 28 }}>
          <div>
            <span className="lux-label block" style={{ marginBottom: 20 }}>The Collection</span>
            <h1
              className="font-display"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", fontWeight: 300, lineHeight: 1.05, color: "#F2EBD9" }}
            >
              All Works
            </h1>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, border: "1px solid var(--gold-line)", padding: "16px 24px" }}>
            <span className="font-display" style={{ fontSize: "2rem", fontWeight: 300, color: "var(--gold)", lineHeight: 1 }}>22+</span>
            <div>
              <span className="lux-label block">Masterpieces</span>
              <span className="lux-label-muted block">Available</span>
            </div>
          </div>
        </div>
        <p style={{ color: "var(--text-2)", fontSize: "0.9rem", lineHeight: 1.8, maxWidth: 520 }}>
          A curated exhibition of handcrafted brass and copper masterpieces, created by master artisans using inherited Indian metal casting traditions.
        </p>
      </section>

      {/* ── Sticky Filters ── */}
      <div
        style={{
          position: "sticky",
          top: "var(--nav-h)",
          zIndex: 40,
          background: "rgba(8,6,4,0.96)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--gold-line)",
        }}
      >
        <div className="section-x" style={{ paddingTop: 16, paddingBottom: 16 }}>
          {/* Search + Sort row */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", marginBottom: 14 }}>
            {/* Search */}
            <div style={{ position: "relative", flex: "1 1 220px", minWidth: 200 }}>
              <Search
                size={14}
                style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "var(--text-3)" }}
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--text-3)", display: "flex" }}
                >
                  <X size={13} />
                </button>
              )}
              <input
                type="text"
                placeholder="Search masterpieces…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "100%",
                  background: "var(--surface)",
                  border: "1px solid var(--gold-line)",
                  padding: "10px 36px",
                  fontSize: "0.82rem",
                  color: "var(--text)",
                  outline: "none",
                }}
                className="focus:border-[#C8A96E]/50"
              />
            </div>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--gold-line)",
                color: "var(--text-2)",
                padding: "10px 16px",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                outline: "none",
                cursor: "pointer",
                appearance: "none",
              }}
            >
              <option value="featured">Featured First</option>
              <option value="name">Name A–Z</option>
              <option value="newest">Newest</option>
            </select>

            {/* Count + Clear */}
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ fontSize: "0.72rem", color: "var(--text-3)", whiteSpace: "nowrap" }}>
                <span style={{ color: "var(--gold)" }}>{filtered.length}</span> / {products.length}
              </span>
              {(search || category !== "All Works") && (
                <button
                  onClick={clear}
                  style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-3)" }}
                  className="hover:text-[#C8A96E]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  padding: "7px 14px",
                  border: "1px solid",
                  borderColor: cat === category ? "var(--gold)" : "var(--gold-line)",
                  background: cat === category ? "var(--gold)" : "transparent",
                  color: cat === category ? "#0a0602" : "var(--text-2)",
                  cursor: "pointer",
                  transition: "all 0.25s",
                  fontWeight: cat === category ? 600 : 400,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Exhibition Grid ── */}
      {filtered.length > 0 ? (
        <section
          className="section-x"
          style={{
            paddingTop: "clamp(48px, 6vw, 80px)",
            paddingBottom: "clamp(64px, 8vw, 120px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "clamp(32px, 4vw, 56px) clamp(16px, 2.5vw, 32px)",
          }}
        >
          {filtered.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              style={{ display: "block", textDecoration: "none" }}
              className="group card-lift"
            >
              {/* Image */}
              <div
                className="img-zoom"
                style={{
                  position: "relative",
                  aspectRatio: "4/5",
                  background: "var(--surface)",
                  overflow: "hidden",
                  marginBottom: 18,
                }}
              >
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
                {product.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      background: "var(--gold)",
                      color: "#0a0602",
                      fontSize: "0.55rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      padding: "5px 10px",
                    }}
                  >
                    Featured
                  </div>
                )}
                {/* Hover overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
                    opacity: 0,
                    transition: "opacity 0.5s",
                  }}
                  className="group-hover:opacity-100"
                />
                {/* Hover CTA */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 18,
                    left: 18,
                    right: 18,
                    opacity: 0,
                    transform: "translateY(6px)",
                    transition: "all 0.5s ease",
                  }}
                  className="group-hover:opacity-100 group-hover:translate-y-0"
                >
                  <span style={{ fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#F2EBD9", display: "flex", alignItems: "center", gap: 8 }}>
                    View Masterpiece <ArrowRight size={11} />
                  </span>
                </div>
              </div>

              {/* Text */}
              <div>
                <span className="lux-label block" style={{ marginBottom: 8 }}>{product.category}</span>
                <h2
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 300,
                    color: "#F2EBD9",
                    lineHeight: 1.35,
                    transition: "color 0.3s",
                  }}
                  className="group-hover:text-[#C8A96E]"
                >
                  {product.name}
                </h2>
                <div
                  style={{
                    height: 1,
                    background: "var(--gold)",
                    marginTop: 12,
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    opacity: 0.4,
                    transition: "transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)",
                  }}
                  className="group-hover:scale-x-100"
                />
              </div>
            </Link>
          ))}
        </section>
      ) : (
        <section
          className="section-x section-y"
          style={{ textAlign: "center" }}
        >
          <p className="font-display" style={{ fontSize: "2rem", fontWeight: 300, color: "var(--gold)", marginBottom: 16 }}>
            No works found
          </p>
          <p style={{ color: "var(--text-3)", fontSize: "0.9rem", marginBottom: 32 }}>
            Try a different search term or category.
          </p>
          <button onClick={clear} className="btn-outline">Clear Filters</button>
        </section>
      )}

      <Footer />
    </main>
  );
}