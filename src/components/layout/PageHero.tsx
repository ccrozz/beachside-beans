import Image from "next/image";
import { FadeUp } from "@/components/ui/FadeUp";

interface PageHeroProps {
  label?: string;
  title: string;
  tagline?: string;
  image: string;
  imageAlt?: string;
  /** Which side the text anchors to on large screens. Default: center */
  align?: "center" | "left";
}

export function PageHero({
  label,
  title,
  tagline,
  image,
  imageAlt = "",
  align = "center",
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[380px] items-center justify-center overflow-hidden sm:min-h-[460px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* layered gradient: darker top (for nav legibility) + bottom fade to sand */}
      <div className="absolute inset-0 bg-gradient-to-b from-roast/75 via-roast/55 to-roast/75" />
      {/* grain texture */}
      <div className="grain-abs" aria-hidden />

      <div
        className={
          align === "left"
            ? "relative z-10 mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
            : "relative z-10 mx-auto w-full max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8"
        }
      >
        <FadeUp>
          {label && (
            <p className="font-hand text-xl text-chalk/70">{label}</p>
          )}
          <h1
            className={`text-brand-wordmark font-display text-5xl uppercase leading-[0.92] tracking-[-0.02em] sm:text-7xl md:text-[88px] md:leading-none ${label ? "mt-2" : ""}`}
          >
            {title}
          </h1>
          {tagline && (
            <p className="mt-5 font-body text-xs uppercase tracking-[0.2em] text-chalk/60">
              {tagline}
            </p>
          )}
        </FadeUp>
      </div>
    </section>
  );
}
