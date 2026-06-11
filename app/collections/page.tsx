"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { products } from "@/app/data/products";
import { Search, SlidersHorizontal, ArrowRight, X } from "lucide-react";

const CATEGORIES = [
  "All",
  "Divine Collection",
  "Temple Decor",
  "Heritage Collection",
  "Luxury Decor",
  "Ganesha Collection",
  "Royal Collection",
  "Warrior Collection",
  "Krishna Collection",
  "Ramayana Collection",
];

type SortKey = "featured" | "name" | "newest";

export default function CollectionsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortKey, setSortKey] = useState<SortKey>("featured");

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const q = search.toLowerCase();
      const matchSearch =
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q);
      const matchCat = category === "All" || p.category === category;
      return matchSearch && matchCat;
    });

    if (sortKey === "featured") list = [...list].sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));
    else if (sortKey === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    else if (sortKey === "newest") list = [...list].sort((a, b) => b.id - a.id);

    return list;
  }, [search, category, sortKey]);

  const clearAll = () => { setSearch(""); setCategory("All"); setSortKey("featured"); };
  const hasFilters = search !== "" || category !== "All" || sortKey !== "featured";

  return (
    <main className="bg-[#080604] text-[#F8F1DF] min-h-screen">
      <Navbar />

      {/* ── Page Header ── */}
      <section className="pt-[72px] px-6 md:px-16 py-20 border-b border-[#D6B15C]/10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="luxury-label mb-5">Devashilpa Collections</p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-[#F8F1DF] leading-tight">
              All Works
            </h1>
          </div>
          <div className="flex items-center gap-2 border border-[#D6B15C]/20 px-5 py-3 self-start md:self-auto">
            <span className="font-display text-3xl font-light text-[#D6B15C]">22+</span>
            <span className="luxury-label text-[#8e7b53] text-[10px]">Masterpieces<br />Available</span>
          </div>
        </div>
        <p className="mt-6 text-[#D8CCB2] max-w-xl leading-relaxed text-sm">
          Handcrafted brass and copper masterpieces by master artisans using inherited Indian metal craftsmanship traditions.
        </p>
      </section>

      {/* ── Sticky Filter Bar ── */}
      <div className="sticky top-[72px] z-40 bg-[#080604]/95 backdrop-blur-xl border-b border-[#D6B15C]/10">
        <div className="px-6 md:px-16 py-4">
          {/* Row 1: Search + Sort */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8e7b53]" size={15} />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8e7b53] hover:text-[#D6B15C] transition-colors"
                >
                  <X size={14} />
                </button>
              )}
              <input
                type="text"
                placeholder="Search sculptures..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#120d08] border border-[#D6B15C]/15 pl-10 pr-10 py-2.5 text-sm text-[#F8F1DF] placeholder:text-[#8e7b53] outline-none focus:border-[#D6B15C]/40 transition-colors duration-200"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2 shrink-0">
              <SlidersHorizontal size={14} className="text-[#8e7b53]" />
              <select
                value={sortKey}
                onChange={(e) => setSortKey(e.target.value as SortKey)}
                className="bg-[#120d08] border border-[#D6B15C]/15 text-xs uppercase tracking-wider text-[#D8CCB2] px-4 py-2.5 outline-none cursor-pointer hover:border-[#D6B15C]/35 transition-colors"
              >
                <option value="featured">Featured</option>
                <option value="name">Name A–Z</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Row 2: Category chips */}
          <div className="flex flex-wrap gap-2 mt-3 pb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.15em] px-3.5 py-1.5 border transition-all duration-200 ${
                  cat === category
                    ? "border-[#D6B15C] bg-[#D6B15C] text-black font-medium"
                    : "border-[#D6B15C]/20 text-[#D8CCB2] hover:border-[#D6B15C]/50 hover:text-[#F8F1DF]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Result count + clear */}
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#D6B15C]/8">
            <p className="text-xs text-[#8e7b53]">
              Showing <span className="text-[#D6B15C]">{filtered.length}</span> of {products.length}
            </p>
            {hasFilters && (
              <button
                onClick={clearAll}
                className="text-[10px] uppercase tracking-[0.15em] text-[#8e7b53] hover:text-[#D6B15C] transition-colors"
              >
                Clear all
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Product Grid ── */}
      {filtered.length > 0 ? (
        <section className="px-6 md:px-16 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {filtered.map((product) => (
            <Link
              href={`/product/${product.slug}`}
              key={product.id}
              className="group block card-hover"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#120d08] mb-5">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.featured && (
                    <span className="bg-[#D6B15C] text-black text-[9px] uppercase tracking-[0.15em] px-2.5 py-1">
                      Featured
                    </span>
                  )}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Hover CTA */}
                <div className="absolute bottom-5 left-5 right-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white">
                    View Masterpiece <ArrowRight size={11} />
                  </span>
                </div>
              </div>

              {/* Text */}
              <div>
                <p className="luxury-label text-[10px] mb-2">{product.category}</p>
                <h2 className="text-[#F8F1DF] text-xl font-light group-hover:text-[#D6B15C] transition-colors duration-300">
                  {product.name}
                </h2>
                <p className="text-[#8e7b53] text-sm mt-2 leading-relaxed line-clamp-2">
                  {product.shortDescription}
                </p>
                <div className="h-px bg-[#D6B15C]/30 mt-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </Link>
          ))}
        </section>
      ) : (
        /* Empty state */
        <section className="px-6 md:px-16 py-32 text-center">
          <p className="font-display text-3xl font-light text-[#D6B15C] mb-4">No works found</p>
          <p className="text-[#8e7b53] text-sm mb-8">Try a different search or category filter.</p>
          <button
            onClick={clearAll}
            className="border border-[#D6B15C]/30 text-[#D6B15C] text-xs uppercase tracking-[0.2em] px-7 py-3 hover:bg-[#D6B15C] hover:text-black transition-all duration-300"
          >
            Clear Filters
          </button>
        </section>
      )}

      <Footer />
    </main>
  );
}