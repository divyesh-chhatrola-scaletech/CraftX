"use client";
import ImageCall from "@/assets/images/problem_1_call_1789382987263.jpg";
import ImageAddress from "@/assets/images/problem_2_address_1789383001044.jpg";
import ImageQuote from "@/assets/images/problem_3_quote_1789383017488.jpg";
import ImageWhatsApp from "@/assets/images/problem_4_whatsapp_1789383046139.jpg";
import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";
import { Camera, FileText, Phone, StickyNote } from "lucide-react";
import Image from "next/image";

export const ProblemSection = () => {
  const { t } = useTranslation();

  const problems = [
    { image: ImageCall, icon: Phone, text: t("problem.points.0") as string },
    { image: ImageAddress, icon: Camera, text: t("problem.points.1") as string },
    { image: ImageQuote, icon: FileText, text: t("problem.points.2") as string },
    { image: ImageWhatsApp, icon: StickyNote, text: t("problem.points.3") as string },
  ];

  return (
    <section
      id="problem"
      className="bg-[#F7F5F0] overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-32 px-4 lg:px-6"
    >
      <div className="container-1404">
        
        {/* ── EDITORIAL INTRO ROW ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-12 mb-16 lg:mb-20">
          
          {/* Left Column: Eyebrow, Title, Description */}
          <div className="w-full lg:max-w-[45%]">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-flex items-center gap-2.5 bg-white rounded-full px-4 py-1.5 border border-gray-100/60 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#FE850C]" />
              <span className="text-[#0C0D17] font-semibold tracking-[0.12em] text-[11px] uppercase pt-0.5">
                {t("problem.title")}
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-black text-[#0C0D17] leading-[1.05] tracking-[-0.03em] mb-6"
            >
              {t("problem.headline")}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-700 font-medium leading-[1.4] tracking-tight"
            >
              {t("problem.description")}
            </motion.p>
          </div>

          {/* Right Column: Conclusion Callout */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full lg:max-w-[40%] bg-white rounded-[24px] border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] p-6 sm:p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#FE850C]" />
            <p className="text-[18px] md:text-[22px] font-medium text-[#0C0D17] leading-[1.5] tracking-[-0.01em]">
              {t("problem.conclusion")}
            </p>
          </motion.div>

        </div>

        {/* ── 4-COLUMN IMAGE-LED EDITORIAL CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 mb-4 lg:mb-8">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 + (idx * 0.1), ease: "easeOut" }}
                className="flex flex-col bg-white rounded-[24px] p-2.5 pb-6 border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] group"
              >
                <div className="w-full aspect-[4/3] rounded-[18px] overflow-hidden mb-5 relative bg-gray-100">
                  <Image
                    src={prob.image}
                    alt={`Problem ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center group-hover:scale-[1.04] group-hover:rotate-[0.5deg]"
                  />
                </div>
                
                <div className="flex flex-col items-start px-2">
                  <div className="w-8 h-8 rounded-full bg-[#FE850C]/10 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-[#FE850C]" />
                  </div>
                  <p className="text-base font-semibold text-[#0C0D17] leading-[1.4] tracking-tight pr-2">
                    {prob.text}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
};
