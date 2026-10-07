import { GetStaticPaths, GetStaticProps } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { Lang } from "@/shared/interface";
import { LANDING_CONTENT } from "@/content/translation";
import { motion } from "framer-motion";
import { BackButton, legalPageVariants } from "@/components/legal/LegalShared";

interface PageProps {
  lang: Lang;
}

export default function ImprintPage({ lang }: PageProps) {
  const content = LANDING_CONTENT[lang];
  const imprint = content.imprint;

  if (!imprint || typeof imprint === "string") return null;

  return (
    <LegalLayout title={imprint.title}>
      <BackButton />

      <motion.h1
        variants={legalPageVariants.title}
        initial="hidden"
        animate="visible"
        className="text-4xl font-bold mb-12 text-white"
      >
        {imprint.title}
      </motion.h1>

      <motion.div
        variants={legalPageVariants.container}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        {imprint.sections.map((section, index: number) => (
          <motion.section
            key={index}
            variants={legalPageVariants.item}
            className="border-b border-white/10 pb-8 last:border-0"
          >
            <h2 className="text-xl font-semibold mb-6 text-(--color-accent-orange)">
              {section.title}
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              {section.content.map((line: string, i: number) => (
                <p
                  key={i}
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              ))}
            </div>
          </motion.section>
        ))}
      </motion.div>
    </LegalLayout>
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
