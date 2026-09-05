"use client";

import {
  useMemo,
  useState,
  type CSSProperties,
} from "react";

import styles from "./ProjectsView.module.css";

import {
  PROJECTS,
  PROJECT_CATEGORIES,
  type ProjectCategory,
  type ProjectItem,
} from "./projects.data";

const selectedLabels: Record<ProjectCategory, string> = {
  FiveM: "FiveM Servers",
  Website: "Web Projects",
  "Discord Bot": "Discord Bots",
};

export function ProjectsView() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("FiveM");

  /*
   * Projects currently displayed.
   */
  const filteredProjects = useMemo(
    () =>
      PROJECTS.filter(
        (project) =>
          project.category === activeCategory,
      ),
    [activeCategory],
  );

  /*
   * Group selected projects by year.
   */
  const groupedByYear = useMemo(() => {
    return filteredProjects.reduce<
      Record<string, ProjectItem[]>
    >((acc, project) => {
      if (!acc[project.year]) {
        acc[project.year] = [];
      }

      acc[project.year].push(project);

      return acc;
    }, {});
  }, [filteredProjects]);

  /*
   * Newest year first.
   */
  const sortedYears = useMemo(
    () =>
      Object.keys(groupedByYear).sort(
        (a, b) => Number(b) - Number(a),
      ),
    [groupedByYear],
  );

  /*
   * Hero statistics.
   */
  const heroStats = [
    {
      label: "Categories",
      value: String(PROJECT_CATEGORIES.length),
    },

    {
      label: "Projects",
      value: String(PROJECTS.length),
    },

    {
      label: "Selected",
      value: selectedLabels[activeCategory],
    },

    {
      label: "In View",
      value: String(filteredProjects.length),
    },
  ];

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        {/* ===================================================
            HERO
            =================================================== */}

        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            My{" "}
            <span className={styles.heroAccent}>
              Projects
            </span>
          </h1>

          <p className={styles.heroLead}>
            A categorized showcase of my work across
            FiveM servers, websites, and Discord bot
            development.
          </p>

          {/* HERO STATS */}
          <div className={styles.heroStats}>
            {heroStats.map((stat, index) => (
              <article
                key={stat.label}
                className={styles.heroStat}
                style={
                  {
                    animationDelay: `${
                      120 + index * 80
                    }ms`,
                  } as CSSProperties
                }
              >
                <span
                  className={styles.heroStatLabel}
                >
                  {stat.label}
                </span>

                <strong
                  className={styles.heroStatValue}
                >
                  {stat.value}
                </strong>
              </article>
            ))}
          </div>

          {/* CATEGORY FILTERS */}
          <div
            className={styles.filters}
            aria-label="Project categories"
          >
            {PROJECT_CATEGORIES.map(
              (category) => {
                const isActive =
                  activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    className={`${
                      styles.filterBtn
                    } ${
                      isActive
                        ? styles.filterBtnActive
                        : ""
                    }`}
                    onClick={() =>
                      setActiveCategory(category)
                    }
                    aria-pressed={isActive}
                  >
                    {category}
                  </button>
                );
              },
            )}
          </div>
        </section>

        {/* ===================================================
            PROJECTS
            =================================================== */}

        {sortedYears.length > 0 ? (
          <div className={styles.timeline}>
            {sortedYears.map(
              (year, yearIndex) => (
                <section
                  key={`${activeCategory}-${year}`}
                  className={
                    styles.yearSection
                  }
                  style={
                    {
                      animationDelay: `${
                        yearIndex * 100
                      }ms`,
                    } as CSSProperties
                  }
                >
                  {/* YEAR HEADER */}
                  <div
                    className={styles.yearHeader}
                  >
                    <div
                      className={
                        styles.yearPillWrap
                      }
                    >
                      <span
                        className={
                          styles.yearPill
                        }
                      >
                        {year}
                      </span>
                    </div>

                    <div
                      className={styles.yearRule}
                    />
                  </div>

                  {/* =========================================
                      FIVEM
                      ========================================= */}

                  {activeCategory === "FiveM" && (
                    <div
                      className={
                        styles.fivemGrid
                      }
                    >
                      {groupedByYear[
                        year
                      ].map(
                        (
                          project,
                          projectIndex,
                        ) => (
                          <FiveMProjectCard
                            key={`${year}-${project.name}`}
                            project={
                              project
                            }
                            delay={
                              yearIndex *
                                80 +
                              projectIndex *
                                60
                            }
                          />
                        ),
                      )}
                    </div>
                  )}

                  {/* =========================================
                      WEBSITE
                      ========================================= */}

                  {activeCategory ===
                    "Website" && (
                    <div
                      className={
                        styles.websiteGrid
                      }
                    >
                      {groupedByYear[
                        year
                      ].map(
                        (
                          project,
                          projectIndex,
                        ) => (
                          <WebsiteProjectCard
                            key={`${year}-${project.name}`}
                            project={
                              project
                            }
                            delay={
                              yearIndex *
                                80 +
                              projectIndex *
                                60
                            }
                          />
                        ),
                      )}
                    </div>
                  )}

                  {/* =========================================
                      DISCORD BOT
                      ========================================= */}

                  {activeCategory ===
                    "Discord Bot" && (
                    <div
                      className={
                        styles.discordGrid
                      }
                    >
                      {groupedByYear[
                        year
                      ].map(
                        (
                          project,
                          projectIndex,
                        ) => (
                          <DiscordProjectCard
                            key={`${year}-${project.name}`}
                            project={
                              project
                            }
                            delay={
                              yearIndex *
                                80 +
                              projectIndex *
                                60
                            }
                          />
                        ),
                      )}
                    </div>
                  )}
                </section>
              ),
            )}
          </div>
        ) : (
          <section
            className={styles.emptyState}
          >
            <span
              className={styles.emptyEyebrow}
            >
              {activeCategory}
            </span>

            <h2>
              Coming Soon: No projects found in this category.
            </h2>
          </section>
        )}
      </div>
    </main>
  );
}

