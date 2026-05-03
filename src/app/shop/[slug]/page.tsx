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
    <main className="min-h-screen bg-foam pt-16">
      <div className="mx-auto max-w-6xl px-4 pt-8 font-body text-xs uppercase tracking-wide text-roast/50 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2">
          <Link href="/" className="hover:text-ocean">
            Home
          </Link>
          <span aria-hidden>/</span>
          <Link href="/shop" className="hover:text-ocean">
            Shop
          </Link>
          <span aria-hidden>/</span>
          <span className="text-roast">{product.name}</span>
        </nav>
      </div>
      <ProductDetailClient product={product} />
    </main>
  );
}
