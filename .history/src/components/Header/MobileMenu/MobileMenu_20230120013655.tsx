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
        <a href="#Home">
          <m.li
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5, type: "tween" }}
            onClick={() => setIsMobileOpen(false)}>
            Home
          </m.li>
        </a>
        <a href="#About">
          <m.li
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.5, type: "tween" }}
            onClick={() => setIsMobileOpen(false)}>
            About
          </m.li>
        </a>
        <a href="#Projects">
          <m.li
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5, type: "tween" }}
            onClick={() => setIsMobileOpen(false)}>
            Projects
          </m.li>
        </a>
        <a href="#Contact">
          <m.li
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, type: "tween" }}
            onClick={() => setIsMobileOpen(false)}>
            Contact
          </m.li>
        </a>
      </ul>

      <m.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.5, type: "tween" }}
        onClick={() => setIsMobileOpen(false)}
        className="exit">
        &times;
      </m.button>
    </m.div>
  );
};

export default MobileMenu;
