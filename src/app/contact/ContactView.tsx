"use client";

import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import { IconChat } from "@/components/mxds/icons";
import styles from "./ContactView.module.css";

type Status = "idle" | "sending" | "sent" | "error";

const DISCORD_INVITE = "https://discord.gg/8z5pDsqGS5";

const discordBenefits = [
  "Faster replies for active projects",
  "Open tickets and track progress",
  "Review terms before purchasing",
] as const;

export function ContactView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const canSubmit = useMemo(() => {
    const okName = name.trim().length >= 2;
    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    const okMessage = message.trim().length >= 10;
    return okName && okEmail && okMessage && status !== "sending";
  }, [name, email, message, status]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    if (!canSubmit) return;

    try {
      setStatus("sending");

      const res = await fetch("https://formspree.io/f/xbddkabb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Failed to send message.");
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");

      window.setTimeout(() => {
        setStatus("idle");
        setErrorMsg("");
      }, 3500);
    } catch (err: unknown) {
      const messageText =
        err instanceof Error ? err.message : "Failed to send message.";
      setStatus("error");
      setErrorMsg(messageText);
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.hero}>
          <div className={styles.heroBadge}>Open for commissions</div>

          <h1 className={styles.heroTitle}>Let’s Build Something Great</h1>

          <p className={styles.heroLead}>
            Reach out for custom FiveM development, server maintenance, or
            long-term support. Send a message below or join the Discord for the
            fastest response.
          </p>
        </section>

        <div className={styles.grid}>
          <section className={styles.formCard}>
            <div className={styles.cardTop}>
              <p className={styles.cardEyebrow}>Direct contact</p>
              <h2 className={styles.cardTitle}>Send a Message</h2>
              <p className={styles.cardText}>
                Tell me about your server, script idea, or project scope. I
                usually reply within 24 hours.
              </p>
            </div>

            {(status === "sent" || status === "error") && (
              <div
                className={`${styles.statusBanner} ${
                  status === "sent" ? styles.statusSuccess : styles.statusError
                }`}
                role="status"
              >
                {status === "sent"
                  ? "Message sent successfully. I’ll reply soon."
                  : errorMsg || "Failed to send message."}
              </div>
            )}

            <form className={styles.form} onSubmit={onSubmit}>
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="contact-name">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  className={styles.field}
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="contact-email">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  className={styles.field}
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  inputMode="email"
                />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="contact-message">
                  Project Details
                </label>
                <textarea
                  id="contact-message"
                  className={styles.textarea}
                  placeholder="Tell me about your project, budget, timeline, and what you need built..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                className={styles.sendBtn}
                type="submit"
                disabled={!canSubmit}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </section>

          <aside className={styles.discordCard}>
            <div className={styles.discordGlow} aria-hidden="true" />

            <div className={styles.discordContent}>
              <div className={styles.discordIconWrap} aria-hidden="true">
                <IconChat />
              </div>

              <p className={styles.cardEyebrow}>Fastest contact option</p>
              <h2 className={styles.cardTitle}>Join M Developments Discord</h2>

              <p className={styles.cardText}>
                Best for urgent questions, project discussions, support tickets,
                and purchase-related concerns.
              </p>

              <ul className={styles.benefitList}>
                {discordBenefits.map((item) => (
                  <li key={item} className={styles.benefitItem}>
                    <span className={styles.benefitDot} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.discordActions}>
                <a
                  href={DISCORD_INVITE}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.discordBtn}
                  aria-label="Join M Developments Discord"
                >
                  Join Discord
                </a>

                <p className={styles.discordNote}>Opens in a new tab</p>
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
          </aside>
        </div>
      </div>
    </div>
  );
}