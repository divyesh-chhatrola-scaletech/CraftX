import React, { useState } from "react";
import { Check, Layers, Users, Cloud, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useTranslation } from "@/hooks/useTranslation";
import { PrimaryCTA } from "@/components/ui/PrimaryCTA";
import { Lang } from "@/shared/interface";
import { CONTACT_LINKS } from "@/shared/constants";

interface Props {
  lang: Lang;
}

export interface FeatureDetail {
  title: string;
  description?: string;
}

export type PricingFeature = string | FeatureDetail;

interface PricingPlan {
  name: string;
  price: string;
  priceYearly?: string;
  originalPrice?: string;
  originalPriceYearly?: string;
  period: string;
  periodYearly?: string;
  savePlanTitle?: string;
  savePlanTitleYearly?: string;
  cta: string;
  popular: boolean;
  badge: string;
  features: PricingFeature[];
  footer: string;
}

interface PricingContent {
  title: string;
  description: string;
  monthly: string;
  yearly: string;
  save: string;
  promoBanner?: string;
  recommendation?: string;
  plans: PricingPlan[];
}

export const PricingSection: React.FC<Props> = ({ lang }) => {
  const { t } = useTranslation();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  const content = t("pricing") as PricingContent;

  if (!content || !content.plans) return null;

  return (
    <section id="pricing" className="bg-[var(--bg-offwhite)] relative overflow-hidden px-4 lg:px-6" style={{ paddingTop: "160px", paddingBottom: "120px" }}>
      <div className="container-1404 relative z-10">
        
        {/* ── EDITORIAL HEADER ── */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16 w-full">
          <div className="text-left flex-1 max-w-[800px]">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-[40px] md:text-[56px] lg:text-[64px] font-black mb-4 tracking-tight text-[#14161B] leading-[1.05]"
            >
              {content.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-gray-600 text-lg lg:text-xl leading-relaxed"
            >
              {content.description}
            </motion.p>
          </div>

          {/* Tab Switcher: Monthly / Yearly */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="inline-flex items-center p-1.5 rounded-full bg-white border border-gray-200 shadow-sm relative">
              {/* Monthly Tab */}
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`relative z-10 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-colors duration-300 cursor-pointer ${
                  billingCycle === "monthly" ? "text-[#14161B]" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {billingCycle === "monthly" && (
                  <motion.div
                    layoutId="active-pricing-tab"
                    className="absolute inset-0 bg-gray-100 rounded-full border border-gray-200/50"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
                <span className="relative z-10">{content.monthly || "MONTHLY"}</span>
              </button>

              {/* Yearly Tab */}
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`relative z-10 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-colors duration-300 cursor-pointer flex items-center gap-2 ${
                  billingCycle === "yearly" ? "text-[#14161B]" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {billingCycle === "yearly" && (
                  <motion.div
                    layoutId="active-pricing-tab"
                    className="absolute inset-0 bg-gray-100 rounded-full border border-gray-200/50"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
                <span className="relative z-10">{content.yearly || "YEARLY"}</span>
                <span
                  className={`relative z-10 text-[10px] sm:text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full transition-colors duration-300 ${
                    billingCycle === "yearly"
                      ? "bg-[var(--color-accent-orange)] text-white"
                      : "bg-[var(--color-accent-orange)]/10 text-[var(--color-accent-orange)] border border-[var(--color-accent-orange)]/20"
                  }`}
                >
                  {content.save || "SAVE UP TO 20%"}
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* ── PRICING PLANS ── */}
        {(() => {
          const mainPlans = content.plans.slice(0, 2);
          const addonPlan = content.plans[2] || content.plans.find((p) => p.name === "Add-ons" || p.name === "Zusatzleistungen");

          return (
            <div className="flex flex-col gap-6 lg:gap-8">
              
              {/* Top Row: Starter & Custom */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {mainPlans.map((plan, index: number) => {
                  const isHighlighted = plan.popular;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 * (index + 1), ease: "easeOut" }}
                      className={`relative rounded-[32px] transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between p-8 lg:p-10 ${
                        isHighlighted
                          ? "bg-[#0C0D17] border border-[var(--color-accent-orange)]/50 shadow-[0_16px_40px_rgba(0,0,0,0.15)] z-10"
                          : "bg-white border border-gray-200 shadow-sm"
                      }`}
                    >
                      <div>
                        {/* Top Centered Section */}
                        <div className="flex flex-col items-center text-center mb-8">
                          {/* Badge */}
                          {plan.badge ? (
                            <div className="flex justify-center mb-4">
                              <span
                                className={`inline-block px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase border ${
                                  isHighlighted
                                    ? "bg-[var(--color-accent-orange)]/10 text-[var(--color-accent-orange)] border-[var(--color-accent-orange)]/20"
                                    : "bg-gray-100 text-gray-500 border-gray-200"
                                }`}
                              >
                                {plan.badge}
                              </span>
                            </div>
                          ) : null}

                          {/* Plan Name */}
                          <div className="mb-4">
                            <h3 className={`text-2xl lg:text-3xl font-extrabold tracking-tight ${isHighlighted ? "text-white" : "text-[#14161B]"}`}>
                              {plan.name}
                            </h3>
                          </div>

                          {/* Price Area */}
                          <div className="mb-8 flex flex-col items-center">
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={plan.priceYearly ? billingCycle + index : index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="flex items-baseline justify-center gap-2.5 flex-wrap">
                                  {billingCycle === "yearly" && plan.priceYearly ? (
                                    <>
                                      <span className={`line-through text-xl lg:text-2xl font-bold ${isHighlighted ? "text-gray-500" : "text-gray-400"}`}>
                                        {plan.originalPriceYearly || plan.originalPrice || plan.price}
                                      </span>
                                      <span className={`text-5xl lg:text-[56px] font-black tracking-tight leading-none ${isHighlighted ? "text-white" : "text-[#14161B]"}`}>
                                        {plan.priceYearly}
                                      </span>
                                    </>
                                  ) : (
                                    <span className={`text-5xl lg:text-[56px] font-black tracking-tight leading-none ${isHighlighted ? "text-white" : "text-[#14161B]"}`}>
                                      {plan.price}
                                    </span>
                                  )}
                                  <span className={`font-medium text-sm lg:text-base ml-1 ${isHighlighted ? "text-gray-400" : "text-gray-500"}`}>
                                    {billingCycle === "yearly" ? plan.periodYearly || plan.period : plan.period}
                                  </span>
                                </div>
                                {plan.savePlanTitle && (
                                  <div className="mt-2">
                                    <span className="text-[var(--color-accent-orange)] font-semibold text-sm">
                                      {billingCycle === "yearly"
                                        ? plan.savePlanTitleYearly || "(20% discount included)"
                                        : plan.savePlanTitle || "(save up to 20% for yearly plan)"}
                                    </span>
                                  </div>
                                )}
                              </motion.div>
                            </AnimatePresence>
                          </div>

                          {/* CTA Button */}
                          <PrimaryCTA
                            href={CONTACT_LINKS.hubspotDemo}
                            target="_blank"
                            text={plan.cta}
                            textClassName="text-white"
                          />
                        </div>

                        {/* Visual Divider */}
                        <div className={`w-full h-px mb-8 ${isHighlighted ? "bg-white/10" : "bg-gray-200"}`} />

                        {/* Features List (2 Columns on Desktop) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-8">
                          {plan.features.map((feature, fIndex: number) => {
                            const isObject = typeof feature === "object" && feature !== null;
                            const title = isObject ? (feature as FeatureDetail).title : (feature as string);
                            const description = isObject ? (feature as FeatureDetail).description : undefined;

                            return (
                              <div key={fIndex} className="flex items-start gap-4">
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isHighlighted ? "bg-[var(--color-accent-orange)]/10" : "bg-gray-100"}`}>
                                  <Check className={`w-3 h-3 ${isHighlighted ? "text-[var(--color-accent-orange)]" : "text-[#14161B]"}`} strokeWidth={3} />
                                </div>
                                <div className="flex-1 text-left">
                                  <span className={`text-base font-semibold block leading-snug ${isHighlighted ? "text-gray-100" : "text-[#14161B]"}`}>
                                    {title}
                                  </span>
                                  {description && (
                                    <p className={`text-sm mt-1.5 leading-relaxed font-normal ${isHighlighted ? "text-gray-400" : "text-gray-500"}`}>
                                      {description}
                                    </p>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="pt-2 mt-auto">
                        <p className={`text-xs leading-relaxed ${isHighlighted ? "text-gray-500" : "text-gray-400"}`}>{plan.footer}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Row: Extend Craft-X Add-ons */}
              {addonPlan && (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                  className="w-full relative p-8 lg:p-10 rounded-[32px] bg-[#0C0D17] shadow-xl mt-8 lg:mt-12"
                >
                  <div className="relative z-10 flex flex-col">
                    
                    {/* TOP AREA: Left (Heading) + Right (Supporting Text & CTA) */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-8 lg:mb-10 items-start">
                      
                      {/* Top-Left: Badge + Heading */}
                      <div className="w-full lg:w-1/2 flex flex-col justify-start">
                        {addonPlan.badge && (
                          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-5 bg-white/5 text-gray-300 border border-white/10 w-fit">
                            <Layers className="w-3.5 h-3.5 text-[var(--color-accent-orange)]" />
                            {addonPlan.badge}
                          </span>
                        )}
                        <h3 className="text-[32px] lg:text-[40px] font-black tracking-tight text-white leading-[1.15]">
                          {addonPlan.name}
                        </h3>
                        {addonPlan.price && (
                          <span className="text-white/80 font-semibold text-lg inline-block mt-3">
                            {addonPlan.price}
                          </span>
                        )}
                      </div>

                      {/* Top-Right: Supporting Text + CTA */}
                      <div className="w-full lg:w-1/2 flex flex-col justify-start lg:pt-2">
                        <p className="text-base lg:text-lg text-gray-400 font-medium leading-relaxed mb-6">
                          {addonPlan.footer}
                        </p>
                        <PrimaryCTA
                          href={CONTACT_LINKS.hubspotDemo}
                          target="_blank"
                          text={addonPlan.cta}
                          icon={<Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />}
                        />
                      </div>
                    </div>

                    {/* BOTTOM AREA: 2 Feature Cards (Icon Left, Text Right) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                      {addonPlan.features.map((feature, fIndex: number) => {
                        const isObject = typeof feature === "object" && feature !== null;
                        const title = isObject ? (feature as FeatureDetail).title : (feature as string);
                        const description = isObject ? (feature as FeatureDetail).description : undefined;
                        const Icon = fIndex === 0 ? Users : Cloud;

                        return (
                          <div key={fIndex} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-row items-start gap-5">
                            <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-orange)]/10 flex items-center justify-center shrink-0">
                              <Icon className="w-5 h-5 text-[var(--color-accent-orange)]" />
                            </div>
                            <div className="flex flex-col">
                              <h4 className="text-white text-base lg:text-lg font-bold mb-1.5">{title}</h4>
                              {description && (
                                <p className="text-sm text-gray-400 leading-relaxed font-normal">{description}</p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                  </div>
                </motion.div>
              )}
            </div>
          );
        })()}
      </div>
    </section>
  );
};
