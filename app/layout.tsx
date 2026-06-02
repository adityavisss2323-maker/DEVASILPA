import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Devashilpa | Handcrafted Luxury Indian Sculptures",
  description:
    "Discover handcrafted brass and copper sculptures created through generations of Indian craftsmanship. Custom sculptures, heritage art, and worldwide shipping from India.",
  keywords: [
    "Handcrafted Sculptures",
    "Brass Sculptures",
    "Copper Sculptures",
    "Indian Handicrafts",
    "Luxury Home Decor",
    "Custom Sculptures",
    "Metal Art",
    "Devashilpa",
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"

      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}