type ServerItem = {
  name: string;
  status: "Online" | "Offline";
  tag: "Roleplay" | "Zombie";
  join?: boolean;
  logoUrl?: string;
  discordUrl?: string;
  serverDesc: string;
  keyFeatures: string[];
};

export default function ServersPage() {
  const servers: ServerItem[] = [
    {
      name: "Rivals City",
      status: "Offline",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/1024.png",
      discordUrl: "https://discord.gg/REPLACE_RIVALS",
      serverDesc: "Competitive RP hub with custom systems focused on progression and community events.",
      keyFeatures: ["Custom UI", "Economy & progression", "Optimized scripts"],
    },
    {
      name: "Highdays Cali",
      status: "Offline",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/highdays1024.png",
      discordUrl: "https://discord.gg/REPLACE_HIGHDAYS",
      serverDesc: "Cali-inspired RP experience with smooth performance and curated gameplay loops.",
      keyFeatures: ["Advanced Lua scripting", "Custom jobs", "MySQL database"],
    },
    {
      name: "BINI City",
      status: "Offline",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/bini1024.png",
      discordUrl: "https://discord.gg/REPLACE_HIGHDAYS",
      serverDesc: "Inspired by the Nations Girl Group. A Semi-Serious roleplay community",
      keyFeatures: ["Dear Blooms", "Custom Scripts", "MySQL database"],
    },
    {
      name: "District 8",
      status: "Offline",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/district8.png",
      discordUrl: "https://discord.gg/REPLACE_HIGHDAYS",
      serverDesc: "Built with Qbox Framework. Serious Roleplay with realistic scripts",
      keyFeatures: ["Serious RP", "Custom Scripts", "MySQL database"],
    },
    {
      name: "The Hallows City: Blackout",
      status: "Offline",
      tag: "Zombie",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/thc.png",
      discordUrl: "https://discord.gg/REPLACE_HALLOWS",
      serverDesc: "Zombie survival mode with blackout events, loot cycles, and high-risk zones.",
      keyFeatures: ["Zombie AI systems", "Loot & crafting", "Event-driven gameplay"],
    },
    {
      name: "SouthSide City",
      status: "Offline",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/ss1024.png",
      discordUrl: "https://discord.gg/REPLACE_SOUTHSIDE",
      serverDesc: "Street RP ecosystem with gang systems, territory control, and balanced economy.",
      keyFeatures: ["Gang systems", "Territory control", "Custom UI"],
    },
    {
      name: "Escolta RP",
      status: "Offline",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/escolta1024.png",
      discordUrl: "https://discord.gg/REPLACE_ESCOLTA",
      serverDesc: "Metro RP with polished interactions, streamlined UI, and stable server operations.",
      keyFeatures: ["Performance optimization", "Server management", "MySQL database"],
    },
    {
      name: "Trinity Roleplay",
      status: "Offline",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/trinity1024.png",
      discordUrl: "https://discord.gg/REPLACE_TRINITY",
      serverDesc: "Community-first RP with deep role systems and long-term progression support.",
      keyFeatures: ["Custom jobs", "Progression systems", "Advanced Lua scripting"],
    },
    {
      name: "Blackrose Roleplay",
      status: "Offline",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/br1024.png",
      discordUrl: "https://discord.gg/REPLACE_BLACKROSE",
      serverDesc: "High-fidelity RP with custom mechanics and stable, scalable infrastructure.",
      keyFeatures: ["Custom scripts", "Stability checks", "Optimized resources"],
    },
    {
      name: "Autonomy RP",
      status: "Offline",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/autonomy1024.png",
      discordUrl: "https://discord.gg/REPLACE_AUTONOMY",
      serverDesc: "Modern RP build with improved performance baselines and iterative feature delivery.",
      keyFeatures: ["Custom UI", "Quality-of-life systems", "Performance tuning"],
    },
    {
      name: "New Horizon RP",
      status: "Offline",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/newhorizon1024.png",
      discordUrl: "https://discord.gg/REPLACE_NEWHORIZON",
      serverDesc: "Fresh RP framework with clean UX patterns and maintainable server architecture.",
      keyFeatures: ["Framework customization", "Database optimization", "Server monitoring"],
    },
    {
      name: "Majesty City V2",
      status: "Offline",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/mjsty_1024.png",
      discordUrl: "https://discord.gg/REPLACE_MAJESTY",
      serverDesc: "Premium RP experience with custom systems, refined UI, and reliable operations.",
      keyFeatures: ["Custom UI", "Advanced Lua scripting", "MySQL database"],
    },
  ];

  return (
    <div className="mxds-pageEnter">
      <style>{`
        .mxds-pageEnter{
          opacity: 0;
          transform: translateY(10px);
          animation: mxdsPageIn 520ms ease-out forwards;
        }
        @keyframes mxdsPageIn{
          to{ opacity: 1; transform: translateY(0); }
        }

        .mxds-enterHeader{
          opacity: 0;
          transform: translateY(8px);
          animation: mxdsItemIn 520ms ease-out forwards;
          animation-delay: 80ms;
        }

        .mxds-enterCard{
          opacity: 0;
          transform: translateY(14px);
          animation: mxdsItemIn 560ms ease-out forwards;
        }

        @keyframes mxdsItemIn{
          to{ opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="mxds-center mxds-enterHeader">
        <h2 className="mxds-pageTitle">Servers Showcase</h2>
        <p className="mxds-pageLead">List of developed and maintained servers</p>
      </div>

      <div className="mxds-serverGrid">
        {servers.map((s, idx) => (
          <ServerCard key={s.name} item={s} index={idx} />
        ))}
      </div>
    </div>
  );
}

function ServerCard({ item, index }: { item: ServerItem; index: number }) {
  const isOnline = item.status === "Online";
  const canJoin = Boolean(item.discordUrl);

  return (
    <article
      className="mxds-card mxds-serverCard mxds-enterCard"
      style={{ animationDelay: `${140 + index * 70}ms` }}
    >
      <div className="mxds-serverLogo" aria-hidden="true">
        {item.logoUrl ? (
          <img
            src={item.logoUrl}
            alt=""
            loading="lazy"
            referrerPolicy="no-referrer"
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <div className="mxds-serverLogoInner" />
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

      {item.join && (
        <>
          <hr className="mxds-hr" />

          {canJoin ? (
            <a
              href={item.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Join ${item.name} Discord`}
              className="mxds-joinBtn"
              style={{
                display: "flex",
                width: "100%",
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                lineHeight: 1,
                fontWeight: 900,
                fontSize: 14,
                borderRadius: 6,
                background: "#00a53a",
                color: "#ffffff",
              }}
            >
              Join Server
            </a>
          ) : (
            <div
              className="mxds-joinBtn"
              aria-disabled="true"
              title="Discord link not configured"
              style={{
                display: "flex",
                width: "100%",
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
                opacity: 0.55,
                lineHeight: 1,
                fontWeight: 900,
                fontSize: 14,
                borderRadius: 6,
                background: "#00a53a",
                color: "#ffffff",
              }}
            >
              Join Server
            </div>
          )}
        </>
      )}
    </article>
  );
}