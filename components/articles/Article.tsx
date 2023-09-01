"use client";

import { motion, useMotionValue } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MouseEvent, useRef } from "react";

interface ArticleProps {
  img: StaticImageData;
  title: string;
  time: string;
  summary?: string;
  link: string;
}

interface MovingImageProps {
  title: string;
  img: StaticImageData;
  link: string;
}

const FramerImage = motion(Image);

// TODO: not sure if I want the image
const MovingImage = ({ title, img, link }: MovingImageProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef<HTMLElement>(null);

  function handleMouse(event: MouseEvent<HTMLAnchorElement>) {
    if (imgRef.current) {
      imgRef.current.style.display = "inline-block";
    }
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event: MouseEvent<HTMLAnchorElement>) {
    if (imgRef.current) {
      imgRef.current.style.display = "none";
    }
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={(e) => handleMouse(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
    >
      <h2 className="text-xl font-semibold capitalize hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x, y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        ref={imgRef}
        src={img}
        alt={title}
        priority
        className="absolute z-10 hidden h-auto w-96 rounded-lg"
      />
    </Link>
  );
};

const Article = ({ img, title, time, link }: ArticleProps) => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="my-4"
    >
      <motion.li className="relative flex w-full flex-col justify-between rounded-xl border border-b-4 border-r-4 border-primary p-4 py-6 transition first:mt-0 last:mb-0 md:flex-row">
        {/* <MovingImage title={title} link={link} img={img} /> */}
        <h2 className="cursor-pointer text-xl font-semibold capitalize hover:underline">
          {title}
        </h2>
        <span className="text-sm font-semibold text-pastel-purple md:pl-4 md:text-base">
          {time}
        </span>
      </motion.li>
    </motion.div>
  );
};
export default Article;
