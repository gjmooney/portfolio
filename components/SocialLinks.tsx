import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import { ModeToggle } from "./ModeToggle";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className }: SocialLinksProps) => {
  return (
    <nav className={className}>
      <Link
        href="/"
        target="_"
        className={cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "icon-hover",
        )}
      >
        <GithubIcon />
      </Link>
      <Link
        href="/"
        target="_"
        className={cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "icon-hover",
        )}
      >
        <TwitterIcon />
      </Link>
      <Link
        href="/"
        target="_"
        className={cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "icon-hover",
        )}
      >
        <LinkedinIcon />
      </Link>
      <ModeToggle />
    </nav>
  );
};
export default SocialLinks;
