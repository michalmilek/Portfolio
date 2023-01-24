import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Project.scss";
import { Icon } from "@iconify/react";
import { motion as m, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  const controls = useAnimation();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  useEffect(() => {
    if (inView1) {
      controls.start("visible");
    }
    if (!inView1) {
      controls.start("hidden");
    }
  }, [controls, inView1]);

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
    <div className="projects">
      <h1 className="projects_Header">My Projects!</h1>
      <div className="projectsContainer">
        <m.ProjectCard
          className="aboutContainer"
          initial="hidden"
          animate={controls}
          variants={boxVariants}
          project={projects[0]}
        />
      </div>

      <h2>
        I also have some smaller projects at my Github. Press icon below to go
        to my Github.
      </h2>

      <Icon icon="mdi:github" />
    </div>
  );
};

export default Projects;
