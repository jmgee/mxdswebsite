import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/mxds/TopNav";

export const metadata: Metadata = {
  metadataBase: new URL("https://mdevelopments.xyz"),
  title: "M Developments",
  description: "The Story behind my Code",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="mxds-shell">
          <TopNav />
          <main className="mxds-main">
            <div className="mxds-container">{children}</div>
          </main>

          <footer className="mxds-footer">
            © 2026 Mxds Atakashi Kuzma - FiveM Developer. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}