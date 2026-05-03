"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-sunrise text-chalk hover:opacity-95 active:scale-[0.99]",
  ocean:
    "bg-ocean text-chalk hover:bg-wave hover:text-roast transition-colors active:scale-[0.99]",
  ghostLight:
    "border-2 border-chalk text-chalk bg-transparent hover:bg-chalk/10",
  ghostDark:
    "border-2 border-ocean text-ocean hover:bg-ocean/5",
  muted: "bg-roast/20 text-roast cursor-not-allowed",
} as const;

type Variant = keyof typeof variants;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
}

export function Button({
  children,
  className,
  variant = "primary",
  type = "button",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-6 py-3 font-body uppercase tracking-wider transition-transform",
        variants[disabled ? "muted" : variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
