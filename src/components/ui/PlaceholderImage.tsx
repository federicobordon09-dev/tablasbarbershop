import { cn } from "../../lib/utils";

type PlaceholderImageProps = {
  label: string;
  hint?: string;
  className?: string;
};

/**
 * Panel placeholder claramente identificado, para reemplazar por fotografía real
 * del local cuando el negocio la provea. Nunca simula una foto que no existe.
 */
export default function PlaceholderImage({
  label,
  hint,
  className,
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={`${label} — foto del local próximamente`}
      className={cn(
        "flex aspect-[4/5] w-full flex-col items-center justify-center gap-4 border-2 border-ink bg-surface p-6 text-center",
        className,
      )}
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(10,10,10,0.06) 0 10px, transparent 10px 20px)",
      }}
    >
      <span className="inline-block size-2.5 bg-blood" aria-hidden="true" />
      <p className="font-display text-lg font-bold uppercase tracking-tight text-ink/80">
        {label}
      </p>
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50">
        [FOTO PRONTO]
      </p>
      {hint ? (
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40">
          {hint}
        </p>
      ) : null}
    </div>
  );
}