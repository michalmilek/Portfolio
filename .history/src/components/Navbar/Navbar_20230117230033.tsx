import React, { useState } from "react";
import "./Navbar.scss";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  return (
    <nav className="nav">
      <h1>Michał Miłek</h1>
      <ul className="list">
        <Icon icon="uil:bars" className="bars" />
        <li>
          <a href="">
            <button className="btn draw-border">About</button>
          </a>
        </li>
        <li>
          <button className="btn draw-border">Projects</button>
        </li>
        <li>
          <button className="btn draw-border">Contact</button>
        </li>
        <li>
          <a href="#">
            <button className="btn draw-border">Skills</button>
          </a>
        </li>
      </ul>

      {menu && (
        <div className="mobileMenu">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
