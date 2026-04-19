"use client";

import { IconChat } from "@/components/mxds/icons";
import styles from "./ContactView.module.css";

const DISCORD_INVITE = "https://discord.gg/8z5pDsqGS5";

export function ContactView() {
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.card}>
          <div className={styles.iconWrap} aria-hidden="true">
            <IconChat />
          </div>

          <p className={styles.eyebrow}>Discord Contact</p>

          <h1 className={styles.title}>Join M Developments Discord</h1>

          <p className={styles.description}>
            For support, commissions, and purchase questions, please join the
            Discord server.
          </p>

          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noreferrer"
            className={styles.button}
            aria-label="Join M Developments Discord"
          >
            Join Discord
          </a>

          <p className={styles.note}>Opens in a new tab</p>
        </section>
      </div>
    </div>
  );
}