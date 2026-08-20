import { BUSINESS, STATS } from "../../lib/data";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "../ui/Stagger";
import { ArrowUpRightIcon, InstagramIcon } from "../ui/icons";
import { scaleIn } from "../../lib/animations";

export default function SocialProof() {
  return (
    <section id="respaldo" className="scroll-mt-16 border-t-2 border-ink bg-surface py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Respaldo"
          title="Ocho años de oficio."
          lead="Nada de promesas vacías: constancia que se ve en el feed y en la silla. Los números hablan el idioma de la calle."
        />

        <StaggerGroup className="mt-10 grid grid-cols-2 gap-px overflow-hidden border-2 border-ink bg-ink lg:grid-cols-4" stagger={0.08}>
          {STATS.map((stat) => (
            <StaggerItem key={stat.label} variants={scaleIn}>
              <div className="bg-paper p-6 sm:p-8">
                <dd className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  {stat.value}
                </dd>
                <dt className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60">
                  {stat.label}
                </dt>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1} className="mt-10">
          <div className="flex flex-col gap-6 border-brutal bg-paper p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
              Siempre queda <span className="text-blood">flama</span>.
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/70">
              Cada corte sale en la silla y se muestra en el feed. Mirá los
              resultados reales — fades, matices y barbas — antes de reservar.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href={BUSINESS.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              <InstagramIcon className="size-4" />
              Ver cortes en {BUSINESS.social.instagramHandle}
              <ArrowUpRightIcon className="size-4" />
            </Button>
            <Button
              href={BUSINESS.social.threads}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="lg"
            >
              Seguir en Threads
            </Button>
          </div>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}