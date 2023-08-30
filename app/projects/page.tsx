import { projectText } from "@/Text/TextBlurbs";
import { GithubIcon } from "@/components/Icons";
import AnimatedText from "@/components/animations/AnimatedText";
import FancyLink from "@/components/animations/FancyLink";
import Transition from "@/components/animations/TransitionEffect";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CryptoThing from "public/projects/crypto-screener-cover-image.jpg";

interface ProjectProps {
  type: string;
  title: string;
  summary?: string;
  image: string;
  link: string;
  github: string;
}

const Project = ({
  type,
  title,
  summary,
  image,
  link,
  github,
}: ProjectProps) => {
  return (
    <article
      className={cn(
        "relative flex w-full flex-col items-center justify-center border border-primary bg-secondary p-6",
        summary ? "rounded-3xl md:flex-row md:p-9" : "rounded-2xl",
      )}
    >
      {/*  <Transition /> */}

      <div
        className={cn(
          "absolute -right-3 top-0 -z-10 w-[103%] bg-primary md:w-[101%]",
          summary
            ? "h-[102%] rounded-[2.5rem] rounded-br-3xl md:h-[103%]"
            : " h-[103%] rounded-[2rem] rounded-br-2xl",
        )}
      />

      <Link
        href={link}
        target="_blank"
        className={cn(
          "flex cursor-pointer flex-col gap-2 overflow-hidden rounded-lg",
          summary ? "md:w-1/2" : "w-full",
        )}
      >
        <Image
          src={CryptoThing}
          alt={title}
          priority
          className="order-2 h-auto w-full duration-300 ease-in-out hover:scale-105 md:order-1"
        />
        <span className="order-1 text-sm font-medium text-pastel-purple md:order-2 md:text-xl">
          {type}
        </span>
      </Link>

      <div
        className={cn(
          "flex flex-col items-start justify-between  md:pl-6",
          summary ? "md:w-1/2" : "mt-4 w-full",
        )}
      >
        {/* //TODO: Make this underline thicker? */}
        <FancyLink
          href={link}
          title={title}
          className={cn(
            "my-2 w-full text-center  font-bold md:text-left",
            summary ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl",
          )}
        />

        {summary ? (
          <p className="my-2 font-medium md:text-lg">{summary}</p>
        ) : (
          <></>
        )}

        <div
          className={cn(
            "mt-2 flex items-center",
            !summary ? "w-full flex-row-reverse justify-between" : "",
          )}
        >
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className={cn(buttonVariants(), summary ? "ml-4" : "ml-0")}
          >
            {summary ? "Visit Project" : "Visit"}
          </Link>
        </div>
      </div>
    </article>
  );
};

const OldProject = ({ type, title, image, link, github }: ProjectProps) => {
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
      <div className="z-0 mt-16 grid gap-20 md:grid-cols-12 md:gap-24 md:gap-y-32">
        <div className="md:col-span-12">
          <Project
            github={fp1.github}
            link={fp1.link}
            summary={fp1.summary}
            title={fp1.title}
            type={fp1.type}
            image=""
          />
        </div>
        <div className="md:col-span-6">
          <Project
            github={regProject.github}
            link={regProject.link}
            title={regProject.title}
            type={regProject.type}
            image=""
          />
        </div>
        <div className="md:col-span-6">
          <Project
            github={regProject.github}
            link={regProject.link}
            title={regProject.title}
            type={regProject.type}
            image=""
          />
        </div>
        <div className="md:col-span-12">
          <Project
            github={fp1.github}
            link={fp1.link}
            summary={fp1.summary}
            title={fp1.title}
            type={fp1.type}
            image=""
          />
        </div>
        <div className="md:col-span-6">
          <Project
            github={regProject.github}
            link={regProject.link}
            title={regProject.title}
            type={regProject.type}
            image=""
          />
        </div>
        <div className="md:col-span-6">
          <Project
            github={regProject.github}
            link={regProject.link}
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
