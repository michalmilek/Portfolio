import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import "./Sidebar.scss";
import { motion as m } from "framer-motion";

const Sidebar = () => {
  return (
    <m.nav
      /* initial={{ opacity: 0 }} */
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`sidebar`}>
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
      <Icon icon="mdi:github" />
      <Icon icon="ic:baseline-facebook" />
      <Icon icon="mdi:instagram" />
      <Icon icon="mdi:linkedin" />
    </m.nav>
  );
};

export default Sidebar;
