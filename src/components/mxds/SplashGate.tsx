"use client";

import React, { useEffect, useState } from "react";

type Props = {
  iconSrc: string;
  holdMs?: number;
  outMs?: number;
  children: React.ReactNode;
};

export default function SplashGate({ iconSrc, holdMs = 1100, outMs = 650, children }: Props) {
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");

  useEffect(() => {
    const shouldShow = document.documentElement.classList.contains("mxds-splash");

    if (!shouldShow) {
      setPhase("gone");
      return;
    }

    const t1 = window.setTimeout(() => setPhase("out"), holdMs);
    const t2 = window.setTimeout(() => {
      document.cookie = "mxds_splash_seen=1; path=/";
      document.documentElement.classList.remove("mxds-splash");
      setPhase("gone");
    }, holdMs + outMs);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [holdMs, outMs]);

  return (
    <>
      <style>{`
        /* Hidden by default (prevents showing on every load) */
        .mxds-intro{
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: grid;
          place-items: center;
          background: #0b0b0b;
          color: rgba(255,255,255,.9);
          will-change: transform, opacity;
          opacity: 0;
          pointer-events: none;
        }

        /* Only visible if the init script adds .mxds-splash to <html> */
        html.mxds-splash .mxds-intro{
          opacity: 1;
          pointer-events: auto;
        }

        .mxds-introInner{
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:14px;
        }
        .mxds-introIcon img{
          width:84px;
          height:84px;
          object-fit:contain;
          display:block;
          filter: drop-shadow(0 10px 18px rgba(0,0,0,0.25));
        }

        .mxds-dots{
          display:inline-flex;
          gap:6px;
          align-items:center;
          justify-content:center;
          height:16px;
          opacity:.85;
        }
        .mxds-dot{
          width:6px;
          height:6px;
          border-radius:999px;
          background: rgba(255,255,255,.55);
          animation: mxdsDotPulse 900ms ease-in-out infinite;
        }
        .mxds-dot:nth-child(2){ animation-delay: 140ms; }
        .mxds-dot:nth-child(3){ animation-delay: 280ms; }

        @keyframes mxdsDotPulse{
          0%,100%{ transform: translateY(0); opacity:.45; }
          50%{ transform: translateY(-3px); opacity:.95; }
        }

        .mxds-introOut{
          animation: mxdsIntroOut ${outMs}ms cubic-bezier(.2,.8,.2,1) forwards;
        }
        @keyframes mxdsIntroOut{
          to{ transform: translateY(-110%); opacity:0; }
        }

        @media (prefers-reduced-motion: reduce){
          .mxds-introOut{ animation:none !important; }
          .mxds-dot{ animation:none !important; }
        }
      `}</style>

      {phase !== "gone" && (
        <div className={`mxds-intro ${phase === "out" ? "mxds-introOut" : ""}`}>
          <div className="mxds-introInner">
            <div className="mxds-introIcon" aria-hidden="true">
              <img src={iconSrc} alt="" loading="eager" referrerPolicy="no-referrer" />
            </div>

            <div className="mxds-dots" aria-label="Loading" role="status">
              <span className="mxds-dot" />
              <span className="mxds-dot" />
              <span className="mxds-dot" />
            </div>
          </div>
        </div>
      )}

      {children}
    </>
  );
}