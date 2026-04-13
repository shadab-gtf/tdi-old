"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ProjectGalleryProps {
  title?: string
  description?: string
  images: string[]
}

export default function ProjectGallery({
  title = "A Glimpse Into Our World Of Excellence",
  description = "Explore our gallery to experience the perfect blend of elegance, design, and luxury living",
  images
}: ProjectGalleryProps) {
  return (
    <section className="w-full bg-white py-20 lg:py-28 overflow-hidden">
      <div className="containers mx-auto px-4 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#1e293b] tracking-wide mb-4">
            {title}
          </h2>
          <p className="text-gray-500 font-serif italic text-sm md:text-base">
            {description}
          </p>
        </motion.div>

        {/* Masonry or Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, index) => {
            // Make the first item larger for a masonry-like feel, or alternate sizes
            const isLarge = index === 0 || index === 3;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className={`relative rounded-sm overflow-hidden group shadow-sm ${isLarge ? 'md:col-span-2 lg:col-span-2 row-span-2' : ''}`}
              >
                <Image 
                  src={img} 
                  alt={`Gallery Image ${index + 1}`} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
