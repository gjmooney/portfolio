import { featuredArticles } from "@/Text/TextBlurbs";
import AnimatedText from "@/components/animations/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import articleImg from "public/articles/modals.png";

interface FeaturedArticleProps {
  img?: string;
  title: string;
  time: string;
  summary: string;
  link: string;
}

const FeaturedArticle = ({
  img,
  title,
  time,
  summary,
  link,
}: FeaturedArticleProps) => {
  const fa1 = featuredArticles[0];
  return (
    <>
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img ?? articleImg} alt={title} className="h-auto w-full" />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="my-2 text-2xl font-bold capitalize">{title}</h2>
      </Link>
      <p className="mb-2 text-sm">{summary}</p>
      <span className="font-semibold text-pastel-purple">{time}</span>
    </>
  );
};
const page = () => {
  return (
    <main className="my-16 flex w-full flex-col items-center justify-center">
      <AnimatedText text="Words can change the world" />
      <div className="mt-16">
        <ul>
          {featuredArticles.map((article, index) => (
            <FeaturedArticle
              link={article.link}
              summary={article.summary}
              time={article.time}
              title={article.title}
              key={index}
            />
          ))}
          <li>two</li>
        </ul>
      </div>
    </main>
  );
};
export default page;
