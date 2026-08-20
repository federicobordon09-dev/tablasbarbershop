import { BUSINESS } from "../../lib/data";
import Button from "../ui/Button";
import Container from "../ui/Container";
import NinjaMark from "../ui/NinjaMark";
import { StaggerGroup, StaggerItem } from "../ui/Stagger";
import { InstagramIcon } from "../ui/icons";

export default function FinalCTA() {
  return (
    <section className="border-t-2 border-ink bg-ink py-16 text-paper sm:py-24">
      <Container className="text-center">
        <StaggerGroup stagger={0.1} delayChildren={0.05}>
          <StaggerItem>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">
              {BUSINESS.hashtag}
            </p>
          </StaggerItem>

          <StaggerItem>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
              Tu corte no falla.
              <br />
              Reservá tu turno y{" "}
              <span className="text-blood">no falles de estilo.</span>
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-paper/70 sm:text-base">
              En dos toques tenés tu silla reservada en {BUSINESS.addressShort}.
              Después solo queda salir flama.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={BUSINESS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="group"
              >
                Reservar mi turno
                <NinjaMark className="size-5 text-amber transition-transform duration-200 ease-out group-hover:-rotate-6 group-hover:translate-x-0.5" />
              </Button>
              <Button
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                variant="inverse"
                size="lg"
              >
                <InstagramIcon className="size-4" />
                {BUSINESS.social.instagramHandle}
              </Button>
            </div>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/40">
              Est. {BUSINESS.est} · {BUSINESS.addressShort}
            </p>
          </StaggerItem>
        </StaggerGroup>
      </Container>
    </section>
  );
}