"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site";

const NAV_ITEMS = [
  { href: "/profile", label: "Profile" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;

export default function TopNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href ||
    pathname?.startsWith(`${href}/`) ||
    (href === "/profile" && pathname === "/");

  return (
    <header className="mxds-nav">
      <div className="mxds-container mxds-navInner">
        <Link href="/profile" aria-label={`${SITE.name} home`} className="mxds-brand">
          <img
            src={SITE.logoUrl}
            alt={SITE.name}
            className="mxds-brandLogo"
            width={40}
            height={40}
            loading="eager"
            referrerPolicy="no-referrer"
            draggable={false}
          />
        </Link>

        <nav className="mxds-navLinks" aria-label="Primary">
          {NAV_ITEMS.map(({ href, label }) => {
            const active = isActive(href);

            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`mxds-navLink${active ? " mxds-navLinkActive" : ""}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
