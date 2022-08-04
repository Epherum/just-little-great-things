import { motion } from "framer-motion";

function Title({ loco }) {
  let fontcolor = "#F7D395";

  return (
    <div>
      <motion.div
        initial={{ x: -800, y: -800 }}
        whileInView={{ x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.9, delay: 2.6 }}
        style={{
          position: "absolute",
          bottom: "7vw",
          right: "24vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></motion.div>
      {/* 2 */}
      <motion.div
        initial={{ x: -800, y: -800 }}
        whileInView={{ x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.8, delay: 2.4 }}
        style={{
          position: "absolute",
          bottom: "4vw",
          right: "19vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></motion.div>
      {/* 3 */}
      <motion.div
        initial={{ x: -800, y: -800 }}
        whileInView={{ x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.7, delay: 2.3 }}
        style={{
          position: "absolute",
          bottom: "1vw",
          right: "14vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></motion.div>
      {/* 4 */}
      <motion.div
        initial={{ x: -800, y: -800 }}
        whileInView={{ x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.6, delay: 2.2 }}
        style={{
          position: "absolute",
          bottom: "-2vw",
          right: "9vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></motion.div>
      {/* 5 */}
      <motion.div
        initial={{ x: -800, y: -800 }}
        whileInView={{ x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.5, delay: 2.1 }}
        style={{
          position: "absolute",
          bottom: "-5vw",
          right: "4vw",
          height: "25.7vw",
          width: "25.7vw",
          backgroundColor: " rgba(255,255,255,.09)",
          borderRadius: "50%",
        }}
      ></motion.div>
      {/* 6 */}
      <motion.div
        initial={{ x: -800, y: -800 }}
        whileInView={{ x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.4, delay: 2 }}
        style={{
          position: "absolute",
          bottom: "-8vw",
          right: "-1vw",
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
