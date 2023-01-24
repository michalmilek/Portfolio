import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1>Michał Miłek</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </header>
  );
};

export default Header;
