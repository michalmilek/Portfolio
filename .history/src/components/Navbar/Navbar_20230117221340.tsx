import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1>Michał Miłek</h1>
      <ul>
        <li>
          <a href="">About</a>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </li>
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
