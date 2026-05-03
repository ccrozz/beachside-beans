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
    <footer className="bg-roast text-chalk/70">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <Image
              src="/brand/logo-light.png"
              alt="Beachside Beans"
              width={220}
              height={64}
              className="h-10 w-auto"
            />
            <p className="max-w-xs font-body text-sm leading-relaxed">
              Roasted with love in Satellite Beach, Florida · Space Coast ·
              Est. 2024
            </p>
            <a
              href={`mailto:${BRAND_EMAIL}`}
              className="block font-body text-sm hover:text-chalk"
            >
              {BRAND_EMAIL}
            </a>
          </div>
          <div>
            <h3 className="mb-4 font-display text-lg text-chalk">Links</h3>
            <ul className="space-y-2 font-body text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-chalk">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-display text-lg text-chalk">Find Us</h3>
            <ul className="space-y-2 font-body text-sm">
              {social.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-chalk"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-chalk/10 pt-6 text-center font-body text-xs sm:text-left">
          <p>© 2024 Beachside Beans Coffee Roastery</p>
          <p className="mt-1">
            Every good day starts with a great cup ☕🤙
          </p>
        </div>
      </div>
    </footer>
  );
}
