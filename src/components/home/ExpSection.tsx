import MountainView from "@/assets/images/mountainview.webp";
import { FaBuilding, FaClock } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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
      delay: 0.75,
    },
  },
};

const storyVars = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "linear",
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
    <div className="exp-block flex flex-col leading-none py-3 mb-5">
      <h4 className="text-base md:text-[2vw] font-semibold mb-2">{position}</h4>
      <hr className="opacity-75 mb-2" />
      <div className="px-2">
        <a href={companyUrl} target="_blank" rel="noreferrer" className="text-sm flex items-center mb-1">
          <FaBuilding /> <span className="ml-1">{company}</span>
        </a>
        <time className="text-sm flex items-center">
          <FaClock />
          <span className="ml-1">{duration}</span>
        </time>
      </div>
    </div>
  );
};

const ExpSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="career"
      style={{ backgroundImage: `url(${MountainView})` }}
      className="bg-green-dark text-center relative bg-top bg-cover bg-no-repeat min-h-screen py-12 md:py-24"
    >
      <div className="opacity-50 absolute top-0 left-0 w-full h-full z-[0]" />
      <div className="max-w-screen-lg mx-auto relative text-white font-body overflow-hidden">
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
          className="relative z-[1] py-5 md:py-16 px-2 backdrop-blur-sm"
        >
          <h3 className="text-2xl md:text-[3vw] font-title mb-5 md:mb-10 text-center relative z-[1]">How I Got Here</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-12">
            <div className="experience-list flex flex-col text-left md:pr-12 mb-10">
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
            </div>
            <div className="mb-10">
              <p className="text-left">
                My journey of software started in 2017, my first year of university. I got interested in game
                development with Unity Engine and I started studying and writing small games in C# with the help of
                Google.
                <AnimatePresence mode="wait">
                  {isExpanded ? (
                    <motion.span
                      key={isExpanded + ""}
                      variants={storyVars}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <br />
                      <br />
                      Six months in, I started preparing for a Web Programming career by studying HTML, CSS and JS on
                      FreeCodeCamp and React.js from various resources. Then I began writing my own projects for
                      practice such as replicating Nintendo.com and Trello. I also wrote a receipt printing app for my
                      family shop.
                      <br />
                      <br />
                      After two years of self-teaching, I knew my next step was to refine my fundamental skills and
                      learn from the wisdom of an experienced mentor. Thus, I enrolled at a JavaScript & ReactJS Course
                      at Turing.
                      <br />
                      <br />I started applying for jobs after finishing the Course. It didn't take more than two months
                      for me to land my first job at a Singaporean start-up as a remote React Developer.
                      <button onClick={() => setIsExpanded(false)} className="font-bold text-white/50 ml-1">
                        ...Read Less
                      </button>
                    </motion.span>
                  ) : (
                    <button onClick={() => setIsExpanded(true)} className="font-bold text-white/50 ml-1">
                      ...Read More
                    </button>
                  )}
                </AnimatePresence>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpSection;
