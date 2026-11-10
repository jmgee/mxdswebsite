"use client";

import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site";
import styles from "./ContactView.module.css";

const EMAIL = SITE.email;

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
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  return (
    <div className="mxds-container">
      <section className={styles.contact}>
        <p className="mxds-status">
          <span className="mxds-statusDot" aria-hidden="true" />
          Available for inquiries
        </p>

        <h1 className={styles.title}>Let&apos;s work together.</h1>

        <p className={styles.description}>
          Have a project or FiveM inquiry? Send me an email and I&apos;ll get
          back to you as soon as possible.
        </p>

        <a href={`mailto:${EMAIL}`} className={styles.email}>
          {EMAIL}
        </a>

        <div className={styles.actions}>
          <a href={MAILTO_URL} className="mxds-btn mxds-btnPrimary">
            <MailIcon />
            Send email
          </a>

          <button
            type="button"
            className="mxds-btn mxds-btnGhost"
            onClick={copyEmail}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
            {copied ? "Copied" : "Copy email"}
          </button>

          <span className="mxds-srOnly" aria-live="polite">
            {copied ? "Email address copied to clipboard" : ""}
          </span>
        </div>

        <dl className={styles.details}>
          <div className={styles.detail}>
            <dt>Response time</dt>
            <dd>Usually within 24–48 hours</dd>
          </div>
          <div className={styles.detail}>
            <dt>Services</dt>
            <dd>FiveM servers, websites, Discord bots</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

function CopyIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

function CheckIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
