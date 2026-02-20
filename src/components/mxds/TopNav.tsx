"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const norm = (p?: string) => {
  if (!p) return "/";
  const n = p.replace(/\/+$/, "");
  return n === "" ? "/" : n;
};

export default function TopNav() {
  const pathname = usePathname();
  const path = norm(pathname);

  const isActive = (href: string) => {
    const h = norm(href);
    return path === h || (h !== "/" && path.startsWith(h + "/"));
  };

  return (
    <header className="mxds-nav">
      <Link href="/" className="mxds-brand">
        M Developments
      </Link>

      <nav className="mxds-navLinks" aria-label="Primary">
        <Link className={`mxds-navLink ${isActive("/") ? "mxds-navLinkActive" : ""}`} href="/">
          Home
        </Link>

        <Link className={`mxds-navLink ${isActive("/profile") ? "mxds-navLinkActive" : ""}`} href="/profile">
          Profile
        </Link>

        <Link className={`mxds-navLink ${isActive("/servers") ? "mxds-navLinkActive" : ""}`} href="/servers">
          Servers
        </Link>

        <Link className={`mxds-navLink ${isActive("/pricing") ? "mxds-navLinkActive" : ""}`} href="/pricing">
          Pricing
        </Link>

        <Link className={`mxds-navLink ${isActive("/contact") ? "mxds-navLinkActive" : ""}`} href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}