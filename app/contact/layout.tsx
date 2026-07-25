import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact the Atelier | Devashilpa",
  description: "Get in touch with Devashilpa's master artisans.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
