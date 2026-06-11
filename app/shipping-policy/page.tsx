import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy | Devashilpa",
  description:
    "Learn about Devashilpa's shipping policy — worldwide shipping for handcrafted brass sculptures with export-grade packaging.",
  alternates: {
    canonical: "https://www.devashilpa.com/shipping-policy",
  },
};

export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen bg-[#080604] text-[#f8f1df]">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-12">
        <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
          Information
        </p>

        <h1 className="mt-4 text-5xl font-semibold">
          Shipping Policy
        </h1>

        <div className="mt-10 space-y-8 text-lg leading-8 text-[#d8ccb2]">
          <p>
            Devashilpa provides domestic and international shipping for
            handcrafted sculptures and custom creations.
          </p>

          <p>
            Production time varies depending on size, material, detailing,
            and customization requirements.
          </p>

          <p>
            All sculptures are packed using secure export-grade protective
            packaging to ensure safe delivery.
          </p>

          <p>
            Shipping charges are calculated separately based on destination,
            dimensions, weight, and packaging requirements.
          </p>

          <p>
            Delivery timelines may vary depending on the destination country,
            customs clearance procedures, and courier services.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}