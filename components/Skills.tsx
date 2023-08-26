"use client";

import { motion } from "framer-motion";

interface SkillProps {
  name: string;
  x: string;
  y: string;
}
const Skill = ({ name, x, y }: SkillProps) => {
  return (
    <motion.div
      className="absolute flex cursor-pointer items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-primary first:h-20 first:w-20"
      whileHover={{
        scale: 1.05,
      }}
      initial={{ x: 0, y: 0, opacity: 0 }}
      whileInView={{ x, y, opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="mt-32 w-full text-center text-8xl font-bold">Skills</h2>
      <div className="bg-circularLight relative flex h-screen w-full items-center justify-center rounded-full">
        <Skill name="Web" x="0vw" y="0vw" />
        <Skill name="CSS" x="-20vw" y="2vw" />
        <Skill name="HTML" x="0vw" y="12vw" />
        <Skill name="TypeScript" x="-24vw" y="-18vw" />
        <Skill name="React" x="15vw" y="-12vw" />
        <Skill name="NextJS" x="34vw" y="-5vw" />
        <Skill name="SQL" x="0vw" y="-20vw" />
        <Skill name="Tailwind" x="-25vw" y="18vw" />
        <Skill name="Java" x="20vw" y="14vw" />
      </div>
    </>
  );
};
export default Skills;
