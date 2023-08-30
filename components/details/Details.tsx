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
      className="mx-auto my-8 flex flex-col justify-between pl-[75px] first:mt-0 last:mb-0 md:w-[60%] md:pl-0"
    >
      <ListItemIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: spring }}
      >
        <h3 className="text-2xl font-bold capitalize ">{title}</h3>
        <h2 className="text-sm font-semibold capitalize text-pastel-purple md:text-xl">
          {companyLink ? (
            <a href={companyLink} target="_blank" className="underline">
              @{institution}
            </a>
          ) : (
            <p>@{institution}</p>
          )}
        </h2>

        <span className="truncate text-sm font-medium capitalize text-primary/75 md:text-base">
          {dates} | {location}
        </span>
        <div>
          {info.map((point, index) => (
            <p key={index} className="my-2 w-full font-medium last:mb-0 ">
              {point}
            </p>
          ))}
        </div>
      </motion.div>
    </li>
  );
};

export default Details;
