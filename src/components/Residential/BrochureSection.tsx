"use client"

import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface BrochureButtonProps {
  link: string
  text?: string
}

const BrochureButton = ({ link, text = "Download Brochure" }: BrochureButtonProps) => {
  return (
    <div className="mt-8">
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
      >
        <span className="text-lg font-normal border-b border-accent/30 group-hover:border-accent pb-0.2">
          {text}
        </span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  )
}

interface BrochureSectionProps {
  imageSrc: string
  title: string
  contentTitle: string
  contentDescription: string
  brochureLink?: string
  brochureText?: string
}

export default function BrochureSection({
  imageSrc,
  title,
  contentTitle,
  contentDescription,
  brochureLink,
  brochureText
}: BrochureSectionProps) {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-secondary">
      <div className="containers mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

          {/* Image Side */}
          <div
            className="w-full lg:w-1/2 imgAnimation overflow-hidden duration-500 aos-init aos-animate"
            data-aos="reveal-right"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 items-center  text-center px-4 lg:px-10">
            <h3 className='text-xl md:text-2xl font-serif text-foreground'>
              {contentTitle}
            </h3>
            <p className="md:text-base text-sm text-(--paragraph) font-serif leading-[25px]">
              {contentDescription}
            </p>

            <BrochureButton
              link={brochureLink || '#'}
              text={brochureText || 'Download Brochure'}
            />
          </div>

        </div>
      </div>
    </section>
  )
}
