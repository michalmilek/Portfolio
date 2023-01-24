import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import "./ProjectCard.scss";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectCard = ({ project }: any) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const boxVariants = {
    hidden: { opacity: 0, x: -600 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };

  return (
    <div ref={ref} className="projectCard">
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
    </div>
  );
};

export default ProjectCard;
