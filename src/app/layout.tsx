import "./globals.css";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import SplashGate from "@/components/SplashGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://mdevelopments.xyz"),
  title: "M Developments",
  description: "FiveM Developer Portfolio",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const hasSeen = cookies().get("mxds_splash_seen")?.value === "1";
  const showSplash = !hasSeen;

  return (
    <html lang="en">
      <body>
        <SplashGate
          show={showSplash}
          iconSrc="https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/m1024.png"
        >
          {children}
        </SplashGate>
      </body>
    </html>
  );
}