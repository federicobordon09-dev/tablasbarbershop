import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import StickyBar from "@/components/layout/StickyBar";
import MotionProvider from "@/components/MotionProvider";
import ScrollToTop from "@/components/ScrollToTop";
import { BUSINESS, SITE_URL } from "@/lib/data";
import { barbershopSchema } from "@/lib/schema";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const ibmPlex = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Entre Tablas Barbershop · Barbería en Mendoza",
    template: "%s · Entre Tablas Barbershop",
  },
  description:
    "Barbería de oficio en Mendoza: cortes, color masculino y barba con 8 años de trayectoria en Arístides 768. Reservá tu turno online y salí flama.",
  keywords: [
    "barbería Mendoza",
    "corte de pelo hombre Mendoza",
    "barbería Arístides 768",
    "color masculino Mendoza",
    "barbero Mendoza",
    "corte y barba Mendoza",
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: BUSINESS.name,
    title: "Entre Tablas Barbershop · Barbería en Mendoza",
    description:
      "Tu corte no falla. Tu color no falla. Tu barbero no falla. Barbería de oficio en Arístides 768, Mendoza.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entre Tablas Barbershop · Barbería en Mendoza",
    description: "Tu corte no falla. Tu color no falla. Tu barbero no falla.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${ibmPlex.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-amber focus:px-4 focus:py-2 focus:font-bold focus:outline-none"
        >
          Saltar al contenido
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(barbershopSchema()) }}
        />
        <MotionProvider>
          <Navbar />
          <main id="contenido">{children}</main>
          <Footer />
          <StickyBar />
        </MotionProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}