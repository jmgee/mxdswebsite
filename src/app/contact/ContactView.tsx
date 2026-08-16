"use client";

import { useState } from "react";
import styles from "./ContactView.module.css";

const EMAIL = "defnotmxds@gmail.com";

const MAILTO_URL = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Project inquiry",
)}&body=${encodeURIComponent(
  `Hi,

I'd like to discuss a project.

Project details:
`,
)}`;

export function ContactView() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.contact}>
          <div className={styles.intro}>
            <div className={styles.status}>
              <span
                className={styles.statusDot}
                aria-hidden="true"
              />
              Available for inquiries
            </div>

            <h1 className={styles.title}>
              Let&apos;s work
              <span> together.</span>
            </h1>

            <p className={styles.description}>
              Have a project or FiveM inquiry?
              Send me an email and I&apos;ll get back
              to you as soon as possible.
            </p>

            <div className={styles.details}>
              <div className={styles.detail}>
                <MailIcon />

                <div>
                  <span className={styles.detailLabel}>
                    Email
                  </span>

                  <a
                    href={`mailto:${EMAIL}`}
                    className={styles.detailValue}
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className={styles.detail}>
                <ClockIcon />

                <div>
                  <span className={styles.detailLabel}>
                    Response
                  </span>

                  <span className={styles.detailValue}>
                    Usually within 24–48 hours
                  </span>
                </div>
              </div>
            </div>
          </div>

          <aside className={styles.card}>
            <div className={styles.icon}>
              <MailIcon />
            </div>

            <h2 className={styles.cardTitle}>
              Contact me
            </h2>

            <a
              href={`mailto:${EMAIL}`}
              className={styles.email}
            >
              {EMAIL}
            </a>

            <div className={styles.actions}>
              <a
                href={MAILTO_URL}
                className={styles.primaryButton}
              >
                <MailIcon />
                Send email
                <ArrowIcon />
              </a>

              <button
                type="button"
                className={styles.secondaryButton}
                onClick={copyEmail}
              >
                <CopyIcon />
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

function MailIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6h16v12H4V6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="m4.5 7 7.5 6 7.5-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M12 8v4.5l3 1.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="8"
        y="8"
        width="10"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M14 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}