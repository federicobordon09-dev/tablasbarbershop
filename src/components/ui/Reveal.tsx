"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { fadeUp, fadeUpDelay, VIEWPORT } from "../../lib/animations";
import { cn } from "../../lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Reveal por scroll (una sola vez). Solo opacity + translateY. */
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={delay > 0 ? fadeUpDelay(delay) : fadeUp}
    >
      {children}
    </motion.div>
  );
}