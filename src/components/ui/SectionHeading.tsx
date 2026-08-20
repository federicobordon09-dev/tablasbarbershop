import type { ReactNode } from "react";
import { cn } from "../../lib/utils";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn(align === "center" && "text-center", className)}>
      <header className="border-b-2 border-ink pb-6">
        <p
          className={cn(
            "font-mono text-xs font-medium uppercase tracking-[0.25em] text-blood",
            align === "center" && "flex items-center justify-center gap-2",
          )}
        >
          <span aria-hidden="true" className="inline-block size-2.5 bg-blood" />
          {eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {lead ? (
          <p
            className={cn(
              "mt-4 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg",
              align === "center" && "mx-auto",
            )}
          >
            {lead}
          </p>
        ) : null}
      </header>
    </Reveal>
  );
}