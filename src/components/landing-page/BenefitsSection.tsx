import { LANDING_CONTENT } from "@/content/translation";
import { Lang } from "@/shared/interface";
import { motion, useInView } from "framer-motion";
import {
  PhoneOff,
  BrainCircuit,
  Zap,
  Camera,
  MapPin,
  UserCircle,
  HardHat,
  Building2,
  CalendarOff,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

// ── CountUp hook ─────────────────────────────────────────────────────────────
const useCountUp = (end: number, duration = 2, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let t0: number | null = null;
    const tick = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / (duration * 1000), 1);
      setCount(Math.floor(p * end));
      if (p < 1) requestAnimationFrame(tick);
      else setCount(end);
    };
    requestAnimationFrame(tick);
  }, [end, duration, start]);
  return count;
};

// ── Animated metric value ─────────────────────────────────────────────────────
const AnimatedMetric = ({ value, inView }: { value: string; inView: boolean }) => {
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const count = useCountUp(numeric, 2, inView);
  return (
    <span
      className="text-[#FE850C] font-black tabular-nums block"
      style={{ fontSize: "clamp(40px, 4.5vw, 64px)", lineHeight: 1 }}
    >
      {count}{suffix}
    </span>
  );
};

interface Props { lang: Lang; }

export const BenefitsSection: React.FC<Props> = ({ lang }) => {
  const content = LANDING_CONTENT[lang].benefits;

  // Refs for stat count-up
  const statRef0 = useRef(null);
  const statRef1 = useRef(null);
  const statRef2 = useRef(null);
  const inView0 = useInView(statRef0, { once: true });
  const inView1 = useInView(statRef1, { once: true });
  const inView2 = useInView(statRef2, { once: true });
  const statRefs = [statRef0, statRef1, statRef2];
  const inViews  = [inView0, inView1, inView2];

  const leftIcons = [
    <Camera     key="c"  className="w-4 h-4 text-[#FE850C]" />,
    <MapPin     key="m"  className="w-4 h-4 text-[#FE850C]" />,
    <UserCircle key="u"  className="w-4 h-4 text-[#FE850C]" />,
  ];

  const availIcons = [
    <HardHat    key="h"   className="w-4 h-4 text-[#FE850C]" />,
    <Building2  key="b"   className="w-4 h-4 text-[#FE850C]" />,
    <CalendarOff key="cal" className="w-4 h-4 text-[#FE850C]" />,
  ];

  // Right panel bullet icons (White for orange background)
  const bulletIcons = [
    <PhoneOff     key="p"  className="w-5 h-5 text-white shrink-0" />,
    <BrainCircuit key="br" className="w-5 h-5 text-white shrink-0" />,
    <Zap          key="z"  className="w-5 h-5 text-white shrink-0" />,
  ];

  return (
    <section
      id="benefits"
      className="bg-[var(--bg-offwhite)] w-full relative py-20 lg:py-28 px-4 lg:px-6"
    >
      <div className="container-1404">
        
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10"
        >
          {/* LEFT: White Content Box */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-xl border border-black/5 h-full flex flex-col justify-center relative overflow-hidden">
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-black leading-[1.15] tracking-tight text-[#0C0D17] mb-12">
                {content.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {content.blocks.slice(0, 2).map((block: any, i: number) => (
                   <div key={i}>
                     <p className="text-[#FE850C] text-[12px] font-bold tracking-widest uppercase mb-6">
                       {block.title}
                     </p>
                     <ul className="flex flex-col gap-4">
                       {block.list.slice(0, 3).map((item: string, j: number) => (
                         <li key={j} className="flex items-center gap-4 text-[14px] lg:text-[15px] text-[#0C0D17]/80">
                           <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black/5 border border-black/10 flex-none">
                             {i === 0 ? leftIcons[j] : availIcons[j]}
                           </span>
                           <span className="font-medium">{item}</span>
                         </li>
                       ))}
                     </ul>
                   </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Orange 30% Box */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[var(--orange)] to-[var(--orange-end)] rounded-[32px] p-8 lg:p-12 text-white shadow-[0_20px_40px_-10px_rgba(254,133,12,0.4)] h-full flex flex-col justify-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-[72px] lg:text-[96px] font-black leading-none mb-4 tracking-tight">
                  30%
                </div>
                <p className="font-bold text-[20px] lg:text-[24px] leading-[1.3] mb-8">
                  {content.subtitle.split(" because:")[0]}
                </p>
                <ul className="flex flex-col gap-4">
                  {content.points.slice(0, 3).map((point: string, i: number) => (
                    <li key={i} className="flex items-center gap-4 text-[15px] lg:text-[16px] font-medium text-white/95">
                      <span className="flex items-center justify-center flex-none">
                        {bulletIcons[i]}
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── BOTTOM STATS ROW ── */}
        {content.stats && content.stats.length > 0 && (
          <div className="w-full mt-8">
            <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-xl border border-black/5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-black/10">
                {content.stats.map((stat: { value: string; label: string }, i: number) => (
                  <div
                    key={i}
                    ref={statRefs[i]}
                    className="flex flex-col items-center text-center gap-2 px-6"
                  >
                    <AnimatedMetric value={stat.value} inView={inViews[i]} />
                    <span className="text-[#0C0D17]/70 font-semibold text-[13px] uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
