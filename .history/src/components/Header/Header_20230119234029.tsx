import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(true);
  return (
    <>
      <header id="Home" className="header">
        <h1>Michał Miłek</h1>
        <ul>
          <a href="#Home">
            <li>Home</li>
          </a>
          <a href="#About">
            <li>About</li>
          </a>
          <a href="#Projects">
            <li>Projects</li>
          </a>
          <a href="#Contact">
            <li>Contact</li>
          </a>
        </ul>
      </header>
      {isMobileOpen && <div className="mobileMenu">mobile</div>}
    </>
  );
};

export default Header;
