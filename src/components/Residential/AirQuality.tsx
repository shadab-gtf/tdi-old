"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Wind } from 'lucide-react'

interface AirQualityProps {
  cityAqi: number
  projectAqi: number
  cityLabel?: string
  projectLabel?: string
}

export default function AirQuality({ 
  cityAqi, 
  projectAqi, 
  cityLabel = "Delhi AQI", 
  projectLabel = "Kundli City AQI" 
}: AirQualityProps) {
  return (
    <section className="w-full bg-[#fcfcfc] py-20 lg:py-24 border-b border-gray-100">
      <div className="containers mx-auto px-4 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f8f9fb] mb-6 shadow-sm">
            <Wind className="w-8 h-8 text-[#b79659]" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#1e293b] tracking-wide mb-2">
            Air Quality Index
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div className="text-5xl md:text-6xl font-serif text-[#1e293b] mb-4">
              {cityAqi}+
            </div>
            <div className="w-24 h-[2px] bg-red-800 mb-4" />
            <p className="text-sm uppercase tracking-widest font-medium text-gray-500">
              {cityLabel}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="text-5xl md:text-6xl font-serif text-[#1e293b] mb-4">
              {projectAqi}
            </div>
            <div className="w-24 h-[2px] bg-yellow-400 mb-4" />
            <p className="text-sm uppercase tracking-widest font-medium text-gray-500">
              {projectLabel}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
