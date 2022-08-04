import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./red.scss";
function RedCircle() {
  useEffect(() => {
    setTimeout(() => {
      gsap.to(".red-circle", {
        scale: "1",
        transformOrigin: "0,100%",
        scrollTrigger: {
          id: "red",
          trigger: ".red-circle",
          scroller: "#main-container",
          scrub: true,
          markers: true,
        },
      });
    });
    ScrollTrigger.refresh();
  }, []);
  return (
    <div data-scroll-section className="red-circle-container">
      <span className="red-circle"></span>
    </div>
  );
}

export default RedCircle;
