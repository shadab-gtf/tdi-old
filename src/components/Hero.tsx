"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/* ✅ Strict Union Types */
type ImageMedia = {
  type: "image";
  desktopFile: string;
  mobileFile?: string;
  alt?: string;
};

type VideoMedia = {
  type: "video";
  desktopFile: string;
  mobileFile?: string;
  poster?: string;
};

type HeroMediaProps = (ImageMedia | VideoMedia) & {
  overlay?: boolean;
};

const HeroMedia: React.FC<HeroMediaProps> = (props) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  /* ✅ GSAP Safe */
  useGSAP(
    () => {
      if (!mediaRef.current) return;

      gsap.fromTo(
        mediaRef.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.5,
          ease: "power4.inOut",
        }
      );
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      <div ref={mediaRef} className="absolute inset-0 w-full h-full">
        
        {/* ✅ IMAGE */}
        {props.type === "image" && (
          <>
            <Image
              src={props.desktopFile}
              alt={props.alt || "Hero Image"}
              fill
              priority
              sizes="100vw"
              className="hidden md:block object-cover"
            />
            <Image
              src={props.mobileFile || props.desktopFile}
              alt={props.alt || "Hero Image Mobile"}
              fill
              priority
              sizes="100vw"
              className="block md:hidden object-cover"
            />
          </>
        )}

        {/* ✅ VIDEO */}
        {props.type === "video" && (
          <>
            <video
              src={props.desktopFile}
              poster={props.poster}
              autoPlay
              muted
              loop
              playsInline
              className="hidden md:block w-full h-full object-cover"
            />
            <video
              src={props.mobileFile || props.desktopFile}
              poster={props.poster}
              autoPlay
              muted
              loop
              playsInline
              className="block md:hidden w-full h-full object-cover"
            />
          </>
        )}

        {/* ✅ Optional Overlay */}
        {props.overlay && (
          <div className="absolute inset-0 bg-black/40 z-10" />
        )}
      </div>
    </section>
  );
};

export default HeroMedia;