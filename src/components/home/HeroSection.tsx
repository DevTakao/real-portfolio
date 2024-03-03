import Forest from "@/assets/images/forest.jpg";
import ForestOverlay from "@/assets/images/forest-overlay.png";

const HeroSection = () => {
  return (
    <section className="hero-section relative">
      <img src={Forest} alt="forest" className="block w-full h-screen object-cover" />

      <div className="hero-content absolute z-[1] top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <div className="group text-center">
          <div className="hero-title inline-block relative">
            <h1
              style={{ backgroundImage: `url(${Forest})`, backgroundClip: "text" }}
              className="font-title leading-none text-[25vw] md:text-[18vw] text-white group-hover:[color:transparent] transition-colors duration-1000 bg-cover bg-top px-4 relative z-[1] cursor-pointer"
            >
              Takao
            </h1>
            <h1 className="font-title leading-none text-[25vw] md:text-[18vw] [text-shadow:0px_-5px_10px_rgba(0,0,0,1)] [color:transparent] px-4 absolute z-0 top-0 left-0">
              Takao
            </h1>
          </div>
          <div className="hero-title inline-block relative">
            <h2
              style={{ backgroundImage: `url(${Forest})`, backgroundClip: "text" }}
              className="font-title leading-none text-[7vw] md:text-[5vw] text-white group-hover:[color:transparent] transition-colors duration-1000 bg-cover bg-center px-4 relative z-[1] cursor-pointer"
            >
              A Master Web Developer
            </h2>
            <h2 className="text-[7vw] md:text-[5vw] leading-none font-title [adow:0px_-5px_10px_rgba(0,0,0,1)] [color:transparent] px-4 absolute z-0 top-0 left-0">
              A Master Web Developer
            </h2>
          </div>
        </div>
      </div>

      <img
        src={ForestOverlay}
        alt="forest"
        className="overlay-image block w-full h-screen object-cover absolute z-[2] top-0 left-0 pointer-events-none"
      />
      <div className="mask-overlay absolute z-[3] top-0 left-0 w-full h-full bg-green-dark [mask-image:radial-gradient(transparent_50%,black_80%)] pointer-events-none" />
    </section>
  );
};

export default HeroSection;
