import { ReactNode, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import classNames from "classnames";

const fadeInVariants = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "linear",
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "linear",
    },
  },
};

export type FadeInBlockProps = {
  children: ReactNode;
  className?: string;
};

const FadeInBlock = ({ children, className }: FadeInBlockProps) => {
  const [show, setShow] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "start start"] });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.25 && !show) {
      setShow(true);
    }
    if (latest < 0.25 && show) {
      setShow(false);
    }
  });

  return (
    <motion.div
      ref={containerRef}
      className={classNames("fade-in-block", className)}
      variants={fadeInVariants}
      initial="initial"
      animate={show ? "show" : "hide"}
    >
      {children}
    </motion.div>
  );
};

export default FadeInBlock;
