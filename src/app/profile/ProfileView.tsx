import type { CSSProperties } from "react";
import Link from "next/link";
import ProjectTile from "@/components/mxds/ProjectTile";
import { SITE } from "@/lib/site";
import { PROJECTS } from "../projects/projects.data";
import styles from "./ProfileView.module.css";

const stats = [
  { value: "15+", label: "FiveM projects" },
  { value: "3", label: "Development areas" },
  { value: "10+", label: "Custom systems" },
] as const;

/*
 * Skills grouped by the three development areas.
 */
const areas = [
  {
    title: "FiveM servers",
    skills: [
      "Lua / FiveM Development",
      "Server Management",
      "Optimization & Debugging",
    ],
  },
  {
    title: "Websites",
    skills: ["HTML / CSS", "JavaScript / TypeScript", "React / Next.js"],
  },
  {
    title: "Discord bots",
    skills: ["Discord Bot Development", "Database & API Integration"],
  },
] as const;

const RECENT_COUNT = 6;

const recentServers = PROJECTS.filter(
  (project) => project.category === "FiveM",
)
  .sort((a, b) => Number(b.year) - Number(a.year))
  .slice(0, RECENT_COUNT);

const enter = (order: number): CSSProperties => ({
  animationDelay: `${order * 70}ms`,
});

export function ProfileView() {
  return (
    <div className="mxds-container">
      <section className={styles.hero}>
        <div className={styles.intro}>
          <p className={`mxds-status ${styles.enter}`} style={enter(0)}>
            <span className="mxds-statusDot" aria-hidden="true" />
            Available for work
          </p>

          <h1 className={`${styles.title} ${styles.enter}`} style={enter(1)}>
            Hi, I&apos;m mxds
          </h1>

          <p className={`${styles.lead} ${styles.enter}`} style={enter(2)}>
            A 🇵🇭 Filipino developer studying Computer Science with a major in
            Software Engineering. I build and maintain FiveM servers, modern
            websites for businesses and portfolios, custom Discord bots, and
            software solutions. My focus is clean architecture, reliable
            integrations, performance, and maintainable systems built for
            long-term use.
          </p>

          <div className={`${styles.actions} ${styles.enter}`} style={enter(3)}>
            <Link href="/contact" className="mxds-btn mxds-btnPrimary">
              Contact me
            </Link>
            <Link href="/projects" className="mxds-btn mxds-btnGhost">
              View projects
            </Link>
          </div>
        </div>

        <div className={`${styles.portrait} ${styles.enter}`} style={enter(2)}>
          <img
            src={SITE.portraitUrl}
            alt="Portrait of mxds"
            className={styles.portraitImg}
            width={1024}
            height={1024}
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      <dl className={styles.stats} aria-label="At a glance">
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <dt className={styles.statLabel}>{stat.label}</dt>
            <dd className={styles.statValue}>{stat.value}</dd>
          </div>
        ))}
      </dl>

      <section className="mxds-section" aria-labelledby="skills-title">
        <div className="mxds-sectionLabel">
          <h2 id="skills-title" className="mxds-sectionTitle">
            What I build
          </h2>
        </div>

        <div className={styles.areas}>
          {areas.map((area) => (
            <div key={area.title} className={styles.area}>
              <h3 className={styles.areaTitle}>{area.title}</h3>
              <ul className={styles.skillList}>
                {area.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mxds-section" aria-labelledby="recent-title">
        <div className="mxds-sectionLabel">
          <h2 id="recent-title" className="mxds-sectionTitle">
            Recent servers
          </h2>
          <Link href="/projects" className={`mxds-link ${styles.sectionLink}`}>
            See all projects
          </Link>
        </div>

        <div className={styles.recentGrid}>
          {recentServers.map((project) => (
            <ProjectTile
              key={project.name}
              name={project.name}
              logoUrl={project.logoUrl}
              caption={project.year}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
