# Entre Tablas Barbershop — Landing

Landing de alta conversión para **Entre Tablas Barbershop** (Arístides 768, Mendoza), construida con **Next.js 16 (App Router)**, **React 19**, **TypeScript** y **Tailwind CSS v4**.

## Qué es

Una sola página, pensada para convertir visitas de Instagram y Google en **reservas de turno**:

- **Hero** con la promesa de marca ("Tu corte no falla") y CTA primario a TuTurno.
- **Marquee** de beneficios y valores del negocio (bucle infinito en CSS).
- **Servicios** con lo que incluye cada sección de la casa y CTA por servicio.
- **Social proof**: 10.5K seguidores en IG, 8 años de trayectoria, ubicación.
- **Visit / Horarios** con ubicación, mapa y tabla de horarios.
- **Final CTA** y barra fija inferior en mobile (conversión siempre visible).
- **Al recargar**, la página aterriza arriba de todo (anula la restauración de scroll del navegador) vía `ScrollToTop`.

## Design system

Dirección visual **Neo Brutalismo** fiel al dossier del negocio (sin depender de marcos grises):

- `paper #FAF7F2` / `ink #0A0A0A` / `blood #C53030` / `amber #D4A81E` / `surface #FFFFFF`
- Bordes `2px` de tinta, sin radio de esquina, sombras duras.
- Tipografías: **Space Grotesk** (display), **IBM Plex Sans** (cuerpo), **JetBrains Mono** (datos/sistema).
- Tokens vía `@theme` en `globals.css` + `@utility` para `border-brutal` y `shadow-brutal`.

## Sistema de animación (Motion)

Librería: [`motion`](https://motion.dev) (`motion/react`, v13). Sin GSAP.

- **Un solo easing** `[0.22, 1, 0.36, 1]` — afilado, sin rebotes, coherente con el carácter brutalista.
- **Solo `transform`/`opacity`** para animar (no toca layout ni paint).
- Revelados por scroll **una sola vez** (`once: true`, viewport `-64px`).
- **`MotionConfig reducedMotion="user"`** global: respeta `prefers-reduced-motion` del visitante.
- Microinteracciones en botones: `whileHover` + `whileTap` (scale 1.02 / 0.97).

### Piezas

| Archivo | Rol |
| --- | --- |
| `src/lib/animations.ts` | Tokens de motion: `EASE`, `DURATIONS`, `VIEWPORT`, variants `fadeUp/fadeDown/fadeIn/scaleIn`, factory `fadeUpDelay`, `staggerContainer`. |
| `src/components/MotionProvider.tsx` | Envuelve el layout con `reducedMotion="user"`. |
| `src/components/ui/Reveal.tsx` | Revelado individual por scroll (opacity + translateY). |
| `src/components/ui/Stagger.tsx` | `StaggerGroup` (con `trigger: "inView" \| "mount"`) + `StaggerItem`. |
| Hero / Navbar / StickyBar | Secuencias de entrada y estado de scroll (client). |
| Sections + Footer | Staggers y reveals al entrar en viewport. |

Marquee: bucle infinito con CSS puro (intencional, no usa motion para no duplicar trabajo de compositor); se desactiva si el sistema pide `prefers-reduced-motion`.

`ScrollToTop`: al recargar la página, `useLayoutEffect` lleva arriba de todo antes del primer paint (anulando el scroll restoration del navegador) y se re-aplica en `load`.

## Datos

- **`src/lib/data.ts`** centraliza negocio, servicios, horarios, stats, links y placeholders `null` + `TODO` para datos no verificables (whatsapp, teléfono, email) y fotos reales (`PlaceholderImage`).
- Precios de servicios **no publicados todavía** — se muestran con nota aclaratoria.
- `SITE_URL` provisorio `https://entretablasbarbershop.vercel.app` — **TODO**: dominio real antes de producción.
- SEO: metadatos, Open Graph, JSON-LD `BarberShop` y `sitemap.xml`/`robots.txt`.

## Comandos

```bash
pnpm install     # usar pnpm (npm falla por pnpm-workspace.yaml del monorepo)
pnpm dev         # desarrollo
pnpm build       # build de producción
pnpm start       # servir el build
pnpm exec tsc --noEmit                       # typecheck
pnpm exec eslint "src/**/*.{ts,tsx}"         # lint
```