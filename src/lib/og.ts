import { readFileSync } from "node:fs";
import path from "node:path";

/** Fuentes estáticas (no variables) para satori — TTF descargadas a src/fonts. */
export function ogFonts() {
  const read = (file: string) =>
    readFileSync(path.join(process.cwd(), "src", "fonts", file));
  return [
    {
      name: "SpaceGrotesk",
      data: read("SpaceGrotesk-Bold.ttf"),
      weight: 700 as const,
      style: "normal" as const,
    },
    {
      name: "IBMPlexSans",
      data: read("IBMPlexSans-Regular.ttf"),
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "IBMPlexSans",
      data: read("IBMPlexSans-Bold.ttf"),
      weight: 700 as const,
      style: "normal" as const,
    },
    {
      name: "JetBrainsMono",
      data: read("JetBrainsMono-Medium.ttf"),
      weight: 500 as const,
      style: "normal" as const,
    },
  ];
}