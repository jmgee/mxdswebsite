"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href + "/"));

  return (
    <header className="mxds-nav">
      <div className="mxds-brand">M Developments</div>

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