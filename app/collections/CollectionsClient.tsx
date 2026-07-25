"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Reveal } from "@/app/components/Animations";

/* ── Category taxonomy ── */
const CATEGORIES = [
  { id: "all",      label: "All Works" },
  { id: "ganesha",  label: "Ganesha Collection" },
  { id: "krishna",  label: "Krishna Collection" },
  { id: "divine",   label: "Devi Collection" },
  { id: "vishnu",   label: "Vishnu & Avatars" },
  { id: "shiva",    label: "Shiva Family" },
  { id: "ramayana", label: "Ramayana Collection" },
  { id: "royal",    label: "Royal & Heritage" },
  { id: "wall",     label: "Wall Décor" },
  { id: "ritual",   label: "Ritual & Temple" },
  { id: "busts",    label: "Busts & Decorative" },
];

/* ── Availability Types ── */
const AVAILABILITY = [
  { id: "all",       label: "All" },
  { id: "in-stock",  label: "In Stock & Ready" },
  { id: "concept",   label: "Commission Concepts" },
];

/* Map raw category strings from db.json into taxonomy IDs */
function mapCategory(raw: string): string {
  const r = raw.toLowerCase();
  if (r.includes("ganesha"))             return "ganesha";
  if (r.includes("krishna"))             return "krishna";
  if (r.includes("devi") || r.includes("divine") || r.includes("durga") ||
      r.includes("laxmi") || r.includes("saraswati") || r.includes("tara")) return "divine";
  if (r.includes("vishnu") || r.includes("avatar") || r.includes("narayan")) return "vishnu";
  if (r.includes("shiva") || r.includes("parvati") || r.includes("nandi")) return "shiva";
  if (r.includes("ramayana") || r.includes("ram darbar") || r.includes("ramayan")) return "ramayana";
  if (r.includes("royal") || r.includes("heritage") || r.includes("warrior") ||
      r.includes("elephant") || r.includes("decor")) return "royal";
  if (r.includes("wall") || r.includes("hanging") || r.includes("panel") ||
      r.includes("mask"))   return "wall";
  if (r.includes("ritual") || r.includes("temple") || r.includes("lamp") ||
      r.includes("diya") || r.includes("conch"))   return "ritual";
  if (r.includes("bust") || r.includes("decor"))   return "busts";
  return "all"; 
}

interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  shortDescription?: string;
  images: string[];
  featured: boolean;
  type: 'in-stock' | 'concept';
  availabilityStatus?: string;
  sizeOptions?: string[];
  finishOptions?: string[];
}

