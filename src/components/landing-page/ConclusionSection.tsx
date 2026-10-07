import { LANDING_CONTENT } from "@/content/translation";
import { Lang } from "@/shared/interface";
import { motion } from "framer-motion";
import React from "react";

interface Props {
  lang: Lang;
}

export const ConclusionSection: React.FC<Props> = ({ lang }) => {
  const content = LANDING_CONTENT[lang].conclusion;

  return (
    <section className="bg-[var(--bg-offwhite)] relative overflow-clip px-4 lg:px-6" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      {/* Subtle warm wash - kept very minimal and tucked into the corner */}
      <div className="absolute top-0 right-0 w-full h-[150%] bg-[radial-gradient(circle_at_top_right,rgba(254,133,12,0.03)_0%,transparent_35%)] pointer-events-none" />

      {/* Exact max-width as existing CraftX sections */}
      <div className="container-1404 relative z-10">
        
        {/* Asymmetric Editorial Layout: Left 44% | Right 46% | Gap 10% */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-0">
          
          {/* ════════════════════════════════════════
              LEFT — EDITORIAL TYPOGRAPHY
              ════════════════════════════════════════ */}
          <div className="w-full lg:w-[44%] flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-[520px]"
            >
              {/* Small Orange Editorial Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FE850C]/20 bg-[#FE850C]/10 mb-6 w-fit">
                <span className="text-xs font-bold text-[#FE850C] tracking-[0.12em] uppercase">
                  {content.subtitle}
                </span>
              </div>

              {/* Dominant Headline with tight line-height and accent line */}
              <h2 className="text-[40px] lg:text-[60px] border-l-[3px] border-[#FE850C] pl-6 lg:pl-8 font-extrabold text-[#14161B] mb-0 leading-[1.05] tracking-tight">
                {content.title}
              </h2>
            </motion.div>
          </div>

          {/* ════════════════════════════════════════
              RIGHT — SOLID PRODUCT ARTIFACT
              ════════════════════════════════════════ */}
          <div className="w-full lg:w-[46%] flex justify-center lg:justify-end lg:-mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="relative w-full max-w-[580px] rounded-[32px] bg-[#0b141a] overflow-hidden shadow-[0_16px_40px_-12px_rgba(0,0,0,0.15)] border border-black/5"
            >
              {/* WhatsApp Header */}
              <div className="bg-[#202c33] px-6 py-4 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#FE850C]/80 to-[#FE850C] p-[2px]">
                    <div className="w-full h-full bg-[#111b21] rounded-full flex items-center justify-center border-2 border-[#111b21]">
                      <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="text-white"
                        fill="currentColor"
                      >
                        <path d="M11.95 2L1 5.9v4.06c0 6.63 4.67 12.87 10.95 14.04c6.28-1.17 10.95-7.41 10.95-14.04V5.9L11.95 2zm8.95 7.96c0 5.48-3.79 10.6-8.95 11.91c-5.16-1.31-8.95-6.43-8.95-11.91V7.12l8.95-3.15l8.95 3.15v2.84z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#e9edef] font-semibold text-lg">
                      {content.craftXAssistant}
                    </h3>
                    <p className="text-[#8696a0] text-sm flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#FE850C] animate-pulse" />
                      Online
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat Body */}
              <div className="relative p-6 sm:p-8 min-h-[400px]">
                {/* WhatsApp classic doodle pattern overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://static.whatsapp.net/rsrc.php/v3/yl/r/r_QNEWG-2X.png')] mix-blend-overlay" />

                <div className="relative z-10 flex flex-col gap-2">
                  {/* Date separator */}
                  <div className="flex justify-center mb-3">
                    <span className="bg-[#182229] border border-white/5 text-[#8696a0] text-[10px] sm:text-xs px-3 py-1 rounded-md uppercase tracking-wider font-medium">
                      {content.today}
                    </span>
                  </div>

                  {/* Chat Bubbles */}
                  {content.points.map((point: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + index * 0.1, duration: 0.4, ease: "easeOut" }}
                      className={`self-start relative bg-[#202c33] text-[#e9edef] px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl shadow-sm max-w-[95%] sm:max-w-[85%] hover:border-[#FE850C]/30 border border-transparent transition-colors group ${index === 0 ? "rounded-tl-none" : ""}`}
                    >
                      <div className="flex flex-col">
                        <span className="text-[15px] sm:text-[17px] leading-[1.4]">
                          {point}
                        </span>
                        <span className="text-[10px] text-[#8696a0] self-end mt-1 select-none">
                          11:{10 + index}
                        </span>
                      </div>
                    </motion.div>
                  ))}

                  {/* The "Summary" Outgoing message */}
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.35 + content.points.length * 0.1,
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                    className="self-end relative bg-[#005c4b] text-[#e9edef] px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl rounded-br-none shadow-sm max-w-[85%] mt-4 group hover:bg-[#006855] transition-colors"
                  >
                    <div className="flex flex-col">
                      <span className="text-[18px] sm:text-[20px] font-bold tracking-wide text-white mb-1 leading-[1.3]">
                        {content.summary}
                      </span>
                      <div className="flex items-center justify-end gap-1 text-[11px] text-white/70 mt-1">
                        <span>11:{10 + content.points.length}</span>
                        <svg
                          viewBox="0 0 16 15"
                          width="16"
                          height="15"
                          className="fill-[#53bdeb] ml-1"
                        >
                          <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path>
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
