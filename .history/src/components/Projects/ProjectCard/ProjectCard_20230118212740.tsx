import React from "react";
import { Icon } from "@iconify/react";
import "./ProjectCard.scss";

const ProjectCard = ({ project }) => {
  return (
    <div className="projectCard">
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
