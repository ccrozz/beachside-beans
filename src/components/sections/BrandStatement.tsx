"use client";

import Image from "next/image";
import Link from "next/link";
import { galleryPhotos } from "@/lib/data/galleryPhotos";
import { FadeUp } from "@/components/ui/FadeUp";

const photo = galleryPhotos[2];

export function BrandStatement() {
  return (
    <section className="relative bg-roast py-16 text-chalk">
      <div className="grain">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-6">
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
            <p className="font-hand text-xs uppercase tracking-[0.35em] text-sunrise">
              The Grind
            </p>
            <div className="mt-2 h-px w-44 bg-chalk/20" aria-hidden />
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-[52px]">
              Every good day starts
              <span className="block">with a great cup</span>
              <span className="font-hand mt-4 block text-3xl text-chalk md:text-[2.2rem]">
                (and some good waves 🏄‍♂️🤙)
              </span>
            </h2>
            <p className="mt-8 font-body text-base leading-8 text-chalk/70">
              Dan apprenticed as a roaster and has roasted over 200,000 pounds
              of coffee in his career. Since 2024, he&apos;s roasted 3,000+ lbs
              for
              the Space Coast and beyond — all from small, ethical farms.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex rounded-xl border border-chalk px-6 py-3 font-body uppercase tracking-wider text-chalk transition hover:bg-chalk hover:text-roast"
            >
              Read Our Story →
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
