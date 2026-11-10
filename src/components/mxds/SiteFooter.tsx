import { SITE } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="mxds-footer">
      <div className="mxds-container mxds-footerInner">
        <span>
          © 2026 {SITE.owner}, {SITE.role}. All rights reserved.
        </span>
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </div>
    </footer>
  );
}
