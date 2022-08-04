import Title from "./Title";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./hero.scss";
gsap.registerPlugin(ScrollTrigger);
function Hero(props) {
  useEffect(() => {
    setTimeout(() => {
      gsap.to(".bruh-image", {
        width: "110%",
        scrollTrigger: {
          id: "child",
          trigger: ".bruh",
          start: "top 40%",
          scroller: "#main-container",
          scrub: true,
        },
      });
    });
    ScrollTrigger.refresh();
  }, []);
  return (
    <div className="hero-container" data-scroll-section>
      <Title />
      <motion.div className="bruh">
        <motion.img
          className="bruh-image"
          initial={{ scale: 2.5, clipPath: "inset(100% 0% 0% 0%)", rotate: 6 }}
          animate={{ scale: 1, clipPath: "inset(0% 0% 0% 0%)", rotate: 0 }}
          transition={{ ease: "easeOut", duration: 2.8, delay: 1.2 }}
          src="1.jpg"
          alt="model throwing flowers"
        />
      </motion.div>
      <div className="hero-marquee">
        <h1
          data-scroll
          data-scroll-speed="5"
          data-scroll-direction="horizontal"
        >
          Art &amp; Culture At The Sike
        </h1>
      </div>
    </div>
  );
}

export default Hero;
