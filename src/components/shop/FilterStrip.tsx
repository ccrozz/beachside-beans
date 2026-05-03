"use client";

import type { ShopCategoryFilter } from "@/lib/data/products";
import { cn } from "@/lib/cn";

export const FILTERS: { id: ShopCategoryFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "single-origin", label: "Single Origin" },
  { id: "blend", label: "Blends" },
  { id: "espresso", label: "Espresso" },
  { id: "flavored", label: "Flavored" },
  { id: "decaf", label: "Decaf" },
];

interface FilterStripProps {
  active: ShopCategoryFilter;
  onChange: (f: ShopCategoryFilter) => void;
}

export function FilterStrip({ active, onChange }: FilterStripProps) {
  return (
    <div className="sticky top-16 z-40 flex flex-wrap gap-2 border-b border-roast/10 bg-foam py-4">
      {FILTERS.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          onClick={() => onChange(id)}
          className={cn(
            "rounded-full border px-4 py-1.5 font-body text-[11px] uppercase tracking-wide transition-colors",
            active === id
              ? "border-ocean bg-ocean text-chalk"
              : "border-roast/20 text-roast/80 hover:border-ocean hover:text-ocean",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
