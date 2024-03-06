import { BiSolidQuoteAltRight } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVars = {
  initial: {
    opacity: 0,
    y: -25,
  },
  animate: {
    opacity: 0.1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      delay: 0.1,
    },
  },
};

const IntroSection = () => {
  return (
    <section
      className="bg-green-dark py-12 md:py-24 text-center relative 
    before:content-[''] before:w-full before:h-[5vh] before:bg-gradient-to-b before:from-[transparent] before:to-green-dark before:absolute before:z-[2] before:bottom-[100%] before:left-0 
    after:content-[''] after:w-full after:h-[5vh] after:bg-gradient-to-t after:from-[transparent] after:to-green-dark after:absolute after:z-[2] after:top-[100%] after:left-0"
    >
      <div className="max-w-screen-md mx-auto px-5 relative z-[1]">
        <blockquote className="font-body text-sm md:text-[2vw] leading-normal relative">
          <span className="absolute -top-7 -right-4 md:-top-[5vw] md:-right-[5vw] text-7xl md:text-[10vw]">
            <motion.span
              variants={iconVars}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false }}
              className="block"
            >
              <BiSolidQuoteAltRight />
            </motion.span>
          </span>
          It is important to draw wisdom from many different places. If we take it from only one place, it becomes rigid
          and stale.
          <p className="font-semibold mt-4">&mdash; General Iroh</p>
        </blockquote>
      </div>
    </section>
  );
};

export default IntroSection;
