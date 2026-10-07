import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Fragment } from "react";

import { Lang } from "@/shared/interface";

// Import all new SaaS components
import { Footer } from "@/components/footer/Footer";
import { AICapabilities } from "@/components/landing-page/AICapabilities";
import { BenefitsSection } from "@/components/landing-page/BenefitsSection";
import { ConclusionSection } from "@/components/landing-page/ConclusionSection";
import { FinalCTASection } from "@/components/landing-page/FinalCTASection";
import { HeroSection } from "@/components/landing-page/HeroSection";
import { KillerUSPSection } from "@/components/landing-page/KillerUSPSection";
import { ProblemSection } from "@/components/landing-page/ProblemSection";
import { SolutionSection } from "@/components/landing-page/SolutionSection";
import { PricingSection } from "@/components/landing-page/PricingSection";
import { WhatsAppExampleSection } from "@/components/landing-page/WhatsAppExampleSection";
import { WorkflowStepTimeline } from "@/components/landing-page/WorkflowStepTimeline";
import { Navbar } from "@/components/navbar/Navbar";
import { ScrollToTop } from "@/components/scroll-to-top/ScrollToTop";

import { LANDING_CONTENT } from "@/content/translation";

interface PageProps {
  lang: Lang;
}

export default function LandingPage({ lang }: PageProps) {
  const content = (LANDING_CONTENT as Record<Lang, typeof LANDING_CONTENT.en>)[
    lang
  ].hero;

  // Set meta tags based on the hero title/description
  const pageTitle = `${content.titlePart1} | CraftX`;
  const pageDescription = content.description;
  const canonicalUrl = `https://craft-x.de/${lang}`;

  const metaTags = [
    { name: "description", content: pageDescription },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
  ];

  return (
    <Fragment>
      <Head>
        <title>{pageTitle}</title>
        <link
          rel="canonical"
          href={canonicalUrl}
        />
        {metaTags.map((tag, index) => (
          <meta
            key={index}
            {...tag}
          />
        ))}
      </Head>

      <main className="bg-background-agentic min-h-screen text-foreground overflow-x-hidden font-sans">
        <ScrollToTop />
        <Navbar />
        <HeroSection />
        <ProblemSection />
        <SolutionSection lang={lang} />
        <KillerUSPSection lang={lang} />
        <AICapabilities lang={lang} />
        <BenefitsSection lang={lang} />
        <WorkflowStepTimeline />
        <WhatsAppExampleSection lang={lang} />
        <ConclusionSection lang={lang} />
        <PricingSection lang={lang} />
        <FinalCTASection lang={lang} />
        <Footer />
      </main>
    </Fragment>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { lang: "en" } }, { params: { lang: "de" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const langParam = (params?.lang as string) || "en";
  const lang: Lang = langParam === "de" ? "de" : "en";
  return {
    props: { lang },
  };
};
