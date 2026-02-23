"use client";

import { useEffect, useState } from "react";
import { fetchServerStatuses } from "@/lib/fetchServerStatuses";

export type ServerItem = {
  name: string;
  serverId?: string;
  tag: "Roleplay" | "Zombie";
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
    name: "Breakthrough Bay City",
    serverId: "3myody",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/BBC_NO_BG_Logo.png",
    discordUrl: "https://discord.gg/NtfMAvJ8jG",
    serverDesc: "An immersive PH roleplay server with custom scripts and systems.",
    keyFeatures: ["Optimized Scripts", "Advanced Lua Scripting", "MySQL Database Integration"],
  },
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
    keyFeatures: ["Barilan Server", "Advanced Cardealer System"],
  },
  {
    name: "Highdays Cali",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/highdays1024.png",
    discordUrl: "https://discord.gg/REPLACE_HIGHDAYS",
    serverDesc: "An immersive PVP PH Based Roleplay Server with custom scripts and systems.",
    keyFeatures: ["Barilan Server", "Low Resources & Optimized"],
  },
  {
    name: "BINI City",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/bini1024.png",
    discordUrl: "https://discord.gg/REPLACE_HIGHDAYS",
    serverDesc: "An immersive Semi-Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Semi Serious RP", "Low Resources"],
  },
  {
    name: "District 8",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/district8.png",
    discordUrl: "https://discord.gg/REPLACE_HIGHDAYS",
    serverDesc: "An immersive Qbox Roleplay Server with custom scripts and systems.",
    keyFeatures: ["Serious RP", "Qbox Framework"],
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

  return (
    <div className="mxds-svPage">
      <div className="mxds-serverGrid">
        {SERVERS.map((server, index) => {
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
  );
}