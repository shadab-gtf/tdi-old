"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export interface ConnectionPoint {
  title: string
  time: string
  description: string
  imageSrc: string
}

interface SeamlessConnectivityProps {
  title?: string
  description?: string
  link?: string
  linkText?: string
  points: ConnectionPoint[]
}

export default function SeamlessConnectivity({
  title = "Seamless Connectivity",
  description = "Strategically located near NH-44 and major connectivity corridors including UER-II, KMP & KGP Expressways, and upcoming metro and RRTS links, Tuscan City offers fast access to Delhi while staying away from congestion.",
  link = "#",
  linkText = "EXPLORE LOCATION",
  points
}: SeamlessConnectivityProps) {
  return (
    <section className="w-full bg-[#FAFAFA] py-20 lg:py-28 overflow-hidden">
      <div className="containers mx-auto px-4 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#1e293b] tracking-wide mb-6">
            {title}
          </h2>
          <p className="text-gray-600 font-serif leading-relaxed mb-8">
            {description}
          </p>
          <Link href={link} className="group inline-flex items-center gap-2 text-[#b79659] hover:text-[#8e7444] transition-colors">
            <span className="uppercase tracking-[0.2em] text-xs font-semibold border-b border-[#b79659]/30 group-hover:border-[#8e7444] pb-1">
              {linkText}
            </span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col bg-white overflow-hidden duration-500 "
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={point.imageSrc}
                  alt={point.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="p-8 text-center flex-1 flex flex-col items-center justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[#b79659] font-serif text-sm">{(index + 1).toString().padStart(2, '0')}</span>
                  <div className="w-12 h-px bg-gray-300"></div>
                  <span className="text-gray-400 font-serif text-sm">{points.length.toString().padStart(2, '0')}</span>
                </div>
                <h4 className="text-lg font-serif text-[#1e293b] mb-2">{point.title}</h4>
                <p className="text-[#b79659] text-xs uppercase tracking-widest mb-6 font-semibold">( {point.time} )</p>
                <p className="text-gray-500 text-sm italic font-serif leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
