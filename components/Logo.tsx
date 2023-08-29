"use client";

import { motion } from "framer-motion";
import Link from "next/link";

//TODO: Get bg color working with dark mode

const Logo = ({}) => {
  return (
    <>
      <motion.div
        className="mt-2 rounded-full border border-transparent bg-[#0F172A] dark:border-primary"
        whileHover={{
          backgroundColor: [
            "#0F172A",
            "#F7D8B9",
            "#AEC9E0",
            "#F2B2A8",
            "#D9D9D9",
            "#0F172A",
          ],
          transition: { duration: 3, repeat: Infinity },
        }}
      >
        <Link
          href="/"
          className="flex h-16 w-16 items-center justify-center text-2xl font-bold text-[#F8FAFC] text-primary"
        >
          GM
        </Link>
      </motion.div>
    </>
  );
};

export default Logo;
