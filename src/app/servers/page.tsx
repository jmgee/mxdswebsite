"use client";

import { useEffect, useState } from "react";
import { fetchServerStatuses } from "@/lib/fetchServerStatuses";

export type ServerItem = {
  name: string;
  year: string; 
  serverId?: string;
  tag: "Roleplay" | "Zombie"| "Barilan";
  logoUrl?: string;
  discordUrl?: string;
  serverDesc: string;
  keyFeatures: string[];
};

export type ServerLiveState = {
  status: "Checking" | "Online" | "Offline";
  players?: number;
  maxPlayers?: number;
};

export const SERVERS: ServerItem[] = [
    {
    name: "Hybrid City",
    year: "2026",
    serverId: "z57py9",
    tag: "Barilan",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/hybrid1024.png",
    discordUrl: "https://discord.gg/mcF9FS3ZJN",
    serverDesc: "An immersive PVP & Car Community PH roleplay server with custom scripts and systems.",
    keyFeatures: ["Optimized Scripts", "Advanced Lua Scripting", "MySQL Database Integration"],
  },
  {
    name: "Breakthrough Bay City",
    year: "2026",
    serverId: "3myody",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/BBC_NO_BG_Logo.png",
    discordUrl: "https://discord.gg/NtfMAvJ8jG",
    serverDesc: "An immersive PH roleplay server with custom scripts and systems.",
    keyFeatures: ["Optimized Scripts", "Advanced Lua Scripting", "MySQL Database Integration"],
  },
  {
    name: "Rivals City",
    year: "2025",
    tag: "Barilan",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/rivals1024.png",
    discordUrl: "https://discord.gg/REPLACE_RIVALS",
    serverDesc: "An immersive PVP PH Based Roleplay Server with custom scripts and systems.",
    keyFeatures: ["Optimized Scripts", "Advanced Lua Scripting", "MySQL Database Integration"],
  },
  {
    name: "Highdays Cali",
    year: "2025",
    tag: "Barilan",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/highdays1024.png",
    discordUrl: "https://discord.gg/REPLACE_HIGHDAYS",
    serverDesc: "An immersive PVP PH Based Roleplay Server with custom scripts and systems.",
    keyFeatures: ["Optimized Scripts", "Advanced Lua Scripting", "MySQL Database Integration"],
  },
  {
    name: "BINI City",
    year: "2025",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/bini1024.png",
    discordUrl: "https://discord.gg/REPLACE_HIGHDAYS",
    serverDesc: "An immersive Semi-Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Semi Serious RP", "Low Resources"],
  },
  {
    name: "District 8",
    year: "2025",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/district8.png",
    discordUrl: "https://discord.gg/REPLACE_HIGHDAYS",
    serverDesc: "An immersive US Roleplay Server with custom scripts and systems.",
    keyFeatures: ["Optimized Scripts", "Advanced Lua Scripting", "MySQL Database Integration"],
  },
  {
    name: "The Hallows City: Blackout",
    year: "2025",
    tag: "Zombie",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/thc.png",
    discordUrl: "https://discord.gg/REPLACE_HALLOWS",
    serverDesc: "An immersive Zombie Server with custom scripts and systems.",
    keyFeatures: ["Zombie Server", "Loot & crafting", "Realistic Zombie System"],
  },
  {
    name: "SouthSide City",
    year: "2025",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/ss1024.png",
    discordUrl: "https://discord.gg/REPLACE_SOUTHSIDE",
    serverDesc: "An immersive Semi-Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Custom Gang System", "Custom Business", "Whitelisted Jobs"],
  },
  {
    name: "Cavite City Reborn",
    year: "2025",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/cavite1024.png",
    discordUrl: "https://discord.gg/REPLACE_ESCOLTA",
    serverDesc: "An immersive Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Serious RP", "Custom Scripts", "Realistic Life"],
  },
  {
    name: "Escolta RP",
    year: "2024",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/escolta1024.png",
    discordUrl: "https://discord.gg/REPLACE_ESCOLTA",
    serverDesc: "An immersive Semi-Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Semi Serious RP", "Friendly Staffs", "Mid Economy"],
  },
  {
    name: "Trinity Roleplay",
    year: "2024",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/trinity1024.png",
    discordUrl: "https://discord.gg/REPLACE_TRINITY",
    serverDesc: "An immersive Semi-Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Custom jobs", "Progression systems", "Advanced Lua scripting"],
  },
  {
    name: "City of Hope Reunited",
    year: "2024",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/COH_1024.png",
    discordUrl: "https://discord.gg/REPLACE_COH",
    serverDesc: "An immersive Semi-Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Semi-Serious RP", "Custom Scripts", "Optimized Resources"],
  },
  {
    name: "Blackrose Roleplay",
    year: "2024",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/br1024.png",
    discordUrl: "https://discord.gg/REPLACE_BLACKROSE",
    serverDesc: "An immersive Semi-Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Since 2021", "Custom Scripts", "Optimized resources"],
  },
  {
    name: "Autonomy RP",
    year: "2024",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/autonomy1024.png",
    discordUrl: "https://discord.gg/REPLACE_AUTONOMY",
    serverDesc: "An immersive Semi-Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Custom Business", "Serious RP", "Custom Scripts"],
  },
  {
    name: "New Horizon RP",
    year: "2024",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/newhorizon1024.png",
    discordUrl: "https://discord.gg/REPLACE_NEWHORIZON",
    serverDesc: "An immersive Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Serious RP", "Friendly Staffs", "Accepting Newbies"],
  },
  {
    name: "Haven City",
    year: "2024",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/HAVEN_1024.png",
    discordUrl: "https://discord.gg/REPLACE_HAVEN",
    serverDesc: "An immersive Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Serious RP", "ESX Framework", "Accepting Newbies"],
  },
  {
    name: "Majesty City V2",
    year: "2023",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/mjsty_1024.png",
    discordUrl: "https://discord.gg/REPLACE_MAJESTY",
    serverDesc: "An immersive Semi-Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Gangs vs Police", "Advanced Cardealer System", "Custom Framework"],
  },
];

