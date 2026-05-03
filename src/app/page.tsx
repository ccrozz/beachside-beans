import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { MerchDrop } from "@/components/sections/MerchDrop";
import { FindUsIRL } from "@/components/sections/FindUsIRL";
import { PhotoMarquee } from "@/components/sections/PhotoMarquee";

export const metadata: Metadata = {
  title: "Beachside Beans | Fresh Roasted Coffee · Satellite Beach, FL",
  description:
    "Craft coffee roasted fresh daily by Dan in Satellite Beach, Florida. For surfers, skaters, and Space Coast locals. Shop online, shipped to your door.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <BrandStatement />
      <MerchDrop />
      <FindUsIRL />
      <PhotoMarquee />
    </>
  );
}
