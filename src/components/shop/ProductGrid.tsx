"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { CoffeeProduct } from "@/lib/data/products";
import { CoffeeProductCard } from "@/components/shop/ProductCard";

interface ProductGridProps {
  products: CoffeeProduct[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="mt-10 text-center font-body text-roast/60">
        No roasts match that filter right now — try another category.
      </p>
    );
  }

  return (
    <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {products.map((p) => (
          <motion.div
            key={p.slug}
            layout
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.22 }}
          >
            <CoffeeProductCard product={p} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
