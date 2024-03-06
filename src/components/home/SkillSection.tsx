import Leaves from "@/assets/images/leaves.png";
import { CSSProperties, ReactNode } from "react";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
import LeafIcon from "@/assets/images/leaf-icon.svg";

const skillContainerVars = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const skillBlockVars = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

export type SkillBlockProps = {
  label: string;
  children: ReactNode;
};
const SkillBlock = ({ label, children }: SkillBlockProps) => {
  return (
    <motion.div variants={skillBlockVars} className="skill-block w-full flex flex-col items-center mx-3 mb-5">
      <div className="text-[25vw] md:text-8xl flex items-center">{children}</div>
      <div className="flex items-center">
        <p className="font-body font-bold">{label}</p>
      </div>
    </motion.div>
  );
};

const SkillSection = () => {
  return (
    <section id="skills" className="relative bg-gradient-to-b from-green-dark to-green-light py-12 md:py-24">
      <div
        style={{ backgroundImage: `url(${Leaves})` }}
        className="absolute z-[0] w-full inset-y-0 bg-center bg-cover opacity-20"
      />
      <div className="relative z-[1] px-5 md:px-10 max-w-screen-md mx-auto">
        <h3
          style={{ "--bg-leaf": `url(${LeafIcon})` } as CSSProperties}
          className="text-2xl md:text-[3vw] font-title mb-14 text-center"
        >
          Core Skills
        </h3>
        <motion.div
          variants={skillContainerVars}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex [&>*]:w-1/4 flex-wrap justify-center"
        >
          <SkillBlock label="HTML">
            <FaHtml5 />
          </SkillBlock>
          <SkillBlock label="CSS">
            <FaCss3Alt />
          </SkillBlock>
          <SkillBlock label="JavaScript">
            <BiLogoJavascript />
          </SkillBlock>
          <SkillBlock label="TypeScript">
            <BiLogoTypescript />
          </SkillBlock>
          <SkillBlock label="React.js">
            <FaReact />
          </SkillBlock>
          <SkillBlock label="Next.js">
            <TbBrandNextjs />
          </SkillBlock>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
