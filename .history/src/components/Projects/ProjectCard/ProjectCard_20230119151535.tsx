import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import "./ProjectCard.scss";
import { AnimatePresence, motion as m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function FadeInWhenVisible({ children }: any) {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.3 }}
      variants={{
        visible: { scale: 1 },
        hidden: { scale: 0 },
      }}>
      {children}
    </m.div>
  );
}

const ProjectCard = ({ project }: any) => {
  return (
    <div
      /*         initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        animate={controls}
        variants={boxVariants} */
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
    </div>
  );
};

export default ProjectCard;
