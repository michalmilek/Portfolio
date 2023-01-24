import React from "react";
import "./MobileMenu.scss";

const MobileMenu = () => {
  return (
    <div className="mobileMenu">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <button>&times;</button>
    </div>
  );
};

export default MobileMenu;
