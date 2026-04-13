"use client"

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

export interface HighlightItem {
  imageSrc: string
  title: string
  description: string
}

interface HighlightProps {
  sectionTitle?: string
  sectionDescription?: string
  highlights: HighlightItem[]
}

// Gradient border line — horizontal
function HorizontalDivider() {
  return (
    <div
      className="w-full h-px"
      style={{
        background: 'linear-gradient(90deg, rgba(13, 77, 161, 0) 0%, rgba(13, 77, 161, 0.5) 50%, rgba(13, 77, 161, 0) 100%)',
      }}
    />
  )
}

// Gradient border line — vertical
function VerticalDivider() {
  return (
    <div
      className="hidden md:block w-px self-stretch"
      style={{
        background: 'linear-gradient(180deg, rgba(13, 77, 161, 0) 0%, rgba(13, 77, 161, 0.5) 50%, rgba(13, 77, 161, 0) 100%)',
      }}
    />
  )
}

export default function Highlight({
  sectionTitle = "Key Highlights",
  sectionDescription,
  highlights,
}: HighlightProps) {

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true })
  }, [])

  const rows: HighlightItem[][] = []
  for (let i = 0; i < highlights.length; i += 3) {
    rows.push(highlights.slice(i, i + 3))
  }

  return (
    <section className="w-full bg-secondary py-16 md:py-24 overflow-hidden">
      <div className="containers mx-auto px-4 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-xl md:text-2xl font-serif text-foreground mb-5">
            {sectionTitle}
          </h2>
          {sectionDescription && (
            <p className="md:text-base text-sm text-(--paragraph) font-serif leading-[25px]">
              {sectionDescription}
            </p>
          )}
        </motion.div>
        <div className="flex flex-col">
          {rows.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {rowIndex > 0 && <HorizontalDivider />}

              {/* Row */}
              <div className="flex flex-col md:flex-row">
                {row.map((item, colIndex) => (
                  <React.Fragment key={colIndex}>
                    {colIndex > 0 && <VerticalDivider />}

                    {/* Cell */}
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (rowIndex * 3 + colIndex) * 0.07 }}
                      data-aos="fade-up"
                      className="flex-1 flex flex-col items-center text-center px-4 py-12 md:py-14 hover:bg-white transition-colors duration-300"
                    >
                      {colIndex > 0 && (
                        <div
                          className="md:hidden w-full h-px mb-12"
                          style={{
                            background: 'linear-gradient(90deg, rgba(13, 77, 161, 0) 0%, rgba(13, 77, 161, 0.5) 50%, rgba(13, 77, 161, 0) 100%)',
                          }}
                        />
                      )}

                      <div className="mb-6 h-10 flex items-center justify-center">
                        <Image
                          src={item.imageSrc}
                          alt={item.title}
                          width={40}
                          height={40}
                          className="object-contain opacity-90"
                        />
                      </div>

                      {/* Title */}
                      <h4 className="text-sm md:text-base font-serif font-semibold text-[#c89a3c] tracking-wide mb-3 leading-snug">
                        {item.title}
                      </h4>

                      {/* Description */}
                      <p className="text-sm md:text-base text-(--paragraph) font-serif font-light leading-relaxed ">
                        {item.description}
                      </p>
                    </motion.div>

                  </React.Fragment>
                ))}
              </div>

            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  )
}