import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import FancyCircle from "./animations/FancyCircle";
import { ModeToggle } from "./ModeToggle";
import FancyLink from "./animations/FancyLink";

//import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

// TODO: fix right hand icon spacing
const Navbar = ({}) => {
  return (
    <header className="flex w-full items-center justify-between px-32 py-8 font-medium">
      <nav>
        <FancyLink title="Home" href="/" className="group relative mr-4" />
        <FancyLink title="About" href="/about" className="mx-4" />
        <FancyLink title="Projects" href="/projects" className="mx-4" />
        <FancyLink title="Articles" href="/articles" className="ml-4" />
      </nav>

      <div className="absolute left-[50%] translate-x-[-50%]">
        <FancyCircle text="GM" className="mt-2 h-16 w-16 text-2xl font-bold" />
      </div>

      <nav className="flex items-center justify-center">
        <Link href="/" target="_" className="icon-hover">
          <GithubIcon />
        </Link>
        <Link href="/" target="_" className="icon-hover">
          <TwitterIcon />
        </Link>
        <Link href="/" target="_" className="icon-hover">
          <LinkedinIcon />
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Navbar;
