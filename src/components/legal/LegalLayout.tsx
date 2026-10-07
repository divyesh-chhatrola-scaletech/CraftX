import { ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { ScrollToTop } from "@/components/scroll-to-top/ScrollToTop";

interface LegalLayoutProps {
  children: ReactNode;
  title: string;
}

export const LegalLayout = ({ children, title }: LegalLayoutProps) => {
  return (
    <>
      <Head>
        <title>{`${title} | CraftX`}</title>
      </Head>
      <main className="bg-background-agentic min-h-screen text-foreground overflow-x-hidden font-sans">
        <ScrollToTop />
        <Navbar />
        <div className="pt-32 pb-20 container mx-auto px-6">
          <div className="max-w-4xl mx-auto">{children}</div>
        </div>
        <Footer />
      </main>
    </>
  );
};
