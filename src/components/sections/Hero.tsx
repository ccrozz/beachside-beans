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
      <div className="grain-abs" aria-hidden />
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 pb-36 pt-32 text-center sm:pb-44 sm:pt-40">
        {/* <motion.span
          className="mb-4 text-4xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          aria-hidden
        >
          🌊
        </motion.span> */}
        <motion.h1
          className="font-display text-5xl leading-[0.95] text-chalk sm:text-7xl md:text-8xl lg:text-[110px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          BEACHSIDE BEANS
        </motion.h1>
        <motion.p
          className="mt-2 font-display text-3xl italic text-chalk/80 sm:text-5xl md:text-[56px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          COFFEE ROASTERY
        </motion.p>
        <motion.div
          className="mx-auto my-8 h-1 w-16 rounded-full bg-sunrise sm:w-[60px]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
        />
        <motion.div
          className="space-y-1 font-hand text-xl text-chalk/90 sm:text-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          <p>Roasted fresh by Dan</p>
          <p>in Satellite Beach 🚀</p>
          <p>for surfers, skaters,</p>
          <p>and space nerds. 🤙</p>
        </motion.div>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
        >
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-full bg-sunrise px-10 py-4 font-body text-lg uppercase tracking-wider text-chalk transition hover:opacity-95"
          >
            ☕ Order Fresh Roasts →
          </Link>
        </motion.div>
      </div>

      {/* <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-24 overflow-hidden sm:h-32">
        <svg
          className="absolute bottom-0 block w-[200%] text-sand wave-layer-1"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
        >
          <path
            className="fill-current"
            d="M0 40 Q150 70 300 45 T600 42 T900 52 T1200 35 V80 H0 Z"
          />
        </svg>
        <svg
          className="absolute bottom-0 block w-[200%] text-foam wave-layer-2 opacity-90"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
        >
          <path
            className="fill-current"
            d="M0 52 Q175 28 340 54 T690 42 T970 62 T1200 48 V80 H0 Z"
          />
        </svg>
        <svg
          className="absolute bottom-0 block w-[200%] text-wave wave-layer-3 opacity-60"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
        >
          <path
            className="fill-current"
            d="M0 60 Q200 32 430 54 T790 42 T1180 38 L1200 35 V80 H0 Z"
          />
        </svg>
      </div> */}
    </section>
  );
}
