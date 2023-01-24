import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import "./Sidebar.scss";

const Sidebar = () => {
  const nav = useRef();

  useLayoutEffect(() => {
    console.log(nav);
    const navAnimate = nav.current.getBoundingClientRect().top;
    console.log(navAnimate);
    const onScroll = () => {
      if (navAnimate < window.scrollY) {
        console.log("ok");
        nav.current.style.position = "fixed";
        nav.current.style.bot = 0;
        nav.current.style.left = 0;
      } else {
        nav.current.style.position = "absolute";
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav ref={nav} className={`sidebar`}>
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
