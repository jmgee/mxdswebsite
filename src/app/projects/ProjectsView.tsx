"use client";

import {
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
} from "react";

import { fetchServerStatuses } from "@/lib/fetchServerStatuses";
import styles from "./ProjectsView.module.css";

import {
  PROJECTS,
  PROJECT_CATEGORIES,
  type ProjectCategory,
  type ProjectItem,
  type ProjectLiveState,
} from "./projects.data";

type CardState = "checking" | "online" | "offline";

const WEBSITE_PREVIEW_SERVICE =
  "https://image.thum.io/get/width/1600/crop/900/noanimate/";

const statusClassMap: Record<CardState, string> = {
  checking: styles.statusChecking,
  online: styles.statusOnline,
  offline: styles.statusOffline,
};

function isValidDiscordUrl(url?: string) {
  return Boolean(
    url &&
      /^https:\/\/discord\.gg\//i.test(url) &&
      !url.includes("REPLACE_"),
  );
}

function getWebsitePreviewUrl(url: string) {
  return `${WEBSITE_PREVIEW_SERVICE}${encodeURI(url)}`;
}

function getCardState(
  project: ProjectItem,
  live?: ProjectLiveState,
): CardState | null {
  if (!project.serverId) return null;

  if (!live) {
    return "checking";
  }

  if (live.status === "Online") {
    return "online";
  }

  if (live.status === "Offline") {
    return "offline";
  }

  return "checking";
}

function getStatusLabel(state: CardState) {
  if (state === "online") return "Online";
  if (state === "offline") return "Offline";

  return "Checking";
}

function getPlayersLabel(live?: ProjectLiveState) {
  if (!live || live.status !== "Online") {
    return null;
  }

  if (
    typeof live.players !== "number" ||
    typeof live.maxPlayers !== "number"
  ) {
    return null;
  }

  return `${live.players}/${live.maxPlayers} players`;
}

