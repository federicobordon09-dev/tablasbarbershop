"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";

/** Aplica reducedMotion="user" a toda la app: respeta prefers-reduced-motion. */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}