"use client";

import { useEffect, useState } from "react";

type ServerItem = {
  name: string;
  serverId?: string;
  tag: "Roleplay" | "Zombie";
  logoUrl?: string;
  discordUrl?: string;
  serverDesc: string;
  keyFeatures: string[];
};

type ServerLiveState = {
  status: "Checking" | "Online" | "Offline";
  players?: number;
  maxPlayers?: number;
};

const SERVERS: ServerItem[] = [
  {
    name: "London Roleplay",
    serverId: "qlol3p",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/london1024.png",
    discordUrl: "https://discord.gg/GhDFMuVqUU",
    serverDesc: "An immersive QB-Core London Based Roleplay Server with custom scripts and systems.",
    keyFeatures: ["50K Cash Starting", "Semi Serious RP"],
  },
  {
    name: "Rivals City",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/rivals1024.png",
    discordUrl: "https://discord.gg/REPLACE_RIVALS",
    serverDesc: "An immersive PVP PH Based Roleplay Server with custom scripts and systems.",
    keyFeatures: ["Semi Serious RP", "Barilan Server", "Advanced Cardealer System"],
  },
  {
    name: "Highdays Cali",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/highdays1024.png",
    discordUrl: "https://discord.gg/REPLACE_HIGHDAYS",
    serverDesc: "An immersive PVP PH Based Roleplay Server with custom scripts and systems.",
    keyFeatures: ["Semi Serious RP", "Barilan Server", "Low Resources & Optimized"],
  },
  {
    name: "BINI City",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/bini1024.png",
    discordUrl: "https://discord.gg/REPLACE_HIGHDAYS",
    serverDesc: "An immersive Semi-Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Semi Serious RP", "Dear Blooms", "Low Resources"],
  },
  {
    name: "District 8",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/district8.png",
    discordUrl: "https://discord.gg/REPLACE_HIGHDAYS",
    serverDesc: "An immersive Qbox Roleplay Server with custom scripts and systems.",
    keyFeatures: ["Serious RP", "Custom Scripts", "Qbox Framework"],
  },
  {
    name: "The Hallows City: Blackout",
    tag: "Zombie",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/thc.png",
    discordUrl: "https://discord.gg/REPLACE_HALLOWS",
    serverDesc: "An immersive Zombie Server with custom scripts and systems.",
    keyFeatures: ["Zombie Server", "Loot & crafting", "Realistic Zombie System"],
  },
  {
    name: "SouthSide City",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/ss1024.png",
    discordUrl: "https://discord.gg/REPLACE_SOUTHSIDE",
    serverDesc: "An immersive Semi-Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Custom Gang System", "Custom Business", "Whitelisted Jobs"],
  },
  {
    name: "Cavite City Reborn",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/cavite1024.png",
    discordUrl: "https://discord.gg/REPLACE_ESCOLTA",
    serverDesc: "An immersive Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Serious RP", "Custom Scripts", "Realistic Life"],
  },
  {
    name: "Escolta RP",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/escolta1024.png",
    discordUrl: "https://discord.gg/REPLACE_ESCOLTA",
    serverDesc: "An immersive Semi-Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Semi Serious RP", "Friendly Staffs", "Mid Economy"],
  },
  {
    name: "Trinity Roleplay",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/trinity1024.png",
    discordUrl: "https://discord.gg/REPLACE_TRINITY",
    serverDesc: "An immersive Semi-Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Custom jobs", "Progression systems", "Advanced Lua scripting"],
  },
  {
    name: "City of Hope Reunited",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/COH_1024.png",
    discordUrl: "https://discord.gg/REPLACE_COH",
    serverDesc: "An immersive Semi-Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Semi-Serious RP", "Custom Scripts", "Optimized Resources"],
  },
  {
    name: "Blackrose Roleplay",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/br1024.png",
    discordUrl: "https://discord.gg/REPLACE_BLACKROSE",
    serverDesc: "An immersive Semi-Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Since 2021", "Custom Scripts", "Optimized resources"],
  },
  {
    name: "Autonomy RP",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/autonomy1024.png",
    discordUrl: "https://discord.gg/REPLACE_AUTONOMY",
    serverDesc: "An immersive Semi-Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Custom Business", "Serious RP", "Custom Scripts"],
  },
  {
    name: "New Horizon RP",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/newhorizon1024.png",
    discordUrl: "https://discord.gg/REPLACE_NEWHORIZON",
    serverDesc: "An immersive Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Serious RP", "Friendly Staffs", "Accepting Newbies"],
  },
  {
    name: "Haven City",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/HAVEN_1024.png",
    discordUrl: "https://discord.gg/REPLACE_HAVEN",
    serverDesc: "An immersive Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Serious RP", "ESX Framework", "Accepting Newbies"],
  },
  {
    name: "Majesty City V2",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/mjsty_1024.png",
    discordUrl: "https://discord.gg/REPLACE_MAJESTY",
    serverDesc: "An immersive Semi-Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Gangs vs Police", "Advanced Cardealer System", "Custom Framework"],
  },
];

