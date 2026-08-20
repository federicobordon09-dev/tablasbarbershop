"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { fadeUp, staggerContainer, VIEWPORT } from "../../lib/animations";
import { cn } from "../../lib/utils";

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  /** "mount": anima al cargar (hero); "inView": anima al entrar en viewport. */
  trigger?: "inView" | "mount";
};

export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0.05,
  trigger = "inView",
}: StaggerGroupProps) {
  const variants = staggerContainer(stagger, delayChildren);
  if (trigger === "mount") {
    return (
      <motion.div initial="hidden" animate="visible" variants={variants} className={cn(className)}>
        {children}
      </motion.div>
    );
  }
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
};

export function StaggerItem({ children, className, variants = fadeUp }: StaggerItemProps) {
  return (
    <motion.div className={cn(className)} variants={variants}>
      {children}
    </motion.div>
  );
}