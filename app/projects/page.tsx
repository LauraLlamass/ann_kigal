import type { Metadata } from "next";
import ProjectsList from "@/components/projects/ProjectsList";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Explora los proyectos literarios de Ann C. Kigal y descubre la saga de fantasía Los segundos marcados.",
};

export default function ProjectsPage() {
  return <ProjectsList />;
}
