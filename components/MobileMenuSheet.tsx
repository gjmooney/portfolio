import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SocialLinks from "./SocialLinks";
import FancyLink from "./animations/FancyLink";

const MobileMenuSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent
        side={"top"}
        className="rounded-b-[4.5rem] bg-background/60 backdrop-blur-md"
      >
        <SheetHeader>
          <SheetTitle className="mt-16 flex flex-col items-center justify-center text-2xl">
            Check It Out
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
  );
};
export default MobileMenuSheet;
