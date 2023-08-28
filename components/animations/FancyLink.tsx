"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface FancyLinkProps {
  href: string;
  title: string;
  className: string;
}

const FancyLink = ({ href, title, className = "" }: FancyLinkProps) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} group relative`}>
      {title}
      <span
        className={`absolute -bottom-0.5 left-0 h-[1px] bg-primary duration-300 ease-in-out group-hover:w-full ${
          pathname === href ? "h-[1.5px] w-full" : "w-0"
        }`}
      />
    </Link>
  );
};

export default FancyLink;
