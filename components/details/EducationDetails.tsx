import { useRef } from "react";
import ListItemIcon from "../ListItemIcon";
import { motion, spring } from "framer-motion";
import { EducationText } from "@/types/types";

const EducationDetails = ({
  title,
  school,
  dates,
  location,
  info,
}: EducationText) => {
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
        <h3 className="text-2xl font-bold capitalize ">{title}</h3>
        <h2 className="text-xl font-semibold capitalize text-pastel-purple">
          @{school}
        </h2>
        <span className="font-medium capitalize text-primary/75">
          {dates} | {location}
        </span>
        <p className="w-full font-medium">{info}</p>
      </motion.div>
    </li>
  );
};

export default EducationDetails;
