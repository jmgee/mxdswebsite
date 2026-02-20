import "./globals.css";
import type { Metadata } from "next";
import SplashGate from "@/components/mxds/SplashGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://mdevelopments.xyz"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SplashGate iconSrc="https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/m1024.png">
          {children}
        </SplashGate>
      </body>
    </html>
  );
}