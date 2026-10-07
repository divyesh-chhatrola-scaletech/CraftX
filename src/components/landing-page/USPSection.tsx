import { LANDING_CONTENT } from "@/content/translation";
import { Lang } from "@/shared/interface";
import { ChevronRight, Filter, Target } from "lucide-react";
import React from "react";

interface Props {
  lang: Lang;
}

export const USPSection: React.FC<Props> = ({ lang }) => {
  const content = LANDING_CONTENT[lang].usp;

  return (
    <section className="py-32 relative bg-background-agentic">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto glass-card rounded-3xl p-8 md:p-16 border-accent-purple/30 relative overflow-hidden group">
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-accent-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/20 border border-accent-purple/40 mb-6 font-semibold text-accent-purple text-xs tracking-widest uppercase">
                <Target className="w-4 h-4" />
                {content.badge}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                {content.title}
              </h2>
              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                {content.description}
              </p>
            </div>

            <div>
              <div className="space-y-4 mb-8">
                {content.points.map((point, idx) => (
                  <div
                    key={idx}
                    className="glass-card p-4 rounded-xl flex items-center justify-between border-border-agentic group/item hover:border-accent-purple/40 hover:bg-surface-agentic transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent-purple/10 flex items-center justify-center shrink-0 group-hover/item:bg-accent-purple/20 transition-colors">
                        <Filter className="w-4 h-4 text-accent-purple" />
                      </div>
                      <div>
                        <p className="text-base font-bold text-foreground/90">
                          {point.title}
                        </p>
                        <p className="text-xs font-medium text-foreground/70">
                          {point.description}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-foreground/30 group-hover/item:text-accent-purple transition-colors" />
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-accent-purple/20 to-transparent border-l-4 border-accent-purple shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                <p className="text-lg font-bold text-foreground">
                  {content.summary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
