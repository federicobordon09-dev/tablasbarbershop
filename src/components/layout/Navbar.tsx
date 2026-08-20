"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { BUSINESS, NAV_LINKS } from "../../lib/data";
import { EASE } from "../../lib/animations";
import { cn } from "../../lib/utils";
import Button from "../ui/Button";
import Container from "../ui/Container";
import NinjaMark from "../ui/NinjaMark";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 8));

  return (
    <motion.header
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE }}
      className={cn(
        "sticky top-0 z-50 border-b-2 border-ink bg-paper/95 backdrop-blur",
        scrolled && "shadow-[0_6px_0_0_rgba(10,10,10,0.08)]",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#inicio"
          className="flex items-center gap-2.5"
          aria-label={`${BUSINESS.name} — inicio`}
        >
          <NinjaMark className="size-8 text-blood" />
          <span className="leading-none">
            <span className="block font-display text-lg font-bold uppercase tracking-tight">
              Entre Tablas
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-ink/60">
              Barbershop
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 font-body text-sm font-medium text-ink/80 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-blood after:transition-transform after:duration-200 hover:text-ink hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          href={BUSINESS.bookingUrl}
          size="md"
          className="text-xs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reservar mi turno
        </Button>
      </Container>
    </motion.header>
  );
}