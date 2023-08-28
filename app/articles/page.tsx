"use client";

import { allArticles, featuredArticles } from "@/Text/TextBlurbs";
import AnimatedText from "@/components/animations/AnimatedText";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import articleImg0 from "public/articles/modals.png";
import articleImg1 from "public/articles/hoc.jpg";
import todoImg from "public/articles/todo.png";
import { spring, useMotionValue } from "framer-motion";
import { MouseEvent, useRef } from "react";
import { motion } from "framer-motion";

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
    <div className="col-span-1 w-full overflow-hidden rounded-2xl border border-primary bg-secondary p-4">
      <Link href={link} target="_blank" className="cursor-pointer">
        <div className="overflow-hidden rounded-lg">
          <Image
            src={img ?? articleImg1}
            alt={title}
            className="rounded-lg duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <h2 className="my-2 text-2xl font-bold capitalize hover:underline">
          {title}
        </h2>
      </Link>
      <p className="mb-2 text-sm">{summary}</p>
      <span className="font-semibold text-pastel-purple">{time}</span>
    </div>
  );
};

const Article = ({ img, title, time, link }: FeaturedArticleProps) => {
  return (
    <motion.li
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="relative my-4 flex w-full items-center justify-between rounded-xl border border-b-4 border-r-4 border-primary p-4 py-6 transition first:mt-0 last:mb-0"
    >
      <MovingImage title={title} link={link} img={img} />
      <span className="pl-4 font-semibold  text-pastel-purple">{time}</span>
    </motion.li>
  );
};

const page = () => {
  return (
    <main className="my-16 flex w-full flex-col items-center justify-center">
      <AnimatedText text="Words can change the world" />
      <div className="mt-16">
        <div className="grid grid-cols-2 gap-16">
          {featuredArticles.map((article, index) => (
            <FeaturedArticle
              link={article.link}
              summary={article.summary}
              time={article.time}
              title={article.title}
              key={index}
              img={articleImg1}
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
