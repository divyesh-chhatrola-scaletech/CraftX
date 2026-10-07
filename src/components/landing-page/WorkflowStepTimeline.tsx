import { useTranslation } from "@/hooks/useTranslation";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Calendar,
  ClipboardCheck,
  Database,
  FileText,
  MessageSquare,
  Receipt,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

import SolutionOne from "@/assets/images/how-it-works/workflow-1.png";
import SolutionTwo from "@/assets/images/how-it-works/workflow-2.png";
import SolutionThree from "@/assets/images/how-it-works/workflow-3.png";
import SolutionFour from "@/assets/images/how-it-works/workflow-4.png";
import SolutionFive from "@/assets/images/how-it-works/workflow-5.png";
import SolutionSix from "@/assets/images/how-it-works/workflow-6.png";

interface WorkflowStep {
  title: string;
  description: string;
}

const stepIcons = [
  <MessageSquare
    key="message"
    className="w-4 h-4 md:w-5 md:h-5"
  />,
  <Database
    key="database"
    className="w-4 h-4 md:w-5 md:h-5"
  />,
  <FileText
    key="filetext"
    className="w-4 h-4 md:w-5 md:h-5"
  />,
  <Calendar
    key="calendar"
    className="w-4 h-4 md:w-5 md:h-5"
  />,
  <ClipboardCheck
    key="clipboard"
    className="w-4 h-4 md:w-5 md:h-5"
  />,
  <Receipt
    key="receipt"
    className="w-4 h-4 md:w-5 md:h-5"
  />,
];

const stepImages = [
  SolutionOne,
  SolutionTwo,
  SolutionThree,
  SolutionFour,
  SolutionFive,
  SolutionSix,
];

export const WorkflowStepTimeline = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const steps = (t("howItWorks.steps") as WorkflowStep[]).map(
    (step, index) => ({
      ...step,
      icon: stepIcons[index],
      image: stepImages[index],
    }),
  );

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="bg-transparent overflow-hidden relative px-4 lg:px-6"
      style={{ paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}
    >
      {/* Subtle radial glow behind center column */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
        <div className="w-[600px] h-[600px] bg-[var(--orange)]/6 rounded-full blur-[140px] translate-y-1/4" />
      </div>

      <div className="container-1404 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
        >
          <span className="section-label text-center block">
            {t("howItWorks.subtitle")}
          </span>
          <h2
            className="font-bold text-[#0C0D17] mb-3 leading-tight"
            style={{ fontSize: "clamp(24px, 3.5vw, 44px)" }}
          >
            {t("howItWorks.title")}
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-normal">
            {t("howItWorks.description")}
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Line (Background Track) */}
          <div className="absolute left-[31px] md:left-1/2 top-8 bottom-8 w-px bg-[var(--border-light-strong)] md:block hidden -translate-x-1/2" />

          {/* Central Vertical Line (Animated Foreground) */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-[31px] md:left-1/2 top-8 bottom-8 w-[2px] bg-[var(--orange)] md:block hidden -translate-x-1/2 z-10"
          />

          {/* Mobile Line - hidden */}

          {/* Steps */}
          <div className="space-y-10 md:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={{
                    hidden: { opacity: 0, y: 32 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.45,
                        ease: [0.23, 1, 0.32, 1],
                        staggerChildren: 0.05,
                      },
                    },
                  }}
                  className="relative flex flex-col md:flex-row items-start mb-6 md:mb-10 last:mb-0"
                >
                  {/* Number Circle on Timeline + Horizontal Connector */}
                  <div className="absolute left-[31px] md:left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center top-7">
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, scale: 0.4, y: 16 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          transition: {
                            duration: 0.35,
                            ease: [0.23, 1, 0.32, 1],
                            delay: 0.05,
                          },
                        },
                      }}
                      className="relative w-9 h-9 rounded-full bg-white border-2 border-[#FE850C] flex items-center justify-center text-[#0C0D17] font-black text-xs shadow-md hover:bg-[#FE850C] hover:text-white transition-all duration-400"
                    >
                      {index + 1}
                      {/* Horizontal connector line from circle to card */}
                      <span
                        className={`absolute top-1/2 -translate-y-1/2 h-px w-8 bg-[var(--orange)]/40 ${
                          isEven ? "right-full mr-0.5" : "left-full ml-0.5"
                        }`}
                      />
                      {/* Small dot at the end of connector */}
                      <span
                        className={`absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--orange)]/50 ${
                          isEven
                            ? "right-full -translate-x-[30px]"
                            : "left-full translate-x-[30px]"
                        }`}
                      />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-[46%] ${
                      isEven
                        ? "md:mr-auto order-2 md:order-1"
                        : "md:ml-auto order-2"
                    }`}
                  >
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
                        visible: {
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                          transition: {
                            duration: 0.45,
                            ease: [0.23, 1, 0.32, 1],
                          },
                        },
                      }}
                      whileHover={{
                        scale: 1.01,
                        y: -4,
                        transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
                      }}
                      whileTap={{ scale: 0.99 }}
                      className="bg-white rounded-[var(--radius-card-lg)] border border-[var(--border-light)] shadow-[var(--shadow-card-light)] hover:shadow-[0_20px_60px_-15px_rgba(254,133,12,0.20)] hover:border-[var(--border-orange)] transition-all duration-500 group overflow-hidden cursor-pointer flex flex-col"
                    >
                      {/* Text Content - with padding */}
                      <div className="p-4 md:p-5 pb-0">
                        {/* Icon + Title */}
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, x: -12 },
                            visible: {
                              opacity: 1,
                              x: 0,
                              transition: { duration: 0.25, delay: 0.08 },
                            },
                          }}
                          className="flex items-center gap-3 mb-2"
                        >
                          <div className="shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-xl bg-[#FE850C]/10 text-[#FE850C] flex items-center justify-center group-hover:bg-[#FE850C] group-hover:text-white transition-all duration-400">
                            {step.icon}
                          </div>
                          <h3 className="text-base md:text-lg font-bold text-[#0C0D17] leading-snug">
                            {step.title}
                          </h3>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                          variants={{
                            hidden: { opacity: 0, y: 8 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: { duration: 0.25, delay: 0.12 },
                            },
                          }}
                          className="text-gray-600 text-sm leading-relaxed"
                        >
                          {step.description}
                        </motion.p>
                      </div>

                      {/* Image - full width, no padding */}
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 16, scale: 0.97 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { duration: 0.35, delay: 0.18 },
                          },
                        }}
                        className="relative w-full aspect-[4/3] overflow-hidden"
                      >
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        {/* Elegant hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--orange)]/18 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
