"use client";

import { cn } from "@/lib/cn";

interface SizeSelectorProps {
  sizes: string[];
  value: string;
  onChange: (s: string) => void;
  disabled?: boolean;
}

export function SizeSelector({
  sizes,
  value,
  onChange,
  disabled,
}: SizeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((s) => (
        <button
          key={s}
          type="button"
          disabled={disabled}
          onClick={() => onChange(s)}
          className={cn(
            "rounded-full border px-4 py-2 font-body text-xs uppercase tracking-wide",
            disabled && "opacity-50",
            value === s
              ? "border-ocean bg-ocean text-chalk"
              : "border-roast/25 text-roast hover:border-wave",
          )}
        >
          {s}
        </button>
      ))}
    </div>
  );
}
