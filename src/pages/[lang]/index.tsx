import { GetServerSideProps, NextApiRequest } from "next";
import LandingPage from "../landing-page/[lang]";

const SUPPORTED_LANGS = ["en", "de"] as const;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { lang } = context.params as { lang?: string };
  const req = context.req as NextApiRequest;

  // Get browser language from Accept-Language header
  const acceptLanguage = req?.headers["accept-language"] || "";
  const browserLang = acceptLanguage.split(",")[0].split("-")[0].toLowerCase();

  // Determine preferred language (German for Germany, otherwise English)
  const preferredLang = browserLang === "de" ? "de" : "en";

  // If no lang parameter, redirect based on browser language
  if (!lang) {
    return {
      redirect: {
        destination: `/${preferredLang}`,
        permanent: false,
      },
    };
  }

  // If lang is not supported, redirect to preferred language
  if (!SUPPORTED_LANGS.includes(lang as (typeof SUPPORTED_LANGS)[number])) {
    return {
      redirect: {
        destination: `/${preferredLang}`,
        permanent: false,
      },
    };
  }

  return {
    props: { lang },
  };
};

export default LandingPage;
