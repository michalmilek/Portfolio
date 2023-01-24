import React, { useState } from "react";
import "./Navbar.scss";
import { Icon } from "@iconify/react";
import { motion as m, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="nav">
      <m.h1 initial={{ y: 500 }} animate={{ y: 0 }}>
        Michał Miłek
      </m.h1>
      <Icon icon="uil:bars" className="bars" onClick={() => setMenu(true)} />
      <ul className="list">
        <m.li initial={{ x: 700 }} animate={{ x: 0 }} transition={{ delay: 1 }}>
          <a href="">
            <button className="btn draw-border">About</button>
          </a>
        </m.li>
        <m.li
          initial={{ x: 700 }}
          animate={{ x: 0 }}
          transition={{ delay: 1.5 }}>
          <button className="btn draw-border">Projects</button>
        </m.li>
        <m.li initial={{ x: 700 }} animate={{ x: 0 }} transition={{ delay: 2 }}>
          <button className="btn draw-border">Contact</button>
        </m.li>
        <m.li
          initial={{ x: 700 }}
          animate={{ x: 0 }}
          transition={{ delay: 2.5 }}>
          <a href="#">
            <button className="btn draw-border">Skills</button>
          </a>
        </m.li>
      </ul>
      <AnimatePresence>
        {menu && (
          <m.div
            key={1}
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 700 }}
            className="mobileMenu">
            <ul className="mobileMenu_list">
              <li>
                home
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </li>
              <li>
                products
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </li>
              <li>
                services
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </li>
              <li>
                contact
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </li>
            </ul>
            <button className="exit" onClick={() => setMenu(false)}>
              &times;
            </button>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
