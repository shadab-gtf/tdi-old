"use client";

import { usePathname } from "next/navigation";

/**
 * @param category 
 * @returns boolean 
 */
export const useActiveCategory = (category: string) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  return segments[0] === "projects" && segments[1] === category;
};

/**
  
  @param projectSlug 
  @returns 
 */
export const useActiveProject = (projectSlug: string) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  return segments[2] === projectSlug;
};
