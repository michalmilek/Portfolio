import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import "./Header.scss";
import MobileMenu from "./MobileMenu/MobileMenu";
import { Icon } from "@iconify/react";

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(true);
  return (
    <>
      <header id="Home" className="header">
        <h1>Michał Miłek</h1>
        <Icon icon="uil:bars" />
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
      <AnimatePresence>
        {isMobileOpen && <MobileMenu setIsMobileOpen={setIsMobileOpen} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
