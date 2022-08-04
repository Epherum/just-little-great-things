import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function useLocoScroll() {
  const locoScrolll = useRef(null);
  useEffect(() => {
    const scrollEl = document.querySelector("#main-container");
    let locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });
    locoScroll.on("scroll", ({ limit, scroll }) => {
      const progress = scroll.y;
      locoScrolll.current = progress;
    });
  }, []);
  return locoScrolll;
}
