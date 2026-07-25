"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Reveal } from "@/app/components/Animations";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      // In a real integration, you would generate a token from Turnstile here.
      // For now, we simulate a token.
      const turnstileToken = "dummy-token";

      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error?.[0]?.message || "Failed to submit inquiry.");
      }

      setStatus("success");
    } catch (error: any) {
      console.error(error);
      setErrorMsg(error.message || "An unexpected error occurred.");
      setStatus("error");
    }
  };

  return (
    <main style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
      <Navbar />

      <section
        className="section-x"
        style={{
          paddingTop: "calc(var(--nav-h) + clamp(80px, 12vw, 180px))",
          paddingBottom: "clamp(60px, 8vw, 120px)",
        }}
      >
        <Reveal>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <span style={{ display: "block", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 32 }}>
              Get in Touch
            </span>
            <h1
              className="font-display"
              style={{ fontSize: "clamp(48px, 9vw, 80px)", fontWeight: 300, lineHeight: 1, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: 48 }}
            >
              Contact the Atelier.
            </h1>

            {status === "success" ? (
              <div style={{ padding: 32, border: "1px solid var(--gold-line-2)", background: "rgba(163,128,71,0.05)" }}>
                <h3 className="font-display" style={{ fontSize: 24, color: "var(--gold)", marginBottom: 16 }}>Inquiry Received</h3>
                <p style={{ color: "var(--text-2)", lineHeight: 1.6 }}>
                  Thank you for reaching out. The atelier has received your message and will respond shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div style={{ display: "flex", gap: 24 }}>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ flex: 1, background: "transparent", border: "none", borderBottom: "1px solid var(--gold-line-2)", color: "var(--text)", padding: "16px 0", outline: "none" }}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ flex: 1, background: "transparent", border: "none", borderBottom: "1px solid var(--gold-line-2)", color: "var(--text)", padding: "16px 0", outline: "none" }}
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid var(--gold-line-2)", color: "var(--text)", padding: "16px 0", outline: "none" }}
                />
                <textarea
                  placeholder="Your Message or Inquiry"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid var(--gold-line-2)", color: "var(--text)", padding: "16px 0", outline: "none", resize: "vertical" }}
                />

                {status === "error" && <p style={{ color: "#ff4444", fontSize: 14 }}>{errorMsg}</p>}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    background: "var(--text)",
                    color: "var(--black)",
                    border: "none",
                    padding: "20px 40px",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    marginTop: 24,
                    opacity: status === "loading" ? 0.7 : 1,
                  }}
                >
                  {status === "loading" ? "Sending..." : "Send Inquiry"}
                </button>
                <p style={{ fontSize: 12, color: "var(--text-3)", marginTop: 16 }}>
                  Protected by Cloudflare Turnstile.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
