"use client";

import Link from "next/link";
import { IconChat } from "@/components/mxds/icons";
import styles from "./ContactView.module.css";

const DISCORD_INVITE = "https://discord.gg/8z5pDsqGS5";

const discordBenefits = [
  "Fastest way to reach M Developments",
  "Open tickets and keep project discussions organized",
  "Get support, purchase help, and progress updates in one place",
] as const;

const discordHighlights = [
  {
    title: "Urgent support",
    text: "Best option for urgent questions, active project communication, and post-purchase assistance.",
  },
  {
    title: "Project tracking",
    text: "Keep everything in one thread so requests, changes, and updates stay clear and easy to follow.",
  },
  {
    title: "Pre-sales questions",
    text: "Ask about pricing, packages, custom work, compatibility, and turnaround before ordering.",
  },
] as const;

export function ContactView() {
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.hero}>
          <div className={styles.heroBadge}>Discord-first support</div>

          <h1 className={styles.heroTitle}>Join the Discord for the Best Support Experience</h1>

          <p className={styles.heroLead}>
            All contact is now handled through Discord for faster replies,
            cleaner project communication, and a better support flow from first
            question to final delivery.
          </p>
        </section>

        <section className={styles.discordShowcase}>
          <div className={styles.visualPanel}>
            <div className={styles.visualGlow} aria-hidden="true" />

            <div className={styles.visualCard}>
              <div className={styles.iconWrap} aria-hidden="true">
                <IconChat />
              </div>

              <div className={styles.visualCopy}>
                <p className={styles.visualEyebrow}>Primary contact channel</p>
                <h2 className={styles.visualTitle}>M Developments Discord</h2>
                <p className={styles.visualText}>
                  Join the server to discuss commissions, get support, ask
                  purchase questions, or follow up on an existing project.
                </p>
              </div>

              <div className={styles.metricRow}>
                <div className={styles.metricCard}>
                  <span className={styles.metricValue}>#1</span>
                  <span className={styles.metricLabel}>Fastest reply option</span>
                </div>

                <div className={styles.metricCard}>
                  <span className={styles.metricValue}>24/7</span>
                  <span className={styles.metricLabel}>Open for messages</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contentPanel}>
            <p className={styles.sectionEyebrow}>Why Discord</p>
            <h2 className={styles.sectionTitle}>Everything important stays in one place</h2>

            <p className={styles.sectionText}>
              Discord makes it easier to handle support, custom development
              requests, revision notes, and order-related conversations without
              losing context. It is the most reliable way to get in touch.
            </p>

            <ul className={styles.benefitList}>
              {discordBenefits.map((item) => (
                <li key={item} className={styles.benefitItem}>
                  <span className={styles.benefitDot} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className={styles.actionRow}>
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noreferrer"
                className={styles.discordBtn}
                aria-label="Join M Developments Discord"
              >
                Join Discord
              </a>

              <p className={styles.actionNote}>Opens in a new tab</p>
            </div>

            <div className={styles.quickLinks}>
              <Link href="/pricing" className={styles.quickLink}>
                View Pricing
              </Link>
              <Link href="/profile" className={styles.quickLink}>
                View Profile
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.infoGrid}>
          {discordHighlights.map((item) => (
            <article key={item.title} className={styles.infoCard}>
              <p className={styles.infoTitle}>{item.title}</p>
              <p className={styles.infoText}>{item.text}</p>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}