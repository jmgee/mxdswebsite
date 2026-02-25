"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./pricing.module.css";
import { fetchServerStatuses } from "@/lib/fetchServerStatuses"; 
import { SERVERS } from "../servers/page"; 

type Plan = {
  name: string;
  subtitle: string;
  setupLabel: string;
  setupPrice: string;
  monthlyPrice: string;
  features: string[];
  note: string;
  popular?: boolean;
  variant: "standard" | "featured";
};

const PLANS: Plan[] = [
  {
    name: "Basic Setup Plan",
    subtitle: "Perfect for growing RP communities.",
    setupLabel: "Initial hiring fee",
    setupPrice: "₱5,000",
    monthlyPrice: "₱3,000 /month",
    features: [
      "Full Resources/Scripts Configuration",
      "Server Configuration",
      "Resources/Assets Installation",
      "Minor Script Bug/Exploit Fixes",
      "Fully Managed Server",
      "Live Chat Support thru Discord",
      "Scheduled Development Support (Weekdays & Weekends Only)",
      "Weekday Availability: Mon & Wed: 6PM until 9PM | Tue & Fri: 8AM until 9PM | Thu: 4PM until 9PM",
      "Weekend Availability: Sat & Sun: 12PM until 12AM",
    ],
    note: "Excludes major custom script creations",
    variant: "standard",
  },
  {
    name: "Premium Setup Plan",
    subtitle: "Suitable for users who require comprehensive development.",
    setupLabel: "Initial hiring fee",
    setupPrice: "₱10,000",
    monthlyPrice: "₱5,000 /month",
    features: [
      "Unique scripts development",
      "Full Resources/Scripts Configuration",
      "Server Configuration",
      "Resources/Assets Installation",
      "Minor & Major Script Bug/Exploit Fixes",
      "Custom Script Creations Included",
      "Full Script Optimize",
      "Fully Managed Server (24/7 Support)",
      "Live Chat Support thru Discord (24/7 Support)",
      "Scheduled Development Support (Weekdays & Weekends Only)",
      "Weekday Availability: Mon & Wed: 6PM onwards | Tue & Fri: 7AM onwards | Thu: 4PM onwards",
      "Weekend Availability: Open Schedule (Available Throughout the Day)",
    ],
    note: "Best for servers that want 24/7 developer support.",
    popular: true,
    variant: "featured",
  },
];

const PLAN_NOTES = {
  general: [
    `Please review the Terms & Agreement in the “Store Terms” channel on our Discord server before purchasing.`,
  ],
  basic: [
    `A 50% down payment is required before work begins (via the available payment options).`,
    `This plan does not include a Server Pack or a Clothing Pack.`,
  ],
  premium: [
    `Full payment (100%) is required upon opening the ticket.`,
    `A Server Pack is included and will be tailored to your server’s needs.`,
    `A Clothing Pack is not included.`,
  ],
};

