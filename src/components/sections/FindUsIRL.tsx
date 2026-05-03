"use client";

import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import { INSTAGRAM_URL } from "@/lib/constants";

const venues = [
  {
    name: "Farmer's Markets",
    tagline: "Fresh beans, fresh air, good vibes",
  },
  {
    name: "Night Markets",
    tagline: "Under the stars in Brevard County",
  },
  {
    name: "Street Parties",
    tagline: "All over Florida — follow for updates",
  },
];

export function FindUsIRL() {
  return (
    <section className="relative bg-sand py-20 sm:py-24">
      <div className="grain">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <FadeUp>
            <p className="font-hand text-xl text-ocean/60">come say hey</p>
            <h2 className="mt-1 font-display text-4xl text-ocean md:text-5xl">
              Find Us in the Wild
            </h2>
            <p className="mt-3 font-body text-[11px] uppercase tracking-widest text-roast/40">
              Satellite Beach, FL · All over Brevard County 🚀
            </p>
          </FadeUp>

          <FadeUp>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {venues.map((v) => (
                <div
                  key={v.name}
                  className="rounded-2xl border border-roast/10 bg-foam px-6 py-8"
                >
                  <p className="font-display text-2xl text-ocean">{v.name}</p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-roast/55">
                    {v.tagline}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp>
            <p className="mt-10 font-hand text-xl text-roast/55">
              Schedule changes weekly — follow us for the latest spots!
            </p>
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full border-2 border-ocean bg-ocean px-8 py-3 font-body text-sm uppercase tracking-wider text-chalk transition-colors hover:bg-transparent hover:text-ocean"
            >
              Follow @beachsidebeans →
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
