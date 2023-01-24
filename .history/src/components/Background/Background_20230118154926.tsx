import React, { useEffect } from "react";
import "./Background.scss";
import { motion as m, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Background = () => {
  const [ref1, inView1, entry1] = useInView();

  useEffect(() => {
    if (inView1) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="background">
      <img
        src="https://free4kwallpapers.com/uploads/originals/2020/01/07/animated-colorful-landscape-wallpaper.jpg"
        alt="background"
        id="backgroundImg"
      />
      <m.img
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "100vw" }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
        ref={ref1}
        src="https://www.clipartmax.com/png/middle/1-12099_cartoon-airplane-png-airplane-clipart-transparent-background.png"
        alt="planeImg"
        id="planeImg"
      />
      <img
        src="https://toppng.com/uploads/preview/clipart-download-simple-man-character-bas-the-home-white-board-animated-character-11563057277ulwswqm48l.png"
        alt="person"
        id="personImg"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AoADTWW5BmGepQuIEVF8iGLViaFlCmk05w&usqp=CAU"
        alt="tree"
        id="treeImg"
      />

      <div className="aboutMe">
        <p>Hi, my name is</p>
        <h1>Michał Miłek</h1>
        <h2>
          I am a beginner front-end developer. Currently, I am learning
          TypeScript and API communication. If you are interested in learning
          more about me click on the button below.
        </h2>
        <button>About Me</button>
      </div>
    </section>
  );
};

export default Background;