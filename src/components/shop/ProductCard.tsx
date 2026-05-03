"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import type { CoffeeProduct, MerchProduct } from "@/lib/data/products";
import { needsCoffeeOptionSelection } from "@/lib/data/products";
import { roastDotClass, roastLabel } from "@/lib/roast";
import { usePrefersHover } from "@/lib/usePrefersHover";
import { useCartStore } from "@/lib/store/cartStore";
import { cn } from "@/lib/cn";

interface CoffeeProductCardProps {
  variant?: "sand" | "dark";
  product: CoffeeProduct;
}

export function CoffeeProductCard({
  product,
  variant = "sand",
}: CoffeeProductCardProps) {
  const prefersHover = usePrefersHover();
  const [flipTouched, setFlipTouched] = useState(false);
  const addCoffeeLine = useCartStore((s) => s.addCoffeeLine);
  const openCart = useCartStore((s) => s.openCart);
  const needOptions = needsCoffeeOptionSelection(product);
  const dark = variant === "dark";

  const toggleFlipTap = useCallback(() => {
    if (prefersHover) return;
    setFlipTouched((f) => !f);
  }, [prefersHover]);

  const addSimple = () => {
    addCoffeeLine({
      id: product.slug,
      name: product.name,
      price: product.price,
      image: product.imageFront,
      grind: product.grindOptions[0],
      size: product.sizes[0],
    });
    openCart();
  };

  const soldOut = !product.inStock;

  return (
    <article
      className={cn(
        "relative flex flex-col rounded-2xl border p-4 shadow-sm",
        dark ? "border-chalk/20 bg-ocean/40" : "border-roast/10 bg-foam",
        soldOut && "opacity-80 grayscale",
      )}
    >
      {soldOut && (
        <div className="absolute right-2 top-2 z-20 -rotate-12 rounded-md bg-roast px-2 py-1 font-body text-[10px] uppercase tracking-wide text-chalk shadow">
          {product.soldOutLabel ?? "Sold Out"}
        </div>
      )}

      <div className="perspective-[1000px]" style={{ perspective: "1000px" }}>
        <motion.div
          className="relative h-[220px] cursor-pointer"
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            rotateY: prefersHover ? 0 : flipTouched ? 180 : 0,
          }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          whileHover={prefersHover ? { rotateY: 180 } : undefined}
          onClick={(e) => {
            const target = e.target as HTMLElement;
            if (
              target.closest("a") ||
              target.closest("button")
            )
              return;
            toggleFlipTap();
          }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          >
            <Image
              src={product.imageFront}
              alt={product.name}
              width={440}
              height={440}
              className="max-h-[220px] w-auto object-contain"
              sizes="(max-width: 768px) 45vw, 220px"
            />
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <Image
              src={product.imageBack}
              alt={`${product.name} packaging back`}
              width={440}
              height={440}
              className="max-h-[220px] w-auto object-contain"
              sizes="(max-width: 768px) 45vw, 220px"
            />
          </div>
        </motion.div>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <div className="mb-2 flex items-center gap-2">
          <span
            className={cn(
              "inline-block h-2.5 w-2.5 rounded-full",
              roastDotClass(product.roastLevel),
            )}
            aria-hidden
          />
          <span
            className={cn(
              "font-body text-[11px] uppercase tracking-wider",
              dark ? "text-chalk/60" : "text-roast/60",
            )}
          >
            {roastLabel(product.roastLevel)}
          </span>
        </div>
        <h3
          className={cn(
            "font-display text-lg leading-tight text-roast",
            dark && "text-chalk",
          )}
        >
          {product.name}
        </h3>

        {(product.tasting ?? []).slice(0, 6).map((note) => (
          <span
            key={note}
            className={cn(
              "mr-2 mt-2 inline-block rounded-full bg-foam px-2 py-0.5 font-body text-[11px] text-ocean",
              dark && "bg-chalk/10 text-wave",
            )}
          >
            {note}
          </span>
        ))}

        <p
          className={cn(
            "mt-3 font-body text-2xl font-bold text-sunrise",
            dark && "text-sunrise",
          )}
        >
          $
          {product.price.toFixed(2)}
        </p>

        <div className="mt-auto pt-4">
          {soldOut ? (
            <button
              type="button"
              disabled
              className={cn(
                "w-full cursor-not-allowed rounded-lg bg-roast/20 py-3 font-body text-xs uppercase tracking-wider text-roast/60",
              )}
            >
              Sold Out 🤙
            </button>
          ) : needOptions ? (
            <Link
              href={`/shop/${product.slug}`}
              className={cn(
                "block w-full rounded-lg bg-ocean py-3 text-center font-body text-xs uppercase tracking-wider text-chalk hover:bg-wave hover:text-roast",
              )}
            >
              Select Options
            </Link>
          ) : (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                addSimple();
              }}
              className={cn(
                "w-full rounded-lg bg-ocean py-3 font-body text-xs uppercase tracking-wider text-chalk hover:bg-wave hover:text-roast",
              )}
            >
              + Add to Cart
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

interface MerchProductCardProps {
  variant?: "sand" | "dark";
  product: MerchProduct;
}

export function MerchProductCard({
  product,
  variant = "sand",
}: MerchProductCardProps) {
  const [idx, setIdx] = useState(0);
  const dark = variant === "dark";
  const soldOut = !product.inStock;

  return (
    <article
      className={cn(
        "relative flex flex-col rounded-2xl border p-4 shadow-sm",
        dark ? "border-chalk/20 bg-ocean/40" : "border-roast/10 bg-foam",
        soldOut && "opacity-85 grayscale",
      )}
    >
      {soldOut && (
        <div className="absolute right-2 top-2 z-20 -rotate-12 rounded-md bg-roast px-2 py-1 font-body text-[10px] uppercase tracking-wide text-chalk shadow">
          {product.soldOutLabel ?? "Sold Out"}
        </div>
      )}
      <div className="relative h-[220px] overflow-hidden rounded-xl bg-sand">
        <Image
          src={product.images[idx] ?? product.images[0]}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 85vw, 320px"
        />
      </div>
      <div className="mt-3 flex gap-1">
        {product.images.map((img, i) => (
          <button
            type="button"
            key={img}
            onClick={() => setIdx(i)}
            className={cn(
              "h-2 flex-1 rounded-full",
              i === idx ? "bg-sunrise" : dark ? "bg-chalk/20" : "bg-roast/15",
            )}
            aria-label={`Show photo ${i + 1}`}
          />
        ))}
      </div>
      <h3
        className={cn(
          "mt-4 font-display text-lg text-roast",
          dark && "text-chalk",
        )}
      >
        {product.name}
      </h3>
      <p
        className={cn(
          "mt-1 font-body text-sm text-roast/70",
          dark && "text-chalk/70",
        )}
      >
        {product.description}
      </p>
      <p className="mt-3 font-body text-xl font-bold text-sunrise">
        $
        {product.price.toFixed(2)}
      </p>
      <button
        type="button"
        disabled={soldOut}
        className={cn(
          "mt-4 w-full rounded-lg py-3 font-body text-xs uppercase tracking-wider",
          soldOut
            ? "cursor-not-allowed bg-roast/20 text-roast/50"
            : "bg-ocean text-chalk hover:bg-wave hover:text-roast",
        )}
      >
        {soldOut ? "Sold Out 🤙" : "Coming Soon 🤙"}
      </button>
    </article>
  );
}
