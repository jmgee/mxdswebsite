import type { Metadata } from "next";
import { PricingView } from "./PricingView";

export const metadata: Metadata = {
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return <PricingView />;
}