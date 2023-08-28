import { featuredArticles } from "@/Text/TextBlurbs";
import AnimatedText from "@/components/animations/AnimatedText";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import articleImg0 from "public/articles/modals.png";
import articleImg1 from "public/articles/hoc.jpg";

interface FeaturedArticleProps {
  img?: StaticImageData;
  title: string;
  time: string;
  summary: string;
  link: string;
}

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
          <li>two</li>
        </div>
      </div>
    </main>
  );
};
export default page;
