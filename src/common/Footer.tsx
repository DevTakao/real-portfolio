import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import Bush from "@/assets/images/bush.avif";

const Footer = () => {
  return (
    <footer
      className="Footer bg-gradient-to-b from-green-light to-green-dark pt-[10vh] pb-[10vh] sm:pb-[5vh] px-6 text-base font-body bg-light text-center relative 
    before:content-[''] before:w-full before:h-[5vh] before:bg-gradient-to-b before:from-[transparent] before:to-green-light before:absolute before:z-[2] before:bottom-[100%] before:left-0 
    "
    >
      <img
        src={Bush}
        alt="bush"
        className="absolute max-w-[25vw] z-[2] object-contain bottom-0 left-0 pointer-events-none"
      />
      <div className="socials max-w-md mx-auto text-3xl md:text-[3vw] flex items-center justify-center mb-4 [&>a]:mr-2 [&>a:last]:mr-0">
        <a
          aria-label="Visit Linkedin profile"
          href="https://www.linkedin.com/in/takao21/"
          target="_blank"
          rel="noreferrer"
          className="text-dark hover:text-blue transition-all duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          aria-label="Visit GitHub profile"
          href="https://github.com/DevTakao/"
          target="_blank"
          rel="noreferrer"
          className="text-dark hover:text-blue transition-all duration-300"
        >
          <FaGithubSquare />
        </a>
        <a
          aria-label="Visit Facebook profile"
          href="https://www.facebook.com/joichiro.takao/"
          target="_blank"
          rel="noreferrer"
          className="text-dark hover:text-blue transition-all duration-300"
        >
          <FaFacebookSquare />
        </a>
      </div>
      Portfolio, Aung Kaung Khant, 2024
    </footer>
  );
};

export default Footer;
