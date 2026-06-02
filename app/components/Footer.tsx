import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#d6b15c]/20 bg-[#080604] text-[#f8f1df]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-semibold text-[#d6b15c]">
              Devashilpa
            </h2>

            <p className="mt-5 leading-7 text-[#d8ccb2]">
              Preserving traditional Indian metal craftsmanship through
              handcrafted brass and copper sculptures created by master artisans.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl text-[#d6b15c]">Quick Links</h3>

            <div className="mt-5 flex flex-col gap-3 text-[#d8ccb2]">
              <Link href="/">Home</Link>
              <Link href="/collections">Collections</Link>
              <Link href="/about">About</Link>
              <Link href="/custom-order">Custom Orders</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-xl text-[#d6b15c]">Information</h3>

            <div className="mt-5 flex flex-col gap-3 text-[#d8ccb2]">
              <Link href="/shipping-policy">
                Shipping Policy
              </Link>

              <Link href="/privacy-policy">
                Privacy Policy
              </Link>

              <Link href="/terms">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl text-[#d6b15c]">Contact</h3>

            <div className="mt-5 space-y-3 text-[#d8ccb2]">
              <p>Shajapur, Madhya Pradesh, India</p>

              <a
                href="tel:+916261068277"
                className="block hover:text-[#d6b15c]"
              >
                +91 6261068277
              </a>

              <a
                href="mailto:adityavisss.2323@gmail.com"
                className="block hover:text-[#d6b15c]"
              >
                adityavisss.2323@gmail.com
              </a>

              <p>Worldwide Shipping Available</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#d6b15c]/20 pt-8 text-center text-sm text-[#a89877]">
          © {new Date().getFullYear()} Devashilpa. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
} 