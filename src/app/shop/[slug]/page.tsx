import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  coffeeProducts,
  getCoffeeBySlug,
} from "@/lib/data/products";
import { ProductDetailClient } from "./ProductDetailClient";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return coffeeProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const product = getCoffeeBySlug(params.slug);
  if (!product) {
    return { title: "Coffee not found" };
  }
  return {
    title: `${product.name} | Beachside Beans`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.imageFront, width: 800, height: 800 }],
    },
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = getCoffeeBySlug(params.slug);
  if (!product) notFound();

  return (
    <main className="min-h-screen bg-sand pt-16">
      <div className="border-b border-roast/10 bg-foam/80">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 font-body text-[11px] uppercase tracking-widest text-roast/40"
          >
            <Link href="/" className="transition-colors hover:text-ocean">Home</Link>
            <span aria-hidden className="text-roast/20">›</span>
            <Link href="/shop" className="transition-colors hover:text-ocean">Shop Coffee</Link>
            <span aria-hidden className="text-roast/20">›</span>
            <span className="text-roast/70">{product.name}</span>
          </nav>
        </div>
      </div>
      <ProductDetailClient product={product} />
    </main>
  );
}
