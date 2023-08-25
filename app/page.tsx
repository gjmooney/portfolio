import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import profilePic from "public/profile/hero-img-3-transformed.png";
export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center p-8">
      <div className="flex w-full items-center justify-between">
        <div className="w-1/2">
          <Image src={profilePic} alt="profile picture" />
        </div>
        <div className="flex w-1/2 flex-col items-center self-center">
          <AnimatedText
            text="Turning Vision Into Reality With Code And Design."
            className="text-6xl"
          />
          <p>
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>
        </div>
      </div>
    </main>
  );
}
// /className="flex min-h-screen w-full items-center bg-slate-50 p-32 "
