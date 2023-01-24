import React from "react";
import "./About.scss";
import Image from "../../assets/MMimg.jpg";
import { motion as m, AnimatePresence } from "framer-motion";

const About = () => {
  return (
    <section className="about">
      <m.div
        className="aboutContainer"
        initial={{ x: -600, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 3 }}>
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

        {/*         <div className="mmContainer">
          <img src={Image} className="mmAvatar" alt="MM" />
          <span>Hover me!</span>
        </div> */}
      </m.div>
    </section>
  );
};

export default About;
