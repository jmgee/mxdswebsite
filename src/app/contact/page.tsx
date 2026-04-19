import type { Metadata } from "next";
import { ContactView } from "./ContactView";

export const metadata: Metadata = {
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactView />;
}