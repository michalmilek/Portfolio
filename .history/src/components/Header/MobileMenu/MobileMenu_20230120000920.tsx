import React from "react";
import "./MobileMenu.scss";

const MobileMenu = ({ setIsMobileOpen }:((value):any => void)) => {
  return (
    <div className="mobileMenu">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <button className="exit">&times;</button>
    </div>
  );
};

export default MobileMenu;
