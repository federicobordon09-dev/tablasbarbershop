import { BUSINESS, SERVICES } from "../../lib/data";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "../ui/Stagger";

export default function Services() {
  return (
    <section id="servicios" className="scroll-mt-16 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title={
            <>
              ¿Qué hacemos? <span className="text-blood">Todo</span>
            </>
          }
          lead="Cada sección de la casa, con lo que incluye y un CTA para reservar en dos toques. Sin misterios: se corta, se matiza y se diseña acá."
        />

        <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-2" stagger={0.09}>
          {SERVICES.map((service) => (
            <StaggerItem key={service.id} className="h-full">
              <article className="flex h-full flex-col border-brutal bg-surface shadow-brutal-sm transition-transform duration-200 ease-out hover:-translate-y-0.5">
                <div className="flex items-center justify-between border-b-2 border-ink px-6 py-3">
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-blood">
                    {service.eyebrow}
                  </p>
                  <span aria-hidden="true" className="inline-block size-2 bg-ink" />
                </div>

                <div className="flex grow flex-col px-6 py-6">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-blood">
                    {service.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink/70">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-ink/80"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1 inline-block size-1.5 shrink-0 bg-blood"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-7">
                    <Button
                      href={BUSINESS.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      className="w-full"
                    >
                      {service.cta}
                    </Button>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-8">
          <p className="flex items-start gap-2 border-brutal bg-amber/30 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-ink/70">
            <span aria-hidden="true" className="mt-0.5 inline-block size-1.5 shrink-0 bg-blood" />
            Precios de cada servicio: a confirmar con el negocio — no publicados todavía.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}