"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  sortedCoffeeProducts,
  type ShopCategoryFilter,
} from "@/lib/data/products";
import { FilterStrip } from "@/components/shop/FilterStrip";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { PageHero } from "@/components/layout/PageHero";
import { galleryPhotos } from "@/lib/data/galleryPhotos";

const shopHeroImg = galleryPhotos[9];

export function ShopCoffeeClient() {
  const [filter, setFilter] = useState<ShopCategoryFilter>("all");

  const filtered = useMemo(() => {
    const base = sortedCoffeeProducts();
    if (filter === "all") return base;
    return base.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <>
      <PageHero
        label="fresh off the roaster"
        title="Shop Coffee"
        tagline="13 roasts · small-batch · space coast"
        image={shopHeroImg}
        imageAlt="Beachside Beans coffee bags and roasting setup"
      />

      <section className="bg-foam pb-20 pt-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FilterStrip active={filter} onChange={setFilter} />
          <ProductGrid products={filtered} />
          <div className="mt-16 rounded-2xl border border-ocean/20 bg-sand/60 px-6 py-10 text-center">
            <p className="font-hand text-xl text-roast/70">looking for some gear to match?</p>
            <Link
              href="/merch"
              className="mt-4 inline-flex rounded-full bg-ocean px-8 py-3 font-body text-xs uppercase tracking-wider text-chalk transition-colors hover:bg-wave hover:text-roast"
            >
              Shop Merch →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