function FiveMProjectCard({
  project,
  delay,
}: {
  project: ProjectItem;
  delay: number;
}) {
  return (
    <article
      className={styles.fivemCard}
      style={
        {
          animationDelay: `${delay}ms`,
        } as CSSProperties
      }
    >
      <div
        className={styles.fivemCardGlow}
        aria-hidden="true"
      />

      <div
        className={styles.fivemLogoWrap}
      >
        {project.logoUrl ? (
          <img
            src={project.logoUrl}
            alt={`${project.name} logo`}
            className={styles.fivemLogo}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div
            className={
              styles.fivemLogoFallback
            }
          >
            {project.name
              .slice(0, 1)
              .toUpperCase()}
          </div>
        )}
      </div>

      <h2 className={styles.fivemName}>
        {project.name}
      </h2>
    </article>
  );
}

function WebsiteProjectCard({
  project,
  delay,
}: {
  project: ProjectItem;
  delay: number;
}) {
  return (
    <article
      className={styles.websiteCard}
      style={
        {
          animationDelay: `${delay}ms`,
        } as CSSProperties
      }
    >
      {/* WEBSITE BANNER */}
      {project.bannerUrl && (
        <div className={styles.websiteBanner}>
          <img
            src={project.bannerUrl}
            alt={`${project.name} website preview`}
            className={styles.websiteBannerImage}
            loading="lazy"
            referrerPolicy="no-referrer"
          />

          <div
            className={styles.websiteBannerOverlay}
            aria-hidden="true"
          />
        </div>
      )}

      {/* WEBSITE INFO */}
      <div className={styles.websiteBody}>
        <div className={styles.websiteHeader}>
          <div className={styles.websiteLogoWrap}>
            {project.logoUrl ? (
              <img
                src={project.logoUrl}
                alt={`${project.name} logo`}
                className={styles.websiteLogo}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className={styles.websiteLogoFallback}>
                {project.name
                  .slice(0, 1)
                  .toUpperCase()}
              </div>
            )}
          </div>

          <h2 className={styles.websiteName}>
            {project.name}
          </h2>
        </div>

        {project.description && (
          <p className={styles.websiteDescription}>
            {project.description}
          </p>
        )}

        {project.projectUrl && (
          <div className={styles.websiteFooter}>
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryButton}
              aria-label={`Visit ${project.name} website`}
            >
              Visit Website
              <span
                className={styles.buttonArrow}
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

/* ===========================================================
   DISCORD BOT CARD
   =========================================================== */

function DiscordProjectCard({
  project,
  delay,
}: {
  project: ProjectItem;
  delay: number;
}) {
  const url =
    project.projectUrl ??
    project.discordUrl;

  return (
    <article
      className={styles.discordCard}
      style={
        {
          animationDelay: `${delay}ms`,
        } as CSSProperties
      }
    >
      <div
        className={styles.discordLogoWrap}
      >
        {project.logoUrl ? (
          <img
            src={project.logoUrl}
            alt={`${project.name} logo`}
            className={styles.discordLogo}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div
            className={
              styles.discordLogoFallback
            }
          >
            {project.name
              .slice(0, 1)
              .toUpperCase()}
          </div>
        )}
      </div>

      <div
        className={styles.discordContent}
      >
        <h2
          className={styles.discordName}
        >
          {project.name}
        </h2>

        {project.description && (
          <p
            className={
              styles.discordDescription
            }
          >
            {project.description}
          </p>
        )}

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={
              styles.primaryButton
            }
          >
            View Project
          </a>
        )}
      </div>
    </article>
  );
}