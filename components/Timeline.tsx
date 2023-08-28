"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

import Details, { DetailsProps } from "./details/Details";

interface TimelineProps {
  label: string;
  textArray: DetailsProps[];
}

const Timeline = ({ label, textArray }: TimelineProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-40">
      <h2 className="mb-16 w-full text-center text-8xl font-bold capitalize">
        {label}
      </h2>

      <div className="relative mx-auto w-[75%]" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 h-full w-[4px] origin-top bg-primary"
        />

        <ul className="flex flex-col items-start justify-between">
          {textArray.map((text) => (
            <Details
              key={text.title}
              info={text.info}
              institution={text.institution}
              companyLink={text.companyLink}
              dates={text.dates}
              location={text.location}
              title={text.title}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Timeline;
