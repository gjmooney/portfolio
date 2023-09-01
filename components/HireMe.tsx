"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CircularText } from "./Icons";
import FancyCircle from "./animations/FancyCircle";

const MotionLink = motion(Link);

// TODO: Use SVG instead of image
const HireMe = () => {
  return (
    <div className="fixed right-1 top-1 flex items-center justify-center overflow-hidden md:bottom-24 md:right-4 md:top-auto">
      <div className="relative flex h-auto w-24 items-center md:w-40">
        <CircularText className="animate-spin-slow" />
        <FancyCircle
          text="Hire Me"
          className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 text-xs md:h-24 md:w-24 md:text-lg md:font-semibold"
        />
      </div>
    </div>
  );
};
export default HireMe;
