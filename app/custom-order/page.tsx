"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Ruler, Gem, Globe, MessageCircle, ArrowRight } from "lucide-react";

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
    const text = `Hello Devashilpa, I want to request a custom sculpture.

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Country: ${form.country}
Material: ${form.material}
Size: ${form.size}
Message: ${form.message}`;
    window.open(`https://wa.me/916261068277?text=${encodeURIComponent(text)}`, "_blank");
  }

  const inputClass =
    "w-full bg-[#120d08] border border-[#D6B15C]/15 px-4 py-3.5 text-sm text-[#F8F1DF] placeholder:text-[#8e7b53] outline-none focus:border-[#D6B15C]/40 transition-colors duration-200";

  return (
    <main className="bg-[#080604] text-[#F8F1DF] min-h-screen">
      <Navbar />

      {/* ── Header ── */}
      <section className="pt-[72px] px-6 md:px-16 py-24 border-b border-[#D6B15C]/10">
        <p className="luxury-label mb-6">Bespoke Commissions</p>
        <h1 className="font-display text-5xl md:text-7xl font-light text-[#F8F1DF] leading-[1.06] max-w-3xl mb-7">
          Commission a sculpture made for your vision.
        </h1>
        <p className="text-[#D8CCB2] max-w-xl leading-relaxed text-sm">
          Share your preferred design, size, material, and finish. Devashilpa creates custom 
          handcrafted sculptures from 12 inches to 3–4 feet and beyond.
        </p>
      </section>

      {/* ── Form + Info ── */}
      <section className="grid md:grid-cols-[1.1fr_0.9fr] gap-0 border-b border-[#D6B15C]/10">

        {/* Left: Form */}
        <div className="px-6 md:px-16 py-16 md:border-r border-[#D6B15C]/10">
          <p className="luxury-label mb-8">Your Details</p>
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" onChange={handleChange} placeholder="Full Name" className={inputClass} />
              <input name="email" onChange={handleChange} placeholder="Email Address" type="email" className={inputClass} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="phone" onChange={handleChange} placeholder="Phone / WhatsApp" className={inputClass} />
              <input name="country" onChange={handleChange} placeholder="Country" className={inputClass} />
            </div>

            <select name="material" onChange={handleChange} className={inputClass}>
              <option value="">Preferred Material</option>
              <option>Brass</option>
              <option>Copper</option>
              <option>Mixed Metal</option>
              <option>Custom Material</option>
            </select>

            <select name="size" onChange={handleChange} className={inputClass}>
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
              placeholder="Describe your sculpture idea, reference images, or any specific requirements..."
              className={`${inputClass} resize-none`}
            />

            <button
              type="button"
              onClick={sendToWhatsApp}
              className="flex items-center justify-center gap-3 w-full bg-[#D6B15C] text-black text-xs uppercase tracking-[0.22em] py-4 px-7 font-medium transition-all duration-300 hover:bg-[#c4a14e]"
            >
              <MessageCircle size={15} />
              Send Request on WhatsApp
            </button>
            <p className="text-center text-xs text-[#8e7b53]">
              You will be redirected to WhatsApp to send your inquiry.
            </p>
          </div>
        </div>

        {/* Right: Info */}
        <div className="bg-[#120d08] px-6 md:px-12 py-16">
          <p className="luxury-label mb-8">What to Expect</p>

          <div className="space-y-0">
            {[
              { Icon: Ruler,         title: "Choose Your Size",      desc: "From 12-inch decor pieces to large 3–4 feet sculptures." },
              { Icon: Gem,           title: "Select Material",       desc: "Brass, copper, mixed metal, or custom material options." },
              { Icon: Globe,         title: "Worldwide Delivery",    desc: "International shipping with secure export-grade packing." },
              { Icon: MessageCircle, title: "Personal Discussion",   desc: "Share your vision directly through WhatsApp." },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-5 py-7 border-b border-[#D6B15C]/10 group">
                <Icon className="text-[#D6B15C] shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" size={18} />
                <div>
                  <h3 className="text-[#F8F1DF] font-light mb-1">{title}</h3>
                  <p className="text-xs text-[#8e7b53] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline note */}
          <div className="mt-8 border border-[#D6B15C]/15 p-6">
            <p className="luxury-label text-[10px] mb-3">Production Timeline</p>
            <p className="text-sm text-[#D8CCB2] leading-relaxed">
              Standard sculptures: 15–30 days<br />
              Complex / large pieces: 30–60 days<br />
              Timeline confirmed after discussion.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}