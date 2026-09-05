"use client";

import {
  useState,
  type CSSProperties,
} from "react";

import styles from "./PricingView.module.css";

import {
  ALL_PLANS,
  CATEGORY_LABELS,
  PRICING_CATEGORIES,
  type Plan,
  type PlanCategory,
} from "./pricing.data";

export function PricingView() {
  const [activeCategory, setActiveCategory] =
    useState<PlanCategory>("fivem");

  const currentPlans =
    ALL_PLANS[activeCategory];

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroAccent}>
              Pricing
            </span>{" "}
            Plans
          </h1>

          <div className={styles.switcherWrap}>
            <div
              className={styles.tabSwitcher}
              role="tablist"
              aria-label="Pricing categories"
            >
              {PRICING_CATEGORIES.map(
                (category) => {
                  const isActive =
                    activeCategory === category;

                  return (
                    <button
                      key={category}
                      id={`pricing-tab-${category}`}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="pricing-panel"
                      className={`${styles.tabBtn} ${
                        isActive
                          ? styles.tabActive
                          : ""
                      }`}
                      onClick={() =>
                        setActiveCategory(category)
                      }
                    >
                      {CATEGORY_LABELS[category]}
                    </button>
                  );
                },
              )}
            </div>
          </div>
        </section>

        <section
          id="pricing-panel"
          role="tabpanel"
          aria-labelledby={`pricing-tab-${activeCategory}`}
          className={styles.pricingContent}
        >
          {currentPlans.length > 0 ? (
            <div className={styles.grid}>
              {currentPlans.map(
                (plan, index) => (
                  <PlanCard
                    key={plan.name}
                    plan={plan}
                    index={index}
                  />
                ),
              )}
            </div>
          ) : (
            <EmptyPricing
              category={
                CATEGORY_LABELS[
                  activeCategory
                ]
              }
            />
          )}
        </section>
      </div>
    </main>
  );
}

function PlanCard({
  plan,
  index,
}: {
  plan: Plan;
  index: number;
}) {
  return (
    <article
      className={`${styles.card} ${
        plan.popular
          ? styles.cardFeatured
          : ""
      }`}
      style={
        {
          animationDelay: `${index * 100}ms`,
        } as CSSProperties
      }
    >
      {plan.popular && (
        <span className={styles.popularBadge}>
          Most Popular
        </span>
      )}

      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>
          {plan.name}
        </h2>

        <p className={styles.cardSubtitle}>
          {plan.subtitle}
        </p>
      </div>

      <div className={styles.priceBlock}>
        <span className={styles.setupLabel}>
          {plan.setupLabel}
        </span>

        <strong className={styles.setupPrice}>
          {plan.setupPrice}
        </strong>

        <span className={styles.monthlyPrice}>
          {plan.monthlyPrice}
        </span>
      </div>

      <ul className={styles.featureList}>
        {plan.features.map((feature) => (
          <li
            key={feature}
            className={styles.featureItem}
          >
            <span
              className={styles.checkIcon}
              aria-hidden="true"
            >
              <CheckIcon />
            </span>

            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {plan.note && (
        <p className={styles.planNote}>
          {plan.note}
        </p>
      )}
    </article>
  );
}

function EmptyPricing({
  category,
}: {
  category: string;
}) {
  return (
    <div className={styles.emptyState}>
      <span className={styles.emptyLabel}>
        {category}
      </span>

      <h2>
        Pricing coming soon.
      </h2>

      <p>
        Pricing plans for this service are
        currently being prepared.
      </p>
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