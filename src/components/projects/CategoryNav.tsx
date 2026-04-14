"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { categories } from "@/lib/projectsData";
import Link from "next/link";

interface CategoryNavProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({
    activeCategory,
    onCategoryChange,
}) => {
    const navRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!navRef.current) return;
            const items = navRef.current.querySelectorAll(".nav-item");
            gsap.fromTo(
                items,
                { opacity: 0, y: -20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.08,
                    ease: "power3.out",
                }
            );
        },
        { scope: navRef }
    );

    return (
        <div
            ref={navRef}
            className="w-full flex flex-wrap items-center justify-between md:gap-4 gap-2 pt-8 pb-4"
        >
            {/* Category Tabs */}
            <div className="flex items-center gap-1 sm:gap-3 overflow-x-auto scrollbar-hide">
                {categories.map((cat) => (
                    <Link
                        key={cat.value}
                        href={cat.value === "all" ? "/projects" : `/projects/${cat.value}`}
                        onClick={() => onCategoryChange(cat.value)}
                        className={`nav-item flex items-center gap-1.5 px-3 md:px-8 py-1.5 md:py-2.5 font-serif md:text-lg text-sm font-normal tracking-wide whitespace-nowrap transition-all duration-300 cursor-pointer
                          ${activeCategory === cat.value
                                ? "bg-[var(--color-primary)] text-white"
                                : "text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
                            }`}
                    >
                        {cat.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};


export default CategoryNav;
