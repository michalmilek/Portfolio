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
          W lipcu 2022 ukończyłem studia na kierunku Zarządzanie i Inżynieria
          Produkcji. Swoją przygodę z programowaniem rozpocząłem od języka C++ i
          JavaScript. Z biegiem czasu bardziej spodobał mi się JavaScript,
          dlatego zdecydowalem, że w tym kierunku bardziej się będę rozwijał.
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
