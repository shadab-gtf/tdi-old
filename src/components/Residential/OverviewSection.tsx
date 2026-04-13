"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'


interface Stat {
  imageSrc: string
  text: string
}

interface OverviewSectionProps {
  title: string
  stats: Stat[]
}



export default function OverviewSection({
  title,
  stats, 
}: OverviewSectionProps) {
  return (
    <section className="w-full bg-white py-16 lg:py-24 overflow-hidden">
      <div className="containers mx-auto px-4 lg:px-8">

        {/* Top Title and Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-secondary md:text-5xl lg:text-6xl text-[#1e293b] mb-8 uppercase tracking-widest">
            {title}
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-[#b79659]">
            {stats.map((stat, i) => {
              return (
                <div key={i} className="flex items-center gap-3">
                  <Image src={stat.imageSrc} alt={stat.text} width={25} height={25} className="object-contain" />
                  <span className="text-xl md:text-2xl font-serif text-foreground">
                    {stat.text}
                  </span>
                  {i !== stats.length - 1 && (
                    <div className="hidden md:block w-px h-6 bg-gray-300 ml-8" />
                  )}
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>


    </section>
  )
}
