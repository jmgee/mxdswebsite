import type { Metadata } from "next";
import { ProjectsView } from "./ProjectsView";

export const metadata: Metadata = {
  title: "Projects | M Developments",
  description:
    "Selected FiveM, website, Discord bot, and software development projects by M Developments.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