export default function PricingPage() {
  const [activeCount, setActiveCount] = useState<number | null>(null);

  useEffect(() => {
    async function loadActiveCount() {
      const statuses = await fetchServerStatuses(SERVERS);

      const onlineServers = Object.values(statuses).filter(
        (server) => server.status === "Online"
      ).length;

      setActiveCount(onlineServers);
    }

    loadActiveCount();
  }, []);

  return (
    <div className={`${styles.page} ${styles.pageEnter}`}>
      <header className={styles.header}>
        <h1
          className={`${styles.title} ${styles.reveal}`}
          style={{ animationDelay: "60ms" }}
        >
          <span className={styles.titleAccent}>Pricing</span>{" "}
          <span className={styles.titleBase}>Plans</span>
        </h1>

        <p
          className={`${styles.lead} ${styles.reveal}`}
          style={{ animationDelay: "140ms" }}
        >
          Transparent packages designed for predictable delivery, stable
          operations, and performance-focused outcomes.
        </p>

        <div
          className={`${styles.pills} ${styles.reveal}`}
          style={{ animationDelay: "220ms" }}
        >
          <span className={styles.pill}>FiveM Development Plans</span>

          <span className={styles.pillWide}>
            <span className={styles.pillIcon} aria-hidden="true">
              <BriefcaseIcon />
            </span>
            <span className={styles.pillWideText}>
              <span className={styles.pillMuted}>Current Workload</span>{" "}
              <span className={styles.pillStrong}>
                {activeCount === null
                  ? "Checking..."
                  : `${activeCount} Active Server${
                      activeCount !== 1 ? "s" : ""
                    }`}
              </span>
            </span>
          </span>
        </div>
      </header>

      <section className={styles.grid} aria-label="Pricing plans">
        {PLANS.map((plan, idx) => (
          <PlanCard key={plan.name} plan={plan} index={idx} />
        ))}
      </section>

      <section
        className={`${styles.notesWrap} ${styles.notesEnter}`}
        aria-label="Important notes for plans"
        style={{ animationDelay: "780ms" }}
      >
        <div className={styles.notesCard}>
          <div className={styles.notesHeader}>
            <h3 className={styles.notesTitle}>Important Notes</h3>
            <p className={styles.notesSub}>
              Please read these before opening a ticket or sending payment.
            </p>
          </div>

          <div className={styles.notesGrid}>
            <div className={styles.notesGroup}>
              <div className={styles.notesGroupTitle}>
                <span>General</span>
                <span className={styles.notesTag}>READ FIRST</span>
              </div>
              <ul className={styles.notesList}>
                {PLAN_NOTES.general.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>

            <div className={styles.notesGroup}>
              <div className={styles.notesGroupTitle}>
                <span>Basic Setup Plan</span>
                <span className={styles.notesTag}>50% DOWN</span>
              </div>
              <ul className={styles.notesList}>
                {PLAN_NOTES.basic.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>

            <div className={styles.notesGroup}>
              <div className={styles.notesGroupTitle}>
                <span>Premium Setup Plan</span>
                <span className={styles.notesTag}>100% UPON TICKET</span>
              </div>
              <ul className={styles.notesList}>
                {PLAN_NOTES.premium.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const cardClass =
    plan.variant === "featured"
      ? `${styles.card} ${styles.cardFeatured}`
      : `${styles.card} ${styles.cardStandard}`;

  return (
    <article
      className={`${cardClass} ${styles.cardEnter}`}
      style={{ animationDelay: `${260 + index * 140}ms` }}
    >
      <div className={styles.cardTop}>
        <div className={styles.cardHead}>
          <h2 className={styles.cardTitle}>{plan.name}</h2>
          {plan.popular && <span className={styles.badge}>POPULAR</span>}
        </div>
        <p className={styles.cardSubtitle}>{plan.subtitle}</p>
      </div>

      <div className={styles.pricing}>
        <div className={styles.setupLabel}>{plan.setupLabel}</div>
        <div className={styles.setupPrice}>{plan.setupPrice}</div>
        <div className={styles.monthlyPrice}>{plan.monthlyPrice}</div>
      </div>

      <ul className={styles.features}>
        {plan.features.map((f, i) => (
          <li
            key={f}
            className={`${styles.feature} ${styles.featureEnter}`}
            style={{ animationDelay: `${360 + index * 140 + i * 70}ms` }}
          >
            <span className={styles.checkBox} aria-hidden="true">
              <CheckIcon />
            </span>
            <span className={styles.featureText}>{f}</span>
          </li>
        ))}
      </ul>

      <div
        className={
          plan.variant === "featured"
            ? `${styles.note} ${styles.noteFeatured} ${styles.reveal}`
            : `${styles.note} ${styles.noteStandard} ${styles.reveal}`
        }
        style={{ animationDelay: `${520 + index * 160}ms` }}
      >
        {plan.note}
      </div>

      <div className={`${styles.ctaRow} ${styles.reveal}`} style={{ animationDelay: `${600 + index * 160}ms` }}>
        <Link
          href="/contact"
          className={
            plan.variant === "featured"
              ? `${styles.cta} ${styles.ctaFeatured}`
              : `${styles.cta} ${styles.ctaStandard}`
          }
        >
          Get started <span className={styles.arrow} aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 7L10.5 16.5L4 10"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 8h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}