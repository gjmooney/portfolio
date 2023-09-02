"use client";

import { useEffect, useState } from "react";
import MobileMenuSheet from "./MobileMenuSheet";
import SocialLinks from "./SocialLinks";
import FancyCircle from "./animations/FancyCircle";
import FancyLink from "./animations/FancyLink";

const Navbar = ({}) => {
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.getElementById("navbar")!.style.padding = "1rem";
      document.getElementById("fancyCircle")!.style.opacity = "0";
      document.getElementById("fancyCircle")!.style.height = "0rem";
      document.getElementById("fancyCircle")!.style.width = "0rem";
    } else {
      document.getElementById("navbar")!.style.padding = "2rem";
      document.getElementById("fancyCircle")!.style.opacity = "1";
      document.getElementById("fancyCircle")!.style.height = "4rem";
      document.getElementById("fancyCircle")!.style.width = "4rem";
    }
  }

  return (
    <header
      id="navbar"
      className="sticky top-0 z-10 flex w-full items-center justify-between border bg-secondary p-8 font-medium transition-all duration-1000 ease-in-out md:border-b-primary/40 md:px-32"
    >
      <MobileMenuSheet />
      <nav className="hidden h-full items-center justify-between md:flex">
        <FancyLink title="Home" href="/" className="mr-4" />
        <FancyLink title="About" href="/about" className="mx-4" />
        <FancyLink title="Projects" href="/projects" className="mx-4" />
        <FancyLink title="Contact" href="/contact" className="ml-4" />
      </nav>

      {/*  <div className=" opacity-100 transition-opacity duration-500  ease-in-out"></div> */}
      <FancyCircle
        text="GM"
        className="absolute left-[50%] mt-2 h-16 w-16 translate-x-[-50%] text-2xl font-bold"
      />

      <SocialLinks className="hidden items-center justify-between gap-2 md:flex" />
    </header>
  );
};

export default Navbar;
