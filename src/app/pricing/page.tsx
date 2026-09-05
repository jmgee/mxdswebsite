import type { Metadata } from "next";

import { PricingView } from "./PricingView";

export const metadata: Metadata = {
  title: "Pricing | M Developments",

  description:
    "Development pricing for FiveM servers, Discord bots, and websites by M Developments.",

  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return <PricingView />;
}