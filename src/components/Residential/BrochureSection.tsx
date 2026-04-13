"use client";

import { useState } from "react";
import Image from "next/image";
import PremiumButton from "../ui/PremiumButton";
import FormModal from "../Modals/FormModal";

interface BrochureButtonProps {
  onClick: () => void;
  text?: string;
}

const BrochureButton = ({
  onClick,
  text = "Contact for Brochure",
}: BrochureButtonProps) => {
  return (
    <div className="">
      <PremiumButton onClick={onClick}>
        {" "}
        <span className="text-lg font-normal border-b border-accent/30 group-hover:border-accent pb-0.2">
          {text}
        </span>
      </PremiumButton>
    </div>
  );
};

interface BrochureSectionProps {
  imageSrc: string;
  title: string;
  contentTitle: string;
  contentDescription: string;
  brochureLink?: string;
  brochureText?: string;
}

export default function BrochureSection({
  imageSrc,
  title,
  contentTitle,
  contentDescription,
  brochureText,
}: BrochureSectionProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section className="relative w-full py-10 md:py-16 overflow-hidden bg-white">
        <div className="containers mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            {/* Image Side */}
            <div
              className="w-full lg:w-1/2 imgAnimation overflow-hidden duration-500 aos-init aos-animate"
              data-aos="reveal-right"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image src={imageSrc} alt={title} fill className="object-cover" />
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 items-center  text-center px-4 lg:px-10">
              <h3 className="text-xl md:text-2xl font-serif text-foreground ">
                {contentTitle}
              </h3>
              <p className="md:text-base text-sm text-(--paragraph) font-serif leading-[25px]">
                {contentDescription}
              </p>

              <BrochureButton
                onClick={() => setIsFormOpen(true)}
                text={brochureText || "Contact for Brochure"}
              />
            </div>
          </div>
        </div>
      </section>
      <FormModal open={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
