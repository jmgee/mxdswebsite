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
      keyFeatures: ["Semi Serious RP", "Optimized scripts", "Advanced Cardealer System"],
    },
    {
      name: "Highdays Cali",
      status: "Offline",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/highdays1024.png",
      discordUrl: "https://discord.gg/REPLACE_HIGHDAYS",
      serverDesc: "Cali-inspired RP experience with smooth performance and curated gameplay loops.",
      keyFeatures: ["Semi Serious RP", "Barilan Server", "Low Resources & Optimized"],
    },
    {
      name: "BINI City",
      status: "Offline",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/bini1024.png",
      discordUrl: "https://discord.gg/REPLACE_HIGHDAYS",
      serverDesc: "Inspired by the Nations Girl Group. A Semi Serious RP community",
      keyFeatures: ["Semi Serious RP", "Dear Blooms", "Low Resources"],
    },
    {
      name: "District 8",
      status: "Offline",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/district8.png",
      discordUrl: "https://discord.gg/REPLACE_HIGHDAYS",
      serverDesc: "Built with Qbox Framework. Serious Roleplay with realistic scripts",
      keyFeatures: ["Serious RP", "Custom Scripts", "Qbox Framework"],
    },
    {
      name: "The Hallows City: Blackout",
      status: "Offline",
      tag: "Zombie",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/thc.png",
      discordUrl: "https://discord.gg/REPLACE_HALLOWS",
      serverDesc: "Zombie survival mode with blackout events, loot cycles, and high-risk zones.",
      keyFeatures: ["Zombie Server", "Loot & crafting", "Realistic Zombie System"],
    },
    {
      name: "SouthSide City",
      status: "Offline",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/ss1024.png",
      discordUrl: "https://discord.gg/REPLACE_SOUTHSIDE",
      serverDesc: "Street RP ecosystem with gang systems, territory control, and balanced economy.",
      keyFeatures: ["Custom Gang System", "Custom Business", "Whitelisted Jobs"],
    },
    {
      name: "Cavite City Reborn",
      status: "Offline",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/cavite1024.png",
      discordUrl: "https://discord.gg/REPLACE_ESCOLTA",
      serverDesc: "Built with Custom Scripts & Advanced Whitelisted Jobs.",
      keyFeatures: ["Serious RP", "Custom Scripts", "Realistic Life"],
    },
    {
      name: "Escolta RP",
      status: "Offline",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/escolta1024.png",
      discordUrl: "https://discord.gg/REPLACE_ESCOLTA",
      serverDesc: "Metro RP with polished interactions, streamlined UI, and stable server operations.",
      keyFeatures: ["Semi Serious RP", "Friendly Staffs", "Mid Economy"],
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
      keyFeatures: ["Since 2021", "Custom Scripts", "Optimized resources"],
    },
    {
      name: "Autonomy RP",
      status: "Offline",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/autonomy1024.png",
      discordUrl: "https://discord.gg/REPLACE_AUTONOMY",
      serverDesc: "Modern RP build with improved performance baselines and iterative feature delivery.",
      keyFeatures: ["Custom Business", "Serious RP", "Custom Scripts"],
    },
    {
      name: "New Horizon RP",
      status: "Offline",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/newhorizon1024.png",
      discordUrl: "https://discord.gg/REPLACE_NEWHORIZON",
      serverDesc: "Fresh RP framework with clean UX patterns and maintainable server architecture.",
      keyFeatures: ["Serious RP", "Friendly Staffs", "Accepting Newbies"],
    },
    {
      name: "Majesty City V2",
      status: "Offline",
      tag: "Roleplay",
      join: false,
      logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/mjsty_1024.png",
      discordUrl: "https://discord.gg/REPLACE_MAJESTY",
      serverDesc: "Premium RP experience with custom systems, refined UI, and reliable operations.",
      keyFeatures: ["Gangs vs Police", "Advanced Cardealer System", "Custom Framework"],
    },
  ];

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

        /* Spotlight sweep background (pure CSS) */
        .mxds-svPage::before{
          content:"";
          position:absolute;
          inset:-80px -60px;
          background:
            radial-gradient(700px 380px at 20% 0%, rgba(249,161,1,0.14), rgba(0,0,0,0) 60%),
            radial-gradient(700px 420px at 80% 10%, rgba(249,161,1,0.10), rgba(0,0,0,0) 60%),
            radial-gradient(900px 520px at 50% 100%, rgba(0,0,0,0.04), rgba(0,0,0,0) 70%);
          opacity: 0;
          transform: translateY(14px);
          animation: svSpotIn 900ms ease-out 120ms forwards;
          pointer-events:none;
          z-index: 0;
          filter: blur(0px);
        }
        @keyframes svSpotIn{
          to{ opacity: 1; transform: translateY(0); }
        }

        /* Keep content above spotlight */
        .mxds-svStack{
          position: relative;
          z-index: 1;
        }

        /* Header reveal: fade + slight scale */
        .mxds-svHeader{
          opacity: 0;
          transform: translateY(10px) scale(0.99);
          animation: svHeaderIn 680ms cubic-bezier(.2,.9,.2,1) 120ms forwards;
        }
        @keyframes svHeaderIn{
          to{ opacity:1; transform: translateY(0) scale(1); }
        }

        /* Title glow pulse (subtle, premium) */
        .mxds-svTitleGlow{
          display:inline-block;
          position: relative;
        }
        .mxds-svTitleGlow::after{
          content:"";
          position:absolute;
          left: 10%;
          right: 10%;
          top: 60%;
          height: 12px;
          background: radial-gradient(circle, rgba(249,161,1,0.28), rgba(0,0,0,0) 70%);
          filter: blur(10px);
          opacity: 0;
          animation: svTitleGlow 1200ms ease-out 520ms forwards;
          pointer-events:none;
        }
        @keyframes svTitleGlow{
          0%{ opacity:0; transform: translateY(6px); }
          35%{ opacity:1; transform: translateY(0); }
          100%{ opacity:0; transform: translateY(-2px); }
        }

        /* Card entrance: spring-ish pop + tilt settle */
        .mxds-svCardEnter{
          opacity: 0;
          transform: translateY(18px) scale(0.985) rotateX(2deg);
          transform-origin: 50% 80%;
          animation: svCardIn 720ms cubic-bezier(.18,.88,.2,1) forwards;
          will-change: transform, opacity;
        }
        @keyframes svCardIn{
          0%{ opacity: 0; transform: translateY(18px) scale(0.985) rotateX(2deg); }
          55%{ opacity: 1; transform: translateY(-2px) scale(1.01) rotateX(0deg); }
          100%{ opacity: 1; transform: translateY(0) scale(1) rotateX(0deg); }
        }
        .mxds-svLogoWrap{
          position: relative;
          width: 44px;
          height: 44px;
          margin: 2px auto 10px;
          display: grid;
          place-items: center;
        }
        .mxds-svLogoImg{
          width: 44px;
          height: 44px;
          border-radius: 10px;
          object-fit: cover;
          display: block;
          transform: scale(0.9);
          opacity: 0;
          animation: svLogoPop 520ms cubic-bezier(.2,.9,.2,1) forwards;
        }
        @keyframes svLogoPop{
          0%{ transform: scale(0.88); opacity: 0; }
          65%{ transform: scale(1.04); opacity: 1; }
          100%{ transform: scale(1); opacity: 1; }
        }
        .mxds-svLogoWrap::after{
          content:"";
          position:absolute;
          inset:-6px;
          border-radius: 14px;
          border: 2px solid rgba(249,161,1,0.28);
          opacity: 0;
          transform: scale(0.92);
          animation: svRing 900ms ease-out 220ms forwards;
          pointer-events:none;
        }
        @keyframes svRing{
          0%{ opacity: 0; transform: scale(0.92); }
          25%{ opacity: 1; }
          100%{ opacity: 0; transform: scale(1.06); }
        }

        /* Hover: lift + shadow polish (keeps it “alive”) */
        .mxds-serverCard{
          transition: transform 180ms ease, box-shadow 180ms ease;
        }
        .mxds-serverCard:hover{
          transform: translateY(-4px);
          box-shadow: 0 22px 60px rgba(0,0,0,0.12);
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce){
          .mxds-svPage, .mxds-svPage::before, .mxds-svHeader, .mxds-svCardEnter,
          .mxds-svLogoImg, .mxds-svLogoWrap::after, .mxds-svTitleGlow::after{
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .mxds-serverCard{ transition: none !important; }
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
  const canJoin = Boolean(item.discordUrl);

  return (
    <article
      className="mxds-card mxds-serverCard mxds-svCardEnter"
      style={{ animationDelay: `${220 + index * 70}ms` }}
    >
      <div className="mxds-svLogoWrap" aria-hidden="true">
        {item.logoUrl ? (
          <img
            src={item.logoUrl}
            alt=""
            loading="lazy"
            referrerPolicy="no-referrer"
            className="mxds-svLogoImg"
            style={{ animationDelay: `${260 + index * 70}ms` }}
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