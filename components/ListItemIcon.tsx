import { motion, useScroll } from "framer-motion";
import { RefObject, useRef } from "react";

interface ListItemIconProps {
  reference: RefObject<HTMLLIElement>;
}

//TODO: forwardRef?
const ListItemIcon = ({ reference }: ListItemIconProps) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-primary">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="76"
          cy="50"
          r="20"
          className="fill-primary stroke-primary stroke-1"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          style={{
            pathLength: scrollYProgress,
          }}
          className="fill-primary-foreground stroke-primary stroke-[4px]"
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse fill-pastel-purple stroke-primary stroke-2"
        />
      </svg>
    </figure>
  );
};
export default ListItemIcon;
