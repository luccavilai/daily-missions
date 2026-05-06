"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { content, getContentByDate, type DayContent } from "@/lib/content";
import { getCalendarDateArgentina } from "@/lib/tz-argentina";
import styles from "./page.module.css";

const MESES = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const DIAS_SEMANA = ["L", "M", "X", "J", "V", "S", "D"];

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

export default function CalendarPage() {
  const [today, setToday] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [viewMonth, setViewMonth] = useState(() => {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = getCalendarDateArgentina();
    setToday(t);
    setSelected(t);
    setMounted(true);
  }, []);

  const availableDates = useMemo(() => new Set(content.map((c) => c.date)), []);

  const monthGrid = useMemo(() => {
    const { year, month } = viewMonth;
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    // Lunes = 0, Domingo = 6
    let startWeekday = (firstDay.getDay() + 6) % 7;
    const cells: (number | null)[] = [];
    for (let i = 0; i < startWeekday; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }, [viewMonth]);

  const goPrevMonth = () => {
    setViewMonth((v) => {
      if (v.month === 0) return { year: v.year - 1, month: 11 };
      return { year: v.year, month: v.month - 1 };
    });
  };

  const goNextMonth = () => {
    setViewMonth((v) => {
      if (v.month === 11) return { year: v.year + 1, month: 0 };
      return { year: v.year, month: v.month + 1 };
    });
  };

  const dayContent: DayContent | null = selected
    ? getContentByDate(selected)
    : null;

  if (!mounted) return <div className={styles.loading}></div>;

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.brand}>
            Daily
          </Link>
          <Link href="/" className={styles.navLink}>
            hoy
          </Link>
        </div>
      </header>

      <section className={styles.intro}>
        <p className={styles.introLabel}>Calendario</p>
        <h1 className={styles.introTitle}>los días</h1>
      </section>

      <div className={styles.monthNav}>
        <button onClick={goPrevMonth} className={styles.monthBtn} aria-label="Mes anterior">
          ‹
        </button>
        <h2 className={styles.monthTitle}>
          {MESES[viewMonth.month]} {viewMonth.year}
        </h2>
        <button onClick={goNextMonth} className={styles.monthBtn} aria-label="Mes siguiente">
          ›
        </button>
      </div>

      <div className={styles.weekdays}>
        {DIAS_SEMANA.map((d) => (
          <span key={d} className={styles.weekday}>
            {d}
          </span>
        ))}
      </div>

      <div className={styles.grid}>
        {monthGrid.map((day, i) => {
          if (day === null) return <div key={i} className={styles.cellEmpty}></div>;
          const dateStr = `${viewMonth.year}-${pad(viewMonth.month + 1)}-${pad(day)}`;
          const has = availableDates.has(dateStr);
          const isFuture = dateStr > today;
          const unlocked = has && !isFuture;
          const lockedFuture = has && isFuture;
          const isToday = dateStr === today;
          const isSelected = dateStr === selected;
          return (
            <button
              key={i}
              type="button"
              title={lockedFuture ? "Se desbloquea ese día" : undefined}
              className={`${styles.cell} ${unlocked ? styles.cellAvailable : ""} ${lockedFuture ? styles.cellLocked : ""} ${isToday ? styles.cellToday : ""} ${isSelected ? styles.cellSelected : ""}`}
              onClick={() => unlocked && setSelected(dateStr)}
              disabled={!unlocked}
            >
              {day}
              {unlocked && !isSelected && <span className={styles.dot}></span>}
              {lockedFuture && <span className={styles.cellLockGlyph} aria-hidden>🔒</span>}
            </button>
          );
        })}
      </div>

      <section className={styles.preview}>
        {dayContent ? (
          <DayPreview content={dayContent} />
        ) : (
          <p className={styles.previewEmpty}>
            Seleccioná un día ya desbloqueado (pasado u hoy) con contenido.
          </p>
        )}
      </section>
    </main>
  );
}

function DayPreview({ content }: { content: DayContent }) {
  const [y, m, d] = content.date.split("-").map(Number);
  const dateObj = new Date(y, m - 1, d);
  const dias = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];
  const formatted = `${dias[dateObj.getDay()]} ${d} de ${MESES[m - 1]}`;

  return (
    <article className={styles.dayCard}>
      <p className={styles.dayLabel}>{formatted}</p>

      <div className={styles.section}>
        <p className={styles.sectionLabel}>Would You Rather</p>
        <p className={styles.sectionText}>
          {content.wyr.a} <span className={styles.or}>o</span> {content.wyr.b}
        </p>
      </div>

      <div className={styles.section}>
        <p className={styles.sectionLabel}>Micro Challenge</p>
        <p className={styles.sectionText}>{content.challenge}</p>
      </div>

      <div className={styles.section}>
        <p className={styles.sectionLabel}>Weird Fact</p>
        <p className={styles.sectionText}>{content.fact.text}</p>
        <p className={styles.hookText}>{content.fact.hook}</p>
      </div>
    </article>
  );
}
