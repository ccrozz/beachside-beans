import type { Metadata } from "next";
import Link from "next/link";
import {
  BRAND_EMAIL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/lib/constants";
import { ContactForm } from "./ContactForm";
import { FadeUp } from "@/components/ui/FadeUp";
import { PageHero } from "@/components/layout/PageHero";
import { galleryPhotos } from "@/lib/data/galleryPhotos";

const contactHeroImg = galleryPhotos[4];

export const metadata: Metadata = {
  title: "Say Hi | Beachside Beans",
  description:
    "Reach out to Beachside Beans — Satellite Beach coffee roastery on the Space Coast.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-sand pt-16">
      <PageHero
        label="drop us a line"
        title="Say Hi 🤙"
        tagline="questions, wholesale inquiries, or just want to talk coffee"
        image={contactHeroImg}
        imageAlt="Beachside Beans coffee lifestyle"
      />
      <section className="grain">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <FadeUp>
            <ContactForm />
          </FadeUp>
          <FadeUp>
            <div className="space-y-5 font-body text-roast">
              <div className="rounded-2xl border border-roast/10 bg-foam p-6 space-y-4">
                <p className="flex items-center gap-3">
                  <span className="text-xl" aria-hidden>📍</span>
                  <span>Satellite Beach, Florida</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-xl" aria-hidden>📧</span>
                  <a
                    href={`mailto:${BRAND_EMAIL}`}
                    className="text-ocean underline-offset-4 transition-colors hover:underline"
                  >
                    {BRAND_EMAIL}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-xl" aria-hidden>📸</span>
                  <Link
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ocean underline-offset-4 transition-colors hover:underline"
                  >
                    @beachsidebeans on Instagram
                  </Link>
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-ocean px-5 py-2.5 text-sm font-body uppercase tracking-wide text-ocean transition-colors hover:bg-ocean hover:text-chalk"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-ocean px-5 py-2.5 text-sm font-body uppercase tracking-wide text-ocean transition-colors hover:bg-ocean hover:text-chalk"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-ocean px-5 py-2.5 text-sm font-body uppercase tracking-wide text-ocean transition-colors hover:bg-ocean hover:text-chalk"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
              </div>
              <p className="pt-2 font-hand text-xl leading-relaxed text-roast/80">
                Catch us at Farmer&apos;s Markets, Night Markets, and Street
                Parties all over Florida! Check socials for the most up-to-date
                schedule.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
