import { motion, spring } from "framer-motion";
import { useRef } from "react";
import ListItemIcon from "./ListItemIcon";

export interface DetailsProps {
  title: string;
  institution: string;
  companyLink?: string;
  dates: string;
  location: string;
  info: string[];
}

const Details = ({
  title,
  institution,
  companyLink,
  dates,
  location,
  info,
}: DetailsProps) => {
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
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: spring }}
      >
        <h3 className="text-2xl font-bold capitalize ">{title}</h3>
        <h2 className="text-xl font-semibold capitalize text-pastel-purple">
          {companyLink ? (
            <a href={companyLink} target="_blank" className="underline">
              @{institution}
            </a>
          ) : (
            <p>@{institution}</p>
          )}
        </h2>

        <span className="font-medium capitalize text-primary/75">
          {dates} | {location}
        </span>
        {info.map((point, index) => (
          <p key={index} className="w-full font-medium">
            {point}
          </p>
        ))}
      </motion.div>
    </li>
  );
};

export default Details;
