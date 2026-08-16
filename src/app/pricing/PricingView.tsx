"use client";

import { useState } from "react";
import styles from "./PricingView.module.css";
import {
  ALL_PLANS,
  CATEGORY_LABELS,
  PLAN_NOTES,
  type Plan,
  type PlanCategory,
} from "./pricing.data";

const CATEGORIES = Object.keys(CATEGORY_LABELS) as PlanCategory[];

export function PricingView() {
  const [activeCategory, setActiveCategory] =
    useState<PlanCategory>("fivem");

  const currentPlans = ALL_PLANS[activeCategory];

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.hero}>
          <h1
            className={`${styles.heroTitle} ${styles.reveal}`}
            style={{ animationDelay: "60ms" }}
          >
            Pricing Plans
          </h1>

          <div
            className={`${styles.switcherWrap} ${styles.reveal}`}
            style={{ animationDelay: "140ms" }}
          >
            <div
              className={styles.tabSwitcher}
              role="tablist"
              aria-label="Pricing categories"
            >
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    id={`pricing-tab-${category}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="pricing-panel"
                    className={`${styles.tabBtn} ${
                      isActive ? styles.tabActive : ""
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {CATEGORY_LABELS[category]}
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        <section
          id="pricing-panel"
          className={styles.grid}
          role="tabpanel"
          aria-labelledby={`pricing-tab-${activeCategory}`}
        >
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
            style={{ animationDelay: "520ms" }}
          >
            <div className={styles.notesCard}>
              <div className={styles.notesHeader}>
                <div
                  className={styles.notesIconWrap}
                  aria-hidden="true"
                >
                  <StackIcon />
                </div>

                <div>
                  <h2 className={styles.notesTitle}>
                    Important Notes
                  </h2>

                  <p className={styles.notesSub}>
                    Please read these before opening a ticket or
                    sending payment.
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
      style={{
        animationDelay: `${180 + index * 120}ms`,
      }}
    >
      <div
        className={styles.cardGlow}
        aria-hidden="true"
      />

      <div className={styles.cardTop}>
        <div className={styles.cardMeta}>
          <span className={styles.planChip}>
            {CATEGORY_LABELS[category]}
          </span>

          {plan.popular && (
            <span className={styles.badge}>
              Most Popular
            </span>
          )}
        </div>

        <h2 className={styles.cardTitle}>
          {plan.name}
        </h2>

        <p className={styles.cardSubtitle}>
          {plan.subtitle}
        </p>
      </div>

      <div className={styles.priceBlock}>
        <div className={styles.setupLabel}>
          {plan.setupLabel}
        </div>

        <div className={styles.setupPrice}>
          {plan.setupPrice}
        </div>

        <div className={styles.monthlyPrice}>
          {plan.monthlyPrice}
        </div>
      </div>

      <ul className={styles.featureList}>
        {plan.features.map((feature, featureIndex) => (
          <li
            key={feature}
            className={`${styles.featureItem} ${styles.reveal}`}
            style={{
              animationDelay: `${
                260 + index * 100 + featureIndex * 50
              }ms`,
            }}
          >
            <span
              className={styles.featureIcon}
              aria-hidden="true"
            >
              <CheckIcon />
            </span>

            <span className={styles.featureText}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <div
        className={`${styles.note} ${
          plan.variant === "featured"
            ? styles.noteFeatured
            : styles.noteStandard
        } ${styles.reveal}`}
        style={{
          animationDelay: `${460 + index * 120}ms`,
        }}
      >
        {plan.note}
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
        <span className={styles.notesTag}>
          {tag}
        </span>
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
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
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

function StackIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
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