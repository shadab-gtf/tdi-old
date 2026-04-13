"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useActiveCategory, useActiveProject } from "@/hooks/useActiveRoute";
import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  onClick?: () => void;
}

/**
 * A reusable Link component that automatically handles active states
 * for project categories and specific projects.
 */
const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className = "",
  activeClassName = "",
  inactiveClassName = "",
  onClick,
}) => {
  const pathname = usePathname();
  const segments = href.split("/").filter(Boolean);
  
  // Prepare values for hooks
  const categoryValue = segments[1] || "";
  const projectSlug = segments[2] || "";

  // Call hooks unconditionally
  const isCategoryActive = useActiveCategory(categoryValue);
  const isProjectActive = useActiveProject(projectSlug);

  // Type identification
  const isProjectsBase = segments[0] === "projects";
  const isCategoryLink = isProjectsBase && segments.length === 2;
  const isProjectLink = isProjectsBase && segments.length >= 3;

  let isActive = false;

  if (isCategoryLink) {
    isActive = isCategoryActive;
  } else if (isProjectLink) {
    isActive = isProjectActive;
  } else {
    // Default matching for other pages
    isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  const combinedClassName = `${className} ${isActive ? activeClassName : inactiveClassName}`.trim();

  return (
    <Link href={href} className={combinedClassName} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavLink;
