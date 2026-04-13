"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export interface Amenity {
  title: string
  imageSrc: string
}

interface LuxuryAmenitiesProps {
  title?: string
  description?: string
  amenities: Amenity[]
}

export default function LuxuryAmenities({
  title = "Luxury Amenities For A Life Well-Lived",
  description = "Experience a lifestyle designed around wellness and indulgence",
  amenities
}: LuxuryAmenitiesProps) {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24 max-w-3xl mx-auto"
        >
          <h2 className="text-[#3a4a7a] text-2xl md:text-[32px] font-serif mb-6 tracking-wide">
            {title}
          </h2>
          <p className="text-[#666666] text-sm md:text-base font-serif leading-relaxed">
            {description}
          </p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-y-20">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={`flex flex-col group cursor-pointer px-3 lg:px-4
                border-[#e5e7eb] 
              max-lg:nth-[2n]:border-r-0
               lg:nth-[4n]:border-r-0
                border-r`}
            >
              <div className="relative w-full aspect-297/360 mb-6 overflow-hidden">
                <Image
                  src={amenity.imageSrc}
                  alt={amenity.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 30vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>

              <h4 className="text-center uppercase text-[11px] md:text-[13px] tracking-[0.15em] font-serif text-[#3a4a7a] group-hover:text-[#d4a34d] transition-colors duration-300">
                {amenity.title}
              </h4>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}