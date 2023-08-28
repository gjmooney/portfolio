import { projectText } from "@/Text/TextBlurbs";
import { GithubIcon } from "@/components/Icons";
import AnimatedText from "@/components/animations/AnimatedText";
import FancyLink from "@/components/animations/FancyLink";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import CryptoThing from "public/projects/crypto-screener-cover-image.jpg";

interface ProjectProps {
  type: string;
  title: string;
  summary?: string;
  image: string;
  link: string;
  github: string;
}

const FeaturedProject = ({
  type,
  title,
  summary,
  image,
  link,
  github,
}: ProjectProps) => {
  return (
    <article className="relative flex h-max w-full items-center justify-between rounded-3xl border border-primary bg-secondary p-9">
      <div
        className={cn(
          "absolute -right-3 top-0 -z-10  h-[103%] w-[101%] rounded-[2.5rem] bg-primary",
          "rounded-br-3xl",
        )}
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={CryptoThing}
          alt={title}
          className="h-auto w-full duration-300 ease-in-out hover:scale-105"
        />
      </Link>

      <div className="flex w-1/2 flex-col items-start justify-between pl-6">
        <span className="text-xl font-medium text-pastel-purple">{type}</span>
        {/* //TODO: Make this underline thicker? */}
        <FancyLink
          href={link}
          title={title}
          className="my-2 w-full text-left text-4xl font-bold"
        />

        <p className="my-2 font-medium">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className={cn("ml-4", buttonVariants())}
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, image, link, github }: ProjectProps) => {
  return (
    <article className="relative flex w-full flex-col items-center justify-center rounded-2xl border border-primary bg-secondary p-6">
      <div
        className={cn(
          "absolute -right-3 top-0 -z-10  h-[103%] w-[101%] rounded-[2rem] bg-primary",
          "rounded-br-2xl",
        )}
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={CryptoThing}
          alt={title}
          className="h-auto w-full duration-300 ease-in-out hover:scale-105"
        />
      </Link>

      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-pastel-purple">{type}</span>
        {/* //TODO: Make this underline thicker? */}
        <FancyLink
          href={link}
          title={title}
          className="my-2 w-full text-left text-3xl font-bold"
        />

        <div className="mt-2 flex w-full items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className={cn("", buttonVariants())}
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const page = () => {
  const fp1 = projectText[0];
  const regProject = projectText[1];

  return (
    <main className="my-16 flex w-full flex-col items-center justify-center">
      <AnimatedText text="Imagination trumps knowledge!" className="" />
      <div className="z-0 mt-16 grid grid-cols-12 gap-24 gap-y-32">
        <div className="col-span-12">
          <FeaturedProject
            github={fp1.github}
            link={fp1.link}
            summary={fp1.summary}
            title={fp1.title}
            type={fp1.type}
            image=""
          />
        </div>
        <div className="col-span-6">
          <Project
            github={regProject.github}
            link={regProject.link}
            summary={regProject.summary}
            title={regProject.title}
            type={regProject.type}
            image=""
          />
        </div>
        <div className="col-span-6">
          <Project
            github={regProject.github}
            link={regProject.link}
            summary={regProject.summary}
            title={regProject.title}
            type={regProject.type}
            image=""
          />
        </div>
        <div className="col-span-12">
          <FeaturedProject
            github={fp1.github}
            link={fp1.link}
            summary={fp1.summary}
            title={fp1.title}
            type={fp1.type}
            image=""
          />
        </div>
        <div className="col-span-6">
          <Project
            github={regProject.github}
            link={regProject.link}
            summary={regProject.summary}
            title={regProject.title}
            type={regProject.type}
            image=""
          />
        </div>
        <div className="col-span-6">
          <Project
            github={regProject.github}
            link={regProject.link}
            summary={regProject.summary}
            title={regProject.title}
            type={regProject.type}
            image=""
          />
        </div>
      </div>
    </main>
  );
};
export default page;
