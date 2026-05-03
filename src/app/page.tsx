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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Beachside Beans Coffee Roastery",
  description:
    "Craft coffee roasted fresh daily by Dan in Satellite Beach, Florida. Small-batch, ethically sourced, Space Coast proud.",
  email: "beachsidebeans@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Satellite Beach",
    addressRegion: "FL",
    addressCountry: "US",
  },
  foundingDate: "2024",
  sameAs: ["https://www.instagram.com/beachsidebeans/"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <FeaturedProducts />
      <BrandStatement />
      <MerchDrop />
      <FindUsIRL />
      <PhotoMarquee />
    </>
  );
}
