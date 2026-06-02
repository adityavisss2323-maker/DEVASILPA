"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { products } from "@/app/data/products";

export default function CollectionsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(products.map((item) => item.category)))];
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <main className="min-h-screen bg-[#080604] text-[#f8f1df]">
      <Navbar />

      <section className="px-6 py-16 md:px-12">
        <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
          Devashilpa Collections
        </p>

        <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
          Explore Our Collections
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#d8ccb2]">
          Discover handcrafted brass and copper masterpieces created by master
          artisans using inherited Indian metal craftsmanship traditions.
        </p>
      </section>

      <section className="px-6 pb-10 md:px-12">
        <div className="rounded-3xl border border-[#d6b15c]/20 bg-white/5 p-6">
          <input
            type="text"
            placeholder="Search sculptures, lamps, Ganesha, Krishna..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-[#d6b15c]/30 bg-black/40 px-5 py-4 text-[#f8f1df] outline-none placeholder:text-[#8e7b53]"
          />

          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-5 py-2 text-sm transition ${
                  selectedCategory === category
                    ? "border-[#d6b15c] bg-[#d6b15c] text-black"
                    : "border-[#d6b15c]/40 text-[#d6b15c] hover:bg-[#d6b15c] hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="mt-5 text-sm text-[#d8ccb2]">
            Showing {filteredProducts.length} of {products.length} masterpieces
          </p>
        </div>
      </section>

      <section className="grid gap-10 px-6 pb-20 md:grid-cols-3 md:px-12">
        {filteredProducts.map((product) => (
          <Link
            href={`/product/${product.slug}`}
            key={product.id}
            className="group overflow-hidden rounded-3xl bg-[#120d08] transition hover:scale-[1.02]"
          >
            <div className="overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                width={900}
                height={600}
                className="h-96 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-8">
              <p className="text-sm text-[#d6b15c]">{product.category}</p>

              <h2 className="mt-2 text-3xl text-[#f8f1df]">{product.name}</h2>

              <p className="mt-4 leading-7 text-[#d8ccb2]">
                {product.shortDescription}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <p className="text-[#d6b15c]">View Masterpiece →</p>
                <p className="text-sm text-[#8e7b53]">{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {filteredProducts.length === 0 && (
        <section className="px-6 pb-20 text-center md:px-12">
          <h2 className="text-3xl text-[#d6b15c]">No masterpieces found</h2>
          <p className="mt-3 text-[#d8ccb2]">
            Try searching another category or product name.
          </p>
        </section>
      )}

      <Footer />
    </main>
  );
}