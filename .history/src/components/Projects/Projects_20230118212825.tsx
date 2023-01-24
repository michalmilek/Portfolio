import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

const projects = [
  {
    title: "Github Finder",
    desc: "Application connected with Github API. Shows information like followers, followed, last 5 repositories etc. Has option to change language and theme",
    libs: ["Github API", "Context API", "Sass", "Axios"],
  },
  {
    title: "Blog App",
    desc: "Application connected with Github API. Shows information like followers, followed, last 5 repositories etc. Has option to change language and theme",
    libs: ["Github API", "Context API", "Sass", "Axios"],
  },
];

const Projects = () => {
  return (
    <div>
      <h1>My Projects!</h1>
      {projects.map((project: any, index: number) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};

export default Projects;
