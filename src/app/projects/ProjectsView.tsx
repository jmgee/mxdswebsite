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

const selectedLabelMap: Record<ProjectCategory, string> = {
  FiveM: "FiveM Servers",
  Website: "Web Projects",
  "Discord Bot": "Discord Bots",
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
  if (!live) return "checking";
  if (live.status === "Online") return "online";
  if (live.status === "Offline") return "offline";
  return "checking";
}

function getStatusLabel(state: CardState) {
  if (state === "online") return "Online";
  if (state === "offline") return "Offline";
  return "Checking";
}

function getPlayersLabel(live?: ProjectLiveState) {
  if (!live || live.status !== "Online") return null;

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

  const liveTrackedProjects = useMemo(
    () => PROJECTS.filter((project) => Boolean(project.serverId)),
    [],
  );

  useEffect(() => {
    let mounted = true;

    async function loadStatuses() {
      try {
        const data = await fetchServerStatuses(liveTrackedProjects);
        if (mounted) setLiveData(data);
      } catch {
        if (!mounted) return;

        const fallback = Object.fromEntries(
          liveTrackedProjects.map((project) => [
            project.name,
            { status: "Offline" as const },
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

  const filteredProjects = useMemo(
    () =>
      PROJECTS.filter(
        (project) => project.category === activeCategory,
      ),
    [activeCategory],
  );

  const groupedByYear = useMemo(() => {
    return filteredProjects.reduce<Record<string, ProjectItem[]>>(
      (acc, project) => {
        if (!acc[project.year]) acc[project.year] = [];
        acc[project.year].push(project);
        return acc;
      },
      {},
    );
  }, [filteredProjects]);

  const sortedYears = useMemo(
    () =>
      Object.keys(groupedByYear).sort(
        (a, b) => Number(b) - Number(a),
      ),
    [groupedByYear],
  );

  const heroStats = useMemo(
    () => [
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
        value: selectedLabelMap[activeCategory],
        textValue: true,
      },
      {
        label: "In View",
        value: String(filteredProjects.length),
      },
    ],
    [activeCategory, filteredProjects.length],
  );

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleBase}>My </span>
            <span className={styles.heroTitleAccent}>Projects</span>
          </h1>

          <p className={styles.heroLead}>
            A categorized showcase of my FiveM servers, websites, and Discord
            bot projects.
          </p>

          <div className={styles.heroStats}>
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className={styles.heroStat}
                style={
                  {
                    animationDelay: `${120 + index * 90}ms`,
                  } as CSSProperties
                }
              >
                <span className={styles.heroStatLabel}>{stat.label}</span>
                <span
                  className={`${styles.heroStatValue} ${
                    stat.textValue ? styles.heroStatValueText : ""
                  }`}
                >
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          <div className={styles.filters} aria-label="Project categories">
            {PROJECT_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  className={`${styles.filterBtn} ${
                    isActive ? styles.filterBtnActive : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </section>

        {sortedYears.length > 0 ? (
          <div className={styles.timeline}>
            {sortedYears.map((year, yearIndex) => (
              <section
                key={`${activeCategory}-${year}`}
                className={styles.yearSection}
                style={
                  {
                    animationDelay: `${yearIndex * 120}ms`,
                  } as CSSProperties
                }
              >
                <div className={styles.yearHeader}>
                  <div className={styles.yearPillWrap}>
                    <span className={styles.yearPill}>{year}</span>
                  </div>

                  <div className={styles.yearRule} />
                </div>

                <div
                  className={`${styles.projectGrid} ${
                    activeCategory === "Website" ? styles.websiteGrid : ""
                  }`}
                >
                  {groupedByYear[year].map((project, index) => {
                    const live = liveData[project.name];
                    const state = getCardState(project, live);
                    const playersLabel = getPlayersLabel(live);
                    const hasDiscord = isValidDiscordUrl(project.discordUrl);

                    const ctaUrl =
                      project.projectUrl ??
                      (hasDiscord ? project.discordUrl : undefined);

                    const ctaLabel = project.projectUrl
                      ? "Visit Website"
                      : "Open Discord";

                    const isWebsite =
                      project.category === "Website" &&
                      Boolean(project.projectUrl);

                    return (
                      <article
                        key={`${project.year}-${project.name}`}
                        className={`${styles.projectCard} ${
                          isWebsite ? styles.websiteCard : ""
                        }`}
                        style={
                          {
                            animationDelay: `${
                              yearIndex * 90 + index * 90
                            }ms`,
                          } as CSSProperties
                        }
                      >
                        <div className={styles.cardGlow} aria-hidden="true" />

                        {isWebsite && project.projectUrl && (
                          <a
                            href={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.websitePreview}
                            aria-label={`Open ${project.name} website`}
                          >
                            <div className={styles.websitePreviewFallback}>
                              <span>{project.name}</span>
                              <small>Website preview</small>
                            </div>

                            <img
                              src={getWebsitePreviewUrl(project.projectUrl)}
                              alt={`${project.name} website preview`}
                              className={styles.websitePreviewImage}
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              onError={(event) => {
                                event.currentTarget.style.opacity = "0";
                              }}
                            />

                            <div className={styles.websitePreviewTopbar}>
                              <span className={styles.websitePreviewBadge}>
                                Website Preview
                              </span>
                              <span className={styles.websitePreviewDomain}>
                                {project.projectUrl
                                  .replace(/^https?:\/\//, "")
                                  .replace(/\/$/, "")}
                              </span>
                            </div>

                            <span className={styles.websitePreviewAction}>
                              Visit website ↗
                            </span>
                          </a>
                        )}

                        <div
                          className={
                            isWebsite ? styles.websiteCardBody : undefined
                          }
                        >
                          <div className={styles.cardTop}>
                            <div className={styles.avatarWrap}>
                              {project.logoUrl ? (
                                <img
                                  src={project.logoUrl}
                                  alt={`${project.name} logo`}
                                  className={styles.avatarImg}
                                  loading="lazy"
                                  referrerPolicy="no-referrer"
                                />
                              ) : (
                                <div className={styles.avatarFallback}>
                                  {project.name.slice(0, 1).toUpperCase()}
                                </div>
                              )}
                            </div>

                            <div className={styles.cardHeading}>
                              <h2 className={styles.projectName}>
                                {project.name}
                              </h2>

                              {state && (
                                <div className={styles.badgeRow}>
                                  <span
                                    className={`${styles.status} ${statusClassMap[state]}`}
                                  >
                                    <span className={styles.statusDot} />
                                    {getStatusLabel(state)}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>

                          <p className={styles.projectDesc}>
                            {project.description}
                          </p>

                          {playersLabel && (
                            <div className={styles.playersLabel}>
                              {playersLabel}
                            </div>
                          )}

                          {ctaUrl && (
                            <div className={styles.cardFooter}>
                              <a
                                href={ctaUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.ctaBtn}
                              >
                                {ctaLabel}
                              </a>
                            </div>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <section className={styles.emptyState}>
            <span className={styles.emptyEyebrow}>{activeCategory}</span>
            <h2>No projects added yet.</h2>
            <p>
              Add a project to <code>projects.data.ts</code> and it will appear
              here automatically.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}
