import { allArticles, featuredArticles } from "@/Text/TextBlurbs";
import AnimatedText from "@/components/animations/AnimatedText";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import articleImg0 from "public/articles/modals.png";
import articleImg1 from "public/articles/hoc.jpg";

interface FeaturedArticleProps {
  img?: StaticImageData;
  title: string;
  time: string;
  summary?: string;
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

const Article = ({
  img,
  title,
  time,

  link,
}: FeaturedArticleProps) => {
  return (
    <li className="relative my-4 flex w-full items-center justify-between rounded-xl border border-b-4 border-r-4 border-primary p-4 py-6 first:mt-0 last:mb-0">
      <Link href={link} target="_blank">
        <h2 className="text-xl font-semibold capitalize hover:underline">
          {title}
        </h2>
      </Link>
      <span className="pl-4 font-semibold  text-pastel-purple">{time}</span>
    </li>
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
            />
          ))}
        </ul>
      </div>
    </main>
  );
};
export default page;
