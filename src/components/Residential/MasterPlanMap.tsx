"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface MasterPlanMapProps {
  title?: string
  description?: string
  imageSrc: string
  link?: string
  linkText?: string
}

export default function MasterPlanMap({
  title = "Thoughtfully Planned Township Living",
  description = "A well-structured master plan designed to balance residences, green spaces, and everyday conveniences within a connected township environment.",
  imageSrc,
  link = "#",
  linkText = "View Complete Township Master Plan"
}: MasterPlanMapProps) {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-xl md:text-2xl font-serif text-foreground mb-5">
            {title}
          </h2>
          <p className="md:text-base text-sm text-(--paragraph) font-serif leading-[25px]">
            {description}
          </p>
        </motion.div>

        {/* Image Container with Hover Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group cursor-pointer overflow-hidden rounded-sm shadow-sm"
        >
          <div className="aspect-[21/9] md:aspect-[2.8/1] w-full relative">
            <Image
              src={imageSrc}
              alt="Master Plan Map"
              fill
              className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              priority
            />
          </div>

          {/* Overlay Text - Visible only on hover */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 border border-white/20">
              <p className="text-white text-sm md:text-lg font-serif tracking-widest flex items-center gap-3">
                Click To Preview full Masterplan <ArrowRight className="w-5 h-5" />
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 md:mt-14 text-center"
        >
          <Link
            href={link}
            className="group inline-flex items-center gap-2 text-[#d4a34d] hover:text-[#b38a41] transition-colors"
            color="#d4a34d">
            <span className="text-sm md:text-lg font-serif border-b border-[#d4a34d]/40 group-hover:border-[#b38a41] pb-1 transition-all">
              {linkText}
            </span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}