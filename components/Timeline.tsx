"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import ExperienceDetails from "./details/ExperienceDetails";
import { EducationText, ExperienceText } from "@/types/types";
import EducationDetails from "./details/EducationDetails";

interface TimelineProps {
  label: string;
  experience?: ExperienceText[];
  education?: EducationText[];
  isExperience: boolean;
}

const Timeline = ({
  isExperience,
  label,
  experience,
  education,
}: TimelineProps) => {
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
          className="absolute left-9 top-0 h-full w-[4px] origin-top bg-primary"
        />

        <ul className="flex flex-col items-start justify-between">
          {isExperience
            ? experience!.map((text) => (
                <ExperienceDetails
                  key={text.title}
                  points={text.points}
                  company={text.company}
                  companyLink={text.companyLink}
                  dates={text.dates}
                  location={text.location}
                  title={text.title}
                />
              ))
            : education!.map((text) => (
                <EducationDetails
                  key={text.title}
                  info={text.info}
                  school={text.school}
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
