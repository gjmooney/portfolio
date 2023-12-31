"use client";

import { LazyMotion, domAnimation, m, useScroll } from "framer-motion";
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
    offset: ["start end", "end 0.6"],
  });

  return (
    <div className="my-32">
      <h2 className="mb-16 w-full text-center text-5xl font-bold capitalize md:text-8xl">
        {label}
      </h2>

      <div className="relative mx-auto w-full md:w-[75%]" ref={ref}>
        <LazyMotion features={domAnimation}>
          <m.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-7 top-1 h-full w-[4px] origin-top bg-primary md:left-9"
          />
        </LazyMotion>
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
