import AnimatedText from "@/components/animations/AnimatedText";
import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import heroPic from "public/profile/hero-img.png";

//TODO: use a grid for this layout?
export default function Home() {
  return (
    <main className="my-16 flex w-full flex-col items-center justify-center">
      <div className="w-full items-center justify-between md:flex">
        <div className="w-full md:w-1/2">
          <AnimatedText
            text="Turning Vision Into Reality With Code And Design."
            className="md:hidden md:text-left md:text-6xl"
          />
          <Image src={heroPic} alt="profile picture" priority />
        </div>
        <div className="flex w-full flex-col items-end self-center md:w-1/2">
          <AnimatedText
            text="Turning Vision Into Reality With Code And Design."
            className="hidden md:block md:text-left md:text-6xl"
          />
          <p className="my-4 text-center font-medium md:text-left">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>
          <div className="mt-2 flex w-full items-center justify-center gap-4 md:justify-start">
            <Link
              href="/resume.pdf"
              target="_blank"
              className={buttonVariants()}
              download={true}
            >
              Resume
              <LinkArrow className="mb-1 ml-1 w-5" />
            </Link>
            <Link
              href="mailto:g@gmail.com"
              target="_blank"
              className={buttonVariants()}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <HireMe />
    </main>
  );
}
// /className="flex min-h-screen w-full items-center bg-slate-50 p-32 "
