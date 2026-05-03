"use client";

import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import { CoffeeProductCard } from "@/components/shop/ProductCard";
import { sortedCoffeeProducts } from "@/lib/data/products";

export function FeaturedProducts() {
  const beans = sortedCoffeeProducts();

  return (
    <section className="relative bg-sand py-16 sm:py-20">
      <div className="grain">
        <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-center font-hand text-[40px] text-roast sm:text-5xl">
              fresh off the roaster 🫘
            </h2>
          </FadeUp>

          <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 lg:hidden">
            {beans.map((p) => (
              <div
                key={p.id}
                className="w-[85vw] shrink-0 snap-center sm:w-[45%] sm:max-w-sm"
              >
                <CoffeeProductCard product={p} />
              </div>
            ))}
          </div>

          <div className="mt-12 hidden gap-6 lg:grid lg:grid-cols-4">
            {beans.map((p) => (
              <CoffeeProductCard key={p.id} product={p} />
            ))}
          </div>

          <p className="mt-14 text-center font-hand text-xl text-ocean">
            <Link href="/shop" className="underline underline-offset-4">
              → shop all 13 roasts
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
