"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BRAND_LOGO =
  "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/mdevs1024.png";

export default function TopNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href + "/"));

  return (
    <header className="mxds-nav">
      <Link
        href="/profile"
        aria-label="Go to profile"
        className="mxds-brand"
        style={{
          display: "inline-flex",
          alignItems: "center",
          textDecoration: "none",
          lineHeight: 0,
        }}
      >
        <img
          src={BRAND_LOGO}
          alt="M Developments"
          loading="eager"
          referrerPolicy="no-referrer"
          style={{
            display: "block",
            width: "170px",
            maxWidth: "100%",
            height: "auto",
            objectFit: "contain",
            userSelect: "none",
          }}
        />
      </Link>

      <nav className="mxds-navLinks" aria-label="Primary">
        <Link
          className={`mxds-navLink ${isActive("/profile") ? "mxds-navLinkActive" : ""}`}
          href="/profile"
        >
          Profile
        </Link>

        <Link
          className={`mxds-navLink ${isActive("/servers") ? "mxds-navLinkActive" : ""}`}
          href="/servers"
        >
          Servers
        </Link>

        <Link
          className={`mxds-navLink ${isActive("/pricing") ? "mxds-navLinkActive" : ""}`}
          href="/pricing"
        >
          Pricing
        </Link>

        <Link
          className={`mxds-navLink ${isActive("/contact") ? "mxds-navLinkActive" : ""}`}
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}