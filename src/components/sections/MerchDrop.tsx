"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeUp } from "@/components/ui/FadeUp";
import { MerchProductCard } from "@/components/shop/ProductCard";
import { merchProducts } from "@/lib/data/products";
import { merchLifestylePhoto } from "@/lib/data/galleryPhotos";

export function MerchDrop() {
  return (
    <section
      style={{ clipPath: "polygon(0 4%, 100% 0, 100% 100%, 0 100%)" }}
      className="relative isolate overflow-hidden bg-ocean pb-20 pt-16 sm:pb-24 sm:pt-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <Image
          src={merchLifestylePhoto}
          alt=""
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
      </div>
      <div className="grain">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center">
            <p className="font-hand text-lg text-chalk/60">fresh gear 🤙</p>
            <h2 className="mt-4 font-display text-5xl text-chalk md:text-[72px]">
              Merch Drop
            </h2>
          </FadeUp>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {merchProducts.map((p) => (
              <MerchProductCard key={p.id} variant="dark" product={p} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/merch"
              className="rounded-full bg-sunrise px-10 py-3 font-body uppercase tracking-wider text-chalk hover:opacity-95"
            >
              Shop All Merch →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
