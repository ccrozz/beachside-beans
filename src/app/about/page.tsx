import Image from "next/image";
import type { Metadata } from "next";
import { danAndJessPhoto, galleryPhotos } from "@/lib/data/galleryPhotos";
import { FadeUp } from "@/components/ui/FadeUp";
import { PageHero } from "@/components/layout/PageHero";

const aboutHeroImg = galleryPhotos[0];

export const metadata: Metadata = {
  title: "About Dan & Jess | Beachside Beans",
  description:
    "Meet the team behind Beachside Beans — craft coffee from Satellite Beach for surfers, skaters, and Space Coast locals.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-sand pt-16">
      <PageHero
        label="the people behind the pour"
        title="Dan & Jess"
        tagline="Satellite Beach, FL · Est. 2024"
        image={aboutHeroImg}
        imageAlt="Beachside Beans roastery lifestyle"
      />

      <section className="grain">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-8">
          <FadeUp>
            <div className="-rotate-1 overflow-hidden rounded-2xl shadow-xl ring-2 ring-roast/10">
              <Image
                src={danAndJessPhoto}
                alt="Dan and Jess portrait"
                width={480}
                height={600}
                className="w-full object-cover"
              />
            </div>
          </FadeUp>
          <FadeUp>
            <h2 className="font-display text-3xl text-ocean md:text-[40px]">
              Welcome to Beachside Beans!
            </h2>
            <p className="mt-8 space-y-6 font-body text-base leading-8 text-roast/85">
              <span className="block">
                We believe in spending as much time outdoors as possible. All of
                those days start with a fresh roasted cup of coffee. Our
                commitment to quality and craftsmanship sets us apart.
              </span>
              <span className="block">
                Dan apprenticed as a roaster and has since roasted over 200,000
                pounds of coffee in his career. Since Beachside Beans started in
                2024, he&apos;s roasted over 3,000 pounds for the Space Coast
                and Beyond! Because we only source from small ethical farms, we
                are introducing new roasts all the time.
              </span>
              <span className="block">
                Whether you&apos;re on the way to check the surf, on the way to
                work, catching a rocket launch, or enjoying a cozy morning at
                home, each sip is a taste of the beachside. We hope you feel
                our sunny warmth and salty drive in every cup.
              </span>
              <span className="block">
                Thank you for being a part of our coffee story and embracing the evolving adventure of Beachside Beans together!
              </span>
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="bg-ocean py-20 text-chalk grain">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            <div className="rounded-2xl border border-chalk/10 bg-chalk/5 px-6 py-8 backdrop-blur-sm">
              <p className="font-display text-5xl text-wave">200,000 lbs</p>
              <p className="mt-3 font-body text-sm uppercase tracking-wider text-chalk/70">Career Roasted</p>
            </div>
            <div className="rounded-2xl border border-chalk/10 bg-chalk/5 px-6 py-8 backdrop-blur-sm">
              <p className="font-display text-5xl text-wave">3,000+ lbs</p>
              <p className="mt-3 font-body text-sm uppercase tracking-wider text-chalk/70">Space Coast</p>
            </div>
            <div className="rounded-2xl border border-chalk/10 bg-chalk/5 px-6 py-8 backdrop-blur-sm">
              <p className="font-display text-5xl text-wave">Est. 2024</p>
              <p className="mt-3 font-body text-sm uppercase tracking-wider text-chalk/70">Satellite Beach FL</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
