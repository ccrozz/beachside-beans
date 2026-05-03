"use client";

import { cn } from "@/lib/cn";

interface GrindSelectorProps {
  options: string[];
  value: string;
  onChange: (g: string) => void;
  disabled?: boolean;
}

export function GrindSelector({
  options,
  value,
  onChange,
  disabled,
}: GrindSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((g) => (
        <button
          key={g}
          type="button"
          disabled={disabled}
          onClick={() => onChange(g)}
          className={cn(
            "rounded-full border px-4 py-2 font-body text-xs uppercase tracking-wide",
            disabled && "opacity-50",
            value === g
              ? "border-ocean bg-ocean text-chalk"
              : "border-roast/25 text-roast hover:border-wave",
          )}
        >
          {g}
        </button>
      ))}
    </div>
  );
}
