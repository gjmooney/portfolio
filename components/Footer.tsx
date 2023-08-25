import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between border-t-2 border-solid border-primary p-8 text-lg font-medium">
      <span className="">
        {new Date().getFullYear()} &copy; All Rights Reserved.
      </span>
      <div className="flex items-center">
        Built with&nbsp;
        <span className="text-2xl text-[#F2B2A8]">&#9825;</span>
        &nbsp;by&nbsp;
        <Link
          className="underline underline-offset-[6px]"
          href="https://github.com/gjmooney"
          target="_blank"
        >
          Greg
        </Link>
      </div>
      <Link className="" href="/">
        {/* TODO: link to contact form? */}
        Say Hello
      </Link>
    </footer>
  );
};
export default Footer;
