import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import profilePic from "public/profile/hero-img-3-transformed.png";
export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center p-8">
      <div className="flex w-full items-center justify-between">
        <div className="w-1/2">
          <Image src={profilePic} alt="profile picture" />
        </div>
        <div className="flex w-1/2 flex-col items-end self-center">
          <AnimatedText
            text="Turning Vision Into Reality With Code And Design."
            className="text-6xl"
          />
          <p className="my-4 font-medium">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>
          <div className="mt-2 flex items-center gap-4 self-start ">
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
    </main>
  );
}
// /className="flex min-h-screen w-full items-center bg-slate-50 p-32 "
