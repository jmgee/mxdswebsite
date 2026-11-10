"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./PricingView.module.css";
import {
  ALL_PLANS,
  CATEGORY_LABELS,
  PRICING_CATEGORIES,
  type Plan,
  type PlanCategory,
} from "./pricing.data";

export function PricingView() {
  const [activeCategory, setActiveCategory] = useState<PlanCategory>("fivem");

  const plans = ALL_PLANS[activeCategory];

  return (
    <div className="mxds-container">
      <header className="mxds-pageHead">
        <h1 className="mxds-pageTitle">Pricing</h1>

        <p className="mxds-pageLead">
          Starting prices for each service, in Philippine pesos. Final quotes
          depend on the scope of your project.
        </p>

        <div
          className="mxds-pills"
          role="tablist"
          aria-label="Pricing categories"
        >
          {PRICING_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                id={`pricing-tab-${category}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="pricing-panel"
                tabIndex={isActive ? 0 : -1}
                className="mxds-pill"
                onClick={() => setActiveCategory(category)}
                onKeyDown={(event) => {
                  if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
                  event.preventDefault();
                  const step = event.key === "ArrowRight" ? 1 : -1;
                  const index = PRICING_CATEGORIES.indexOf(category);
                  const next =
                    PRICING_CATEGORIES[
                      (index + step + PRICING_CATEGORIES.length) %
                        PRICING_CATEGORIES.length
                    ];
                  setActiveCategory(next);
                  document.getElementById(`pricing-tab-${next}`)?.focus();
                }}
              >
                {CATEGORY_LABELS[category]}
              </button>
            );
          })}
        </div>
      </header>

      <section
        key={activeCategory}
        id="pricing-panel"
        role="tabpanel"
        aria-labelledby={`pricing-tab-${activeCategory}`}
        className={styles.panel}
      >
        {plans.length > 0 ? (
          plans.map((plan) => <PlanRow key={plan.name} plan={plan} />)
        ) : (
          <div className={styles.empty}>
            <h2 className={styles.planName}>Pricing coming soon.</h2>
            <p className={styles.subtitle}>
              Plans for {CATEGORY_LABELS[activeCategory]} are being prepared.
              Email me for a quote in the meantime.
            </p>
          </div>
        )}
      </section>

      <aside className={styles.cta}>
        <div>
          <h2 className={styles.ctaTitle}>Not sure which plan fits?</h2>
          <p className={styles.ctaText}>
            Tell me what you need and I&apos;ll put together a quote.
          </p>
        </div>

        <Link href="/contact" className="mxds-btn mxds-btnPrimary">
          Contact me
        </Link>
      </aside>
    </div>
  );
}

function PlanRow({ plan }: { plan: Plan }) {
  return (
    <article className={styles.plan}>
      <div className={styles.planHead}>
        <div className={styles.nameRow}>
          <h2 className={styles.planName}>{plan.name}</h2>
          {plan.popular && <span className={styles.badge}>Most popular</span>}
        </div>
        <p className={styles.subtitle}>{plan.subtitle}</p>
      </div>

      <div className={styles.price}>
        <span className={styles.priceLabel}>{plan.setupLabel}</span>
        <strong className={styles.priceValue}>{plan.setupPrice}</strong>
        <span className={styles.priceTerm}>{plan.monthlyPrice}</span>
      </div>

      <div className={styles.details}>
        <ul className={styles.features} aria-label={`${plan.name} includes`}>
          {plan.features.map((feature) => (
            <li key={feature} className={styles.feature}>
              <CheckIcon />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {plan.note && <p className={styles.note}>{plan.note}</p>}
      </div>
    </article>
  );
}

function CheckIcon() {
  return (
    <svg
      className={styles.check}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 7 10.5 16.5 4 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
