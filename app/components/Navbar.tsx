import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-6 md:px-12">
      <Link href="/" className="text-2xl tracking-[0.35em] text-[#d6b15c]">
        DEVASHILPA
      </Link>

      <div className="hidden items-center gap-8 text-sm md:flex">
        <Link href="/">Home</Link>
        <Link href="/collections">Collections</Link>
        <Link href="/about">About</Link>
        <Link href="/custom-order">Custom Order</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}