import Link from "next/link";
import styles from "./pricing.module.css";

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
    name: "Basic Setup",
    subtitle: "Perfect for growing RP communities.",
    setupLabel: "Initial hiring fee",
    setupPrice: "₱5,000",
    monthlyPrice: "₱3,000 /month",
    features: ["Full Resources/Scripts Configuration", 
      "Server Configuration", 
      "Resources/Assets Installation",
      "Script Bug/Exploit Fixes",
      "Fully Managed Server",
      "Live Chat Support thru Discord"
    ],
    note: "Excludes major custom script creations",
    variant: "standard",
  },
  {
    name: "Premium Setup",
    subtitle: "Suitable for users who require comprehensive development.",
    setupLabel: "Initial hiring fee",
    setupPrice: "₱10,000",
    monthlyPrice: "₱5,000 /month",
    features: [
      "Unique scripts development",
      "Full Resources/Scripts Configuration",
      "Server Configuration",
      "Resources/Assets Installation",
      "Script Bug/Exploit Fixes",
      "Full Script Optimize",
      "Fully Managed Server (24/7 Support)",
      "Live Chat Support thru Discord (24/7 Support)"
    ],
    note: "Suitable for users who wants a 24/7 Dev Support.",
    popular: true,
    variant: "featured",
  },
];

export default function PricingPage() {
  return (
    <div className={`${styles.page} ${styles.pageEnter}`}>
      <header className={styles.header}>
        <h1 className={`${styles.title} ${styles.reveal}`} style={{ animationDelay: "60ms" }}>
          <span className={styles.titleAccent}>Pricing</span>{" "}
          <span className={styles.titleBase}>Plans</span>
        </h1>

        <p className={`${styles.lead} ${styles.reveal}`} style={{ animationDelay: "140ms" }}>
          Transparent packages designed for predictable delivery, stable operations, and performance-focused outcomes.
        </p>

        <div className={`${styles.pills} ${styles.reveal}`} style={{ animationDelay: "220ms" }}>
          <span className={styles.pill}>FiveM Development Plans</span>

          <span className={styles.pillWide}>
            <span className={styles.pillIcon} aria-hidden="true">
              <BriefcaseIcon />
            </span>
            <span className={styles.pillWideText}>
              <span className={styles.pillMuted}>Current Workload</span>{" "}
              <span className={styles.pillStrong}>2 Active Server</span>
            </span>
          </span>
        </div>
      </header>

      <section className={styles.grid} aria-label="Pricing plans">
        {PLANS.map((plan, idx) => (
          <PlanCard key={plan.name} plan={plan} index={idx} />
        ))}
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