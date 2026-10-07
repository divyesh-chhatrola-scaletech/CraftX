"use client";
import { CONTACT_LINKS } from "@/shared/constants";
import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import heroCinematic from "@/assets/images/hero-cinematic.png";
import { PrimaryCTA } from "@/components/ui/PrimaryCTA";

export const HeroSection = () => {
  const { t } = useTranslation();
  const titlePart1 = t("hero.titlePart1") as string;
  const titlePart2 = t("hero.titlePart2") as string;
  const titleHighlight = t("hero.titleHighlight") as string;
  const description = t("hero.description") as string;
  const whatsappText = t("hero.whatsappText") as string;
  const subDescription = t("hero.subDescription") as string;
  const ctaPrimary = t("hero.ctaPrimary") as string;
  const ctaHeader = t("hero.ctaHeader") as string;
  const features = t("hero.features") as string[];

  return (
    <section className="relative w-full bg-transparent pt-[90px] pb-6 px-4 lg:px-6 overflow-hidden">
      {/* ── Cinematic Hero Card ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="relative container-1404 rounded-[24px] lg:rounded-[28px] overflow-hidden min-h-[640px] lg:min-h-[700px] lg:h-[700px]"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={heroCinematic}
            alt="German roofer working at golden hour with CraftX app"
            fill
            priority
            className="object-cover object-center animate-ken-burns"
            sizes="(max-width: 640px) 100vw, (max-width: 1440px) 100vw, 1404px"
          />
          {/* Dark gradient overlay — left-heavy so text is legible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C0D17]/90 via-[#0C0D17]/70 to-[#0C0D17]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D17]/85 via-transparent to-[#0C0D17]/20" />
        </div>

        {/* Orange ambient glow — bottom left */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[var(--orange)]/15 rounded-full blur-[120px] pointer-events-none" />

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col h-full min-h-[inherit] px-6 md:px-11 pt-12 pb-10 md:py-12 lg:py-14 justify-between">
          <div className="max-w-[620px]">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="badge-orange mb-6"
            >
              CraftX Platform
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-bold leading-[1.05] tracking-tight mb-5"
              style={{ fontSize: "clamp(36px, 5vw, 68px)" }}
            >
              <span className="text-[var(--fg-dark)] block">{titlePart1}</span>
              <span className="text-[var(--fg-dark)] block">{titlePart2}</span>
              <span className="hero-gradient-text block mt-1">{titleHighlight}</span>
            </motion.h1>

            {/* Body copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base md:text-lg text-[var(--fg-dark-muted)] leading-relaxed max-w-[500px] mb-7"
            >
              {description}{" "}
              <span className="font-semibold text-[var(--orange)]">{whatsappText}</span>
            </motion.p>

            {/* Feature checklist */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-x-6 gap-y-2 mb-9"
            >
              {Array.isArray(features) && features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-[var(--fg-dark-muted)]">
                  <Check className="w-3.5 h-3.5 text-[var(--orange)] flex-shrink-0" />
                  <span className="font-medium">{f}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <PrimaryCTA
                href={CONTACT_LINKS.hubspotDemo}
                target="_blank"
                text={ctaPrimary || ctaHeader}
              />
            </motion.div>
          </div>

          {/* ── Stats Strip — bottom of card ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px mt-8 sm:mt-10 lg:mt-auto bg-white/[0.06] rounded-2xl overflow-hidden"
          >
            {[
              { stat: "30%", label: "Less office work" },
              { stat: "2×", label: "Faster response time" },
              { stat: "100%", label: "Complete job requests" },
              { stat: "24/7", label: "Digital availability" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center sm:items-start px-5 py-4 bg-[#0C0D17]/60 backdrop-blur-sm"
              >
                <span className="text-2xl sm:text-3xl font-bold text-[var(--orange)] leading-tight">
                  {item.stat}
                </span>
                <span className="text-xs text-[var(--fg-dark-muted)] mt-0.5 font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
