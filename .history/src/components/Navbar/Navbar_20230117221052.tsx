import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1>Michał Miłek</h1>
      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>
          <button>Skills</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
