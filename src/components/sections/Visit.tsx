import { BUSINESS, HOURS } from "../../lib/data";
import Button from "../ui/Button";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "../ui/Stagger";
import { ClockIcon, MapPinIcon } from "../ui/icons";

export default function Visit() {
  return (
    <section id="visitanos" className="scroll-mt-16 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Dónde y cuándo"
          title={
            <>
              Arístides <span className="text-blood">768</span>, Mendoza.
            </>
          }
          lead="En el centro de la ciudad, con horarios que bancan la jornada laboral: abrimos de martes a sábado hasta las 20hs."
        />

        <StaggerGroup className="mt-10 grid gap-6 lg:grid-cols-2" stagger={0.12}>
          <StaggerItem className="h-full">
            <div className="flex h-full flex-col border-brutal bg-surface shadow-brutal-sm">
            <div className="flex items-center justify-between border-b-2 border-ink px-6 py-3">
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-blood">
                <MapPinIcon className="size-4" /> Ubicación
              </p>
              <span aria-hidden="true" className="inline-block size-2 bg-ink" />
            </div>

            <div className="flex grow flex-col px-6 py-6">
              <p className="font-display text-2xl font-bold uppercase tracking-tight">
                {BUSINESS.address}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Reservá online por {BUSINESS.bookingLabel} y llegá con tu turno
                asegurado, sin esperar en la silla.
              </p>

              <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
                <Button
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  fullWidth
                >
                  Cómo llegar
                </Button>
                <Button
                  href={BUSINESS.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  fullWidth
                >
                  Reservar por {BUSINESS.bookingLabel}
                </Button>
              </div>
            </div>
            </div>
          </StaggerItem>

          <StaggerItem className="h-full">
            <div className="flex h-full flex-col border-brutal bg-surface shadow-brutal-sm">
            <div className="flex items-center justify-between border-b-2 border-ink px-6 py-3">
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-blood">
                <ClockIcon className="size-4" /> Horarios
              </p>
              <span aria-hidden="true" className="inline-block size-2 bg-ink" />
            </div>

            <table className="w-full grow">
              <caption className="sr-only">Horarios de atención semanal</caption>
              <tbody>
                {HOURS.map((row, i) => (
                  <tr
                    key={row.day}
                    className={
                      i === 0
                        ? "border-t-2 border-ink"
                        : "border-t border-ink/20"
                    }
                  >
                    <th
                      scope="row"
                      className="px-6 py-3 text-left font-body text-sm font-medium"
                    >
                      {row.day}
                    </th>
                    <td
                      className={`px-6 py-3 text-right font-mono text-sm tracking-wide ${
                        row.hours === "Cerrado"
                          ? "text-blood line-through decoration-2"
                          : "text-ink"
                      }`}
                    >
                      {row.hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="border-t-2 border-ink px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
              Confirmado en la bio de Instagram — agosto 2026
            </p>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </Container>
    </section>
  );
}