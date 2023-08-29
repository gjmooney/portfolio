import Link from "next/link";
import HamburgerIcon from "./HamburgerIcon";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import { ModeToggle } from "./ModeToggle";
import FancyCircle from "./animations/FancyCircle";
import FancyLink from "./animations/FancyLink";

//import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

// TODO: fix right hand icon spacing
const Navbar = ({}) => {
  return (
    <header className="relative flex w-full items-center justify-between px-32 py-8 font-medium">
      <HamburgerIcon className="flex flex-col items-center justify-center md:hidden" />

      <nav className="hidden items-center justify-between md:flex">
        <FancyLink title="Home" href="/" className="mr-4" />
        <FancyLink title="About" href="/about" className="mx-4" />
        <FancyLink title="Projects" href="/projects" className="mx-4" />
        <FancyLink title="Articles" href="/articles" className="ml-4" />
      </nav>

      <div className="absolute left-[50%] translate-x-[-50%]">
        <FancyCircle text="GM" className="mt-2 h-16 w-16 text-2xl font-bold" />
      </div>

      <nav className="hidden items-center justify-between md:flex">
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

      {/** Pop up menu for mobile*/}
      <div className="fixed left-1/2 top-1/2 z-30 flex min-w-[70vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between rounded-lg bg-primary/75 py-32 text-secondary backdrop-blur-md">
        <nav className="flex flex-col items-center justify-center">
          <FancyLink title="Home" href="/" mobile={true} />
          <FancyLink title="About" href="/about" mobile={true} />
          <FancyLink title="Projects" href="/projects" mobile={true} />
          <FancyLink title="Articles" href="/articles" mobile={true} />
        </nav>
        <nav className="hidden items-center justify-between md:flex">
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
      </div>
    </header>
  );
};

export default Navbar;
