import type { Metadata } from "next";
import { ContactView } from "./ContactView";

export const metadata: Metadata = {
  title: "Contact | M Developments",
  description:
    "Contact M Developments for FiveM development, custom scripts, server work, and project inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactView />;
}