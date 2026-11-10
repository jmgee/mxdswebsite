import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/mxds/TopNav";
import SiteFooter from "@/components/mxds/SiteFooter";

const sans = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mdevelopments.xyz"),
  title: "M Developments",
  description: "The Story behind my Code",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <div className="mxds-shell">
          <TopNav />
          <main className="mxds-main">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
