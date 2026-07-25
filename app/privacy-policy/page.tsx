import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Devashilpa",
  description: "Read Devashilpa's privacy policy to understand how we handle your personal information.",
  alternates: { canonical: "https://www.devashilpa.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
      <Navbar />

      <section className="section-x" style={{ paddingTop: "calc(var(--nav-h) + 80px)", paddingBottom: "clamp(80px, 10vw, 160px)", maxWidth: 760, margin: "0 auto" }}>
        <span style={{ display: "block", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
          Information
        </span>
        <h1 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "var(--text)", marginBottom: 48 }}>
          Privacy Policy
        </h1>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, fontSize: "16px", lineHeight: 1.85, color: "var(--text-2)" }}>
          <p>Devashilpa respects your privacy and is committed to protecting your personal information.</p>
          <p>Information submitted through contact forms, custom order requests, WhatsApp inquiries, or email communication is used only to respond to customer inquiries and provide services.</p>
          <p>We do not sell, rent, or share customer information with third parties except where required for shipping, logistics, or legal obligations.</p>
          <p>Customer information is handled securely and used solely for business communication and order processing.</p>
          <p>By using this website, you agree to the collection and use of information as described in this policy.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}