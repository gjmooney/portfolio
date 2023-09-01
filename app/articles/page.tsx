import { allArticles, featuredArticles } from "@/Text/TextBlurbs";
import AnimatedText from "@/components/animations/AnimatedText";
import Transition from "@/components/animations/TransitionEffect";
import Article from "@/components/articles/Article";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import articleImg1 from "public/articles/hoc.jpg";
import todoImg from "public/articles/todo.png";

interface FeaturedArticleProps {
  img: StaticImageData;
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
