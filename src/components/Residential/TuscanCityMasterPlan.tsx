"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import MasterPlanMap from "./MasterPlanMap";

interface TuscanCityMasterPlanProps {
  title?: string;
  description?: string;
  imageSrc: string;
}

const TuscanCityMasterPlan = ({
  title,
  description,
  imageSrc,
}: TuscanCityMasterPlanProps) => {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, close]);

  return (
    <>
      <MasterPlanMap
        title={title}
        description={description}
        imageSrc={imageSrc}
        linkText="Click To Preview full Masterplan"
        onPreview={() => setOpen(true)}
      />

      {open && (
        <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <button
            type="button"
            onClick={close}
            aria-label="Close master plan preview"
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-7 h-7" />
          </button>

          <div className="relative w-full max-w-6xl bg-white  shadow-2xl overflow-hidden">
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.6/1]">
              <Image
                src={imageSrc}
                alt={title || "Tuscan City master plan"}
                fill
                className="object-contain"
                sizes="(min-width: 1280px) 75vw, (min-width: 768px) 85vw, 95vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TuscanCityMasterPlan;
