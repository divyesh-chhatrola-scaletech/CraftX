import { GetServerSideProps, NextApiRequest } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const req = context.req as NextApiRequest;

  // Get browser language from Accept-Language header
  const acceptLanguage = req?.headers["accept-language"] || "";
  const browserLang = acceptLanguage.split(",")[0].split("-")[0].toLowerCase();

  // Determine preferred language (German for Germany, otherwise English)
  const preferredLang = browserLang === "de" ? "de" : "en";

  // Always redirect to the appropriate language route
  return {
    redirect: {
      destination: `/${preferredLang}`,
      permanent: false,
    },
  };
};

export default function IndexPage() {
  // This component will never be rendered due to the redirect
  return null;
}
