"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { fetchServerStatuses } from "@/lib/fetchServerStatuses";
import { SERVERS } from "../servers/servers.data";
import styles from "./PricingView.module.css";
import {
  ALL_PLANS,
  CATEGORY_DESCRIPTIONS,
  CATEGORY_LABELS,
  PLAN_NOTES,
  type Plan,
  type PlanCategory,
} from "./pricing.data";

export function PricingView() {
  const [activeCount, setActiveCount] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<PlanCategory>("fivem");

  const trackedServers = useMemo(
    () => SERVERS.filter((server) => Boolean(server.serverId)),
    []
  );

  useEffect(() => {
    let mounted = true;

    async function loadActiveCount() {
      const statuses = await fetchServerStatuses(trackedServers);
      const onlineServers = Object.values(statuses).filter(
        (server) => server.status === "Online"
      ).length;

      if (mounted) setActiveCount(onlineServers);
    }

    loadActiveCount();

    return () => {
      mounted = false;
    };
  }, [trackedServers]);

  const currentPlans = ALL_PLANS[activeCategory];

  const cheapestPrice = useMemo(() => {
    const parsed = currentPlans
      .map((plan) => ({
        raw: plan.setupPrice,
        num: Number(plan.setupPrice.replace(/[^\d]/g, "")),
      }))
      .filter((item) => Number.isFinite(item.num) && item.num > 0)
      .sort((a, b) => a.num - b.num);

    return parsed[0]?.raw ?? "Custom";
  }, [currentPlans]);

  const heroMetrics = useMemo(() => {
    const totalPlans = Object.values(ALL_PLANS).reduce(
      (sum, plans) => sum + plans.length,
      0
    );

    return [
      {
        label: "Starting At",
        value: cheapestPrice,
      },
      {
        label: "Packages",
        value: String(currentPlans.length),
      },
      {
        label: "Active Live",
        value: activeCount === null ? "..." : String(activeCount),
      },
      {
        label: "Total Offers",
        value: String(totalPlans),
      },
    ];
  }, [activeCount, cheapestPrice, currentPlans.length]);

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.hero}>
          <div className={`${styles.reveal} ${styles.heroBadge}`} style={{ animationDelay: "50ms" }}>
            Premium pricing
          </div>

          <h1 className={`${styles.heroTitle} ${styles.reveal}`} style={{ animationDelay: "120ms" }}>
            Pricing Plans
          </h1>

          <p className={`${styles.heroLead} ${styles.reveal}`} style={{ animationDelay: "200ms" }}>
            Structured packages for stable operations, polished development, and
            performance-first delivery — built for serious FiveM communities.
          </p>

          <div className={`${styles.heroMetrics} ${styles.reveal}`} style={{ animationDelay: "280ms" }}>
            {heroMetrics.map((metric, index) => (
              <div
                key={metric.label}
                className={styles.metricCard}
                style={{ animationDelay: `${340 + index * 90}ms` } as CSSProperties}
              >
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
              </div>
            ))}
          </div>

          <div className={`${styles.switcherWrap} ${styles.reveal}`} style={{ animationDelay: "360ms" }}>
            <div className={styles.tabSwitcher} role="tablist" aria-label="Pricing categories">
              {(Object.keys(CATEGORY_LABELS) as PlanCategory[]).map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === category}
                  className={`${styles.tabBtn} ${
                    activeCategory === category ? styles.tabActive : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {CATEGORY_LABELS[category]}
                </button>
              ))}
            </div>
          </div>

          <div className={`${styles.categoryIntro} ${styles.reveal}`} style={{ animationDelay: "440ms" }}>
            <div className={styles.categoryPill}>
              <PulseIcon />
              <span>{CATEGORY_LABELS[activeCategory]}</span>
            </div>

            <p className={styles.categoryLead}>
              {CATEGORY_DESCRIPTIONS[activeCategory]}
            </p>
          </div>
        </header>

        <section className={styles.grid} aria-label="Pricing plans">
          {currentPlans.map((plan, index) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              index={index}
              category={activeCategory}
            />
          ))}
        </section>

        {activeCategory === "fivem" && (
          <section
            className={`${styles.notesSection} ${styles.reveal}`}
            aria-label="Important notes for plans"
            style={{ animationDelay: "780ms" }}
          >
            <div className={styles.notesCard}>
              <div className={styles.notesHeader}>
                <div className={styles.notesIconWrap} aria-hidden="true">
                  <StackIcon />
                </div>

                <div>
                  <h2 className={styles.notesTitle}>Important Notes</h2>
                  <p className={styles.notesSub}>
                    Please read these before opening a ticket or sending payment.
                  </p>
                </div>
              </div>

              <div className={styles.notesGrid}>
                <NotesGroup
                  title="General"
                  tag="Read first"
                  items={PLAN_NOTES.general}
                />
                <NotesGroup
                  title="Basic Setup Plan"
                  tag="Schedule"
                  items={PLAN_NOTES.basic}
                />
                <NotesGroup
                  title="Premium Setup Plan"
                  tag="Schedule"
                  items={PLAN_NOTES.premium}
                />
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function PlanCard({
  plan,
  index,
  category,
}: {
  plan: Plan;
  index: number;
  category: PlanCategory;
}) {
  const cardClass =
    plan.variant === "featured"
      ? `${styles.card} ${styles.cardFeatured}`
      : `${styles.card} ${styles.cardStandard}`;

  return (
    <article
      className={`${cardClass} ${styles.cardEnter}`}
      style={{ animationDelay: `${220 + index * 140}ms` }}
    >
      <div className={styles.cardGlow} aria-hidden="true" />

      <div className={styles.cardTop}>
        <div className={styles.cardMeta}>
          <span className={styles.planChip}>{CATEGORY_LABELS[category]}</span>
          {plan.popular && <span className={styles.badge}>Most Popular</span>}
        </div>

        <h2 className={styles.cardTitle}>{plan.name}</h2>
        <p className={styles.cardSubtitle}>{plan.subtitle}</p>
      </div>

      <div className={styles.priceBlock}>
        <div className={styles.setupLabel}>{plan.setupLabel}</div>
        <div className={styles.setupPrice}>{plan.setupPrice}</div>
        <div className={styles.monthlyPrice}>{plan.monthlyPrice}</div>
      </div>

      <ul className={styles.featureList}>
        {plan.features.map((feature, featureIndex) => (
          <li
            key={feature}
            className={`${styles.featureItem} ${styles.reveal}`}
            style={{
              animationDelay: `${320 + index * 120 + featureIndex * 60}ms`,
            }}
          >
            <span className={styles.featureIcon} aria-hidden="true">
              <CheckIcon />
            </span>
            <span className={styles.featureText}>{feature}</span>
          </li>
        ))}
      </ul>

      <div
        className={`${styles.note} ${
          plan.variant === "featured" ? styles.noteFeatured : styles.noteStandard
        } ${styles.reveal}`}
        style={{ animationDelay: `${520 + index * 140}ms` }}
      >
        {plan.note}
      </div>

      <div className={`${styles.ctaRow} ${styles.reveal}`} style={{ animationDelay: `${620 + index * 140}ms` }}>
        <Link
          href="/contact"
          className={
            plan.variant === "featured"
              ? `${styles.cta} ${styles.ctaFeatured}`
              : `${styles.cta} ${styles.ctaStandard}`
          }
        >
          Get started
          <span className={styles.arrow} aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

function NotesGroup({
  title,
  tag,
  items,
}: {
  title: string;
  tag: string;
  items: readonly string[];
}) {
  return (
    <div className={styles.notesGroup}>
      <div className={styles.notesGroupTitle}>
        <span>{title}</span>
        <span className={styles.notesTag}>{tag}</span>
      </div>

      <ul className={styles.notesList}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

function PulseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 12h4l2-4 4 9 2-5h6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StackIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4 4 8l8 4 8-4-8-4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 12l8 4 8-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 16l8 4 8-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}