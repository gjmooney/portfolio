"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

interface FancyCircleProps {
  text: string;
  className?: string;
}
const FancyCircle = ({ text, className }: FancyCircleProps) => {
  return (
    <MotionLink
      href="/"
      whileHover={{
        backgroundColor: [
          "#0F172A",
          "#F7D8B9",
          "#AEC9E0",
          "#F2B2A8",
          "#D9D9D9",
          "#0F172A",
        ],
        transition: { duration: 3, repeat: Infinity },
      }}
      className={cn(
        "flex items-center justify-center rounded-full border-2 border-transparent bg-[#0F172A] text-[#F8FAFC] hover:text-[#0F172A] dark:border-primary",
        className,
      )}
    >
      {text}
    </MotionLink>
  );
};

export default FancyCircle;