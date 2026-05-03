"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { galleryPhotos } from "@/lib/data/galleryPhotos";

const heroImg = galleryPhotos[5];

export function Hero() {
  return (
    <section
      id="site-hero"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden"
    >
      <Image
        src={heroImg}
        alt="Beachside Beans roastery and coffee"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/50 to-roast/70" />
      {/* Fade hero photo into the sand section below */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-sand to-transparent" />
      <div className="grain-abs" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 pb-36 pt-32 text-center sm:pb-44 sm:pt-40">
        <motion.h1
          className="text-brand-wordmark font-display text-5xl uppercase leading-[0.92] tracking-[-0.02em] sm:text-7xl md:text-8xl lg:text-[110px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          BEACHSIDE BEANS
        </motion.h1>

        <motion.p
          className="text-brand-tagline font-body mt-4 text-[11px] text-chalk sm:mt-5 sm:text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          COFFEE ROASTERY
        </motion.p>

        <motion.div
          className="mx-auto my-8 h-px w-16 rounded-full bg-chalk/30"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
        />

        <motion.p
          className="font-hand text-xl leading-relaxed text-chalk/85 sm:text-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          Roasted fresh by Dan in Satellite Beach, FL — for surfers, skaters &amp; space nerds 🤙
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
        >
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-full bg-sunrise px-10 py-4 font-body text-sm uppercase tracking-wider text-chalk transition hover:bg-sunrise/90 active:scale-[0.98]"
          >
            Shop Fresh Roasts →
          </Link>
          <p className="font-body text-[11px] uppercase tracking-[0.22em] text-chalk/35">
            3,000+ lbs roasted · 13 small-batch roasts · est. 2024
          </p>
        </motion.div>
      </div>
    </section>
  );
}
