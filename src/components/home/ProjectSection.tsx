import { ReactNode } from "react";
import { BiMap } from "react-icons/bi";
import { FaChrome, FaQrcode } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { GiRollingEnergy, GiTrade } from "react-icons/gi";
import { GrDashboard } from "react-icons/gr";
import { IoPhonePortrait } from "react-icons/io5";
import { TbApi } from "react-icons/tb";
import { motion } from "framer-motion";

const projectVars = {
  initial: {
    opacity: 0.1,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.2,
    },
  },
};

export type ProjectBlockProps = {
  title: string;
  body: string;
  children: ReactNode;
};
const ProjectBlock = ({ title, body, children }: ProjectBlockProps) => {
  return (
    <motion.div
      variants={projectVars}
      initial="initial"
      whileInView="animate"
      className="project border-2 border-white rounded-lg p-5 md:p-7 text-center leading-normal hover:bg-white hover:text-green-dark hover:cursor-pointer transition-colors duration-500"
    >
      <div className="text-[10vw] md:text-[7vw] flex flex-col items-center mb-5">{children}</div>
      <h3 className="text-lg md:text-[2vw] font-semibold font-title my-4">{title}</h3>
      <p className="text-sm md:text-[1.2vw] font-body">{body}</p>
    </motion.div>
  );
};

const ProjectSection = () => {
  return (
    <section id="projects" className="relative bg-gradient-to-b from-green-light to-green-dark py-12 md:py-24">
      <h3 className="text-2xl md:text-[3vw] font-title mb-14 text-center">Projects Finished</h3>
      <div className="projects-container grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 max-w-[90%] mx-auto px-5">
        <ProjectBlock title="Chrome Extension" body="Useful chrome extensions with the modern Manifest V3 API.">
          <FaChrome />
        </ProjectBlock>
        <ProjectBlock title="PDF Maker" body="Customers can modify and download their data in PDF formats.">
          <FaFilePdf />
        </ProjectBlock>
        <ProjectBlock
          title="QR Code Generator"
          body="Dynamically generate QR Codes and provide output in various media formats."
        >
          <FaQrcode />
        </ProjectBlock>
        <ProjectBlock title="CMS Dashboard" body="Fast and user-friendly e-commerce and administration dashboards.">
          <GrDashboard />
        </ProjectBlock>
        <ProjectBlock
          title="Migration"
          body="Migrating an existing system with important data from outdated technology stacks to modern blazing fast and secure ones, with little to no loss of data."
        >
          <TbApi />
        </ProjectBlock>
        <ProjectBlock
          title="Merchant Portal"
          body="Dashboards with convenient data exchange between users of different parties."
        >
          <GiTrade />
        </ProjectBlock>
        <ProjectBlock
          title="Geolocation"
          body="Maps and location pins come into rescue to help discover the important locations and notify them in real time."
        >
          <BiMap />
        </ProjectBlock>
        <ProjectBlock
          title="Animations"
          body="Breathe life into digital content, making them feel more immersive and fun. It's not just a website anymore. It's an alternate world!"
        >
          <GiRollingEnergy />
        </ProjectBlock>
        <ProjectBlock
          title="Landing Page"
          body="Eye-catching and mobile-friendly landing pages for small businesses and organizations."
        >
          <IoPhonePortrait />
        </ProjectBlock>
      </div>
      <p className="font-body text-sm text-center max-w-screen-md mx-auto mt-10 px-2">
        *Sources are not included due to NDA*
      </p>
    </section>
  );
};

export default ProjectSection;
