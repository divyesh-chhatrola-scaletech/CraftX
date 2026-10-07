import { motion } from "framer-motion";
import Image from "next/image";
import { ParticleRing } from "../particle-ring/ParticleRing";
import HeroImage from "@/assets/images/hero-image-1.png";

export const HeroVisual = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] xl:h-[80%] flex items-end justify-center xl:justify-end self-end"
    >
      {/* Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#fe850c]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Particle Ring */}
      <div className="absolute inset-0 z-0 scale-90 sm:scale-110 lg:scale-130 transform-gpu origin-bottom xl:origin-bottom-right">
        <ParticleRing />
      </div>

      {/* Main Image Contact */}
      <div className="relative z-10 w-full h-full flex items-end justify-center xl:justify-end px-4 xl:px-0 overflow-visible">
        <div className="relative w-full xl:left-[-50px] left-0 xl:w-[120%] h-full scale-[0.95] sm:scale-[1.1] lg:scale-[1.15] xl:scale-[1.2] transform-gpu origin-bottom xl:origin-bottom-right translate-y-[2px]">
          <Image
            src={HeroImage}
            alt="CraftX Worker and App"
            fill
            className="object-contain object-bottom pointer-events-none"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 120vw, 100vw"
          />
        </div>
      </div>

      {/* Ambient decorative elements */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#fe850c]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#ffaf5d]/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </motion.div>
  );
};
