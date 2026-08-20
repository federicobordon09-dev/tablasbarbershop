import { ImageResponse } from "next/og";
import { ogFonts } from "@/lib/og";

export const alt = "Entre Tablas Barbershop — Barbería en Mendoza";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function Ninja() {
  return (
    <svg viewBox="0 0 24 24" width="72" height="72" fill="none">
      <path fill="#D4A81E" d="M4 6.5h16V9H4z" />
      <path fill="#D4A81E" d="M4 6.5 1.2 4.6v2.4L4 9z" />
      <path fill="#D4A81E" d="M5 9h14l-.2 5.1c-.2 3.4-3.4 6.4-6.8 6.4s-6.6-3-6.8-6.4z" />
      <rect fill="#FAF7F2" x="7.6" y="10.6" width="2.6" height="3.1" rx="0.4" />
      <rect fill="#FAF7F2" x="13.8" y="10.6" width="2.6" height="3.1" rx="0.4" />
    </svg>
  );
}

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FAF7F2",
          color: "#0A0A0A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          fontFamily: "SpaceGrotesk",
          border: "12px solid #0A0A0A",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Ninja />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2, lineHeight: 1 }}
            >
              ENTRE TABLAS
            </span>
            <span
              style={{
                fontFamily: "JetBrainsMono",
                fontSize: 18,
                letterSpacing: 12,
                color: "#0A0A0A",
                opacity: 0.7,
              }}
            >
              BARBERSHOP
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1,
              fontFamily: "SpaceGrotesk",
            }}
          >
            TU CORTE NO FALLA.
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1,
              fontFamily: "SpaceGrotesk",
            }}
          >
            TU COLOR NO FALLA.
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1,
              fontFamily: "SpaceGrotesk",
              color: "#C53030",
            }}
          >
            TU BARBERO NO FALLA.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "JetBrainsMono",
            fontSize: 22,
            letterSpacing: 3,
            color: "#0A0A0A",
            borderTop: "4px solid #0A0A0A",
            paddingTop: 20,
          }}
        >
          <span>ARÍSTIDES 768 · MENDOZA</span>
          <span style={{ color: "#C53030" }}>#NOFALLA</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: ogFonts(),
    },
  );
}