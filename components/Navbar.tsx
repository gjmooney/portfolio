import MobileMenuSheet from "./MobileMenuSheet";
import SocialLinks from "./SocialLinks";
import FancyCircle from "./animations/FancyCircle";
import FancyLink from "./animations/FancyLink";
//import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

// TODO: fix right hand icon spacing

const Navbar = ({}) => {
  return (
    <header className="relative flex w-full items-center justify-between border p-8 font-medium md:border-b-primary/40 md:px-32">
      <MobileMenuSheet />
      <nav className="hidden h-full items-center justify-between md:flex">
        <FancyLink title="Home" href="/" className="mr-4" />
        <FancyLink title="About" href="/about" className="mx-4" />
        <FancyLink title="Projects" href="/projects" className="mx-4" />
        <FancyLink title="Articles" href="/articles" className="ml-4" />
      </nav>

      <div className="absolute left-[50%] translate-x-[-50%]">
        <FancyCircle text="GM" className="mt-2 h-16 w-16 text-2xl font-bold" />
      </div>

      <SocialLinks className="hidden items-center justify-between gap-2 md:flex" />
    </header>
  );
};

export default Navbar;
