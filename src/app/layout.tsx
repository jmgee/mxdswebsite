import "./globals.css";
import TopNav from "@/components/mxds/TopNav";
import type { Metadata } from "next";
import Script from "next/script";
import SplashGate from "@/components/mxds/SplashGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://mdevelopments.xyz"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script id="mxds-splash-init" strategy="beforeInteractive">{`
          (function () {
            try {
              var c = document.cookie || "";
              var seen = /(^|; )mxds_splash_seen=1/.test(c);
              if (!seen) document.documentElement.classList.add("mxds-splash");
            } catch (e) {}
          })();
        `}</Script>
      </head>

      <body>
        <SplashGate iconSrc="https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/m1024.png">
          {children}
        </SplashGate>
      </body>
    </html>
  );
}