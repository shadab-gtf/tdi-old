"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Heading from "../common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Paragraph from "../common/Paragragh";
import PremiumButton from "../ui/PremiumButton";
import MapModal from "../Modals/MapModal";

export interface ConnectionPoint {
  title: string;
  time: string;
  description: string;
  imageSrc: string;
}

interface SeamlessConnectivityProps {
  title?: string;
  description?: string;
  link?: string;
  linkText?: string;
  points: ConnectionPoint[];
  mapQuery?: string;
}

export default function SeamlessConnectivity({
  title,
  description,
  linkText = "EXPLORE LOCATION",
  points,
  mapQuery = "TDI City Kundli",
}: SeamlessConnectivityProps) {
  const swiperRef = useRef<SwiperType>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMapOpen, setIsMapOpen] = useState(false);

  const startScrolling = (direction: "next" | "prev") => {
    if (intervalRef.current) return;

    const scroll = () => {
      if (swiperRef.current) {
        if (direction === "next") {
          swiperRef.current.slideNext();
        } else {
          swiperRef.current.slidePrev();
        }
      }
    };

    scroll();
    intervalRef.current = setInterval(scroll, 2500);
  };

  const stopScrolling = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const isRightSide = x > rect.width / 2;
    startScrolling(isRightSide ? "next" : "prev");
  };

  useEffect(() => {
    return () => stopScrolling();
  }, []);

  return (
    <section className="w-full bg-secondary py-10 md:py-16 overflow-hidden select-none">
      <div className="containers mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-20 max-w-[1034px] mx-auto"
        >
          <Heading as="h2" className="text-center">
            {title}
          </Heading>
          <Paragraph className="leading-relaxed my-4 text-center max-w-3xl mx-auto px-4">
            {description}
          </Paragraph>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <PremiumButton onClick={() => setIsMapOpen(true)}>
              {" "}
              <span className="text-sm font-normal  group-hover:border-accent pb-0.2">
                {linkText}
              </span>
            </PremiumButton>
          </motion.div>
        </motion.div>

        <div
          ref={containerRef}
          className="relative swiper-container-wrapper"
          onMouseDown={handleMouseDown}
          onMouseUp={stopScrolling}
          onMouseLeave={stopScrolling}
        >
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            speed={1200}
            loop={true}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            breakpoints={{
              768: {
                slidesPerView: 1.2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1440: {
                slidesPerView: 2.1,
                spaceBetween: 50,
              },
            }}
            className="w-full overflow-visible! cursor-grab active:cursor-grabbing h-full!"
          >
            {points.map((point, index) => (
              <SwiperSlide key={index} className="h-auto!">
                <div className="flex flex-col md:flex-row bg-white overflow-hidden h-full group shadow-sm md:shadow-none">
                  <div className="relative w-full aspect-4/3 md:aspect-auto md:w-[45%]">
                    <Image
                      src={point.imageSrc}
                      alt={point.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                  <div className="w-full md:w-[55%] p-8 flex flex-col text-center justify-center h-auto md:min-h-[300px]">
                    <div className="flex items-center w-full justify-center gap-4 mb-8">
                      <span className="text-[#101828] font-serif text-sm">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <div className="w-16 h-px bg-gray-300"></div>
                      <span className="text-foreground  font-serif text-sm">
                        {points.length.toString().padStart(2, "0")}
                      </span>
                    </div>
                    <Heading as="h4" size="custom" weight="normal" spacing="none">
                      {point.title}
                    </Heading>
                    <Paragraph className="mb-3">
                      ( {point.time} )
                    </Paragraph>
                    <Paragraph size="sm">
                      {point.description}
                    </Paragraph>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Desktop Only Side Arrows */}
          <div className="hidden  lg:block pointer-events-none">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute -left-16 top-1/2 -translate-y-1/2 z-1 w-12 cursor-pointer h-12 flex items-center justify-center rounded-full bg-white shadow-md text-[#b79659] hover:bg-[#b79659] hover:text-white transition-all pointer-events-auto"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute -right-16 top-1/2 -translate-y-1/2 z-1 w-12 cursor-pointer h-12 flex items-center justify-center rounded-full bg-white shadow-md text-[#b79659] hover:bg-[#b79659] hover:text-white transition-all pointer-events-auto"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Combined Controls Container (Bottom) */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex lg:hidden w-10 h-10 items-center justify-center rounded-full bg-white shadow-md text-[#b79659] active:bg-[#b79659] active:text-white transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <div className="custom-pagination flex items-center justify-center gap-1.5 pointer-events-auto"></div>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="flex lg:hidden w-10 h-10 items-center justify-center rounded-full bg-white shadow-md text-[#b79659] active:bg-[#b79659] active:text-white transition-all"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <MapModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        locationQuery={mapQuery}
      />

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 0.6;
          margin: 0 !important;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 10px;
          cursor: pointer;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #b79659;
          opacity: 1;
          width: 20px;
        }
      `}</style>
    </section>
  );
}
