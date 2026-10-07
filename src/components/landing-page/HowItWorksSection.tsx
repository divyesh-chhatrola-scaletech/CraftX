import { LANDING_CONTENT } from "@/content/translation";
import { Lang } from "@/shared/interface";
import {
  BrainCircuit,
  Calendar,
  Camera,
  FileText,
  MessageSquare,
  Receipt,
} from "lucide-react";
import React from "react";

interface Props {
  lang: Lang;
}

export const HowItWorksSection: React.FC<Props> = ({ lang }) => {
  const content = LANDING_CONTENT[lang].howItWorks;

  const icons = [
    <MessageSquare
      key="message"
      className="w-6 h-6"
    />,
    <BrainCircuit
      key="brain"
      className="w-6 h-6"
    />,
    <FileText
      key="file"
      className="w-6 h-6"
    />,
    <Calendar
      key="calendar"
      className="w-6 h-6"
    />,
    <Camera
      key="camera"
      className="w-6 h-6"
    />,
    <Receipt
      key="receipt"
      className="w-6 h-6"
    />,
  ];

  return (
    <section className="py-24 relative bg-background-agentic">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            {content.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {content.steps.map((step, idx) => (
            <div
              key={idx}
              className="relative group"
            >
              <div className="h-full glass-card p-8 rounded-2xl border-border-agentic hover:border-accent-teal/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,224,255,0.15)] bg-gradient-to-b from-surface-agentic to-transparent overflow-hidden">
                {/* Subtle number background */}
                <div className="absolute -top-4 -right-4 text-9xl font-black text-foreground/[0.03] pointer-events-none group-hover:text-accent-teal/[0.05] transition-colors">
                  {idx + 1}
                </div>

                <div className="relative z-10 flex flex-col items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-teal/20 to-accent-purple/20 flex items-center justify-center border border-accent-teal/30 shadow-inner group-hover:scale-110 transition-transform">
                    <div className="text-foreground">{icons[idx]}</div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                      <span className="text-accent-teal mr-2">{idx + 1}.</span>
                      {step.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
