"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragragh";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
  consent: boolean;
};

interface FormModalProps {
  open: boolean;
  onClose: () => void;
}

const phoneRegex = /^(\\+?\\d{1,3}[- ]?)?(\\d{10})$/;
const emailRegex =
  /^(?=.{3,254}$)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$/;

export default function FormModal({ open, onClose }: FormModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      consent: false,
    },
    mode: "onBlur",
  });

  useEffect(() => {
    if (!open) return;
    const body = document.body;
    const html = document.documentElement;
    const y = window.scrollY;
    const prev = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
    };
    const prevHtmlOverflow = html.style.overflow;

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${y}px`;
    body.style.width = "100%";
    html.style.overflow = "hidden";

    return () => {
      body.style.overflow = prev.overflow;
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.width = prev.width;
      html.style.overflow = prevHtmlOverflow;
      window.scrollTo(0, y);
    };
  }, [open]);

  const submit = async (data: FormValues) => {
    console.log("Enquiry form", data);
    reset();
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="form-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-0 z-[120] bg-black/70 backdrop-blur-sm flex items-center justify-center px-3 sm:px-6"
          role="dialog"
          aria-modal="true"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 26, scale: 0.98, opacity: 0.92 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 18, scale: 0.98, opacity: 0.9 }}
            transition={{ duration: 0.28, ease: [0.19, 1, 0.22, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[1264px] bg-white overflow-hidden flex flex-col lg:flex-row "
          >
            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute right-4 cursor-pointer top-4 z-10 rounded-full border border-[#d6a136] text-[#d6a136] p-2 bg-white/80 hover:bg-white transition"
            >
              <X size={20} strokeWidth={2.25} />
            </button>

            <div className="relative w-full lg:w-1/2 hidden md:block min-h-[260px] lg:min-h-[520px]">
              <Image
                src="/assets/images/long.png"
                alt="Project preview"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="w-full lg:w-1/2 px-6 sm:px-10 lg:px-12 py-8 sm:py-10 space-y-6 overflow-y-auto max-h-[80vh]">
              <div className="text-center space-y-1">
                <Paragraph>Be the first to read my stories</Paragraph>
                <Heading weight="normal">
                  Get Inspired By The World Of Real Estate Projects
                </Heading>
              </div>

              <form
                className="space-y-5"
                onSubmit={handleSubmit(submit)}
                noValidate
              >
                <div className="space-y-1">
                  <input
                    type="text"
                    placeholder="Your Name"
                    {...register("name", {
                      required: "Name is required",
                      minLength: { value: 2, message: "At least 2 characters" },
                    })}
                    className="w-full font-serif border-b border-[#D3D3D3] text-sm focus:border-[#9a9898] outline-none py-2 text-[#363636] placeholder-[#363636]"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600 font-serif">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <input
                    type="tel"
                    placeholder="Your Mobile Number"
                    inputMode="tel"
                    {...register("phone", {
                      required: "Mobile number is required",
                      pattern: {
                        value: phoneRegex,
                        message:
                          "Enter a valid 10-digit number (optionally with country code)",
                      },
                    })}
                    className="w-full font-serif border-b border-[#D3D3D3] text-sm focus:border-[#9a9898] outline-none py-2 text-[#363636] placeholder-[#363636]"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-600 font-serif">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <input
                    type="email"
                    placeholder="Your email address"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: emailRegex,
                        message: "Enter a valid email",
                      },
                    })}
                    className="w-full font-serif border-b border-[#D3D3D3] text-sm focus:border-[#9a9898] outline-none py-2 text-[#363636] placeholder-[#363636]"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 font-serif">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <textarea
                    rows={3}
                    placeholder="Message"
                    {...register("message", {
                      maxLength: {
                        value: 500,
                        message: "Keep it under 500 characters",
                      },
                    })}
                    className="w-full font-serif border-b border-[#D3D3D3] text-sm focus:border-[#9a9898] outline-none py-2 text-[#363636] placeholder-[#363636]"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 font-serif">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-[2px] h-7 w-7 accent-[#d6a136] border border-[#d6a136] rounded-sm focus:ring-0 focus:outline-none"
                    {...register("consent", {
                      required: "Please authorize contact",
                    })}
                  />

                  <span className="text-[#424242] text-[10px] font-light font-serif tracking-[1px] leading-[14px]">
                    I authorize company representatives to Call, SMS, Email, or
                    WhatsApp me about its products and offers. This consent
                    overrides any registration for DNC/NDNC.
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-xs text-red-600 hidden font-serif -mt-3">
                    {errors.consent.message}
                  </p>
                )}

                <div className="flex justify-center w-full">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
      relative mt-4 inline-flex items-center justify-center
      px-10 py-3.5
      text-white font-serif text-base md:text-lg tracking-wide
      cursor-pointer
      bg-foreground
      
      transition-all duration-500 ease-out
      overflow-hidden
      
      hover:scale-[1.03]
      hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)]
      
      disabled:opacity-50 disabled:cursor-not-allowed
    "
                  >
                    {/* Glow / Gradient Overlay */}
                    <span className="absolute inset-0 bg-gradient-to-r from-[#d6a136] via-transparent to-[#d6a136] opacity-0 hover:opacity-20 transition duration-500"></span>

                    {/* Text */}
                    <span className="relative z-10">
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
