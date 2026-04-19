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
          --mxds-text: #171717;
          --mxds-muted: #5a5a5a;
          --mxds-accent: #f59e0b;
          --mxds-accent-2: #ffb020;
          --mxds-card-border: rgba(245, 158, 11, 0.42);
          --mxds-card-bg: linear-gradient(180deg, rgba(255,255,255,.68), rgba(255,255,255,.5));
          --mxds-shadow: 0 18px 50px rgba(0,0,0,0.08);
          --mxds-radius-xl: 24px;
          --mxds-radius-lg: 18px;
          --mxds-max: 1920px;
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
          pointer-events: none;
          z-index: 0;
          filter: blur(68px);
          opacity: .5;
        }

        .mxds-page::before{
          top: 90px;
          left: -50px;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(245,158,11,.16), transparent 68%);
        }

        .mxds-page::after{
          top: 160px;
          right: -60px;
          width: 340px;
          height: 340px;
          background: radial-gradient(circle, rgba(245,158,11,.10), transparent 72%);
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
          width: min(calc(100% - 12px), var(--mxds-max));
          margin: 0 auto;
          padding: 20px 0 72px;
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

        /* ===== HERO ===== */
        .mxds-hero{
          display: grid;
          grid-template-columns: minmax(520px, 1fr) minmax(720px, 1.25fr);
          align-items: center;
          gap: 36px;
          min-height: 520px;
          padding: 24px 6px 10px;
        }

        .mxds-heroVisual{
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100%;
          position: relative;
        }

        .mxds-heroVisualStage{
          position: relative;
          width: min(100%, 620px);
          min-height: 430px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 36px;
          background:
            radial-gradient(circle at 50% 42%, rgba(245,158,11,.10), rgba(245,158,11,.04) 26%, rgba(245,158,11,0) 68%),
            linear-gradient(180deg, rgba(255,255,255,.20), rgba(255,255,255,0));
        }

        .mxds-heroVisualStage::before{
          content:"";
          position: absolute;
          inset: 34px;
          border-radius: 34px;
          background:
            radial-gradient(circle at 50% 50%, rgba(255,255,255,.46), rgba(255,255,255,.10) 44%, rgba(255,255,255,0) 72%);
          pointer-events: none;
        }

        .mxds-portraitWrap{
          position: relative;
          width: 360px;
          height: 360px;
          display: grid;
          place-items: center;
        }

        .mxds-portraitAura{
          position: absolute;
          inset: -28px;
          border-radius: 999px;
          background:
            radial-gradient(circle at 50% 50%, rgba(245,158,11,.22) 0%, rgba(245,158,11,.10) 38%, rgba(245,158,11,0) 74%);
          filter: blur(16px);
          animation: mxdsPulse 4s ease-in-out infinite;
          pointer-events: none;
        }

        .mxds-portraitOrbit{
          position: absolute;
          inset: 2px;
          border-radius: 999px;
          border: 1px solid rgba(245, 158, 11, 0.22);
          animation: mxdsSpin 18s linear infinite;
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
          width: 14px;
          height: 14px;
          top: 26px;
          left: 72px;
        }

        .mxds-portraitOrbit::after{
          width: 11px;
          height: 11px;
          right: 54px;
          bottom: 42px;
        }

        @keyframes mxdsSpin{
          to{ transform: rotate(360deg); }
        }

        @keyframes mxdsPulse{
          0%,100%{
            transform: scale(.98);
            opacity: .82;
          }
          50%{
            transform: scale(1.035);
            opacity: 1;
          }
        }

        .mxds-portraitFrame{
          position: relative;
          width: 286px;
          height: 286px;
          border-radius: 999px;
          padding: 10px;
          background:
            linear-gradient(145deg, rgba(255,255,255,.92), rgba(255,255,255,.42)),
            linear-gradient(145deg, rgba(245,158,11,.42), rgba(255,255,255,.12));
          box-shadow:
            0 24px 52px rgba(0,0,0,.14),
            inset 0 1px 0 rgba(255,255,255,.78),
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
              rgba(245,158,11,.14) 42deg,
              rgba(255,255,255,.52) 88deg,
              rgba(245,158,11,0) 144deg,
              rgba(245,158,11,0) 360deg
            );
          z-index: 1;
          pointer-events: none;
        }

        .mxds-portraitFrame::after{
          content:"";
          position: absolute;
          inset: 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,.55);
          z-index: 2;
          pointer-events: none;
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
          right: 18px;
          bottom: 48px;
          z-index: 4;
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 12px;
          line-height: 1;
          font-weight: 800;
          color: #7a4b00;
          background: rgba(255,248,235,.92);
          border: 1px solid rgba(245,158,11,.30);
          box-shadow: 0 10px 18px rgba(0,0,0,.08);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .mxds-heroContent{
          text-align: left;
          min-width: 0;
          max-width: 860px;
        }

        .mxds-title{
          margin: 0;
          font-size: clamp(4rem, 6vw, 6.4rem);
          line-height: .9;
          letter-spacing: -0.06em;
          font-weight: 900;
          text-wrap: balance;
        }

        .mxds-titleAccent{
          display: block;
          background: linear-gradient(180deg, #111111 0%, #262626 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .mxds-subtitle{
          margin-top: 16px;
          min-height: 54px;
          font-size: clamp(1.35rem, 2vw, 2rem);
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
          margin: 20px 0 0;
          color: var(--mxds-muted);
          font-size: 1.12rem;
          line-height: 1.95;
        }

        .mxds-chips{
          margin-top: 28px;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          gap: 12px;
        }

        .mxds-chip{
          opacity: 0;
          transform: translateY(10px) scale(.98);
          animation: mxdsChipIn 520ms cubic-bezier(.2,.8,.2,1) forwards;
          padding: 10px 15px;
          border-radius: 999px;
          background: linear-gradient(180deg, rgba(255,255,255,.84), rgba(255,255,255,.64));
          border: 1px solid rgba(245,158,11,.18);
          color: #5f4b29;
          font-weight: 700;
          font-size: .96rem;
          box-shadow: 0 10px 24px rgba(0,0,0,.04);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        @keyframes mxdsChipIn{
          to{
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .mxds-heroActions{
          margin-top: 30px;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .mxds-primaryBtn{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-width: 230px;
          padding: 15px 20px;
          border-radius: 999px;
          font-weight: 900;
          text-decoration: none;
          color: white;
          background: linear-gradient(180deg, #ffb321 0%, #f59e0b 100%);
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

        /* ===== CONTENT GRID ===== */
        .mxds-grid{
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, .8fr);
          gap: 24px;
          margin-top: 34px;
          align-items: start;
          padding: 0 6px;
        }

        .mxds-card{
          position: relative;
          opacity: 0;
          transform: translateY(14px);
          animation: mxdsCardIn 760ms cubic-bezier(.2,.8,.2,1) forwards;
          background: var(--mxds-card-bg);
          border: 1px solid var(--mxds-card-border);
          border-radius: var(--mxds-radius-xl);
          padding: 28px 28px 24px;
          box-shadow: var(--mxds-shadow);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          overflow: hidden;
          transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
          min-width: 0;
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
          box-shadow: 0 24px 56px rgba(0,0,0,.11);
          border-color: rgba(245,158,11,.60);
        }

        @keyframes mxdsCardIn{
          to{
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mxds-cardTitle{
          margin: 0 0 14px;
          font-size: 1.9rem;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .mxds-cardText{
          margin: 0;
          color: var(--mxds-muted);
          line-height: 1.95;
          font-size: 1.06rem;
          max-width: none;
        }

        .mxds-stats{
          margin-top: 28px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .mxds-stat{
          border-radius: var(--mxds-radius-lg);
          padding: 22px 16px;
          text-align: center;
          background: rgba(255,255,255,.44);
          border: 1px solid rgba(245,158,11,.12);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.55);
        }

        .mxds-statIcon{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--mxds-accent);
          margin-bottom: 12px;
        }

        .mxds-statTop{
          margin: 0;
          font-size: 1.9rem;
          line-height: 1.1;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .mxds-statBottom{
          margin: 8px 0 0;
          color: #666;
          font-size: .98rem;
          line-height: 1.5;
        }

        .mxds-gridFull{
          grid-column: 1 / -1;
        }

        .mxds-skillGrid{
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px 42px;
          margin-top: 16px;
        }

        .mxds-skillCol{
          display: grid;
          gap: 20px;
        }

        .mxds-skillRow{
          display: grid;
          gap: 10px;
        }

        .mxds-skillTop{
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .mxds-skillName{
          font-size: 1.05rem;
          font-weight: 800;
          color: #252525;
        }

        .mxds-skillPct{
          font-size: 1rem;
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
          background: linear-gradient(90deg, #f59e0b 0%, #ffb11d 45%, #ffc54f 100%);
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

@media (max-width: 1360px){
  .mxds-shell{
    width: min(calc(100% - 16px), var(--mxds-max));
  }

  .mxds-hero{
    grid-template-columns: minmax(360px, .95fr) minmax(0, 1.05fr);
    gap: 32px;
    padding-left: 4px;
    padding-right: 4px;
  }

        .mxds-grid{
            padding-left: 4px;
            padding-right: 4px;
        }
      }

        @media (max-width: 1180px){
          .mxds-hero{
            grid-template-columns: 1fr;
            gap: 24px;
            min-height: auto;
            text-align: center;
            padding-top: 18px;
          }

          .mxds-heroContent{
            text-align: center;
            max-width: 100%;
          }

          .mxds-heroLead{
            margin-left: auto;
            margin-right: auto;
          }

          .mxds-chips,
          .mxds-heroActions{
            justify-content: center;
          }

          .mxds-grid{
            grid-template-columns: 1fr;
          }

          .mxds-gridFull{
            grid-column: auto;
          }
        }

@media (max-width: 900px){
  .mxds-shell{
    width: min(calc(100% - 20px), var(--mxds-max));
    padding-top: 18px;
  }

          .mxds-hero{
            gap: 18px;
            padding-left: 0;
            padding-right: 0;
          }

          .mxds-grid{
            padding-left: 0;
            padding-right: 0;
            gap: 18px;
          }

          .mxds-heroVisualStage{
            min-height: 280px;
            width: 100%;
          }

          .mxds-portraitWrap{
            width: 230px;
            height: 230px;
          }

          .mxds-portraitFrame{
            width: 186px;
            height: 186px;
          }

          .mxds-portraitBadge{
            right: 4px;
            bottom: 22px;
          }

          .mxds-title{
            font-size: clamp(2.5rem, 11vw, 3.8rem);
          }

          .mxds-subtitle{
            min-height: 42px;
            font-size: clamp(1.15rem, 5.5vw, 1.55rem);
          }

          .mxds-heroLead{
            font-size: .98rem;
            line-height: 1.78;
          }

          .mxds-stats,
          .mxds-skillGrid{
            grid-template-columns: 1fr;
          }

          .mxds-card{
            padding: 20px 16px 16px;
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
          <div className="mxds-heroVisual">
            <div className="mxds-heroVisualStage">
              <div className="mxds-portraitWrap mxds-reveal" aria-hidden="true" style={{ animationDelay: "100ms" }}>
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
            </div>
          </div>

          <div className="mxds-heroContent">
            <h1 className="mxds-title mxds-reveal" style={{ animationDelay: "180ms" }}>
              <span className="mxds-titleAccent">Mxds Kuzma</span>
            </h1>

            <div className="mxds-subtitle mxds-reveal" style={{ animationDelay: "260ms" }}>
              <span className="mxds-type">FiveM Developer</span>
            </div>

            <p className="mxds-heroLead mxds-reveal" style={{ animationDelay: "340ms" }}>
              Building polished FiveM experiences with clean architecture, reliable performance, and custom systems
              made to scale for serious roleplay communities.
            </p>

            <div className="mxds-chips">
              <span className="mxds-chip" style={{ animationDelay: "430ms" }}>
                Lua Scripting
              </span>
              <span className="mxds-chip" style={{ animationDelay: "500ms" }}>
                Custom Script
              </span>
              <span className="mxds-chip" style={{ animationDelay: "570ms" }}>
                Server Management
              </span>
            </div>

            <div className="mxds-heroActions mxds-reveal" style={{ animationDelay: "650ms" }}>
              <Link className="mxds-primaryBtn" href="/servers">
                View My Servers
              </Link>
            </div>
          </div>
        </section>

        <div className="mxds-grid">
          <section className="mxds-card" style={{ animationDelay: "720ms" }}>
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

          <section className="mxds-card" style={{ animationDelay: "820ms" }}>
            <h3 className="mxds-cardTitle">Highlights</h3>

            <p className="mxds-cardText">
              I specialize in framework-based server development, performance-first scripting, and roleplay systems
              built for long-term maintenance. My workflow focuses on reliability, scalability, and polished player
              experience.
            </p>

            <div className="mxds-stats" style={{ marginTop: 22 }}>
              <div className="mxds-stat">
                <p className="mxds-statTop">ESX</p>
                <p className="mxds-statBottom">Advanced Framework Work</p>
              </div>

              <div className="mxds-stat">
                <p className="mxds-statTop">QBCore</p>
                <p className="mxds-statBottom">Modern Roleplay Systems</p>
              </div>

              <div className="mxds-stat">
                <p className="mxds-statTop">Qbox</p>
                <p className="mxds-statBottom">Optimized Custom Setups</p>
              </div>
            </div>
          </section>

          <section className="mxds-card mxds-gridFull" style={{ animationDelay: "920ms" }}>
            <h3 className="mxds-cardTitle">Technical Skills</h3>

            <div className="mxds-skillGrid">
              <div className="mxds-skillCol">
                <Skill name="Lua Scripting" pct={95} delayMs={1030} />
                <Skill name="ESX" pct={95} delayMs={1110} />
                <Skill name="QBCore" pct={90} delayMs={1190} />
                <Skill name="Qbox" pct={80} delayMs={1270} />
              </div>

              <div className="mxds-skillCol">
                <Skill name="Custom Script" pct={97} delayMs={1030} />
                <Skill name="Server Management" pct={95} delayMs={1110} />
                <Skill name="Optimization & Debugging" pct={92} delayMs={1190} />
                <Skill name="UI/UX Integration" pct={88} delayMs={1270} />
              </div>
            </div>
          </section>
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