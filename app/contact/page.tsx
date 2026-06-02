import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#080604] text-[#f8f1df]">
      <nav className="flex items-center justify-between px-6 py-6 md:px-12">
        <Link href="/" className="text-2xl tracking-[0.35em] text-[#d6b15c]">
          DEVASHILPA
        </Link>

        <div className="hidden gap-8 text-sm md:flex">
          <Link href="/">Home</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/about">About</Link>
          <Link href="/custom-order">Custom Order</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <section className="px-6 py-16 md:px-12">
        <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
          Contact Devashilpa
        </p>

        <h1 className="mt-5 text-5xl font-semibold md:text-7xl">
          Let’s create something timeless.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#d8ccb2]">
          Whether you are looking for a handcrafted sculpture, a custom creation,
          or information about international shipping, we would love to hear
          from you.
        </p>
      </section>

      <section className="grid gap-10 px-6 pb-20 md:grid-cols-2 md:px-12">
        <div className="rounded-3xl border border-[#d6b15c]/30 bg-white/5 p-8">
          <h2 className="text-3xl text-[#d6b15c]">Send Us a Message</h2>

          <div className="mt-6 grid gap-5">
            <input
              placeholder="Full Name"
              className="rounded-xl border border-[#d6b15c]/30 bg-black/40 px-4 py-3 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="rounded-xl border border-[#d6b15c]/30 bg-black/40 px-4 py-3 outline-none"
            />

            <input
              placeholder="Phone Number"
              className="rounded-xl border border-[#d6b15c]/30 bg-black/40 px-4 py-3 outline-none"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="rounded-xl border border-[#d6b15c]/30 bg-black/40 px-4 py-3 outline-none"
            />

            <button className="rounded-full bg-[#d6b15c] px-7 py-3 font-medium text-black">
              Send Message
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl bg-[#120d08] p-8">
            <Mail className="mb-4 text-[#d6b15c]" />

            <h3 className="text-2xl text-[#d6b15c]">Email</h3>

            <p className="mt-3 text-[#d8ccb2]">
              adityavisss.2323@gmail.com

            </p>
          </div>

          <div className="rounded-3xl bg-[#120d08] p-8">
            <Phone className="mb-4 text-[#d6b15c]" />

            <h3 className="text-2xl text-[#d6b15c]">Phone / WhatsApp</h3>

            <p className="mt-3 text-[#d8ccb2]">
              +91 6261068277
            </p>
          </div>

          <div className="rounded-3xl bg-[#120d08] p-8">
            <MapPin className="mb-4 text-[#d6b15c]" />

            <h3 className="text-2xl text-[#d6b15c]">Workshop</h3>

            <p className="mt-3 text-[#d8ccb2]">
              Shajapur, Madhya Pradesh, India
            </p>
          </div>

          <div className="rounded-3xl bg-[#120d08] p-8">
            <Globe className="mb-4 text-[#d6b15c]" />

            <h3 className="text-2xl text-[#d6b15c]">
              Worldwide Shipping
            </h3>

            <p className="mt-3 text-[#d8ccb2]">
              Secure international shipping available.
            </p>
          </div>

          <div className="rounded-3xl bg-[#120d08] p-8">
           <MessageCircle className="mb-4 text-[#d6b15c]" />

            <h3 className="text-2xl text-[#d6b15c]">Instagram</h3>

            <p className="mt-3 text-[#d8ccb2]">
              @devashilpa
            </p>
          </div>

          <div className="rounded-3xl bg-[#120d08] p-8">
            <MessageCircle className="mb-4 text-[#d6b15c]" />

            <h3 className="text-2xl text-[#d6b15c]">
              Custom Orders
            </h3>

            <p className="mt-3 text-[#d8ccb2]">
              Custom sculptures available in different sizes,
              materials, and finishes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
