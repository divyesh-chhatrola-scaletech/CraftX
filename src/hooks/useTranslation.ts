import { useRouter } from "next/router";
import { LANDING_CONTENT } from "@/content/translation";

export const useTranslation = () => {
  const router = useRouter();
  const { lang } = router.query as { lang?: string };

  const currentLang = lang || "en";
  const content =
    LANDING_CONTENT[currentLang as keyof typeof LANDING_CONTENT] ||
    LANDING_CONTENT.en;

  const t = (key: string): any => {
    const keys = key.split(".");
    let value: any = content;

    for (const k of keys) {
      value = value?.[k];
    }

    return value !== undefined ? value : key;
  };

  return { t, lang: currentLang };
};
