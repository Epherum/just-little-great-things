import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Title() {
  let fontcolor = "#F7D395";
  useEffect(() => {
    setTimeout(() => {
      gsap.to(".hiii", {
        x: -500,
        y: -500,
        duration: 4,
        scrollTrigger: {
          id: "circle",
          trigger: ".hiii",
          scroller: "#main-container",
          toggleActions: "restart pause reverse reset",

          scrub: 1,
        },
      });
      gsap.to(".hiii2", {
        x: -500,
        y: -500,
        duration: 4,
        scrollTrigger: {
          id: "circle",
          trigger: ".hiii2",
          scroller: "#main-container",
          toggleActions: "restart pause reverse reset",

          scrub: 2,
        },
      });
      gsap.to(".hiii3", {
        x: -500,
        y: -500,
        duration: 4,
        scrollTrigger: {
          id: "circle",
          trigger: ".hiii3",
          scroller: "#main-container",
          toggleActions: "restart pause reverse reset",

          scrub: 3,
        },
      });
      gsap.to(".hiii4", {
        x: -500,
        y: -500,
        duration: 4,
        scrollTrigger: {
          id: "circle",
          trigger: ".hiii4",
          scroller: "#main-container",
          toggleActions: "restart pause reverse reset",

          scrub: 4,
        },
      });
      gsap.to(".hiii5", {
        x: -500,
        y: -500,
        duration: 4,
        scrollTrigger: {
          id: "circle",
          trigger: ".hiii5",
          scroller: "#main-container",
          toggleActions: "restart pause reverse reset",

          scrub: 5,
        },
      });
      gsap.to(".hiii6", {
        x: -500,
        y: -500,
        duration: 4,
        scrollTrigger: {
          id: "circle",
          trigger: ".hiii6",
          scroller: "#main-container",
          toggleActions: "restart pause reverse reset",

          scrub: 6,
        },
      });
    });
    ScrollTrigger.refresh();
  }, []);
  return (
    <div>
      <motion.div
        className="hiii"
        style={{
          position: "absolute",
          bottom: "-12vw",
          right: "8vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></motion.div>
      {/* 2 */}
      <motion.div
        className="hiii2"
        style={{
          position: "absolute",
          bottom: "-14vw",
          right: "6vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></motion.div>
      {/* 3 */}
      <motion.div
        className="hiii3"
        style={{
          position: "absolute",
          bottom: "-16vw",
          right: "4vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></motion.div>
      {/* 4 */}
      <motion.div
        className="hiii4"
        style={{
          position: "absolute",
          bottom: "-18vw",
          right: "2vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></motion.div>
      {/* 5 */}
      <motion.div
        className="hiii5"
        style={{
          position: "absolute",
          bottom: "-20vw",
          right: "0vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></motion.div>
      {/* 6 */}
      <motion.div
        className="hiii6"
        style={{
          position: "absolute",
          bottom: "-22vw",
          right: "-2vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></motion.div>

      <div
        style={{
          position: "absolute",
          top: "30vh",
          left: "20px",
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          width: "65vw",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0vw",
            left: "0vw",
            height: "11.3vw",
            width: "60vw",
            overflow: "hidden",
          }}
        >
          <motion.h1
            style={{
              fontSize: "13.5vw",
              textAlign: "center",
              letterSpacing: "6px",
              lineHeight: "13.5vw",
              margin: "0",
              fontWeight: "400",
              color: fontcolor,
              cursor: "default",
            }}
          >
            <motion.div
              initial={{ y: 170 }}
              whileInView={{ y: -300 }}
              transition={{ ease: "easeOut", duration: 1.3 }}
              style={{
                position: "absolute",
                top: "0vw",
                left: "12vw",
              }}
            >
              Featured
            </motion.div>

            <motion.div
              initial={{ y: 170 }}
              whileInView={{ y: 0 }}
              transition={{ ease: "easeOut", duration: 1, delay: 0.2 }}
              style={{
                position: "absolute",
                top: "0vw",
                left: "12vw",
              }}
            >
              Featured
            </motion.div>
          </motion.h1>
        </div>
        <br />
        <div
          style={{
            position: "absolute",
            top: "14vw",
            left: "3vw",
            height: "14vw",
            width: "60vw",
            overflow: "hidden",
          }}
        >
          <motion.h1
            style={{
              fontSize: "13.5vw",
              textAlign: "center",
              letterSpacing: "6px",
              lineHeight: "13.5vw",
              margin: "0",
              fontWeight: "400",
              color: fontcolor,
              cursor: "default",
            }}
          >
            <motion.div
              initial={{ y: -200 }}
              whileInView={{ y: 0 }}
              transition={{
                ease: "easeOut",
                duration: 0.8,
                delay: 0.2,
              }}
            >
              Works
            </motion.div>
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default Title;
