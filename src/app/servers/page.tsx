import type { Metadata } from "next";
import { ServersView } from "./ServersView";

export const metadata: Metadata = {
  alternates: {
    canonical: "/servers",
  },
};

export default function ServersPage() {
  return <ServersView />;
}