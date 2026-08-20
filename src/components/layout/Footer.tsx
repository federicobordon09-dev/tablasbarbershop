import { BUSINESS, NAV_LINKS } from "../../lib/data";
import Container from "../ui/Container";
import NinjaMark from "../ui/NinjaMark";
import Reveal from "../ui/Reveal";
import { InstagramIcon, ThreadsIcon } from "../ui/icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-ink bg-ink text-paper">
      <Container className="py-12">
        <Reveal>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#inicio" className="flex items-center gap-2.5" aria-label="Entre Tablas Barbershop">
              <NinjaMark className="size-8 text-amber" />
              <span className="leading-none">
                <span className="block font-display text-base font-bold uppercase tracking-tight">
                  Entre Tablas
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-paper/60">
                  Barbershop
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/70">
              {BUSINESS.tagline}. Corte, color masculino y barba en el corazón de
              Mendoza desde {BUSINESS.est}.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">
              Navegación
            </p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-paper/80 transition-colors hover:text-amber"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">
              Dirección
            </p>
            <p className="mt-4 text-sm leading-relaxed text-paper/80">
              {BUSINESS.address}
            </p>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-bold text-paper underline-offset-4 transition-colors hover:text-amber hover:underline"
            >
              Cómo llegar →
            </a>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-paper/60">
              Mar–Sáb · 10:00–20:00
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">
              Seguinos
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={BUSINESS.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-paper/80 transition-colors hover:text-amber"
                >
                  <InstagramIcon className="size-4" />
                  {BUSINESS.social.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.social.threads}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-paper/80 transition-colors hover:text-amber"
                >
                  <ThreadsIcon className="size-4" />
                  Threads
                </a>
              </li>
            </ul>
            <a
              href={BUSINESS.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block bg-amber px-4 py-2.5 font-body text-xs font-bold uppercase tracking-wide text-ink shadow-brutal-sm transition-all duration-200 ease-out hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
            >
              Reservar mi turno
            </a>
          </div>
        </div>
        </Reveal>

        <Reveal delay={0.05} className="mt-12">
          <div className="flex flex-col gap-2 border-t border-paper/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">
              © {year} {BUSINESS.name} — Hecho en Mendoza
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">
              {BUSINESS.hashtag} · {BUSINESS.addressShort}
            </p>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}