"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragragh'

export interface FloorPlan {
  id: string
  name: string
  carpetArea: string
  imageSrc?: string
}

interface StructuredProps {
  title?: string
  description?: string
  plans?: FloorPlan[]
  imageSrc?: string
}

export default function Structured({
  title = "Thoughtfully Planned Township Living",
  description = "A well-structured master plan designed to balance residences, green spaces, and everyday conveniences within a connected township environment.",
  plans = [],
  imageSrc
}: StructuredProps) {
  const staticMapImage = imageSrc || plans[0]?.imageSrc || "/microsite/projects/masterplan.png"

  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="containers mx-auto px-4 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 max-w-4xl mx-auto"
        >
          <Heading as="h2" >
            {title}
          </Heading>
          <Paragraph>
            {description}
          </Paragraph>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_600px] gap-12 items-center">

          {/* Static Plan Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 md:gap-y-12 py-4">
            {plans.length === 0 ? (
              <p className="text-sm md:text-base font-serif text-paragraph font-light">
                Plan details coming soon.
              </p>
            ) : (
              plans.map((plan, idx) => (
                <div
                  key={`${plan.id}-${idx}`}
                  className="flex flex-col text-center md:text-left"
                >
                  <h4 className="text-base md:text-lg font-serif text-foreground  tracking-tight mb-2">
                    {plan.name}
                  </h4>
                  <p className="text-sm md:text-base font-serif text-paragraph font-light">
                    Carpet Area: ~{plan.carpetArea}
                  </p>
                </div>
              ))
            )}
          </div>

          {/* Plan Image Display - Rotated 90 Degrees on Large Screens */}
          <div className="w-full flex justify-center items-center bg-white min-h-[300px] md:min-h-[400px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: "var(--plan-rotation, 0deg)" }}
              whileInView={{ opacity: 1, scale: 1, rotate: "var(--plan-rotation, 0deg)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-square [--plan-rotation:0deg] lg:[--plan-rotation:90deg]"
            >
              <Image
                src={staticMapImage}
                alt="Township Master Plan"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}
