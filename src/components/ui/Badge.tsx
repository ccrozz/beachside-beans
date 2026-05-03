import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: "foam" | "ocean" | "roast";
}

export function Badge({
  className,
  tone = "foam",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "rounded-full px-3 py-0.5 font-body text-xs uppercase tracking-wide",
        tone === "foam" &&
          "bg-foam text-ocean ring-1 ring-ocean/20",
        tone === "ocean" && "bg-ocean/90 text-chalk",
        tone === "roast" && "bg-roast text-chalk",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
