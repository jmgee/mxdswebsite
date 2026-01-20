import Link from "next/link";
import { IconBrackets, IconServer, IconUsers } from "@/components/mxds/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/profile",
  },
};

export default function ProfilePage() {
  return (
    <div className="mxds-homeEnter">
      <style>{`
        /* ===== Entrance + Stagger ===== */
        .mxds-homeEnter{
          opacity: 0;
          transform: translateY(10px);
          animation: mxdsPageIn 600ms cubic-bezier(.2,.8,.2,1) forwards;
        }
        @keyframes mxdsPageIn{ to{ opacity:1; transform:translateY(0);} }

        .mxds-reveal{
          opacity: 0;
          transform: translateY(12px);
          animation: mxdsReveal 620ms cubic-bezier(.2,.8,.2,1) forwards;
          will-change: transform, opacity;
        }
        @keyframes mxdsReveal{ to{ opacity:1; transform:translateY(0);} }

        /* ===== Logo Motion ===== */
        .mxds-heroIcon{
          position: relative;
          overflow: visible;
        }
        .mxds-logoFloat{
          animation: mxdsFloat 6s ease-in-out infinite;
          transform-origin: 50% 50%;
          filter: drop-shadow(0 10px 18px rgba(0,0,0,0.10));
        }
        @keyframes mxdsFloat{
          0%,100%{ transform: translateY(0); }
          50%{ transform: translateY(-8px); }
        }
        .mxds-heroGlow{
          content:"";
          position:absolute;
          inset: -10px;
          border-radius: 999px;
          background: radial-gradient(circle at 50% 40%, rgba(249,161,1,0.25), rgba(249,161,1,0.0) 65%);
          filter: blur(6px);
          opacity: 0;
          animation: mxdsGlow 2.8s ease-in-out infinite;
          pointer-events:none;
        }
        @keyframes mxdsGlow{
          0%,100%{ opacity: .35; transform: scale(0.98); }
          50%{ opacity: .70; transform: scale(1.03); }
        }

        .mxds-type{
          display: inline-block;
          position: relative;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid rgba(249,161,1,0.85);
          width: 0;
          animation:
            mxdsTyping 1.5s steps(22, end) forwards,
            mxdsCaret 700ms steps(1, end) infinite;
        }
        @keyframes mxdsTyping{ to{ width: 14.2ch; } } /* "FiveM Developer" length */
        @keyframes mxdsCaret{ 50%{ border-color: transparent; } }

        .mxds-chip{
          opacity: 0;
          transform: translateY(10px) scale(0.98);
          animation: mxdsChipIn 520ms cubic-bezier(.2,.8,.2,1) forwards;
        }
        @keyframes mxdsChipIn{ to{ opacity:1; transform: translateY(0) scale(1);} }

        /* ===== Card Entrance ===== */
        .mxds-card{
          opacity: 0;
          transform: translateY(14px);
          animation: mxdsCardIn 700ms cubic-bezier(.2,.8,.2,1) forwards;
          will-change: transform, opacity;
        }
        @keyframes mxdsCardIn{ to{ opacity:1; transform: translateY(0);} }

        /* ===== Skill Bar Fill Animation ===== */
        .mxds-barFill{
          width: 100%;
          transform-origin: left;
          transform: scaleX(0);
          animation: mxdsBarScale 900ms cubic-bezier(.2,.8,.2,1) forwards;
          will-change: transform;
        }
        @keyframes mxdsBarFill{ to{ width: var(--mxds-pct); } }

        @keyframes mxdsBarScale{
          to{ transform: scaleX(var(--mxds-fill)); }
        }

        /* Hover polish */
        .mxds-card{
          transition: transform 180ms ease, box-shadow 180ms ease;
        }
        .mxds-card:hover{
          transform: translateY(-3px);
        }
        .mxds-primaryBtn{
          transition: transform 160ms ease, box-shadow 160ms ease, opacity 160ms ease;
        }
        .mxds-primaryBtn:hover{
          transform: translateY(-1px);
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce){
          .mxds-barFill{
            animation: none !important;
            transform: scaleX(var(--mxds-fill)) !important;
          }
        }
      `}</style>

      <div className="mxds-center">
        <div className="mxds-heroIcon mxds-reveal" aria-hidden="true" style={{ animationDelay: "80ms" }}>
          <span className="mxds-heroGlow" />
          <img
            src="https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/m1024.png"
            alt=""
            loading="eager"
            referrerPolicy="no-referrer"
            className="mxds-logoFloat"
            style={{
              width: 82,
              height: 82,
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        <h1 className="mxds-h1 mxds-reveal" style={{ animationDelay: "150ms" }}>
          Mxds Kuzma
        </h1>

        <div className="mxds-subtitle mxds-reveal" style={{ animationDelay: "220ms" }}>
          <span className="mxds-type">FiveM Developer</span>
        </div>

        <div className="mxds-chips" style={{ marginTop: 16 }}>
          <span className="mxds-chip" style={{ animationDelay: "320ms" }}>
            Lua Scripting
          </span>
          <span className="mxds-chip" style={{ animationDelay: "390ms" }}>
            Custom Script
          </span>
          <span className="mxds-chip" style={{ animationDelay: "460ms" }}>
            Server Management
          </span>
        </div>
      </div>

      <div className="mxds-aboutWrap">
        <section className="mxds-card" style={{ animationDelay: "520ms" }}>
          <h3 className="mxds-cardTitle">About Me</h3>

          <p className="mxds-cardText">
            A 🇵🇭 Filipino developer studying Computer Science major in Software Engineering, developing & maintaining GTA 5 Roleplay Servers. I
            build high-performance applications even FiveM Servers with clean code and exceptional user experiences.
          </p>

          <div className="mxds-stats">
            <div className="mxds-stat">
              <div className="mxds-statIcon" aria-hidden="true">
                <IconServer />
              </div>
              <p className="mxds-statTop">10+ Servers</p>
              <p className="mxds-statBottom">Successfully Managed</p>
            </div>

            <div className="mxds-stat">
              <div className="mxds-statIcon" aria-hidden="true">
                <IconUsers />
              </div>
              <p className="mxds-statTop">10K+ Players</p>
              <p className="mxds-statBottom">Community Served</p>
            </div>

            <div className="mxds-stat">
              <div className="mxds-statIcon" aria-hidden="true">
                <IconBrackets />
              </div>
              <p className="mxds-statTop">100+ Scripts</p>
              <p className="mxds-statBottom">Custom Developed</p>
            </div>
          </div>
        </section>
      </div>

      <div className="mxds-skillsWrap">
        <section className="mxds-card mxds-sectionGap" style={{ animationDelay: "640ms" }}>
          <h3 className="mxds-cardTitle" style={{ marginBottom: 6 }}>
            Technical Skills:
          </h3>

          <div className="mxds-skillGrid">
            <div>
              <Skill name="Lua Scripting" pct={95} delayMs={760} />
              <Skill name="ESX" pct={95} delayMs={860} />
              <Skill name="Qbox" pct={80} delayMs={860} />
            </div>

            <div>
              <Skill name="Custom Script" pct={96} delayMs={760} />
              <Skill name="Server Management" pct={97} delayMs={860} />
            </div>
          </div>
        </section>

        <div className="mxds-ctaRow mxds-reveal" style={{ animationDelay: "840ms" }}>
          <Link className="mxds-primaryBtn" href="/servers">
            View My Servers
          </Link>
        </div>
      </div>
    </div>
  );
}

function Skill({ name, pct, delayMs }: { name: string; pct: number; delayMs: number }) {
  const fill = Math.max(0, Math.min(1, pct / 100));

  return (
    <div className="mxds-skillRow">
      <div className="mxds-skillTop">
        <div className="mxds-skillName">{name}</div>
        <div className="mxds-skillPct">{pct}%</div>
      </div>

      <div className="mxds-barTrack">
        <div
          className="mxds-barFill"
          style={
            {
              animationDelay: `${delayMs}ms`,
              ["--mxds-fill" as any]: String(fill),
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  );
}
