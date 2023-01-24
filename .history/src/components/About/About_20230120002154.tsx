import React, { useEffect, useRef, useState } from "react";
import "./About.scss";
import Image from "../../assets/MMimg.jpg";
import { motion as m, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CV from "./CV_Michal_Milek.pdf";

function FadeInWhenVisible({ children }: any) {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", duration: 1 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -600 },
      }}>
      {children}
    </m.div>
  );
}

const About = () => {
  return (
    <section className="about">
      {/* <FadeInWhenVisible> */}
      <div className="aboutContainer" id="About">
        <h1>Hi, my name is Michał Miłek.</h1>
        <h2>
          I graduated in July 2022 with a degree in Production Management and
          Engineering. I started my programming adventure with C++ and
          JavaScript. Over time, I liked JavaScript more, so I decided to
          develop more in this direction.
        </h2>
        <h3>Libraries/frameworks I worked with:</h3>
        <ul>
          <li>React</li>
          <li>NextJS</li>
          <li>React Router DOM</li>
          <li>Redux</li>
          <li>ContextAPI</li>
          <li>RequestAPI</li>
          <li>Groq</li>
          <li>Sanity</li>
          <li>Stripe</li>
          <li>Sass</li>
          <li>TailwindCSS</li>
          <li>JavaScript</li>
          <li>HTML</li>
        </ul>

        <div className="mmAvatar">
          <img src={Image} alt="" />
          <span>Hover me!</span>
        </div>

        <a href={CV} download="MichalMilekCV">
          <button className="downloadCV">Download CV</button>
        </a>
      </div>
      {/* </FadeInWhenVisible> */}
    </section>
  );
};

export default About;
