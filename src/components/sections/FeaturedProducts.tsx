"use client";

import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import { CoffeeProductCard } from "@/components/shop/ProductCard";
import { sortedCoffeeProducts } from "@/lib/data/products";

export function FeaturedProducts() {
  const beans = sortedCoffeeProducts();

  return (
    <section className="relative bg-sand py-20 sm:py-24">
      <div className="grain">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="mb-12 text-center">
            <p className="font-hand text-xl text-ocean/60">fresh off the roaster</p>
            <h2 className="mt-1 font-display text-4xl text-roast sm:text-5xl">
              Small-Batch Coffee
            </h2>
            <p className="mt-3 font-body text-[11px] uppercase tracking-widest text-roast/40">
              13 roasts · ethically sourced · shipped to your door
            </p>
          </FadeUp>

          {/* Mobile: horizontal scroll */}
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 lg:hidden">
            {beans.map((p) => (
              <div
                key={p.id}
                className="w-[85vw] shrink-0 snap-center sm:w-[45%] sm:max-w-sm"
              >
                <CoffeeProductCard product={p} />
              </div>
            ))}
          </div>

          {/* Desktop: grid */}
          <div className="hidden gap-6 lg:grid lg:grid-cols-4">
            {beans.map((p) => (
              <CoffeeProductCard key={p.id} product={p} />
            ))}
          </div>

          <FadeUp className="mt-14 flex justify-center">
            <Link
              href="/shop"
              className="rounded-full bg-ocean px-10 py-3.5 font-body text-sm uppercase tracking-wider text-chalk transition-colors hover:bg-wave hover:text-roast"
            >
              Shop All 13 Roasts →
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
