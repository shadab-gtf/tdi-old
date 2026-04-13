"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

interface NotFoundPageProps {
  title?: string;
  message?: string;
  type?: "global" | "projects" | "blogs";
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({
  title = "Page Not Found",
  message = "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
  type = "global"
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current!.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9, rotate: -2 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1.5,
          ease: "power3.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-[#F8FBFF]"
    >
      <div
        ref={contentRef}
        className="w-full max-w-2xl text-center"
      >
        <span className="text-[var(--color-accent)] font-medium tracking-widest uppercase mb-4 block">
          Error 404
        </span>

        <h1 className="text-4xl md:text-6xl font-serif text-[var(--color-primary)] mb-6">
          {title}
        </h1>

        <p className="text-lg text-[var(--color-paragraph)] mb-10">
          {message}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-accent)] transition-colors duration-300 text-center"
          >
            Go to Homepage
          </Link>

          {type === "projects" && (
            <Link
              href="/projects"
              className="px-8 py-4 border border-[var(--color-primary)] text-[var(--color-primary)] font-medium hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 text-center"
            >
              Browse Projects
            </Link>
          )}

          {type === "blogs" && (
            <Link
              href="/blogs"
              className="px-8 py-4 border border-[var(--color-primary)] text-[var(--color-primary)] font-medium hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 text-center"
            >
              Read Blogs
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
