import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy | Devashilpa",
  description: "Learn about Devashilpa's shipping policy — worldwide shipping for handcrafted brass sculptures with export-grade packaging.",
  alternates: { canonical: "https://www.devashilpa.com/shipping-policy" },
};

export default function ShippingPolicyPage() {
  return (
    <main style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
      <Navbar />

      <section className="section-x" style={{ paddingTop: "calc(var(--nav-h) + 80px)", paddingBottom: "clamp(80px, 10vw, 160px)", maxWidth: 760, margin: "0 auto" }}>
        <span style={{ display: "block", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
          Information
        </span>
        <h1 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "var(--text)", marginBottom: 48 }}>
          Shipping Policy
        </h1>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, fontSize: "16px", lineHeight: 1.85, color: "var(--text-2)" }}>
          <p>Devashilpa provides domestic and international shipping for handcrafted sculptures and custom creations.</p>
          <p>Production time varies depending on size, material, detailing, and customization requirements.</p>
          <p>All sculptures are packed using secure export-grade protective packaging to ensure safe delivery.</p>
          <p>Shipping charges are calculated separately based on destination, dimensions, weight, and packaging requirements.</p>
          <p>Delivery timelines may vary depending on the destination country, customs clearance procedures, and courier services.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}