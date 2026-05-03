"use client";

import Image from "next/image";
import Link from "next/link";
import { galleryPhotos } from "@/lib/data/galleryPhotos";
import { FadeUp } from "@/components/ui/FadeUp";

const photo = galleryPhotos[2];

export function BrandStatement() {
  return (
    <section className="relative bg-roast py-20 text-chalk sm:py-24">
      <div className="grain">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <FadeUp className="order-2 lg:order-1">
            <div className="-rotate-2 overflow-hidden rounded-2xl shadow-2xl ring-4 ring-black/40">
              <Image
                src={photo}
                alt="Coffee roasting lifestyle at Beachside Beans"
                width={700}
                height={900}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </FadeUp>

          <FadeUp className="order-1 lg:order-2">
            <p className="font-body text-[11px] uppercase tracking-[0.3em] text-sunrise/80">
              The Grind
            </p>
            <div className="mt-3 h-px w-12 bg-chalk/20" aria-hidden />
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-[52px]">
              Every good day starts
              <span className="block">with a great cup</span>
            </h2>
            <p className="mt-3 font-hand text-2xl text-chalk/55 md:text-3xl">
              (and some good waves 🏄‍♂️)
            </p>
            <p className="mt-8 font-body text-base leading-8 text-chalk/65">
              Dan apprenticed as a roaster and has roasted over 200,000 pounds
              of coffee in his career. Since 2024, he&apos;s roasted 3,000+ lbs
              for the Space Coast and beyond — all from small, ethical farms.
            </p>
            <div className="mt-8 flex flex-wrap gap-6 font-body text-sm text-chalk/40">
              <div>
                <span className="block font-display text-3xl text-wave">200k lbs</span>
                <span className="mt-1 block text-[11px] uppercase tracking-wider">Career roasted</span>
              </div>
              <div>
                <span className="block font-display text-3xl text-wave">3,000+</span>
                <span className="mt-1 block text-[11px] uppercase tracking-wider">Lbs for Space Coast</span>
              </div>
              <div>
                <span className="block font-display text-3xl text-wave">Est.&apos;24</span>
                <span className="mt-1 block text-[11px] uppercase tracking-wider">Satellite Beach, FL</span>
              </div>
            </div>
            <Link
              href="/about"
              className="mt-10 inline-flex rounded-full border border-chalk/30 px-8 py-3 font-body text-sm uppercase tracking-wider text-chalk transition-colors hover:bg-chalk hover:text-roast"
            >
              Read Our Story →
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
