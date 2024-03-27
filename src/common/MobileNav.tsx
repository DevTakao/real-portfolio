import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { CgMenuRight } from "react-icons/cg";

const navigationVars = {
  hide: {
    scale: 0,
  },
  show: {
    scale: 1,
  },
};

export type NavButtonProps = {
  href: string;
  label: string;
  handleClick: () => void;
};

const NavButton = ({ href, label, handleClick }: NavButtonProps) => {
  return (
    <li
      onClick={handleClick}
      className="nav-link block w-full relative mb-[7.5vh] font-title border-l-[3px] border-b-[3px] border-whitegreen px-5 pt-1 pb-4"
    >
      <a
        aria-label={label}
        href={href}
        className="block leading-none w-full h-full text-2xl font-medium active:translate-x-5 transition-all duration-300"
      >
        <span className="relative z-[1]">{label}</span>
      </a>
    </li>
  );
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [500, 100], [0.75, 1], { clamp: true });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    const resizeHandler = () => {
      const { matches: isTabletOrLarger } = window.matchMedia("(min-width: 640px)");
      if (isTabletOrLarger) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", resizeHandler);
  }, []);

  return (
    <>
      <a
        href="#home"
        className="inline-flex sm:hidden font-title fixed z-[11] top-3 left-0 text-2xl pl-5 items-center"
        aria-label="Home"
      >
        <img src="/favicon.png" alt="taka" width={44} className="mr-2 rounded-full bg-green-dark" />
        <motion.span style={{ scale }} className="[text-shadow:0px_-5px_10px_rgba(0,0,0,1)] origin-left">
          Taka
        </motion.span>
      </a>
      <button
        aria-label="Menu"
        data-open={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="menu-button block sm:hidden fixed top-2 right-2 z-[11] p-1 bg-[#000]/50 rounded-lg data-[open=true]:-scale-100 transition-all duration-500"
      >
        <CgMenuRight size={44} />
      </button>
      <nav
        aria-expanded={isOpen}
        data-open={isOpen}
        className="block sm:hidden fixed top-0 left-0 w-full h-full z-[10] data-[open=false]:opacity-0 data-[open=false]:pointer-events-none data-[open=true]:opacity-100 data-[open=true]:pointer-events-auto transition-all duration-500"
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={navigationVars}
              initial="hide"
              animate="show"
              exit="hide"
              className="backdrop absolute z-[0] top-0 left-0 w-full h-full bg-[#000]/90 pointer-events-none [transform-origin:95%_5%]"
            />
          )}
        </AnimatePresence>
        <ul
          data-open={isOpen}
          className="relative z-[1] h-full px-5 py-7 flex flex-col items-start justify-center max-w-[320px] mx-auto opacity-0 data-[open=true]:opacity-100 transition-all duration-500 delay-300 data-[open=true]:delay-0"
        >
          <NavButton handleClick={() => setIsOpen(false)} href="#skills" label="Skills" />
          <NavButton handleClick={() => setIsOpen(false)} href="#career" label="Career" />
          <NavButton handleClick={() => setIsOpen(false)} href="#projects" label="Projects" />
          <NavButton handleClick={() => setIsOpen(false)} href="#education" label="Education" />
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;
