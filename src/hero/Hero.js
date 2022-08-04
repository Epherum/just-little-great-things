import Title from "./Title";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import "./hero.scss";
function Hero(props) {
  const [translate, setTranslate] = useState(`
    ${1000}px
    
  `);
  const el = useRef();
  // Variables ~ Widths
  let elWidth = el.offsetWidth;
  let windowWidth = window.innerWidth;

  // Target: value we want to animate to
  let translateTarget = 0;

  // WithEasing: value we use to animate
  let translateWithEasing = 0;

  // EasingFactor: determines how quick the animation/interpolation goes
  let translateEasingFactor = 1;

  function handleWindowResize(e) {
    elWidth = 1000;
    windowWidth = window.innerWidth;
  }

  function lerp(start, end, factor) {
    return (1 - factor) * start + factor * end;
  }
  const styles = {
    width: translate,
  };

  function animateMe() {
    translateTarget = Math.max(
      1250,
      ((792 - 1536) / 1536) * props.loco.current * 0.2 * -1 + 1250
    );

    translateWithEasing = lerp(
      translateWithEasing,
      translateTarget,
      translateEasingFactor
    );
    setTranslate(`
    ${translateWithEasing}px
    
  `);
    // RAF
    window.requestAnimationFrame(animateMe);
  }

  useEffect(() => {
    animateMe();
  }, []);
  return (
    <div className="hero-container" data-scroll-section>
      <Title />
      <motion.div className="bruh">
        <motion.img
          ref={el}
          style={styles}
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
