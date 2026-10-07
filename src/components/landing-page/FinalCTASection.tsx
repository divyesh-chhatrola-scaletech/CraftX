import { CONTACT_LINKS } from "@/shared/constants";
import { LANDING_CONTENT } from "@/content/translation";
import Image from "next/image";
import React from "react";
import { PrimaryCTA } from "@/components/ui/PrimaryCTA";
import { Lang } from "@/shared/interface";
import HowItWorkImage from "@/assets/images/how-it-work.png";

interface Props {
  lang: Lang;
}

export const FinalCTASection: React.FC<Props> = ({ lang }) => {
  const content = LANDING_CONTENT[lang].finalCTA;

  return (
    <section className="bg-[var(--bg-offwhite)] relative py-12 lg:py-20 px-4 lg:px-6">
      <div className="container-1404">
        
        {/* Main Editorial Container - Enforced Height on Desktop */}
        <div className="bg-white rounded-[32px] lg:rounded-[40px] shadow-xl border border-black/5 overflow-hidden flex flex-col lg:flex-row items-stretch lg:h-[500px]">
          
          {/* LEFT: Content & CTA (45%) */}
          <div className="w-full lg:w-[45%] p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
            {/* Upper Left Headline */}
            <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-black text-[#0C0D17] leading-[1.15] tracking-tight">
              {content.titleLine1 || "Individual presentation"} {content.titleLine2 || "by a specialist"}
            </h2>

            {/* Lower Left CTA Area */}
            <div className="pt-8 mt-10 lg:mt-auto border-t border-black/5">
              <h3 className="text-[18px] lg:text-[20px] font-bold text-[#0C0D17] mb-5">
                {content.subtitle || "Schedule an appointment now!"}
              </h3>
              <div className="inline-block">
                <PrimaryCTA
                  href={CONTACT_LINKS.hubspotDemo}
                  target="_blank"
                  text={content.button || "Book a Demo"}
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Visual (55%) */}
          <div className="w-full lg:w-[55%] border-t lg:border-t-0 lg:border-l border-black/5 relative min-h-[300px] lg:min-h-0">
            <Image
              src={HowItWorkImage}
              alt="CraftX Workflow"
              className="absolute inset-0 w-full h-full object-cover object-left"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
};


