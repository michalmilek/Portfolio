import React from "react";
import { Icon } from "@iconify/react";

const ProjectCard = () => {
  return (
    <div>
      <h1>Github Finder</h1>
      <p>
        Application connected with Github API. Shows information like followers,
        followed, last 5 repositories etc. Has option to change language and
        theme.
      </p>
      <ul>
        <li>Github API</li>
        <li>ContextAPI</li>
        <li>Sass</li>
        <li>Axios</li>
      </ul>
      <div className="icons">
        <Icon icon="mdi:github" />
      </div>
    </div>
  );
};

export default ProjectCard;
