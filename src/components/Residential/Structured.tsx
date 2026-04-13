"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export interface FloorPlan {
  id: string
  name: string
  carpetArea: string
  imageSrc: string
}

interface StructuredProps {
  title?: string
  description?: string
  plans: FloorPlan[]
}

export default function Structured({
  title = "Thoughtfully Planned Township Living",
  description = "A well-structured master plan designed to balance residences, green spaces, and everyday conveniences within a connected township environment.",
  plans
}: StructuredProps) {
  const [activePlan, setActivePlan] = useState(plans[0]?.id || '')

  return (
    <section className="w-full bg-[#fcfcfc] py-20 lg:py-28 overflow-hidden border-t border-gray-100">
      <div className="containers mx-auto px-4 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#1e293b] tracking-wide mb-6">
            {title}
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-serif italic leading-relaxed">
            {description}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Plan Selector List */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setActivePlan(plan.id)}
                className={`py-5 px-6 flex flex-col text-left border-l-4 transition-all duration-300 ${activePlan === plan.id ? 'bg-white shadow-md border-[#b79659]' : 'border-transparent hover:bg-gray-50'}`}
              >
                <h4 className={`uppercase tracking-widest text-sm font-semibold mb-2 ${activePlan === plan.id ? 'text-[#b79659]' : 'text-[#1e293b]'}`}>
                  {plan.name}
                </h4>
                <p className="text-xs text-gray-400 font-serif italic">
                  Carpet Area: ~{plan.carpetArea}
                </p>
              </button>
            ))}
          </div>

          {/* Plan Image Display */}
          <div className="w-full lg:w-2/3 flex justify-center items-center bg-white p-8 md:p-12 shadow-sm border border-gray-100 min-h-[400px]">
            {plans.map((plan) => (
              plan.id === activePlan && (
                <motion.div 
                  key={plan.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full aspect-[4/3]"
                >
                  <Image 
                    src={plan.imageSrc} 
                    alt={plan.name} 
                    fill 
                    className="object-contain" // Keep aspect ratio of floor plan
                  />
                </motion.div>
              )
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
