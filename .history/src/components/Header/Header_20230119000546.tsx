import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1>Michał Miłek</h1>
      <ul>
        <a href="#Home">
          <li>Home</li>
        </a>
        <a href="#About">
          <li>About</li>
        </a>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </header>
  );
};

export default Header;
