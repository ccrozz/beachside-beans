"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { Minus, Plus, Trash2, X } from "lucide-react";
import {
  BRAND_EMAIL,
} from "@/lib/constants";
import { useCartStore } from "@/lib/store/cartStore";

function formatUsd(n: number): string {
  return n.toFixed(2);
}

export function CartDrawer() {
  const items = useCartStore((s) => s.items);
  const total = useCartStore((s) => s.total());
  const isOpen = useCartStore((s) => s.isOpen);
  const closeCart = useCartStore((s) => s.closeCart);
  const toggleCart = useCartStore((s) => s.toggleCart);
  const updateQty = useCartStore((s) => s.updateQty);
  const removeLine = useCartStore((s) => s.removeLine);

  const checkout = () => {
    if (items.length === 0) return;
    const lines = items
      .map(
        (i) =>
          `- ${i.name} (${i.quantity}× @$${formatUsd(i.price)}): $${formatUsd(i.price * i.quantity)} Grind:${i.grind ?? "—"} Size:${i.size ?? "—"}`,
      )
      .join("\n");
    const subject = encodeURIComponent("Beachside Beans order request");
    const body = encodeURIComponent(
      `Hi Beachside Beans,\n\nI'd like to place an order:\n\n${lines}\n\nSubtotal: $${formatUsd(total)}\n\nThanks!`,
    );
    window.location.href = `mailto:${BRAND_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close cart overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-roast"
            onClick={() => closeCart()}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-[100] flex w-full max-w-full flex-col bg-foam shadow-2xl sm:max-w-md"
          >
            <div className="flex items-center justify-between bg-roast px-5 py-4 text-chalk">
              <h2 className="font-display text-2xl tracking-tight">
                Your Beach Bag
              </h2>
              <button
                type="button"
                aria-label="Close cart"
                onClick={() => closeCart()}
                className="rounded-full p-2 hover:bg-chalk/10"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center gap-4 pt-12 text-center font-body text-roast/80">
                  <span className="text-4xl" aria-hidden>
                    🌊
                  </span>
                  <p className="max-w-xs text-base leading-relaxed">
                    Your bag is empty. Go ride a wave then come back. 🤙
                  </p>
                  <Link
                    href="/shop"
                    onClick={() => closeCart()}
                    className="mt-2 rounded-full bg-ocean px-8 py-3 font-body text-sm uppercase tracking-wider text-chalk transition-colors hover:bg-wave hover:text-roast"
                  >
                    Shop Coffee
                  </Link>
                </div>
              ) : (
                <ul className="flex flex-col gap-4">
                  {items.map((item) => (
                    <li
                      key={item.lineKey}
                      className="flex gap-3 border-b border-roast/10 pb-4"
                    >
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md bg-sand">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="56px"
                          className="object-contain"
                        />
                      </div>
                      <div className="min-w-0 flex-1 font-body">
                        <p className="truncate font-medium text-roast">
                          {item.name}
                        </p>
                        {item.grind && (
                          <p className="text-xs text-roast/60">
                            Grind: {item.grind}
                          </p>
                        )}
                        {item.size && (
                          <p className="text-xs text-roast/60">
                            Size: {item.size}
                          </p>
                        )}
                        <p className="mt-1 text-sunrise">
                          $
                          {formatUsd(item.price)}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            type="button"
                            aria-label={`Decrease ${item.name}`}
                            className="rounded border border-roast/20 px-2 py-0.5 text-roast hover:border-ocean"
                            onClick={() =>
                              updateQty(item.lineKey, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-[1.5rem] text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label={`Increase ${item.name}`}
                            className="rounded border border-roast/20 px-2 py-0.5 text-roast hover:border-ocean"
                            onClick={() =>
                              updateQty(item.lineKey, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            aria-label={`Remove ${item.name}`}
                            className="ml-auto text-roast/50 hover:text-sunrise"
                            onClick={() => removeLine(item.lineKey)}
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-roast/10 bg-foam px-4 py-4">
                <div className="mb-3 flex justify-between font-body text-roast">
                  <span>Subtotal</span>
                  <span className="font-medium">
                    $
                    {formatUsd(total)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={checkout}
                  className="mb-2 w-full rounded-full bg-sunrise py-3 font-body text-sm uppercase tracking-wider text-chalk transition-colors hover:bg-sunrise/90 active:scale-[0.99]"
                >
                  Checkout →
                </button>
                <button
                  type="button"
                  onClick={() => toggleCart()}
                  className="w-full py-2 font-body text-sm text-roast/70 underline-offset-4 transition-colors hover:text-ocean hover:underline"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
