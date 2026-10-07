import { LANDING_CONTENT } from "@/content/translation";
import { Lang } from "@/shared/interface";
import { motion } from "framer-motion";
import { CheckCircle, Filter, Target } from "lucide-react";
import Image from "next/image";
import React from "react";
import uspImage from "@/assets/images/usp-image.png";

interface Props {
  lang: Lang;
}

interface USPPoint {
  title: string;
  description: string;
}

export const KillerUSPSection: React.FC<Props> = ({ lang }) => {
  const content = LANDING_CONTENT[lang].usp;
  const points = content.points as USPPoint[];

  const icons = [
    <Filter key="filter" className="w-5 h-5 text-[#FE850C]" />,
    <Target key="target" className="w-5 h-5 text-[#FE850C]" />,
    <CheckCircle key="check" className="w-5 h-5 text-[#FE850C]" />,
  ];

  return (
    <section className="bg-[#F7F5F0] py-5 lg:py-6 relative overflow-hidden px-4 lg:px-6">
      <div className="container-1404">
        
        {/* Main Dark Container */}
        <div className="bg-[#0C0D17] rounded-[32px] md:rounded-[40px] p-6 md:px-8 md:pt-8 md:pb-7 lg:px-10 lg:pt-9 lg:pb-8 relative overflow-hidden">
          
          {/* Desktop/Tablet Grid for Top Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-5 lg:gap-y-6 items-start mb-7 lg:mb-8">
            
            {/* ── Left Column: Editorial Content ── */}
            <div className="flex flex-col order-1 lg:col-start-1 lg:row-start-1 z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151722] border border-white/10 mb-3 lg:mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FE850C]" />
                  <span className="text-[11px] font-bold text-white uppercase tracking-[0.15em]">
                    {content.badge}
                  </span>
                </div>

                {/* Headline */}
                <h2 className="font-bold text-white leading-[1.05] mb-3 lg:mb-4 max-w-[600px] tracking-tight text-[32px] md:text-[44px] lg:text-[54px]">
                  {content.title}
                </h2>

                {/* Supporting Paragraph */}
                <p className="text-white/70 text-[15px] md:text-[17px] lg:text-[18px] leading-[1.45] md:leading-[1.5] max-w-[500px] font-medium">
                  {content.description}
                </p>
              </motion.div>
            </div>

            {/* ── Right Column: Image (Desktop) & Center (Mobile) ── */}
            <motion.div 
              className="flex justify-center lg:justify-end items-center order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 z-10 w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative w-full max-w-[400px] lg:max-w-[420px] xl:max-w-[440px] hover:scale-[1.02] transition-transform duration-700 ease-out">
                <Image
                  src={uspImage}
                  alt="CraftX USP Illustration"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                />
              </div>
            </motion.div>

            {/* ── Left Column Bottom: Conclusion (Desktop & Mobile) ── */}
            <motion.div 
              className="flex flex-col order-3 lg:col-start-1 lg:row-start-2 z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="p-4 md:py-4 md:px-5 bg-[#151722] border border-white/[0.06] rounded-[16px] border-l-[3px] border-l-[#FE850C] flex items-center min-h-[68px] md:min-h-[72px]">
                <p className="text-white font-semibold text-base md:text-[17px] leading-snug">
                  {content.summary}
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── Bottom Area: 3 Feature Cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 z-10 relative">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex flex-row items-center gap-3 md:gap-4 p-4 lg:p-5 bg-[#151722]/50 border border-white/[0.06] rounded-[20px] hover:bg-[#151722] transition-colors duration-300 h-full min-h-[72px] md:min-h-[110px]"
              >
                <div className="flex-shrink-0 w-9 h-9 md:w-[38px] md:h-[38px] rounded-xl bg-[#1A1C28] border border-white/[0.08] flex items-center justify-center">
                  {icons[index]}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-white font-bold text-[15px] md:text-[17px] mb-0.5 tracking-tight leading-[1.35] md:leading-[1.4]">
                    {point.title}
                  </h3>
                  <p className="text-white/60 text-[13px] md:text-[14px] leading-[1.35] md:leading-[1.4] font-medium">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
