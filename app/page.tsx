"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getContentByDate, type DayContent } from "@/lib/content";
import { getCalendarDateArgentina } from "@/lib/tz-argentina";
import styles from "./page.module.css";

const WYR_CHOICE_PREFIX = "wyr-choice-";

function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  const meses = [
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
  const dias = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];
  return `${dias[date.getDay()]}, ${date.getDate()} de ${meses[date.getMonth()]}`;
}

export default function HomePage() {
  const [today, setToday] = useState<string>("");
  const [content, setContent] = useState<DayContent | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = getCalendarDateArgentina();
    setToday(t);
    setContent(getContentByDate(t));
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={styles.loading}></div>;
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <span className={styles.brand}>Daily</span>
          <Link href="/calendar" className={styles.navLink}>
            calendario
          </Link>
        </div>
      </header>

      <section className={styles.dateSection}>
        <p className={styles.dateLabel}>Hoy</p>
        <h1 className={styles.date}>{formatDate(today)}</h1>
      </section>

      {content ? (
        <div className={styles.cards}>
          <CardWYR wyr={content.wyr} dateKey={today} />
          <CardChallenge challenge={content.challenge} />
          <CardFact fact={content.fact} />
        </div>
      ) : (
        <div className={styles.empty}>
          <p className={styles.emptyText}>
            Todavía no hay contenido para este día.
          </p>
          <p className={styles.emptyHint}>
            El contenido empieza el 5 de mayo de 2026.
          </p>
        </div>
      )}
    </main>
  );
}

function migrateOldWyrKeys(dateKey: string): "a" | "b" | null {
  const legacyL = localStorage.getItem(`wyr-${dateKey}-lucca`);
  const legacyF = localStorage.getItem(`wyr-${dateKey}-fran`);
  if (legacyL === "a" || legacyL === "b") return legacyL;
  if (legacyF === "a" || legacyF === "b") return legacyF;
  return null;
}

function CardWYR({
  wyr,
  dateKey,
}: {
  wyr: { a: string; b: string };
  dateKey: string;
}) {
  const [choice, setChoice] = useState<"a" | "b" | null>(null);

  useEffect(() => {
    const key = `${WYR_CHOICE_PREFIX}${dateKey}`;
    let v = localStorage.getItem(key);
    if (v !== "a" && v !== "b") {
      const mig = migrateOldWyrKeys(dateKey);
      if (mig) {
        localStorage.setItem(key, mig);
        v = mig;
      }
    }
    setChoice(v === "a" || v === "b" ? v : null);
  }, [dateKey]);

  const pick = (c: "a" | "b") => {
    const key = `${WYR_CHOICE_PREFIX}${dateKey}`;
    localStorage.setItem(key, c);
    setChoice(c);
  };

  return (
    <article className={styles.card}>
      <div className={styles.cardLabel}>
        <span className={styles.cardNumber}>I</span>
        <span className={styles.cardTitle}>Would You Rather</span>
      </div>

      <div className={styles.wyrOptions}>
        <button
          type="button"
          className={`${styles.wyrChoiceBtn} ${choice === "a" ? styles.wyrChoiceBtnActive : ""}`}
          onClick={() => pick("a")}
        >
          <p className={styles.wyrChoiceText}>{wyr.a}</p>
        </button>

        <div className={styles.wyrDivider}>
          <span className={styles.wyrOr}>o</span>
        </div>

        <button
          type="button"
          className={`${styles.wyrChoiceBtn} ${choice === "b" ? styles.wyrChoiceBtnActive : ""}`}
          onClick={() => pick("b")}
        >
          <p className={styles.wyrChoiceText}>{wyr.b}</p>
        </button>
      </div>
    </article>
  );
}

function CardChallenge({ challenge }: { challenge: string }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardLabel}>
        <span className={styles.cardNumber}>II</span>
        <span className={styles.cardTitle}>Micro Challenge</span>
      </div>

      <p className={styles.challengeText}>{challenge}</p>
    </article>
  );
}

function CardFact({
  fact,
}: {
  fact: { text: string; hook: string };
}) {
  return (
    <article className={styles.card}>
      <div className={styles.cardLabel}>
        <span className={styles.cardNumber}>III</span>
        <span className={styles.cardTitle}>Weird Fact</span>
      </div>

      <p className={styles.factText}>{fact.text}</p>

      <div className={styles.factHook}>
        <span className={styles.factHookLine}></span>
        <p className={styles.factHookText}>{fact.hook}</p>
      </div>
    </article>
  );
}
