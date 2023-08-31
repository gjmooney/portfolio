import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import { ModeToggle } from "./ModeToggle";

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className }: SocialLinksProps) => {
  return (
    <nav className={className}>
      <Link
        href="/"
        target="_"
        className="icon-hover inline-flex items-center justify-center rounded-md border-transparent text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      >
        <GithubIcon />
      </Link>
      <Link
        href="/"
        target="_"
        className="icon-hover inline-flex items-center justify-center rounded-md border-transparent text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      >
        <TwitterIcon />
      </Link>
      <Link
        href="/"
        target="_"
        className="icon-hover inline-flex items-center justify-center rounded-md border-transparent text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      >
        <LinkedinIcon />
      </Link>
      <ModeToggle />
    </nav>
  );
};
export default SocialLinks;
