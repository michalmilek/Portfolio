import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1>Michał Miłek</h1>
      <ul>
        <li>
          <a href="">About</a>
        </li>
        <li>Projects</li>
        <li>Contact</li>
        <li>
          <button className="btn draw-border">Skills</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
