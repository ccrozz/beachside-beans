"use client";

import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import { INSTAGRAM_URL } from "@/lib/constants";

export function FindUsIRL() {
  return (
    <section className="relative bg-sand py-16 sm:py-20">
      <div className="grain">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="font-display text-4xl text-ocean md:text-[56px]">
              Catch us in Brevard 🚀
            </h2>
            <p className="mt-6 font-hand text-xl text-roast sm:text-2xl">
              Farmer&apos;s Markets · Night Markets · Street Parties all over
              Florida 🫘
            </p>
            <div className="mt-10 mx-auto rounded-3xl border-2 border-dashed border-roast/30 px-6 py-10 sm:px-10">
              <p className="font-body text-roast">
                📍 Satellite Beach, Florida
              </p>
              <p className="mt-3 font-hand text-roast text-lg leading-relaxed">
                Schedule changes weekly — follow socials for updates!
              </p>
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex font-display text-xl text-ocean underline underline-offset-4"
              >
                Follow @beachsidebeans →
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
