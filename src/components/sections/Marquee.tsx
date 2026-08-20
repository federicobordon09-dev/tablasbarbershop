import { MARQUEE_ITEMS } from "../../lib/data";

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {MARQUEE_ITEMS.map((item) => (
        <span
          key={item}
          className="flex items-center gap-6 px-3 font-display text-sm font-bold uppercase tracking-[0.2em] sm:text-base"
        >
          {item}
          <span aria-hidden="true" className="inline-block size-2 rotate-45 bg-amber" />
        </span>
      ))}
    </div>
  );
}

/** Franja editorial tipo ticker: el "diario" de la marca corriendo sin detener el CTA. */
export default function Marquee() {
  return (
    <div
      className="overflow-hidden border-y-2 border-ink bg-ink py-3 text-paper"
      aria-label="Sello de la barbería: cortes, color, barba, nofalla, Mendoza"
    >
      <div className="marquee-track flex w-max">
        <Track />
        <Track hidden />
      </div>
    </div>
  );
}