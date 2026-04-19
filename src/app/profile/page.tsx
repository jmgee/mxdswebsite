import Link from "next/link";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { IconBrackets, IconServer, IconUsers } from "@/components/mxds/icons";

export const metadata: Metadata = {
  alternates: {
    canonical: "/profile",
  },
};

export default function ProfilePage() {
  return (
    <div className="mxds-page">
      <style>{`
        :root{
          --mxds-bg: #f5f3ee;
          --mxds-surface: #f8f2e8;
          --mxds-surface-2: #f3eadb;
          --mxds-card: rgba(255,255,255,0.56);
          --mxds-card-border: rgba(240, 155, 0, 0.65);
          --mxds-text: #171717;
          --mxds-muted: #525252;
          --mxds-accent: #f59e0b;
          --mxds-accent-2: #ffb020;
          --mxds-accent-soft: rgba(245, 158, 11, 0.18);
          --mxds-shadow: 0 18px 50px rgba(0,0,0,0.10);
          --mxds-radius-xl: 24px;
          --mxds-radius-lg: 18px;
          --mxds-radius-md: 14px;
          --mxds-max: 1120px;
        }

        *{
          box-sizing: border-box;
        }

        .mxds-page{
          min-height: 100%;
          color: var(--mxds-text);
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(10px);
          animation: mxdsPageIn 700ms cubic-bezier(.2,.8,.2,1) forwards;
        }

        .mxds-page::before,
        .mxds-page::after{
          content:"";
          position: fixed;
          inset: auto;
          pointer-events: none;
          z-index: 0;
          filter: blur(60px);
          opacity: .55;
        }

        .mxds-page::before{
          top: 80px;
          left: -80px;
          width: 240px;
          height: 240px;
          background: radial-gradient(circle, rgba(245,158,11,.20), transparent 68%);
        }

        .mxds-page::after{
          top: 160px;
          right: -60px;
          width: 280px;
          height: 280px;
          background: radial-gradient(circle, rgba(245,158,11,.14), transparent 70%);
        }

        @keyframes mxdsPageIn{
          to{
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mxds-shell{
          position: relative;
          z-index: 1;
          width: min(calc(100% - 32px), var(--mxds-max));
          margin: 0 auto;
          padding: 42px 0 72px;
        }

        .mxds-reveal{
          opacity: 0;
          transform: translateY(14px);
          animation: mxdsReveal 680ms cubic-bezier(.2,.8,.2,1) forwards;
          will-change: transform, opacity;
        }

        @keyframes mxdsReveal{
          to{
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mxds-hero{
          display: grid;
          place-items: center;
          text-align: center;
          padding-top: 18px;
        }

        .mxds-portraitWrap{
          position: relative;
          width: 180px;
          height: 180px;
          display: grid;
          place-items: center;
          margin-bottom: 18px;
        }

        .mxds-portraitAura{
          position: absolute;
          inset: -18px;
          border-radius: 999px;
          background:
            radial-gradient(circle at 50% 50%, rgba(245,158,11,.22) 0%, rgba(245,158,11,.10) 36%, rgba(245,158,11,0) 72%);
          filter: blur(10px);
          animation: mxdsPulse 3.6s ease-in-out infinite;
          pointer-events: none;
        }

        .mxds-portraitOrbit{
          position: absolute;
          inset: 4px;
          border-radius: 999px;
          border: 1px solid rgba(245, 158, 11, 0.26);
          animation: mxdsSpin 16s linear infinite;
          pointer-events: none;
        }

        .mxds-portraitOrbit::before,
        .mxds-portraitOrbit::after{
          content:"";
          position: absolute;
          border-radius: 999px;
          background: linear-gradient(180deg, #ffd37c, #f59e0b);
          box-shadow: 0 0 12px rgba(245,158,11,.45);
        }

        .mxds-portraitOrbit::before{
          width: 12px;
          height: 12px;
          top: 10px;
          left: 28px;
        }

        .mxds-portraitOrbit::after{
          width: 9px;
          height: 9px;
          right: 20px;
          bottom: 24px;
        }

        @keyframes mxdsSpin{
          to{ transform: rotate(360deg); }
        }

        @keyframes mxdsPulse{
          0%,100%{
            transform: scale(.98);
            opacity: .85;
          }
          50%{
            transform: scale(1.035);
            opacity: 1;
          }
        }

        .mxds-portraitFrame{
          position: relative;
          width: 142px;
          height: 142px;
          border-radius: 999px;
          padding: 6px;
          background:
            linear-gradient(145deg, rgba(255,255,255,.9), rgba(255,255,255,.35)),
            linear-gradient(145deg, rgba(245,158,11,.45), rgba(255,255,255,.12));
          box-shadow:
            0 18px 36px rgba(0,0,0,.12),
            inset 0 1px 0 rgba(255,255,255,.75),
            inset 0 -10px 18px rgba(245,158,11,.10);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          animation: mxdsFloat 6s ease-in-out infinite;
          overflow: hidden;
          isolation: isolate;
        }

        .mxds-portraitFrame::before{
          content:"";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background:
            conic-gradient(
              from 180deg,
              rgba(245,158,11,0) 0deg,
              rgba(245,158,11,.14) 40deg,
              rgba(255,255,255,.55) 85deg,
              rgba(245,158,11,0) 140deg,
              rgba(245,158,11,0) 360deg
            );
          opacity: .9;
          pointer-events: none;
          z-index: 1;
        }

        .mxds-portraitFrame::after{
          content:"";
          position: absolute;
          inset: 10px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,.55);
          pointer-events: none;
          z-index: 2;
        }

        @keyframes mxdsFloat{
          0%,100%{ transform: translateY(0px); }
          50%{ transform: translateY(-8px); }
        }

        .mxds-portraitInner{
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 999px;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 30%, #fff2cc 0%, #f5e5bb 44%, #e8d8b0 100%);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.65),
            inset 0 -16px 30px rgba(0,0,0,.06);
        }

        .mxds-portraitInner::before{
          content:"";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 50% 18%, rgba(255,255,255,.95), rgba(255,255,255,.25) 30%, rgba(255,255,255,0) 54%);
          z-index: 1;
          pointer-events: none;
        }

        .mxds-portraitInner::after{
          content:"";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(115deg, rgba(255,255,255,.42) 10%, rgba(255,255,255,0) 34%, rgba(255,255,255,.18) 62%, rgba(255,255,255,0) 78%);
          transform: translateX(-28%);
          animation: mxdsSheen 4.8s ease-in-out infinite;
          z-index: 2;
          pointer-events: none;
        }

        @keyframes mxdsSheen{
          0%, 100%{ transform: translateX(-42%); opacity: .25; }
          50%{ transform: translateX(16%); opacity: .65; }
        }

        .mxds-portraitImg{
          position: relative;
          z-index: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 34%;
          transform: scale(1.06);
          display: block;
          filter:
            saturate(1.08)
            contrast(1.04)
            brightness(1.02)
            drop-shadow(0 10px 18px rgba(0,0,0,.12));
        }

        .mxds-portraitBadge{
          position: absolute;
          right: -2px;
          bottom: 8px;
          z-index: 4;
          padding: 8px 11px;
          border-radius: 999px;
          font-size: 12px;
          line-height: 1;
          font-weight: 800;
          color: #7a4b00;
          background: rgba(255,248,235,.86);
          border: 1px solid rgba(245,158,11,.32);
          box-shadow: 0 10px 18px rgba(0,0,0,.08);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .mxds-kicker{
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,.6);
          border: 1px solid rgba(245,158,11,.20);
          color: #8a5a00;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .02em;
          box-shadow: 0 10px 30px rgba(0,0,0,.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .mxds-kickerDot{
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: linear-gradient(180deg, #fbbf24, #f59e0b);
          box-shadow: 0 0 0 6px rgba(245,158,11,.12);
        }

        .mxds-title{
          margin: 0;
          font-size: clamp(2.4rem, 5vw, 4.2rem);
          line-height: .96;
          letter-spacing: -0.045em;
          font-weight: 900;
          text-wrap: balance;
        }

        .mxds-titleAccent{
          display: block;
          background: linear-gradient(180deg, #101010 0%, #2a2a2a 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .mxds-subtitle{
          margin-top: 12px;
          min-height: 44px;
          font-size: clamp(1.15rem, 2.1vw, 1.65rem);
          color: #2d2d2d;
        }

        .mxds-type{
          display: inline-block;
          position: relative;
          white-space: nowrap;
          overflow: hidden;
          width: 0;
          border-right: 2px solid rgba(245,158,11,.95);
          animation:
            mxdsTyping 1.65s steps(22, end) 200ms forwards,
            mxdsCaret .8s steps(1, end) infinite;
        }

        @keyframes mxdsTyping{
          to{ width: 15.1ch; }
        }

        @keyframes mxdsCaret{
          50%{ border-color: transparent; }
        }

        .mxds-heroLead{
          max-width: 760px;
          margin: 16px auto 0;
          color: var(--mxds-muted);
          font-size: 1.02rem;
          line-height: 1.75;
        }

        .mxds-chips{
          margin-top: 22px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }

        .mxds-chip{
          opacity: 0;
          transform: translateY(10px) scale(.98);
          animation: mxdsChipIn 520ms cubic-bezier(.2,.8,.2,1) forwards;
          padding: 10px 14px;
          border-radius: 999px;
          background:
            linear-gradient(180deg, rgba(255,255,255,.82), rgba(255,255,255,.62));
          border: 1px solid rgba(245,158,11,.18);
          color: #5f4b29;
          font-weight: 700;
          font-size: .92rem;
          box-shadow: 0 10px 24px rgba(0,0,0,.045);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        @keyframes mxdsChipIn{
          to{
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .mxds-grid{
          display: grid;
          gap: 22px;
          margin-top: 38px;
        }

        .mxds-card{
          position: relative;
          opacity: 0;
          transform: translateY(14px);
          animation: mxdsCardIn 760ms cubic-bezier(.2,.8,.2,1) forwards;
          background:
            linear-gradient(180deg, rgba(255,255,255,.64), rgba(255,255,255,.46));
          border: 1px solid rgba(245,158,11,.46);
          border-radius: var(--mxds-radius-xl);
          padding: 22px 22px 18px;
          box-shadow: var(--mxds-shadow);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          overflow: hidden;
          transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
        }

        .mxds-card::before{
          content:"";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(135deg, rgba(255,255,255,.24), rgba(255,255,255,0) 36%),
            radial-gradient(circle at top right, rgba(245,158,11,.10), transparent 26%);
          pointer-events: none;
        }

        .mxds-card:hover{
          transform: translateY(-4px);
          box-shadow: 0 24px 56px rgba(0,0,0,.12);
          border-color: rgba(245,158,11,.62);
        }

        @keyframes mxdsCardIn{
          to{
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mxds-cardTitle{
          margin: 0 0 12px;
          font-size: 1.52rem;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .mxds-cardText{
          margin: 0;
          color: var(--mxds-muted);
          line-height: 1.85;
          font-size: 1rem;
          max-width: 920px;
        }

        .mxds-stats{
          margin-top: 22px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .mxds-stat{
          border-radius: var(--mxds-radius-lg);
          padding: 18px 16px;
          text-align: center;
          background: rgba(255,255,255,.42);
          border: 1px solid rgba(245,158,11,.12);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.55);
        }

        .mxds-statIcon{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--mxds-accent);
          margin-bottom: 10px;
        }

        .mxds-statTop{
          margin: 0;
          font-size: 1.6rem;
          line-height: 1.1;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .mxds-statBottom{
          margin: 8px 0 0;
          color: #666;
          font-size: .96rem;
        }

        .mxds-skillGrid{
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px 34px;
          margin-top: 12px;
        }

        .mxds-skillCol{
          display: grid;
          gap: 18px;
        }

        .mxds-skillRow{
          display: grid;
          gap: 9px;
        }

        .mxds-skillTop{
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .mxds-skillName{
          font-size: 1.02rem;
          font-weight: 800;
          color: #252525;
        }

        .mxds-skillPct{
          font-size: .98rem;
          font-weight: 900;
          color: #2f2f2f;
        }

        .mxds-barTrack{
          position: relative;
          height: 10px;
          border-radius: 999px;
          background: rgba(17,17,17,.08);
          overflow: hidden;
        }

        .mxds-barTrack::after{
          content:"";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          box-shadow: inset 0 1px 1px rgba(255,255,255,.45);
          pointer-events: none;
        }

        .mxds-barFill{
          height: 100%;
          width: 100%;
          transform-origin: left;
          transform: scaleX(0);
          border-radius: 999px;
          background:
            linear-gradient(90deg, #f59e0b 0%, #ffb11d 45%, #ffc54f 100%);
          box-shadow:
            0 0 0 1px rgba(245,158,11,.08) inset,
            0 4px 12px rgba(245,158,11,.25);
          animation: mxdsBarScale 900ms cubic-bezier(.2,.8,.2,1) forwards;
          will-change: transform;
          position: relative;
          overflow: hidden;
        }

        .mxds-barFill::after{
          content:"";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,.35), rgba(255,255,255,0));
          transform: translateX(-100%);
          animation: mxdsBarSheen 2.8s ease-in-out infinite 1.2s;
        }

        @keyframes mxdsBarScale{
          to{ transform: scaleX(var(--mxds-fill)); }
        }

        @keyframes mxdsBarSheen{
          0%, 100%{ transform: translateX(-110%); opacity: 0; }
          30%, 65%{ opacity: 1; }
          100%{ transform: translateX(130%); opacity: 0; }
        }

        .mxds-ctaRow{
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }

        .mxds-primaryBtn{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-width: 220px;
          padding: 14px 18px;
          border-radius: 999px;
          font-weight: 900;
          text-decoration: none;
          color: white;
          background:
            linear-gradient(180deg, #ffb321 0%, #f59e0b 100%);
          box-shadow:
            0 14px 28px rgba(245,158,11,.28),
            inset 0 1px 0 rgba(255,255,255,.28);
          transition: transform .16s ease, box-shadow .16s ease, filter .16s ease;
        }

        .mxds-primaryBtn:hover{
          transform: translateY(-2px);
          box-shadow:
            0 18px 34px rgba(245,158,11,.34),
            inset 0 1px 0 rgba(255,255,255,.28);
          filter: saturate(1.04);
        }

        .mxds-primaryBtn:active{
          transform: translateY(0);
        }

        @media (max-width: 900px){
          .mxds-stats,
          .mxds-skillGrid{
            grid-template-columns: 1fr;
          }

          .mxds-shell{
            width: min(calc(100% - 20px), var(--mxds-max));
            padding-top: 28px;
          }

          .mxds-card{
            padding: 18px 16px 16px;
          }

          .mxds-portraitWrap{
            width: 156px;
            height: 156px;
          }

          .mxds-portraitFrame{
            width: 128px;
            height: 128px;
          }

          .mxds-title{
            font-size: clamp(2.2rem, 10vw, 3.2rem);
          }

          .mxds-heroLead{
            font-size: .96rem;
          }
        }

        @media (prefers-reduced-motion: reduce){
          .mxds-page,
          .mxds-reveal,
          .mxds-card,
          .mxds-chip,
          .mxds-barFill,
          .mxds-portraitAura,
          .mxds-portraitOrbit,
          .mxds-portraitFrame,
          .mxds-portraitInner::after,
          .mxds-type{
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
          }

          .mxds-barFill{
            transform: scaleX(var(--mxds-fill)) !important;
          }

          .mxds-type{
            width: auto !important;
            border-right: 0 !important;
          }
        }
      `}</style>

      <div className="mxds-shell">
        <section className="mxds-hero">
          <div className="mxds-kicker mxds-reveal" style={{ animationDelay: "70ms" }}>
            <span className="mxds-kickerDot" />
            Premium FiveM Development
          </div>

          <div className="mxds-portraitWrap mxds-reveal" aria-hidden="true" style={{ animationDelay: "140ms" }}>
            <span className="mxds-portraitAura" />
            <span className="mxds-portraitOrbit" />

            <div className="mxds-portraitFrame">
              <div className="mxds-portraitInner">
                <img
                  src="https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/mxds1024.png"
                  alt="Mxds Kuzma profile portrait"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  className="mxds-portraitImg"
                />
              </div>
            </div>

            <div className="mxds-portraitBadge">Available</div>
          </div>

          <h1 className="mxds-title mxds-reveal" style={{ animationDelay: "220ms" }}>
            <span className="mxds-titleAccent">Mxds Kuzma</span>
          </h1>

          <div className="mxds-subtitle mxds-reveal" style={{ animationDelay: "300ms" }}>
            <span className="mxds-type">FiveM Developer</span>
          </div>

          <p className="mxds-heroLead mxds-reveal" style={{ animationDelay: "380ms" }}>
            Building polished FiveM experiences with clean architecture, reliable performance, and custom systems
            made to scale for serious roleplay communities.
          </p>

          <div className="mxds-chips">
            <span className="mxds-chip" style={{ animationDelay: "470ms" }}>
              Lua Scripting
            </span>
            <span className="mxds-chip" style={{ animationDelay: "540ms" }}>
              Custom Script
            </span>
            <span className="mxds-chip" style={{ animationDelay: "610ms" }}>
              Server Management
            </span>
          </div>
        </section>

        <div className="mxds-grid">
          <section className="mxds-card" style={{ animationDelay: "680ms" }}>
            <h3 className="mxds-cardTitle">About Me</h3>

            <p className="mxds-cardText">
              A 🇵🇭 Filipino developer studying Computer Science with a major in Software Engineering, focused on
              developing and maintaining GTA V roleplay servers. I build high-performance systems for FiveM with
              clean code, scalable structure, and refined user experiences.
            </p>

            <div className="mxds-stats">
              <div className="mxds-stat">
                <div className="mxds-statIcon" aria-hidden="true">
                  <IconServer />
                </div>
                <p className="mxds-statTop">10+</p>
                <p className="mxds-statBottom">Servers Successfully Managed</p>
              </div>

              <div className="mxds-stat">
                <div className="mxds-statIcon" aria-hidden="true">
                  <IconUsers />
                </div>
                <p className="mxds-statTop">10K+</p>
                <p className="mxds-statBottom">Players Across Communities</p>
              </div>

              <div className="mxds-stat">
                <div className="mxds-statIcon" aria-hidden="true">
                  <IconBrackets />
                </div>
                <p className="mxds-statTop">20+</p>
                <p className="mxds-statBottom">Custom Scripts Delivered</p>
              </div>
            </div>
          </section>

          <section className="mxds-card" style={{ animationDelay: "790ms" }}>
            <h3 className="mxds-cardTitle">Technical Skills</h3>

            <div className="mxds-skillGrid">
              <div className="mxds-skillCol">
                <Skill name="Lua Scripting" pct={95} delayMs={900} />
                <Skill name="ESX" pct={95} delayMs={980} />
                <Skill name="QBCore" pct={90} delayMs={1060} />
                <Skill name="Qbox" pct={80} delayMs={1140} />
              </div>

              <div className="mxds-skillCol">
                <Skill name="Custom Script" pct={97} delayMs={900} />
                <Skill name="Server Management" pct={95} delayMs={980} />
              </div>
            </div>
          </section>

          <div className="mxds-ctaRow mxds-reveal" style={{ animationDelay: "1040ms" }}>
            <Link className="mxds-primaryBtn" href="/servers">
              View My Servers
            </Link>
          </div>
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
              ["--mxds-fill" as string]: String(fill),
            } as CSSProperties
          }
        />
      </div>
    </div>
  );
}