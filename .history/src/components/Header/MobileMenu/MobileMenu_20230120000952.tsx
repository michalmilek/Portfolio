import React from "react";
import "./MobileMenu.scss";

const MobileMenu = ({ setIsMobileOpen }: any) => {
  return (
    <div className="mobileMenu">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <button onClick={() => setIsMobileOpen(false)} className="exit">
        &times;
      </button>
    </div>
  );
};

export default MobileMenu;
