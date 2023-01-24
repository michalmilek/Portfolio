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
        <m.li
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5, type = "tweens" }}>
          Home
        </m.li>
        <m.li
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}>
          About
        </m.li>
        <m.li
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}>
          Projects
        </m.li>
        <m.li
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}>
          Contact
        </m.li>
      </ul>

      <button onClick={() => setIsMobileOpen(false)} className="exit">
        &times;
      </button>
    </m.div>
  );
};

export default MobileMenu;
