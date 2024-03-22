import { ReactNode, useRef } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";

export type IntroBlockProps = {
  oppositeDirection?: boolean;
  children: ReactNode;
};

const IntroBlock = ({ oppositeDirection = false, children }: IntroBlockProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "start 50px"] });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 0.25], [oppositeDirection ? 50 : -50, 0]);
  const y = useTransform(scrollYProgress, [0, 0.25], [100, 0]);

  return (
    <motion.p
      ref={containerRef}
      style={{ x, y, opacity }}
      className="text-justify [text-align-last:center] text-base md:text-lg mb-7 md:mb-12"
    >
      {children}
    </motion.p>
  );
};

const IntroSection = () => {
  return (
    <section
      className="bg-green-dark py-12 md:py-24 text-center relative 
before:content-[''] before:w-full before:h-[5vh] before:bg-gradient-to-b before:from-[transparent] before:to-green-dark before:absolute before:z-[2] before:bottom-[100%] before:left-0 
after:content-[''] after:w-full after:h-[5vh] after:bg-gradient-to-t after:from-[transparent] after:to-green-dark after:absolute after:z-[2] after:top-[100%] after:left-0"
    >
      <h3 className="text-2xl md:text-[3vw] font-title mb-14 text-center">My Story</h3>
      <div className="mb-10 font-body max-w-screen-md mx-auto px-5">
        <IntroBlock oppositeDirection>
          Hi, my name is Aung Kaung Khant. You can also call me Takao, which means{" "}
          <i className="italic font-bold">a noble man</i> in Japanese.
        </IntroBlock>
        <IntroBlock>
          My journey of software started in 2017, my first year of university. I got interested in game development with
          Unity Engine and I started studying and writing small games in C# with the help of Google.
        </IntroBlock>
        <IntroBlock oppositeDirection>
          Six months in, I started preparing for a Web Programming career by studying HTML, CSS and JS on FreeCodeCamp
          and React.js from various resources. Then I began writing my own projects for practice such as replicating
          Nintendo.com and Trello. I also wrote a receipt printing app for my family shop.
        </IntroBlock>
        <IntroBlock>
          After two years of self-teaching, I knew my next step was to refine my fundamental skills and learn from the
          wisdom of an experienced mentor. Thus, I enrolled at a JavaScript & ReactJS Course at Turing.
        </IntroBlock>
        <IntroBlock oppositeDirection>
          I started applying for jobs after finishing the Course. It didn't take more than two months for me to land my
          first job at a Singaporean start-up as a remote React Developer.
        </IntroBlock>
      </div>
    </section>
  );
};

export default IntroSection;