export function ProjectsView() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("FiveM");

  const [liveData, setLiveData] =
    useState<Record<string, ProjectLiveState>>({});

  /*
   * Only FiveM projects with a serverId need live status checks.
   */
  const liveTrackedProjects = useMemo(
    () => PROJECTS.filter((project) => Boolean(project.serverId)),
    [],
  );

  /*
   * Load FiveM server statuses.
   * Statuses refresh every 60 seconds.
   */
  useEffect(() => {
    let mounted = true;

    async function loadStatuses() {
      try {
        const data = await fetchServerStatuses(liveTrackedProjects);

        if (mounted) {
          setLiveData(data);
        }
      } catch {
        if (!mounted) return;

        const fallback = Object.fromEntries(
          liveTrackedProjects.map((project) => [
            project.name,
            {
              status: "Offline" as const,
            },
          ]),
        );

        setLiveData(fallback);
      }
    }

    void loadStatuses();

    const intervalId = window.setInterval(() => {
      void loadStatuses();
    }, 60_000);

    return () => {
      mounted = false;
      window.clearInterval(intervalId);
    };
  }, [liveTrackedProjects]);

  /*
   * Count how many projects exist in every category.
   */
  const categoryCounts = useMemo(() => {
    const counts = new Map<ProjectCategory, number>();

    for (const category of PROJECT_CATEGORIES) {
      counts.set(
        category,
        PROJECTS.filter(
          (project) => project.category === category,
        ).length,
      );
    }

    return counts;
  }, []);

  /*
   * Show projects only from the currently selected category.
   */
  const filteredProjects = useMemo(
    () =>
      PROJECTS.filter(
        (project) => project.category === activeCategory,
      ),
    [activeCategory],
  );

  /*
   * Group projects by year.
   */
  const groupedByYear = useMemo(() => {
    return filteredProjects.reduce<Record<string, ProjectItem[]>>(
      (acc, project) => {
        if (!acc[project.year]) {
          acc[project.year] = [];
        }

        acc[project.year].push(project);

        return acc;
      },
      {},
    );
  }, [filteredProjects]);

  /*
   * Display newest years first.
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
  const heroStats = useMemo(() => {
    const years = new Set(
      PROJECTS.map((project) => project.year),
    ).size;

    const categories = PROJECT_CATEGORIES.length;

    const activeLive = liveTrackedProjects.filter(
      (project) =>
        liveData[project.name]?.status === "Online",
    ).length;

    return [
      {
        label: "Projects",
        value: String(PROJECTS.length),
      },
      {
        label: "Categories",
        value: String(categories),
      },
      {
        label: "Years",
        value: String(years),
      },
      {
        label: "Live",
        value: String(activeLive),
      },
    ];
  }, [liveData, liveTrackedProjects]);

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        {/* HERO */}
        <section className={styles.hero}>
          <span className={styles.eyebrow}>
            Selected work
          </span>

          <h1 className={styles.heroTitle}>
            Projects
          </h1>

          <p className={styles.heroLead}>
            A curated collection of FiveM servers,
            websites, and Discord bots I&apos;ve built,
            maintained, optimized, and supported.
          </p>

          {/* HERO STATS */}
          <div className={styles.heroStats}>
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className={styles.heroStat}
                style={
                  {
                    animationDelay: `${
                      120 + index * 90
                    }ms`,
                  } as CSSProperties
                }
              >
                <span
                  className={styles.heroStatValue}
                >
                  {stat.value}
                </span>

                <span
                  className={styles.heroStatLabel}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* PROJECT FILTERS */}
          <div
            className={styles.filters}
            aria-label="Project categories"
          >
            {PROJECT_CATEGORIES.map((category) => {
              const isActive =
                activeCategory === category;

              const count =
                categoryCounts.get(category) ?? 0;

              return (
                <button
                  key={category}
                  type="button"
                  className={`${styles.filterBtn} ${
                    isActive
                      ? styles.filterBtnActive
                      : ""
                  }`}
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  aria-pressed={isActive}
                >
                  <span>{category}</span>

                  <span
                    className={styles.filterCount}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* PROJECT TIMELINE */}
        {sortedYears.length > 0 ? (
          <div className={styles.timeline}>
            {sortedYears.map(
              (year, yearIndex) => (
                <section
                  key={`${activeCategory}-${year}`}
                  className={styles.yearSection}
                  style={
                    {
                      animationDelay: `${
                        yearIndex * 120
                      }ms`,
                    } as CSSProperties
                  }
                >
                  {/* YEAR */}
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

                  {/* PROJECT GRID */}
                  <div
                    className={`${
                      styles.projectGrid
                    } ${
                      activeCategory ===
                      "Website"
                        ? styles.websiteGrid
                        : ""
                    }`}
                  >
                    {groupedByYear[year].map(
                      (project, index) => {
                        const live =
                          liveData[project.name];

                        const state =
                          getCardState(
                            project,
                            live,
                          );

                        const playersLabel =
                          getPlayersLabel(live);

                        const hasDiscord =
                          isValidDiscordUrl(
                            project.discordUrl,
                          );

                        const ctaUrl =
                          project.projectUrl ??
                          (hasDiscord
                            ? project.discordUrl
                            : undefined);

                        const ctaLabel =
                          project.projectUrl
                            ? "Visit Website"
                            : "Open Discord";

                        const isWebsite =
                          project.category ===
                            "Website" &&
                          Boolean(
                            project.projectUrl,
                          );

                        return (
                          <article
                            key={`${project.year}-${project.name}`}
                            className={`${
                              styles.projectCard
                            } ${
                              isWebsite
                                ? styles.websiteCard
                                : ""
                            }`}
                            style={
                              {
                                animationDelay: `${
                                  yearIndex *
                                    90 +
                                  index * 90
                                }ms`,
                              } as CSSProperties
                            }
                          >
                            <div
                              className={
                                styles.cardGlow
                              }
                              aria-hidden="true"
                            />

                            {/* WEBSITE PREVIEW */}
                            {isWebsite &&
                              project.projectUrl && (
                                <a
                                  href={
                                    project.projectUrl
                                  }
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={
                                    styles.websitePreview
                                  }
                                  aria-label={`Open ${project.name} website`}
                                >
                                  <div
                                    className={
                                      styles.websitePreviewFallback
                                    }
                                  >
                                    <span>
                                      {
                                        project.name
                                      }
                                    </span>

                                    <small>
                                      Website
                                      preview
                                    </small>
                                  </div>

                                  <img
                                    src={getWebsitePreviewUrl(
                                      project.projectUrl,
                                    )}
                                    alt={`${project.name} website preview`}
                                    className={
                                      styles.websitePreviewImage
                                    }
                                    loading="lazy"
                                    referrerPolicy="no-referrer"
                                    onError={(
                                      event,
                                    ) => {
                                      event.currentTarget.style.opacity =
                                        "0";
                                    }}
                                  />

                                  <div
                                    className={
                                      styles.websitePreviewTopbar
                                    }
                                  >
                                    <span
                                      className={
                                        styles.websitePreviewBadge
                                      }
                                    >
                                      Website
                                      Preview
                                    </span>

                                    <span
                                      className={
                                        styles.websitePreviewDomain
                                      }
                                    >
                                      {project.projectUrl
                                        .replace(
                                          /^https?:\/\//,
                                          "",
                                        )
                                        .replace(
                                          /\/$/,
                                          "",
                                        )}
                                    </span>
                                  </div>

                                  <span
                                    className={
                                      styles.websitePreviewAction
                                    }
                                  >
                                    Visit website ↗
                                  </span>
                                </a>
                              )}

                            {/* CARD BODY */}
                            <div
                              className={
                                isWebsite
                                  ? styles.websiteCardBody
                                  : undefined
                              }
                            >
                              <div
                                className={
                                  styles.cardTop
                                }
                              >
                                {/* LOGO */}
                                <div
                                  className={
                                    styles.avatarWrap
                                  }
                                >
                                  {project.logoUrl ? (
                                    <img
                                      src={
                                        project.logoUrl
                                      }
                                      alt={`${project.name} logo`}
                                      className={
                                        styles.avatarImg
                                      }
                                      loading="lazy"
                                      referrerPolicy="no-referrer"
                                    />
                                  ) : (
                                    <div
                                      className={
                                        styles.avatarFallback
                                      }
                                    >
                                      {project.name
                                        .slice(0, 1)
                                        .toUpperCase()}
                                    </div>
                                  )}
                                </div>

                                {/* PROJECT TITLE */}
                                <div
                                  className={
                                    styles.cardHeading
                                  }
                                >
                                  <h2
                                    className={
                                      styles.projectName
                                    }
                                  >
                                    {
                                      project.name
                                    }
                                  </h2>

                                  {/*
                                    Only show server
                                    status for FiveM
                                    projects.

                                    Category and tag
                                    badges have been
                                    removed.
                                  */}
                                  {state && (
                                    <div
                                      className={
                                        styles.badgeRow
                                      }
                                    >
                                      <span
                                        className={`${styles.status} ${statusClassMap[state]}`}
                                      >
                                        <span
                                          className={
                                            styles.statusDot
                                          }
                                        />

                                        {getStatusLabel(
                                          state,
                                        )}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>

                              {/* DESCRIPTION */}
                              <p
                                className={
                                  styles.projectDesc
                                }
                              >
                                {
                                  project.description
                                }
                              </p>

                              {/* FIVEM PLAYER COUNT */}
                              {playersLabel && (
                                <div
                                  className={
                                    styles.playersLabel
                                  }
                                >
                                  {playersLabel}
                                </div>
                              )}

                              {/* CTA */}
                              {ctaUrl && (
                                <div
                                  className={
                                    styles.cardFooter
                                  }
                                >
                                  <a
                                    href={ctaUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={
                                      styles.ctaBtn
                                    }
                                  >
                                    {ctaLabel}
                                  </a>
                                </div>
                              )}
                            </div>
                          </article>
                        );
                      },
                    )}
                  </div>
                </section>
              ),
            )}
          </div>
        ) : (
          /* EMPTY CATEGORY */
          <section className={styles.emptyState}>
            <span
              className={styles.emptyEyebrow}
            >
              {activeCategory}
            </span>

            <h2>
              No projects added yet.
            </h2>

            <p>
              Add a project to{" "}
              <code>projects.data.ts</code>{" "}
              and it will appear here
              automatically.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}