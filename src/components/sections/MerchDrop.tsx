"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeUp } from "@/components/ui/FadeUp";
import { MerchProductCard } from "@/components/shop/ProductCard";
import { merchProducts } from "@/lib/data/products";
import { merchLifestylePhoto } from "@/lib/data/galleryPhotos";

export function MerchDrop() {
  return (
    <section className="relative isolate overflow-hidden bg-ocean pb-20 sm:pb-24">
      {/* Organic wave transition from BrandStatement (bg-roast) into ocean */}
      <div className="overflow-hidden leading-none" aria-hidden>
        <svg
          viewBox="0 0 1200 56"
          preserveAspectRatio="none"
          className="block w-full fill-roast"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0 L1200 0 L1200 34 C1000 56 800 10 600 34 C400 56 200 10 0 34 Z" />
        </svg>
      </div>

      {/* Faint lifestyle background image */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <Image
          src={merchLifestylePhoto}
          alt=""
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
      </div>

      <div className="grain pt-8">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center">
            <p className="font-hand text-xl text-chalk/50">fresh gear</p>
            <h2 className="mt-1 font-display text-5xl text-chalk md:text-[72px]">
              Merch Drop
            </h2>
            <p className="mt-3 font-body text-[11px] uppercase tracking-widest text-chalk/35">
              rep the roastery · space coast proud
            </p>
          </FadeUp>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {merchProducts.map((p) => (
              <MerchProductCard key={p.id} variant="dark" product={p} />
            ))}
          </div>

          <FadeUp className="mt-12 flex justify-center">
            <Link
              href="/merch"
              className="rounded-full bg-sunrise px-10 py-3.5 font-body text-sm uppercase tracking-wider text-chalk transition hover:bg-sunrise/90 active:scale-[0.98]"
            >
              Shop All Merch →
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
