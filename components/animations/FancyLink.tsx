"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { buttonVariants } from "../ui/button";

interface FancyLinkProps {
  href: string;
  title: string;
  className?: string;
}

const FancyLink = React.forwardRef<HTMLAnchorElement, FancyLinkProps>(
  ({ href, title, className = "", ...props }, ref) => {
    //const { href, title, className = "", mobile = false, ...props } = props;
    const pathname = usePathname();
    return (
      <Link
        {...props}
        ref={ref}
        href={href}
        className={cn(
          "group relative p-0",
          buttonVariants({ variant: "outline", size: "navLink" }),
          className,
        )}
        /* className={cn(
          "group relative rounded-md border-2 border-transparent ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          className,
        )} */
      >
        {title}
        <span
          className={cn(
            "absolute -bottom-0.5 left-0 h-[1px] bg-primary duration-300 ease-in-out group-hover:w-full",
            pathname === href ? "h-[1.5px] w-full" : "w-0",
          )}
        />
      </Link>
    );
  },
);

FancyLink.displayName = "FancyLink";

export default FancyLink;
