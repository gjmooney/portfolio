"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FancyCircle from "./animations/FancyCircle";

const MotionLink = motion(Link);

// TODO: Use SVG instead of image
const HireMe = () => {
  return (
    <div className="fixed bottom-11 right-4 flex items-center justify-center overflow-hidden">
      <div className="relative flex h-auto w-48 items-center">
        <Image
          className="animate-spin-slow"
          src="/spinny2.svg"
          alt=""
          width={196}
          height={196}
        />
        <FancyCircle
          text="Hire Me"
          className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold"
        />
      </div>
    </div>
  );
};
export default HireMe;
