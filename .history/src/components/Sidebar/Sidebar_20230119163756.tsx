import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import "./Sidebar.scss";

const Sidebar = () => {
  const nav = useRef();

  return (
    <nav className={`sidebar`}>
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
    </nav>
  );
};

export default Sidebar;
