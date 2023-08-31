"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface FancyLinkProps {
  href: string;
  title: string;
  className?: string;
  mobile?: boolean;
}

const FancyLink = React.forwardRef<HTMLAnchorElement, FancyLinkProps>(
  (props, ref) => {
    const { href, title, className = "", mobile = false, ...other } = props;
    const pathname = usePathname();
    return (
      <Link
        {...other}
        ref={ref}
        href={href}
        className={`${className} group relative`}
      >
        {title}
        <span
          className={cn(
            "absolute -bottom-0.5 left-0 h-[1px] bg-primary duration-300 ease-in-out group-hover:w-full",
            pathname === href ? "h-[1.5px] w-full" : "w-0",
            mobile ? "bg-secondary" : "bg-primary",
          )}
        />
      </Link>
    );
  },
);

FancyLink.displayName = "FancyLink";

export default FancyLink;
