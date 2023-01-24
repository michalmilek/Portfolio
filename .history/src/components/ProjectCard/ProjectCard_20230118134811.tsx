import React from "react";
import "./ProjectCard.scss";

const ProjectCard = () => {
  return (
    <div className="projectCard">
      <h1 className="projectCard_h1">TITLE</h1>
      <p>DESCRIPTION</p>
      <img
        className="projectImg"
        src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t9ur9cc1khkup1dmcbzd/IMGWorldsofAdventure.webp"
        alt="project"
      />
      <div>
        <h2>LIBRARIES:</h2>
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
