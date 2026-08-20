import type { Variants } from "motion/react";

/**
 * Sistema de animación centralizado.
 * Un solo easing (afilado, sin rebotes — fiel al carácter brutalista de la marca),
 * duraciones cortas y animaciones basadas en transform/opacity.
 */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const DURATIONS = {
  fast: 0.25,
  base: 0.4,
  slow: 0.6,
} as const;

/** Reveals por scroll: una sola vez, con margen para no dispararse prematuramente. */
export const VIEWPORT = { once: true, margin: "-64px" } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.base, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATIONS.base, ease: EASE },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.base, ease: EASE },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATIONS.slow, ease: EASE },
  },
};

/** fadeUp con delay explícito para composiciones con espera controlada. */
export const fadeUpDelay = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.base, ease: EASE, delay },
  },
});

/** Contenedor de stagger: propaga el retardo a sus variantes hijas. */
export const staggerContainer = (
  staggerChildren = 0.08,
  delayChildren = 0.05,
): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});