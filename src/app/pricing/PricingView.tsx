"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./PricingView.module.css";
import {
  ALL_PLANS,
  CATEGORY_DESCRIPTIONS,
  CATEGORY_LABELS,
  PLAN_NOTES,
  type Plan,
  type PlanCategory,
} from "./pricing.data";

const CATEGORIES = Object.keys(CATEGORY_LABELS) as PlanCategory[];

export function PricingView() {
  const [activeCategory, setActiveCategory] =
    useState<PlanCategory>("fivem");

  const plans = ALL_PLANS[activeCategory];

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>Pricing</span>

          <h1 className={styles.title}>Simple plans. Clear pricing.</h1>

          <p className={styles.description}>
            {CATEGORY_DESCRIPTIONS[activeCategory]}
          </p>

          <div
            className={styles.tabs}
            role="tablist"
            aria-label="Pricing categories"
          >
            {CATEGORIES.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  id={`pricing-tab-${category}`}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls="pricing-panel"
                  className={`${styles.tab} ${
                    active ? styles.tabActive : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {CATEGORY_LABELS[category]}
                </button>
              );
            })}
          </div>
        </header>

        <section
          id="pricing-panel"
          className={styles.grid}
          role="tabpanel"
          aria-labelledby={`pricing-tab-${activeCategory}`}
        >
          {plans.map((plan) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              category={activeCategory}
            />
          ))}
        </section>

        {activeCategory === "fivem" && (
          <section className={styles.notes} aria-labelledby="pricing-notes">
            <div className={styles.notesHeader}>
              <span className={styles.eyebrow}>Before purchasing</span>
              <h2 id="pricing-notes" className={styles.notesTitle}>
                Important notes
              </h2>
              <p className={styles.notesDescription}>
                Review the terms and availability before getting started.
              </p>
            </div>

            <div className={styles.notesGrid}>
              <NotesGroup title="General" items={PLAN_NOTES.general} />
              <NotesGroup
                title="Basic Setup Plan"
                items={PLAN_NOTES.basic}
              />
              <NotesGroup
                title="Premium Setup Plan"
                items={PLAN_NOTES.premium}
              />
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function PlanCard({
  plan,
  category,
}: {
  plan: Plan;
  category: PlanCategory;
}) {
  return (
    <article
      className={`${styles.card} ${
        plan.variant === "featured" ? styles.featured : ""
      }`}
    >
      <div className={styles.cardHeader}>
        <div className={styles.cardMeta}>
          <span className={styles.category}>
            {CATEGORY_LABELS[category]}
          </span>

          {plan.popular && (
            <span className={styles.popular}>Popular</span>
          )}
        </div>

        <h2 className={styles.cardTitle}>{plan.name}</h2>
        <p className={styles.cardSubtitle}>{plan.subtitle}</p>
      </div>

      <div className={styles.price}>
        <span className={styles.priceLabel}>{plan.setupLabel}</span>
        <strong className={styles.priceValue}>{plan.setupPrice}</strong>
        <span className={styles.recurring}>{plan.monthlyPrice}</span>
      </div>

      <ul className={styles.features}>
        {plan.features.map((feature) => (
          <li key={feature} className={styles.feature}>
            <span className={styles.check} aria-hidden="true">
              <CheckIcon />
            </span>

            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <p className={styles.note}>{plan.note}</p>

      <Link
        href="/contact"
        className={`${styles.cta} ${
          plan.variant === "featured"
            ? styles.ctaPrimary
            : styles.ctaSecondary
        }`}
      >
        Get started
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

function NotesGroup({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div className={styles.notesGroup}>
      <h3>{title}</h3>

      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 7 10 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}