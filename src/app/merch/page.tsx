import type { Metadata } from "next";
import { MerchProductCard } from "@/components/shop/ProductCard";
import { merchProducts } from "@/lib/data/products";
import { merchLifestylePhoto } from "@/lib/data/galleryPhotos";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Merch | Beachside Beans",
  description:
    "Fresh gear from the Space Coast — tees, mugs, and more from Beachside Beans.",
};

export default function MerchPage() {
  return (
    <main className="min-h-screen bg-sand pt-16">
      <PageHero
        label="fresh gear"
        title="Merch"
        tagline="rep the roastery · space coast proud"
        image={merchLifestylePhoto}
        imageAlt="Beachside Beans merchandise lifestyle"
      />
      <section className="grain">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            {merchProducts.map((p) => (
              <MerchProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
