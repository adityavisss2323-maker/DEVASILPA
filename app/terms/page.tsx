import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Devashilpa",
  description: "Read Devashilpa's terms and conditions for handcrafted brass sculpture purchases, custom orders, and delivery.",
  alternates: { canonical: "https://www.devashilpa.com/terms" },
};

export default function TermsPage() {
  return (
    <main style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
      <Navbar />

      <section className="section-x" style={{ paddingTop: "calc(var(--nav-h) + 80px)", paddingBottom: "clamp(80px, 10vw, 160px)", maxWidth: 760, margin: "0 auto" }}>
        <span style={{ display: "block", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
          Information
        </span>
        <h1 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "var(--text)", marginBottom: 48 }}>
          Terms &amp; Conditions
        </h1>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, fontSize: "16px", lineHeight: 1.85, color: "var(--text-2)" }}>
          <p>All sculptures displayed on this website are handcrafted and may contain minor variations that are part of authentic artisan work.</p>
          <p>Prices, availability, dimensions, and production timelines may vary depending on customization requirements.</p>
          <p>Custom-made products cannot be cancelled once production has started.</p>
          <p>Delivery timelines are estimates and may vary depending on production schedules, logistics, and customs procedures.</p>
          <p>By using this website, you agree to these terms and conditions.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}