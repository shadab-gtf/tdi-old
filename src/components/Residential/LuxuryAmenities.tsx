"use client";

import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import FsLightbox from "fslightbox-react";
import type { ProjectAmenity } from "@/lib/projectsData";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragragh";

interface LuxuryAmenitiesProps {
  title?: string;
  description?: string;
  amenities?: ProjectAmenity[];
}

export default function LuxuryAmenities({
  title = "Exquisite Amenities for Elevated Living",
  description = "Every amenity is curated to enrich everyday moments with comfort, convenience, and calm.",
  amenities = [],
}: LuxuryAmenitiesProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [lightbox, setLightbox] = useState({ toggler: false, slide: 1 });

  const resolvedAmenities = amenities.filter(
    (amenity): amenity is ProjectAmenity => Boolean(amenity),
  );

  const marqueeItems = useMemo(
    () => (resolvedAmenities.length ? [...resolvedAmenities, ...resolvedAmenities] : []),
    [resolvedAmenities],
  );

  const lightboxSources = useMemo(
    () => resolvedAmenities.map((item) => item.imageSrc),
    [resolvedAmenities],
  );

  const handleOpenLightbox = useCallback(
    (index: number) => {
      if (!resolvedAmenities.length) return;
      setLightbox((prev) => ({
        toggler: !prev.toggler,
        slide: (index % resolvedAmenities.length) + 1,
      }));
    },
    [resolvedAmenities.length],
  );

  if (!resolvedAmenities.length) {
    return null;
  }

  return (
    <section
      className="w-full bg-secondary py-12 md:py-16 overflow-hidden"
      aria-label="Luxury amenities"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div
          className="text-center mb-10 md:mb-16 max-w-3xl mx-auto"
          data-aos="reveal-bottom"
          data-aos-delay="60"
        >
          <Heading as="h2" weight="normal">
            {title}
          </Heading>
          <Paragraph>{description}</Paragraph>
        </div>

        <div
          className="relative w-full group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex w-max gap-4  animate-marquee will-change-transform"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {marqueeItems.map((amenity, index) => (
              <AmenityCard
                key={`${amenity.title}-${index}`}
                amenity={amenity}
                onClick={() => handleOpenLightbox(index)}
              />
            ))}
          </div>
        </div>

        <FsLightbox
          toggler={lightbox.toggler}
          sources={lightboxSources}
          slide={lightbox.slide}
        />
      </div>
    </section>
  );
}

function AmenityCard({
  amenity,
  onClick,
}: {
  amenity: ProjectAmenity;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className="relative flex-shrink-0 overflow-hidden bg-white shadow-sm transition-transform duration-500 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent,#d4a34d)]"
      style={{ width: "clamp(240px, 22vw, 360px)" }}
      onClick={onClick}
      aria-label={`View ${amenity.title}`}
    >
      <div className="relative h-full w-full aspect-[3/4]">
        <Image
          src={amenity.imageSrc}
          alt={amenity.title}
          width={480}
          height={640}
          sizes="(max-width: 768px) 240px, (max-width: 1280px) 320px, 360px"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        <span className="absolute top-4 left-1/2 -translate-x-1/2 text-center text-white font-serif text-base leading-snug drop-shadow-lg">
          {amenity.title}
        </span>
      </div>
    </button>
  );
}
