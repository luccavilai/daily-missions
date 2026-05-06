/**
 * Calendar date YYYY-MM-DD in America/Argentina/Buenos_Aires.
 * "Hoy" y desbloques de contenido siguen las 00:00 en ese huso para quien ejecuta la app en el navegador.
 */

const TZ_ARG = "America/Argentina/Buenos_Aires";

export function getCalendarDateArgentina(now: Date = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: TZ_ARG,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);

  const y = parts.find((p) => p.type === "year")?.value ?? "1970";
  const m = parts.find((p) => p.type === "month")?.value ?? "01";
  const d = parts.find((p) => p.type === "day")?.value ?? "01";
  return `${y}-${m}-${d}`;
}
