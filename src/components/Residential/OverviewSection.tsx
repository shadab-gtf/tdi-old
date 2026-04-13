"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heading } from "lucide-react";

interface Stat {
  imageSrc: string;
  text: string;
}

interface OverviewSectionProps {
  title: string;
  stats: Stat[];
}

export default function OverviewSection({
  title,
  stats,
}: OverviewSectionProps) {
  return (
    <section className="relative w-full bg-secondary py-10 md:py-16  overflow-hidden">
      <div className="containers mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-10 md:gap-12 lg:gap-14"
        >
          <h1 className="text-center text-3xl sm:text-4xl font-serif md:text-5xl  text-foreground  leading-tight uppercase ">
            {title}
          </h1>

          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 md:gap-10 lg:gap-14">
            <div className="flex flex-wrap justify-between md:justify-center items-start md:items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 text-foreground  w-full">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Image
                    src={stat.imageSrc}
                    alt={stat.text}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                  <span className="text-sm sm:text-xl md:text-2xl font-serif text-foreground  text-start sm:text-left whitespace-pre-line">
                    {stat.text}
                  </span>
                  {i !== stats.length - 1 && (
                    <span className="hidden md:inline-block text-gray-300 text-2xl font-light mx-2">
                      |
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
