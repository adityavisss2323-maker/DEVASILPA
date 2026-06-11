import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Devashilpa",
  description:
    "Read Devashilpa's terms and conditions for handcrafted brass sculpture purchases, custom orders, and delivery.",
  alternates: {
    canonical: "https://www.devashilpa.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#080604] text-[#f8f1df]">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-12">
        <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
          Information
        </p>

        <h1 className="mt-4 text-5xl font-semibold">
          Terms & Conditions
        </h1>

        <div className="mt-10 space-y-8 text-lg leading-8 text-[#d8ccb2]">
          <p>
            All sculptures displayed on this website are handcrafted and may
            contain minor variations that are part of authentic artisan work.
          </p>

          <p>
            Prices, availability, dimensions, and production timelines may
            vary depending on customization requirements.
          </p>

          <p>
            Custom-made products cannot be cancelled once production has
            started.
          </p>

          <p>
            Delivery timelines are estimates and may vary depending on
            production schedules, logistics, and customs procedures.
          </p>

          <p>
            By using this website, you agree to these terms and conditions.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}