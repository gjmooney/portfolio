"use client";

import {
  MotionValue,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue<number>(0);
  const springValue = useSpring(motionValue, {
    duration: 3000,
  }) as MotionValue<number>;
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && +latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}>{value}</span>;
};

export default AnimatedNumber;
