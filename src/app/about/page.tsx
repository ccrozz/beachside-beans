import Image from "next/image";
import type { Metadata } from "next";
import { danAndJessPhoto } from "@/lib/data/galleryPhotos";
import { FadeUp } from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "About Dan & Jess | Beachside Beans",
  description:
    "Meet the team behind Beachside Beans — craft coffee from Satellite Beach for surfers, skaters, and Space Coast locals.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-sand pt-16">
      <section className="relative h-[55vh] min-h-[320px] w-full sm:h-[65vh]">
        <Image
          src={danAndJessPhoto}
          alt="Dan and Jess of Beachside Beans"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-roast/80 via-roast/30 to-transparent" />
        <div className="absolute inset-0 flex items-end justify-center pb-12 text-center sm:items-center sm:pb-0">
          <h1 className="font-display text-5xl uppercase tracking-tight text-chalk sm:text-7xl md:text-[80px]">
            Meet Dan &amp; Jess
          </h1>
        </div>
      </section>

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
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="bg-ocean py-16 text-chalk">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 text-center font-body sm:grid-cols-3 sm:px-6 lg:px-8">
          <div>
            <p className="font-display text-4xl">200,000 lbs</p>
            <p className="mt-2 text-sm text-chalk/80">Career Roasted</p>
          </div>
          <div>
            <p className="font-display text-4xl">3,000+ lbs</p>
            <p className="mt-2 text-sm text-chalk/80">Space Coast</p>
          </div>
          <div>
            <p className="font-display text-4xl">Est. 2024</p>
            <p className="mt-2 text-sm text-chalk/80">Satellite Beach FL</p>
          </div>
        </div>
      </section>
    </main>
  );
}
