"use client";

import { allArticles, featuredArticles } from "@/Text/TextBlurbs";
import AnimatedText from "@/components/animations/AnimatedText";
import Transition from "@/components/animations/TransitionEffect";
import { motion, useMotionValue } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import articleImg1 from "public/articles/hoc.jpg";
import todoImg from "public/articles/todo.png";
import { MouseEvent, useRef } from "react";

interface FeaturedArticleProps {
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

// TODO: Mess around with images/imports
const FeaturedArticle = ({
  img,
  title,
  time,
  summary,
  link,
}: FeaturedArticleProps) => {
  const fa1 = featuredArticles[0];

  return (
    <div className="relative z-0">
      <div className="col-span-1 h-full w-full rounded-2xl border border-primary bg-secondary p-4">
        <Link href={link} target="_blank" className="cursor-pointer">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={img ?? articleImg1}
              alt={title}
              className="rounded-lg duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <h2 className="my-2 text-center text-xl font-bold capitalize hover:underline md:text-left md:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="mb-2 text-sm">{summary}</p>
        <span className="font-semibold text-pastel-purple">{time}</span>
      </div>

      <div className="absolute -right-3 top-0 -z-10 h-[102%] w-[103%] rounded-[2rem] rounded-br-2xl bg-primary md:w-[102%]" />
    </div>
  );
};

const Article = ({ img, title, time, link }: FeaturedArticleProps) => {
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
        <h2 className="text-xl font-semibold capitalize hover:underline">
          {title}
        </h2>
        <span className="text-sm font-semibold text-pastel-purple md:pl-4 md:text-base">
          {time}
        </span>
      </motion.li>
    </motion.div>
  );
};

const page = () => {
  return (
    <main className="my-14 flex w-full flex-col items-center justify-center">
      <Transition />
      <AnimatedText text="Words can change the world" />
      <div className="mt-16">
        <div className="grid gap-16 md:grid-cols-2">
          {featuredArticles.map((article, index) => (
            <FeaturedArticle
              link={article.link}
              summary={article.summary}
              time={article.time}
              title={article.title}
              img={articleImg1}
              key={index}
            />
          ))}
        </div>

        <h2 className="mb-8 mt-16 w-full text-center text-4xl font-bold">
          All Articles
        </h2>
        <ul>
          {allArticles.map((article, index) => (
            <Article
              link={article.link}
              time={article.time}
              title={article.title}
              key={index}
              img={todoImg}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};
export default page;
