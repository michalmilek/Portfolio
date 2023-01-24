import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <div>
        <h1>Hi, my name is Michał Miłek.</h1>
        <h2>
          I'm learning webdeveloping to become front-end developer. Currently I
          am learning typescript and communication with an external API.
          Libraries/frameworks I worked with:
        </h2>
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
        </ul>
      </div>
    </section>
  );
};

export default About;
