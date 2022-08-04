import "./moreWorks.scss";
import { motion } from "framer-motion";
function MoreWorks() {
  return (
    <div className="more-works-container" data-scroll-section>
      <motion.div
        initial={{ x: -800, y: -800 }}
        animate={{ x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.9, delay: 2.6 }}
        style={{
          position: "absolute",
          bottom: "7vw",
          left: "24vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></motion.div>
      {/* 2 */}
      <motion.div
        initial={{ x: -800, y: -800 }}
        animate={{ x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.8, delay: 2.4 }}
        style={{
          position: "absolute",
          bottom: "4vw",
          left: "19vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></motion.div>
      {/* 3 */}
      <motion.div
        initial={{ x: -800, y: -800 }}
        animate={{ x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.7, delay: 2.3 }}
        style={{
          position: "absolute",
          bottom: "1vw",
          left: "14vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></motion.div>
      {/* 4 */}
      <motion.div
        initial={{ x: -800, y: -800 }}
        animate={{ x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.6, delay: 2.2 }}
        style={{
          position: "absolute",
          bottom: "-2vw",
          left: "9vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></motion.div>
      {/* 5 */}
      <motion.div
        initial={{ x: -800, y: -800 }}
        animate={{ x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.5, delay: 2.1 }}
        style={{
          position: "absolute",
          bottom: "-5vw",
          left: "4vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></motion.div>
      {/* 6 */}
      <motion.div
        // initial={{ x: -800, y: -800 }}
        // animate={{ x: 0, y: 0 }}
        // transition={{ ease: "easeOut", duration: 1.4, delay: 2 }}
        style={{
          position: "absolute",
          bottom: "-8vw",
          left: "-1vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></motion.div>
      <h1 data-scroll data-scroll-speed="5" data-scroll-direction="horizontal">
        See More Great Art My Dude
      </h1>
    </div>
  );
}

export default MoreWorks;
