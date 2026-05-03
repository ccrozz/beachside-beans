"use client";

import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface FadeUpProps extends MotionProps {
  children: ReactNode;
  className?: string;
}

export function FadeUp({ children, className, ...props }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-40px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
