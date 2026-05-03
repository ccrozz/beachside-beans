import type { Metadata } from "next";
import { ShopCoffeeClient } from "./ShopCoffeeClient";

export const metadata: Metadata = {
  title: "Shop Coffee | Beachside Beans",
  description:
    "Browse single origins, blends, espresso, and decaf — roasted fresh in Satellite Beach, Florida.",
  openGraph: {
    title: "Shop Coffee | Beachside Beans",
    description:
      "Fresh roasts from the Space Coast. Shipped to your door — or catch us IRL around Brevard.",
  },
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-foam pt-16">
      <ShopCoffeeClient />
    </main>
  );
}
