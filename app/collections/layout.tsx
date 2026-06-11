import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections | Devashilpa",
  description:
    "Browse 22+ handcrafted brass and copper sculptures by Devashilpa — divine idols, temple decor, heritage art, and luxury sculptures. Worldwide shipping.",
  alternates: {
    canonical: "https://www.devashilpa.com/collections",
  },
  openGraph: {
    title: "Collections | Devashilpa — Handcrafted Brass Sculptures",
    description:
      "Browse 22+ handcrafted brass and copper sculptures by Devashilpa. Worldwide shipping available.",
    type: "website",
  },
};

export default function CollectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
