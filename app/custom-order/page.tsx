"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Reveal } from "@/app/components/Animations";
import { Ruler, Gem, Globe, MessageCircle, ArrowRight } from "lucide-react";

export default function CustomOrderPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", country: "", material: "", size: "", message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function sendToWhatsApp() {
    const text = `Hello Devashilpa, I want to commission a custom sculpture.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCountry: ${form.country}\nMaterial: ${form.material}\nSize: ${form.size}\nMessage: ${form.message}`;
    window.open(`https://wa.me/916261068277?text=${encodeURIComponent(text)}`, "_blank");
  }

  const inputStyle: React.CSSProperties = {
    background: "var(--surface)",
    border: "1px solid var(--gold-line)",
    padding: "14px 16px",
    fontSize: "0.85rem",
    color: "var(--text)",
    outline: "none",
    width: "100%",
    transition: "border-color 0.25s",
    fontFamily: "inherit",
  };

  return (
    <main style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
      <Navbar />

      {/* ── Header ── */}
      <Reveal>
        <section
          className="section-x"
          style={{
            paddingTop: "calc(var(--nav-h) + clamp(52px, 7vw, 100px))",
            paddingBottom: "clamp(44px, 5vw, 72px)",
            borderBottom: "1px solid var(--gold-line)",
          }}
        >
          <span className="label" style={{ display: "block", marginBottom: 24 }}>Bespoke Commission</span>
          <h1
            className="font-display"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 6rem)", fontWeight: 300, lineHeight: 1.05, color: "#F5EDD8", maxWidth: 680, marginBottom: 24 }}
          >
            Commission a masterpiece shaped by your vision.
          </h1>
          <p style={{ color: "var(--text-2)", fontSize: "0.9rem", lineHeight: 1.85, maxWidth: 500 }}>
            Share your preferred deity, size, material, and finish. Our artisans will create a unique sculpture made only for you — from intimate 12-inch pieces to grand 4-feet sculptures.
          </p>
        </section>
      </Reveal>

      {/* ── Form + Info ── */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          borderBottom: "1px solid var(--gold-line)",
          minHeight: 560,
        }}
        className="max-md:grid-cols-1"
      >
        {/* Left: Form */}
        <div
          className="section-x section-y"
          style={{ borderRight: "1px solid var(--gold-line)" }}
        >
          <span className="label" style={{ display: "block", marginBottom: 32 }}>Your Details</span>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="max-sm:grid-cols-1">
              <input name="name" onChange={handleChange} placeholder="Full Name" style={inputStyle} />
              <input name="email" onChange={handleChange} placeholder="Email Address" type="email" style={inputStyle} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="max-sm:grid-cols-1">
              <input name="phone" onChange={handleChange} placeholder="Phone / WhatsApp" style={inputStyle} />
              <input name="country" onChange={handleChange} placeholder="Country" style={inputStyle} />
            </div>
            <select name="material" onChange={handleChange} style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
              <option value="">Preferred Material</option>
              <option>Brass</option>
              <option>Copper</option>
              <option>Mixed Metal</option>
              <option>Custom Material</option>
            </select>
            <select name="size" onChange={handleChange} style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
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
              rows={7}
              placeholder="Describe your sculpture idea — deity, style, finish, reference images, or any special requirements…"
              style={{ ...inputStyle, resize: "none", lineHeight: 1.75 }}
            />
            <button
              type="button"
              onClick={sendToWhatsApp}
              className="btn btn-gold"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <MessageCircle size={14} />
              Send Commission Request on WhatsApp
            </button>
            <p style={{ textAlign: "center", fontSize: "0.75rem", color: "var(--text-3)" }}>
              You will be redirected to WhatsApp to send your inquiry.
            </p>
          </div>
        </div>

        {/* Right: Info */}
        <div className="section-x section-y" style={{ background: "var(--surface)" }}>
          <span className="label" style={{ display: "block", marginBottom: 32 }}>What to Expect</span>

          <div>
            {[
              { Icon: Ruler,         title: "Choose Your Size",    desc: "From 12-inch decor pieces to large 3–4 feet sculptures." },
              { Icon: Gem,           title: "Select Material",     desc: "Brass, copper, mixed metal, or custom material options." },
              { Icon: Globe,         title: "Worldwide Delivery",  desc: "International shipping with secure export-grade packing." },
              { Icon: MessageCircle, title: "Personal Discussion", desc: "Share your vision directly through WhatsApp." },
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 18,
                  padding: "20px 0",
                  borderBottom: "1px solid var(--gold-line)",
                }}
                className="group"
              >
                <Icon
                  size={17}
                  style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2, transition: "transform 0.3s" }}
                  className="group-hover:scale-110"
                />
                <div>
                  <h3 style={{ fontSize: "0.9rem", fontWeight: 400, color: "#F5EDD8", marginBottom: 6, lineHeight: 1.3 }}>{title}</h3>
                  <p style={{ fontSize: "0.78rem", color: "var(--text-3)", lineHeight: 1.75 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div
            style={{ marginTop: 28, border: "1px solid var(--gold-line)", padding: "20px 24px" }}
          >
            <span className="label" style={{ display: "block", marginBottom: 12 }}>Production Timeline</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { label: "Standard Sculptures", value: "15–30 days" },
                { label: "Complex / Large Pieces", value: "30–60 days" },
                { label: "Timeline", value: "Confirmed after discussion" },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", gap: 12 }}>
                  <span style={{ color: "var(--text-3)" }}>{label}</span>
                  <span style={{ color: "var(--text-2)", textAlign: "right" }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}