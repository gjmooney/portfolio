"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const header = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.1,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className }: AnimatedTextProps) => {
  return (
    <div className="mx-auto py-2">
      <motion.h1
        className={cn(
          "inline-block text-center text-5xl font-bold capitalize md:text-8xl",
          className,
        )}
        variants={header}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};
export default AnimatedText;
