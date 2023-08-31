"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Transition = () => {
  const pathname = usePathname();
  return (
    <>
      <motion.div
        key={pathname}
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed bottom-0 right-full top-0 z-30 w-screen bg-pastel-pink"
      />
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ z: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        className="fixed bottom-0 right-full top-0 z-20 w-screen bg-pastel-purple"
      />
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ z: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
        className="fixed bottom-0 right-full top-0 z-10 w-screen bg-secondary"
      />
    </>
  );
};
export default Transition;
