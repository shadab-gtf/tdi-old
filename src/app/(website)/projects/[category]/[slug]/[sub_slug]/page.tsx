import { notFound } from "next/navigation";
import { Suspense } from "react";
import {
  getProjectByCategoryAndSlug,
  getProjectSubPage,
  getRoutableProjects,
} from "@/lib/projectsData";
import ProjectDetailSections, {
  mapSubProjectToDetailViewModel,
  ProjectDetailSkeleton,
} from "@/components/sections/ProjectDetailSections";

export function generateStaticParams() {
  return getRoutableProjects().flatMap((project) =>
    project.subProjects.map((subProject) => ({
      category: project.category,
      slug: project.slug,
      sub_slug: subProject.slug,
    })),
  );
}

export default async function SubProjectPage({
  params,
}: {
  params: Promise<{ category: string; slug: string; sub_slug: string }>;
}) {
  const { category, slug, sub_slug } = await params;
  const parentProject = getProjectByCategoryAndSlug(category, slug);
  const subProject = getProjectSubPage(category, slug, sub_slug);

  if (!parentProject || !subProject) {
    notFound();
  }

  return (
    <Suspense fallback={<ProjectDetailSkeleton />}>
      <ProjectDetailSections
        project={mapSubProjectToDetailViewModel(parentProject, subProject)}
      />
    </Suspense>
  );
}
