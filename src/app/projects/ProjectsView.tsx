"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ProjectTile from "@/components/mxds/ProjectTile";
import styles from "./ProjectsView.module.css";
import {
  PROJECTS,
  PROJECT_CATEGORIES,
  type ProjectCategory,
  type ProjectItem,
} from "./projects.data";

const FILTER_LABELS: Record<ProjectCategory, string> = {
  FiveM: "FiveM servers",
  Website: "Websites",
  "Discord Bot": "Discord bots",
};

const EMPTY_LABELS: Record<ProjectCategory, string> = {
  FiveM: "FiveM server",
  Website: "website",
  "Discord Bot": "Discord bot",
};

function countByCategory(category: ProjectCategory) {
  return PROJECTS.filter((project) => project.category === category).length;
}

export function ProjectsView() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("FiveM");

  const years = useMemo(() => {
    const grouped = new Map<string, ProjectItem[]>();

    for (const project of PROJECTS) {
      if (project.category !== activeCategory) continue;
      const list = grouped.get(project.year) ?? [];
      list.push(project);
      grouped.set(project.year, list);
    }

    return [...grouped.entries()].sort(
      ([a], [b]) => Number(b) - Number(a),
    );
  }, [activeCategory]);

  return (
    <div className="mxds-container">
      <header className="mxds-pageHead">
        <h1 className="mxds-pageTitle">Projects</h1>

        <p className="mxds-pageLead">
          A categorized showcase of my work across FiveM servers, websites, and
          Discord bot development.
        </p>

        <div
          className="mxds-pills"
          role="group"
          aria-label="Filter projects by category"
        >
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              className="mxds-pill"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {FILTER_LABELS[category]}
              <span className="mxds-pillCount">
                {countByCategory(category)}
              </span>
            </button>
          ))}
        </div>
      </header>

      <div key={activeCategory} className={styles.results}>
        {years.length > 0 ? (
          years.map(([year, projects]) => (
            <section
              key={year}
              className="mxds-section"
              aria-labelledby={`year-${year}`}
            >
              <div className={`mxds-sectionLabel ${styles.yearLabel}`}>
                <h2 id={`year-${year}`} className={styles.year}>
                  {year}
                </h2>
              </div>

              {activeCategory === "FiveM" && (
                <div className={styles.tileGrid}>
                  {projects.map((project) => (
                    <ProjectTile
                      key={project.name}
                      name={project.name}
                      logoUrl={project.logoUrl}
                    />
                  ))}
                </div>
              )}

              {activeCategory === "Website" && (
                <div className={styles.stack}>
                  {projects.map((project) => (
                    <WebsiteProject key={project.name} project={project} />
                  ))}
                </div>
              )}

              {activeCategory === "Discord Bot" && (
                <div className={styles.stack}>
                  {projects.map((project) => (
                    <DiscordProject key={project.name} project={project} />
                  ))}
                </div>
              )}
            </section>
          ))
        ) : (
          <section className={`mxds-section ${styles.empty}`}>
            <div className="mxds-sectionLabel">
              <h2 className="mxds-sectionTitle">
                No {EMPTY_LABELS[activeCategory]} projects listed yet.
              </h2>
            </div>

            <p className={styles.emptyText}>
              Need one built? See{" "}
              <Link href="/pricing" className="mxds-link">
                pricing
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="mxds-link">
                get in touch
              </Link>
              .
            </p>
          </section>
        )}
      </div>
    </div>
  );
}

function ProjectLogo({ project, className }: { project: ProjectItem; className: string }) {
  return (
    <div className={className}>
      {project.logoUrl ? (
        <img
          src={project.logoUrl}
          alt=""
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
      ) : (
        <span aria-hidden="true">{project.name.slice(0, 1).toUpperCase()}</span>
      )}
    </div>
  );
}

function WebsiteProject({ project }: { project: ProjectItem }) {
  return (
    <article className={styles.site}>
      {project.bannerUrl && (
        <div className={styles.siteMedia}>
          <img
            src={project.bannerUrl}
            alt={`${project.name} website preview`}
            className={styles.siteImg}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      <div className={styles.siteBody}>
        <div className={styles.itemHead}>
          <ProjectLogo project={project} className={styles.itemLogo} />
          <h3 className={styles.itemName}>{project.name}</h3>
        </div>

        {project.description && (
          <p className={styles.itemText}>{project.description}</p>
        )}

        {project.projectUrl && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`mxds-btn mxds-btnGhost ${styles.itemAction}`}
          >
            Visit website
            <ExternalIcon />
            <span className="mxds-srOnly">(opens in a new tab)</span>
          </a>
        )}
      </div>
    </article>
  );
}

function DiscordProject({ project }: { project: ProjectItem }) {
  const url = project.projectUrl ?? project.discordUrl;

  return (
    <article className={styles.bot}>
      <ProjectLogo project={project} className={styles.itemLogo} />

      <div className={styles.botBody}>
        <h3 className={styles.itemName}>{project.name}</h3>

        {project.description && (
          <p className={styles.itemText}>{project.description}</p>
        )}

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`mxds-btn mxds-btnGhost ${styles.itemAction}`}
          >
            View project
            <ExternalIcon />
            <span className="mxds-srOnly">(opens in a new tab)</span>
          </a>
        )}
      </div>
    </article>
  );
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
