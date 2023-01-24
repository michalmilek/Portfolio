import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import "./ProjectCard.scss";
import { AnimatePresence, motion as m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectCard = ({ project }: any) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const boxVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };

  return (
    <AnimatePresence initial={false}>
      <m.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={boxVariants}
        className="projectCard">
        <h1>{project.title}</h1>
        <p>{project.desc}</p>
        <ul>
          {project.libs.map((lib: any) => (
            <li>{lib}</li>
          ))}
        </ul>
        <div className="icons">
          <Icon icon="mdi:github" />
          <Icon icon="bx:link-external" />
        </div>
      </m.div>
    </AnimatePresence>
  );
};

export default ProjectCard;
