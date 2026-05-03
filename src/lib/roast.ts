import type { RoastLevel } from "@/lib/data/products";

export function roastDotClass(level: RoastLevel): string {
  switch (level) {
    case "light":
    case "light-medium":
      return "bg-dotLight";
    case "medium":
      return "bg-dotMedium";
    case "medium-dark":
    case "dark":
      return "bg-dotDark";
    default:
      return "bg-dotMedium";
  }
}

export function roastLabel(level: RoastLevel): string {
  return level.replace("-", " ");
}
