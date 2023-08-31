import AnimatedNumber from "@/components/animations/AnimatedNumber";
import AnimatedText from "@/components/animations/AnimatedText";
import Transition from "@/components/animations/TransitionEffect";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import { cn } from "@/lib/utils";
import { educationText, experiencesText } from "@/Text/TextBlurbs";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import profilePic from "public/profile/about-img.jpg";

const Page = () => {
  return (
    <main className="my-16 flex w-full flex-col items-center justify-center">
      <Transition />
      <AnimatedText text="Passion Fuels Purpose" className="" />
      <div className="z-0 mt-16 grid w-full grid-cols-1 gap-y-16 md:grid-cols-8 md:gap-16">
        <div className="col-span-1 flex flex-col items-start justify-start md:col-span-3">
          <h2 className="mb-4 text-xl font-bold uppercase text-primary/75">
            Biography
          </h2>
          <p className="font-medium">
            Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with a
            passion for creating beautiful, functional, and user-centered
            digital experiences. With 4 years of experience in the field. I am
            always looking for new and innovative ways to bring my clients&apos;
            visions to life.
          </p>
          <p className="my-4 font-medium">
            I believe that design is about more than just making things look
            pretty – it&apos;s about solving problems and creating intuitive,
            enjoyable experiences for users.
          </p>
          <p className="font-medium">
            Whether I&apos;m working on a website, mobile app, or other digital
            product, I bring my commitment to design excellence and
            user-centered thinking to every project I work on. I look forward to
            the opportunity to bring my skills and passion to your next project.
          </p>
        </div>

        <div className="relative col-span-1 h-max rounded-2xl border-2 border-solid border-primary bg-secondary p-6 md:col-span-3">
          <div
            className={cn(
              "absolute -right-3 top-0 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-primary",
              "rounded-br-2xl",
            )}
          />
          <Image
            src={profilePic}
            alt="profile pic"
            priority
            className="rounded-2xl"
          />
        </div>

        {/** numbers container */}
        <div className="col-span-1 flex items-end justify-between gap-5 text-xl font-medium capitalize text-primary/75 md:col-span-2 md:flex-col md:gap-0">
          {/** first number */}
          <div className="flex flex-col items-center justify-center md:items-end">
            <span className="inline-block text-5xl font-bold md:text-7xl">
              <AnimatedNumber value={50} />+
            </span>
            <h2 className="text-center md:text-right">satisfied clients</h2>
          </div>

          {/** second number */}
          <div className="flex flex-col items-center justify-center md:items-end">
            <span className="inline-block text-5xl font-bold md:text-7xl">
              <AnimatedNumber value={40} />+
            </span>
            <h2 className="text-center md:text-right">projects completed</h2>
          </div>

          {/** third number */}
          <div className="flex flex-col items-center justify-center md:items-end">
            <span className="inline-block text-5xl font-bold md:text-7xl">
              <AnimatedNumber value={4} />+
            </span>
            <h2 className="text-center md:text-right">years of experience</h2>
          </div>
        </div>
      </div>
      <Skills />
      <Timeline label="Experience" textArray={experiencesText} />
      <Timeline label="Education" textArray={educationText} />
    </main>
  );
};
export default Page;
