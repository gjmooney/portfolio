"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";

const ExperienceScroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({});
  return (
    <div className="absolute left-8 top-0 h-full w-[4px] origin-top bg-primary" />
  );
};
export default ExperienceScroll;
