import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import Bush from "@/assets/images/bush.avif";
import { HiArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"], { clamp: true });

  return (
    <footer
      ref={containerRef}
      className="Footer bg-gradient-to-b from-green-light to-green-dark pt-[10vh] pb-[10vh] sm:pb-[5vh] px-6 text-base font-body bg-light text-center relative 
    before:content-[''] before:w-full before:h-[5vh] before:bg-gradient-to-b before:from-[transparent] before:to-green-light before:absolute before:z-[2] before:bottom-[100%] before:left-0 
    "
    >
      <motion.img
        src={Bush}
        alt="bush"
        style={{ x }}
        className="absolute w-[35vw] md:max-w-[25vw] z-[2] object-contain bottom-0 left-0 pointer-events-none drop-shadow-2xl"
      />
      <div className="socials max-w-md mx-auto text-4xl md:text-[3vw] flex items-center justify-center mb-10 [&>a]:mr-2 [&>a:last]:mr-0">
        <a
          aria-label="Visit Linkedin profile"
          href="https://www.linkedin.com/in/takao21/"
          target="_blank"
          rel="noreferrer"
          className="text-dark hover:text-blue transition-all duration-300 hover:-translate-y-1 hover:[box-shadow:0px_4px_12px_0px_rgba(0,0,0,0.5)]"
        >
          <FaLinkedin />
        </a>
        <a
          aria-label="Visit GitHub profile"
          href="https://github.com/DevTakao/"
          target="_blank"
          rel="noreferrer"
          className="text-dark hover:text-blue transition-all duration-300 hover:-translate-y-1 hover:[box-shadow:0px_4px_12px_0px_rgba(0,0,0,0.5)]"
        >
          <FaGithubSquare />
        </a>
        <a
          aria-label="Visit Facebook profile"
          href="https://www.facebook.com/joichiro.takao/"
          target="_blank"
          rel="noreferrer"
          className="text-dark hover:text-blue transition-all duration-300 hover:-translate-y-1 hover:[box-shadow:0px_4px_12px_0px_rgba(0,0,0,0.5)]"
        >
          <FaFacebookSquare />
        </a>
      </div>
      <p className="mb-10">Portfolio, Aung Kaung Khant, 2024</p>
      <a
        href="https://github.com/DevTakao/real-portfolio"
        target="_blank"
        rel="noreferrer"
        className="text-xs flex items-center justify-center group"
      >
        <span className="font-bold mr-1">View Source Code</span>{" "}
        <HiArrowLongRight size="16" className="group-hover:translate-x-[5px] transition-transform duration-300" />
      </a>
    </footer>
  );
};

export default Footer;
