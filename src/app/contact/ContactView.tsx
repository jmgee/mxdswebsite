"use client";

import styles from "./ContactView.module.css";

const DISCORD_INVITE = "https://discord.gg/8z5pDsqGS5";
const CONTACT_ICON = "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/mxds1024.png";

export function ContactView() {
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.card}>
          <div className={styles.iconWrap} aria-hidden="true">
            <img
              src={CONTACT_ICON}
              alt=""
              className={styles.iconImage}
              loading="eager"
              decoding="async"
            />
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