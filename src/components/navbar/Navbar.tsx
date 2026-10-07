import { CONTACT_LINKS } from "@/shared/constants";
import { useTranslation } from "@/hooks/useTranslation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PrimaryCTA } from "@/components/ui/PrimaryCTA";
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  const isLegalPage =
    router.pathname.includes("/imprint") ||
    router.pathname.includes("/privacy") ||
    router.pathname.includes("/terms");

  const navItems = [
    { id: "problem", label: t("navigation.problem") },
    { id: "solution", label: t("navigation.solution") },
    { id: "how-it-works", label: t("navigation.howItWorks") },
    { id: "about", label: t("navigation.benefits") },
    { id: "pricing", label: t("navigation.pricing") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* ── Floating Pill Navigation ── */}
      <motion.header
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
        style={{ pointerEvents: "none" }}
      >
        <nav
          className={`nav-pill flex items-center justify-between container-1404 pl-8 pr-2.5 h-[58px] lg:h-[60px] pointer-events-auto transition-all duration-400 !rounded-[30px] ${
            isScrolled ? "scrolled" : ""
          }`}
        >
          {/* Mobile: Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 text-gray-800 hover:text-[#FE850C] transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <div className="relative w-28 h-9">
              <Image
                src="/logo.svg"
                alt="CraftX Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {!isLegalPage &&
              navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleScrollToSection(e, item.id)}
                  className="text-[14.5px] font-medium text-gray-600 hover:text-[#0C0D17] transition-colors duration-200 whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
          </div>

          {/* CTA Button */}
          <PrimaryCTA
            href={CONTACT_LINKS.hubspotDemo}
            target="_blank"
            text={t("hero.ctaHeader")}
            className="hidden sm:inline-flex w-auto"
          />
        </nav>
      </motion.header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/70 z-[100] md:hidden"
              onClick={() => setIsDrawerOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 left-0 h-screen w-[300px] z-[101] md:hidden flex flex-col bg-[#F7F5F0] border-r border-gray-200"
            >
              <div className="flex flex-col h-full p-6">
                {/* Header: Logo + Close */}
                <div className="flex items-center justify-between mb-10 mt-3">
                  <div className="relative w-24 h-8">
                    <Image src="/logo.svg" alt="CraftX Logo" fill className="object-contain" />
                  </div>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="p-2 text-gray-500 hover:text-[#0C0D17] transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1">
                  {!isLegalPage &&
                    navItems.map((item, i) => (
                      <motion.a
                        key={item.id}
                        href={`#${item.id}`}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        onClick={(e) => handleScrollToSection(e, item.id)}
                        className="text-base font-semibold text-gray-800 hover:text-[#FE850C] transition-colors py-3 px-2 rounded-xl hover:bg-black/5"
                      >
                        {item.label}
                      </motion.a>
                    ))}
                </nav>

                {/* CTA */}
                <div className="mt-auto pb-8">
                  <PrimaryCTA
                    href={CONTACT_LINKS.hubspotDemo}
                    target="_blank"
                    text={t("hero.ctaHeader")}
                    className="w-full justify-center"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
