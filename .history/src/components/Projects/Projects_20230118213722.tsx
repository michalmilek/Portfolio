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
    libs: ["NextJS", "Sanity", "TailwindCSS", "Groq"],
  },
  {
    title: "E-Commerce APP",
    desc: "E-Commerce App made with Strapi as backend and Stripe for payment.",
    libs: ["Strapi", "Stripe", "TailwindCSS", "Redux"],
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects!</h1>
      <div className="projectsContainer">
        {projects.map((project: any, index: number) => (
          <ProjectCard project={project} />
        ))}
      </div>

      <h2>
        I also have some smaller projects at my Github. Press button bellow to
        go to my Github.
      </h2>
    </div>
  );
};

export default Projects;
