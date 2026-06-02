import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { getProductBySlug, products } from "@/app/data/products";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Gem,
  Globe,
  PackageCheck,
  Ruler,
  ShieldCheck,
  Clock,
  MessageCircle,
} from "lucide-react";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  const whatsappNumber = "916261068277";

  const whatsappText = `Hello Devashilpa, I am interested in this sculpture:

Product: ${product.name}
Category: ${product.category}
Material: ${product.material}
Size: ${product.size}

Please share price, availability, shipping cost, and custom options.`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappText
  )}`;

  return (
    <main className="min-h-screen bg-[#080604] text-[#f8f1df]">
      <Navbar />

      <section className="grid gap-12 px-6 py-12 md:grid-cols-2 md:px-12">
        <div>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={900}
            height={650}
            priority
            className="rounded-3xl object-cover"
          />

          <div className="mt-6 grid grid-cols-3 gap-4">
            {product.images.slice(0, 3).map((img) => (
              <Image
                key={img}
                src={img}
                alt={product.name}
                width={300}
                height={220}
                className="h-36 rounded-2xl object-cover"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
            {product.category}
          </p>

          <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
            {product.name}
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#d8ccb2]">
            {product.description}
          </p>

          <div className="mt-6 rounded-2xl border border-[#d6b15c]/30 bg-white/5 p-5">
            <p className="text-sm text-[#d6b15c]">Price</p>
            <p className="mt-1 text-2xl font-semibold text-[#f8f1df]">
              {product.price}
            </p>
            <p className="mt-2 text-sm text-[#d8ccb2]">
              Final price depends on size, material, detailing, finish, packing,
              and shipping destination.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              ["Material", product.material, Gem],
              ["Size", product.size, Ruler],
              ["Production Time", product.productionTime, Clock],
              ["Shipping", product.shipping, Globe],
              ["Packing", product.packing, PackageCheck],
              [
                "Authenticity",
                "Handcrafted, no two pieces identical",
                ShieldCheck,
              ],
            ].map(([title, value, Icon]: any) => (
              <div
                key={title}
                className="rounded-2xl border border-[#d6b15c]/30 bg-white/5 p-5"
              >
                <Icon className="mb-3 text-[#d6b15c]" size={22} />
                <p className="text-sm text-[#d6b15c]">{title}</p>
                <p className="mt-1 text-sm text-[#d8ccb2]">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3 font-medium text-black"
            >
              Ask Price on WhatsApp <MessageCircle size={18} />
            </a>

            <Link
              href="/custom-order"
              className="flex items-center gap-2 rounded-full bg-[#d6b15c] px-7 py-3 font-medium text-black"
            >
              Request Custom Quote <ArrowRight size={18} />
            </Link>

            <Link
              href="/collections"
              className="rounded-full border border-[#d6b15c] px-7 py-3 text-[#d6b15c]"
            >
              Back to Collections
            </Link>
          </div>

          <p className="mt-6 text-sm leading-6 text-[#d8ccb2]">
            For international orders, shipping charges and delivery timeline are
            confirmed after destination, size, and packing requirements are
            reviewed.
          </p>
        </div>
      </section>

      <section className="grid gap-10 px-6 py-20 md:grid-cols-2 md:px-12">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
            Story
          </p>

          <h2 className="mt-4 text-4xl font-semibold">
            Crafted through inherited tradition.
          </h2>
        </div>

        <div className="space-y-5 text-lg leading-8 text-[#d8ccb2]">
          <p>
            Every Devashilpa masterpiece is created through traditional
            mold-making, metal casting, and hand finishing.
          </p>

          <p>
            Since every sculpture is finished manually, each piece carries
            natural variations that make it truly one of a kind.
          </p>

          <p>
            Larger custom sculptures may take several weeks depending on size,
            material, detailing, and finish. A 4-feet sculpture may take around
            one month depending on complexity.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12">
        <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
          Buyer Information
        </p>

        <h2 className="mt-4 text-4xl font-semibold">
          Before you place an inquiry.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            [
              "Custom Sizes Available",
              "Designs can be created in different sizes based on your requirement.",
            ],
            [
              "Material Options",
              "Brass, copper, mixed metal, and custom finish options are available.",
            ],
            [
              "Worldwide Shipping",
              "International shipping is available with secure protective packing.",
            ],
            [
              "Price on Request",
              "Pricing depends on size, metal, detailing, finish, and destination.",
            ],
            [
              "Handmade Variation",
              "Small variations are natural and prove genuine hand craftsmanship.",
            ],
            [
              "Custom Orders",
              "Reference images and personal design ideas can be discussed on WhatsApp.",
            ],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-3xl border border-[#d6b15c]/30 bg-white/5 p-8"
            >
              <h3 className="text-2xl text-[#d6b15c]">{title}</h3>
              <p className="mt-4 leading-7 text-[#d8ccb2]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-6 mb-20 rounded-3xl bg-[#d6b15c] px-8 py-16 text-center text-black md:mx-12">
        <h2 className="text-4xl font-semibold md:text-5xl">
          Interested in this masterpiece?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg">
          Message us directly on WhatsApp for price, availability, customization,
          packing, and international shipping details.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-full bg-black px-8 py-3 text-[#d6b15c]"
        >
          Inquire on WhatsApp
        </a>
      </section>

      <section className="px-6 py-20 md:px-12">
        <p className="text-sm uppercase tracking-[0.35em] text-[#d6b15c]">
          Related Masterpieces
        </p>

        <h2 className="mt-4 text-4xl font-semibold">You May Also Like</h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {relatedProducts.map((item) => (
            <Link
              href={`/product/${item.slug}`}
              key={item.id}
              className="overflow-hidden rounded-3xl bg-[#120d08] transition hover:scale-[1.02]"
            >
              <Image
                src={item.images[0]}
                alt={item.name}
                width={600}
                height={450}
                className="h-80 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-[#d6b15c]">{item.category}</p>

                <h3 className="mt-2 text-2xl">{item.name}</h3>

                <p className="mt-4 text-sm leading-6 text-[#d8ccb2]">
                  {item.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}