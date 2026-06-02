"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

type Product = {
  name: string;
  category: string;
  material: string;
  size: string;
  price: string;
  image: string;
};

export default function AdminPage() {
  const [product, setProduct] = useState<Product>({
    name: "",
    category: "",
    material: "",
    size: "",
    price: "",
    image: "",
  });

  const [products, setProducts] = useState<Product[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  }

  function addProduct() {
    if (!product.name || !product.image) {
      alert("Product name and image URL are required");
      return;
    }

    setProducts([...products, product]);

    setProduct({
      name: "",
      category: "",
      material: "",
      size: "",
      price: "",
      image: "",
    });
  }

  return (
    <main className="min-h-screen bg-[#080604] text-[#f8f1df]">
      <Navbar />

      <section className="px-6 py-12 md:px-12">
        <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
          Admin Panel
        </p>

        <h1 className="mt-4 text-5xl font-semibold">
          Add New Product
        </h1>

        <div className="mt-10 grid gap-5 rounded-3xl border border-[#d6b15c]/30 bg-white/5 p-8 md:max-w-2xl">
          {[
            ["name", "Product Name"],
            ["category", "Category"],
            ["material", "Material"],
            ["size", "Size"],
            ["price", "Price"],
            ["image", "Image URL"],
          ].map(([name, placeholder]) => (
            <input
              key={name}
              name={name}
              value={product[name as keyof Product]}
              onChange={handleChange}
              placeholder={placeholder}
              className="rounded-xl border border-[#d6b15c]/30 bg-black/40 px-4 py-3 outline-none"
            />
          ))}

          <button
            onClick={addProduct}
            className="rounded-full bg-[#d6b15c] px-7 py-3 font-medium text-black"
          >
            Add Product
          </button>
        </div>

        <h2 className="mt-16 text-3xl text-[#d6b15c]">
          Added Products
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {products.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-[#120d08]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-80 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-[#d6b15c]">{item.category}</p>
                <h3 className="mt-2 text-2xl">{item.name}</h3>
                <p className="mt-2 text-[#d8ccb2]">{item.material}</p>
                <p className="mt-1 text-[#d8ccb2]">{item.size}</p>
                <p className="mt-3 text-[#d6b15c]">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}