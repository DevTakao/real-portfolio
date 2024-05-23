import classNames from "classnames";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

export type NavButtonProps = {
  href: string;
  label: string;
};

const NavButton = ({ href, label }: NavButtonProps) => {
  return (
    <li className="nav-link">
      <a href={href} className="font-medium relative group">
        <span className="inline-block relative z-[1] group-hover:scale-110 transition-all duration-150">{label}</span>
      </a>
    </li>
  );
};

const DesktopNav = () => {
  const [isShadowOn, setIsShadowOn] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [500, 100], [0.9, 0], { clamp: true });
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsShadowOn(latest >= 100);
  });

  return (
    <nav
      className={classNames(
        "hidden sm:flex fixed z-[9] top-0 left-0 w-full items-center justify-between px-10 py-3 text-[3vw] md:text-lg text-white font-bold font-body [text-shadow:0px_0px_5px_rgba(0,0,0,1)]",
        isShadowOn ? "[box-shadow:0px_5px_20px_10px_rgba(0,0,0,0.01)]" : "shadow-none"
      )}
    >
      <motion.div
        style={{ opacity: opacity }}
        className="absolute z-[0] top-0 left-0 w-full h-full bg-gradient-to-b from-black/[0.03] via-black/[0.02] to-black/[0.01]"
      />
      <motion.div
        style={{ opacity: opacity }}
        className="absolute z-[1] top-0 left-0 w-full h-full bg-transparent backdrop-blur-md"
      />
      <ul className="relative z-[2] nav-links flex items-center justify-between w-full md:max-w-md">
        <NavButton href="#skills" label="Skills" />
        <NavButton href="#career" label="Career" />
        <NavButton href="#projects" label="Projects" />
        <NavButton href="#education" label="Education" />
      </ul>
      <a
        href="#contact"
        className="relative z-[1] hidden md:inline-block border-2 border-white rounded-full py-[2vw] px-[6vw] md:py-2 md:px-6 hover:bg-white hover:text-green-dark [text-shadow:none] transition-colors duration-500"
      >
        Contact
      </a>
    </nav>
  );
};

export default DesktopNav;
