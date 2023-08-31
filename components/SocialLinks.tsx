import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import { ModeToggle } from "./ModeToggle";

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className }: SocialLinksProps) => {
  return (
    <nav className={className}>
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
  );
};
export default SocialLinks;