export default function CollectionsClient({ products }: { products: Product[] }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeAvail, setActiveAvail] = useState("all");

  const filtered = useMemo(() => {
    let list = products;
    
    if (activeCategory !== "all") {
      list = list.filter(p => mapCategory(p.category) === activeCategory);
    }
    
    if (activeAvail !== "all") {
      list = list.filter(p => p.type === activeAvail);
    }
    
    return [...list].sort((a, b) =>
      a.featured === b.featured ? a.name.localeCompare(b.name) : a.featured ? -1 : 1
    );
  }, [activeCategory, activeAvail, products]);

  // Separate the filtered list for rendering if "All" availability is selected,
  // so we can distinctly separate verified inventory from concepts.
  const inStockItems = filtered.filter(p => p.type === "in-stock");
  const conceptItems = filtered.filter(p => p.type === "concept");

  const activeCategoryLabel = CATEGORIES.find(c => c.id === activeCategory)?.label ?? "All Works";

  return (
    <main style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
      <Navbar />

      {/* ── Page Header ── */}
      <section
        className="section-x"
        style={{
          paddingTop: "calc(var(--nav-h) + clamp(80px, 12vw, 180px))",
          paddingBottom: "clamp(48px, 6vw, 96px)",
          borderBottom: "1px solid var(--gold-line)",
        }}
      >
        <Reveal>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
            <div>
              <span style={{ display: "block", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 24 }}>
                THE COLLECTION
              </span>
              <h1
                className="font-display"
                style={{ fontSize: "clamp(48px, 9vw, 120px)", fontWeight: 300, lineHeight: 0.9, color: "var(--text)", letterSpacing: "-0.02em" }}
              >
                The archive.
              </h1>
            </div>
            <Reveal delay={0.1}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                <span className="font-display" style={{ fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 300, color: "var(--gold)", lineHeight: 1 }}>
                  {filtered.length}
                </span>
                <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-3)" }}>
                  {filtered.length === 1 ? "Work" : "Works"}
                </span>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </section>

      {/* ── Filter Bars ── */}
      <div
        className="section-x"
        style={{
          paddingTop: 24,
          paddingBottom: 24,
          borderBottom: "1px solid var(--gold-line)",
          /* Sticky below nav on scroll */
          position: "sticky",
          top: "var(--nav-h)",
          zIndex: 50,
          background: "rgba(250, 248, 245, 0.95)",
          backdropFilter: "blur(8px)",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {/* Category Filter */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-4)", minWidth: 80 }}>
            Category:
          </span>
          <div
            style={{ display: "flex", gap: "clamp(16px, 2.5vw, 32px)", overflowX: "auto" }}
            className="filter-scroll"
          >
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`filter-tab${activeCategory === cat.id ? " active" : ""}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Availability Filter */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-4)", minWidth: 80 }}>
            Type:
          </span>
          <div style={{ display: "flex", gap: 24, overflowX: "auto" }} className="filter-scroll">
            {AVAILABILITY.map(avail => (
              <button
                key={avail.id}
                onClick={() => setActiveAvail(avail.id)}
                className={`filter-tab${activeAvail === avail.id ? " active" : ""}`}
              >
                {avail.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Product Grids ── */}
      <section
        className="section-x"
        style={{
          paddingTop: "clamp(48px, 7vw, 100px)",
          paddingBottom: "clamp(80px, 12vw, 240px)",
        }}
      >
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", paddingTop: "clamp(60px, 10vw, 160px)", paddingBottom: "clamp(60px, 10vw, 160px)" }}>
            <Reveal>
              <p className="font-display" style={{ fontSize: "clamp(28px, 4vw, 56px)", color: "var(--text-3)", marginBottom: 24 }}>
                No works found matching these filters.
              </p>
              <button
                onClick={() => { setActiveCategory("all"); setActiveAvail("all"); }}
                className="btn btn-charcoal"
                style={{ border: "none", cursor: "pointer", marginTop: 24 }}
              >
                Clear Filters
              </button>
            </Reveal>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(60px, 10vw, 120px)" }}>
            
            {/* In-Stock / Verified Gallery */}
            {inStockItems.length > 0 && (
              <div>
                <Reveal>
                  <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: "clamp(30px, 5vw, 60px)" }}>
                    {activeCategoryLabel} — Verified Inventory
                  </p>
                </Reveal>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
                    gap: "clamp(24px, 4vw, 64px) clamp(16px, 3vw, 48px)",
                    alignItems: "start",
                  }}
                >
                  {inStockItems.map((product, i) => (
                    <ProductCard key={product.id} product={product} index={i} />
                  ))}
                </div>
              </div>
            )}

            {/* Concepts Gallery */}
            {conceptItems.length > 0 && (
              <div>
                <Reveal>
                  <div style={{ paddingBottom: 24, borderBottom: "1px dashed var(--gold-line-2)", marginBottom: "clamp(30px, 5vw, 60px)" }}>
                    <p style={{ fontSize: "14px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text)", marginBottom: 8 }}>
                      Commission Concepts &amp; Available on Request
                    </p>
                    <p style={{ fontSize: "13px", color: "var(--text-3)" }}>
                      These designs have not yet been photographed or cast. They are available strictly as made-to-order commissions. 
                    </p>
                  </div>
                </Reveal>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
                    gap: "clamp(24px, 4vw, 64px) clamp(16px, 3vw, 48px)",
                    alignItems: "start",
                  }}
                >
                  {conceptItems.map((product, i) => (
                    <ProductCard key={product.id} product={product} index={i} />
                  ))}
                </div>
              </div>
            )}
            
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}

/* ── Product Card — handles both in-stock and concept ── */
function ProductCard({ product, index }: { product: Product; index: number }) {
  const hasImage = product.images?.[0] && !product.images[0].includes("placeholder");
  const imgSrc   = hasImage ? product.images[0].replace("main.jpg", "lux.jpg") : null;
  const isConcept = product.type === "concept";

  return (
    <Reveal delay={(index % 3) * 0.08}>
      <Link
        href={`/product/${product.slug}`}
        className="group"
        style={{ display: "block", textDecoration: "none" }}
      >
        {/* ── Image / Placeholder ── */}
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "125%",   /* consistent 4:5 aspect ratio */
            overflow: "hidden",
            background: "var(--surface)",
            marginBottom: 20,
            border: isConcept && hasImage ? "1px dashed var(--gold-line-2)" : "none", // visually distinguish concepts if they get images later
          }}
        >
          {imgSrc ? (
            <>
              <Image
                src={imgSrc}
                alt={product.name}
                fill
                style={{ objectFit: "cover", objectPosition: "center 15%" }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="img-lux"
              />
              {isConcept && (
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 12, background: "rgba(250,248,245,0.9)", textAlign: "center" }}>
                   <span style={{ fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-3)" }}>
                     Illustrative render — final piece hand-finished by our artisans, actual result may vary
                   </span>
                </div>
              )}
            </>
          ) : (
            <div
              className="placeholder-card"
              style={{ position: "absolute", inset: 0 }}
            >
              <span style={{
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 12,
              }}>
                {product.category}
              </span>
              <p className="font-display" style={{ fontSize: "clamp(18px, 2.5vw, 28px)", color: "var(--text-3)", lineHeight: 1.3, maxWidth: 200 }}>
                {product.name}
              </p>
              
              <span style={{ marginTop: 24, fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--text-4)" }}>
                {isConcept ? "Concept Preview" : "Photography Pending"}
              </span>
            </div>
          )}

          {/* Badges */}
          <div style={{ position: "absolute", top: 12, left: 12, display: "flex", gap: 6, flexDirection: "column", alignItems: "flex-start" }}>
            {product.featured && (
              <div style={{ padding: "4px 10px", background: "var(--gold)", fontSize: "8px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#FAF8F5" }}>
                Selected
              </div>
            )}
            {isConcept && (
              <div style={{ padding: "4px 10px", background: "var(--text)", fontSize: "8px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--bg)" }}>
                Concept Preview — Made to Order
              </div>
            )}
          </div>
        </div>

        {/* ── Card metadata ── */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, marginBottom: 6 }}>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(18px, 2vw, 26px)",
                fontWeight: 300,
                color: "var(--text)",
                lineHeight: 1.25,
                flex: 1,
                transition: "color 0.3s",
              }}
            >
              {product.name}
            </h2>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
            <span style={{
              fontSize: "10px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--gold)",
            }}>
              {product.category}
            </span>
            <span style={{
              fontSize: "10px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-4)",
            }}>
              {product.availabilityStatus || "Inquire"}
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
