"use client";
import { LANDING_CONTENT } from "@/content/translation";
import { useTranslation } from "@/hooks/useTranslation";
import { Lang } from "@/shared/interface";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Camera, CheckCircle, MapPin, Smartphone } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

import SolutionOne from "@/assets/images/solution-section/solution-1.png";
import SolutionTwo from "@/assets/images/solution-section/solution-2.png";
import SolutionThree from "@/assets/images/solution-section/solution-3.png";

interface Props {
  lang: Lang;
}

export const SolutionSection: React.FC<Props> = ({ lang }) => {
  const { t } = useTranslation();
  const content = LANDING_CONTENT[lang].solution;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [activeStep, setActiveStep] = useState(0);

  // Pure IntersectionObserver for clean scroll architecture
  // Active for BOTH desktop and mobile to ensure same active-state logic without programmatic scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = Number(entry.target.getAttribute("data-step"));
            setActiveStep(stepIndex);
          }
        });
      },
      {
        root: null,
        // Trigger when the element crosses the middle 20% of the viewport
        rootMargin: "-40% 0px -40% 0px", 
        threshold: 0,
      }
    );

    const stages = document.querySelectorAll(".solution-stage");
    stages.forEach((stage) => observer.observe(stage));

    return () => {
      stages.forEach((stage) => observer.unobserve(stage));
      observer.disconnect();
    };
  }, []);

  const icons = [
    <Smartphone key="smartphone" className="w-5 h-5 text-[var(--orange)]" />,
    <Camera key="camera" className="w-5 h-5 text-[var(--orange)]" />,
    <MapPin key="location" className="w-5 h-5 text-[var(--orange)]" />,
    <CalendarDays key="calendar" className="w-5 h-5 text-[var(--orange)]" />,
  ];

  const photos = [SolutionOne, SolutionTwo, SolutionThree];

  const renderChatContent = (step: number) => {
    return (
      <div className="flex flex-col gap-4 absolute inset-0 p-5 overflow-hidden">
        {/* Step 0 - Greeting always visible */}
        <motion.div
           initial={{ opacity: 0, y: 8 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.35, ease: "easeOut" }}
           className="self-start max-w-[85%] px-4 py-3 bg-white/[0.06] border border-white/[0.08] rounded-2xl rounded-tl-sm text-xs text-[var(--fg-dark-muted)] leading-relaxed shadow-sm"
        >
          {t("solution.mockup.greeting")}
        </motion.div>

        <AnimatePresence>
          {step >= 1 && (
            <motion.div
               key="selected"
               initial={{ opacity: 0, y: 8 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -8 }}
               transition={{ duration: 0.35, ease: "easeOut" }}
               className="self-end max-w-[80%] px-4 py-3 bg-[var(--orange)]/15 border border-[var(--orange)]/25 rounded-2xl rounded-tr-sm text-xs text-[var(--fg-dark)] font-medium shadow-sm"
            >
              {t("solution.mockup.selected")}
            </motion.div>
          )}
          {step >= 1 && (
            <motion.div
               key="photoRequest"
               initial={{ opacity: 0, y: 8 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -8 }}
               transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
               className="self-start max-w-[85%] px-4 py-3 bg-white/[0.06] border border-white/[0.08] rounded-2xl rounded-tl-sm text-xs text-[var(--fg-dark-muted)] leading-relaxed shadow-sm"
            >
              {t("solution.mockup.photoRequest")}
            </motion.div>
          )}

          {step >= 2 && (
            <motion.div
               key="photos"
               initial={{ opacity: 0, y: 8 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -8 }}
               transition={{ duration: 0.35, ease: "easeOut" }}
               className="self-end w-full max-w-[90%] rounded-xl"
            >
              <div className="flex gap-2.5 justify-end">
                {photos.map((photo, i) => (
                  <div key={i} className="relative shrink-0 w-24 h-[72px] rounded-xl overflow-hidden border border-[var(--border-orange)] shadow-sm">
                    <Image src={photo} alt={`Roofing work ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {step >= 3 && (
            <motion.div
               key="photoUploaded"
               initial={{ opacity: 0, y: 8 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -8 }}
               transition={{ duration: 0.35, ease: "easeOut" }}
               className="self-end max-w-[80%] px-4 py-3 bg-[var(--orange)]/15 border border-[var(--orange)]/25 rounded-2xl rounded-tr-sm text-xs text-[var(--fg-dark)] font-medium shadow-sm"
            >
              {t("solution.mockup.photoUploaded")}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section
      id="solution"
      ref={containerRef}
      className="bg-[#F7F5F0] relative overflow-hidden py-20 lg:py-28 px-4 lg:px-6"
    >
      <div className="container-1404 relative z-10">
        {/* We use the full container width now for consistency */}
        <div className="w-full mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative">

          {/* ── Left: Text content & Editorial Steps ── */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2.5 bg-white rounded-full px-4 h-8 border border-gray-100/60 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] mb-6 self-start">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FE850C]" />
              <span className="text-[#0C0D17] font-semibold tracking-[0.12em] text-[11px] uppercase pt-0.5">
                {content.title}
              </span>
            </div>

            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-black text-[#0C0D17] leading-[1.05] tracking-[-0.02em] mb-6 lg:max-w-[90%]">
              {content.title}
            </h2>

            <p className="text-lg md:text-xl text-gray-700 font-medium leading-[1.4] tracking-tight mb-8 lg:mb-16 lg:max-w-[90%]">
              {content.description}
            </p>

            {/* Steps Progression - Four identical equal-height zones */}
            <div 
              className="flex flex-col w-full grid auto-rows-fr"
              style={{ display: "grid", gridTemplateRows: "repeat(4, 1fr)" }}
            >
              {content.points.map((point, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={idx}
                    data-step={idx}
                    className={`solution-stage flex items-center gap-4 lg:gap-6 min-h-[64px] lg:min-h-[100px] py-3 lg:py-8 transition-all duration-500 w-full ${
                      isActive ? "opacity-100 translate-x-2 lg:translate-x-4" : "opacity-40 translate-x-0"
                    }`}
                  >
                    {/* Number & Dot Block - fixed geometry so it never causes height/layout shift */}
                    <div className="relative flex flex-col items-center justify-center min-w-[50px] lg:min-w-[60px] flex-shrink-0">
                      <span className={`text-[12px] font-bold tracking-widest transition-colors ${isActive ? "text-[#FE850C]" : "text-gray-400"}`}>
                        0{idx + 1} / 04
                      </span>
                      {/* CSS-only absolute active indicator dot */}
                      <div 
                        className={`w-1.5 h-1.5 rounded-full bg-[#FE850C] absolute -bottom-3.5 transition-opacity duration-300 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`} 
                      />
                    </div>
                    
                    {/* Icon Block */}
                    <div className="flex-shrink-0 flex items-center justify-center mt-0.5">
                      {icons[idx]}
                    </div>
                    
                    {/* Text Block - Vertically centered naturally */}
                    <div className="flex-1 flex items-center">
                      <span className={`text-lg md:text-[20px] font-semibold tracking-tight leading-snug transition-colors duration-300 ${isActive ? "text-[#0C0D17]" : "text-gray-600"}`}>
                        {point}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Right: Conclusion Box & WhatsApp Phone ── */}
          <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-end mt-12 lg:mt-0">
            
            {/* Desktop Conclusion Summary - Top Right aligned with Main Title */}
            <div className="hidden lg:flex items-start gap-3 p-5 lg:p-6 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 border-l-[4px] border-l-[#FE850C] rounded-[16px] mb-12 w-full max-w-[400px] lg:mt-2">
              <CheckCircle className="w-5 h-5 text-[#FE850C] shrink-0 mt-0.5" />
              <p className="text-[#0C0D17] font-semibold text-[15px] leading-relaxed">
                {content.summary}
              </p>
            </div>

            {/* Sticky boundary respects Section 03 container */}
            <div 
              className="relative w-full max-w-[360px] lg:max-w-[400px] lg:sticky pb-10 lg:pb-0"
              style={{ top: "calc(var(--header-height, 90px) + 32px)" }}
            >
              {/* Subtle premium shadow/glow behind phone */}
              <div className="absolute inset-0 bg-[#FE850C]/10 rounded-[40px] blur-[80px] pointer-events-none" />

              {/* The Phone Container */}
              <div
                className="relative w-full overflow-hidden flex flex-col mx-auto h-[580px] lg:h-[550px]"
                style={{
                  background: "#0F111A",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "44px",
                  boxShadow: "0 25px 80px -15px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(255,255,255,0.05), inset 0 0 20px rgba(0,0,0,0.5)",
                }}
              >
                {/* Phone Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[80px] h-[6px] bg-white/10 rounded-full z-20" />

                {/* Chat Content Area */}
                <div className="relative flex-1 w-full mt-8 mb-16">
                  {renderChatContent(activeStep)}
                </div>

                {/* Input Bar */}
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-8 pt-4 bg-[#0F111A]/90 backdrop-blur-md border-t border-white/[0.04]">
                  <div className="h-10 w-full bg-white/[0.04] rounded-full flex items-center px-4 text-[13px] font-medium text-white/30">
                    {t("solution.mockup.placeholder")}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Mobile Conclusion Summary - Bottom */}
          <div className="flex lg:hidden items-start gap-3 p-5 bg-white shadow-sm border border-gray-100 border-l-[4px] border-l-[#FE850C] rounded-[16px] mt-8 w-full max-w-[360px] mx-auto">
            <CheckCircle className="w-5 h-5 text-[#FE850C] shrink-0 mt-0.5" />
            <p className="text-[#0C0D17] font-semibold text-[15px] leading-relaxed">
              {content.summary}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
