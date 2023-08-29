"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface HamburgerIconProps {
  className?: string;
}

const HamburgerIcon = ({ className }: HamburgerIconProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button className={cn("", className)} onClick={handleClick}>
      <span
        className={cn(
          "block h-0.5 w-6 rounded-sm bg-primary transition-all duration-300 ease-out",
          isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5",
        )}
      ></span>
      <span
        className={cn(
          "my-0.5 block h-0.5 w-6 rounded-sm bg-primary transition-all duration-300 ease-out",
          isOpen ? "opacity-0" : "opacity-100",
        )}
      ></span>
      <span
        className={cn(
          "block h-0.5 w-6 rounded-sm bg-primary transition-all duration-300 ease-out",
          isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5",
        )}
      ></span>
    </button>
  );
};
export default HamburgerIcon;
