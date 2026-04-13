"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  locationQuery?: string;
}

export default function MapModal({
  isOpen,
  onClose,
  locationQuery = "Central Park Flower Valley, Sohna Rd, Gurugram",
}: MapModalProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const mapUrl = locationQuery.startsWith("http")
    ? locationQuery
    : `https://maps.google.com/maps?q=${encodeURIComponent(locationQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-9999 bg-white flex flex-col"
        >
          <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10">
            <button
              onClick={onClose}
              className="w-10 h-10 md:w-12 cursor-pointer md:h-12 bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-50 transition-all group"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-500 font-light" />
            </button>
          </div>

          <div className="flex-1 w-full h-full relative">
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src={mapUrl}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
