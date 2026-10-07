import { LANDING_CONTENT } from "@/content/translation";
import { Lang } from "@/shared/interface";
import { AnimatePresence, motion } from "framer-motion";
import { CreditCard, FileText, Globe, Mail, Truck } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import image1 from "@/assets/images/whatsapp-section/image-1.png";
import image2 from "@/assets/images/whatsapp-section/image-2.png";
import image3 from "@/assets/images/whatsapp-section/image-3.png";
import image4 from "@/assets/images/whatsapp-section/image-4.png";
import image5 from "@/assets/images/whatsapp-section/image-5.png";
import image6 from "@/assets/images/whatsapp-section/image-6.png";

interface Props {
  lang: Lang;
}

const iconMap: Record<string, React.ReactNode> = {
  truck: <Truck className="w-4 h-4" />,
  fileText: <FileText className="w-4 h-4" />,
  creditCard: <CreditCard className="w-4 h-4" />,
  globe: <Globe className="w-4 h-4" />,
  mail: <Mail className="w-4 h-4" />,
};

export const WhatsAppExampleSection: React.FC<Props> = ({ lang }) => {
  const content = LANDING_CONTENT[lang].whatsappExample;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const carouselImages = [
    { src: image1, alt: "WhatsApp Example 1" },
    { src: image2, alt: "WhatsApp Example 2" },
    { src: image3, alt: "WhatsApp Example 3" },
    { src: image4, alt: "WhatsApp Example 4" },
    { src: image5, alt: "WhatsApp Example 5" },
    { src: image6, alt: "WhatsApp Example 6" },
  ];

  // Reset index if array shrinks (e.g. during hot-reload)
  const safeIndex = currentIndex % carouselImages.length;

  // Auto-rotate images every 2 seconds
  useEffect(() => {
    setCurrentIndex(0);
  }, [carouselImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section
      className="relative"
      style={{
        backgroundColor: "var(--bg-offwhite)",
        paddingTop: "32px",
        paddingBottom: "48px",
        overflow: "clip",
      }}
    >
      {/* Subtle warm decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-60px",
          width: "360px",
          height: "360px",
          background: "rgba(254, 133, 12, 0.06)",
          borderRadius: "50%",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-40px",
          width: "280px",
          height: "280px",
          background: "rgba(254, 133, 12, 0.04)",
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div className="container-1404 relative z-10">

        {/* ── EDITORIAL TWO-PANEL GRID ── */}
        <div className="wa-editorial-grid">

          {/* ════════════════════════════════════════
              LEFT — INFORMATION PANEL
              ════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="wa-left-panel"
          >
            {/* Top content group */}
            <div className="wa-panel-top">
              {/* QR Code Placement pill label */}
              <div className="wa-pill-label">
                {content.qrCodePlacement}
              </div>

              {/* Main heading */}
              <h2 className="wa-heading">
                {content.title}
              </h2>

              {/* Supporting paragraph */}
              <p className="wa-description">
                {content.description}
              </p>

              {/* ── QR Placement items — 2-col compact grid ── */}
              <div className="wa-items-grid">
                {content.placementItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 + index * 0.06, duration: 0.4 }}
                    className="wa-item-card"
                  >
                    <div className="wa-item-icon">
                      {iconMap[item.icon]}
                    </div>
                    <span className="wa-item-label">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Orange conclusion callout — pinned to bottom ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="wa-conclusion"
            >
              <div className="wa-conclusion-bar" />
              <p className="wa-conclusion-text">
                {content.summary}
              </p>
            </motion.div>
          </motion.div>

          {/* ════════════════════════════════════════
              RIGHT — LARGE IMAGE PANEL
              ════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="wa-right-panel"
          >
            {/* Image wrapper with hover scale */}
            <motion.div
              animate={{ scale: isHovered ? 1.025 : 1 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="wa-image-inner"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={safeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="wa-image-frame"
                >
                  <Image
                    src={carouselImages[safeIndex].src}
                    alt={carouselImages[safeIndex].alt}
                    fill
                    className={`object-cover ${safeIndex === 0 ? "object-right-top" : "object-top"}`}
                    priority
                    sizes="(max-width: 768px) 100vw, 48vw"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Subtle bottom gradient overlay for depth */}
              <div className="wa-image-gradient" />
            </motion.div>

            {/* Image dots indicator — bottom center */}
            <div className="wa-dots">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`wa-dot${index === safeIndex ? " wa-dot-active" : ""}`}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Section-scoped styles ── */}
      <style dangerouslySetInnerHTML={{
        __html: `
        /* ── OUTER GRID ── */
        .wa-editorial-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 14px;
          align-items: stretch;
        }

        /* ── LEFT PANEL ── */
        .wa-left-panel {
          background-color: #FDFCF8;
          border: 1px solid rgba(20, 22, 27, 0.09);
          border-radius: 28px;
          padding: 32px 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 16px;
          box-shadow: 0 4px 32px -8px rgba(20, 22, 27, 0.07);
        }

        .wa-panel-top {
          display: flex;
          flex-direction: column;
        }

        /* Pill label */
        .wa-pill-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 13px;
          background: rgba(254, 133, 12, 0.10);
          border: 1px solid rgba(254, 133, 12, 0.22);
          border-radius: 9999px;
          color: #FE850C;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 12px;
          width: fit-content;
        }

        /* Heading */
        .wa-heading {
          font-size: clamp(26px, 3.2vw, 46px);
          font-weight: 800;
          color: #14161B;
          line-height: 1.12;
          letter-spacing: -0.022em;
          margin: 0 0 10px 0;
          max-width: 480px;
        }

        /* Description */
        .wa-description {
          font-size: clamp(14px, 1.2vw, 16px);
          color: rgba(20, 22, 27, 0.62);
          line-height: 1.7;
          margin: 0 0 16px 0;
          max-width: 460px;
        }

        /* ── ITEM GRID ── */
        .wa-items-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-bottom: 0;
        }

        .wa-item-card {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 15px;
          background-color: #FFFFFF;
          border: 1px solid rgba(20, 22, 27, 0.09);
          border-radius: 13px;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
          cursor: default;
        }

        .wa-item-card:hover {
          border-color: rgba(254, 133, 12, 0.35);
          box-shadow: 0 2px 16px -4px rgba(254, 133, 12, 0.15);
        }

        .wa-item-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 9px;
          background-color: rgba(254, 133, 12, 0.12);
          color: #FE850C;
          flex-shrink: 0;
        }

        .wa-item-label {
          font-size: 13.5px;
          font-weight: 600;
          color: #14161B;
          line-height: 1.3;
        }

        /* ── CONCLUSION CALLOUT ── */
        .wa-conclusion {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 17px 20px;
          background: linear-gradient(135deg, rgba(254, 133, 12, 0.10) 0%, rgba(255, 107, 53, 0.07) 100%);
          border: 1px solid rgba(254, 133, 12, 0.20);
          border-radius: 15px;
        }

        .wa-conclusion-bar {
          width: 4px;
          align-self: stretch;
          background: linear-gradient(180deg, #FE850C 0%, #FF6B35 100%);
          border-radius: 4px;
          flex-shrink: 0;
          min-height: 20px;
        }

        .wa-conclusion-text {
          font-size: 13.5px;
          font-weight: 600;
          color: #14161B;
          line-height: 1.68;
          margin: 0;
        }

        /* ── RIGHT IMAGE PANEL ── */
        .wa-right-panel {
          border-radius: 28px;
          overflow: clip;
          position: relative;
          min-height: 600px;
          height: 100%;
          cursor: default;
          isolation: isolate;
          contain: layout paint;
        }

        .wa-image-inner {
          position: absolute;
          inset: 0;
          border-radius: 28px;
          overflow: hidden;
        }

        .wa-image-frame {
          position: absolute;
          inset: 0;
        }

        .wa-image-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(12, 13, 23, 0.22) 0%, transparent 50%);
          pointer-events: none;
          z-index: 1;
          border-radius: 28px;
        }

        /* ── DOTS ── */
        .wa-dots {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          z-index: 2;
        }

        .wa-dot {
          height: 6px;
          width: 6px;
          border-radius: 9999px;
          background-color: rgba(255, 255, 255, 0.5);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .wa-dot-active {
          width: 20px;
          background-color: #FE850C;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .wa-editorial-grid {
            grid-template-columns: 1fr 1fr;
          }

          .wa-left-panel {
            padding: 28px 30px;
          }
        }

        @media (max-width: 768px) {
          .wa-editorial-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .wa-right-panel {
            min-height: 400px;
            position: relative;
          }

          .wa-left-panel {
            padding: 28px 22px;
          }

          .wa-items-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 480px) {
          .wa-items-grid {
            grid-template-columns: 1fr;
          }

          .wa-left-panel {
            padding: 24px 18px;
          }

          .wa-right-panel {
            min-height: 320px;
          }
        }
      ` }} />
    </section>
  );
};
