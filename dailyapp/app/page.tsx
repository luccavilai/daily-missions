"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getContentByDate, type DayContent } from "@/lib/content";
import styles from "./page.module.css";

function getTodayString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

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
    const t = getTodayString();
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
          <CardChallenge challenge={content.challenge} dateKey={today} />
          <CardFact fact={content.fact} dateKey={today} />
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

// ============ Cards ============

function CardWYR({
  wyr,
  dateKey,
}: {
  wyr: { a: string; b: string };
  dateKey: string;
}) {
  const [pickLucca, setPickLucca] = useState<"a" | "b" | null>(null);
  const [pickFran, setPickFran] = useState<"a" | "b" | null>(null);

  useEffect(() => {
    const l = localStorage.getItem(`wyr-${dateKey}-lucca`);
    const f = localStorage.getItem(`wyr-${dateKey}-fran`);
    if (l === "a" || l === "b") setPickLucca(l);
    if (f === "a" || f === "b") setPickFran(f);
  }, [dateKey]);

  const select = (who: "lucca" | "fran", choice: "a" | "b") => {
    if (who === "lucca") {
      const next = pickLucca === choice ? null : choice;
      setPickLucca(next);
      if (next) localStorage.setItem(`wyr-${dateKey}-lucca`, next);
      else localStorage.removeItem(`wyr-${dateKey}-lucca`);
    } else {
      const next = pickFran === choice ? null : choice;
      setPickFran(next);
      if (next) localStorage.setItem(`wyr-${dateKey}-fran`, next);
      else localStorage.removeItem(`wyr-${dateKey}-fran`);
    }
  };

  return (
    <article className={styles.card}>
      <div className={styles.cardLabel}>
        <span className={styles.cardNumber}>I</span>
        <span className={styles.cardTitle}>Would You Rather</span>
      </div>

      <div className={styles.wyrOptions}>
        <div className={styles.wyrOption}>
          <p className={styles.wyrText}>{wyr.a}</p>
          <div className={styles.wyrPickers}>
            <button
              className={`${styles.picker} ${pickLucca === "a" ? styles.pickerActive : ""}`}
              onClick={() => select("lucca", "a")}
            >
              Lucca
            </button>
            <button
              className={`${styles.picker} ${pickFran === "a" ? styles.pickerActive : ""}`}
              onClick={() => select("fran", "a")}
            >
              Fran
            </button>
          </div>
        </div>

        <div className={styles.wyrDivider}>
          <span className={styles.wyrOr}>o</span>
        </div>

        <div className={styles.wyrOption}>
          <p className={styles.wyrText}>{wyr.b}</p>
          <div className={styles.wyrPickers}>
            <button
              className={`${styles.picker} ${pickLucca === "b" ? styles.pickerActive : ""}`}
              onClick={() => select("lucca", "b")}
            >
              Lucca
            </button>
            <button
              className={`${styles.picker} ${pickFran === "b" ? styles.pickerActive : ""}`}
              onClick={() => select("fran", "b")}
            >
              Fran
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function CardChallenge({
  challenge,
  dateKey,
}: {
  challenge: string;
  dateKey: string;
}) {
  const [doneLucca, setDoneLucca] = useState(false);
  const [doneFran, setDoneFran] = useState(false);

  useEffect(() => {
    setDoneLucca(localStorage.getItem(`ch-${dateKey}-lucca`) === "1");
    setDoneFran(localStorage.getItem(`ch-${dateKey}-fran`) === "1");
  }, [dateKey]);

  const toggle = (who: "lucca" | "fran") => {
    if (who === "lucca") {
      const next = !doneLucca;
      setDoneLucca(next);
      if (next) localStorage.setItem(`ch-${dateKey}-lucca`, "1");
      else localStorage.removeItem(`ch-${dateKey}-lucca`);
    } else {
      const next = !doneFran;
      setDoneFran(next);
      if (next) localStorage.setItem(`ch-${dateKey}-fran`, "1");
      else localStorage.removeItem(`ch-${dateKey}-fran`);
    }
  };

  return (
    <article className={styles.card}>
      <div className={styles.cardLabel}>
        <span className={styles.cardNumber}>II</span>
        <span className={styles.cardTitle}>Micro Challenge</span>
      </div>

      <p className={styles.challengeText}>{challenge}</p>

      <div className={styles.checkRow}>
        <button
          className={`${styles.check} ${doneLucca ? styles.checkActive : ""}`}
          onClick={() => toggle("lucca")}
        >
          <span className={styles.checkBox}>{doneLucca ? "×" : ""}</span>
          <span className={styles.checkLabel}>Lucca</span>
        </button>
        <button
          className={`${styles.check} ${doneFran ? styles.checkActive : ""}`}
          onClick={() => toggle("fran")}
        >
          <span className={styles.checkBox}>{doneFran ? "×" : ""}</span>
          <span className={styles.checkLabel}>Fran</span>
        </button>
      </div>
    </article>
  );
}

function CardFact({
  fact,
  dateKey,
}: {
  fact: { text: string; hook: string };
  dateKey: string;
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
