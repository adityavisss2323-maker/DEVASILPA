"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { products } from "@/app/data/products";
import { Search, X, SlidersHorizontal, ArrowRight } from "lucide-react";

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

type SortKey = "featured" | "name" | "newest";

export default function CollectionsPage() {
  const [search,   setSearch]   = useState("");
  const [category, setCategory] = useState("All Works");
  const [sort,     setSort]     = useState<SortKey>("featured");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    let list = products.filter((p) => {
      const matchQ   = !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q);
      const matchCat = category === "All Works" || p.category === category;
      return matchQ && matchCat;
    });
    if (sort === "featured") list = [...list].sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));
    if (sort === "name")     list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "newest")   list = [...list].sort((a, b) => b.id - a.id);
    return list;
  }, [search, category, sort]);

  const clear = () => { setSearch(""); setCategory("All Works"); setSort("featured"); };
  const isFiltered = search || category !== "All Works";

  const input: React.CSSProperties = {
    background: "var(--surface)",
    border: "1px solid var(--gold-line)",
    padding: "11px 16px",
    fontSize: "0.82rem",
    color: "var(--text)",
    outline: "none",
    width: "100%",
    transition: "border-color 0.25s",
  };

  return (
    <main style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
      <Navbar />

      {/* ── Page Header ── */}
      <section
        className="section-x"
        style={{
          paddingTop: "calc(var(--nav-h) + clamp(52px, 7vw, 100px))",
          paddingBottom: "clamp(44px, 5vw, 72px)",
          borderBottom: "1px solid var(--gold-line)",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 24 }}>
          <div>
            <span className="label" style={{ display: "block", marginBottom: 20 }}>The Collection</span>
            <h1
              className="font-display"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)", fontWeight: 300, lineHeight: 1.03, color: "#F5EDD8" }}
            >
              All Works
            </h1>
          </div>
          <div
            style={{
              border: "1px solid var(--gold-line)",
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span
              className="font-display"
              style={{ fontSize: "2.2rem", fontWeight: 300, color: "var(--gold)", lineHeight: 1 }}
            >
              22+
            </span>
            <div>
              <span className="label" style={{ display: "block", marginBottom: 2 }}>Masterpieces</span>
              <span className="label-muted">Available</span>
            </div>
          </div>
        </div>
        <p style={{ color: "var(--text-2)", fontSize: "0.9rem", lineHeight: 1.85, maxWidth: 540 }}>
          A curated exhibition of handcrafted brass and copper masterpieces, created through generations of traditional Indian metal casting artistry.
        </p>
      </section>

      {/* ── Sticky Filter Bar ── */}
      <div
        style={{
          position: "sticky",
          top: "var(--nav-h)",
          zIndex: 40,
          background: "rgba(8,6,4,0.97)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: "1px solid var(--gold-line)",
        }}
      >
        <div className="section-x" style={{ paddingTop: 16, paddingBottom: 16 }}>
          {/* Row 1: Search + Sort + count */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", marginBottom: 12 }}>
            {/* Search */}
            <div style={{ position: "relative", flex: "1 1 220px", minWidth: 200 }}>
              <Search size={14} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "var(--text-3)", pointerEvents: "none" }} />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--text-3)", display: "flex", padding: 2 }}
                >
                  <X size={13} />
                </button>
              )}
              <input
                type="text"
                placeholder="Search masterpieces…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ ...input, paddingLeft: 36, paddingRight: search ? 30 : 16 }}
              />
            </div>

            {/* Sort */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <SlidersHorizontal size={13} style={{ color: "var(--text-3)" }} />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                style={{
                  ...input,
                  width: "auto",
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  appearance: "none",
                  cursor: "pointer",
                  paddingRight: 32,
                }}
              >
                <option value="featured">Featured</option>
                <option value="name">Name A–Z</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            {/* Count + Clear */}
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ fontSize: "0.72rem", color: "var(--text-3)" }}>
                <span style={{ color: "var(--gold)" }}>{filtered.length}</span> / {products.length}
              </span>
              {isFiltered && (
                <button onClick={clear} className="btn-text">Clear</button>
              )}
            </div>
          </div>

          {/* Row 2: Category chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                style={{
                  fontSize: "0.58rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  padding: "7px 14px",
                  border: "1px solid",
                  borderColor: cat === category ? "var(--gold)" : "var(--gold-line)",
                  background: cat === category ? "var(--gold)" : "transparent",
                  color: cat === category ? "#060402" : "var(--text-2)",
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

      {/* ── Product Grid — Premium Gallery Exhibition ── */}
      {filtered.length > 0 ? (
        <section
          className="section-x"
          style={{
            paddingTop: "clamp(48px, 6vw, 88px)",
            paddingBottom: "clamp(64px, 8vw, 128px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "clamp(32px, 4vw, 56px) clamp(16px, 2.5vw, 28px)",
          }}
        >
          {filtered.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group"
              style={{ display: "block", textDecoration: "none", transition: "transform 0.5s var(--ease-smooth)" }}
            >
              {/* Image — lux.jpg for collection cards */}
              <div
                className="img-zoom"
                style={{
                  position: "relative",
                  aspectRatio: "4/5",
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

                {product.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: 14, left: 14,
                      background: "var(--gold)",
                      color: "#060402",
                      fontSize: "0.55rem",
                      fontWeight: 600,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      padding: "5px 10px",
                    }}
                  >
                    Featured
                  </div>
                )}

                {/* Hover gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                    opacity: 0,
                    transition: "opacity 0.5s ease",
                  }}
                  className="group-hover:opacity-100"
                />

                {/* Hover CTA */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 18, left: 18, right: 18,
                    opacity: 0,
                    transform: "translateY(8px)",
                    transition: "all 0.5s var(--ease-smooth)",
                  }}
                  className="group-hover:opacity-100 group-hover:translate-y-0"
                >
                  <span
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.25em",
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
              </div>

              {/* Text */}
              <span className="label" style={{ display: "block", marginBottom: 8 }}>
                {product.category}
              </span>
              <h2
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 300,
                  color: "#F5EDD8",
                  lineHeight: 1.4,
                  transition: "color 0.3s",
                }}
                className="group-hover:text-[#D4AF6A]"
              >
                {product.name}
              </h2>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-3)",
                  marginTop: 8,
                  lineHeight: 1.7,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {product.shortDescription}
              </p>

              {/* Gold underline */}
              <div
                style={{
                  height: 1,
                  background: "var(--gold)",
                  marginTop: 14,
                  opacity: 0.4,
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.6s var(--ease-smooth)",
                }}
                className="group-hover:scale-x-100"
              />
            </Link>
          ))}
        </section>
      ) : (
        <section className="section-x section-y" style={{ textAlign: "center" }}>
          <p
            className="font-display"
            style={{ fontSize: "2.4rem", fontWeight: 300, color: "var(--gold)", marginBottom: 18 }}
          >
            No works found
          </p>
          <p style={{ color: "var(--text-3)", fontSize: "0.9rem", marginBottom: 36 }}>
            Try a different search term or category.
          </p>
          <button onClick={clear} className="btn btn-outline-gold">
            Clear Filters
          </button>
        </section>
      )}

      <Footer />
    </main>
  );
}