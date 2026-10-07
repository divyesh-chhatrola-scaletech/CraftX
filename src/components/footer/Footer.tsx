import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const { t } = useTranslation();

  const links = t("footer.links") as unknown as {
    label: string;
    href: string;
  }[];

  const description = t("footer.description");

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        {/* ── TOP CONTENT ROW ── */}
        <div className="footer-top-row">
          {/* LEFT: Logo + Description */}
          <motion.div
            className="footer-brand-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="footer-logo-link">
              <div className="footer-logo">
                <Image
                  src="/logo-white.svg"
                  alt="CraftX Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="footer-description">{description}</p>
          </motion.div>

          {/* MIDDLE: Navigation Links */}
          <motion.div
            className="footer-nav-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="footer-nav-heading">Links</h4>
            <nav className="footer-nav-links">
              {Array.isArray(links) &&
                links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="footer-nav-item"
                  >
                    {link.label}
                  </Link>
                ))}
            </nav>
          </motion.div>

          {/* RIGHT: Contact */}
          <motion.div
            className="footer-contact-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="footer-nav-heading">Contact</h4>
            <div className="footer-contact-info">
              <a
                href="mailto:hello@craft-x.de"
                className="footer-nav-item"
              >
                hello@craft-x.de
              </a>
              <a
                href="https://www.craft-x.de"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-nav-item"
              >
                www.craft-x.de
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── LARGE BRAND WATERMARK ── */}
        <div className="footer-watermark-container" aria-hidden="true">
          <span className="footer-watermark-text">CRAFTX</span>
        </div>

        {/* ── SEPARATOR ── */}
        <div className="footer-separator" />

        {/* ── BOTTOM ROW ── */}
        <motion.div
          className="footer-bottom-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Left: Copyright */}
          <p className="footer-copyright">
            © {new Date().getFullYear()}{" "}
            <span className="footer-copyright-brand">CraftX</span>
            . {t("footer.rightsReserved")}
          </p>

          {/* Center: Legal links */}
          <div className="footer-legal-links">
            {Array.isArray(links) &&
              links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="footer-legal-item"
                >
                  {link.label}
                </Link>
              ))}
          </div>

          {/* Right: Powered by Scaletech */}
          <div className="footer-powered-by">
            <span className="footer-powered-label">Powered by</span>
            <Image
              src="/ST_Logo_Light_H.png"
              alt="Scaletech Logo"
              width={120}
              height={28}
              className="footer-scaletech-logo"
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
