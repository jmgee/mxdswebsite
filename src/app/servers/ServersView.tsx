"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { fetchServerStatuses } from "@/lib/fetchServerStatuses";
import styles from "./ServersView.module.css";
import { SERVERS, type ServerItem, type ServerLiveState, type ServerTag } from "./servers.data";

type CardState = "checking" | "online" | "offline";

const tagClassMap: Record<ServerTag, string> = {
  Roleplay: styles.tagRoleplay,
  Zombie: styles.tagZombie,
  Barilan: styles.tagBarilan,
};

const statusClassMap: Record<CardState, string> = {
  checking: styles.statusChecking,
  online: styles.statusOnline,
  offline: styles.statusOffline,
};

function isValidDiscordUrl(url?: string) {
  return Boolean(url && /^https:\/\/discord\.gg\//.test(url) && !url.includes("REPLACE_"));
}

function getCardState(server: ServerItem, live?: ServerLiveState): CardState | null {
  if (!server.serverId) return null;
  if (!live) return "checking";
  if (live.status === "Online") return "online";
  if (live.status === "Offline") return "offline";
  return "checking";
}

function getStatusLabel(state: CardState) {
  switch (state) {
    case "online":
      return "Online";
    case "offline":
      return "Offline";
    default:
      return "Checking";
  }
}

function getPlayersLabel(live?: ServerLiveState) {
  if (!live || live.status !== "Online") return null;
  if (typeof live.players !== "number" || typeof live.maxPlayers !== "number") return null;
  return `${live.players}/${live.maxPlayers} players`;
}

export function ServersView() {
  const [liveData, setLiveData] = useState<Record<string, ServerLiveState>>({});

  const liveTrackedServers = useMemo(() => {
    return SERVERS.filter((server) => Boolean(server.serverId));
  }, []);

  useEffect(() => {
    let mounted = true;

    async function loadStatuses() {
      const data = await fetchServerStatuses(liveTrackedServers);
      if (mounted) setLiveData(data);
    }

    loadStatuses();

    return () => {
      mounted = false;
    };
  }, [liveTrackedServers]);

  const groupedByYear = useMemo(() => {
    return SERVERS.reduce<Record<string, ServerItem[]>>((acc, server) => {
      if (!acc[server.year]) acc[server.year] = [];
      acc[server.year].push(server);
      return acc;
    }, {});
  }, []);

  const sortedYears = useMemo(() => {
    return Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a));
  }, [groupedByYear]);

  const heroStats = useMemo(() => {
    const years = new Set(SERVERS.map((server) => server.year)).size;
    const activeLive = liveTrackedServers.filter(
      (server) => liveData[server.name]?.status === "Online"
    ).length;

    return [
      { label: "Projects", value: String(SERVERS.length) },
      { label: "Years", value: String(years) },
      { label: "Active Live", value: String(activeLive) },
    ];
  }, [liveData, liveTrackedServers]);

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.hero}>
          <div className={styles.heroBadge}>Portfolio timeline</div>

          <h1 className={styles.heroTitle}>Servers I’ve Handled</h1>

          <p className={styles.heroLead}>
            A curated timeline of FiveM communities I’ve developed, maintained, optimized, and supported —
            from roleplay ecosystems to PvP and zombie experiences.
          </p>

          <div className={styles.heroStats}>
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className={styles.heroStat}
                style={{ animationDelay: `${120 + index * 90}ms` } as CSSProperties}
              >
                <span className={styles.heroStatValue}>{stat.value}</span>
                <span className={styles.heroStatLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.timeline}>
          {sortedYears.map((year, yearIndex) => (
            <section
              key={year}
              className={styles.yearSection}
              style={{ animationDelay: `${yearIndex * 120}ms` } as CSSProperties}
            >
              <div className={styles.yearHeader}>
                <div className={styles.yearPillWrap}>
                  <span className={styles.yearPill}>{year}</span>
                </div>

                <div className={styles.yearRule} />
              </div>

              <div className={styles.serverGrid}>
                {groupedByYear[year].map((server, index) => {
                  const live = liveData[server.name];
                  const state = getCardState(server, live);
                  const playersLabel = getPlayersLabel(live);
                  const hasDiscord = isValidDiscordUrl(server.discordUrl);
                  const showDiscordButton = state === "online" && hasDiscord;

                  return (
                    <article
                      key={server.name}
                      className={styles.serverCard}
                      style={{ animationDelay: `${yearIndex * 90 + index * 90}ms` } as CSSProperties}
                    >
                      <div className={styles.cardGlow} aria-hidden="true" />

                      <div className={styles.cardTop}>
                        <div className={styles.avatarWrap}>
                          {server.logoUrl ? (
                            <img
                              src={server.logoUrl}
                              alt={server.name}
                              className={styles.avatarImg}
                              loading="lazy"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <div className={styles.avatarFallback} />
                          )}
                        </div>

                        <div className={styles.cardHeading}>
                          <h2 className={styles.serverName}>{server.name}</h2>

                          <div className={styles.badgeRow}>
                            <span className={`${styles.tag} ${tagClassMap[server.tag]}`}>{server.tag}</span>

                            {state && (
                              <span className={`${styles.status} ${statusClassMap[state]}`}>
                                <span className={styles.statusDot} />
                                {getStatusLabel(state)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className={styles.serverDesc}>{server.serverDesc}</p>

                      {playersLabel && <div className={styles.playersLabel}>{playersLabel}</div>}

                      <div className={styles.featuresBlock}>
                        <div className={styles.featuresLabel}>Key Features</div>
                        <div className={styles.featureList}>
                          {server.keyFeatures.map((feature) => (
                            <span key={feature} className={styles.featureChip}>
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {showDiscordButton && (
                        <div className={styles.cardFooter}>
                          <a
                            href={server.discordUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaBtn}
                          >
                            Open Discord
                          </a>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}