import "./navbar.scss";
import { motion } from "framer-motion";
function Navbar() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 3.2;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  return (
    <nav className="navbar-container" data-scroll-section>
      <ul>
        <li className="navbar-logo">
          <motion.a
            initial={{ y: 90 }}
            animate={{ y: -90 }}
            transition={{ ease: "easeOut", duration: 1, delay: 2.7 }}
            className="logo-1"
            href=""
          >
            W/2
          </motion.a>
          <motion.a
            initial={{ y: 90 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 1, delay: 3 }}
            className="logo-2"
            href=""
          >
            W/2
          </motion.a>
        </li>
        <motion.li
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 3.2 }}
          className="navbar-creative"
        >
          Creative Association <br /> Of Photographers
        </motion.li>
        <motion.li className="navbar-touch">
          <motion.svg
            width="9.4vw"
            height="2.6vw"
            fill="#7cadb4"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate="visible"
          >
            <g>
              <motion.rect
                x="0"
                y="0"
                fill="#7cadb4"
                width="9.4vw"
                height="2.6vw"
                stroke="black"
                variants={draw}
                custom={1}
              ></motion.rect>
              <motion.text
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.5, delay: 3.3 }}
                x="2vw"
                y="1.6vw"
                fontFamily="Roboto"
                fontSize=".9vw"
                fontWeight="500"
                fill="black"
              >
                Get In Touch
              </motion.text>
            </g>
          </motion.svg>
        </motion.li>
      </ul>
    </nav>
  );
}

export default Navbar;
