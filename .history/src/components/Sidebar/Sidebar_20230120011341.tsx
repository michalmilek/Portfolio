import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import "./Sidebar.scss";
import { motion as m } from "framer-motion";

const Sidebar = () => {
  return (
    <m.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`sidebar`}>
      <a href="#Home">
        <button>
          R<br />
          e<br />
          t<br />
          u<br />
          r<br />n<br />
          <br /> to
          <br /> <br />
          t<br />
          o<br />p
        </button>
      </a>
      <div className="icons">
        <a href="https://github.com/michalmilek">
          <Icon icon="mdi:github" />
        </a>
        <a href="https://www.facebook.com/michal.m1337/">
          <Icon icon="ic:baseline-facebook" />
        </a>
        <a href="https://www.instagram.com/michalmilekk/">
          <Icon icon="mdi:instagram" />
        </a>
        <a href="https://www.linkedin.com/notifications/?filter=all">
          <Icon icon="mdi:linkedin" />
        </a>
      </div>
    </m.nav>
  );
};

export default Sidebar;
