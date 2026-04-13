"use client";

import React from "react";
import { motion } from "framer-motion";
import Heading from "@/components/common/Heading";
import Paragraph from "../common/Paragragh";
import { Info } from "lucide-react";

interface AirQualityEntry {
  label: string;
  value: number;
  suffix?: string;
}

interface AirQualityProps {
  entries: AirQualityEntry[];
  title?: string;
  note?: string;
}

const MAX_AQI = 500;

/* ✅ AQI Gradient (real-world style) */
const AQI_GRADIENT =
  "linear-gradient(90deg, #22c55e 0%, #eab308 25%, #f97316 50%, #ef4444 75%, #7f1d1d 100%)";

export default function AirQuality({
  entries,
  title = "Air Quality Index",
  note = "The current AQI is based on air quality observations made over the past seven days.",
}: AirQualityProps) {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Heading
            as="h4"
            weight="normal"
            className="text-[28px] md:text-[34px] text-[#1e293b]"
          >
            {title}
          </Heading>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
          {entries.map((entry, index) => {
            const position = Math.min((entry.value / MAX_AQI) * 100, 100);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* VALUE */}
                <div className="text-[60px] md:text-[80px] font-serif text-[#1e293b] leading-none mb-8">
                  {entry.value}
                  {entry.suffix}
                </div>

                {/* BAR */}
                <div className="relative w-full max-w-[520px] group">
                  
                  {/* Gradient Bar */}
                  <div
                    className="w-full h-[6px] rounded-full"
                    style={{ background: AQI_GRADIENT }}
                  />

                  {/* Indicator */}
                  <motion.div
                    initial={{ left: "0%" }}
                    whileInView={{ left: `${position}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute top-1/2 -translate-y-[70%]"
                    style={{ transform: "translateX(-50%)" }}
                  >
                    <div className="relative">
                      {/* Triangle */}
                      <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[12px] border-l-transparent border-r-transparent border-b-black" />

                      {/* Tooltip (hover) */}
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition duration-200">
                        <div className="bg-black text-white text-xs px-3 py-1 rounded whitespace-nowrap">
                          {entry.label}: {entry.value}
                          {entry.suffix}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* LABEL */}
                <p className="mt-6 text-[18px] font-serif text-[#374151]">
                  {entry.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* NOTE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14"
        >
          <Paragraph size="xs" className="text-center text-[#475569]">
            <span className="flex items-center justify-center gap-2">
              <Info size={14} />
              {note}
            </span>
          </Paragraph>
        </motion.div>
      </div>
    </section>
  );
}