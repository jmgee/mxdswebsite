"use client";

import { useEffect, useState } from "react";

type ServerItem = {
  name: string;
  serverId?: string; // intentionally optional
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
    logoUrl:
      "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/london1024.png",
    discordUrl: "https://discord.gg/GhDFMuVqUU",
    serverDesc:
      "QB Core Framework-based RP with custom scripts, optimized performance, and a welcoming community.",
    keyFeatures: ["50K Cash Starting", "Semi Serious RP"],
  },
    {
      name: "Rivals City",
      tag: "Roleplay",
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/rivals1024.png",
      discordUrl: "https://discord.gg/REPLACE_RIVALS",
      serverDesc: "PVP RP based on Philippine Server with custom mechanics, balanced economy",
      keyFeatures: ["Semi Serious RP", "Barilan Server", "Advanced Cardealer System"],
    },
    {
      name: "Highdays Cali",
      tag: "Roleplay",
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/highdays1024.png",
      discordUrl: "https://discord.gg/REPLACE_HIGHDAYS",
      serverDesc: "Cali-inspired RP experience with smooth performance and curated gameplay loops.",
      keyFeatures: ["Semi Serious RP", "Barilan Server", "Low Resources & Optimized"],
    },
    {
      name: "BINI City",
      tag: "Roleplay",
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/bini1024.png",
      discordUrl: "https://discord.gg/REPLACE_HIGHDAYS",
      serverDesc: "Inspired by the Nations Girl Group. A Semi Serious RP community",
      keyFeatures: ["Semi Serious RP", "Dear Blooms", "Low Resources"],
    },
    {
      name: "District 8",
      tag: "Roleplay",
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/district8.png",
      discordUrl: "https://discord.gg/REPLACE_HIGHDAYS",
      serverDesc: "Built with Qbox Framework. Serious Roleplay with realistic scripts",
      keyFeatures: ["Serious RP", "Custom Scripts", "Qbox Framework"],
    },
    {
      name: "The Hallows City: Blackout",
      tag: "Zombie",
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/thc.png",
      discordUrl: "https://discord.gg/REPLACE_HALLOWS",
      serverDesc: "Zombie survival mode with blackout events, loot cycles, and high-risk zones.",
      keyFeatures: ["Zombie Server", "Loot & crafting", "Realistic Zombie System"],
    },
    {
      name: "SouthSide City",
      tag: "Roleplay",
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/ss1024.png",
      discordUrl: "https://discord.gg/REPLACE_SOUTHSIDE",
      serverDesc: "Street RP ecosystem with gang systems, territory control, and balanced economy.",
      keyFeatures: ["Custom Gang System", "Custom Business", "Whitelisted Jobs"],
    },
    {
      name: "Cavite City Reborn",
      tag: "Roleplay",
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/cavite1024.png",
      discordUrl: "https://discord.gg/REPLACE_ESCOLTA",
      serverDesc: "Built with Custom Scripts & Advanced Whitelisted Jobs.",
      keyFeatures: ["Serious RP", "Custom Scripts", "Realistic Life"],
    },
    {
      name: "Escolta RP",
      tag: "Roleplay",
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/escolta1024.png",
      discordUrl: "https://discord.gg/REPLACE_ESCOLTA",
      serverDesc: "Metro RP with polished interactions, streamlined UI, and stable server operations.",
      keyFeatures: ["Semi Serious RP", "Friendly Staffs", "Mid Economy"],
    },
    {
      name: "Trinity Roleplay",
      tag: "Roleplay",
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/trinity1024.png",
      discordUrl: "https://discord.gg/REPLACE_TRINITY",
      serverDesc: "Community-first RP with deep role systems and long-term progression support.",
      keyFeatures: ["Custom jobs", "Progression systems", "Advanced Lua scripting"],
    },
    {
      name: "City of Hope Reunited",
      tag: "Roleplay",
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/COH_1024.png",
      discordUrl: "https://discord.gg/REPLACE_COH",
      serverDesc: "Since 2023. A fresh start for City of Hope with improved performance and new features.",
      keyFeatures: ["Semi-Serious RP", "Custom Scripts", "Optimized Resources"],
    },
    {
      name: "Blackrose Roleplay",
      tag: "Roleplay",
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/br1024.png",
      discordUrl: "https://discord.gg/REPLACE_BLACKROSE",
      serverDesc: "High-fidelity RP with custom mechanics and stable, scalable infrastructure.",
      keyFeatures: ["Since 2021", "Custom Scripts", "Optimized resources"],
    },
    {
      name: "Autonomy RP",
      tag: "Roleplay",
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/autonomy1024.png",
      discordUrl: "https://discord.gg/REPLACE_AUTONOMY",
      serverDesc: "Modern RP build with improved performance baselines and iterative feature delivery.",
      keyFeatures: ["Custom Business", "Serious RP", "Custom Scripts"],
    },
    {
      name: "New Horizon RP",
      tag: "Roleplay",
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/newhorizon1024.png",
      discordUrl: "https://discord.gg/REPLACE_NEWHORIZON",
      serverDesc: "Fresh RP framework with clean UX patterns and maintainable server architecture.",
      keyFeatures: ["Serious RP", "Friendly Staffs", "Accepting Newbies"],
    },
    {
      name: "Haven City",
      tag: "Roleplay",
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/HAVEN_1024.png",
      discordUrl: "https://discord.gg/REPLACE_HAVEN",
      serverDesc: "Serious RP with custom scripts, optimized performance, and a welcoming community for all player levels.",
      keyFeatures: ["Serious RP", "ESX Framework", "Accepting Newbies"],
    },
    {
      name: "Majesty City V2",
      tag: "Roleplay",
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/mjsty_1024.png",
      discordUrl: "https://discord.gg/REPLACE_MAJESTY",
      serverDesc: "Premium RP experience with custom systems, refined UI, and reliable operations.",
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
          // INTENTIONAL LOGIC:
          // If no serverId defined, automatically Offline
          if (!server.serverId) {
            results[server.name] = { status: "Offline" };
            return;
          }

          // Mark as checking before fetch completes
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
              players:
                typeof data.clients === "number" ? data.clients : 0,
              maxPlayers:
                typeof data.sv_maxclients === "number"
                  ? data.sv_maxclients
                  : 0,
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
    <div className="mxds-svPage">
      <div className="mxds-svStack">
        <div className="mxds-center mxds-svHeader">
          <h2 className="mxds-pageTitle">Servers Showcase</h2>
          <p className="mxds-pageLead">
            List of developed and maintained servers
          </p>
        </div>

        <div className="mxds-serverGrid">
          {SERVERS.map((server) => {
            const live = liveData[server.name];
            const status = live?.status ?? "Checking";
            const isOnline = status === "Online";

            return (
              <article
                key={server.name}
                className="mxds-card mxds-serverCard"
              >
                {server.logoUrl && (
                  <img
                    src={server.logoUrl}
                    alt=""
                    className="mxds-svLogoImg"
                  />
                )}

                <div className="mxds-serverHead">
                  <div className="mxds-serverName">
                    {server.name}
                  </div>

                  <div
                    className={`mxds-status ${
                      status === "Online"
                        ? "mxds-statusOnline"
                        : "mxds-statusOffline"
                    }`}
                  >
                    {status}
                  </div>
                </div>

                {isOnline && (
                  <div className="mxds-playerCount">
                    {live.players} / {live.maxPlayers} Players
                  </div>
                )}

                <p className="mxds-serverDesc">
                  {server.serverDesc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}