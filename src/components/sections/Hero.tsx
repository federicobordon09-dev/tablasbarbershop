"use client";

import { motion } from "motion/react";
import { BUSINESS } from "../../lib/data";
import { fadeDown, fadeUpDelay } from "../../lib/animations";
import Button from "../ui/Button";
import Container from "../ui/Container";
import NinjaMark from "../ui/NinjaMark";
import PlaceholderImage from "../ui/PlaceholderImage";
import { StaggerGroup, StaggerItem } from "../ui/Stagger";

export default function Hero() {
  return (
    <section id="inicio" className="scroll-mt-16">
      <Container className="pt-10 pb-14 sm:pt-14 sm:pb-20">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeDown}
          className="flex items-center justify-between border-b-2 border-ink pb-3 font-mono text-[11px] uppercase tracking-[0.25em]"
        >
          <span>Est. {BUSINESS.est} — {BUSINESS.city}</span>
          <span className="hidden sm:inline">Edición {BUSINESS.edition}</span>
          <span className="text-blood">{BUSINESS.hashtag}</span>
        </motion.p>

        <div className="grid gap-10 pt-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <StaggerGroup stagger={0.09} delayChildren={0.12} trigger="mount">
              <StaggerItem>
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-ink/70">
                  <span aria-hidden="true" className="inline-block size-2.5 bg-blood" />
                  {BUSINESS.addressShort} · Barbería de oficio
                </p>
              </StaggerItem>

              <StaggerItem>
                <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                  Tu corte no falla.
                  <br />
                  Tu color no falla.
                  <br />
                  <span className="text-blood">Tu barbero no falla.</span>
                </h1>
              </StaggerItem>

              <StaggerItem>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
                  {BUSINESS.tagline}. Fades, color masculino y barba con ocho
                  años de cancha en el corazón de Mendoza. Reservá tu turno y
                  salí <strong className="font-semibold text-ink">flama</strong>.
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    href={BUSINESS.bookingUrl}
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    Reservar mi turno
                    <NinjaMark className="size-5 text-amber transition-transform duration-200 ease-out group-hover:-rotate-6 group-hover:translate-x-0.5" />
                  </Button>
                  <Button href="#servicios" variant="outline" size="lg">
                    Ver servicios
                  </Button>
                </div>
              </StaggerItem>

              <StaggerItem>
                <dl className="mt-10 grid max-w-md grid-cols-2 gap-x-8 gap-y-4 border-t-2 border-ink pt-5 font-mono text-[11px] uppercase tracking-[0.2em]">
                  <div>
                    <dt className="text-ink/50">Instagram</dt>
                    <dd className="mt-1 font-display text-2xl font-bold tracking-tight normal-case">
                      {BUSINESS.instagramFollowers}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-ink/50">Horario</dt>
                    <dd className="mt-1 font-display text-2xl font-bold tracking-tight normal-case">
                      Mar–Sáb
                    </dd>
                    <dd className="text-ink/60">10:00 – 20:00</dd>
                  </div>
                </dl>
              </StaggerItem>
            </StaggerGroup>
          </div>

          <div className="lg:col-span-5">
            <motion.div initial="hidden" animate="visible" variants={fadeUpDelay(0.45)}>
              <PlaceholderImage
                label="El local, Arístides 768"
                hint="Silla · espejo · skin fade en vivo"
                className="shadow-brutal"
              />
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40">
                Foto real del negocio — a confirmar con el cliente
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}