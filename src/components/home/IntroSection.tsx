import { BiSolidQuoteAltRight } from "react-icons/bi";

const IntroSection = () => {
  return (
    <section className="bg-green-dark py-12 md:py-24 text-center relative before:content-[''] before:w-full before:h-[5vh] before:bg-gradient-to-b before:from-[transparent] before:to-green-dark before:absolute before:z-[2] before:bottom-[100%] before:left-0">
      <div className="max-w-screen-md mx-auto px-5">
        <blockquote className="font-body text-sm md:text-[2vw] leading-normal relative">
          <span>
            <BiSolidQuoteAltRight className="absolute -top-7 -right-4 md:-top-[5vw] md:-right-[5vw] text-7xl md:text-[10vw] opacity-10" />
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