export default function ServersPage() {
  const [liveData, setLiveData] = useState<
    Record<string, ServerLiveState>
  >({});

  useEffect(() => {
    async function loadStatuses() {
      const data = await fetchServerStatuses(SERVERS);
      setLiveData(data);
    }

    loadStatuses();
  }, []);
  const groupedByYear = SERVERS.reduce((acc, server) => {
    if (!acc[server.year]) acc[server.year] = [];
    acc[server.year].push(server);
    return acc;
  }, {} as Record<string, ServerItem[]>);

  const sortedYears = Object.keys(groupedByYear).sort(
    (a, b) => Number(b) - Number(a)
  );

  return (
    <div className="mxds-svPage">
      <div className="mxds-container">
        <div className="mxds-center mxds-svHeader mxds-reveal">
          <h1 className="mxds-pageTitle">
            Servers I've Handled
          </h1>

          <p className="mxds-pageLead">
            Here are some of the successful FiveM servers I've developed,
            managed, and maintained.
          </p>
        </div>
        <div className="mxds-timeline">
          {sortedYears.map((year, yearIndex) => (
            <div key={year} className="mxds-timelineYear">
              <div
                className="mxds-yearMarker mxds-reveal"
                style={{ animationDelay: `${yearIndex * 150}ms` }}
              >
                {year}
              </div>
              <div className="mxds-serverGrid">
                {groupedByYear[year].map((server, index) => {
                  const live = liveData[server.name];
                  const isOnline = live?.status === "Online";

                  return (
                    <div
                      key={server.name}
                      className="mxds-card mxds-serverCard mxds-svCard mxds-reveal"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="mxds-svAvatar">
                        {server.logoUrl ? (
                          <img
                            src={server.logoUrl}
                            alt={server.name}
                            className="mxds-svAvatarImg"
                          />
                        ) : (
                          <div className="mxds-serverLogoInner" />
                        )}
                      </div>

                      <div className="mxds-serverTitleRow">
                        <div className="mxds-serverName">
                          {server.name}
                        </div>

                        <div className="mxds-serverMeta">
                          <span className="mxds-tag">
                            {server.tag}
                          </span>

                          {isOnline && (
                            <span className="mxds-status mxds-statusOnline">
                              <span className="mxds-dot" />
                              Online
                            </span>
                          )}

                          {live?.status === "Offline" && (
                            <span className="mxds-status mxds-statusOffline">
                              <span className="mxds-dot" />
                              Offline
                            </span>
                          )}

                          {!live && (
                            <span className="mxds-status mxds-statusChecking">
                              <span className="mxds-dot" />
                              Checking
                            </span>
                          )}
                        </div>
                      </div>

                      {isOnline && (
                        <div className="mxds-playerCount">
                          {live?.players}/{live?.maxPlayers} Players
                        </div>
                      )}

                      <p className="mxds-serverDesc">
                        {server.serverDesc}
                      </p>

                      <div className="mxds-kfTitle">
                        Key Features
                      </div>

                      <div className="mxds-kfRow">
                        {server.keyFeatures.slice(0, 2).map((f) => (
                          <span key={f}>{f}</span>
                        ))}
                      </div>

                      {server.keyFeatures.length > 2 && (
                        <div className="mxds-kfLast">
                          {server.keyFeatures.slice(2).join(" • ")}
                        </div>
                      )}

                      <hr className="mxds-hr" />

                      {isOnline && server.discordUrl && (
                        <a
                          href={server.discordUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mxds-joinBtn mxds-svJoinEnter"
                          style={{ animationDelay: `${index * 100 + 200}ms` }}
                        >
                          Join Server
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}