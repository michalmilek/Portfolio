import React from "react";
import "./MobileMenu.scss";
import { motion as m } from "framer-motion";

const MobileMenu = ({ setIsMobileOpen }: any) => {
  return (
    <m.div
      initial={{ x: 2500 }}
      animate={{ x: 0 }}
      exit={{ x: 3000 }}
      transition={{ type: "spring", duration: 1 }}
      className="mobileMenu">
      <ul>
        <m.li>Home</m.li>
        <m.li>About</m.li>
        <m.li>Projects</m.li>
        <m.li initial={{ y: -150, opacity: 0 }}>Contact</m.li>
      </ul>

      <button onClick={() => setIsMobileOpen(false)} className="exit">
        &times;
      </button>
    </m.div>
  );
};

export default MobileMenu;
