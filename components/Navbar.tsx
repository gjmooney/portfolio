import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import { ModeToggle } from "./ModeToggle";
import FancyCircle from "./animations/FancyCircle";
import FancyLink from "./animations/FancyLink";
import SocialLinks from "./SocialLinks";
//import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

// TODO: fix right hand icon spacing

const Navbar = ({}) => {
  return (
    <header className="relative flex w-full items-center justify-between border p-8 font-medium md:border-b-primary/40 md:px-32">
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent
          side={"top"}
          className="rounded-b-3xl bg-background/60 backdrop-blur-md"
        >
          <SheetHeader>
            <SheetTitle className="mt-16 flex flex-col items-center justify-center text-2xl">
              Navigate
            </SheetTitle>
          </SheetHeader>

          <nav className="mb-16 mt-8 flex flex-col items-center justify-center gap-4">
            <SheetClose asChild>
              <FancyLink title="Home" href="/" />
            </SheetClose>

            <SheetClose asChild>
              <FancyLink title="About" href="/about" />
            </SheetClose>

            <SheetClose asChild>
              <FancyLink title="Projects" href="/projects" />
            </SheetClose>
            <SheetClose asChild>
              <FancyLink title="Articles" href="/articles" />
            </SheetClose>
          </nav>

          <SocialLinks className="flex items-center justify-between" />
        </SheetContent>
      </Sheet>

      <nav className="hidden h-full items-center justify-between md:flex">
        <FancyLink title="Home" href="/" className="mr-4" />
        <FancyLink title="About" href="/about" className="mx-4" />
        <FancyLink title="Projects" href="/projects" className="mx-4" />
        <FancyLink title="Articles" href="/articles" className="ml-4" />
      </nav>

      <div className="absolute left-[50%] translate-x-[-50%]">
        <FancyCircle text="GM" className="mt-2 h-16 w-16 text-2xl font-bold" />
      </div>

      <SocialLinks className="hidden items-center justify-between md:flex" />
    </header>
  );
};

export default Navbar;
