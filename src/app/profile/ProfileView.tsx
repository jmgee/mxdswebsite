import Link from "next/link";
import type { CSSProperties } from "react";
import { IconBrackets, IconServer, IconUsers } from "@/components/mxds/icons";
import styles from "./ProfileView.module.css";

const heroChips = ["Lua Scripting", "Custom Script", "Server Management"] as const;

const aboutStats = [
  {
    icon: <IconServer />,
    top: "15+",
    bottom: "Servers Successfully Managed",
  },
  {
    icon: <IconUsers />,
    top: "10K+",
    bottom: "Players Across Communities",
  },
  {
    icon: <IconBrackets />,
    top: "10+",
    bottom: "Custom Scripts Delivered",
  },
] as const;

const leftSkills = [
  { name: "Lua Scripting", pct: 90, delayMs: 1030 },
  { name: "ESX", pct: 95, delayMs: 1110 },
  { name: "QBCore", pct: 80, delayMs: 1190 },
  { name: "Qbox", pct: 82, delayMs: 1270 },
] as const;

const rightSkills = [
  { name: "Custom Script", pct: 90, delayMs: 1030 },
  { name: "Server Management", pct: 92, delayMs: 1110 },
  { name: "Optimization & Debugging", pct: 94, delayMs: 1190 },
  { name: "UI/UX Integration", pct: 85, delayMs: 1270 },
] as const;

export function ProfileView() {
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.hero}>
          <div className={styles.heroVisual}>
            <div className={styles.heroVisualStage}>
              <div
                className={`${styles.portraitWrap} ${styles.reveal}`}
                aria-hidden="true"
                style={{ animationDelay: "100ms" }}
              >
                <span className={styles.portraitAura} />
                <span className={styles.portraitOrbit} />

                <div className={styles.portraitFrame}>
                  <div className={styles.portraitInner}>
                    <img
                      src="https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/mxds1024.png"
                      alt="Mxds Kuzma profile portrait"
                      loading="eager"
                      referrerPolicy="no-referrer"
                      className={styles.portraitImg}
                    />
                  </div>
                </div>

                <div className={styles.portraitBadge}>Available</div>
              </div>
            </div>
          </div>

          <div className={styles.heroContent}>
            <h1 className={`${styles.title} ${styles.reveal}`} style={{ animationDelay: "180ms" }}>
              <span className={styles.titleAccent}>Mxds Kuzma</span>
            </h1>

            <div className={`${styles.subtitle} ${styles.reveal}`} style={{ animationDelay: "260ms" }}>
              <span className={styles.type}>FiveM Developer</span>
            </div>

            <p className={`${styles.heroLead} ${styles.reveal}`} style={{ animationDelay: "340ms" }}>
              Building polished FiveM experiences with clean architecture, reliable performance, and custom systems
              made to scale for roleplay communities.
            </p>

            <div className={styles.chips}>
              {heroChips.map((chip, index) => (
                <span
                  key={chip}
                  className={styles.chip}
                  style={{ animationDelay: `${430 + index * 70}ms` }}
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className={`${styles.heroActions} ${styles.reveal}`} style={{ animationDelay: "650ms" }}>
              <Link className={styles.primaryBtn} href="/servers">
                View My Servers
              </Link>
            </div>
          </div>
        </section>

        <div className={styles.grid}>
          <section className={`${styles.card} ${styles.gridFull}`} style={{ animationDelay: "720ms" }}>
            <h3 className={styles.cardTitle}>About Me</h3>

            <p className={styles.cardText}>
              A 🇵🇭 Filipino developer studying Computer Science with a major in Software Engineering, focused on
              developing and maintaining GTA V roleplay servers. I build high-performance systems for FiveM with
              clean code, scalable structure, and refined user experiences.
            </p>

            <div className={styles.stats}>
              {aboutStats.map((item) => (
                <div key={item.top} className={styles.stat}>
                  <div className={styles.statIcon} aria-hidden="true">
                    {item.icon}
                  </div>
                  <p className={styles.statTop}>{item.top}</p>
                  <p className={styles.statBottom}>{item.bottom}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={`${styles.card} ${styles.gridFull}`} style={{ animationDelay: "920ms" }}>
            <h3 className={styles.cardTitle}>Technical Skills</h3>

            <div className={styles.skillGrid}>
              <div className={styles.skillCol}>
                {leftSkills.map((skill) => (
                  <Skill key={skill.name} {...skill} />
                ))}
              </div>

              <div className={styles.skillCol}>
                {rightSkills.map((skill) => (
                  <Skill key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function Skill({ name, pct, delayMs }: { name: string; pct: number; delayMs: number }) {
  const fill = Math.max(0, Math.min(1, pct / 100));

  return (
    <div className={styles.skillRow}>
      <div className={styles.skillTop}>
        <div className={styles.skillName}>{name}</div>
        <div className={styles.skillPct}>{pct}%</div>
      </div>

      <div className={styles.barTrack}>
        <div
          className={styles.barFill}
          style={
            {
              animationDelay: `${delayMs}ms`,
              ["--mxds-fill" as string]: String(fill),
            } as CSSProperties
          }
        />
      </div>
    </div>
  );
}