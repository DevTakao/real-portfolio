import { ReactNode, useRef, useState } from "react";
import { BiMap } from "react-icons/bi";
import { FaChrome, FaGlobe, FaHandPointer } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { GiRollingEnergy, GiTrade } from "react-icons/gi";
import { GrDashboard } from "react-icons/gr";
import { IoPhonePortrait } from "react-icons/io5";
import { TbApi } from "react-icons/tb";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export type ProjectBlockProps = {
  title: string;
  body: string;
  tags: string[];
  children: ReactNode;
};

const expandVariants = {
  initial: {
    scale: 0.975,
    opacity: 0,
    borderRadius: "40px",
  },
  show: {
    scale: 1,
    opacity: 1,
    borderRadius: "0px",
    transition: {
      duration: 0.75,
      ease: "linear",
    },
  },
  hide: {
    scale: 0.975,
    opacity: 0,
    borderRadius: "40px",
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
};

const ndaVariants = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "linear",
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
};

const ProjectBlock = ({ title, body, tags, children }: ProjectBlockProps) => {
  const [show, setShow] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "start start"] });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.5 && !show) {
      setShow(true);
    }
    if (latest < 0.5 && show) {
      setShow(false);
    }
  });

  return (
    <motion.div
      ref={containerRef}
      variants={expandVariants}
      initial="initial"
      animate={show ? "show" : "hide"}
      className="project group h-full min-h-[250px] md:min-h-[400px] flex flex-col border-2 border-white rounded-lg p-5 md:p-7 text-center leading-normal hover:bg-white hover:text-green-dark transition-colors duration-500"
    >
      <div className="text-[10vw] md:text-[7vw] flex flex-col items-center mb-5">{children}</div>
      <h3 className="text-lg md:text-[2vw] font-semibold font-title my-4">{title}</h3>
      <p className="text-sm md:text-[1.2vw] font-body mb-5 flex-grow">{body}</p>
      <ul className="text-xs flex flex-wrap items-center justify-center py-2">
        {tags.map((tag: string, i: number) => (
          <li
            key={i}
            className="text-white font-mono py-1 px-2 rounded-full border border-white inline-block mr-2 mb-2 group-hover:border-green-dark group-hover:text-green-dark transition-colors duration-400"
          >
            {tag}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-b from-green-light to-green-dark py-12 md:py-24
    after:content-[''] after:w-full after:h-[5vh] after:bg-gradient-to-t after:from-[transparent] after:to-green-dark after:absolute after:z-[2] after:top-[100%] after:left-0"
    >
      <h3 className="text-2xl md:text-[3vw] font-title mb-14 text-center">What I Have Done</h3>
      <div className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[90%] mx-auto md:px-5">
        <ProjectBlock
          title="Portfolio (Old version)"
          body="This is an old portfolio which I wrote around the start of 2024 as a fun new-year project. You can see how much I played with the design."
          tags={["React", "Tailwind", "Framer Motion"]}
        >
          <FaGlobe />
          <a
            target="_blank"
            rel="noreferrer nofollow"
            href="https://devtakao-old.vercel.app/"
            className="text-sm mt-5 inline-flex items-center font-bold group"
          >
            <span className="hover:underline">Visit</span>
            <span className="ml-1 hidden group-hover:inline">
              <FaHandPointer />
            </span>
          </a>
        </ProjectBlock>
        <ProjectBlock
          title="CMS Dashboards"
          body="Performant, user-friendly e-commerce and administration content management systems."
          tags={["Next.js", "Reactstrap", "Vue 3", "Nuxt", "AWS Lambda", "Pug.js", "Node"]}
        >
          <GrDashboard />
        </ProjectBlock>
        <ProjectBlock
          title="Merchant Portal"
          body="Sheng Siong supermarket's web portal between suppliers and the mall to exchange information daily, such as invoices, promotions and receipts."
          tags={["Next.js", "Bootstrap", "GraphQL", "Strapi"]}
        >
          <GiTrade />
        </ProjectBlock>
        <ProjectBlock
          title="Geolocation Apps"
          body="Project for a network of Singaporean government departments. Includes features of viewing locations of different departments and their real-time data reports on a Map View."
          tags={["Leaflet", "Map APIs", "Next.js", "REST"]}
        >
          <BiMap />
        </ProjectBlock>
        <ProjectBlock
          title="Animations"
          body="Created text animations in a landing page, more than 50 complex components for a reusable UI-component library, and card animations for a healthcare website."
          tags={["AnimeJS", "Framer Motion", "Tailwind", "SCSS", "CSS", "JavaScript"]}
        >
          <GiRollingEnergy />
        </ProjectBlock>
        <ProjectBlock
          title="Landing Page"
          body="SPA landing page with aesthetic text animation for YTU Anime Club."
          tags={["HTML", "CSS", "JavaScript", "AnimeJS"]}
        >
          <IoPhonePortrait />
        </ProjectBlock>
        <ProjectBlock
          title="Chrome Extension"
          body="Chrome extension to save and share information, written with the modern Manifest V3 API for Visible One internal team."
          tags={["Manifest V3", "TypeScript", "Tailwind", "Extension"]}
        >
          <FaChrome />
        </ProjectBlock>
        <ProjectBlock
          title="PDF & QR Generator"
          body="A website where customers can register their data, upload PDF templates, populate dynamic data on the PDFs together with public link QR Codes, and download them."
          tags={["React", "TypeScript", "TailwindCSS", "Node"]}
        >
          <FaFilePdf />
        </ProjectBlock>
        <ProjectBlock
          title="Migration"
          body="Involved in a migration project where we had to move an existing Microsoft Dynamics 365 system to MongoDB and AWS Serverless architecture with no data loss."
          tags={["Node", "MongoDB", "Mongoose", "AWS Lambda"]}
        >
          <TbApi />
        </ProjectBlock>
      </div>
      <div className="flex justify-center mt-10">
        <motion.p
          variants={ndaVariants}
          initial="initial"
          whileInView="show"
          exit="hide"
          className="inline font-body text-sm font-semibold text-center mx-auto py-2 px-5 bg-white text-black rounded-full"
        >
          Projects are NDA-signed
        </motion.p>
      </div>
    </section>
  );
};

export default ProjectSection;
