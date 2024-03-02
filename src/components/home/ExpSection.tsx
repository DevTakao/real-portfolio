import MountainView from "@/assets/images/mountainview.jpg";
import { FaBuilding, FaClock } from "react-icons/fa";

export type ExpBlockProps = {
  position: string;
  company: string;
  companyUrl: string;
  duration: string;
};
const ExpBlock = ({ position, company, companyUrl, duration }: ExpBlockProps) => {
  return (
    <div className="exp-block flex flex-col leading-none py-3">
      <h4 className="text-base md:text-[2vw] font-semibold mb-2">{position}</h4>
      <a href={companyUrl} target="_blank" referrerPolicy="no-referrer" className="text-sm flex items-center mb-1">
        <FaBuilding /> <span className="ml-1">{company}</span>
      </a>
      <time className="text-sm flex items-center">
        <FaClock />
        <span className="ml-1">{duration}</span>
      </time>
    </div>
  );
};

const ExpSection = () => {
  return (
    <section
      id="experience"
      style={{ backgroundImage: `url(${MountainView})` }}
      className="bg-green-dark text-center relative bg-top bg-cover bg-no-repeat min-h-screen py-12 md:py-24"
    >
      <div className="opacity-50 absolute top-0 left-0 w-full h-full z-[0]" />
      <div className="max-w-screen-md mx-auto relative text-white font-body overflow-hidden">
        <div className="absolute z-[0] w-full h-full bg-green-dark opacity-75 blur-lg" />
        <div className="relative z-[1] py-5 md:py-16 px-2">
          <h3 className="text-2xl md:text-[3vw] font-title mb-5 md:mb-10 text-center relative z-[1]">Experience</h3>
          <div className="experience-list flex flex-col text-left px-3 md:px-12">
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
              duration="Mar 2022 - Jun 2023"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpSection;