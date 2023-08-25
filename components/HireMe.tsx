import Link from "next/link";
import { CircularText } from "./Icons";
import Image from "next/image";

const HireMe = () => {
  return (
    <div className="fixed bottom-11 right-4 flex items-center justify-center overflow-hidden">
      <div className="relative flex h-auto w-48 items-center">
        <Image
          className="animate-spin-slow"
          src="/spinny2.svg"
          alt=""
          width={196}
          height={196}
        />
        <Link
          href="/"
          className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-solid border-primary bg-primary font-semibold text-primary-foreground shadow-md hover:border-primary hover:bg-primary-foreground hover:text-primary"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};
export default HireMe;
