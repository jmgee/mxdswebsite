import type { CSSProperties } from "react";
import {
  IconBrackets,
  IconServer,
  IconUsers,
} from "@/components/mxds/icons";
import styles from "./ProfileView.module.css";

const stats = [
  {
    icon: <IconServer />,
    value: "15+",
    label: "Servers Managed",
  },
  {
    icon: <IconUsers />,
    value: "10K+",
    label: "Community Players",
  },
  {
    icon: <IconBrackets />,
    value: "10+",
    label: "Custom Scripts",
  },
] as const;

const skills = [
  { name: "Lua Scripting", pct: 90, delayMs: 650 },
  { name: "ESX", pct: 95, delayMs: 720 },
  { name: "QBCore", pct: 80, delayMs: 790 },
  { name: "Qbox", pct: 82, delayMs: 860 },
  { name: "Custom Script", pct: 90, delayMs: 930 },
  { name: "Server Management", pct: 92, delayMs: 1000 },
  {
    name: "Optimization & Debugging",
    pct: 94,
    delayMs: 1070,
  },
  {
    name: "UI/UX Integration",
    pct: 85,
    delayMs: 1140,
  },
] as const;

export function ProfileView() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div
              className={`${styles.availability} ${styles.reveal}`}
              style={{ animationDelay: "80ms" }}
            >
              <span
                className={styles.availabilityDot}
                aria-hidden="true"
              />
              Available for work
            </div>

            <h1
              className={`${styles.heroTitle} ${styles.reveal}`}
              style={{ animationDelay: "150ms" }}
            >
              Hi, I&apos;m{" "}
              <span className={styles.heroName}>
                mxds
              </span>
            </h1>

            <p
              className={`${styles.heroLead} ${styles.reveal}`}
              style={{ animationDelay: "220ms" }}
            >
              A 🇵🇭 Filipino developer currently studying Computer Science with a major in Software Engineering. I develop FiveM servers, modern websites for businesses and portfolios, and custom Discord bots. I focus on writing clean, maintainable code and delivering solutions that are reliable, scalable, and built for long-term use.
            </p>
          </div>

          <div
            className={`${styles.heroVisual} ${styles.reveal}`}
            style={{ animationDelay: "180ms" }}
          >
            <div className={styles.portraitCard}>
              <div
                className={styles.portraitGlow}
                aria-hidden="true"
              />

              <img
                src="https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/mxds1024.png"
                alt="Mxds profile portrait"
                loading="eager"
                referrerPolicy="no-referrer"
                className={styles.portraitImg}
              />
            </div>
          </div>
        </section>

        <section
          className={`${styles.statsSection} ${styles.reveal}`}
          style={{ animationDelay: "360ms" }}
          aria-label="Development statistics"
        >
          {stats.map((stat) => (
            <article
              key={stat.label}
              className={styles.stat}
            >
              <div
                className={styles.statIcon}
                aria-hidden="true"
              >
                {stat.icon}
              </div>

              <div className={styles.statContent}>
                <strong className={styles.statValue}>
                  {stat.value}
                </strong>

                <span className={styles.statLabel}>
                  {stat.label}
                </span>
              </div>
            </article>
          ))}
        </section>

        <section className={styles.profileGrid}>
          <article
            className={`${styles.skillsCard} ${styles.reveal}`}
            style={{ animationDelay: "460ms" }}
          >
            <div className={styles.skillsHeader}>
              <div>
                <span className={styles.sectionEyebrow}>
                  Expertise
                </span>

                <h2 className={styles.sectionTitle}>
                  Technical skills
                </h2>
              </div>

              <span className={styles.skillsCount}>
                {skills.length} skills
              </span>
            </div>

            <div className={styles.skillGrid}>
              {skills.map((skill) => (
                <Skill
                  key={skill.name}
                  {...skill}
                />
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}

function Skill({
  name,
  pct,
  delayMs,
}: {
  name: string;
  pct: number;
  delayMs: number;
}) {
  const fill = Math.max(
    0,
    Math.min(1, pct / 100),
  );

  return (
    <div className={styles.skill}>
      <div className={styles.skillTop}>
        <span className={styles.skillName}>
          {name}
        </span>

        <span className={styles.skillPct}>
          {pct}%
        </span>
      </div>

      <div className={styles.skillTrack}>
        <div
          className={styles.skillFill}
          style={
            {
              animationDelay: `${delayMs}ms`,
              ["--skill-fill" as string]:
                String(fill),
            } as CSSProperties
          }
        />
      </div>
    </div>
  );
}