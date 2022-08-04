import "./inside.scss";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Inside() {
  useEffect(() => {
    setTimeout(() => {
      gsap.to(".red-circle", {
        scale: "1",
        transformOrigin: "0,100%",
        onComplete: foo,
        onReverseComplete: bar,
        scrollTrigger: {
          id: "red",
          trigger: ".red-circle",
          scroller: "#main-container",
          scrub: true,
        },
      });
    });
    ScrollTrigger.refresh();
  }, []);
  function foo() {
    document.body.style.backgroundColor = "#ad807c";
  }
  function bar() {
    document.body.style.backgroundColor = "#7cadb4";
  }
  return (
    <section className="inside-container" data-scroll-section>
      <span className="red-circle"></span>
      <h1
        className="inside-title"
        data-scroll
        data-scroll-speed="2"
        data-scroll-direction="vertical"
      >
        The Inside Look
      </h1>
      <div className="inside-photos">
        <motion.div>
          <motion.img whileHover={{ scale: 1.1 }} src="2.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            officiis, ullam iusto id quae suscipit illum sapiente tempora minima
            quos tenetur, eaque deleniti eum dicta ad cupiditate velit in
            voluptates.
          </p>
        </motion.div>
        <div>
          <motion.img whileHover={{ scale: 1.1 }} src="3.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            officiis
          </p>
        </div>
      </div>
      <div className="inside-about-us">
        <p className="inside-about-us-p1">
          <hr className="inside-about-us-hr" color="black" /> Get To Know Our
          <br /> Creative Team
        </p>
        <div>
          <p className="inside-about-us-p2">Read More</p>
          <h1>About Us</h1>
        </div>
      </div>
    </section>
  );
}

export default Inside;
