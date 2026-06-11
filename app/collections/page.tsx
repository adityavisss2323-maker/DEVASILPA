"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { products } from "@/app/data/products";
import { ArrowRight, Search, SlidersHorizontal } from "lucide-react";

// Predefined category order matching the brief
const CATEGORY_LIST = [
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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortKey, setSortKey] = useState<SortKey>("featured");

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    // Sort
    if (sortKey === "featured") {
      result = [...result].sort((a, b) =>
        a.featured === b.featured ? 0 : a.featured ? -1 : 1
      );
    } else if (sortKey === "name") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortKey === "newest") {
      result = [...result].sort((a, b) => b.id - a.id);
    }

    return result;
  }, [search, selectedCategory, sortKey]);

  return (
    <main className="min-h-screen bg-[#080604] text-[#f8f1df]">
      <Navbar />

      {/* Header */}
      <section className="px-6 py-16 md:px-12">
        <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
          Devashilpa Collections
        </p>

        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h1 className="text-5xl font-semibold md:text-6xl">
            Explore Our Collections
          </h1>

          <div className="flex items-center gap-2 rounded-full border border-[#d6b15c]/40 bg-[#d6b15c]/10 px-5 py-2">
            <span className="text-2xl font-bold text-[#d6b15c]">22+</span>
            <span className="text-sm text-[#d8ccb2]">Masterpieces Available</span>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#d8ccb2]">
          Discover handcrafted brass and copper masterpieces created by master
          artisans using inherited Indian metal craftsmanship traditions.
        </p>
      </section>

      {/* Search & Filters */}
      <section className="px-6 pb-10 md:px-12">
        <div className="rounded-3xl border border-[#d6b15c]/20 bg-[#120d08] p-6">
          {/* Search bar */}
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8e7b53]"
              size={18}
            />
            <input
              type="text"
              placeholder="Search sculptures, Ganesha, Krishna, Durga..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-[#d6b15c]/20 bg-black/40 py-4 pl-12 pr-5 text-[#f8f1df] outline-none placeholder:text-[#8e7b53] focus:border-[#d6b15c]/50 transition duration-200"
            />
          </div>

          {/* Category pills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {CATEGORY_LIST.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-4 py-1.5 text-sm transition duration-200 ${
                  selectedCategory === category
                    ? "border-[#d6b15c] bg-[#d6b15c] text-black font-medium"
                    : "border-[#d6b15c]/30 text-[#d6b15c] hover:border-[#d6b15c] hover:bg-[#d6b15c]/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort & Count row */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[#d8ccb2]">
              Showing{" "}
              <span className="font-medium text-[#d6b15c]">
                {filteredProducts.length}
              </span>{" "}
              of {products.length} masterpieces
            </p>

            <div className="flex items-center gap-2">
              <SlidersHorizontal size={16} className="text-[#8e7b53]" />
              <span className="text-sm text-[#8e7b53]">Sort:</span>
              {(
                [
                  { key: "featured", label: "Featured" },
                  { key: "name", label: "Name A–Z" },
                  { key: "newest", label: "Newest" },
                ] as { key: SortKey; label: string }[]
              ).map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setSortKey(key)}
                  className={`rounded-full border px-3 py-1 text-xs transition duration-200 ${
                    sortKey === key
                      ? "border-[#d6b15c] bg-[#d6b15c] text-black font-medium"
                      : "border-[#d6b15c]/30 text-[#d6b15c] hover:border-[#d6b15c]/60"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="grid gap-8 px-6 pb-20 md:grid-cols-3 md:px-12">
        {filteredProducts.map((product) => (
          <Link
            href={`/product/${product.slug}`}
            key={product.id}
            className="group overflow-hidden rounded-3xl bg-[#120d08] transition duration-500 hover:shadow-[0_8px_40px_rgba(214,177,92,0.10)]"
          >
            <div className="relative overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                width={900}
                height={600}
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Category badge */}
              <div className="absolute left-4 top-4">
                <span className="rounded-full bg-black/60 px-3 py-1 text-xs text-[#d6b15c] backdrop-blur-sm">
                  {product.category}
                </span>
              </div>
              {/* Featured badge */}
              {product.featured && (
                <div className="absolute right-4 top-4">
                  <span className="rounded-full bg-[#d6b15c] px-3 py-1 text-xs font-medium text-black">
                    Featured
                  </span>
                </div>
              )}
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="flex items-center gap-2 rounded-full bg-[#d6b15c] px-5 py-2 text-sm font-medium text-black">
                  View Masterpiece <ArrowRight size={14} />
                </span>
              </div>
            </div>

            <div className="p-7">
              <h2 className="text-2xl font-medium text-[#f8f1df] transition duration-300 group-hover:text-[#d6b15c]">
                {product.name}
              </h2>

              <p className="mt-3 leading-7 text-[#d8ccb2] text-sm">
                {product.shortDescription}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-[#d6b15c]/10 pt-5">
                <p className="flex items-center gap-1.5 text-sm text-[#d6b15c] transition duration-300 group-hover:gap-3">
                  View Masterpiece <ArrowRight size={14} />
                </p>
                <p className="text-xs text-[#8e7b53]">{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Empty state */}
      {filteredProducts.length === 0 && (
        <section className="px-6 pb-20 text-center md:px-12">
          <div className="mx-auto max-w-md rounded-3xl border border-[#d6b15c]/20 bg-[#120d08] p-12">
            <h2 className="text-2xl text-[#d6b15c]">No masterpieces found</h2>
            <p className="mt-3 text-[#d8ccb2]">
              Try a different search term or select another category.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="mt-6 rounded-full bg-[#d6b15c] px-6 py-2 text-sm font-medium text-black transition hover:bg-[#c4a14e]"
            >
              Clear Filters
            </button>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}