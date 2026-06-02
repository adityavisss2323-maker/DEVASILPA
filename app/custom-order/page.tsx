"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Ruler, Gem, Globe, MessageCircle } from "lucide-react";

export default function CustomOrderPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    material: "",
    size: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function sendToWhatsApp() {
    const phoneNumber = "916261068277"; // apna WhatsApp number yaha daalna

    const text = `
Hello Devashilpa, I want to request a custom sculpture.

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Country: ${form.country}
Material: ${form.material}
Size: ${form.size}
Message: ${form.message}
`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }

  return (
    <main className="min-h-screen bg-[#080604] text-[#f8f1df]">
      <Navbar />

      <section className="px-6 py-16 md:px-12">
        <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
          Custom Orders
        </p>

        <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          Create a sculpture made for your vision.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#d8ccb2]">
          Share your preferred design, size, material, and finish. Devashilpa can
          create custom handcrafted sculptures from 12 inches to 3–4 feet and
          beyond.
        </p>
      </section>

      <section className="grid gap-10 px-6 pb-20 md:grid-cols-2 md:px-12">
        <form className="rounded-3xl border border-[#d6b15c]/30 bg-white/5 p-8">
          <div className="grid gap-5">
            <input name="name" onChange={handleChange} placeholder="Full Name" className="rounded-xl border border-[#d6b15c]/30 bg-black/40 px-4 py-3 outline-none" />
            <input name="email" onChange={handleChange} placeholder="Email Address" className="rounded-xl border border-[#d6b15c]/30 bg-black/40 px-4 py-3 outline-none" />
            <input name="phone" onChange={handleChange} placeholder="Phone / WhatsApp Number" className="rounded-xl border border-[#d6b15c]/30 bg-black/40 px-4 py-3 outline-none" />
            <input name="country" onChange={handleChange} placeholder="Country" className="rounded-xl border border-[#d6b15c]/30 bg-black/40 px-4 py-3 outline-none" />

            <select name="material" onChange={handleChange} className="rounded-xl border border-[#d6b15c]/30 bg-black/40 px-4 py-3 outline-none">
              <option value="">Preferred Material</option>
              <option>Brass</option>
              <option>Copper</option>
              <option>Mixed Metal</option>
              <option>Custom Material</option>
            </select>

            <select name="size" onChange={handleChange} className="rounded-xl border border-[#d6b15c]/30 bg-black/40 px-4 py-3 outline-none">
              <option value="">Preferred Size</option>
              <option>12 inch</option>
              <option>2 feet</option>
              <option>3 feet</option>
              <option>4 feet</option>
              <option>Custom Size</option>
            </select>

            <textarea
              name="message"
              onChange={handleChange}
              rows={6}
              placeholder="Describe your sculpture idea..."
              className="rounded-xl border border-[#d6b15c]/30 bg-black/40 px-4 py-3 outline-none"
            />

            <button
              type="button"
              onClick={sendToWhatsApp}
              className="rounded-full bg-[#d6b15c] px-7 py-3 font-medium text-black"
            >
              Send Request on WhatsApp
            </button>
          </div>
        </form>

        <div className="space-y-6">
          {[
            ["Choose Size", "From 12-inch decor pieces to large 3–4 feet sculptures.", Ruler],
            ["Select Material", "Brass, copper, mixed metal, or custom material options.", Gem],
            ["Worldwide Delivery", "International shipping available with secure packing.", Globe],
            ["Personal Discussion", "Share your vision directly through WhatsApp.", MessageCircle],
          ].map(([title, desc, Icon]: any) => (
            <div key={title} className="rounded-3xl bg-[#120d08] p-8">
              <Icon className="mb-4 text-[#d6b15c]" />
              <h2 className="text-2xl text-[#d6b15c]">{title}</h2>
              <p className="mt-3 leading-7 text-[#d8ccb2]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}