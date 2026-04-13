"use client";

import React, { useState } from "react";
import Image from "next/image";
import Heading from "../common/Heading";
import FsLightbox from "fslightbox-react";
import Paragraph from "../common/Paragragh";

interface ProjectGalleryProps {
  title?: string;
  description?: string;
  images: string[];
}

export default function ProjectGallery({
  title,
  description,
  images,
}: ProjectGalleryProps) {
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(1);

  const openLightbox = (index: number) => {
    setSlide(index + 1);
    setToggler(!toggler);
  };
  const totalImages = images.length;
  return (
    <section className="w-full bg-white py-10 md:py-16 overflow-hidden">
      <div className="containers mx-auto px-4 lg:px-8">
        <div
          className="text-center mb-10 md:mb-16 max-w-3xl mx-auto"
          data-aos="reveal-bottom"
          data-aos-delay="60"
        >
          <Heading
            as="h2"
            weight="normal"
            className=" text-center"
          >
            {title}
          </Heading>

          <Paragraph>{description}</Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[repeat(20,minmax(0,1fr))] gap-3 md:gap-4 lg:gap-5">
          {images.map((img, index) => {
            const total = images.length;
            let spanClass = "";

            if (total === 1) {
              spanClass = "md:col-span-20";
            }
            else if (total === 2) {
              spanClass = "md:col-span-10";
            }
            else if (total === 3) {
              if (index === 0) {
                spanClass = "md:col-span-20";
              } else {
                spanClass = "md:col-span-10";
              }
            }
            else if (total === 4) {
              spanClass = "md:col-span-10";
            }
            else {
              const pattern = index % 7;
              if (pattern === 0) spanClass = "md:col-span-12";
              else if (pattern === 1) spanClass = "md:col-span-8";
              else if (pattern === 2) spanClass = "md:col-span-6";
              else if (pattern === 3) spanClass = "md:col-span-8";
              else if (pattern === 4) spanClass = "md:col-span-6";
              else if (pattern === 5) spanClass = "md:col-span-8";
              else if (pattern === 6) spanClass = "md:col-span-12";
            }

            return (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className={`relative overflow-hidden group cursor-pointer ${spanClass} h-[250px] md:h-[400px]`}
              >
                <Image
                  src={img}
                  alt={`Gallery Image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  data-aos="reveal-bottom"
                  data-aos-delay={120 + (index % 5) * 70}
                  className="object-cover transition-transform duration-1000 "
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
            );
          })}
        </div>

        <FsLightbox
          toggler={toggler}
          sources={images}
          slide={slide}
        />
      </div>
    </section>
  );
}
