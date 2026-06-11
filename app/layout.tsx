import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import WhatsAppButton from "./components/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const siteUrl = "https://www.devashilpa.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Devashilpa | Handcrafted Brass Sculptures from India",
    template: "%s | Devashilpa",
  },
  description:
    "Luxury handcrafted brass sculptures, temple decor, divine idols, and heritage artworks created by Indian artisans. Worldwide shipping available.",
  keywords: [
    "Handcrafted Brass Sculptures",
    "Indian Brass Sculptures",
    "Brass Temple Decor",
    "Divine Brass Idols",
    "Heritage Metal Art India",
    "Luxury Handcrafted Sculptures",
    "Brass Ganesha Sculpture",
    "Custom Brass Sculptures",
    "Devashilpa",
    "Brass Sculptures Worldwide Shipping",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Devashilpa",
    title: "Devashilpa | Handcrafted Brass Sculptures from India",
    description:
      "Luxury handcrafted brass sculptures, temple decor, divine idols, and heritage artworks created by Indian artisans. Worldwide shipping available.",
    images: [
      {
        url: "/products/parthasarathy-chariot/main.jpg",
        width: 1200,
        height: 630,
        alt: "Devashilpa — Handcrafted Brass Sculptures from India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devashilpa | Handcrafted Brass Sculptures from India",
    description:
      "Luxury handcrafted brass sculptures, temple decor, divine idols, and heritage artworks created by Indian artisans. Worldwide shipping available.",
    images: ["/products/parthasarathy-chariot/main.jpg"],
  },
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#080604]">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}