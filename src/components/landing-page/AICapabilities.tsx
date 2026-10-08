import { LANDING_CONTENT } from "@/content/translation";
import { Lang } from "@/shared/interface";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import cap01Voice from "@/assets/images/ai-capabilities/cap-01-voice.jpg";
import cap02Predictive from "@/assets/images/ai-capabilities/cap-02-predictive.jpg";
import cap03Assignment from "@/assets/images/ai-capabilities/cap-03-assignment.jpg";
import cap04Inquiry from "@/assets/images/ai-capabilities/cap-04-inquiry.jpg";
import cap05Priority from "@/assets/images/ai-capabilities/cap-05-priority.jpg";

interface Props {
  lang: Lang;
}

export const AICapabilities: React.FC<Props> = ({ lang }) => {
  const content = LANDING_CONTENT[lang].aiCapabilities;
  const capabilities = [
    { ...content.capabilities[0], image: cap01Voice },
    { ...content.capabilities[1], image: cap02Predictive },
    { ...content.capabilities[2], image: cap03Assignment },
    { ...content.capabilities[3], image: cap04Inquiry },
    { ...content.capabilities[4], image: cap05Priority },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < capabilities.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const counterLabel = `0${currentIndex + 1} / 0${capabilities.length}`;

  return (
    <section id="ai-capabilities" className="bg-[#F7F5F0] py-[70px] lg:py-[100px] flex justify-center w-full px-4 lg:px-6">
      <div
        className="
          relative container-1404
          h-[480px] sm:h-[560px] lg:h-[700px]
          rounded-[24px] lg:rounded-[32px]
          overflow-hidden
          shadow-[0_24px_60px_rgba(0,0,0,0.12)]
        "
      >
        {/* BACKGROUND PHOTO */}
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-0 bg-[#1A1A1A]"
          >
            <Image
              src={capabilities[currentIndex].image}
              alt={capabilities[currentIndex].title}
              fill
              className="object-contain object-center"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* SINGLE CINEMATIC OVERLAY — #0C0D17, no blur */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ background: "rgba(12, 13, 23, 0.60)" }}
        />

        {/* TOP-RIGHT COUNTER */}
        <div className="absolute top-8 right-8 z-20 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="text-white/90 text-[13px] lg:text-[15px] font-medium tracking-widest tabular-nums"
            >
              {counterLabel}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* TOP-LEFT FIXED CONTENT */}
        <div className="absolute top-8 left-8 right-8 lg:right-auto z-20 flex flex-col items-start pointer-events-none lg:max-w-[700px]">
          <div className="flex items-center gap-2.5 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-5 lg:mb-6 pointer-events-auto">
            <div className="w-2 h-2 rounded-full bg-[#FE850C]" />
            <span className="text-white text-[11px] lg:text-[13px] font-bold tracking-widest uppercase">
              {content.badge}
            </span>
          </div>
          <h2 className="font-bold text-white leading-[1.02] mb-3 lg:mb-4 tracking-tight text-[32px] sm:text-[40px] lg:text-[56px]">
            {content.heading}
          </h2>
          <p className="text-white/85 text-[14px] lg:text-[17px] leading-[1.55] font-medium max-w-[520px]">
            {content.description}
          </p>
        </div>

        {/* BOTTOM-LEFT DYNAMIC CONTENT */}
        <div className="absolute bottom-[64px] left-8 right-8 lg:bottom-[72px] lg:right-auto z-20 pointer-events-none lg:max-w-[560px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="pointer-events-auto"
            >
              <h3 className="text-white font-bold text-[22px] lg:text-[30px] leading-[1.08] mb-2 lg:mb-3">
                {capabilities[currentIndex].title}
              </h3>
              <p className="text-white/75 text-[13px] lg:text-[15px] leading-[1.6]">
                {capabilities[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BOTTOM NAVIGATION — arrows + full-width progress track */}
        <div
          className="absolute bottom-5 left-8 right-8 lg:bottom-6 z-20 flex items-center"
          style={{ gap: "15px" }}
        >
          <div className="flex items-center gap-2 flex-none">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-black/25 hover:bg-black/45 border border-white/25 text-white transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous capability"
            >
              <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === capabilities.length - 1}
              className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-black/25 hover:bg-black/45 border border-white/25 text-white transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next capability"
            >
              <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
          </div>
          <div className="flex-1 min-w-0 h-[2px] bg-white/20 rounded-full relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-[#FE850C] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / capabilities.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};
