import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import ProjectsClient from "../ProjectsClient";
import {
  getProjectBySlug,
  getRoutableProjects,
  isProjectCategory,
  projectCategoryValues,
} from "@/lib/projectsData";
import ProjectDetailSections, {
  mapProjectToDetailViewModel,
  ProjectDetailSkeleton,
} from "@/components/sections/ProjectDetailSections";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";

export function generateStaticParams() {
  return [
    ...projectCategoryValues.map((category) => ({
      category,
    })),
    ...getRoutableProjects().map((project) => ({
      category: project.slug,
    })),
  ];
}

export async function generateMetadata(
  props: { params: Promise<{ category: string }> },
): Promise<Metadata> {
  const { category } = await props.params;
  const project = getProjectBySlug(category);

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

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (isProjectCategory(category)) {
    return <ProjectsClient initialCategory={category} />;
  }

  const project = getProjectBySlug(category);

  if (!project) {
    notFound();
  }

  return (
    <Suspense fallback={<ProjectDetailSkeleton />}>
      <ProjectDetailSections project={mapProjectToDetailViewModel(project)} />
    </Suspense>
  );
}
