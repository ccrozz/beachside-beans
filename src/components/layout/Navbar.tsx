"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { useCartStore } from "@/lib/store/cartStore";

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
          <Link href="/" className="relative z-[60] flex shrink-0 items-center">
            <Image
              src={
                overHero ? "/brand/logo-light.png" : "/brand/logo-dark.png"
              }
              alt="Beachside Beans"
              width={280}
              height={80}
              className={cn(
                "h-10 w-auto sm:h-12",
              )}
              priority
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex font-body text-xs uppercase tracking-widest md:text-[11px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors",
                  overHero ? "text-chalk/90 hover:text-chalk" : "text-roast/80 hover:text-ocean",
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
              <motion.span
                animate={
                  badgePulse
                    ? { scale: [1, 1.3, 1] }
                    : { scale: 1 }
                }
                transition={{ duration: 0.3 }}
                className="absolute -right-0 -top-0 flex h-6 min-w-6 items-center justify-center rounded-full bg-sunrise px-1 font-body text-[11px] font-medium text-chalk"
              >
                {itemCount}
              </motion.span>
            </button>

            <button
              type="button"
              className="relative z-[60] rounded-full p-2 lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? (
                <X className="h-7 w-7 text-chalk" />
              ) : (
                <Menu
                  className={cn(
                    "h-7 w-7",
                    overHero ? "text-chalk" : "text-roast",
                  )}
                />
              )}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] bg-ocean lg:hidden"
          >
            <div className="flex flex-col items-center justify-center gap-10 pt-20 font-display text-chalk">
              <Image
                src="/brand/logo-light.png"
                alt=""
                aria-hidden
                width={260}
                height={72}
                className="h-14 w-auto opacity-95"
              />
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl underline-offset-4 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
