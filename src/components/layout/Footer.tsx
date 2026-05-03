import Image from "next/image";
import Link from "next/link";
import {
  BRAND_EMAIL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/lib/constants";

const links = [
  { href: "/shop", label: "Shop Coffee" },
  { href: "/merch", label: "Merch" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Say Hi" },
];

const social = [
  { href: INSTAGRAM_URL, label: "Instagram" },
  { href: FACEBOOK_URL, label: "Facebook" },
  { href: LINKEDIN_URL, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="relative bg-roast text-chalk/60">
      {/* Organic wave top edge — roast-colored wave bleeds into the section above */}
      <div className="pointer-events-none -mt-10 overflow-hidden leading-none" aria-hidden>
        <svg
          viewBox="0 0 1200 48"
          preserveAspectRatio="none"
          className="block w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48 L0 28 Q150 6 320 26 T640 18 T960 30 T1200 16 L1200 48 Z"
            fill="#3B1F0A"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-12 pt-0 sm:px-6 lg:px-8">
        {/* Centered logo + tagline */}
        <div className="mb-12 flex flex-col items-center gap-3 border-b border-chalk/10 pb-10">
          <Image
            src="/brand/logo-light.png"
            alt="Beachside Beans"
            width={240}
            height={70}
            className="h-14 w-auto"
          />
          <p className="font-hand text-xl text-chalk/50">
            craft coffee · satellite beach, florida
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Brand column */}
          <div className="space-y-4">
            <h3 className="font-body text-[11px] uppercase tracking-widest text-chalk/30">
              About
            </h3>
            <p className="font-body text-sm leading-relaxed text-chalk/55">
              Small-batch roasts from Satellite Beach, FL. Ethically sourced,
              Space Coast proud. Est.&nbsp;2024.
            </p>
            <a
              href={`mailto:${BRAND_EMAIL}`}
              className="inline-block font-body text-sm text-wave/80 transition-colors hover:text-wave"
            >
              {BRAND_EMAIL}
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 font-body text-[11px] uppercase tracking-widest text-chalk/30">
              Explore
            </h3>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body text-sm text-chalk/55 transition-colors hover:text-chalk"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + note */}
          <div>
            <h3 className="mb-4 font-body text-[11px] uppercase tracking-widest text-chalk/30">
              Connect
            </h3>
            <ul className="space-y-3">
              {social.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-chalk/55 transition-colors hover:text-chalk"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-hand text-base leading-relaxed text-chalk/40">
              Find us at farmers markets &amp; street parties all over Florida!
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-chalk/10 pt-6 font-body text-[11px] text-chalk/25 sm:flex-row">
          <p>© {new Date().getFullYear()} Beachside Beans Coffee Roastery · All rights reserved</p>
          <p>Every good day starts with a great cup ☕</p>
        </div>
      </div>
    </footer>
  );
}
