type ServerItem = {
  name: string;
  status: "Online" | "Offline";
  tag: "Roleplay" | "Zombie";
  players?: number;
  maxPlayers?: number;
  join?: boolean;
  logoUrl?: string;
  discordUrl?: string;
  serverDesc: string;
  keyFeatures: string[];
};

async function getServerStatuses() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/server-status`,
      { cache: "no-store" }
    );

    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function ServersPage() {
  const liveStatuses = await getServerStatuses();

  const baseServers: Omit<ServerItem, "status">[] = [
    {
      name: "London Roleplay",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/london1024.png",
      discordUrl: "https://discord.gg/GhDFMuVqUU",
      serverDesc: "QB Core Framework-based RP with custom scripts, optimized performance, and a welcoming community.",
      keyFeatures: ["50K Cash Starting", "Semi Serious RP"],
    },
    {
      name: "Rivals City",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/rivals1024.png",
      discordUrl: "https://discord.gg/REPLACE_RIVALS",
      serverDesc: "PVP RP based on Philippine Server with custom mechanics, balanced economy",
      keyFeatures: ["Semi Serious RP", "Barilan Server", "Advanced Cardealer System"],
    },
    {
      name: "Highdays Cali",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/highdays1024.png",
      discordUrl: "https://discord.gg/REPLACE_HIGHDAYS",
      serverDesc: "Cali-inspired RP experience with smooth performance and curated gameplay loops.",
      keyFeatures: ["Semi Serious RP", "Barilan Server", "Low Resources & Optimized"],
    },
    {
      name: "BINI City",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/bini1024.png",
      discordUrl: "https://discord.gg/REPLACE_HIGHDAYS",
      serverDesc: "Inspired by the Nations Girl Group. A Semi Serious RP community",
      keyFeatures: ["Semi Serious RP", "Dear Blooms", "Low Resources"],
    },
    {
      name: "District 8",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/district8.png",
      discordUrl: "https://discord.gg/REPLACE_HIGHDAYS",
      serverDesc: "Built with Qbox Framework. Serious Roleplay with realistic scripts",
      keyFeatures: ["Serious RP", "Custom Scripts", "Qbox Framework"],
    },
    {
      name: "The Hallows City: Blackout",
      tag: "Zombie",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/thc.png",
      discordUrl: "https://discord.gg/REPLACE_HALLOWS",
      serverDesc: "Zombie survival mode with blackout events, loot cycles, and high-risk zones.",
      keyFeatures: ["Zombie Server", "Loot & crafting", "Realistic Zombie System"],
    },
    {
      name: "SouthSide City",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/ss1024.png",
      discordUrl: "https://discord.gg/REPLACE_SOUTHSIDE",
      serverDesc: "Street RP ecosystem with gang systems, territory control, and balanced economy.",
      keyFeatures: ["Custom Gang System", "Custom Business", "Whitelisted Jobs"],
    },
    {
      name: "Cavite City Reborn",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/cavite1024.png",
      discordUrl: "https://discord.gg/REPLACE_ESCOLTA",
      serverDesc: "Built with Custom Scripts & Advanced Whitelisted Jobs.",
      keyFeatures: ["Serious RP", "Custom Scripts", "Realistic Life"],
    },
    {
      name: "Escolta RP",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/escolta1024.png",
      discordUrl: "https://discord.gg/REPLACE_ESCOLTA",
      serverDesc: "Metro RP with polished interactions, streamlined UI, and stable server operations.",
      keyFeatures: ["Semi Serious RP", "Friendly Staffs", "Mid Economy"],
    },
    {
      name: "Trinity Roleplay",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/trinity1024.png",
      discordUrl: "https://discord.gg/REPLACE_TRINITY",
      serverDesc: "Community-first RP with deep role systems and long-term progression support.",
      keyFeatures: ["Custom jobs", "Progression systems", "Advanced Lua scripting"],
    },
    {
      name: "City of Hope Reunited",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/COH_1024.png",
      discordUrl: "https://discord.gg/REPLACE_COH",
      serverDesc: "Since 2023. A fresh start for City of Hope with improved performance and new features.",
      keyFeatures: ["Semi-Serious RP", "Custom Scripts", "Optimized Resources"],
    },
    {
      name: "Blackrose Roleplay",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/br1024.png",
      discordUrl: "https://discord.gg/REPLACE_BLACKROSE",
      serverDesc: "High-fidelity RP with custom mechanics and stable, scalable infrastructure.",
      keyFeatures: ["Since 2021", "Custom Scripts", "Optimized resources"],
    },
    {
      name: "Autonomy RP",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/autonomy1024.png",
      discordUrl: "https://discord.gg/REPLACE_AUTONOMY",
      serverDesc: "Modern RP build with improved performance baselines and iterative feature delivery.",
      keyFeatures: ["Custom Business", "Serious RP", "Custom Scripts"],
    },
    {
      name: "New Horizon RP",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/newhorizon1024.png",
      discordUrl: "https://discord.gg/REPLACE_NEWHORIZON",
      serverDesc: "Fresh RP framework with clean UX patterns and maintainable server architecture.",
      keyFeatures: ["Serious RP", "Friendly Staffs", "Accepting Newbies"],
    },
    {
      name: "Haven City",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/HAVEN_1024.png",
      discordUrl: "https://discord.gg/REPLACE_HAVEN",
      serverDesc: "Serious RP with custom scripts, optimized performance, and a welcoming community for all player levels.",
      keyFeatures: ["Serious RP", "ESX Framework", "Accepting Newbies"],
    },
    {
      name: "Majesty City V2",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/mjsty_1024.png",
      discordUrl: "https://discord.gg/REPLACE_MAJESTY",
      serverDesc: "Premium RP experience with custom systems, refined UI, and reliable operations.",
      keyFeatures: ["Gangs vs Police", "Advanced Cardealer System", "Custom Framework"],
    },
  ];

  const servers: ServerItem[] = baseServers.map((server) => {
    const live = liveStatuses.find((s: any) => s.name === server.name);

    return {
      ...server,
      status: live?.status ?? "Offline",
      players: live?.players,
      maxPlayers: live?.maxPlayers,
    };
  });

  return (
    <div className="mxds-svPage">
      <style>{`
        .mxds-svPage{
          position: relative;
          opacity: 0;
          transform: translateY(10px);
          animation: svPageIn 680ms cubic-bezier(.2,.9,.2,1) forwards;
        }
        @keyframes svPageIn{
          to{ opacity: 1; transform: translateY(0); }
        }

        .mxds-playerCount{
          font-size: 12px;
          margin-top: 4px;
          font-weight: 600;
          opacity: .85;
        }
      `}</style>

      <div className="mxds-svStack">
        <div className="mxds-center mxds-svHeader">
          <h2 className="mxds-pageTitle">
            <span className="mxds-svTitleGlow">Servers Showcase</span>
          </h2>
          <p className="mxds-pageLead">List of developed and maintained servers</p>
        </div>

        <div className="mxds-serverGrid">
          {servers.map((s, idx) => (
            <ServerCard key={s.name} item={s} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ServerCard({ item, index }: { item: ServerItem; index: number }) {
  const isOnline = item.status === "Online";

  return (
    <article
      className="mxds-card mxds-serverCard mxds-svCardEnter"
      style={{ animationDelay: `${220 + index * 70}ms` }}
    >
      <div className="mxds-svLogoWrap" aria-hidden="true">
        {item.logoUrl && (
          <img
            src={item.logoUrl}
            alt=""
            loading="lazy"
            referrerPolicy="no-referrer"
            className="mxds-svLogoImg"
          />
        )}
      </div>

      <div className="mxds-serverHead">
        <div className="mxds-serverName">{item.name}</div>

        <div className="mxds-serverRight">
          <div className={`mxds-status ${isOnline ? "mxds-statusOnline" : "mxds-statusOffline"}`}>
            <span className="mxds-dot" />
            {item.status}
          </div>
          <span className="mxds-tag">{item.tag}</span>
        </div>
      </div>

      {isOnline && item.players !== undefined && (
        <div className="mxds-playerCount">
          {item.players} / {item.maxPlayers} Players
        </div>
      )}

      <p className="mxds-serverDesc">{item.serverDesc}</p>

      <div>
        <p className="mxds-kfTitle">Key Features:</p>
        <div className="mxds-kfRow">
          {item.keyFeatures.slice(0, 2).map((f) => (
            <span key={f}>{f}</span>
          ))}
        </div>

        {item.keyFeatures.length > 2 && (
          <div className="mxds-kfLast">{item.keyFeatures.slice(2).join(" • ")}</div>
        )}
      </div>
    </article>
  );
}
