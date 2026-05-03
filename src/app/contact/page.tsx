import type { Metadata } from "next";
import Link from "next/link";
import { Camera, Share2, Building2 } from "lucide-react";
import {
  BRAND_EMAIL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/lib/constants";
import { ContactForm } from "./ContactForm";
import { FadeUp } from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Say Hi | Beachside Beans",
  description:
    "Reach out to Beachside Beans — Satellite Beach coffee roastery on the Space Coast.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-sand pt-16">
      <header className="grain border-b border-roast/10 py-12 text-center">
        <h1 className="font-display text-5xl text-roast sm:text-7xl md:text-[96px]">
          Say Hi 🤙
        </h1>
      </header>
      <section className="grain">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <FadeUp>
            <ContactForm />
          </FadeUp>
          <FadeUp>
            <div className="space-y-6 font-body text-roast">
              <p className="text-lg">📍 Satellite Beach, Florida</p>
              <p>
                📧{" "}
                <a
                  href={`mailto:${BRAND_EMAIL}`}
                  className="text-ocean underline underline-offset-4"
                >
                  {BRAND_EMAIL}
                </a>
              </p>
              <p>
                🌊{" "}
                <Link
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ocean underline underline-offset-4"
                >
                  @beachsidebeans on Instagram
                </Link>
              </p>
              <div className="flex gap-3 pt-2">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-ocean p-3 text-ocean hover:bg-ocean hover:text-chalk"
                  aria-label="Instagram"
                >
                  <Camera className="h-5 w-5" aria-hidden />
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-ocean p-3 text-ocean hover:bg-ocean hover:text-chalk"
                  aria-label="Facebook"
                >
                  <Share2 className="h-5 w-5" aria-hidden />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-ocean p-3 text-ocean hover:bg-ocean hover:text-chalk"
                  aria-label="LinkedIn"
                >
                  <Building2 className="h-5 w-5" aria-hidden />
                </a>
              </div>
              <p className="pt-4 font-hand text-xl leading-relaxed text-roast/90">
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
