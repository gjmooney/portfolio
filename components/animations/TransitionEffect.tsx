"use client";

import { motion } from "framer-motion";

const Transition = () => {
  return (
    <>
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ z: "0%", width: "0%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed bottom-0 right-full top-0 z-40 w-screen bg-secondary"
      />
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        className="fixed bottom-0 right-full top-0 z-30 w-screen bg-pastel-pink"
      />
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ z: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
        className="fixed bottom-0 right-full top-0 z-20 w-screen bg-pastel-purple"
      />
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ z: "0%", width: "0%" }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
        className="fixed bottom-0 right-full top-0 z-10 w-screen bg-secondary"
      />
    </>
  );
};
export default Transition;
