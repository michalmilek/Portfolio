import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1>Michał Miłek</h1>
      <ul>
        <li>
          <a href="">
            <button className="btn draw-border">About</button>
          </a>
        </li>
        <li>
          <button className="btn draw-border">Projects</button>
        </li>
        <li>
          <button className="btn draw-border">Contact</button>
        </li>
        <li>
          <a href="#">
            <button className="btn draw-border">Skills</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
