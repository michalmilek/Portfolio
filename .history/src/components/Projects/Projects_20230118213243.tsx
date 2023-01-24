import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Project.scss";

const projects = [
  {
    title: "Github Finder",
    desc: "Application connected with Github API. Shows information like followers, followed, last 5 repositories etc. Has option to change language and theme",
    libs: ["Github API", "Context API", "Sass", "Axios"],
  },
  {
    title: "Blog App",
    desc: "Blog application made with Sanity as backend. Has option to filter by categorieres, displaying default text parameters for h1, h2, etc. Application was made with NextJS 13.",
    libs: ["Github API", "Context API", "Sass", "Axios"],
  },
];

const Projects = () => {
  return (
    <div>
      <h1>My Projects!</h1>
      <div className="projects">
        {projects.map((project: any, index: number) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
