"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export interface ExperienceCard {
  title: string
  description: string
  imageSrc: string
  subtitle?: string
  link: string
  stats: {
    imageSrc: string
    text: string
  }[]
}

interface ResidentialExperienceProps {
  sectionTitle: string
  title?: string
  subtitle?: string
  experiences: ExperienceCard[]
}



export default function ResidentialExperience({ sectionTitle, experiences }: ResidentialExperienceProps) {
  return (
    <section className="w-full bg-white px-4 md:px-0 md:py-20 py-10 overflow-hidden">
      <div className="containers mx-auto px-4 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xl md:text-2xl font-serif text-foreground">
            {sectionTitle}
          </h2>
        </motion.div>

        <div className="flex flex-col gap-16">
          {experiences.map((exp, index) => {
            const isReverse = index % 2 !== 0
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
              >

                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative h-[350px] lg:h-[450px] group overflow-hidden ">
                  <Image
                    src={exp.imageSrc}
                    alt={exp.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* Text Side */}
                <div className={`w-full lg:w-1/2 flex flex-col gap-6 justify-center ${isReverse ? 'lg:items-center lg:text-center text-center items-center' : 'items-center text-center'}`}>
                  <h3 className="text-xl md:text-2xl font-serif text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-700">
                    {exp.subtitle}
                  </p>
                  <p className="md:text-base text-sm text-(--paragraph) font-serif leading-[25px]">
                    {exp.description}
                  </p>

                  <div className={`flex flex-wrap justify-center font-serif text-sm gap-6 mb-10 text-[#b79659] ${isReverse ? 'lg:justify-start' : 'justify-center'}`}>
                    {exp.stats.map((stat, i) => {
                      return (
                        <div key={i} className="flex items-center gap-2">
                          <Image src={stat.imageSrc} alt={stat.text} width={16} height={16} className="object-contain" />
                          <span className="uppercase tracking-widest text-xs text-gray-700">{stat.text}</span>
                          {i !== exp.stats.length - 1 && (
                            <div className="w-px h-4 bg-gray-300 ml-4 hidden sm:block" />
                          )}
                        </div>
                      )
                    })}
                  </div>

                  <Link href={exp.link} className="group inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
                    <span className="text-lg font-normal border-b border-accent/30 group-hover:border-accent pb-0.2">
                      View Detail Page
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
