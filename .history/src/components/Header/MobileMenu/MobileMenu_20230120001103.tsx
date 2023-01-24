import React from "react";
import "./MobileMenu.scss";
import { motion as m } from "framer-motion";

const MobileMenu = ({ setIsMobileOpen }: any) => {
  return (
    <m.div
      initial={{ x: -700 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 1 }}
      className="mobileMenu">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <button onClick={() => setIsMobileOpen(false)} className="exit">
        &times;
      </button>
    </m.div>
  );
};

export default MobileMenu;
