import type { Metadata } from "next";
import { MerchProductCard } from "@/components/shop/ProductCard";
import { merchProducts } from "@/lib/data/products";
import { merchLifestylePhoto } from "@/lib/data/galleryPhotos";
import Image from "next/image";
import { FadeUp } from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Merch | Beachside Beans",
  description:
    "Fresh gear from the Space Coast — tees, mugs, and more from Beachside Beans.",
};

export default function MerchPage() {
  return (
    <main className="min-h-screen bg-sand pt-16">
      <section className="relative min-h-[260px] overflow-hidden border-b border-roast/10 py-16">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src={merchLifestylePhoto}
            alt=""
            fill
            className="object-cover opacity-40"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeUp>
            <p className="font-hand text-lg text-roast/70">fresh gear 🤙</p>
            <h1 className="mt-4 font-display text-5xl text-roast sm:text-7xl">
              Merch
            </h1>
          </FadeUp>
        </div>
      </section>
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
