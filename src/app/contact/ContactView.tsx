"use client";

import { useState } from "react";
import styles from "./ContactView.module.css";

const EMAIL = "defnotmxds@gmail.com";

const EMAIL_SUBJECT = "Project inquiry — M Developments";

const EMAIL_BODY = `Hi M Developments,

I found you through your website and would like to discuss a project.

Project details:

`;

const MAILTO_URL = `mailto:${EMAIL}?subject=${encodeURIComponent(
  EMAIL_SUBJECT,
)}&body=${encodeURIComponent(EMAIL_BODY)}`;

export function ContactView() {
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
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

            <p className={styles.eyebrow}>
              Contact
            </p>

            <h1 className={styles.title}>
              Let&apos;s build something
              <span className={styles.titleAccent}>
                {" "}
                great.
              </span>
            </h1>

            <p className={styles.description}>
              Have a project, FiveM server, custom
              script, or development inquiry? Send me
              an email with the details and I&apos;ll
              get back to you as soon as I can.
            </p>

            <div className={styles.quickInfo}>
              <div className={styles.infoItem}>
                <MailIcon />

                <div>
                  <span className={styles.infoLabel}>
                    Email
                  </span>

                  <a
                    href={`mailto:${EMAIL}`}
                    className={styles.infoValue}
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <ClockIcon />

                <div>
                  <span className={styles.infoLabel}>
                    Response
                  </span>

                  <span className={styles.infoValue}>
                    Usually within 24–48 hours
                  </span>
                </div>
              </div>
            </div>
          </div>

          <aside className={styles.emailCard}>
            <div className={styles.iconWrap}>
              <MailIcon />
            </div>

            <div className={styles.cardContent}>
              <p className={styles.cardEyebrow}>
                Direct email
              </p>

              <h2 className={styles.cardTitle}>
                Send me a message
              </h2>

              <p className={styles.cardDescription}>
                The fastest way to reach me is by email.
                Include your project requirements,
                budget, timeline, and any references
                that may help.
              </p>
            </div>

            <div className={styles.emailBox}>
              <span className={styles.emailLabel}>
                Email address
              </span>

              <a
                href={`mailto:${EMAIL}`}
                className={styles.emailAddress}
              >
                {EMAIL}
              </a>
            </div>

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
                onClick={handleCopyEmail}
                aria-live="polite"
              >
                <CopyIcon />

                {copied
                  ? "Email copied"
                  : "Copy email"}
              </button>
            </div>

            <p className={styles.note}>
              Your email app will open with a project
              inquiry already prepared.
            </p>
          </aside>
        </section>
      </div>
    </main>
  );
}

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
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
      width="20"
      height="20"
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
      width="18"
      height="18"
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
      width="18"
      height="18"
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