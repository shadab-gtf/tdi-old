"use client";

import React, { useMemo, useState } from "react";
import GlobalAnimation from "@/components/GlobalAnimation/GlobalAnimation";
import HeroMedia from "@/components/Hero";
import CategoryNav from "@/components/projects/CategoryNav";
import FilterSidebar from "@/components/projects/FilterSidebar";
import ProjectGrid from "@/components/projects/ProjectGrid";
import {
  mockProjects,
  filterProjects,
  defaultFilters,
  type FilterState,
} from "@/lib/projectsData";

export default function ProjectsClient({
  initialCategory = "all",
}: {
  initialCategory?: string;
}) {
  const [filters, setFilters] = useState<FilterState>({
    ...defaultFilters,
    category: initialCategory,
  });

  const filteredProjects = useMemo(
    () => filterProjects(mockProjects, filters),
    [filters],
  );

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleCategoryChange = (category: string) => {
    setFilters({ ...defaultFilters, category });
  };

  return (
    <main className="relative min-h-screen w-full bg-[var(--background)]">
      <GlobalAnimation />
      <HeroMedia
        type="image"
        desktopFile="/assets/images/hero.png"
        mobileFile="/assets/images/hero.png"
      />

      {/* Sticky CategoryNav */}
      <div className="sticky top-0 z-30  bg-[var(--background)]">
        <div className="containers mx-auto px-4 lg:px-8 pt-10 pb-4">
          <CategoryNav
            activeCategory={filters.category}
            onCategoryChange={handleCategoryChange}
          />
        </div>
      </div>

      {/* Projects Section */}
      <section className="w-full pb-10 md:pb-16">
        <div className="containers mx-auto px-4 lg:px-8">
          <div className="flex gap-4 mt-6 items-start">
            {/* FilterSidebar scrolls naturally */}
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
            />
            {/* ProjectGrid sticks below CategoryNav */}
            <div className="sticky top-[calc(var(--category-nav-height,80px)+1rem)] self-start flex-1">
              <ProjectGrid projects={filteredProjects} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
