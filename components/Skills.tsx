"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

interface SkillProps {
  name: string;
  x: string;
  y: string;
}

// TODO: make sure circles don't render weird in prod. started happening when I made changed web to not use skill component
const Skill = ({ name, x, y }: SkillProps) => {
  return (
    <LazyMotion strict features={domAnimation}>
      <m.div
        className="absolute flex cursor-pointer items-center justify-center rounded-full bg-primary/80 px-3 py-2 text-sm font-semibold text-primary-foreground shadow-primary md:h-24 md:w-24 md:px-6 md:py-3 md:text-base "
        whileHover={{
          scale: 1.05,
        }}
        initial={{ x: 0, y: 0, opacity: 0 }}
        whileInView={{ x, y, opacity: 1, transition: { duration: 1.5 } }}
        viewport={{ once: true }}
      >
        {name}
      </m.div>
    </LazyMotion>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="mt-32 w-full text-center text-7xl font-bold md:text-8xl">
        Skills
      </h2>
      <div className="relative flex h-[50vh] w-full items-center justify-center rounded-full bg-circularMobile md:h-screen md:bg-circular">
        <div className="flex cursor-pointer items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-primary duration-700 hover:scale-110 md:h-20 md:w-20">
          Web
        </div>
        {/* <Skill name="Web" x="0vw" y="0vw" /> */}
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
