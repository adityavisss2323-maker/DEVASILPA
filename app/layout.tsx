import type { Metadata } from "next";
import { Geist_Mono, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppTab from "./components/WhatsAppTab";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
    "Museum-grade handcrafted brass and copper sculptures by Indian master artisans. Collector-grade divine sculptures, heritage masterpieces and temple decor. Worldwide shipping.",
  keywords: [
    "Handcrafted Brass Sculptures",
    "Indian Brass Sculptures",
    "Brass Temple Decor",
    "Divine Brass Idols",
    "Heritage Metal Art India",
    "Luxury Handcrafted Sculptures",
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
      "Museum-grade handcrafted brass and copper sculptures by Indian master artisans. Collector-grade divine sculptures, heritage masterpieces and temple decor. Worldwide shipping.",
    images: [
      {
        url: "/products/parthasarathy-chariot/lux.jpg",
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
      "Museum-grade handcrafted brass and copper sculptures by Indian master artisans. Worldwide shipping.",
    images: ["/products/parthasarathy-chariot/lux.jpg"],
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
      className={`${inter.variable} ${geistMono.variable} ${cormorant.variable}`}
    >
      <body style={{ background: "var(--bg)" }}>
        {children}
        <WhatsAppTab />
      </body>
    </html>
  );
}