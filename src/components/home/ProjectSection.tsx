import { ReactNode } from "react";
import { BiMap } from "react-icons/bi";
import { FaChrome, FaQrcode } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { GiRollingEnergy, GiTrade } from "react-icons/gi";
import { GrDashboard } from "react-icons/gr";
import { IoPhonePortrait } from "react-icons/io5";
import { TbApi } from "react-icons/tb";
import FadeInBlock from "@/common/FadeInBlock";

export type ProjectBlockProps = {
  title: string;
  body: string;
  tags: string[];
  children: ReactNode;
};

const ProjectBlock = ({ title, body, tags, children }: ProjectBlockProps) => {
  return (
    <FadeInBlock>
      <div className="project group h-full min-h-[250px] md:min-h-[400px] flex flex-col border-2 border-white rounded-lg p-5 md:p-7 text-center leading-normal hover:bg-white hover:text-green-dark hover:cursor-pointer transition-colors duration-500">
        <div className="text-[10vw] md:text-[7vw] flex flex-col items-center mb-5">{children}</div>
        <h3 className="text-lg md:text-[2vw] font-semibold font-title my-4">{title}</h3>
        <p className="text-sm md:text-[1.2vw] font-body mb-5 flex-grow">{body}</p>
        <ul className="text-xs flex flex-wrap items-center py-2">
          {tags.map((tag: string, i: number) => (
            <li
              key={i}
              className="text-white font-mono py-1 px-2 rounded-full border border-white inline-block mr-2 mb-2 group-hover:border-green-dark group-hover:text-green-dark transition-colors duration-400"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </FadeInBlock>
  );
};

const ProjectSection = () => {
  return (
    <section id="projects" className="relative bg-gradient-to-b from-green-light to-green-dark py-12 md:py-24">
      <h3 className="text-2xl md:text-[3vw] font-title mb-14 text-center">Projects Finished</h3>
      <div className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[90%] mx-auto md:px-5">
        <ProjectBlock
          title="CMS Dashboards"
          body="Fast and user-friendly e-commerce and administration dashboards."
          tags={["Next.js", "Reactstrap", "Vue 3", "Nuxt", "AWS Lambda", "Pug.js", "Node"]}
        >
          <GrDashboard />
        </ProjectBlock>
        <ProjectBlock
          title="Merchant Portal"
          body="Dashboards with convenient data exchange between users of different parties."
          tags={["Next.js", "Bootstrap", "GraphQL", "Strapi"]}
        >
          <GiTrade />
        </ProjectBlock>
        <ProjectBlock
          title="Geolocation"
          body="Maps and location pins come into rescue to help discover the important locations and notify them in real time."
          tags={["Leaflet", "Map APIs", "Next.js", "REST"]}
        >
          <BiMap />
        </ProjectBlock>
        <ProjectBlock
          title="Animations"
          body="Breathe life into digital content, making them feel more immersive and fun. It's not just a website anymore. It's an alternate world!"
          tags={["AnimeJS", "Framer Motion", "Tailwind", "SCSS", "CSS", "JavaScript"]}
        >
          <GiRollingEnergy />
        </ProjectBlock>
        <ProjectBlock
          title="Landing Page"
          body="Eye-catching and mobile-friendly landing pages for small businesses and organizations."
          tags={["HTML", "CSS", "JavaScript", "AnimeJS"]}
        >
          <IoPhonePortrait />
        </ProjectBlock>
        <ProjectBlock
          title="Chrome Extension"
          body="Useful chrome extensions with the modern Manifest V3 API."
          tags={["Manifest V3", "TypeScript", "Tailwind", "Extension"]}
        >
          <FaChrome />
        </ProjectBlock>
        <ProjectBlock
          title="PDF Maker"
          body="Customers can modify and download their data in PDF formats."
          tags={["React", "TypeScript", "TailwindCSS", "Node"]}
        >
          <FaFilePdf />
        </ProjectBlock>
        <ProjectBlock
          title="QR Code Generator"
          body="Dynamically generate QR Codes and provide output in various media formats."
          tags={["Pixi", "React", "TypeScript"]}
        >
          <FaQrcode />
        </ProjectBlock>
        <ProjectBlock
          title="Migration"
          body="Migrating an existing system with important data from outdated technology stacks to modern blazing fast and secure ones, with little to no loss of data."
          tags={["Node", "MongoDB", "Mongoose", "AWS Lambda"]}
        >
          <TbApi />
        </ProjectBlock>
      </div>
      <div className="flex justify-center mt-10">
        <p className="inline font-body text-sm font-semibold text-center mx-auto py-2 px-5 bg-white text-black rounded-full">
          All the projects are NDA-signed
        </p>
      </div>
    </section>
  );
};

export default ProjectSection;
