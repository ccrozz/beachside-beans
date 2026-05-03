"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { useCartStore } from "@/lib/store/cartStore";
import { BRAND_EMAIL } from "@/lib/constants";

const navLinks = [
  { href: "/shop", label: "Shop Coffee" },
  { href: "/merch", label: "Merch" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Say Hi" },
];

export function Navbar() {
  const toggleCart = useCartStore((s) => s.toggleCart);
  const itemCount = useCartStore((s) => s.itemCount());
  const [overHero, setOverHero] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prevCount = useRef(itemCount);
  const [badgePulse, setBadgePulse] = useState(false);

  useEffect(() => {
    let timerId: number | undefined;
    if (itemCount > prevCount.current && itemCount > 0) {
      setBadgePulse(true);
      timerId = window.setTimeout(() => setBadgePulse(false), 350);
    }
    prevCount.current = itemCount;
    return () => {
      if (timerId !== undefined) window.clearTimeout(timerId);
    };
  }, [itemCount]);

  const syncHero = useCallback(() => {
    const hero = document.getElementById("site-hero");
    if (!hero) {
      setOverHero(false);
      return;
    }
    const rect = hero.getBoundingClientRect();
    setOverHero(rect.bottom > 96);
  }, []);

  useEffect(() => {
    syncHero();
    window.addEventListener("scroll", syncHero, { passive: true });
    window.addEventListener("resize", syncHero);
    const obs = new IntersectionObserver(syncHero, { threshold: [0, 0.05] });
    const hero = document.getElementById("site-hero");
    if (hero) obs.observe(hero);
    return () => {
      window.removeEventListener("scroll", syncHero);
      window.removeEventListener("resize", syncHero);
      obs.disconnect();
    };
  }, [syncHero]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          overHero
            ? "border-b border-chalk/10 bg-roast/20 backdrop-blur-md"
            : "border-b border-roast/10 bg-sand",
        )}
      >
        <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src={overHero ? "/brand/logo-light.png" : "/brand/logo-dark.png"}
              alt="Beachside Beans"
              width={280}
              height={80}
              className="h-10 w-auto sm:h-12"
              priority
            />
          </Link>

          <div className="hidden items-center gap-8 font-body text-xs uppercase tracking-widest lg:flex md:text-[11px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors",
                  overHero
                    ? "text-chalk/90 hover:text-chalk"
                    : "text-roast/80 hover:text-ocean",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 lg:gap-5">
            <button
              type="button"
              onClick={() => toggleCart()}
              aria-label="Open cart"
              className="relative rounded-full p-2 text-sunrise transition-transform hover:scale-105 lg:scale-110"
            >
              <ShoppingBag className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2} />
              {itemCount > 0 && (
                <motion.span
                  key="badge"
                  animate={badgePulse ? { scale: [1, 1.35, 1] } : { scale: 1 }}
                  initial={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -right-0 -top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-sunrise px-1 font-body text-[10px] font-medium text-chalk"
                >
                  {itemCount}
                </motion.span>
              )}
            </button>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="rounded-full p-2 lg:hidden"
            >
              <Menu
                className={cn(
                  "h-7 w-7",
                  overHero ? "text-chalk" : "text-roast",
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile menu — z-[60] sits above the header (z-50) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-[60] flex flex-col bg-roast lg:hidden"
          >
            <div className="grain-abs" aria-hidden />

            {/* Internal top bar — mirrors header layout */}
            <div className="relative z-10 flex h-16 shrink-0 items-center justify-between border-b border-chalk/10 px-4 sm:px-6">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                <Image
                  src="/brand/logo-light.png"
                  alt="Beachside Beans"
                  width={220}
                  height={64}
                  className="h-10 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="rounded-full p-2 text-chalk/60 transition-colors hover:text-chalk"
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="relative z-10 flex flex-1 flex-col items-center justify-center gap-7">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 + i * 0.06, duration: 0.28, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-4xl text-chalk transition-colors hover:text-wave sm:text-5xl"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom strip */}
            <div className="relative z-10 border-t border-chalk/10 px-6 py-6 text-center">
              <p className="font-hand text-lg text-chalk/40">
                Satellite Beach, FL · Est. 2024
              </p>
              <a
                href={`mailto:${BRAND_EMAIL}`}
                className="mt-1 block font-body text-xs text-chalk/25 transition-colors hover:text-chalk/50"
              >
                {BRAND_EMAIL}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
