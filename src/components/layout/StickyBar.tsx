"use client";

import { motion } from "motion/react";
import { BUSINESS } from "../../lib/data";
import { EASE } from "../../lib/animations";
import Button from "../ui/Button";
import { InstagramIcon } from "../ui/icons";

/**
 * Barra fija inferior SOLO en mobile: mantiene el CTA de conversión siempre visible.
 * Entrada sutil slide-up al cargar (una sola vez).
 */
export default function StickyBar() {
  return (
    <motion.div
      initial={{ y: "120%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: EASE, delay: 0.35 }}
      className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-ink bg-paper/95 p-3 backdrop-blur md:hidden"
    >
      <div className="flex gap-2.5">
        <Button
          href={BUSINESS.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          fullWidth
          className="flex-1"
        >
          Reservar mi turno
        </Button>
        <Button
          href={BUSINESS.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          aria-label="Abrir Instagram"
          className="px-4"
        >
          <InstagramIcon className="size-4" />
        </Button>
      </div>
    </motion.div>
  );
}