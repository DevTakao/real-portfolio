import classNames from "classnames";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { CSSProperties, useState } from "react";
import LeafIcon from "@/assets/images/leaf-icon.svg";

export type NavButtonProps = {
  href: string;
  label: string;
};

const NavButton = ({ href, label }: NavButtonProps) => {
  return (
    <li className="nav-link">
      <a href={href} className="font-medium relative group">
        <span className="relative z-[1]">{label}</span>
        <span
          style={{ "--bg-leaf": `url(${LeafIcon})` } as CSSProperties}
          className="hidden md:block pointer-events-none absolute z-[0] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rotate-[120deg] h-[300%] w-[3.5rem] object-contain [background-image:var(--bg-leaf)] bg-center bg-contain bg-no-repeat
      opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300 drop-shadow-2xl"
        />
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
        "hidden sm:flex fixed z-[9] top-0 left-0 w-full items-center justify-between px-10 py-3 text-[3vw] md:text-lg text-white font-bold font-body [text-shadow:0px_-5px_10px_rgba(0,0,0,1)]",
        isShadowOn ? "shadow-lg" : "shadow-none"
      )}
    >
      <motion.div style={{ opacity: opacity }} className="absolute z-[0] top-0 left-0 w-full h-full bg-green-dark" />
      <ul className="relative z-[1] nav-links flex items-center justify-between w-full md:max-w-md">
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
