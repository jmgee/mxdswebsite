"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BRAND_LOGO =
  "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/mdevs1024.png";

const NAV_ITEMS = [
  { href: "/profile", label: "Profile" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;

export default function TopNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <header className="mxds-nav">
      <Link href="/profile" aria-label="Go to profile" className="mxds-brand">
        <img
          src={BRAND_LOGO}
          alt="M Developments"
          className="mxds-brandLogo"
          loading="eager"
          referrerPolicy="no-referrer"
          draggable={false}
        />
      </Link>

      <nav className="mxds-navLinks" aria-label="Primary">
        {NAV_ITEMS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`mxds-navLink ${isActive(href) ? "mxds-navLinkActive" : ""}`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
