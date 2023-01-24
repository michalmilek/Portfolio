import React, { useEffect, useRef } from "react";
import "./About.scss";
import Image from "../../assets/MMimg.jpg";
import { motion as m, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const [ref1, inView1] = useInView();

  useEffect(() => {
    if (inView1) {
      controls.start("visible");
    }
    if (!inView1) {
      controls.start("hidden");
    }
  }, [controls, inView1]);

  const boxVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="about">
      <m.div
        ref={ref1}
        className="aboutContainer"
        initial="hidden"
        animate={controls}
        variants={boxVariants}
        //initial={{ x: -600, opacity: 0 }}
        //animate={{ x: 0, opacity: 1 }}
        //</section>transition={{ delay: 3 }}
      >
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

        <button className="downloadCV">Download CV</button>
      </m.div>
    </section>
  );
};

export default About;
