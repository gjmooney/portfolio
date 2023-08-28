import AnimatedNumber from "@/components/animations/AnimatedNumber";
import AnimatedText from "@/components/animations/AnimatedText";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import { cn } from "@/lib/utils";
import { educationText, experiencesText } from "@/Text/TextBlurbs";
import Image from "next/image";
import profilePic from "public/profile/about-img.jpg";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 ">
      <AnimatedText text="Passion Fuels Purpose" className="" />
      <div className="z-0 mt-16 grid w-full grid-cols-8 gap-16">
        <div className="col-span-3 flex flex-col items-start justify-start">
          <h2 className="mb-4 text-lg font-bold uppercase text-primary/75">
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

        <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-primary bg-secondary p-6">
          <div
            className={cn(
              "absolute -right-3 top-0 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-primary",
              "rounded-br-2xl",
            )}
          />
          <Image src={profilePic} alt="profile pic" className=" rounded-2xl" />
        </div>

        <div className="col-span-2 flex flex-col items-end justify-between">
          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold">
              <AnimatedNumber value={50} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-primary/75">
              satisfied clients
            </h2>
          </div>

          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold">
              <AnimatedNumber value={40} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-primary/75">
              projects completed
            </h2>
          </div>

          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold">
              <AnimatedNumber value={4} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-primary/75">
              years of experience
            </h2>
          </div>
        </div>
      </div>

      <Skills />
      <Timeline label="Experience" textArray={experiencesText} />
      <Timeline label="Education" textArray={educationText} />
    </main>
  );
};
export default page;
