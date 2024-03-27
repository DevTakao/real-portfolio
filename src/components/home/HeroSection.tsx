import Forest from "@/assets/images/forest.webp";
import ForestOverlay from "@/assets/images/forest-overlay.avif";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const heroVars = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
};

const HeroSection = () => {
  const allImageCount = 2;
  const [loadedImageCount, setLoadedImageCount] = useState(0);
  const [isDisguised, setIsDisguised] = useState(true);

  const incrementLoadCount = () => setLoadedImageCount((prev) => prev + 1);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (loadedImageCount === allImageCount) {
      intervalId = setInterval(() => {
        setIsDisguised(!isDisguised);
      }, 4000);
    }

    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, [loadedImageCount, isDisguised]);

  return (
    <section id="home" className="hero-section relative overflow-hidden">
      <img onLoad={incrementLoadCount} src={Forest} alt="forest" className="block w-full h-screen object-cover" />

      <motion.div
        variants={heroVars}
        initial="initial"
        animate={loadedImageCount === allImageCount ? "animate" : ""}
        className="hero-content absolute z-[1] top-0 left-0 w-full h-full flex flex-col items-center justify-center"
      >
        <div className="group text-center">
          <div className="hero-title inline-block relative">
            <h1
              data-disguised={isDisguised}
              style={{ backgroundImage: `url(${Forest})`, backgroundClip: "text" }}
              className="font-title leading-none text-[25vw] md:text-[18vw] data-[disguised=true]:text-[transparent] data-[disguised=false]:[color:white] px-4 pt-4 transition-colors duration-[5s] bg-cover bg-top px-4 relative z-[1] cursor-pointer"
            >
              Takao
            </h1>
            <h1 className="font-title leading-none text-[25vw] md:text-[18vw] [text-shadow:0px_-5px_10px_rgba(0,0,0,1)] [color:transparent] px-4 pt-4 absolute z-0 top-0 left-0">
              Takao
            </h1>
          </div>
          <div className="hero-title inline-block relative">
            <h2
              data-disguised={isDisguised}
              style={{ backgroundImage: `url(${Forest})`, backgroundClip: "text" }}
              className="font-title leading-none text-[7vw] md:text-[5vw] data-[disguised=true]:text-[transparent] data-[disguised=false]:[color:white] px-4 pt-4 transition-colors duration-[5s] bg-cover bg-center px-4 relative z-[1] cursor-pointer"
            >
              A Master Web Developer
            </h2>
            <h2 className="text-[7vw] md:text-[5vw] leading-none font-title [text-shadow:0px_-5px_10px_rgba(0,0,0,1)] [color:transparent] px-4 pt-4 absolute z-0 top-0 left-0">
              A Master Web Developer
            </h2>
          </div>
        </div>
      </motion.div>

      <img
        onLoad={incrementLoadCount}
        src={ForestOverlay}
        alt="forest"
        className="overlay-image block w-full h-screen object-cover absolute z-[2] top-0 left-0 pointer-events-none"
      />
      {loadedImageCount === allImageCount && (
        <div
          data-disguised={isDisguised}
          className="mask-overlay absolute z-[3] top-0 left-0 w-full h-full bg-green-dark [mask-image:radial-gradient(transparent_40%,black_80%)] data-[disguised=true]:scale-100 data-[disguised=false]:scale-150 transition-scale duration-[5s] pointer-events-none"
        />
      )}
    </section>
  );
};

export default HeroSection;
