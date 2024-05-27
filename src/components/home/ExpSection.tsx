import MountainView from "@/assets/images/mountainview.webp";
import { FaBuilding, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

const bgVars = {
  initial: {
    x: "100%",
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
};

const contentVars = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "linear",
      delay: 0.2,
    },
  },
};

export type ExpBlockProps = {
  position: string;
  company: string;
  companyUrl: string;
  duration: string;
};

const ExpBlock = ({ position, company, companyUrl, duration }: ExpBlockProps) => {
  return (
    <li>
      <div className="exp-block flex flex-col leading-none py-3 relative">
        <svg
          className="absolute z-[1] -inset-[2.8rem] top-[0.8rem] w-6 h-6 fill-green-dark bg-white p-1 rounded-full shadow-md"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"></path>{" "}
            <rect width="24" height="24" fill="none"></rect>{" "}
          </g>
        </svg>
        <h4 className="text-base md:text-[1.6vw] font-semibold mb-2">{position}</h4>
        {/* <hr className="my-3 border-y border-white/20 -translate-x-10 w-[120%]" /> */}
        <div className="py-2">
          <a href={companyUrl} target="_blank" rel="noreferrer" className="text-sm flex items-center mb-1">
            <FaBuilding /> <span className="ml-1">{company}</span>
          </a>
          <time className="text-sm flex items-center">
            <FaClock />
            <span className="ml-1">{duration}</span>
          </time>
        </div>
      </div>
    </li>
  );
};

const ExpSection = () => {
  return (
    <section
      id="career"
      style={{ backgroundImage: `url(${MountainView})` }}
      className="bg-green-dark text-center relative bg-top bg-cover bg-no-repeat min-h-screen py-12 md:py-24"
    >
      <div className="opacity-50 absolute top-0 left-0 w-full h-full z-[0]" />
      <div className="max-w-screen-md mx-auto relative text-white font-body overflow-hidden">
        <motion.div
          variants={bgVars}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="absolute z-[0] w-full h-full top-0 left-0 bg-green-dark opacity-50"
        />
        <motion.div
          variants={contentVars}
          initial="initial"
          whileInView="animate"
          className="relative z-[1] py-10 md:py-16 px-2 backdrop-blur-sm"
        >
          <h3 className="text-2xl md:text-[3vw] font-title mb-5 md:mb-10 text-center relative z-[1]">Career</h3>
          <div className="px-5 md:px-12 flex justify-center">
            <ul className="experience-list flex flex-col text-left md:pr-12 [&>li]:mb-5 lg:[&>li]:mb-12 last:[&>li]:mb-0 border-l-2 border-white/50 px-8">
              <ExpBlock
                position="Technical Research Analyst"
                company="Visible One, Singapore"
                companyUrl="https://visibleone.com/"
                duration="Jun 2023 - Present"
              />
              <ExpBlock
                position="Front-End Team Lead"
                company="Nexstack, Singapore"
                companyUrl="https://nexstack.sg/"
                duration="Aug 2022 - Jun 2023"
              />
              <ExpBlock
                position="React Front-End Developer"
                company="Nexstack, Singapore"
                companyUrl="https://nexstack.sg/"
                duration="Mar 2022 - Aug 2022"
              />
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpSection;
