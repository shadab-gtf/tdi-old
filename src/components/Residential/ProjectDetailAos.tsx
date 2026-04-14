"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectDetailAos() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    const refreshId = window.setTimeout(() => AOS.refreshHard(), 0);

    return () => window.clearTimeout(refreshId);
  }, [pathname]);

  return null;
}