export default function ServersPage() {
  const [liveData, setLiveData] = useState<Record<string, ServerLiveState>>({});

  useEffect(() => {
    async function fetchStatuses() {
      const results: Record<string, ServerLiveState> = {};

      await Promise.all(
        SERVERS.map(async (server) => {
          if (!server.serverId) {
            results[server.name] = { status: "Offline" };
            return;
          }

          results[server.name] = { status: "Checking" };

          try {
            const res = await fetch(
              `https://servers-frontend.fivem.net/api/servers/single/${server.serverId}`
            );

            if (!res.ok) {
              results[server.name] = { status: "Offline" };
              return;
            }

            const json = await res.json();
            const data = json?.Data;

            if (!data) {
              results[server.name] = { status: "Offline" };
              return;
            }

            results[server.name] = {
              status: "Online",
              players: typeof data.clients === "number" ? data.clients : 0,
              maxPlayers: typeof data.sv_maxclients === "number" ? data.sv_maxclients : 0,
            };
          } catch {
            results[server.name] = { status: "Offline" };
          }
        })
      );

      setLiveData(results);
    }

    fetchStatuses();
  }, []);

  return (
    <div className="mxds-container mxds-svPage">
      <div className="mxds-center mxds-svHeader">
        <h2 className="mxds-pageTitle">Servers I've Handled</h2>
        <p className="mxds-pageLead">
          Here are some of the successful FiveM servers I've developed, managed, and maintained.
        </p>
      </div>

      <div className="mxds-serverGrid">
        {SERVERS.map((server) => {
          const live = liveData[server.name];
          const status = live?.status ?? "Checking";
          const isOnline = status === "Online";

          const statusClass =
            status === "Online"
              ? "mxds-statusOnline"
              : status === "Offline"
              ? "mxds-statusOffline"
              : "mxds-statusChecking";

          return (
            <article key={server.name} className="mxds-card mxds-serverCard">
              {server.logoUrl ? (
                <div className="mxds-svAvatar" aria-hidden="true">
                  <img
                    src={server.logoUrl}
                    alt={`${server.name} logo`}
                    className="mxds-svAvatarImg"
                    loading="lazy"
                  />
                </div>
              ) : null}

              {/* Name on the left, Status + Tag on the right (like your screenshot) */}
              <div className="mxds-serverTitleRow">
                <div className="mxds-serverName">{server.name}</div>

                <div className="mxds-serverMeta">
                  <div className={`mxds-status ${statusClass}`}>
                    <span className="mxds-dot" aria-hidden="true" />
                    {status}
                  </div>

                  <span className="mxds-tag">{server.tag}</span>
                </div>
              </div>

              {isOnline && (
                <div className="mxds-playerCount">
                  {live?.players} / {live?.maxPlayers} Players
                </div>
              )}

              <p className="mxds-serverDesc">{server.serverDesc}</p>

              {server.keyFeatures?.length ? (
                <>
                  <div className="mxds-kfTitle">Key Features:</div>
                  <div className="mxds-kfRow">
                    {server.keyFeatures.map((kf) => (
                      <span key={kf}>{kf}</span>
                    ))}
                  </div>
                </>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}