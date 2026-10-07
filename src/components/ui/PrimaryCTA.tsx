import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface PrimaryCTAProps extends Omit<HTMLMotionProps<"a">, "children"> {
  text: string;
  icon?: React.ReactNode;
  textClassName?: string;
}

export const PrimaryCTA: React.FC<PrimaryCTAProps> = ({ 
  text, 
  icon = <ArrowUpRight className="w-5 h-5 text-white" strokeWidth={2.5} />,
  className = "",
  textClassName = "text-[#14161B]",
  ...props 
}) => {
  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative inline-flex items-center justify-between gap-4 p-1.5 pl-6 bg-[var(--color-accent-orange)] hover:bg-[#e07208] rounded-full cursor-pointer transition-colors duration-300 ${className}`}
      {...props}
    >
      <span className={`${textClassName} font-bold text-sm lg:text-base leading-none`}>
        {text}
      </span>
      
      <div className="flex-none w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#14161B] flex items-center justify-center overflow-hidden">
        <div className="transition-transform duration-300 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
          {icon}
        </div>
      </div>
    </motion.a>
  );
};
