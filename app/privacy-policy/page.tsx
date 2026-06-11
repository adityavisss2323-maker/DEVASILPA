import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Devashilpa",
  description:
    "Read Devashilpa's privacy policy to understand how we handle your personal information.",
  alternates: {
    canonical: "https://www.devashilpa.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#080604] text-[#f8f1df]">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-12">
        <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
          Information
        </p>

        <h1 className="mt-4 text-5xl font-semibold">
          Privacy Policy
        </h1>

        <div className="mt-10 space-y-8 text-lg leading-8 text-[#d8ccb2]">
          <p>
            Devashilpa respects your privacy and is committed to protecting
            your personal information.
          </p>

          <p>
            Information submitted through contact forms, custom order
            requests, WhatsApp inquiries, or email communication is used only
            to respond to customer inquiries and provide services.
          </p>

          <p>
            We do not sell, rent, or share customer information with third
            parties except where required for shipping, logistics, or legal
            obligations.
          </p>

          <p>
            Customer information is handled securely and used solely for
            business communication and order processing.
          </p>

          <p>
            By using this website, you agree to the collection and use of
            information as described in this policy.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}