import University from "@/assets/images/university.jpg";
import Library from "@/assets/images/library.jpg";
import Waterfall from "@/assets/images/waterfall.jpg";
import { LuExternalLink } from "react-icons/lu";

const EducationSection = () => {
  return (
    <section
      id="education"
      style={{ backgroundImage: `url(${Waterfall})` }}
      className="relative bg-green-dark py-12 md:py-24 bg-center bg-fixed bg-cover"
    >
      <div className="absolute z-[0] top-0 left-0 w-full h-full bg-green-dark bg-opacity-50" />
      <div className="content relative z-[1]">
        <h3 className="text-2xl md:text-[3vw] font-title mb-14 text-center [text-shadow:0px_-5px_10px_rgba(0,0,0,1)]">
          Education
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-screen-lg mx-auto">
          <div className="w-[90%] max-w-screen-sm mx-auto">
            <div className="relative w-full pt-[100%] mx-auto overflow-hidden shadow-lg">
              <div className="absolute w-full h-full top-0 left-0">
                <img src={Library} alt="library" className="absolute inset-0 object-cover" />
              </div>
            </div>
            <div className="bg-bluegreen py-7 px-5 w-[90%] mx-auto relative -top-16 md:-top-32 left-0 text-center shadow-lg">
              <h3 className="font-title font-bold md:text-[1.75vw] mb-5">Turing Programming Training Center</h3>
              <p className="font-body font-thin text-sm md:text-[1.25vw]">JavaScript & React.js</p>
              <a
                href="https://www.facebook.com/turingprogrammingtrainingcenter/"
                target="_blank"
                rel="noreferrer"
                className="font-body text-sm md:text-[1.25vw] inline-flex items-center justify-between py-2 px-4 border-2 border-white rounded-full mx-auto mt-5 hover:bg-white hover:text-green-dark transition-colors duration-500"
              >
                <span className="mr-2 font-semibold">Official Page</span>
                <LuExternalLink />
              </a>
            </div>
          </div>

          <div className="w-[90%] max-w-screen-sm mx-auto">
            <div className="relative w-full pt-[100%] mx-auto overflow-hidden shadow-lg">
              <div className="absolute w-full h-full top-0 left-0">
                <img src={University} alt="university" className="absolute inset-0 object-cover" />
              </div>
            </div>
            <div className="bg-bluegreen py-7 px-5 w-[90%] mx-auto relative -top-16 md:-top-32 left-0 text-center shadow-lg">
              <h3 className="font-title font-bold md:text-[1.75vw] mb-5">Yangon Technological University</h3>
              <p className="font-body font-thin text-sm md:text-[1.25vw]">Fundamentals of Engineering</p>
              <a
                href="https://ytuedu.org/"
                target="_blank"
                rel="noreferrer"
                className="font-body text-sm md:text-[1.25vw] inline-flex items-center justify-between py-2 px-4 border-2 border-white rounded-full mx-auto mt-5 hover:bg-white hover:text-green-dark transition-colors duration-500"
              >
                <span className="mr-2 font-semibold">Official Page</span>
                <LuExternalLink />
              </a>
            </div>
          </div>
        </div>

        <p className="font-body w-[90%] max-w-screen-md mx-auto text-justify [text-align-last:center] px-5 [text-shadow:0px_-5px_10px_rgba(0,0,0,1)] border-2 border-white p-5">
          I am very grateful to be exposed to great education since my childhood. There were many really inspiring
          teachers in my early life that I can remember. They are the foundation of my critical thinking, academic
          excellence and self-esteem. <br />
          <strong className="mt-2 block">Thank you, my parents and my teachers.</strong>
        </p>
      </div>
    </section>
  );
};

export default EducationSection;
