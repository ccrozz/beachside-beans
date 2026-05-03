"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { CoffeeProduct } from "@/lib/data/products";
import { Badge } from "@/components/ui/Badge";
import { GrindSelector } from "@/components/shop/GrindSelector";
import { SizeSelector } from "@/components/shop/SizeSelector";
import { useCartStore } from "@/lib/store/cartStore";
import { roastDotClass, roastLabel } from "@/lib/roast";

const categoryLabels: Record<CoffeeProduct["category"], string> = {
  espresso: "Espresso",
  "single-origin": "Single Origin",
  blend: "Blend",
  flavored: "Flavored",
  decaf: "Decaf",
};

interface ProductDetailClientProps {
  product: CoffeeProduct;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const soldOut = !product.inStock;
  const [grind, setGrind] = useState(product.grindOptions[0]);
  const [size, setSize] = useState(product.sizes[0]);
  const [showFront, setShowFront] = useState(true);
  const addCoffeeLine = useCartStore((s) => s.addCoffeeLine);
  const openCart = useCartStore((s) => s.openCart);

  useEffect(() => {
    setGrind(product.grindOptions[0]);
    setSize(product.sizes[0]);
    setShowFront(true);
  }, [product]);

  const heroSrc = showFront ? product.imageFront : product.imageBack;

  const badges = (
    <>
      <Badge tone="ocean">{categoryLabels[product.category]}</Badge>
      <span className="inline-flex items-center gap-2">
        <span
          className={`inline-block h-2 w-2 rounded-full ${roastDotClass(product.roastLevel)}`}
        />
        <Badge tone="foam">{roastLabel(product.roastLevel)} roast</Badge>
      </span>
    </>
  );

  const addBag = () => {
    addCoffeeLine({
      id: product.slug,
      name: product.name,
      price: product.price,
      image: product.imageFront,
      grind,
      size,
    });
    openCart();
  };

  const showSizes = product.sizes.length > 1;

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-16">
      <div className="space-y-6">
        <button
          type="button"
          onClick={() => setShowFront((f) => !f)}
          className="relative aspect-square w-full cursor-zoom-in overflow-hidden rounded-2xl bg-sand shadow-inner ring-2 ring-roast/10 transition hover:ring-ocean"
        >
          <Image
            src={heroSrc}
            alt={product.name}
            fill
            priority
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-roast/80 px-3 py-1 font-body text-[10px] uppercase tracking-wide text-chalk">
            Tap to flip
          </span>
        </button>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setShowFront(true)}
            className={`relative h-24 w-20 overflow-hidden rounded-lg border-4 transition ${
              showFront
                ? "border-sunrise"
                : "border-transparent opacity-80 hover:border-roast/20"
            }`}
          >
            <Image
              src={product.imageFront}
              alt="Front packaging"
              fill
              className="object-contain bg-sand"
              sizes="80px"
            />
          </button>
          <button
            type="button"
            onClick={() => setShowFront(false)}
            className={`relative h-24 w-20 overflow-hidden rounded-lg border-4 transition ${
              !showFront
                ? "border-sunrise"
                : "border-transparent opacity-80 hover:border-roast/20"
            }`}
          >
            <Image
              src={product.imageBack}
              alt="Back packaging"
              fill
              className="object-contain bg-sand"
              sizes="80px"
            />
          </button>
        </div>
      </div>

      <div className="font-body">
        <div className="flex flex-wrap items-center gap-2">{badges}</div>

        <h1 className="mt-6 font-display text-[40px] leading-tight text-roast lg:text-[44px]">
          {product.name}
        </h1>

        <div className="mt-5 flex flex-wrap gap-2">
          {(product.tasting ?? []).map((t) => (
            <span
              key={t}
              className="rounded-full bg-foam px-3 py-1 text-[11px] text-ocean ring-1 ring-ocean/20"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="mt-6 font-body text-[36px] font-bold leading-none text-sunrise">
          $
          {product.price.toFixed(2)}
        </p>

        <p className="mt-6 text-base leading-relaxed text-roast/80">
          {product.description}
        </p>

        <hr className="my-10 border-roast/10" />

        <p className="text-center font-hand text-xl text-ocean">
          —— Customize Your Cup ——
        </p>

        <div className="mt-6 space-y-8">
          <div>
            <p className="mb-3 font-display text-xl text-roast">Grind</p>
            <GrindSelector
              options={product.grindOptions}
              value={grind}
              disabled={soldOut}
              onChange={(g) => setGrind(g)}
            />
          </div>

          <div className={`${showSizes ? "" : "hidden"}`}>
            <p className="mb-3 font-display text-xl text-roast">Size</p>
            <SizeSelector
              sizes={product.sizes}
              value={size}
              disabled={soldOut}
              onChange={(s) => setSize(s)}
            />
          </div>

          <button
            type="button"
            disabled={soldOut}
            onClick={soldOut ? undefined : addBag}
            className="mt-8 w-full rounded-xl bg-ocean py-5 font-body text-sm uppercase tracking-widest text-chalk transition hover:bg-wave hover:text-roast disabled:cursor-not-allowed disabled:bg-roast/20 disabled:text-roast/50"
          >
            {soldOut ? "Sold Out" : "+ Add to Beach Bag"}
          </button>

          <Link
            href="/shop"
            className="mt-4 inline-block text-sm text-ocean underline-offset-4 hover:underline"
          >
            ← Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
