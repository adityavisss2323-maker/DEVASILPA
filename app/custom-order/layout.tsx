import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Order | Devashilpa",
  description:
    "Request a custom handcrafted brass sculpture from Devashilpa. Share your size, material, and design — we create made-to-order masterpieces.",
  alternates: {
    canonical: "https://www.devashilpa.com/custom-order",
  },
};

export default function CustomOrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
