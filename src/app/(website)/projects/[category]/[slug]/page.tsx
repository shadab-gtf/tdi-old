import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import {
  getProjectByCategoryAndSlug,
  getProjectBySlug,
  getProjectSubProject,
  getRoutableProjects,
  isProjectCategory,
} from "@/lib/projectsData";
import ProjectDetailSections, {
  mapProjectToDetailViewModel,
  mapSubProjectToDetailViewModel,
  ProjectDetailSkeleton,
  type ProjectDetailViewModel,
} from "@/components/sections/ProjectDetailSections";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";

function resolveProjectRoute(
  categoryOrProjectSlug: string,
  slugOrSubSlug: string,
): ProjectDetailViewModel | undefined {
  if (isProjectCategory(categoryOrProjectSlug)) {
    const project = getProjectByCategoryAndSlug(
      categoryOrProjectSlug,
      slugOrSubSlug,
    );

    return project ? mapProjectToDetailViewModel(project) : undefined;
  }

  const parentProject = getProjectBySlug(categoryOrProjectSlug);
  const subProject = getProjectSubProject(categoryOrProjectSlug, slugOrSubSlug);

  if (!parentProject || !subProject) {
    return undefined;
  }

  return mapSubProjectToDetailViewModel(parentProject, subProject);
}

export function generateStaticParams() {
  return getRoutableProjects().flatMap((project) => [
    {
      category: project.category,
      slug: project.slug,
    },
    ...project.subProjects.map((subProject) => ({
      category: project.slug,
      slug: subProject.slug,
    })),
  ]);
}

export async function generateMetadata(
  props: { params: Promise<{ category: string; slug: string }> },
): Promise<Metadata> {
  const { category, slug } = await props.params;
  const project = resolveProjectRoute(category, slug);

  if (!project) {
    return {};
  }

  const url = `${siteUrl}/projects/${project.slug}`;
  const title = `${project.title} | Projects`;
  const description =
    project.description ||
    "Discover premium residences and commercial projects in Kundli.";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: project.detail?.galleryImages?.length
        ? [{ url: project.detail.galleryImages[0], width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const project = resolveProjectRoute(category, slug);

  if (!project) {
    notFound();
  }

  return (
    <Suspense fallback={<ProjectDetailSkeleton />}>
      <ProjectDetailSections project={project} />
    </Suspense>
  );
}
