"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FancyCircle from "./animations/FancyCircle";
import spinny from "public/spinny2.svg";

const MotionLink = motion(Link);

// TODO: Use SVG instead of image
const HireMe = () => {
  return (
    <div className="fixed right-0 top-0 flex items-center justify-center overflow-hidden md:bottom-20 md:right-4 md:top-auto">
      <div className="relative flex h-auto w-24 items-center md:w-48">
        <Image
          className="h-auto w-[110%] animate-spin-slow"
          src={spinny}
          alt=""
        />
        <FancyCircle
          text="Hire Me"
          className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 text-xs md:h-24 md:w-24 md:text-lg md:font-semibold"
        />
      </div>
    </div>
  );
};
export default HireMe;
