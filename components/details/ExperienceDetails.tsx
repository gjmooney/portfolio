import { ExperienceText } from "@/types/types";
import { motion, spring } from "framer-motion";
import { useRef } from "react";
import ListItemIcon from "../ListItemIcon";

const ExperienceDetails = ({
  title,
  company,
  companyLink,
  dates,
  location,
  points,
}: ExperienceText) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      className="mx-auto my-8 flex w-[60%] flex-col justify-between first:mt-0 last:mb-0"
    >
      <ListItemIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: spring }}
      >
        <h3 className="text-2xl font-bold capitalize ">{title}&nbsp;</h3>
        <h2>
          <a
            href={companyLink}
            target="_blank"
            className="text-xl font-bold capitalize text-pastel-purple underline"
          >
            @{company}
          </a>
        </h2>
        <span className="font-medium capitalize text-primary/75">
          {dates} | {location}
        </span>
        {points.map((point, index) => (
          <p key={index} className="w-full font-medium">
            {point}
          </p>
        ))}
      </motion.div>
    </li>
  );
};

export default ExperienceDetails;
