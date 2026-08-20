"use client";

import { useLayoutEffect } from "react";

/**
 * Al recargar la página, siempre lleva al visitante arriba de todo, anulando
 * la restauración de scroll que hace el navegador. Se ejecuta antes del
 * primer paint y se re-aplica en `load` (por si algo cambió la altura).
 */
export default function ScrollToTop() {
  useLayoutEffect(() => {
    const goToTop = () => window.scrollTo(0, 0);
    goToTop();
    window.addEventListener("load", goToTop);
    return () => window.removeEventListener("load", goToTop);
  }, []);

  return null;
}