"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  sortedCoffeeProducts,
  type ShopCategoryFilter,
} from "@/lib/data/products";
import { FilterStrip } from "@/components/shop/FilterStrip";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { FadeUp } from "@/components/ui/FadeUp";

export function ShopCoffeeClient() {
  const [filter, setFilter] = useState<ShopCategoryFilter>("all");

  const filtered = useMemo(() => {
    const base = sortedCoffeeProducts();
    if (filter === "all") return base;
    return base.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <>
      <section className="bg-sand pb-4 pt-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h1 className="font-display text-5xl text-roast sm:text-7xl md:text-[96px]">
              Shop Coffee
            </h1>
          </FadeUp>
        </div>
        <WaveDivider className="-mb-1 text-foam" />
      </section>

      <section className="bg-foam pb-20 pt-2">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FilterStrip active={filter} onChange={setFilter} />
          <ProductGrid products={filtered} />
          <div className="mt-16 rounded-2xl border border-ocean/20 bg-sand/60 p-6 text-center font-hand text-lg text-ocean">
            <Link href="/merch" className="underline underline-offset-4">
              Need some gear to match your coffee? →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
