import type { Metadata } from "next";

import { ProjectsView } from "./ProjectsView";

export const metadata: Metadata = {
  title: "Projects | M Developments",

  description:
    "A showcase of FiveM servers, websites, and Discord bot projects developed by M Developments.",

  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsView />;
}